import clazz from "libs/clients/clazz";
import { useState } from "react";

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
          "w-5 border-t-2 border-black transition",
          isVisible ? "active rotate-45 translate-y-2 w-6" : ""
        )}
      ></div>
      <div
        className={clazz(
          "w-5 border-t-2 border-black transition-all",
          isVisible ? "active w-0" : ""
        )}
      ></div>
      <div
        className={clazz(
          "w-5 border-t-2 border-black transition",
          isVisible ? "active -rotate-45 -translate-y-1 w-6" : ""
        )}
      ></div>
    </div>
  );
}
