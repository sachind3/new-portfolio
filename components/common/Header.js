import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 fixed top-0 left-0 z-20 w-full bg-[#0a0a0a]/70 backdrop-blur shadow">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href={"/"} className="bebas_Neue text-3xl">
          SACHIN DESAI
        </Link>
        <nav className="space-x-4 md:space-x-8">
          <Link href={"/"}>Work</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
