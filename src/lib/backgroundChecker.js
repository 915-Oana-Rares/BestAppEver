import prisma from "@/lib/prisma.js";

class BackgroundChecker {
    constructor(options = {}) {
        this.checkInterval = options.checkInterval || 5 * 60 * 1000;
        this.checkers = options.checkers || [];
        this.hasStarted = false;
        this.intervalId = null;
        this.prisma = prisma;
    }
    start() {
        if (this.hasStarted)
            return;
        this.runChecks();
        this.intervalId = setInterval(() => this.runChecks(),this.checkInterval);
    }

    async runChecks() {
        console.log("Running background checks");

        for (const checker of this.checkers){
            await checker(this.prisma);
        }
    }

    addChecker(checkerFn) {
        this.checkers.push(checkerFn);
    }
}

const suspiciousActivityChecker = async (prisma) => {

    const suspiciousActivities = await prisma.userOperation.groupBy({
        by: ['userId'],
        _count: { operation: true },
        where: {
            date: {
                gte: new Date(new Date().setHours(0, 0, 0, 0)),
                lte: new Date(new Date().setHours(23, 59, 59, 999))
            }
        },
        having: { operation: { _count: { gt: 50 } } }
    });

    for (const sussyAction of suspiciousActivities) {
        const existingSussyUser = await prisma.suspiciousUser.findUnique({
            where: {
                userId: sussyAction.userId,
            }
        });
        if (!existingSussyUser) {
            await prisma.suspiciousUser.create({
                data: {userId: sussyAction.userId}
            });
            console.log(`Added user ${sussyAction.userId} to suspicious users list`);
        }
    }
}

const checker = new BackgroundChecker({
    checkInterval: 10 * 60 * 1000, // 10 minutes
    checkers: [suspiciousActivityChecker]
});


export default checker;