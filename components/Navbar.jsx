import { CATEGORIES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <Image src="/logo.svg" width={100} height={35} alt="logo" />
        <ul className="flex justify-between gap-3 text-sm">
          <li>
            <Link className="capitalize" href="/">
              home
            </Link>
          </li>
          <li>
            <Link className="capitalize" href="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="capitalize" href="/contact-us">
              contact us
            </Link>
          </li>
          <li>
            <Link className="capitalize" href="/terms-and-conditions">
              terms and conditions
            </Link>
          </li>
          <li>
            <Link className="capitalize" href="/privacy-policy">
              privacy policy
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex gap-4 overflow-x-auto">
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <Link href={category.href}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
