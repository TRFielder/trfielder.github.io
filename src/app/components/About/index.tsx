import Image from "next/image";

const About = () => {
  return (
    <section id="About" className="flex flex-col items-center font-extralight">
      <article className="text-white flex flex-col items-center justify-center py-12 w-1/2">
        <h3 className="text-2xl font-semibold">About Me</h3>
        <div className="flex flex-row">
          <p className="my-5 mx-0 text-xl">
            I am currently working as a front end developer as part of a growing
            team building a web-based platform for scientific applications.
          </p>
          <div className="grid grid-cols-4 gap-2">
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              width={500}
              height={500}
            />
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              width={500}
              height={500}
            />
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              width={500}
              height={500}
            />
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              width={500}
              height={500}
            />
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              width={500}
              height={500}
              className="bg-white"
            />
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
              width={500}
              height={500}
            />
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              width={500}
              height={500}
            />
            <Image
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div></div>
      </article>
    </section>
  );
};

export default About;
