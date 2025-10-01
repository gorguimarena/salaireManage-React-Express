import prisma from "../../config/database.js";
import { hashPassword, comparePassword } from "../../utils/password.js";
import { generateToken } from "../../utils/jwt.js";
import { AppError } from "../../utils/AppError.js";
import type {
  RegisterInput,
  LoginInput,
  UpdateUserInput,
} from "./user.schema.js";

export class UserService {
  static async register(data: RegisterInput) {
    // Vérifie si user existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser)
      throw new AppError("User with this email already exists", 409);

    const hashedPassword = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash: hashedPassword,
        fullName: data.fullName,
        companyId: data.companyId ?? null,
        roleId: data.roleId,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        roleId: true,
        role: { select: { id: true, name: true } },
        companyId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return { user };
  }

  static async login(data: LoginInput) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
      include: {
        company: true,
        role: true,
      },
    });

    if (!user) throw new AppError("Invalid credentials", 401);

    const isPasswordValid = await comparePassword(
      data.password,
      user.passwordHash
    );
    if (!isPasswordValid) throw new AppError("Invalid credentials", 401);

    // Générer token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role.name,
      companyId: user.companyId,
    });

    const { passwordHash: _, company: __, ...userWithoutPassword } = user;
    const userResponse = {
      ...userWithoutPassword,
      role: user.role.name, // Return role as string, not object
    };
    return { user: userResponse, token };
  }


  static async updateUser(id: string, data: UpdateUserInput) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { role: true },
    });

    if (!user) throw new AppError("User not found", 404);

    const updateData: any = {};
    if (data.fullName !== undefined) updateData.fullName = data.fullName;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.companyId !== undefined) updateData.companyId = data.companyId;
    if (data.roleId !== undefined) updateData.roleId = data.roleId;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        role: true,
        company: true,
      },
    });

    const { passwordHash, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }

  static async getAllUsers() {
    return prisma.user.findMany({
      include: {
        role: true,
        company: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        company: true,
      },
    });

    if (!user) throw new AppError("User not found", 404);

    return user;
  }

  static async deleteUser(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) throw new AppError("User not found", 404);

    await prisma.user.delete({
      where: { id },
    });
  }

  static async getUsersByCompany(companyId: string) {
    return prisma.user.findMany({
      where: { companyId },
      include: {
        role: true,
        company: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getRoles() {
    return prisma.role.findMany({
      orderBy: { name: "asc" },
    });
  }
}
