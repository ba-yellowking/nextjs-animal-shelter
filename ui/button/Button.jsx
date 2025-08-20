import classes from "./Button.module.css";

export default function Button({ title, action }) {
  return (
    <div>
      <button className={classes.button} onClick={action}>
        {title}
      </button>
    </div>
  );
}
