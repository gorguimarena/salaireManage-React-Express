import { PrismaClient } from "../generated/index.js";
const prisma = globalThis.__prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") {
    globalThis.__prisma = prisma;
}
export default prisma;
//# sourceMappingURL=database.js.map