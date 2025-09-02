import classes from "./page.module.css";
import { getRequests } from "@/lib/users/getRequests";
import { verifyAuth } from "@/lib/users/auth";
import { redirect } from "next/navigation";
import RequestsList from "@/lib/users/components/requests/requestList/RequestList";

// date conversion
function formatKZ(dateStrUtc) {
  const d = new Date(dateStrUtc.replace(" ", "T") + "Z");
  return d.toLocaleString("kk-KZ", {
    timeZone: "Asia/Almaty",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function RequestPage() {
  // user verification
  const { user, session } = await verifyAuth();
  if (!user && !session) redirect("/");

  const requests = await getRequests();
  if (!requests || requests.length === 0) {
    return (
      <div className={classes.requestPage}>
        <section className={classes.requestContainer}>
          <p className={classes.noRequests}>No requests found</p>
        </section>
      </div>
    );
  }

  const prepared = requests.map((r) => ({
    ...r,
    date: formatKZ(r.created_at),
  }));

  return (
    <div className={classes.requestPage}>
      <section className={classes.requestContainer}>
        <RequestsList initialRequests={prepared} />
      </section>
    </div>
  );
}
