"use client";

import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/",
    },
  ];

  const { user } = useKindeBrowserClient();

  return (
    <section className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10 ">
        <Image src="/logo.png" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link key={index} href={item?.path}>
              <li className="hover:text-secondary cursor-pointer hover:scale-105 transition-all ease-in-out ">
                {item?.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {user ? (
        <Popover>
          <PopoverTrigger>
            <Image
              src={user?.picture}
              alt="profile-image"
              width={50}
              height={50}
              className="rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex flex-col gap-3 ">
              <li className="cursor-pointer font-semibold hover:text-secondary hover:border-secondary border p-2 rounded-md">
                Profile
              </li>
              <li className="cursor-pointer font-semibold hover:text-secondary hover:border-secondary border p-2 rounded-md">
                My Booking
              </li>
              <li>
                {" "}
                <LogoutLink>
                  <Button className="bg-white text-secondary font-semibold border border-secondary hover:bg-secondary hover:text-white">
                    Log out
                  </Button>
                </LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          <Button className="bg-white text-secondary font-semibold border border-secondary hover:bg-secondary hover:text-white">
            Get Started
          </Button>
        </LoginLink>
      )}
    </section>
  );
}

export default Header;
