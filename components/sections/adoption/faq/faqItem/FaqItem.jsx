// faq items inside the Faq.jsx component

import Dropdown from "@/ui/dropdown/Dropdown";
import classes from "./FaqItem.module.css";

export default function FaqItem({ question, answer }) {
  return (
    <main className={classes.main}>
      <Dropdown question={question} answer={answer} />
    </main>
  );
}
