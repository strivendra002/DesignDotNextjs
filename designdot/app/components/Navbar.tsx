import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6 text-[13px] font-medium">
          <div className="border-2 border-black px-2 py-1 text-xs font-bold text-black">
            DEMO
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wide">
          <a className="text-black hover:text-blue-600 transition" href="#">
            WHO WE SERVE
          </a>
          <a className="text-black hover:text-blue-600 transition" href="#">
            SOLUTIONS
          </a>
          <a className="text-black hover:text-blue-600 transition" href="#">
            RESOURCES
          </a>
          <a className="text-black hover:text-blue-600 transition" href="#">
            ABOUT US
          </a>
          <a className="text-black hover:text-blue-600 transition" href="#">
            CONTACT US
          </a>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <Search className="w-5 h-5 cursor-pointer text-black" />
          <span className="cursor-pointer text-black">IND</span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-black">ENGLISH</span>
            <span className="text-black">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
}
