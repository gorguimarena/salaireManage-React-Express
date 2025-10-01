import { PrismaClient as AuthPrisma } from "./generated/auth/index.js";
import mysql from "mysql2/promise";
import { execSync } from "child_process";

const authPrisma = new AuthPrisma();

async function createCompanyAndDb(name: string) {
  const dbName = `company_${name.toLowerCase()}`;
  const dbUser = "root";
  const dbPass = "password_user";
  const dbHost = "mysql-db-1";
  const dbPort = 3306;

  const connection = await mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPass,
    port: dbPort,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await connection.end();
  console.log(`Base ${dbName} créée.`);

  console.log(`Company ${name} enregistrée.`);

  const dbUrl = `mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
  execSync(
    `COMPANY_DATABASE_URL="${dbUrl}" npx prisma migrate deploy --schema=prisma/company/schema.prisma`,
    { stdio: "inherit" }
  );
  console.log(`Migration appliquée sur ${dbName}.`);

  return;
}

createCompanyAndDb("DemoCorppp").catch(console.error);
