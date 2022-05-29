import Image from "next/image";
import LogoImage from "@/assets/logos/cat.png";

export default function MainFooter() {
  return (
    <footer className="flex flex-col items-center p-2 border-t">
      <div className="flex items-center gap-2">
        <Image src={LogoImage} width={30} height={30} />
        <h1 className="text-gradient">cium</h1>
      </div>
    </footer>
  );
}
