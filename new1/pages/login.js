import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome, {session?.user.name}</h1>
        &nbsp;
        <button
          className="bg-red-500 rounded-lg px-4 py-4 text-white"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>You are not Logged In</h1>
        &nbsp;
        <button
          className="bg-blue-500 rounded-lg px-4 py-4 text-white"
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign In With SSO
        </button>
      </div>
    );
  }
};

export default login;
