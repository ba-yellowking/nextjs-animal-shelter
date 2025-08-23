import classes from "./RequestCard.module.css";

export default function RequestCard({ request }) {
  return (
    <>
      <div className={classes.requestCard}>
        <h1>#{request.id}</h1>
        <h2>
          <strong>Name:</strong> {request.fullName}
        </h2>
        <p>
          <strong>Wants to adopt:</strong> {request.animalName}
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
      </div>
    </>
  );
}
