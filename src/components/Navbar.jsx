import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-emerald-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold">Bu Lin</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-emerald-800/90 sm:flex">
          <a href="#products" className="hover:text-emerald-900">Products</a>
          <a href="#about" className="hover:text-emerald-900">About</a>
          <a href="#contact" className="hover:text-emerald-900">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
