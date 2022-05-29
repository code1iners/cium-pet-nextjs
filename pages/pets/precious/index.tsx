import MainBody from "@/components/layouts/main-body";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Precious() {
  return (
    <MainBody>
      <article className="h-full p-5">
        <ul className="flex flex-col gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <li key={i} className="aspect-video bg-violet-500 rounded-md"></li>
          ))}
        </ul>

        {/* FAB */}
        <motion.div
          whileTap={{
            scale: 0.8,
          }}
          whileHover={{
            scale: 1.2,
          }}
          className="w-14 h-14 fixed bottom-5 right-5 rounded-full overflow-hidden"
        >
          <Link href="/pets/precious/uploads">
            <a>
              <button className="w-full h-full bg-emerald-500 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </a>
          </Link>
        </motion.div>
      </article>
    </MainBody>
  );
}
