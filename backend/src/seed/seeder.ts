import prisma from "../config/database.js";
import { hashPassword } from "../utils/password.js";
import type { RoleType } from "../generated/index.js";
import type { ContractType } from "../generated/index.js";

interface SeedCompany {
  name: string;
  logoUrl?: string;
  address?: string;
  currency?: string;
  periodType?: "MONTHLY" | "WEEKLY" | "DAILY";
  primaryColor?: string;
  secondaryColor?: string;
}

interface SeedUser {
  email: string;
  password: string;
  fullName: string;
  roleName: "SUPER_ADMIN" | "ADMIN" | "CASHIER";
  companyId?: string;
}

interface SeedEmployee {
  fullName: string;
  position?: string | null;
  contractType: "DAILY" | "HOURLY" | "FIXED" | "FEE";
  salaryOrRate: number;
  bankDetails?: string | null;
  email?: string | null;
  phone?: string | null;
  hireDate?: string | null;
}

const companies: SeedCompany[] = [
  {
    name: "CompanyOne",
    address: "123 Avenue One",
    logoUrl: "",
    primaryColor: "#1E40AF", // Blue
    secondaryColor: "#2563EB",
  },
  {
    name: "CompanyTwo",
    address: "456 Avenue Two",
    logoUrl: "",
    primaryColor: "#DC2626", // Red
    secondaryColor: "#EF4444",
  },
];

const users: SeedUser[] = [
  {
    email: "superadmin@demo.com",
    password: "SuperAdmin123",
    fullName: "Super Admin",
    roleName: "SUPER_ADMIN",
  },
  // Users CompanyOne
  {
    email: "admin1@companyone.com",
    password: "Admin123",
    fullName: "Admin CompanyOne",
    roleName: "ADMIN",
  },
  {
    email: "cashier1@companyone.com",
    password: "Cashier123",
    fullName: "Cashier CompanyOne",
    roleName: "CASHIER",
  },
  // Users CompanyTwo
  {
    email: "admin2@companytwo.com",
    password: "Admin123",
    fullName: "Admin CompanyTwo",
    roleName: "ADMIN",
  },
  {
    email: "cashier2@companytwo.com",
    password: "Cashier123",
    fullName: "Cashier CompanyTwo",
    roleName: "CASHIER",
  },
];

const employees: Record<string, SeedEmployee[]> = {
  CompanyOne: [
    {
      fullName: "John Doe",
      position: "Software Engineer",
      contractType: "FIXED",
      salaryOrRate: 50000,
      email: "john.doe@companyone.com",
      phone: "+221 77 123 4567",
      hireDate: "2023-01-15",
    },
    {
      fullName: "Jane Smith",
      position: "Designer",
      contractType: "FIXED",
      salaryOrRate: 45000,
      email: "jane.smith@companyone.com",
      phone: "+221 77 234 5678",
      hireDate: "2023-02-01",
    },
    {
      fullName: "Bob Johnson",
      position: "Project Manager",
      contractType: "FIXED",
      salaryOrRate: 60000,
      email: "bob.johnson@companyone.com",
      phone: "+221 77 345 6789",
      hireDate: "2022-11-10",
    },
    {
      fullName: "Mike Daily",
      position: "Cleaner",
      contractType: "DAILY",
      salaryOrRate: 5000, // per day
      email: "mike.daily@companyone.com",
      phone: "+221 77 111 2222",
      hireDate: "2023-05-01",
    },
    {
      fullName: "Sarah Hourly",
      position: "Tutor",
      contractType: "HOURLY",
      salaryOrRate: 2000, // per hour
      email: "sarah.hourly@companyone.com",
      phone: "+221 77 333 4444",
      hireDate: "2023-06-01",
    },
    {
      fullName: "Tom Fee",
      position: "Consultant",
      contractType: "FEE",
      salaryOrRate: 100000, // fixed fee
      email: "tom.fee@companyone.com",
      phone: "+221 77 555 6666",
      hireDate: "2023-07-01",
    },
  ],
  CompanyTwo: [
    {
      fullName: "Alice Brown",
      position: "Marketing Specialist",
      contractType: "FIXED",
      salaryOrRate: 40000,
      email: "alice.brown@companytwo.com",
      phone: "+221 77 456 7890",
      hireDate: "2023-03-20",
    },
    {
      fullName: "Charlie Wilson",
      position: "Sales Representative",
      contractType: "FIXED",
      salaryOrRate: 35000,
      email: "charlie.wilson@companytwo.com",
      phone: "+221 77 567 8901",
      hireDate: "2023-04-05",
    },
    {
      fullName: "Diana Davis",
      position: "HR Manager",
      contractType: "FIXED",
      salaryOrRate: 55000,
      email: "diana.davis@companytwo.com",
      phone: "+221 77 678 9012",
      hireDate: "2022-12-01",
    },
    {
      fullName: "Eve Daily",
      position: "Security Guard",
      contractType: "DAILY",
      salaryOrRate: 4000,
      email: "eve.daily@companytwo.com",
      phone: "+221 77 777 8888",
      hireDate: "2023-08-01",
    },
    {
      fullName: "Frank Hourly",
      position: "Freelancer",
      contractType: "HOURLY",
      salaryOrRate: 2500,
      email: "frank.hourly@companytwo.com",
      phone: "+221 77 999 0000",
      hireDate: "2023-09-01",
    },
  ],
};

