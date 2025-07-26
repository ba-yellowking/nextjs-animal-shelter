import { useFormStatus } from "react-dom";
import classes from "./addAnimalForm/AddAnimalForm.module.css";

export default function SubmitPending() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={classes.submitBtn}>
      {pending ? "Submitting..." : "Add a friend"}
    </button>
  );
}
