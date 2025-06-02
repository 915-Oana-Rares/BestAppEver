const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
    const publisherList = ['DC', "Marvel", 'DarkHorse'];

    await prisma.userOperation.deleteMany({});
    await prisma.userComic.deleteMany({});
    await prisma.admin.deleteMany({});
    await prisma.suspiciousUser.deleteMany({});

    await prisma.user.deleteMany({});
    await prisma.comic.deleteMany({});

    for (let i = 0; i < 100; i++) {
        const comicList = [];
        const userList = [];
        const userComicList = [];

        for (let j = 0; j < 1000; j++) {
            const publisher = publisherList[j % 3];
            const comicName = i + 'Comic' + j;
            const userName = i + 'User' + j;
            const userId = i + 'X' + j;

            comicList.push({ name: comicName, publisher: publisher, writer: 'Bob Kane' });
            userList.push({id: userId, name: userName, email: i + 'email' + j, password: "password" });

            userComicList.push({
                userId: i + 'X0',
                comicName: comicName,
            });
        }

        await prisma.comic.createMany({ data: comicList });
        await prisma.user.createMany({ data: userList });
        await prisma.userComic.createMany({ data: userComicList });

        if (i % 20 === 0)
            console.log(`Batch ${i+1}/100 completed`);
    }

    const firstUser = await prisma.user.findFirst()

    await prisma.admin.create({
        data: {
                userId: firstUser.id
        }
    })
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });