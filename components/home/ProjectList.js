import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const dataList = [
    {
      type: "Conceptual Work",
      image: "/work1.png",
      title: "Promotional landing page for our favorite show",
      body: "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      info: [
        {
          year: 2023,
        },
        {
          role: "Front-end Developer",
        },
      ],
      demo: "",
      github: "",
    },
    {
      image: "/work2.png",
      title: "Blog site for World News",
      body: "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.",
      info: [
        {
          client: "World News",
        },
        {
          year: 2022,
        },
        {
          role: "Front-end Developer",
        },
      ],
      demo: "",
      github: "",
    },
    {
      type: "Challange",
      image: "/work3.png",
      title: "E-commerce product page",
      body: "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      info: [
        {
          year: 2022,
        },
        {
          role: "Front-end Developer",
        },
      ],
      demo: "",
      github: "",
    },
  ];
  return (
    <div className="space-y-16 md:space-y-32">
      {dataList.map((data, index) => {
        return <ProjectItem key={index} data={data} />;
      })}
    </div>
  );
};
export default ProjectList;
