import cron from "node-cron";
import { PayRunService } from "../modules/payRun/payRun.service.js";
import { logger } from "./logger.js"; // Assuming a logger utility exists
// This function will now be responsible for scheduling the payslip generation
// It should be called when a PayRun is created or updated to DRAFT status.
export function schedulePayslipGeneration(payRunId, companyId, periodEnd) {
    const now = new Date();
    // If the periodEnd is in the past or current, execute immediately
    if (periodEnd.getTime() <= now.getTime()) {
        logger.info(`Executing immediate payslip generation for PayRun ${payRunId}`);
        PayRunService.generatePayslips(companyId, payRunId)
            .catch(error => logger.error(`Error generating payslips immediately for PayRun ${payRunId}:`, error));
        return;
    }
    // Schedule the task using node-cron
    // The cron pattern needs to be specific to the periodEnd date and time.
    // For simplicity, let's schedule it for a few minutes after the periodEnd.
    // A more robust solution might involve storing cron patterns in the DB or using a message queue.
    const scheduleDate = new Date(periodEnd.getTime() + 5 * 60 * 1000); // 5 minutes after periodEnd
    const cronPattern = `${scheduleDate.getMinutes()} ${scheduleDate.getHours()} ${scheduleDate.getDate()} ${scheduleDate.getMonth() + 1} *`;
    logger.info(`Scheduling payslip generation for PayRun ${payRunId} at ${scheduleDate.toISOString()} with pattern: ${cronPattern}`);
    cron.schedule(cronPattern, async () => {
        logger.info(`Running scheduled payslip generation for PayRun ${payRunId}`);
        try {
            await PayRunService.generatePayslips(companyId, payRunId);
            logger.info(`Successfully generated payslips for PayRun ${payRunId}`);
        }
        catch (error) {
            logger.error(`Error in scheduled payslip generation for PayRun ${payRunId}:`, error);
        }
    }, {
        timezone: "Africa/Dakar" // Or the appropriate timezone for your application
    });
}
// IMPORTANT: To ensure scheduled tasks are re-registered on server restart,
// the application startup process (e.g., in `server.ts` or `app.ts`)
// must fetch all `PayRun` entries with `status: "DRAFT"` and a `periodEnd` in the future,
// and then call `schedulePayslipGeneration(payRun.id, payRun.companyId, payRun.periodEnd)` for each of them.
// This re-initializes the cron jobs after a server restart, ensuring no scheduled tasks are lost.
//# sourceMappingURL=schedulePayslipCreation.js.map