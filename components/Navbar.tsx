"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="flex fixed top-0 left-0 right-0 justify-between items-center h-16 px-10 bg-accent z-40">
      <div>
        <Link href="/">
          <h1 className="text-xl font-bold tracking-wider">Miah World</h1>
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="/">Air Ticket</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="flex items-center">
        <ModeToggle />
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};

export default Navbar;
