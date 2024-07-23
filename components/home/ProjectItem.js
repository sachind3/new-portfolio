import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa6";

const ProjectItem = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
      <div className="bg-stone-800 aspect-square rounded-3xl grid place-items-center relative">
        {data?.type && (
          <div className="absolute bg-[var(--background)] top-6 left-6 rounded-3xl px-6 py-2">
            {data.type}
          </div>
        )}
        <Image
          src={data.image}
          width={490}
          height={351}
          alt={data.title}
          priority={false}
        />
      </div>
      <div className="relative flex items-start justify-center flex-col">
        <h3 className="text-2xl md:text-3xl font-medium mb-3 md:mb-4">
          {data.title}
        </h3>
        <p className="text-lg mb-3 md:mb-4">{data.body}</p>
        <table className="table w-full mb-4">
          <thead>
            <tr className="border-b border-b-stone-600">
              <th colSpan={2} className="py-4 text-left">
                PROJECT INFO
              </th>
            </tr>
          </thead>
          <tbody>
            {data.info.map((item, index) => {
              const key = Object.keys(item)[0];
              const value = item[key];
              return (
                <tr key={index} className="border-b border-b-stone-600">
                  <td className="py-4">{key}</td>
                  <td className="py-4 text-right">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex gap-6">
          <Link
            href={"/"}
            className="text-lime-400 flex items-center gap-2 border-b-2 border-b-lime-400"
          >
            <span>LIVE DEMO</span>
            <FaArrowRight className="-rotate-45 text-xl" />
          </Link>
          <Link
            href={"/"}
            className="text-lime-400 flex items-center gap-2 border-b-2 border-b-lime-400"
          >
            <span>SEE ON GITHUB</span> <FaGithub className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
