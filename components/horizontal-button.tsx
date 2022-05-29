interface HorizontalButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function HorizontalButton({
  text,
  type,
  onClick,
}: HorizontalButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="w-full text-white bg-violet-500 p-3 rounded-md hover:bg-violet-600 outline-none"
    >
      {text ? text : "Button"}
    </button>
  );
}
