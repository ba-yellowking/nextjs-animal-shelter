import classes from "./AdoptionRequestForm.module.css";
import SubmitPending from "@/components/forms/SubmitPending";
import { useActionState } from "react";
import SubmitAdoptionRequest from "@/app/actions/submitAdoptionRequest";

export default function AdoptionRequestForm({ animalId }) {
  const [state, formAction] = useActionState(SubmitAdoptionRequest, {
    message: null,
  });

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Adoption Request</h2>
      <form className={classes.form} action={formAction}>
        <input type="hidden" name="animalId" value={animalId} />

        <div className={classes.field}>
          <label htmlFor="fullName">Full name</label>
          <input
            className={classes.inputForm}
            name="fullName"
            id="fullName"
            type="text"
            required
          />
        </div>

        {/*<div className={classes.field}>*/}
        {/*  <label htmlFor="birth">Date of birth</label>*/}
        {/*  <input*/}
        {/*    className={classes.inputForm}*/}
        {/*    name="birth"*/}
        {/*    id="birth"*/}
        {/*    type="date"*/}
        {/*    required*/}
        {/*  />*/}
        {/*</div>*/}

        <div className={classes.field}>
          <label htmlFor="phone">Phone number</label>
          <input
            className={classes.inputForm}
            name="phone"
            id="phone"
            type="tel"
            required
          />
        </div>

        <div className={classes.field}>
          <label htmlFor="phone">Email</label>
          <input
            className={classes.inputForm}
            name="email"
            id="email"
            type="email"
            required
          />
        </div>

        <div className={classes.field}>
          <label htmlFor="comment">Comment</label>
          <textarea
            className={classes.textAreaForm}
            name="comment"
            id="comment"
            rows="4"
          />
        </div>

        <div className={classes.pending}>
          <SubmitPending text="Submit" />
        </div>
        {state.message && <p>{state.message}</p>}
      </form>
    </div>
  );
}
