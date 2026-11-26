// Content seed: third organisation directory pass of 2026-11-25. Adds humanoid, physical-AI and embodied-AI
// organisations still missing after the second pass (robot makers, suppliers, software, model labs, integrators,
// compute, robotics investors, universities and labs), each with every role that applies and its HQ in
// data.locations. orgRoles adds missing secondary roles to existing organisations, never removing or reordering any.
// epSeedRun inserts an organisation only if no organisation has that slug or name, and fills only empty fields.
// See CHANGELOG.md.
export const EP_SEED_ORG_DIRECTORY_3_2026_11 = {
 "id": "org-directory-3-2026-11",
 "note": "Added in the third organisation directory pass, November 2026",
 "newOrgs": [
  {
   "slug": "double-robotics",
   "name": "Double Robotics",
   "summary": "Maker of the Double telepresence robot for hybrid offices.",
   "body": "Double Robotics is the creator of Double, the world’s leading telepresence robot. We help telecommuters feel more connected to their colleagues by giving them a physical presence wherever they need to be. Y Combinator Summer 2012 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.doublerobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.doublerobotics.com/"
    },
    "image": {
     "v": "/logos/double-robotics.png",
     "fit": "contain",
     "src": "https://www.doublerobotics.com/img2/standard/logo-double-robotics-mark-512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Burlingame",
     "src": "https://www.linkedin.com/company/double-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/double-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "828 Airport Blvd., Burlingame, CA 94010, United States",
       "lat": 37.591857,
       "lon": -122.350142,
       "src": "https://www.linkedin.com/company/double-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "multiply-labs",
   "name": "Multiply Labs",
   "summary": "Robotic production capacity for the pharma manufacturing industry.",
   "body": "The traditional manufacturing process for individualized drugs is extremely slow and expensive, because it is based on manual labor. Y Combinator Summer 2016 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.multiplylabs.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.multiplylabs.com/"
    },
    "image": {
     "v": "/logos/multiply-labs.png",
     "fit": "contain",
     "src": "https://www.multiplylabs.com/static/img/1-brand-multiply-labs-logos-logo-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/multiply-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/multiply-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/multiply-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "orangewood-labs",
   "name": "Orangewood Labs",
   "summary": "Orangewood builds amazing robots that people want.",
   "body": "Orangewood Labs makes physical ai and robotics with real world robot deployments performing millions of tasks Y Combinator Winter 2018 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://orangewood.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://orangewood.co/"
    },
    "image": {
     "v": "/logos/orangewood-labs.png",
     "fit": "contain",
     "src": "https://orangewood.co/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/orangewood-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/orangewood-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2 Marina Blvd, San Francisco, California 94123, United States",
       "lat": 37.806886,
       "lon": -122.432207,
       "src": "https://www.linkedin.com/company/orangewood-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aerones",
   "name": "Aerones",
   "summary": "Robotics for wind turbine maintenance.",
   "body": "We have created a robotic system for wind turbine blade maintenance. It can perform tasks such as lightning conductivity testing, high-resolution inspection, drainage hole cleaning, cleaning, painting and leading-edge repair. Y Combinator Winter 2018 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://aerones.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aerones.com/"
    },
    "image": {
     "v": "/logos/aerones.png",
     "fit": "contain",
     "src": "https://aerones.com/wp-content/uploads/2022/03/Aerones-logo_small-square-1-1-200x200.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Riga",
     "src": "https://lv.linkedin.com/company/aerones",
     "asof": "2026-11"
    },
    "country": {
     "v": "Latvia",
     "src": "https://lv.linkedin.com/company/aerones",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Katlakalna iela 11, Riga, LV-1073, Latvia",
       "lat": 56.928793,
       "lon": 24.199869,
       "src": "https://lv.linkedin.com/company/aerones"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "corvus-robotics",
   "name": "Corvus Robotics",
   "summary": "Autonomous drones to help warehouses scan inventory.",
   "body": "Our software allows drones to fly indoors and collect analytics, helping warehouses automate inventory tracking. Y Combinator Summer 2018 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.corvus-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.corvus-robotics.com/"
    },
    "image": {
     "v": "/logos/corvus-robotics.png",
     "fit": "contain",
     "src": "https://www.corvus-robotics.com/imgs/corvus-nav-logo.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/corvus-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/corvus-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/corvus-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "four-growers",
   "name": "Four Growers",
   "summary": "Robots that feed the world - robotic harvesting and analytics.",
   "body": "Four Growers was founded to provide healthy, affordable, local produce by reducing the production costs of greenhouse growers through robotics technology. We are positioning ourselves to be the automated solutions provider for greenhouse crop management. Y Combinator Summer 2018 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://fourgrowers.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://fourgrowers.com/"
    },
    "image": {
     "v": "/logos/four-growers.png",
     "fit": "contain",
     "src": "https://fourgrowers.com/wp-content/uploads/2022/07/cropped-four-growers-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/four-growers-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/four-growers-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "7371 Thomas Blvd, Pittsburgh, Pennsylvania 15208, United States",
       "lat": 40.451823,
       "lon": -79.902736,
       "src": "https://www.linkedin.com/company/four-growers-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "taobotics",
   "name": "Taobotics",
   "summary": "Autonomous robots for retails.",
   "body": "Y Combinator Winter 2019 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://taobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://taobotics.com/"
    },
    "image": {
     "v": "/logos/taobotics.png",
     "fit": "contain",
     "src": "https://taobotics.com/assets/wp-content/uploads/cropped-%E6%9C%9D%E9%97%BB%E9%81%93logo_%E6%A0%87%E7%AD%BE-192x192.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "SHENZHEN",
     "src": "https://cn.linkedin.com/company/taobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/taobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2 YUEXING 3RD ST, SHENZHEN, GUANGDONG 518057, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://cn.linkedin.com/company/taobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "trexo-robotics",
   "name": "Trexo Robotics",
   "summary": "Exoskeletons to help people walk, starting with children.",
   "body": "Trexo Robotics is building exoskeletons to help people walk, starting with children. Our product allows children with disabilities like Cerebral Palsy, to walk, in many cases for the first time in their lives. Y Combinator Winter 2019 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://us.trexorobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://us.trexorobotics.com/"
    },
    "image": {
     "v": "/logos/trexo-robotics.png",
     "fit": "contain",
     "src": "https://us.trexorobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mississauga",
     "src": "https://ca.linkedin.com/company/trexo-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/trexo-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "6705 Millcreek Dr, Mississauga, Ontario L5N 5M4, Canada",
       "lat": 43.59445,
       "lon": -79.749711,
       "src": "https://ca.linkedin.com/company/trexo-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sorting-robotics",
   "name": "Sorting Robotics",
   "summary": "We create automation technology for the cannabis industry.",
   "body": "Y Combinator Winter 2019 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.sortingrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sortingrobotics.com/"
    },
    "image": {
     "v": "/logos/sorting-robotics.png",
     "fit": "contain",
     "src": "https://www.sortingrobotics.com/logos/sri-symbol-blue-192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.linkedin.com/company/sortingrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/sortingrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "6837 Hayvenhurst Ave, Los Angeles, California 91406, United States",
       "lat": 34.19471,
       "lon": -118.492484,
       "src": "https://www.linkedin.com/company/sortingrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mobot",
   "name": "Mobot",
   "summary": "Mobot is a QA-as-a-service platform using actual mechanical robots.",
   "body": "Mobot (YC W19) is a QA-as-a-service platform using actual mechanical robots to automate testing of repetitive functions on real mobile devices. Y Combinator Winter 2019 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.mobot.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mobot.io/"
    },
    "image": {
     "v": "/logos/mobot.png",
     "fit": "contain",
     "src": "https://www.mobot.io/favicon.ico?favicon.0x3dzn~oxb6tn.ico?dpl=dpl_BRgz25xYkEPFBv3emGpqW7Pmmg9e",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.ycombinator.com/companies/mobot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/mobot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.ycombinator.com/companies/mobot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "well-principled",
   "name": "Well Principled",
   "summary": "The neural engine for autonomous robots.",
   "body": "We aren’t building AI to replace \"knowledge work” that requires neither, but to bolster the working human intellect which has never failed to discover new paths to prosperity. Y Combinator Summer 2019 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://wellprincipled.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://wellprincipled.com/"
    },
    "image": {
     "v": "/logos/well-principled.png",
     "fit": "contain",
     "src": "https://wellprincipled.com/apple-touch-icon.png?v=zXbpqENEz8",
     "asof": "2026-11"
    },
    "city": {
     "v": "St. Louis",
     "src": "https://www.ycombinator.com/companies/well-principled",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/well-principled",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "St. Louis, MO, United States",
       "lat": 38.625406,
       "lon": -90.190009,
       "src": "https://www.ycombinator.com/companies/well-principled"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yummy-future",
   "name": "Yummy Future",
   "summary": "We build robotic workforces for the food & beverage industry.",
   "body": "We amplify worker produtivity by10X. Restaurants and food retail businesses require high volume and consistency, yet many business owners struggle to achieve this. Y Combinator Summer 2019 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://yummy-future.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://yummy-future.com/"
    },
    "image": {
     "v": "/logos/yummy-future.png",
     "fit": "contain",
     "src": "https://yummy-future.com/assets/apple-touch-icon.png?v=3",
     "asof": "2026-11"
    },
    "city": {
     "v": "Champaign",
     "src": "https://www.linkedin.com/company/yummy-future-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/yummy-future-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "60 Hazelwood Dr, Champaign, Illinois 61820, United States",
       "lat": 40.091147,
       "lon": -88.240179,
       "src": "https://www.linkedin.com/company/yummy-future-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "somatic",
   "name": "Somatic",
   "summary": "Bathroom cleaning robots for office buildings.",
   "body": "Video: https://www.youtube.com/watch?v=XCY2-eDQ-X0 Y Combinator Winter 2020 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://getsomatic.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://getsomatic.com/"
    },
    "city": {
     "v": "New York",
     "src": "https://www.linkedin.com/company/somatic",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/somatic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "346 W 72nd St, New York, 10023, United States",
       "lat": 40.780352,
       "lon": -73.986009,
       "src": "https://www.linkedin.com/company/somatic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nextera-robotics",
   "name": "Nextera Robotics",
   "summary": "Maker of Didge construction robots that autonomously scan jobsites for progress tracking and safety monitoring.",
   "body": "AI-native Robotics and Industrial Automation. Y Combinator Summer 2020 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://didge.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://didge.ai/"
    },
    "image": {
     "v": "/logos/nextera-robotics.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/640f773acb679679c2d15948/0d7be579-99a1-4956-b33e-e524dacc0cf6/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.ycombinator.com/companies/nextera-robotics-didgeai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/nextera-robotics-didgeai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, MA, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://www.ycombinator.com/companies/nextera-robotics-didgeai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flux-auto",
   "name": "Flux Auto",
   "summary": "Physical AI for Warehouses and Factories.",
   "body": "Flux is building physical AI to automate material movement in warehouses and factories on legacy vehicle fleets. Using Flux's solutions customers can reduce their dependency on human drivers, while also increasing productivity and reducing operating costs. Y Combinator Winter 2021 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://fluxauto.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://fluxauto.ai/"
    },
    "image": {
     "v": "/logos/flux-auto.png",
     "fit": "contain",
     "src": "https://fluxauto.ai/icons/android-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://www.ycombinator.com/companies/flux-auto",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.ycombinator.com/companies/flux-auto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bengaluru, KA, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://www.ycombinator.com/companies/flux-auto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "encord",
   "name": "Encord",
   "summary": "The data layer for physical AI.",
   "body": "Encord is the data layer for physical AI. We're how the world's most ambitious AI teams turn messy, multimodal data into production systems - from humanoid robots to autonomous vehicles to smart infrastructure. Y Combinator Winter 2021 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://encord.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://encord.com/"
    },
    "image": {
     "v": "/logos/encord.png",
     "fit": "contain",
     "src": "https://encord.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.ycombinator.com/companies/encord",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.ycombinator.com/companies/encord",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, England, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://www.ycombinator.com/companies/encord"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hermes-robotics",
   "name": "Hermes Robotics",
   "summary": "Autonomous street sweeping as a service by retro-fitting vehicles.",
   "body": "Y Combinator Winter 2021 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.ycombinator.com/companies/hermes-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hermes-robotics.com/"
    },
    "image": {
     "v": "/logos/hermes-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/951bd3_640d5a43b293455b958189c9c496bf34~mv2.png/v1/fill/w_250,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logoh.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/hermes-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/hermes-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/hermes-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botbuilt",
   "name": "BotBuilt",
   "summary": "We use robots to build houses.",
   "body": "BotBuilt is creating flexible robotic systems to solve the housing crisis. Our cutting-edge software and cost-efficient hardware allow us to improve the world by providing beautiful construction, safer job sites, and sustainable building techniques. Y Combinator Winter 2021 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://botbuilt.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botbuilt.com/"
    },
    "image": {
     "v": "/logos/botbuilt.png",
     "fit": "contain",
     "src": "https://botbuilt.com/wp-content/uploads/2024/07/Botbuilt-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Southern Pines",
     "src": "https://www.ycombinator.com/companies/botbuilt",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/botbuilt",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Southern Pines, NC, United States",
       "lat": 35.174047,
       "lon": -79.392254,
       "src": "https://www.ycombinator.com/companies/botbuilt"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "charge-robotics",
   "name": "Charge Robotics",
   "summary": "Robots that build solar farms.",
   "body": "Charge Robotics is building robots that automate the most labor-intensive parts of solar construction. Solar has rapidly become the cheapest form of power generation in many regions. Y Combinator Summer 2021 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://chargerobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://chargerobotics.com/"
    },
    "image": {
     "v": "/logos/charge-robotics.png",
     "fit": "contain",
     "src": "https://chargerobotics.com/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/charge-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/charge-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/charge-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shinkei-systems",
   "name": "Shinkei Systems",
   "summary": "Robots for longer-lasting, better-tasting fish at scale.",
   "body": "1.2B lbs of fish are caught everyday yet as little as 1 in 3 fish make it to a plate — most of this waste arises because fish are suffocated on boats or electrocuted on farms. Y Combinator Winter 2022 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://shinkei.systems/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://shinkei.systems/"
    },
    "image": {
     "v": "/logos/shinkei-systems.png",
     "fit": "contain",
     "src": "https://shinkei.systems/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.ycombinator.com/companies/shinkei-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/shinkei-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, CA, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.ycombinator.com/companies/shinkei-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lucid-bots",
   "name": "Lucid Bots",
   "summary": "Drones that clean and paint up to 8x faster.",
   "body": "At Lucid, we are a B2B robotics company for dull, dirty, and dangerous jobs, starting with exterior cleaning and painting, an industry with a 200% annual turnover rate. Y Combinator Summer 2019 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.lucidbots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lucidbots.com/"
    },
    "image": {
     "v": "/logos/lucid-bots.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/686d25226fc10a1821f7b2d7/6877145f14c135b0ac9a4757_lb_25_web_assets__webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Charlotte",
     "src": "https://www.linkedin.com/company/lucid-bots",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/lucid-bots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "6601-A Northpark Blvd., Charlotte, North Carolina 28216, United States",
       "lat": 35.31309,
       "lon": -80.851162,
       "src": "https://www.linkedin.com/company/lucid-bots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "saphira-ai",
   "name": "Saphira AI",
   "summary": "The Enablement Layer for Physical AI.",
   "body": "Saphira is the easiest way for hardware products to get safety certified and reach market faster, such as industrial robots and heavy machinery. Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.saphira.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.saphira.ai/"
    },
    "image": {
     "v": "/logos/saphira-ai.png",
     "fit": "contain",
     "src": "https://www.saphira.ai/images/logo_icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/saphira-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/saphira-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/saphira-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autumn-labs",
   "name": "Autumn Labs",
   "summary": "Datadog for industrial robots.",
   "body": "Autumn Labs delivers a developer-friendly platform for monitoring and managing modern manufacturing lines. Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://autumnlabs.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://autumnlabs.io/"
    },
    "image": {
     "v": "/logos/autumn-labs.png",
     "fit": "contain",
     "src": "https://autumnlabs.io/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/autumn-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/autumn-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/autumn-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ember-robotics",
   "name": "Ember Robotics",
   "summary": "Hardware and system observability tools for robots and IoT devices.",
   "body": "Ember builds hardware and system observability tools for robots and IoT devices. Founded by former Tesla Autopilot engineers, we help hardware teams catch failures early, reduce downtime, and iterate with confidence from prototype to scale. Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.emberrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.emberrobotics.com/"
    },
    "image": {
     "v": "/logos/ember-robotics.png",
     "fit": "contain",
     "src": "https://www.emberrobotics.com/logo_assets/EmberRoboticsLogoOrange.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/ember-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/ember-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/ember-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "morphoai",
   "name": "MorphoAI",
   "summary": "Software tool for designing robots and machines.",
   "body": "MorphoAI builds hardware foundation models for mechanical engineering. Our GPU-accelerated design models that let engineers generate and explore hundreds of complete mechanical assembly designs in minutes, accelerating the invention of new hardware. Y Combinator Spring 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Model lab"
     ],
     "src": "https://morpho.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://morpho.ai/"
    },
    "image": {
     "v": "/logos/morphoai.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/GjiGEf5lIfRQhTF0MrE2nKMC1o.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.ycombinator.com/companies/morphoai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/morphoai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.ycombinator.com/companies/morphoai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "general-trajectory",
   "name": "General Trajectory",
   "summary": "Building general-purpose AI for the physical world.",
   "body": "General Trajectory is using AI to solve the world's most important problems, from autonomous defense to scientific R&D. Y Combinator Winter 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.ycombinator.com/companies/general-trajectory",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.generaltrajectory.com/"
    },
    "image": {
     "v": "/logos/general-trajectory.png",
     "fit": "contain",
     "src": "https://www.generaltrajectory.com/favicon-light.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.ycombinator.com/companies/general-trajectory",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/general-trajectory",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, CA, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.ycombinator.com/companies/general-trajectory"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "phases",
   "name": "Phases",
   "summary": "Robot arms for assembly, picking and packing, billed by the hours they work.",
   "body": "Y Combinator Summer 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://phases.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://phases.ai/"
    },
    "image": {
     "v": "/logos/phases.png",
     "fit": "contain",
     "src": "https://phases.ai/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/phases",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/phases",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/phases"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "efference",
   "name": "Efference",
   "summary": "Perception and compute stack for data-driven robotics: data collection, teleoperation and model inference.",
   "body": "Y Combinator Fall 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://efference.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://efference.ai/"
    },
    "image": {
     "v": "/logos/efference.png",
     "fit": "contain",
     "src": "https://efference.ai/assets/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/efference",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/efference",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1643 Powell St, San Francisco, California 94133, United States",
       "lat": 37.799778,
       "lon": -122.411023,
       "src": "https://www.linkedin.com/company/efference"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "general-astronautics",
   "name": "General Astronautics",
   "summary": "Superintelligent space Robots.",
   "body": "Autonomous robotics for space operations. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.ycombinator.com/companies/generalastro",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.generalastro.com/"
    },
    "image": {
     "v": "/logos/general-astronautics.png",
     "fit": "contain",
     "src": "https://www.generalastro.com/assets/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/generalastro",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/generalastro",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/generalastro"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "waddle-labs",
   "name": "Waddle Labs",
   "summary": "LLM agents that control robots.",
   "body": "Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.waddlelabs.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.waddlelabs.ai/"
    },
    "image": {
     "v": "/logos/waddle-labs.png",
     "fit": "contain",
     "src": "https://www.waddlelabs.ai/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/waddle-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/waddle-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/waddle-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fern",
   "name": "Fern",
   "summary": "RL environments for robotics companies.",
   "body": "Fern build high fidelity simulations for robotics, specifically focused on manipulation tasks. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.fern.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fern.bot/"
    },
    "image": {
     "v": "/logos/fern.png",
     "fit": "contain",
     "src": "https://www.fern.bot/icon.svg?icon.0co8ngayrvgvb.svg?dpl=dpl_2m62kRsJQF2C2FYQonHfcnUT23HR",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/fern-bot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/fern-bot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/fern-bot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "perfectbit",
   "name": "PerfectBit",
   "summary": "Builds learned manipulation and control policies for robots doing real work.",
   "body": "PerfectBit builds learned policies for robots that do real work. We train manipulation and control policies that hold up outside the lab, in the unstructured environments where real tasks actually happen. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://perfectbit.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://perfectbit.ai/"
    },
    "image": {
     "v": "/logos/perfectbit.png",
     "fit": "contain",
     "src": "https://perfectbit.ai/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/perfectbit",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/perfectbit",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2261 Market Street, San Francisco, CA 94114, United States",
       "lat": 37.76475,
       "lon": -122.432024,
       "src": "https://www.linkedin.com/company/perfectbit"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "general-instinct",
   "name": "General Instinct",
   "summary": "Deployment infrastructure for Physical AI.",
   "body": "Making robot post-training and deployment scalable. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.linkedin.com/company/general-instinct",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://general-instinct.com/"
    },
    "image": {
     "v": "/logos/general-instinct.png",
     "fit": "contain",
     "src": "https://general-instinct.com/GI-logo-dark-new.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/general-instinct",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/general-instinct",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/general-instinct"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aseon-labs",
   "name": "Aseon Labs",
   "summary": "Robotic pitstops for self-driving cars.",
   "body": "Aseon Labs builds robotic pitstops for self-driving cars. Autonomous vehicles can drive themselves, but they still rely on humans and centralized depots for charging, cleaning and servicing multiple times per day. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://aseon.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aseon.com/"
    },
    "image": {
     "v": "/logos/aseon-labs.png",
     "fit": "contain",
     "src": "https://aseon.com/android-chrome-512x512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/aseon-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/aseon-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/aseon-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mass-magnetics",
   "name": "Mass Magnetics",
   "summary": "USA-made magnetics for robotics and defense.",
   "body": "Mass Magnetics turns recycled rare-earth scrap into high-performance permanent magnets, made in America. The materials we supply are the backbone of electric motors, sensors, speakers, hard drives, and electronics. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://massmagnetics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://massmagnetics.com/"
    },
    "image": {
     "v": "/logos/mass-magnetics.png",
     "fit": "contain",
     "src": "https://massmagnetics.com/assets/img/favicon-180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.ycombinator.com/companies/mass-magnetics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/mass-magnetics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, MA, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://www.ycombinator.com/companies/mass-magnetics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "antropi-robotics",
   "name": "Antropi Robotics",
   "summary": "Autonomous factories that turn designs into metal parts, in days.",
   "body": "Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.antropi.world/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.antropi.world/"
    },
    "image": {
     "v": "/logos/antropi-robotics.png",
     "fit": "contain",
     "src": "https://www.antropi.world/favicon.ico?favicon.3hiwysrrvylul.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/antropi-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/antropi-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/antropi-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "peritai",
   "name": "Perit.AI",
   "summary": "Expert-collected voice, egocentric and RL training data for frontier….",
   "body": "Perit is a training-data company for frontier AI labs. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://perit.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://perit.ai/"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/peritai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/peritai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/peritai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "asim",
   "name": "Asim",
   "summary": "Enable robots to operate safely in the real world.",
   "body": "Asim is building standardized benchmarks for physical intelligence, helping robotics companies understand their robots’ capabilities and safety limits before deployment. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.asim-group.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.asim-group.com/"
    },
    "image": {
     "v": "/logos/asim.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.asim-group.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/asim-group",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/asim-group",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/asim-group"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "foreshadow-industries",
   "name": "Foreshadow Industries",
   "summary": "Defense robotics built on AI models that reason over space and time.",
   "body": "We turn existing military systems into intelligent machine. Our AI model (Zulu) is designed to natively reason over space and time. That is what enables long duration missions. Zulu is trained to operate maritime vessels, airplanes, ground vehicles and satellites. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.ycombinator.com/companies/foreshadow-industries",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://foreshadow-industries.ai/"
    },
    "city": {
     "v": "Coronado",
     "src": "https://www.ycombinator.com/companies/foreshadow-industries",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/foreshadow-industries",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Coronado, CA, United States",
       "lat": 32.69152,
       "lon": -117.176695,
       "src": "https://www.ycombinator.com/companies/foreshadow-industries"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nuum-robotics",
   "name": "Nuum Robotics",
   "summary": "Snake-like robots for maintenance inside machinery.",
   "body": "Y Combinator Winter 2027 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://nuumrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://nuumrobotics.com/"
    },
    "image": {
     "v": "/logos/nuum-robotics.png",
     "fit": "contain",
     "src": "https://nuumrobotics.com/assets/favicon.png?v=whiteout-rounded-2",
     "asof": "2026-11"
    },
    "city": {
     "v": "Waterloo",
     "src": "https://www.ycombinator.com/companies/nuum-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.ycombinator.com/companies/nuum-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Waterloo, ON, Canada",
       "lat": 43.46527,
       "lon": -80.522296,
       "src": "https://www.ycombinator.com/companies/nuum-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vibe-robotics",
   "name": "Vibe Robotics",
   "summary": "Robotics workforce for hotels.",
   "body": "Vibe Robotics builds robots for the work nobody should have to repeat. We’re starting in hotels. Every day, housekeeping teams move linens between floors, restock carts, and fold stacks of laundry before the next guests arrive. It’s physical work that has to get done every shift. Y Combinator Winter 2027 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.viberobotics.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.viberobotics.co/"
    },
    "image": {
     "v": "/logos/vibe-robotics.png",
     "fit": "contain",
     "src": "https://www.viberobotics.co/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/vibe-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/vibe-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/vibe-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "habit",
   "name": "HABIT",
   "summary": "Builds autonomous research agents that accelerate frontier world models.",
   "body": "We build autonomous research agents that accelerate frontier world models. Y Combinator Spring 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.ycombinator.com/companies/habit",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.habit.inc/"
    },
    "image": {
     "v": "/logos/habit.png",
     "fit": "contain",
     "src": "https://www.habit.inc/assets/apple-touch-icon.jpeg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/habit",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/habit",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/habit"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "maya-labs",
   "name": "Maya Labs",
   "summary": "Building self-programming machines.",
   "body": "Applied research lab on a mission to build machines which can program themselves to do any task. Y Combinator Summer 2022 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://mayalabs.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mayalabs.io/"
    },
    "image": {
     "v": "/logos/maya-labs.png",
     "fit": "contain",
     "src": "https://mayalabs.io/images/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://www.ycombinator.com/companies/maya-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.ycombinator.com/companies/maya-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bengaluru, KA, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://www.ycombinator.com/companies/maya-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "advanced-metal-research",
   "name": "Advanced Metal Research",
   "summary": "Machine intelligence for American Welding.",
   "body": "America does not just need more welders. It needs welding knowledge that can scale. The American Welding Society projects 320,500 new welding professionals will be needed by 2029, with about 80,000 jobs to be filled annually from 2025 to 2029. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://advancedmetalresearch.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://advancedmetalresearch.com/"
    },
    "image": {
     "v": "/logos/advanced-metal-research.png",
     "fit": "contain",
     "src": "https://advancedmetalresearch.com/assets/img/amr-mark.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hawthorne",
     "src": "https://www.linkedin.com/company/advanced-metal-research",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/advanced-metal-research",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "13020 Yukon Ave, Hawthorne, California 90250, United States",
       "lat": 33.914252,
       "lon": -118.335257,
       "src": "https://www.linkedin.com/company/advanced-metal-research"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dreame-technology",
   "name": "Dreame Technology",
   "summary": "Maker of high-speed motors and robot vacuum cleaners.",
   "body": "Headquartered in Suzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.dreame.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dreame.tech/"
    },
    "image": {
     "v": "/logos/dreame-technology.png",
     "fit": "contain",
     "src": "https://www.dreame.tech/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Suzhou",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Suzhou, China",
       "lat": 31.311123,
       "lon": 120.621288,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yijiahe",
   "name": "Yijiahe",
   "summary": "Chinese robotics company making surgical and cleaning robots; listed on the Shanghai main board.",
   "body": "Headquartered in Nanjing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.yijiahe.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.yijiahe.com/"
    },
    "image": {
     "v": "/logos/yijiahe.png",
     "fit": "contain",
     "src": "https://www.yijiahe.com/wp-content/themes/chinatheme/uploads/icon-logo-152.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nanjing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nanjing, China",
       "lat": 32.043828,
       "lon": 118.778863,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yunji-technology",
   "name": "Yunji Technology",
   "summary": "Maker of delivery robots and a robot service platform; listed in Hong Kong.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.yunjichina.com.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.yunjichina.com.cn/"
    },
    "image": {
     "v": "/logos/yunji-technology.png",
     "fit": "contain",
     "src": "https://www.yunjichina.com.cn/upload/20260924/8eb7accec210e3449fefa6bc0a354e83.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inovance",
   "name": "Inovance",
   "summary": "At Inovance, we believe technology should increase productivity while supporting a more sustainable future for people and the planet.",
   "body": "Founded in 2003, We has spent more than 20 years helping manufacturers improve productivity, efficiency, and sustainability through advanced automation and digitalization solutions.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://cn.linkedin.com/company/inovance",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.inovance.com/"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "efort",
   "name": "EFORT",
   "summary": "Chinese industrial robot maker and smart-manufacturing solutions provider, listed on the STAR Market.",
   "body": "Headquartered in Wuhu, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://efort.com.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.efort.com.cn/"
    },
    "image": {
     "v": "/logos/efort.png",
     "fit": "contain",
     "src": "https://www.efort.com.cn/web/bocweb/bocweb/web/img/logo.png?v=v1",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wuhu",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Wuhu, China",
       "lat": 31.180057,
       "lon": 118.214178,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "orionstar",
   "name": "OrionStar",
   "summary": "OrionStar is a global leader in Large Language Model Empowered Service Robotics, founded in 2016.",
   "body": "Leveraging cutting-edge AgentOS and advanced voice-interaction technology, we develop robots to streamline repetitive tasks and facilitate human-robot collaboration in hospitality and warehousing logistics scenarios.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://en.orionstar.com",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://en.orionstar.com/"
    },
    "image": {
     "v": "/logos/orionstar.png",
     "fit": "contain",
     "src": "https://www.orionstar.com/res/orics/down/ow001_20250415_0ca391f892bffa66c8ad90c8835657bf.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://cn.linkedin.com/company/orionstar",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/orionstar",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No.7 Sanjianfang South Lane,  Chaoyang District, Beijing, 100024, China",
       "lat": 39.92045,
       "lon": 116.436911,
       "src": "https://cn.linkedin.com/company/orionstar"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "guozi-robotics",
   "name": "Guozi Robotics",
   "summary": "Maker of warehouse and logistics robots.",
   "body": "Headquartered in Hangzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.gzrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gzrobot.com/"
    },
    "image": {
     "v": "/logos/guozi-robotics.png",
     "fit": "contain",
     "src": "https://cms.gzrobot.com/prod-api/preview/GuoziChina/resources/image/2025/09/16/720297943576645.png?name=1715565815664.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hangzhou, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "youibot",
   "name": "Youibot",
   "summary": "Youibot is a global leading embodied AI company.",
   "body": "We are committed to advancing intelligent transformation for global industrial customers through mobile manipulation robots and helping our customers achieve stable, flexible and highly efficient production.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://cn.linkedin.com/company/youibot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://youibot.com/"
    },
    "image": {
     "v": "/logos/youibot.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=youibot.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hefei",
     "src": "https://cn.linkedin.com/company/youibot",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/youibot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building 3, Northwest corner of Xianghe Road and Guanli Road intersection, Hefei, Anhui, China",
       "lat": 31.866568,
       "lon": 117.281428,
       "src": "https://cn.linkedin.com/company/youibot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gausium",
   "name": "Gausium",
   "summary": "Gausium is a leading company of AI-powered autonomous cleaning solutions with more than 20,000 customers in more than 70 countries and regions.",
   "body": "Products and services of Gausium include commercial floor cleaning robots, docking stations, cloud platform and application software, and more in the pipeline.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.gs-robot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gs-robot.com/"
    },
    "image": {
     "v": "/logos/gausium.png",
     "fit": "contain",
     "src": "https://www.gs-robot.com/wp-content/uploads/2024/07/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://cn.linkedin.com/company/gausium-official",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/gausium-official",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8F, Building E, No. 998 South Shenbin Rd, Minhang, Shanghai, 201100, China",
       "lat": 31.114767,
       "lon": 121.376943,
       "src": "https://cn.linkedin.com/company/gausium-official"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboct",
   "name": "RoboCT",
   "summary": "RoboCT has got 5 series of lower limb exoskeletons including UGO, Kid GO, GOGO, Bedside Exoskeleton and DEUS to meet multiple rehabilitation needs.",
   "body": "Headquartered in Hangzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.roboct.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.roboct.com/"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://cn.linkedin.com/company/roboct",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/roboct",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "7F-01B, Block 2, No.1326 West Wenyi Road, Hangzhou, Zhejiang 311121, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://cn.linkedin.com/company/roboct"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "atom-robot",
   "name": "Atom Robot",
   "summary": "Maker of high-speed industrial robots and wheeled dual-arm robots.",
   "body": "Headquartered in Tianjin, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.atomrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.atomrobot.com/"
    },
    "city": {
     "v": "Tianjin",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tianjin, China",
       "lat": 39.303262,
       "lon": 117.416364,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robot-phoenix",
   "name": "Robot Phoenix",
   "summary": "Founded in 2012, Robotphoenix focuses on the R&D, manufacturing, and integration of industrial robots and intelligent automation solutions, serving a wide range of manufacturing applications.",
   "body": "On May 18, 2026, Robotphoenix began trading on the Main Board of the Hong Kong Stock Exchange under stock code 6871.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.robotphoenix.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robotphoenix.com/"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://cn.linkedin.com/company/robotphoenix",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/robotphoenix",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No.477 Hongxing Road, Xiaoshan Economic Development Zone, Hangzhou, Zhejiang 310000, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://cn.linkedin.com/company/robotphoenix"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tars-robotics",
   "name": "TARS Robotics",
   "summary": "Developer of industrial and general-purpose robots.",
   "body": "Headquartered in Shanghai, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tars-ai.com/"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yobotics",
   "name": "Yobotics",
   "summary": "Maker of legged, bio-inspired robots.",
   "body": "Headquartered in Jinan, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://yobotics.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://yobotics.cn/"
    },
    "image": {
     "v": "/logos/yobotics.png",
     "fit": "contain",
     "src": "https://yobotics.cn/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Jinan",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Jinan, China",
       "lat": 36.651975,
       "lon": 117.113848,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "udeerai",
   "name": "Udeer.ai",
   "summary": "Udeer Ai Pet.Ltd focuses on the field of large models and embodied intelligence, relying on its second-generation embodied intelligence technology LPLM large model, to create a generantelligent brain…",
   "body": "Udeer Ai Pet.Ltd focuses on the field of large models and embodied intelligence, relying on its second-generation embodied intelligence technology LPLM large model, to create a generantelligent brain that is highly adaptable and generalizable to both software and hardware.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://udeerai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://udeerai.com/"
    },
    "image": {
     "v": "/logos/udeerai.png",
     "fit": "contain",
     "src": "https://udeerai.com/icon-256x256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hangzhou, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tiantai-robot",
   "name": "Tiantai Robot",
   "summary": "Maker of core robot motion units.",
   "body": "Headquartered in Foshan, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gdtiantai.com/"
    },
    "city": {
     "v": "Foshan",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Foshan, China",
       "lat": 23.023979,
       "lon": 113.115956,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fiveages",
   "name": "FiveAges",
   "summary": "Maker of wheeled humanoid robots and embodied AI models.",
   "body": "Headquartered in Hangzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://five-ages.com/"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hangzhou, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "galileo-robotics",
   "name": "Galileo Robotics",
   "summary": "Maker of quadruped and humanoid robots.",
   "body": "Headquartered in Tianjin, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.galileotime.com/"
    },
    "image": {
     "v": "/logos/galileo-robotics.png",
     "fit": "contain",
     "src": "https://www.galileotime.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tianjin",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tianjin, China",
       "lat": 39.303262,
       "lon": 117.416364,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "moxian-technology",
   "name": "Moxian Technology",
   "summary": "Maker of flexible tactile and pressure sensors.",
   "body": "Headquartered in Dongguan, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.moxiantech.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.moxiantech.com/"
    },
    "image": {
     "v": "/logos/moxian-technology.png",
     "fit": "contain",
     "src": "https://www.moxiantech.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dongguan",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dongguan, China",
       "lat": 23.018357,
       "lon": 113.745233,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ace-robotics",
   "name": "ACE Robotics",
   "summary": "Embodied-AI company building data collection, a world model and an embodied \"brain\" model for robots.",
   "body": "Headquartered in Shanghai, China.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.acerobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.acerobotics.com/"
    },
    "image": {
     "v": "/logos/ace-robotics.png",
     "fit": "contain",
     "src": "https://www.acerobotics.com/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "noematrix",
   "name": "Noematrix",
   "summary": "Noematrix Intelligence is a leading company in general-purpose robotic intelligence (Embodied AI), focusing on the research and development of large models of \"force-centered\" embodied intelligence…",
   "body": "Noematrix Intelligence is a leading company in general-purpose robotic intelligence (Embodied AI), focusing on the research and development of large models of \"force-centered\" embodied intelligence and related infrastructure.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.noematrix.ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.noematrix.ai/"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "haribit",
   "name": "Haribit",
   "summary": "Maker of humanoid and quadruped robots.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://haribit.com/"
    },
    "image": {
     "v": "/logos/haribit.png",
     "fit": "contain",
     "src": "https://haribit.com/assets/images/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vita-dynamics",
   "name": "Vita Dynamics",
   "summary": "Maker of quadruped robot dogs.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vita.cn/"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hypershell",
   "name": "Hypershell",
   "summary": "Maker of powered outdoor exoskeletons.",
   "body": "Headquartered in Shanghai, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://hypershell.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hypershell.cn/"
    },
    "image": {
     "v": "/logos/hypershell.png",
     "fit": "contain",
     "src": "https://hypershell.cn/cdn/shop/files/favicon_e2d9586c-2582-4e67-bf6a-4d199db1d5f5_32x32.png?v=1752079532",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "artrobot",
   "name": "ARTROBOT",
   "summary": "Maker of educational and special-purpose robots.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://artrobot.com/"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vizum",
   "name": "Vizum",
   "summary": "Maker of vision modules and humanoid robots.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vizumtech.com/"
    },
    "image": {
     "v": "/logos/vizum.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=vizumtech.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sysmo-robot",
   "name": "Sysmo Robot",
   "summary": "A Modern Back-end Management System",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sysmorobot.com/"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "corenetic",
   "name": "Corenetic",
   "summary": "Maker of wheeled humanoid robots.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.corenetic.ai/"
    },
    "image": {
     "v": "/logos/corenetic.png",
     "fit": "contain",
     "src": "https://www.corenetic.ai/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arx-robotics",
   "name": "ARX Robotics",
   "summary": "Release timeline of ARX robots: A5, AC 2, AC one, LIFT 2, X7, LIFT, R5, X5.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://arx-x.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://arx-x.com/"
    },
    "image": {
     "v": "/logos/arx-robotics.png",
     "fit": "contain",
     "src": "https://arx-x.com/assets/img/arx-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ling-robotics",
   "name": "Ling Robotics",
   "summary": "Tsinghua-linked embodied-AI company building the RUDA embodied model architecture, data collection and robot deployment tools.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.livsynrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.livsynrobotics.com/"
    },
    "image": {
     "v": "/logos/ling-robotics.png",
     "fit": "contain",
     "src": "https://www.livsynrobotics.com/livsyn-favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dexteleop",
   "name": "DexTeleop",
   "summary": "LingYu Robotics is an AI robotics company building robots and the data infrastructure to turn real-world interactions into training-ready data.",
   "body": "Our self-developed LingYu TA series already operates in real-world environments across retail, hospitality, and other service settings.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.dexteleop.com/zh",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dexteleop.com/"
    },
    "image": {
     "v": "/logos/dexteleop.png",
     "fit": "contain",
     "src": "https://www.dexteleop.com/site-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "anyverse-dynamics",
   "name": "Anyverse Dynamics",
   "summary": "Maker of wheeled humanoid robots.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://anyverse.com/"
    },
    "image": {
     "v": "/logos/anyverse-dynamics.png",
     "fit": "contain",
     "src": "https://icons.duckduckgo.com/ip3/anyverse.com.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "deepcybo",
   "name": "DeepCybo",
   "summary": "Maker of bipedal humanoid robots.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://deepcybo.site/"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "uls-robotics",
   "name": "ULS Robotics",
   "summary": "Consumer exoskeleton brand.",
   "body": "Headquartered in Shanghai, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.ulsrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ulsrobotics.com/"
    },
    "image": {
     "v": "/logos/uls-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.ulsrobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bxi-robotics",
   "name": "BXI Robotics",
   "summary": "BXI Robotics produces Humanoid Robots & Advanced Joint Motors used on embodies.",
   "body": "BXI Robotics develops Elf 3 research humanoids, 25–150 N·m joint actuators and teleoperation platforms, with custom robot design and OEM/ODM integration.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator",
      "Supplier"
     ],
     "src": "https://www.bxirobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bxirobotics.com/"
    },
    "image": {
     "v": "/logos/bxi-robotics.png",
     "fit": "contain",
     "src": "https://www.bxirobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cyan-robotics",
   "name": "Cyan Robotics",
   "summary": "Two-legged character robots: the Orca I humanoid and the 80 cm plush-covered Amoo, plus the Dino OS software that runs them.",
   "body": "Headquartered in Shanghai, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.cyanborg.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cyanborg.com/"
    },
    "image": {
     "v": "/logos/cyan-robotics.png",
     "fit": "contain",
     "src": "https://www.cyanborg.com/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lingyi-itech",
   "name": "Lingyi iTech",
   "summary": "Precision parts and modules for electronics; humanoid robot parts and whole-robot assembly.",
   "body": "Headquartered in Shenzhen, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.lingyiitech.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lingyiitech.com/"
    },
    "image": {
     "v": "/logos/lingyi-itech.png",
     "fit": "contain",
     "src": "https://www.lingyiitech.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hightorque-robotics",
   "name": "HighTorque Robotics",
   "summary": "HighTorque Robotics — The pioneer of desktop-level humanoid robot platforms.",
   "body": "Dedicated to empowering every developer with a high-performance humanoid robot, ushering in the \"PC Era\" of embodied intelligence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.hightorquerobotics.com",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hightorquerobotics.com/"
    },
    "image": {
     "v": "/logos/hightorque-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.hightorquerobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Guangzhou",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Guangzhou, China",
       "lat": 23.128843,
       "lon": 113.258958,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "codroid",
   "name": "Codroid",
   "summary": "ESTUN spin-off building full-stack embodied-AI robots for industrial manufacturing.",
   "body": "Headquartered in Nanjing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.codroid.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.codroid.ai/"
    },
    "image": {
     "v": "/logos/codroid.png",
     "fit": "contain",
     "src": "https://www.codroid.ai/wp-content/uploads/2025/03/icon-logo-152-1-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nanjing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nanjing, China",
       "lat": 32.043828,
       "lon": 118.778863,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zhiwang-future",
   "name": "Zhiwang Future",
   "summary": "Embodied-AI robot maker targeting warehouse and logistics work with mobile, dexterous robots.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zwwlai.com/"
    },
    "city": {
     "v": "Beijing",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://zeeklog.com/2026nian-wo-zheng-li-liao-zhong-guo-200-duo-jia-ji-qi-ren-ju-shen-zhi-neng-gong-si-ming-dan-6"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "alpha-robotics",
   "name": "Alpha Robotics",
   "summary": "Reception, delivery, patrol and hospital robots and the Alphabot G1 wheeled humanoid.",
   "body": "Headquartered in Suzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.alpha-robot.com.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.alpha-robot.com.cn/"
    },
    "image": {
     "v": "/logos/alpha-robotics.png",
     "fit": "contain",
     "src": "https://www.alpha-robot.com.cn/public/static/index/images/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Suzhou",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Suzhou, China",
       "lat": 31.311123,
       "lon": 120.621288,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "encos",
   "name": "ENCOS",
   "summary": "Robot joint modules, batteries and dexterous hands.",
   "body": "Headquartered in Nanjing, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.encos.cn/"
    },
    "image": {
     "v": "/logos/encos.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.encos.cn&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nanjing",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nanjing, China",
       "lat": 32.043828,
       "lon": 118.778863,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ex-robots",
   "name": "EX Robots",
   "summary": "Lifelike humanoid robots with human-like faces and skin, and the robot science halls that show them.",
   "body": "Headquartered in Dalian, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://exrobots.net/"
    },
    "image": {
     "v": "/logos/ex-robots.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=exrobots.net&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dalian",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dalian, China",
       "lat": 38.913049,
       "lon": 121.609801,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "faulhaber",
   "name": "FAULHABER",
   "summary": "Small and miniature drive systems: DC and brushless DC micromotors, stepper and linear motors, precision gearheads, encoders and drive electronics.",
   "body": "Germany is one of the most important sales markets for FAULHABER drive systems. At the company group's largest and oldest location, the focus is on innovation leadership and comprehensive technological know-how in research, development and production.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.faulhaber.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.faulhaber.com/"
    },
    "image": {
     "v": "/logos/faulhaber.png",
     "fit": "contain",
     "src": "https://www.faulhaber.com/Manifest/android-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Schönaich",
     "src": "https://de.linkedin.com/company/faulhaber-drive-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/faulhaber-drive-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Faulhaberstraße 1, Schönaich, 71101, Germany",
       "lat": 48.668299,
       "lon": 9.070728,
       "src": "https://de.linkedin.com/company/faulhaber-drive-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "feetech",
   "name": "Feetech",
   "summary": "Servos (small motor, gearbox and controller units) for robots and models, and motor control systems.",
   "body": "Headquartered in Shenzhen, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.feetechrc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.feetechrc.com/"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "thk",
   "name": "THK",
   "summary": "LM Guide linear guides, ball splines, ball screws and other linear motion parts.",
   "body": "THK, Linear Motion, LM Guides, Linear bearing, Linear Guide, Ball Splines, Ball Screws, electric actuators, mechatronics products, automobile parts, seismic isolation systems",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.thk.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.thk.com/"
    },
    "image": {
     "v": "/logos/thk.png",
     "fit": "contain",
     "src": "https://www.thk.com/sites/default/files/theme/global/resources/images/common/header-logo.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "timken",
   "name": "Timken",
   "summary": "Tapered roller, precision and other engineered bearings, plus gear drives, couplings, linear motion parts and Spinea cycloidal gears for robots.",
   "body": "The Timken Company (NYSE: TKR; www.timken.com ), a leader in advanced motion technology, designs and manufactures highly engineered systems and components that solve the world’s most complex challenges in motion, reliability, and efficiency.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.timken.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.timken.com/"
    },
    "image": {
     "v": "/logos/timken.png",
     "fit": "contain",
     "src": "https://www.timken.com/wp-content/uploads/2026/06/timken-logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "North Canton",
     "src": "https://www.linkedin.com/company/the-timken-company",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/the-timken-company",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4500 Mount Pleasant St NW, North Canton, OH 44720, United States",
       "lat": 40.905227,
       "lon": -81.431576,
       "src": "https://www.linkedin.com/company/the-timken-company"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "waveshare",
   "name": "Waveshare",
   "summary": "Development boards, displays, sensors and servo driver boards for makers and engineers.",
   "body": "Founded in 2006, Waveshare is headquartered in Shenzhen, China, with additional offices in HK. Waveshare's product range is extensive, covering multiple areas such as microcontrollers, development boards, displays, sensors, wireless communication, and more.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.waveshare.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.waveshare.com/"
    },
    "image": {
     "v": "/logos/waveshare.png",
     "fit": "contain",
     "src": "https://www.waveshare.com/media/eternal/venedor/default/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "advanced-navigation",
   "name": "Advanced Navigation",
   "summary": "Navigation and motion sensors, such as IMUs, GNSS receivers and inertial navigation systems.",
   "body": "Advanced Navigation is a global leader in navigation and autonomous systems. By leveraging capabilities in software-enhanced hardware, every solution delivers unrivaled capabilities and exceptional performance across land, air, sea and space applications where GPS is unreliable.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.advancednavigation.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.advancednavigation.com/"
    },
    "image": {
     "v": "/logos/advanced-navigation.png",
     "fit": "contain",
     "src": "https://www.advancednavigation.com/wp-content/uploads/2024/09/cropped-favicon-300-192x192.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sydney",
     "src": "https://au.linkedin.com/company/advanced-navigation",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://au.linkedin.com/company/advanced-navigation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "255 George St, Sydney, New South Wales 2000, Australia",
       "lat": -33.863719,
       "lon": 151.207075,
       "src": "https://au.linkedin.com/company/advanced-navigation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aaeon",
   "name": "AAEON",
   "summary": "Industrial and embedded computers and computer boards.",
   "body": "Established in 1992, AAEON is one of the leading designers and manufacturers of advanced industrial and embedded computing platforms today.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.aaeon.com/en",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aaeon.com/"
    },
    "image": {
     "v": "/logos/aaeon.png",
     "fit": "contain",
     "src": "https://dgx8.cdn50.nexwebb.com/aaeon/uif/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "New Taipei City",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Taiwan",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New Taipei City, Taiwan",
       "lat": 25.060027,
       "lon": 121.459569,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bosch-sensortec",
   "name": "Bosch Sensortec",
   "summary": "Small MEMS motion, pressure, humidity and gas sensors for phones, wearables and robots.",
   "body": "Headquartered in Reutlingen, Germany.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.bosch-sensortec.com/en",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bosch-sensortec.com/"
    },
    "image": {
     "v": "/logos/bosch-sensortec.png",
     "fit": "contain",
     "src": "https://www.bosch-sensortec.com/media/tech/tech_images/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Reutlingen",
     "src": "https://de.linkedin.com/company/bosch-sensortec",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/bosch-sensortec",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gerhard-Kindler-Straße 9, Reutlingen, 72770, Germany",
       "lat": 48.496458,
       "lon": 9.136989,
       "src": "https://de.linkedin.com/company/bosch-sensortec"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "amd",
   "name": "AMD",
   "summary": "Processors for PCs, servers and embedded systems: CPUs, graphics chips and adaptive chips.",
   "body": "We care deeply about transforming lives with AMD technology to enrich our industry, our communities, and the world.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.amd.com/en.html",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.amd.com/"
    },
    "image": {
     "v": "/logos/amd.png",
     "fit": "contain",
     "src": "https://www.amd.com/content/dam/code/images/header/amd-header-logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.linkedin.com/company/amd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/amd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2485 Augustine Drive, Santa Clara, California 95054, United States",
       "lat": 37.382961,
       "lon": -121.970377,
       "src": "https://www.linkedin.com/company/amd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "casivision",
   "name": "CASIVISION",
   "summary": "Camera-based inspection machines for factories, and CASIVIBOT, a wheeled robot with two human-like arms that checks parts for flaws.",
   "body": "Headquartered in Luoyang, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.casivision.com/"
    },
    "image": {
     "v": "/logos/casivision.png",
     "fit": "contain",
     "src": "https://www.casivision.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Luoyang",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Luoyang, China",
       "lat": 34.619654,
       "lon": 112.447705,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hipnuc",
   "name": "HiPNUC",
   "summary": "IMUs, attitude and navigation sensors and tilt sensors.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.hipnuc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hipnuc.com/"
    },
    "image": {
     "v": "/logos/hipnuc.png",
     "fit": "contain",
     "src": "https://www.hipnuc.com/static/images/brand.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "honor",
   "name": "HONOR",
   "summary": "AI phones, PCs, tablets and wearables, and a first humanoid robot for consumers.",
   "body": "Shop mobile phones, tablets, laptops, wearables, and more at the official HONOR Global store. Enjoy exclusive deals, points, and offers on authentic HONOR products.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.honor.com/global/?host=honor.com",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.honor.com/"
    },
    "image": {
     "v": "/logos/honor.png",
     "fit": "contain",
     "src": "https://www.honor.com/etc/designs/honor-site/assets/favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intel",
   "name": "Intel",
   "summary": "Processors (CPUs) for PCs, servers and robot computers, and chip factories.",
   "body": "Deliver AI at scale across cloud, data center, edge, and client with comprehensive hardware and software solutions.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.intel.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.intel.com/"
    },
    "image": {
     "v": "/logos/intel.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.intel.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Santa Clara, United States",
       "lat": 37.233325,
       "lon": -121.684635,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kinco",
   "name": "Kinco",
   "summary": "Servo motors and drives, frameless torque motors, touch-screen control panels and controllers for robots and machines.",
   "body": "We’ve spent the last 50 years making dependable gloves at a great value. As a dedicated and passionate group, we strive not only to create products of quality and durability, but also to provide the best possible customer experience in the industry.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.kinco.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kinco.cn/"
    },
    "image": {
     "v": "/logos/kinco.png",
     "fit": "contain",
     "src": "https://www.kinco.cn/local_upload/20251015/1978282351758626816.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kunwei-sensing",
   "name": "Kunwei Sensing",
   "summary": "Force sensors for robots: six-axis force/torque sensors and joint torque sensors.",
   "body": "Headquartered in Changzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kunweitech.com/"
    },
    "image": {
     "v": "/logos/kunwei-sensing.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=kunweitech.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Changzhou",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Changzhou, China",
       "lat": 31.812262,
       "lon": 119.969154,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lg-innotek",
   "name": "LG Innotek",
   "summary": "Camera modules, 3D sensing modules, car electronics and chip package substrates.",
   "body": "LG Innotek is at the forefront of driving future technological advancements in the electronics, mobility, and robotics industries, working hand in hand with customers to realize their visions.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://kr.linkedin.com/company/lg-innotek",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lginnotek.com/"
    },
    "image": {
     "v": "/logos/lg-innotek.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.lginnotek.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://kr.linkedin.com/company/lg-innotek",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/lg-innotek",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building E1/E3, 30, Magokjungang 10-ro, Gangseo-gu, Seoul, 07796, South Korea",
       "lat": 37.563718,
       "lon": 126.83163,
       "src": "https://kr.linkedin.com/company/lg-innotek"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lx-robotics",
   "name": "LX Robotics",
   "summary": "The FlexHand V1 soft bionic hand, for AI, robotics and prosthetics.",
   "body": "LXRobotics helps mobile robotics teams bridge the gap between embedded firmware and robotics software.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://lxrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lxrobotics.com/"
    },
    "image": {
     "v": "/logos/lx-robotics.png",
     "fit": "contain",
     "src": "https://lxrobotics.com/images/lxrobotics-logo_hu_7b2ccfdc775dee00.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hong Kong, China",
       "lat": 22.349236,
       "lon": 114.185778,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neugart",
   "name": "Neugart",
   "summary": "Precision and economy planetary gearboxes, rack-and-pinion drives and custom gearboxes.",
   "body": "Neugart GmbH entwickelt, produziert und vertreibt Planetengetriebe sowie kundenspezifische Sondergetriebe für anspruchsvolle Anwendungen in der Antriebstechnik.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.neugart.com/de-de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.neugart.com/"
    },
    "image": {
     "v": "/logos/neugart.png",
     "fit": "contain",
     "src": "https://cdn.neugart.com/static/dist/assets/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kippenheim",
     "src": "https://de.linkedin.com/company/neugart-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/neugart-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Keltenstraße 16, Kippenheim, Baden-Württemberg 77971, Germany",
       "lat": 48.303171,
       "lon": 7.818118,
       "src": "https://de.linkedin.com/company/neugart-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nidec",
   "name": "Nidec",
   "summary": "Motors of almost every size, from small precision and brushless DC motors to very large industrial ones.",
   "body": "Headquartered in 京都市南区, Japan.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.nidec.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nidec.com/"
    },
    "image": {
     "v": "/logos/nidec.png",
     "fit": "contain",
     "src": "https://www.nidec.com/files/user/www-nidec-com/cmn/img/nidec.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "京都市南区",
     "src": "https://jp.linkedin.com/company/nidec-corporation-global",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/nidec-corporation-global",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "久世殿城町338, 京都市南区, 京都府 6018205, Japan",
       "lat": 34.955252,
       "lon": 135.715319,
       "src": "https://jp.linkedin.com/company/nidec-corporation-global"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ningbo-tuopu-group",
   "name": "Ningbo Tuopu Group",
   "summary": "Car parts (shock absorbers, chassis, interior, thermal and air-suspension systems) and robot actuators.",
   "body": "Headquartered in Ningbo, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.tuopu.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tuopu.com/"
    },
    "image": {
     "v": "/logos/ningbo-tuopu-group.png",
     "fit": "contain",
     "src": "https://www.tuopu.com/upload/cropped-LOGO-192x192-ppLE.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ningbo",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ningbo, China",
       "lat": 29.87196,
       "lon": 121.549964,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nsk",
   "name": "NSK",
   "summary": "Rolling and super-precision bearings, ball screws and linear guides, plus steering and transmission parts for cars.",
   "body": "Global leader in Motion & Control. NSK keeps the world moving with bearings, ball screws, linear guides, auto parts, and precision machinery solutions.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.nsk.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nsk.com/"
    },
    "image": {
     "v": "/logos/nsk.png",
     "fit": "contain",
     "src": "https://www.nsk.com/content/experience-fragments/nsk/gl/en/site/header/master/_jcr_content/root/container_750167515/image.coreimg.svg/1720688568609/header-logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nxp-semiconductors",
   "name": "NXP Semiconductors",
   "summary": "Microcontrollers, application and communication processors, connectivity, analog, radio and security chips, and sensors, mainly for cars and industry.",
   "body": "We anticipate tomorrow’s needs—navigating a changing world by bringing together technology's brightest minds to build game-changing solutions that propel us forward. NXP Semiconductors N.V.",
   "data": {
    "roles": {
     "v": [
      "Compute",
      "Supplier"
     ],
     "src": "https://www.nxp.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nxp.com/"
    },
    "image": {
     "v": "/logos/nxp-semiconductors.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.nxp.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Eindhoven",
     "src": "https://nl.linkedin.com/company/nxp-semiconductors",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/nxp-semiconductors",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "High Tech Campus 60, Eindhoven, Noord-Brabant 5656 AG, Netherlands",
       "lat": 51.408888,
       "lon": 5.460391,
       "src": "https://nl.linkedin.com/company/nxp-semiconductors"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "onerobotics",
   "name": "OneRobotics",
   "summary": "The onero H1 home humanoid, SwitchBot smart-home robots and the Acemate tennis robot.",
   "body": "FANUC robot programming techniques, tips and tools from 18+ years on the shop floor — the Robot Whispering book, free tools, CRX plugin development, and a weekly newsletter.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.onerobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.onerobotics.com/"
    },
    "image": {
     "v": "/logos/onerobotics.png",
     "fit": "contain",
     "src": "https://www.onerobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "qss-ai-robotics",
   "name": "QSS AI & Robotics",
   "summary": "Saudi-made humanoid robots, drones and AI software.",
   "body": "Headquartered in Riyadh, Saudi Arabia.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://qss.sa/"
    },
    "city": {
     "v": "Riyadh",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Saudi Arabia",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Riyadh, Saudi Arabia",
       "lat": 24.638916,
       "lon": 46.71601,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rls",
   "name": "RLS",
   "summary": "Magnetic rotary and linear encoders (position sensors), torque sensors and magnetic sensor chips.",
   "body": "We design, produce and supply advanced rotary and linear motion sensors to meet growing global market demands. Our experience and knowledge combined with innovative ideas enable us to offer custom product solutions to match customer's needs.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.rls.si/eng",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rls.si/"
    },
    "image": {
     "v": "/logos/rls.png",
     "fit": "contain",
     "src": "https://www.rls.si/images/rls-logo-1.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Komenda",
     "src": "https://si.linkedin.com/company/rls-encoders",
     "asof": "2026-11"
    },
    "country": {
     "v": "Slovenia",
     "src": "https://si.linkedin.com/company/rls-encoders",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Poslovna cona Žeje pri Komendi, Pod vrbami 2, Komenda, SI-1218, Slovenia",
       "lat": 46.188074,
       "lon": 14.518786,
       "src": "https://si.linkedin.com/company/rls-encoders"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roborn",
   "name": "Roborn",
   "summary": "Remote-controlled 5G humanoid robots (ME Series), plus service robots for schools, buildings and health care.",
   "body": "Hong Kong tech company specializing in AI Robotics, Video Analytics and Sensors. Roborn uses motion control system as its core technology, together with 5G, AI, IoT and Cloud to drive and develop comprehensive robotics products and solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://hk.linkedin.com/company/roborn",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roborn.com/"
    },
    "image": {
     "v": "/logos/roborn.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=roborn.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/roborn",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/roborn",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Units 811 and 812, 8/F, Core F, Cyberport 3, 100 Cyberport Road, Hong Kong, Hong Kong",
       "lat": 22.259675,
       "lon": 114.132624,
       "src": "https://hk.linkedin.com/company/roborn"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rockchip",
   "name": "Rockchip",
   "summary": "Processor chips (SoCs) for robots, tablets, cameras and smart devices.",
   "body": "Rockchip(603893.SH), fabless semiconductor company in China, founded in Y2001. Rockchip is headquartered in Fuzhou with branches and subsidiaries in Shenzhen, Shanghai, Beijing, Hangzhou and Hong Kong.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.rock-chips.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rock-chips.com/"
    },
    "image": {
     "v": "/logos/rockchip.png",
     "fit": "contain",
     "src": "https://www.rock-chips.com/templets/new_2014_9/images//logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Fuzhou",
     "src": "https://cn.linkedin.com/company/rockchip",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/rockchip",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No.18 Building, No.89, Software Boulevard, TongPan Rd, Fuzhou, Fujian 350003, China",
       "lat": 26.077495,
       "lon": 119.291821,
       "src": "https://cn.linkedin.com/company/rockchip"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rollvis",
   "name": "Rollvis",
   "summary": "Planetary, inverted, recirculating and differential roller screws.",
   "body": "After its founding in 1970, ROLLVIS SA soon began to focus on the manufacture and marketing of satellite roller screws under the trademark « Rollvis swiss ».",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://rollvis.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rollvis.com/"
    },
    "image": {
     "v": "/logos/rollvis.png",
     "fit": "contain",
     "src": "https://rollvis.com/wp-content/uploads/2024/02/cropped-2024-02-01-07_54_48-LogoRollvis-1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Plan-les-Ouates, Geneva",
     "src": "https://ch.linkedin.com/company/rollvis",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/rollvis",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chemin du Pont-du-Centenaire 136, Plan-les-Ouates, Geneva, 1228, Switzerland",
       "lat": 46.167164,
       "lon": 6.110157,
       "src": "https://ch.linkedin.com/company/rollvis"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shuanghuan-driveline",
   "name": "Shuanghuan Driveline",
   "summary": "Gears and gear parts for cars, trucks, trains and machines; RV reducers for robot joints through its subsidiary Fine Motion.",
   "body": "Headquartered in Hangzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sh-gear.com/"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hangzhou, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "simplexity-robotics",
   "name": "Simplexity Robotics",
   "summary": "The i7 Pro, a full-size robot with two arms on a wheeled base, a humanoid arm that senses force and SimpleClaw robot software.",
   "body": "Headquartered in Hangzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://simplexity-robotics.com/"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hangzhou, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "skf",
   "name": "SKF",
   "summary": "Bearings, seals, lubrication systems and condition monitoring.",
   "body": "We fight friction to move the world forward. 20% of all energy consumed is spent overcoming friction. At SKF, we’re constantly fighting that friction, to reduce energy waste and make the most of the resources we have.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://se.linkedin.com/company/skf",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.skf.com/"
    },
    "image": {
     "v": "/logos/skf.png",
     "fit": "contain",
     "src": "https://www.skf.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Göteborg",
     "src": "https://se.linkedin.com/company/skf",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://se.linkedin.com/company/skf",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sven Wingquist Gata 2, Göteborg, Sweden SE-415 50, Sweden",
       "lat": 59.338275,
       "lon": 18.071893,
       "src": "https://se.linkedin.com/company/skf"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stmicroelectronics",
   "name": "STMicroelectronics",
   "summary": "Microcontrollers, MEMS motion sensors, optical sensors and power chips.",
   "body": "ST is a global semiconductor leader delivering intelligent and energy-efficient products and solutions that power the electronics at the heart of everyday life.",
   "data": {
    "roles": {
     "v": [
      "Compute",
      "Supplier"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.st.com/"
    },
    "image": {
     "v": "/logos/stmicroelectronics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.st.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Geneva",
     "src": "https://ch.linkedin.com/company/stmicroelectronics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/stmicroelectronics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "39, Chemin du Champ des Filles, Geneva, Switzerland CH 1228 Plan-Les-Ouates, Switzerland",
       "lat": 46.168091,
       "lon": 6.104902,
       "src": "https://ch.linkedin.com/company/stmicroelectronics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tdk",
   "name": "TDK",
   "summary": "Electronic components, sensors, batteries and magnets, including neodymium magnets and ceramic capacitors.",
   "body": "Welcome to TDK corporate website. TDK is the world’s leading electronic components and devices company that has the high magnetics technology. We contribute to develop the world culture and industry through high-level creativity.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tdk.com/"
    },
    "image": {
     "v": "/logos/tdk.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.tdk.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "raspberry-pi",
   "name": "Raspberry Pi",
   "summary": "Raspberry Pi single-board computers, compute modules and the chips on them.",
   "body": "Whatever your application and whatever your scale, Raspberry Pi offers cost‑effective, high‑performance computing for businesses and the home. Designed and manufactured in the UK.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://raspberrypi.com/"
    },
    "image": {
     "v": "/logos/raspberry-pi.png",
     "fit": "contain",
     "src": "https://raspberrypi.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://uk.linkedin.com/company/raspberrypi",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/raspberrypi",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Maurice Wilkes Building, St. John's Innovation Park, Cambridge, CB4 0DS, United Kingdom",
       "lat": 52.232099,
       "lon": 0.145782,
       "src": "https://uk.linkedin.com/company/raspberrypi"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "beingbeyond",
   "name": "BeingBeyond",
   "summary": "Founded in May 2025, BeingBeyond specializes in the research, development and application of embodied foundation models.",
   "body": "It is the first domestic company to propose pretraining on large-scale egocentric videos, as well as the pioneering Chinese AI startup to launch —— Latent World-Action Models.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://beingbeyond.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://beingbeyond.com/"
    },
    "image": {
     "v": "/logos/beingbeyond.png",
     "fit": "contain",
     "src": "https://beingbeyond.com/zhizaiwujie/2025/12/25/b2qsnMkBcN4sW.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://cn.linkedin.com/company/beingbeyond",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/beingbeyond",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://cn.linkedin.com/company/beingbeyond"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "perceptron-ai",
   "name": "Perceptron AI",
   "summary": "We build frontier multimodal models and solutions, adapted to your domain, data, and hardware.",
   "body": "Perceptron builds physical AI models that help machines perceive, reason & act. Explore visual intelligence for robotics, infrastructure, & more.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.perceptron.inc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.perceptron.inc/"
    },
    "city": {
     "v": "Bellevue",
     "src": "https://www.linkedin.com/company/perceptron-ai-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/perceptron-ai-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bellevue, Washington, United States",
       "lat": 47.614422,
       "lon": -122.192337,
       "src": "https://www.linkedin.com/company/perceptron-ai-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "genrobot",
   "name": "GenRobot",
   "summary": "GenRobot's core team brings together top talent from leading autonomous driving companies.",
   "body": "The team has successfully led more than 50 L2+ to L4 autonomous driving mass-production projects, deployed across more than 20 mainstream vehicle models, and repeatedly set industry-leading technical benchmarks.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://www.genrobot.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.genrobot.ai/"
    },
    "image": {
     "v": "/logos/genrobot.png",
     "fit": "contain",
     "src": "https://www.genrobot.ai/images/logo_white.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://cn.genrobot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.genrobot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building C, Zhongguancun Intelligent Manufacturing Avenue, No. 45 Chengfu Road, Haidian District, Beijing, China",
       "lat": 39.991838,
       "lon": 116.340494,
       "src": "https://cn.genrobot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yaak",
   "name": "Yaak",
   "summary": "Yaak's Spatial Intelligence ransforms physical assets like pallet jacks, forklifts, street sweepers, wheel loaders, cars, busses and trucks into a fleet of autonomous workers",
   "body": "Headquartered in Berlin, Germany.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://www.yaak.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.yaak.ai/"
    },
    "image": {
     "v": "/logos/yaak.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/tuRRZPyVnxBHr5Pr9KQ3xR0.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://de.linkedin.com/company/yaak-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/yaak-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Berlin, Germany",
       "lat": 52.517389,
       "lon": 13.395131,
       "src": "https://de.linkedin.com/company/yaak-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "io-intelligence",
   "name": "IO Intelligence",
   "summary": "IO empowers physical AI providing the data and infrastructure for training and deploying robotics and embodied AI",
   "body": "IO-AI provides real-world robotics and embodied AI data solutions. Scalable, high-quality, and customizable training data for cutting-edge physical AI.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://io-ai.tech/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://io-ai.tech/"
    },
    "image": {
     "v": "/logos/io-intelligence.png",
     "fit": "contain",
     "src": "https://io-ai.tech/apple-icon.png?apple-icon.3vo2yrszusw19.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://cn.linkedin.com/company/io-ai-tech",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/io-ai-tech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5th Floor, Building C1, China Merchants Wisdom Park, No. 459 Qiaokai Road, Fenghuang Subdistrict, Guangming District, Shenzhen, China",
       "lat": 22.751687,
       "lon": 113.930006,
       "src": "https://cn.linkedin.com/company/io-ai-tech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "anvil-robotics",
   "name": "Anvil Robotics",
   "summary": "Train OpenARM and OpenYAM robots on day 1 with ready-to-run devkits.",
   "body": "Anvil Robotics is building a hardware and software platform for Physical AI",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://anvil.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://anvil.bot/"
    },
    "image": {
     "v": "/logos/anvil-robotics.png",
     "fit": "contain",
     "src": "https://anvil.bot/logo/apple-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/anvil-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/anvil-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3240 Hillview Ave, Palo Alto, California 94304, United States",
       "lat": 37.408,
       "lon": -122.146169,
       "src": "https://www.linkedin.com/company/anvil-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bagel-labs",
   "name": "Bagel Labs",
   "summary": "Bagel Labs develops world-action models for robot control.",
   "body": "Our physical AI research brings together compact model architecture and efficient training to accelerate progress across model generations. WorldDiT, our compact architecture for robot learning and control, jointly models future world observations and robot actions.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.bagel.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bagel.com/"
    },
    "image": {
     "v": "/logos/bagel-labs.png",
     "fit": "contain",
     "src": "https://www.bagel.com/favicon.svg?v=20260530",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/bageldotcom",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bageldotcom",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/bageldotcom"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eidon-ai",
   "name": "Eidon AI",
   "summary": "Decentralised Network for next-gen Multimodal - Embodied AI with real-world data Hiring for multiple position in Austin and the Bay area: https://apply.workable.com/eidon-ai/",
   "body": "Eidon AI, 2024 to 2026, archived. The open source release: tracking hardware, a simulation environment, and 1,579 hours of egocentric manipulation data.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.eidon.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.eidon.ai/"
    },
    "image": {
     "v": "/logos/eidon-ai.png",
     "fit": "contain",
     "src": "https://www.eidon.ai/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.linkedin.com/company/eidon-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/eidon-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "600 Congress Ave, Austin, Texas 78701, United States",
       "lat": 30.268425,
       "lon": -97.743156,
       "src": "https://www.linkedin.com/company/eidon-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "config",
   "name": "Config",
   "summary": "We build the data infrastructure and technology that enables general-purpose robotic bimanual manipulation.",
   "body": "Config builds the data infrastructure and technology that enable general-purpose bimanual robotics.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://config.inc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://config.inc/"
    },
    "image": {
     "v": "/logos/config.png",
     "fit": "contain",
     "src": "https://config.inc/favicon.ico?favicon.0bfrw977efpzb.ico?dpl=dpl_F33jYmC2DjhF7J9GnmP4ZQFjKd3m",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/config-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/config-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Jose, California, United States",
       "lat": 37.336166,
       "lon": -121.890591,
       "src": "https://www.linkedin.com/company/config-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xense-robotics",
   "name": "Xense Robotics",
   "summary": "Xense Robotics builds a complete haptic perception technology ecosystem based on its core technologies, supported by high-precision sensing, intelligent algorithms, and simulation verification, to…",
   "body": "Xense Robotics builds a complete haptic perception technology ecosystem based on its core technologies, supported by high-precision sensing, intelligent algorithms, and simulation verification, to empower the robotics and intelligent manufacturing industries.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://xenserobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://xenserobotics.com/"
    },
    "image": {
     "v": "/logos/xense-robotics.png",
     "fit": "contain",
     "src": "https://xenserobotics.com/static/index/en/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "上海",
     "src": "https://cn.linkedin.com/company/xense-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/xense-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "闵行区, 上海, China",
       "lat": 31.114767,
       "lon": 121.376943,
       "src": "https://cn.linkedin.com/company/xense-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dexmal",
   "name": "Dexmal",
   "summary": "Embodied-AI company founded in 2025 by a team from Megvii, building general-purpose robot intelligence.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://www.linkedin.com/company/dexmal",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dexmal.com/"
    },
    "image": {
     "v": "/logos/dexmal.png",
     "fit": "contain",
     "src": "https://www.dexmal.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.dexmal.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.dexmal.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Jinyu Intelligent Manufacturing Factory N3, Xisanqi Street, Haidian District, Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.dexmal.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "airoa",
   "name": "AIRoA",
   "summary": "AIRoA is a global and open initiative that integrates AI and robotics to develop foundation models and data ecosystems that enable robots to understand and interact with the real world.",
   "body": "Our mission is to develop and promote open platforms and datasets for robotic foundation models, creating a shared infrastructure that empowers the next generation of intelligent and autonomous systems.",
   "data": {
    "roles": {
     "v": [
      "Research lab",
      "Model lab"
     ],
     "src": "https://airoa.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://airoa.org/"
    },
    "image": {
     "v": "/logos/airoa.png",
     "fit": "contain",
     "src": "https://airoa.org/wp-content/themes/airoa/assets/img/common/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://airoa.org/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://airoa.org/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo Ryutsu Center Building A, 6-1-1 Heiwajima, Ota-ku, Tokyo 143-0006, Japan",
       "lat": 35.582867,
       "lon": 139.746029,
       "src": "https://airoa.org/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "blue-ocean-robotics",
   "name": "Blue Ocean Robotics",
   "summary": "Blue Ocean Robotics develops, produces and sells professional service robots primarily in pharma, hospitality, construction and agriculture.",
   "body": "We develop, produce and sell professional service robots in various industries such as pharmaceutical, hospitality, and other global markets.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.blue-ocean-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.blue-ocean-robotics.com/"
    },
    "image": {
     "v": "/logos/blue-ocean-robotics.png",
     "fit": "contain",
     "src": "https://www.blue-ocean-robotics.com/hubfs/UVD%20Robots%20white_Logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Odense",
     "src": "https://dk.linkedin.com/company/blue-ocean-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/blue-ocean-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Svendborgvej 226, Odense, Syddanmark 5260, Denmark",
       "lat": 55.346803,
       "lon": 10.416844,
       "src": "https://dk.linkedin.com/company/blue-ocean-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotnik",
   "name": "Robotnik",
   "summary": "Robotnik is a company with an extensive and innovative experience, specialized in mobile service robotics.",
   "body": "Our main specialities are: - Mobile robot platform development and manufacturing. - Mobile service robotics R&D and engineering projects.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robotnik.eu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotnik.eu/"
    },
    "image": {
     "v": "/logos/robotnik.png",
     "fit": "contain",
     "src": "https://robotnik.eu/wp-content/uploads/2020/05/cropped-robotnik-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Valencia",
     "src": "https://es.linkedin.com/company/robotnik-automation",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://es.linkedin.com/company/robotnik-automation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ronda Auguste y Louis Lumière, 8  Parque Tecnológico, Valencia, Paterna-Valencia 46980, Spain",
       "lat": 39.54921,
       "lon": -0.46261,
       "src": "https://es.linkedin.com/company/robotnik-automation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "safelog",
   "name": "SAFELOG",
   "summary": "Since 1996, we have been passionately working on the development and intelligent linking of innovative logistics systems.",
   "body": "Starting with our first patent for a pick-by-light solution, which we have been continuously developing for over 25 years now, we have established ourselves on the market with various products in the field of intralogistics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.safelog.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.safelog.de/"
    },
    "image": {
     "v": "/logos/safelog.png",
     "fit": "contain",
     "src": "https://www.safelog.de/wp-content/uploads/2023/08/cropped-SAFELOG_Icon_512x512-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Markt Schwaben",
     "src": "https://de.linkedin.com/company/safelog-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/safelog-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Henleinstr. 4, Markt Schwaben, Bavaria 85570, Germany",
       "lat": 48.193459,
       "lon": 11.852148,
       "src": "https://de.linkedin.com/company/safelog-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ek-automation",
   "name": "E&K Automation",
   "summary": "Evolf vermogensadvies is een onafhankelijke beleggingsonderneming die in september 2014 is opgericht.",
   "body": "Wij zijn een beleggingsonderneming die vermogende en ondernemende families begeleidt. Om vermogen te beschermen, overzicht te behouden, bestuurbaarheid en continuïteit te borgen en ook om netwerken en contacten te delen.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://ek-robotics.com/de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ek-robotics.com/"
    },
    "image": {
     "v": "/logos/ek-automation.png",
     "fit": "contain",
     "src": "https://ek-robotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Eindhoven",
     "src": "https://nl.linkedin.com/company/e",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/e",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Eindhoven, Noord-Brabant, Netherlands",
       "lat": 51.439265,
       "lon": 5.478633,
       "src": "https://nl.linkedin.com/company/e"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bluebotics",
   "name": "BlueBotics",
   "summary": "At BlueBotics we help companies meet the challenge of vehicle automation.",
   "body": "We provide the ANT navigation technology and expert support they need to bring their AGV, automated forklift or mobile robot successfully to market. A ZAPI GROUP COMPANY.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://bluebotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bluebotics.com/"
    },
    "image": {
     "v": "/logos/bluebotics.png",
     "fit": "contain",
     "src": "https://bluebotics.com/hubfs/BlueBotics_June2025/images/cropped-Fav-Icon-B-BlueBotics-Blue-Web.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "St-Sulpice",
     "src": "https://ch.linkedin.com/company/bluebotics-sa",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/bluebotics-sa",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Jordils 41B, St-Sulpice, VD CH-1025, Switzerland",
       "lat": 46.512279,
       "lon": 6.551763,
       "src": "https://ch.linkedin.com/company/bluebotics-sa"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "scallog",
   "name": "Scallog",
   "summary": "What if your warehouse operators never had to take an unnecessary step again?",
   "body": "For 10 years, logistics has been undergoing its 4.0 revolution—and SCALLOG has emerged as a key pioneer driving this transformation. Our mission? Transform your warehouse operations by combining the very best in software and hardware technology.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.scallog.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.scallog.com/"
    },
    "image": {
     "v": "/logos/scallog.png",
     "fit": "contain",
     "src": "https://www.scallog.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nanterre",
     "src": "https://fr.linkedin.com/company/scallog",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/scallog",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "15, Rue du Port, Nanterre, Île-de-France 92000, France",
       "lat": 48.894329,
       "lon": 2.176527,
       "src": "https://fr.linkedin.com/company/scallog"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "german-bionic",
   "name": "German Bionic",
   "summary": "German Bionic is a European Physical AI pioneer that develops and manufactures AI-powered exosuits and other wearable technologies.",
   "body": "It was the world’s first company to deliver connected exoskeletons for the workplace, applying self-learning and augmented artificial intelligence to support lifting movements and prevent poor posture, and thereby becoming an intelligent link between humans and machines.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.germanbionic.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.germanbionic.com/"
    },
    "image": {
     "v": "/logos/german-bionic.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/8OeQDK2nlzzl6NrRFsD13bDddgs.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Augsburg",
     "src": "https://de.linkedin.com/company/germanbionic",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/germanbionic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kirchbergstraße 23, Augsburg, Bavaria 86157, Germany",
       "lat": 48.366629,
       "lon": 10.872966,
       "src": "https://de.linkedin.com/company/germanbionic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "piap-space",
   "name": "PIAP Space",
   "summary": "Polish robotics company spun off from the Łukasiewicz PIAP institute, building space robotics.",
   "body": "A spin-off of the Łukasiewicz Research Network Industrial Institute for Automation and Measurements (Ł-PIAP), established in 2017.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://piap.space/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://piap.space/"
    },
    "image": {
     "v": "/logos/piap-space.png",
     "fit": "contain",
     "src": "https://piap.space/wp-content/themes/piap/dist/images/header_logo_fce508cc.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Warszawa",
     "src": "https://pl.linkedin.com/company/piapspace",
     "asof": "2026-11"
    },
    "country": {
     "v": "Poland",
     "src": "https://pl.linkedin.com/company/piapspace",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Aleje Jerozolimskie 202, Warszawa, Mazowieckie 02-486, Poland",
       "lat": 52.193511,
       "lon": 20.922392,
       "src": "https://pl.linkedin.com/company/piapspace"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboception",
   "name": "Roboception",
   "summary": "Roboception offers innovative vision solutions that enable robotic systems across all domains to reliably perceive and act in their environment.",
   "body": "Following the concept of \"Sense. Reason.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboception.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roboception.com/"
    },
    "image": {
     "v": "/logos/roboception.png",
     "fit": "contain",
     "src": "https://roboception.com/wp-content/uploads/2022/12/rc_logo_white.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "München",
     "src": "https://de.linkedin.com/company/roboception-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/roboception-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kaflerstr. 2, München, Bayern 81241, Germany",
       "lat": 48.149257,
       "lon": 11.460021,
       "src": "https://de.linkedin.com/company/roboception-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roeq",
   "name": "ROEQ",
   "summary": "Supplier of top modules, carts, lifters and racks for autonomous mobile robots.",
   "body": "ROLL IT! LIFT IT! ... Unleash the full potential of your AMRs ROEQ, Robotic Equipment, are a leading global supplier of mobile robotic equipment (MRE) developed for autonomous mobile robots (AMRs).",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roeq.dk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roeq.dk/"
    },
    "image": {
     "v": "/logos/roeq.png",
     "fit": "contain",
     "src": "https://roeq.dk/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Vissenbjerg",
     "src": "https://dk.linkedin.com/company/roeq",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/roeq",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kobbervænget 5, Vissenbjerg, South Denmark 5492, Denmark",
       "lat": 41.720889,
       "lon": -80.698352,
       "src": "https://dk.linkedin.com/company/roeq"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "idiap-research-institute",
   "name": "Idiap Research Institute",
   "summary": "A 9-day AI hackathon to transform your ideas into prototypes.",
   "body": "Organized by the Idiap Research Institute, and held in the heart of the Swiss Alps!",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://idiap.ch/en",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://idiap.ch/"
    },
    "image": {
     "v": "/logos/idiap-research-institute.png",
     "fit": "contain",
     "src": "https://idiap.ch/cms/api/media/file/FAVICON.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Martigny",
     "src": "https://ch.linkedin.com/company/icchallenge",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/icchallenge",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rue Marconi 19, Martigny, Valais 1920, Switzerland",
       "lat": 46.109333,
       "lon": 7.084484,
       "src": "https://ch.linkedin.com/company/icchallenge"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flyability",
   "name": "Flyability",
   "summary": "Flyability pioneered confined space inspection drones, creating new technology that allows inspectors to collect data remotely inside dangerous confined spaces instead of in person.",
   "body": "Revolutionize your confined space inspections with Flyability’s collision-tolerant drones. Improve safety, reduce downtime, and lower costs by up to 90%. Contact us today!",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.flyability.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.flyability.com/"
    },
    "image": {
     "v": "/logos/flyability.png",
     "fit": "contain",
     "src": "https://www.flyability.com/hubfs/Flyability_Dec2017/image/cropped-flyability_favicon-150x150.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lausanne",
     "src": "https://ch.linkedin.com/company/flyability",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/flyability",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Route du Lac 3, Lausanne, Vaud 1094, Switzerland",
       "lat": 46.521827,
       "lon": 6.632702,
       "src": "https://ch.linkedin.com/company/flyability"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flexion-robotics",
   "name": "Flexion Robotics",
   "summary": "We are building the autonomy stack for humanoid robots - from command to control, from manipulation to locomotion, across any hardware and task.",
   "body": "Leveraging the power of simulation and reinforcement learning, our software scales to the real world with minimal human involvement.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://flexion.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://flexion.ai/"
    },
    "image": {
     "v": "/logos/flexion-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/YoPkmaS6Pxjs4kfOa6ehz70MQII.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/flexion-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/flexion-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Affolternstrasse 42, Zurich, 8050, Switzerland",
       "lat": 47.411843,
       "lon": 8.541956,
       "src": "https://ch.linkedin.com/company/flexion-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vayu-robotics",
   "name": "Vayu Robotics",
   "summary": "Intelligence in Motion - We are building a scalable mobile robotics platform using cutting edge bio-inspired sensing, scalable machine learning and purposeful robotic design",
   "body": "Headquartered in Palo Alto, United States.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.linkedin.com/company/vayu-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vayurobotics.com/"
    },
    "image": {
     "v": "/logos/vayu-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=vayurobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/vayu-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/vayu-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "380 Portage Ave, Palo Alto, California 94306, United States",
       "lat": 37.422935,
       "lon": -122.138216,
       "src": "https://www.linkedin.com/company/vayu-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "jacobi-robotics",
   "name": "Jacobi Robotics",
   "summary": "Accelerating the adoption of robot automation",
   "body": "A software development platform for robot arms - develop robot arms 10x faster with friendly APIs and cutting-edge algorithms.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://jacobirobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://jacobirobotics.com/"
    },
    "image": {
     "v": "/logos/jacobi-robotics.png",
     "fit": "contain",
     "src": "https://jacobirobotics.com/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Emeryville",
     "src": "https://www.linkedin.com/company/jacobi-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/jacobi-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Emeryville, California, United States",
       "lat": 37.831409,
       "lon": -122.286527,
       "src": "https://www.linkedin.com/company/jacobi-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bifrost-ai",
   "name": "Bifrost AI",
   "summary": "Bifrost recreates the real world in simulation.",
   "body": "Our simulation infrastructure enable the world’s largest robotics companies to train and evaluate systems at the speed of software, from helping NASA explore Mars autonomously to automating dangerous industrial work.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.bifrost.ai:443/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bifrost.ai:443/"
    },
    "image": {
     "v": "/logos/bifrost-ai.png",
     "fit": "contain",
     "src": "https://www.bifrost.ai:443/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/bifrost-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bifrost-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/bifrost-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "labrador-systems",
   "name": "Labrador Systems",
   "summary": "We're excited to introduce the Labrador Retriever, a new type of personal robot that's designed to help people live more independently by providing practical, physical assistance with daily…",
   "body": "We're excited to introduce the Labrador Retriever, a new type of personal robot that's designed to help people live more independently by providing practical, physical assistance with daily activities in the home.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://labradorsystems.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://labradorsystems.com/"
    },
    "image": {
     "v": "/logos/labrador-systems.png",
     "fit": "contain",
     "src": "https://labradorsystems.com/wp-content/uploads/2021/12/cropped-Front-3-4-left_2-min-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Calabasas",
     "src": "https://www.linkedin.com/company/labradorsystems",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/labradorsystems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Calabasas, CA, United States",
       "lat": 34.144664,
       "lon": -118.644097,
       "src": "https://www.linkedin.com/company/labradorsystems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aeolus-robotics",
   "name": "Aeolus Robotics",
   "summary": "The Future is Now: For centuries people have dreamed about robotic assistants – that day has arrived.",
   "body": "Aeolus Robotics is a fast-growing robotics company deploying robotic services in a broad range of industries. Our advanced robotic capabilities are already commercialized for hospitals, hotels, and eldercare facilities.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.aeolusbot.com",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aeolusbot.com/"
    },
    "image": {
     "v": "/logos/aeolus-robotics.png",
     "fit": "contain",
     "src": "https://www.aeolusbot.com/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/aeolusrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aeolusrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "99 S Almaden Blvd, San Jose, California CA 951113, United States",
       "lat": 37.332516,
       "lon": -121.8943,
       "src": "https://www.linkedin.com/company/aeolusrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "electric-sheep-robotics",
   "name": "Electric Sheep Robotics",
   "summary": "Commercial electric and autonomous robotic lawn mowers for professional landscapers.",
   "body": "Headquartered in San Anselmo, United States.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://sheeprobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sheeprobotics.ai/"
    },
    "image": {
     "v": "/logos/electric-sheep-robotics.png",
     "fit": "contain",
     "src": "https://osorobotics.ai/wp-content/uploads/2025/10/oso-bear.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Anselmo",
     "src": "https://www.cbinsights.com/company/electric-sheep-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.cbinsights.com/company/electric-sheep-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Anselmo, CA, United States",
       "lat": 37.974432,
       "lon": -122.561503,
       "src": "https://www.cbinsights.com/company/electric-sheep-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bonsai-robotics",
   "name": "Bonsai Robotics",
   "summary": "Bonsai Robotics develops AI-first, vision-based autonomy that makes off-road equipment smarter, safer, and more productive.",
   "body": "Bonsai Intelligence is a connected platform that enables autonomous operations of mixed fleets anytime, anywhere.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://bonsairobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bonsairobotics.ai/"
    },
    "image": {
     "v": "/logos/bonsai-robotics.png",
     "fit": "contain",
     "src": "https://bonsairobotics.ai/assets/icons/android-chrome-512x512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/bonsai-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bonsai-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Jose, California, United States",
       "lat": 37.336166,
       "lon": -121.890591,
       "src": "https://www.linkedin.com/company/bonsai-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "civ-robotics",
   "name": "Civ Robotics",
   "summary": "Civ Robotics is ushering in the next generation of construction layout tools for solar, civil engineering, land surveying, road striping, and general contracting industries worldwide.",
   "body": "Civ Robotics’ cutting-edge, all-terrain surveying layout robots are engineered from the ground up to make your layouts more precise, easy, and cost-effective than ever before.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.civrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.civrobotics.com/"
    },
    "image": {
     "v": "/logos/civ-robotics.png",
     "fit": "contain",
     "src": "https://www.civrobotics.com/images/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/civrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/civrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "center, San Francisco, California 94107, United States",
       "lat": 37.781947,
       "lon": -122.418088,
       "src": "https://www.linkedin.com/company/civrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "okibo",
   "name": "Okibo",
   "summary": "Industrial physical AI with zero setup time.",
   "body": "Okibo robots model the space on the fly and paint, plaster and finish walls on live job sites, with no programming.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://okibo.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://okibo.com/"
    },
    "image": {
     "v": "/logos/okibo.png",
     "fit": "contain",
     "src": "https://okibo.com/wp-content/uploads/2022/01/cropped-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Petah Tikva",
     "src": "https://okibo.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://okibo.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "9 Granit St, Petah Tikva, Israel",
       "lat": 32.087764,
       "lon": 34.885998,
       "src": "https://okibo.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cobalt-ai",
   "name": "Cobalt AI",
   "summary": "Cobalt AI compares camera, access control, edge device and company policy data for real-time response to security threats, reducing unwanted alarm noise by up to 95%.",
   "body": "Headquartered in San Francisco, United States.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.cobaltrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cobaltai.com/"
    },
    "image": {
     "v": "/logos/cobalt-ai.png",
     "fit": "contain",
     "src": "https://www.cobaltai.com/wp-content/uploads/2024/04/cropped-favicon-InfinityMark-blue-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.cobaltai.com/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.cobaltai.com/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "526 2nd Street, San Francisco, CA 94107, United States",
       "lat": 37.782613,
       "lon": -122.39331,
       "src": "https://www.cobaltai.com/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "knightscope",
   "name": "Knightscope",
   "summary": "Knightscope (NASDAQ: KSCP) is a managed service provider building the nation's first Autonomous Security Force.",
   "body": "Knightscope integrates autonomous machines, AI-driven orchestration software, and licensed Augmented Security Agents into one accountable security operation designed to deter, detect, and respond to security threats in real time.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://knightscope.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://knightscope.com/"
    },
    "image": {
     "v": "/logos/knightscope.png",
     "fit": "contain",
     "src": "https://knightscope.com/hubfs/raw_assets/public/knightscope/assets/knightscope-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sunnyvale",
     "src": "https://www.linkedin.com/company/knightscope-inc-",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/knightscope-inc-",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "305 N Mathilda Ave, Sunnyvale, California 94085, United States",
       "lat": 37.385516,
       "lon": -122.0314,
       "src": "https://www.linkedin.com/company/knightscope-inc-"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avidbots",
   "name": "Avidbots",
   "summary": "Our vision is to expand humanity’s potential through robotics and automation.",
   "body": "We design and build autonomous cleaning technology that empowers organizations and their workers to become more productive and efficient versions of themselves.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://avidbots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://avidbots.com/"
    },
    "image": {
     "v": "/logos/avidbots.png",
     "fit": "contain",
     "src": "https://avidbots.com/_resources/themes/main/images/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kitchener",
     "src": "https://ca.linkedin.com/company/avidbots-corp",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/avidbots-corp",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "975 Bleams Road, Kitchener, Ontario N2R 1K5, Canada",
       "lat": 43.403564,
       "lon": -80.486451,
       "src": "https://ca.linkedin.com/company/avidbots-corp"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "starship-technologies",
   "name": "Starship Technologies",
   "summary": "Starship Technologies is the undisputed leader #1 in autonomous robot delivery.",
   "body": "For 12 years, we've been proving that physical AI works at scale: 3,000+ robots operating in 300+ locations across 8 countries, completing thousands of deliveries a day and surpassing 10 million autonomous deliveries — a first for any robot delivery company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.starship.xyz/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.starship.xyz/"
    },
    "image": {
     "v": "/logos/starship-technologies.png",
     "fit": "contain",
     "src": "https://www.starship.xyz/wp-content/uploads/2024/11/cropped-Starship_app_icon_ios_1024-1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tallinn",
     "src": "https://ee.linkedin.com/company/starshiptechnologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Estonia",
     "src": "https://ee.linkedin.com/company/starshiptechnologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Teaduspargi 8, Tallinn, 12618, Estonia",
       "lat": 59.400037,
       "lon": 24.656531,
       "src": "https://ee.linkedin.com/company/starshiptechnologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "coco-robotics",
   "name": "Coco Robotics",
   "summary": "Coco Robotics is the world's largest urban robot delivery platform.",
   "body": "Founded in 2020, Coco has completed over 500,000 zero-emission deliveries, serving customers in the US and Europe. Coco's mission is to create a more sustainable, reliable, and affordable last-mile logistics solution in cities around the world.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.cocodelivery.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cocodelivery.com/"
    },
    "image": {
     "v": "/logos/coco-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/2JasMSXSb6P2bV29nccn4CS0VfM.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Monica",
     "src": "https://www.linkedin.com/company/cocodelivery",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/cocodelivery",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Santa Monica, CA, United States",
       "lat": 34.01947,
       "lon": -118.491227,
       "src": "https://www.linkedin.com/company/cocodelivery"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cartken",
   "name": "Cartken",
   "summary": "Cartken is an AI-powered robotics company automating material flow across complex industrial sites with autonomous robots that operate seamlessly indoors and outdoors.",
   "body": "Our robots enable building-to-building transport, eliminating manual handoffs and reducing non-value-added movement in manufacturing, warehousing, and logistics environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://cartken.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cartken.com/"
    },
    "image": {
     "v": "/logos/cartken.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/63cee399b1ef775ba444e177/6419e6ae5539db262e231c7d_Cartken%20Webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Oakland",
     "src": "https://www.linkedin.com/company/gocartken",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/gocartken",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Oakland, CA, United States",
       "lat": 37.804456,
       "lon": -122.271356,
       "src": "https://www.linkedin.com/company/gocartken"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "relay-robotics",
   "name": "Relay Robotics",
   "summary": "Founded in 2013, Relay Robotics supplies sophisticated service robots—backed by 10 U.S.",
   "body": "Headquartered in San Jose, United States.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://relayrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://relayrobotics.com/"
    },
    "city": {
     "v": "San Jose",
     "src": "https://relayrobotics.com/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://relayrobotics.com/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "568 Charcot Ave, San Jose, CA 95131, United States",
       "lat": 37.38445,
       "lon": -121.911843,
       "src": "https://relayrobotics.com/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "brightpick",
   "name": "Brightpick",
   "summary": "Brightpick is a leader in AI-powered robotic solutions for warehouses.",
   "body": "Brightpick offers multi-purpose AI robots for warehouses to easily automate every step of their order fulfillment.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://brightpick.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://brightpick.ai/"
    },
    "image": {
     "v": "/logos/brightpick.png",
     "fit": "contain",
     "src": "https://brightpick.ai/wp-content/themes/brightpick/assets/img/favicon/android-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.linkedin.com/company/brightpick",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/brightpick",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8801 Wall St, Austin, Texas 78754, United States",
       "lat": 30.340657,
       "lon": -97.670556,
       "src": "https://www.linkedin.com/company/brightpick"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xyz-robotics",
   "name": "XYZ Robotics",
   "summary": "XYZ Robotics' mission is to accelerate the advent of autonomous robotic perception and manipulation.",
   "body": "The company develops mobile manipulation robots (MMR). These MMRs pioneer automation in truck loading, unloading, and case picking.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://de.linkedin.com/company/xyz-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://xyzrobotics.ai/"
    },
    "city": {
     "v": "Neuss",
     "src": "https://de.linkedin.com/company/xyz-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/xyz-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Jagenbergstraße 15A, Neuss, North Rhine-Westphalia 41468, Germany",
       "lat": 51.16594,
       "lon": 6.760152,
       "src": "https://de.linkedin.com/company/xyz-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "photoneo",
   "name": "Photoneo",
   "summary": "Photoneo, now part of Zebra Technologies, is a leading provider of industrial 3D vision, AI-powered automation solutions & robotic intelligence software.",
   "body": "Since the foundation in 2013 the company’s mission was to give vision and intelligence to robots all over the world so they can see and understand with a clear goal - to automate monotonous and risky tasks by employing vision-guided robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.photoneo.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.photoneo.com/"
    },
    "city": {
     "v": "Bratislava",
     "src": "https://sk.linkedin.com/company/photoneo",
     "asof": "2026-11"
    },
    "country": {
     "v": "Slovakia",
     "src": "https://sk.linkedin.com/company/photoneo",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Plynarenska 6, Bratislava, 821 09, Slovakia",
       "lat": 48.143304,
       "lon": 17.140881,
       "src": "https://sk.linkedin.com/company/photoneo"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dexai-robotics",
   "name": "Dexai Robotics",
   "summary": "Dexai Robotics aims to revolutionize the food industry by improving the lives of kitchen staff everywhere, enabling them to focus on what matters: creating amazing culinary experiences for customers.",
   "body": "Dexai’s collaborative robot, Alfred offers an affordable, fast, and accurate kitchen addition to autonomously prepare delicious recipes.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.linkedin.com/company/dexai-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dexai.com/"
    },
    "city": {
     "v": "Greater Boston Area",
     "src": "https://www.linkedin.com/company/dexai-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/dexai-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "444 Somerville Ave, Greater Boston Area, Massachusetts 02143, United States",
       "lat": 42.358253,
       "lon": -71.096627,
       "src": "https://www.linkedin.com/company/dexai-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "badger-technologies",
   "name": "Badger Technologies",
   "summary": "Autonomous retail robots that scan store shelves for stock, pricing and safety issues.",
   "body": "Shelves go out of stock. Prices fall out of compliance. Safety hazards go undetected. And store teams are stretched too thin to catch it all before it hits the bottom line. Badger fixes that.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.badger-technologies.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.badger-technologies.com/"
    },
    "image": {
     "v": "/logos/badger-technologies.png",
     "fit": "contain",
     "src": "https://www.badger-technologies.com/.resources/jabil-main/themes/badger-technologies-2019/src/img/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nicholasville",
     "src": "https://www.linkedin.com/company/badgersolutions",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/badgersolutions",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "350 E Brannon Rd, Nicholasville, Kentucky 40356, United States",
       "lat": 37.957015,
       "lon": -84.539273,
       "src": "https://www.linkedin.com/company/badgersolutions"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "monumental",
   "name": "Monumental",
   "summary": "Automating on-site construction with robotics and software.",
   "body": "Monumental builds autonomous robots that lay bricks on real construction sites today.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.monumental.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.monumental.co/"
    },
    "image": {
     "v": "/logos/monumental.png",
     "fit": "contain",
     "src": "https://www.monumental.co/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Amsterdam",
     "src": "https://nl.linkedin.com/company/monumentalco",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/monumentalco",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Amsterdam, Netherlands",
       "lat": 52.37308,
       "lon": 4.892453,
       "src": "https://nl.linkedin.com/company/monumentalco"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fieldwork-robotics",
   "name": "Fieldwork Robotics",
   "summary": "We develop soft, adaptive and modular harvesting robotic platforms able to operate in non-controllable environments, such as agriculture fields, alongside people on non-repetitive tasks",
   "body": "Reducing harvesting costs; Picking better quality fruit Augmenting labour to boost harvests for the £2.6bn raspberry market OUR MISSION Fieldwork Robotics is on",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://fieldworkrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://fieldworkrobotics.com/"
    },
    "image": {
     "v": "/logos/fieldwork-robotics.png",
     "fit": "contain",
     "src": "https://fieldworkrobotics.com/wp-content/uploads/favicon-1-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://uk.linkedin.com/company/fwr-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/fwr-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "347 Cherry Hinton Road, Cambridge, Cambridgeshire CB1 8DH, United Kingdom",
       "lat": 52.187666,
       "lon": 0.155765,
       "src": "https://uk.linkedin.com/company/fwr-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ocado-technology",
   "name": "Ocado Technology",
   "summary": "We’re Ocado Group - a global, technology business redefining ecommerce, fulfilment and logistics in online grocery and distribution industries.",
   "body": "Our cutting-edge, proprietary technology spanning AI, Robotics, Data Science, Cloud and more, enables our partners and customers to win in their markets, develop a competitive advantage and offer an unparalleled customer proposition.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.ocadogroup.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ocadogroup.com/"
    },
    "image": {
     "v": "/logos/ocado-technology.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/667974bf1bf45146cf81ef19/6a2aa581385ee9c88e3312e9_Ocado-Group-new-logo-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hatfield",
     "src": "https://uk.linkedin.com/company/ocadogroup",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/ocadogroup",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building 1 & 2, Trident Place, Hatfield, Hertfordshire AL10 9UL, United Kingdom",
       "lat": 51.768079,
       "lon": -0.237147,
       "src": "https://uk.linkedin.com/company/ocadogroup"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robominds",
   "name": "Robominds",
   "summary": "Smart Robotics – for everyone.",
   "body": "We are passionate about robotics innovations that will move you forward. ‘Making robots smart’ is our vision, mission and everyday business – at the best possible level. We don’t ask “Does it work?” but “How does it work?”.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.robominds.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robominds.de/"
    },
    "image": {
     "v": "/logos/robominds.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/63d95f379c76123e0888ad52/63d95f379c7612e13f88ad15_fav-256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/robominds-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/robominds-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Wilhelmine-Reichard Straße 7, Munich, Bavaria 80935, Germany",
       "lat": 48.190483,
       "lon": 11.547897,
       "src": "https://de.linkedin.com/company/robominds-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "unchained-robotics",
   "name": "Unchained Robotics",
   "summary": "Unchained Robotics hat es sich zur Aufgabe gemacht, die Automatisierung auf allen Ebenen zu vereinfachen.",
   "body": "Mit der Unchained-Plattform können Fabriken problemlos Roboter und Komponenten von Dutzenden führender Marken durchsuchen und vergleichen.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://unchainedrobotics.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://unchainedrobotics.de/"
    },
    "image": {
     "v": "/logos/unchained-robotics.png",
     "fit": "contain",
     "src": "https://unchainedrobotics.de/cdn-cgi/image/width=384,quality=80/assets/img/logo-black.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paderborn",
     "src": "https://de.linkedin.com/company/unchained-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/unchained-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pamplonastraße 44, Paderborn, North Rhine-Westphalia 33106, Germany",
       "lat": 51.694387,
       "lon": 8.716069,
       "src": "https://de.linkedin.com/company/unchained-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inbolt",
   "name": "Inbolt",
   "summary": "Inbolt is on a mission to make vision-guided robotics the norm, not the exception, on the shop floor.",
   "body": "Automation is no longer optional in manufacturing, but traditional solutions are costly due to the need for rigid infrastructure like jigs, indexing systems, and stop-and-go lines. Inbolt is changing that.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.inbolt.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.inbolt.com/"
    },
    "image": {
     "v": "/logos/inbolt.png",
     "fit": "contain",
     "src": "https://www.inbolt.com/wp-content/uploads/inbolt-favicon-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Detroit",
     "src": "https://www.linkedin.com/company/inbolt",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/inbolt",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2050 15th St, Detroit, Michigan 48216, United States",
       "lat": 42.328272,
       "lon": -83.075534,
       "src": "https://www.linkedin.com/company/inbolt"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fizyr",
   "name": "Fizyr",
   "summary": "Deep-learning vision software for robotic picking, depalletizing and trailer unloading.",
   "body": "Our deep learning algorithms give robots the ability to see, understand, and act in real time — handling unknown objects of any shape, size, color, or material with up to 99% accuracy.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.fizyr.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fizyr.com/"
    },
    "image": {
     "v": "/logos/fizyr.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/689b3dab8b9c5a86271992a9/68af03d6e55738f6a74f9704_webclip%20fiz.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Delft",
     "src": "https://nl.linkedin.com/company/fizyr",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/fizyr",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Molengraaffsingel 10, Delft, South Holland 2629 JD, Netherlands",
       "lat": 51.993145,
       "lon": 4.385823,
       "src": "https://nl.linkedin.com/company/fizyr"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "akara-robotics",
   "name": "Akara Robotics",
   "summary": "Akara helps hospitals reclaim valuable operating room time lost to preventable inefficiencies, enabling them to perform more surgeries, improve patient access, and increase revenue.",
   "body": "Akara develops AI and robotics technology to help hospitals free up valuable time in their ORs and other high-value treatment areas. We automate the operational tasks that slow hospitals down, so care teams can spend that time with their patients.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.akara.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.akara.ai/"
    },
    "image": {
     "v": "/logos/akara-robotics.png",
     "fit": "contain",
     "src": "https://www.akara.ai/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dublin",
     "src": "https://ie.linkedin.com/company/akara-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Ireland",
     "src": "https://ie.linkedin.com/company/akara-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "The Digital Court, Dublin, Ireland",
       "lat": 53.349379,
       "lon": -6.260559,
       "src": "https://ie.linkedin.com/company/akara-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotecai",
   "name": "Robotec.ai",
   "summary": "Robotec.ai is a deep-tech company and global leader in robotics simulation, digital twins, and Physical AI.",
   "body": "Our mission is to accelerate the development, validation, and deployment of autonomous systems and Physical AI through high-fidelity, open simulation platforms",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.robotec.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robotec.ai/"
    },
    "image": {
     "v": "/logos/robotecai.png",
     "fit": "contain",
     "src": "https://www.robotec.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Warsaw",
     "src": "https://pl.linkedin.com/company/robotec-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Poland",
     "src": "https://pl.linkedin.com/company/robotec-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Prosta 51, 00-838 Warsaw, Warsaw, Masovian Voivodeship 00-838, Poland",
       "lat": 52.231958,
       "lon": 21.006725,
       "src": "https://pl.linkedin.com/company/robotec-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "husarion",
   "name": "Husarion",
   "summary": "Husarion offers mobile robotic development platforms, software assets and connectivity solutions that allow users to build autonomous systems based on ROS & ROS 2 easily and efficiently.",
   "body": "For over a decade, the Husarion team of engineers and developers has been delivering world-class robotics products and services to university, research and commercial clients.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://husarion.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://husarion.com/"
    },
    "image": {
     "v": "/logos/husarion.png",
     "fit": "contain",
     "src": "https://husarion.com/img/husarion-logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kraków",
     "src": "https://pl.linkedin.com/company/husarion",
     "asof": "2026-11"
    },
    "country": {
     "v": "Poland",
     "src": "https://pl.linkedin.com/company/husarion",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "ul. Prądnicka, Kraków, Małopolska 31-202, Poland",
       "lat": 50.061947,
       "lon": 19.936856,
       "src": "https://pl.linkedin.com/company/husarion"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nordbo-robotics",
   "name": "Nordbo Robotics",
   "summary": "Nordbo Robotics builds standardized robotic cells for surface processing in industrial production.",
   "body": "Our primary focus is automated deburring and grinding of aluminum cast parts for foundries and automotive Tier-2/Tier-3 suppliers, delivered as repeatable, productized robotic cells.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://www.nordbo-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nordbo-robotics.com/"
    },
    "image": {
     "v": "/logos/nordbo-robotics.png",
     "fit": "contain",
     "src": "https://nordbo-221e3.kxcdn.com/web/image/website/6/favicon?unique=4a8f236",
     "asof": "2026-11"
    },
    "city": {
     "v": "Odense",
     "src": "https://dk.linkedin.com/company/nordbo-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/nordbo-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Noatunvej 2, Odense, 5000, Denmark",
       "lat": 55.42153,
       "lon": 10.380479,
       "src": "https://dk.linkedin.com/company/nordbo-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ekso-bionics",
   "name": "Ekso Bionics",
   "summary": "Ekso Bionics' mission is to improve health and quality of life with advanced robotics designed to enhance, amplify and restore human function.",
   "body": "Ekso Bionics is headquartered in San Rafael, California International Offices: Ekso Bionics Europe GmbH An der Pönt 47 40885 Ratingen +49 (0) 2102-305 7390",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://eksobionics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://eksobionics.com/"
    },
    "image": {
     "v": "/logos/ekso-bionics.png",
     "fit": "contain",
     "src": "https://eksobionics.com/icons/icon-512x512.png?v=aa305f02b7db129e1b4ce8564f936e40",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Rafael",
     "src": "https://www.linkedin.com/company/eksobionics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/eksobionics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "101 Glacier Pt, San Rafael, California 94901, United States",
       "lat": 37.950138,
       "lon": -122.490019,
       "src": "https://www.linkedin.com/company/eksobionics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "verve-motion",
   "name": "Verve Motion",
   "summary": "Wearable robotics for hardworking humans: Verve Motion's SafeLift exosuit is a lightweight, one-size fits most wearable robotic backpack, that powers and protects workers doing the heavy lifting, by…",
   "body": "Verve Motion's SafeLift™ exosuit is a wearable robot helps prevent injuries for workers engaged in repetitive lifting to support a safe and productive workforce.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://vervemotion.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vervemotion.com/"
    },
    "image": {
     "v": "/logos/verve-motion.png",
     "fit": "contain",
     "src": "https://vervemotion.com/wp-content/uploads/2025/02/Pasted-Graphic-24.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.linkedin.com/company/verve-motion",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/verve-motion",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "9 Camp Street, Cambridge, MA 02140, United States",
       "lat": 42.398616,
       "lon": -71.130228,
       "src": "https://www.linkedin.com/company/verve-motion"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dephy",
   "name": "Dephy",
   "summary": "Dephy is a bionic footwear and apparel company pioneering the world’s first powered ankle wearable device with our flagship product - the Dephy Sidekick.",
   "body": "The Sidekick combines a decade of bionics expertise with a human-first design to deliver natural, adaptive support that empowers people to walk farther and faster with less discomfort and fatigue.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://dephy.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dephy.com/"
    },
    "image": {
     "v": "/logos/dephy.png",
     "fit": "contain",
     "src": "https://dephy.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boxborough",
     "src": "https://www.linkedin.com/company/dephy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/dephy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "80 Central St., Boxborough, MA 01719, United States",
       "lat": 42.498049,
       "lon": -71.476783,
       "src": "https://www.linkedin.com/company/dephy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roam-robotics",
   "name": "Roam Robotics",
   "summary": "Roam Robotics builds wearable robotics that enhance human strength, endurance, and resilience in the world’s toughest environments.",
   "body": "Our lightweight system is designed to reduce injury, extend performance, and unlock superhuman capability for defense, industrial, and mission-critical applications. We’re redefining what the human body can do—starting with those who push it the furthest.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.roamrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.roamrobotics.com/"
    },
    "image": {
     "v": "/logos/roam-robotics.png",
     "fit": "contain",
     "src": "https://www.roamrobotics.com/img/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/roamrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/roamrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "650 Alabama St, San Francisco, California 94110, United States",
       "lat": 37.76082,
       "lon": -122.412204,
       "src": "https://www.linkedin.com/company/roamrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eprosima",
   "name": "eProsima",
   "summary": "The Middleware Experts eProsima provides insight to develop your distributed systems recommending you the right DDS middleware products and supporting you in all the stages of the development.",
   "body": "Specialized on high performance middleware, robotics, and AI",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.eprosima.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.eprosima.com/"
    },
    "image": {
     "v": "/logos/eprosima.png",
     "fit": "contain",
     "src": "https://www.eprosima.com/images/logos/eprosima/logo-eprosima-white.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tres Cantos",
     "src": "https://es.linkedin.com/company/eprosima",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://es.linkedin.com/company/eprosima",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Plaza de la Encina, Tres Cantos, Comunidad de Madrid 28760, Spain",
       "lat": 40.595308,
       "lon": -3.708287,
       "src": "https://es.linkedin.com/company/eprosima"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rti",
   "name": "RTI",
   "summary": "Maker of RTI Connext, a real-time data streaming framework used in robotics and physical AI systems.",
   "body": "Working as one. RTI Connext® is the Real-Time Data Streaming Platform for Physical AI. RTI Connext software is the critical nervous system for over 2,000 designs across Aerospace and Defense, MedTech, Automotive, and Robotics.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.rti.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rti.com/"
    },
    "image": {
     "v": "/logos/rti.png",
     "fit": "contain",
     "src": "https://www.rti.com/hubfs/Master%20Graphics%20Folder/Logos/RTI/RTI-Logo-rev.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sunnyvale",
     "src": "https://www.linkedin.com/company/rti",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/rti",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "232 E Java Drive, Sunnyvale, CA 94089, United States",
       "lat": 37.410455,
       "lon": -122.016139,
       "src": "https://www.linkedin.com/company/rti"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "apexai",
   "name": "Apex.AI",
   "summary": "Apex.AI is an international software company specializing in the development of safety-certified, developer-friendly, and scalable software for mobility systems, aiming to accelerate the transition…",
   "body": "Apex.AI is an international software company specializing in the development of safety-certified, developer-friendly, and scalable software for mobility systems, aiming to accelerate the transition to software-defined vehicles and mobility.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.apex.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.apex.ai/"
    },
    "image": {
     "v": "/logos/apexai.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/984e93_d2b4383ea6c54377816a7e38e7a751b9%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/984e93_d2b4383ea6c54377816a7e38e7a751b9%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/apex-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/apex-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "844 E Charleston Rd, Palo Alto, California 94303, United States",
       "lat": 37.421638,
       "lon": -122.103332,
       "src": "https://www.linkedin.com/company/apex-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ekumen",
   "name": "Ekumen",
   "summary": "Ekumen is an international engineering company — part of Grid Dynamics (Nasdaq: GDYN), a premier AI transformation partner for the Fortune 1000 — with a team distributed in Latin America and Europe.",
   "body": "We provide remote engineering teams tailored to the needs of each project.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://ekumenlabs.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ekumenlabs.com/"
    },
    "image": {
     "v": "/logos/ekumen.png",
     "fit": "contain",
     "src": "https://ekumenlabs.com/images/logo.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Buenos Aires",
     "src": "https://ar.linkedin.com/company/ekumenlabs",
     "asof": "2026-11"
    },
    "country": {
     "v": "Argentina",
     "src": "https://ar.linkedin.com/company/ekumenlabs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Honduras 5550, Buenos Aires, C1414BMX, Argentina",
       "lat": -34.584568,
       "lon": -58.435988,
       "src": "https://ar.linkedin.com/company/ekumenlabs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "freedom-robotics",
   "name": "Freedom Robotics",
   "summary": "Freedom Robotics is the leading provider of software infrastructure for modern robotics companies.",
   "body": "Based in San Francisco, California, Freedom Robotics creates mission critical software infrastructure to enable the next generation of robotics companies to build, operate, support and scale robots and robotic fleets.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.linkedin.com/company/freedomrobotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://freedomrobotics.ai/"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/freedomrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/freedomrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/freedomrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cogniteam",
   "name": "Cogniteam",
   "summary": "Cogniteam is a startup company in the field of Robotics and AIoT.",
   "body": "Our goal is to become a world leader in robotics and AIoT markets, in particular in products requiring high levels of autonomy and intelligence. We welcome opportunities to partner with others in these emerging markets.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.cogniteam.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cogniteam.com/"
    },
    "image": {
     "v": "/logos/cogniteam.png",
     "fit": "contain",
     "src": "https://www.cogniteam.com/wp-content/uploads/2024/08/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Petach Tiqva",
     "src": "https://il.linkedin.com/company/cogniteam",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/cogniteam",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hasivim 18, Oren building, Petach Tiqva, Israel, Israel",
       "lat": 32.102118,
       "lon": 34.849982,
       "src": "https://il.linkedin.com/company/cogniteam"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "segmentsai",
   "name": "Segments.ai",
   "summary": "Segments.ai's mission is to drive the cost of image labeling to zero.",
   "body": "We help you to drastically reduce human effort involved in labeling massive datasets. Our cloud platform & API covers efficient labeling interfaces, automated proposals, active learning with uncertainty prediction and data distillation.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.segments.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.segments.ai/"
    },
    "image": {
     "v": "/logos/segmentsai.png",
     "fit": "contain",
     "src": "https://segments.ai/wp-content/uploads/2023/03/logo_background.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Leuven",
     "src": "https://be.linkedin.com/company/segmentsai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Belgium",
     "src": "https://be.linkedin.com/company/segmentsai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Leuven, Belgium",
       "lat": 50.879202,
       "lon": 4.701168,
       "src": "https://be.linkedin.com/company/segmentsai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kognic",
   "name": "Kognic",
   "summary": "Kognic provides the most productive annotation platform for autonomy data.",
   "body": "We help customers integrate scalable, cost-efficient human feedback into their data pipelines — so they can train and validate autonomous systems that are safe, reliable, and aligned with human expectations.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.kognic.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kognic.com/"
    },
    "image": {
     "v": "/logos/kognic.png",
     "fit": "contain",
     "src": "https://www.kognic.com/hubfs/kognic-icon-black.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gothenburg",
     "src": "https://se.linkedin.com/company/kognic",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://se.linkedin.com/company/kognic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lindholmspiren 7, Gothenburg, Vastra Gotaland County 417 56, Sweden",
       "lat": 57.7064,
       "lon": 11.941018,
       "src": "https://se.linkedin.com/company/kognic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "parallel-domain",
   "name": "Parallel Domain",
   "summary": "We are on a mission to bridge the gap between simulation and the real world, ensuring autonomous systems perform flawlessly when it counts most.",
   "body": "As the trusted first line of defense for innovators in autonomous driving, drone delivery, eVTOL, robotics, and beyond, we empower industry leaders to rigorously test and validate their systems at scale.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://paralleldomain.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://paralleldomain.com/"
    },
    "image": {
     "v": "/logos/parallel-domain.png",
     "fit": "contain",
     "src": "https://paralleldomain.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/parallel-domain",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/parallel-domain",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "44 Montgomery St, San Francisco, California 94104, United States",
       "lat": 37.789631,
       "lon": -122.401888,
       "src": "https://www.linkedin.com/company/parallel-domain"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboflow",
   "name": "Roboflow",
   "summary": "Roboflow creates software-as-a-service products to make building with computer vision easy.",
   "body": "Over 1,000,000 developers use Roboflow to manage image data, annotate and label datasets, apply preprocessing and augmentations, convert annotation file formats, train a computer vision model in one-click, and deploy models via API or to the edge. https://roboflow.com",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboflow.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roboflow.com/"
    },
    "image": {
     "v": "/logos/roboflow.png",
     "fit": "contain",
     "src": "https://roboflow.com/apple-icon.png?apple-icon.44hzu8-ttqbmn.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Remote",
     "src": "https://www.linkedin.com/company/roboflow-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/roboflow-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Remote, United States",
       "lat": 43.005946,
       "lon": -123.892591,
       "src": "https://www.linkedin.com/company/roboflow-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "micro1",
   "name": "Micro1",
   "summary": "Data lab building real-world RL environments and expert human data to train models and agents.",
   "body": "We're building the infrastructure for advancing intelligence through expert human data, real-world training environments, and contextual evaluations.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.micro1.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.micro1.ai/"
    },
    "image": {
     "v": "/logos/micro1.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1249/6a04bd23eb9d40f76dac1ebd_favicon%20(1).png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco Bay Area",
     "src": "https://www.linkedin.com/company/micro1",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/micro1",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco Bay Area, CA, United States",
       "lat": 37.788497,
       "lon": -122.355847,
       "src": "https://www.linkedin.com/company/micro1"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "objectways",
   "name": "Objectways",
   "summary": "Objectways is an AI data solutions company trusted by Fortune 500 enterprises and high-growth AI teams worldwide.",
   "body": "We've delivered over millions of labeled data points across data annotation, data collection, content moderation, and generative AI development.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://objectways.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://objectways.com/"
    },
    "image": {
     "v": "/logos/objectways.png",
     "fit": "contain",
     "src": "https://objectways.com/wp-content/uploads/2025/06/cropped-fav-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Scottsdale",
     "src": "https://www.linkedin.com/company/objectways",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/objectways",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "20715 N Pima Rd, Scottsdale, Arizona 85255, United States",
       "lat": 33.673968,
       "lon": -111.88802,
       "src": "https://www.linkedin.com/company/objectways"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "silicon-valley-robotics",
   "name": "Silicon Valley Robotics",
   "summary": "Silicon Valley Robotics (SVR) supports the innovation and commercialization of robotics technologies.",
   "body": "We create the ecosystem for robotics in the SF Bay Area, bringing together thought leaders, startups, investors, and professionals across the fields of robotics and physical AI.",
   "data": {
    "roles": {
     "v": [
      "Media"
     ],
     "src": "https://www.svrobo.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.svrobo.org/"
    },
    "image": {
     "v": "/logos/silicon-valley-robotics.png",
     "fit": "contain",
     "src": "https://www.svrobo.org/wp-content/uploads/2026/05/intel-2026-logo-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://www.linkedin.com/company/siliconvalleyrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/siliconvalleyrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "599 Fairchild Dr, Mountain View, California 94043, United States",
       "lat": 37.402982,
       "lon": -122.049933,
       "src": "https://www.linkedin.com/company/siliconvalleyrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "massrobotics",
   "name": "MassRobotics",
   "summary": "MassRobotics is the largest independent robotics hub dedicated to accelerating robotics innovation, commercialization and adoption.",
   "body": "MassRobotics is the largest independent robotics hub dedicated to accelerating innovation and adoption in the field of robotics.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.massrobotics.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.massrobotics.org/"
    },
    "image": {
     "v": "/logos/massrobotics.png",
     "fit": "contain",
     "src": "https://www.massrobotics.org/wp-content/uploads/2022/05/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/massrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/massrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "12 Channel Street, Boston, MA 02210, United States",
       "lat": 42.345492,
       "lon": -71.036844,
       "src": "https://www.linkedin.com/company/massrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "haptx",
   "name": "HaptX",
   "summary": "Founded in 2012 by Jake Rubin and Dr.",
   "body": "Robert Crockett, HaptX builds technology that simulates touch with unprecedented realism. HaptX Gloves enable natural interaction and realistic haptic feedback in virtual reality and robotics for the first time.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.linkedin.com/company/haptx",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://haptx.com/"
    },
    "image": {
     "v": "/logos/haptx.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=haptx.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Luis Obispo",
     "src": "https://www.linkedin.com/company/haptx",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/haptx",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2701 McMillan Ave, San Luis Obispo, California 93401, United States",
       "lat": 35.264897,
       "lon": -120.648204,
       "src": "https://www.linkedin.com/company/haptx"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "senseglove",
   "name": "SenseGlove",
   "summary": "SenseGlove develops force and haptic feedback gloves that enable professionals to feel virtual objects and interact with them more efficiently for VR training and research purposes.",
   "body": "Since 2018, the gloves have been applied by over 500 companies: Volkswagen, European Space Agency, the University of Cambridge, Procter and Gamble, etc.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://senseglove.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://senseglove.com/"
    },
    "image": {
     "v": "/logos/senseglove.png",
     "fit": "contain",
     "src": "https://senseglove.com/wp-content/uploads/2020/04/Senseglove-favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rotterdam",
     "src": "https://nl.linkedin.com/company/senseglove",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/senseglove",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Keilestraat 9c, Rotterdam, South Holland 3029 BP, Netherlands",
       "lat": 51.924442,
       "lon": 4.47775,
       "src": "https://nl.linkedin.com/company/senseglove"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "manus",
   "name": "Manus",
   "summary": "MANUS helps machines understand human hands.",
   "body": "For more than 12 years, we've been building the technology that turns human hand movement into high-fidelity data. Trusted by 2000+ research labs and tech companies worldwide, MANUS is the market leader in high-precision hand tracking.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.manus-meta.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.manus-meta.com/"
    },
    "image": {
     "v": "/logos/manus.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6617b472be5db819f4dbdf45/6aac00311fec1615fa716205_Social-Profile-Picture.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Eindhoven",
     "src": "https://nl.linkedin.com/company/manusmeta",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/manusmeta",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Eindhoven, North Brabant, Netherlands",
       "lat": 51.439265,
       "lon": 5.478633,
       "src": "https://nl.linkedin.com/company/manusmeta"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rokoko",
   "name": "Rokoko",
   "summary": "Rokoko builds motion capture technology for robotics and 3D.",
   "body": "Our hardware and software capture human movement - from precise finger articulation to full-body motion and absolute positioning - and make that data accessible in real time.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.rokoko.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rokoko.com/"
    },
    "image": {
     "v": "/logos/rokoko.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/637b526fcdac988127315abf_256x256_rokoko_logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Copenhagen",
     "src": "https://dk.linkedin.com/company/rokoko",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/rokoko",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sankt Gertruds Stræde 10, Copenhagen, Capital Region of Denmark 1129, Denmark",
       "lat": 55.683381,
       "lon": 12.574326,
       "src": "https://dk.linkedin.com/company/rokoko"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "movella",
   "name": "Movella",
   "summary": "MOVELLA is een organisatie die sporten en bewegen in de maatschappij stimuleert voor jong en oud.",
   "body": "Je beleeft het meeste plezier aan je sport als je deze goed beheerst. Bij veel verenigingen ontbreekt de capaciteit om alle kinderen de sport goed onder de knie te laten krijgen.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.xsens.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.xsens.com/"
    },
    "image": {
     "v": "/logos/movella.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.xsens.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Henderson",
     "src": "https://www.sec.gov/Archives/edgar/data/1839132/000162828025003174/movellaform15.htm",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.sec.gov/Archives/edgar/data/1839132/000162828025003174/movellaform15.htm",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3535 Executive Terminal Drive, Suite 110, Henderson, NV 89052, United States",
       "lat": 36.030139,
       "lon": -114.981549,
       "src": "https://www.sec.gov/Archives/edgar/data/1839132/000162828025003174/movellaform15.htm"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "haply-robotics",
   "name": "Haply Robotics",
   "summary": "At Haply Robotics, we strive to build amazing things.",
   "body": "We are a team devoted to the vision of a future where the lines are blurred between the physical and virtual world. We are a group of people that live to create new technologies with a lasting impact.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.haply.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.haply.co/"
    },
    "image": {
     "v": "/logos/haply-robotics.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/67ae1b06a3d57f0118cec557/e7f2cf08-b3c7-4d36-9b05-7a215621be16/logo.webp?format=1500w",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montreal",
     "src": "https://ca.linkedin.com/company/haplyrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/haplyrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4316 Boulevard Saint-Laurent, Montreal, Quebec H2W 1Z3, Canada",
       "lat": 45.51871,
       "lon": -73.583866,
       "src": "https://ca.linkedin.com/company/haplyrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zimmer-group",
   "name": "Zimmer Group",
   "summary": "ZIMMER Group is based in Rheinau – Freistett, Germany and is a family-owned and operated company.",
   "body": "Success through innovation: Your partner for customized automation, components & systems for future-oriented solutions. Find out more!",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.zimmer-group.com/en-us/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zimmer-group.com/"
    },
    "image": {
     "v": "/logos/zimmer-group.png",
     "fit": "contain",
     "src": "https://www.zimmer-group.com/img/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rheinau",
     "src": "https://de.linkedin.com/company/zimmer-group",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/zimmer-group",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Am Glockenloch 2, Rheinau, Baden-Württemberg 77866, Germany",
       "lat": 48.674041,
       "lon": 7.927643,
       "src": "https://de.linkedin.com/company/zimmer-group"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "piab",
   "name": "Piab",
   "summary": "Piab is evolving automation through progressive gripping, lifting, and moving solutions and has done so since 1951.",
   "body": "We believe in an automated world where no resources are wasted, and no humans are injured. With annual sales of ~2 billion SEK, 1000 employees, and a global presence in more than 100 countries, we help our customers improve their operations for the better on a daily basis.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.piab.com/en-us",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.piab.com/"
    },
    "image": {
     "v": "/logos/piab.png",
     "fit": "contain",
     "src": "https://www.piab.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Danderyd",
     "src": "https://se.linkedin.com/company/piab",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://se.linkedin.com/company/piab",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "P.O. Box 146, 182 12 Danderyd, Danderyd, Stockholm 18232, Sweden",
       "lat": 59.404365,
       "lon": 18.03585,
       "src": "https://se.linkedin.com/company/piab"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "schmalz",
   "name": "Schmalz",
   "summary": "Since 1910, Schmalz has been characterized by its values: respectful, inspiring, pioneering.",
   "body": "Values that shape the actions at Schmalz - day after day and for the benefit of customers and business partners around the world. The Schmalz Group unites more than 1,800 employees at 31 locations around the world.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.schmalz.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.schmalz.com/"
    },
    "image": {
     "v": "/logos/schmalz.png",
     "fit": "contain",
     "src": "https://www.schmalz.com/_static/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Glatten",
     "src": "https://de.linkedin.com/company/schmalz",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/schmalz",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Johannes-Schmalz-Str. 1, Glatten, Baden-Württemberg 72293, Germany",
       "lat": 48.450075,
       "lon": 8.499213,
       "src": "https://de.linkedin.com/company/schmalz"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "weiss-robotics",
   "name": "Weiss Robotics",
   "summary": "WEISS ROBOTICS is an innovative, family-owned company based in Ludwigsburg, Germany, specialising in the development and manufacture of smart servo-electric grippers for demanding automation tasks.",
   "body": "Our solutions are used in electronics manufacturing, assembly automation, the pharmaceutical industry, life sciences and intralogistics. Our grippers combine high precision and sensitive handling with flexibly controllable gripping force.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://weiss-robotics.com/en/company/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://weiss-robotics.com/"
    },
    "image": {
     "v": "/logos/weiss-robotics.png",
     "fit": "contain",
     "src": "https://weiss-robotics.com/files/favicon/favicon-192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ludwigsburg",
     "src": "https://de.linkedin.com/company/weiss-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/weiss-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Karl-Heinrich-Käferle-Straße 8, Ludwigsburg, Baden-Württemberg 71640, Germany",
       "lat": 48.891045,
       "lon": 9.233024,
       "src": "https://de.linkedin.com/company/weiss-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bota-systems",
   "name": "Bota Systems",
   "summary": "Bota Systems is a Swiss-based technology company specializing in high-precision force-torque sensing and force control solutions for robotics and automation.",
   "body": "The company designs and manufactures compact, robust, and accurate multi-axis sensors, along with intelligent software tools that enable intuitive integration and real-time force control for a wide range of robotic platforms.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://botasys.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botasys.com/"
    },
    "image": {
     "v": "/logos/bota-systems.png",
     "fit": "contain",
     "src": "https://botasys.com/wp-content/uploads/2025/11/Bota_LogoSquare_Black_centered-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/bota-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/bota-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hagenholzstrasse 85, Zurich, 8050, Switzerland",
       "lat": 47.414796,
       "lon": 8.560039,
       "src": "https://ch.linkedin.com/company/bota-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotous",
   "name": "Robotous",
   "summary": "ROBOTUS is a leading developer and manufacturer of capacitive 6-axis force torque sensors with over a decade of dedicated R&D in precision sensing technologies.",
   "body": "Our sensors are trusted by major robotics companies and automation solution providers worldwide delivering the highest level of quality, stability, and performance in the industry.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://robotous.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotous.com/"
    },
    "image": {
     "v": "/logos/robotous.png",
     "fit": "contain",
     "src": "https://robotous.com/user/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "성남시",
     "src": "https://kr.linkedin.com/company/robotous",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/robotous",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "성남시, 경기도, South Korea",
       "lat": 37.420156,
       "lon": 127.126209,
       "src": "https://kr.linkedin.com/company/robotous"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "portescap",
   "name": "Portescap",
   "summary": "Portescap, a proud member of Regal Rexnord, excels in addressing critical motion challenges with premium miniature electronic motors and components.",
   "body": "Headquartered in West Chester, United States.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.linkedin.com/company/portescap",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.portescap.com/"
    },
    "city": {
     "v": "West Chester",
     "src": "https://www.linkedin.com/company/portescap",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/portescap",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "110 Westtown Road, West Chester, PA 19382, United States",
       "lat": 39.964503,
       "lon": -75.591231,
       "src": "https://www.linkedin.com/company/portescap"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "allient",
   "name": "Allient",
   "summary": "A global company specializing in precision and customized products, Allient serves both end users and original equipment manufacturers (OEMs) across various industries, including Aerospace & Defense…",
   "body": "A global company specializing in precision and customized products, Allient serves both end users and original equipment manufacturers (OEMs) across various industries, including Aerospace & Defense, Medical, Agriculture, Industrial, Vehicles, Electronics, and more.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://allient.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://allient.com/"
    },
    "image": {
     "v": "/logos/allient.png",
     "fit": "contain",
     "src": "https://allient.com/wp-content/uploads/2024/01/Allient-Logo.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Amherst",
     "src": "https://www.linkedin.com/company/allient-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/allient-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "495 Commerce Drive, Suite 3, Amherst, New York 14228, United States",
       "lat": 42.978392,
       "lon": -78.799762,
       "src": "https://www.linkedin.com/company/allient-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "moog",
   "name": "Moog",
   "summary": "We work on some of the world’s most exciting technical projects, creating products that challenge the limits of what’s possible, from cutting-edge medical technology to space vehicles.",
   "body": "Our formula includes one simple, surprising low-tech element that makes us stand out from everyone else: Trust. We trust each other to work hard and do the right thing. We give people credit for their ideas. We take pride in sticking with a problem until it’s solved.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.moog.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.moog.com/"
    },
    "image": {
     "v": "/logos/moog.png",
     "fit": "contain",
     "src": "https://www.moog.com/content/dam/sites/moog/images/logos/Moog_logo_white_1450.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "East Aurora",
     "src": "https://www.linkedin.com/company/moog",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/moog",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "400 Jamison Rd., East Aurora, NY 14052, United States",
       "lat": 42.803174,
       "lon": -78.646394,
       "src": "https://www.linkedin.com/company/moog"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "elmo-motion-control",
   "name": "Elmo Motion Control",
   "summary": "Elmo Motion Control is a global leading company of motion control intelligence solution.",
   "body": "Since 1988 the Company designs and manufactures ultra-advanced servo drives and network motion controllers that are small, smart and simple cutting-edge solutions for any need.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.elmomc.com",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.elmomc.com/"
    },
    "image": {
     "v": "/logos/elmo-motion-control.png",
     "fit": "contain",
     "src": "https://www.elmomc.com/wp-content/uploads/2026/11/elmo-logo-icon-200x200.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Petach-Tikva",
     "src": "https://il.linkedin.com/company/elmomotioncontrol",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/elmomotioncontrol",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "60 Amal St. P.O. Box 3078, Petach-Tikva, Israel 49516, Israel",
       "lat": 32.087764,
       "lon": 34.885998,
       "src": "https://il.linkedin.com/company/elmomotioncontrol"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "celera-motion",
   "name": "Celera Motion",
   "summary": "Novanta is a leading global supplier of core technology solutions that give medical, life science, and advanced industrial original equipment manufacturers a competitive advantage.",
   "body": "We combine deep proprietary expertise and competencies in precision medicine, precision manufacturing, robotics and automation, and advanced surgery with a proven ability to solve complex technical challenges.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://novanta.com/robotics-automation/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://novanta.com/"
    },
    "image": {
     "v": "/logos/celera-motion.png",
     "fit": "contain",
     "src": "https://novanta.com/wp-content/uploads/sites/19/2026/02/cropped-novanta-logo.png?quality=85&#038;strip=all&#038;w=192",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bedford",
     "src": "https://www.linkedin.com/company/novanta-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/novanta-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "125 Middlesex Turnpike,, Bedford, Massachusetts 01730, United States",
       "lat": 42.516436,
       "lon": -71.241799,
       "src": "https://www.linkedin.com/company/novanta-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "estun",
   "name": "Estun",
   "summary": "Estun Automation (listed in Shenzhen, code 002747) was established in 1993,from the first day of its founded, the company has taken the Integrity, focus, grow together as the foundation of the…",
   "body": "Headquartered in Nanjing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.estun.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.estun.com/"
    },
    "city": {
     "v": "Nanjing",
     "src": "https://cn.linkedin.com/company/estun",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/estun",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No. 1888, Jiyin Road, Jiangning Economic Development Zone, Nanjing, Nanjing, Jiangsu 211106, China",
       "lat": 32.088724,
       "lon": 118.791746,
       "src": "https://cn.linkedin.com/company/estun"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "moons-electric",
   "name": "Moons' Electric",
   "summary": "Motion control maker (stepper and servo motors, drives).",
   "body": "Headquartered in Shanghai, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.moonsindustries.com:443/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.moonsindustries.com:443/"
    },
    "image": {
     "v": "/logos/moons-electric.png",
     "fit": "contain",
     "src": "https://d2nlp3g45tnwoj.cloudfront.net/staticpic/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.moonsindustries.com/about-us/contact-us",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.moonsindustries.com/about-us/contact-us",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building 7, Lane 88, Minbei Road, Minhang District, Shanghai 201107, China",
       "lat": 31.219669,
       "lon": 121.284214,
       "src": "https://www.moonsindustries.com/about-us/contact-us"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "joyson-electronics",
   "name": "Joyson Electronics",
   "summary": "Joyson Electronics (00699.HK/ 600699.SH) is an intelligent automotive technology solution provider, offering advanced products and solutions across the auto electronics, auto safety, and humanoid…",
   "body": "Joyson Electronics (00699.HK/ 600699.SH) is an intelligent automotive technology solution provider, offering advanced products and solutions across the auto electronics, auto safety, and humanoid robotics.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.linkedin.com/company/joyson-electronics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://joyson.cn/"
    },
    "city": {
     "v": "Ningbo",
     "src": "https://www.wikidata.org/wiki/Q30716593",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q30716593",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ningbo, China",
       "lat": 29.87196,
       "lon": 121.549964,
       "src": "https://www.wikidata.org/wiki/Q30716593"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "renesas",
   "name": "Renesas",
   "summary": "Renesas is an embedded semiconductor solution provider driven by its Purpose “To Make Our Lives Easier.” As a leader in embedded processing, analog, mixed-signal and power solutions, we combine our…",
   "body": "Renesas is a global company providing high-performance semiconductors and embedded solutions enabling innovation in automotive, industrial, and connected technologies.",
   "data": {
    "roles": {
     "v": [
      "Compute",
      "Supplier"
     ],
     "src": "https://www.renesas.com/en",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.renesas.com/"
    },
    "image": {
     "v": "/logos/renesas.png",
     "fit": "contain",
     "src": "https://www.renesas.com/themes/kachow/src/components/common/images/renesas-logo-blue.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Koto-ku, Toyosu",
     "src": "https://jp.linkedin.com/company/renesas",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/renesas",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "TOYOSU FORESIA, 3-2-24, Koto-ku, Toyosu, Tokyo 135-0061, Japan",
       "lat": 35.652646,
       "lon": 139.799351,
       "src": "https://jp.linkedin.com/company/renesas"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "melexis",
   "name": "Melexis",
   "summary": "We sense and drive the world around us As a fabless semiconductor company, we engineer integrated sensor and driver solutions.",
   "body": "We specialize in providing cutting-edge technology that enables machines and devices to interact with their environment in a smarter, safer, and more sustainable way.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://be.linkedin.com/company/melexis",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://melexis.com/"
    },
    "image": {
     "v": "/logos/melexis.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=melexis.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ieper",
     "src": "https://be.linkedin.com/company/melexis",
     "asof": "2026-11"
    },
    "country": {
     "v": "Belgium",
     "src": "https://be.linkedin.com/company/melexis",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rozendaalstraat 12, Ieper, 8900, Belgium",
       "lat": 50.876578,
       "lon": 2.883761,
       "src": "https://be.linkedin.com/company/melexis"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "jl-mag",
   "name": "JL MAG",
   "summary": "High-performance NdFeB permanent magnets, magnet parts and motor rotors for humanoid robots.",
   "body": "Headquartered in Ganzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://jlmag.com.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://jlmag.com.cn/"
    },
    "image": {
     "v": "/logos/jl-mag.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=jlmag.com.cn&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ganzhou",
     "src": "https://www.jlmag.com.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.jlmag.com.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "江西省赣州市经济技术开发区金岭西路81号 (81 Jinling West Road, Ganzhou Economic and Technological Development Zone), Ganzhou, Jiangxi, China",
       "lat": 25.853168,
       "lon": 114.834866,
       "src": "https://www.jlmag.com.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "black-sesame-technologies",
   "name": "Black Sesame Technologies",
   "summary": "Maker of intelligent automotive computing chips.",
   "body": "Headquartered in Wuhan, China.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.blacksesame.com/en",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.blacksesame.com/"
    },
    "image": {
     "v": "/logos/black-sesame-technologies.png",
     "fit": "contain",
     "src": "https://www.blacksesame.com/template/default/images/c-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wuhan",
     "src": "https://www.blacksesame.com/zh/contact-us/415.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.blacksesame.com/zh/contact-us/415.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "30/F, Building A, Zhongxing Times Digital Trade Port, No. 79 Xudong Street, Hongshan District, Wuhan, Hubei, China",
       "lat": 30.502573,
       "lon": 114.338262,
       "src": "https://www.blacksesame.com/zh/contact-us/415.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arm",
   "name": "Arm",
   "summary": "Arm’s foundational technology is defining the future of computing.",
   "body": "A future built by the greatest technology ecosystem in the world. A future built on Arm. Arm is everywhere technology matters. Technology matters everywhere.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.arm.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.arm.com/"
    },
    "image": {
     "v": "/logos/arm.png",
     "fit": "contain",
     "src": "https://www.arm.com/shared/common/img/favicon/android-chrome-256x256.png?v=1.0.9810.21293",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://uk.linkedin.com/company/arm",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/arm",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "110 Fulbourn Road, Cambridge, Cambs CB1 9NJ, United Kingdom",
       "lat": 52.182043,
       "lon": 0.174387,
       "src": "https://uk.linkedin.com/company/arm"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "axelera-ai",
   "name": "Axelera AI",
   "summary": "Axelera AI delivers an AI-native game-changing hardware and software platform to accelerate artificial intelligence.",
   "body": "Headquartered in the AI Innovation Center of the High Tech Campus in Eindhoven, Axelera AI has R&D offices in Belgium, Switzerland, UK and Italy and operations in 15 European countries .",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://axelera.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://axelera.ai/"
    },
    "image": {
     "v": "/logos/axelera-ai.png",
     "fit": "contain",
     "src": "https://axelera.ai/hubfs/Axelera_February2025/images/cropped-favicon-axelera-270x270_@180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Eindhoven",
     "src": "https://nl.linkedin.com/company/axelera-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/axelera-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "HTC5, High Tech Campus, Eindhoven, 5656 AE, Netherlands",
       "lat": 51.40998,
       "lon": 5.45474,
       "src": "https://nl.linkedin.com/company/axelera-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "deepx",
   "name": "DEEPX",
   "summary": "DEEPX is a global leader in on-device AI, specializing in the development of AI semiconductors that bring intelligence to every electronic device.",
   "body": "Our cutting-edge AI chip product line is set to revolutionize industries like robotics, smart cities, surveillance, and more by optimizing performance, reducing power consumption, and enhancing cost efficiency for on-device AI operations.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://deepx.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://deepx.ai/"
    },
    "image": {
     "v": "/logos/deepx.png",
     "fit": "contain",
     "src": "https://cdn.deepx.ai/wp-content/uploads/2026/08/21151634/simbol-300x300.jpeg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seongnam-si",
     "src": "https://kr.linkedin.com/company/deepx-corp",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/deepx-corp",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "20, Pangyoyeok-ro 241beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea, Seongnam-si, Gyeonggi-do 13494, South Korea",
       "lat": 37.420156,
       "lon": 127.126209,
       "src": "https://kr.linkedin.com/company/deepx-corp"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "edgecortix",
   "name": "EdgeCortix",
   "summary": "EdgeCortix is an Edge Artificial Intelligence (AI) Platform company, pioneering the future of the connected intelligent edge.",
   "body": "It was founded in 2019 with the radical idea of taking a software first approach, while designing an artificial intelligence specific runtime reconfigurable processor from the ground up using a technique called \"hardware & software co-exploration\".",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.edgecortix.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.edgecortix.com/"
    },
    "image": {
     "v": "/logos/edgecortix.png",
     "fit": "contain",
     "src": "https://www.edgecortix.com/hubfs/edgecortix-blue-white-icon-1024.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ginza",
     "src": "https://jp.linkedin.com/company/edgecortix",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/edgecortix",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "GINZA SIX 13F, 6-10-1, Ginza, Ginza, Tokyo 104-0061, Japan",
       "lat": 35.672895,
       "lon": 139.763095,
       "src": "https://jp.linkedin.com/company/edgecortix"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robo-hi",
   "name": "ROBO-HI (formerly ZMP)",
   "summary": "",
   "body": "Headquartered in Tokyo, Japan.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.robo-hi.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robo-hi.jp/"
    },
    "image": {
     "v": "/logos/robo-hi.png",
     "fit": "contain",
     "src": "https://ferret-one.akamaized.net/images/67e3ac83c7a2020796f54185/original.png?utime=1742974084",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.robo-hi.jp/company/access",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.robo-hi.jp/company/access",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Triton Square Office Tower W 14F, 1-8-8 Harumi, Chuo-ku, Tokyo, Japan",
       "lat": 35.652721,
       "lon": 139.77859,
       "src": "https://www.robo-hi.jp/company/access"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yukai-engineering",
   "name": "Yukai Engineering",
   "summary": "YUKAI Engineering specializes in the development of robots that bring joy to life.",
   "body": "While robots are playing increasingly bigger roles in manufacturing, disaster responses and other areas, YUKAI is focused on building the consumer market for personal robots that can enhance the quality of daily life.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.ux-xu.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ux-xu.com/"
    },
    "image": {
     "v": "/logos/yukai-engineering.png",
     "fit": "contain",
     "src": "https://www.ux-xu.com/_astro/logo.CG1nJk1q.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shinjuku",
     "src": "https://jp.linkedin.com/company/yukaiengineering",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/yukaiengineering",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "16-11-101, Tomihisa-cho, Shinjuku, Tokyo 1620067, Japan",
       "lat": 35.693763,
       "lon": 139.703632,
       "src": "https://jp.linkedin.com/company/yukaiengineering"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ascent-robotics",
   "name": "Ascent Robotics",
   "summary": "Ascent Robotics provides advanced robotics software that can handle a diverse range of objects with flexibility and operate autonomously in response to the on-site environment, while also…",
   "body": "Ascent Robotics provides advanced robotics software that can handle a diverse range of objects with flexibility and operate autonomously in response to the on-site environment, while also collaborating with humans.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://ascent.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ascent.ai/"
    },
    "city": {
     "v": "Shibuya-ku",
     "src": "https://jp.linkedin.com/company/ascent-robotics-inc.",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/ascent-robotics-inc.",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1-6-10 Hiroo, Shibuya-ku, Tokyo 150-0012, Japan",
       "lat": 35.652257,
       "lon": 139.717584,
       "src": "https://jp.linkedin.com/company/ascent-robotics-inc."
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avatarin",
   "name": "avatarin",
   "summary": "ANA spin-out building avatar robots for remote presence.",
   "body": "Avatarin redefines how people meet, communicate, and share experiences — anytime, anywhere. By combining robotics and AI communication, we help organizations overcome physical and resource barriers to bring people closer together.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://jp.linkedin.com/company/avatarin",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.avatarin.com/"
    },
    "image": {
     "v": "/logos/avatarin.png",
     "fit": "contain",
     "src": "https://www.avatarin.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chuo",
     "src": "https://jp.linkedin.com/company/avatarin",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/avatarin",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3-3-9, Nihonbashi Muromachi,, Chuo, Tokyo 103-0022, Japan",
       "lat": 35.687974,
       "lon": 139.772824,
       "src": "https://jp.linkedin.com/company/avatarin"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ory-laboratory",
   "name": "Ory Laboratory",
   "summary": "At OryLab, we build technology that lets people be present, even when they can't be there in person.",
   "body": "Loneliness is one of the defining challenges of our time. The World Health Organization estimates it affects 1 in 6 people worldwide. We believe no one should be cut off from work, friends or society because of illness, disability, caregiving or distance.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://orylab.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://orylab.com/"
    },
    "image": {
     "v": "/logos/ory-laboratory.png",
     "fit": "contain",
     "src": "https://orylab.com/wp-content/uploads/ory_fabicon_g.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "中央区",
     "src": "https://jp.linkedin.com/company/orylab",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/orylab",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "日本橋本町3-8-3, 中央区, 東京都 103-0023, Japan",
       "lat": 35.670644,
       "lon": 139.771992,
       "src": "https://jp.linkedin.com/company/orylab"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "asratec",
   "name": "Asratec",
   "summary": "Robot software company built around its V-Sido robot OS.",
   "body": "Headquartered in Tokyo, Japan.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.asratec.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.asratec.co.jp/"
    },
    "image": {
     "v": "/logos/asratec.png",
     "fit": "contain",
     "src": "https://www.asratec.co.jp/wp-content/uploads/asratec-512x512-2-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.wikidata.org/wiki/Q17191354",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q17191354",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Minato, Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://www.wikidata.org/wiki/Q17191354"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shibaura-machine",
   "name": "Shibaura Machine",
   "summary": "Shibaura Machine (FKA Toshiba Machine) is a leading global manufacturer of injection molding machines, die casting machines, machine tools, nano processing systems, industrial robots and extrusion…",
   "body": "Shibaura Machine (FKA Toshiba Machine) is a leading global manufacturer of injection molding machines, die casting machines, machine tools, nano processing systems, industrial robots and extrusion machines.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.shibaura-machine.co.jp/jp/index.html",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.shibaura-machine.co.jp/"
    },
    "image": {
     "v": "/logos/shibaura-machine.png",
     "fit": "contain",
     "src": "https://www.shibaura-machine.co.jp/assets/img/logo_sm.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chiyoda-ku",
     "src": "https://jp.linkedin.com/company/shibaura-machine",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/shibaura-machine",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chiyoda-ku, Tokyo, Japan",
       "lat": 35.694054,
       "lon": 139.753501,
       "src": "https://jp.linkedin.com/company/shibaura-machine"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fuji-corporation",
   "name": "Fuji Corporation",
   "summary": "Japanese robotics manufacturer Fuji Corporation has had \"innovative spirit\" since its establishment in 1959 as Fuji Machine Manufacturing Co., Ltd., and now has over 100 service locations all over…",
   "body": "Japanese robotics manufacturer Fuji Corporation has had \"innovative spirit\" since its establishment in 1959 as Fuji Machine Manufacturing Co., Ltd., and now has over 100 service locations all over the world.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.fuji.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fuji.co.jp/"
    },
    "image": {
     "v": "/logos/fuji-corporation.png",
     "fit": "contain",
     "src": "https://www.fuji.co.jp/app-files/img/symbol/apple-touch-icon.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chiryu",
     "src": "https://jp.linkedin.com/company/fujicorporation",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/fujicorporation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "19 Chausuyama, Yamamachi, Chiryu, Aichi, Japan",
       "lat": 35.001483,
       "lon": 137.051648,
       "src": "https://jp.linkedin.com/company/fujicorporation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hanwha-robotics",
   "name": "Hanwha Robotics",
   "summary": "Based on our long-standing technical knowhow, on 2017, Hanwha Precision Machinery has rolled out a collaborative robot to easily assist any of our customers in any industry.",
   "body": "In response to our customers'​ interest in and efforts for improving their production environment, we remain committed to building a more convenient and safer future by providing outstanding products and first-class services.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://kr.linkedin.com/company/hanwharobotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hanwharobotics.com/"
    },
    "image": {
     "v": "/logos/hanwha-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=hanwharobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seongnam-si",
     "src": "https://kr.linkedin.com/company/hanwharobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/hanwharobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "305, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do 13488, South Korea",
       "lat": 37.40319,
       "lon": 127.105335,
       "src": "https://kr.linkedin.com/company/hanwharobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "twinny",
   "name": "Twinny",
   "summary": "Korean maker of autonomous mobile robots for logistics and factory automation.",
   "body": "Headquartered in Daejeon, South Korea.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://twinny.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://twinny.ai/"
    },
    "image": {
     "v": "/logos/twinny.png",
     "fit": "contain",
     "src": "https://twinny.ai/assets/img/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Daejeon",
     "src": "https://twinny.ai/en/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://twinny.ai/en/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "90 Gajeongbuk-ro, Yuseong-gu, Daejeon, South Korea",
       "lat": 36.391886,
       "lon": 127.361863,
       "src": "https://twinny.ai/en/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "clobot",
   "name": "Clobot",
   "summary": "Clobot is a robotics system integrator working with Korea’s top experts in robot intelligence.",
   "body": "We provide specialized services for autonomous driving robots with hardware fulfilling clients’ needs and software taking into consideration the operational environment while utilizing robotics from home and abroad.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://en.clobot.co.kr",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://en.clobot.co.kr/"
    },
    "image": {
     "v": "/logos/clobot.png",
     "fit": "contain",
     "src": "https://cdn.imweb.me/thumbnail/20220712/123f8b2760838.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seongnam",
     "src": "https://en.clobot.co.kr/company",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://en.clobot.co.kr/company",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "701, 16 Seongnam-daero 925beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, South Korea",
       "lat": 37.412939,
       "lon": 127.127253,
       "src": "https://en.clobot.co.kr/company"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hurotics",
   "name": "Hurotics",
   "summary": "Founded with the mission to enrich everyday life, HUROTICS Inc.",
   "body": "Develops wearable robotic technology for wellness and sports.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://hurotics.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hurotics.com/"
    },
    "image": {
     "v": "/logos/hurotics.png",
     "fit": "contain",
     "src": "https://hurotics.com/assets/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://kr.linkedin.com/company/hurotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/hurotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://kr.linkedin.com/company/hurotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sensetime",
   "name": "SenseTime",
   "summary": "Founded in 2014, SenseTime is a leading artificial intelligence (AI) software company, committed to its mission of \"creating a better AI-empowered future through original innovation\".",
   "body": "The Company continues to lead cutting-edge AI research while accelerating the large-scale commercialisation of AI technologies.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://sensetime.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sensetime.com/"
    },
    "image": {
     "v": "/logos/sensetime.png",
     "fit": "contain",
     "src": "https://sensetime.com/assets/logo-frame10.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/sensetime-group-limited",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/sensetime-group-limited",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2/F Harbour View 1, No. 12 Science Park East Avenue, HKSTP, Shatin, Hong Kong, 00000, Hong Kong",
       "lat": 22.381553,
       "lon": 114.19047,
       "src": "https://hk.linkedin.com/company/sensetime-group-limited"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "may-mobility",
   "name": "May Mobility",
   "summary": "Transforming cities and rural areas through AV transit and technology.",
   "body": "May Mobility is a leader in autonomous vehicle technology development and deployment. Y Combinator Summer 2017 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://maymobility.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://maymobility.com/"
    },
    "image": {
     "v": "/logos/may-mobility.png",
     "fit": "contain",
     "src": "https://maymobility.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ann Arbor",
     "src": "https://www.linkedin.com/company/maymobility",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/maymobility",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "650 Avis Drive, Ann Arbor, MI 48108, United States",
       "lat": 42.281372,
       "lon": -83.748462,
       "src": "https://www.linkedin.com/company/maymobility"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mars-auto",
   "name": "Mars Auto",
   "summary": "Autonomous trucks to fully automate long-haul freight shipping.",
   "body": "Mars Auto is building autonomous trucks to fully automate long-haul freight shipping. Y Combinator Winter 2019 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://marsauto.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://marsauto.com/"
    },
    "image": {
     "v": "/logos/mars-auto.png",
     "fit": "contain",
     "src": "https://marsauto.com/assets/marsauto_logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://www.ycombinator.com/companies/mars-auto",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.ycombinator.com/companies/mars-auto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://www.ycombinator.com/companies/mars-auto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "plusai",
   "name": "PlusAI",
   "summary": "PlusAI is a global physical AI company pioneering AI-based virtual driver software for factory-built autonomous trucks.",
   "body": "Its SuperDrive™ and HyperFoundry™ solutions accelerate the scalable development and deployment of autonomous vehicles. Headquartered in Silicon Valley with operations in the United States and Europe, PlusAI was named one of Fast Company’s World’s Most Innovative Companies.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.plus.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.plus.ai/"
    },
    "image": {
     "v": "/logos/plusai.png",
     "fit": "contain",
     "src": "https://www.plus.ai/images/home-2026/logo-white.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.linkedin.com/company/plusai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/plusai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3315 Scott Blvd, Santa Clara, California 95054, United States",
       "lat": 37.380484,
       "lon": -121.971651,
       "src": "https://www.linkedin.com/company/plusai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "torc-robotics",
   "name": "Torc Robotics",
   "summary": "Torc Robotics, headquartered in Blacksburg, Virginia, offers a complete autonomous software solution for the trucking/freight industry.",
   "body": "Torc was acquired by Daimler – the largest heavy-duty truck manufacturer in North America – in August 2019. We are working together to develop highly automated trucks to improve the safety and efficiency of transporting goods.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.torc.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.torc.ai/"
    },
    "image": {
     "v": "/logos/torc-robotics.png",
     "fit": "contain",
     "src": "https://torc.ai/wp-content/uploads/2024/04/torc_circle_icon-2-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Blacksburg",
     "src": "https://www.linkedin.com/company/torc-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/torc-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "405 Partnership Drive, Blacksburg, VA 24060, United States",
       "lat": 37.18972,
       "lon": -80.392328,
       "src": "https://www.linkedin.com/company/torc-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "einride",
   "name": "Einride",
   "summary": "Einride is an industry-disrupting freight technology company providing end-to-end solutions for electric and autonomous shipping.",
   "body": "By deploying technologies that are integrated using its data-driven operating system, Saga, it enables customers to decarbonize their operations by making an immediate shift towards digitalized, electric road freight.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.einride.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.einride.tech/"
    },
    "image": {
     "v": "/logos/einride.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/cUujMdzFjqTD6FX5JmNIPcpo0.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stockholm",
     "src": "https://se.linkedin.com/company/einride",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://se.linkedin.com/company/einride",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Regeringsgatan 65, Stockholm, Stockholm County 11156, Sweden",
       "lat": 59.334981,
       "lon": 18.067498,
       "src": "https://se.linkedin.com/company/einride"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stack-av",
   "name": "Stack AV",
   "summary": "Stack is developing revolutionary AI and advanced autonomous systems designed to enhance safety, reliability, and efficiency of modern operations.",
   "body": "Stack AV - Revolutionizing Transportation Through AI",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://stackav.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://stackav.com/"
    },
    "image": {
     "v": "/logos/stack-av.png",
     "fit": "contain",
     "src": "https://stackav.com/_next/static/media/Stack_Primary_Horizontal_White_RGB_.6e03a8bb.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/stackav",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/stackav",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pittsburgh, PA, United States",
       "lat": 40.440697,
       "lon": -80.002567,
       "src": "https://www.linkedin.com/company/stackav"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bot-auto",
   "name": "Bot Auto",
   "summary": "Bot Auto runs autonomous trucks out of Houston, Texas.",
   "body": "We sell the capacity, not the technology. We own the trucks, the safety case, and the operation end to end. Our team pairs trucking operators who've run real fleets with the engineers building the technology because commercializing this industry takes both.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://bot.auto/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bot.auto/"
    },
    "image": {
     "v": "/logos/bot-auto.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/3Gt78n5aN0jCfU5s2E8wJiQg0.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Houston",
     "src": "https://www.linkedin.com/company/bot-auto",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bot-auto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "15310 Park Row, Houston, Texas 77084, United States",
       "lat": 29.789215,
       "lon": -95.650415,
       "src": "https://www.linkedin.com/company/bot-auto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avride",
   "name": "Avride",
   "summary": "Avride is a leading developer in the autonomous vehicle and delivery robot industry.",
   "body": "Our dynamic team, composed of a few hundred engineers develops and operates autonomous cars and delivery robots across the globe, shaping the future of mobility and logistics. At Avride, we are committed to making the roads safer and more accessible for everyone.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.avride.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.avride.ai/"
    },
    "image": {
     "v": "/logos/avride.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/650dd89f9d632d99c3f3ec7a/651be142800b2e42a196f14f_avride%20webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.linkedin.com/company/avrideai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/avrideai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8605 Cross Park Drive, Austin, TX 78754, United States",
       "lat": 30.341593,
       "lon": -97.676325,
       "src": "https://www.linkedin.com/company/avrideai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "momenta",
   "name": "Momenta",
   "summary": "We are committed to developing breakthrough artificial intelligence (“AI”) solutions to push beyond the frontier of possibilities today and significantly improve people’s quality of life.",
   "body": "We leverage our AI capabilities to develop autonomous driving solutions to enhance safety, convenience, and efficiency of mobility.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Model lab"
     ],
     "src": "https://momenta.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://momenta.cn/"
    },
    "city": {
     "v": "Suzhou City",
     "src": "https://cn.linkedin.com/company/momenta-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/momenta-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "21st Floor, Trirun Soho, Nantiancheng Rd, Xiangcheng District, Suzhou City, Jiangsu 215131, China",
       "lat": 31.371686,
       "lon": 120.638162,
       "src": "https://cn.linkedin.com/company/momenta-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "qcraft",
   "name": "QCraft",
   "summary": "QCraft: Pioneering the Global Frontier of Physical AI Founded in Silicon Valley in 2019, QCraft is a global leader in autonomous driving with R&D hubs in Munich, Suzhou, Beijing, and Shanghai.",
   "body": "Our end-to-end architecture—powered by World Model + Reinforcement Learning—serves both L2++ mass production (QPilot ADAS) and L4 urban mobility (Robobus, Robovan, Robotaxi).",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Model lab"
     ],
     "src": "https://qcraft.ai/en",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://qcraft.ai/"
    },
    "image": {
     "v": "/logos/qcraft.png",
     "fit": "contain",
     "src": "https://qcraft-assets-cn.oss-cn-zhangjiakou.aliyuncs.com/assets/brand/logo/QCRAFTLOGOblack.png?x-oss-process=image/resize,w_3840/quality,q_75",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/qcraft",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/qcraft",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "EdisonstraBe 4, 85716 UnterschleiBheim, Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://de.linkedin.com/company/qcraft"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inceptio-technology",
   "name": "Inceptio Technology",
   "summary": "The Industry's 1st Serial-Production Autonomous Driving Trucks Inceptio Technology's mission is to build a safer and more efficient line-haul logistics by providing industry-leading autonomous…",
   "body": "Headquartered in Santa Clara, United States.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.inceptio.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.inceptio.ai/"
    },
    "image": {
     "v": "/logos/inceptio-technology.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.inceptio.ai&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.linkedin.com/company/inceptio-technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/inceptio-technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2445 Augustine Dr, Santa Clara, California 95054, United States",
       "lat": 37.382648,
       "lon": -121.969686,
       "src": "https://www.linkedin.com/company/inceptio-technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tensor",
   "name": "Tensor",
   "summary": "Tensor is an American Physical AI company dedicated to building agentic products that empower people.",
   "body": "Our flagship product, the Tensor Robocar, is the world’s first personal Robocar and the first AI agentic vehicle—fully autonomous, automotive-grade, and built for private ownership at scale.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.tensor.auto/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tensor.auto/"
    },
    "image": {
     "v": "/logos/tensor.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/687da7157e1edd9508fd17b6/687da7157e1edd9508fd18e9_Frame%201197134246.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/tensor-auto",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/tensor-auto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "441 W Trimble Rd, San Jose, California 95131, United States",
       "lat": 37.383027,
       "lon": -121.93439,
       "src": "https://www.linkedin.com/company/tensor-auto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neolix",
   "name": "Neolix",
   "summary": "L4 autonomous delivery vehicle maker.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://neolix.net/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://neolix.net/"
    },
    "image": {
     "v": "/logos/neolix.png",
     "fit": "contain",
     "src": "https://neolix.net/favicon2.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.neolix.net/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.neolix.net/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "北京市经济技术开发区康定街11号康盛工业园1号楼 (Building 1, Kangsheng Industrial Park, 11 Kangding Street, Beijing Economic-Technological Development Area), Beijing, China",
       "lat": 39.798055,
       "lon": 116.488741,
       "src": "https://www.neolix.net/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "third-wave-automation",
   "name": "Third Wave Automation",
   "summary": "At Third Wave Automation, the Shared Autonomy Platform brings people and autonomous forklifts together to run warehouses more safely and productively than either could alone.",
   "body": "Machine learning handles the driving; human operators provide oversight from anywhere, stepping in only when needed.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://thirdwave.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://thirdwave.ai/"
    },
    "image": {
     "v": "/logos/third-wave-automation.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/yzNMsJtKZAnxm2rRpxyaQuOQIk.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Union City",
     "src": "https://www.linkedin.com/company/thirdwaveautomation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/thirdwaveautomation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "30118 Eigenbrodt way, Union City, CA 94587, United States",
       "lat": 37.609155,
       "lon": -122.071405,
       "src": "https://www.linkedin.com/company/thirdwaveautomation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fox-robotics",
   "name": "Fox Robotics",
   "summary": "Fox Robotics - Acquired by Symbotic is a robotics company working on warehouse automation.",
   "body": "Our automated forklifts have the most advanced technology in the industry and are the only equipment capable of more complicated tasks such as trailer unloading. The team behind our products is incredible and growing quickly. We’re based in Austin, TX.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://foxrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://foxrobotics.com/"
    },
    "image": {
     "v": "/logos/fox-robotics.png",
     "fit": "contain",
     "src": "https://foxrobotics.com/hubfs/FoxRobotics_logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.linkedin.com/company/foxbots",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/foxbots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4101 Smith School Rd, Austin, Texas 78744, United States",
       "lat": 30.198654,
       "lon": -97.710921,
       "src": "https://www.linkedin.com/company/foxbots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "balyo",
   "name": "BALYO",
   "summary": "Balyo is a global leader in driverless warehouse solutions for manufacturing and warehousing.",
   "body": "With a focus on safety and high-bay storage, our solutions help clients boost productivity while avoiding expensive infrastructure changes.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.balyo.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.balyo.com/"
    },
    "image": {
     "v": "/logos/balyo.png",
     "fit": "contain",
     "src": "https://www.balyo.com/hubfs/Markentive/BAL20001-shape.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Arcueil",
     "src": "https://fr.linkedin.com/company/balyo",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/balyo",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "74 Av Vladimir Ilitch Lenine, Arcueil, Île-de-France 94110, France",
       "lat": 48.81255,
       "lon": 2.331841,
       "src": "https://fr.linkedin.com/company/balyo"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "slip-robotics",
   "name": "Slip Robotics",
   "summary": "Automated loading robots (SlipBots) that load and unload trucks in minutes.",
   "body": "The SlipBot robots-as-a-service network drives 10x improvements in safety, speed, and savings across the supply chain. 🚚 Truckers shouldn't wait. 👷‍♂️ Forklift drivers shouldn't risk it. ⚡ Auto-load/unload any truck in 5 minutes with SlipBots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.sliprobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sliprobotics.com/"
    },
    "image": {
     "v": "/logos/slip-robotics.png",
     "fit": "contain",
     "src": "https://www.sliprobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Atlanta",
     "src": "https://www.linkedin.com/company/slip-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/slip-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Atlanta, Georgia, United States",
       "lat": 33.754466,
       "lon": -84.389815,
       "src": "https://www.linkedin.com/company/slip-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gather-ai",
   "name": "Gather AI",
   "summary": "Gather AI is the Physical AI platform for logistics.",
   "body": "We give the companies that run the world's warehouses a continuous, accurate picture of what is happening on the floor across every facility, the intelligence to understand what it means, and the workflows to act on it.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://gather.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gather.ai/"
    },
    "image": {
     "v": "/logos/gather-ai.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/U6suckuBUyRh328SSV5taQweneM.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/gather-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/gather-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1138 River Ave, Pittsburgh, Pennsylvania 15212, United States",
       "lat": 40.455781,
       "lon": -79.988156,
       "src": "https://www.linkedin.com/company/gather-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aethon",
   "name": "Aethon",
   "summary": "ST Engineering, Aethon provides mobile robotics solutions to the healthcare and hospitality markets.",
   "body": "We engineer, sell and support solutions to automate the transportation of goods and supplies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.linkedin.com/company/aethon",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aethon.com/"
    },
    "image": {
     "v": "/logos/aethon.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.aethon.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/aethon",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aethon",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "200 Business Center Dr, Pittsburgh, Pennsylvania 15205, United States",
       "lat": 40.440697,
       "lon": -80.002567,
       "src": "https://www.linkedin.com/company/aethon"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "safeai",
   "name": "SafeAI",
   "summary": "Pronto is Autonomy Simplified.",
   "body": "While other tech companies have been promising autonomy \"coming next year\" for the last 10+ years, we've been shipping real autonomy that our customers are using in production environments every day.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://pronto.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://pronto.ai/"
    },
    "image": {
     "v": "/logos/safeai.png",
     "fit": "contain",
     "src": "https://pronto.ai/wp-content/uploads/Pronto_logo-mark_black-480px-240x239.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/pronto-dot-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/pronto-dot-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/pronto-dot-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pronto",
   "name": "Pronto",
   "summary": "Pronto is Autonomy Simplified.",
   "body": "While other tech companies have been promising autonomy \"coming next year\" for the last 10+ years, we've been shipping real autonomy that our customers are using in production environments every day.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://pronto.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://pronto.ai/"
    },
    "image": {
     "v": "/logos/pronto.png",
     "fit": "contain",
     "src": "https://pronto.ai/wp-content/uploads/Pronto_logo-mark_black-480px-240x239.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/pronto-dot-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/pronto-dot-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/pronto-dot-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "advanced-construction-robotics",
   "name": "Advanced Construction Robotics",
   "summary": "A leading provider of robotic equipment, ACR is transforming the construction industry by filling the skilled labor gap and increasing overall productivity.",
   "body": "Our robots give construction firms the ability to consistently meet growing demand, reduce scheduling risks and improve safety.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://constructionrobots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://constructionrobots.com/"
    },
    "image": {
     "v": "/logos/advanced-construction-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/693dcb2dcf07a35645333596/693dcbebe871add4d2899cd1_favicon-256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/advanced-construction-construction-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/advanced-construction-construction-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "., Pittsburgh, Pennsylvania ., United States",
       "lat": 40.440697,
       "lon": -80.002567,
       "src": "https://www.linkedin.com/company/advanced-construction-construction-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "percepto",
   "name": "Percepto",
   "summary": "Autonomous drone-in-a-box inspection and monitoring.",
   "body": "Headquartered in Austin, United States.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://percepto.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://percepto.com/"
    },
    "image": {
     "v": "/logos/percepto.png",
     "fit": "contain",
     "src": "https://percepto.com/wp-content/uploads/2019/03/cropped-Favicon-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://percepto.com/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://percepto.com/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8310-1 N. Capital of Texas Highway, Suite 150, Austin, TX 78731, United States",
       "lat": 30.373592,
       "lon": -97.725425,
       "src": "https://percepto.com/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "quantum-systems",
   "name": "Quantum Systems",
   "summary": "Quantum Systems is a leading European deep-tech company specialising in unmanned systems.",
   "body": "We develop, produce, and scale integrated hardware, software, and AI solutions that are operational across air, ground, and sea today. Headquartered near Munich and operating globally, we build all core technologies in-house: platforms, mission software, and AI-driven analytics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://quantum-systems.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://quantum-systems.com/"
    },
    "image": {
     "v": "/logos/quantum-systems.png",
     "fit": "contain",
     "src": "https://quantum-systems.com/wp-content/uploads/2025/05/favicon512x512-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gilching",
     "src": "https://de.linkedin.com/company/quantum-systems-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/quantum-systems-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gilching, Bavaria, Germany",
       "lat": 48.114029,
       "lon": 11.292155,
       "src": "https://de.linkedin.com/company/quantum-systems-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "auterion",
   "name": "Auterion",
   "summary": "Auterion is a cutting-edge operating system for autonomous computing that empowers a diverse range of autonomous robots to perform high-risk to mundane tasks, deliver goods, and aid in life-saving…",
   "body": "Auterion is a cutting-edge operating system for autonomous computing that empowers a diverse range of autonomous robots to perform high-risk to mundane tasks, deliver goods, and aid in life-saving missions.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://auterion.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://auterion.com/"
    },
    "image": {
     "v": "/logos/auterion.png",
     "fit": "contain",
     "src": "https://i0.wp.com/auterion.com/wp-content/uploads/2026/09/auterion-favicon-512.png?fit=192%2C192&#038;ssl=1",
     "asof": "2026-11"
    },
    "city": {
     "v": "Arlington",
     "src": "https://www.linkedin.com/company/auterion",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/auterion",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4250 Fairfax Dr, Arlington, Virginia 22203, United States",
       "lat": 38.881855,
       "lon": -77.112364,
       "src": "https://www.linkedin.com/company/auterion"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "matternet",
   "name": "Matternet",
   "summary": "Matternet is the leading developer of commercial drone delivery systems for urban and suburban environments.",
   "body": "The company ships the Matternet M2 drone and Matternet Software Platform and operates its technology directly for customers or in partnership with logistics organizations, such as UPS.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.matternet.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.matternet.com/"
    },
    "image": {
     "v": "/logos/matternet.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/6695c6f810dd274bb43320fb/1721091903919-VIGJS82WI8RJ0K15K6GD/Matternet_Logo_BLK.png?format=1500w",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://www.linkedin.com/company/matternet-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/matternet-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "185 E Dana St, Mountain View, California 94041, United States",
       "lat": 37.386155,
       "lon": -122.065473,
       "src": "https://www.linkedin.com/company/matternet-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "saga-robotics",
   "name": "Saga Robotics",
   "summary": "Thorvald is a field-proven autonomous robot for grapevine and strawberry farming.",
   "body": "It delivers UV-C disease control and AI-driven data insights, helping growers realise their yield potential while reducing chemical use, waste and carbon emissions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.sagarobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sagarobotics.com/"
    },
    "image": {
     "v": "/logos/saga-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/a6c6e9_5871c9b0b610486da59e8715ee73630e%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/a6c6e9_5871c9b0b610486da59e8715ee73630e%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paso Robles",
     "src": "https://www.linkedin.com/company/saga-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/saga-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3650 La Cruz Way, Paso Robles, California 93446, United States",
       "lat": 35.626262,
       "lon": -120.690132,
       "src": "https://www.linkedin.com/company/saga-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "naïo-technologies",
   "name": "Naïo Technologies",
   "summary": "Naïo addresses the pressing challenges faced by farmers with innovative robotic solutions that restore control, increase yield, and promote sustainability in agriculture.",
   "body": "Farmers face rising uncertainty, from weather patterns to labor shortages, that jeopardize entire seasons.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.naio-technologies.com/en/home/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.naio-technologies.com/"
    },
    "image": {
     "v": "/logos/naïo-technologies.png",
     "fit": "contain",
     "src": "https://www.naio-technologies.com/wp-content/themes/naiotech/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Escalquens",
     "src": "https://fr.linkedin.com/company/na-o",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/na-o",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "235 rue de la Montagne Noire, Escalquens, Haute-Garonne 31750, France",
       "lat": 43.519418,
       "lon": 1.535725,
       "src": "https://fr.linkedin.com/company/na-o"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agrobot",
   "name": "Agrobot",
   "summary": "Agrobot is a company engaged in the business of agricultural robots.",
   "body": "Working along with global leading farmers, the Agrobot has successfully developed the first robot for gently harvest strawberries, no matter where and how they are grown.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.agrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.agrobot.com/"
    },
    "city": {
     "v": "La Palma del Condado",
     "src": "https://es.linkedin.com/company/agrobot",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://es.linkedin.com/company/agrobot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Calle Bodega Soriano N11, La Palma del Condado, Huelva 21700, Spain",
       "lat": 37.363077,
       "lon": -6.545498,
       "src": "https://es.linkedin.com/company/agrobot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tevel-aerobotics",
   "name": "Tevel Aerobotics",
   "summary": "Tevel is addressing the extreme shortage in agricultural labor through fruit-picking Flying Autonomous Robots™.",
   "body": "Founded in 2017 by CEO Yaniv Maor, Tevel’s flying robots are powered by state-of-the-art artificial intelligence and computer vision algorithms, enabling them to delicately pick fruit and optimize the harvesting process.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.tevel-tech.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tevel-tech.com/"
    },
    "image": {
     "v": "/logos/tevel-aerobotics.png",
     "fit": "contain",
     "src": "https://www.tevel-tech.com/wp-content/uploads/2020/03/Tevel-Logo-RGB.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gedera",
     "src": "https://il.linkedin.com/company/tevel-aerobotics-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/tevel-aerobotics-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Agridera Farm, Gedera, 7075002, Israel",
       "lat": 31.811775,
       "lon": 34.780388,
       "src": "https://il.linkedin.com/company/tevel-aerobotics-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aigen",
   "name": "Aigen",
   "summary": "Aigen builds the world’s first AI-driven, network connected robotic fleet, powered entirely by the elements.",
   "body": "A future with no harmful chemicals in our food. Design, engineered, assembled in the USA. Backed by NEA, GFC, AgFunder, Onto Ventures, and Bessemer Ventures",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://aigen.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aigen.io/"
    },
    "image": {
     "v": "/logos/aigen.png",
     "fit": "contain",
     "src": "https://aigen.io/assets/brand/aigen-wc.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redmond",
     "src": "https://www.linkedin.com/company/aigeninc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aigeninc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Redmond, WA, United States",
       "lat": 47.669414,
       "lon": -122.123877,
       "src": "https://www.linkedin.com/company/aigeninc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "swarmfarm-robotics",
   "name": "SwarmFarm Robotics",
   "summary": "Founded in 2015 near Emerald, Queensland, SwarmFarm Robotics has pioneered the development and use of intelligent robotics in Australian agriculture.",
   "body": "Our fleet (or Swarms) of sensor-guided autonomous units are already operating in a commercial capacity with early adopter farmers in Australia. The SwarmBot robot is a universal platform that can operate in a wide array of industries.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.swarmfarm.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.swarmfarm.com/"
    },
    "image": {
     "v": "/logos/swarmfarm-robotics.png",
     "fit": "contain",
     "src": "https://www.swarmfarm.com/wp-content/uploads/2019/06/logo-120.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gindie",
     "src": "https://au.linkedin.com/company/swarmfarm-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://au.linkedin.com/company/swarmfarm-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "225 Glenorina Access Rd, Gindie, Queensland 4702, Australia",
       "lat": -23.834934,
       "lon": 148.318783,
       "src": "https://au.linkedin.com/company/swarmfarm-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ecorobotix",
   "name": "Ecorobotix",
   "summary": "At Ecorobotix, we harness the power of artificial intelligence to help farmers and greenkeepers to produce healthy food and manage turf with greater precision and efficiency.",
   "body": "Our AI-driven technology helps to reduce the environmental impact of operations by minimizing plant protection product use, lowering operational costs, and conserving natural resources.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://ecorobotix.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ecorobotix.com/"
    },
    "image": {
     "v": "/logos/ecorobotix.png",
     "fit": "contain",
     "src": "https://ecorobotix.com/wp-content/uploads/2025/03/favicon-96x96-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Yverdon-les-Bains",
     "src": "https://ch.linkedin.com/company/ecorobotix",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/ecorobotix",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rue Galilée 6, Yverdon-les-Bains, Vaud 1400, Switzerland",
       "lat": 46.764967,
       "lon": 6.645612,
       "src": "https://ch.linkedin.com/company/ecorobotix"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "verdant-robotics",
   "name": "Verdant Robotics",
   "summary": "Verdant Robotics’ SharpShooter is the only precision application system that aims before it applies—delivering unmatched accuracy for weeding, thinning, and beneficial applications.",
   "body": "With technology designed and tested to fit current cropping practices, and the reliability you require, it delivers pinpoint applications to weeds and crops of all sizes—from dime to dinner-plate-sized—without slowing down.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.verdantrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.verdantrobotics.com/"
    },
    "image": {
     "v": "/logos/verdant-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6792b4ac8a0083e26da102a8/67a290f82f667663b01d1711_webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hayward",
     "src": "https://www.linkedin.com/company/verdantrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/verdantrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hayward, CA, United States",
       "lat": 37.668821,
       "lon": -122.080796,
       "src": "https://www.linkedin.com/company/verdantrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "farmwise",
   "name": "FarmWise",
   "summary": "At FarmWise we believe that farming can be done at the plant level at scale leveraging the diversity of biological systems.",
   "body": "Our team wants to enable farmers and ag equipment makers to reinvent farming operations with machines that can perceive, understand and act at the plant level in real-time.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://farmwise.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://farmwise.io/"
    },
    "image": {
     "v": "/logos/farmwise.png",
     "fit": "contain",
     "src": "https://farmwise.io/assets/images/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.linkedin.com/company/farmwise",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/farmwise",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3030 Olcott St, Santa Clara, California 95054, United States",
       "lat": 37.376623,
       "lon": -121.967408,
       "src": "https://www.linkedin.com/company/farmwise"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intuitive-surgical",
   "name": "Intuitive Surgical",
   "summary": "Intuitive (Nasdaq: ISRG), headquartered in Sunnyvale, Calif., is a global technology leader in minimally invasive care and the pioneer of robotic-assisted surgery.",
   "body": "At Intuitive, we believe that minimally invasive care is life-enhancing care. Through ingenuity and intelligent technology, we expand the potential of physicians to heal without constraints.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.linkedin.com/company/intuitivesurgical",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.intuitive.com/"
    },
    "image": {
     "v": "/logos/intuitive-surgical.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.intuitive.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "California",
     "src": "https://www.linkedin.com/company/intuitivesurgical",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/intuitivesurgical",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1020 Kifer Road, Building 108, California, 94086, United States",
       "lat": 38.663684,
       "lon": -121.383791,
       "src": "https://www.linkedin.com/company/intuitivesurgical"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "moon-surgical",
   "name": "Moon Surgical",
   "summary": "Moon Surgical builds solutions uniquely architected for the modern operating room, enabling high-quality minimally invasive surgery to scale without constraints.",
   "body": "Create the OR of the future, one that is sustainable, efficient, and digitalized.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://moonsurgical.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://moonsurgical.com/"
    },
    "image": {
     "v": "/logos/moon-surgical.png",
     "fit": "contain",
     "src": "https://moonsurgical.com/assets/images/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://fr.linkedin.com/company/moonsurgical",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/moonsurgical",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://fr.linkedin.com/company/moonsurgical"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "distalmotion",
   "name": "Distalmotion",
   "summary": "Distalmotion is a global MedTech company with a mission to empower access to the benefits of robotic surgery by simplifying operations with its DEXTER robot.",
   "body": "The company aims to broaden access to robotic surgery for more surgeons and sites of care globally, including hospital outpatient departments (HOPDs) and ambulatory surgical centers (ASCs), to increase the number of patients who benefit from best-in-class minimally invasive care.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.distalmotion.com:443/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.distalmotion.com:443/"
    },
    "image": {
     "v": "/logos/distalmotion.png",
     "fit": "contain",
     "src": "https://www.distalmotion.com:443/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Epalinges",
     "src": "https://ch.linkedin.com/company/distalmotion",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/distalmotion",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Route de la Corniche 3b, Epalinges, Vaud 1066, Switzerland",
       "lat": 46.542099,
       "lon": 6.66128,
       "src": "https://ch.linkedin.com/company/distalmotion"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vicarious-surgical",
   "name": "Vicarious Surgical",
   "summary": "At Vicarious Surgical we are revolutionizing the field of surgical robotics.",
   "body": "We seek to improve the lives of patients, enhance the ability of surgeons, and expand worldwide access to high-quality care through the use of surgical robotics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.vicarioussurgical.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.vicarioussurgical.com/"
    },
    "city": {
     "v": "Waltham",
     "src": "https://www.linkedin.com/company/vicarious-surgical",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/vicarious-surgical",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "78 Fourth Ave, Waltham, Massachusetts 02451, United States",
       "lat": 42.392543,
       "lon": -71.258048,
       "src": "https://www.linkedin.com/company/vicarious-surgical"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neocis",
   "name": "Neocis",
   "summary": "Neocis is transforming implant dentistry with advanced robotics.",
   "body": "Manufacturer of Yomi, the only FDA-cleared robotic device for dental surgery, Neocis works closely with leading clinicians to better understand their needs and treatment challenges.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.neocis.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.neocis.com/"
    },
    "image": {
     "v": "/logos/neocis.png",
     "fit": "contain",
     "src": "https://www.neocis.com/wp-content/uploads/2026/09/cropped-Crosshairs-orange-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Miami",
     "src": "https://www.linkedin.com/company/neocis",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/neocis",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "545 NW 26th St., Miami, FL 33127, United States",
       "lat": 25.801175,
       "lon": -80.204496,
       "src": "https://www.linkedin.com/company/neocis"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "monogram-technologies",
   "name": "Monogram Technologies",
   "summary": "Zimmer Biomet is a global medical technology leader with a comprehensive portfolio designed to maximize mobility and improve health.",
   "body": "We advance our mission to alleviate pain and improve the quality of life for patients around the world with our innovative products and suite of integrated digital and robotic technologies leverage data, data analytics and artificial intelligence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.monogramtechnologies.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.monogramtechnologies.com/"
    },
    "image": {
     "v": "/logos/monogram-technologies.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/65031d3a409ee83435080102/6a57d897b3f7d9e9bfe1275f_Z-Icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Warsaw",
     "src": "https://www.linkedin.com/company/zimmerbiomet",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/zimmerbiomet",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "345 East Main Street, Warsaw, Indiana 46580, United States",
       "lat": 41.239168,
       "lon": -85.854751,
       "src": "https://www.linkedin.com/company/zimmerbiomet"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "microport-medbot",
   "name": "MicroPort MedBot",
   "summary": "Shanghai MicroPort® MedBot (Group) Co., Ltd., a robotics-specialized subsidiary of Shanghai MicroPort® Medical (Group) Co., Ltd.",
   "body": "Headquartered in Shanghai, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.medbotsurgical.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.medbotsurgical.com/"
    },
    "image": {
     "v": "/logos/microport-medbot.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.medbotsurgical.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://cn.linkedin.com/company/microport-medbot",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/microport-medbot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1601 Zhangdong Road Z.J. Hi-Tech Park, Shanghai  MicroPort® Official Website Recruitment Contact Us Legal Statement Cookies, Shanghai, SH 201210, China",
       "lat": 31.204331,
       "lon": 121.630855,
       "src": "https://cn.linkedin.com/company/microport-medbot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "edge-medical",
   "name": "Edge Medical",
   "summary": "Designs and makes minimally invasive surgical robots.",
   "body": "Headquartered in Shenzhen, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.edgemed.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.edgemed.cn/"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.edgemed.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.edgemed.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "深圳市龙岗区宝龙街道宝荷大道76号 (76 Baohe Avenue, Baolong Subdistrict, Longgang District), Shenzhen, Guangdong, China",
       "lat": 22.723037,
       "lon": 114.242656,
       "src": "https://www.edgemed.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tinavi",
   "name": "TINAVI",
   "summary": "Maker of orthopaedic surgical robots.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.tinavi.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tinavi.com/"
    },
    "image": {
     "v": "/logos/tinavi.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.tinavi.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.tinavi.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.tinavi.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Xisanqi Subdistrict, Haidian District, Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.tinavi.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cornerstone-robotics",
   "name": "Cornerstone Robotics",
   "summary": "Surgical robot maker based in Hong Kong Science Park.",
   "body": "Headquartered in Hong Kong, Hong Kong.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://csrbtx.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://csrbtx.com/"
    },
    "image": {
     "v": "/logos/cornerstone-robotics.png",
     "fit": "contain",
     "src": "https://csrbtx.com/logo/csr-logo-white.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://www.csrbtx.com/en/contact-us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://www.csrbtx.com/en/contact-us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Unit 1109-1113, 19W Science Park Avenue West, Hong Kong Science Park, Shatin, New Territories, Hong Kong",
       "lat": 22.399726,
       "lon": 114.204363,
       "src": "https://www.csrbtx.com/en/contact-us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "revolve-surgical",
   "name": "Revolve Surgical",
   "summary": "Surgical robotics for every operating room.",
   "body": "Revolve is building the world’s only surgical robot designed for every operating room. Its simple yet powerful design makes it the only robot that can service the 1M+ abdominal surgeries performed outside of hospitals in the US every year. Y Combinator Summer 2021 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.revolvesurgical.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.revolvesurgical.com/"
    },
    "image": {
     "v": "/logos/revolve-surgical.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/65b3c087a187154f99c5173c/65c3d13bb50de57e0e2de501_256x256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toronto",
     "src": "https://www.ycombinator.com/companies/revolve-surgical",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.ycombinator.com/companies/revolve-surgical",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Toronto, ON, Canada",
       "lat": 43.653482,
       "lon": -79.383935,
       "src": "https://www.ycombinator.com/companies/revolve-surgical"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "virtual-incision",
   "name": "Virtual Incision",
   "summary": "Virtual Incision is on a mission to simplify robotic-assisted surgery (RAS), so more patients and their surgeons can access its benefits every day.",
   "body": "Headquartered in Lincoln, Nebraska, and holding over 200 patents and patent applications, the company is developing MIRA, the first-of-its-kind miniature, and highly accessible RAS platform. With MIRA, our goal is to make every operating room RAS-ready. https://virtualincision.com",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://virtualincision.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://virtualincision.com/"
    },
    "image": {
     "v": "/logos/virtual-incision.png",
     "fit": "contain",
     "src": "https://virtualincision.com/wp-content/uploads/2022/07/VIC-logo-icon-400-80x80.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lincoln",
     "src": "https://www.linkedin.com/company/virtual-incision-corporation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/virtual-incision-corporation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1501 Old Cheney Rd, Lincoln, Nebraska 68512, United States",
       "lat": 40.755135,
       "lon": -96.700418,
       "src": "https://www.linkedin.com/company/virtual-incision-corporation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "archetype-ai",
   "name": "Archetype AI",
   "summary": "We are a Physical AI company pioneering a new form of artificial intelligence that is capable of perceiving, understanding, and reasoning about the world.",
   "body": "We solve real world problems using the power of AI to reveal the world’s hidden patterns and behaviors that escape our perception. Our vision is to encode the entire physical world.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.archetypeai.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.archetypeai.io/"
    },
    "image": {
     "v": "/logos/archetype-ai.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68c59e69a5b9d33cfb789cb3/691f51fb4f66085c470919f6_67e57363f36daefabb43ae52_Archetype%20Logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Mateo",
     "src": "https://www.linkedin.com/company/archetype-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/archetype-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "800 S Claremont St, San Mateo, California 94402, United States",
       "lat": 37.563342,
       "lon": -122.31777,
       "src": "https://www.linkedin.com/company/archetype-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "general-intuition",
   "name": "General Intuition",
   "summary": "Researchers trained the world’s most powerful foundation models on words.",
   "body": "But human intelligence far exceeds the origin of language; it emerged over millennia of interaction, exploration, and the ceaseless negotiation of intent, action, and consequences in unbounded environments.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.generalintuition.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.generalintuition.com/"
    },
    "image": {
     "v": "/logos/general-intuition.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68b73cd966b9c097c35f357b/68d31bc35b8d5b398f8aa81a_256x256_webclip_general_intuition.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.cbinsights.com/company/general-intuition",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.cbinsights.com/company/general-intuition",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "12 West 21st Street, 12th Floor, New York, NY 10010, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.cbinsights.com/company/general-intuition"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rhoda-ai",
   "name": "Rhoda AI",
   "summary": "Building at the frontier of embodied intelligence.",
   "body": "We’re currently in stealth and working with select partners as we prepare for public launch. If you’re excited about hard problems, first-principles thinking, and building category-defining systems, we’d love to hear from you.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.rhoda.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rhoda.ai/"
    },
    "image": {
     "v": "/logos/rhoda-ai.png",
     "fit": "contain",
     "src": "https://www.rhoda.ai/assets/images/logo/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/rhoda-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/rhoda-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://www.linkedin.com/company/rhoda-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "luma-ai",
   "name": "Luma AI",
   "summary": "Luma AI’s mission is to build Multimodal AGI: AI that can generate, understand, and operate in the physical world.",
   "body": "We develop multimodal models across video, 3D, and generative media, and ship them in products like Dream Machine to help creators and teams turn ideas into compelling visuals—fast.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://lumalabs.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lumalabs.ai/"
    },
    "image": {
     "v": "/logos/luma-ai.png",
     "fit": "contain",
     "src": "https://lumalabs.ai/favicons/favicon-black.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco Bay Area",
     "src": "https://www.linkedin.com/company/lumalabsai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/lumalabsai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco Bay Area, CA, United States",
       "lat": 37.788497,
       "lon": -122.355847,
       "src": "https://www.linkedin.com/company/lumalabsai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "unbox-robotics",
   "name": "Unbox Robotics",
   "summary": "Unbox Robotics builds full-stack robotic systems that help retail, logistics, and eCommerce companies automate their intra-logistics operations.",
   "body": "Powered by proprietary swarm intelligence, its solutions improve throughput, accuracy, and space efficiency across warehouses and fulfillment centers. Founded in 2019 by Flipkart alumni who lived through India's fulfillment scale-up.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://unboxrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://unboxrobotics.com/"
    },
    "image": {
     "v": "/logos/unbox-robotics.png",
     "fit": "contain",
     "src": "https://unboxrobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pune",
     "src": "https://in.linkedin.com/company/unboxrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/unboxrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Prahlad Arcade, Bhaktimarg Rd, Near Law College Rd, Pune, Maharashtra 411004, India",
       "lat": 18.521374,
       "lon": 73.854507,
       "src": "https://in.linkedin.com/company/unboxrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "genrobotics",
   "name": "Genrobotics",
   "summary": "We are GenRobotic Innovations, a deep-tech company founded in 2015, committed to solving critical social challenges through advanced robotics and AI.",
   "body": "Our journey began with a college project developing a wearable exoskeleton, and we've since evolved to create impactful solutions that enhance safety and transform lives.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://genrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://genrobotics.com/"
    },
    "image": {
     "v": "/logos/genrobotics.png",
     "fit": "contain",
     "src": "https://genrobotics.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Trivandrum",
     "src": "https://in.linkedin.com/company/genrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/genrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Technopark Campus, Phase 1, Trivandrum, Kerala 695581, India",
       "lat": 8.548682,
       "lon": 76.886612,
       "src": "https://in.linkedin.com/company/genrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ottonomy",
   "name": "Ottonomy",
   "summary": "Network of Autonomous Delivery Robots",
   "body": "Discover Ottonomy.IO’s advanced autonomous delivery robots, featuring L4-autonomy, contextual AI, indoor & outdoor navigation, seamless campus and last-mile operations across healthcare, industrial and parcel environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://ottonomy.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ottonomy.io/"
    },
    "image": {
     "v": "/logos/ottonomy.png",
     "fit": "contain",
     "src": "https://ottonomy.io/wp-content/uploads/2022/12/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sunnyvale, CA 94085",
     "src": "https://www.linkedin.com/company/ottonomyio",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/ottonomyio",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "440 N. Wolfe Rd., Sunnyvale, CA 94085, California 94085, United States",
       "lat": 37.569025,
       "lon": -121.977591,
       "src": "https://www.linkedin.com/company/ottonomyio"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "peer-robotics",
   "name": "Peer Robotics",
   "summary": "Peer Robotics is a collaborative mobile robotics company building material handling solutions for manufacturing industries.",
   "body": "Our mobile robots can learn from humans in real-time allowing people on the shop floor to easily integrate and deploy the solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.peerrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.peerrobotics.ai/"
    },
    "image": {
     "v": "/logos/peer-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/65eea1671e5bfcd07ee6e7d3/661914da3c357b8b626d4f55_Frame%20162.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Detroit",
     "src": "https://www.linkedin.com/company/peer-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/peer-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2050 15th St, Detroit, Michigan 48216, United States",
       "lat": 42.328272,
       "lon": -83.075534,
       "src": "https://www.linkedin.com/company/peer-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tiny-mile",
   "name": "Tiny Mile (Pinkbot)",
   "summary": "Order from the restaurants around you in Miami, Jersey City, Philadelphia and Toronto.",
   "body": "No delivery fee, and restaurants pay no commission.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://pink.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://pink.bot/"
    },
    "image": {
     "v": "/logos/tiny-mile.png",
     "fit": "contain",
     "src": "https://pink.bot/order/releases/pxsq69rdkc3sjl13gi657aw7z5z9c8bb-frontend-order-prod-0.1.0/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toronto",
     "src": "https://www.cbinsights.com/company/tiny-mile",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.cbinsights.com/company/tiny-mile",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "204 Spadina Avenue, Toronto, ON M5T 2C2, Canada",
       "lat": 43.65043,
       "lon": -79.397514,
       "src": "https://www.cbinsights.com/company/tiny-mile"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mecademic",
   "name": "Mecademic",
   "summary": "Mecademic is a game changer for companies and institutions executing Industry 4.0 strategies.",
   "body": "Our industrial robots boost productivity, reduce costs and improve the quality of our customers’ products and operations. We optimize quality and reduce costs by helping our customers automate their operations requiring precision tasks and delicate manipulations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://mecademic.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mecademic.com/"
    },
    "image": {
     "v": "/logos/mecademic.png",
     "fit": "contain",
     "src": "https://mecademic.com/wp-content/uploads/2024/04/cropped-mecalogo-black.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montreal",
     "src": "https://ca.linkedin.com/company/mecademic",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/mecademic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1300 Rue St-Patrick, Montreal, Quebec H3K 1A4, Canada",
       "lat": 45.488322,
       "lon": -73.557621,
       "src": "https://ca.linkedin.com/company/mecademic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "exyn-technologies",
   "name": "Exyn Technologies",
   "summary": "Exyn is pioneering autonomous aerial robot systems for complex, GPS-denied environments.",
   "body": "The company’s full-stack solution enables flexible deployment of single or multi-robots that can intelligently navigate and dynamically adapt to complex environments in real-time.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.exyn.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.exyn.com/"
    },
    "image": {
     "v": "/logos/exyn-technologies.png",
     "fit": "contain",
     "src": "https://www.exyn.com/hubfs/exyn-reticle-bk-pd40.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Philadelphia",
     "src": "https://www.linkedin.com/company/exyn-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/exyn-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2118 Washington Avenue, Philadelphia, Pennsylvania 19146, United States",
       "lat": 39.939125,
       "lon": -75.17949,
       "src": "https://www.linkedin.com/company/exyn-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "igus",
   "name": "igus",
   "summary": "Choose from a variety of plastic components, such as plain & linear bearings, cable carriers, continuous-flex cables, and automation products.",
   "body": "Headquartered in Cologne, Germany.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://www.igus.com:443/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.igus.com:443/"
    },
    "image": {
     "v": "/logos/igus.png",
     "fit": "contain",
     "src": "https://www.igus.com:443/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cologne",
     "src": "https://www.wikidata.org/wiki/Q476643",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q476643",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cologne, Germany",
       "lat": 50.938361,
       "lon": 6.959974,
       "src": "https://www.wikidata.org/wiki/Q476643"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kassow-robots",
   "name": "Kassow Robots",
   "summary": "True to the motto of “strong, fast, simple,” Copenhagen-based Kassow Robots develops and manufactures highly efficient and lightweight 7-axis robots for industrial applications.",
   "body": "Despite their extensive reach, these cobots are not only extremely strong and fast, but can also be deployed in the tightest of spaces thanks to the enormous maneuverability afforded by the 7th axis.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.kassowrobots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kassowrobots.com/"
    },
    "image": {
     "v": "/logos/kassow-robots.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/63d54839f7e09bd5bf27f6c2/645b68dcd1c7c9a474274ee9_Webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kastrup",
     "src": "https://dk.linkedin.com/company/kassow-robots-aps",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/kassow-robots-aps",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kajakvej, Kastrup, Capital Region of Denmark 2770, Denmark",
       "lat": 55.637465,
       "lon": 12.653981,
       "src": "https://dk.linkedin.com/company/kassow-robots-aps"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "borunte",
   "name": "Borunte",
   "summary": "BORUNTE is a brand of BORUNTE ROBOT CO,.",
   "body": "LTD, headquartered in Dongguan, Guangdong. BORUNTE has been committed to independent research and development of domestic industrial robots and manipulators, focusing on product quality and brand building.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.borunte.net/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.borunte.net/"
    },
    "image": {
     "v": "/logos/borunte.png",
     "fit": "contain",
     "src": "https://www.borunte.net/uploads/33708/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dongguan",
     "src": "https://cn.linkedin.com/company/borunte",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/borunte",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "NO.83, Shafu Road, Dongguan, Guangdong 523000, China",
       "lat": 23.018357,
       "lon": 113.745233,
       "src": "https://cn.linkedin.com/company/borunte"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "productive-robotics",
   "name": "Productive Robotics",
   "summary": "OB7 cobots are the simplest, most flexible, and cost effective collaborative robots.",
   "body": "With zero programming, existing staff can setup and operate OB7 instantly to automate thousands of different tasks. OB7 cobots increase efficiency and optimize productivity, improving your bottom line in a matter of days.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.productiverobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.productiverobotics.com/"
    },
    "image": {
     "v": "/logos/productive-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/45775f_1566b7c90c16407f8a00b359a6e5aea3%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/45775f_1566b7c90c16407f8a00b359a6e5aea3%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Carpinteria",
     "src": "https://www.linkedin.com/company/productiverobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/productiverobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1033 Cindy Lane, Carpinteria, California 93013, United States",
       "lat": 34.388037,
       "lon": -119.484053,
       "src": "https://www.linkedin.com/company/productiverobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sevensense-robotics",
   "name": "Sevensense Robotics",
   "summary": "Vision That Connects Fleets — ONE MAP, ALL VEHICLES Sevensense is the global leader in vision-based spatial intelligence for industrial vehicles.",
   "body": "Its cutting-edge Visual AI ecosystem enables shared maps and spatial awareness across entire fleets — from autonomous robots to manual forklifts — transforming how goods and vehicles move in dynamic environments.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.sevensense.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sevensense.ai/"
    },
    "image": {
     "v": "/logos/sevensense-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/5e2ed3c886f41759e22ec3e3/64a51e5057ec8fc7c5a05968_256x256-7s-symbol-color-RGB.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/sevensense-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/sevensense-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hardturmstrasse 123, Zurich, 8005, Switzerland",
       "lat": 47.392671,
       "lon": 8.514388,
       "src": "https://ch.linkedin.com/company/sevensense-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neobotix",
   "name": "Neobotix",
   "summary": "Neobotix is a leading manufacturer of industrial mobile robots and manipulators.",
   "body": "With two decades of experience, we offer a versatile array of standard platforms alongside fully tailored mobile robotics solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://neobotix-robots.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://neobotix-robots.com/"
    },
    "image": {
     "v": "/logos/neobotix.png",
     "fit": "contain",
     "src": "https://neobotix-robots.com/media/theme/Images/dist/LOGO_new.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Heilbronn",
     "src": "https://de.linkedin.com/company/neobotix",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/neobotix",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hahnstraße 2, Heilbronn, Baden-Württemberg 74080, Germany",
       "lat": 49.141708,
       "lon": 9.162476,
       "src": "https://de.linkedin.com/company/neobotix"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "keyi-tech",
   "name": "Keyi Tech",
   "summary": "We are an innovative robotics company founded on the idea that consumer robotics play an important role in family life now and in the future.",
   "body": "We dreamed of a better robot that people of all ages and creeds could learn from and grow with.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://keyirobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://keyirobot.com/"
    },
    "image": {
     "v": "/logos/keyi-tech.png",
     "fit": "contain",
     "src": "https://cdn.shopify.com/oxygen-v2/50995/88764/183249/5195864/assets/favicon-D2yAu5BH.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dover",
     "src": "https://www.linkedin.com/company/loonaofficial",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/loonaofficial",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8 The Green, Dover, Delaware 19901, United States",
       "lat": 39.156124,
       "lon": -75.523457,
       "src": "https://www.linkedin.com/company/loonaofficial"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "furhat-robotics",
   "name": "Furhat Robotics",
   "summary": "Furhat Robotics is robotics startup building social humanoid robots for research and innovation.",
   "body": "Furhat Robotics is a humanoid robotics and conversational AI company, building the next generation of humanoid social robots with with human-level conversational and social skills.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.furhatrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.furhatrobotics.com/"
    },
    "image": {
     "v": "/logos/furhat-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/66b323f041094f01cd836ea9/6735408e85046c471d33e6b5_furhat_favicon2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stockholm",
     "src": "https://se.linkedin.com/company/furhat-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://se.linkedin.com/company/furhat-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Torsgatan 39, Stockholm, Stockholm County 11362, Sweden",
       "lat": 59.34028,
       "lon": 18.038356,
       "src": "https://se.linkedin.com/company/furhat-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "promobot",
   "name": "Promobot",
   "summary": "Maker of service robots for business.",
   "body": "Headquartered in Perm, Russia.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.promo-bot.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.promo-bot.ai/"
    },
    "image": {
     "v": "/logos/promobot.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.promo-bot.ai&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Perm",
     "src": "https://promo-bot.ai/about-us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Russia",
     "src": "https://promo-bot.ai/about-us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kosmonavtov Highway 111A, Perm 614066, Russia",
       "lat": 57.987134,
       "lon": 56.194014,
       "src": "https://promo-bot.ai/about-us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "navel-robotics",
   "name": "Navel Robotics",
   "summary": "Social robot \"Navel\" for care settings.",
   "body": "I.e. we are working on making AI and Robotics intuitively accessible to everyone, integrating state of the art technologies in a way that is suitable for everyday life and thus touching people's hearts and bringing about positivity.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://navelrobotics.com/en/navel-the-new-empathy-robot-for-good-care/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://navelrobotics.com/"
    },
    "image": {
     "v": "/logos/navel-robotics.png",
     "fit": "contain",
     "src": "https://navelrobotics.com/wp-content/uploads/2018/10/cropped-navelrobotics_icon-1-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "München",
     "src": "https://de.linkedin.com/company/navel-robotics-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/navel-robotics-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Agnes-Pockels-Bogen 1, München, Bayern 80992, Germany",
       "lat": 48.173958,
       "lon": 11.532226,
       "src": "https://de.linkedin.com/company/navel-robotics-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intuition-robotics",
   "name": "Intuition Robotics",
   "summary": "Intuition Robotics is on a mission to care for our older adult population with an empathetic AI companion, allowing them to live healthier, happier and more independent lives.",
   "body": "Our ground breaking technology synthesizes empathy to create an AI companion that establishes a trusted relationship, maintains high engagement and drives behavior change in older adults.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.intuitionrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.intuitionrobotics.com/"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/intuition-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/intuition-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2345 Yale St, Palo Alto, California 94306, United States",
       "lat": 37.424607,
       "lon": -122.147132,
       "src": "https://www.linkedin.com/company/intuition-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "temi",
   "name": "Temi",
   "summary": "Maker of temi autonomous service robots for healthcare, hospitality, retail and delivery.",
   "body": "Founded in 2015, temi offers 24/7 engagement-efficient robots with an open Android SDK to integrate apps and any AI worldwide.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.robotemi.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robotemi.com/"
    },
    "image": {
     "v": "/logos/temi.png",
     "fit": "contain",
     "src": "https://www.robotemi.com/wp-content/uploads/2017/08/250-250-profile-pic.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.linkedin.com/company/robotemi",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/robotemi",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY 10013, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.linkedin.com/company/robotemi"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ottobock",
   "name": "Ottobock",
   "summary": "Ottobock, a global MedTech champion, combines over 100 years of tradition with outstanding innovative strength in the fields of prosthetics, neuro-orthotics and exoskeletons.",
   "body": "Ottobock develops innovative fitting solutions for people with limited mobility and is driving the digitalisation of the industry.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.ottobock.com/en-us/home",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ottobock.com/"
    },
    "image": {
     "v": "/logos/ottobock.png",
     "fit": "contain",
     "src": "https://www.ottobock.com/_next/static/media/logo.8070adf8.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Duderstadt",
     "src": "https://de.linkedin.com/company/ottobock",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/ottobock",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Max Näder Str. 15, Duderstadt, Niedersachsen 37115, Germany",
       "lat": 51.51446,
       "lon": 10.236628,
       "src": "https://de.linkedin.com/company/ottobock"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rewalk-lifeward",
   "name": "ReWalk (Lifeward)",
   "summary": "Introducing Lifeward, previously ReWalk Robotics.",
   "body": "Our mission at Lifeward is to relentlessly drive innovation to change the lives of individuals with physical limitations or disabilities. We are committed to delivering groundbreaking solutions that empower individuals to do what they love.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://golifeward.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://golifeward.com/"
    },
    "image": {
     "v": "/logos/rewalk-lifeward.png",
     "fit": "contain",
     "src": "https://golifeward.com/wp-content/uploads/2024/01/fav-icon-2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hudson",
     "src": "https://golifeward.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://golifeward.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2 Cabot Road, Hudson, MA 01749, United States",
       "lat": 42.379165,
       "lon": -71.559963,
       "src": "https://golifeward.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pillar-vc",
   "name": "Pillar VC",
   "summary": "Pillar VC is with you from the beginning.",
   "body": "We invest in scientists developing the breakthroughs that will define our future. Our thesis is simple: scientific progress has never been more crucial or more accelerated. Our team partners with technically brilliant dreamers who see past impossible to inevitable.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.pillar.vc/companies/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pillar.vc/"
    },
    "image": {
     "v": "/logos/pillar-vc.png",
     "fit": "contain",
     "src": "https://www.pillar.vc/wp-content/uploads/2020/04/5cdb195e77d52942b11153b8_NeuralMagic-Logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/pillar-vc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/pillar-vc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, Massachusetts, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://www.linkedin.com/company/pillar-vc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cybernetix-ventures",
   "name": "Cybernetix Ventures",
   "summary": "Cybernetix Ventures is a venture capital firm leading the way for investment into early-stage robotics, automation, and AI startups.",
   "body": "Cybernetix Ventures is a venture capital firm investing in pre-seed, seed, and Series A startups for manufacturing, logistics, construction, and healthcare.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://cybernetix.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cybernetix.vc/"
    },
    "image": {
     "v": "/logos/cybernetix-ventures.png",
     "fit": "contain",
     "src": "https://cybernetix.vc/wp-content/uploads/cropped-cv-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/cybernetix-ventures",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/cybernetix-ventures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, Massachusetts , United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://www.linkedin.com/company/cybernetix-ventures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "f-prime-capital",
   "name": "F-Prime Capital",
   "summary": "F-Prime enables companies to turn their boldest ambitions into world-changing breakthroughs in life sciences, technology, healthtech + services, and crypto.",
   "body": "Our legacy spans over 50 years, built on the belief that the best investors share the same entrepreneurial spirit of the founders they back—and that conviction still guides us today.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.fprimecapital.com/portfolio/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fprimecapital.com/"
    },
    "image": {
     "v": "/logos/f-prime-capital.png",
     "fit": "contain",
     "src": "https://www.fprimecapital.com/wp-content/themes/fprime/img/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.linkedin.com/company/f-prime-capital-partners",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/f-prime-capital-partners",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "One Main Street, Cambridge, MA 02142, United States",
       "lat": 42.36227,
       "lon": -71.083197,
       "src": "https://www.linkedin.com/company/f-prime-capital-partners"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "qiming-venture-partners",
   "name": "Qiming Venture Partners",
   "summary": "Qiming Venture Partners was founded in 2006.",
   "body": "Currently, Qiming Venture Partners manages eleven US Dollar funds and seven RMB funds with $9.5 billion in capital raised. Since our establishment, we have invested in outstanding companies in the Technology and Healthcare industries at the early and growth stages.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.qimingvc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.qimingvc.com/"
    },
    "image": {
     "v": "/logos/qiming-venture-partners.png",
     "fit": "contain",
     "src": "https://www.qimingvc.com/sites/all/themes/qiming/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/qiming-venture-partners",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/qiming-venture-partners",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Room 3901 Jinmao Tower, 88 Century Boulevard, Hong Kong, Hong Kong",
       "lat": 22.281833,
       "lon": 114.158283,
       "src": "https://hk.linkedin.com/company/qiming-venture-partners"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "calibrate-ventures",
   "name": "Calibrate Ventures",
   "summary": "Calibrate Ventures is an early-stage venture capital firm that partners with technical founders putting deep tech to work to transform major industries.",
   "body": "Calibrate uses its expertise in AI, computer vision, machine learning and robotics to invest in technologies with applications in food, health, logistics, and manufacturing.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.calibratevc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.calibratevc.com/"
    },
    "image": {
     "v": "/logos/calibrate-ventures.png",
     "fit": "contain",
     "src": "https://www.calibratevc.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.linkedin.com/company/calibrate-ventures",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/calibrate-ventures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "City of, Los Angeles, CA, United States",
       "lat": 34.164271,
       "lon": -118.467763,
       "src": "https://www.linkedin.com/company/calibrate-ventures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "promus-ventures",
   "name": "Promus Ventures",
   "summary": "An experienced and globally focused venture capital company, we are split between the US and Europe.",
   "body": "We partner with ambitious DeepTech entrepreneurs who leverage transformational technologies to digitize large, mature industries. We lead financing rounds, take board seats, and roll up our sleeves to help startups build world-class companies.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://promusventures.com/portfolio/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://promusventures.com/"
    },
    "image": {
     "v": "/logos/promus-ventures.png",
     "fit": "contain",
     "src": "https://promusventures.com/wp-content/themes/promus/assets/favicon/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chicago",
     "src": "https://www.linkedin.com/company/promus-ventures",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/promus-ventures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "30 S. Wacker Dr., Chicago, IL 60606, United States",
       "lat": 41.880863,
       "lon": -87.637529,
       "src": "https://www.linkedin.com/company/promus-ventures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sosv",
   "name": "SOSV",
   "summary": "SOSV is the most active deep tech venture capital firm globally, investing at pre-seed (or at startup inception) supporting visionary founders intent on making a profound impact on human and…",
   "body": "SOSV is the most active deep tech venture capital firm globally, investing at pre-seed (or at startup inception) supporting visionary founders intent on making a profound impact on human and planetary health.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://sosv.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sosv.com/"
    },
    "image": {
     "v": "/logos/sosv.png",
     "fit": "contain",
     "src": "https://sosv.com/wp-content/uploads/2022/05/cropped-sosv-favicon-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Princeton",
     "src": "https://www.linkedin.com/company/sosv",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/sosv",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "174 Nassau Street, #3000, Princeton, New Jersey 08542, United States",
       "lat": 40.349695,
       "lon": -74.659738,
       "src": "https://www.linkedin.com/company/sosv"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hax",
   "name": "HAX",
   "summary": "SOSV is the most active deep tech venture capital firm globally, investing at pre-seed (or at startup inception) supporting visionary founders intent on making a profound impact on human and…",
   "body": "SOSV is the most active deep tech venture capital firm globally, investing at pre-seed (or at startup inception) supporting visionary founders intent on making a profound impact on human and planetary health.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://hax.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hax.co/"
    },
    "image": {
     "v": "/logos/hax.png",
     "fit": "contain",
     "src": "https://hax.co/wp-content/uploads/2022/12/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Newark",
     "src": "https://www.linkedin.com/company/hax",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/hax",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2 Cedar St, Newark, New Jersey 07102, United States",
       "lat": 40.738484,
       "lon": -74.172163,
       "src": "https://www.linkedin.com/company/hax"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "translink-capital",
   "name": "Translink Capital",
   "summary": "Translink Capital is an early-stage venture capital firm based in Palo Alto with $1B under management, and investing out of its fifth fund.",
   "body": "The fund’s mission is to partner with US entrepreneurs, and add value by leveraging the firm’s proprietary insights and connections to strategic Asian partners.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.translinkcapital.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.translinkcapital.com/"
    },
    "image": {
     "v": "/logos/translink-capital.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/657895107455095e9638b77a/6583700f0537b7150f79eeda_favi-i2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/translink-capital",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/translink-capital",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "530 Lytton Avenue, Suite 300, Palo Alto, CA 94301, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://www.linkedin.com/company/translink-capital"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fusion-fund",
   "name": "Fusion Fund",
   "summary": "Fusion Fund invests in promising start-up companies who have technology barriers in their business models.",
   "body": "We invest in many industries including connected industries (robotics, mobility), network technologies (connectivity, security), artificial intelligence (computer vision, NLP), and digital health/medical devices. Our sweet spot are the Seed and Pre-A rounds.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.fusionfund.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fusionfund.com/"
    },
    "image": {
     "v": "/logos/fusion-fund.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/61428984cccb766c73716aaa/5d8933be-bf13-4fbe-aa03-b95060c2f3e6/favicon.ico?format=100w",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/fusion-fund",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/fusion-fund",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "550 Lytton Ave, Palo Alto, California 94301, United States",
       "lat": 37.44986,
       "lon": -122.159575,
       "src": "https://www.linkedin.com/company/fusion-fund"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "obvious-ventures",
   "name": "Obvious Ventures",
   "summary": "Venture capital for startups reimagining trillion-dollar industries through a world positive lens.",
   "body": "Headquartered in San Francisco, United States.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://obvious.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://obvious.com/"
    },
    "image": {
     "v": "/logos/obvious-ventures.png",
     "fit": "contain",
     "src": "https://obvious.com/wp-content/uploads/2025/10/obvious_founded_logo_v2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/obvious-ventures",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/obvious-ventures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "190 Pacific Ave, San Francisco, California 94111, United States",
       "lat": 37.797928,
       "lon": -122.399488,
       "src": "https://www.linkedin.com/company/obvious-ventures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sony-innovation-fund",
   "name": "Sony Innovation Fund",
   "summary": "For over 70 years Sony has been relentlessly innovating technology, content and services.",
   "body": "With the creation of Sony Innovation Fund in 2016, we are now investing in companies to journey along with us. Sony Innovation Fund is dedicated to engaging with promising early-stage companies.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.sonyinnovationfund.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sonyinnovationfund.com/"
    },
    "image": {
     "v": "/logos/sony-innovation-fund.png",
     "fit": "contain",
     "src": "https://www.sonyinnovationfund.com/images/h1_sonylogo_x2.gif",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://jp.linkedin.com/company/sonyinnovationfund",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/sonyinnovationfund",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1-7-1 Konan Minato-ku, Tokyo, Japan 108-0075, Japan",
       "lat": 35.656877,
       "lon": 139.696933,
       "src": "https://jp.linkedin.com/company/sonyinnovationfund"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "taiwania-capital",
   "name": "Taiwania Capital",
   "summary": "Taiwania Capital is a venture capital firm founded in August 2017 by the National Development Fund of the Executive Yuan along with private enterprises.",
   "body": "As of now, Taiwania Capital manages 8 funds and focuses on investing in early to growth-stage technology and biotech startups in Taiwan, the U.S., Japan, Southeast Asia and Central East Europe.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.taiwaniacapital.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.taiwaniacapital.com/"
    },
    "image": {
     "v": "/logos/taiwania-capital.png",
     "fit": "contain",
     "src": "https://www.taiwaniacapital.com/assets/img/apple-touch-icon-144x144.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Taipei",
     "src": "https://www.linkedin.com/company/taiwania-capital",
     "asof": "2026-11"
    },
    "country": {
     "v": "Taiwan",
     "src": "https://www.linkedin.com/company/taiwania-capital",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No. 333, Section 1,  Keelung Rd, Taipei, Taiwan 110, Taiwan",
       "lat": 24.152045,
       "lon": 120.668999,
       "src": "https://www.linkedin.com/company/taiwania-capital"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cdh-investments",
   "name": "CDH Investments",
   "summary": "Established in 2002, CDH Investments is one of the leading alternative investment fund managers focused on China today with over US$19 billion of assets under management, as of December 31, 2019.",
   "body": "CDH was founded by WU Shangzhi, JIAO Shuge and four other investment professionals who worked together in the direct investment department of China International Capital Corporation beginning in 1995.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.cdhfund.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cdhfund.com/"
    },
    "image": {
     "v": "/logos/cdh-investments.png",
     "fit": "contain",
     "src": "https://www.cdhfund.com/favicon.ico?v=20250805145840",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kowloon",
     "src": "https://hk.linkedin.com/company/cdh-investments",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/cdh-investments",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1503 International Commerce Center, Kowloon, Hong Kong",
       "lat": 22.304925,
       "lon": 114.1616,
       "src": "https://hk.linkedin.com/company/cdh-investments"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "linear-capital",
   "name": "Linear Capital",
   "summary": "We strive to be the best Data Intelligence Technology Fund in China.",
   "body": "The general characteristics of the companies we care about are: data-based, AI-driven, and commercially-applicable. As of today, the total valuation of companies invested by Linear Capital has reached approximately US $15 billion.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.linear.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.linear.vc/"
    },
    "image": {
     "v": "/logos/linear-capital.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68cd2653adabd6e406c6229a/68cd2653adabd6e406c6246e_Linear%20Webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "shanghai",
     "src": "https://cn.linkedin.com/company/linear-venture",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/linear-venture",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "381 Panyu Road, Changning District, shanghai, 200000, China",
       "lat": 31.206386,
       "lon": 121.425702,
       "src": "https://cn.linkedin.com/company/linear-venture"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "5y-capital",
   "name": "5Y Capital",
   "summary": "At 5Y Capital (formerly known as Morningside Venture Capital), when others see crazy ones, we see visionaries.",
   "body": "We believe that when great entrepreneurs who are crazy enough been trusted, they will build the world a better place.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.5ycap.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.5ycap.com/"
    },
    "image": {
     "v": "/logos/5y-capital.png",
     "fit": "contain",
     "src": "https://www.5ycap.com/public/1/b/1/e8b08b-a9c058-a04be3.192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.wikidata.org/wiki/Q107150573",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q107150573",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Qingpu, Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://www.wikidata.org/wiki/Q107150573"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zhenfund",
   "name": "ZhenFund",
   "summary": "ZhenFund is an early-stage venture capital firm backing bold founders with disruptive visions for the future.",
   "body": "We specialize in writing the first check to Chinese entrepreneurs and supporting them from the very beginning of their journey.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.zhenfund.com/en",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zhenfund.com/"
    },
    "image": {
     "v": "/logos/zhenfund.png",
     "fit": "contain",
     "src": "https://www.zhenfund.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "朝阳区",
     "src": "https://cn.linkedin.com/company/zhenfund",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/zhenfund",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "朝阳区, 北京市, China",
       "lat": 39.92045,
       "lon": 116.436911,
       "src": "https://cn.linkedin.com/company/zhenfund"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "source-code-capital",
   "name": "Source Code Capital",
   "summary": "Chinese venture firm investing across AI and robotics, smart manufacturing and other sectors.",
   "body": "Headquartered in Beijing, China.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://sourcecodecap.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sourcecodecap.com/"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.sourcecodecap.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.sourcecodecap.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "北京市朝阳区广顺南大街8号院1号楼利星行中心 (Lee Gardens Center, Building 1, 8 Guangshun South Street, Chaoyang District), Beijing, China",
       "lat": 39.92045,
       "lon": 116.436911,
       "src": "https://www.sourcecodecap.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cathay-innovation",
   "name": "Cathay Innovation",
   "summary": "Cathay Innovation is a multistage venture capital firm, affiliated to Cathay Capital, investing in founders building transformative businesses across Europe, North America, Asia, Latin America and…",
   "body": "Cathay Innovation is a multistage venture capital firm, affiliated to Cathay Capital, investing in founders building transformative businesses across Europe, North America, Asia, Latin America and Africa.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://cathayinnovation.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cathayinnovation.com/"
    },
    "image": {
     "v": "/logos/cathay-innovation.png",
     "fit": "contain",
     "src": "https://cathayinnovation.com/wp-content/uploads/2020/07/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://www.linkedin.com/company/cathay-innovation",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://www.linkedin.com/company/cathay-innovation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "52 rue d’Anjou, Paris, 75008, France",
       "lat": 48.873032,
       "lon": 2.322351,
       "src": "https://www.linkedin.com/company/cathay-innovation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xora-innovation",
   "name": "Xora Innovation",
   "summary": "Xora provides capital and commitment to AI and deep tech entrepreneurs transforming essential industries.",
   "body": "We focus our investments in three key sectors: AI Infrastructure, Applied AI, and Deep Tech.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://xora.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://xora.vc/"
    },
    "image": {
     "v": "/logos/xora-innovation.png",
     "fit": "contain",
     "src": "https://xora.vc/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/xora-innovation",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/xora-innovation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3 Fusionopolis Way, Singapore, 138633, Singapore",
       "lat": 1.298961,
       "lon": 103.788401,
       "src": "https://sg.linkedin.com/company/xora-innovation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "air-street-capital",
   "name": "Air Street Capital",
   "summary": "Air Street Capital is a venture capital firm investing in AI-first companies.",
   "body": "Air Street Capital is a venture capital firm investing exclusively in AI-first companies across frontier AI, infrastructure, autonomy, defense technology, and TechBio. Founded in 2019 by Nathan Benaich.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.airstreet.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.airstreet.com/"
    },
    "image": {
     "v": "/logos/air-street-capital.png",
     "fit": "contain",
     "src": "https://www.airstreet.com/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "St Peter Port",
     "src": "https://gg.linkedin.com/company/air-street-capital",
     "asof": "2026-11"
    },
    "country": {
     "v": "Guernsey",
     "src": "https://gg.linkedin.com/company/air-street-capital",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "St Peter Port, Guernsey",
       "lat": 49.456814,
       "lon": -2.538998,
       "src": "https://gg.linkedin.com/company/air-street-capital"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "balderton-capital",
   "name": "Balderton Capital",
   "summary": "Balderton is a multistage venture firm with 25 years of experience supporting Europe’s best founders from Seed to IPO.",
   "body": "We have both early and growth funds and invest across the technology sector.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.balderton.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.balderton.com/"
    },
    "image": {
     "v": "/logos/balderton-capital.png",
     "fit": "contain",
     "src": "https://www.balderton.com/wp-content/uploads/2018/05/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/balderton",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/balderton",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "28 Britannia Street, London, WC1X 9JF, United Kingdom",
       "lat": 51.529868,
       "lon": -0.118362,
       "src": "https://uk.linkedin.com/company/balderton"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cherry-ventures",
   "name": "Cherry Ventures",
   "summary": "We built the first wave of European tech.",
   "body": "We know what it takes to back the next. With offices in Berlin, London, and Stockholm, Cherry Ventures is Europe's leading early-stage venture firm championing founders who are poised to solve the most critical issues in society, environment and business.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://cherry.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cherry.vc/"
    },
    "image": {
     "v": "/logos/cherry-ventures.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/697f93ad7d63d775baed46f8/69adfb2aecd7a4b431782bf9_weblicp.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://de.linkedin.com/company/cherry-ventures",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/cherry-ventures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Linienstraße 214, Berlin, BE 10119, Germany",
       "lat": 52.528607,
       "lon": 13.405833,
       "src": "https://de.linkedin.com/company/cherry-ventures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hv-capital",
   "name": "HV Capital",
   "summary": "HV is one of the leading early-stage and growth investors in Europe.",
   "body": "With nine fund generations in 26 years and €2.8 bn in managed assets, HV is one of the continent's most active investors. The investment team has many years of experience in identifying European startups with great potential for success.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://hvcapital.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hvcapital.com/"
    },
    "image": {
     "v": "/logos/hv-capital.png",
     "fit": "contain",
     "src": "https://hvcapital.com/favicon.ico?favicon.28gntqil40fai.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "München",
     "src": "https://de.linkedin.com/company/hvcapital",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/hvcapital",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kaiserstraße 14b, München, Bayern 80801, Germany",
       "lat": 48.161074,
       "lon": 11.584581,
       "src": "https://de.linkedin.com/company/hvcapital"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "speedinvest",
   "name": "Speedinvest",
   "summary": "It takes more than capital to build real-world, cutting-edge technologies and companies that last.",
   "body": "That’s why we commit the full power of our sector-focused investment teams and global network of customers, talent, top-tier follow-on investors, industry leaders, and experienced entrepreneurs to help you scale smarter and faster.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.speedinvest.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.speedinvest.com/"
    },
    "image": {
     "v": "/logos/speedinvest.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68cd2f88ff7e8ea4589bdc82/6a857b47c05554c7602a5755_Speedinvest_favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wien",
     "src": "https://at.linkedin.com/company/speedinvest",
     "asof": "2026-11"
    },
    "country": {
     "v": "Austria",
     "src": "https://at.linkedin.com/company/speedinvest",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Praterstraße 1, Wien, 1020, Austria",
       "lat": 48.21272,
       "lon": 16.37979,
       "src": "https://at.linkedin.com/company/speedinvest"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kindred-capital",
   "name": "Kindred Capital",
   "summary": "At Kindred we align our ambitions and achievements with our portfolio - in structure and in spirit.",
   "body": "Every entrepreneur we invest in becomes a co- owner of the fund. We call it ‘equitable venture’. We invest early and work with our community of founders and advisers to help founders get further, faster from the very beginning.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://kindredcapital.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kindredcapital.vc/"
    },
    "image": {
     "v": "/logos/kindred-capital.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/djUNUVHKJCl3k1EXJk0tTkBMKL8.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/kindred-capital-vc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/kindred-capital-vc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "First Floor, London, EC1R0HA, United Kingdom",
       "lat": 51.514107,
       "lon": -0.123115,
       "src": "https://uk.linkedin.com/company/kindred-capital-vc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vsquared-ventures",
   "name": "Vsquared Ventures",
   "summary": "Vsquared backs what the world will depend on for generations.",
   "body": "Before consensus, before scale, before the headlines.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://vsquared.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vsquared.vc/"
    },
    "image": {
     "v": "/logos/vsquared-ventures.png",
     "fit": "contain",
     "src": "https://vsquared.vc/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/vsquared-ventures",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/vsquared-ventures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Bayern, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://de.linkedin.com/company/vsquared-ventures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "project-a",
   "name": "Project A",
   "summary": "Project A is a leading European early-stage investor with €1.2b AUM, championing ambitious tech founders from idea to scale.",
   "body": "We provide pre-seed and seed capital to firms shaping Europe's future across key themes including Fintech, European Resilience, Global Supply Chains, and the Future of Autonomous Work.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.project-a.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.project-a.vc/"
    },
    "image": {
     "v": "/logos/project-a.png",
     "fit": "contain",
     "src": "https://www.project-a.vc/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://de.linkedin.com/company/project-a-vc",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/project-a-vc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Julie-Wolfthorn-Straße 1, Berlin, 10115, Germany",
       "lat": 52.532394,
       "lon": 13.384618,
       "src": "https://de.linkedin.com/company/project-a-vc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "samsung-catalyst-fund",
   "name": "Samsung Catalyst Fund",
   "summary": "Samsung Catalyst Fund is Samsung Electronics’ multi-stage evergreen venture capital fund that invests in deep-tech infrastructure and data-enabled platforms.",
   "body": "Our sectors of interest span multiple domains including data center and cloud, artificial intelligence, networking and 5G, automotive, sensors, quantum computing and beyond.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://samsungcatalyst.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://samsungcatalyst.com/"
    },
    "image": {
     "v": "/logos/samsung-catalyst-fund.png",
     "fit": "contain",
     "src": "https://samsungcatalyst.com/app/themes/catalyst-2018/dist/images/svg/scf-logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/samsungcatalystfund",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/samsungcatalystfund",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3655 N 1st St, San Jose, California 95134, United States",
       "lat": 37.409187,
       "lon": -121.947324,
       "src": "https://www.linkedin.com/company/samsungcatalystfund"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mubadala",
   "name": "Mubadala",
   "summary": "Mubadala Investment Company is a global, sovereign investor with an entrepreneurial mindset and a mandate to create sustainable returns for Abu Dhabi.",
   "body": "Together, we build upon the legacy of the late Sheikh Zayed bin Sultan Al Nahyan, who envisioned a free, stable and dignified life for the people of this country.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.mubadala.com/en",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mubadala.com/"
    },
    "city": {
     "v": "Abu Dhabi",
     "src": "https://ae.linkedin.com/company/mubadala",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Arab Emirates",
     "src": "https://ae.linkedin.com/company/mubadala",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "(4th) Road & Mohamed Bin Khalifa (15th) Street, Abu Dhabi, 45005, United Arab Emirates",
       "lat": 24.453835,
       "lon": 54.377401,
       "src": "https://ae.linkedin.com/company/mubadala"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "radical-ventures",
   "name": "Radical Ventures",
   "summary": "Radical Ventures is a venture capital firm investing in entrepreneurs applying deep technology to transform massive industries.",
   "body": "With a primary focus on machine learning and artificial intelligence, Radical Ventures seeks to partner with exceptional entrepreneurs with global ambition to build enduring companies.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://radical.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://radical.vc/"
    },
    "image": {
     "v": "/logos/radical-ventures.png",
     "fit": "contain",
     "src": "https://radical.vc/wp-content/uploads/2026/08/cropped-radical-faviocn-512x512-1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toronto",
     "src": "https://ca.linkedin.com/company/radicalventures",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/radicalventures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Toronto, ON, Canada",
       "lat": 43.653482,
       "lon": -79.383935,
       "src": "https://ca.linkedin.com/company/radicalventures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "schematic-ventures",
   "name": "Schematic Ventures",
   "summary": "Schematic Ventures invests in technology that makes & moves the world.",
   "body": "Headquartered in San Francisco, United States.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.schematicventures.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.schematicventures.com/"
    },
    "image": {
     "v": "/logos/schematic-ventures.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/66facb4ee138379b35e87304/670d0cefd655e38efba5535c_Schematic%20Favicon%2002c.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/schematicvc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/schematicvc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/schematicvc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mac-venture-capital",
   "name": "MaC Venture Capital",
   "summary": "MaC Venture Capital is the result of the merger between successful Los Angeles and Bay Area based Seed funds, Cross Culture Ventures and M Ventures.",
   "body": "MaC Venture Capital is an early stage venture capital firm focused on finding ideas, technology, and products that can become infectious. We invest in technology companies that benefit from shifts in cultural trends and behaviors in an increasingly diverse global marketplace.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://macventurecapital.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://macventurecapital.com/"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.linkedin.com/company/mac-venture-capital",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/mac-venture-capital",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, CA, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.linkedin.com/company/mac-venture-capital"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "riot-ventures",
   "name": "Riot Ventures",
   "summary": "Modernizing the physical world",
   "body": "Headquartered in Los Angeles, United States.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://riot.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://riot.vc/"
    },
    "image": {
     "v": "/logos/riot-ventures.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/638f18bec1c3ba6c00dd2ac1/6400d853b215d6a6baf8fc77_riot-webclip.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://riot.vc/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://riot.vc/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1632 Abbot Kinney Blvd, Venice, CA 90291, United States",
       "lat": 33.989582,
       "lon": -118.463432,
       "src": "https://riot.vc/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "momenta-ventures",
   "name": "Momenta Ventures",
   "summary": "Momenta is the leading Industrial Impact® venture capital firm, accelerating industrial innovators across energy, manufacturing, smart spaces, and the supply chain.",
   "body": "For over a decade, our team of deep industry operators has helped scale industry leaders and innovators to improve critical industries, the environment, and people's quality of life.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://momenta.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://momenta.vc/"
    },
    "image": {
     "v": "/logos/momenta-ventures.png",
     "fit": "contain",
     "src": "https://momenta.vc/hubfs/Brand/Momenta-Logos/NEW-logo/Favicon-512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Meggen",
     "src": "https://ch.linkedin.com/company/momentavc",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/momentavc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Salachstrasse 8, Meggen, Lucerne 6045, Switzerland",
       "lat": 47.045486,
       "lon": 8.374066,
       "src": "https://ch.linkedin.com/company/momentavc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "superseed",
   "name": "SuperSeed",
   "summary": "SuperSeed is a venture capital firm in London that invests early in European tech founders working with Physical AI.",
   "body": "To us that’s manufacturing, energy, construction, supply, etc. the hard to reach business problems we face. We provide investment, expertise and network to help develop a repeatable, scalable and profitable business model and accelerate the journey to Series A.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.superseed.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.superseed.com/"
    },
    "image": {
     "v": "/logos/superseed.png",
     "fit": "contain",
     "src": "https://www.superseed.com/theme/images/logo/superseed-logo-white.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/superseed-vc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/superseed-vc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "231-232 Strand, London, England WC2R 1DA, United Kingdom",
       "lat": 51.514606,
       "lon": -0.116451,
       "src": "https://uk.linkedin.com/company/superseed-vc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ventech",
   "name": "Ventech",
   "summary": "Founded on the core principle that the next wave of tech is born in the startup streets - the natural environment of tomorrow’s innovation superstars - Ventech has been a pioneer on the European…",
   "body": "Founded on the core principle that the next wave of tech is born in the startup streets - the natural environment of tomorrow’s innovation superstars - Ventech has been a pioneer on the European venture capital scene for over two decades.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://ventechvc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ventechvc.com/"
    },
    "image": {
     "v": "/logos/ventech.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6655a20a701d893a90265aaa/6655a55812aa2a0f3d15db7d_webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://fr.linkedin.com/company/ventech",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/ventech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "47 avenue de l'Opéra, Paris, 75002, France",
       "lat": 48.869465,
       "lon": 2.332598,
       "src": "https://fr.linkedin.com/company/ventech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sydekick-robotics",
   "name": "Sydekick Robotics",
   "summary": "Sydekick Robotics is building the deployment layer for Physical AI, enabling robots to automate previously unautomatable tasks requiring human-like dexterity and adaptability with industrial-grade…",
   "body": "Sydekick Robotics is building the deployment layer for Physical AI, enabling robots to automate previously unautomatable tasks requiring human-like dexterity and adaptability with industrial-grade throughput, safety, and reliability.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://sydekickrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sydekickrobotics.com/"
    },
    "image": {
     "v": "/logos/sydekick-robotics.png",
     "fit": "contain",
     "src": "https://sydekickrobotics.com/__l5e/assets-v1/dd78b9d0-4dc4-4889-8f05-b2dc7a1d3631/sydekick-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brisbane ",
     "src": "https://au.linkedin.com/company/sydekick-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://au.linkedin.com/company/sydekick-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brisbane , Queensland, Australia",
       "lat": -27.468962,
       "lon": 153.023501,
       "src": "https://au.linkedin.com/company/sydekick-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "westmag",
   "name": "Westmag",
   "summary": "Westmag designs and manufactures BLDC motors and actuators, built in America for the next generation of autonomous machines.",
   "body": "American Motors for Drones and Robots. Engineered for performance. Built for scale. Built in America.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.westmag.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.westmag.com/"
    },
    "image": {
     "v": "/logos/westmag.png",
     "fit": "contain",
     "src": "https://www.westmag.com/apple-icon?0f7cdd02db0bb630",
     "asof": "2026-11"
    },
    "city": {
     "v": "South San Francisco",
     "src": "https://www.westmag.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.westmag.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "South San Francisco, CA, United States",
       "lat": 37.65354,
       "lon": -122.416866,
       "src": "https://www.westmag.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "reflection-robotics",
   "name": "Reflection Robotics",
   "summary": "Building the Robotic Workforce for Manufacturing.",
   "body": "Reflection Robotics automates high-precision repetitive tasks from a single demonstration, in hours instead of months. No thousands of demonstrations, no custom engineering — same-day automation for manufacturers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://reflectionrobotics.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://reflectionrobotics.co/"
    },
    "image": {
     "v": "/logos/reflection-robotics.png",
     "fit": "contain",
     "src": "https://reflectionrobotics.co/images/rr_logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://www.linkedin.com/company/reflection-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/reflection-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seattle, WA, United States",
       "lat": 47.603832,
       "lon": -122.330062,
       "src": "https://www.linkedin.com/company/reflection-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "graymatter-robotics",
   "name": "GrayMatter Robotics",
   "summary": "We’re solving the most difficult surface treatment and finishing challenges high-mix, high-variability manufacturers face with our advanced robotics and physics-informed AI technologies.",
   "body": "We are transforming the future of manufacturing with robotics and our proprietary GMR-AI™, designed into smart robotic cells that assist humans in tedious and ergonomically challenging tasks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://factory.graymatter-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://factory.graymatter-robotics.com/"
    },
    "image": {
     "v": "/logos/graymatter-robotics.png",
     "fit": "contain",
     "src": "https://factory.graymatter-robotics.com/wp-content/uploads/2026/01/cropped-gmr-icon-3-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.linkedin.com/company/graymatter-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/graymatter-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.linkedin.com/company/graymatter-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "macrodata-labs",
   "name": "Macrodata Labs",
   "summary": "Macrodata turns robot and egocentric video into training data using proprietary models and pipelines.",
   "body": "We process your recordings to produce timestamped subtask annotations, automated quality assessments, and 3D hand trajectories. Have challenging footage? Send us a small video sample for a free evaluation. macrodata.co",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://macrodata.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://macrodata.co/"
    },
    "image": {
     "v": "/logos/macrodata-labs.png",
     "fit": "contain",
     "src": "https://macrodata.co/icon-192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://fr.linkedin.com/company/macrodata-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/macrodata-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://fr.linkedin.com/company/macrodata-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "onward-robotics",
   "name": "Onward Robotics",
   "summary": "Onward Robotics delivers innovative automation technology that coordinates humans and robots as a cohesive system to revolutionize fulfillment.",
   "body": "Our Meet Me® solution combines Pyxis technology with Lumabot® autonomous mobile robots (AMRs) to increase efficiency in warehousing, distribution, and e-commerce operations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://onwardrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://onwardrobotics.com/"
    },
    "image": {
     "v": "/logos/onward-robotics.png",
     "fit": "contain",
     "src": "https://onwardrobotics.com/wp-content/uploads/2023/08/cropped-OR-Favicon-1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/onward-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/onward-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "250 48th St, Pittsburgh, Pennsylvania 15201, United States",
       "lat": 40.476254,
       "lon": -79.958279,
       "src": "https://www.linkedin.com/company/onward-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "memoriesai",
   "name": "Memories.ai",
   "summary": "Memories.ai is building video data infrastructure to accelerate progress toward physical superintelligence.",
   "body": "Our state of the art hardware, global collector network, and world-class data filtering platform is vertically integrated to ensure the highest quality training data for customers pushing the frontier in physical AI.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Model lab"
     ],
     "src": "https://memories.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://memories.ai/"
    },
    "image": {
     "v": "/logos/memoriesai.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a26a66c0461307a4feed480/6a4bf1776d260986ce3902db_WebClip.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/memoriesai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/memoriesai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/memoriesai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "phyagents",
   "name": "PhyAgents",
   "summary": "At PhyAgents, we're building the Claude Code for Physical AI: a robotic foundation model plus an agentic framework for reliable, long-horizon operations in industrial environments.",
   "body": "We're starting with a number of high-mix verticals where the work is mission-critical, the market is enormous, and fixed automation has never worked.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://phyagents.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://phyagents.com/"
    },
    "image": {
     "v": "/logos/phyagents.png",
     "fit": "contain",
     "src": "https://icons.duckduckgo.com/ip3/phyagents.com.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/phyagents",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/phyagents",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Jose, California, United States",
       "lat": 37.336166,
       "lon": -121.890591,
       "src": "https://www.linkedin.com/company/phyagents"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "orbifold-ai",
   "name": "Orbifold AI",
   "summary": "Orbifold is building the Human–Robot Learning Infrastructure - the distributed platform that enables every robot to learn from human experience.",
   "body": "Headquartered in Palo Alto, United States.",
   "data": {
    "roles": {
     "v": [
      "Compute",
      "Software developer"
     ],
     "src": "https://www.orbifold.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.orbifold.ai/"
    },
    "image": {
     "v": "/logos/orbifold-ai.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68e58b930f0c3e53f7ea9439/6aacd915540487467d0e5488_orbifold_ai_logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/orbifold-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/orbifold-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, California, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://www.linkedin.com/company/orbifold-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fabric",
   "name": "Fabric",
   "summary": "Fabric is a automated fulfillment technology company redefining how retailers automate and optimize fulfillment by bringing together proprietary robotics, software, AI, and operational expertise into…",
   "body": "Fabric is a automated fulfillment technology company redefining how retailers automate and optimize fulfillment by bringing together proprietary robotics, software, AI, and operational expertise into one integrated platform.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.getfabric.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.getfabric.com/"
    },
    "image": {
     "v": "/logos/fabric.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/66ebe77f6b0eb144deff3812/67e1ae19d7000324bba8b47b_256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.linkedin.com/company/fabriclogistics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/fabriclogistics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "524 Broadway, New York, 10012, United States",
       "lat": 40.72285,
       "lon": -73.998748,
       "src": "https://www.linkedin.com/company/fabriclogistics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ami-labs",
   "name": "AMI Labs",
   "summary": "AMI - Advanced Machine Intelligence - builds world-model-based AI that understands the real world.",
   "body": "We develop safe, controllable intelligent systems for industry, robotics, healthcare, and beyond.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://amilabs.xyz/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://amilabs.xyz/"
    },
    "image": {
     "v": "/logos/ami-labs.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6968f95cf64678111b0f9968/6970a7533cac6b6ee8014af0_webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://pitchbook.com/profiles/company/1232257-78",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://pitchbook.com/profiles/company/1232257-78",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "10 Rue de Penthièvre, 75008 Paris, France",
       "lat": 48.873093,
       "lon": 2.316565,
       "src": "https://pitchbook.com/profiles/company/1232257-78"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "overland-ai",
   "name": "Overland AI",
   "summary": "Ground combat is defined by unforgiving terrain, harsh conditions, and split-second decisions.",
   "body": "At Overland AI, we enhance ground power while protecting lives.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.overland.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.overland.ai/"
    },
    "image": {
     "v": "/logos/overland-ai.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a82557bdcdb492682708bdb/6a8268f82ac30f8359b3fb64_overland-mark.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://www.linkedin.com/company/overland-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/overland-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seattle, WA, United States",
       "lat": 47.603832,
       "lon": -122.330062,
       "src": "https://www.linkedin.com/company/overland-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "medra",
   "name": "Medra",
   "summary": "We're building Physical AI for the lab to unlock scientific breakthroughs",
   "body": "Scientists automate protocols with Medra’s autonomous robotic system.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.medra.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.medra.ai/"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/medra-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/medra-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/medra-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "abaka-ai",
   "name": "Abaka AI",
   "summary": "Abaka AI delivers human intelligence data for frontier AI, helping power advanced systems through a trustworthy data platform.",
   "body": "Abaka is all you need when building AI, providing comprehensive data processing support across the entire AI data lifecycle.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://www.abaka.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.abaka.ai/"
    },
    "image": {
     "v": "/logos/abaka-ai.png",
     "fit": "contain",
     "src": "https://www.abaka.ai/_next/static/media/logo_svg.1zfaostbntr0t.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.linkedin.com/company/abaka-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/abaka-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://www.linkedin.com/company/abaka-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "deepen-ai",
   "name": "Deepen AI",
   "summary": "Founded in 2017, Deepen AI is the only safety-first data lifecycle tools and services company focused on unlocking the potential of machine learning and AI for autonomous systems.",
   "body": "Our tools and services are customizable to suit the needs of enterprises as well as start-ups.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://deepen.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://deepen.ai/"
    },
    "image": {
     "v": "/logos/deepen-ai.png",
     "fit": "contain",
     "src": "https://deepen.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/deepen-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/deepen-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4353 N 1st St, San Jose, California 95134, United States",
       "lat": 37.420366,
       "lon": -121.96141,
       "src": "https://www.linkedin.com/company/deepen-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "imerit",
   "name": "iMerit",
   "summary": "Data annotation and evaluation for AI models and computer vision.",
   "body": "iMerit helps frontier AI labs, AI-native companies and enterprises build more accurate, reliable, and domain-aware models. iMerit delivers high-quality multimodal data across industries such as high-tech Generative AI, autonomous mobility, healthcare AI, and robotics.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://imerit.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://imerit.ai/"
    },
    "image": {
     "v": "/logos/imerit.png",
     "fit": "contain",
     "src": "https://imerit.ai/wp-content/uploads/2025/09/cropped-android-chrome-192x192-1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://in.linkedin.com/company/imerit",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://in.linkedin.com/company/imerit",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "160 West Santa Clara St, San Jose, California 95113, United States",
       "lat": 37.334562,
       "lon": -121.892948,
       "src": "https://in.linkedin.com/company/imerit"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robodk",
   "name": "RoboDK",
   "summary": "RoboDK software makes it easy to simulate and program industrial robots.",
   "body": "With RoboDK you can simulate over 1000 robots from 50 different robot manufacturers and generate error-free robot programs for any robot controller. RoboDK is a powerful and cost-effective simulator for robot arms.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://robodk.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robodk.com/"
    },
    "image": {
     "v": "/logos/robodk.png",
     "fit": "contain",
     "src": "https://cdn.robodk.com/icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montreal",
     "src": "https://ca.linkedin.com/company/robodk",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/robodk",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1250 Boulevard René-Lévesque O, Montreal, Quebec H3B, Canada",
       "lat": 45.503182,
       "lon": -73.569806,
       "src": "https://ca.linkedin.com/company/robodk"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "coppelia-robotics",
   "name": "Coppelia Robotics",
   "summary": "The company behind the CoppeliaSim / V-REP robotics simulator with 10'000+ downloads/month",
   "body": "CoppeliaSim is one of the most versatile and powerful robot simulation platform available. It is used for fast algorithm development, factory automation simulation, fast prototyping and verification, remote monitoring, safety double-checking, as digital twin, and much more.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://coppeliarobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://coppeliarobotics.com/"
    },
    "image": {
     "v": "/logos/coppelia-robotics.png",
     "fit": "contain",
     "src": "https://coppeliarobotics.com/assets/img/icons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/coppeliarobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/coppeliarobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Schweiz, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://ch.linkedin.com/company/coppeliarobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "energy-robotics",
   "name": "Energy Robotics",
   "summary": "Korial is the enterprise artificial intelligence platform that makes fully autonomous industrial operations possible – across any asset, any device, any environment, and any scale.",
   "body": "By unifying robots, drones, sensors, and data into one AI operating layer, it continuously turns raw telemetry into verified insight and orchestrated action that improves safety, reliability and efficiency.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.korial.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.korial.com/"
    },
    "image": {
     "v": "/logos/energy-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/69cba68755c8be38e980bc5c/69fdc04ce5ee9fa64c7bc247_Webclip%20(2).png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Darmstadt",
     "src": "https://de.linkedin.com/company/korialhq",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/korialhq",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hilpertstraße 31, Darmstadt, Hesse 64295, Germany",
       "lat": 49.862505,
       "lon": 8.623432,
       "src": "https://de.linkedin.com/company/korialhq"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "augmentus",
   "name": "Augmentus",
   "summary": "Augmentus is a robotics technology company that is a leader in robot vision and automated robot toolpath generation solutions.",
   "body": "Our proprietary technologies enable easy-to-use and rapid digitization of the work environment, automated robot motion generation, and an intuitive graphical interface that eliminates the need for robot expertise and downtime in robot programming.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.augmentus.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.augmentus.tech/"
    },
    "image": {
     "v": "/logos/augmentus.png",
     "fit": "contain",
     "src": "https://www.augmentus.tech/icon.svg?icon.0s_dg5yo7o4up.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://sg.linkedin.com/company/augmentus-tech",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://sg.linkedin.com/company/augmentus-tech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1501 Panther Loop, Austin, Texas 78660, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://sg.linkedin.com/company/augmentus-tech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flexxbotics",
   "name": "Flexxbotics",
   "summary": "Flexxbotics is the autonomous manufacturing platform for closed-loop production and Industrial AI.",
   "body": "The Flexxbotics Platform turns high compliance environments from reactive to proactive by extending the knowledge of experienced plant personnel to enable intelligent operations and factory optimization at scale.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://flexxbotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://flexxbotics.com/"
    },
    "image": {
     "v": "/logos/flexxbotics.png",
     "fit": "contain",
     "src": "https://flexxbotics.com/wp-content/uploads/2026/09/cropped-Favicon-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/flexxbotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/flexxbotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "12 Channel St, Boston, Massachusetts 02210, United States",
       "lat": 42.345492,
       "lon": -71.036844,
       "src": "https://www.linkedin.com/company/flexxbotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "spinea",
   "name": "Spinea",
   "summary": "We are a modern engineering company from Slovakia, engaged in the development, manufacturing and sales of high-precision reduction gears, marketed under the TwinSpin® trademark.",
   "body": "An invention by a Slovak engineer was the impulse for the establishment of SPINEA in 1994. We have come a long way since then, and still continue to offer the best qualitative standards of our products, which meet even the highest customer demands.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.spinea.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.spinea.com/"
    },
    "image": {
     "v": "/logos/spinea.png",
     "fit": "contain",
     "src": "https://www.spinea.com/media/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Haniska",
     "src": "https://sk.linkedin.com/company/spinea",
     "asof": "2026-11"
    },
    "country": {
     "v": "Slovakia",
     "src": "https://sk.linkedin.com/company/spinea",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ku Magašu 702/3, Haniska, District of Prešov 080 01, Slovakia",
       "lat": 48.951945,
       "lon": 21.250403,
       "src": "https://sk.linkedin.com/company/spinea"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wittenstein",
   "name": "WITTENSTEIN",
   "summary": "WITTENSTEIN offers all main technologies for electromagnetic drive systems: Servo gearboxes, servo motors, servo regulators, sensors, software, servo actuators.",
   "body": "Headquartered in Igersheim, Germany.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.wittenstein-group.com/en-us",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.wittenstein-group.com/"
    },
    "image": {
     "v": "/logos/wittenstein.png",
     "fit": "contain",
     "src": "https://www.wittenstein-group.com/_assets/69170282a9de2cd205002f9779c24fff/Icons/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Igersheim",
     "src": "https://www.wikidata.org/wiki/Q2586768",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q2586768",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Igersheim, Germany",
       "lat": 49.493567,
       "lon": 9.817934,
       "src": "https://www.wikidata.org/wiki/Q2586768"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tq-group",
   "name": "TQ-Group",
   "summary": "Can technology make the world a better place?",
   "body": "At TQ-Systems, we believe in this and are looking for people who want to do things together with us. With more than 1,400 employees, we produce and develop electronic assemblies at ten locations in Germany, one location in Switzerland and one in Shanghai.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.tq-group.com/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tq-group.com/"
    },
    "image": {
     "v": "/logos/tq-group.png",
     "fit": "contain",
     "src": "https://www.tq-group.com/fileadmin/html/img/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seefeld",
     "src": "https://de.linkedin.com/company/tq-group",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/tq-group",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mühlstraße 2, Gut Delling, Seefeld, Bavaria 82229, Germany",
       "lat": 48.058386,
       "lon": 11.236398,
       "src": "https://de.linkedin.com/company/tq-group"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "t-motor",
   "name": "T-Motor",
   "summary": "T-MOTOR is a global leading brand in propulsion systems for drones, specializing in high-performance propulsion solutions for commercial UAVs.",
   "body": "We focus on the research, development, and production of high-performance drone propulsion kits, including motors, electronic speed controllers (ESCs), and propellers.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://uav-en.tmotor.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://uav-en.tmotor.com/"
    },
    "image": {
     "v": "/logos/t-motor.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=uav-en.tmotor.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nanchang",
     "src": "https://cn.linkedin.com/company/nanchang-t-motor",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/nanchang-t-motor",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "24F, Block B, Twintowers, No.3399 Ziyang Ave., Nanchang, Jiangxi 330096, China",
       "lat": 28.67729,
       "lon": 115.899707,
       "src": "https://cn.linkedin.com/company/nanchang-t-motor"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "steadywin",
   "name": "Steadywin",
   "summary": "Maker of robot joint motors, power grippers and exoskeleton motors.",
   "body": "Headquartered in Nanchang, China.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://steadywin.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://steadywin.cn/"
    },
    "city": {
     "v": "Nanchang",
     "src": "https://www.steadywin.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.steadywin.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Jiayan Road, Honggutan District, Nanchang, Jiangxi, China",
       "lat": 28.647212,
       "lon": 116.034848,
       "src": "https://www.steadywin.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "touchlab",
   "name": "Touchlab",
   "summary": "Changing the robotics game with innovative tactile technology.",
   "body": "Giving touch to robots through cutting-edge haptics, we revolutionise robotic innovation for enhanced human-machine interaction. Discover more at touchlab.io.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.touchlab.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.touchlab.io/"
    },
    "image": {
     "v": "/logos/touchlab.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/3d73f8_8fd1f3650fe74a30a8435ad92f6aa42a%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/3d73f8_8fd1f3650fe74a30a8435ad92f6aa42a%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Edinburgh",
     "src": "https://find-and-update.company-information.service.gov.uk/company/SC607401",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://find-and-update.company-information.service.gov.uk/company/SC607401",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "The National Robotarium, Boundary Road North, Heriot-Watt University Research Park, Edinburgh EH14 4AS, United Kingdom",
       "lat": 55.953346,
       "lon": -3.188375,
       "src": "https://find-and-update.company-information.service.gov.uk/company/SC607401"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wootzano",
   "name": "Wootzano",
   "summary": "Wootzano Ltd produces highly dexterous robots for fruit and vegetable packaging such as tomatoes and grapes using our unique electronic skin and machine learning.",
   "body": "The robot picks, trims and packs complex fresh produce such as grapes and is the only one currently in the market to do so.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.wootzano.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.wootzano.com/"
    },
    "image": {
     "v": "/logos/wootzano.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/577adf_3956aec3119a464db80733f1ece81f4e%7Emv2_d_1500_1500_s_2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/577adf_3956aec3119a464db80733f1ece81f4e%7Emv2_d_1500_1500_s_2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Newcastle upon Tyne",
     "src": "https://www.wootzano.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wootzano.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Balliol Business Park East, Newcastle upon Tyne, ENG, United Kingdom",
       "lat": 54.973847,
       "lon": -1.613157,
       "src": "https://www.wootzano.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fingervision",
   "name": "FingerVision",
   "summary": "We are a university-launched start-up, whose core technology is the concept of “estimating tactile sensation based on an image (captured by a camera)”.",
   "body": "By using our FingerVision Sensors, the robot can perceive “multimodal” tactile sensation, such as force and slip distributions. This technology enables robots to manipulate objects as a human hand does.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.fingervision.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fingervision.jp/"
    },
    "city": {
     "v": "Koto",
     "src": "https://jp.linkedin.com/company/fingervision",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/fingervision",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2-4-14, Koto, Tokyo 1350016, Japan",
       "lat": 35.672775,
       "lon": 139.816962,
       "src": "https://jp.linkedin.com/company/fingervision"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pressure-profile-systems",
   "name": "Pressure Profile Systems",
   "summary": "Capturing the sense of touch: PPS is a world-leading capacitive tactile sensing and pressure mapping company, designing and manufacturing highly sensitive, repeatable solutions for advanced research…",
   "body": "Capturing the sense of touch: PPS is a world-leading capacitive tactile sensing and pressure mapping company, designing and manufacturing highly sensitive, repeatable solutions for advanced research and product development.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://pressureprofile.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://pressureprofile.com/"
    },
    "image": {
     "v": "/logos/pressure-profile-systems.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/5b6af56a96d455ed3c06b55a/71f3d61b-3fd8-4144-8f0e-56eab5b97721/favicon.ico?format=100w",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hawthorne, CA 90250",
     "src": "https://www.linkedin.com/company/pressureprofile",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/pressureprofile",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5500 W Rosecrans, Ave., Hawthorne, CA 90250, California 90250, United States",
       "lat": 34.070878,
       "lon": -118.44685,
       "src": "https://www.linkedin.com/company/pressureprofile"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mab-robotics",
   "name": "MAB Robotics",
   "summary": "The MAB's mission is to advance the frontier of technology to empower people with unprecedented capabilities and tools.",
   "body": "We develop innovative motion control solutions and robotic technologies to help industries reach beyond human capabilities - for a safer, cleaner, and brighter future. Interested in our services? Contact Us!",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.mabrobotics.pl/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mabrobotics.pl/"
    },
    "image": {
     "v": "/logos/mab-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/bb4753_b1a6bf4abf9243b7bbcc30b6036ce37a%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/bb4753_b1a6bf4abf9243b7bbcc30b6036ce37a%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Poznań",
     "src": "https://pl.linkedin.com/company/mabrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Poland",
     "src": "https://pl.linkedin.com/company/mabrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "27 lutego, Poznań, Wielkopolskie 61-744, Poland",
       "lat": 52.409614,
       "lon": 16.932001,
       "src": "https://pl.linkedin.com/company/mabrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ascento",
   "name": "Ascento",
   "summary": "Ascento helps security teams protect large outdoor sites with autonomous robotic guards.",
   "body": "Ascento Guard patrols private properties such as manufacturing plants, data centers, energy sites, logistics hubs, pharma facilities, and other critical infrastructures.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.ascento.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ascento.ai/"
    },
    "image": {
     "v": "/logos/ascento.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/64ef43b5288f862fa825106c/65000c1e4a833e9b6d2f28c2_ascento_webclip_logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/ascento-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/ascento-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Giesshübelstrasse 40, Zurich, ZH 8045, Switzerland",
       "lat": 47.358039,
       "lon": 8.520565,
       "src": "https://ch.linkedin.com/company/ascento-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gideon",
   "name": "Gideon",
   "summary": "Autonomous material handling robots for loading bays and warehouses.",
   "body": "That’s where transportation meets the warehouse or plant, and where safety, throughput, and shipment integrity are won or lost. Our autonomous forklift, TREY, loads and unloads trailers end to end, so operations run safer, more predictably, and around the clock.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.gideon.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gideon.ai/"
    },
    "image": {
     "v": "/logos/gideon.png",
     "fit": "contain",
     "src": "https://www.gideon.ai/wp-content/themes/gideon-web-2022/static/ui/favicon/android-chrome-512x512.png?x10410",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chicago",
     "src": "https://hr.linkedin.com/company/gideonrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://hr.linkedin.com/company/gideonrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chicago, IL, United States",
       "lat": 41.875562,
       "lon": -87.624421,
       "src": "https://hr.linkedin.com/company/gideonrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "forwardx-robotics",
   "name": "ForwardX Robotics",
   "summary": "ForwardX Robotics is a global leader in vision-based autonomous intralogistics.",
   "body": "We deliver industrial-grade automation for warehousing and manufacturing environments. Built on deep expertise in computer vision and robotics software, ForwardX offers a full portfolio of AMRs and autonomous forklifts.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.forwardx.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.forwardx.com/"
    },
    "image": {
     "v": "/logos/forwardx-robotics.png",
     "fit": "contain",
     "src": "https://www.forwardx.com/wp-content/uploads/2023/01/logo-606_228.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "California",
     "src": "https://www.linkedin.com/company/forwardx-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/forwardx-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "California, California, United States",
       "lat": 38.297486,
       "lon": -76.493365,
       "src": "https://www.linkedin.com/company/forwardx-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "syrius-robotics",
   "name": "Syrius Robotics",
   "summary": "Maker of AI-driven autonomous mobile robots for warehouses.",
   "body": "Headquartered in Shenzhen, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.syriustechnology.com:443/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.syriustechnology.com:443/"
    },
    "image": {
     "v": "/logos/syrius-robotics.png",
     "fit": "contain",
     "src": "https://www.syriustechnology.com/hubfs/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://og.mhi.org/members/106538",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://og.mhi.org/members/106538",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Room 401, Block D, Building 7, Shenzhen International Innovation Valley, Dashi 1st Road, Xili Subdistrict, Nanshan District, Shenzhen, Guangdong, China",
       "lat": 22.536014,
       "lon": 113.925622,
       "src": "https://og.mhi.org/members/106538"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mushiny",
   "name": "Mushiny",
   "summary": "Explore warehouse automation solutions including Goods-to-Person, Smart Put wall, High-Bay Storage and Conveyor systems, designed to enhance efficiency and flexibility across industries from Mushiny.",
   "body": "Headquartered in Suzhou, China.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.mushiny.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mushiny.com/"
    },
    "image": {
     "v": "/logos/mushiny.png",
     "fit": "contain",
     "src": "https://iprorwxhiqlkjl5q-static.micyjz.com/cloud/lmBpnKopjnSRkkonorqjjq/LOGO1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Suzhou",
     "src": "https://www.mushiny.com/contactus.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.mushiny.com/contactus.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4th Floor, Sanjiang Building, Southeast University Suzhou Campus, 399 Linquan Street, Suzhou, Jiangsu, China",
       "lat": 31.311123,
       "lon": 120.621288,
       "src": "https://www.mushiny.com/contactus.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "knapp",
   "name": "KNAPP",
   "summary": "Experience our unique KNAPP spirit.",
   "body": "Catch up on the latest company news. Receive stories and first-hand experience from our customers and employees. Gain comprehensive insights into our technology and service portfolio. Great that you are here. Looking forward to getting in touch with you.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://www.knapp.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.knapp.com/"
    },
    "image": {
     "v": "/logos/knapp.png",
     "fit": "contain",
     "src": "https://www.knapp.com/wp-content/uploads/cropped-knapp_logo_black_favicon-192x192.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hart bei Graz",
     "src": "https://at.linkedin.com/company/knapp-ag",
     "asof": "2026-11"
    },
    "country": {
     "v": "Austria",
     "src": "https://at.linkedin.com/company/knapp-ag",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Guenter-Knapp-Straße 5-7, Hart bei Graz, 8075, Austria",
       "lat": 47.042858,
       "lon": 15.509776,
       "src": "https://at.linkedin.com/company/knapp-ag"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "swisslog",
   "name": "Swisslog",
   "summary": "SWISSLOG - A GLOBAL PROVIDER OF DATA-DRIVEN AND ROBOTIC INTRALOGISTICS SOLUTIONS The right level of automation at your distribution facility sets you in the direction of success.",
   "body": "Swisslog designs, develops and delivers a wide range of automation solutions, from tote to pallet-based, goods-to-person technologies, intelligent software and self-learning robotics.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://www.swisslog.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.swisslog.com/"
    },
    "image": {
     "v": "/logos/swisslog.png",
     "fit": "contain",
     "src": "https://www.swisslog.com/-/media/swisslog/images/system/swisslog-signet.svg?rev=72d49fc137254ead98b9e3deadd4f341&amp;hash=825E814061396B5535000E3FC945CF28",
     "asof": "2026-11"
    },
    "city": {
     "v": "Buchs/Aarau",
     "src": "https://ch.linkedin.com/company/swisslog",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/swisslog",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Webereiweg 3, Buchs/Aarau, AG 5033, Switzerland",
       "lat": 47.391586,
       "lon": 8.069456,
       "src": "https://ch.linkedin.com/company/swisslog"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tgw-logistics",
   "name": "TGW Logistics",
   "summary": "TGW Logistics is a foundation-owned company headquartered in Austria and a global leader in warehouse automation and warehouse logistics.",
   "body": "As a trusted systems integrator with more than 50 years of experience, we deliver end-to-end services: designing, implementing, and maintaining fulfillment centers powered by mechatronics, robotics, and advanced software solutions.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://www.tgw-group.com/us/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tgw-group.com/"
    },
    "image": {
     "v": "/logos/tgw-logistics.png",
     "fit": "contain",
     "src": "https://www.tgw-group.com/_assets/0f99b295b92c88ae982e4831f7caa0fa/Icons/Favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Marchtrenk",
     "src": "https://at.linkedin.com/company/tgw-group",
     "asof": "2026-11"
    },
    "country": {
     "v": "Austria",
     "src": "https://at.linkedin.com/company/tgw-group",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ludwig Szinicz Straße 3, Marchtrenk, Oberösterreich 4614, Austria",
       "lat": 48.187404,
       "lon": 14.099496,
       "src": "https://at.linkedin.com/company/tgw-group"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dematic",
   "name": "Dematic",
   "summary": "The Mind Behind the Machine Dematic is a trusted partner in intelligent automation for the supply chain, helping organizations design, build, and evolve solutions that perform in the real world.",
   "body": "Your operation in mind. Always. We design solutions that think ahead, supporting better decisions across manufacturing, warehousing, and distribution.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://www.dematic.com/en-us/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dematic.com/"
    },
    "image": {
     "v": "/logos/dematic.png",
     "fit": "contain",
     "src": "https://www.dematic.com/content/dam/dematic/images/brand/dematic-apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Atlanta",
     "src": "https://www.linkedin.com/company/dematic",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/dematic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "756 W Peachtree St NW, Atlanta, Georgia 30308, United States",
       "lat": 33.776839,
       "lon": -84.386938,
       "src": "https://www.linkedin.com/company/dematic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ottopia",
   "name": "Ottopia",
   "summary": "Ottopia offers the first Hybrid AI platform for vehicles | Human + AI > AI.",
   "body": "Ottopia powers driverless experiences by combining the best of artificial and human intelligence, setting the standard for scalable unmanned ground operations.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.ottopia.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ottopia.tech/"
    },
    "image": {
     "v": "/logos/ottopia.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/658b120861cdc354345cde9f/659d2d8769c2c052fa3a8892_Webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tel Aviv",
     "src": "https://il.linkedin.com/company/ottopia",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/ottopia",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hamelacha st. 2, Tel Aviv, 6721502, Israel",
       "lat": 32.022198,
       "lon": 34.861962,
       "src": "https://il.linkedin.com/company/ottopia"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fernride",
   "name": "Fernride",
   "summary": "At FERNRIDE, we believe in a future where robotics unlocks human potential to create a better world.",
   "body": "Yet today, humans still perform repetitive, risky tasks to keep our world running. These jobs, essential yet unattractive, should be performed by robots, which still fall short. We are on a mission to change that and transform critical industries through human-centric automation.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://fernride.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://fernride.com/"
    },
    "image": {
     "v": "/logos/fernride.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/5fa51840490fb91334d17311/6281fc2b7980b64d5699c0f1_webclip.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/fernride",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/fernride",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ingoldstädter Straße 172-180,, Munich, 80939, Germany",
       "lat": 48.176893,
       "lon": 11.532563,
       "src": "https://de.linkedin.com/company/fernride"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vay",
   "name": "Vay",
   "summary": "Vay's door-to-door car rental service is live in central Las Vegas, Nevada!",
   "body": "Experience the convenience of by-the-minute rental cars delivered driverlessly to your location. Download the \"Vay Rent Cars by the Minute\" app and take a ride today! https://vay.onelink.me/BXfV/3n0ectu7 Vay develops automotive-grade technology for remote driving.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://vay.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vay.io/"
    },
    "image": {
     "v": "/logos/vay.png",
     "fit": "contain",
     "src": "https://vay.io/wp-content/smush-webp/2025/07/vay-icon.png.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://de.linkedin.com/company/vaytechnology",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/vaytechnology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mariendorfer Damm 1, Berlin, 12099, Germany",
       "lat": 52.45374,
       "lon": 13.38556,
       "src": "https://de.linkedin.com/company/vaytechnology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "imagry",
   "name": "Imagry",
   "summary": "Imagry is pioneering Generative Autonomy: real-time intelligence that drives machines in the physical world.",
   "body": "Our AI-centric platform, Imagry Cortex™, delivers vision-based autonomy without HD maps, LiDAR, or the cloud. Unlike rule-based systems, Cortex learns from experience and adapts to any road, vehicle, or condition, just like a human, only better.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://imagry.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://imagry.co/"
    },
    "image": {
     "v": "/logos/imagry.png",
     "fit": "contain",
     "src": "https://imagry.co/wp-content/uploads/2023/03/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/imagry",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/imagry",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1630 Old Oakland Rd, San Jose, California 95131, United States",
       "lat": 37.381216,
       "lon": -121.895246,
       "src": "https://www.linkedin.com/company/imagry"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cognata",
   "name": "Cognata",
   "summary": "Cognata provides a realistic automotive simulation platform where virtual cars travel virtual roads in digital twins, from cities to unmarked terrain, all remarkably true to real-world weather and…",
   "body": "Cognata provides a realistic automotive simulation platform where virtual cars travel virtual roads in digital twins, from cities to unmarked terrain, all remarkably true to real-world weather and road conditions.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.cognata.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cognata.com/"
    },
    "image": {
     "v": "/logos/cognata.png",
     "fit": "contain",
     "src": "https://www.cognata.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rehovot",
     "src": "https://il.linkedin.com/company/cognata-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/cognata-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2 Pekeris, Rehovot, Israel 7670202, Israel",
       "lat": 31.911002,
       "lon": 34.80596,
       "src": "https://il.linkedin.com/company/cognata-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botsync",
   "name": "Botsync",
   "summary": "Botsync helps enterprises automate their intralogistics processes through our industry-first no-code automation platform and fleet of autonomous mobile robots.",
   "body": "Botsync turns your factory or warehouse into one intelligent operation, so your lines never wait.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.botsync.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.botsync.co/"
    },
    "image": {
     "v": "/logos/botsync.png",
     "fit": "contain",
     "src": "https://www.botsync.co/icon.svg?icon.0n5cji8mbdjdr.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/botsync",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/botsync",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "79 Joo Koon Circle, Singapore, 629107, Singapore",
       "lat": 1.328253,
       "lon": 103.676822,
       "src": "https://sg.linkedin.com/company/botsync"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "niqo-robotics",
   "name": "Niqo Robotics",
   "summary": "Niqo Robotics (Formerly Tartan Aerial Sense Tech Private Limited) is a climate-smart deep tech company in agriculture.",
   "body": "Niqo believes that an AI-powered revolution will play a pivotal role in scaling climate-smart cultivation practices to secure the world's food future.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://niqorobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://niqorobotics.com/"
    },
    "image": {
     "v": "/logos/niqo-robotics.png",
     "fit": "contain",
     "src": "https://niqorobotics.com/wp-content/uploads/niqo-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bangalore",
     "src": "https://in.linkedin.com/company/niqorobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/niqorobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1074-A, 11th Main Rd, 8th cross, HAL 2nd Stage, Appareddipalya, Indiranagar, Bangalore, Karnataka 560038, India",
       "lat": 12.981068,
       "lon": 77.644364,
       "src": "https://in.linkedin.com/company/niqorobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "systemantics",
   "name": "Systemantics",
   "summary": "Systemantics is an Industrial Robotics company headquartered out of Bangalore, India.",
   "body": "We are on a mission to enable widespread adoption of flexible automation in industry.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.systemantics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.systemantics.com/"
    },
    "image": {
     "v": "/logos/systemantics.png",
     "fit": "contain",
     "src": "https://www.systemantics.com/wp-content/uploads/2021/11/logo-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bangalore",
     "src": "https://in.linkedin.com/company/systemantics-india",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/systemantics-india",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "#40, 23rd Main, 36th Cross, Jayanagar 4th T Block, Bangalore, Karnataka 560041, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://in.linkedin.com/company/systemantics-india"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yujin-robot",
   "name": "Yujin Robot",
   "summary": "Yujin Robot provides comprehensive smart factory solutions in line with Industry 4.0 and Logistics 4.0, covering factory automation, autonomous mobile robots (AMRs), and robotization services powered…",
   "body": "Yujin Robot provides comprehensive smart factory solutions in line with Industry 4.0 and Logistics 4.0, covering factory automation, autonomous mobile robots (AMRs), and robotization services powered by LiDAR sensors, SLAM technology, and advanced navigation software.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.yujinrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.yujinrobot.com/"
    },
    "image": {
     "v": "/logos/yujin-robot.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/4fe3ae_154261ac121547fcaa9eb025f949d2e4%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/4fe3ae_154261ac121547fcaa9eb025f949d2e4%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Incheon",
     "src": "https://kr.linkedin.com/company/yujinrobot",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/yujinrobot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "33 Harmony-ro 187beon-gil Yeonsu-gu, Incheon, 22013, South Korea",
       "lat": 37.377558,
       "lon": 126.643467,
       "src": "https://kr.linkedin.com/company/yujinrobot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tier-iv",
   "name": "Tier IV",
   "summary": "TIER IV stands at the forefront of deep-tech innovation, pioneering Autoware, open-source software for autonomous driving.",
   "body": "With a comprehensive suite of platforms and services built around Autoware, TIER IV provides everything from software development and vehicle procurement to operational support.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://tier4.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tier4.co.jp/"
    },
    "image": {
     "v": "/logos/tier-iv.png",
     "fit": "contain",
     "src": "https://tier4.co.jp/hubfs/files/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://jp.linkedin.com/company/tier-iv-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/tier-iv-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Shinagawa-ku, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://jp.linkedin.com/company/tier-iv-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "brown-university",
   "name": "Brown University",
   "summary": "Private university in Providence, Rhode Island, United States.",
   "body": "Recent robotics work includes “Multi-Robot Motion Planning with Diffusion Models”. OpenAlex lists 110 robotics, humanoid, embodied-AI or manipulation papers from Brown University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2410.03072",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.brown.edu/"
    },
    "image": {
     "v": "/logos/brown-university.png",
     "fit": "contain",
     "src": "https://www.brown.edu/themes/custom/brown/static/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Providence",
     "src": "https://www.wikidata.org/wiki/Q49114",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q49114",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Providence, United States",
       "lat": 41.826111,
       "lon": -71.403056,
       "src": "https://www.wikidata.org/wiki/Q49114"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "northeastern-university",
   "name": "Northeastern University",
   "summary": "Private university in Boston, Massachusetts, USA.",
   "body": "Robotics: Home - Institute for Experiential Robotics.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.northeastern.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.northeastern.edu/"
    },
    "image": {
     "v": "/logos/northeastern-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Northeastern_Wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.wikidata.org/wiki/Q37548",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q37548",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, United States",
       "lat": 42.34,
       "lon": -71.088333,
       "src": "https://www.wikidata.org/wiki/Q37548"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-massachusetts-amherst",
   "name": "University of Massachusetts Amherst",
   "summary": "Public university in Massachusetts, United States.",
   "body": "Robotics: Home Page : Robotics @ UMass Amherst : UMass Amherst.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.umass.edu/robotics/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.umass.edu/"
    },
    "image": {
     "v": "/logos/university-of-massachusetts-amherst.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/UMassAmherst_logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Amherst",
     "src": "https://www.wikidata.org/wiki/Q15142",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q15142",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Amherst, United States",
       "lat": 42.388889,
       "lon": -72.527778,
       "src": "https://www.wikidata.org/wiki/Q15142"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-maryland",
   "name": "University of Maryland",
   "summary": "Public research university in the city of College Park in Prince George's County, Maryland, USA.",
   "body": "Robotics: Maryland Robotics Center.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.umd.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://umd.edu/"
    },
    "image": {
     "v": "/logos/university-of-maryland.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Maryland_wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "College Park",
     "src": "https://www.wikidata.org/wiki/Q503415",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q503415",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "College Park, United States",
       "lat": 38.988056,
       "lon": -76.9425,
       "src": "https://www.wikidata.org/wiki/Q503415"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "purdue-university",
   "name": "Purdue University",
   "summary": "Public research university in West Lafayette, Indiana, United States.",
   "body": "Robotics: Purdue Robotics Accelerator.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.purdue.edu/robotics/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://purdue.edu/"
    },
    "image": {
     "v": "/logos/purdue-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Purdue_University_system_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "West Lafayette",
     "src": "https://www.wikidata.org/wiki/Q217741",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q217741",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "West Lafayette, United States",
       "lat": 40.425,
       "lon": -86.923056,
       "src": "https://www.wikidata.org/wiki/Q217741"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rice-university",
   "name": "Rice University",
   "summary": "Private university in Houston, Texas, USA.",
   "body": "Robotics: Rice Robotics Initiative.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.rice.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rice.edu/"
    },
    "image": {
     "v": "/logos/rice-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Rice_University_Logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Houston",
     "src": "https://www.wikidata.org/wiki/Q842909",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q842909",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Houston, United States",
       "lat": 29.716944,
       "lon": -95.402778,
       "src": "https://www.wikidata.org/wiki/Q842909"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yale-university",
   "name": "Yale University",
   "summary": "Private university in New Haven, Connecticut.",
   "body": "Recent robotics work includes “Principles and Guidelines for Evaluating Social Robot Navigation Algorithms”. OpenAlex lists 162 robotics, humanoid, embodied-AI or manipulation papers from Yale University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1145/3700599",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://yale.edu/"
    },
    "image": {
     "v": "/logos/yale-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Yale_University_Shield_1.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "New Haven",
     "src": "https://www.wikidata.org/wiki/Q49112",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q49112",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New Haven, United States",
       "lat": 41.311111,
       "lon": -72.926667,
       "src": "https://www.wikidata.org/wiki/Q49112"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "duke-university",
   "name": "Duke University",
   "summary": "Private university in Durham, North Carolina, USA.",
   "body": "Robotics: Duke Robotics.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.duke.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://duke.edu/"
    },
    "image": {
     "v": "/logos/duke-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Duke_University_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Durham",
     "src": "https://www.wikidata.org/wiki/Q168751",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q168751",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Durham, United States",
       "lat": 36.001111,
       "lon": -78.938889,
       "src": "https://www.wikidata.org/wiki/Q168751"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "northwestern-university",
   "name": "Northwestern University",
   "summary": "Private university in Evanston, Illinois, U.S.",
   "body": "Robotics: Center for Robotics and Biosystems - Northwestern University.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.northwestern.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.northwestern.edu/"
    },
    "image": {
     "v": "/logos/northwestern-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Northwestern_University.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Evanston",
     "src": "https://www.wikidata.org/wiki/Q309350",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q309350",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Evanston, United States",
       "lat": 42.056459,
       "lon": -87.675267,
       "src": "https://www.wikidata.org/wiki/Q309350"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-chicago",
   "name": "University of Chicago",
   "summary": "Private university in Chicago, Illinois.",
   "body": "Recent robotics work includes “GRAPE: Generalizing Robot Policy via Preference Alignment”. OpenAlex lists 164 robotics, humanoid, embodied-AI or manipulation papers from University of Chicago since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/icra57385.2026.11695972",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://uchicago.edu/"
    },
    "image": {
     "v": "/logos/university-of-chicago.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Chicago_wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chicago",
     "src": "https://www.wikidata.org/wiki/Q131252",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q131252",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chicago, United States",
       "lat": 41.789722,
       "lon": -87.599722,
       "src": "https://www.wikidata.org/wiki/Q131252"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "toyota-technological-institute-at-chicago",
   "name": "Toyota Technological Institute at Chicago",
   "summary": "Private college focused on computer science.",
   "body": "Robotics: TTIC Robotics.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.ttic.edu/robotics/",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.ttic.edu/"
    },
    "image": {
     "v": "/logos/toyota-technological-institute-at-chicago.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.ttic.edu&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chicago",
     "src": "https://www.wikidata.org/wiki/Q7830888",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q7830888",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chicago, United States",
       "lat": 41.784722,
       "lon": -87.592778,
       "src": "https://www.wikidata.org/wiki/Q7830888"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-minnesota",
   "name": "University of Minnesota",
   "summary": "Public research university in Minneapolis and Saint Paul, Minnesota, United States.",
   "body": "Recent robotics work includes “Safety Aware Task Planning via Large Language Models in Robotics”. OpenAlex lists 118 robotics, humanoid, embodied-AI or manipulation papers from University of Minnesota since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/iros60139.2025.11246041",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://twin-cities.umn.edu/"
    },
    "image": {
     "v": "/logos/university-of-minnesota.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Minnesota_wordmark.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Minneapolis",
     "src": "https://www.wikidata.org/wiki/Q238101",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q238101",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Minneapolis, United States",
       "lat": 44.975,
       "lon": -93.235278,
       "src": "https://www.wikidata.org/wiki/Q238101"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arizona-state-university",
   "name": "Arizona State University",
   "summary": "Public university in Tempe, Arizona, US.",
   "body": "Recent robotics work includes “Service robots in healthcare: Toward a healthcare service robot acceptance model (sRAM)”. OpenAlex lists 179 robotics, humanoid, embodied-AI or manipulation papers from Arizona State University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.techsoc.2025.102932",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.asu.edu/"
    },
    "image": {
     "v": "/logos/arizona-state-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Arizona_State_University_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tempe",
     "src": "https://www.wikidata.org/wiki/Q670897",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q670897",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tempe, United States",
       "lat": 33.416944,
       "lon": -111.936111,
       "src": "https://www.wikidata.org/wiki/Q670897"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-utah",
   "name": "University of Utah",
   "summary": "Public coeducational space-grant research university in Salt Lake City, Utah, United States.",
   "body": "Recent robotics work includes “The Reality Gap in Robotics: Challenges, Solutions, and Best Practices”. OpenAlex lists 82 robotics, humanoid, embodied-AI or manipulation papers from University of Utah since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1146/annurev-control-031924-100130",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.utah.edu/"
    },
    "image": {
     "v": "/logos/university-of-utah.png",
     "fit": "contain",
     "src": "https://templates.utah.edu/_main-v3-1/images/template/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Salt Lake City",
     "src": "https://www.wikidata.org/wiki/Q168515",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q168515",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Salt Lake City, United States",
       "lat": 40.764167,
       "lon": -111.846389,
       "src": "https://www.wikidata.org/wiki/Q168515"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-colorado-boulder",
   "name": "University of Colorado Boulder",
   "summary": "Public university in Boulder, Colorado, United States, and flagship of the University of Colorado System.",
   "body": "Recent robotics work includes “Advancing physical intelligence for autonomous soft robots”. OpenAlex lists 82 robotics, humanoid, embodied-AI or manipulation papers from University of Colorado Boulder since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1126/scirobotics.ads1292",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.colorado.edu/"
    },
    "image": {
     "v": "/logos/university-of-colorado-boulder.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/UC_Boulder_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boulder",
     "src": "https://www.wikidata.org/wiki/Q736674",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q736674",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boulder, United States",
       "lat": 40.006667,
       "lon": -105.267222,
       "src": "https://www.wikidata.org/wiki/Q736674"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-california-santa-barbara",
   "name": "University of California, Santa Barbara",
   "summary": "Public university near Goleta, California, United States and part of the University of California system.",
   "body": "Recent robotics work includes “Material-like robotic collectives with spatiotemporal control of strength and shape”. OpenAlex lists 44 robotics, humanoid, embodied-AI or manipulation papers from University of California, Santa Barbara since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1126/science.ads7942",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ucsb.edu/"
    },
    "image": {
     "v": "/logos/university-of-california-santa-barbara.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_California%2C_Santa_Barbara_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Barbara",
     "src": "https://www.wikidata.org/wiki/Q263064",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q263064",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Santa Barbara, United States",
       "lat": 34.416323,
       "lon": -119.846392,
       "src": "https://www.wikidata.org/wiki/Q263064"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-california-davis",
   "name": "University of California, Davis",
   "summary": "Public university in the Davis, California area; part of the University of California system.",
   "body": "Recent robotics work includes “Active Vision Might Be All You Need: Exploring Active Vision in Bimanual Robotic Manipulation”. OpenAlex lists 86 robotics, humanoid, embodied-AI or manipulation papers from University of California, Davis since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/icra55743.2025.11128253",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ucdavis.edu/"
    },
    "image": {
     "v": "/logos/university-of-california-davis.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/The_University_of_California_Davis.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Davis",
     "src": "https://www.wikidata.org/wiki/Q129421",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q129421",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Davis, United States",
       "lat": 38.54,
       "lon": -121.75,
       "src": "https://www.wikidata.org/wiki/Q129421"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-california-irvine",
   "name": "University of California, Irvine",
   "summary": "Public research university in Irvine, California, United States.",
   "body": "Recent robotics work includes “Can We Trust Embodied Agents? Exploring Backdoor Attacks against Embodied LLM-based Decision-Making Systems”. OpenAlex lists 122 robotics, humanoid, embodied-AI or manipulation papers from University of California, Irvine since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2405.20774",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://uci.edu/"
    },
    "image": {
     "v": "/logos/university-of-california-irvine.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_California%2C_Irvine_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Irvine",
     "src": "https://www.wikidata.org/wiki/Q868421",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q868421",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Irvine, United States",
       "lat": 33.64535,
       "lon": -117.842642,
       "src": "https://www.wikidata.org/wiki/Q868421"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-wisconsinmadison",
   "name": "University of Wisconsin–Madison",
   "summary": "Public research university in Madison, Wisconsin, USA.",
   "body": "Robotics: Robotics at the UW-Madison &#8211; The UW-Madison Robotics Group &#8211; UW–Madison.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.wisc.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://wisc.edu/"
    },
    "image": {
     "v": "/logos/university-of-wisconsinmadison.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Seal_of_the_University_of_Wisconsin.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Madison",
     "src": "https://www.wikidata.org/wiki/Q838330",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q838330",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Madison, United States",
       "lat": 43.075278,
       "lon": -89.404167,
       "src": "https://www.wikidata.org/wiki/Q838330"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rutgers-university",
   "name": "Rutgers University",
   "summary": "Multi-campus public research university in New Jersey, United States.",
   "body": "Recent robotics work includes “Exploring the Adversarial Vulnerabilities of Vision-Language-Action Models in Robotics”. OpenAlex lists 91 robotics, humanoid, embodied-AI or manipulation papers from Rutgers, The State University of New Jersey since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/iccv51701.2025.00653",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rutgers.edu/"
    },
    "image": {
     "v": "/logos/rutgers-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Rutgers_University_with_the_state_university_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "New Brunswick",
     "src": "https://www.wikidata.org/wiki/Q499451",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q499451",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New Brunswick, United States",
       "lat": 40.501667,
       "lon": -74.448056,
       "src": "https://www.wikidata.org/wiki/Q499451"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stony-brook-university",
   "name": "Stony Brook University",
   "summary": "Public university in Stony Brook, New York, United States.",
   "body": "Recent robotics work includes “Theia: Distilling Diverse Vision Foundation Models for Robot Learning”. OpenAlex lists 72 robotics, humanoid, embodied-AI or manipulation papers from Stony Brook University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2407.20179",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.stonybrook.edu/"
    },
    "image": {
     "v": "/logos/stony-brook-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Stony_Brook_University_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stony Brook",
     "src": "https://www.wikidata.org/wiki/Q969850",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q969850",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Stony Brook, United States",
       "lat": 40.917321,
       "lon": -73.124554,
       "src": "https://www.wikidata.org/wiki/Q969850"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pennsylvania-state-university",
   "name": "Pennsylvania State University",
   "summary": "Public university in Pennsylvania, United States.",
   "body": "Recent robotics work includes “Imperative learning: A self-supervised neuro-symbolic learning framework for robot autonomy”. OpenAlex lists 139 robotics, humanoid, embodied-AI or manipulation papers from Pennsylvania State University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1177/02783649251353181",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.psu.edu/"
    },
    "image": {
     "v": "/logos/pennsylvania-state-university.png",
     "fit": "contain",
     "src": "https://www.psu.edu/favicon.ico?favicon.17szk1izblhmq.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "University Park",
     "src": "https://www.wikidata.org/wiki/Q739627",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q739627",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "University Park, United States",
       "lat": 40.796111,
       "lon": -77.862778,
       "src": "https://www.wikidata.org/wiki/Q739627"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "texas-am-university",
   "name": "Texas A&M University",
   "summary": "Public research university in College Station, Texas, United States.",
   "body": "Recent robotics work includes “A Review of Artificial Intelligence, Algorithms, and Robots Through the Lens of Stakeholder Theory”. OpenAlex lists 237 robotics, humanoid, embodied-AI or manipulation papers from Texas A&M University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1177/01492063241311855",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tamu.edu/"
    },
    "image": {
     "v": "/logos/texas-am-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Texas_A%26M_University_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "College Station",
     "src": "https://www.wikidata.org/wiki/Q49212",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q49212",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "College Station, United States",
       "lat": 30.610369,
       "lon": -96.344056,
       "src": "https://www.wikidata.org/wiki/Q49212"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-rochester",
   "name": "University of Rochester",
   "summary": "Private, nonsectarian, research university in Rochester, New York, United States.",
   "body": "Recent robotics work includes “Exploring the Adversarial Vulnerabilities of Vision-Language-Action Models in Robotics”. OpenAlex lists 43 robotics, humanoid, embodied-AI or manipulation papers from University of Rochester since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/iccv51701.2025.00653",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rochester.edu/"
    },
    "image": {
     "v": "/logos/university-of-rochester.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Rochester_2025_logo_text-only_center.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rochester",
     "src": "https://www.wikidata.org/wiki/Q149990",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q149990",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rochester, United States",
       "lat": 43.128333,
       "lon": -77.628333,
       "src": "https://www.wikidata.org/wiki/Q149990"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "worcester-polytechnic-institute",
   "name": "Worcester Polytechnic Institute",
   "summary": "University in Worcester, Massachusetts.",
   "body": "Robotics: Robotics Engineering | Worcester Polytechnic Institute.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.wpi.edu/academics/departments/robotics-engineering",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.wpi.edu/"
    },
    "image": {
     "v": "/logos/worcester-polytechnic-institute.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/WPI_wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Worcester",
     "src": "https://www.wikidata.org/wiki/Q195046",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q195046",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Worcester, United States",
       "lat": 42.273489,
       "lon": -71.80735,
       "src": "https://www.wikidata.org/wiki/Q195046"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rensselaer-polytechnic-institute",
   "name": "Rensselaer Polytechnic Institute",
   "summary": "Private research university in Troy, New York.",
   "body": "Recent robotics work includes “IK-Geo: Unified robot inverse kinematics using subproblem decomposition”. OpenAlex lists 32 robotics, humanoid, embodied-AI or manipulation papers from Rensselaer Polytechnic Institute since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.mechmachtheory.2025.105971",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.rpi.edu/"
    },
    "image": {
     "v": "/logos/rensselaer-polytechnic-institute.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Rensselaer_Polytechnic_Institute_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Troy",
     "src": "https://www.wikidata.org/wiki/Q49211",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q49211",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Troy, United States",
       "lat": 42.729014,
       "lon": -73.676728,
       "src": "https://www.wikidata.org/wiki/Q49211"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-notre-dame",
   "name": "University of Notre Dame",
   "summary": "Catholic university located in Notre Dame, Indiana, United States.",
   "body": "Robotics: Robotics @ ND | University of Notre Dame.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.nd.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nd.edu/"
    },
    "image": {
     "v": "/logos/university-of-notre-dame.png",
     "fit": "contain",
     "src": "https://static.nd.edu/images/webclips/default/webclip-512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "South Bend",
     "src": "https://www.wikidata.org/wiki/Q178848",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q178848",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "South Bend, United States",
       "lat": 41.7,
       "lon": -86.238889,
       "src": "https://www.wikidata.org/wiki/Q178848"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ohio-state-university",
   "name": "Ohio State University",
   "summary": "Public research university in Columbus, Ohio, United States.",
   "body": "Recent robotics work includes “RoboSpatial: Teaching Spatial Understanding to 2D and 3D Vision-Language Models for Robotics”. OpenAlex lists 92 robotics, humanoid, embodied-AI or manipulation papers from The Ohio State University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/cvpr52734.2025.01470",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://osu.edu/"
    },
    "image": {
     "v": "/logos/ohio-state-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Ohio_State_University_horizontal_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Columbus",
     "src": "https://www.wikidata.org/wiki/Q309331",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q309331",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Columbus, United States",
       "lat": 40.000556,
       "lon": -83.014444,
       "src": "https://www.wikidata.org/wiki/Q309331"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-florida",
   "name": "University of Florida",
   "summary": "Public research university in Gainesville, Florida, United States.",
   "body": "Recent robotics work includes “A review of visual navigation for agricultural robots in open fields and controlled environments”. OpenAlex lists 195 robotics, humanoid, embodied-AI or manipulation papers from University of Florida since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.compag.2026.111754",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ufl.edu/"
    },
    "image": {
     "v": "/logos/university-of-florida.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Florida_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gainesville",
     "src": "https://www.wikidata.org/wiki/Q501758",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q501758",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gainesville, United States",
       "lat": 29.6475,
       "lon": -82.345,
       "src": "https://www.wikidata.org/wiki/Q501758"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-texas-at-dallas",
   "name": "University of Texas at Dallas",
   "summary": "Public university in Richardson, Texas.",
   "body": "Recent robotics work includes “Robometer: Scaling General-Purpose Robotic Reward Models via Trajectory Comparisons”. OpenAlex lists 39 robotics, humanoid, embodied-AI or manipulation papers from The University of Texas at Dallas since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.15607/rss.2026.xxii.140",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.utdallas.edu/"
    },
    "image": {
     "v": "/logos/university-of-texas-at-dallas.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/UT_Dallas_Wordmark_-_-_SVG_Brand_Identity_File.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Richardson",
     "src": "https://www.wikidata.org/wiki/Q1781394",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q1781394",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Richardson, United States",
       "lat": 32.985,
       "lon": -96.75,
       "src": "https://www.wikidata.org/wiki/Q1781394"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-pittsburgh",
   "name": "University of Pittsburgh",
   "summary": "State-related research university located in Pittsburgh, Pennsylvania, United States.",
   "body": "Recent robotics work includes “Invertible liquid neural network-based learning of inverse kinematics and dynamics for robotic manipulators”. OpenAlex lists 127 robotics, humanoid, embodied-AI or manipulation papers from University of Pittsburgh since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1038/s41598-025-26422-1",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pitt.edu/"
    },
    "image": {
     "v": "/logos/university-of-pittsburgh.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Pittsburgh_wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.wikidata.org/wiki/Q235034",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q235034",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pittsburgh, United States",
       "lat": 40.444565,
       "lon": -79.953274,
       "src": "https://www.wikidata.org/wiki/Q235034"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "boston-university",
   "name": "Boston University",
   "summary": "Private research university in Boston, Massachusetts, United States.",
   "body": "Robotics: Research on Tap: Robotics and Autonomous Systems (2023) | Office of Research.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.bu.edu/research/2023/03/11/robotics-and-autonomous-systems/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bu.edu/"
    },
    "image": {
     "v": "/logos/boston-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Boston_University_wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.wikidata.org/wiki/Q49110",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q49110",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, United States",
       "lat": 42.348889,
       "lon": -71.100278,
       "src": "https://www.wikidata.org/wiki/Q49110"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tufts-university",
   "name": "Tufts University",
   "summary": "Private research university in Medford/Somerville, Massachusetts.",
   "body": "Recent robotics work includes “Principles and Guidelines for Evaluating Social Robot Navigation Algorithms”. OpenAlex lists 66 robotics, humanoid, embodied-AI or manipulation papers from Tufts University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1145/3700599",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tufts.edu/"
    },
    "image": {
     "v": "/logos/tufts-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Tufts_University_wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Medford",
     "src": "https://www.wikidata.org/wiki/Q49120",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q49120",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Medford, United States",
       "lat": 42.406949,
       "lon": -71.11982,
       "src": "https://www.wikidata.org/wiki/Q49120"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dartmouth-college",
   "name": "Dartmouth College",
   "summary": "Private university in Hanover, New Hampshire, US.",
   "body": "Recent robotics work includes “Modular shape-changing tensegrity-blocks enable self-assembling robotic structures”. OpenAlex lists 40 robotics, humanoid, embodied-AI or manipulation papers from Dartmouth College since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1038/s41467-025-60982-0",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://home.dartmouth.edu/"
    },
    "image": {
     "v": "/logos/dartmouth-college.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Dartmouth_College_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hanover",
     "src": "https://www.wikidata.org/wiki/Q49116",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q49116",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hanover, United States",
       "lat": 43.703333,
       "lon": -72.288333,
       "src": "https://www.wikidata.org/wiki/Q49116"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-virginia",
   "name": "University of Virginia",
   "summary": "Public university in Charlottesville, Virginia.",
   "body": "Recent robotics work includes “Principles and Guidelines for Evaluating Social Robot Navigation Algorithms”. OpenAlex lists 159 robotics, humanoid, embodied-AI or manipulation papers from University of Virginia since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1145/3700599",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://virginia.edu/"
    },
    "image": {
     "v": "/logos/university-of-virginia.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=virginia.edu&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Charlottesville",
     "src": "https://www.wikidata.org/wiki/Q213439",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q213439",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Charlottesville, United States",
       "lat": 38.035556,
       "lon": -78.503333,
       "src": "https://www.wikidata.org/wiki/Q213439"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "north-carolina-state-university",
   "name": "North Carolina State University",
   "summary": "Public research university in Raleigh, North Carolina, United States.",
   "body": "Recent robotics work includes “Autonomous catalysis research with human–AI–robot collaboration”. OpenAlex lists 81 robotics, humanoid, embodied-AI or manipulation papers from North Carolina State University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1038/s41929-025-01430-6",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ncsu.edu/"
    },
    "image": {
     "v": "/logos/north-carolina-state-university.png",
     "fit": "contain",
     "src": "https://cdn.ncsu.edu/brand-assets/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "North Carolina",
     "src": "https://www.wikidata.org/wiki/Q1132346",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q1132346",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "North Carolina, United States",
       "lat": 35.787222,
       "lon": -78.670556,
       "src": "https://www.wikidata.org/wiki/Q1132346"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-north-carolina-at-chapel-hill",
   "name": "University of North Carolina at Chapel Hill",
   "summary": "Public research university in Chapel Hill, North Carolina, United States.",
   "body": "Robotics: Robotics work heralds ‘discovery factories’ | UNC-Chapel Hill.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.unc.edu/posts/2024/10/25/robotics-work-heralds-discovery-factories/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://unc.edu/"
    },
    "image": {
     "v": "/logos/university-of-north-carolina-at-chapel-hill.png",
     "fit": "contain",
     "src": "https://www.unc.edu/wp-content/uploads/2025/11/cropped-CB_Background-Favicon-300x300.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chapel Hill",
     "src": "https://www.wikidata.org/wiki/Q192334",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q192334",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chapel Hill, United States",
       "lat": 35.908611,
       "lon": -79.049167,
       "src": "https://www.wikidata.org/wiki/Q192334"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-central-florida",
   "name": "University of Central Florida",
   "summary": "Public university in Orange County, Florida, United States.",
   "body": "Robotics: Robotics | University of Central Florida.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.ucf.edu/robotics/",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.ucf.edu/"
    },
    "image": {
     "v": "/logos/university-of-central-florida.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.ucf.edu&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Orlando",
     "src": "https://www.wikidata.org/wiki/Q143451",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q143451",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Orlando, United States",
       "lat": 28.6016,
       "lon": -81.2005,
       "src": "https://www.wikidata.org/wiki/Q143451"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "clemson-university",
   "name": "Clemson University",
   "summary": "Public university in South Carolina, United States.",
   "body": "Recent robotics work includes “Physical Artificial Intelligence for Powering the Next Revolution in Robotics”. OpenAlex lists 69 robotics, humanoid, embodied-AI or manipulation papers from Clemson University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1115/1.4070122",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.clemson.edu/"
    },
    "image": {
     "v": "/logos/clemson-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Clemson_University_Wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Clemson",
     "src": "https://www.wikidata.org/wiki/Q631066",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q631066",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Clemson, United States",
       "lat": 34.678333,
       "lon": -82.839167,
       "src": "https://www.wikidata.org/wiki/Q631066"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mcgill-university",
   "name": "McGill University",
   "summary": "English-language public research university in Montreal, Quebec, Canada.",
   "body": "Recent robotics work includes “Zero-Shot Whole-Body Humanoid Control via Behavioral Foundation Models”. OpenAlex lists 114 robotics, humanoid, embodied-AI or manipulation papers from McGill University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2504.11054",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mcgill.ca/"
    },
    "image": {
     "v": "/logos/mcgill-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Mcgill_univ_ca_logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montreal",
     "src": "https://www.wikidata.org/wiki/Q201492",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.wikidata.org/wiki/Q201492",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Montreal, Canada",
       "lat": 45.505,
       "lon": -73.5775,
       "src": "https://www.wikidata.org/wiki/Q201492"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-waterloo",
   "name": "University of Waterloo",
   "summary": "Public research university in Waterloo, Ontario, Canada.",
   "body": "Recent robotics work includes “Embodied AI-Enhanced Vehicular Networks: An Integrated Vision Language Models and Reinforcement Learning Method”. OpenAlex lists 194 robotics, humanoid, embodied-AI or manipulation papers from University of Waterloo since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/tmc.2025.3582864",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://uwaterloo.ca/"
    },
    "image": {
     "v": "/logos/university-of-waterloo.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Uwaterloo_wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Waterloo",
     "src": "https://www.wikidata.org/wiki/Q1049470",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.wikidata.org/wiki/Q1049470",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Waterloo, Canada",
       "lat": 43.468889,
       "lon": -80.54,
       "src": "https://www.wikidata.org/wiki/Q1049470"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-british-columbia",
   "name": "University of British Columbia",
   "summary": "Public research university in British Columbia, Canada.",
   "body": "Recent robotics work includes “Accelerating discovery in natural science laboratories with AI and robotics: Perspectives and challenges”. OpenAlex lists 166 robotics, humanoid, embodied-AI or manipulation papers from University of British Columbia since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1126/scirobotics.adv7932",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ubc.ca/"
    },
    "image": {
     "v": "/logos/university-of-british-columbia.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/British_columbia_ca_univ_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Metro Vancouver A",
     "src": "https://www.wikidata.org/wiki/Q391028",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.wikidata.org/wiki/Q391028",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Metro Vancouver A, Canada",
       "lat": 49.264722,
       "lon": -123.252778,
       "src": "https://www.wikidata.org/wiki/Q391028"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-alberta",
   "name": "University of Alberta",
   "summary": "Public research university in Edmonton, Alberta, Canada.",
   "body": "Robotics: University of Alberta Robotics.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.ualberta.ca/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ualberta.ca/"
    },
    "image": {
     "v": "/logos/university-of-alberta.png",
     "fit": "contain",
     "src": "https://www.ualberta.ca/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Edmonton",
     "src": "https://www.wikidata.org/wiki/Q640694",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.wikidata.org/wiki/Q640694",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Edmonton, Canada",
       "lat": 53.524444,
       "lon": -113.524444,
       "src": "https://www.wikidata.org/wiki/Q640694"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "simon-fraser-university",
   "name": "Simon Fraser University",
   "summary": "Public research university in Greater Vancouver, British Columbia, Canada.",
   "body": "Robotics: SFU Robotics Research Group | SFU Robotics.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.sfu.ca/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sfu.ca/"
    },
    "image": {
     "v": "/logos/simon-fraser-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/SFU-block-logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Surrey",
     "src": "https://www.wikidata.org/wiki/Q201603",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.wikidata.org/wiki/Q201603",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Surrey, Canada",
       "lat": 49.278176,
       "lon": -122.919394,
       "src": "https://www.wikidata.org/wiki/Q201603"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "université-de-montréal",
   "name": "Université de Montréal",
   "summary": "University in Montreal, Quebec, Canada.",
   "body": "Recent robotics work includes “Embodied decision making in athletes and other animals”. OpenAlex lists 58 robotics, humanoid, embodied-AI or manipulation papers from Université de Montréal since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.psychsport.2025.102915",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.umontreal.ca/"
    },
    "image": {
     "v": "/logos/université-de-montréal.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Universit%C3%A4t_Montreal_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montreal",
     "src": "https://www.wikidata.org/wiki/Q392189",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://www.wikidata.org/wiki/Q392189",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Montreal, Canada",
       "lat": 45.50414,
       "lon": -73.61433,
       "src": "https://www.wikidata.org/wiki/Q392189"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-freiburg",
   "name": "University of Freiburg",
   "summary": "University in Freiburg im Breisgau, Germany.",
   "body": "Recent robotics work includes “Learning Robotic Manipulation Policies from Point Clouds with Conditional Flow Matching”. OpenAlex lists 125 robotics, humanoid, embodied-AI or manipulation papers from University of Freiburg since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2409.07343",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://uni-freiburg.de/"
    },
    "image": {
     "v": "/logos/university-of-freiburg.png",
     "fit": "contain",
     "src": "https://uni-freiburg.de/wp-content/themes/ufr-main-theme/assets/img/favicon/favicon-512x512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Freiburg im Breisgau",
     "src": "https://www.wikidata.org/wiki/Q153987",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q153987",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Freiburg im Breisgau, Germany",
       "lat": 47.994167,
       "lon": 7.846944,
       "src": "https://www.wikidata.org/wiki/Q153987"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "technische-universität-berlin",
   "name": "Technische Universität Berlin",
   "summary": "Public research university in Berlin, Germany.",
   "body": "Robotics: Robotik - TU Berlin.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.tu.berlin/robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tu.berlin/"
    },
    "image": {
     "v": "/logos/technische-universität-berlin.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_der_Technischen_Universit%C3%A4t_Berlin.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://www.wikidata.org/wiki/Q51985",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q51985",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Berlin, Germany",
       "lat": 52.511944,
       "lon": 13.326389,
       "src": "https://www.wikidata.org/wiki/Q51985"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-stuttgart",
   "name": "University of Stuttgart",
   "summary": "German public university.",
   "body": "Recent robotics work includes “DELTA: Decomposed Efficient Long-Term Robot Task Planning Using Large Language Models”. OpenAlex lists 194 robotics, humanoid, embodied-AI or manipulation papers from University of Stuttgart since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/icra55743.2025.11127838",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.uni-stuttgart.de/"
    },
    "image": {
     "v": "/logos/university-of-stuttgart.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Universit%C3%A4t_Stuttgart_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stuttgart",
     "src": "https://www.wikidata.org/wiki/Q122453",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q122453",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Stuttgart, Germany",
       "lat": 48.7817,
       "lon": 9.1752,
       "src": "https://www.wikidata.org/wiki/Q122453"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rwth-aachen-university",
   "name": "RWTH Aachen University",
   "summary": "University in Aachen, Germany.",
   "body": "Recent robotics work includes “Unintended consequences of service robots – Recent progress and future research directions”. OpenAlex lists 204 robotics, humanoid, embodied-AI or manipulation papers from RWTH Aachen University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.jbusres.2025.115366",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.rwth-aachen.de/"
    },
    "image": {
     "v": "/logos/rwth-aachen-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWTH_Logo_3.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Aachen",
     "src": "https://www.wikidata.org/wiki/Q273263",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q273263",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Aachen, Germany",
       "lat": 50.777778,
       "lon": 6.078056,
       "src": "https://www.wikidata.org/wiki/Q273263"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tu-dresden",
   "name": "TU Dresden",
   "summary": "Institute of higher education in the city of Dresden, Saxony, Germany, founded in 1828.",
   "body": "Recent robotics work includes “Open-H-Embodiment: A Large-Scale Dataset for Enabling Foundation Models in Medical Robotics”. OpenAlex lists 89 robotics, humanoid, embodied-AI or manipulation papers from Technische Universität Dresden since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2604.21017",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tu-dresden.de/"
    },
    "image": {
     "v": "/logos/tu-dresden.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_TU_Dresden.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dresden",
     "src": "https://www.wikidata.org/wiki/Q158158",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q158158",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dresden, Germany",
       "lat": 51.028056,
       "lon": 13.726667,
       "src": "https://www.wikidata.org/wiki/Q158158"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "heidelberg-university",
   "name": "Heidelberg University",
   "summary": "Public research university in Heidelberg, Baden-Württemberg, Germany.",
   "body": "Recent robotics work includes “Understanding the Emergence and Trajectory of Job Insecurity Due to Smart Technology, Artificial Intelligence, Robotics, and Automation”. OpenAlex lists 102 robotics, humanoid, embodied-AI or manipulation papers from Heidelberg University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1002/hfm.70000",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.uni-heidelberg.de/"
    },
    "image": {
     "v": "/logos/heidelberg-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_University_of_Heidelberg.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Heidelberg",
     "src": "https://www.wikidata.org/wiki/Q151510",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q151510",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Heidelberg, Germany",
       "lat": 49.410278,
       "lon": 8.706389,
       "src": "https://www.wikidata.org/wiki/Q151510"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-tübingen",
   "name": "University of Tübingen",
   "summary": "Public research university in Tübingen, Germany.",
   "body": "Recent robotics work includes “Natural Multimodal Fusion-Based Human–Robot Interaction: Application With Voice and Deictic Posture via Large Language Model”. OpenAlex lists 58 robotics, humanoid, embodied-AI or manipulation papers from University of Tübingen since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/mra.2025.3543957",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.uni-tuebingen.de/"
    },
    "image": {
     "v": "/logos/university-of-tübingen.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.uni-tuebingen.de&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tübingen",
     "src": "https://www.wikidata.org/wiki/Q153978",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q153978",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tübingen, Germany",
       "lat": 48.525,
       "lon": 9.058889,
       "src": "https://www.wikidata.org/wiki/Q153978"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sorbonne-university",
   "name": "Sorbonne University",
   "summary": "French university located in Paris, created in 2018 from the merger of Université Paris IV and Université Paris VI.",
   "body": "Recent robotics work includes “SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics”. OpenAlex lists 161 robotics, humanoid, embodied-AI or manipulation papers from Sorbonne Université since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2506.01844",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sorbonne-universite.fr/"
    },
    "image": {
     "v": "/logos/sorbonne-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Sorbonne_University.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://www.wikidata.org/wiki/Q41497113",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://www.wikidata.org/wiki/Q41497113",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.850623,
       "lon": 2.340312,
       "src": "https://www.wikidata.org/wiki/Q41497113"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "politecnico-di-milano",
   "name": "Politecnico di Milano",
   "summary": "Technical university in Milan, Italy.",
   "body": "Recent robotics work includes “VITA: A Multi-Modal LLM-Based System for Longitudinal, Autonomous and Adaptive Robotic Mental Well-Being Coaching”. OpenAlex lists 219 robotics, humanoid, embodied-AI or manipulation papers from Politecnico di Milano since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1145/3712265",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.polimi.it/"
    },
    "image": {
     "v": "/logos/politecnico-di-milano.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Politecnicomilano-logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Milan",
     "src": "https://www.wikidata.org/wiki/Q392904",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://www.wikidata.org/wiki/Q392904",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Milan, Italy",
       "lat": 45.478031,
       "lon": 9.227319,
       "src": "https://www.wikidata.org/wiki/Q392904"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "universitat-politècnica-de-catalunya",
   "name": "Universitat Politècnica de Catalunya",
   "summary": "Public university in Barcelona, Spain.",
   "body": "Recent robotics work includes “Multimodal fusion with vision-language-action models for robotic manipulation: A systematic review”. OpenAlex lists 157 robotics, humanoid, embodied-AI or manipulation papers from Universitat Politècnica de Catalunya since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.inffus.2025.104062",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.upc.edu/"
    },
    "image": {
     "v": "/logos/universitat-politècnica-de-catalunya.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_UPC.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Barcelona Province",
     "src": "https://www.wikidata.org/wiki/Q1640731",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://www.wikidata.org/wiki/Q1640731",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Barcelona Province, Spain",
       "lat": 41.389268,
       "lon": 2.113165,
       "src": "https://www.wikidata.org/wiki/Q1640731"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "institut-de-robòtica-i-informàtica-industrial",
   "name": "Institut de Robòtica i Informàtica Industrial",
   "summary": "Research institute in Barcelona, Spain.",
   "body": "Recent robotics work includes “Morphological symmetries in robotics”. OpenAlex lists 75 robotics, humanoid, embodied-AI or manipulation papers from Institut de Robòtica i Informàtica Industrial since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.1177/02783649241282422",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.iri.upc.edu/"
    },
    "image": {
     "v": "/logos/institut-de-robòtica-i-informàtica-industrial.png",
     "fit": "contain",
     "src": "https://www.iri.upc.edu/images/logos/logo_iri2025.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Barcelona",
     "src": "https://www.wikidata.org/wiki/Q3815300",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://www.wikidata.org/wiki/Q3815300",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Barcelona, Spain",
       "lat": 41.38258,
       "lon": 2.177073,
       "src": "https://www.wikidata.org/wiki/Q3815300"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-zurich",
   "name": "University of Zurich",
   "summary": "Public research university in Zurich, Switzerland.",
   "body": "Recent robotics work includes “The Reality Gap in Robotics: Challenges, Solutions, and Best Practices”. OpenAlex lists 121 robotics, humanoid, embodied-AI or manipulation papers from University of Zurich since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1146/annurev-control-031924-100130",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.uzh.ch/"
    },
    "city": {
     "v": "Zurich",
     "src": "https://www.wikidata.org/wiki/Q206702",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://www.wikidata.org/wiki/Q206702",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.374722,
       "lon": 8.548333,
       "src": "https://www.wikidata.org/wiki/Q206702"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "katholieke-universiteit-leuven",
   "name": "Katholieke Universiteit Leuven",
   "summary": "University since 1968 with its main campus in Leuven, Belgium.",
   "body": "Recent robotics work includes “Physical control: A new avenue to achieve intelligence in soft robotics”. OpenAlex lists 168 robotics, humanoid, embodied-AI or manipulation papers from KU Leuven since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1126/scirobotics.adw7660",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kuleuven.be/"
    },
    "image": {
     "v": "/logos/katholieke-universiteit-leuven.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/KU_Leuven_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Leuven",
     "src": "https://www.wikidata.org/wiki/Q833670",
     "asof": "2026-11"
    },
    "country": {
     "v": "Belgium",
     "src": "https://www.wikidata.org/wiki/Q833670",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Leuven, Belgium",
       "lat": 50.877963,
       "lon": 4.700294,
       "src": "https://www.wikidata.org/wiki/Q833670"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-college-london",
   "name": "University College London",
   "summary": "Public research university in London, England, United Kingdom.",
   "body": "Recent robotics work includes “Zero-Shot Whole-Body Humanoid Control via Behavioral Foundation Models”. OpenAlex lists 369 robotics, humanoid, embodied-AI or manipulation papers from University College London since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2504.11054",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ucl.ac.uk/"
    },
    "image": {
     "v": "/logos/university-college-london.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/UCL_Crest.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bloomsbury",
     "src": "https://www.wikidata.org/wiki/Q193196",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q193196",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bloomsbury, United Kingdom",
       "lat": 51.524722,
       "lon": -0.133611,
       "src": "https://www.wikidata.org/wiki/Q193196"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kings-college-london",
   "name": "King's College London",
   "summary": "Public research university in London, United Kingdom.",
   "body": "Robotics: Centre for Robotics | Faculty of Natural, Mathematical & Engineering Sciences | King’s College London.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.kcl.ac.uk/nmes/research/centre-for-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kcl.ac.uk/"
    },
    "image": {
     "v": "/logos/kings-college-london.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Kcl-logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Southwark",
     "src": "https://www.wikidata.org/wiki/Q245247",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q245247",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Southwark, United Kingdom",
       "lat": 51.511944,
       "lon": -0.116111,
       "src": "https://www.wikidata.org/wiki/Q245247"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-manchester",
   "name": "University of Manchester",
   "summary": "Public research university in Manchester, England, United Kingdom.",
   "body": "Robotics: Centre for Robotics and AI - The University of Manchester.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.robotics.manchester.ac.uk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://manchester.ac.uk/"
    },
    "image": {
     "v": "/logos/university-of-manchester.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_University_Logo_%282%29.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Manchester",
     "src": "https://www.wikidata.org/wiki/Q230899",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q230899",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Manchester, United Kingdom",
       "lat": 53.466111,
       "lon": -2.231944,
       "src": "https://www.wikidata.org/wiki/Q230899"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-leeds",
   "name": "University of Leeds",
   "summary": "University in Leeds, United Kingdom.",
   "body": "Robotics: Robotics at Leeds.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.leeds.ac.uk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://leeds.ac.uk/"
    },
    "image": {
     "v": "/logos/university-of-leeds.png",
     "fit": "contain",
     "src": "https://jaducdn.leeds.ac.uk/uol-ds/1.0.22/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Leeds",
     "src": "https://www.wikidata.org/wiki/Q503424",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q503424",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Leeds, United Kingdom",
       "lat": 53.807222,
       "lon": -1.551667,
       "src": "https://www.wikidata.org/wiki/Q503424"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-bristol",
   "name": "University of Bristol",
   "summary": "Research university located in Bristol, United Kingdom.",
   "body": "Recent robotics work includes “A Survey on Vision--Language--Action Models for Embodied AI”. OpenAlex lists 182 robotics, humanoid, embodied-AI or manipulation papers from University of Bristol since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/tnnls.2025.3650584",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bristol.ac.uk/"
    },
    "image": {
     "v": "/logos/university-of-bristol.png",
     "fit": "contain",
     "src": "https://bristol.ac.uk/assets/responsive-web-project/2.7.8/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "City of Bristol",
     "src": "https://www.wikidata.org/wiki/Q459506",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q459506",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "City of Bristol, United Kingdom",
       "lat": 51.456389,
       "lon": -2.604444,
       "src": "https://www.wikidata.org/wiki/Q459506"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-birmingham",
   "name": "University of Birmingham",
   "summary": "University in Birmingham, England, United Kingdom.",
   "body": "Robotics: The Birmingham Institute for Robotics - University of Birmingham.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.birmingham.ac.uk/research/centres-institutes/institute-for-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bham.ac.uk/"
    },
    "image": {
     "v": "/logos/university-of-birmingham.png",
     "fit": "contain",
     "src": "https://www.bham.ac.uk/_s1t51Q_21a9376c-f992-49b4-8888-4d27982e6754/static/img/icons/favicon-512x512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Birmingham",
     "src": "https://www.wikidata.org/wiki/Q223429",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q223429",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Birmingham, United Kingdom",
       "lat": 52.450556,
       "lon": -1.930556,
       "src": "https://www.wikidata.org/wiki/Q223429"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "heriot-watt-university",
   "name": "Heriot-Watt University",
   "summary": "University in Edinburgh, Scotland, UK.",
   "body": "Recent robotics work includes “Stonefish: Supporting Machine Learning Research in Marine Robotics”. OpenAlex lists 107 robotics, humanoid, embodied-AI or manipulation papers from Heriot-Watt University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/icra55743.2025.11127421",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hw.ac.uk/"
    },
    "image": {
     "v": "/logos/heriot-watt-university.png",
     "fit": "contain",
     "src": "https://www.hw.ac.uk/_Z8mtzw_86eaba1f-4e5d-475c-a613-a4902caa239c/static/icon/favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "City of Edinburgh",
     "src": "https://www.wikidata.org/wiki/Q1610024",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q1610024",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "City of Edinburgh, United Kingdom",
       "lat": 55.909362,
       "lon": -3.320113,
       "src": "https://www.wikidata.org/wiki/Q1610024"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-glasgow",
   "name": "University of Glasgow",
   "summary": "University in Glasgow, Scotland, United Kingdom, founded in 1451.",
   "body": "Recent robotics work includes “Coping with Emotional Distress via Self-Disclosure to Robots: An Intervention with Caregivers”. OpenAlex lists 133 robotics, humanoid, embodied-AI or manipulation papers from University of Glasgow since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1007/s12369-024-01207-0",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gla.ac.uk/"
    },
    "image": {
     "v": "/logos/university-of-glasgow.png",
     "fit": "contain",
     "src": "https://gla.ac.uk/3t4/img/hd_hi.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Glasgow City",
     "src": "https://www.wikidata.org/wiki/Q192775",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q192775",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Glasgow City, United Kingdom",
       "lat": 55.872222,
       "lon": -4.288056,
       "src": "https://www.wikidata.org/wiki/Q192775"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-amsterdam",
   "name": "University of Amsterdam",
   "summary": "Public university in Amsterdam, Netherlands.",
   "body": "Recent robotics work includes “Dream to Manipulate: Compositional World Models Empowering Robot Imitation Learning with Imagination”. OpenAlex lists 84 robotics, humanoid, embodied-AI or manipulation papers from University of Amsterdam since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2412.14957",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.uva.nl/"
    },
    "image": {
     "v": "/logos/university-of-amsterdam.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Amsterdam_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Amsterdam",
     "src": "https://www.wikidata.org/wiki/Q214341",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://www.wikidata.org/wiki/Q214341",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Amsterdam, Netherlands",
       "lat": 52.368333,
       "lon": 4.890278,
       "src": "https://www.wikidata.org/wiki/Q214341"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eindhoven-university-of-technology",
   "name": "Eindhoven University of Technology",
   "summary": "Public technical university in Eindhoven, Netherlands.",
   "body": "Robotics: Advanced Robotics.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.tue.nl/en/research/research-areas/robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.tue.nl/"
    },
    "image": {
     "v": "/logos/eindhoven-university-of-technology.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Eindhoven_University_of_Technology_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Eindhoven",
     "src": "https://www.wikidata.org/wiki/Q280824",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://www.wikidata.org/wiki/Q280824",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Eindhoven, Netherlands",
       "lat": 51.448056,
       "lon": 5.489722,
       "src": "https://www.wikidata.org/wiki/Q280824"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-twente",
   "name": "University of Twente",
   "summary": "University in Enschede, Netherlands.",
   "body": "Robotics: Robotics Centre | University of Twente.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.utwente.nl/en/robotics/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.utwente.nl/"
    },
    "image": {
     "v": "/logos/university-of-twente.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/UT_Logo_Black_NL_lustrum.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Enschede",
     "src": "https://www.wikidata.org/wiki/Q1547084",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://www.wikidata.org/wiki/Q1547084",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Enschede, Netherlands",
       "lat": 52.2425,
       "lon": 6.8525,
       "src": "https://www.wikidata.org/wiki/Q1547084"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "chalmers-university-of-technology",
   "name": "Chalmers University of Technology",
   "summary": "University in Gothenburg, Sweden.",
   "body": "Recent robotics work includes “Human-Robot Interaction Conversational User Enjoyment Scale (HRI CUES)”. OpenAlex lists 93 robotics, humanoid, embodied-AI or manipulation papers from Chalmers University of Technology since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/taffc.2025.3590359",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.chalmers.se/"
    },
    "image": {
     "v": "/logos/chalmers-university-of-technology.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Avancez_-_1829.JPG?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gothenburg Municipality",
     "src": "https://www.wikidata.org/wiki/Q836805",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://www.wikidata.org/wiki/Q836805",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gothenburg Municipality, Sweden",
       "lat": 57.688333,
       "lon": 11.976667,
       "src": "https://www.wikidata.org/wiki/Q836805"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aalto-university",
   "name": "Aalto University",
   "summary": "Finnish university.",
   "body": "Recent robotics work includes “Video-Language Critic: Transferable Reward Functions for Language-Conditioned Robotics”. OpenAlex lists 77 robotics, humanoid, embodied-AI or manipulation papers from Aalto University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2405.19988",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aalto.fi/"
    },
    "image": {
     "v": "/logos/aalto-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Aalto-yliopiston_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Espoo",
     "src": "https://www.wikidata.org/wiki/Q300980",
     "asof": "2026-11"
    },
    "country": {
     "v": "Finland",
     "src": "https://www.wikidata.org/wiki/Q300980",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Espoo, Finland",
       "lat": 60.186111,
       "lon": 24.828611,
       "src": "https://www.wikidata.org/wiki/Q300980"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "technical-university-of-denmark",
   "name": "Technical University of Denmark",
   "summary": "University in the town Kongens Lyngby.",
   "body": "Recent robotics work includes “Ultra‐stretchable, super‐tough, and highly stable ion‐doped hydrogel for advanced robotic applications and human motion sensing”. OpenAlex lists 63 robotics, humanoid, embodied-AI or manipulation papers from Technical University of Denmark since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1002/inf2.12655",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dtu.dk/"
    },
    "image": {
     "v": "/logos/technical-university-of-denmark.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Danmarks_Tekniske_Universitet_%28logo%29.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kongens Lyngby",
     "src": "https://www.wikidata.org/wiki/Q1269766",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://www.wikidata.org/wiki/Q1269766",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kongens Lyngby, Denmark",
       "lat": 55.786155,
       "lon": 12.523359,
       "src": "https://www.wikidata.org/wiki/Q1269766"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-southern-denmark",
   "name": "University of Southern Denmark",
   "summary": "University in Denmark.",
   "body": "Robotics: SDU Robotics | find out more about research, education, innovation, cooperation.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.sdu.dk/robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sdu.dk/"
    },
    "image": {
     "v": "/logos/university-of-southern-denmark.png",
     "fit": "contain",
     "src": "https://www.sdu.dk/resources/images/sdu/icon152.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Odense",
     "src": "https://www.wikidata.org/wiki/Q2166335",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://www.wikidata.org/wiki/Q2166335",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Odense, Denmark",
       "lat": 55.368611,
       "lon": 10.428056,
       "src": "https://www.wikidata.org/wiki/Q2166335"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "czech-technical-university-in-prague",
   "name": "Czech Technical University in Prague",
   "summary": "Czech public university.",
   "body": "Recent robotics work includes “REALM: A Real-to-Sim Validated Benchmark for Generalization in Robotic Manipulation”. OpenAlex lists 81 robotics, humanoid, embodied-AI or manipulation papers from Czech Technical University in Prague since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/lra.2026.3692088",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cvut.cz/"
    },
    "image": {
     "v": "/logos/czech-technical-university-in-prague.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/CVUT_logo.jpg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Prague",
     "src": "https://www.wikidata.org/wiki/Q1329478",
     "asof": "2026-11"
    },
    "country": {
     "v": "Czech Republic",
     "src": "https://www.wikidata.org/wiki/Q1329478",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Prague, Czech Republic",
       "lat": 50.102167,
       "lon": 14.388472,
       "src": "https://www.wikidata.org/wiki/Q1329478"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "politecnico-di-torino",
   "name": "Politecnico di Torino",
   "summary": "Technical university in Turin, Italy.",
   "body": "Recent robotics work includes “Human Following and Guidance by Autonomous Mobile Robots: A Comprehensive Review”. OpenAlex lists 152 robotics, humanoid, embodied-AI or manipulation papers from Politecnico di Torino since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/access.2025.3548134",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.polito.it/"
    },
    "image": {
     "v": "/logos/politecnico-di-torino.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Politecnico_di_Torino_-_wordmark_%28Italy%2C_2021%29.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Turin",
     "src": "https://www.wikidata.org/wiki/Q392897",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://www.wikidata.org/wiki/Q392897",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Turin, Italy",
       "lat": 45.063094,
       "lon": 7.661075,
       "src": "https://www.wikidata.org/wiki/Q392897"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-pisa",
   "name": "University of Pisa",
   "summary": "Italian public research university located in Pisa.",
   "body": "Robotics: Ingegneria robotica e dell&#039;automazione ~ UNIPI.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.unipi.it/education/courses/master-degree/robotics-and-automation-engineering-wim-lm-en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.unipi.it/"
    },
    "image": {
     "v": "/logos/university-of-pisa.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Emblem_of_University_of_Pisa.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pisa",
     "src": "https://www.wikidata.org/wiki/Q645663",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://www.wikidata.org/wiki/Q645663",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pisa, Italy",
       "lat": 43.716508,
       "lon": 10.398458,
       "src": "https://www.wikidata.org/wiki/Q645663"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sapienza-university-of-rome",
   "name": "Sapienza University of Rome",
   "summary": "Italian university founded in Rome in 1303.",
   "body": "Recent robotics work includes “Embodied decisions as active inference”. OpenAlex lists 259 robotics, humanoid, embodied-AI or manipulation papers from Sapienza University of Rome since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1371/journal.pcbi.1013180",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.uniroma1.it/it/"
    },
    "image": {
     "v": "/logos/sapienza-university-of-rome.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Uniroma1.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rome",
     "src": "https://www.wikidata.org/wiki/Q209344",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://www.wikidata.org/wiki/Q209344",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rome, Italy",
       "lat": 41.903333,
       "lon": 12.515833,
       "src": "https://www.wikidata.org/wiki/Q209344"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-genoa",
   "name": "University of Genoa",
   "summary": "University in Genoa, Italy.",
   "body": "Recent robotics work includes “A survey on imitation learning for contact-rich tasks in robotics”. OpenAlex lists 236 robotics, humanoid, embodied-AI or manipulation papers from University of Genoa since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1177/02783649261417694",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://unige.it/"
    },
    "image": {
     "v": "/logos/university-of-genoa.png",
     "fit": "contain",
     "src": "https://unige.it/themes/custom/unige_theme/images/logo_orizzontale_WHITE.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Genoa",
     "src": "https://www.wikidata.org/wiki/Q593321",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://www.wikidata.org/wiki/Q593321",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Genoa, Italy",
       "lat": 44.414853,
       "lon": 8.926621,
       "src": "https://www.wikidata.org/wiki/Q593321"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "technical-university-of-munich",
   "name": "Technical University of Munich",
   "summary": "Public research university in Germany.",
   "body": "Recent robotics work includes “Humanoid Locomotion and Manipulation: Current Progress and Challenges in Control, Planning, and Learning”. OpenAlex lists 511 robotics, humanoid, embodied-AI or manipulation papers from Technical University of Munich since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/tmech.2025.3579247",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tum.de/"
    },
    "image": {
     "v": "/logos/technical-university-of-munich.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/TU_Muenchen_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://www.wikidata.org/wiki/Q157808",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q157808",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.148056,
       "lon": 11.568056,
       "src": "https://www.wikidata.org/wiki/Q157808"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tel-aviv-university",
   "name": "Tel Aviv University",
   "summary": "University in Tel Aviv, Israel.",
   "body": "Recent robotics work includes “A mechanical route for cooperative transport in autonomous robotic swarms”. OpenAlex lists 85 robotics, humanoid, embodied-AI or manipulation papers from Tel Aviv University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1038/s41467-025-61896-7",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tau.ac.il/"
    },
    "image": {
     "v": "/logos/tel-aviv-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Tel_Aviv_university_logo_-_Hebrew.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tel Aviv",
     "src": "https://www.wikidata.org/wiki/Q319239",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://www.wikidata.org/wiki/Q319239",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tel Aviv, Israel",
       "lat": 32.1125,
       "lon": 34.805,
       "src": "https://www.wikidata.org/wiki/Q319239"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hebrew-university-of-jerusalem",
   "name": "Hebrew University of Jerusalem",
   "summary": "Israeli university in Jerusalem.",
   "body": "Recent robotics work includes “Fabrication of Soft Robotics by Additive Manufacturing: From Materials to Applications”. OpenAlex lists 52 robotics, humanoid, embodied-AI or manipulation papers from Hebrew University of Jerusalem since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1021/acs.chemrev.4c00749",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://new.huji.ac.il/"
    },
    "image": {
     "v": "/logos/hebrew-university-of-jerusalem.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Hebrew_University_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Jerusalem",
     "src": "https://www.wikidata.org/wiki/Q174158",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://www.wikidata.org/wiki/Q174158",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Jerusalem, Israel",
       "lat": 31.794167,
       "lon": 35.242778,
       "src": "https://www.wikidata.org/wiki/Q174158"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ben-gurion-university-of-the-negev",
   "name": "Ben-Gurion University of the Negev",
   "summary": "Public research university in Beersheba, Israel.",
   "body": "Recent robotics work includes “Opportunities and challenges for monitoring terrestrial biodiversity in the robotics age”. OpenAlex lists 101 robotics, humanoid, embodied-AI or manipulation papers from Ben-Gurion University of the Negev since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1038/s41559-025-02704-9",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.bgu.ac.il/"
    },
    "image": {
     "v": "/logos/ben-gurion-university-of-the-negev.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Ben-Gurion_University_of_the_Negev_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beersheba",
     "src": "https://www.wikidata.org/wiki/Q737332",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://www.wikidata.org/wiki/Q737332",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beersheba, Israel",
       "lat": 31.262192,
       "lon": 34.801511,
       "src": "https://www.wikidata.org/wiki/Q737332"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bar-ilan-university",
   "name": "Bar-Ilan University",
   "summary": "Israeli research university in Ramat Gan, Israel.",
   "body": "Recent robotics work includes “Principles and Guidelines for Evaluating Social Robot Navigation Algorithms”. OpenAlex lists 32 robotics, humanoid, embodied-AI or manipulation papers from Bar-Ilan University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1145/3700599",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.biu.ac.il/"
    },
    "image": {
     "v": "/logos/bar-ilan-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Bar_Ilan_logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ramat Gan",
     "src": "https://www.wikidata.org/wiki/Q1124657",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://www.wikidata.org/wiki/Q1124657",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ramat Gan, Israel",
       "lat": 32.067778,
       "lon": 34.8425,
       "src": "https://www.wikidata.org/wiki/Q1124657"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kyoto-university",
   "name": "Kyoto University",
   "summary": "National university located in Kyoto, Japan.",
   "body": "Recent robotics work includes “Defining Global Benchmarks for Robotic Liver Resections: An International Multicenter Study”. OpenAlex lists 216 robotics, humanoid, embodied-AI or manipulation papers from Kyoto University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1097/sla.0000000000006852",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://kyoto-u.ac.jp/"
    },
    "image": {
     "v": "/logos/kyoto-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Kyoto_University_emblem.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sakyō-ku",
     "src": "https://www.wikidata.org/wiki/Q336264",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q336264",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sakyō-ku, Japan",
       "lat": 35.026212,
       "lon": 135.780842,
       "src": "https://www.wikidata.org/wiki/Q336264"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tohoku-university",
   "name": "Tohoku University",
   "summary": "Higher education institution in Miyagi Prefecture, Japan.",
   "body": "Recent robotics work includes “Intelligent soft matter: towards embodied intelligence”. OpenAlex lists 186 robotics, humanoid, embodied-AI or manipulation papers from Tohoku University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1039/d5sm00174a",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.tohoku.ac.jp/"
    },
    "image": {
     "v": "/logos/tohoku-university.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.tohoku.ac.jp&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sendai",
     "src": "https://www.wikidata.org/wiki/Q1062129",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q1062129",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sendai, Japan",
       "lat": 38.254167,
       "lon": 140.873611,
       "src": "https://www.wikidata.org/wiki/Q1062129"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nagoya-university",
   "name": "Nagoya University",
   "summary": "National university of Japan.",
   "body": "Recent robotics work includes “CRAB-EDM: A Multi-Modal Underwater Crab-Inspired Robot With Temporally Sequenced Electro-Discharge Modulation”. OpenAlex lists 139 robotics, humanoid, embodied-AI or manipulation papers from Nagoya University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/lra.2026.3663817",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nagoya-u.ac.jp/"
    },
    "image": {
     "v": "/logos/nagoya-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Nagoya_University_logo%2C_type_1.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nagoya",
     "src": "https://www.wikidata.org/wiki/Q1191132",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q1191132",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nagoya, Japan",
       "lat": 35.1525,
       "lon": 136.968611,
       "src": "https://www.wikidata.org/wiki/Q1191132"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "keio-university",
   "name": "Keio University",
   "summary": "Private university in Tokyo, Japan.",
   "body": "Recent robotics work includes “Machine learning-enhanced soft robotic system inspired by rectal functions to investigate fecal incontinence”. OpenAlex lists 191 robotics, humanoid, embodied-AI or manipulation papers from Keio University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1631/bdm.2400152",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.keio.ac.jp/ja/"
    },
    "image": {
     "v": "/logos/keio-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Keio_University_logo%2C_ja_and_en_3.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.wikidata.org/wiki/Q815432",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q815432",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.649167,
       "lon": 139.742778,
       "src": "https://www.wikidata.org/wiki/Q815432"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nara-institute-of-science-and-technology",
   "name": "Nara Institute of Science and Technology",
   "summary": "Higher education institution in Nara Prefecture, Japan.",
   "body": "Recent robotics work includes “Reinforcement Learning of Multi-robot Task Allocation for Multi-object Transportation with Infeasible Tasks”. OpenAlex lists 58 robotics, humanoid, embodied-AI or manipulation papers from Nara Institute of Science and Technology since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/sii59315.2025.10870902",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.naist.jp/"
    },
    "image": {
     "v": "/logos/nara-institute-of-science-and-technology.png",
     "fit": "contain",
     "src": "https://www.naist.jp/mt-static/support/theme_static/naist_jp_main/images/naist-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ikoma",
     "src": "https://www.wikidata.org/wiki/Q843253",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q843253",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ikoma, Japan",
       "lat": 34.732222,
       "lon": 135.7325,
       "src": "https://www.wikidata.org/wiki/Q843253"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pohang-university-of-science-and-technology",
   "name": "Pohang University of Science and Technology",
   "summary": "Private university based in Pohang, South Korea.",
   "body": "Recent robotics work includes “Soft and flexible robot skin actuator using multilayer 3D pneumatic network”. OpenAlex lists 54 robotics, humanoid, embodied-AI or manipulation papers from Pohang University of Science and Technology since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1038/s41467-025-60496-9",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.postech.edu/"
    },
    "image": {
     "v": "/logos/pohang-university-of-science-and-technology.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Postech_Logotype.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pohang",
     "src": "https://www.wikidata.org/wiki/Q40018",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.wikidata.org/wiki/Q40018",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pohang, South Korea",
       "lat": 36.010883,
       "lon": 129.322669,
       "src": "https://www.wikidata.org/wiki/Q40018"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yonsei-university",
   "name": "Yonsei University",
   "summary": "Private university with campuses in Seoul and Incheon in South Korea.",
   "body": "Recent robotics work includes “Wearable Robots for Rehabilitation and Assistance of Gait: A Narrative Review”. OpenAlex lists 218 robotics, humanoid, embodied-AI or manipulation papers from Yonsei University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.5535/arm.250093",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.yonsei.ac.kr/"
    },
    "image": {
     "v": "/logos/yonsei-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Yonsei_University_logotype%28ko%29.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://www.wikidata.org/wiki/Q39988",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.wikidata.org/wiki/Q39988",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.560278,
       "lon": 126.936944,
       "src": "https://www.wikidata.org/wiki/Q39988"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "korea-university",
   "name": "Korea University",
   "summary": "University in Seoul, South Korea.",
   "body": "Recent robotics work includes “Promoting sustainable logistics in the electronics industry: Circular intuitionistic fuzzy framework for evaluating smart robotics technologies”. OpenAlex lists 236 robotics, humanoid, embodied-AI or manipulation papers from Korea University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.eswa.2025.128031",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.korea.ac.kr/"
    },
    "image": {
     "v": "/logos/korea-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Korea_University_logotype_%28English_version%29.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seongbuk District",
     "src": "https://www.wikidata.org/wiki/Q39997",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.wikidata.org/wiki/Q39997",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seongbuk District, South Korea",
       "lat": 37.589167,
       "lon": 127.0325,
       "src": "https://www.wikidata.org/wiki/Q39997"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ulsan-national-institute-of-science-and-technology",
   "name": "Ulsan National Institute of Science and Technology",
   "summary": "Research university in Ulsan, South Korea.",
   "body": "Robotics: Robotics and Rehabilitation Engineering Lab.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.unist.ac.kr/robotics/index.do",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.unist.ac.kr/"
    },
    "image": {
     "v": "/logos/ulsan-national-institute-of-science-and-technology.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Unist_logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ulsan",
     "src": "https://www.wikidata.org/wiki/Q484108",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.wikidata.org/wiki/Q484108",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ulsan, South Korea",
       "lat": 35.573,
       "lon": 129.19,
       "src": "https://www.wikidata.org/wiki/Q484108"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hanyang-university",
   "name": "Hanyang University",
   "summary": "Private research university in South Korea.",
   "body": "Robotics: 한양대 휴먼로보틱스 연구실.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.hanyang.ac.kr/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hanyang.ac.kr/"
    },
    "city": {
     "v": "Seoul",
     "src": "https://www.wikidata.org/wiki/Q40006",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.wikidata.org/wiki/Q40006",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.556389,
       "lon": 127.044444,
       "src": "https://www.wikidata.org/wiki/Q40006"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fudan-university",
   "name": "Fudan University",
   "summary": "University in Shanghai, China.",
   "body": "Recent robotics work includes “VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation with Long-Horizon Reasoning Tasks”. OpenAlex lists 498 robotics, humanoid, embodied-AI or manipulation papers from Fudan University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/iccv51701.2025.01037",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fudan.edu.cn/"
    },
    "image": {
     "v": "/logos/fudan-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Fudan_University_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Yangpu District",
     "src": "https://www.wikidata.org/wiki/Q495015",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q495015",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Yangpu District, China",
       "lat": 31.298889,
       "lon": 121.499167,
       "src": "https://www.wikidata.org/wiki/Q495015"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-science-and-technology-of-china",
   "name": "University of Science and Technology of China",
   "summary": "University in Hefei, China.",
   "body": "Recent robotics work includes “A Multiagent-Driven Robotic AI Chemist Enabling Autonomous Chemical Research On Demand”. OpenAlex lists 502 robotics, humanoid, embodied-AI or manipulation papers from University of Science and Technology of China since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1021/jacs.4c17738",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ustc.edu.cn/"
    },
    "city": {
     "v": "Hefei",
     "src": "https://www.wikidata.org/wiki/Q1074103",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q1074103",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hefei, China",
       "lat": 31.841667,
       "lon": 117.258889,
       "src": "https://www.wikidata.org/wiki/Q1074103"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nanjing-university",
   "name": "Nanjing University",
   "summary": "Public university in Nanjing, China.",
   "body": "Recent robotics work includes “Multi-agent embodied AI: advances and future directions”. OpenAlex lists 302 robotics, humanoid, embodied-AI or manipulation papers from Nanjing University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1007/s11432-025-4820-4",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nju.edu.cn/main.htm/"
    },
    "image": {
     "v": "/logos/nanjing-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Motto_of_Nanjing_University_.jpg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nanjing",
     "src": "https://www.wikidata.org/wiki/Q683580",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q683580",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nanjing, China",
       "lat": 32.05611,
       "lon": 118.775,
       "src": "https://www.wikidata.org/wiki/Q683580"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sun-yat-sen-university",
   "name": "Sun Yat-sen University",
   "summary": "University in Guangdong, China.",
   "body": "Recent robotics work includes “Aligning Cyber Space With Physical World: A Comprehensive Survey on Embodied AI”. OpenAlex lists 475 robotics, humanoid, embodied-AI or manipulation papers from Sun Yat-sen University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/tmech.2025.3574943",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.sysu.edu.cn/"
    },
    "image": {
     "v": "/logos/sun-yat-sen-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/National_Sun_Yat-sen_University_Canton.jpg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Guangzhou",
     "src": "https://www.wikidata.org/wiki/Q178972",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q178972",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Guangzhou, China",
       "lat": 23.098278,
       "lon": 113.292714,
       "src": "https://www.wikidata.org/wiki/Q178972"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "huazhong-university-of-science-and-technology",
   "name": "Huazhong University of Science and Technology",
   "summary": "Chinese university.",
   "body": "Recent robotics work includes “BadRobot: Jailbreaking Embodied LLM Agents in the Physical World”. OpenAlex lists 710 robotics, humanoid, embodied-AI or manipulation papers from Huazhong University of Science and Technology since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2407.20242",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.hust.edu.cn/"
    },
    "city": {
     "v": "Wuhan",
     "src": "https://www.wikidata.org/wiki/Q1711196",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q1711196",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Wuhan, China",
       "lat": 30.51,
       "lon": 114.41,
       "src": "https://www.wikidata.org/wiki/Q1711196"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "beihang-university",
   "name": "Beihang University",
   "summary": "University in China.",
   "body": "Recent robotics work includes “RoboRefer: Towards Spatial Referring with Reasoning in Vision-Language Models for Robotics”. OpenAlex lists 708 robotics, humanoid, embodied-AI or manipulation papers from Beihang University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.52202/085713-0957",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://buaa.edu.cn/"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.wikidata.org/wiki/Q2299797",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q2299797",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.98,
       "lon": 116.340833,
       "src": "https://www.wikidata.org/wiki/Q2299797"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wuhan-university",
   "name": "Wuhan University",
   "summary": "University in Wuhan, China.",
   "body": "Recent robotics work includes “MotionTrans: Human VR Data Enable Motion-Level Learning for Robotic Manipulation Policies”. OpenAlex lists 229 robotics, humanoid, embodied-AI or manipulation papers from Wuhan University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/icra57385.2026.11697199",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.whu.edu.cn/"
    },
    "city": {
     "v": "Wuhan",
     "src": "https://www.wikidata.org/wiki/Q1108197",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q1108197",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Wuhan, China",
       "lat": 30.540833,
       "lon": 114.361111,
       "src": "https://www.wikidata.org/wiki/Q1108197"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "peng-cheng-laboratory",
   "name": "Peng Cheng Laboratory",
   "summary": "Artificial intelligence research institute in Shenzhen, China.",
   "body": "Recent robotics work includes “Aligning Cyber Space With Physical World: A Comprehensive Survey on Embodied AI”. OpenAlex lists 78 robotics, humanoid, embodied-AI or manipulation papers from Peng Cheng Laboratory since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.1109/tmech.2025.3574943",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.pcl.ac.cn/"
    },
    "image": {
     "v": "/logos/peng-cheng-laboratory.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.pcl.ac.cn&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.wikidata.org/wiki/Q82316555",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q82316555",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.wikidata.org/wiki/Q82316555"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "beijing-institute-for-general-artificial-intelligence",
   "name": "Beijing Institute for General Artificial Intelligence",
   "summary": "Government organization in Beijing, China.",
   "body": "Recent robotics work includes “Embedding high-resolution touch across robotic hands enables adaptive human-like grasping”. OpenAlex lists 74 robotics, humanoid, embodied-AI or manipulation papers from Beijing Institute for General Artificial Intelligence since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.1038/s42256-025-01053-3",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bigai.ai/"
    },
    "image": {
     "v": "/logos/beijing-institute-for-general-artificial-intelligence.png",
     "fit": "contain",
     "src": "https://www.bigai.ai/wp-content/uploads/2022/10/cropped-80x80-1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Haidian Subdistrict",
     "src": "https://www.wikidata.org/wiki/Q124845727",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q124845727",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Haidian Subdistrict, China",
       "lat": 39.986,
       "lon": 116.2988,
       "src": "https://www.wikidata.org/wiki/Q124845727"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shenzhen-institutes-of-advanced-technology",
   "name": "Shenzhen Institutes of Advanced Technology",
   "summary": "Facility in Shenzhen, China.",
   "body": "Recent robotics work includes “NeuPAN: Direct Point Robot Navigation With End-to-End Model-Based Learning”. OpenAlex lists 158 robotics, humanoid, embodied-AI or manipulation papers from Shenzhen Institutes of Advanced Technology since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.1109/tro.2025.3554252",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://english.siat.cas.cn/"
    },
    "image": {
     "v": "/logos/shenzhen-institutes-of-advanced-technology.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=english.siat.cas.cn&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Taoyuan Subdistrict",
     "src": "https://www.wikidata.org/wiki/Q30259660",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q30259660",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Taoyuan Subdistrict, China",
       "lat": 22.598003,
       "lon": 113.985836,
       "src": "https://www.wikidata.org/wiki/Q30259660"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shenyang-institute-of-automation",
   "name": "Shenyang Institute of Automation",
   "summary": "Research institute in China.",
   "body": "Recent robotics work includes “Soft Robotic Fish Actuated by Bionic Muscle With Embedded Sensing for Self-Adaptive Multiple Modes Swimming”. OpenAlex lists 202 robotics, humanoid, embodied-AI or manipulation papers from Shenyang Institute of Automation since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.1109/tro.2025.3532520",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://english.sia.cas.cn/"
    },
    "city": {
     "v": "Shenyang",
     "src": "https://www.wikidata.org/wiki/Q7494343",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q7494343",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenyang, China",
       "lat": 41.797473,
       "lon": 123.456567,
       "src": "https://www.wikidata.org/wiki/Q7494343"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tongji-university",
   "name": "Tongji University",
   "summary": "University located in Shanghai, China.",
   "body": "Recent robotics work includes “Multi-agent embodied AI: advances and future directions”. OpenAlex lists 537 robotics, humanoid, embodied-AI or manipulation papers from Tongji University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1007/s11432-025-4820-4",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tongji.edu.cn/"
    },
    "image": {
     "v": "/logos/tongji-university.png",
     "fit": "contain",
     "src": "https://www.tongji.edu.cn/images/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.wikidata.org/wiki/Q16947",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q16947",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.2827,
       "lon": 121.506632,
       "src": "https://www.wikidata.org/wiki/Q16947"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xian-jiaotong-university",
   "name": "Xi'an Jiaotong University",
   "summary": "University in Xi'an, China.",
   "body": "Recent robotics work includes “OpenHelix: A Short Survey, Empirical Analysis, and Open-Source Dual-System VLA Model for Robotic Manipulation”. OpenAlex lists 415 robotics, humanoid, embodied-AI or manipulation papers from Xi'an Jiaotong University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2505.03912",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.xjtu.edu.cn/"
    },
    "image": {
     "v": "/logos/xian-jiaotong-university.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.xjtu.edu.cn&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Xi'an",
     "src": "https://www.wikidata.org/wiki/Q981237",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q981237",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Xi'an, China",
       "lat": 34.244722,
       "lon": 108.983611,
       "src": "https://www.wikidata.org/wiki/Q981237"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "northwestern-polytechnical-university",
   "name": "Northwestern Polytechnical University",
   "summary": "University in China.",
   "body": "Recent robotics work includes “SMNet: A Novel Compositional Generalization Model for Industrial Robot Multijoint Fault Diagnosis”. OpenAlex lists 355 robotics, humanoid, embodied-AI or manipulation papers from Northwestern Polytechnical University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/jiot.2026.3652582",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.nwpu.edu.cn/"
    },
    "city": {
     "v": "Xi'an",
     "src": "https://www.wikidata.org/wiki/Q832550",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q832550",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Xi'an, China",
       "lat": 34.244722,
       "lon": 108.911667,
       "src": "https://www.wikidata.org/wiki/Q832550"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "southeast-university",
   "name": "Southeast University",
   "summary": "Public university in Nanjing, China.",
   "body": "Recent robotics work includes “Real-time in situ magnetization reprogramming for soft robotics”. OpenAlex lists 597 robotics, humanoid, embodied-AI or manipulation papers from Southeast University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1038/s41586-025-09459-0",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.seu.edu.cn/"
    },
    "image": {
     "v": "/logos/southeast-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Southeast_University_Name.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nanjing",
     "src": "https://www.wikidata.org/wiki/Q3551770",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q3551770",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nanjing, China",
       "lat": 32.054169,
       "lon": 118.795212,
       "src": "https://www.wikidata.org/wiki/Q3551770"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shandong-university",
   "name": "Shandong University",
   "summary": "University in China.",
   "body": "Recent robotics work includes “Motion planning for robotics: A review for sampling-based planners”. OpenAlex lists 474 robotics, humanoid, embodied-AI or manipulation papers from Shandong University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.birob.2024.100207",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sdu.edu.cn/"
    },
    "image": {
     "v": "/logos/shandong-university.png",
     "fit": "contain",
     "src": "https://www.sdu.edu.cn/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Jinan",
     "src": "https://www.wikidata.org/wiki/Q604470",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q604470",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Jinan, China",
       "lat": 36.671844,
       "lon": 117.053983,
       "src": "https://www.wikidata.org/wiki/Q604470"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hong-kong-polytechnic-university",
   "name": "Hong Kong Polytechnic University",
   "summary": "Public university in Hong Kong.",
   "body": "Recent robotics work includes “Human-in-the-Loop Robot Learning for Smart Manufacturing: A Human-Centric Perspective”. OpenAlex lists 517 robotics, humanoid, embodied-AI or manipulation papers from Hong Kong Polytechnic University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/tase.2025.3528051",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://polyu.edu.hk/"
    },
    "image": {
     "v": "/logos/hong-kong-polytechnic-university.png",
     "fit": "contain",
     "src": "https://polyu.edu.hk/-/media/department/home/setting/favicon.ico?rev=3645ae56c1674f7ba7ff351ec16123df&amp;hash=362CCC9C57A3CEBB5D28EEA507E98503",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://www.wikidata.org/wiki/Q1187271",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q1187271",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hong Kong, China",
       "lat": 22.305,
       "lon": 114.18,
       "src": "https://www.wikidata.org/wiki/Q1187271"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "city-university-of-hong-kong",
   "name": "City University of Hong Kong",
   "summary": "Public research university in Hong Kong.",
   "body": "Recent robotics work includes “Biomimetic multimodal tactile sensing enables human-like robotic perception”. OpenAlex lists 253 robotics, humanoid, embodied-AI or manipulation papers from City University of Hong Kong since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1038/s44460-025-00006-y",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cityu.edu.hk/"
    },
    "image": {
     "v": "/logos/city-university-of-hong-kong.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=cityu.edu.hk&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://www.wikidata.org/wiki/Q787360",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q787360",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hong Kong, China",
       "lat": 22.336422,
       "lon": 114.172989,
       "src": "https://www.wikidata.org/wiki/Q787360"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agency-for-science-technology-and-research",
   "name": "Agency for Science, Technology and Research",
   "summary": "Government agency in Singapore.",
   "body": "Recent robotics work includes “A review of learning-based dynamics models for robotic manipulation”. OpenAlex lists 82 robotics, humanoid, embodied-AI or manipulation papers from Agency for Science, Technology and Research since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.1126/scirobotics.adt1497",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.a-star.edu.sg/"
    },
    "image": {
     "v": "/logos/agency-for-science-technology-and-research.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.a-star.edu.sg&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://www.wikidata.org/wiki/Q1101188",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://www.wikidata.org/wiki/Q1101188",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Singapore, Singapore",
       "lat": 1.299156,
       "lon": 103.787549,
       "src": "https://www.wikidata.org/wiki/Q1101188"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "singapore-university-of-technology-and-design",
   "name": "Singapore University of Technology and Design",
   "summary": "Fourth autonomous university to be established in Singapore.",
   "body": "Recent robotics work includes “A Decentralized Partially Observable Markov Decision Process for complete coverage onboard multiple shape changing reconfigurable robots”. OpenAlex lists 98 robotics, humanoid, embodied-AI or manipulation papers from Singapore University of Technology and Design since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.eswa.2025.126565",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.sutd.edu.sg/"
    },
    "image": {
     "v": "/logos/singapore-university-of-technology-and-design.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.sutd.edu.sg&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://www.wikidata.org/wiki/Q11081251",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://www.wikidata.org/wiki/Q11081251",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Singapore, Singapore",
       "lat": 1.340103,
       "lon": 103.962956,
       "src": "https://www.wikidata.org/wiki/Q11081251"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "indian-institute-of-technology-delhi",
   "name": "Indian Institute of Technology Delhi",
   "summary": "Public research university located in Delhi.",
   "body": "Recent robotics work includes “Deposition strategy correlation with texture development, geometric homogeneity, and mechanical anisotropy in robotic WAAM-fabricated aluminum alloy thick walls”. OpenAlex lists 42 robotics, humanoid, embodied-AI or manipulation papers from Indian Institute of Technology Delhi since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1016/j.jmapro.2025.03.121",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.iitd.ac.in/"
    },
    "image": {
     "v": "/logos/indian-institute-of-technology-delhi.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.iitd.ac.in&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Delhi",
     "src": "https://www.wikidata.org/wiki/Q1194650",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.wikidata.org/wiki/Q1194650",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Delhi, India",
       "lat": 28.54358,
       "lon": 77.19312,
       "src": "https://www.wikidata.org/wiki/Q1194650"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "indian-institute-of-technology-madras",
   "name": "Indian Institute of Technology Madras",
   "summary": "Autonomous public engineering and research institution located in Chennai, Tamil Nadu.",
   "body": "Recent robotics work includes “Deep Networks and Sensor Fusion for Personal Care Robot Tasks—A Review”. OpenAlex lists 72 robotics, humanoid, embodied-AI or manipulation papers from Indian Institute of Technology Madras since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/jsen.2025.3530007",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.iitm.ac.in/"
    },
    "image": {
     "v": "/logos/indian-institute-of-technology-madras.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/IIT_Madras_Logo_%28Black_and_White%29.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chennai",
     "src": "https://www.wikidata.org/wiki/Q858662",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.wikidata.org/wiki/Q858662",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chennai, India",
       "lat": 12.991667,
       "lon": 80.233889,
       "src": "https://www.wikidata.org/wiki/Q858662"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "indian-institute-of-technology-kanpur",
   "name": "Indian Institute of Technology Kanpur",
   "summary": "Public engineering institution.",
   "body": "Recent robotics work includes “Autonomous Navigation of 4WIS4WID Agricultural Field Mobile Robot Using Deep Reinforcement Learning”. OpenAlex lists 63 robotics, humanoid, embodied-AI or manipulation papers from Indian Institute of Technology Kanpur since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1115/imece-india2025-161204",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.iitk.ac.in/"
    },
    "image": {
     "v": "/logos/indian-institute-of-technology-kanpur.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=iitk.ac.in&sz=128",
     "asof": "2026-11"
    },
    "city": {
     "v": "Uttar Pradesh",
     "src": "https://www.wikidata.org/wiki/Q782682",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.wikidata.org/wiki/Q782682",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Uttar Pradesh, India",
       "lat": 26.511383,
       "lon": 80.23493,
       "src": "https://www.wikidata.org/wiki/Q782682"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "international-institute-of-information-technology-hyderabad",
   "name": "International Institute of Information Technology, Hyderabad",
   "summary": "Public engineering institution in Hyderabad, Telangana.",
   "body": "Robotics: Robotics Research Centre has two prestigious wins - IIIT Hyderabad.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.iiit.ac.in/robotics-research-centre-has-two-prestigious-wins/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.iiit.ac.in/"
    },
    "image": {
     "v": "/logos/international-institute-of-information-technology-hyderabad.png",
     "fit": "contain",
     "src": "https://www.iiit.ac.in/wp-content/uploads/2022/07/cropped-IIIT-Favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Serilingampally Mandal",
     "src": "https://www.wikidata.org/wiki/Q1666653",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.wikidata.org/wiki/Q1666653",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Serilingampally Mandal, India",
       "lat": 17.445612,
       "lon": 78.349733,
       "src": "https://www.wikidata.org/wiki/Q1666653"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "monash-university",
   "name": "Monash University",
   "summary": "Public university based in Melbourne, Australia.",
   "body": "Recent robotics work includes “ReconVLA: Reconstructive Vision-Language-Action Model as Effective Robot Perceiver”. OpenAlex lists 197 robotics, humanoid, embodied-AI or manipulation papers from Monash University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1609/aaai.v40i22.38921",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.monash.edu/"
    },
    "image": {
     "v": "/logos/monash-university.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.monash.edu&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Melbourne",
     "src": "https://www.wikidata.org/wiki/Q598841",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://www.wikidata.org/wiki/Q598841",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Melbourne, Australia",
       "lat": -37.908333,
       "lon": 145.138056,
       "src": "https://www.wikidata.org/wiki/Q598841"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "australian-national-university",
   "name": "Australian National University",
   "summary": "National research university in Canberra, Australian Capital Territory.",
   "body": "Recent robotics work includes “Hazards in Daily Life? Enabling Robots to Proactively Detect and Resolve Anomalies”. OpenAlex lists 61 robotics, humanoid, embodied-AI or manipulation papers from Australian National University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.18653/v1/2025.naacl-long.379",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.anu.edu.au/"
    },
    "image": {
     "v": "/logos/australian-national-university.png",
     "fit": "contain",
     "src": "https://d1zkbwgd2iyy9p.cloudfront.net/themes/custom/webstyle/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Canberra",
     "src": "https://www.wikidata.org/wiki/Q127990",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://www.wikidata.org/wiki/Q127990",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Canberra, Australia",
       "lat": -35.2778,
       "lon": 149.1205,
       "src": "https://www.wikidata.org/wiki/Q127990"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-new-south-wales",
   "name": "University of New South Wales",
   "summary": "Public research university in Kensington, Sydney, Australia.",
   "body": "Robotics: Robotics autonomous systems | Mechanical and Manufacturing Engineering - UNSW Sydney.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.unsw.edu.au/engineering/our-schools/mechanical-and-manufacturing-engineering/our-research/research-groups/robotics-autonomous-systems",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.unsw.edu.au/"
    },
    "image": {
     "v": "/logos/university-of-new-south-wales.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/UNSW_Canberra_Logo_-_Lanscape.jpg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kensington",
     "src": "https://www.wikidata.org/wiki/Q734764",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://www.wikidata.org/wiki/Q734764",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kensington, Australia",
       "lat": -33.916921,
       "lon": 151.232514,
       "src": "https://www.wikidata.org/wiki/Q734764"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-melbourne",
   "name": "University of Melbourne",
   "summary": "Australian public university located in Melbourne, Victoria, Australia.",
   "body": "Recent robotics work includes “Can you pass that tool?: Implications of Indirect Speech in Physical Human-Robot Collaboration”. OpenAlex lists 165 robotics, humanoid, embodied-AI or manipulation papers from The University of Melbourne since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1145/3706598.3713780",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.unimelb.edu.au/"
    },
    "image": {
     "v": "/logos/university-of-melbourne.png",
     "fit": "contain",
     "src": "https://www.unimelb.edu.au/__data/assets/image/0012/4587591/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Melbourne",
     "src": "https://www.wikidata.org/wiki/Q319078",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://www.wikidata.org/wiki/Q319078",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Melbourne, Australia",
       "lat": -37.7963,
       "lon": 144.9614,
       "src": "https://www.wikidata.org/wiki/Q319078"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "commonwealth-scientific-and-industrial-research-organisation",
   "name": "Commonwealth Scientific and Industrial Research Organisation",
   "summary": "Federal government agency for scientific research in Australia.",
   "body": "Recent robotics work includes “Chain-of-Action: Trajectory Autoregressive Modeling for Robotic Manipulation”. OpenAlex lists 80 robotics, humanoid, embodied-AI or manipulation papers from Commonwealth Scientific and Industrial Research Organisation since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.52202/085713-3540",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.csiro.au/"
    },
    "city": {
     "v": "Canberra",
     "src": "https://www.wikidata.org/wiki/Q1117048",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://www.wikidata.org/wiki/Q1117048",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Canberra, Australia",
       "lat": -35.297591,
       "lon": 149.101268,
       "src": "https://www.wikidata.org/wiki/Q1117048"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-auckland",
   "name": "University of Auckland",
   "summary": "University in Auckland, New Zealand.",
   "body": "Robotics: Home | Centre for Automation and Robotic Engineering Science.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://cares.blogs.auckland.ac.nz/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.auckland.ac.nz/en.html/"
    },
    "image": {
     "v": "/logos/university-of-auckland.png",
     "fit": "contain",
     "src": "https://www.auckland.ac.nz/etc.clientlibs/uoa-digital/clientlibs/resources/svg/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Auckland Region",
     "src": "https://www.wikidata.org/wiki/Q492467",
     "asof": "2026-11"
    },
    "country": {
     "v": "New Zealand",
     "src": "https://www.wikidata.org/wiki/Q492467",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Auckland Region, New Zealand",
       "lat": -36.850197,
       "lon": 174.769494,
       "src": "https://www.wikidata.org/wiki/Q492467"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mohamed-bin-zayed-university-of-artificial-intelligence",
   "name": "Mohamed bin Zayed University of Artificial Intelligence",
   "summary": "Graduate-level, a research-based academic institution in Abu Dhabi.",
   "body": "Recent robotics work includes “Human-in-the-Loop Robot Learning for Smart Manufacturing: A Human-Centric Perspective”. OpenAlex lists 141 robotics, humanoid, embodied-AI or manipulation papers from Mohamed bin Zayed University of Artificial Intelligence since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1109/tase.2025.3528051",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mbzuai.ac.ae/"
    },
    "image": {
     "v": "/logos/mohamed-bin-zayed-university-of-artificial-intelligence.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=mbzuai.ac.ae&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Abu Dhabi",
     "src": "https://www.wikidata.org/wiki/Q79048705",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Arab Emirates",
     "src": "https://www.wikidata.org/wiki/Q79048705",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Abu Dhabi, United Arab Emirates",
       "lat": 24.432778,
       "lon": 54.618056,
       "src": "https://www.wikidata.org/wiki/Q79048705"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "king-abdullah-university-of-science-and-technology",
   "name": "King Abdullah University of Science and Technology",
   "summary": "University in Thuwal, Saudi Arabia.",
   "body": "Recent robotics work includes “EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents”. OpenAlex lists 41 robotics, humanoid, embodied-AI or manipulation papers from King Abdullah University of Science and Technology since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.48550/arxiv.2410.22662",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.kaust.edu.sa/"
    },
    "image": {
     "v": "/logos/king-abdullah-university-of-science-and-technology.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.kaust.edu.sa&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Jeddah",
     "src": "https://www.wikidata.org/wiki/Q1463036",
     "asof": "2026-11"
    },
    "country": {
     "v": "Saudi Arabia",
     "src": "https://www.wikidata.org/wiki/Q1463036",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Jeddah, Saudi Arabia",
       "lat": 22.309722,
       "lon": 39.105278,
       "src": "https://www.wikidata.org/wiki/Q1463036"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "national-taiwan-university",
   "name": "National Taiwan University",
   "summary": "National university located in Taipei, Taiwan.",
   "body": "Recent robotics work includes “Multi‐Material Additive Manufacturing of Soft Robotic Systems: A Comprehensive Review”. OpenAlex lists 157 robotics, humanoid, embodied-AI or manipulation papers from National Taiwan University since January 2025.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://doi.org/10.1002/adrr.202500064",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ntu.edu.tw/"
    },
    "image": {
     "v": "/logos/national-taiwan-university.png",
     "fit": "contain",
     "src": "https://www.ntu.edu.tw/images/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Da'an District",
     "src": "https://www.wikidata.org/wiki/Q32746",
     "asof": "2026-11"
    },
    "country": {
     "v": "Taiwan",
     "src": "https://www.wikidata.org/wiki/Q32746",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Da'an District, Taiwan",
       "lat": 25.016817,
       "lon": 121.538457,
       "src": "https://www.wikidata.org/wiki/Q32746"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shanghai-innovation-institute",
   "name": "Shanghai Innovation Institute",
   "summary": "Research institute in Shanghai, China.",
   "body": "Recent robotics work includes “World Action Models: The Next Frontier in Embodied AI”. OpenAlex lists 111 robotics, humanoid, embodied-AI or manipulation papers from Shanghai Innovation Institute since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.48550/arxiv.2605.12090",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sii.edu.cn/"
    },
    "image": {
     "v": "/logos/shanghai-innovation-institute.png",
     "fit": "contain",
     "src": "https://www.sii.edu.cn/_upload/tpl/00/09/9/template9/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.wikidata.org/wiki/Q140928767",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q140928767",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://www.wikidata.org/wiki/Q140928767"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mitsubishi-electric-research-laboratories",
   "name": "Mitsubishi Electric Research Laboratories",
   "summary": "Subsidiary of Mitsubishi Electric US Holdings, Inc.",
   "body": "Robotics: Robotics | Mitsubishi Electric Research Laboratories.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.merl.com/research/robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "http://www.merl.com/"
    },
    "image": {
     "v": "/logos/mitsubishi-electric-research-laboratories.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Mitsubishi_Electric_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.wikidata.org/wiki/Q6883039",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q6883039",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cambridge, United States",
       "lat": 42.365635,
       "lon": -71.104002,
       "src": "https://www.wikidata.org/wiki/Q6883039"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "southwest-research-institute",
   "name": "Southwest Research Institute",
   "summary": "Independent, nonprofit research and development organization.",
   "body": "Robotics: Industrial Robotics &amp; Automation | Southwest Research Institute.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.swri.org/markets/manufacturing-construction/manufacturing-technologies/industrial-robotics-automation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.swri.org/"
    },
    "image": {
     "v": "/logos/southwest-research-institute.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Southwest_Research_Institute_%28SwRI%29_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Antonio",
     "src": "https://www.wikidata.org/wiki/Q1509357",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q1509357",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Antonio, United States",
       "lat": 29.4425,
       "lon": -98.6125,
       "src": "https://www.wikidata.org/wiki/Q1509357"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hong-kong-centre-for-logistics-robotics",
   "name": "Hong Kong Centre for Logistics Robotics",
   "summary": "Facility in Hong Kong, Hong Kong.",
   "body": "Recent robotics work includes “Data-driven Visual Servoing of Flexible Continuum Robots in Constrained Environments”. OpenAlex lists 10 robotics, humanoid, embodied-AI or manipulation papers from Hong Kong Centre for Logistics Robotics since January 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://doi.org/10.1109/iros60139.2025.11246163",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hkclr.hk/"
    },
    "image": {
     "v": "/logos/hong-kong-centre-for-logistics-robotics.png",
     "fit": "contain",
     "src": "https://www.hkclr.hk/hkclr_logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://www.wikidata.org/wiki/Q137795929",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://www.wikidata.org/wiki/Q137795929",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hong Kong, Hong Kong",
       "lat": 22.281833,
       "lon": 114.158283,
       "src": "https://www.wikidata.org/wiki/Q137795929"
      }
     ],
     "asof": "2026-11"
    }
   }
  }
 ],
 "orgData": [],
 "orgRoles": [
  {
   "slug": "neura-robotics",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://neura-robotics.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "sereact",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://www.sereact.ai/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "osaro",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://www.osaro.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "limx-dynamics",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://www.limxdynamics.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "sharpa",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://www.sharpa.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "daimon-robotics",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://www.dmrobot.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "roboligent",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://roboligent.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "roboforce",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://www.roboforce.ai/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "ff-eai-robotics",
   "add": [
    "Model lab",
    "Software developer"
   ],
   "src": {
    "Model lab": "https://robotics.ff.com/",
    "Software developer": "https://robotics.ff.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "verne-robotics",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://vernerobotics.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "shiraz-ai",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://shiraz.ai/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "naver-labs",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://www.naverlabs.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "pony-ai",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://pony.ai/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "world-labs",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://www.worldlabs.ai/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "dream-labs",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://dreamlabs.ai/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "siemens",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://www.siemens.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "kuka",
   "add": [
    "Integrator"
   ],
   "src": {
    "Integrator": "https://www.kuka.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "comau",
   "add": [
    "Integrator"
   ],
   "src": {
    "Integrator": "https://www.comau.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "clearpath-robotics",
   "add": [
    "Integrator",
    "Supplier"
   ],
   "src": {
    "Integrator": "https://clearpathrobotics.com/",
    "Supplier": "https://clearpathrobotics.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "topstar",
   "add": [
    "Integrator"
   ],
   "src": {
    "Integrator": "https://www.topstarmachine.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "vention",
   "add": [
    "Integrator",
    "Supplier"
   ],
   "src": {
    "Integrator": "https://vention.com/",
    "Supplier": "https://vention.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "exotec",
   "add": [
    "Integrator"
   ],
   "src": {
    "Integrator": "https://www.exotec.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "robco",
   "add": [
    "Integrator"
   ],
   "src": {
    "Integrator": "https://www.rob.co/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "cynlr",
   "add": [
    "Integrator"
   ],
   "src": {
    "Integrator": "https://www.cynlr.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "addverb",
   "add": [
    "Integrator"
   ],
   "src": {
    "Integrator": "https://addverb.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "symbotic",
   "add": [
    "Integrator"
   ],
   "src": {
    "Integrator": "https://www.symbotic.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "yaskawa",
   "add": [
    "Supplier"
   ],
   "src": {
    "Supplier": "https://www.yaskawa.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "realman-robotics",
   "add": [
    "Supplier"
   ],
   "src": {
    "Supplier": "https://www.realman-robotics.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "hiwonder",
   "add": [
    "Supplier"
   ],
   "src": {
    "Supplier": "https://www.hiwonder.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "unitree-robotics",
   "add": [
    "Supplier"
   ],
   "src": {
    "Supplier": "https://www.unitree.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "xpeng",
   "add": [
    "Compute"
   ],
   "src": {
    "Compute": "https://www.xpeng.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "greyorange",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://www.greyorange.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "agibot",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://www.agibot.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "nvidia",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://developer.nvidia.com/isaac"
   },
   "asof": "2026-11"
  },
  {
   "slug": "google-deepmind",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://mujoco.org/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "hugging-face",
   "add": [
    "Model lab",
    "Robot maker"
   ],
   "src": {
    "Model lab": "https://huggingface.co/blog/smolvla",
    "Robot maker": "https://huggingface.co/blog/reachy-mini"
   },
   "asof": "2026-11"
  },
  {
   "slug": "meta-ai",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://aihabitat.org/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "shield-ai",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://shield.ai/hivemind/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "sony",
   "add": [
    "Supplier",
    "Entertainment"
   ],
   "src": {
    "Supplier": "https://www.sony-semicon.com/en/",
    "Entertainment": "https://us.aibo.com/"
   },
   "asof": "2026-11"
  },
  {
   "slug": "1x-technologies",
   "add": [
    "Model lab"
   ],
   "src": {
    "Model lab": "https://www.1x.tech/discover/redwood-ai"
   },
   "asof": "2026-11"
  },
  {
   "slug": "toyota-research-institute",
   "add": [
    "Research lab"
   ],
   "src": {
    "Research lab": "https://www.tri.global/"
   },
   "asof": "2026-11"
  }
 ]
};
