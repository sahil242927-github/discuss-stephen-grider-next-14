"use client";

import { useSession } from "next-auth/react";

export default function Login() {
  const session = useSession();

  return (
    <div>
      <h1>This is a Login page</h1>

      <div>
        {session.data?.user ? (
          <div>Client : {JSON.stringify(session.data?.user)}</div>
        ) : (
          <div>Client : Signed Out</div>
        )}
      </div>
    </div>
  );
}
