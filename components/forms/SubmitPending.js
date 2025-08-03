import { useFormStatus } from "react-dom";
import classes from "./SubmitPending.module.css";

export default function SubmitPending({ text }) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={classes.submit}>
      {pending ? "Submitting..." : text}
    </button>
  );
}
