import cron from "node-cron";
import { PayRunService } from "../modules/payRun/payRun.service.js";

export function schedulePayslipCreation(payRunId: string, companyId: string, periodEnd: Date) {
  const now = new Date();
  const delay = periodEnd.getTime() - now.getTime();

  if (delay <= 0) {
    PayRunService.generatePayslips(companyId, payRunId);
    return;
  }

  setTimeout(() => {
    PayRunService.generatePayslips(companyId, payRunId);
  }, delay);
}

