import Image from "next/image";

const About = () => {
  return (
    <section id="About" className="flex flex-col items-center font-extralight">
      <article className="text-white flex flex-col items-center justify-center py-12 w-1/2">
        <h3 className="text-2xl font-semibold mb-8">About Me</h3>
        <div className="flex flex-col">
          <p className="my-5 mx-0 text-xl">
            I am currently working as a front end developer as part of a growing
            team building a web-based platform for scientific applications.
          </p>

          <p className="my-5 mx-0 text-xl">
            Outside that, I&apos;m into building small hobby projects (both
            software and physical), and enjoy pretending I&apos;m good at moving
            heavy circles at the local gym
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
