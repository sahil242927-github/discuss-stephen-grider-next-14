"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import SearchInput from "./search-input";
import { Suspense } from "react";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session?.data) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session?.data?.user?.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            {/*  <form action={actions.signOut}>
              <Button type="submit" color="primary" variant="flat">
                Sign Up
              </Button>
            </form> */}
            {/* NOTE: removing session from "next-auth/react" will delete both server and client session, but inside client component, but if you delete session from server component, it will not delete client component, you have to refresh the page for updated session  */}
            <Button onClick={() => signOut()}> SignOut</Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signOut}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return (
    <Navbar className="shadow md-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}
