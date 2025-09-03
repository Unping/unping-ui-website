import React from "react"
import { cn } from "@/lib/utils"

type DotBackgroundProps = {
  className?: string
}

export function DotBackground({ className }: DotBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#1f1f1f_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  )
}


