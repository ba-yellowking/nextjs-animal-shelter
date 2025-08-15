import { initAnimalsTable } from "./animals/initAnimalsTable";
import { initAdoptionRequestsTable } from "./animals/initAdoptionRequests";
import { initRegistrationTable } from "@/lib/users/initRegistrationTable";

export function initDb() {
  initAnimalsTable();
  initAdoptionRequestsTable();
  initRegistrationTable();
}
