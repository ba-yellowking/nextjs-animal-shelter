import Cards from "@/app/ui/cards/Cards";
import AdminPage from "@/app/admin/page";
import classes from "./page.module.css";

export default function Animals() {
  return (
    <>
      <div className={classes.animalsWrap}>
        <Cards/>
      </div>
      <section>
        <AdminPage />
      </section>
    </>
  )
}