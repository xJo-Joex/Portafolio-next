import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const Navbar = () => {
	const { pathname } = useRouter();

	const [background, setBackground] = useState("");
	const [scroll, setScroll] = useState("");
	const handleScroll = () => {
		setScroll(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});
	return (
		<header className={scroll > 1 ? "sticky" : pathname==="/github"? "change-position":''}>
			<Link href="/" className="logo">
				<img src="/logo.png" />
			</Link>
			{/* <div className="bx bx-menu" id="menu-icon"></div> */}
			<ul className="navlist">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#home">About</a>
				</li>

				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#home">Contact</a>
				</li>
			</ul>
			{/* <Link href="/github">
				<a className="nav-link">Github</a>
			</Link> */}
			<a href="/Profile.pdf" target={"_blank"} className="top-btn">
				Download CV
			</a>
		</header>
	);
};

export default Navbar;
