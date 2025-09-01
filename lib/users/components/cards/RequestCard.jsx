"use client";

import classes from "./RequestCard.module.css";
import CapitalizeWords from "@/helpers/CapitalizeWords";
import { useActionState, useEffect, useRef, useState } from "react";
import { updateStatusAction } from "@/lib/users/actions/updateStatusAction";

export default function RequestCard({ request }) {
  // jon doe => John Doe
  const fullName = CapitalizeWords(request.fullName);
  const animalName = CapitalizeWords(request.animalName);

  const [formStatus, formAction] = useActionState(updateStatusAction, {
    message: null,
  });

  const [status, setStatus] = useState(request.status);
  const formRef = useRef(null);

  // visibility of the notification
  const [visibleMessage, setVisibleMessage] = useState(false);

  useEffect(() => {
    if (formStatus.message) {
      setVisibleMessage(true);
    }
    const notification = setTimeout(() => setVisibleMessage(false), 5_000);
    return () => clearTimeout(notification);
  }, [formStatus.message]);

  useEffect(() => {
    setStatus(request.status);
  }, [request.status]);

  return (
    <>
      <div className={classes.requestCard}>
        <div className={classes.created}>Dated: {request.date}</div>

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

        <div className={classes.status}>
          <strong>Status: </strong>

          <span
            className={
              status === "fulfilled"
                ? classes.statusFulfilled
                : status === "rejected"
                  ? classes.statusRejected
                  : classes.statusPending
            }
          >
            {status}
          </span>
        </div>

        <form action={formAction} ref={formRef}>
          <input type="hidden" name="id" value={request.id} />
          <select
            className={classes.select}
            name="status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              formRef.current?.requestSubmit();
            }}
          >
            <option value="pending">Pending</option>
            <option value="fulfilled">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </form>

        {visibleMessage && (
          <div className={classes.notification}>{formStatus.message}</div>
        )}
      </div>
    </>
  );
}
