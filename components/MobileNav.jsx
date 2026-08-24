"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries, CiClose } from "react-icons/ci";

const links = [
  {
    name: "À propos",
    path: "#about",
  },
  {
    name: "Projets",
    path: "#projets",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" asChild>
        <button className="p-2 rounded-lg bg-primary/50 border border-border text-accent hover:bg-primary hover:border-accent/50 transition-all duration-300" aria-label="Menu">
          <CiMenuFries className="text-[28px]" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col p-6 lg:p-8" side="right">
        <div className="flex justify-end mb-8">
          <SheetTrigger asChild>
            <button className="p-2 rounded-lg bg-primary/50 border border-border text-muted-fg hover:bg-primary hover:border-accent/50 hover:text-accent transition-all duration-300" aria-label="Fermer">
              <CiClose className="text-[24px]" />
            </button>
          </SheetTrigger>
        </div>

        <div className="mb-12 text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-semibold text-foreground">Richard Diatta</h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={index}
                className={`group relative py-2 text-lg capitalize font-medium transition-colors duration-300 w-full text-center ${isActive ? "text-accent" : "text-muted-fg hover:text-accent"}`}
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                  {link.name}
                </span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 ease-out rounded-full group-hover:w-full group-hover:shadow-[0_0_8px_#1d4ed8]`}
                />
              </Link>
            );
          })}

          <div className="pt-4 border-t border-border w-full">
            <Link href="#contact">
              <button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold py-3 px-6 rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 flex items-center justify-center gap-2">
                Me contacter
              </button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;