import { PrismaClient } from "@prisma/client";

declare global {
    var prisam: PrismaClient | undefined;
}

const client = globalThis.prisam || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisam = client;

export default client;
