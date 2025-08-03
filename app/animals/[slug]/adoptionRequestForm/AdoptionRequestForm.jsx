import classes from "./AdoptionRequestForm.module.css";

export default function AdoptionRequestForm() {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Adoption Request</h2>
      <form className={classes.form}>
        <div className={classes.field}>
          <label htmlFor="fullName">Full name</label>
          <input name="fullName" id="fullName" type="text" required />
        </div>

        <div className={classes.field}>
          <label htmlFor="birth">Date of birth</label>
          <input name="birth" id="birth" type="date" required />
        </div>

        <div className={classes.field}>
          <label htmlFor="phone">Phone number</label>
          <input name="phone" id="phone" type="tel" required />
        </div>

        <div className={classes.field}>
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment" rows="4" />
        </div>

        <button type="submit" className={classes.submit}>
          Submit Request
        </button>
      </form>
    </div>
  );
}
