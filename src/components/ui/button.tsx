import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium font-outfit transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
        destructive:
          "bg-error-600 text-white hover:bg-error-700 active:bg-error-800",
        outline:
          "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100",
        secondary:
          "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300",
        ghost: "text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200",
        link: "text-primary-600 underline-offset-4 hover:underline",
        success: "bg-success-600 text-white hover:bg-success-700 active:bg-success-800",
        warning: "bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700",
      },
      size: {
        default: "h-10 px-4 py-2 text-body-md rounded-lg", // UiRadius.lg = 16px, using rounded-lg
        sm: "h-9 px-3 text-body-sm rounded-md", // UiRadius.md = 12px, using rounded-md
        lg: "h-12 px-6 py-3 text-body-lg rounded-lg", // UiRadius.lg = 16px
        xl: "h-14 px-8 py-4 text-body-xl rounded-xl", // UiRadius.xl = 28px
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
