"use client";

import classes from "./AdoptionRequestForm.module.css";
import SubmitPending from "@/components/forms/SubmitPending";
import { useActionState, useState } from "react";
import SubmitAdoptionRequest from "@/actions/submitAdoptionRequest";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AdoptionRequestForm({ animalId }) {
  const [state, formAction] = useActionState(SubmitAdoptionRequest, {
    message: null,
  });

  const [phone, setPhone] = useState("");

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

        <div className={classes.phoneField}>
          <label htmlFor="phone">Phone number</label>

          <PhoneInput
            country="kz"
            value={phone}
            onChange={(value) => setPhone(value)}
            inputProps={{
              name: "phone",
              id: "phone",
              required: true,
              className: classes.phoneInputForm,
              autoComplete: "tel",
            }}
            countryCodeEditable={false}
            preferredCountries={["kz"]}
          />
        </div>

        <div className={classes.field}>
          <label htmlFor="email">Email</label>
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
