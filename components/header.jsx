"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl px-4 sm:px-8 mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="group flex items-center">
            <span className="text-xl lg:text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
              Richard Diatta
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Nav />
            <Link href="#contact">
              <Button className="gap-2 bg-accent hover:bg-accent-hover text-accent-foreground shadow-lg shadow-accent/25">
                Me contacter
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;