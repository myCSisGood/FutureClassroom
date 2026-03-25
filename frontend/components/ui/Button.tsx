import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all focus-visible:outline-none disabled:pointer-events-none select-none cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: [
          "bg-gray-90 text-white",
          "hover:bg-[radial-gradient(186.67%_186.67%_at_50%_201.25%,#007FA9_0%,#262626_100%)]",
          "active:bg-black",
          "disabled:bg-gray-40 disabled:text-gray-30",
        ],
        secondary: [
          "bg-[rgba(6,45,65,0.1)] text-gray-90",
          "hover:bg-[rgba(6,45,65,0.05)]",
          "active:bg-blue-80 active:text-white",
          "disabled:bg-gray-30 disabled:text-gray-40",
        ],
      },
      size: {
        small: "h-10 px-4 min-w-[80px] body-1-reg",
        medium: "h-10 px-6 min-w-[100px] body-1-reg",
        large: "h-10 px-8 min-w-[120px] body-1-reg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        type={props.type || "button"}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
