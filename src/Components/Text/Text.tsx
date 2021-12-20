import React from "react";

type textOwnProps<T extends React.ElementType> = {
    size: "xs" | "sm" | "md" | "lg" | "xl",
    variant: 'primary' | 'secondray';
    children: React.ReactNode,
    as?: T,
}

type textProps<T extends React.ElementType> = textOwnProps<T> & Omit<React.ComponentProps<T>, keyof textOwnProps<T>>

export const Text = <T extends React.ElementType = "div">({ as, size, variant, children, ...rest }: textProps<T>) => {
    const Component = as || "div";
    return (
        <Component className={`color${variant} text-${size}`} {...rest}>{children}</Component>
    )
};