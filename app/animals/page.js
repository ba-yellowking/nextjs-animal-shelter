import classes from "./page.module.css";
import AddAnimalModal from "@/modals/addAnimalModal/AddAnimalModal";
import { Suspense } from "react";
import AnimalList from "@/components/animals/list/AnimalList";
import Notification from "@/app/animals/Notification";
import AddUserModal from "@/lib/users/modals/addUserModal/AddUserModal";

export const metadata = {
  title: "Animal list",
  description: "Animal list for adoption",
};

export default function Animals() {
  // app/animals/error.js customed error message
  // throw new Error();

  return (
    <>
      <AddAnimalModal />

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
// This is why <Cards/>'s function should be "async" and include "await"
