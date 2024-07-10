"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import config from "@/config";
import { ChevronRight } from "lucide-react";
import { signOut } from "next-auth/react"
import { Button } from "./ui/button";

// A simple button to sign in with our providers (Google & Magic Links).
// It automatically redirects user to callbackUrl (config.auth.callbackUrl) after login, which is normally a private page for users to manage their accounts.
// If the user is already logged in, it will show their profile picture & redirect them to callbackUrl immediately.
const SignInButton = ({
  text = "Sign In",
  extraStyle,
}: {
  text?: string;
  extraStyle?: string;
}) => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <Button
        onClick={() => signOut()}
        variant={"ghost"}
      >
        {`Dashboard `}
        <ChevronRight size={16} />
      </Button>
    );
  }

  return (
    <Link
      className={`bg-white rounded-xl flex items-center ${extraStyle ? extraStyle : ""}`}
      href={config.auth.loginUrl}
    >
      {`Sign In `}
      <ChevronRight size={16} />
    </Link>
  );
};

export default SignInButton;
