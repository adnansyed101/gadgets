import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, Moon, Search } from "lucide-react";

export default function Component() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-gray-700 font-semibold" prefetch={false}>
          Gadgets
          <span className="sr-only">Gadgets</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="nav-links-lg" prefetch={false}>
            Home
          </Link>
          <Link href="/about" className="nav-links-lg" prefetch={false}>
            About
          </Link>
          <Link href="/dashboard" className="nav-links-lg" prefetch={false}>
            Services
          </Link>
          <Link href="/contact" className="nav-links-lg" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-full"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Toggle aria-label="Toggle dark mode" className="rounded-full">
            <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Toggle>
          <Button className="hidden md:block">Sign Up</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <Menu className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link href="#" className="nav-links-sm" prefetch={false}>
                  Home
                </Link>
                <Link href="#" className="nav-links-sm" prefetch={false}>
                  About
                </Link>
                <Link href="#" className="nav-links-sm" prefetch={false}>
                  Services
                </Link>
                <Link href="#" className="nav-links-sm" prefetch={false}>
                  Contact
                </Link>
                <Link href="#" prefetch={false}>
                  <Button>Sign Up</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
