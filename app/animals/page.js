import Cards from "@/ui/cards/Cards";
import classes from "./page.module.css";
import AddAnimalModal from "@/modals/addAnimalModal/AddAnimalModal";
import {Suspense} from "react";

export default function Animals() {

  // app/animals/error.js customed error message
  // throw new Error()

  return (
    <>
      <div className={classes.container}>
        <AddAnimalModal/>
      </div>

      <div className={classes.animalsWrap}>
        <Suspense fallback={<p>Loading...</p>}>
          <Cards/>
        </Suspense>
      </div>
    </>
  )
}

// <Suspense> works with server-based components only
// This is why <Cards/>'s function should be "async" and include "await"