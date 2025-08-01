// faq component that includes FaqItem.jsx

import classes from "./Faq.module.css";
import FaqItem from "@/components/sections/adoption/faq/faqItem/FaqItem";
import questions from "./FaqQuestions";

export default function Faq() {
  return (
    <main className={classes.faq}>
      <div className={classes.title}>
        <h1 className={classes.heading}>FAQ</h1>
      </div>

      <div className={classes.item}>
        {questions.map((q, index) => {
          return (
            <div className={classes.flex} key={index}>
              <FaqItem question={q.question} answer={q.answer} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
