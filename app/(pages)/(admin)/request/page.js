import classes from "./page.module.css";
import { getRequests } from "@/lib/users/getRequests";
import RequestCard from "@/lib/users/components/cards/RequestCard";
import { verifyAuth } from "@/lib/users/auth";
import { redirect } from "next/navigation";

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
  const { user, session } = await verifyAuth();

  if (!user && !session) {
    redirect("/");
  }

  const requests = await getRequests();

  if (!requests || requests.length === 0) {
    return (
      <div className={classes.requestsWrap}>
        <section className={classes.container}>
          <h1 className={classes.noRequests}>No requests</h1>
        </section>
      </div>
    );
  }

  return (
    <>
      {user && session && (
        <div className={classes.requestsWrap}>
          <section className={classes.container}>
            {requests.map((request) => (
              <RequestCard
                key={request.id}
                request={{ ...request, date: formatKZ(request.created_at) }}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
