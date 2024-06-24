import { VariantProps, cva } from "class-variance-authority";

//chipVariants는 함수
const chipVariants = cva(["text-sm", "border", "rounded-full", "px-2.5", "py-0.5", "hover:opacity-50", "transition-opacity"], {
  variants: {
    intent: {
      Primary: "bg-blue-500 border-blue-500 text-white",
      Secondary: "bg-gray-500 border-gray-500 text-white",
      Danger: "bg-red-500 border-red-500 text-white",
      Warning: "bg-yellow-500 border-yellow-500 text-white",
      Info: "bg-violet-500 border-violet-500 text-white",
      default: "bg-white-500 border-black text-black",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

type ChipVariantsType = VariantProps<typeof chipVariants>;

type ChipProps = {
  label: string;
} & ChipVariantsType;

function Chip({ label, intent }: ChipProps) {
  // 난 나만의 칩을 위해 추가적 클래스네임을 줄거야!
  //props로 className을 전달받으면? chipVariants({className, intent})
  return <div className={chipVariants({ intent })}>{label}</div>;
}

export default Chip;

// const colorClassName = clsx({
//   "bg-blue-500 border-blue-500 text-white": color === "blue" && !outline,
//   " border-blue-500 text-blue-500": color === "blue" && outline,
//   "bg-yellow-500 border-yellow-500 text-white": color === "yellow" && !outline,
//   " border-yellow-500 text-yellow-500": color === "yellow" && outline === true,
// });
