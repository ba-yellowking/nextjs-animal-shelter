import Cards from "@/ui/cards/Cards";
import classes from "./page.module.css";
import AddAnimalModal from "@/modals/addAnimalModal/AddAnimalModal";

export default function Animals() {

  return (
    <>
      <div className={classes.container}>
        <AddAnimalModal/>
      </div>

      <div className={classes.animalsWrap}>
        <Cards/>
      </div>
    </>
  )
}