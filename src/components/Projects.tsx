"use client";
import Link from "next/link";
import projectsData from "../data/projects.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";


interface Project {
  id: number;
  title: string;
  // slug: string,
  description: string;
  // price: number,
  // instructor: string,
  image:string;
  isFeatured: boolean;
}

function FeaturedProjects() {
  const featuredProjects = projectsData.projects.filter(
    (project: Project) => project.isFeatured
  );

  return (
    // <div className="py-12">
    <div className="min-h-screen  w-full dark:bg-black bg-white   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]relative ">

      <div>
        
        <div className="text-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        PROJECTS
      </p>
          {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p> */}
        </div>
      </div>
      <div className="mt-10 mx-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">

          {featuredProjects.map((project: Project) => (
            <div key={project.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              {/* <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"> */}
                {/* <Link href={'https://github.com/itihask56'}> */}
                <Image
                  src={project.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                {/* </Link> */}
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {project.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {project.description}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
          
        </div>
       
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProjects;
