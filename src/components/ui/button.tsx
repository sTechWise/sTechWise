import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

        // Pill radius for primary calls to action
        const radiusStyles = "rounded-[var(--radius-btn)]";

        const variants = {
            primary: "bg-[var(--color-brand-accent)] text-white hover:opacity-90 hover:scale-[1.02]",
            secondary: "bg-[var(--color-brand-primary)] text-white hover:opacity-90",
            outline: "border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[#f1f5f9]",
            ghost: "hover:bg-[#f1f5f9] text-[var(--color-brand-primary)]",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg font-semibold",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, radiusStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
