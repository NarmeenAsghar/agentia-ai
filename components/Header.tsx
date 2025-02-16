import React from "react";
import Link from "next/link";
import { RiRobot2Line } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 px-10 bg-zinc-950 shadow-md border-b border-opacity-70 border-purple-500 fixed w-full z-10">
      <div className="flex items-center gap-2">
        <RiRobot2Line className="text-2xl text-purple-500" size={30} />
        <h1 className="text-xl font-medium text-white">
          <Link href="/">Agentia World</Link>
        </h1>
      </div>
      <div className="md:flex items-center gap-6 hidden">
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="#features"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#technology"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                href="#agents"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Agents
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-purple-800 transition-colors">
          Launch Console
        </button>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden text-white" aria-label="Open menu">
          <Menu />
        </SheetTrigger>
        <SheetContent className="p-4 bg-zinc-950 pt-10">
          
            <nav>
              <ul className="flex flex-col items-start gap-6">
                <li>
                  <Link
                    href="#features"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#technology"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="#agents"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <button className="text-white mt-6 px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:bg-purple-700 transition-colors">
              Launch Console
            </button>
          
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
