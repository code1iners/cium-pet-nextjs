import Image from "next/image";
import LogoImage from "@/assets/logos/cat.png";
import Link from "next/link";
import { motion } from "framer-motion";

const MainHeader = () => {
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
        <ul className="flex items-center gap-3 tracking-widest font-semibold mr-2">
          <Link href="/sign-up">
            <a>
              <li className="header-item">Sign up</li>
            </a>
          </Link>
          <Link href="/sign-in">
            <a>
              <li className="header-item">Sign In</li>
            </a>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
