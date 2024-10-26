const About = () => {
	return (
		<section id="About" className="flex flex-col items-center font-extralight">
			<article className="text-white flex flex-col items-center justify-center py-12 w-2/3">
				<h3 className="text-2xl font-semibold mb-8">About Me</h3>
				<div className="flex flex-col items-center">
					<p className="my-5 mx-0 text-xl text-center">
						I am currently working as a software engineer as part of a team working on
						software to support the primary realisation of mass for the UK
					</p>

					<p className="my-5 mx-0 text-xl text-center">
						Outside that, I&apos;m into building small hobby projects (both software and
						physical), and pretending I&apos;m good at moving heavy circles at the local
						gym
					</p>
				</div>
			</article>
		</section>
	);
};

export default About;
