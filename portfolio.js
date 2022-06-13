import emoji from "react-easy-emoji";

export const greetings = {
	name: "Faraz Rasheed",
	title: "Hi all, I'm Faraz",
	description:
		"I'm passionate Mobile developer having an experience of mobile applications with java, kotlin, Jetpack Compose development on Android Studio. Technically sophisticated Application Developer with solid history of building, integrating, testing, implementing, and supporting android applications for mobile on android with knowledge in an engineering development environment. Proven track record of developing and executing various  successful android applications.",
	resumeLink:
		"https://docs.google.com/document/d/1ighzEjBce2QAzS35uWv462H5ERyTc1FZU2oEuYcQokY/edit?usp=sharing",
};

export const openSource = {
	githubUserName: "FarazRasheed",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/farazrasheedraza",
	instagram: "https://www.instagram.com/faraxraxeed/",
	twitter: "https://twitter.com/FarazRaxeed",
	github: "https://github.com/FarazRasheed",
	linkedin: "https://www.linkedin.com/in/faraz-rasheed-7034b4113/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY MOBILE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Mobile Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Self-driven, result oriented, Critical thinker, Technical problem solver."
				),
				emoji("⚡ extensive experience in the full life cycle of the software design and implementation process including requirements definition, prototyping, and proof of concept, design, interface implementation, testing, maintenance and technical leadership."),
				emoji(
					"⚡ Utilize troubleshooting, teamwork, communication, and project engagement skills across all levels of staff, consumers, and key decision-makers."
				),
			],
			softwareSkills: [
				{
					skillName: "Android",
					fontAwesomeClassname: "flat-color-icons:android-os",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "vscode-icons:file-type-java",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "ReactNative",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "MVVM",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Kotlin",
					fontAwesomeClassname: "logos:kotlin",
				},
				{
					skillName: "JetPack",
					fontAwesomeClassname: "simple-icons:jetpackcompose",
				},

				{
					skillName: "Fintech",
					fontAwesomeClassname: "arcticons:nexo-wallet",
				},
			],
		},
		{
			title: "Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on cross platforms"),
				emoji(
					"⚡ Hosting and maintaining application on Google Play."
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions | Bitrise"
				),
			],
			softwareSkills: [
				{
					skillName: "Google PlayStore",
					fontAwesomeClassname: "ion:logo-google-playstore",
				},
				{
					skillName: "Circle CI",
					fontAwesomeClassname: "lant-design:ci-circle-filled",
				},
				{
					skillName: "Bitrise",
					fontAwesomeClassname: "logos:bitrise",
				},
				{
					skillName: "TDD",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "logos:firebase",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "IoT",
					fontAwesomeClassname: "eos-icons:iot",
				}
			],
		},
		{
			title: "Third Party Platforms",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing web applications using Node Js"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts"
				),
				emoji(
					"⚡ Responsible for implementing new solutions/feature-sets and maintaining existing applications for Android"
				),
				emoji(
					"⚡ Accountable for the successful delivery and implementation of complex enterprise-scale mobile projects involving multiple back-end systems, as well as new technologies/innovations"
				),
				emoji(
					"⚡ Coordinate coding, testing , implementation, integration and documentation of solution. Develop program specifications"
				),
			],
			softwareSkills: [
				{
					skillName: "Google Cloud",
					fontAwesomeClassname: "akar-icons:google-contained-fill",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "simple-icons:firebase",
				},
				{
					skillName: "Mac",
					fontAwesomeClassname: "iconoir:apple-mac",
				},
				{
					skillName: "OOPs",
					fontAwesomeClassname: "simple-icons:coop",
				},
				{
					skillName: "Agile",
					fontAwesomeClassname: "carbon:fragile",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Android/Design", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Android", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Java", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Kotlin", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "MVVM", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "JetPack", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "30",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Engineering & Technology",
		subHeader: "Bacholer of Science in Computer Science",
		duration: "January 2011 - December 2014",
		desc: "Runner-up Pasha ICT awards 2015",
		descBullets: [
			"Enjoy reading and keeping myself up-to-date with all the technologies in smartphones and computers",
			"Participated in Softech Lahore and got 2nd runner up position in programming quizzes",
		],
	},
];

export const experience = [
	{
		role: "API Engineer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		link: "https://atlasmart.netlify.app/",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		link: "https://technota.netlify.app/",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		link: "https://shopaza.herokuapp.com/",
	},
	{
		name: "MMFmelody (Blog)",
		desc: "Here you will find amazing tips about health, beauty, and modern-day life.",
		// github: "https://github.com/1hanzla100",
		link: "https://mmfmelody.herokuapp.com/",
	},
	{
		name: "Developer-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];
