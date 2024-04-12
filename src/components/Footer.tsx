import GithubIcon from "@/app/ui/GithubIcon";
import LinkedInIcon from "@/app/ui/LinkedInIcon";

const Footer = () => {
	return (
		<footer className="flex flex-row gap-4 py-4 bg-slate-100 bg-opacity-10 w-screen items-center justify-center">
			Developed by Lucas Rojas{" "}
			<a href="https://www.linkedin.com/in/lucaasrojas/" target="_blank">
				<LinkedInIcon />
			</a>
			<a href="https://github.com/lucaasrojas" target="_blank">
				<GithubIcon />
			</a>
		</footer>
	);
};

export default Footer;
