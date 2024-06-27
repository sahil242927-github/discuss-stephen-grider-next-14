"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  return (
    <div>
      {session.data?.user ? (
        <div>Client : {JSON.stringify(session.data?.user)}</div>
      ) : (
        <div>Client : Signed Out</div>
      )}
    </div>
  );
}
