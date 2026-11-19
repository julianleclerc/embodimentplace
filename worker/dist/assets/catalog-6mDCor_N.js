import { t as __exportAll } from "./rolldown-runtime-D8jQpDG7.js";
// shared/catalog.ts
var catalog_exports = /* @__PURE__ */ __exportAll({ USERNAME_RE: () => USERNAME_RE });
var THEME_MENU = [
	{
		key: "teal-cool",
		name: "Hommik"
	},
	{
		key: "umbra-teal",
		name: "Hämar"
	},
	{
		key: "atelier",
		name: "Tušš"
	},
	{
		key: "werk",
		name: "Koda"
	},
	{
		key: "nocturne",
		name: "Öö"
	},
	{
		key: "halftone",
		name: "Täpp"
	},
	{
		key: "phosphor",
		name: "Helk"
	}
];
THEME_MENU.map((t) => t.key);
var NAV = [
	{
		label: "Organisations",
		href: "/orgs"
	},
	{
		label: "Robots",
		href: "/t/humanoid"
	},
	{
		label: "Hardware",
		href: "/t/actuator"
	},
	{
		label: "Models",
		href: "/t/model"
	},
	{
		label: "Software",
		href: "/t/software"
	},
	{
		label: "Events",
		href: "/t/event"
	},
	{
		label: "Community",
		href: "/community"
	},
	{
		label: "About",
		href: "/about"
	}
];
var HW_CATEGORIES = [
	{
		key: "humanoid",
		label: "Humanoid",
		plural: "Humanoids",
		tab: "robots",
		card_specs: [
			"height_cm",
			"weight_kg",
			"payload_kg",
			"dof",
			"runtime_h"
		],
		columns: [
			"locomotion",
			"height_cm",
			"dof",
			"payload_kg"
		]
	},
	{
		key: "quadruped",
		label: "Quadruped",
		plural: "Quadrupeds",
		tab: "robots",
		card_specs: [
			"weight_kg",
			"payload_kg",
			"speed_mps",
			"runtime_h",
			"dof"
		],
		columns: [
			"q_kind",
			"weight_kg",
			"payload_kg",
			"speed_mps"
		]
	},
	{
		key: "mobile",
		label: "Mobile manipulator",
		plural: "Mobile manipulators",
		tab: "robots",
		card_specs: [
			"dof",
			"payload_kg",
			"reach_mm",
			"speed_mps",
			"runtime_h"
		],
		columns: [
			"base_kind",
			"arms",
			"dof",
			"payload_kg"
		]
	},
	{
		key: "arm",
		label: "Arm",
		plural: "Arms",
		tab: "robots",
		card_specs: [
			"dof",
			"reach_mm",
			"payload_kg",
			"repeatability_mm",
			"weight_kg"
		],
		columns: [
			"arm_kind",
			"dof",
			"reach_mm",
			"payload_kg"
		]
	},
	{
		key: "hand",
		label: "Hand / gripper",
		plural: "Hands and grippers",
		tab: "robots",
		card_specs: [
			"dof",
			"active_dof",
			"payload_kg",
			"weight_kg"
		],
		columns: [
			"h_kind",
			"dof",
			"active_dof",
			"tactile"
		]
	},
	{
		key: "teleop",
		label: "Teleoperation",
		plural: "Teleoperation",
		tab: "robots",
		card_specs: [
			"dof",
			"sample_rate_hz",
			"latency_ms",
			"weight_kg",
			"runtime_h"
		],
		columns: [
			"dc_kind",
			"dof",
			"sample_rate_hz",
			"latency_ms"
		]
	},
	{
		key: "actuator",
		label: "Actuator",
		plural: "Actuators",
		tab: "hardware",
		card_specs: [
			"peak_torque_nm",
			"rated_torque_nm",
			"peak_force_n",
			"weight_kg"
		],
		columns: [
			"motion",
			"transmission",
			"peak_torque_nm",
			"weight_kg"
		],
		group: "Drive"
	},
	{
		key: "motor",
		label: "Motor",
		plural: "Motors",
		tab: "hardware",
		card_specs: [
			"rated_torque_nm",
			"peak_torque_nm",
			"rated_speed_rpm",
			"weight_kg"
		],
		columns: [
			"motor_kind",
			"rated_torque_nm",
			"rated_speed_rpm",
			"diameter_mm"
		],
		group: "Drive"
	},
	{
		key: "gearbox",
		label: "Gearbox / reducer",
		plural: "Gearboxes and reducers",
		tab: "hardware",
		card_specs: [
			"ratio",
			"rated_torque_nm",
			"backlash_arcmin",
			"weight_kg"
		],
		columns: [
			"gear_kind",
			"ratio",
			"rated_torque_nm",
			"backlash_arcmin"
		],
		group: "Drive"
	},
	{
		key: "encoder",
		label: "Encoder",
		plural: "Encoders",
		tab: "hardware",
		card_specs: [
			"resolution_bits",
			"enc_absolute",
			"diameter_mm"
		],
		columns: [
			"enc_kind",
			"resolution_bits",
			"enc_absolute"
		],
		group: "Drive"
	},
	{
		key: "driver",
		label: "Motor driver",
		plural: "Motor drivers",
		tab: "hardware",
		card_specs: [
			"voltage_v",
			"current_cont_a",
			"current_peak_a",
			"weight_kg"
		],
		columns: [
			"voltage_v",
			"current_cont_a",
			"current_peak_a",
			"interface"
		],
		group: "Drive"
	},
	{
		key: "bearing",
		label: "Bearing / screw",
		plural: "Bearings and screws",
		tab: "hardware",
		card_specs: [
			"bearing_kind",
			"diameter_mm",
			"weight_kg"
		],
		columns: ["bearing_kind", "diameter_mm"],
		group: "Drive"
	},
	{
		key: "camera",
		label: "Camera",
		plural: "Cameras",
		tab: "hardware",
		card_specs: [
			"resolution_mp",
			"fps",
			"fov_h_deg",
			"depth_max_m",
			"weight_kg"
		],
		columns: [
			"cam_kind",
			"resolution_mp",
			"fps",
			"fov_h_deg",
			"depth_max_m"
		],
		group: "Sensing"
	},
	{
		key: "lidar",
		label: "LiDAR",
		plural: "LiDARs",
		tab: "hardware",
		card_specs: [
			"channels",
			"range_m",
			"fov_h_deg",
			"weight_kg"
		],
		columns: [
			"lidar_kind",
			"channels",
			"range_m",
			"fov_h_deg"
		],
		group: "Sensing"
	},
	{
		key: "ft_sensor",
		label: "Force / torque sensor",
		plural: "Force / torque sensors",
		tab: "hardware",
		card_specs: [
			"ft_axes",
			"force_range_n",
			"torque_range_nm",
			"weight_kg"
		],
		columns: [
			"ft_axes",
			"force_range_n",
			"torque_range_nm"
		],
		group: "Sensing"
	},
	{
		key: "imu",
		label: "IMU",
		plural: "IMUs",
		tab: "hardware",
		card_specs: [
			"imu_axes",
			"output_hz",
			"weight_kg"
		],
		columns: [
			"imu_axes",
			"output_hz",
			"interface"
		],
		group: "Sensing"
	},
	{
		key: "tactile",
		label: "Tactile sensor",
		plural: "Tactile sensors",
		tab: "hardware",
		card_specs: [
			"taxels",
			"spatial_res_mm",
			"weight_kg"
		],
		columns: [
			"tactile_kind",
			"taxels",
			"spatial_res_mm"
		],
		group: "Sensing"
	},
	{
		key: "compute",
		label: "Compute",
		plural: "Compute modules",
		tab: "hardware",
		card_specs: [
			"tops",
			"memory_gb",
			"power_w",
			"weight_kg"
		],
		columns: [
			"tops",
			"memory_gb",
			"power_w",
			"gpu"
		],
		group: "Power and compute"
	},
	{
		key: "battery",
		label: "Battery",
		plural: "Batteries",
		tab: "hardware",
		card_specs: [
			"capacity_wh",
			"voltage_v",
			"chemistry",
			"weight_kg"
		],
		columns: [
			"chemistry",
			"capacity_wh",
			"voltage_v",
			"cycles"
		],
		group: "Power and compute"
	},
	{
		key: "material",
		label: "Material",
		plural: "Materials",
		tab: "hardware",
		card_specs: [
			"mat_kind",
			"grade",
			"origin"
		],
		columns: [
			"mat_kind",
			"grade",
			"origin"
		],
		group: "Materials"
	},
	{
		key: "misc",
		label: "Misc",
		plural: "Misc",
		tab: "hardware",
		card_specs: ["weight_kg", "power_w"],
		columns: ["misc_kind", "weight_kg"],
		group: "Other"
	}
];
var HW_CAT = Object.fromEntries(HW_CATEGORIES.map((c) => [c.key, c]));
var SOFTWARE_KINDS = [
	{
		key: "simulation",
		label: "Simulation",
		blurb: "Physics simulators and synthetic data."
	},
	{
		key: "viz",
		label: "Visualisation",
		blurb: "Logging, replay and debugging tools."
	},
	{
		key: "data",
		label: "Data",
		blurb: "Collection, labelling and training pipelines."
	},
	{
		key: "teleop",
		label: "Teleop",
		blurb: "Remote control and data-capture software."
	},
	{
		key: "fleet",
		label: "Fleet",
		blurb: "Robot operating systems, deployment, monitoring and updates for robot fleets."
	}
];
var ORG_GROUPS = [
	{
		key: "makers",
		label: "Robot makers",
		blurb: "Companies that build humanoids and other robot hardware.",
		roles: ["Robot maker"]
	},
	{
		key: "ai",
		label: "Model labs",
		blurb: "Foundation models, VLAs and the labs behind them.",
		roles: ["Model lab"]
	},
	{
		key: "software",
		label: "Software",
		blurb: "Software sold to robot teams: simulation, visualisation, data, teleop and fleet tools.",
		roles: ["Software developer"]
	},
	{
		key: "suppliers",
		label: "Suppliers",
		blurb: "Components, materials and data.",
		roles: ["Supplier"]
	},
	{
		key: "compute",
		label: "Compute",
		blurb: "Chips, onboard computers and cloud compute for robots and models.",
		roles: ["Compute"]
	},
	{
		key: "channel",
		label: "Integrators",
		blurb: "Who deploys and integrates robots for customers.",
		roles: ["Integrator"]
	},
	{
		key: "entertainment",
		label: "Entertainment",
		blurb: "Robots for shows, parks, media and performance.",
		roles: ["Entertainment"]
	},
	{
		key: "research",
		label: "Universities",
		blurb: "Universities working on robotics.",
		roles: ["University"]
	},
	{
		key: "labs",
		label: "Research labs",
		blurb: "National laboratories and independent research institutes working on robotics and embodied AI.",
		roles: ["Research lab"]
	},
	{
		key: "investors",
		label: "Investors",
		blurb: "Who funds the field.",
		roles: ["Investor"]
	},
	{
		key: "customers",
		label: "Customers",
		blurb: "Companies deploying robots in their operations.",
		roles: ["Customer"]
	},
	{
		key: "media",
		label: "Media",
		blurb: "Publications covering humanoid robotics, including this site.",
		roles: ["Media"]
	}
];
var TYPE_LABELS = {
	company: {
		label: "Organisation",
		plural: "Organisations",
		section: "Organisations"
	},
	product: {
		label: "Product",
		plural: "Products",
		section: "Robots"
	},
	model: {
		label: "Model",
		plural: "Models",
		section: "Models"
	},
	benchmark: {
		label: "Benchmark",
		plural: "Benchmarks",
		section: "Models"
	},
	software: {
		label: "Software",
		plural: "Software",
		section: "Software"
	},
	event: {
		label: "Event",
		plural: "Events",
		section: "Events"
	},
	post: {
		label: "Post",
		plural: "Posts",
		section: "Blog"
	},
	paper: {
		label: "Paper",
		plural: "Papers",
		section: "Activity"
	},
	funding: {
		label: "Funding round",
		plural: "Funding",
		section: "Activity"
	},
	deployment: {
		label: "Deployment",
		plural: "Deployments",
		section: "Activity"
	},
	solution: {
		label: "Solution",
		plural: "Solutions",
		section: "Solutions"
	},
	person: {
		label: "Person",
		plural: "People",
		section: "People"
	},
	datapack: {
		label: "Data pack",
		plural: "Data packs",
		section: "Activity"
	}
};
var FEED_FILTERS = [
	{
		key: "all",
		label: "Latest",
		types: ["post", "paper"]
	},
	{
		key: "blog",
		label: "Blog",
		types: ["post"]
	},
	{
		key: "news",
		label: "News",
		types: ["post"]
	},
	{
		key: "research",
		label: "Research",
		types: ["post", "paper"]
	},
	{
		key: "release",
		label: "Release",
		types: ["post"]
	},
	{
		key: "video",
		label: "Video",
		types: ["post"]
	},
	{
		key: "update",
		label: "Update",
		types: ["post"]
	}
];
var FEED_FILTER_ALIAS = {
	blogs: "blog",
	videos: "video"
};
var ORG_TYPES = ["company"];
var SITE_NAME = "embodiment.place";
var CONTACT_EMAIL = "contact@embodiment.place";
var LEGAL_UPDATED = "16 November 2026";
var COMMENTABLE = ["post", "paper"];
var NO_IMAGE = ["job"];
var HW_LETTERLESS = ["product"];
var POST_CATEGORIES = [
	"Blog",
	"News",
	"Research",
	"Release",
	"Video",
	"Update"
];
var CAT_ALIAS = {
	Article: "Blog",
	Link: "News"
};
var DATE_FIELDS = {
	product: "announced",
	model: "released",
	funding: "date",
	deployment: "date",
	post: "date",
	software: "released",
	event: "date",
	paper: "date"
};
var MAP_TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
var GEOCODE_UA = "embodiment.place (https://embodiment.place)";
var ADDRESS_SUGGEST_URL = "https://photon.komoot.io/api/";
var ORG_COLOR_PALETTE = [
	"#be0032",
	"#0067a5",
	"#f38400",
	"#008856",
	"#875692",
	"#f3c300",
	"#e68fac",
	"#2b3d26",
	"#a1caf1",
	"#882d17",
	"#8db600",
	"#604e97",
	"#f6a600",
	"#b3446c",
	"#dcd300",
	"#654522",
	"#e25822",
	"#c2b280",
	"#848482",
	"#f99379",
	"#00a6a6",
	"#1f2a6b"
];
var ACTIVITY_SUBNAV = [
	{
		href: "/t/funding",
		label: "Funding",
		key: "funding"
	},
	{
		href: "/t/deployment",
		label: "Deployments",
		key: "deployment"
	},
	{
		href: "/t/paper",
		label: "Papers",
		key: "paper"
	},
	{
		href: "/timeline",
		label: "Timeline",
		key: "timeline"
	}
];
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
var CONTRIB_PERMS = [
	["create", "Create and delete pages"],
	["review", "Approve the review queue and moderate (delete others' comments and chat messages, pin and lock chats)"],
	["claims", "Verify organisation claims and manage owners"],
	["meet", "Handle Community: requests and the Organisations list (People stays admin-only)"],
	["private", "See private pages, private fields and notes"],
	["home", "Edit home highlights (welcome message and pinned items)"]
];
var USERNAME_RE = /^[A-Za-z0-9_.-]{2,32}$/;
var ACCOUNT_TABS = [
	{
		key: "overview",
		label: "Overview",
		href: "/account"
	},
	{
		key: "character",
		label: "Character",
		href: "/account/character"
	},
	{
		key: "posts",
		label: "Posts",
		href: "/account/posts"
	},
	{
		key: "companies",
		label: "Companies",
		href: "/account/companies"
	},
	{
		key: "saved",
		label: "Saved",
		href: "/account/saved"
	},
	{
		key: "review",
		label: "Review status",
		href: "/account/review"
	},
	{
		key: "security",
		label: "Security",
		href: "/account/security"
	}
];
var WALK_COLORS = [
	"#ff4a1c",
	"#1c7cff",
	"#12a150",
	"#b03ad6",
	"#e0a100",
	"#0fb5b5",
	"#e0457b",
	"#5b5bd6"
];
var LOOK_HATS = [
	["none", "No hat"],
	["cap", "Cap"],
	["beanie", "Beanie"],
	["top", "Top hat"],
	["crown", "Crown"],
	["party", "Party hat"],
	["helmet", "Helmet"],
	["phones", "Headphones"],
	["antenna", "Antenna"],
	["beret", "Beret"],
	["hardhat", "Hard hat"],
	["bubble", "Speech bubble"],
	["explorer", "Explorer hat"]
];
var ADMIN_ONLY = [
	"/users",
	"/admin/email",
	"/admin/stickers",
	"/admin/focus",
	"/admin/requests",
	"/community/people",
	"/export.json"
];
var SITE_ORG_SLUG = "embodiment-place";
var KIND_ALIAS = {
	article: "blog",
	link: "news",
	paper: "research"
};
var COMPOSE_KINDS = POST_CATEGORIES.map((c) => [c.toLowerCase(), c]);
var WL_SECTIONS = [
	[
		"companies",
		"News",
		"Posts, launches, funding and deployments from organisations you follow"
	],
	[
		"research",
		"Research",
		"Papers from organisations you follow"
	],
	[
		"videos",
		"Videos",
		"Videos from organisations you follow"
	],
	[
		"jobs",
		"Jobs",
		"Open jobs at organisations you follow"
	]
];
var WL_DEFAULT = [
	"companies",
	"research",
	"videos",
	"jobs"
];
var WEEKDAYS = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
var COMMUNITY_NEEDS = [
	"Customers or pilots",
	"Deployment",
	"Suppliers or parts",
	"Integration partner",
	"Technology partner",
	"Investors",
	"Hiring",
	"Expert advice",
	"Research collaboration",
	"Other"
];
var QUOTE_USES = [
	"Research",
	"Education",
	"Development / integration",
	"Pilot deployment",
	"Production deployment",
	"Other"
];
var QUOTE_TIMING = [
	"As soon as possible",
	"Within 3 months",
	"3 to 6 months",
	"Later than 6 months",
	"Just exploring"
];
var QUOTE_STATUSES = [
	["new", "New"],
	["contacted", "Contacted"],
	["quoted", "Quoted"],
	["won", "Ordered"],
	["closed", "Closed"]
];
var INTRO_WHY_MAX = 1e3;
var FREE_MAIL = /* @__PURE__ */ new Set([
	"gmail.com",
	"googlemail.com",
	"outlook.com",
	"hotmail.com",
	"live.com",
	"yahoo.com",
	"icloud.com",
	"me.com",
	"mac.com",
	"aol.com",
	"proton.me",
	"protonmail.com",
	"gmx.com",
	"gmx.de",
	"yandex.com",
	"qq.com",
	"163.com",
	"126.com",
	"mail.com",
	"zoho.com",
	"web.de",
	"hey.com",
	"fastmail.com"
]);
var ORG_TYPES_LIST = [
	"company",
	"university",
	"lab"
];
var FOCUS_AREAS = [
	"Locomotion",
	"Manipulation",
	"Dexterous hands",
	"VLA / foundation models",
	"World models",
	"Sim-to-real",
	"Tactile sensing",
	"Perception",
	"Human-robot interaction",
	"Safety",
	"Datasets"
];
export { ORG_TYPES as A, TYPE_LABELS as B, LOOK_HATS as C, NO_IMAGE as D, NAV as E, QUOTE_USES as F, catalog_exports as G, WEEKDAYS as H, SITE_NAME as I, SITE_ORG_SLUG as L, POST_CATEGORIES as M, QUOTE_STATUSES as N, ORG_COLOR_PALETTE as O, QUOTE_TIMING as P, SOFTWARE_KINDS as R, LEGAL_UPDATED as S, MONTHS as T, WL_DEFAULT as U, WALK_COLORS as V, WL_SECTIONS as W, HW_CAT as _, CAT_ALIAS as a, INTRO_WHY_MAX as b, COMPOSE_KINDS as c, DATE_FIELDS as d, FEED_FILTERS as f, GEOCODE_UA as g, FREE_MAIL as h, ADMIN_ONLY as i, ORG_TYPES_LIST as j, ORG_GROUPS as k, CONTACT_EMAIL as l, FOCUS_AREAS as m, ACTIVITY_SUBNAV as n, COMMENTABLE as o, FEED_FILTER_ALIAS as p, ADDRESS_SUGGEST_URL as r, COMMUNITY_NEEDS as s, ACCOUNT_TABS as t, CONTRIB_PERMS as u, HW_CATEGORIES as v, MAP_TILES as w, KIND_ALIAS as x, HW_LETTERLESS as y, THEME_MENU as z };

//# sourceMappingURL=catalog-6mDCor_N.js.map
