"use client";

import classes from "./RequestList.module.css";
import { useMemo, useState } from "react";
import FilterStatus from "@/lib/users/components/requests/filterStatus/FilterStatus";
import RequestCard from "@/lib/users/components/requests/cards/RequestCard";

export default function RequestsList({ initialRequests }) {
  const [filter, setFilter] = useState(""); // "" = All
  const [requests, setRequests] = useState(initialRequests);

  const visible = useMemo(() => {
    return filter ? requests.filter((r) => r.status === filter) : requests;
  }, [filter, requests]);

  function handleStatusChange(id, newStatus) {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r)),
    );
  }

  return (
    <div className={classes.requestList}>
      <FilterStatus filter={filter} setFilter={setFilter} />
      <div className={classes.container}>
        {visible.length ? (
          visible.map((req) => (
            <RequestCard
              key={req.id}
              request={req}
              onStatusChange={handleStatusChange}
            />
          ))
        ) : (
          <p className={classes.noRequest}>No requests found.</p>
        )}
      </div>
    </div>
  );
}
