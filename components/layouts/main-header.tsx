import Image from "next/image";
import LogoImage from "@/assets/logos/cat.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import MenuButton from "../menu-button";

const MainHeader = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const onMenuClick = () => {
    setIsMenuVisible((current) => !current);
  };

  return (
    <header className="py-6 px-2 flex justify-between">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="flex items-center gap-1 cursor-pointer"
      >
        <Image src={LogoImage} alt="Logo image" width={30} height={30} />
        <Link href="/">
          <a>
            <h1 className="text-gradient">cium</h1>
          </a>
        </Link>
      </motion.div>
      <div>
        <ul className="flex items-center gap-2 tracking-widest font-semibold">
          <li className="cursor-pointer">Join</li>
          <li>Login</li>
        </ul>
        {/* <MenuButton onClick={onMenuClick} isVisible={isMenuVisible} /> */}
      </div>
    </header>
  );
};

export default MainHeader;
