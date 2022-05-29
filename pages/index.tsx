import MainBody from "@/components/layouts/main-body";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  return (
    <MainBody>
      <article className="p-5">
        {/* Pstagram */}
        <section>
          <div className="flex items-center justify-between">
            <h1 className="tracking-wider font-semibold">
              우리 아이가 이뻐졌어요
            </h1>
            <Link href="/pets/precious">
              <a>
                <motion.button
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.1,
                    delay: 0,
                  }}
                  className="text-violet-500 transition"
                >
                  더보기
                </motion.button>
              </a>
            </Link>
          </div>
          <div className="h-40 mt-2">
            <ul className="flex items-center gap-3 h-full">
              {[1, 2, 3].map((i) => (
                <li className="h-full w-full rounded-md aspect-square bg-violet-500 cursor-pointer"></li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </MainBody>
  );
};

export default Home;