async function seed() {
  const now = new Date();
  try {
    // 1️⃣ Créer les rôles
    for (const roleName of ["SUPER_ADMIN", "ADMIN", "CASHIER"]) {
      const exists = await prisma.role.findUnique({ where: { name: roleName as RoleType } });
      if (!exists) {
        await prisma.role.create({ data: { name: roleName as any } });
        console.log(`✅ Role created: ${roleName}`);
      }
    }

    // 2️⃣ Créer les companies
    const companyIds: Record<string, string> = {};
    for (const c of companies) {
      const company = await prisma.company.create({
        data: {
          name: c.name,
          logoUrl: c.logoUrl ?? null,
          address: c.address ?? null,
          currency: c.currency ?? "Fcfa",
          primaryColor: c.primaryColor ?? "#1E40AF",
          secondaryColor: c.secondaryColor ?? "#2563EB",
        },
      });

      companyIds[c.name] = company.id;
      console.log(`✅ Company created: ${c.name}`);
    }

    // 3️⃣ Créer les users
    for (const u of users) {
      const existing = await prisma.user.findUnique({ where: { email: u.email } });
      if (existing) continue;

      const role = await prisma.role.findUnique({ where: { name: u.roleName } });

      // Associer company si ce n'est pas SUPER_ADMIN
      let companyId = u.companyId;
      if (!companyId && u.roleName !== "SUPER_ADMIN") {
        if (u.email.includes("companyone")) companyId = companyIds["CompanyOne"];
        if (u.email.includes("companytwo")) companyId = companyIds["CompanyTwo"];
      }

      const hashedPassword = await hashPassword(u.password);

      await prisma.user.create({
        data: {
          email: u.email,
          fullName: u.fullName,
          passwordHash: hashedPassword,
          roleId: role!.id,
          companyId: companyId ?? null,
        },
      });

      console.log(`✅ User created: ${u.email}`);
    }

    // 4️⃣ Créer les employés pour chaque company
    for (const [companyName, companyEmployees] of Object.entries(employees)) {
      const companyId = companyIds[companyName];
      if (!companyId) {
        console.log(`⚠️ Company ${companyName} not found, skipping employees`);
        continue;
      }

      // Créer les employés
      const createdEmployees: any[] = [];
      for (const emp of companyEmployees) {
        const existing = await prisma.employee.findFirst({
          where: { fullName: emp.fullName, companyId },
        });
        if (existing) {
          createdEmployees.push(existing);
          continue;
        }

        const newEmployee = await prisma.employee.create({
          data: {
            fullName: emp.fullName,
            position: emp.position || null,
            contractType: emp.contractType as ContractType,
            salaryOrRate: emp.salaryOrRate,
            bankDetails: emp.bankDetails || null,
            companyId,
          },
        });
        createdEmployees.push(newEmployee);
        console.log(`✅ Employee created: ${emp.fullName} in ${companyName}`);

        // Créer work schedule pour DAILY et HOURLY
        if (emp.contractType === "DAILY" || emp.contractType === "HOURLY") {
          const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

          const workSchedule = await prisma.workSchedule.create({
            data: {
              employeeId: newEmployee.id,
              startDate,
              endDate,
              type: emp.contractType,
              hoursPerDay: emp.contractType === "HOURLY" ? 8 : null,
            },
          });

          // Créer des attendances pour le mois
          const daysInMonth = endDate.getDate();
          for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(now.getFullYear(), now.getMonth(), day);
            // Simuler présence 5 jours par semaine
            const isWorkDay = date.getDay() !== 0 && date.getDay() !== 6; // Pas dimanche et samedi
            if (isWorkDay) {
              await prisma.attendance.create({
                data: {
                  workScheduleId: workSchedule.id,
                  date,
                  workedHours: emp.contractType === "HOURLY" ? 8 : null,
                  validated: true,
                },
              });
            }
          }
          console.log(`✅ Work schedule and attendances created for ${emp.fullName}`);
        }
      }

      // 5️⃣ Créer un PayRun pour le mois en cours
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const payrun = await prisma.payRun.create({
        data: {
          periodStart: startOfMonth,
          periodEnd: endOfMonth,
          type: "MONTHLY",
          status: "APPROVED",
          companyId: companyId,
        },
      });
      console.log(`✅ PayRun created for ${companyName}: ${payrun.id}`);

      // 6️⃣ Créer des Payslips pour chaque employé
      for (const emp of createdEmployees) {
        let gross = emp.salaryOrRate;
        let daysWorked: number | null = null;

        if (emp.contractType === "DAILY") {
          // Calculer le nombre de jours travaillés
          const attendances = await prisma.attendance.findMany({
            where: {
              workSchedule: {
                employeeId: emp.id,
                startDate: { lte: endOfMonth },
                endDate: { gte: startOfMonth },
              },
              date: { gte: startOfMonth, lte: endOfMonth },
            },
          });
          daysWorked = attendances.length;
          gross = emp.salaryOrRate * daysWorked;
        } else if (emp.contractType === "HOURLY") {
          // Calculer le total des heures travaillées
          const attendances = await prisma.attendance.findMany({
            where: {
              workSchedule: {
                employeeId: emp.id,
                startDate: { lte: endOfMonth },
                endDate: { gte: startOfMonth },
              },
              date: { gte: startOfMonth, lte: endOfMonth },
            },
          });
          const totalHours = attendances.reduce((sum, att) => sum + (att.workedHours || 0), 0);
          gross = emp.salaryOrRate * totalHours;
        }

        await prisma.payslip.create({
          data: {
            employeeId: emp.id,
            payRunId: payrun.id,
            gross,
            netPay: gross, // Pour simplifier, pas de déductions
            daysWorked,
          },
        });
      }
      console.log(`✅ Payslips created for ${createdEmployees.length} employees in ${companyName}`);
    }

    console.log("🎉 Seeding completed!");
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
