import Link from "next/link";
import ButtonSupport from "@/components/support-button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// Simple 404 page with a button to go home and a button to contact support
// Show a cute SVG with your primary color
export default function Custom404() {
  return (
    <section className="relative bg-base-100 text-base-content h-screen w-full flex flex-col justify-center gap-8 items-center p-10">
      <div className="p-6 rounded-xl font-extrabold text-[10rem]">
        404
      </div>
      <p className="text-base md:text-md font-medium">
        The page you are looking for doesn't exist or has been moved
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              clipRule="evenodd"
            />
          </svg>
          Home
        </Link>

        <ButtonSupport />
      </div>
    </section>
  );
}