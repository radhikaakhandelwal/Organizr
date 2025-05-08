import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="w-full border-b font-poppins">
      {/* wrapper is custom class in global.css which has some style defined */}
      <div className="wrapper flex items-center justify-between ">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/Capture.PNG"
            width={128}
            height={38}
            alt="Organizr"
          />
        </Link>

        {/* set up CLERK */}

        {/* DESKTOP NEV */}
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex justify-end gap-3">
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            {/* MOILE NAV */}
            <SignedIn>
              {/* <nav className="md:flex-between hidden w-full max-w-xs"> */}
              <MobileNav />
              {/* </nav> */}
              <UserButton />
            </SignedIn>

            <SignedOut>
              {/* <SignInButton /> */}
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">Login</Link>
              </Button>

              {/* <SignUpButton /> */}
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </SignedOut>
          </header>
        </div>
      </div>
    </header>
  );
};

export default Header;
