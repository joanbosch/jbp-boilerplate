/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import config from "@/config";
import { ChevronRight } from "lucide-react";

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
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();

  const handleClick = () => {
    if (status === "authenticated") {
      router.push(`/${config.auth.callbackUrl}`);
    } else {
      signIn(undefined, { callbackUrl: `/${config.auth.callbackUrl}` });
    }
  };

  if (status === "authenticated") {
    return (
      <Link
        href={`/${config.auth.callbackUrl}`}
        className={`bg-white rounded-xl flex items-center  ${extraStyle ? extraStyle : ""}`}
      >
        {`Dashboard `}
        <ChevronRight size={16} />
      </Link>
    );
  }

  return (
    <Link
      className={`bg-white rounded-xl flex items-center ${extraStyle ? extraStyle : ""}`}
      href={`/login`}
    >
      {`Sign In `}
      <ChevronRight size={16} />
    </Link>
  );
};

export default SignInButton;
