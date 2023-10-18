import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from "tailwind-merge"

const buttonStyles = cva(["text-primary-text"], {
    variants: {
        size: {
            default: [],
            icon: ["rounded-full w-10 h-10 flex items-center justify-center"],
        },
        variant: {
            default: ["bg-secondary-default hover:bg-primary-600 text-secondary-text"],
            ghost: ["bg-transparent hover:bg-primary-600"],
        },
    },
    defaultVariants: {
        size: 'default',
        variant: 'default',
    },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

function Button({variant, size, className, ...props}:ButtonProps){
    return(
        <button {...props} className={twMerge(buttonStyles({variant, size}), className)}/>
    )
}

export default Button