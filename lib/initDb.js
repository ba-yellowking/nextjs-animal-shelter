import { initAnimalsTable } from "./initAnimalsTable";
import { initAdoptionRequestsTable } from "./initAdoptionRequests";

export function initDb() {
  initAnimalsTable();
  initAdoptionRequestsTable();
}
