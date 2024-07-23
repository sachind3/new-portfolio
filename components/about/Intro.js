import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Magnetic from "../ui/Magnetic";
import Title from "../ui/Title";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-4 space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-14">
          <Title title={"About"} />
          <div className="col-span-2">
            <h4 className="text-2xl md:text-3xl font-medium mb-4">
              I am a front-end developer based in Sydney. Has Mechanical
              Engineering background.{" "}
            </h4>
            <p className="text-lg mb-4">
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
            </p>
            <div className="flex gap-4 items-center mt-8">
              <Magnetic>
                <Link
                  href={"/"}
                  className="h-14 bg-lime-400 pl-6 pr-2 flex items-center text-stone-950 font-bold rounded-[54px] gap-3 group"
                >
                  DOWNLOAD RESUME
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
        </div>
        <div className="bg-[#c7c7c7] rounded-3xl flex items-center justify-center pt-12">
          <Image
            src={"/about-hero.png"}
            alt="Sachin Desai"
            width={464}
            height={652}
            priority
          />
        </div>
      </div>
    </section>
  );
};
export default Intro;
