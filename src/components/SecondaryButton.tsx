import { ArrowLeft, ArrowRight } from "lucide-react";

export const SecondaryButton = ({
  className = "",
  text = "Button text",
  showLeftIcon = true,
  showRightIcon = true,
}) => {
  return (
    <button
      className={`
        flex items-center justify-center flex-row
        w-full h-[40px]
        rounded-[8px]
        font-['Eczar'] font-semibold
        bg-yellow-400 hover:bg-yellow-500
        text-[color:var(--color-blue-gray-900)]
        px-[var(--spacing-4)] py-[var(--spacing-2-5)]
        gap-[var(--spacing-1-5)]
        shadow-yellowglow  
        transition-shadow duration-300
        ${className}
      `}
    >
      {showLeftIcon && <ArrowLeft className="w-4 h-4" />}
      <span>{text}</span>
      {showRightIcon && <ArrowRight className="w-4 h-4" />}
    </button>
  );

  
};
