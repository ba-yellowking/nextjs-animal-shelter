import classes from "./Button.module.css";

export default function Button({ title, action, type }) {
  return (
    <div>
      <button className={classes.button} onClick={action} type={type}>
        {title}
      </button>
    </div>
  );
}
