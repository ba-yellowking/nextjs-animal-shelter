import { initAnimalsTable } from "./animals/init/initAnimalsTable";
import { initAdoptionRequestsTable } from "./animals/init/initAdoptionRequests";
import { initRegistrationTable } from "@/lib/users/init/initRegistrationTable";
import { initSessions } from "@/lib/users/init/initSessions";

export function initDb() {
  initAnimalsTable();
  initAdoptionRequestsTable();
  initRegistrationTable();
  initSessions();
}
