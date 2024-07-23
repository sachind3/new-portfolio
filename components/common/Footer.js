import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import ContactForm from "./ContactForm";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <Title title={"Let’s connect"} />
              <p className="text-lg">
                Say hello at{" "}
                <a href="mailto:desai.sachin45@gmail.com" className="underline">
                  desai.sachin45@gmail.com
                </a>
              </p>
              <p className="text-lg">
                For more info, here’s my{" "}
                <a href="/" className="underline">
                  resume
                </a>
              </p>
              <div className="flex gap-6 text-lime-400 text-3xl mt-6">
                <a
                  href="https://www.linkedin.com/in/sachindesai28/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a href="https://www.github.com/sachind3/" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://x.com/sachind3/" target="_blank">
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/desai.sachin45/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <footer className="py-4 w-full">
        <div className="container mx-auto px-4 flex items-center justify-center text-center text-sm">
          &copy; {new Date().getFullYear()} Sachin Desai - Designing interactive
          journeys for the web.
        </div>
      </footer>
    </>
  );
};
export default Footer;
