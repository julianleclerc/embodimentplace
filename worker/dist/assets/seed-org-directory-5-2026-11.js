// Content seed: fifth organisation directory pass of 2026-11-27. Adds embodied, physical-AI and humanoid organisations
// found in launch and funding posts on X (out-of-stealth, seed and Series A announcements, YC launches, robotics
// newsletter and founder roundups, Stealth Startup Spy) and in Launch HN / Show HN posts and stories on Hacker News since
// 2024, that were neither live nor in the third or fourth passes. Each was checked against its own website, has every
// role that applies and its HQ in data.locations (city-only where no street address could be sourced). epSeedRun
// inserts an organisation only if no organisation has that slug or name, and fills only empty fields. See CHANGELOG.md.
export const EP_SEED_ORG_DIRECTORY_5_2026_11 = {
 "id": "org-directory-5-2026-11",
 "note": "Added in the fifth organisation directory pass (launch and funding posts on X and Hacker News), November 2026",
 "newOrgs": [
  {
   "slug": "havocai",
   "name": "HavocAI",
   "summary": "Builds collaborative autonomy software and autonomous uncrewed boats for defence and commercial maritime missions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://x.com/accessvc_/status/2057889906895282466",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.havocai.com/"
    },
    "image": {
     "v": "/logos/havocai.png",
     "fit": "contain",
     "src": "https://www.havocai.com/static/favicon-192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Providence",
     "src": "https://www.linkedin.com/company/havocai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/havocai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Providence, Rhode Island, United States",
       "lat": 41.823989,
       "lon": -71.412834,
       "src": "https://www.linkedin.com/company/havocai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "phymi",
   "name": "PHYMI",
   "summary": "Embodied AI company building full-stack Physical Agents: an embodied model, robot hardware, real-world data and a human-robot link layer.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://technode.com/2026/09/10/embodied-ai-startup-phymi-raises-nearly-us100-million-in-seed-funding/",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://data.manyfold.ai/ai-fundraising/r/rec_01m40pgkfzaw0pxwxpdwv36xkn",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://data.manyfold.ai/ai-fundraising/r/rec_01m40pgkfzaw0pxwxpdwv36xkn",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://data.manyfold.ai/ai-fundraising/r/rec_01m40pgkfzaw0pxwxpdwv36xkn"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "watney-robotics",
   "name": "Watney Robotics",
   "summary": "Builds robots that work inside data centres.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://dealroom.co/blog/data-centre-robot-startup-watney-raises-80m-series-a",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://watney.com/"
    },
    "image": {
     "v": "/logos/watney-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/jMH9xGPlKFpWWg3pU5Au66Srpps.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/watneyrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/watneyrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/watneyrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "humyn-labs",
   "name": "Humyn Labs",
   "summary": "Collects and supplies AI training data for robotics and physical AI.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/RisingIndiaHQ/status/2123025836794339413",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://humynlabs.ai/"
    },
    "image": {
     "v": "/logos/humyn-labs.png",
     "fit": "contain",
     "src": "https://humynlabs.ai/assets/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/humyn-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/humyn-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "The Embarcadero, San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/humyn-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "physicl",
   "name": "Physicl",
   "summary": "Simulation platform for building the worlds robot models train in, aimed at the sim-to-real gap.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/TechThought_org/status/2118757870011298289",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://physicl.ai/"
    },
    "image": {
     "v": "/logos/physicl.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6abe2f7f24d2b0156b3974c2/6ac365307a8c42603855fdde_physicl-icon-512-v2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/physicl",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/physicl",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/physicl"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "antoniq-robotics",
   "name": "Antoniq Robotics",
   "summary": "Develops embodied AI and robots for agriculture.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://x.com/TradedVC/status/2107834787545166108",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.antoniqrobotics.com/"
    },
    "image": {
     "v": "/logos/antoniq-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/QhrGI4lHoMgY3DlFPXiYWRSok.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Porto",
     "src": "https://www.linkedin.com/company/antoniq-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Portugal",
     "src": "https://www.linkedin.com/company/antoniq-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Porto, Portugal",
       "lat": 41.150219,
       "lon": -8.61035,
       "src": "https://www.linkedin.com/company/antoniq-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mowito",
   "name": "Mowito",
   "summary": "Makes vision AI software that lets robotic arms pick and handle objects.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/Inc42/status/2074478547201040557",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mowito.in/"
    },
    "image": {
     "v": "/logos/mowito.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/61b318e08b693e2bd64e9a90/61b31a2e613d2ff066b10c86_FAV_256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://x.com/Inc42/status/2074478547201040557",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://x.com/Inc42/status/2074478547201040557",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bengaluru, Karnataka, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://x.com/Inc42/status/2074478547201040557"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dayan-technology",
   "name": "Dayan Technology",
   "summary": "Makes tactile data gloves, a tactile foundation model and a contact-mechanics simulation engine for embodied AI.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Model lab",
      "Software developer"
     ],
     "src": "https://eu.36kr.com/en/p/4087367217363589",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://justraised.io/rounds/3342",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://justraised.io/rounds/3342",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hangzhou, Zhejiang, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://justraised.io/rounds/3342"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tensorworld",
   "name": "TensorWorld",
   "summary": "Builds physics-native frontier models that simulate and interact with the physical world for robotics and engineering.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://x.com/TensorWorldAI/status/2118193028804624626",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tensorworld.com/"
    },
    "image": {
     "v": "/logos/tensorworld.png",
     "fit": "contain",
     "src": "https://tensorworld.com/_nuxt/logo-horizontal.CKFQaa1t.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://dclawai.com/en/reports/tensorworld-physics-ai-2026/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://dclawai.com/en/reports/tensorworld-physics-ai-2026/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Haidian District, Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://dclawai.com/en/reports/tensorworld-physics-ai-2026/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "motion1",
   "name": "Motion1",
   "summary": "Offers humanoid robots as a service, deploying, integrating and maintaining robots from several makers on factory and warehouse lines.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://x.com/HumanoidRTech/status/2093237785008181751",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://motion.one/en"
    },
    "image": {
     "v": "/logos/motion1.png",
     "fit": "contain",
     "src": "https://motion.one/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brussels",
     "src": "https://www.linkedin.com/company/motion-1-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Belgium",
     "src": "https://www.linkedin.com/company/motion-1-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brussels, Belgium",
       "lat": 50.846737,
       "lon": 4.352493,
       "src": "https://www.linkedin.com/company/motion-1-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "closer",
   "name": "Closer",
   "summary": "Japanese AI robotics company automating food manufacturing and logistics lines with collaborative robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.close-r.com/en/news/preseriesaround-251216",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.close-r.com/en"
    },
    "image": {
     "v": "/logos/closer.png",
     "fit": "contain",
     "src": "https://www.close-r.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tsukuba",
     "src": "https://jp.linkedin.com/company/closer-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/closer-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1-1-1 Tennodai, Tsukuba, Ibaraki, Japan",
       "lat": 36.118975,
       "lon": 140.095725,
       "src": "https://jp.linkedin.com/company/closer-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "enigma",
   "name": "Enigma",
   "summary": "Builds robot foundation models, hardware-agnostic controls and interfaces that make robots easy for people to direct.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://x.com/JesseDLandry/status/2082141578198482957",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.enigma.inc/"
    },
    "image": {
     "v": "/logos/enigma.png",
     "fit": "contain",
     "src": "https://www.enigma.inc/favicon/apple-touch-icon-180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://siliconangle.com/2026/07/27/enigma-raises-71m-develop-foundation-models-robots/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://siliconangle.com/2026/07/27/enigma-raises-71m-develop-foundation-models-robots/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://siliconangle.com/2026/07/27/enigma-raises-71m-develop-foundation-models-robots/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "noitom-robotics",
   "name": "Noitom Robotics",
   "summary": "Provides motion-capture and teleoperation systems and multimodal training data for humanoid and industrial robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Software developer"
     ],
     "src": "https://x.com/GrishinRobotics/status/2003401702444089704",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://noitomrobotics.com/"
    },
    "image": {
     "v": "/logos/noitom-robotics.png",
     "fit": "contain",
     "src": "https://noitomrobotics.com/wp-content/uploads/2025/08/cropped-favicon_colore@300x-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.qimingvc.com/cn/news/%E5%90%AF%E6%98%8E%E6%98%9F%EF%BD%9C%E8%AF%BA%E4%BA%A6%E8%85%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AE%8C%E6%88%90pre-a%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E5%90%AF%E6%98%8E%E5%88%9B%E6%8A%95%E9%A2%86%E6%8A%95",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.qimingvc.com/cn/news/%E5%90%AF%E6%98%8E%E6%98%9F%EF%BD%9C%E8%AF%BA%E4%BA%A6%E8%85%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AE%8C%E6%88%90pre-a%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E5%90%AF%E6%98%8E%E5%88%9B%E6%8A%95%E9%A2%86%E6%8A%95",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.qimingvc.com/cn/news/%E5%90%AF%E6%98%8E%E6%98%9F%EF%BD%9C%E8%AF%BA%E4%BA%A6%E8%85%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AE%8C%E6%88%90pre-a%E8%BD%AE%E8%9E%8D%E8%B5%84%EF%BC%8C%E5%90%AF%E6%98%8E%E5%88%9B%E6%8A%95%E9%A2%86%E6%8A%95"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "humandroid",
   "name": "Humandroid",
   "summary": "Trains and deploys humanoid robots in industrial environments.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://x.com/humandroidinc/status/2079564416232669356",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.humandro-id.com/"
    },
    "image": {
     "v": "/logos/humandroid.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/71e31b_b38982e997494e89bd65447afc3e6dcd%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/71e31b_b38982e997494e89bd65447afc3e6dcd%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Córdoba",
     "src": "https://www.linkedin.com/company/humandro-id",
     "asof": "2026-11"
    },
    "country": {
     "v": "Argentina",
     "src": "https://www.linkedin.com/company/humandro-id",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Avenida La Voz del Interior 8851, Córdoba, Argentina",
       "lat": -31.310725,
       "lon": -64.219824,
       "src": "https://www.linkedin.com/company/humandro-id"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotx",
   "name": "RobotX",
   "summary": "Builds Xmind, a hardware-agnostic robot brain for humanoid, quadruped and wheeled robots.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://x.com/RobotXOfficial/status/2037052563254894946",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://usrobotx.com/"
    },
    "image": {
     "v": "/logos/robotx.png",
     "fit": "contain",
     "src": "https://usrobotx.com/icon.png?icon.01_.ab~qeun-8.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Irvine",
     "src": "https://usrobotx.com/about",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://usrobotx.com/about",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "17901 Von Karman Ave, Ste 420, Irvine, CA 92614, United States",
       "lat": 33.685697,
       "lon": -117.825981,
       "src": "https://usrobotx.com/about"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vanar-robots",
   "name": "Vanar Robots",
   "summary": "Builds the Vanar Generation 1 humanoid, with in-house actuators and tendon-driven hands, for industrial work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://x.com/TheHumanoidHub/status/2083011991313260736",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.vanarrobots.com/"
    },
    "city": {
     "v": "Mumbai",
     "src": "https://www.linkedin.com/company/vanar-robots",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.linkedin.com/company/vanar-robots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mumbai, Maharashtra, India",
       "lat": 19.054999,
       "lon": 72.869203,
       "src": "https://www.linkedin.com/company/vanar-robots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "earendil-robotics",
   "name": "Earendil Robotics",
   "summary": "Builds autonomous drone interceptors and the software to train and run them.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://x.com/ycombinator/status/2102787844263837938",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://earendil.io/"
    },
    "image": {
     "v": "/logos/earendil-robotics.png",
     "fit": "contain",
     "src": "https://earendil.io/apple-touch-icon.png?v=2",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/earendil-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/earendil-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/earendil-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "splash-industries",
   "name": "Splash Industries",
   "summary": "Designs and builds low-cost autonomous drone boats for maritime logistics and surveillance.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://x.com/ycombinator/status/2080018794832187525",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://splash9.com/"
    },
    "image": {
     "v": "/logos/splash-industries.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/cYUk6kUl3dOUiDkEgWlmZvG03Lw.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.ycombinator.com/companies/splash-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/splash-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, California, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.ycombinator.com/companies/splash-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mosaico",
   "name": "Mosaico",
   "summary": "Open-source data platform for robotics and physical AI: ingest, search and curate robot data.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/lukas_m_ziegler/status/2122608138268312049",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mosaico.dev/"
    },
    "image": {
     "v": "/logos/mosaico.png",
     "fit": "contain",
     "src": "https://mosaico.dev/favicon-192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Parma",
     "src": "https://www.linkedin.com/company/mosaico-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://www.linkedin.com/company/mosaico-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Viale Mentana, Parma, Emilia-Romagna, Italy",
       "lat": 44.695201,
       "lon": 10.097987,
       "src": "https://www.linkedin.com/company/mosaico-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cosine-robots",
   "name": "Cosine Robots",
   "summary": "Bengaluru robotics startup that designs and manufactures robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://x.com/IPOCorner/status/2125610380097642703",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cosinerobots.com/"
    },
    "image": {
     "v": "/logos/cosine-robots.png",
     "fit": "contain",
     "src": "https://www.cosinerobots.com/favicon.ico?favicon.2qmw7sp-ljp05.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://www.linkedin.com/company/cosinerobots",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.linkedin.com/company/cosinerobots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bengaluru, Karnataka, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://www.linkedin.com/company/cosinerobots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "octapulse",
   "name": "OctaPulse",
   "summary": "Uses robotics and computer vision to automate fish inspection for aquaculture farms.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://news.ycombinator.com/item?id=47220320",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tryoctapulse.com/"
    },
    "image": {
     "v": "/logos/octapulse.png",
     "fit": "contain",
     "src": "https://www.tryoctapulse.com/V12.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Frisco",
     "src": "https://www.ycombinator.com/companies/octapulse",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/octapulse",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Frisco, Texas, United States",
       "lat": 33.1506,
       "lon": -96.823818,
       "src": "https://www.ycombinator.com/companies/octapulse"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "voltair",
   "name": "Voltair",
   "summary": "Builds fixed-wing drones that recharge on power lines to inspect electric utility assets.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://news.ycombinator.com/item?id=47442452",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://voltairlabs.com/"
    },
    "image": {
     "v": "/logos/voltair.png",
     "fit": "contain",
     "src": "https://voltairlabs.com/assets/img/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pullman",
     "src": "https://www.linkedin.com/company/voltair-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/voltair-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pullman, Washington, United States",
       "lat": 46.729582,
       "lon": -117.179936,
       "src": "https://www.linkedin.com/company/voltair-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "transitive-robotics",
   "name": "Transitive Robotics",
   "summary": "Open-source framework for full-stack robot software: fleet management, remote access and video.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://news.ycombinator.com/item?id=39031399",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://transitiverobotics.com/"
    },
    "image": {
     "v": "/logos/transitive-robotics.png",
     "fit": "contain",
     "src": "https://transitiverobotics.com/img/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://www.linkedin.com/company/transitive-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/transitive-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Menlo Park, California, United States",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://www.linkedin.com/company/transitive-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sowbot",
   "name": "Sowbot",
   "summary": "Open-hardware agricultural robot (ROS 2, RTK GPS) for researchers and farmers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://news.ycombinator.com/item?id=47123894",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sowbot.co.uk/"
    },
    "image": {
     "v": "/logos/sowbot.png",
     "fit": "contain",
     "src": "https://nibleyleaves.co.uk/sowbot/wp-content/uploads/sites/10/2019/08/cropped-logo-1-192x192.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://www.linkedin.com/company/sowbot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.linkedin.com/company/sowbot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bristol Robotics Laboratory, Bristol, United Kingdom",
       "lat": 51.443014,
       "lon": -2.581662,
       "src": "https://www.linkedin.com/company/sowbot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neros",
   "name": "Neros",
   "summary": "Builds low-cost military drones at scale.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://news.ycombinator.com/item?id=45882818",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.neros.tech/"
    },
    "image": {
     "v": "/logos/neros.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a7dba4345e62074a8b5ad52/6a8c426baed0b5596b807147_Neros%20webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.linkedin.com/company/neros-tech",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/neros-tech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.linkedin.com/company/neros-tech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fabrica-ai",
   "name": "Fabrica AI",
   "summary": "Builds an autonomous tile-grouting robot for tiling contractors.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://news.ycombinator.com/item?id=43282283",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fabrica.ai/"
    },
    "image": {
     "v": "/logos/fabrica-ai.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/e02bcc_2b856dc98efd467ab588c59aa0010829%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/e02bcc_2b856dc98efd467ab588c59aa0010829%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://www.linkedin.com/company/fabrica-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://www.linkedin.com/company/fabrica-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "75 Ayer Rajah Crescent, Singapore",
       "lat": 1.297516,
       "lon": 103.786212,
       "src": "https://www.linkedin.com/company/fabrica-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gatsby",
   "name": "Gatsby",
   "summary": "Sends humanoid robots to clean apartments in San Francisco as an on-demand service.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Customer"
     ],
     "src": "https://news.ycombinator.com/item?id=48145142",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gatsby.bot/"
    },
    "image": {
     "v": "/logos/gatsby.png",
     "fit": "contain",
     "src": "https://gatsby.bot/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://gatsby.bot/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://gatsby.bot/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "350 Townsend St, Suite 303, San Francisco, CA 94107, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://gatsby.bot/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rigyd",
   "name": "Rigyd",
   "summary": "Generates physics-accurate, simulation-ready 3D assets and worlds for robot training.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://news.ycombinator.com/item?id=47864502",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rigyd.com/"
    },
    "image": {
     "v": "/logos/rigyd.png",
     "fit": "contain",
     "src": "https://rigyd.com/assets/favicon-192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.linkedin.com/company/artlabs-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/artlabs-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, California, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.linkedin.com/company/artlabs-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "the-robot-works",
   "name": "The Robot Works",
   "summary": "Makes Goose, a home robot that picks up children's toys.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://x.com/StealthCoSpy/status/2125771673295069295",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.therobotworks.ai/"
    },
    "image": {
     "v": "/logos/the-robot-works.png",
     "fit": "contain",
     "src": "https://www.therobotworks.ai/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Belmont",
     "src": "https://www.linkedin.com/company/the-robot-works",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/the-robot-works",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Belmont, California, United States",
       "lat": 37.516493,
       "lon": -122.294191,
       "src": "https://www.linkedin.com/company/the-robot-works"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "versor",
   "name": "Versor",
   "summary": "Applied research lab building generative, real-to-sim robot simulation to create training data and validate policies.",
   "data": {
    "roles": {
     "v": [
      "Research lab",
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2124940844549681335",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://versor.tech/"
    },
    "image": {
     "v": "/logos/versor.png",
     "fit": "contain",
     "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20fill%3D%22none%22%3E%3Cstyle%3E.s%7Bstop-color%3A%235e9fc8%7D.t%7Bstop-color%3A%232f8a86%7D.g%7Bstop-color%3A%23e0a133%7D.a%7Bstroke%3A%238a7d60%7D%40media%20%28prefers-color-scheme%3Adark%29%7B.s%7Bstop-color%3A%238ec5ea%7D.t%7Bstop-color%3A%234cc2b6%7D.g%7Bstop-color%3A%23f6c453%7D.a%7Bstroke%3A%23b5a585%7D%7D%3C%2Fstyle%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22l%22%20x1%3D%2222%22%20y1%3D%2226%22%20x2%3D%2250%22%20y2%3D%2278%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20class%3D%22s%22%2F%3E%3Cstop%20offset%3D%221%22%20class%3D%22t%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22r%22%20x1%3D%2250%22%20y1%3D%2278%22%20x2%3D%2278%22%20y2%3D%2226%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20class%3D%22t%22%2F%3E%3Cstop%20offset%3D%221%22%20class%3D%22g%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22a%22%20d%3D%22M50%204%20V100%22%20stroke-width%3D%224%22%2F%3E%3Cpath%20d%3D%22M22%2026%20L50%2078%22%20stroke%3D%22url%28%23l%29%22%20stroke-width%3D%2214%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M50%2078%20L78%2026%22%20stroke%3D%22url%28%23r%29%22%20stroke-width%3D%2214%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://versor.tech/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://versor.tech/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://versor.tech/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mile-robotics",
   "name": "Mile Robotics",
   "summary": "Turns human decisions in immersive games and simulations into robot training data.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2122177875247808740",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.milelabs.co/"
    },
    "image": {
     "v": "/logos/mile-robotics.png",
     "fit": "contain",
     "src": "https://www.milelabs.co/images/brand/logo-mark-white.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Manchester",
     "src": "https://www.linkedin.com/company/mile-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.linkedin.com/company/mile-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Manchester, United Kingdom",
       "lat": 53.442462,
       "lon": -2.232455,
       "src": "https://www.linkedin.com/company/mile-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lattice-studios",
   "name": "Lattice Studios",
   "summary": "Captures live, navigable 3D data of real spaces for physical AI and robotics.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2119838197379133491",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lattice.cx/"
    },
    "image": {
     "v": "/logos/lattice-studios.png",
     "fit": "contain",
     "src": "https://lattice.cx/favicon_white.png?v=20260624-2",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://x.com/StealthCoSpy/status/2119838197379133491",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://x.com/StealthCoSpy/status/2119838197379133491",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://x.com/StealthCoSpy/status/2119838197379133491"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "saturn-dynamics",
   "name": "Saturn Dynamics",
   "summary": "Research company building world foundation models so robots can predict physical outcomes.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Research lab"
     ],
     "src": "https://x.com/StealthCoSpy/status/2118810909602644006",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.saturndynamics.com/"
    },
    "image": {
     "v": "/logos/saturn-dynamics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/QVkZKU9IFsT40iqrTiOBRbpuPFM.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.saturndynamics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.saturndynamics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://www.saturndynamics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "antioch",
   "name": "Antioch",
   "summary": "Cloud simulation platform for testing robotics and autonomy stacks.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2118735902365176077",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://antioch.com/"
    },
    "image": {
     "v": "/logos/antioch.png",
     "fit": "contain",
     "src": "https://antioch.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://x.com/StealthCoSpy/status/2118735902365176077",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://x.com/StealthCoSpy/status/2118735902365176077",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://x.com/StealthCoSpy/status/2118735902365176077"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xp-robotics",
   "name": "XP Robotics",
   "summary": "Indian humanoid robot maker that also runs a physical-AI data platform.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2118553993190253045",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://xprobotics.ai/"
    },
    "image": {
     "v": "/logos/xp-robotics.png",
     "fit": "contain",
     "src": "https://xprobotics.ai/xp-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://www.linkedin.com/company/xp-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.linkedin.com/company/xp-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Roopena Agrahara Road, Bengaluru, Karnataka, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://www.linkedin.com/company/xp-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "munari",
   "name": "Munari",
   "summary": "Scores and monitors the teleoperators who collect robotics data.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2117980584429445133",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://munari.ai/"
    },
    "image": {
     "v": "/logos/munari.png",
     "fit": "contain",
     "src": "https://munari.ai/apple-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/munari-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/munari-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/munari-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "grizzly",
   "name": "Grizzly",
   "summary": "Building AI-native heavy machines, starting with an excavator with general intelligence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://x.com/StealthCoSpy/status/2100947960267776112",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://grizzhq.com/"
    },
    "image": {
     "v": "/logos/grizzly.png",
     "fit": "contain",
     "src": "https://grizzhq.com/images/grizzly-logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://x.com/StealthCoSpy/status/2100947960267776112",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://x.com/StealthCoSpy/status/2100947960267776112",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://x.com/StealthCoSpy/status/2100947960267776112"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cota-robotics",
   "name": "Cota Robotics",
   "summary": "Offers labour as a service with AI-powered and humanoid robots that automate retail store work.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Robot maker"
     ],
     "src": "https://x.com/StealthCoSpy/status/2093171715304284617",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cotarobotics.com/"
    },
    "image": {
     "v": "/logos/cota-robotics.png",
     "fit": "contain",
     "src": "https://cotarobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stockholm",
     "src": "https://www.linkedin.com/company/cota-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://www.linkedin.com/company/cota-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sankt Eriksgatan 46, Stockholm, Sweden",
       "lat": 59.335129,
       "lon": 18.033299,
       "src": "https://www.linkedin.com/company/cota-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "volumes",
   "name": "Volumes",
   "summary": "Captures ground-truth spatial data of real places for robotics and physical AI.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2088256324148797605",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.volumes.cloud/"
    },
    "image": {
     "v": "/logos/volumes.png",
     "fit": "contain",
     "src": "https://www.volumes.cloud/icon.png?icon.28qt6zlmci80j.png?dpl=dpl_CwZ47EjPYiNkGCdy1qX8za7RHA2G",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.linkedin.com/company/volumes-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/volumes-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.linkedin.com/company/volumes-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "whistle-robotics",
   "name": "Whistle Robotics",
   "summary": "Makes robot automation accessible to high-mix manufacturers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://x.com/StealthCoSpy/status/2087531548396441725",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://whistlerobotics.com/"
    },
    "image": {
     "v": "/logos/whistle-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/l7uRQPkyBPKAjeQYGOSSB5rcM.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.linkedin.com/company/whistlerobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.linkedin.com/company/whistlerobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://www.linkedin.com/company/whistlerobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sensate-robotics",
   "name": "Sensate Robotics",
   "summary": "Builds PolySkin tactile sensors and Sensate grippers that give robots a sense of touch.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://x.com/StealthCoSpy/status/2087252714543587406",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sensate-robotics.com/"
    },
    "image": {
     "v": "/logos/sensate-robotics.png",
     "fit": "contain",
     "src": "https://www.sensate-robotics.com/assets/sensate_logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.linkedin.com/company/sensate-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/sensate-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, California, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.linkedin.com/company/sensate-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "navigicom",
   "name": "Navigicom",
   "summary": "Builds low-cost, compact navigation systems for delivery and other drones.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://x.com/StealthCoSpy/status/2086980921568231652",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.navigicom.com/"
    },
    "image": {
     "v": "/logos/navigicom.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/4b4375_b1696214a56244bd9336c52376f2f741~mv2.png/v1/crop/x_182,y_316,w_1533,h_441/fill/w_190,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20FILES.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Yokneam Illit",
     "src": "https://www.navigicom.com/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://www.navigicom.com/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2 Carmel St, Yokneam Illit, Israel",
       "lat": 32.64806,
       "lon": 35.094355,
       "src": "https://www.navigicom.com/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tapestry-os",
   "name": "Tapestry OS",
   "summary": "Open-source operating system that coordinates robot swarms, drone fleets and sensor networks.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2086814835296084229",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tapestry-os.com/"
    },
    "image": {
     "v": "/logos/tapestry-os.png",
     "fit": "contain",
     "src": "https://tapestry-os.com/images/tapestry-logo-transparent.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://www.linkedin.com/company/tapestry-os",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/tapestry-os",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, California, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://www.linkedin.com/company/tapestry-os"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botifull",
   "name": "Botifull",
   "summary": "Turns humanoid robots into receptionists for hotels, offices and airports.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://x.com/StealthCoSpy/status/2085138788167417964",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botifull.ai/"
    },
    "image": {
     "v": "/logos/botifull.png",
     "fit": "contain",
     "src": "https://botifull.ai/icon.png?71f53be1ce1ed15c",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://botifull.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://botifull.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://botifull.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "general-intelligence-labs",
   "name": "General Intelligence Labs",
   "summary": "Co-designs the perception, model and action stack for embodied intelligence built on human dexterity.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://x.com/StealthCoSpy/status/2051528565758239067",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gilabs.xyz/"
    },
    "image": {
     "v": "/logos/general-intelligence-labs.png",
     "fit": "contain",
     "src": "https://www.gilabs.xyz/favicon.ico?favicon.0b3bf435.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/general-intelligence-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/general-intelligence-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/general-intelligence-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pathon-robotics",
   "name": "PathOn Robotics",
   "summary": "Builds AI-agent software for robots, with teams in the San Francisco Bay Area and Shenzhen.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2048809399700087272",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pathon.ai/"
    },
    "image": {
     "v": "/logos/pathon-robotics.png",
     "fit": "contain",
     "src": "https://www.pathon.ai/pathonai.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.pathon.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.pathon.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco Bay Area, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.pathon.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "latentworlds-ai",
   "name": "LatentWorlds AI",
   "summary": "Cloud data engine to store, access and transform multimodal robotics and autonomy data.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2042422321114439903",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://latentworlds.ai/"
    },
    "image": {
     "v": "/logos/latentworlds-ai.png",
     "fit": "contain",
     "src": "https://latentworlds.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Delft",
     "src": "https://www.linkedin.com/company/latentworlds",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://www.linkedin.com/company/latentworlds",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Molengraafsingel 12, Delft, Netherlands",
       "lat": 52.011402,
       "lon": 4.35839,
       "src": "https://www.linkedin.com/company/latentworlds"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "crewline",
   "name": "Crewline",
   "summary": "Retrofits existing heavy equipment to drive itself on earthworks and construction sites.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/1999600149384036765",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://crewline.ai/"
    },
    "image": {
     "v": "/logos/crewline.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/7iqlAF1sr9ovQ7UUVsfeTrWsY.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.linkedin.com/company/crewline-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/crewline-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "13206 Wright Rd, Austin, Texas, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://www.linkedin.com/company/crewline-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mundane",
   "name": "Mundane",
   "summary": "Builds teleoperated robots that skilled workers control through a force-feedback exoskeleton for dangerous trade work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://x.com/StealthCoSpy/status/1967710023682777574",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mundane.bot/"
    },
    "image": {
     "v": "/logos/mundane.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=mundane.bot&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/mundanebot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/mundanebot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, California, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://www.linkedin.com/company/mundanebot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "build-ai",
   "name": "Build AI",
   "summary": "Research lab building the data foundation for physical AI, vertically integrated across capture hardware and data.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2112272817840373773",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.build.ai/"
    },
    "image": {
     "v": "/logos/build-ai.png",
     "fit": "contain",
     "src": "https://www.build.ai/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/build-ai-pbc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/build-ai-pbc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/build-ai-pbc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mytron-labs",
   "name": "MyTron Labs",
   "summary": "Supplies large-scale egocentric multimodal datasets to robotics AI labs.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2107999444633370943",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mytronlabs.com/"
    },
    "image": {
     "v": "/logos/mytron-labs.png",
     "fit": "contain",
     "src": "https://mytronlabs.com/logo-grey.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://www.linkedin.com/company/my-tron-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://www.linkedin.com/company/my-tron-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Singapore",
       "lat": 1.289918,
       "lon": 103.851907,
       "src": "https://www.linkedin.com/company/my-tron-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sevah-robotics",
   "name": "Sevah Robotics",
   "summary": "Makes Tara, a companion robot for assisted-living residents and older adults living alone.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://x.com/StealthCoSpy/status/2102760154705846565",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sevah.ai/"
    },
    "image": {
     "v": "/logos/sevah-robotics.png",
     "fit": "contain",
     "src": "https://sevah.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://sevah.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://sevah.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, California, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://sevah.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cerebel-robotics",
   "name": "Cerebel Robotics",
   "summary": "Builds tactile intelligence for robot hands so robots can handle objects by touch.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://x.com/StealthCoSpy/status/2102171225753616831",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cerebel.co/"
    },
    "image": {
     "v": "/logos/cerebel-robotics.png",
     "fit": "contain",
     "src": "https://cerebel.co/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Plano",
     "src": "https://x.com/StealthCoSpy/status/2102171225753616831",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://x.com/StealthCoSpy/status/2102171225753616831",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Plano, Texas, United States",
       "lat": 33.013676,
       "lon": -96.69251,
       "src": "https://x.com/StealthCoSpy/status/2102171225753616831"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboblackbox",
   "name": "Roboblackbox",
   "summary": "Tamper-evident flight-data recorder and independent operating record for robot fleets.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2102156069485072837",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roboblackbox.com/"
    },
    "image": {
     "v": "/logos/roboblackbox.png",
     "fit": "contain",
     "src": "https://roboblackbox.com/media/logo/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://x.com/StealthCoSpy/status/2102156069485072837",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://x.com/StealthCoSpy/status/2102156069485072837",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seattle, Washington, United States",
       "lat": 47.603832,
       "lon": -122.330062,
       "src": "https://x.com/StealthCoSpy/status/2102156069485072837"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "starlife",
   "name": "Starlife",
   "summary": "Makes Bella, a humanoid service robot that greets and helps customers in businesses.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://x.com/StealthCoSpy/status/2036125827449102431",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://starlife.ai/"
    },
    "image": {
     "v": "/logos/starlife.png",
     "fit": "contain",
     "src": "https://starlife.ai/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Albany",
     "src": "https://starlife.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://starlife.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "418 Broadway, Albany, NY 12207, United States",
       "lat": 42.651167,
       "lon": -73.754968,
       "src": "https://starlife.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "foundry-robotics",
   "name": "Foundry Robotics",
   "summary": "AI-first robotics company automating assembly to rebuild American manufacturing.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://x.com/StealthCoSpy/status/2033543821112524804",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://foundryrobotics.ai/"
    },
    "image": {
     "v": "/logos/foundry-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6acf535ca9534c6f869878dc/6adfc60137162e8acd6cc2ca_Favicon%20(2).png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Emeryville",
     "src": "https://foundryrobotics.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://foundryrobotics.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Emeryville, California, United States",
       "lat": 37.831409,
       "lon": -122.286527,
       "src": "https://foundryrobotics.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "parallax-worlds",
   "name": "Parallax Worlds",
   "summary": "Delivers AI-trained robots to factories without integrators or upfront cost, with reliability-testing software.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/1945483568974885077",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://parallaxworlds.com/"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/parallax-worlds",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/parallax-worlds",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/parallax-worlds"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "color-robotics",
   "name": "Color Robotics",
   "summary": "Integration and observability software for managing industrial robots and automation systems.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/1939685353784242435",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://colorrobotics.ai/"
    },
    "image": {
     "v": "/logos/color-robotics.png",
     "fit": "contain",
     "src": "https://colorrobotics.ai/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/color-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/color-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/color-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "the-robotics-company",
   "name": "The Robotics Company",
   "summary": "Building an Indian physical-AI collaborative robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://x.com/StealthCoSpy/status/2109298132852916322",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://theroboticscompany.com/"
    },
    "city": {
     "v": "New Delhi",
     "src": "https://x.com/StealthCoSpy/status/2109298132852916322",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://x.com/StealthCoSpy/status/2109298132852916322",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New Delhi, India",
       "lat": 28.613895,
       "lon": 77.209006,
       "src": "https://x.com/StealthCoSpy/status/2109298132852916322"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sceneme",
   "name": "SceneMe",
   "summary": "Builds a consent-based repository of indoor scene and object data for robotics and physical AI.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/2109841581071052887",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sceneme.io/"
    },
    "image": {
     "v": "/logos/sceneme.png",
     "fit": "contain",
     "src": "https://sceneme.io/wp-content/uploads/2026/11/cropped-iFoHEoJwGPOWUXkFHxzGuPNxl3s-192x192.avif",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://www.linkedin.com/company/sceneme",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://www.linkedin.com/company/sceneme",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://www.linkedin.com/company/sceneme"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sidekick-robotics",
   "name": "Sidekick Robotics",
   "summary": "Builds a mobile robotic arm system for end-to-end laundry automation in caregiving and hospitality.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://x.com/StealthCoSpy/status/1953093711958556947",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sidekickrobotics.ai/"
    },
    "image": {
     "v": "/logos/sidekick-robotics.png",
     "fit": "contain",
     "src": "https://gnp4qftrhdh6hth9.public.blob.vercel-storage.com/sidekick-knockout-black-4096.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.linkedin.com/company/sidekickrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/sidekickrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, California, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.linkedin.com/company/sidekickrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  }
 ],
 "orgData": [],
 "orgRoles": []
};
