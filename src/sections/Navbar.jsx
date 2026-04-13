import { useState } from "react";
import { motion } from "motion/react";
import GooeyNav from "@/components/GooeyNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg ">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">


          <a
            className="text-[20px] font-bold text-neutral-400 hover:text-white"
            href="/"
          >
            VISHAL
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden cursor-pointer text-neutral-400"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle menu"
            />
          </button>

          <nav className="hidden sm:flex">
            <GooeyNav
              items={items}
              particleCount={19}
              particleDistances={[90, 10]}
              particleR={200}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={700}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </nav>

        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[70, 10]}
              particleR={150}
              initialActiveIndex={0}
              animationTime={500}
              timeVariance={500}
              colors={[1, 2, 3, 4]}
            />
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;