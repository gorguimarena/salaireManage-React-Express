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
  fixedSalaryDeductionRate?: number;
  workDaysPerMonth?: number;
}

interface SeedUser {
  email: string;
  password: string;
  fullName: string;
  roleName: "SUPER_ADMIN" | "ADMIN" | "CASHIER" | "VIGILE";
  companyId?: string;
  // Employee fields (optional - only for actual employees)
  position?: string | null;
  contractType?: "DAILY" | "HOURLY" | "FIXED" | "FEE";
  salaryOrRate?: number;
  bankDetails?: string | null;
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
    periodType: "MONTHLY",
    fixedSalaryDeductionRate: 5000, // 5000 Fcfa per absent day
    workDaysPerMonth: 22,
  },
  {
    name: "CompanyTwo",
    address: "456 Avenue Two",
    logoUrl: "",
    primaryColor: "#DC2626", // Red
    secondaryColor: "#EF4444",
    periodType: "MONTHLY",
    fixedSalaryDeductionRate: 4000, // 4000 Fcfa per absent day
    workDaysPerMonth: 22,
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
  // Vigile CompanyOne
  {
    email: "vigile1@companyone.com",
    password: "Vigile123",
    fullName: "Vigile CompanyOne",
    roleName: "VIGILE",
  },
  // Employees CompanyOne
  {
    email: "john.doe@companyone.com",
    password: "Employee123",
    fullName: "John Doe",
    roleName: "CASHIER", 
    position: "Software Engineer",
    contractType: "FIXED",
    salaryOrRate: 50000,
    phone: "+221 77 123 4567",
    hireDate: "2023-01-15",
  },
  {
    email: "jane.smith@companyone.com",
    password: "Employee123",
    fullName: "Jane Smith",
    roleName: "CASHIER",
    position: "Designer",
    contractType: "FIXED",
    salaryOrRate: 45000,
    phone: "+221 77 234 5678",
    hireDate: "2023-02-01",
  },
  {
    email: "bob.johnson@companyone.com",
    password: "Employee123",
    fullName: "Bob Johnson",
    roleName: "ADMIN",
    position: "Project Manager",
    contractType: "FIXED",
    salaryOrRate: 60000,
    phone: "+221 77 345 6789",
    hireDate: "2022-11-10",
  },
  {
    email: "mike.daily@companyone.com",
    password: "Employee123",
    fullName: "Mike Daily",
    roleName: "CASHIER",
    position: "Cleaner",
    contractType: "DAILY",
    salaryOrRate: 5000,
    phone: "+221 77 111 2222",
    hireDate: "2023-05-01",
  },
  {
    email: "sarah.hourly@companyone.com",
    password: "Employee123",
    fullName: "Sarah Hourly",
    roleName: "CASHIER",
    position: "Tutor",
    contractType: "HOURLY",
    salaryOrRate: 2000,
    phone: "+221 77 333 4444",
    hireDate: "2023-06-01",
  },
  {
    email: "tom.fee@companyone.com",
    password: "Employee123",
    fullName: "Tom Fee",
    roleName: "CASHIER",
    position: "Consultant",
    contractType: "FEE",
    salaryOrRate: 100000,
    phone: "+221 77 555 6666",
    hireDate: "2023-07-01",
  },
  // Employees CompanyTwo
  {
    email: "alice.brown@companytwo.com",
    password: "Employee123",
    fullName: "Alice Brown",
    roleName: "CASHIER",
    position: "Marketing Specialist",
    contractType: "FIXED",
    salaryOrRate: 40000,
    phone: "+221 77 456 7890",
    hireDate: "2023-03-20",
  },
  {
    email: "charlie.wilson@companytwo.com",
    password: "Employee123",
    fullName: "Charlie Wilson",
    roleName: "CASHIER",
    position: "Sales Representative",
    contractType: "FIXED",
    salaryOrRate: 35000,
    phone: "+221 77 567 8901",
    hireDate: "2023-04-05",
  },
  {
    email: "diana.davis@companytwo.com",
    password: "Employee123",
    fullName: "Diana Davis",
    roleName: "ADMIN",
    position: "HR Manager",
    contractType: "FIXED",
    salaryOrRate: 55000,
    phone: "+221 77 678 9012",
    hireDate: "2022-12-01",
  },
  {
    email: "eve.daily@companytwo.com",
    password: "Employee123",
    fullName: "Eve Daily",
    roleName: "CASHIER",
    position: "Security Guard",
    contractType: "DAILY",
    salaryOrRate: 4000,
    phone: "+221 77 777 8888",
    hireDate: "2023-08-01",
  },
  {
    email: "frank.hourly@companytwo.com",
    password: "Employee123",
    fullName: "Frank Hourly",
    roleName: "CASHIER",
    position: "Freelancer",
    contractType: "HOURLY",
    salaryOrRate: 2500,
    phone: "+221 77 999 0000",
    hireDate: "2023-09-01",
  },
];


