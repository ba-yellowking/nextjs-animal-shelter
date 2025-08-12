import { initAnimalsTable } from "./initAnimalsTable";
import { initAdoptionRequestsTable } from "./initAdoptionRequests";
import { initRegistrationTable } from "@/lib/initRegistrationTable";

export function initDb() {
  initAnimalsTable();
  initAdoptionRequestsTable();
  initRegistrationTable();
}
