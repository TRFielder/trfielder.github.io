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
					Or just drop an email to{" "}
					<a className="hover:text-blue-400" href="mailto:me@tomfielder.co.uk">
						me@tomfielder.co.uk
					</a>
				</p>
			</div>
		</section>
	);
};

export default Contact;