async function seed() {
  const now = new Date();
  try {
    // 1️⃣ Créer les rôles
    for (const roleName of ["SUPER_ADMIN", "ADMIN", "CASHIER", "VIGILE"]) {
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
          fixedSalaryDeductionRate: c.fixedSalaryDeductionRate ?? null,
          workDaysPerMonth: c.workDaysPerMonth ?? null,
        } as any,
      });

      companyIds[c.name] = company.id;
      console.log(`✅ Company created: ${c.name}`);
    }

    // 3️⃣ Créer les users
    for (const u of users) {
      const existing = await prisma.user.findUnique({ where: { email: u.email } });
      if (existing) continue;

      const role = await prisma.role.findUnique({ where: { name: u.roleName as any } });

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
          // Employee fields (optional)
          position: u.position ?? null,
          contractType: u.contractType as ContractType ?? null,
          salaryOrRate: u.salaryOrRate ?? null,
          bankDetails: u.bankDetails ?? null,
          phone: u.phone ?? null,
          hireDate: u.hireDate ? new Date(u.hireDate) : null,
          isActive: true, // All users are active by default
        },
      });

      console.log(`✅ User created: ${u.email}`);
    }

    // 4️⃣ Créer les work schedules et attendances pour les employés (users avec contractType)
    for (const companyName of Object.keys(companyIds)) {
      const companyId = companyIds[companyName];
      if (!companyId) continue;

      // Get all users that are employees (have contractType) for this company
      const employees = await prisma.user.findMany({
        where: {
          companyId,
          contractType: { not: null },
        },
      });

      console.log(`✅ Found ${employees.length} employees in ${companyName}`);

      for (const emp of employees) {
        // Créer work schedule pour tous sauf FEE
        if (emp.contractType !== "FEE") {
          const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
          const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

          const workSchedule = await prisma.workSchedule.create({
            data: {
              employeeId: emp.id,
              startDate,
              endDate,
              type: emp.contractType!,
              hoursPerDay: emp.contractType === "HOURLY" ? 8 : null,
            },
          });

          // Créer des attendances pour le mois - COMMENTÉ POUR TESTS
          /*
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
          */
          console.log(`✅ Work schedule created for ${emp.fullName} (no attendances for testing)`);
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
      for (const emp of employees) {
        if (!emp.salaryOrRate || !emp.contractType) continue;

        let gross = Number(emp.salaryOrRate);
        let deductions = 0;
        let daysWorked: number | null = null;

        // Calcul simplifié sans attendances pour les tests
        if (emp.contractType === "DAILY") {
          // Simuler 20 jours travaillés pour les tests
          daysWorked = 20;
          gross = Number(emp.salaryOrRate) * daysWorked;
        } else if (emp.contractType === "HOURLY") {
          // Simuler 160 heures travaillées (20 jours * 8h)
          const totalHours = 160;
          gross = Number(emp.salaryOrRate) * totalHours;
        } else if (emp.contractType === "FIXED") {
          // Salaire fixe complet pour les tests
          daysWorked = 22; // Jours attendus
          gross = Number(emp.salaryOrRate);
          deductions = 0; // Pas de déductions pour les tests
        } else if (emp.contractType === "FEE") {
          // Forfait complet
          gross = Number(emp.salaryOrRate);
        }

        await prisma.payslip.create({
          data: {
            employeeId: emp.id,
            payRunId: payrun.id,
            gross,
            deductions,
            netPay: gross - deductions,
            daysWorked,
          },
        });
      }
      console.log(`✅ Payslips created for ${employees.length} employees in ${companyName}`);
    }

    // 7️⃣ Créer des permissions pour les super admins
    const superAdmin = await prisma.user.findFirst({
      where: { role: { name: "SUPER_ADMIN" } }
    });

    if (superAdmin) {
      for (const companyName of Object.keys(companyIds)) {
        const companyId = companyIds[companyName];
        if (!companyId) continue;

        // Créer une permission pour chaque entreprise
        const existingPermission = await prisma.superAdminPermission.findUnique({
          where: {
            superAdminId_companyId: {
              superAdminId: superAdmin.id,
              companyId: companyId
            }
          }
        });

        if (!existingPermission) {
          await prisma.superAdminPermission.create({
            data: {
              superAdminId: superAdmin.id,
              companyId: companyId,
              grantedBy: superAdmin.id, // Auto-granted for seeding
            }
          });
          console.log(`✅ Permission granted to super admin for ${companyName}`);
        }
      }
    }

    // 8️⃣ Créer quelques prêts pour les employés avec différentes progressions
    const employeesWithLoans = await prisma.user.findMany({
      where: {
        contractType: { not: null },
        salaryOrRate: { not: null }
      },
      take: 5 // Créer des prêts pour 5 employés
    });

    const progressLevels = [0, 25, 50, 75, 90]; // Différents niveaux de progression

    for (let i = 0; i < employeesWithLoans.length; i++) {
      const emp = employeesWithLoans[i]!;
      if (!emp.salaryOrRate) continue;

      const loanAmount = Number(emp.salaryOrRate) * 2; // Prêt équivalent à 2 mois de salaire
      const monthlyDeduction = loanAmount / 12; // Remboursement sur 12 mois

      const progress = progressLevels[i % progressLevels.length]!;
      const remainingAmount = loanAmount * (1 - progress / 100);

      const existingLoan = await prisma.loan.findFirst({
        where: { employeeId: emp.id }
      });

      if (!existingLoan) {
        await prisma.loan.create({
          data: {
            employeeId: emp.id,
            amount: loanAmount,
            remainingAmount: remainingAmount,
            monthlyDeduction: monthlyDeduction,
            description: `Prêt personnel - ${emp.fullName}`,
            startDate: new Date(Date.now() - (progress / 100) * 365 * 24 * 60 * 60 * 1000), // Date de début ajustée selon la progression
            endDate: new Date(Date.now() + (1 - progress / 100) * 365 * 24 * 60 * 60 * 1000), // Date de fin ajustée
            status: progress >= 100 ? "PAID" : "ACTIVE",
            createdBy: superAdmin?.id || emp.id,
          }
        });
        console.log(`✅ Loan created for ${emp.fullName}: ${loanAmount} FCFA (${progress}% progress, remaining: ${remainingAmount} FCFA)`);
      }
    }

    console.log("🎉 Seeding completed!");
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
