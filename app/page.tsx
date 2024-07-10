import { ModeToggle } from "@/components/color-mode-toggle";
import SignInButton from "@/components/sign-in-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <ModeToggle />
      <SignInButton />
    </main>
  );
}
