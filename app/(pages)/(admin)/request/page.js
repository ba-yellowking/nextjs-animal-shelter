import classes from "./page.module.css";
import { getRequests } from "@/lib/users/getRequests";
import RequestCard from "@/lib/users/components/cards/RequestCard";
import { verifyAuth } from "@/lib/users/auth";
import { redirect } from "next/navigation";

export default async function RequestPage() {
  const { user, session } = await verifyAuth();

  if (!user && !session) {
    redirect("/");
  }

  const requests = getRequests();

  if (!requests || requests.length === 0) {
    return (
      <div className={classes.requestsWrap}>
        <section className={classes.container}>
          <h1>No requests</h1>
        </section>
      </div>
    );
  }

  return (
    <>
      {user && session && (
        <div className={classes.requestsWrap}>
          <section className={classes.container}>
            {requests.map((request, index) => (
              <RequestCard key={index} request={request} />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
