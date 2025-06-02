
import { PrismaClient } from '@/generated/prisma'

const prisma = global.prisma || new PrismaClient()

export default prisma