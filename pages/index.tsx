import type { NextPage } from "next";
import MainHeader from "@/components/layouts/main-header";
import MainBody from "@/components/layouts/main-body";
import MainFooter from "@/components/layouts/main-footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <MainHeader />
      <MainBody />
      <MainFooter />
    </div>
  );
};

export default Home;
