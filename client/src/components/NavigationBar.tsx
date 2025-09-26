import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "#profile", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-200 overflow-hidden",
      isScrolled ? "bg-background/60 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      {/* Left hemisphere */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-72 h-72">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
      </div>
      
      {/* Right hemisphere */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-72 h-72">
        <div className="w-full h-full rounded-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto flex items-center justify-between h-16 px-4 relative">
        <Link href="/">
          <a className="text-xl font-bold hover:text-primary transition-colors">
            R I S I N 
          </a>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href}>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
        </div>
      </div>
    </header>
  );
}