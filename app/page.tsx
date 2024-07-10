import { ModeToggle } from "@/components/color-mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <ModeToggle />
    </main>
  );
}
