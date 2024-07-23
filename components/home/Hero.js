import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Magnetic from "../ui/Magnetic";

const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen items-center">
        {/* <div className="min-h-dvh flex flex-col justify-center"> */}
        <div className="py-28 pb-10 md:py-28">
          <h1 className="bebas_Neue text-7xl md:text-8xl text-white">
            hi, i am
            <br />
            Sachin Desai.
          </h1>
          <p className="text-lg">
            A Mumbai based front-end developer passionate about building
            accessible and user friendly websites.
          </p>
          <div className="flex gap-4 items-center mt-8">
            <Magnetic>
              <Link
                href={"/"}
                className="h-14 bg-lime-400 pl-6 pr-2 flex items-center text-stone-950 font-bold rounded-[54px] gap-3 group"
              >
                CONTACT ME
                <div className="bg-black w-11 h-11 rounded-full grid place-items-center text-xl scale-[0.25] group-hover:scale-100 ease-in-out duration-150">
                  <FaArrowRight className="-rotate-45 text-lime-400 scale-0 group-hover:scale-100" />
                </div>
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/sachindesai28/"
                target="_blank"
                className="w-14 h-14 bg-stone-800 text-lime-400 rounded-full grid place-items-center text-xl"
              >
                <FaLinkedinIn />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://www.github.com/sachind3/"
                target="_blank"
                className="w-14 h-14 bg-stone-800 text-lime-400 rounded-full grid place-items-center text-xl"
              >
                <FaGithub />
              </a>
            </Magnetic>
          </div>
        </div>
        <div>
          <Image
            data-scroll
            data-scroll-speed={0.2}
            src={"/hero.png"}
            priority
            alt="hero"
            width={600}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
