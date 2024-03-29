import {
  Button,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Navbar className="rounded-md shadow-lg mt-2">
      <NavbarBrand>Sierra</NavbarBrand>
      <NavbarContent className="flex flex-row-reverse">
        <Link href={"/signup"}>
          <Button className="shadow-md" variant="flat">
            Sign Up
          </Button>
        </Link>
        <Divider orientation="vertical" />
        <Link href="/login">
          <Button color="primary" variant="shadow">
            Login
          </Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
