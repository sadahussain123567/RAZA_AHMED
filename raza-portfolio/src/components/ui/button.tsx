import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { href: string; variant?: "primary" | "ghost"; children: ReactNode; className?: string; onClick?: () => void };

export function ButtonLink({ href, variant = "primary", children, className, onClick }: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-gradient-to-r from-purple to-cyan text-white shadow-lg hover:brightness-110"
          : "border border-line text-fg hover:border-purple",
        className,
      )}
    >
      {children}
    </Link>
  );
}
