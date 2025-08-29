import classes from "./RequestCard.module.css";
import CapitalizeWords from "@/helpers/CapitalizeWords";

export default function RequestCard({ request }) {
  const date = new Date(request.created_at).toLocaleString("kk-KZ");

  const fullName = CapitalizeWords(request.fullName);
  const animalName = CapitalizeWords(request.animalName);

  return (
    <>
      <div className={classes.requestCard}>
        <div className={classes.created}>Dated: {date}</div>
        <div className={classes.title}>
          <h1>#{request.id}</h1>
        </div>
        <h2>Name: {fullName}</h2>
        <p>
          <strong>For adoption:</strong> {animalName}
        </p>
        <p>
          <strong>Phone:</strong> {request.phone}
        </p>
        <p>
          <strong>Email:</strong> {request.email}
        </p>
        <p>
          <strong>Comment:</strong> {request.comment}
        </p>
        <p>
          <strong>Status:</strong> {request.status}
        </p>
      </div>
    </>
  );
}
