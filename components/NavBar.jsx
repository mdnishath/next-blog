"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const NavBar = () => {
  const pathName = usePathname();
  //   console.log(pathName);
  return (
    <nav className="fixed top-0 z-50 flex items-center w-full h-16 p-4 bg-white shadow-md dark:bg-gray-800 ">
      <Container>
        <div className="flex justify-between w-full">
          <Link href="/">
            <p className="text-2xl font-bold text-primary">Logo</p>
          </Link>
          <ul className="flex gap-8">
            <li
              className={`text-lg font-semibold ${
                pathName === "/login"
                  ? "text-primary"
                  : "text-black dark:text-white"
              }`}
            >
              <Link href={"/login"}>Login</Link>
            </li>
            <li
              className={`text-lg font-semibold ${
                pathName === "/signup"
                  ? "text-primary"
                  : "text-black dark:text-white"
              }`}
            >
              <Link href={"/signup"}>Signup</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
