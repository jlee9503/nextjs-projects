import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

export default function WorkItem({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            id={"project-" + item.id}
            className="basis-1/3 flex-1 shadow-lg rounded-xl p-10 dark:bg-slate-200"
            key={index}
          >
            <h3 className="font-bold text-center text-slate-900">
              {item.title}
            </h3>
            <div className="group relative w-52 h-52 mx-auto my-4 md:w-56 md:h-56 lg:w-60 lg:h-60">
              <Link href={item.projectLink}>
                <Image
                  src={item.thumbnail}
                  alt="project-thumbnail"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="flex justify-center items-center flex-col absolute top-0 left-0 w-52 h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 bg-gray-700 opacity-0 group-hover:opacity-80 duration-500">
                  <h3 className="text-slate-200 !opacity-100">{item.title}</h3>
                  <FiLink className="text-2xl text-slate-200 !opacity-100" />
                </div>
              </Link>
            </div>
            <p className="text-center text-slate-700">{item.description}</p>
            <h3 className="mt-4 mb-2 text-sky-400 text-center">Skills/Tools</h3>
            <ul className="text-center text-slate-700">
              {item.skills.map((skill, num) => (
                <li key={num}>{skill}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
