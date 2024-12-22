import Image from "next/image";

const Contact = () => {
	return (
		<section id="contact" className="flex flex-col items-center font-extralight text-white">
			<h3 className="text-2xl font-semibold mb-8">Contact</h3>
			<div className="flex flex-row items-center gap-8 w-2/3 justify-center">
				<a href="http://linkedin.com/in/tom-fielder">
					<Image
						alt="LinkedIn"
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
						width={70}
						height={70}
					/>
				</a>
				<p>
					Or just drop me an{" "}
					<a className="hover:text-blue-400" href="mailto:tom.fielder97@gmail.com">
						email
					</a>
				</p>
			</div>
		</section>
	);
};

export default Contact;
