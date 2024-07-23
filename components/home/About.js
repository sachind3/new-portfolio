import Link from "next/link";
import Title from "../ui/Title";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
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
            <Link
              href={"/"}
              className="text-lime-400 border-b-2 border-b-lime-400 inline-block"
            >
              <span>MORE ABOUT ME</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
