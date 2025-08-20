import { initAnimalsTable } from "./animals/init/initAnimalsTable";
import { initAdoptionRequestsTable } from "./animals/init/initAdoptionRequests";
import { initRegistrationTable } from "@/lib/users/init/initRegistrationTable";

export function initDb() {
  initAnimalsTable();
  initAdoptionRequestsTable();
  initRegistrationTable();
}
