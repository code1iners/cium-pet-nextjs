import clazz from "libs/clients/clazz";

interface MenuButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export default function MenuButton({ onClick, isVisible }: MenuButtonProps) {
  return (
    <div
      className="flex flex-col items-center gap-1 cursor-pointer transition relative"
      onClick={onClick}
    >
      <div
        className={clazz(
          "menu-line",
          isVisible ? "rotate-45 translate-y-2 w-6" : ""
        )}
      ></div>
      <div className={clazz("menu-line", isVisible ? "w-0" : "")}></div>
      <div
        className={clazz(
          "menu-line",
          isVisible ? "-rotate-45 -translate-y-1 w-6" : ""
        )}
      ></div>
    </div>
  );
}
