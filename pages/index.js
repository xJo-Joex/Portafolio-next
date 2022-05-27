import Layout from "../components/Layout";
import Link from "next/dist/client/link";
import { skills, experiences, projects } from "../profile";
const Index = () => (
	<Layout>
		{/** Header card */}
		{/* <main className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4 ">
              <img
                src="profile.jpg"
                alt="Profile Img"
                className="img-fluid mx-auto d-block img-thumbnail "
              />
            </div>
            <div className="col-md-8">
              <h1>Joe Vega</h1>
              <h2>Frontend Developer</h2>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros
                nunc fringilla id rutrum nibh. Orci convallis pulvinar urna
                fusce at purus neque nam leo? Suspendisse semper facilisi
                parturient sit euismod placerat. Orci ante luctus praesent
                torquent orci commodo aptent blandit. Placerat arcu dui potenti;
                nullam taciti taciti amet.
              </p>
              <a href="hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </main> */}
		<section className="home" id="home">
			<div className="home-text">
				<h3>Hello, I'm</h3>
				<h1>Joe Vega</h1>
				<h5>
					A Web Developer <span>From Santo Domingo, Ecuador</span>
				</h5>
				<p>
					I'm a web developer passionate about learning new technologies and a person committed to what I
					do
				</p>
				<div className="social">
					{/* <a href="#">
						<i className="bx bxl-facebook"></i>
					</a> */}
					<a href="https://twitter.com/Xxte13" target={"_blank"}>
						<i className="bx bxl-twitter"></i>
					</a>
					<a href="https://www.linkedin.com/in/joe-vega-296b37185/" target={"_blank"}>
						<i className="bx bxl-linkedin"></i>
					</a>
					{/* <a href="#">
						<i className="bx bxl-behance"></i>
					</a> */}
				</div>
				<a href="#" className="btn">
					About Me
				</a>
			</div>

			<div className="home-img"></div>
		</section>
		{/**Second section */}
		<div className="row py-2">
			<div className="col-md-4">
				<div className="card bg-light">
					<div className="card-body">
						<h1 id="skills"> Skills</h1>
						{skills.map((element, i) => (
							<div className="py-3" key={i}>
								<h5>{element.skill}</h5>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{ width: element.percentage + "%" }}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="col-md-8">
				<div className="card bg-light">
					<div className="card-body">
						<h1 id="about">Experiencia</h1>
						<ul>
							{experiences.map(({ title, description, from, to }, index) => (
								<li key={index}>
									<h3>{title}</h3>
									<h5>
										{from}-{to}
									</h5>
									<p>{description}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="col-md-12">
			<div className="card card-body bg-dark">
				<div className="row">
					<div className="col-md-12">
						<h1 className="text-center text-light" id="portfolio">
							Portafolio
						</h1>
					</div>
					{projects.map(({ title, description, image, link }, index) => (
						<div className="col-md-4 py-4" key={index}>
							<div className="card h-100">
								<div className="overflow">
									<img src={`/${image}`} alt="Image Project" className="img-thumbnail card-img-top" />
								</div>
								<div className="card-body">
									<h3>{title}</h3>
									<p>{description}</p>
									<a href={link} target="_blank">
										Ir al sitio
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-4">
					<Link href="/portafolio">
						<a className="btn btn-outline-light">More Projects</a>
					</Link>
				</div>
			</div>
		</div>
	</Layout>
);
export default Index;
