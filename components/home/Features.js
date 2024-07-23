import Title from "../ui/Title";
import ProjectList from "./ProjectList";

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Title title={"Featured Projects"} />
        <p className="text-lg max-w-xl mb-8">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
        <ProjectList />
      </div>
    </section>
  );
};
export default Features;
