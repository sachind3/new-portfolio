import Title from "../ui/Title";

const Experience = () => {
  const experience = [
    {
      role: "Sr. Frontend Developer",
      company: "Thynksight Technologies",
      year: "Oct 2023 - April 2024",
      body: "Senior Frontend Developer with over 5 months of experience at Thynksight Technologies, specializing in the insurance domain. Proficient in resolving JavaScript and jQuery-based issues while consistently delivering innovative UI solutions tailored to client specifications. Proven ability to thrive in dynamic, fast-paced environments, with a keen eye for detail and a dedication to enhancing user experiences.",
    },
    {
      role: "Sr. Frontend Developer",
      company: "Sol Communications & Strategies Pvt. Ltd.",
      year: "Sept 2019 - Oct 2023",
      body: "4 years of experience in pharma industry. Communicate with the client to understand the requirement of the website, gained experience in project planning, involved in writing the Project Design Document and Project Plan Document. Involved in write application level code to interact with APIs, Web Services using AJAX, JSON. we build web app based games on javascript / react for doctors and patients. Create and maintain employee management portals.",
    },
    {
      role: "Frontend Developer",
      company: "Netbiz Systems Pvt. Ltd.",
      year: "Sept 2018 - Sept 2019",
      body: "Analyze existing web applications and identify opportunities to enhance functionality and improve the user experience also worked on different launching campaigns for real estate companies. Create and maintain landing pages as per client requirement.",
    },
    {
      role: "Frontend Developer",
      company: "Innovins Technologies Pvt. Ltd.",
      year: "Sept 2015 - May 2018",
      body: "Worked on all types of websites like portfolio, ecommerce, portal, matrimonial site, educational forums. Learned ionic framework and javascript knowledge",
    },
    {
      role: "Web Designer",
      company: "Affix Center Pvt. Ltd.",
      year: "Sept 2014 - Sept 2015",
      body: "Worked with business and design requirements to develop web pages that adhered to company, industry and usability standards also Coordinated with a team of UX and UI developers to build quality web applications with cross-browser compatibility.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
          <Title title={"Experience"} />
          <div className="space-y-16 mt-6">
            {experience.map((item, index) => {
              return (
                <div key={index} className="space-y-2">
                  <div className="md:flex items-start gap-6 justify-between">
                    <h4 className="text-2xl md:text-3xl font-medium">
                      {item.role}
                    </h4>
                    <div className="text-sm font-light">{item.year}</div>
                  </div>
                  <div className="text-lime-400">{item.company}</div>
                  <p className="text-lg">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
