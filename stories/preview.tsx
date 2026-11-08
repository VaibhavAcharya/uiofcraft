import type * as React from "react";
import { cn } from "@/lib/utils";

export function Preview({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex min-h-40 items-center justify-center", className)}>
      <div data-slot="preview">{children}</div>
    </div>
  );
}
