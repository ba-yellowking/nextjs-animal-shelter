"use client";

import classes from "./page.module.css";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Notification() {
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  // pops out for a 5 sec and changes URL from query from /animals/?success=1 to /animals
  useEffect(() => {
    const success = searchParams.get("success");
    if (success === "1") {
      setIsSuccess(true);
    }

    const timer = setTimeout(() => {
      setIsSuccess(false);
      router.replace("/animals", { scroll: false });
    }, 5_000);

    return () => clearTimeout(timer);
  }, [router, searchParams]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {isSuccess && (
          <div>
            <div className={classes.notification}>
              <p>Adoption request submitted successfully!</p>
            </div>
          </div>
        )}
      </Suspense>
    </>
  );
}
