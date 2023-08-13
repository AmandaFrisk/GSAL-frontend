import ButtonComponent from "../components/ButtonComponent";
import "./WhatWeDoComponent.css";
import avatar from "../assets/avatar.png";

const WhatWeDoComponent = () => (
	<div className="what-we-do-comp-container">
		<div className="header-container">
			<h1>What GoSaveALife Does</h1>
			<h2>
				Raise awareness about the critical need for organ donation and to
				facilitate the donor matching process.
			</h2>
		</div>
		<div className="features-container">
			<div className="feature-wrapper">
				<img src={avatar}></img>
				<div className="content-wrapper">
					<h1>Recruit Donors</h1>
					<h2>
						My life took an incredible turn when she discovered GoSaveALife. In
						a time of desperation, this non-profit organization brought assisted
						Lisa to become a kidney donor for her brother. Guided by their
						support and resources, she embarked on a life-altering journey,
						ultimately saving her brother's life.
						<br />
						<br /> -Lisa Smith
					</h2>
					<ButtonComponent text="Become A Donar"></ButtonComponent>
				</div>
			</div>
			<div className="feature-wrapper">
				<img src={avatar}></img>
				<div className="content-wrapper">
					<h1>Find Candidates</h1>
					<h2>Testimony #2</h2>
					<ButtonComponent text="View Candidates"></ButtonComponent>
				</div>
			</div>
			<div className="feature-wrapper">
				<img src={avatar}></img>
				<div className="content-wrapper">
					<h1>Spread Awareness</h1>
					<h2>
						I want to express my deepest gratitude to GoSaveALife for their
						incredible efforts in educating and raising awareness about kidney
						donations in our community. As someone who witnessed firsthand the
						impact of their community events and platforms, I can confidently
						say that they have made a significant difference in the lives of
						those in need. <br />
						<br />
						-Chris Thomas
					</h2>
				</div>
			</div>
			<div className="feature-wrapper">
				<img src={avatar}></img>
				<div className="content-wrapper">
					<h1>Raise Money</h1>
					<h2>
						GoSaveALife has successfully raised an impressive (x amount) of
						funding, facilitating meaningful connections between kidney donors
						and recipients, and bringing hope to those in need of life-saving
						transplants.
					</h2>
					<ButtonComponent text="Contribute"></ButtonComponent>
				</div>
			</div>
		</div>
	</div>
);

export default WhatWeDoComponent;
