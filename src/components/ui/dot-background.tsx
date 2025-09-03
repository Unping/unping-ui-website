import { cn } from "@/lib/utils"

type DotBackgroundProps = {
  className?: string
}

export function DotBackground({ className }: DotBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 bg-[#2B313B]", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:11px_11px]",
          "[background-image:radial-gradient(#303440_2px,transparent_2px)]"
        )}
      />
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0px,black_300px,black_100%)]" />
    </div>
  )
}


