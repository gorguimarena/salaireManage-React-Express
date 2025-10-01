import { PrismaClient } from "../generated/index.js";
declare global {
    var __prisma: PrismaClient | undefined;
}
declare const prisma: PrismaClient<import("../generated/index.js").Prisma.PrismaClientOptions, never, import("../generated/runtime/library.js").DefaultArgs>;
export default prisma;
//# sourceMappingURL=database.d.ts.map