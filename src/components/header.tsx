import Link from "next/link";
import * as actions from '@/actions'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@nextui-org/react";
import {auth} from '@/auth'
import HeaderAuth from "@/components/header-auth";
import SearchInput from "@/components/search-input";
import {Suspense} from "react";

export default async function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href='/' className="font-bold"> Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Suspense>
          <SearchInput/>
        </Suspense>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth/>
      </NavbarContent>

    </Navbar>
  )

}
