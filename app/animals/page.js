import classes from "./page.module.css";
import { Suspense } from "react";
import AnimalList from "@/components/animals/list/AnimalList";
import Notification from "@/app/animals/Notification";

export const metadata = {
  title: "Animal list",
  description: "Animal list for adoption",
};

export default function Animals() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Notification />
      </Suspense>

      <div className={classes.animalsWrap}>
        <Suspense fallback={<p>Loading...</p>}>
          <AnimalList />
        </Suspense>
      </div>
    </>
  );
}

// <Suspense> works with server-based components only
// This is why <RequestCard/>'s function should be "async" and include "await"
