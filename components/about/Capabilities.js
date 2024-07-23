import Title from "../ui/Title";

const Capabilities = () => {
  const capabilities = [
    "HTML",
    "CSS",
    "Javascript",
    "Jquery",
    "Accessibility",
    "Figma",
    "Tailwind Css",
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
          <Title title={"Capabilities"} />
          <div>
            <p className="text-lg">
              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-4 mt-6">
              {capabilities.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="uppercase px-6 py-3 border border-stone-600 rounded-3xl"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Capabilities;
