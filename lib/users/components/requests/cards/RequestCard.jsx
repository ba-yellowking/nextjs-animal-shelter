"use client";

import classes from "./RequestCard.module.css";
import CapitalizeWords from "@/helpers/CapitalizeWords";
import { useActionState, useEffect, useRef, useState } from "react";
import { updateStatusAction } from "@/lib/users/actions/updateStatusAction";
import Link from "next/link";

export default function RequestCard({ request, onStatusChange }) {
  const fullName = CapitalizeWords(request.fullName);
  const animalName = CapitalizeWords(request.animalName);

  const [formStatus, formAction] = useActionState(updateStatusAction, {
    message: null,
  });

  const [status, setStatus] = useState(request.status);
  const formRef = useRef(null);

  const [visibleMessage, setVisibleMessage] = useState(false);

  useEffect(() => {
    if (formStatus.message) setVisibleMessage(true);
    const t = setTimeout(() => setVisibleMessage(false), 5_000);
    return () => clearTimeout(t);
  }, [formStatus.message]);

  useEffect(() => {
    setStatus(request.status);
  }, [request.status]);

  return (
    <div className={classes.requestCard}>
      <div className={classes.created}>Dated: {request.date}</div>
      <div className={classes.title}>
        <h1>#{request.id}</h1>
      </div>

      <h2>Name: {fullName}</h2>
      <p>
        <strong>Applied for: </strong>
        <Link href={`/animals/${request.animalSlug}`} className={classes.slug}>
          {animalName}
        </Link>
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
            const next = e.target.value;
            setStatus(next);
            onStatusChange?.(request.id, next);
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
  );
}
