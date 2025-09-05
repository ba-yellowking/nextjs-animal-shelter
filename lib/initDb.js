import { initAnimalsTable } from "./animals/init/initAnimalsTable";
import { initAdoptionRequestsTable } from "./animals/init/initAdoptionRequests";
import { initSignUpTable } from "@/lib/users/init/initSignUpTable";
import { initSessions } from "@/lib/users/init/initSessions";

export function initDb() {
  initAnimalsTable();
  initAdoptionRequestsTable();
  initSignUpTable();
  initSessions();
}
