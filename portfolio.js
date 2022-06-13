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
					fontAwesomeClassname: "ant-design:ci-circle-filled",
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
		role: "Principal Software Engineer",
		company: "Digitify",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Apr 2021",
		desc: "At Digitify, I am working as Senior Android application developer. My role here is to divide the whole project into modules before starting, define the architecture of the whole project and then lead the team to develop discrete modules according to Agile Scrum methodology based on two week sprints.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Team Lead",
		company: "Onebyte",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2015 – Mar 2019",
		desc: "At Onebyte studios, I am working as Senior Lead Android and React Native application developer. My role here is to divide the whole project into modules before starting, define the architecture of the whole project and then lead the team to develop discrete modules according to Agile Scrum methodology based on two week sprints.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Sr. Mobile Developer",
		company: "Field Force",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Mar 2019 - DEC 2019",
		desc: "At Field Force, I am working as Senior Lead Android and React Native application developer. My role here is to divide the whole project into modules before starting, define the architecture of the whole project and then lead the team to develop discrete modules according to Agile Scrum methodology based on two week sprints.",
	},
	{
		role: "Tech Lead",
		company: "Onebyte",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2020 – FEb 2021",
		desc: "At Onebyte studios, I am working as Senior Lead Android and React Native application developer. My role here is to divide the whole project into modules before starting, define the architecture of the whole project and then lead the team to develop discrete modules according to Agile Scrum methodology based on two week sprints.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	
];

export const projects = [
	{
		name: "YAP – Your Digital Banking App",
		desc: "Take total control of your money with spending analytics, virtual cards, money-management tools and your very own Mastercard debit card. Receive access to multi-currency, bill splitting, local & international transfers, QR payments and bill payments. Upgrade your plan, choose between customized card designs and get access to a world of exclusive perks and benefits.",
		link: "https://play.google.com/store/apps/details?id=com.yap.banking",
	},
	{
		name: "Xplora",
		desc: "XPLORA is the perfect introduction to the world of mobile products for kids. You will have all the features your child will need, such as call, location, safe zones and SOS. XPLORA is also compatible with our Goplay platform, the world's first Activity platform.",
		link: "https://play.google.com/store/apps/details?id=com.xplora.xplorao2o&hl=en&gl=US",
	},
	{
		name: "SenPi",
		desc: "Presenting SenPi App - School learning app for Pakistani students - Learn with engaging video lessons, and concepts visualized with animations. Learning is now easy and fun.",
		link: "https://play.google.com/store/apps/details?id=com.senpi.magic",
	},
	{
		name: "Vourity POS3 (Beta)",
		desc: "Vourity POS 3 is an ”All-in-One” Self-service Payment and Point of Service Terminal for any kind of unattended sales, payments, access control, resource booking and redemption of digital vouchers. The terminal can be used to open doors and turnstiles, handle payments in vending machines, booking of laundry, meeting rooms, and resources, sales in self-service retail shops with ”self checkout”, electrical vehicle charging and building access control. All features are dynamically enabled and centrally managed from Vourity Cloud.",
		// github: "https://github.com/1hanzla100",
		link: "https://vourity.com/en/how-does-it-work/hardware/vourity-pos-3/",
	},
	{
		name: "Eon SafteyNet (Android Healthcare  App)",
		desc: "Eon addresses Essential Patients via Eon SafetyNet. Essential patients are defined as those where 1) a threat to the patient’s life, 2) permanent dysfunction of an extremity or organ system, 3) risk of metastasis or progression of staging of a disease or condition, or 4) risk that the patient’s condition will rapidly deteriorate if a surgery or procedure is not performed. There is an unprecedented healthcare crisis where Essential Patients care is being deferred up to three-months and service line employees are being reallocated to hospital readiness and operations.",
		link: "https://play.google.com/store/apps/details?id=com.onebyte.eonsafetynet&hl=es_BO",
	},
	{
		name: "Packages Mall (Android Organization App)",
		desc: "Mall’s official application which contains all the updates and events regarding the mall. Besides this, application also facilitates its users to get directions from one shop to another. This feature is developed using Bi-directional A* search, Colour detection techniques and Image mapping mechanisms.",
		link: "https://play.google.com/store/apps/details?id=com.packagesmall.packagesmallapp&hl=en_US",
	},
	{
		name: "GharPar (Android Fashion App)",
		desc: "GharPar App provides timely, convenient and professional at-home beauty and grooming services to its clients.",
		link: "https://play.google.com/store/apps/details?id=com.onebyte.gharpar",
	},
	{
		name: "GharPar (Android Fashion App)",
		desc: "GharPar App provides timely, convenient and professional at-home beauty and grooming services to its clients.",
		link: "https://play.google.com/store/apps/details?id=com.onebyte.gharpar",
	},
	{
		name: "TagMu",
		desc: "‘TagMu’ assists financial institutions in livestock financing and insurance. It uses Computer Vision to identify animals and provide end-to-end verification for a fraud free livestock insurance. It assists both livestock owners and financial institutions through its one stop solution.",
		link: "https://www.tagmu.co/",
	},
	{
		name: "GharPar (Android Fashion App)",
		desc: "GharPar App provides timely, convenient and professional at-home beauty and grooming services to its clients.",
		link: "https://play.google.com/store/apps/details?id=com.onebyte.gharpar",
	},
];

export const feedbacks = [
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
];
