import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

const buttonVariant = cva("border rounded font-semibold hover:brightness-90 active:brightness-75", {
  variants: {
    intent: {
      primary: " border-sky-500 text-white",
      secondary: "bg-slate-500 border-slate-500 text-white",
      danger: "bg-rose-500 border-rose-500 text-white",
    },
    size: {
      sm: "px-3 py-1 text-[13px]",
      md: "px-4 py-1.5  text-[15px]",
      lg: "px-5 py-2 text-[17px]",
    },
    variant: {
      outline: "bg-white",
      contained: "text-white",
    },
  },
  compoundVariants: [
    { intent: "primary", variant: "contained", className: "bg-sky-500 " },
    { intent: "primary", variant: "outline", className: " text-sky-500" },
    { intent: "secondary", variant: "contained", className: "bg-slate-500 " },
    { intent: "secondary", variant: "outline", className: " text-slate-500" },
    { intent: "danger", variant: "contained", className: "bg-rose-500 " },
    { intent: "danger", variant: "outline", className: " text-rose-500" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "md",
    variant: "contained",
  },
});

type ButtonVariant = VariantProps<typeof buttonVariant>;

// ComponentProps generic 매개변수는 2개 => 실제 컴포넌트의 타입(ComponentProps<typeof Link>), JSX의 기본 엘리멘트에 대해선 문자열로 가능 (ComponentProps<'button'>)
type ButtonProps = {} & ButtonVariant & ComponentProps<"button">;

function Button({ intent, size, variant, children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <button className={buttonVariant({ intent, size, variant })} {...props}>
      {children}
    </button>
  );
}

export default Button;
