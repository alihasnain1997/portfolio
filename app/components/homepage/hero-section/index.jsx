// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            {/* <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link> */}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">solutionProvider</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">Name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Raza Amer</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              {/* <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Angular</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">RxJs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NgRx</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Micro-Front Ends</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Microservices</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Postgres</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Serverless</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redis</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">GraphQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">REST</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-gray-400">{"'],"}</span>
              </div> */}
              {/* <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Angular</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">RxJs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NgRx</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Micro-Front Ends</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Microservices</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TypeORM</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Sequelize</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Postgres</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redis</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">BullMQ</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">GraphQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">REST</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">S3</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Serverless</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Serverless Framework</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Socket.IO</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">CI/CD</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Jest</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-gray-400">{"'],"}</span>
              </div> */}
              {/* Frontend Skills */}
              {/* Backend Skills */}
              <div className="ml-4 lg:ml-8 mr-2 mt-2">
                <span className="text-white">Backend:</span>
                <span className="text-gray-400">{` ['`}</span>
                <span className="text-amber-300">Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Springboot</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Maven</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JPA</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JDBC</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Hibernate</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Microservices</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">GraphQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">REST APIs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Keycloak</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">OKTA</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              {/* Database Skills */}
              <div className="ml-4 lg:ml-8 mr-2 mt-2">
                <span className="text-white">Databases:</span>
                <span className="text-gray-400">{` ['`}</span>
                <span className="text-amber-300">Postgres</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redis</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              {/* DevOps / Cloud / Tools */}
              <div className="ml-4 lg:ml-8 mr-2 mt-2">
                <span className="text-white">DevOps / Tools:</span>
                <span className="text-gray-400">{` ['`}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">S3</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Kafka</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">GraalVM</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Liquibase</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">CI/CD</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              {/* Monitoring & Logging */}
              <div className="ml-4 lg:ml-8 mr-2 mt-2">
                <span className="text-white">Monitoring & Logging:</span>
                <span className="text-gray-400">{` ['`}</span>
                <span className="text-amber-300">Grafana</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Prometheus</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Elasticsearch</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              {/* Testing & Other */}
              <div className="ml-4 lg:ml-8 mr-2 mt-2">
                <span className="text-white">Other:</span>
                <span className="text-gray-400">{` ['`}</span>
                <span className="text-amber-300">Scrum Master</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  problemSolver:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  hireable:
                </span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                  return
                </span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
