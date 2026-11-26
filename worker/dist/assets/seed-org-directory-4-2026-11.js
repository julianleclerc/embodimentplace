// Content seed: fourth organisation directory pass of 2026-11-26. Adds organisations from the full Robotics Connected
// company directory (roboticsconnected.com, 921 hand-checked listings) that were neither live nor in the third pass,
// plus recent launches and European and Chinese startups found in funding news and humano.one (for example Lute,
// Emulate, Embo, Mosaic Intelligence Labs, Sunrise Robotics and Ubitium). Each has every role that applies and its HQ
// in data.locations. orgRoles adds a missing secondary role to a few existing organisations, never removing or
// reordering any. epSeedRun inserts an organisation only if no organisation has that slug or name, and fills only
// empty fields. See CHANGELOG.md.
export const EP_SEED_ORG_DIRECTORY_4_2026_11 = {
 "id": "org-directory-4-2026-11",
 "note": "Added in the fourth organisation directory pass (Robotics Connected directory, recent launches), November 2026",
 "newOrgs": [
  {
   "slug": "1msai",
   "name": "1ms.ai",
   "summary": "Open-source AI platform for robotics, dedicated to making advanced tools accessible to anyone.",
   "body": "They develop dora-rs, a robotics development framework, alongside wonnx and OpenArm projects. The company partners with leading institutions including BAAI in Beijing, Hugging Face in Paris, and CentraleSupélec in Saclay.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/19-1ms-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://1ms.ai/"
    },
    "image": {
     "v": "/logos/1msai.png",
     "fit": "contain",
     "src": "https://1ms.ai/img/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://roboticsconnected.com/companies/19-1ms-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://roboticsconnected.com/companies/19-1ms-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://roboticsconnected.com/companies/19-1ms-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "acuity-robotics",
   "name": "Acuity Robotics",
   "summary": "Designs and deploys small climbing robots for inspecting hard-to-reach civil infrastructure such as wind turbines, bridges and industrial metallic structures.",
   "body": "The world's smallest untethered infrastructure inspection robots. Comprehensive data and image intelligence enabled by robots on hard to reach live infrastructure. We provide comprehensive reports and insights on infrastructure that is difficult, costly or impossible to access by humans.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/21-acuity-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://acuityrobotics.co.uk/"
    },
    "image": {
     "v": "/logos/acuity-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/edd96b6b913bc0331844.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Leeds",
     "src": "https://uk.linkedin.com/company/acuity-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/acuity-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "c/o School of Mechanical Engineering, Leeds, West Yorkshire LS2 9JT, United Kingdom",
       "lat": 53.797418,
       "lon": -1.543794,
       "src": "https://uk.linkedin.com/company/acuity-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "adamo",
   "name": "Adamo",
   "summary": "Provides managed teleoperation and low-latency software solutions for robotics companies.",
   "body": "The platform delivers glass-to-glass latency as low as 40ms with universal robot compatibility and multi-path network bonding. The service includes fully managed, 24/7 professional teleoperator coverage for robot fleets.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/23-adamo",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://adamohq.com/"
    },
    "image": {
     "v": "/logos/adamo.png",
     "fit": "contain",
     "src": "https://adamohq.com/icon.svg?icon.105_c0e3~n26v.svg?dpl=dpl_6kLWYtPb964NhzXoR2x22RvfKhXq",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/23-adamo",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/23-adamo",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/23-adamo"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "6-river-systems",
   "name": "6 River Systems",
   "summary": "Develops collaborative autonomous mobile robots (AMRs) for warehouse fulfilment operations.",
   "body": "Founded in Waltham, Mass. in 2015, 6 River Systems is a leading wall-to-wall fulfillment solutions provider and part of UK-based technology company Ocado Group. The company strives to make warehouses more efficient with flexible, human-first and innovative products that deliver immediate value.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/30-6-river-systems",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://6river.com/"
    },
    "image": {
     "v": "/logos/6-river-systems.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/21409490e3456d975506.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Waltham",
     "src": "https://www.linkedin.com/company/6-river-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/6-river-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "307 Waverley Oaks Rd, Waltham, Massachusetts 02452, United States",
       "lat": 42.38442,
       "lon": -71.205144,
       "src": "https://www.linkedin.com/company/6-river-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "7robotics",
   "name": "7robotics",
   "summary": "Designs and deploys custom robotic automation systems for industrial clients, with particular expertise in the building products sector.",
   "body": "7robotics is a robotic systems developer dedicated to modernizing the building products industry with smart, scalable automation. Based in Roseburg, Oregon, we take pride in designing and delivering solutions that solve today’s toughest production challenges while preparing customers for tomorrow.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/31-7robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://7robotics.com/"
    },
    "image": {
     "v": "/logos/7robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/953e016b93e97460532e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Roseburg",
     "src": "https://www.linkedin.com/company/7robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/7robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4380 N Umpqua Hwy, Roseburg, Oregon 97470, United States",
       "lat": 43.254471,
       "lon": -123.218183,
       "src": "https://www.linkedin.com/company/7robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "10x",
   "name": "10x",
   "summary": "Develops physical AI agents: compact mobile manipulators designed for construction task automation.",
   "body": "Their flagship robot uses a telescopic arm with advanced tool-use intelligence, employing computer vision and machine learning to autonomously operate power tools in complex indoor environments. The company addresses labour shortages, safety concerns, and productivity challenges across the construction sector.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/36-10x",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://origin.tech/"
    },
    "image": {
     "v": "/logos/10x.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4508af7cae4f6da6ea90.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bangalore",
     "src": "https://roboticsconnected.com/companies/36-10x",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/36-10x",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bangalore, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://roboticsconnected.com/companies/36-10x"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "7xrobotics",
   "name": "7Xrobotics",
   "summary": "Develops autonomous robots for household tasks including dishwashing and laundry folding.",
   "body": "We are building autonomous household robots",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/38-7xrobotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://7xr.tech/"
    },
    "image": {
     "v": "/logos/7xrobotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0e85cb85c30e1f5b5f2e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Calgary",
     "src": "https://roboticsconnected.com/companies/38-7xrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/38-7xrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Calgary, Canada",
       "lat": 51.045606,
       "lon": -114.057541,
       "src": "https://roboticsconnected.com/companies/38-7xrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "acceleration-robotics",
   "name": "Acceleration Robotics",
   "summary": "Designs custom compute architectures, or \"hardware brains\", that accelerate robot operation through hardware-optimised solutions using CPUs, FPGAs and GPUs.",
   "body": "The company offers ROBOTCORE® RPUs (robotic processing units) and IP cores for ROS 2 acceleration, alongside ROBOTPERF® benchmarking tools. Its solutions enable robots to react faster and consume less power.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/39-acceleration-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://accelerationrobotics.com/"
    },
    "image": {
     "v": "/logos/acceleration-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/24de39d4759a7d2aa989.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Vitoria-Gasteiz",
     "src": "https://roboticsconnected.com/companies/39-acceleration-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://roboticsconnected.com/companies/39-acceleration-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Vitoria-Gasteiz, Spain",
       "lat": 42.850584,
       "lon": -2.66145,
       "src": "https://roboticsconnected.com/companies/39-acceleration-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "acumino",
   "name": "Acumino",
   "summary": "Builds task-specific Physical AI models for dexterous industrial automation, enabling robots to handle flexible objects, assembly, material deposition, and packaging.",
   "body": "Acumino offers next-generation, AI powered robot models for the execution of highly dexterous tasks in industrial automation settings.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/40-acumino",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://acumino.ai/"
    },
    "image": {
     "v": "/logos/acumino.png",
     "fit": "contain",
     "src": "https://acumino.ai/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/acuminoai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/acuminoai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "12 Channel St, Boston, Massachusetts 02210, United States",
       "lat": 42.345492,
       "lon": -71.036844,
       "src": "https://www.linkedin.com/company/acuminoai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aeon-industrial",
   "name": "Aeon Industrial",
   "summary": "Defence-technology company building autonomous tactical weapon systems for frontline warfighters.",
   "body": "Aeon is a vertically integrated defense manufacturer developing and producing advanced strike systems and critical subsystems at industrial scale.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/43-aeon-industrial",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aeonindustrial.com/"
    },
    "image": {
     "v": "/logos/aeon-industrial.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0b73a850da47658fa5a7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://roboticsconnected.com/companies/43-aeon-industrial",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/43-aeon-industrial",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://roboticsconnected.com/companies/43-aeon-industrial"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aero-ai",
   "name": "AERO AI",
   "summary": "Combines drone and LiDAR data acquisition with AI-powered 3D visualisation and analysis tools.",
   "body": "AERO AI is dedicated to transforming how we perceive and interact with our environment through innovative geospatial technologies. Our mission is to empower organizations and communities with advanced aerial intelligence and geospatial insights, enabling them to make informed decisions and drive meaningful change.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/44-aero-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aeroai.io/"
    },
    "image": {
     "v": "/logos/aero-ai.png",
     "fit": "contain",
     "src": "https://aeroai.io/assests/images/aeroai-logo-icon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Las Vegas",
     "src": "https://www.linkedin.com/company/aero-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aero-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8400 West Sunset Road Suite 300, Las Vegas, Nevada 89113, United States",
       "lat": 36.167426,
       "lon": -115.148413,
       "src": "https://www.linkedin.com/company/aero-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flock-safety",
   "name": "Flock Safety",
   "summary": "Manufactures drones, licence plate readers, and video surveillance systems designed for law enforcement and public safety.",
   "body": "Their Drone as First Responder platform uses machine learning to support real-time crime response and emergency operations. The company operates a new 100,000-square-foot manufacturing facility in Georgia to produce domestically manufactured drones, with operations expanding across security, retail, construction, and community safety sectors.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/45-flock-safety",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.flocksafety.com/"
    },
    "image": {
     "v": "/logos/flock-safety.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6d154d65b2947c9b46d8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Atlanta",
     "src": "https://roboticsconnected.com/companies/45-flock-safety",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/45-flock-safety",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Atlanta, United States",
       "lat": 33.754466,
       "lon": -84.389815,
       "src": "https://roboticsconnected.com/companies/45-flock-safety"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aerovect",
   "name": "AeroVect",
   "summary": "Develops autonomous ground support equipment systems for airports, using embodied AI to manage baggage and cargo logistics on active airfields.",
   "body": "AI-powered airport logistics automation solutions, trusted by the world's largest airlines and airports.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/47-aerovect",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aerovect.com/"
    },
    "image": {
     "v": "/logos/aerovect.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1afeb791c561f61a9d2a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "South San Francisco",
     "src": "https://www.linkedin.com/company/aerovect",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aerovect",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "233 E Harris Ave, South San Francisco, California 94080, United States",
       "lat": 37.65058,
       "lon": -122.398819,
       "src": "https://www.linkedin.com/company/aerovect"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aescape",
   "name": "Aescape",
   "summary": "Develops AI-powered robotic massage systems that scan over one million 3D body data points to deliver personalised bodywork.",
   "body": "Aescape is a body intelligence company delivering Adaptive Body Therapy, powered by physical AI, robotics and leading operating partners. Using body mapping and advanced robotics, Aescape adapts every session to the individual, releasing the tension that builds from work, training, travel and everyday life.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/48-aescape",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aescape.com/"
    },
    "image": {
     "v": "/logos/aescape.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ac14ccb73e45920c6ea4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.linkedin.com/company/aescape",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aescape",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "581 6th Ave, New York, NY 10011, United States",
       "lat": 40.739109,
       "lon": -73.995966,
       "src": "https://www.linkedin.com/company/aescape"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agxeed",
   "name": "AgXeed",
   "summary": "Develops autonomous agricultural vehicles and planning software to reduce soil compaction and improve farming efficiency.",
   "body": "With autonomous technology built with a true understanding of farming and the land, AgXeed empowers farmers to farm their way and grow stronger. AgXeed is at the forefront of smart, autonomous agricultural technology, always with both feet firmly on the ground.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/51-agxeed",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.agxeed.com/"
    },
    "image": {
     "v": "/logos/agxeed.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/275c1d34ea4e7af0d970.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Grubbenvorst",
     "src": "https://nl.linkedin.com/company/agxeed",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/agxeed",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Horsterweg 66a, Grubbenvorst, Limburg 5971 NG, Netherlands",
       "lat": 51.419531,
       "lon": 6.148422,
       "src": "https://nl.linkedin.com/company/agxeed"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aibuild",
   "name": "Aibuild",
   "summary": "Develops agentic AI software for autonomous manufacturing engineering workflows.",
   "body": "Aibuild OS is the AI operating system that executes your CAD, CAE and CAM workflows autonomously. It uses agentic AI to plan multi-step engineering workflows, operate your existing software tools, and deliver validated, production-ready results for your team to review and approve for automated execution.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/52-aibuild",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ai-build.com:443/"
    },
    "image": {
     "v": "/logos/aibuild.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e97fbcc26d09d04ef018.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/ai-build",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/ai-build",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Unit D1, Argall Avenue, Leyton Industrial Village, London, E10 7QP, United Kingdom",
       "lat": 51.570842,
       "lon": -0.043841,
       "src": "https://uk.linkedin.com/company/ai-build"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aion-robotics",
   "name": "AION Robotics",
   "summary": "Manufactures rugged autonomous vehicles for outdoor industrial inspection, monitoring, and site management.",
   "body": "Our rugged autonomous vehicles bring Industry 4.0 to outdoor commercial jobsites through the automation of infrastructure monitoring, maintenance and inspection tasks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/55-aion-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aionrobotics.com/"
    },
    "image": {
     "v": "/logos/aion-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5e3067d10c34a1edcc98.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Westminster",
     "src": "https://www.linkedin.com/company/aionrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aionrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1130 W 124th Ave., Westminster, CO 80234, United States",
       "lat": 39.921153,
       "lon": -105.000599,
       "src": "https://www.linkedin.com/company/aionrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agtonomy",
   "name": "Agtonomy",
   "summary": "Develops AI-driven automation and physical AI solutions for agriculture and off-road industries.",
   "body": "Agtonomy is an AI and software services company specializing in intelligent automation for agriculture, turf, and beyond. Through partnerships with leading equipment manufacturers, Agtonomy's platform is embedded into industrial machinery to enable automation in complex, real-world environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/59-agtonomy",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.agtonomy.com/"
    },
    "image": {
     "v": "/logos/agtonomy.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f313dd3877acd8987da2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "South San Francisco",
     "src": "https://roboticsconnected.com/companies/59-agtonomy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/59-agtonomy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "South San Francisco, United States",
       "lat": 37.65354,
       "lon": -122.416866,
       "src": "https://roboticsconnected.com/companies/59-agtonomy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "airobotics",
   "name": "Airobotics",
   "summary": "Operates autonomous drone systems for persistent intelligence and interception missions.",
   "body": "Airobotics, an Ondas company (NASDAQ: ONDS), develops mission-ready autonomous aerial systems for defense, homeland security, public safety and critical infrastructure—delivering persistent aerial intelligence, operational response and counter‑UAS capabilities in complex operational environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/60-airobotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.airoboticsdrones.com/"
    },
    "image": {
     "v": "/logos/airobotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8705a733930c6675361e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Petah Tikva",
     "src": "https://roboticsconnected.com/companies/60-airobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://roboticsconnected.com/companies/60-airobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Petah Tikva, Israel",
       "lat": 32.087764,
       "lon": 34.885998,
       "src": "https://roboticsconnected.com/companies/60-airobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "all3",
   "name": "All3",
   "summary": "Has re-engineered construction through three integrated technologies: the Mantis autonomous legged robot for on-site assembly, AI-powered design software, and robotic…",
   "body": "All3 is a construction technology company that’s redefining how buildings are designed and built. By combining AI-powered design with robotic fabrication, All3 enables developers to deliver custom, sustainable buildings at the cost and speed of mass production.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/62-all3",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://all3.com/"
    },
    "image": {
     "v": "/logos/all3.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9fe7c0e91bbb2c127c9e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/62-all3",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/62-all3",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/62-all3"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "alquist",
   "name": "Alquist",
   "summary": "Builds autonomous mobile robots with physical AI capabilities for facility asset intelligence and equipment monitoring.",
   "body": "Alquist is a robotics company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/65-alquist",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.alquistrobotics.com/"
    },
    "image": {
     "v": "/logos/alquist.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ac95ffbe7b840377b5bf.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Buffalo",
     "src": "https://roboticsconnected.com/companies/65-alquist",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/65-alquist",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Buffalo, United States",
       "lat": 42.886416,
       "lon": -78.878149,
       "src": "https://roboticsconnected.com/companies/65-alquist"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "reazon-human-interaction-lab",
   "name": "Reazon Human Interaction Lab",
   "summary": "Building foundation models that empower humanoid robots to interact intelligently and meaningfully with humans in real-world environments.",
   "body": "The Reazon Human Interaction Lab is the R&D division of Reazon Holdings, focused on bringing the physical world to artificial intelligence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/72-reazon-human-interaction-lab",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://research.reazon.jp/"
    },
    "image": {
     "v": "/logos/reazon-human-interaction-lab.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/15022865247d9fc6d0e6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://roboticsconnected.com/companies/72-reazon-human-interaction-lab",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://roboticsconnected.com/companies/72-reazon-human-interaction-lab",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://roboticsconnected.com/companies/72-reazon-human-interaction-lab"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robosoft",
   "name": "Robosoft",
   "summary": "C++ state machine library for ROS2 applications.",
   "body": "The company provides SMACC2 Runtime Analyzer (RTA) for visualizing and debugging state machines in robotics applications, with support for both ROS1 and ROS2. They also offer engineering services supporting the SMACC toolchain.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/73-robosoft",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robosoft.ai/"
    },
    "image": {
     "v": "/logos/robosoft.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d1f6d12bfd71222ada05.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Thousand Oaks",
     "src": "https://roboticsconnected.com/companies/73-robosoft",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/73-robosoft",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Thousand Oaks, United States",
       "lat": 34.170561,
       "lon": -118.837594,
       "src": "https://roboticsconnected.com/companies/73-robosoft"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "atoms",
   "name": "Atoms",
   "summary": "Industrial automation and physical AI company building specialised robots for food, mining, and transport sectors.",
   "body": "The company develops integrated systems combining software, sensors, robotics, and AI to automate large-scale physical-world industries. Founded in 2017 as City Storage Systems and rebranded to Atoms in 2026, the company operates subsidiary businesses including CloudKitchens (food infrastructure), Pronto (robotics), and Transport (autonomous solutions).",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/87-atoms",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://atoms.co/"
    },
    "image": {
     "v": "/logos/atoms.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/Ko8tG4HbYa5CWR65GxUdFg44hoU.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://roboticsconnected.com/companies/87-atoms",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/87-atoms",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://roboticsconnected.com/companies/87-atoms"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "amp-sortation",
   "name": "Amp Sortation",
   "summary": "AI-powered waste sortation and recycling automation (formerly AMP Robotics).",
   "body": "The company designs and manufactures proprietary robotic systems including the Delta sortation arm, Vision AI platform, and Jet air-jet technology. AMP ONE is their flagship facility-scale solution processing 10K–1M+ tonnes annually for material recovery facilities worldwide.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/88-amp-sortation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ampsortation.com/"
    },
    "image": {
     "v": "/logos/amp-sortation.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/68cf663a92360d655662.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Louisville",
     "src": "https://roboticsconnected.com/companies/88-amp-sortation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/88-amp-sortation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Louisville, United States",
       "lat": 38.254238,
       "lon": -85.759407,
       "src": "https://roboticsconnected.com/companies/88-amp-sortation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "angsa-robotics",
   "name": "Angsa Robotics",
   "summary": "Develops the Emu, an autonomous mobile robot for waste collection in outdoor spaces such as parks and swimming pools.",
   "body": "Removal of small trash on grass and gravel is a painful manual process, as conventional cleaning machines cannot be used there. Angsa develops an autonomous robot, which detects even small trash items using artificial intelligence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/91-angsa-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://angsa-robotics.com/"
    },
    "image": {
     "v": "/logos/angsa-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4dbabbfb518230d47c91.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/91-angsa-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/91-angsa-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/91-angsa-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aniai",
   "name": "Aniai",
   "summary": "Develops the Alpha Grill, an automated robotic system for commercial kitchens that integrates AI-driven cooking progress tracking with mechanical grilling automation.",
   "body": "At Aniai, we’re building the next generation of kitchen technology starting with the Alpha Grill, the world's first automated grilling equipment designed specifically for high-volume restaurants. We believe the heart of a great QSR brand lies in the kitchen.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/92-aniai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aniai.ai/"
    },
    "image": {
     "v": "/logos/aniai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/86984367cc486e12cd06.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.linkedin.com/company/aniai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aniai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "263 W 38th St, New York, NY 10018, United States",
       "lat": 40.754634,
       "lon": -73.990852,
       "src": "https://www.linkedin.com/company/aniai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "annin-robotics",
   "name": "Annin Robotics",
   "summary": "Develops the AR4, a low-cost, open-source 6-axis industrial robot arm designed to fit on a desk.",
   "body": "The AR4 is a low-cost, open-source 6DOF industrial robot that fits right on your desk. Want to build one? You can, whether you machine it from aluminum or 3D print the parts yourself.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/94-annin-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://anninrobotics.com/"
    },
    "image": {
     "v": "/logos/annin-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/10e1ce3b8626d34109e9.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Emmett",
     "src": "https://roboticsconnected.com/companies/94-annin-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/94-annin-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Emmett, United States",
       "lat": 39.307218,
       "lon": -96.056105,
       "src": "https://roboticsconnected.com/companies/94-annin-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "anscer-robotics",
   "name": "ANSCER Robotics",
   "summary": "Manufactures autonomous mobile robots and fleet management software for industrial material handling.",
   "body": "ANSCER Robotics is a leader in \"Hybrid Autonomous Mobile Robotics (Hybrid AMR)\", dedicated to transforming material handling and warehouse automation through cutting-edge technology.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/95-anscer-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.anscer.com/"
    },
    "image": {
     "v": "/logos/anscer-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/bf4a005f05b27c4d3bb7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://roboticsconnected.com/companies/95-anscer-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/95-anscer-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bengaluru, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://roboticsconnected.com/companies/95-anscer-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ant-x",
   "name": "ANT-X",
   "summary": "Manufactures multirotor drone platforms for education, research, and industrial applications.",
   "body": "ANT-X provides a complete laboratory facility for research and education in multi-agent systems, flight robotics, flight control and aerospace control in order to satisfy the need for a ready to use and customizable platform for research and education.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/96-ant-x",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://antx.it/"
    },
    "image": {
     "v": "/logos/ant-x.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4f35a08f40a51b2a9a03.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Milano",
     "src": "https://roboticsconnected.com/companies/96-ant-x",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://roboticsconnected.com/companies/96-ant-x",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Milano, Italy",
       "lat": 45.464194,
       "lon": 9.189635,
       "src": "https://roboticsconnected.com/companies/96-ant-x"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "anyware-robotics",
   "name": "Anyware Robotics",
   "summary": "Develops general-purpose mobile manipulation robots for complex industrial environments.",
   "body": "Anyware Robotics is a physical AI startup building general-purpose robots for physically demanding work. Its first robot, Pixmo, is a heavy-duty mobile manipulator that picks, moves, and places across industrial settings: unloading trailers and containers, palletizing and depalletizing, and tending machines.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/98-anyware-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://anyware-robotics.com/"
    },
    "image": {
     "v": "/logos/anyware-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/780abd17-09bc-4be4-8a0e-e0b482ea7353.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Fremont",
     "src": "https://roboticsconnected.com/companies/98-anyware-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/98-anyware-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Fremont, United States",
       "lat": 37.54827,
       "lon": -121.988571,
       "src": "https://roboticsconnected.com/companies/98-anyware-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "apian-robotics",
   "name": "Apian Robotics",
   "summary": "Provides physical AI infrastructure for healthcare, using autonomous drones and ground robots to deliver critical medical supplies including blood packs, prescriptions…",
   "body": "Transforming healthcare with autonomous logistics",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/100-apian-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.apian.health/"
    },
    "image": {
     "v": "/logos/apian-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/3632051bc236a0043a81.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/100-apian-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/100-apian-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/100-apian-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "apparel-robotics",
   "name": "Apparel Robotics",
   "summary": "Develops AI-native fulfilment infrastructure for on-demand textile manufacturing.",
   "body": "Apparel Robotics Corporation is a startup developing advanced hardware and software technologies for the new era of apparel manufacturing.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/101-apparel-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.apparelrobotics.com/"
    },
    "image": {
     "v": "/logos/apparel-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/668e62f2ce6d12cac7c6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://roboticsconnected.com/companies/101-apparel-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/101-apparel-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://roboticsconnected.com/companies/101-apparel-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "appetronix",
   "name": "Appetronix",
   "summary": "Develops fully autonomous robotic kitchen systems for quick-service restaurants, combining proprietary hardware like the RoWok™ wok with AI-driven operations management.",
   "body": "Appetronix Inc. (formerly SJW Robotics) is a foodtech company specializing in the development and design of autonomous robotic solutions for commercial restaurant kitchens.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/102-appetronix",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.appetronix.com/"
    },
    "image": {
     "v": "/logos/appetronix.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1d6f189d6a17d1bf8098.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/102-appetronix",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/102-appetronix",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, Canada",
       "lat": 42.983675,
       "lon": -81.249607,
       "src": "https://roboticsconnected.com/companies/102-appetronix"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aqua-satellite",
   "name": "Aqua Satellite",
   "summary": "Manufactures autonomous underwater vehicles that make ocean data collection accessible and affordable.",
   "body": "Aqua Satellite’s vision is to make ocean data accessible easily and inexpensively to industry and science. We will accomplish this with plentiful autonomous underwater vehicles capable of reaching anywhere in the ocean with a high degree of speed, endurance, and sensing capability.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/105-aqua-satellite",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aquasatellite.com/"
    },
    "image": {
     "v": "/logos/aqua-satellite.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b56d945550b72eee5249.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://roboticsconnected.com/companies/105-aqua-satellite",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/105-aqua-satellite",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://roboticsconnected.com/companies/105-aqua-satellite"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ara-robotics",
   "name": "Ara Robotics",
   "summary": "Develops modular, autonomous robots for commercial facility maintenance and operations.",
   "body": "ARA designs and manufactures disruptive autonomous mobile commercial/industrial service robots and floor maintenance ecosystems. Our robots inspect, vacuum, scrub, wash, polish and decontaminate all types of floors and even maintain itself in complete autonomy with their patented design.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/106-ara-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ararobotics.eu/"
    },
    "image": {
     "v": "/logos/ara-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/aa7608859ace7e36bedb.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ankara",
     "src": "https://tr.linkedin.com/company/ararobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Turkey",
     "src": "https://tr.linkedin.com/company/ararobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Koc Kuleleri A Blok, Ankara, Çankaya 06540, Turkey",
       "lat": 39.920776,
       "lon": 32.85405,
       "src": "https://tr.linkedin.com/company/ararobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "archangel-autonomy",
   "name": "Archangel Autonomy",
   "summary": "Builds edge AI systems for human-machine teaming in defence and security.",
   "body": "Its core products include Argonaut, an AI camera system for threat detection; Xnaut, a navigation platform enabling autonomous drone flight without GPS; and Skybase, satellite image processing with AI. The company targets law enforcement, first responders, NGOs, wildlife rangers, and military operators globally.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/107-archangel-autonomy",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.archangelautonomy.com/"
    },
    "image": {
     "v": "/logos/archangel-autonomy.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9f24d7247e1cc2a73d66.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Oxford",
     "src": "https://roboticsconnected.com/companies/107-archangel-autonomy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/107-archangel-autonomy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Oxford, United Kingdom",
       "lat": 51.752013,
       "lon": -1.25785,
       "src": "https://roboticsconnected.com/companies/107-archangel-autonomy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arix-technologies",
   "name": "ARIX Technologies",
   "summary": "Develops proprietary pipe-crawling robots for Corrosion Under Insulation (CUI) detection in oil and gas infrastructure.",
   "body": "ARIX replaces sampling-based inspection with full-circuit robotic inspection delivered as a managed service.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/111-arix-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.arix-tech.com/"
    },
    "image": {
     "v": "/logos/arix-technologies.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0c4038bda26b00c461a4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Houston",
     "src": "https://roboticsconnected.com/companies/111-arix-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/111-arix-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Houston, United States",
       "lat": 29.758938,
       "lon": -95.367697,
       "src": "https://roboticsconnected.com/companies/111-arix-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arrobot",
   "name": "Arrobot",
   "summary": "Develops custom autonomous unmanned ground vehicles and mobile robots tailored to client requirements, with a focus on defence and aerospace sectors.",
   "body": "ARROBOT is a JV between Raghu Vamsi and PAR EAST organizations i.e. ‘Raghu Vamsi PAR EAST Autonomous Solutions’ to address the exponentially growing need for driving automation i.e., Industry 4.0 with solutions that are designed specifically to client needs, sustainable and help achieve the desired ROI.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/112-arrobot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://arrobot.co/"
    },
    "image": {
     "v": "/logos/arrobot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/075d3750dfd635806277.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hyderabad",
     "src": "https://roboticsconnected.com/companies/112-arrobot",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/112-arrobot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hyderabad, India",
       "lat": 17.360589,
       "lon": 78.474061,
       "src": "https://roboticsconnected.com/companies/112-arrobot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arti",
   "name": "ARTI",
   "summary": "Develops hardware-agnostic autonomy software for ground-based autonomous mobile robots.",
   "body": "We make things moving! ARTI is a deep-tech software start-up developing intelligent solutions for ground-based autonomous mobile robots – robust enough for real-world scenarios and adaptable to various industrial sectors and operational environments, both indoors and outdoors.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/114-arti",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://arti-robots.com/"
    },
    "image": {
     "v": "/logos/arti.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5cc4b69537253996ad41.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gössendorf",
     "src": "https://at.linkedin.com/company/arti-robots",
     "asof": "2026-11"
    },
    "country": {
     "v": "Austria",
     "src": "https://at.linkedin.com/company/arti-robots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bundesstraße 83, Gössendorf, Steiermark 8077, Austria",
       "lat": 47.007593,
       "lon": 15.481459,
       "src": "https://at.linkedin.com/company/arti-robots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "artimus-robotics",
   "name": "Artimus Robotics",
   "summary": "Develops HASEL artificial muscles: soft electric actuators inspired by biological muscle, offering silent operation and energy efficiency for robotic applications.",
   "body": "Artimus Robotics is providing life-like motion to the next generation of robotics and automation. Inspired by nature, we are taking a radically new approach to actuation by introducing HASEL artificial muscles.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/117-artimus-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.artimusrobotics.com/"
    },
    "image": {
     "v": "/logos/artimus-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/ficons/8aba93_6e856a511cc74f29bea68ff62a95c66a%7Emv2.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boulder",
     "src": "https://roboticsconnected.com/companies/117-artimus-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/117-artimus-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boulder, United States",
       "lat": 40.014986,
       "lon": -105.270545,
       "src": "https://roboticsconnected.com/companies/117-artimus-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arx-robotics-gmbh",
   "name": "ARX Robotics GmbH",
   "summary": "Develops autonomous unmanned ground vehicles and software platforms for defence applications.",
   "body": "Enhance. Multiply. Protect. ARX Robotics develops new defense capabilities for European armed forces. At the core is the proprietary ARX Mithra OS, which transforms both new and legacy platforms into networked, AI-enabled, and tactically deployable systems – modular, open-architecture, and mission-ready.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/118-arx-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.arx-robotics.com/"
    },
    "image": {
     "v": "/logos/arx-robotics-gmbh.png",
     "fit": "contain",
     "src": "https://media.brand.dev/5a4a6f0f-c23e-4116-8d2c-fe3e08c12aa2.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Oberding",
     "src": "https://roboticsconnected.com/companies/118-arx-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/118-arx-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Oberding, Germany",
       "lat": 48.322413,
       "lon": 11.846437,
       "src": "https://roboticsconnected.com/companies/118-arx-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ascent-aerosystems",
   "name": "Ascent AeroSystems",
   "summary": "Manufactures portable, rugged small unmanned aerial systems with a distinctive coaxial vehicle configuration.",
   "body": "The company's platforms, including the Sprite, Helius and NX30 models, are simpler to operate and more durable than typical multi-rotor drones. The company serves defence, logistics, agriculture and inspection sectors.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/119-ascent-aerosystems",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robinsonheli.com/"
    },
    "image": {
     "v": "/logos/ascent-aerosystems.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0113027d727a51b0e829.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wilmington",
     "src": "https://roboticsconnected.com/companies/119-ascent-aerosystems",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/119-ascent-aerosystems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Wilmington, United States",
       "lat": 39.738331,
       "lon": -75.552747,
       "src": "https://roboticsconnected.com/companies/119-ascent-aerosystems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "assetcool",
   "name": "AssetCool",
   "summary": "Develops photonic coatings and modular Capacity-1 robotic systems to passively cool overhead power lines and increase conductor ampacity.",
   "body": "AssetCool is a UK deep-tech company delivering robotic grid upgrades that provide the fastest speed-to-power available today.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/121-assetcool",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.assetcool.com/"
    },
    "image": {
     "v": "/logos/assetcool.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4437258fd506823acf7b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Batley",
     "src": "https://uk.linkedin.com/company/assetcool",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/assetcool",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "AssetCool, Terawatt-1,  Unit A1, Batley, England WF17 6GH, United Kingdom",
       "lat": 53.716564,
       "lon": -1.636386,
       "src": "https://uk.linkedin.com/company/assetcool"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "astrobotic",
   "name": "Astrobotic",
   "summary": "Space robotics company designing and manufacturing autonomous lunar landers and rovers.",
   "body": "Astrobotic is at the forefront of advancing space exploration and technology development. Our expertise spans a wide range of technologies, including suborbital rockets, orbital spacecraft, lunar spacecraft, and surface infrastructure.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/122-astrobotic",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.astrobotic.com/"
    },
    "image": {
     "v": "/logos/astrobotic.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/29abd52fe379052bfaac.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/astrobotic",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/astrobotic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1016 N. Lincoln Ave, Pittsburgh, Pennsylvania 15233, United States",
       "lat": 40.450327,
       "lon": -80.020113,
       "src": "https://www.linkedin.com/company/astrobotic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "astroforge",
   "name": "AstroForge",
   "summary": "Develops low-cost, autonomous spacecraft to mine near-Earth asteroids for platinum-group metals and critical minerals.",
   "body": "AstroForge is a deep-space mining company on a mission to extract valuable metals from asteroids. By bringing space resources into Earth's supply chain, we're aiming to reduce the need for traditional terrestrial mining methods and explore a more sustainable future - one mission at a time.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/123-astroforge",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.astroforge.com/"
    },
    "image": {
     "v": "/logos/astroforge.png",
     "fit": "contain",
     "src": "https://media.brand.dev/02950a8f-f8f3-4f9e-9c29-e89c5e3bc427.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seal Beach",
     "src": "https://roboticsconnected.com/companies/123-astroforge",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/123-astroforge",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seal Beach, United States",
       "lat": 33.742397,
       "lon": -118.105593,
       "src": "https://roboticsconnected.com/companies/123-astroforge"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "astrolab",
   "name": "Astrolab",
   "summary": "Develops commercial planetary surface mobility vehicles specialised for the Moon and Mars.",
   "body": "Astrolab, The Lunar Operations Company, designs and builds the systems and hardware the lunar economy will come to depend on: rovers, power, and connectivity for sustained operations on the Moon. Its LUNAR OS integrates mobility, power, and data processing.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/124-astrolab",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.astrolab.space/"
    },
    "image": {
     "v": "/logos/astrolab.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ce76e43344f086a3b736.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hawthorne",
     "src": "https://roboticsconnected.com/companies/124-astrolab",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/124-astrolab",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hawthorne, United States",
       "lat": 33.912827,
       "lon": -118.342612,
       "src": "https://roboticsconnected.com/companies/124-astrolab"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "asylon-robotics",
   "name": "Asylon Robotics",
   "summary": "Develops autonomous security systems combining ground robots, aerial drones, and AI-driven software for facility perimeter monitoring.",
   "body": "Founded in 2015, Asylon Robotics is the only U.S. company delivering fully orchestrated air and ground robotic operations at enterprise scale, on a mission to close the coverage gaps, augment human operators, and deliver business outcomes.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/125-asylon-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://asylonrobotics.com/"
    },
    "image": {
     "v": "/logos/asylon-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/12461f650578dc849c2e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Norristown",
     "src": "https://www.linkedin.com/company/asylon-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/asylon-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "52 Buttonwood St, Norristown, Pennsylvania 19401, United States",
       "lat": 40.118063,
       "lon": -75.360956,
       "src": "https://www.linkedin.com/company/asylon-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "atomic-machines",
   "name": "Atomic Machines",
   "summary": "Develops robotic manufacturing platforms for creating micro-electromechanical devices using their proprietary Matter Compiler™ technology.",
   "body": "Atomic Machines is on Earth to radically advance humanity's command of matter.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/126-atomic-machines",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.atomicmachines.com/"
    },
    "image": {
     "v": "/logos/atomic-machines.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1d5da5b28d9446ee4f9c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Emeryville",
     "src": "https://roboticsconnected.com/companies/126-atomic-machines",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/126-atomic-machines",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Emeryville, United States",
       "lat": 37.831409,
       "lon": -122.286527,
       "src": "https://roboticsconnected.com/companies/126-atomic-machines"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "attabotics",
   "name": "Attabotics",
   "summary": "Developed automated storage and retrieval systems for fulfilment centres, featuring proprietary 3D mobile robots operating within a modular cube-based storage structure…",
   "body": "Not all cube-based automation is created equal. Attabotics is a fundamentally different approach to robotic storage and fulfillment—built to use the full warehouse cube, not simply automate the space around or above inventory.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/127-attabotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://attabotics.com/"
    },
    "image": {
     "v": "/logos/attabotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0ee3d341a13018bae18d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Calgary",
     "src": "https://roboticsconnected.com/companies/127-attabotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/127-attabotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Calgary, Canada",
       "lat": 51.045606,
       "lon": -114.057541,
       "src": "https://roboticsconnected.com/companies/127-attabotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autodiscovery",
   "name": "Autodiscovery",
   "summary": "Mobile robotics system integrator and UK distributor for AgileX and Unitree robot platforms, serving industries including agriculture, logistics, and defence.",
   "body": "Autodiscovery is the fastest growing robotics first company in the UK. Autodiscovery is a field robotics system integrator working on embodied intelligence. We are creating the next generation AGI that lives inside robots in the real world.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/133-autodiscovery",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://autodiscovery.co.uk/"
    },
    "image": {
     "v": "/logos/autodiscovery.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e64e1a5e6b978425f133.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wantage",
     "src": "https://roboticsconnected.com/companies/133-autodiscovery",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/133-autodiscovery",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Wantage, United Kingdom",
       "lat": 51.588597,
       "lon": -1.426537,
       "src": "https://roboticsconnected.com/companies/133-autodiscovery"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autonaut",
   "name": "AutoNaut",
   "summary": "Manufactures uncrewed surface vessels powered by patented wave foil technology and solar panels for autonomous maritime operations.",
   "body": "AutoNaut USV is a wave propelled Uncrewed Surface Vessel that can be deployed offshore for multiple months, collecting data for a range of applications and industries including: Oil, Gas and Offshore Renewables, Defence and Security Services and Research and Academia.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/136-autonaut",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://autonautusv.com/"
    },
    "image": {
     "v": "/logos/autonaut.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/136/1790850727103.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "OKEHAMPTON",
     "src": "https://uk.linkedin.com/company/autonaut-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/autonaut-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "AutoNaut Ltd, OKEHAMPTON, Devon EX20 1BQ, United Kingdom",
       "lat": 50.737667,
       "lon": -4.000316,
       "src": "https://uk.linkedin.com/company/autonaut-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agrirobot",
   "name": "AgriRobot",
   "summary": "Develops certified safety software solutions for autonomous agricultural robots, enabling full autonomy without continuous operator supervision.",
   "body": "We believe we can help make food production more sustainable by enabling farmers around the world to make better use of agricultural field robots. Even though robots are gaining ground in agriculture, they still need to be physically monitored by the farmer.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/141-agrirobot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://agrirobot.ai/"
    },
    "image": {
     "v": "/logos/agrirobot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d06e6b369d6619b3c34f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kongens Lyngby",
     "src": "https://dk.linkedin.com/company/agrirobot",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/agrirobot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Eletrovej 331, Kongens Lyngby, Capital Region 2800, Denmark",
       "lat": 55.771865,
       "lon": 12.505141,
       "src": "https://dk.linkedin.com/company/agrirobot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "antobot",
   "name": "Antobot",
   "summary": "Develops affordable, intelligent agricultural robots with embedded AI and computer vision technology for sustainable precision farming.",
   "body": "Antobot is an award-winning start-up providing affordable robotics for sustainable agriculture. Combining cutting-edge hardware and software with a world-first embedded AI and controls system for agri-robots (the universal robot control unit®), we make fully digitised precision farming available for all.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/142-antobot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://antobot.ai/"
    },
    "image": {
     "v": "/logos/antobot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/855dffe55f7c10f25189.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://roboticsconnected.com/companies/142-antobot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/142-antobot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cambridge, United Kingdom",
       "lat": 52.197585,
       "lon": 0.139154,
       "src": "https://roboticsconnected.com/companies/142-antobot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "blueye-robotics",
   "name": "Blueye Robotics",
   "summary": "Manufactures professional underwater remotely operated vehicles (ROVs) for marine and maritime applications.",
   "body": "Blueye Robotics began in 2015 with a single idea: to contribute to greater knowledge and understanding of the ocean by making it easier to see what is happening below the surface.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/145-blueye-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.blueyerobotics.com/"
    },
    "image": {
     "v": "/logos/blueye-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/94a48407bc2d92762268.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Trondheim",
     "src": "https://no.linkedin.com/company/blueye-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://no.linkedin.com/company/blueye-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Strandveien 43, Trondheim, Trøndelag 7067, Norway",
       "lat": 63.439622,
       "lon": 10.427777,
       "src": "https://no.linkedin.com/company/blueye-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bubble-robotics",
   "name": "Bubble Robotics",
   "summary": "Develops autonomous underwater robotic systems for offshore infrastructure monitoring.",
   "body": "Bubble designs and operates fleets of integrated autonomous surface–subsea robotic systems that remain at sea for up to six months, delivering continuous inspection, survey, and underwater monitoring without ever sending vessels or crews to sea.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/147-bubble-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bubble-robotics.com/"
    },
    "image": {
     "v": "/logos/bubble-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/a60f659b-d0f8-4d47-a2e3-3443900fa674.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/bubble-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/bubble-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zürich, Switzerland, Switzerland",
       "lat": 46.939424,
       "lon": 7.465359,
       "src": "https://ch.linkedin.com/company/bubble-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "callen-lenz",
   "name": "Callen-Lenz",
   "summary": "Develops, and manufactures uncrewed aerial systems (UAS) and associated avionics in-house, delivering operationally proven capabilities for defence, security, and energy…",
   "body": "Callen-Lenz is a market-leading UK SME providing operationally proven technological solutions, including bespoke aircraft, rapid prototyping, upgrades, software, and avionics, as well as complementary technical consultancy for crewed and uncrewed aviation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/148-callen-lenz",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.callenlenz.com/"
    },
    "image": {
     "v": "/logos/callen-lenz.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5e744c451d59ae876ac5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Salisbury",
     "src": "https://roboticsconnected.com/companies/148-callen-lenz",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/148-callen-lenz",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Salisbury, United Kingdom",
       "lat": 51.069061,
       "lon": -1.795413,
       "src": "https://roboticsconnected.com/companies/148-callen-lenz"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cambrian-robotics",
   "name": "Cambrian Robotics",
   "summary": "Develops AI-powered vision systems for industrial and collaborative robots.",
   "body": "Cambrian Robotics develops cutting-edge AI-powered vision systems that enable industrial and collaborative robots to automate complex manufacturing tasks with unprecedented precision, trusted by global leaders like Toyota, VW, and Electrolux.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/149-cambrian-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cambrianrobotics.ai/"
    },
    "image": {
     "v": "/logos/cambrian-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1c83a16482b7f1c7e463.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/149-cambrian-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/149-cambrian-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/149-cambrian-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "chemify",
   "name": "Chemify",
   "summary": "Develops a chemical programming language and robotic automation systems that digitise molecule creation.",
   "body": "Accelerating molecular discovery through the power of Chemputation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/151-chemify",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.chemify.io/"
    },
    "image": {
     "v": "/logos/chemify.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6cc2c2790aae475b042e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Glasgow",
     "src": "https://roboticsconnected.com/companies/151-chemify",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/151-chemify",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Glasgow, United Kingdom",
       "lat": 55.861155,
       "lon": -4.250169,
       "src": "https://roboticsconnected.com/companies/151-chemify"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cognibotics",
   "name": "Cognibotics",
   "summary": "Swedish motion-technology company pioneering intelligent automation that enhances productivity and work quality.",
   "body": "Cognibotics put years of research on robot accuracy, calibration and kinematics to practical use in new lightweight robot designs with record breaking reach, speed and precision.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/153-cognibotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cognibotics.com/"
    },
    "image": {
     "v": "/logos/cognibotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/7ec5a6584f8bc298df1a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lund",
     "src": "https://se.linkedin.com/company/cognibotics-ab",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://se.linkedin.com/company/cognibotics-ab",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ideon Science Park, Lund, 22370, Sweden",
       "lat": 55.70293,
       "lon": 13.192945,
       "src": "https://se.linkedin.com/company/cognibotics-ab"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cron-ai",
   "name": "Cron AI",
   "summary": "Develops senseEDGE, a deep learning platform that enhances 3D sensor perception for autonomous systems and smart infrastructure.",
   "body": "Cron AI is a deep tech company specialising in 3D sensor perception. At the forefront of our innovation lies senseEDGE, an innovative deep learning first perception platform.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/154-cron-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cronai.ai/"
    },
    "image": {
     "v": "/logos/cron-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a5a77471028ab0bb4bf6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/cronai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/cronai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4-6 Canfield Place, Finchley Road, London, NW6 3BT, London, England NW6 3BT, United Kingdom",
       "lat": 51.548339,
       "lon": -0.177393,
       "src": "https://uk.linkedin.com/company/cronai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "crover",
   "name": "Crover",
   "summary": "Develops autonomous robotic systems for monitoring grain in storage using patented subsurface locomotion technology.",
   "body": "Using the world's first technology for locomotion in bulk solids, Crover aims to reduce grain loss during long-term storage by mapping conditions inside grain bulks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/155-crover",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.crover.tech/"
    },
    "image": {
     "v": "/logos/crover.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0dc45cb37b913b0705fc.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Edinburgh",
     "src": "https://uk.linkedin.com/company/crover",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/crover",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "101 Rose Street South Lane, Edinburgh, Scotland, United Kingdom",
       "lat": 55.951842,
       "lon": -3.201113,
       "src": "https://uk.linkedin.com/company/crover"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dogtooth-technologies",
   "name": "Dogtooth Technologies",
   "summary": "Manufactures intelligent robotic harvesters for soft fruit picking, using computer vision and machine learning to match human picking performance.",
   "body": "The platform enables farm managers to forecast yield seven to fourteen days ahead and remotely adjust harvesting parameters to optimise yield and reduce waste. The company operates commercially across multiple customer sites and manufactures hundreds of robots annually.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/156-dogtooth-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dogtooth.tech/"
    },
    "image": {
     "v": "/logos/dogtooth-technologies.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e5cd040f9973b8be7146.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Melbourn",
     "src": "https://roboticsconnected.com/companies/156-dogtooth-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/156-dogtooth-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Melbourn, United Kingdom",
       "lat": 52.081722,
       "lon": 0.018662,
       "src": "https://roboticsconnected.com/companies/156-dogtooth-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dronamics",
   "name": "Dronamics",
   "summary": "World's first licensed cargo drone airline, developing the Black Swan: a fixed-wing autonomous UAV capable of transporting 350 kg over 2,500 km with significantly lower…",
   "body": "Dronamics is a leading developer of unmanned aerial systems for civilian and defense applications. The Black Swan is a large, high-payload drone that serves logistics, defense, surveying and mapping. The Black Cygnet is a long-endurance drone with capabilities across civil protection, defense, surveying and mapping.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/157-dronamics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dronamics.com/"
    },
    "image": {
     "v": "/logos/dronamics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/185caed5b3a7f363c5e7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sofia",
     "src": "https://roboticsconnected.com/companies/157-dronamics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Bulgaria",
     "src": "https://roboticsconnected.com/companies/157-dronamics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sofia, Bulgaria",
       "lat": 42.697703,
       "lon": 23.321736,
       "src": "https://roboticsconnected.com/companies/157-dronamics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "earth-rover",
   "name": "Earth Rover",
   "summary": "Develops autonomous weeding and scouting robots for agriculture using light-based weed elimination technology.",
   "body": "We are an agritech start-up pioneer in the use of concentrated light for weed control.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/160-earth-rover",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.earthrover.farm/"
    },
    "image": {
     "v": "/logos/earth-rover.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/95fb57360629262d2202.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Edgmond",
     "src": "https://uk.linkedin.com/company/earth-rover",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/earth-rover",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Poultry Drive, Edgmond, Newport TF10 8JZ, United Kingdom",
       "lat": 52.790768,
       "lon": -2.427502,
       "src": "https://uk.linkedin.com/company/earth-rover"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ekobot",
   "name": "Ekobot",
   "summary": "Develops autonomous agricultural robots combining AI, vision, and electromobility for precision weed management without herbicides.",
   "body": "Ekobot AB, based in Västerås, conducts business based on the business concept of developing, manufacturing and selling autonomous agricultural robots that enable efficient precision cultivation where weed management takes place completely without or with minimal use of herbicides.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/162-ekobot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ekobot.se/"
    },
    "image": {
     "v": "/logos/ekobot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/966377fb418fdd1670f0.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Västerås",
     "src": "https://se.linkedin.com/company/ekobot-autonomous-precision-agriculture-made-easy",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://se.linkedin.com/company/ekobot-autonomous-precision-agriculture-made-easy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Slakterigatan 10, Västerås, Västmanland 721 32, Sweden",
       "lat": 59.5944,
       "lon": 16.50898,
       "src": "https://se.linkedin.com/company/ekobot-autonomous-precision-agriculture-made-easy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "elysium-robotics",
   "name": "Elysium Robotics",
   "summary": "Develops high-dexterity robotic platforms using proprietary dielectric elastomer muscle-like actuators rather than electric motors.",
   "body": "This patented technology enables low-cost, versatile robotic arms and hands for complex manipulation tasks. The company targets manufacturing automation and defence applications, with near-term focus on industrial tasks like fruit packing and machine tending.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/164-elysium-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://elysiumrobotics.com/"
    },
    "image": {
     "v": "/logos/elysium-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9ffbb712774f8e545a89.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Round Rock",
     "src": "https://roboticsconnected.com/companies/164-elysium-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/164-elysium-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Round Rock, United States",
       "lat": 30.508592,
       "lon": -97.678806,
       "src": "https://roboticsconnected.com/companies/164-elysium-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "evolve-dynamics",
   "name": "Evolve Dynamics",
   "summary": "British manufacturer of uncrewed aerial systems and software for defence, security, and infrastructure sectors.",
   "body": "Evolve Dynamics builds rugged, battle-tested uncrewed aircraft systems for defence, emergency response, and critical infrastructure. Our platforms are shaped by frontline use, engineered for contested environments, and delivered with sovereign supply chains.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/167-evolve-dynamics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.evolvedynamics.com/"
    },
    "image": {
     "v": "/logos/evolve-dynamics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/92dd63a20befe4c65046.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Guildford",
     "src": "https://roboticsconnected.com/companies/167-evolve-dynamics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/167-evolve-dynamics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Guildford, United Kingdom",
       "lat": 51.235607,
       "lon": -0.573206,
       "src": "https://roboticsconnected.com/companies/167-evolve-dynamics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flarebright",
   "name": "FlareBright",
   "summary": "Develops GPS-free navigation and flight safety solutions for autonomous drones.",
   "body": "Flarebright is a rapidly growing UK-based leader in unmanned aircraft systems (UAS) technology. Founded in 2015 by Dr. Kelvin Hamilton and Dr. Conrad Rider, the company is headquartered in Westcott Venture Park near Oxford, with an additional office in London, and international offices coming soon.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/169-flarebright",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.flarebright.com/"
    },
    "image": {
     "v": "/logos/flarebright.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/34f95a10defab3589841.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/flarebright",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/flarebright",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "84 Wood Lane, London, W12 0BZ, United Kingdom",
       "lat": 51.515822,
       "lon": -0.223943,
       "src": "https://uk.linkedin.com/company/flarebright"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flyingbasket",
   "name": "FlyingBasket",
   "summary": "Manufactures heavy-lift cargo drones for industrial operations.",
   "body": "With a payload capability of up to 100kg the FB3 has proven its capabilities in transport and lifting operations for energy, telecom, logistics, construction, forestry and more. Onshore and Offshore.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/170-flyingbasket",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://flyingbasket.com/"
    },
    "image": {
     "v": "/logos/flyingbasket.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/dde79dd65c1c8fd31b46.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bozen",
     "src": "https://it.linkedin.com/company/flyingbasket",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://it.linkedin.com/company/flyingbasket",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Via Enrico Fermi, 27, Bozen, Süd Tirol 39100, Italy",
       "lat": 46.478841,
       "lon": 11.327146,
       "src": "https://it.linkedin.com/company/flyingbasket"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "goodbytz",
   "name": "GoodBytz",
   "summary": "Develops autonomous modular robotic kitchen systems for hospitality and food service.",
   "body": "Fresh food has to work every day. At goodBytz, we build autonomous cooking systems designed for real operations. We combine hospitality and technology to make freshly cooked food a reliable part of daily operations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/173-goodbytz",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.goodbytz.com/"
    },
    "image": {
     "v": "/logos/goodbytz.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a12ae2b9a037d96fda6d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hamburg",
     "src": "https://de.linkedin.com/company/goodbytz",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/goodbytz",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Werner-Otto Straße, Hamburg, HH 22179, Germany",
       "lat": 53.600641,
       "lon": 10.069209,
       "src": "https://de.linkedin.com/company/goodbytz"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hive",
   "name": "HIVE",
   "summary": "Develops an AI-powered retrofit module that retrofits industrial machinery such as excavators, wheel loaders, forklifts and haulers with autonomous capabilities.",
   "body": "HIVE builds the silicon brain that makes any machine intelligent. The brain works with the machines you already own, connecting them into one coordinated fleet, providing unlimited access to skilled industrial labour. Our team understands industrial operations from the inside.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/175-hive",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hiveautonomy.no/"
    },
    "image": {
     "v": "/logos/hive.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/48b232e6798e27545874.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/hiveautonomy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/hiveautonomy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "27 Old Gloucester Street, London, England WC1N 3AF, United Kingdom",
       "lat": 51.521894,
       "lon": -0.124394,
       "src": "https://uk.linkedin.com/company/hiveautonomy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "honuworx",
   "name": "HonuWorx",
   "summary": "Develops autonomous subsea inspection and intervention systems designed to reduce reliance on large crewed vessels and enable all-weather operations.",
   "body": "The company offers uncrewed platforms coupled with cloud-based control software for persistent underwater missions. Operating in the subsea robotics sector, HonuWorx targets energy, defence and maritime industries.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/176-honuworx",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://honu-x.com/"
    },
    "image": {
     "v": "/logos/honuworx.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ed3f553ece8085ef5d67.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Aberdeen",
     "src": "https://roboticsconnected.com/companies/176-honuworx",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/176-honuworx",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Aberdeen, United Kingdom",
       "lat": 57.148243,
       "lon": -2.092809,
       "src": "https://roboticsconnected.com/companies/176-honuworx"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hyperion-robotics",
   "name": "Hyperion Robotics",
   "summary": "Develops low-carbon concrete foundations using computational design, robotic manufacturing, and advanced materials.",
   "body": "Hyperion Robotics enables the construction industry to build smarter, faster, and greener. How? We create intricate structural designs and use cutting-edge large-scale 3D printing technology, along with localised microfactories, to build durable concrete infrastructure.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/178-hyperion-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hyperionrobotics.com/"
    },
    "image": {
     "v": "/logos/hyperion-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/adf13502fccb85bad7f5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Espoo",
     "src": "https://fi.linkedin.com/company/hyperionrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Finland",
     "src": "https://fi.linkedin.com/company/hyperionrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Vitikka 6, Espoo, 02630, Finland",
       "lat": 60.207077,
       "lon": 24.766516,
       "src": "https://fi.linkedin.com/company/hyperionrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kilter",
   "name": "Kilter",
   "summary": "Develops autonomous field robots for plant-level weed control using AI-driven crop recognition and patented Single Drop Technology.",
   "body": "At Kilter, we're on a mission to return the land we borrow and restore balance to our planet. We develop autonomous weeding robots to improve farming practices and accelerate the transition to a sustainable food system. Join us in solving our challenges and embracing life in harmony with nature.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/182-kilter",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kiltersystems.com/"
    },
    "image": {
     "v": "/logos/kilter.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/221546949c8d4d567c1f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Langhus",
     "src": "https://roboticsconnected.com/companies/182-kilter",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://roboticsconnected.com/companies/182-kilter",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Langhus, Norway",
       "lat": 59.749673,
       "lon": 10.836611,
       "src": "https://roboticsconnected.com/companies/182-kilter"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kraken-technology",
   "name": "Kraken Technology",
   "summary": "Manufactures autonomous uncrewed surface vessels (USVs) for maritime operations.",
   "body": "Kraken Technology Group (founded 2021) designs and manufactures low‑cost, high‑performance autonomous surface and subsurface vessels using scalable composite manufacturing, advanced powertrains and MOSA-based control systems for defence, security, infrastructure, commercial and aid missions worldwide.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/183-kraken-technology",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://krakentechnology.com/"
    },
    "image": {
     "v": "/logos/kraken-technology.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8a2b3a3eb6e07057297e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/183-kraken-technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/183-kraken-technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/183-kraken-technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kyber",
   "name": "Kyber",
   "summary": "Provides real-time infrastructure for controlling remote devices, synchronising video, audio, sensor data and control inputs with minimal latency under 8-10ms end-to-end.",
   "body": "Kyber is building the real-time infrastructure that makes any machine feel local.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/184-kyber",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kyber.tech/"
    },
    "image": {
     "v": "/logos/kyber.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6e97fbe4be994fcbf4f2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://roboticsconnected.com/companies/184-kyber",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://roboticsconnected.com/companies/184-kyber",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://roboticsconnected.com/companies/184-kyber"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "malloy-aeronautics",
   "name": "Malloy Aeronautics",
   "summary": "British drone and eVTOL manufacturer specialising in heavy lift autonomous aerial vehicles.",
   "body": "After building the world's first Hoverbike in 2009, we are crafting the next VTOL aircraft generation. We build heavy lift drones capable of delivering rapid response aid, equipment and ultimately people over buildings, rivers and mountains, autonomously at the push of a button.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/187-malloy-aeronautics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.malloyaeronautics.com/"
    },
    "image": {
     "v": "/logos/malloy-aeronautics.png",
     "fit": "contain",
     "src": "https://icons.duckduckgo.com/ip3/malloyaeronautics.com.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beaconsfield",
     "src": "https://roboticsconnected.com/companies/187-malloy-aeronautics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/187-malloy-aeronautics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beaconsfield, United Kingdom",
       "lat": 51.608288,
       "lon": -0.657123,
       "src": "https://roboticsconnected.com/companies/187-malloy-aeronautics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "marble",
   "name": "Marble",
   "summary": "Develops advanced UAV technology and software for maritime surveillance.",
   "body": "Marble creates the raw, high-resolution understanding of a changing planet to guide society toward better outcomes.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/188-marble",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://marble.aero/"
    },
    "image": {
     "v": "/logos/marble.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1a4f2f1ae5624d883c7a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chippenham",
     "src": "https://uk.linkedin.com/company/marble-aerospace",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/marble-aerospace",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Heywood Barn, Chippenham, Wiltshire SN146LS, United Kingdom",
       "lat": 51.458762,
       "lon": -2.115903,
       "src": "https://uk.linkedin.com/company/marble-aerospace"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "maritime-robotics",
   "name": "Maritime Robotics",
   "summary": "Develops autonomous uncrewed surface vessels and maritime autonomy systems for ocean space operations.",
   "body": "We are a global leader and pioneer in advanced maritime drones (USVs) and maritime autonomy. Since our inception in 2005, we have experienced significant growth, especially in the last two years.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/189-maritime-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.maritimerobotics.com/"
    },
    "image": {
     "v": "/logos/maritime-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/2c94afd6-36c4-455c-9c03-3c5601a310f1.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Trondheim",
     "src": "https://no.linkedin.com/company/maritime-robotics-as",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://no.linkedin.com/company/maritime-robotics-as",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brattørkaia 13B, Trondheim, Sør-Trøndelag 7010, Norway",
       "lat": 63.433196,
       "lon": 10.401583,
       "src": "https://no.linkedin.com/company/maritime-robotics-as"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "menapia",
   "name": "Menapia",
   "summary": "Develops high-autonomy multicopter UAS platforms for atmospheric research and weather forecasting.",
   "body": "Atmospheric research platforms. Persistent stratospheric infrastructure. Menapia develops and operates high-autonomy UAS platforms for demanding atmospheric research missions. Our mission is to make the atmosphere more observable and accessible through reusable autonomous platforms.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/190-menapia",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.menapia.tech/"
    },
    "image": {
     "v": "/logos/menapia.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/62de5292d7a866e4e991.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Leeds",
     "src": "https://uk.linkedin.com/company/menapia-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/menapia-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Flexspace Albion Park, Leeds, West Yorkshire LS12 2EJ, United Kingdom",
       "lat": 53.797418,
       "lon": -1.543794,
       "src": "https://uk.linkedin.com/company/menapia-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mitsubishi-electric",
   "name": "Mitsubishi Electric",
   "summary": "Diversified Japanese industrial manufacturer with significant robotics and factory automation operations.",
   "body": "They design and manufacture MELFA industrial robots and ASSISTA collaborative robots, along with control systems, drives, and vision technology. The company positions itself around e-F@ctory smart manufacturing, delivering integrated automation solutions for factories through IoT connectivity and systems integration.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/192-mitsubishi-electric",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mitsubishielectric.com/fa/"
    },
    "image": {
     "v": "/logos/mitsubishi-electric.png",
     "fit": "contain",
     "src": "https://media.brand.dev/230d1120-672b-42bc-8a56-e7563c341d20.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://roboticsconnected.com/companies/192-mitsubishi-electric",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://roboticsconnected.com/companies/192-mitsubishi-electric",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://roboticsconnected.com/companies/192-mitsubishi-electric"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "msubs",
   "name": "MSubs",
   "summary": "Independent manufacturer of manned and unmanned submarines and autonomous underwater vehicles for military and commercial markets.",
   "body": "MSubs is a UK engineering company specialising in the design, manufacture and delivery of advanced crewed and uncrewed underwater systems. We provide end-to-end engineering capability across concept development, design, manufacture, integration, testing and support for defence, scientific and commercial applications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/194-msubs",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://msubs.com/"
    },
    "image": {
     "v": "/logos/msubs.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/cdb62b80b032d85454d5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Plymouth",
     "src": "https://uk.linkedin.com/company/msubs-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/msubs-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "42 Sisna Park Road, Plymouth, England PL6 7FH, United Kingdom",
       "lat": 50.422011,
       "lon": -4.091774,
       "src": "https://uk.linkedin.com/company/msubs-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nucleus-robotics",
   "name": "Nucleus Robotics",
   "summary": "Develops a humanoid labour platform offering robots for hire on factory floors at €25–€45 per hour, targeting intralogistics tasks such as parts picking, loading, and…",
   "body": "The company combines humanoid robotics with proprietary physical AI and world models, featuring multi-modal learning from vision, depth sensing, proprioception and human corrections. It operates a fleet management operating system with telemetry, live video feeds and digital safety controls.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/197-nucleus-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://nucleuslab.ai/"
    },
    "image": {
     "v": "/logos/nucleus-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a9188bd07bb76d1e6f58.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gütersloh",
     "src": "https://roboticsconnected.com/companies/197-nucleus-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/197-nucleus-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gütersloh, Germany",
       "lat": 51.916662,
       "lon": 8.404328,
       "src": "https://roboticsconnected.com/companies/197-nucleus-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "oshen",
   "name": "Oshen",
   "summary": "Develops C-Star, a metre-long autonomous unmanned surface vessel powered by wind and solar energy for ocean monitoring and marine data collection.",
   "body": "Founded in 2022 by Imperial College engineers Anahita Laverack and Ciaran Dowds, the Plymouth-based company builds self-orchestrating robotic swarms that operate at sea for over six months, gathering meteorological and acoustic data via satellite links. Oshen serves government and research customers including NOAA, the Royal Navy and the UK Met Office.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/198-oshen",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://oshendata.com/"
    },
    "image": {
     "v": "/logos/oshen.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f717d0cdee6a22efad91.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Plymouth",
     "src": "https://roboticsconnected.com/companies/198-oshen",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/198-oshen",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Plymouth, United Kingdom",
       "lat": 50.371392,
       "lon": -4.142455,
       "src": "https://roboticsconnected.com/companies/198-oshen"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "consequential-robotics",
   "name": "Consequential Robotics",
   "summary": "Develops biomimetic service robots for homecare, health, education, and lifestyle applications.",
   "body": "Consequential Robotics is a service robotics start-up developing innovative solutions for applications in education, healthcare and research with the main focus on developing assistive robotic systems that will enhance quality of life as people age.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/200-consequential-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://consequentialrobotics.com/"
    },
    "image": {
     "v": "/logos/consequential-robotics.png",
     "fit": "contain",
     "src": "https://assets.squarespace.com/universal/default-favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://uk.linkedin.com/company/consequential-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/consequential-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "UWE Frenchay, Bristol, BS16 1QY, United Kingdom",
       "lat": 51.500768,
       "lon": -2.550311,
       "src": "https://uk.linkedin.com/company/consequential-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neuracore",
   "name": "Neuracore",
   "summary": "Cloud-based robot learning platform that accelerates intelligent robotics development.",
   "body": "The platform provides tools for data collection, curation, training, and deployment of manipulation policies using imitation and reinforcement learning. It supports major robot brands and custom platforms through a flexible dashboard for managing the entire robot learning pipeline.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/201-neuracore",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.neuracore.com/"
    },
    "image": {
     "v": "/logos/neuracore.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d1b043c520f411413f6e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/201-neuracore",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/201-neuracore",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/201-neuracore"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "q5d-technologies",
   "name": "Q5D Technologies",
   "summary": "Develops robotic systems automating electrical wiring harness assembly for automotive, aerospace, and industrial sectors.",
   "body": "Q5D is an innovative technology company developing tools to automate the production of wiring harnesses for the consumer white goods and electronics, through to the automotive and aerospace markets",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/204-q5d-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://q5d.com/"
    },
    "image": {
     "v": "/logos/q5d-technologies.png",
     "fit": "contain",
     "src": "https://media.brand.dev/d9b5e7f9-d661-4eb3-94e8-cdfe9b4993c6.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Portishead",
     "src": "https://uk.linkedin.com/company/q5d",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/q5d",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Q5D Technologies Ltd, Portishead, Bristol BS20 7GF, United Kingdom",
       "lat": 51.494495,
       "lon": -2.774486,
       "src": "https://uk.linkedin.com/company/q5d"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "qlayers",
   "name": "Qlayers",
   "summary": "Develops robotic coating systems for large-scale industrial infrastructure, including storage tanks, wind turbines, and ships.",
   "body": "Qlayers is a Dutch scale-up developing innovative robotic solutions for coating large-scale industrial infrastructures such as storage tanks, wind turbine blades, and ships. Established in 2017, Qlayers set out with a clear mission: to robotize the coating application industry.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/205-qlayers",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.qlayers.com/"
    },
    "image": {
     "v": "/logos/qlayers.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/75c4fc053cb0c72370b4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Delft",
     "src": "https://nl.linkedin.com/company/qlayers",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/qlayers",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ampèreweg 2, Delft, South Holland 2627 BG, Netherlands",
       "lat": 51.987565,
       "lon": 4.369262,
       "src": "https://nl.linkedin.com/company/qlayers"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "reach-industries",
   "name": "Reach Industries",
   "summary": "Develops LUMI, a visual AI copilot designed to augment laboratory scientists and improve research efficiency.",
   "body": "At Reach Industries, we are an early stage start-up with a mission to augment scientists and make labs more efficient, so they can better and faster tackle world challenges. Our intelligent platform, Lumi™, leverages Computer vision, Voice and Machine Learning to capture and analyse operational data.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/206-reach-industries",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://reach.industries/"
    },
    "image": {
     "v": "/logos/reach-industries.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/92a1475e660e184ae40d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://uk.linkedin.com/company/reachindustries",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/reachindustries",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "14 Wootton Road, Bristol, England BS4 4AL, United Kingdom",
       "lat": 51.453461,
       "lon": -2.544494,
       "src": "https://uk.linkedin.com/company/reachindustries"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "recycleye",
   "name": "Recycleye",
   "summary": "Develops AI-powered robotic sorting systems for waste management.",
   "body": "The company combines computer vision, machine learning and robotics to enable automated waste sorting with greater accuracy than manual picking. Its main products are QualiBot®, a computer vision-powered 6-axis robotic arm, and QuantiSort® 2.0, an optical sorter for processing waste streams.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/207-recycleye",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://recycleye.com/"
    },
    "image": {
     "v": "/logos/recycleye.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/927a228ce25baf35c7c7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/207-recycleye",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/207-recycleye",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/207-recycleye"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "reimagine-robotics",
   "name": "Reimagine Robotics",
   "summary": "Develops an AI platform enabling factory workers to train collaborative robots through demonstration rather than programming.",
   "body": "Show the robot what to do, correct it where it fails, and adapt it as the process changes. R2 was founded by members of the team behind DeepMind Applied Robotics, where we worked on imitation learning, reinforcement learning and real-world robot manipulation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/208-reimagine-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://reimaginerobotics.ai/"
    },
    "image": {
     "v": "/logos/reimagine-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d02f12dd6d7daa712f36.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/208-reimagine-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/208-reimagine-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/208-reimagine-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rivelin-netronics",
   "name": "Rivelin Netronics",
   "summary": "Builds the r1000 microfactory, an 8-axis robot platform that automates post-processing and finishing of metal additive manufacturing parts.",
   "body": "Rivelin makes the building blocks. Customers, OEM partners and integrators build the factories. Skilled hands are retiring with no one behind them. Modular robotic building blocks keep precision manufacturing local and re-toolable overnight.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/209-rivelin-netronics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rivelinrobotics.com/"
    },
    "image": {
     "v": "/logos/rivelin-netronics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/c01b6b872b3e8a7e1977.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sheffield",
     "src": "https://uk.linkedin.com/company/rivelin-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/rivelin-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Neepsend Triangle, 1 Burton Road, Sheffield, Yorkshire S3 8BW, United Kingdom",
       "lat": 53.3917,
       "lon": -1.473542,
       "src": "https://uk.linkedin.com/company/rivelin-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotize",
   "name": "Robotize",
   "summary": "Manufactures autonomous mobile robots (AMRs) for automated internal material transport in factories, warehouses, and distribution centres.",
   "body": "Robotize manufactures advanced Autonomous Mobile Robots (AMRs) and related accessories (e.g., Lift and Conveyor Stations) for the fully automated and safe internal material transport within factories, warehouses and DCs.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/212-robotize",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotize.com/"
    },
    "image": {
     "v": "/logos/robotize.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a3cb46c545a7c2b3521c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kongens Lyngby",
     "src": "https://dk.linkedin.com/company/robotize-aps",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/robotize-aps",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Maglebjergvej 5B, Kongens Lyngby, Copenhagen 2800, Denmark",
       "lat": 55.686724,
       "lon": 12.570072,
       "src": "https://dk.linkedin.com/company/robotize-aps"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rocsys",
   "name": "Rocsys",
   "summary": "Develops hands-free autonomous charging solutions for electric vehicle fleets using soft robotics, AI-driven computer vision, and motion planning.",
   "body": "Rocsys is the global leader in hands-free charging and fleet service solutions for electric and autonomous vehicles.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/213-rocsys",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rocsys.com/"
    },
    "image": {
     "v": "/logos/rocsys.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1d26d73b13b9fe2b968a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rijswijk",
     "src": "https://nl.linkedin.com/company/rocsys-handsfree-charging",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/rocsys-handsfree-charging",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Delftweg 65, Rijswijk, South Holland 2289 BA, Netherlands",
       "lat": 52.034136,
       "lon": 4.346242,
       "src": "https://nl.linkedin.com/company/rocsys-handsfree-charging"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rollo-robotics",
   "name": "Rollo Robotics",
   "summary": "Develops autonomous monowheel security robots using gyroscopic stabilisation technology.",
   "body": "Global demand for 24/7 security surveillance is rising with limited human workforce. Rollo Robotics is founded by EY Estonian Entrepreneur of the Year and founders of Cleveron and Clevon to increase industrial- and public safety with a patented, stable, monowheel autonomous patrol robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/214-rollo-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://1rollo.com/"
    },
    "image": {
     "v": "/logos/rollo-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6d9c8370599ff958865b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tallinn",
     "src": "https://roboticsconnected.com/companies/214-rollo-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Estonia",
     "src": "https://roboticsconnected.com/companies/214-rollo-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tallinn, Estonia",
       "lat": 59.437242,
       "lon": 24.757269,
       "src": "https://roboticsconnected.com/companies/214-rollo-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "seesai",
   "name": "sees.ai",
   "summary": "Builds autonomous drone systems for close-quarter infrastructure inspection, specifically targeting electricity transmission and distribution networks.",
   "body": "UK based, Boeing-backed business developing core technology to enable autonomous flight. Founded by a senior team ex. Apple, CERN, McLaren and hedge funds.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/215-sees-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sees.ai/"
    },
    "image": {
     "v": "/logos/seesai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ecd4198c8fc357597bf6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "West Lavant",
     "src": "https://uk.linkedin.com/company/sees-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/sees-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lavant House, West Lavant, Chichester PO18 9AB, United Kingdom",
       "lat": 50.867917,
       "lon": -0.791921,
       "src": "https://uk.linkedin.com/company/sees-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stateful-robotics",
   "name": "Stateful Robotics",
   "summary": "Develops decision intelligence software for autonomous mobile robots operating in dynamic environments.",
   "body": "The platform continuously monitors, analyses and optimises robot behaviour to ensure fleets operate reliably at scale. The company's core technology centres on long-horizon intelligence: persistent memory, contextual reasoning and multi-hour or multi-day planning.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/219-stateful-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://statefulrobotics.com/"
    },
    "image": {
     "v": "/logos/stateful-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0c33cfee6d00e7a1b132.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Oxford",
     "src": "https://roboticsconnected.com/companies/219-stateful-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/219-stateful-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Oxford, United Kingdom",
       "lat": 51.752013,
       "lon": -1.25785,
       "src": "https://roboticsconnected.com/companies/219-stateful-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "synaos",
   "name": "SYNAOS",
   "summary": "Cloud-native intralogistics platform for orchestrating mixed fleets of AGVs, AMRs, forklifts, and human operators within factories and warehouses.",
   "body": "SYNAOS is a leading provider of intralogistics software, orchestrating material flows in factories and warehouses. The SYNAOS Intralogistics Platform seamlessly integrates mobile robots, IoT devices, manual vehicles, and human workers on the shop floor.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/220-synaos",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.synaos.com/"
    },
    "image": {
     "v": "/logos/synaos.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/3846e7ef3ca285859be8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hannover",
     "src": "https://de.linkedin.com/company/synaos",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/synaos",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Goseriede 4, Hannover, Niedersachsen 30159, Germany",
       "lat": 52.377377,
       "lon": 9.732914,
       "src": "https://de.linkedin.com/company/synaos"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tekever",
   "name": "Tekever",
   "summary": "Operates autonomous unmanned aerial systems for intelligence, surveillance, reconnaissance, and electronic warfare missions.",
   "body": "Leading the future of AI-driven autonomy across civil and defence missions. Quick facts about TEKEVER: Founded in 2001 Expertise in Software, Electronics, Communication and Aerospace 1300+ Talented people Contact: General enquiries: info@tekever.com Recruitment: jobs@tekever.com Media: media@tekever.com",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/221-tekever",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tekever.com/"
    },
    "image": {
     "v": "/logos/tekever.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/db6cf54433888e0d8f4f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lisbon",
     "src": "https://pt.linkedin.com/company/tekever",
     "asof": "2026-11"
    },
    "country": {
     "v": "Portugal",
     "src": "https://pt.linkedin.com/company/tekever",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Largo do Duque de Cadaval 17, 1200-160 Lisboa, Lisbon, 1350-352, Portugal",
       "lat": 38.750976,
       "lon": -9.152182,
       "src": "https://pt.linkedin.com/company/tekever"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "telekinesis",
   "name": "Telekinesis",
   "summary": "Develops a Physical AI cloud platform that enables robots to perceive, reason, and act with human-like capabilities across manufacturing and logistics.",
   "body": "Telekinesis is building Europe’s leading Physical AI cloud platform, giving any robot, industrial, mobile, humanoid, quadruped, or drone, the ability to perceive, reason, and act with human-like intelligence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/222-telekinesis",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.telekinesis.ai/"
    },
    "image": {
     "v": "/logos/telekinesis.png",
     "fit": "contain",
     "src": "https://media.brand.dev/f499bb9a-8cf1-446c-920e-f910dbc30641.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Darmstadt",
     "src": "https://roboticsconnected.com/companies/222-telekinesis",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/222-telekinesis",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Darmstadt, Germany",
       "lat": 49.872775,
       "lon": 8.651177,
       "src": "https://roboticsconnected.com/companies/222-telekinesis"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tg0",
   "name": "TG0",
   "summary": "Develops intelligent material-interface technology that embeds AI into everyday surfaces, enabling touch-sensitive and pressure-mapping capabilities for seamless…",
   "body": "We are an IP-focused start-up commercialising a platform technology to create novel tactile control products. Our partners and clients include prolific brands and manufacturers in the consumer and automotive sectors.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/224-tg0",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tg0.co.uk/"
    },
    "image": {
     "v": "/logos/tg0.png",
     "fit": "contain",
     "src": "https://media.brand.dev/68f6bb7a-aed2-4da5-9afd-23ad401d438b.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/224-tg0",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/224-tg0",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/224-tg0"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tharsus",
   "name": "Tharsus",
   "summary": "Advanced contract manufacturer and design partner specialising in complex electro-mechanical automation solutions.",
   "body": "They combine engineering design, manufacturing, and supply chain expertise to bring clients' products from concept to commercial scale. The company serves automation across logistics, energy, healthcare, agriculture and manufacturing sectors.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/225-tharsus",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tharsus.com/"
    },
    "image": {
     "v": "/logos/tharsus.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0fe8077b9b3c5fa19f17.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Blyth",
     "src": "https://roboticsconnected.com/companies/225-tharsus",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/225-tharsus",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Blyth, United Kingdom",
       "lat": 55.12709,
       "lon": -1.509973,
       "src": "https://roboticsconnected.com/companies/225-tharsus"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "theker-robotics",
   "name": "Theker Robotics",
   "summary": "Builds AI-native generalist robots for real-world production environments that adapt in real time without manual reprogramming.",
   "body": "THEKER Robotics is a company specialized in robotics, deep learning, and computer vision. It has the capability to design, manufacture, and comprehensively market all types of autonomous machines or robots for process automation within the industrial sector.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/226-theker-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.theker.ai/"
    },
    "image": {
     "v": "/logos/theker-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d9158be03af4215ca0e9.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Barcelona",
     "src": "https://roboticsconnected.com/companies/226-theker-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://roboticsconnected.com/companies/226-theker-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Barcelona, Spain",
       "lat": 41.38258,
       "lon": 2.177073,
       "src": "https://roboticsconnected.com/companies/226-theker-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tinymobilerobots",
   "name": "TinyMobileRobots",
   "summary": "Develops autonomous mobile robots for sports field line marking and infrastructure surveying.",
   "body": "At TinyMobileRobots, we develop and manufacture precision line marking robots. Today, our machines are deployed and operating across the globe.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/227-tinymobilerobots",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tinymobilerobots.com/"
    },
    "image": {
     "v": "/logos/tinymobilerobots.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2cbd3a53a3b896c93bc6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Malling",
     "src": "https://dk.linkedin.com/company/tinymobilerobots",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/tinymobilerobots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sofienlystvej 9, Malling, Midtjylland 8340, Denmark",
       "lat": 56.041694,
       "lon": 10.192219,
       "src": "https://dk.linkedin.com/company/tinymobilerobots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "uforce",
   "name": "Uforce",
   "summary": "Ukrainian-founded defence technology company headquartered in London that develops and integrates combat-proven unmanned systems across air, land, and sea domains.",
   "body": "UFORCE builds the world's most battle-proven autonomous weapons systems. Over 300,000 real combat missions. Sea, air, land, and intercept. Iterated under fire in Ukraine and now scaling globally for allied militaries.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/230-uforce",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.uforce.com/"
    },
    "image": {
     "v": "/logos/uforce.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/36899aa2935e98511c6f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/230-uforce",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/230-uforce",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/230-uforce"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wheelme",
   "name": "wheel.me",
   "summary": "Develops autonomous wheel systems that retrofit existing carts and racking equipment into self-driving material handling robots.",
   "body": "wheel.me is a Norwegian robotics and IoT company that offers a pioneering approach to indoor mobility. Specializing in autonomous wheels, we transform existing infrastructure into self-driving robots, helping businesses enhance efficiency and productivity on their automation journeys.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/237-wheel-me",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.wheel.me/"
    },
    "city": {
     "v": "Oslo",
     "src": "https://no.linkedin.com/company/wheel-me",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://no.linkedin.com/company/wheel-me",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Karenslyst allé 57, Oslo, 0277, Norway",
       "lat": 59.921385,
       "lon": 10.677334,
       "src": "https://no.linkedin.com/company/wheel-me"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "windracers",
   "name": "Windracers",
   "summary": "British manufacturer of autonomous heavy-lift cargo drones.",
   "body": "Founded in 2017, Windracers is a British civil and defence drone company that engineers and manufactures the world's most accomplished dual-use heavy-lift drone, Windracers ULTRA.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/238-windracers",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://windracers.com/"
    },
    "image": {
     "v": "/logos/windracers.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b450c2362ad526661eee.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/windracers",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/windracers",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Great Portland Street, London, England W1W 5PF, United Kingdom",
       "lat": 51.523815,
       "lon": -0.143705,
       "src": "https://uk.linkedin.com/company/windracers"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zelim",
   "name": "Zelim",
   "summary": "Develops AI-enabled maritime safety and security systems for offshore operations.",
   "body": "Zelim is an Edinburgh-headquartered maritime technology company enhancing safety and security at sea through advanced AI detection and monitoring systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/239-zelim",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zelim.com/"
    },
    "image": {
     "v": "/logos/zelim.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6adcb5c031987b877ee4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Edinburgh",
     "src": "https://uk.linkedin.com/company/zelimmarine",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/zelimmarine",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Argyle House, 3 Lady Lawson Street, Edinburgh, EH3 3DR, United Kingdom",
       "lat": 55.946704,
       "lon": -3.200997,
       "src": "https://uk.linkedin.com/company/zelimmarine"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "olo-robotics",
   "name": "OLO Robotics",
   "summary": "Develops browser-based software that simplifies robot development and deployment for mainstream developers and domain experts.",
   "body": "Robotics is full of possibility. The kind that reshapes industries. Redefines efficiency. Even reimagines what it means for people to live, move and connect. But for too long this potential has remained locked away. Stuck behind hardware and software complexity. Siloed systems. Complicated processes.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/240-olo-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://olo-robotics.com/"
    },
    "image": {
     "v": "/logos/olo-robotics.png",
     "fit": "contain",
     "src": "https://olo-robotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sheffield",
     "src": "https://uk.linkedin.com/company/olo-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/olo-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1 Concourse Way, Sheffield, England, United Kingdom",
       "lat": 53.380359,
       "lon": -1.462143,
       "src": "https://uk.linkedin.com/company/olo-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "absolute-robot",
   "name": "Absolute Robot",
   "summary": "Systems integrator specialising in robotic automation solutions for the plastics injection moulding industry.",
   "body": "Absolute Robot Inc. (ARI) stands as the industrial automation integrator division within the Absolute Group of Companies. Specializing in a wide spectrum of solutions—from standard off-the-shelf top entry robots for injection molding to crafting custom automation systems as a Fanuc Authorized System Integrator.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/241-absolute-robot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.absoluterobot.com/"
    },
    "image": {
     "v": "/logos/absolute-robot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ea1e0636be04d7b6fbb2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Worcester",
     "src": "https://www.linkedin.com/company/absolute-robot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/absolute-robot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "33 Southgate Street, Worcester, MA 01610, United States",
       "lat": 42.24738,
       "lon": -71.814649,
       "src": "https://www.linkedin.com/company/absolute-robot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "abyss-solutions",
   "name": "Abyss Solutions",
   "summary": "Builds autonomous inspection systems powered by robotics and AI to assess the condition of critical infrastructure assets.",
   "body": "The company deploys drones, LiDAR, and 360-degree imaging to capture asset data with sub-millimetre precision, then uses machine learning to detect and classify corrosion, coating breakdown, and anomalies. It offers ABYSS Fabric, a platform that consolidates inspection data into unified operational records for pressure systems, coatings, facilities, and structural integrity management.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/242-abyss-solutions",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://abyssfabric.com/"
    },
    "image": {
     "v": "/logos/abyss-solutions.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/70243aca31ed1e52e0f2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sydney",
     "src": "https://roboticsconnected.com/companies/242-abyss-solutions",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://roboticsconnected.com/companies/242-abyss-solutions",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sydney, Australia",
       "lat": -33.869844,
       "lon": 151.208285,
       "src": "https://roboticsconnected.com/companies/242-abyss-solutions"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agaricus-robotics",
   "name": "Agaricus Robotics",
   "summary": "Develops a dual-arm autonomous mushroom harvesting robot that picks, trims, packs and weighs mushrooms directly from farm beds.",
   "body": "The system integrates fully with standard UK and EU Dutch racking production systems used across 90% of global mushroom farms. The company addresses labour shortages in mushroom farming, a sector worth approximately £450m in the UK alone.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/244-agaricus-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://agaricusrobotics.com/"
    },
    "image": {
     "v": "/logos/agaricus-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/35e523c139ba2878dbc2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lincoln",
     "src": "https://roboticsconnected.com/companies/244-agaricus-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/244-agaricus-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lincoln, United Kingdom",
       "lat": 53.229354,
       "lon": -0.540482,
       "src": "https://roboticsconnected.com/companies/244-agaricus-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "artly",
   "name": "Artly",
   "summary": "Builds a full-stack physical AI platform enabling robots to learn real-world skills from human demonstrations in 30 minutes.",
   "body": "Artly is a full-stack physical AI platform bringing automation to the real world through proprietary hardware design, custom integrations, and our unique no-code robot training methodology.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/247-artly",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.artly.ai/"
    },
    "image": {
     "v": "/logos/artly.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b9cf6eda97b0a85e3015.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://roboticsconnected.com/companies/247-artly",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/247-artly",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seattle, United States",
       "lat": 47.603832,
       "lon": -122.330062,
       "src": "https://roboticsconnected.com/companies/247-artly"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "athenyx-robotics",
   "name": "Athenyx Robotics",
   "summary": "Develops an agentic Physical AI platform for industrial robotics, enabling manufacturers to deploy robots with continuously improving capabilities across sites and…",
   "body": "Athenyx Robotics builds the intelligence stack for industrial physical AI. Our software bridges foundation models and industrial robotics through deployment-ready infrastructure for real-world production.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/248-athenyx-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://athenyxrobotics.com/"
    },
    "image": {
     "v": "/logos/athenyx-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/82737208cfb0c1f171e6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Grünwald",
     "src": "https://roboticsconnected.com/companies/248-athenyx-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/248-athenyx-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Grünwald, Germany",
       "lat": 48.048656,
       "lon": 11.530073,
       "src": "https://roboticsconnected.com/companies/248-athenyx-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "auve-tech",
   "name": "Auve Tech",
   "summary": "Manufactures autonomous electric shuttles for last-mile and closed-environment transport.",
   "body": "Auve Tech is an autonomous transport company developing self-driving mobility solutions for airports, campuses, cities, and industrial environments. Our mission is to make transportation safer, smarter, and more efficient through autonomous technology.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/249-auve-tech",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.auve.tech/"
    },
    "image": {
     "v": "/logos/auve-tech.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/648028ea3517d61249bf.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tallinn",
     "src": "https://ee.linkedin.com/company/auve-tech",
     "asof": "2026-11"
    },
    "country": {
     "v": "Estonia",
     "src": "https://ee.linkedin.com/company/auve-tech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Järvevana tee 11, Tallinn, Harju County, Estonia",
       "lat": 59.402769,
       "lon": 24.732111,
       "src": "https://ee.linkedin.com/company/auve-tech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "av",
   "name": "AV",
   "summary": "Develops mission-critical autonomous systems for defence customers worldwide.",
   "body": "At AV, we build shoulder-to-shoulder with our customers, delivering systems shaped by real-world missions, not theoretical requirements.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/250-av",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.avinc.com/"
    },
    "image": {
     "v": "/logos/av.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b8eb69f1d079b1f5892b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Arlington",
     "src": "https://www.linkedin.com/company/avinc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/avinc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "241 18th St S, Arlington, Virginia 22202, United States",
       "lat": 38.858354,
       "lon": -77.050317,
       "src": "https://www.linkedin.com/company/avinc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ava-robotics",
   "name": "Ava Robotics",
   "summary": "Develops autonomous telepresence robots that enable remote collaboration and workplace productivity.",
   "body": "Ava Robotics is a robotics technology company that designs and builds intelligent robots for the workplace. Delivering on a vision of robots working with and for people, Ava's technology emphasizes user experience, safety and autonomous mobility to empower people, while advancing business operations and access.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/251-ava-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.avarobotics.com/"
    },
    "image": {
     "v": "/logos/ava-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/10ea10f14ff2d6758a66.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/ava-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/ava-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "12 Channel St, Boston, Massachusetts 02210, United States",
       "lat": 42.345492,
       "lon": -71.036844,
       "src": "https://www.linkedin.com/company/ava-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avalon-robotics",
   "name": "Avalon Robotics",
   "summary": "Automation consulting firm based in Nampa, Idaho.",
   "body": "Avalon Robotics is dedicated to revolutionizing the construction industry by developing cutting-edge robotic solutions that prioritize safety, efficiency, and precision on every job site. We aim to transform traditional practices through innovation, making construction environments safer and more productive for all.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/252-avalon-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://avalonrobotics.com/"
    },
    "image": {
     "v": "/logos/avalon-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/99f3ba6d05e0ed8f78b1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nampa",
     "src": "https://roboticsconnected.com/companies/252-avalon-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/252-avalon-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nampa, United States",
       "lat": 43.578038,
       "lon": -116.561689,
       "src": "https://roboticsconnected.com/companies/252-avalon-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avular",
   "name": "Avular",
   "summary": "Develops autonomous mobile robots and drones designed to address labour shortages across multiple industries.",
   "body": "Avular accelerates the creation of mobile robot applications that will shape a brighter future for all. By developing the core technology for autonomous robots and building our own drones and robots from the ground up, we developed the perfect tools to start your mobile robotic solution.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/256-avular",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://avular.com/"
    },
    "image": {
     "v": "/logos/avular.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f84c4d32cfb545aebd39.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Eindhoven",
     "src": "https://nl.linkedin.com/company/avular",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/avular",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Achtseweg Zuid 221, Eindhoven, North Brabant 5651 GW, Netherlands",
       "lat": 51.453482,
       "lon": 5.448693,
       "src": "https://nl.linkedin.com/company/avular"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "axibo",
   "name": "Axibo",
   "summary": "Canadian robotics company building advanced humanoid robot platforms designed for real-world applications.",
   "body": "AI-powered tracking mount attachment for cameras to frame up subjects and take pictures and videos.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/257-axibo",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.axibo.com/"
    },
    "image": {
     "v": "/logos/axibo.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/98128bbcdc29481b053c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Waterloo",
     "src": "https://roboticsconnected.com/companies/257-axibo",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/257-axibo",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Waterloo, Canada",
       "lat": 43.46527,
       "lon": -80.522296,
       "src": "https://roboticsconnected.com/companies/257-axibo"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "b-robotized",
   "name": "b-robotized",
   "summary": "European engineering and consulting firm specialising in robotics integration and automation.",
   "body": "b»robotized unterstützt Unternehmen dabei, Robotik einfach, zuverlässig und effizient einzusetzen – von Beratung über Software bis zu vollständigen Automatisierungssystemen.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/259-b-robotized",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.b-robotized.com/"
    },
    "image": {
     "v": "/logos/b-robotized.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/caf054af8c853f04f930.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Karlsruhe",
     "src": "https://de.linkedin.com/company/b-robotized",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/b-robotized",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rintheimer Str. 23, Karlsruhe, Baden-Württemberg 76131, Germany",
       "lat": 49.011313,
       "lon": 8.427205,
       "src": "https://de.linkedin.com/company/b-robotized"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bastian-solutions",
   "name": "Bastian Solutions",
   "summary": "Combines Bastian Solutions, Vanderlande's warehouse business and viastore to deliver integrated warehouse automation.",
   "body": "Bastian Solutions, a Toyota Automated Logistics company, is a trusted supply chain integration partner committed to providing their clients a competitive advantage by designing and delivering world-class distribution and production solutions.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/261-bastian-solutions",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://toyota-automated-logistics.com/"
    },
    "image": {
     "v": "/logos/bastian-solutions.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/dee6802cbf942535254e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Carmel",
     "src": "https://www.linkedin.com/company/bastian-solutions",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bastian-solutions",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "10585 North Meridian St., Carmel, IN 46290, United States",
       "lat": 39.940673,
       "lon": -86.156728,
       "src": "https://www.linkedin.com/company/bastian-solutions"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "baubot",
   "name": "Baubot",
   "summary": "Develops mobile robotic systems for construction automation.",
   "body": "fischer BAUBOT is an Austrian company based in Vienna focused on the development and production of mobile robotic solutions for the construction industry.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/262-baubot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.baubot.com/"
    },
    "image": {
     "v": "/logos/baubot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a9484be0daf434bd2443.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wien",
     "src": "https://at.linkedin.com/company/baubot",
     "asof": "2026-11"
    },
    "country": {
     "v": "Austria",
     "src": "https://at.linkedin.com/company/baubot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gutheil-Schodergasse 8-12, Wien, 1100, Austria",
       "lat": 48.185719,
       "lon": 16.422159,
       "src": "https://at.linkedin.com/company/baubot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bea-sensors-americas",
   "name": "BEA Sensors Americas",
   "summary": "Manufactures laser and microwave sensors for automatic door systems, access control, and industrial automation.",
   "body": "BEA is a leading manufacturer of sensing solutions for automatic doors systems. The company’s US headquarters was founded in 1987 . BEA also has offices in the Belgium, Japan and China and our products can be found across the globe.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/263-bea-sensors-americas",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://us.beasensors.com/"
    },
    "image": {
     "v": "/logos/bea-sensors-americas.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a5c46a3c64121122bf73.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/bea-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bea-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "100 Enterprise Drive, Pittsburgh, PA 15275, United States",
       "lat": 40.440697,
       "lon": -80.002567,
       "src": "https://www.linkedin.com/company/bea-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bedrock-ocean-exploration",
   "name": "Bedrock Ocean Exploration",
   "summary": "Builds vertically integrated autonomous underwater vehicles and cloud platforms for persistent ocean intelligence.",
   "body": "Bedrock is the intelligence infrastructure powering the ocean economy. We unlock ocean insights at unprecedented speed. Bedrock is building persistent ocean intelligence solutions that will enable the ocean economy to solve the world’s most pressing challenges in maritime security, infrastructure, energy, and climate.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/266-bedrock-ocean-exploration",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bedrockocean.com/"
    },
    "image": {
     "v": "/logos/bedrock-ocean-exploration.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/87347ffa691c69917613.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brooklyn",
     "src": "https://roboticsconnected.com/companies/266-bedrock-ocean-exploration",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/266-bedrock-ocean-exploration",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brooklyn, United States",
       "lat": 40.652601,
       "lon": -73.949721,
       "src": "https://roboticsconnected.com/companies/266-bedrock-ocean-exploration"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "benedex",
   "name": "Benedex",
   "summary": "Sells modular mobile robot platforms and advanced motion control systems.",
   "body": "BENEDEX develops and manufactures modular drive systems for making the development of design of unmanned, mobile robotic applications faster, simpler and cheaper.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/268-benedex",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://benedexrobotics.com/"
    },
    "image": {
     "v": "/logos/benedex.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/7fe8e5aad41b5ebbc5de.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://uk.linkedin.com/company/benedex-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/benedex-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bristol Robotics Lab, Bristol, BS16 1QY, United Kingdom",
       "lat": 51.503072,
       "lon": -2.552672,
       "src": "https://uk.linkedin.com/company/benedex-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "berobox",
   "name": "beRobox",
   "summary": "Manufactures plug-and-play robotic palletizing and depalletizing solutions for manufacturers and distribution centres.",
   "body": "Founded in 2022, beRobox developed the PALTZ solutions to deliver plug-and-play automation, making palletizing simple, efficient, and scalable for businesses worldwide. With a strong distribution network across Canada, the United States, Mexico, Europe and Australia, we’re driving the future of industrial automation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/270-berobox",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.berobox.com/"
    },
    "image": {
     "v": "/logos/berobox.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9d1374df4f50765ab505.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sherbrooke",
     "src": "https://ca.linkedin.com/company/berobox",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/berobox",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "762 Rue Joseph-Louis-Mathieu, Sherbrooke, Quebec J1R 0X3, Canada",
       "lat": 45.402635,
       "lon": -71.983639,
       "src": "https://ca.linkedin.com/company/berobox"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bia5",
   "name": "BIA5",
   "summary": "Manufactures and deploys ground robotics platforms, chiefly unmanned ground vehicles (UGVs) for military, law enforcement and private security agencies.",
   "body": "BIA5 specialise in the design, manufacture, supply and support of electronic systems for military, Fire and Emergency Services, mining and hazardous environments, law enforcement and private security agencies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/271-bia5",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bia5.com/"
    },
    "image": {
     "v": "/logos/bia5.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/78f14318438514e34ac3.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Murarrie",
     "src": "https://au.linkedin.com/company/bia5-pty-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://au.linkedin.com/company/bia5-pty-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8 Metroplex Ave, Murarrie, Queensland 4172, Australia",
       "lat": -27.455982,
       "lon": 153.099523,
       "src": "https://au.linkedin.com/company/bia5-pty-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "black-coffee-robotics",
   "name": "Black Coffee Robotics",
   "summary": "Provides software engineering services for autonomous robot development.",
   "body": "We provide specialized consultancy and development services to robotics businesses on all aspects of autonomy. We have years of proven research and engineering experience in self-driving mobile robots, forklifts, carry-trucks, lawn mowers, boats and drones.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/272-black-coffee-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.blackcoffeerobotics.com/"
    },
    "image": {
     "v": "/logos/black-coffee-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b0a3e0e60e53e6494cd8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hyderabad",
     "src": "https://roboticsconnected.com/companies/272-black-coffee-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/272-black-coffee-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hyderabad, India",
       "lat": 17.360589,
       "lon": 78.474061,
       "src": "https://roboticsconnected.com/companies/272-black-coffee-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "coprod",
   "name": "coprod",
   "summary": "Builds a unified robotics stack comprising modular hardware and real-time control systems.",
   "body": "Making Hardware Simple",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/279-coprod",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://coprod.co/"
    },
    "image": {
     "v": "/logos/coprod.png",
     "fit": "contain",
     "src": "https://coprod.co/assets/img/coprod-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ecublens",
     "src": "https://ch.linkedin.com/company/coprod-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/coprod-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Case postale, Ecublens, Vaud 1024, Switzerland",
       "lat": 46.5258,
       "lon": 6.562114,
       "src": "https://ch.linkedin.com/company/coprod-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "erletek",
   "name": "ERLEtek",
   "summary": "Builds mobile 3D-printing robots that lay concrete walls on construction sites, addressing Europe's shortage of two million construction workers by 2030.",
   "body": "At ERLEtek we are supporting on-site construction operations, where humans orchestrate and direct construction activities, and the heavy, dreadful and back-breaknig work is done by fleet of smart mobile robots. We are a construction robotics company which aim to have robots present at every construction site.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/284-erletek",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://erletek.io/"
    },
    "image": {
     "v": "/logos/erletek.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e6a7b25ebdf0bd418605.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kongens Lyngby",
     "src": "https://roboticsconnected.com/companies/284-erletek",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://roboticsconnected.com/companies/284-erletek",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kongens Lyngby, Denmark",
       "lat": 55.771865,
       "lon": 12.505141,
       "src": "https://roboticsconnected.com/companies/284-erletek"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "infitrue",
   "name": "INFITRUE",
   "summary": "Develops high-performance custom actuators and servo drives for robotic systems.",
   "body": "INFITRUE develops custom actuators and servo drives for robotics. We help robot makers — humanoids, cobots, exoskeletons, AGVs, and industrial automation — get the most out of every joint: higher torque density, efficiency, and reliability in the smallest possible package.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/286-infitrue",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.infitrue.com/"
    },
    "image": {
     "v": "/logos/infitrue.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/fd90adff2b450700ae48.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Böblingen",
     "src": "https://de.linkedin.com/company/infitrue",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/infitrue",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Röhrer Weg 8, Böblingen, Baden-Württemberg 71032, Germany",
       "lat": 48.673914,
       "lon": 9.012684,
       "src": "https://de.linkedin.com/company/infitrue"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kognexus",
   "name": "Kognexus",
   "summary": "Builds high-performance motion system platforms for robotics companies.",
   "body": "The company develops resilient actuators and drives designed to simplify and accelerate robot development from prototype to production scale. The system integrates motors, drives, sensors, encoders, brakes, and control electronics into a cohesive architecture.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/287-kognexus",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kognexus.com/"
    },
    "image": {
     "v": "/logos/kognexus.png",
     "fit": "contain",
     "src": "https://kognexus.com/logos/light_up42|airbus.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/287-kognexus",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/287-kognexus",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/287-kognexus"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mkind",
   "name": "mkind",
   "summary": "Develops AI-native industrial robots designed for high-mix manufacturing tasks.",
   "body": "mkind is an early-stage robotics startup on a mission to automate the hardest, most painful manual industrial tasks. We build fully flexible, intelligent robotic work cells for surface finishing, welding, and coating. We are a small, focused team moving fast and building things that matter in the physical world.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/288-mkind",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mkind.ai/"
    },
    "image": {
     "v": "/logos/mkind.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d0f75e12ae5082a3c910.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/288-mkind",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/288-mkind",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/288-mkind"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "voltrac",
   "name": "Voltrac",
   "summary": "Manufactures Thor, a fully electric, autonomous unmanned ground vehicle (UGV) purpose-built for agricultural operations and frontline logistics.",
   "body": "Voltrac builds autonomous electrified vehicles for agriculture and defense logistics. Voltrac was incorporated in 2024, was founded by Thomas Hubregtsen and Fran Infante, and is backed by Foodlabs and Antler.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/290-voltrac",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://voltrac.eu/"
    },
    "image": {
     "v": "/logos/voltrac.png",
     "fit": "contain",
     "src": "https://media.brand.dev/1fb97efd-6d41-4b26-922b-ca692d465922.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Valencia",
     "src": "https://es.linkedin.com/company/voltrac",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://es.linkedin.com/company/voltrac",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Calle Villa de Madrid, 26 b, Valencia, Valencian Community 46988, Spain",
       "lat": 39.51081,
       "lon": -0.460875,
       "src": "https://es.linkedin.com/company/voltrac"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aiko",
   "name": "AIKO",
   "summary": "Develops AI software for autonomous spacecraft and satellite operations.",
   "body": "AIKO research-centered, innovative and futuristic mission is clear: developing algorithms infused with Artificial Intelligence, to increase the autonomy of current space missions. Artificial Intelligence has entered a new period of scientific relevance.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/309-aiko",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aikospace.com/"
    },
    "image": {
     "v": "/logos/aiko.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/fd5663985353deaa45ad.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Turin",
     "src": "https://it.linkedin.com/company/aikospace",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://it.linkedin.com/company/aikospace",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Corso Stati Uniti, 45, Turin, Piedmont 10129, Italy",
       "lat": 45.064189,
       "lon": 7.66568,
       "src": "https://it.linkedin.com/company/aikospace"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aira-artificial-intelligence-real-abilities",
   "name": "AIRA - Artificial Intelligence. Real Abilities",
   "summary": "Develops AI-powered mobile robots for manufacturing and construction environments.",
   "body": "AIRA puts Robots to Work. We train Physical AI models on task specific data and deploy mobile, general-purpose Robots in real world manufacturing settings, supervising remotely, and supporting on site. We aim to solve the productivity challenge working directly with manufacturing customers, one task at a time.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/310-aira-artificial-intelligence-real-abilities",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aira.site/"
    },
    "image": {
     "v": "/logos/aira-artificial-intelligence-real-abilities.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d0408993434d8e70b80d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sheffield",
     "src": "https://uk.linkedin.com/company/aira-artificial-intelligence-real-abilities",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/aira-artificial-intelligence-real-abilities",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pennine 5 B3 3 Tenter Street, Sheffield, England S1 4BY, United Kingdom",
       "lat": 53.380663,
       "lon": -1.470228,
       "src": "https://uk.linkedin.com/company/aira-artificial-intelligence-real-abilities"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ajuno",
   "name": "Ajuno",
   "summary": "UK-based drone consultancy that unites organisations seeking to adopt drone capabilities with the best available solutions for their needs.",
   "body": "We deliver transformational change via board-level drone strategies and delivery. Replacing outdated activities of today with better, cost-effective and safer alternatives. Delivering huge cost savings, improving safety, and enabling enterprises to access new possibilities to accelerate their strategies.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/312-ajuno",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ajuno.solutions/"
    },
    "image": {
     "v": "/logos/ajuno.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/734bd90e0d69af0f11a8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Henley-on-Thames",
     "src": "https://roboticsconnected.com/companies/312-ajuno",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/312-ajuno",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Henley-on-Thames, United Kingdom",
       "lat": 51.537579,
       "lon": -0.905029,
       "src": "https://roboticsconnected.com/companies/312-ajuno"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "alphaz",
   "name": "AlphaZ",
   "summary": "Builds autonomy software for mobile robots operating in construction, security, and industrial inspection.",
   "body": "The company develops foundation models and AI systems that enable robots to understand context and adapt reliably in complex real-world environments. Headquartered in Los Angeles, AlphaZ was founded in 2024 by roboticists from NASA JPL, MIT, and Carnegie Mellon University.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Model lab",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/315-alphaz",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://alpha-z.ai/"
    },
    "image": {
     "v": "/logos/alphaz.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4651d554913723fa2bd8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Baldwin Park",
     "src": "https://roboticsconnected.com/companies/315-alphaz",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/315-alphaz",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Baldwin Park, United States",
       "lat": 34.085474,
       "lon": -117.961176,
       "src": "https://roboticsconnected.com/companies/315-alphaz"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "althumans",
   "name": "AltHumans",
   "summary": "U.S.-based online retailer specialising in humanoid robots, AI companion robots, robot dogs, and educational STEM robots.",
   "body": "Humanoid robots for sale, shop our brand stores and buy robots for home, work and entertainment. US-based retailer seeking partnerships with robot manufacturers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/316-althumans",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.althumans.com/"
    },
    "image": {
     "v": "/logos/althumans.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/25c30cb38b95797b0aa2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sanford",
     "src": "https://www.linkedin.com/company/althumans",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/althumans",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1550 Atlantic Ave, Sanford, Florida 32771, United States",
       "lat": 28.799978,
       "lon": -81.3568,
       "src": "https://www.linkedin.com/company/althumans"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "applied-integration",
   "name": "Applied Integration",
   "summary": "UK-based systems integrator specialising in industrial automation, robotics and control systems.",
   "body": "Applied Integration is one of the UK’s leading independent systems integrators, delivering cutting edge solutions to 21st Century industry.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/324-applied-integration",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://appliedintegration.co.uk/"
    },
    "image": {
     "v": "/logos/applied-integration.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/34f613ab468abd46f21d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stokesley",
     "src": "https://uk.linkedin.com/company/applied-integration-uk-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/applied-integration-uk-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1 Ellerbeck Way, Stokesley, England TS9 5JZ, United Kingdom",
       "lat": 54.463531,
       "lon": -1.176529,
       "src": "https://uk.linkedin.com/company/applied-integration-uk-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "astroscale",
   "name": "Astroscale",
   "summary": "Global leader in on-orbit servicing spacecraft and technologies.",
   "body": "Founded in 2013, Astroscale is the global leader in on-orbit servicing, dedicated to the secure and sustainable development of space.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/332-astroscale",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.astroscale.com/"
    },
    "image": {
     "v": "/logos/astroscale.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/eba97b7b5a66dadfd9f5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sumida",
     "src": "https://jp.linkedin.com/company/astroscale",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/astroscale",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hulic Kinshicho Collabo Tree, Sumida, Tokyo 130-0013, Japan",
       "lat": 35.71042,
       "lon": 139.801742,
       "src": "https://jp.linkedin.com/company/astroscale"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "automated-architecture-auar",
   "name": "Automated Architecture (AUAR)",
   "summary": "Deploys robotic micro-factories that build timber building components on site.",
   "body": "AUAR is the manufacturing partner for homebuilders. We deploy robotic MicroFactories on-site, producing wall, floor and roof panels faster, with less waste and at lower cost. The MicroFactory moves with the builder's pipeline, delivering the output of a factory with 0 CapEx, no lead times, and no labour risk.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/337-automated-architecture-auar",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://auar.io/"
    },
    "image": {
     "v": "/logos/automated-architecture-auar.png",
     "fit": "contain",
     "src": "https://media.brand.dev/bfde4ed5-3e11-4304-a74b-db4e9ae58d72.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://roboticsconnected.com/companies/337-automated-architecture-auar",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/337-automated-architecture-auar",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bristol, United Kingdom",
       "lat": 51.443014,
       "lon": -2.581662,
       "src": "https://roboticsconnected.com/companies/337-automated-architecture-auar"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autoware-foundation",
   "name": "Autoware Foundation",
   "summary": "Non-profit organisation hosting Autoware, the world's leading open-source software project for autonomous driving.",
   "body": "The Autoware Foundation is a non-profit organization supporting open-source projects enabling self-driving mobility. The Autoware Foundation creates synergies between corporate development and academic research, providing autonomous driving technology for everyone.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/338-autoware-foundation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.autoware.org/"
    },
    "image": {
     "v": "/logos/autoware-foundation.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d94eae2df15c34cbfef1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://roboticsconnected.com/companies/338-autoware-foundation",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://roboticsconnected.com/companies/338-autoware-foundation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://roboticsconnected.com/companies/338-autoware-foundation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "safeworld",
   "name": "SafeWorld",
   "summary": "Safety testing and evaluation platform designed specifically for robots operating around people.",
   "body": "SafeWorld provides robot safety testing and simulation software to help enterprises deploy autonomy safely and responsibly. We complement physical testing with scalable simulation to evaluate how robots behave in dangerous, rare, and unexpected situations around people.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/342-safeworld",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.safeworld.ai/"
    },
    "image": {
     "v": "/logos/safeworld.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/746af4d36aed5e243f59.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://roboticsconnected.com/companies/342-safeworld",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/342-safeworld",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://roboticsconnected.com/companies/342-safeworld"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "black-i-robotics",
   "name": "Black-I Robotics",
   "summary": "Develops Fullscope, an AI-powered mobile robotic arm for warehouse automation and mixed-case palletising.",
   "body": "Providing innovative robotic solutions to the government and the commercial sector for 15 years. Black-I Robotics continues to revolutionize the capabilities of robotics in busy workspaces safely and efficiently.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/347-black-i-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://blackirobotics.com/"
    },
    "image": {
     "v": "/logos/black-i-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1a6e505e8d27d9c30b0f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tyngsborough",
     "src": "https://www.linkedin.com/company/black-i-robotics-inc-",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/black-i-robotics-inc-",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "141 Middlesex Road, Tyngsborough, Massachusetts 01879, United States",
       "lat": 42.66857,
       "lon": -71.414306,
       "src": "https://www.linkedin.com/company/black-i-robotics-inc-"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bloomfield-robotics",
   "name": "Bloomfield Robotics",
   "summary": "Develops AI-powered imaging systems for continuous crop monitoring.",
   "body": "At Bloomfield, we are revolutionizing the way crops are monitored and managed. Our AI-powered imaging technology provides continuous, plant-level health and performance insights from seed to harvest.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/348-bloomfield-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bloomfield.ai/"
    },
    "image": {
     "v": "/logos/bloomfield-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/aa9e4760984981743edd.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/bloomfield-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bloomfield-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3485 Butler St, Pittsburgh, Pennsylvania 15201, United States",
       "lat": 40.463892,
       "lon": -79.966699,
       "src": "https://www.linkedin.com/company/bloomfield-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "blue-abyss",
   "name": "Blue Abyss",
   "summary": "Pioneering research, training and testing facility operator enabling humanity to operate in extreme environments from subsea to space.",
   "body": "The company develops world-class infrastructure and expertise to support astronaut training, space research, and subsea technology development. Operating facilities in Cornwall and Ohio, Blue Abyss serves space agencies, defence sectors, energy companies and research institutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/349-blue-abyss",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://blueabyss.uk/"
    },
    "image": {
     "v": "/logos/blue-abyss.png",
     "fit": "contain",
     "src": "https://media.brand.dev/4923fcea-4a59-4652-9573-238cdc9032ae.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redruth",
     "src": "https://roboticsconnected.com/companies/349-blue-abyss",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/349-blue-abyss",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Redruth, United Kingdom",
       "lat": 50.233989,
       "lon": -5.227647,
       "src": "https://roboticsconnected.com/companies/349-blue-abyss"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "blue-river-technology",
   "name": "Blue River Technology",
   "summary": "Builds intelligent agricultural machinery using computer vision and machine learning.",
   "body": "We’re Blue River, a team of innovators driven to radically change agriculture by creating intelligent machinery. We empower our customers to implement more sustainable solutions: optimize chemical use, reimagine routine processes, and improve yields year after year.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/351-blue-river-technology",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bluerivertechnology.com/"
    },
    "image": {
     "v": "/logos/blue-river-technology.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/22d3105e219ace06da04.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.linkedin.com/company/bluerivertech",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bluerivertech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3303 Scott Blvd, Santa Clara, California 95054, United States",
       "lat": 37.380692,
       "lon": -121.979275,
       "src": "https://www.linkedin.com/company/bluerivertech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "blue-robotics",
   "name": "Blue Robotics",
   "summary": "Manufactures affordable, high-performance underwater robotics systems including remotely operated vehicles (ROVs) and autonomous surface vessels (USVs).",
   "body": "Blue Robotics makes low-cost, high-performance components for marine robotics to enable the next generation of ocean exploration! Based in Torrance, CA, we are a young and innovative company with a diverse and international customer base.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/352-blue-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bluerobotics.com/"
    },
    "image": {
     "v": "/logos/blue-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/fce6b2c40b132cabc9f1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Torrance",
     "src": "https://www.linkedin.com/company/blue-robotics-inc-",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/blue-robotics-inc-",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2740 California St, Torrance, California 90503, United States",
       "lat": 33.841732,
       "lon": -118.335393,
       "src": "https://www.linkedin.com/company/blue-robotics-inc-"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bluewhite",
   "name": "Bluewhite",
   "summary": "Builds AI-powered autonomous solutions for off-road and tactical applications.",
   "body": "Bluewhite built a hardware-agnostic autonomy and physical AI stack capable of transforming conventional heavy machinery and robotics platforms into highly intelligent, fully autonomous fleets",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/353-bluewhite",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bluewhite.ai/"
    },
    "image": {
     "v": "/logos/bluewhite.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/bddf86f46346d5bd999d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tel Aviv",
     "src": "https://il.linkedin.com/company/bluewhite",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/bluewhite",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "116 Menachem Begin rd., Tel Aviv, 6701310, Israel",
       "lat": 32.0853,
       "lon": 34.781806,
       "src": "https://il.linkedin.com/company/bluewhite"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botcrew",
   "name": "BotCrew",
   "summary": "Manufactures purpose-built autonomous utility robots for construction and solar industries.",
   "body": "BotCrew is building the next generation of heavy machinery. We design, manufacture, and deploy a family of modular, AI-native outdoor robots powered by a shared Physical AI platform.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/361-botcrew",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botcrew.com/"
    },
    "image": {
     "v": "/logos/botcrew.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2603f981731cca7f3f3e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Duluth",
     "src": "https://roboticsconnected.com/companies/361-botcrew",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/361-botcrew",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Duluth, United States",
       "lat": 46.783829,
       "lon": -92.105268,
       "src": "https://roboticsconnected.com/companies/361-botcrew"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botrista",
   "name": "Botrista",
   "summary": "Develops an automated beverage dispensing platform powered by AI that enables food service operators to prepare craft drinks at scale.",
   "body": "Botrista enables partners to easily serve an array of vibrant drinks in order to tackle dynamic consumer trends. Backed by data and supported by patented automation, the program is now in 42 states and growing rapidly.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/363-botrista",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botrista.com/"
    },
    "image": {
     "v": "/logos/botrista.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/86a2903858b19de9b034.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/botrista",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/botrista",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "55 Hawthorne St, San Francisco, California 94105, United States",
       "lat": 37.785624,
       "lon": -122.398453,
       "src": "https://www.linkedin.com/company/botrista"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botronics",
   "name": "Botronics",
   "summary": "Develops embedded AI technology that transforms everyday objects into autonomous, intelligent companions.",
   "body": "We want to simplify the lives of humans by empowering robots to take on the most repetitive and tedious tasks, freeing up time for activities that are more creative and meaningful to humans.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/364-botronics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.botronics.be/"
    },
    "image": {
     "v": "/logos/botronics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0dc90513f4a7f433693f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nivelles",
     "src": "https://be.linkedin.com/company/botronics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Belgium",
     "src": "https://be.linkedin.com/company/botronics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rue de l'industrie 20, Nivelles, Walloon Region 1400, Belgium",
       "lat": 50.637839,
       "lon": 5.57247,
       "src": "https://be.linkedin.com/company/botronics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "boxbot",
   "name": "Boxbot",
   "summary": "Develops an AI-enabled automated storage system that transforms package handling and logistics operations.",
   "body": "Boxbot transforms conveyors into intelligent, three-dimensional package handling systems. The platform can store, sort, and sequence size-agnostic, high throughput payloads while requiring a minimal physical footprint.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/366-boxbot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.boxbot.io/"
    },
    "image": {
     "v": "/logos/boxbot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e034a35189962605d960.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Alameda",
     "src": "https://www.linkedin.com/company/box-bot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/box-bot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2421 Blanding Avenue, Alameda, California 94501, United States",
       "lat": 37.77071,
       "lon": -122.236119,
       "src": "https://www.linkedin.com/company/box-bot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "brinc-drones",
   "name": "BRINC Drones",
   "summary": "Builds public safety drones designed for emergency response, including models for outdoor operations, indoor tactical deployment, and de-escalation tools.",
   "body": "BRINC Drones is an American developer of technology in the service of public safety. The company builds a connected ecosystem of tools designed to save lives.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/370-brinc-drones",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://brincdrones.com/"
    },
    "image": {
     "v": "/logos/brinc-drones.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/7256116bbb22bdfadb9a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://www.linkedin.com/company/brincdrones",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/brincdrones",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3668 Albion Pl N, Seattle, Washington 98103, United States",
       "lat": 47.652488,
       "lon": -122.344396,
       "src": "https://www.linkedin.com/company/brincdrones"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bucket-robotics",
   "name": "Bucket Robotics",
   "summary": "Builds inspection infrastructure for manufacturing defect detection using computer vision and synthetic data.",
   "body": "Inspection that holds up in production Lighting drifts. Suppliers change. New operators start on Monday. Parts that looked fine yesterday get flagged today. We've seen inspection systems fail in the real world — and we built Bucket because inspection needs to work where parts are actually made.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/374-bucket-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bucket.bot/"
    },
    "image": {
     "v": "/logos/bucket-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e4819bd70f2d9fe7ac56.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/bucketrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bucketrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "643 7th St, San Francisco, California 94103, United States",
       "lat": 37.772695,
       "lon": -122.402324,
       "src": "https://www.linkedin.com/company/bucketrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "building-diagnostic-robotics",
   "name": "Building Diagnostic Robotics",
   "summary": "Develops autonomous roof inspection robots powered by AI and advanced sensing.",
   "body": "At Building Diagnostic Robotics, we specialize in comprehensive building assessments and cutting-edge leak detection services. Our experienced professionals conduct thorough evaluations of commercial and residential properties, identifying deficiencies and prioritizing effective repairs and maintenance.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/375-building-diagnostic-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bdx-robotics.com/"
    },
    "image": {
     "v": "/logos/building-diagnostic-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8a2f2972ade416e6d7cb.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brooklyn",
     "src": "https://www.linkedin.com/company/building-diagnostic-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/building-diagnostic-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "19 Morris Ave, Brooklyn, New York 11205, United States",
       "lat": 40.698834,
       "lon": -73.974716,
       "src": "https://www.linkedin.com/company/building-diagnostic-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "calvary-robotics",
   "name": "Calvary Robotics",
   "summary": "Manufactures robotic platforms, automated production systems, and precision assembly solutions.",
   "body": "The company specialises in system integration and custom automation for high-precision manufacturing environments. Calvary serves diverse sectors including medical devices, life sciences, automotive, electronics assembly, food and beverage packaging, and renewable energy.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/380-calvary-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://invioautomation.com/"
    },
    "image": {
     "v": "/logos/calvary-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/df9cd6d8627c1c3030d7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Webster",
     "src": "https://roboticsconnected.com/companies/380-calvary-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/380-calvary-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Webster, United States",
       "lat": 32.050618,
       "lon": -84.54731,
       "src": "https://roboticsconnected.com/companies/380-calvary-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "camerabotics",
   "name": "Camerabotics",
   "summary": "Develops Lensmaster, motion-control software for filmmaking and video production using industrial robotic arms.",
   "body": "– a pioneer motion control software for Camera and Cinema Robotics. With a broad range of capabilities and a simple user-interface, Camerabotics enables filmmakers to get any industrial 6-axis KUKA robot arm and use it for video production and filmmaking.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/381-camerabotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://camerabotics.com/"
    },
    "image": {
     "v": "/logos/camerabotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5dc97233b56d40020477.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beirut",
     "src": "https://roboticsconnected.com/companies/381-camerabotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Lebanon",
     "src": "https://roboticsconnected.com/companies/381-camerabotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beirut, Lebanon",
       "lat": 33.889226,
       "lon": 35.502558,
       "src": "https://roboticsconnected.com/companies/381-camerabotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "capra-robotics",
   "name": "Capra Robotics",
   "summary": "Builds a modular mobile robot platform designed for autonomous operations across multiple verticals.",
   "body": "We design and manufacture autonomous mobile robots for real-world operations – indoors, outdoors, across facilities, and in public-facing environments. Simple, robust, and easy to integrate, our robots work seamlessly within existing workflows and infrastructure.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/384-capra-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://capra.ooo/"
    },
    "image": {
     "v": "/logos/capra-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1bec56633aaa9554de62.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Viby J",
     "src": "https://dk.linkedin.com/company/caprarobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/caprarobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Skanderborgvej 232A, Viby J, Middle Jutland 8260, Denmark",
       "lat": 56.122019,
       "lon": 10.159695,
       "src": "https://dk.linkedin.com/company/caprarobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "capsen-robotics",
   "name": "CapSen Robotics",
   "summary": "Develops 3D vision, motion planning, and control software for industrial automation.",
   "body": "At CapSen Robotics, we have developed the CapSen PiC- a cutting-edge combination of 3D vision, collision-free motion planning, and control software. CapSen PiC gives robots spatial intelligence for pick and place applications.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/386-capsen-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.capsenrobotics.com/"
    },
    "image": {
     "v": "/logos/capsen-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9a74f928ecf40254aef8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/capsen-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/capsen-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5001 Baum Blvd., Pittsburgh, PA 15213, United States",
       "lat": 40.455354,
       "lon": -79.944945,
       "src": "https://www.linkedin.com/company/capsen-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "carbon-origins",
   "name": "Carbon Origins",
   "summary": "Builds Bobby, an AI-driven autonomous robot designed for heavy equipment operation in construction and mining.",
   "body": "Carbon Origins allows construction and mining equipment to be remotely operated using a VR headset and automated to do repetitive tasks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/387-carbon-origins",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://carbonorigins.com/"
    },
    "image": {
     "v": "/logos/carbon-origins.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/7cbdc16974a747228500.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/carbon-origins",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/carbon-origins",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "45 29th St, San Francisco, California 94110, United States",
       "lat": 37.743799,
       "lon": -122.421839,
       "src": "https://www.linkedin.com/company/carbon-origins"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cardinal-robotics",
   "name": "Cardinal Robotics",
   "summary": "Operates a Robots-as-a-Service platform providing enterprise clients with cleaning, disinfection, and delivery robots, along with comprehensive deployment support and…",
   "body": "We help largest enterprises in the US adopt, deploy and maintain fleets of robots. Clients with robots deployed include Target, Bank of America, Apple, Disney, Caesars, MGM, Wynn, Cadence and many more.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/389-cardinal-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cardinalrobot.com/"
    },
    "image": {
     "v": "/logos/cardinal-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b6538d28e49cd522e278.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://roboticsconnected.com/companies/389-cardinal-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/389-cardinal-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://roboticsconnected.com/companies/389-cardinal-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "carnegie-robotics",
   "name": "Carnegie Robotics",
   "summary": "Manufactures ruggedised autonomous systems, stereo cameras, and edge-compute devices for harsh environments.",
   "body": "Since 2010, Carnegie Robotics (CRL) has been creating full-stack autonomous systems, and producing cutting-edge stereo cameras and sensors that power robotic technologies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/391-carnegie-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://carnegierobotics.com/"
    },
    "image": {
     "v": "/logos/carnegie-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/998a9f8a5bbaf8a6a107.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/carnegie-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/carnegie-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4501 Hatfield St, Pittsburgh, PA 15201, United States",
       "lat": 40.474524,
       "lon": -79.96222,
       "src": "https://www.linkedin.com/company/carnegie-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "laelaps-ai",
   "name": "Laelaps AI",
   "summary": "Builds autonomous robotic security agents and visual intelligence systems for critical asset protection.",
   "body": "Laelaps’ complete field intelligence system integrates autonomous embodied agents, video monitoring agents and sensing systems with an intelligent control layer to significantly enhance humans’ ability to secure and maintain critical assets, from manufacturing sites to military bases.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/634-laelaps-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://laelaps.ai/"
    },
    "image": {
     "v": "/logos/laelaps-ai.png",
     "fit": "contain",
     "src": "https://media.brand.dev/7e59bf44-996c-423f-813c-3319da4ffe8f.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zürich",
     "src": "https://ch.linkedin.com/company/laelaps-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/laelaps-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bederstrasse 49, Zürich, 8002, Switzerland",
       "lat": 47.363809,
       "lon": 8.529122,
       "src": "https://ch.linkedin.com/company/laelaps-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sensmore",
   "name": "Sensmore",
   "summary": "Develops physical AI systems that automate large mobile machinery, particularly haul trucks and loaders used in mining and construction.",
   "body": "sensmore is a Berlin/Potsdam-based robotics startup delivering production-proven automation for the industries where the world’s raw materials are extracted, moved, and processed.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/639-sensmore",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sensmore.ai/"
    },
    "image": {
     "v": "/logos/sensmore.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1f58c37e55b04eedf8c7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://roboticsconnected.com/companies/639-sensmore",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/639-sensmore",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Berlin, Germany",
       "lat": 52.517389,
       "lon": 13.395131,
       "src": "https://roboticsconnected.com/companies/639-sensmore"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rebotics-technology",
   "name": "Rebotics Technology",
   "summary": "Distributes and integrates advanced exoskeletons, orthotics, and robotic rehabilitation devices from established manufacturers.",
   "body": "Rebotics team’s knowledge and experience focused exclusively on products with the Rehab without Wheels approach, including exoskeletal and neuro product advancements.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/644-rebotics-technology",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rebotics.co.uk/"
    },
    "image": {
     "v": "/logos/rebotics-technology.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/c909814d2042e608fb4f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Long Hanborough",
     "src": "https://uk.linkedin.com/company/rebotics-technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/rebotics-technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "18 Lodge Road, Long Hanborough, Oxfordshire OX29 8LH, United Kingdom",
       "lat": 51.82584,
       "lon": -1.368521,
       "src": "https://uk.linkedin.com/company/rebotics-technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cassini-robotics",
   "name": "Cassini Robotics",
   "summary": "Develops Cassi, a mobile service robot designed for healthcare facilities.",
   "body": "Cassini Robotics is your helpful robotics company, designed to support healthcare staff, improve patient care, and streamline operations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/647-cassini-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cassinirobotics.com/"
    },
    "image": {
     "v": "/logos/cassini-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f69702d0a58db2145583.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Atlanta",
     "src": "https://roboticsconnected.com/companies/647-cassini-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/647-cassini-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Atlanta, United States",
       "lat": 33.754466,
       "lon": -84.389815,
       "src": "https://roboticsconnected.com/companies/647-cassini-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "centre-for-robotics-and-assembly",
   "name": "Centre for Robotics and Assembly",
   "summary": "The Centre for Robotics and Assembly at Cranfield University is a research and teaching hub that develops advanced robotic and assembly systems for industrial…",
   "body": "The Centre for Robotics and Assembly brings together a group of leading experts with diverse skill sets to solve multi-faceted and complex problems. Our research and teaching spans robotics, automation, industrial psychology, human factors, and driver behaviour.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://roboticsconnected.com/companies/650-centre-for-robotics-and-assembly",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cranfield.ac.uk/"
    },
    "image": {
     "v": "/logos/centre-for-robotics-and-assembly.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/88eaf846a1afdc793829.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cranfield",
     "src": "https://uk.linkedin.com/company/cranfieldrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/cranfieldrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "College Rd, Cranfield, Wharley End, Bedford, Cranfield, Bedfordshire MK43 0AL, United Kingdom",
       "lat": 52.072882,
       "lon": -0.602071,
       "src": "https://uk.linkedin.com/company/cranfieldrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cfms",
   "name": "CFMS",
   "summary": "Digital engineering consultancy specialising in modelling and simulation for hypercomplex industrial challenges.",
   "body": "CFMS is an independent digital engineering consultancy, providing design & analysis services, consultancy and IT infrastructure to help organisations create better solutions to pioneer new product development.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/652-cfms",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cfms.org.uk/"
    },
    "image": {
     "v": "/logos/cfms.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2a681efb9b204f2958f6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://uk.linkedin.com/company/cfms",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/cfms",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bristol & Bath Science Park, Bristol, Bristol, City of BS16 7FR, United Kingdom",
       "lat": 51.500409,
       "lon": -0.128135,
       "src": "https://uk.linkedin.com/company/cfms"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "circus-group",
   "name": "Circus Group",
   "summary": "Develops embodied AI robotics systems for autonomous food production and sustainment operations.",
   "body": "The Circus Group (XETRA: CA1) is the leading AI robotics company, specialising in the translation of the fine art of cooking into full autonomy. On its mission to fuel humanity, Circus provides global access to balanced nutrition, for everyone, anytime.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/657-circus-group",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.circus-group.com/"
    },
    "image": {
     "v": "/logos/circus-group.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e6441c1e50da0ac45737.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/657-circus-group",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/657-circus-group",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/657-circus-group"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "clearspace",
   "name": "ClearSpace",
   "summary": "Develops autonomous spacecraft for in-orbit servicing and active space debris removal.",
   "body": "The company specialises in three core capabilities: satellite inspection using high-fidelity imaging, mission life extension through precision refuelling and orbital adjustments, and controlled debris disposal. Operating across Switzerland, Luxembourg, Germany, and the UK, ClearSpace has secured major contracts from the European Space Agency.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/661-clearspace",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://clearspace.today/"
    },
    "image": {
     "v": "/logos/clearspace.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1159ada8d44602c02c74.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Renens",
     "src": "https://roboticsconnected.com/companies/661-clearspace",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://roboticsconnected.com/companies/661-clearspace",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Renens, Switzerland",
       "lat": 46.534909,
       "lon": 6.592844,
       "src": "https://roboticsconnected.com/companies/661-clearspace"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "clippership",
   "name": "Clippership",
   "summary": "Designs and deploys autonomous, wind-powered cargo vessels for maritime freight transport.",
   "body": "...",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/663-clippership",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://clippership.co/"
    },
    "image": {
     "v": "/logos/clippership.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4083a6080ab4779e0dbc.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "South San Francisco",
     "src": "https://roboticsconnected.com/companies/663-clippership",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/663-clippership",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "South San Francisco, United States",
       "lat": 37.65354,
       "lon": -122.416866,
       "src": "https://roboticsconnected.com/companies/663-clippership"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cohesive-robotics",
   "name": "Cohesive Robotics",
   "summary": "Builds smart robotic workcells for high-mix manufacturing, powered by proprietary Argus OS software.",
   "body": "We're a Techstars-backed company that builds amazing AI-enabled automation solutions for high-mix production environments, tailored for the needs of small and medium sized manufacturers.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/666-cohesive-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cohesiverobotics.com/"
    },
    "image": {
     "v": "/logos/cohesive-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2483b2010c9b0c5add7f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brooklyn",
     "src": "https://www.linkedin.com/company/cohesive-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/cohesive-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "63 Flushing Ave, Brooklyn, New York 11205, United States",
       "lat": 40.698383,
       "lon": -73.972688,
       "src": "https://www.linkedin.com/company/cohesive-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "connected-robotics",
   "name": "Connected Robotics",
   "summary": "Develops specialised robotic systems for food manufacturing and service sectors in Japan.",
   "body": "Connected Robotics strives to enrich people's lives through innovation to the food industry with robotics technologies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/670-connected-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://connected-robotics.com/"
    },
    "image": {
     "v": "/logos/connected-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/15a69caaa8b68d191739.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Koganei",
     "src": "https://jp.linkedin.com/company/connected-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://jp.linkedin.com/company/connected-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5-4-1 Kajinocho, Koganei, Tokyo 184-0012, Japan",
       "lat": 35.70736,
       "lon": 139.527166,
       "src": "https://jp.linkedin.com/company/connected-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "contoro-robotics",
   "name": "Contoro Robotics",
   "summary": "Builds AI-powered autonomous robots for container and trailer unloading in logistics.",
   "body": "Contoro Robotics is an Austin-based robotics startup that is revolutionizing industrial automation with AI-powered robots, focused on automating the unloading of floor-loaded trailer and shipping containers from trucks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/671-contoro-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.contoro.com/"
    },
    "image": {
     "v": "/logos/contoro-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2c67693eb186f9e54a7d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.linkedin.com/company/contoro-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/contoro-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1807 W Braker Ln, Austin, Texas 78758, United States",
       "lat": 30.389712,
       "lon": -97.705836,
       "src": "https://www.linkedin.com/company/contoro-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "copia-automation",
   "name": "Copia Automation",
   "summary": "Develops a DevOps platform for managing programmable logic controller (PLC) and robotic automation code.",
   "body": "The platform provides Git-based version control, automated backups, and disaster recovery across multi-vendor industrial devices from Siemens, Rockwell, and Omron. The software enables manufacturers and automation teams to reduce downtime through centralized code management, change tracking, and rapid recovery capabilities.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/672-copia-automation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://copia.io/"
    },
    "image": {
     "v": "/logos/copia-automation.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2eeea7c47c506c154761.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://roboticsconnected.com/companies/672-copia-automation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/672-copia-automation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://roboticsconnected.com/companies/672-copia-automation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "copper-robotics",
   "name": "Copper Robotics",
   "summary": "Develops Copper, a Rust-based open-source operating system for physical AI and autonomous robots.",
   "body": "Empowering Creators to Bring up the Next Breed of Smart Robots",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/673-copper-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.copper-robotics.com/"
    },
    "image": {
     "v": "/logos/copper-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ff3cea928467d4d58211.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://roboticsconnected.com/companies/673-copper-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/673-copper-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://roboticsconnected.com/companies/673-copper-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cradle-robotics-and-ai",
   "name": "CRADLE Robotics and AI",
   "summary": "Collaborative research centre combining Amentum's industrial expertise in robotics and autonomous systems with the University of Manchester's research capabilities.",
   "body": "Empowering UK and global industries with advanced Robotics and Autonomous Systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/681-cradle-robotics-and-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cradlerobotics.co.uk/"
    },
    "image": {
     "v": "/logos/cradle-robotics-and-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5fea9d94e70acc6883ad.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Manchester",
     "src": "https://uk.linkedin.com/company/cradle-robotics-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/cradle-robotics-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Booth Street East, Manchester, M13 9PL, United Kingdom",
       "lat": 53.469091,
       "lon": -2.233351,
       "src": "https://uk.linkedin.com/company/cradle-robotics-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "craft-prospect",
   "name": "Craft Prospect",
   "summary": "Glasgow-based space engineering company specialising in small satellite systems and on-board autonomy.",
   "body": "Craft Prospect is a space engineering practice based in Glasgow, UK. Our work includes NewSpace mission and systems engineering; collaborative R&D on enabling technology and novel downstream space applications.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/682-craft-prospect",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.craftprospect.com/"
    },
    "image": {
     "v": "/logos/craft-prospect.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8ddd1456b5b7ff1d3c85.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Glasgow",
     "src": "https://uk.linkedin.com/company/craft-prospect",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/craft-prospect",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1048 Govan Road, Glasgow, Scotland G51 4XS, United Kingdom",
       "lat": 55.864098,
       "lon": -4.320104,
       "src": "https://uk.linkedin.com/company/craft-prospect"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "createc",
   "name": "Createc",
   "summary": "Designs and deploys advanced robotic systems for hazardous and challenging environments, specialising in nuclear decommissioning, defence, and transport sectors.",
   "body": "The company builds intelligent robots equipped with sensing, imaging, and autonomous navigation capabilities. Its platform integrates emerging sensor technology with robotics and AI algorithms to enable safe inspection, maintenance, and automation tasks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/683-createc",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://createc.co.uk/"
    },
    "image": {
     "v": "/logos/createc.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4b82e8cf25ca4ce151b0.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cockermouth",
     "src": "https://roboticsconnected.com/companies/683-createc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/683-createc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cockermouth, United Kingdom",
       "lat": 54.663653,
       "lon": -3.365778,
       "src": "https://roboticsconnected.com/companies/683-createc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cuby",
   "name": "Cuby",
   "summary": "Full-stack technology company developing scalable hardware and software systems for process improvement in new home construction.",
   "body": "WHAT IS IT _ Cuby is a full-stack technology company that develops scalable hardware and software systems for process improvement and automation in new home construction. MISSION / VISION _ Cuby's mission is to empower others to build a better physical world.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/688-cuby",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cubytechnologies.com/"
    },
    "image": {
     "v": "/logos/cuby.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a0009c8022af416280cf.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.linkedin.com/company/buildwithcuby",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/buildwithcuby",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "101 AVENUE OF THE AMERICAS, New York, 10013, United States",
       "lat": 40.723378,
       "lon": -74.005497,
       "src": "https://www.linkedin.com/company/buildwithcuby"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cyberorigin",
   "name": "CyberOrigin",
   "summary": "Builds a data infrastructure platform for embodied AI and robotics training.",
   "body": "Towards general localization, mapping, and perception for robotics.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/692-cyberorigin",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cyberorigin.ai/"
    },
    "image": {
     "v": "/logos/cyberorigin.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e069dce1c2991fc8ed07.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "SINGAPORE",
     "src": "https://sg.linkedin.com/company/cyberorigin-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/cyberorigin-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "346C KING GEORGE'S AVENUE KING GEORGE'S BUILDING, SINGAPORE, --- Select One --- 208577, Singapore",
       "lat": 1.289918,
       "lon": 103.851907,
       "src": "https://sg.linkedin.com/company/cyberorigin-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "d-orbit",
   "name": "D-Orbit",
   "summary": "Designs and operates orbital transfer vehicles for satellite transportation and in-orbit servicing.",
   "body": "D-Orbit is a global market leader in the space logistics and transportation service industries with a track record of space-proven technologies and successful missions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/694-d-orbit",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dorbit.space/"
    },
    "image": {
     "v": "/logos/d-orbit.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d153a51e095e64852dc0.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Fino Mornasco",
     "src": "https://it.linkedin.com/company/d-orbit",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://it.linkedin.com/company/d-orbit",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Viale Risorgimento, 57, Fino Mornasco, Como 22073, Italy",
       "lat": 45.747352,
       "lon": 9.043515,
       "src": "https://it.linkedin.com/company/d-orbit"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "darwin-innovation",
   "name": "Darwin Innovation",
   "summary": "Provides setup and support services for organisations seeking to operate connected and autonomous vehicles (CAVs).",
   "body": "Welcome to Darwin! We offer communications solutions and support services to help organisations operate autonomous vehicles. Our software enables seamless connectivity, even in rural areas or moving vehicles, by combining 5G and satellite communications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/696-darwin-innovation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://darwincav.com/"
    },
    "image": {
     "v": "/logos/darwin-innovation.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/696/1791579082384.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Harwell Science Campus",
     "src": "https://uk.linkedin.com/company/darwin-innovation-group",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/darwin-innovation-group",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Harwell Science Campus, Fermi Avenue, Harwell Science Campus, Oxfordshire OX11 0XQ, United Kingdom",
       "lat": 51.574568,
       "lon": -1.313441,
       "src": "https://uk.linkedin.com/company/darwin-innovation-group"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "deep-trekker",
   "name": "Deep Trekker",
   "summary": "Manufactures portable, battery-powered remotely operated vehicles and crawlers for underwater inspection, maintenance, and recovery missions.",
   "body": "Deep Trekker provides the world's only truly portable, affordable, and easy to use remotely operated vehicles (ROVs) submersible crawler systems and subsurface cameras.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/701-deep-trekker",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.deeptrekker.com/"
    },
    "image": {
     "v": "/logos/deep-trekker.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/605eb6963aedb5a01f6d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kitchener",
     "src": "https://ca.linkedin.com/company/deep-trekker-inc-",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/deep-trekker-inc-",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "155 Washburn Dr, Kitchener, Ontario N2R 1S1, Canada",
       "lat": 43.400646,
       "lon": -80.492411,
       "src": "https://ca.linkedin.com/company/deep-trekker-inc-"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "deliversai",
   "name": "DELIVERS.AI",
   "summary": "Builds autonomous delivery robots for last-mile logistics using AI-powered technology.",
   "body": "Founded in 2020, the mission of DELIVERS.AI LTD is to develop a true application, agnostic autonomous mobility platform to support last-mile delivery worldwide. We are highly aware that broad adoption of emission free, low cost delivery will produce a step change in the environmental and social impact of the sector.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/702-delivers-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.delivers.ai/"
    },
    "image": {
     "v": "/logos/deliversai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5d8fa5f7b533b276ba6e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/delivers-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/delivers-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "20-22 Wenlock Road, London, N1 7GU, United Kingdom",
       "lat": 51.530723,
       "lon": -0.093626,
       "src": "https://uk.linkedin.com/company/delivers-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "almetra",
   "name": "Almetra",
   "summary": "Builds an AI-powered computer vision platform that captures real-world production activity on manufacturing assembly lines using privacy-preserving video and sensor data.",
   "body": "Deltia is now Almetra! AI-based process analytics platform to increase productivity and quality in manual shop-floor processes. Processes are captured using computer vision and automatically analysed with a highly flexible AI to identify improvement potential. 1.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/704-almetra",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.almetra.ai/"
    },
    "image": {
     "v": "/logos/almetra.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2ea5b57c1ee8c7395739.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://de.linkedin.com/company/almetra-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/almetra-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Max-Urich-Strasse 3, Berlin, 13355, Germany",
       "lat": 52.539461,
       "lon": 13.38397,
       "src": "https://de.linkedin.com/company/almetra-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "digital-concepts-engineering",
   "name": "Digital Concepts Engineering",
   "summary": "Specialises in designing, developing and producing robotic control systems and uncrewed ground vehicles.",
   "body": "Since 2017, Digital Concepts Engineering have been developing and deploying solutions directly related to the conversion of vehicles and platforms to remote control, and are regarded as global leaders in Uncrewed Vehicle technology.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/713-digital-concepts-engineering",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dconcepts.co.uk/"
    },
    "image": {
     "v": "/logos/digital-concepts-engineering.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/05f9a9eb2c567af5be66.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hinckley",
     "src": "https://uk.linkedin.com/company/digital-concepts-engineering-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/digital-concepts-engineering-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Unit 4, The Boathouse, Hinckley, Leicestershire LE10 3BY, United Kingdom",
       "lat": 52.541059,
       "lon": -1.372938,
       "src": "https://uk.linkedin.com/company/digital-concepts-engineering-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dream-machines",
   "name": "Dream Machines",
   "summary": "Develops robotic AI systems enabling non-specialists to automate variable, repetitive manufacturing tasks.",
   "body": "The company packages AI as integrated solutions that learn directly from operators, addressing workbench tasks too inconsistent for traditional automation. Built by researchers and engineers from ETH Zurich, the team combines expertise in AI models and factory operations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/720-dream-machines",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dream-machines.eu/"
    },
    "image": {
     "v": "/logos/dream-machines.png",
     "fit": "contain",
     "src": "https://dream-machines.eu/icon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/720-dream-machines",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/720-dream-machines",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/720-dream-machines"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dronedeploy",
   "name": "DroneDeploy",
   "summary": "Reality capture platform combining drones, ground robots, and AI to help construction, infrastructure and energy companies document, measure and analyse work sites.",
   "body": "DroneDeploy powers field teams with robotics and AI. As the only platform that combines robotic automation, AI agents and truly unified reality capture, DroneDeploy allows critical industries to operate with speed and confidence.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/721-dronedeploy",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dronedeploy.com/"
    },
    "image": {
     "v": "/logos/dronedeploy.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4ff6d63ca3f807c29095.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/721-dronedeploy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/721-dronedeploy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/721-dronedeploy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dzyne-technologies",
   "name": "DZYNE Technologies",
   "summary": "Develops long-endurance unmanned aircraft, counter-UAS systems, and autonomous expendables for defence and military applications.",
   "body": "DZYNE Technologies is a leading innovator in autonomous defense solutions, specializing in the design and development of advanced unmanned aerial systems (UAS) and counter-UAS technologies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/728-dzyne-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dzyne.com/"
    },
    "image": {
     "v": "/logos/dzyne-technologies.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ed503eeb67ff4d1e4098.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Irvine",
     "src": "https://www.linkedin.com/company/dzyne-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/dzyne-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "34 Parker, Irvine, California 92618, United States",
       "lat": 33.658069,
       "lon": -117.70441,
       "src": "https://www.linkedin.com/company/dzyne-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "e-cobot",
   "name": "E-COBOT",
   "summary": "French robotics manufacturer and integrator founded in 2016.",
   "body": "E-COBOT is a Nantes based company founded in 2016, specialized in cobotics and artificial intelligence​ solution. We design, manufacture and integrate on specification. We strongly believe that human is at the heart of tomorrow's industry, this is why our business core is to enhance his performance and added value.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/729-e-cobot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://e-cobot.com/"
    },
    "image": {
     "v": "/logos/e-cobot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a1dea4bb4e3cd9a7b08c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Carquefou",
     "src": "https://fr.linkedin.com/company/e-cobot",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/e-cobot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1, Rue du Tertre, Carquefou, Pays de la Loire 44470, France",
       "lat": 47.26185,
       "lon": -1.497598,
       "src": "https://fr.linkedin.com/company/e-cobot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "e-nano",
   "name": "E-Nano",
   "summary": "Builds an automation stack combining robotics, sensing systems, edge computing, and artificial intelligence to measure, monitor, and manage real-world environments.",
   "body": "E-Nano is combining cutting-edge robotics and AI to enhance professional sports playing surfaces. Through automated analysis and real-time data-driven recommendations, we reduce costs, resource-use, and player injury whilst improving sustainability and performance.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/730-e-nano",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.e-nano.io/"
    },
    "image": {
     "v": "/logos/e-nano.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8b97eff4925ea45821f9.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/730-e-nano",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/730-e-nano",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/730-e-nano"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "easy-aerial",
   "name": "Easy Aerial",
   "summary": "Manufactures military-grade autonomous tethered drone-in-a-box systems for persistent aerial surveillance.",
   "body": "The company builds free-flight and tethered unmanned aerial vehicles (UAVs) designed for deployment in harsh, hostile environments. Founded and led by former military personnel alongside aerospace and robotics engineers, Easy Aerial has delivered hundreds of systems to defence and commercial customers globally.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/733-easy-aerial",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ezaerial.com/"
    },
    "image": {
     "v": "/logos/easy-aerial.png",
     "fit": "contain",
     "src": "https://ezaerial.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brooklyn",
     "src": "https://roboticsconnected.com/companies/733-easy-aerial",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/733-easy-aerial",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brooklyn, United States",
       "lat": 40.652601,
       "lon": -73.949721,
       "src": "https://roboticsconnected.com/companies/733-easy-aerial"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "easymile",
   "name": "EasyMile",
   "summary": "Develops autonomous-driving software that powers industrial-grade vehicles for heavy-duty operations.",
   "body": "TLD Robotics develops fully driverless vehicles and software for airport and industrial operations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/734-easymile",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://easymile.com/"
    },
    "image": {
     "v": "/logos/easymile.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f922641719726c4e663d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toulouse",
     "src": "https://fr.linkedin.com/company/easymile",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/easymile",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "21, Boulevard de la Marquette, Toulouse, 31000, France",
       "lat": 43.614289,
       "lon": 1.433161,
       "src": "https://fr.linkedin.com/company/easymile"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "edge-case",
   "name": "Edge Case",
   "summary": "Builds a DevSafeOps platform for continuous safety validation of autonomous systems and robotics.",
   "body": "Edge Case is the trusted technical partner for companies pushing the boundaries of frontier technology. We help innovators in autonomous vehicles, robotics, aerospace, oil & gas, and supply chain build and scale safer, more reliable systems — from prototype to global deployment.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/736-edge-case",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ecr.ai/"
    },
    "image": {
     "v": "/logos/edge-case.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/880e8a1ffa4c58ad7a68.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/edge-case-technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/edge-case-technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2555 Smallman Street, Pittsburgh, Pennsylvania 15222, United States",
       "lat": 40.45537,
       "lon": -79.980039,
       "src": "https://www.linkedin.com/company/edge-case-technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eelume",
   "name": "Eelume",
   "summary": "Norwegian robotics company developing all-terrain autonomous underwater vehicles (AUVs) for subsea inspection, maintenance and repair operations.",
   "body": "Eelume is a leading provider of innovative underwater technology solutions. With a commitment to sustainability and cutting-edge engineering, Eelume strives to push the boundaries of underwater exploration while minimizing environmental impact.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/737-eelume",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.eelume.com/"
    },
    "image": {
     "v": "/logos/eelume.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/563546bfa18129cc419d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Trondheim",
     "src": "https://no.linkedin.com/company/eelume",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://no.linkedin.com/company/eelume",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Transittgata 10, Trondheim, 7042, Norway",
       "lat": 63.439722,
       "lon": 10.413343,
       "src": "https://no.linkedin.com/company/eelume"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eka-robotics",
   "name": "Eka Robotics",
   "summary": "Builds intelligent robots using a Vision-Force-Action model that unites performance, generality, and safety for dexterous manipulation tasks.",
   "body": "The team comprises leading researchers from MIT, Berkeley, Harvard, and companies including DeepMind and Boston Dynamics, co-founded by MIT professor Pulkit Agrawal. Their approach uses self-supervised learning and reinforcement learning trained in simulation, enabling robots to develop physical intuition without relying on large human demonstration datasets.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/740-eka-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ekarobotics.com/"
    },
    "image": {
     "v": "/logos/eka-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0fc4a2588c6ee6b5e3a1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://roboticsconnected.com/companies/740-eka-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/740-eka-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cambridge, United States",
       "lat": 42.365635,
       "lon": -71.104002,
       "src": "https://roboticsconnected.com/companies/740-eka-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "elementary",
   "name": "Elementary",
   "summary": "Develops AI-powered machine vision systems for automated quality inspection in manufacturing.",
   "body": "Elementary helps Fortune 500 manufacturers automate inspection, increase production yield, and achieve measurable ROI in less than 6 months.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/744-elementary",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.elementaryml.com/"
    },
    "image": {
     "v": "/logos/elementary.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6934a524d9058aaceed6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "South Pasadena",
     "src": "https://www.linkedin.com/company/elementary-ml",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/elementary-ml",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "161 Pasadena Ave, South Pasadena, California 91030, United States",
       "lat": 34.112109,
       "lon": -118.172926,
       "src": "https://www.linkedin.com/company/elementary-ml"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "harmattan-ai",
   "name": "Harmattan AI",
   "summary": "Develops vertically integrated autonomous defence systems for military applications, including layered air-defence solutions, coordinated autonomous ISR and strike UAVs…",
   "body": "Harmattan AI is redefining how forces are built and deployed, shaping a future where autonomous robots fight as one across the full spectrum of operations. Autonomy multiplies both mass and capability, unlocking a new scale of force.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/837-harmattan-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://harmattan.ai/"
    },
    "image": {
     "v": "/logos/harmattan-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2275d2a4c00f94aec6c6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://roboticsconnected.com/companies/837-harmattan-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://roboticsconnected.com/companies/837-harmattan-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://roboticsconnected.com/companies/837-harmattan-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mind-robotics",
   "name": "Mind Robotics",
   "summary": "Builds AI-powered industrial robots and foundation models to automate complex factory tasks requiring human-like dexterity and reasoning.",
   "body": "Mind Robotics is building generalizable robotics for real-world industrial deployment. We believe the fastest path to broadly capable robots is to work on clearly defined, high impact problems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/838-mind-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mindrobotics.com/"
    },
    "image": {
     "v": "/logos/mind-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/78765f87444920ea5e78.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://roboticsconnected.com/companies/838-mind-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/838-mind-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://roboticsconnected.com/companies/838-mind-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cell-labs",
   "name": "Cell Labs",
   "summary": "Builds humanoid robots with a focus on human-centred design and accessibility.",
   "body": "We build humanoid robots and the technology that powers them. Our goal: make physical work optional. With high-tech design and human-centered systems. Born in Berlin. Made to connect.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/839-cell-labs",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cell-labs.ai/"
    },
    "image": {
     "v": "/logos/cell-labs.png",
     "fit": "contain",
     "src": "https://media.brand.dev/883adba7-f3d8-47d7-a1e5-e8b3f4d851ff.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://roboticsconnected.com/companies/839-cell-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/839-cell-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Berlin, Germany",
       "lat": 52.517389,
       "lon": 13.395131,
       "src": "https://roboticsconnected.com/companies/839-cell-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zeabuz",
   "name": "Zeabuz",
   "summary": "Develops autonomous maritime navigation systems for commercial and defence vessels.",
   "body": "Driven by our mission to empower effective and resilient maritime operations, Zeabuz delivers intelligent navigation, automation, and autonomy solutions for commercial and defence operators.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/840-zeabuz",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zeabuz.com/"
    },
    "image": {
     "v": "/logos/zeabuz.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2eebab986b6df83c901a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Trondheim",
     "src": "https://no.linkedin.com/company/zeabuz",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://no.linkedin.com/company/zeabuz",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Skippergata 14, Trondheim, Trøndelag 7042, Norway",
       "lat": 63.439939,
       "lon": 10.417741,
       "src": "https://no.linkedin.com/company/zeabuz"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autonomous-solutions-inc-asi",
   "name": "Autonomous Solutions, Inc. (ASI)",
   "summary": "World leader in industrial vehicle autonomy, having developed Mobius, its flagship Industrial Autonomous Fleet Orchestration system.",
   "body": "Autonomous Solutions, Inc. (ASI), worldwide leader of industrial vehicle automation, developed the Mobius® Industrial Autonomous Fleet Orchestration system. ASI’s innovative, proprietary robotic hardware and software make any fleet, large and small, operate autonomously.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/842-autonomous-solutions-inc-asi",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://asirobots.com/"
    },
    "image": {
     "v": "/logos/autonomous-solutions-inc-asi.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2eba9675f9d91b978801.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mendon",
     "src": "https://www.linkedin.com/company/autonomous-solutions",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/autonomous-solutions",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "990 N 8000 W, Mendon, UT 84325, United States",
       "lat": 41.70993,
       "lon": -111.977725,
       "src": "https://www.linkedin.com/company/autonomous-solutions"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aurelius-systems",
   "name": "Aurelius Systems",
   "summary": "Develops autonomous directed-energy laser systems for counter-unmanned aerial system defence.",
   "body": "AI-powered defense systems for the growing UAS drone threat. At Aurelius, we are shaping the future of defense with autonomous, unmanned directed-energy laser systems that can protect our soil and our allies against Unmanned Aircraft Systems (UAS) drones at scale.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/844-aurelius-systems",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aureliussystems.com/"
    },
    "image": {
     "v": "/logos/aurelius-systems.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8b585edd81de02b05008.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/844-aurelius-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/844-aurelius-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/844-aurelius-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aitan",
   "name": "AITAN",
   "summary": "Develops edge AI robotic weapon systems and autonomous drone platforms for military and defence applications.",
   "body": "The company unifies drones, sensors and autonomous systems through a vendor-agnostic command layer, AI autonomy toolkits and an SDK for domestically developed models. Formerly known as eyesAtop, AITAN was founded in 2015 and rebuilt under new leadership in 2023.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/846-aitan",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://eyesatop.io/"
    },
    "image": {
     "v": "/logos/aitan.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/788262114ec26ce13902.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ramat Gan",
     "src": "https://roboticsconnected.com/companies/846-aitan",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://roboticsconnected.com/companies/846-aitan",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ramat Gan, Israel",
       "lat": 32.068687,
       "lon": 34.824681,
       "src": "https://roboticsconnected.com/companies/846-aitan"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "exol",
   "name": "Exol",
   "summary": "Robotic logistics platform combining physical AI, intelligent software, and nationwide fulfilment infrastructure.",
   "body": "Modern fulfillment you don't have to build, buy or lock into. Exol brings automation, AI, transportation and real-time visibility together in one managed network, right-sized to your business and available with no long-term contracts or upfront capital.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/850-exol",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://exol.com/"
    },
    "image": {
     "v": "/logos/exol.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2505262db6136de4091a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://roboticsconnected.com/companies/850-exol",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/850-exol",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Menlo Park, United States",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://roboticsconnected.com/companies/850-exol"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "titan-robotics",
   "name": "Titan Robotics",
   "summary": "Builds adaptive autonomy software enabling industrial robots to perform complex manufacturing and maintenance tasks with minimal programming.",
   "body": "The company develops flexible robotic systems for aerospace, defence and industrial applications, including paint systems, radome repair, cold spray and rail inspection. Founded in 2014 by Carnegie Mellon faculty, it commercialises technology from the National Robotics Engineering Centre (NREC).",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/852-titan-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://titan-robot.com/"
    },
    "image": {
     "v": "/logos/titan-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e4cf52ff3edad7ebbbde.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Coraopolis",
     "src": "https://roboticsconnected.com/companies/852-titan-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/852-titan-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Coraopolis, United States",
       "lat": 40.517535,
       "lon": -80.164323,
       "src": "https://roboticsconnected.com/companies/852-titan-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "spaice",
   "name": "SPAICE",
   "summary": "AI software company building GNSS-independent navigation and geospatial intelligence for unmanned systems in GPS-denied environments.",
   "body": "SPAICE is a software-first defence company building GNSS-independent navigation and geospatial intelligence for unmanned air and space systems. We enable autonomous platforms to self-localise, georeference detections, and contribute to a live, shared tactical map when GPS is unavailable, unreliable, or denied.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/853-spaice",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.spaice.tech/"
    },
    "image": {
     "v": "/logos/spaice.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/fbc5c739464962e61d01.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/853-spaice",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/853-spaice",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/853-spaice"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "9-mothers",
   "name": "9 Mothers",
   "summary": "Builds AI-powered counter-drone defence systems for military use.",
   "body": "Cost effective C-UAS. AI detection, tracking and defensive systems. EDDA is our first counter suicide drone system, effectively stopping fast moving small drones.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/856-9-mothers",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://9mothers.com/"
    },
    "image": {
     "v": "/logos/9-mothers.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/00cc191e3a10242dca43.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.linkedin.com/company/9-mothers",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/9-mothers",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1606 Headway Circle, Austin, Texas 78754, United States",
       "lat": 30.334399,
       "lon": -97.683144,
       "src": "https://www.linkedin.com/company/9-mothers"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gravis-robotics",
   "name": "Gravis Robotics",
   "summary": "Develops physical AI software and hardware to retrofit existing construction excavators with autonomous capabilities.",
   "body": "Gravis Robotics turns any earthmoving machine into a robot. Unlock superhuman productivity with plug-and-play autonomy.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/858-gravis-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gravisrobotics.com/"
    },
    "image": {
     "v": "/logos/gravis-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d89fb5951a5c127740e7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/gravisrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/gravisrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sonneggstrasse 3, Zurich, 8092, Switzerland",
       "lat": 47.378015,
       "lon": 8.547778,
       "src": "https://ch.linkedin.com/company/gravisrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "beex",
   "name": "BeeX",
   "summary": "Operates fully autonomous underwater drones for subsea inspection across defence, energy, and coastal infrastructure.",
   "body": "BeeX designs and operates a fleet of fully autonomous underwater drones aimed at transforming underwater capabilities at scale. Where traditional inspection requires teams of specialists and large supporting vessels offshore, BeeX drones operate entirely on their own.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/861-beex",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.beex.sg/"
    },
    "image": {
     "v": "/logos/beex.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1e4dbdfe9724e7aa4da0.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/beexsg",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/beexsg",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5 Engineering Drive 1, Singapore, 117608, Singapore",
       "lat": 1.301068,
       "lon": 103.771896,
       "src": "https://sg.linkedin.com/company/beexsg"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "august-robotics",
   "name": "August Robotics",
   "summary": "Builds autonomous robot fleets for construction, exhibitions, and industrial workflows.",
   "body": "August Robotics is a global robotics platform company building autonomous robot fleets for construction, industrial, and large-scale infrastructure environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/862-august-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://augustrobotics.com/"
    },
    "image": {
     "v": "/logos/august-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2a0d97000dced3117a03.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Las Vegas",
     "src": "https://www.linkedin.com/company/august-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/august-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4650 s Arville St, Las Vegas, Nevada 89103, United States",
       "lat": 36.167426,
       "lon": -115.148413,
       "src": "https://www.linkedin.com/company/august-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "batch-robotics",
   "name": "Batch Robotics",
   "summary": "Develops AI-driven software that enables industrial robots to automate small-batch manufacturing without traditional programming.",
   "body": "AI-Learning for Industrial Robots. We make robots smarter, enabling small batch automation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/863-batch-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.batch-robotics.com/"
    },
    "image": {
     "v": "/logos/batch-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/60c2b41c3738c6ab3edd.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/863-batch-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/863-batch-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/863-batch-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "farming-revolution",
   "name": "Farming Revolution",
   "summary": "Builds the Farming GT, an autonomous weeding robot that uses AI-driven computer vision and mechanical tools to remove weeds from crop fields without herbicides or human…",
   "body": "AI-powered weeding robots for your farm.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/864-farming-revolution",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://farming-revolution.com/"
    },
    "image": {
     "v": "/logos/farming-revolution.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d5031d9f97e58d570819.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ludwigsburg",
     "src": "https://de.linkedin.com/company/farming-revolution-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/farming-revolution-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Grönerstraße 9, Ludwigsburg, Baden-Württemberg 71636, Germany",
       "lat": 48.891883,
       "lon": 9.172958,
       "src": "https://de.linkedin.com/company/farming-revolution-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "remote-robotic",
   "name": "Remote Robotic",
   "summary": "Systems is Canada's dual-use robotics systems integrator, supplying drones, ground robots, underwater ROVs, and payloads to police, fire, mining, energy, and…",
   "body": "Remote Robotic Systems (Formerly RMUS Canada). With offices in Ontario, Alberta, and BC, we deliver and support enterprise-grade drones, land robots, and remote operations systems for industrial and public-safety organizations across Canada.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/865-remote-robotic",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://remoterobotic.com/"
    },
    "image": {
     "v": "/logos/remote-robotic.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0a7b7f2949456a1a3bbe.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mississauga",
     "src": "https://ca.linkedin.com/company/remoterobotic",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/remoterobotic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2160 Dunwin Drive, Unit 5, Mississauga, Ontario L5L 5M8, Canada",
       "lat": 43.588473,
       "lon": -79.643658,
       "src": "https://ca.linkedin.com/company/remoterobotic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "physical-robotics",
   "name": "Physical Robotics",
   "summary": "Develops upper-body humanoid robots designed to perform dexterous tasks in dynamic environments.",
   "body": "The company focuses on the torso and arms rather than legs, enabling faster development and enhanced stability whilst maintaining precision in complex operations. Their flagship product, Robot Pi (π), targets roles in manufacturing, healthcare, logistics and hazardous environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/867-physical-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.physicalrobotics.com/"
    },
    "image": {
     "v": "/logos/physical-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/37f0245e6801e2d847ab.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Moss",
     "src": "https://roboticsconnected.com/companies/867-physical-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://roboticsconnected.com/companies/867-physical-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Moss, Norway",
       "lat": 59.414668,
       "lon": 10.659658,
       "src": "https://roboticsconnected.com/companies/867-physical-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rovula",
   "name": "Rovula",
   "summary": "Develops autonomous underwater vehicles and digital platforms for subsea inspection, repair and maintenance in the oil and gas sector.",
   "body": "A leading platform solutions for subsea IRM to Oil and Gas An end-to-end solutions for subsea IRM platform enhanced by advanced Al and Robotics technologies providing cost efficiency and safer operation",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/868-rovula",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rovula.com/"
    },
    "image": {
     "v": "/logos/rovula.png",
     "fit": "contain",
     "src": "https://rovula.com/images/logo/rovula-circle.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bangkok",
     "src": "https://th.linkedin.com/company/rovula",
     "asof": "2026-11"
    },
    "country": {
     "v": "Thailand",
     "src": "https://th.linkedin.com/company/rovula",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bhiraj Tower at Sathon Building C, Bangkok, Thailand",
       "lat": 13.752494,
       "lon": 100.493509,
       "src": "https://th.linkedin.com/company/rovula"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nautica-technologies",
   "name": "Nautica Technologies",
   "summary": "Develops HYDRA™, an autonomous robotic antifouling system for ship hull maintenance.",
   "body": "The ocean powers global trade, energy and connectivity. At Nautica Technologies, we are developing resident autonomous robot swarms to keep its critical infrastructure resilient.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/869-nautica-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://nauticatechnologies.com/"
    },
    "image": {
     "v": "/logos/nautica-technologies.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/514e9990dc1cb165981c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zürich",
     "src": "https://roboticsconnected.com/companies/869-nautica-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://roboticsconnected.com/companies/869-nautica-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zürich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://roboticsconnected.com/companies/869-nautica-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "noyes-technologies",
   "name": "Noyes Technologies",
   "summary": "Develops NoyesStorage, an automated warehouse system for compact spaces of 15 to 250 square metres using mobile robots and smart storage technology.",
   "body": "As Noyes, we strive to enable automation for everyone. Our simple but sophisticated automated nano warehouse, NoyesStorage, flexibly adapts to your needs. The modular design enables a perfect fit to any floor plan - starting from 10 sqm.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/872-noyes-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://noyes-tech.com/"
    },
    "image": {
     "v": "/logos/noyes-technologies.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f1dc93c56e9476711249.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/872-noyes-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/872-noyes-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/872-noyes-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "omakase-robotics",
   "name": "Omakase Robotics",
   "summary": "Extends voice AI expertise into physical robotics by building Omakase OS, a software platform that enables robots from multiple manufacturers to perceive, interact with…",
   "body": "The platform integrates perception, voice interaction, and autonomous planning to deploy service robots reliably in healthcare, hospitality, retail, and logistics. Omakase OS is robot-agnostic: a plug-on module that works across different hardware manufacturers and OEMs.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/873-omakase-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://omakase.ai/"
    },
    "image": {
     "v": "/logos/omakase-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8bcc61b7db71b69ad906.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://roboticsconnected.com/companies/873-omakase-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://roboticsconnected.com/companies/873-omakase-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://roboticsconnected.com/companies/873-omakase-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "destro-ai",
   "name": "Destro AI",
   "summary": "Builds a shared intelligence layer for warehouse and factory robotics, enabling multi-robot fleets to execute complex workflows autonomously.",
   "body": "Destro is building the AI-native intelligence layer for warehouse operations. Our software gives every robot, human, and workflow a shared understanding of the warehouse, enabling faster decisions, better coordination, and more intelligent execution.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/874-destro-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.destroai.com/"
    },
    "image": {
     "v": "/logos/destro-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e5edba5f82ef356cffcd.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brooklyn",
     "src": "https://www.linkedin.com/company/destroaiautomation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/destroaiautomation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "370 Jay St, Brooklyn, New York 11201, United States",
       "lat": 40.693291,
       "lon": -73.988059,
       "src": "https://www.linkedin.com/company/destroaiautomation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "naxon-robotics",
   "name": "Naxon Robotics",
   "summary": "Munich-based company building an agentic robotics platform for security, inspection and predictive maintenance.",
   "body": "We deploy swarms of robots for security and inspection. Built to hit ROI, not hype. Powered by an agentic robotics platform that makes deployment scalable and cut time to ROI. Backed by EWOR and TU Munich Venture Labs. Based in Munich.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/982-naxon-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.naxonrobotics.com/"
    },
    "image": {
     "v": "/logos/naxon-robotics.png",
     "fit": "contain",
     "src": "https://www.naxonrobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/naxonrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/naxonrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Freddie-Mercury-Straße 5, Munich, Bavaria 80797, Germany",
       "lat": 48.157003,
       "lon": 11.551436,
       "src": "https://de.linkedin.com/company/naxonrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "adastec",
   "name": "ADASTEC",
   "summary": "Develops an SAE Level-4 automated driving software platform, flowride.ai, that lets bus and commercial vehicle OEMs build automated, shared and connected transit…",
   "body": "ADASTEC Corp. is a software company that enables full sized and full speed electric public transit buses to become SAE Level 4 autonomous. ADASTEC’s software platform, named flowride.ai, and sensor stack can be integrated in any bus OEM and can be serially produced.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/983-adastec",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.adastec.com/"
    },
    "image": {
     "v": "/logos/adastec.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/be0565355a9d76c37cbb.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "East Lansing",
     "src": "https://www.linkedin.com/company/adastec",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/adastec",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "325 E Grand River Ave, East Lansing, Michigan 48823, United States",
       "lat": 42.734594,
       "lon": -84.481042,
       "src": "https://www.linkedin.com/company/adastec"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "embotech",
   "name": "Embotech",
   "summary": "Zurich-based Swiss company spun out of ETH Zurich in 2013, developing safety-certified Level 4 autonomous driving systems for industrial logistics.",
   "body": "Embotech is a global leader in safety-certified Level 4 autonomous driving solutions for industrial logistics and the first company world-wide to hold multiple TÜV-certified Level 4 solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/986-embotech",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://embotech.ai/"
    },
    "image": {
     "v": "/logos/embotech.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/62c1dc45dbf30259a0d8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stadtkreis 5 Industriequartier",
     "src": "https://ch.linkedin.com/company/embotech",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/embotech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hardturmstrasse 11, Stadtkreis 5 Industriequartier, Zurich 8005, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://ch.linkedin.com/company/embotech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "effecto",
   "name": "Effecto",
   "summary": "Makes end-of-arm tooling for industrial robots.",
   "body": "Its range covers tool changers, collision sensors, grippers, automatic vises, docking systems, deburring tools and compliance devices. The company says it invented the robotic tool changer and sells XCHANGE and QuickSTOP branded products.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/988-effecto",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://effecto.com/"
    },
    "image": {
     "v": "/logos/effecto.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ad59a60af769bba403f8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Glenville",
     "src": "https://roboticsconnected.com/companies/988-effecto",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/988-effecto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Glenville, United States",
       "lat": 43.572754,
       "lon": -93.281426,
       "src": "https://roboticsconnected.com/companies/988-effecto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "huayan-robotics",
   "name": "Huayan Robotics",
   "summary": "Shenzhen-based maker of collaborative robots, listed on the Hong Kong Stock Exchange (1021.HK).",
   "body": "Huayan Robotics, formerly known as Han’s Robot, originated from Han’s Laser. To embark on a new journey of global expansion, the company officially rebranded as \"Huayan Robotics\" in 2025.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/993-huayan-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.huayan-robotics.net/"
    },
    "image": {
     "v": "/logos/huayan-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5792cdf1a9190088bf7a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://cn.linkedin.com/company/huayanrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/huayanrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "601, Building No. 3, Han's Global Manufacturing Center, No. 12, Chongqing Road, Heping Community, Fuhai Street, Bao'an District,, Shenzhen, Guangdong 518057, China",
       "lat": 22.559853,
       "lon": 113.879033,
       "src": "https://cn.linkedin.com/company/huayanrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zenadrone",
   "name": "ZenaDrone",
   "summary": "Drone subsidiary of ZenaTech, a Nasdaq-listed group, and builds the ZenaDrone 1000, a heavy-lift autonomous UAV with AI flight software, multispectral sensors and a…",
   "body": "ZenaDrone, a wholly owned subsidiary of ZenaTech, develops and manufactures autonomous business drone solutions that can incorporate machine learning software, AI, predictive modeling, and other software and hardware innovations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/994-zenadrone",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zenadrone.com/"
    },
    "image": {
     "v": "/logos/zenadrone.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/294e891c080ae59ef873.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Naperville",
     "src": "https://roboticsconnected.com/companies/994-zenadrone",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/994-zenadrone",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Naperville, United States",
       "lat": 41.77287,
       "lon": -88.147928,
       "src": "https://roboticsconnected.com/companies/994-zenadrone"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neuralagent",
   "name": "NeuralAgent",
   "summary": "Munich-based software firm building decentralised, cloud-free AI agents for autonomous networks.",
   "body": "We ensure technological sovereignty through trustworthy intelligence for a safer connected future. Our dual-use innovation leverages decentralized intelligence to enhance resilient and reliable network orchestration, ensuring interoperability and multi-domain autonomy across space, air, and ground.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/997-neuralagent",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://neuralagent.ai/"
    },
    "image": {
     "v": "/logos/neuralagent.png",
     "fit": "contain",
     "src": "https://neuralagent.ai/wp-content/uploads/2025/10/logo-na.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/997-neuralagent",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/997-neuralagent",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/997-neuralagent"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bhf-robotics",
   "name": "BHF Robotics",
   "summary": "Builds agricultural robots and AI for commercial farming.",
   "body": "BH Frontier Solutions Inc. (BHF Agrobot) is a fast growing agricultural technology company that is currently transforming the technological landscape in agriculture. We specialize in designing and manufacturing agricultural robots that enable data-driven agricultural management and precision treatment.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1001-bhf-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bhfrobotics.com/"
    },
    "image": {
     "v": "/logos/bhf-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/43e980a25249b5f5b63a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Markham",
     "src": "https://roboticsconnected.com/companies/1001-bhf-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/1001-bhf-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Markham, Canada",
       "lat": 43.856371,
       "lon": -79.337682,
       "src": "https://roboticsconnected.com/companies/1001-bhf-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flink-robotics",
   "name": "Flink Robotics",
   "summary": "Zurich-based ETH spin-off building drop-in robots that automate physical work in logistics and industrial settings.",
   "body": "We're pioneering software intelligence that transforms robots into plug-and-play systems for material handling.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1002-flink-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.flink.so/"
    },
    "image": {
     "v": "/logos/flink-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/99dab0e38040bb2c8a5c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://roboticsconnected.com/companies/1002-flink-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://roboticsconnected.com/companies/1002-flink-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://roboticsconnected.com/companies/1002-flink-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mana-robotics",
   "name": "Mana Robotics",
   "summary": "Dresden-based German startup building fully autonomous cooking robots designed to fit into existing kitchens.",
   "body": "Mana Robotics is a German robotics startup founded in 2023, building a new generation of highly capable robots for everyday environments.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1004-mana-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mana-robotics.com/"
    },
    "image": {
     "v": "/logos/mana-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6996d37311a4b53ddca2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dresden",
     "src": "https://roboticsconnected.com/companies/1004-mana-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/1004-mana-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dresden, Germany",
       "lat": 51.049329,
       "lon": 13.738144,
       "src": "https://roboticsconnected.com/companies/1004-mana-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ocean-infinity",
   "name": "Ocean Infinity",
   "summary": "Marine technology company that uses robotic vessels, autonomous underwater vehicles and software to collect ocean and seabed data at scale.",
   "body": "Ocean Infinity is a technology-driven company transforming how ocean operations are carried out. We design, build and operate robotic and uncrewed systems to perform complex work at sea - safer, smarter and with less environmental impact.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1007-ocean-infinity",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://oceaninfinity.com/"
    },
    "image": {
     "v": "/logos/ocean-infinity.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5563185c437788a470ba.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://roboticsconnected.com/companies/1007-ocean-infinity",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1007-ocean-infinity",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://roboticsconnected.com/companies/1007-ocean-infinity"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "katalyst-space",
   "name": "Katalyst Space",
   "summary": "Flagstaff, Arizona aerospace company building robotic spacecraft for satellite servicing and space domain awareness.",
   "body": "At Katalyst Space Technologies, our goal is to fundamentally shake up how the satellite industry works. We’re a R&D team focused on next-gen satellite and mission designs that break through the long cycle times, rigid architectures, and inflexibility in mission planning that dominates the space industry.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1011-katalyst-space",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.katalystspace.com/"
    },
    "image": {
     "v": "/logos/katalyst-space.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4bb979e742e8c72c4bbc.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Flagstaff",
     "src": "https://roboticsconnected.com/companies/1011-katalyst-space",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1011-katalyst-space",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Flagstaff, United States",
       "lat": 35.198752,
       "lon": -111.651822,
       "src": "https://roboticsconnected.com/companies/1011-katalyst-space"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "microagi",
   "name": "Microagi",
   "summary": "European robotics deployment company that turns factory work into training data for industrial robots.",
   "body": "Founded in 2025, microagi is a robotics research lab specialising in post-training: adapting general-purpose AI models to specific industrial tasks and operating environments.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1016-microagi",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.microagi.ai/"
    },
    "image": {
     "v": "/logos/microagi.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9610e4b2d15ac0e0c745.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/1016-microagi",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/1016-microagi",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/1016-microagi"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotec-solutions",
   "name": "Robotec Solutions",
   "summary": "Develops service robotics and acts as official distributor for Pudu, Temi and Unitree robots in Brazil.",
   "body": "The future is AI. The future is robots. The future is now! We design our technologies to make life easier and more efficient so you can focus on what you do best. Our robots are intended to work alongside people, not replace them.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1020-robotec-solutions",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robotecsolutions.com/"
    },
    "image": {
     "v": "/logos/robotec-solutions.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/58361621ebbd0b317012.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "São Paulo",
     "src": "https://roboticsconnected.com/companies/1020-robotec-solutions",
     "asof": "2026-11"
    },
    "country": {
     "v": "Brazil",
     "src": "https://roboticsconnected.com/companies/1020-robotec-solutions",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "São Paulo, Brazil",
       "lat": -23.550651,
       "lon": -46.633382,
       "src": "https://roboticsconnected.com/companies/1020-robotec-solutions"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "medisby",
   "name": "MEDISBY",
   "summary": "Seoul-based Korean company building AI-driven rehabilitation robots.",
   "body": "Designed by an active orthopedic specialist, our integrated rehabilitation platform addresses the practical needs of the clinical field. By incorporating 'Physical AI' that masters expert medical techniques, we are pioneering the future of high-quality, autonomous rehabilitation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1023-medisby",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://medisby.com/"
    },
    "image": {
     "v": "/logos/medisby.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e1bb37e49f64865d70af.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://roboticsconnected.com/companies/1023-medisby",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://roboticsconnected.com/companies/1023-medisby",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://roboticsconnected.com/companies/1023-medisby"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "niantic-spatial",
   "name": "Niantic Spatial",
   "summary": "Builds real-world foundation models for physical AI, giving robots, agents and autonomous systems a world model grounded in geometry and physics rather than imagination.",
   "body": "First, our founders brought digital mapping to the world. Next, we invented global-scale AR. Now we're building the real-world foundation model for people, AI and robots.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/1024-niantic-spatial",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://nianticspatial.com/"
    },
    "image": {
     "v": "/logos/niantic-spatial.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2b41262db6a9987769f3.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/1024-niantic-spatial",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1024-niantic-spatial",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/1024-niantic-spatial"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flyby-robotics",
   "name": "Flyby Robotics",
   "summary": "Builds the F-11 Series, medium-lift drones with onboard NVIDIA Jetson Orin NX compute, designed to be programmed by developers for edge AI applications.",
   "body": "The platform is made in the USA and offers NDAA-compliant variants. Its drones serve ISR, photogrammetry with centimetre-level RTK mapping, data collection and public safety work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1028-flyby-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.flybyrobotics.com/"
    },
    "image": {
     "v": "/logos/flyby-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d23b883f9b778baa9468.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://roboticsconnected.com/companies/1028-flyby-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1028-flyby-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://roboticsconnected.com/companies/1028-flyby-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sakar-robotics",
   "name": "Sakar Robotics",
   "summary": "Pune-based robotics engineering company founded in 2023.",
   "body": "We founded Sakar Robotics to collapse fragmented point solutions into a single extensible mobile manipulation platform. Traditional automation required bespoke integration per workflow—slow to deploy, rigid to evolve.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1029-sakar-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sakarrobotics.com/"
    },
    "image": {
     "v": "/logos/sakar-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/26f95ca2c11944d13e77.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pune",
     "src": "https://roboticsconnected.com/companies/1029-sakar-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/1029-sakar-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pune, India",
       "lat": 18.521374,
       "lon": 73.854507,
       "src": "https://roboticsconnected.com/companies/1029-sakar-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "elroy-air",
   "name": "Elroy Air",
   "summary": "US developer of autonomous heavy-cargo drones for defence, rapid response and commercial logistics.",
   "body": "Elroy Air is a U.S.-based technology company redefining how critical cargo moves. Chaparral, our autonomous heavy-cargo drone, was designed for the missions that can't wait — defense resupply, commercial logistics, and rapid response.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1033-elroy-air",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://elroyair.com/"
    },
    "image": {
     "v": "/logos/elroy-air.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/78c113171a18810c1c3e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Byron",
     "src": "https://www.linkedin.com/company/elroy-air",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/elroy-air",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "440 Eagle Ct, Byron, California 94514, United States",
       "lat": 37.867148,
       "lon": -121.638006,
       "src": "https://www.linkedin.com/company/elroy-air"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "enabled-robotics",
   "name": "Enabled Robotics",
   "summary": "Danish company based in Odense, building Mobile Cobots: autonomous mobile robots combined with collaborative robotic arms.",
   "body": "Since 2016 Enabled Robotics has been on a mission to address labor shortage and reduce the cost of automation for companies by letting robots take care of strenuous, meticulous and repetitive workload and free humans for more complex tasks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1036-enabled-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.enabled-robotics.com/"
    },
    "image": {
     "v": "/logos/enabled-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9ac2d4b97228f718aed2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Odense",
     "src": "https://dk.linkedin.com/company/enabled-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/enabled-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Agerhatten 27A, Odense, South Denmark 5220, Denmark",
       "lat": 41.720889,
       "lon": -80.698352,
       "src": "https://dk.linkedin.com/company/enabled-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "endiatx",
   "name": "Endiatx",
   "summary": "Developing a new generation of swallowable robots designed to operate inside the human body, starting with the stomach.",
   "body": "Endiatx is developing a new generation of robotic technologies designed to operate inside the human body. We’re starting with the stomach.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1039-endiatx",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://endiatx.com/"
    },
    "image": {
     "v": "/logos/endiatx.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/64b85169af2ec0a82165.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hayward",
     "src": "https://www.linkedin.com/company/endiatxinc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/endiatxinc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "25545 Whitesell St, Hayward, California 94545, United States",
       "lat": 37.629018,
       "lon": -122.127158,
       "src": "https://www.linkedin.com/company/endiatxinc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "epirus",
   "name": "Epirus",
   "summary": "Builds solid-state, software-defined, long-pulse high-power microwave (HPM) systems that disable drones, drone swarms and other electronics.",
   "body": "Epirus is a high-growth technology company dedicated to overcoming the asymmetric challenges inherent to the future of national security.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1042-epirus",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.epirusinc.com/"
    },
    "image": {
     "v": "/logos/epirus.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/61bc31466be846e4c540.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Torrance",
     "src": "https://roboticsconnected.com/companies/1042-epirus",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1042-epirus",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Torrance, United States",
       "lat": 33.837139,
       "lon": -118.341361,
       "src": "https://roboticsconnected.com/companies/1042-epirus"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "esight",
   "name": "esight",
   "summary": "Makes an assistive wearable device for people with central vision loss and legal blindness.",
   "body": "eSight is a pioneer in the low-vision assistive technology industry and creates low-vision smart glasses designed with a simple but profound promise: empower individuals with impaired vision to See New Possibilities.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1047-esight",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.esighteyewear.com/"
    },
    "image": {
     "v": "/logos/esight.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/bde167a84a2b01ec7400.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toronto",
     "src": "https://roboticsconnected.com/companies/1047-esight",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/1047-esight",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Toronto, Canada",
       "lat": 43.653482,
       "lon": -79.383935,
       "src": "https://roboticsconnected.com/companies/1047-esight"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "etavoni",
   "name": "Etavoni",
   "summary": "UK automation specialist based in Radstock, Somerset, founded in 2004.",
   "body": "Since our start in 2004, Etavoni has emerged as a frontrunner in providing tailored and bespoke industrial automation integration solutions. Harnessing our in-house skills, we craft top-quality, UK-made conveyors, palletisers, depalletisers, and robotic systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1052-etavoni",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://etavoni.com/"
    },
    "image": {
     "v": "/logos/etavoni.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/1052/1791741614209.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Radstock",
     "src": "https://roboticsconnected.com/companies/1052-etavoni",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/1052-etavoni",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Radstock, United Kingdom",
       "lat": 51.291949,
       "lon": -2.447623,
       "src": "https://roboticsconnected.com/companies/1052-etavoni"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "euler-nav",
   "name": "EULER-NAV",
   "summary": "Navigation sensor brand of AMS Advanced Air Mobility Sensors UG, based in Munich.",
   "body": "Offering safe sensing and navigation for delivery drones and air taxis. Product portfolio includes a miniature Baro-Inertial AHRS and a tiny GNSS-aided inertial navigation system. We aim to provide our customers with the highest level of convenience.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1053-euler-nav",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://euler-nav.com/"
    },
    "image": {
     "v": "/logos/euler-nav.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/7ca939c6ca39a9c15a8a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/1053-euler-nav",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/1053-euler-nav",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/1053-euler-nav"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eureka-robotics",
   "name": "Eureka Robotics",
   "summary": "Singapore-based robotics and machine vision company that spun out of Nanyang Technological University in 2018.",
   "body": "Eureka Robotics' AI Vision System is an integrated solution of 3D camera, controller and software for bin picking and vision-guided robotics. A super-model trained on millions of parts, together with software accessible to entry-level users, reduces deployment time by months compared to conventional vision projects.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1054-eureka-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://eurekarobotics.com/"
    },
    "image": {
     "v": "/logos/eureka-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a3cac647af0f659121e7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://roboticsconnected.com/companies/1054-eureka-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://roboticsconnected.com/companies/1054-eureka-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Singapore, Singapore",
       "lat": 1.289918,
       "lon": 103.851907,
       "src": "https://roboticsconnected.com/companies/1054-eureka-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "exodigo",
   "name": "Exodigo",
   "summary": "Uses drone-borne and ground-based multi-sensor fusion, including electromagnetic, radar and LiDAR signals, combined with AI to build 3D maps of what lies underground.",
   "body": "Exodigo is the leading underground mapping solution for non-intrusive discovery. Our platforms combine multi-sensor fusion, 3D imaging, and AI technologies to create complete, accurate underground maps that enable confident decision-making for customers across the built world.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1061-exodigo",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.exodigo.com/"
    },
    "image": {
     "v": "/logos/exodigo.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/af6908130a8bdb6e14f3.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tel Aviv",
     "src": "https://roboticsconnected.com/companies/1061-exodigo",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://roboticsconnected.com/companies/1061-exodigo",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tel Aviv, Israel",
       "lat": 32.0853,
       "lon": 34.781806,
       "src": "https://roboticsconnected.com/companies/1061-exodigo"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "exrobotics",
   "name": "ExRobotics",
   "summary": "Builds explosion-proof autonomous inspection robots for hazardous industrial sites.",
   "body": "ExRobotics is an industry leader in autonomous inspection robotics for hazardous industrial environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1063-exrobotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.exrobotics.com/"
    },
    "image": {
     "v": "/logos/exrobotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d647a95b6cad70c6a8ed.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Delft",
     "src": "https://nl.linkedin.com/company/exrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/exrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Delftechpark 26, Delft, Zuid-Holland  2628 XH, Netherlands",
       "lat": 51.996925,
       "lon": 4.385073,
       "src": "https://nl.linkedin.com/company/exrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "farmdroid",
   "name": "FarmDroid",
   "summary": "Danish maker of autonomous, solar-powered field robots that seed and weed row crops.",
   "body": "FarmDroid is the world’s first fully automatic robot that can take care of both sowing and weeding. With FarmDroid we help farmers and plant breeders reduce their costs of manual labor, and since the robot runs wholly on solar power, we even do it in a CO2-neutral and ecological way.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1067-farmdroid",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://farmdroid.com/"
    },
    "image": {
     "v": "/logos/farmdroid.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d5de21318d07a0b2df47.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Vejen",
     "src": "https://dk.linkedin.com/company/farmdroid",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/farmdroid",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Industrisvinget 5, Vejen, Syddanmark 6600, Denmark",
       "lat": 55.472247,
       "lon": 9.1654,
       "src": "https://dk.linkedin.com/company/farmdroid"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "filics",
   "name": "Filics",
   "summary": "Munich-based developer of autonomous transport systems for intralogistics.",
   "body": "Filics defines a new generation of autonomous mobile robots by reducing current solutions to a minimum. Our platform provides a simple, flexible and fast solution to automate all ground-based intra-logistics processes.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1074-filics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.filics.eu/"
    },
    "image": {
     "v": "/logos/filics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e26640dee878d5f72185.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/filics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/filics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Geretsrieder Straße 10, Munich, Bavaria 81379, Germany",
       "lat": 48.100425,
       "lon": 11.533883,
       "src": "https://de.linkedin.com/company/filics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "firestorm",
   "name": "Firestorm",
   "summary": "Builds xCell, a containerised expeditionary microfactory that 3D-prints and assembles modular unmanned aerial systems near the point of need.",
   "body": "We are building the future of modular, open-source architectures supporting the Department of Defense requirements to create Affordable Mass. Firestorm is redefining military expectations for on-site modularity to support the widest array of mission areas.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1076-firestorm",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://launchfirestorm.com/"
    },
    "image": {
     "v": "/logos/firestorm.png",
     "fit": "contain",
     "src": "https://launchfirestorm.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Diego",
     "src": "https://roboticsconnected.com/companies/1076-firestorm",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1076-firestorm",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Diego, United States",
       "lat": 32.715706,
       "lon": -117.163828,
       "src": "https://roboticsconnected.com/companies/1076-firestorm"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "delair",
   "name": "Delair",
   "summary": "Toulouse-Labège, France based maker of fixed-wing and VTOL drones, founded in 2011 and formerly known as Delair-Tech.",
   "body": "Delair is a leading provider of drone-based high performance solutions that enable enterprises to monitor and collect, their physical assets from the air before they digitize them and turn the collected data into valuable business insights.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1081-delair",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://delair.aero/"
    },
    "image": {
     "v": "/logos/delair.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/78e08edefbb9482ad86e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toulouse-Labège",
     "src": "https://fr.linkedin.com/company/delair-tech",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/delair-tech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "676, Rue Max Planck, Toulouse-Labège, Midi-Pyrénées 31670, France",
       "lat": 43.545697,
       "lon": 1.512482,
       "src": "https://fr.linkedin.com/company/delair-tech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ecential-robotics",
   "name": "eCential Robotics",
   "summary": "Sells an open, unified robotic surgery platform for bone surgery.",
   "body": "eCential Robotics is a Grenoble-based company specialized in surgical robotics. It develops and markets a unique system unifying 2D/3D robotic imaging, real-time navigation and surgical robotics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1083-ecential-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ecential-robotics.com/"
    },
    "image": {
     "v": "/logos/ecential-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b060f08d5fc0635da349.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gières (Grenoble)",
     "src": "https://fr.linkedin.com/company/ecential-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/ecential-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2, Avenue de Vignate, Gières (Grenoble), Auvergne-Rhône-Alpes, France 38610, France",
       "lat": 45.187391,
       "lon": 5.781314,
       "src": "https://fr.linkedin.com/company/ecential-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "manna-drone-delivery",
   "name": "Manna Drone Delivery",
   "summary": "Irish-founded autonomous drone delivery company that flies food, groceries, medicine and everyday essentials directly to customers' gardens.",
   "body": "Its drones and flight software are designed and built in Dublin, and each delivery is lowered on a tether in about three minutes. Manna runs a mesh network of small bases linked by short hops, with one pilot able to supervise several aircraft through its Manna OS platform.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1090-manna-drone-delivery",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.manna.aero/"
    },
    "image": {
     "v": "/logos/manna-drone-delivery.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/41c3def658ae8b3f2689.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dublin",
     "src": "https://roboticsconnected.com/companies/1090-manna-drone-delivery",
     "asof": "2026-11"
    },
    "country": {
     "v": "Ireland",
     "src": "https://roboticsconnected.com/companies/1090-manna-drone-delivery",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dublin, Ireland",
       "lat": 53.349379,
       "lon": -6.260559,
       "src": "https://roboticsconnected.com/companies/1090-manna-drone-delivery"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "medical-microinstruments",
   "name": "Medical Microinstruments",
   "summary": "Robotic microsurgery company whose Symani Surgical System pairs wristed NanoWrist instruments with teleoperated control for microsurgery and supermicrosurgery.",
   "body": "MMI (Medical Microinstruments, Inc.) is changing the impossible by opening new opportunities for surgeons to restore quality of life for patients with difficult-to-treat conditions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1091-medical-microinstruments",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mmimicro.com/"
    },
    "image": {
     "v": "/logos/medical-microinstruments.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/31fefe221abd27180df4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Jacksonville",
     "src": "https://it.linkedin.com/company/mmimicro",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://it.linkedin.com/company/mmimicro",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5022 Gate Pkwy, Jacksonville, Florida 32256, United States",
       "lat": 30.244214,
       "lon": -81.537341,
       "src": "https://it.linkedin.com/company/mmimicro"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "microsure",
   "name": "Microsure",
   "summary": "Develops MUSA-3, a robot-assisted microsurgery system that scales and tremor-filters a surgeon's joystick movements.",
   "body": "We deliver and continuously improve a high precision microsurgical robot. Supermicrosurgeons work at the forefront of their field. They must be able to maintain maximum focus for the time required and operate down to sub-millimeter levels.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1092-microsure",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://microsure.nl/"
    },
    "image": {
     "v": "/logos/microsure.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5ef039609a9823af80a4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Son en Breugel",
     "src": "https://nl.linkedin.com/company/microsure",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/microsure",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Science Park Eindhoven 5080, Son en Breugel, North Brabant 5692 EA, Netherlands",
       "lat": 51.498185,
       "lon": 5.452811,
       "src": "https://nl.linkedin.com/company/microsure"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "orqa",
   "name": "Orqa",
   "summary": "Designs and manufactures FPV and tactical drones, including its MRM1-5 multi-role tactical trainer and payload platforms.",
   "body": "Orqa is Europe's leading drone technology company, designing and manufacturing advanced FPV and unmanned aerial systems from our headquarters in Croatia. Our fully vertically integrated operations cover everything from design to production.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1096-orqa",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://orqafpv.com/"
    },
    "image": {
     "v": "/logos/orqa.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/72d5354cb88b02c906a2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Osijek",
     "src": "https://hr.linkedin.com/company/orqafpv",
     "asof": "2026-11"
    },
    "country": {
     "v": "Croatia",
     "src": "https://hr.linkedin.com/company/orqafpv",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "J.J.Strossmayera 341, Osijek, 31 000, Croatia",
       "lat": 45.757958,
       "lon": 18.15163,
       "src": "https://hr.linkedin.com/company/orqafpv"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "smart-robotics",
   "name": "Smart Robotics",
   "summary": "Builds AI-driven pick-and-place robotic cells for warehouse and production intralogistics.",
   "body": "Smart Robotics is Europe’s go-to partner for robotic and cobot palletizing, depalletizing, and item picking — all built in-house and centered around our customers’ needs.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1104-smart-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://smart-robotics.io/"
    },
    "image": {
     "v": "/logos/smart-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/279940153fbc924f6bb1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Best",
     "src": "https://nl.linkedin.com/company/smart-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/smart-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "De Rijn 6C, Best, North Brabant 5684 PJ, Netherlands",
       "lat": 51.485898,
       "lon": 5.388683,
       "src": "https://nl.linkedin.com/company/smart-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "swarm-biotactics",
   "name": "Swarm Biotactics",
   "summary": "Develops bio-robotic systems built on fully controllable living insects, which it calls cyborg swarms.",
   "body": "We build Physical AI at biological scale. Swarm Biotactics pioneers a new era of robotics, integrating biology with advanced engineering to create bio-robots for mission-critical applications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1106-swarm-biotactics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.swarm-biotactics.com/"
    },
    "image": {
     "v": "/logos/swarm-biotactics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/440c28f7dbeb3217591d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kassel",
     "src": "https://roboticsconnected.com/companies/1106-swarm-biotactics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/1106-swarm-biotactics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kassel, Germany",
       "lat": 51.315783,
       "lon": 9.497848,
       "src": "https://roboticsconnected.com/companies/1106-swarm-biotactics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "verity",
   "name": "Verity",
   "summary": "Zurich-based company building autonomous indoor drones that scan warehouse inventory.",
   "body": "Warehouse intelligence for enterprise operations. The Verity Warehouse Intelligence Platform supports retailers, manufacturers, and 3PLs who require continuous, autonomous visibility into inventory and operational health.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1108-verity",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.verity.net/"
    },
    "image": {
     "v": "/logos/verity.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/aba6be65147456f317bf.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/verity-ag",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/verity-ag",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Binzmühlestrasse 81, Zurich, Switzerland",
       "lat": 47.41373,
       "lon": 8.542158,
       "src": "https://ch.linkedin.com/company/verity-ag"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vitestro",
   "name": "Vitestro",
   "summary": "Utrecht-based medical robotics company developing Aletta®, an autonomous robotic phlebotomy device that automates diagnostic blood collection.",
   "body": "Vitestro will be the first to bring autonomous blood drawing technology to European hospitals. Blood drawing, performed billions of times per year worldwide, is key to clinical diagnosis.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1109-vitestro",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vitestro.com/"
    },
    "image": {
     "v": "/logos/vitestro.png",
     "fit": "contain",
     "src": "https://vitestro.b-cdn.net/app/uploads/2026/01/cropped-vitestro-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Utrecht",
     "src": "https://nl.linkedin.com/company/vitestro",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/vitestro",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Europalaan 500, Utrecht, 3526KS, Netherlands",
       "lat": 52.062999,
       "lon": 5.108159,
       "src": "https://nl.linkedin.com/company/vitestro"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "voliro",
   "name": "Voliro",
   "summary": "Zurich-based aerial robotics company spun off from ETH Zurich's Autonomous Systems Lab in 2019.",
   "body": "Voliro builds advanced aerial robots that don't just fly and see - they touch. Born out of ETH Zurich's Autonomous Systems Lab, Voliro has pioneered a new category in industrial inspection: contact-based drone inspection.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1110-voliro",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://voliro.com/"
    },
    "image": {
     "v": "/logos/voliro.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/cc7da1a252f5013d5a2f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/voliro-ch",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/voliro-ch",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Förrlibuckstrasse 150, Zurich, ZH 8005, Switzerland",
       "lat": 47.392279,
       "lon": 8.511507,
       "src": "https://ch.linkedin.com/company/voliro-ch"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wingtra",
   "name": "Wingtra",
   "summary": "Zurich-based maker of VTOL survey drones.",
   "body": "Wingtra provides a professional aerial surveying and mapping system that fuses a purpose-built drone platform, high-precision sensors, GNSS positioning, and integrated software into a single, connected workflow. The system increases data capture efficiency while reducing manual setup and fragmented tools.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1112-wingtra",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://wingtra.com/"
    },
    "image": {
     "v": "/logos/wingtra.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=wingtra.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://ch.linkedin.com/company/wingtra",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/wingtra",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Giesshübelstrasse 40, Zurich, 8045, Switzerland",
       "lat": 47.358039,
       "lon": 8.520565,
       "src": "https://ch.linkedin.com/company/wingtra"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xocean",
   "name": "XOCEAN",
   "summary": "Irish marine robotics company that collects ocean data using uncrewed surface vessels (USVs).",
   "body": "Using Uncrewed Surface Vessels (USVs), XOCEAN provides turnkey ocean data. From mapping the seabed to environmental monitoring, XOCEAN offers a safe, economic and carbon neutral solution to ocean data delivery.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1113-xocean",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://xocean.com/"
    },
    "image": {
     "v": "/logos/xocean.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/03b3140deee59c3a5abf.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rathcor",
     "src": "https://ie.linkedin.com/company/xocean",
     "asof": "2026-11"
    },
    "country": {
     "v": "Ireland",
     "src": "https://ie.linkedin.com/company/xocean",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "XOCEAN Technical Centre, Rathcor, Louth A91 DVT0, Ireland",
       "lat": 53.98162,
       "lon": -6.187449,
       "src": "https://ie.linkedin.com/company/xocean"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "remora-robotics",
   "name": "Remora Robotics",
   "summary": "Builds a patented, fully autonomous submarine robot that cleans and inspects fish farming pens.",
   "body": "Remora is building the infrastructure autonomous aquaculture runs on, globally.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1200-remora-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://remorarobotics.no/"
    },
    "image": {
     "v": "/logos/remora-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/18149e1121d12ff4e017.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "STAVANGER",
     "src": "https://no.linkedin.com/company/remora-robotics-as",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://no.linkedin.com/company/remora-robotics-as",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dusavikveien 39, STAVANGER, Norway 4007, Norway",
       "lat": 59.906793,
       "lon": 10.761016,
       "src": "https://no.linkedin.com/company/remora-robotics-as"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "4ag-robotics",
   "name": "4AG Robotics",
   "summary": "Builds fully autonomous, vision-guided robots that pick, trim and pack mushrooms.",
   "body": "4AG Robotics builds harvesting robots that redefine what's possible in mushroom farming. The end-to-end harvesting process from picking and trimming to packing mushrooms, done autonomously with our HX800 robot, with the accuracy and precision of an experienced human picker, 24/7.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1201-4ag-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://4ag.ai/"
    },
    "image": {
     "v": "/logos/4ag-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5721efde029be319a6ac.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Salmon Arm",
     "src": "https://ca.linkedin.com/company/4ag-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/4ag-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5450 Auto Rd SE, Salmon Arm, British Columbia V1E 1X1, Canada",
       "lat": 50.692574,
       "lon": -119.251006,
       "src": "https://ca.linkedin.com/company/4ag-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vindynamics",
   "name": "VinDynamics",
   "summary": "Vietnamese humanoid robotics company founded in 2025 as a Vingroup subsidiary.",
   "body": "At VinDynamics, we design safe, intelligent, and affordable humanoid robots to assist in everyday life - robots for everyone. VinDynamics proudly backed by Vingroup, Vietnam’s largest technology conglomerate.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1218-vindynamics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vindynamics.net/"
    },
    "image": {
     "v": "/logos/vindynamics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a3d8ba3f94b9941c1833.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hanoi",
     "src": "https://roboticsconnected.com/companies/1218-vindynamics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Vietnam",
     "src": "https://roboticsconnected.com/companies/1218-vindynamics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hanoi, Vietnam",
       "lat": 21.028333,
       "lon": 105.854041,
       "src": "https://roboticsconnected.com/companies/1218-vindynamics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "trener",
   "name": "Trener",
   "summary": "Physical AI company building Acteris, a vendor-agnostic intelligence layer for industrial robots.",
   "body": "Trener Robotics is a Physical AI company building the intelligence layer for industrial robots. Headquartered in San Jose, California and Trondheim, Norway, we transform robots from rigid, scripted machines into intelligent, self-learning systems that operate reliably in real production environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/1225-trener",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://trener.ai/"
    },
    "image": {
     "v": "/logos/trener.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b71744e3a5cea59bcebe.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://roboticsconnected.com/companies/1225-trener",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1225-trener",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Jose, United States",
       "lat": 37.336166,
       "lon": -121.890591,
       "src": "https://roboticsconnected.com/companies/1225-trener"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vanderlande",
   "name": "Vanderlande",
   "summary": "Global provider of logistic process automation, focused on airports and parcel handling.",
   "body": "Vanderlande is the long-term partner of choice for the world’s leading airports and distribution operators – delivering automation solutions, operational software, and lifecycle services that drive performance, reliability, and sustainable growth.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1228-vanderlande",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.vanderlande.com/"
    },
    "image": {
     "v": "/logos/vanderlande.png",
     "fit": "contain",
     "src": "https://www.vanderlande.com/wp-content/themes/vanderlande/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Veghel",
     "src": "https://nl.linkedin.com/company/vanderlande",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/vanderlande",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Vanderlandelaan 2, Veghel, Noord Brabant 5466 RB, Netherlands",
       "lat": 51.602485,
       "lon": 5.520266,
       "src": "https://nl.linkedin.com/company/vanderlande"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "alliance-automation",
   "name": "Alliance Automation",
   "summary": "Builds and integrates turnkey robotic systems for manufacturers, with a focus on 6-axis robotic waterjet cutting, router trimming, dispensing and material handling.",
   "body": "Its work centres on industrial robots from Yaskawa Motoman, Fanuc, ABB and Kuka. The company also stocks replacement waterjet coils and parts, refurbishes ageing robotic waterjet cells, and offers programming, installation and maintenance services.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1230-alliance-automation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.allianceautomationllc.com/"
    },
    "image": {
     "v": "/logos/alliance-automation.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5b45f109e25cf4e1631a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Van Wert",
     "src": "https://roboticsconnected.com/companies/1230-alliance-automation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1230-alliance-automation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Van Wert, United States",
       "lat": 40.801465,
       "lon": -84.600988,
       "src": "https://roboticsconnected.com/companies/1230-alliance-automation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cm-labs-simulations",
   "name": "CM Labs Simulations",
   "summary": "Builds simulation-based training systems for heavy equipment operators.",
   "body": "CM Labs stands apart through its commitment to pioneering the most realistic simulation-based heavy equipment training solutions on the market, tailored to address and solve real-world challenges.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1231-cm-labs-simulations",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cm-labs.com/"
    },
    "image": {
     "v": "/logos/cm-labs-simulations.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/58af26e147a2a8984f6c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montreal",
     "src": "https://ca.linkedin.com/company/cm-labs-simulations",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/cm-labs-simulations",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "645 Wellington, Montreal, QC H3C 1T2, Canada",
       "lat": 45.498556,
       "lon": -73.555412,
       "src": "https://ca.linkedin.com/company/cm-labs-simulations"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intech-robotics-automation",
   "name": "Intech Robotics & Automation",
   "summary": "Robotics and automation arm of Intech Group, a Vietnamese engineering conglomerate.",
   "body": "It integrates industrial robots such as six-axis arms, delta robots and SCARA units from international partners, and builds its own AGV, AMR and load-handling robots with in-house navigation software. The company also offers AI-based vision for defect inspection and automatic sorting, alongside cloud dashboards for real-time monitoring.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1236-intech-robotics-and-automation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://intechrobotics.vn/"
    },
    "image": {
     "v": "/logos/intech-robotics-automation.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a3a0814c16e1a0a333c4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hanoi",
     "src": "https://roboticsconnected.com/companies/1236-intech-robotics-and-automation",
     "asof": "2026-11"
    },
    "country": {
     "v": "Vietnam",
     "src": "https://roboticsconnected.com/companies/1236-intech-robotics-and-automation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hanoi, Vietnam",
       "lat": 21.028333,
       "lon": 105.854041,
       "src": "https://roboticsconnected.com/companies/1236-intech-robotics-and-automation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hullbot",
   "name": "Hullbot",
   "summary": "Provides autonomous hull cleaning for ships.",
   "body": "Hullbot is a global robotic hull cleaning service that reduces fuel consumption, increases performance and minimizes greenhouse emissions. Unlike traditional hull cleaning, Hullbot’s cutting edge autonomous robots clean frequently, prevents biofouling growth proactively.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1238-hullbot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hullbot.com/"
    },
    "image": {
     "v": "/logos/hullbot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d4b34715d3e339001699.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sydney",
     "src": "https://au.linkedin.com/company/hullbot",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://au.linkedin.com/company/hullbot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "System place, Sydney, NSW Rozelle, Australia",
       "lat": -33.858521,
       "lon": 151.170035,
       "src": "https://au.linkedin.com/company/hullbot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "devadros-automata",
   "name": "Devadros Automata",
   "summary": "Robotics and IoT company based in Nagpur, India, building human-assistive systems for people facing mobility challenges.",
   "body": "Devadros™ was created from a simple observation: robotics has mostly been designed for tasks, not for people. Advanced machines repeat instructions, but everyday life is dynamic, unpredictable, and deeply human.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1239-devadros-automata",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.devadros.com/"
    },
    "image": {
     "v": "/logos/devadros-automata.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/86fed1644f1a4581d01b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nagpur",
     "src": "https://in.linkedin.com/company/devadros-automata-private-limited",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/devadros-automata-private-limited",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Besa-Manish Nagar, Nagpur, Maharashtra 440037, India",
       "lat": 21.081541,
       "lon": 79.081971,
       "src": "https://in.linkedin.com/company/devadros-automata-private-limited"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "viabot",
   "name": "Viabot",
   "summary": "Builds the Viabot One, an autonomous outdoor robot that sweeps, self-empties, recharges and reports back without an operator.",
   "body": "Headquartered in Santa Clara, Calif., Viabot™ (“Viabot”) is a leading technology company tackling trash, debris, and soft security at scale for big-box retailers, utility companies, corporate and academic institutions within the United States.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1241-viabot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://viabot.com/"
    },
    "image": {
     "v": "/logos/viabot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/578a51de5d51d41280ae.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.linkedin.com/company/viabot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/viabot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3171 Jay St, Santa Clara, California 95054, United States",
       "lat": 37.379748,
       "lon": -121.961566,
       "src": "https://www.linkedin.com/company/viabot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sentriqa-robotics",
   "name": "Sentriqa Robotics",
   "summary": "Operator layer for physical AI, rather than a hardware maker.",
   "body": "Sentriqa Robotics is a subsidiary of X77 USA LLC. Sentriqa Robotics is the operator layer for physical AI. We don't manufacture hardware — we deploy the right robotic platform onto your site and run it 24/7 under subscription.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1243-sentriqa-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sentriqarobotics.com/"
    },
    "image": {
     "v": "/logos/sentriqa-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/91a8d7a2-dde0-4dc2-bce4-593739fe5eed.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sydney",
     "src": "https://roboticsconnected.com/companies/1243-sentriqa-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://roboticsconnected.com/companies/1243-sentriqa-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sydney, Australia",
       "lat": -33.869844,
       "lon": 151.208285,
       "src": "https://roboticsconnected.com/companies/1243-sentriqa-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bluepath-robotics",
   "name": "Bluepath Robotics",
   "summary": "Istanbul-based manufacturer of autonomous mobile robots (AMRs) and fleet management software, designing and building both hardware and software in-house.",
   "body": "At Bluepath Robotics, we help manufacturers transform the way materials move through factories and warehouses. Built on the engineering heritage of Ford Otosan, we develop both our hardware and software in-house, combining industrial expertise with advanced robotics technologies.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1244-bluepath-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bluepathrobotics.com/"
    },
    "image": {
     "v": "/logos/bluepath-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/11a2883ed86f4b165b48.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "İstanbul",
     "src": "https://tr.linkedin.com/company/bluepathrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Turkey",
     "src": "https://tr.linkedin.com/company/bluepathrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Teknopark Bulvarı, İstanbul, 34906, Turkey",
       "lat": 40.918109,
       "lon": 29.311702,
       "src": "https://tr.linkedin.com/company/bluepathrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lancaster-instruments",
   "name": "Lancaster Instruments",
   "summary": "UK laboratory automation company founded in 2023 by Christos Bartzis.",
   "body": "Rethinking precision at the benchtop. We automate the tedious parts of laboratory work so skilled specialists can focus on what matters. Our first product, the dropWise™, brings precision to drop-wise addition by eliminating variability between staff. Made in the UK for labs that can't afford inconsistency.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1247-lancaster-instruments",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lancasterinstruments.co.uk/"
    },
    "image": {
     "v": "/logos/lancaster-instruments.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/c5533e6a33d76b9b0579.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lancaster",
     "src": "https://uk.linkedin.com/company/lancaster-instruments",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/lancaster-instruments",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Unit D10, Ashworth Way, Lancaster, Lancashire LA1 5WN, United Kingdom",
       "lat": 54.047849,
       "lon": -2.825369,
       "src": "https://uk.linkedin.com/company/lancaster-instruments"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "amano-corporation",
   "name": "Amano Corporation",
   "summary": "Yokohama-based group best known for time recorders, attendance management software and parking systems.",
   "body": "Its portfolio also includes dust and mist collectors for environmental control, and commercial cleaning equipment. The cleaning division offers autonomous robotic floor scrubbers and the AI-enabled RAPiiTT commercial robot vacuum, launched in 2026.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1249-amano-corporation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.amano.co.jp/"
    },
    "image": {
     "v": "/logos/amano-corporation.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d96c0d9a0588364331d8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Yokohama",
     "src": "https://roboticsconnected.com/companies/1249-amano-corporation",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://roboticsconnected.com/companies/1249-amano-corporation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Yokohama, Japan",
       "lat": 35.450338,
       "lon": 139.63438,
       "src": "https://roboticsconnected.com/companies/1249-amano-corporation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "exail-technologies",
   "name": "Exail Technologies",
   "summary": "French high-tech group formed in 2022 from the merger of ECA Group and iXblue.",
   "body": "Exail is a leading high-tech industrial company specializing in cutting-edge robotics, maritime, navigation, aerospace and photonics technologies. With a strong entrepreneurial culture, Exail delivers unrivaled performance, reliability and safety to its civil and defense clients operating in severe environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1253-exail-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.exail.com/"
    },
    "image": {
     "v": "/logos/exail-technologies.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b73ad88d92315329f35c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://roboticsconnected.com/companies/1253-exail-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://roboticsconnected.com/companies/1253-exail-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://roboticsconnected.com/companies/1253-exail-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fbr-limited",
   "name": "FBR Limited",
   "summary": "Designs, prototypes and deploys stabilised long-boom robots that work outdoors and at large scale.",
   "body": "FBR specializes in designing, prototyping, and deploying stabilized long-boom robotics to help industries tackle complex challenges and achieve sustainable growth.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1256-fbr-limited",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fbr.com.au/"
    },
    "image": {
     "v": "/logos/fbr-limited.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/21684feeb2e75fa5a8d9.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "High Wycombe",
     "src": "https://au.linkedin.com/company/fbr-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://au.linkedin.com/company/fbr-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "88 Sultana Rd W, High Wycombe, Western Australia 6057, Australia",
       "lat": -31.961176,
       "lon": 116.00182,
       "src": "https://au.linkedin.com/company/fbr-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "guardforce-ai",
   "name": "Guardforce AI",
   "summary": "Nasdaq-listed technology company headquartered in Singapore, with roots in security and cash logistics.",
   "body": "Its portfolio spans agentic AI, smart retail and cash automation, and robotics, with robotics delivered as a service through its AI and RaaS ecosystem. The company's core revenue still comes from Legacy Secured Logistics, which is far larger than its AI, RaaS and smart solutions business.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1257-guardforce-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://guardforceai.com/"
    },
    "image": {
     "v": "/logos/guardforce-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a006665bc700f6b7d27f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://roboticsconnected.com/companies/1257-guardforce-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://roboticsconnected.com/companies/1257-guardforce-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Singapore, Singapore",
       "lat": 1.289918,
       "lon": 103.851907,
       "src": "https://roboticsconnected.com/companies/1257-guardforce-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kion-group",
   "name": "KION Group",
   "summary": "Frankfurt-based supply chain solutions company, one of the world's leading makers of forklift trucks and warehouse equipment.",
   "body": "Are looking to make your move? Then you’ve come to the right place! We are the KION Group, and the world of supply chain solutions is our home. KION is shaping world trade – globally, regionally, locally. We ensure that supply chains reach their full potential: fast, efficient, smart, sustainable and reliable.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1258-kion-group",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kiongroup.com/"
    },
    "image": {
     "v": "/logos/kion-group.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2742e4e451f8e785965c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Frankfurt/Main",
     "src": "https://de.linkedin.com/company/kiongroup",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/kiongroup",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Thea-Rasche-Strasse 8, Frankfurt/Main, Hessen 60549, Germany",
       "lat": 50.055813,
       "lon": 8.588516,
       "src": "https://de.linkedin.com/company/kiongroup"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kraken-robotics",
   "name": "Kraken Robotics",
   "summary": "Marine technology company building subsea sensors, power systems and robotic platforms.",
   "body": "Kraken Robotics is a global marine technology company transforming subsea intelligence through advanced sensors, software, and integrated systems. Serving defence, offshore energy, and ocean science markets, the company delivers actionable insights in challenging underwater environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1260-kraken-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.krakenrobotics.com/"
    },
    "image": {
     "v": "/logos/kraken-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/c7025bb11440b5e14114.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mount Pearl Park",
     "src": "https://ca.linkedin.com/company/krakenrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/krakenrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "189 Glencoe Dr, Mount Pearl Park, Newfoundland and Labrador A1N 4P7, Canada",
       "lat": 47.573347,
       "lon": -52.733309,
       "src": "https://ca.linkedin.com/company/krakenrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "maytronics",
   "name": "Maytronics",
   "summary": "Makes the Dolphin robotic pool cleaners, along with Niya pool cleaners, pool-safety products and water treatment systems.",
   "body": "Maytronics’ vision is to lead the way to make pool water exceptional, for pool owners’ pure enjoyment. By providing the best-performing and easiest pool cleaning solutions, we help make owning a pool hassle-free.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1262-maytronics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.maytronics.com/"
    },
    "image": {
     "v": "/logos/maytronics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/60bc9118662ab14f1cd4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kibbutz Yizre'el",
     "src": "https://il.linkedin.com/company/maytronics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/maytronics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kibbutz Yizre'el, Kibbutz Yizre'el, 19350, Israel",
       "lat": 32.562363,
       "lon": 35.31778,
       "src": "https://il.linkedin.com/company/maytronics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nachi-fujikoshi",
   "name": "Nachi-Fujikoshi",
   "summary": "Japanese manufacturer that describes itself as a robot-centred general machinery maker, spanning cutting tools, machine tools, robots, bearings, hydraulic equipment and…",
   "body": "Its robot business dates back to 1968, and the company has supplied industrial robots across many fields for over five decades. Its robot line includes handling, palletising, spot and seam welding, heavy-load transfer and glass substrate transfer, plus collaborative robots under the COPARO MZS series.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1264-nachi-fujikoshi",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nachi-fujikoshi.co.jp/"
    },
    "image": {
     "v": "/logos/nachi-fujikoshi.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/1264/1791737163605.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toyama",
     "src": "https://roboticsconnected.com/companies/1264-nachi-fujikoshi",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://roboticsconnected.com/companies/1264-nachi-fujikoshi",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Toyama, Japan",
       "lat": 36.646802,
       "lon": 137.218353,
       "src": "https://roboticsconnected.com/companies/1264-nachi-fujikoshi"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nauticus-robotics",
   "name": "Nauticus Robotics",
   "summary": "Builds autonomous electric underwater vehicles, the Aquanaut® platform, and licenses its Nauticus ToolKITT™ autonomy software, which can be retrofitted onto third-party…",
   "body": "Nauticus Robotics, Inc. (Nasdaq: KITT) is a Houston-area developer of ocean robots, autonomy software and services delivered to the ocean industries.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1265-nauticus-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://nauticusrobotics.com/"
    },
    "image": {
     "v": "/logos/nauticus-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/71d46f777a602b86447a.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Webster",
     "src": "https://www.linkedin.com/company/nauticus-robotics-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/nauticus-robotics-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "17146 Feathercraft Lane, Webster, Texas 77598, United States",
       "lat": 29.548278,
       "lon": -95.121443,
       "src": "https://www.linkedin.com/company/nauticus-robotics-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "procept-biorobotics",
   "name": "PROCEPT BioRobotics",
   "summary": "Develops the HYDROS and AquaBeam robotic systems, which deliver Aquablation therapy for benign prostatic hyperplasia (BPH).",
   "body": "PROCEPT BioRobotics is a surgical robotics company focused on advancing patient care by developing transformative solutions in urology. PROCEPT BioRobotics manufactures the AQUABEAM® and HYDROS™ Robotic Systems. The HYDROS Robotic System is the only AI-Powered, robotic technology that delivers Aquablation therapy.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1267-procept-biorobotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.procept-biorobotics.com/"
    },
    "image": {
     "v": "/logos/procept-biorobotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b07deeecf86399a6d684.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/procept-corporation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/procept-corporation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "150 Baytech Dr, San Jose, California 95134, United States",
       "lat": 37.420669,
       "lon": -121.953439,
       "src": "https://www.linkedin.com/company/procept-corporation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "scott-technology",
   "name": "Scott Technology",
   "summary": "Builds and commissions automated manufacturing and materials handling systems for global food, appliance, mining and logistics customers.",
   "body": "Its brands include Alvey palletising, BladeStop meat processing automation, Rocklabs mining sample preparation and Transbotics automated guided vehicles. Core offerings span appliance production lines, automated lamb and beef boning and grading, palletising, AGVs and Maestro+ warehouse control software.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1269-scott-technology",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://scottautomation.com/"
    },
    "image": {
     "v": "/logos/scott-technology.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/3316dae751d7081ee360.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dunedin",
     "src": "https://roboticsconnected.com/companies/1269-scott-technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "New Zealand",
     "src": "https://roboticsconnected.com/companies/1269-scott-technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dunedin, New Zealand",
       "lat": -45.874098,
       "lon": 170.503576,
       "src": "https://roboticsconnected.com/companies/1269-scott-technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stereotaxis",
   "name": "Stereotaxis",
   "summary": "St. Louis-based medical technology company developing robotic magnetic navigation systems for minimally invasive endovascular procedures.",
   "body": "Pioneering Endovascular Robotics | Global leader in robotic technologies to enhance the treatment of arrhythmias & perform endovascular procedures",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1271-stereotaxis",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.stereotaxis.com/"
    },
    "image": {
     "v": "/logos/stereotaxis.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/41bf9755794816b8d2e7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "St Louis",
     "src": "https://www.linkedin.com/company/stereotaxis",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/stereotaxis",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "710 N Tucker Blvd, St Louis, Missouri 63101, United States",
       "lat": 38.632963,
       "lon": -90.195984,
       "src": "https://www.linkedin.com/company/stereotaxis"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lionsbot-international",
   "name": "LionsBot International",
   "summary": "Designs and engineers autonomous commercial cleaning robots, including the R5 scrubber, the R3 Scrub Pro compact scrubber and the R3 Vac autonomous vacuum.",
   "body": "Proudly designed and made in Singapore, LionsBot is a growing name for autonomous smart floor cleaning robots. The company has won multiple accolades for its range of products including Interclean Innovation Award 2020, IF Design Award, Forbes Asia 100 to Watch, Financial Times’ list of High-growth companies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1298-lionsbot-international",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lionsbot.com/"
    },
    "image": {
     "v": "/logos/lionsbot-international.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ef9d8609ee523d9455ea.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/lionsbot",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/lionsbot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "84 Punggol Way, Singapore, 829911, Singapore",
       "lat": 1.414495,
       "lon": 103.908167,
       "src": "https://sg.linkedin.com/company/lionsbot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "alta-ares",
   "name": "Alta Ares",
   "summary": "Paris-based defence technology company founded in 2024.",
   "body": "Alta Ares develops AI powered hardware & software for air-defense & strike missions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1303-alta-ares",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.altaares.com/"
    },
    "image": {
     "v": "/logos/alta-ares.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/87b860e83c5a5329db70.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://fr.linkedin.com/company/alta-ares",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/alta-ares",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rue de Lévis, Paris, Île-de-France 75017, France",
       "lat": 48.88391,
       "lon": 2.313441,
       "src": "https://fr.linkedin.com/company/alta-ares"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "motor-ai",
   "name": "MOTOR Ai",
   "summary": "Berlin-based autonomous driving company founded in 2017 by Roy Uhlmann and Adam Bahlke.",
   "body": "MOTOR Ai entwickelt Software für autonomes Fahren nach Level 4, basierend auf einem eigenständigen kognitiven KI-Ansatz mithilfe von Active Inference.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1305-motor-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://motor-ai.com/"
    },
    "image": {
     "v": "/logos/motor-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/17e2df0400b942a992fa.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://de.linkedin.com/company/motorai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/motorai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Scheringstraße 1, Berlin, 13355, Germany",
       "lat": 52.541249,
       "lon": 13.382672,
       "src": "https://de.linkedin.com/company/motorai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "omnicell",
   "name": "Omnicell",
   "summary": "Healthcare technology company focused on medication management across hospitals, clinics and specialty pharmacies.",
   "body": "Omnicell is transforming pharmacy and nursing care through outcomes-centric solutions designed to optimize clinical and business outcomes across all settings of care.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1307-omnicell",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.omnicell.com/"
    },
    "image": {
     "v": "/logos/omnicell.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/14489f7714b65c97b13f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Fort Worth",
     "src": "https://www.linkedin.com/company/omnicell",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/omnicell",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4220 North Fwy, Fort Worth, Texas 76137, United States",
       "lat": 32.816828,
       "lon": -97.311611,
       "src": "https://www.linkedin.com/company/omnicell"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "novus-hi-tech",
   "name": "Novus Hi-Tech",
   "summary": "Designs and builds autonomous mobile robots, robotic forklifts and ADAS driver-assistance systems.",
   "body": "Its products include the Novus Carry AMR, the P-Mover autonomous pallet truck, video telematics for fleet safety and the Novus Aware in-cabin ADAS for OEMs. The company sells mainly to factories, warehouses and road logistics operators, along with automotive OEMs.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1310-novus-hi-tech",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://novushitech.com/"
    },
    "image": {
     "v": "/logos/novus-hi-tech.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/deed6dc2450d88613a22.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gurugram",
     "src": "https://roboticsconnected.com/companies/1310-novus-hi-tech",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/1310-novus-hi-tech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gurugram, India",
       "lat": 28.464615,
       "lon": 77.029919,
       "src": "https://roboticsconnected.com/companies/1310-novus-hi-tech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rugged-robotics",
   "name": "Rugged Robotics",
   "summary": "Builds an autonomous robot that prints full-scale layouts directly onto concrete slabs, replacing manual chalk-based field layout on construction sites.",
   "body": "Rugged Robotics is a modern, solution-oriented company based in Houston Texas. We combine experience and expertise from the construction and robotics industries to build practical solutions to real-world problems faced by construction crews every day.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1315-rugged-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rugged-robotics.com/"
    },
    "image": {
     "v": "/logos/rugged-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/15b0222ab8f4b89cbeba.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Houston",
     "src": "https://www.linkedin.com/company/rugged-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/rugged-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "205 Roberts St, Houston, Texas 77003, United States",
       "lat": 29.750778,
       "lon": -95.340478,
       "src": "https://www.linkedin.com/company/rugged-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pomo-robotics",
   "name": "POMO Robotics",
   "summary": "Scottish robotic system integrator and Industry 4.0 solutions provider.",
   "body": "It supplies collaborative and industrial robots from partners such as Universal Robots, Yaskawa, JAKA and Dobot, alongside custom end-of-arm tooling, pedestals and system integration. The company also offers automation solutions, digital twinning, IIoT services and turnkey derisking work, from concept design and prototyping through to final build.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1317-pomo-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pomorobotics.com/"
    },
    "image": {
     "v": "/logos/pomo-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e2d59369c48b679465c5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Glasgow",
     "src": "https://roboticsconnected.com/companies/1317-pomo-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/1317-pomo-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Glasgow, United Kingdom",
       "lat": 55.861155,
       "lon": -4.250169,
       "src": "https://roboticsconnected.com/companies/1317-pomo-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fruitcore-robotics",
   "name": "Fruitcore Robotics",
   "summary": "Konstanz-based maker of industrial robots and automation software, spun out of the Constance University of Applied Sciences.",
   "body": "With the Industrial Robot Platform, fruitcore robotics offers all the building blocks for optimal automation in industry – from project planning to operation: cost-effective. Flexible. Efficient.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1318-fruitcore-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fruitcore-robotics.com/"
    },
    "image": {
     "v": "/logos/fruitcore-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d69c433dfc77867bb094.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Konstanz",
     "src": "https://de.linkedin.com/company/fruitcore-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/fruitcore-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Macairestraße 3, Konstanz, Baden-Württemberg 78467, Germany",
       "lat": 47.678419,
       "lon": 9.14806,
       "src": "https://de.linkedin.com/company/fruitcore-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intomachines",
   "name": "IntoMachines",
   "summary": "Builds tooling and robotics for bolting operations, mainly on wind turbines.",
   "body": "We challenge the status quo by introducing machines with smart software and hardware to simplify and automate bolting operations in wind turbines. We happen to make great bolting machines.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1319-intomachines-b-v",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://intomachines.com/"
    },
    "image": {
     "v": "/logos/intomachines.png",
     "fit": "contain",
     "src": "https://intomachines.com/wp-content/uploads/2024/08/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Vught",
     "src": "https://roboticsconnected.com/companies/1319-intomachines-b-v",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://roboticsconnected.com/companies/1319-intomachines-b-v",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Vught, Netherlands",
       "lat": 51.651181,
       "lon": 5.2368,
       "src": "https://roboticsconnected.com/companies/1319-intomachines-b-v"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "skylark-labs",
   "name": "Skylark Labs",
   "summary": "Builds self-learning AI for physical systems.",
   "body": "Skylark Labs builds the self-learning brain for Physical AI. Its Continual Field-Adaptive Models (CFAMs) run on humanoids, drones, quadrupeds, and autonomous ground systems, learning on-device in real time from sensory input and adapting in the field after deployment.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1323-skylark-labs",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://skylarklabs.ai/"
    },
    "image": {
     "v": "/logos/skylark-labs.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b14828a6062327e8bc56.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://www.linkedin.com/company/skylarklabs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/skylarklabs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3505 Edison Way, Menlo Park, California 94025, United States",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://www.linkedin.com/company/skylarklabs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "platform-aerospace",
   "name": "Platform Aerospace",
   "summary": "Service-Disabled Veteran-Owned Small Business based in Hollywood, Maryland, that designs and builds ultra-long endurance unmanned aircraft.",
   "body": "Platform Aerospace specializes in manufacturing, aviation modification and prototyping, and cutting-edge aerial ISR products, namely VANILLA UNMANNED UAS. Platform is AS9100D and ISO 9001:2015 certified and is a registered service-disabled veteran-owned small business (SDVOSB)",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1324-platform-aerospace",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.platformaerospace.com/"
    },
    "image": {
     "v": "/logos/platform-aerospace.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/shapes/ea744a_35cc741fe8d3434e876b17cca68c95ca.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hollywood",
     "src": "https://www.linkedin.com/company/platformaero",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/platformaero",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "43960 Airport View Drive, Hollywood, MD 20636, United States",
       "lat": 38.319182,
       "lon": -76.553082,
       "src": "https://www.linkedin.com/company/platformaero"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboto",
   "name": "Roboto",
   "summary": "Analytics engine for physical AI, helping robotics teams ingest, search and analyse the large volumes of log and sensor data their machines produce.",
   "body": "Roboto is the analytics engine for robotics and physical AI. The world is entering a golden age of robots and autonomous systems, but the data they generate is growing exponentially and legacy tools weren’t built to handle it.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1327-roboto",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.roboto.ai/"
    },
    "image": {
     "v": "/logos/roboto.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d8c74cc829e7a2af8831.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://roboticsconnected.com/companies/1327-roboto",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1327-roboto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seattle, United States",
       "lat": 47.603832,
       "lon": -122.330062,
       "src": "https://roboticsconnected.com/companies/1327-roboto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gabletek",
   "name": "Gabletek",
   "summary": "Designs, programs and integrates industrial robot systems for manufacturers.",
   "body": "GABLETEK understands productivity and efficiency play key roles in an efficient production environment. It is a prerequisite for company’s today to think outside the box and be ahead of the pack when it comes to increasing productivity and efficiency while keeping costs down.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1328-gabletek",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gabletek.com/"
    },
    "image": {
     "v": "/logos/gabletek.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ff277c8a40c60a82d23e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Troy",
     "src": "https://www.linkedin.com/company/gabletek-robotics-and-controls-solutions",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/gabletek-robotics-and-controls-solutions",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "667 Elmwood Dr, Troy, Michigan 48017, United States",
       "lat": 42.605589,
       "lon": -83.14993,
       "src": "https://www.linkedin.com/company/gabletek-robotics-and-controls-solutions"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "clobotics-retail",
   "name": "Clobotics Retail",
   "summary": "Builds physical AI for two core markets: wind energy and retail.",
   "body": "Clobotics is a global leader in intelligent computer vision solutions for the retail and wind.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1331-clobotics-retail",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://clobotics.com/"
    },
    "image": {
     "v": "/logos/clobotics-retail.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0be35d488da94dbd690d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/clobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/clobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "23 New Industrial Road, #04-09, Singapore, 536209, Singapore",
       "lat": 1.289918,
       "lon": 103.851907,
       "src": "https://sg.linkedin.com/company/clobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "movu-robotics",
   "name": "Movu Robotics",
   "summary": "Belgian warehouse automation company based in Lokeren, East Flanders, and part of the stow Group.",
   "body": "Movu Robotics, a member of stow Group, is a new warehouse automation brand that stands out by bringing easier logistics automation solutions to the world’s warehouses. No warehouse left behind.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1333-movu-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.movu-robotics.com/"
    },
    "image": {
     "v": "/logos/movu-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/d2a809d7-a968-41fb-95d4-6e03eeb4698b.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lokeren",
     "src": "https://be.linkedin.com/company/movu-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Belgium",
     "src": "https://be.linkedin.com/company/movu-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brandstraat 30, Lokeren, Flemish Region 9160, Belgium",
       "lat": 51.148382,
       "lon": 3.944247,
       "src": "https://be.linkedin.com/company/movu-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboauto",
   "name": "Roboauto",
   "summary": "Builds autonomy, teleoperation, anti-collision, sensing and perception software for vehicles and heavy machinery.",
   "body": "Roboauto is a software partner for hardware across domains—microchips to trains—specializing in AI, Python and C++ development for autonomous systems, perception, real-time sensor processing and custom solutions to help partners innovate and adopt future technologies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1334-roboauto",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roboauto.tech/"
    },
    "image": {
     "v": "/logos/roboauto.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1637491bb36591c47bf0.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brno",
     "src": "https://cz.linkedin.com/company/roboauto",
     "asof": "2026-11"
    },
    "country": {
     "v": "Czech Republic",
     "src": "https://cz.linkedin.com/company/roboauto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Šumavská 15, Brno, South Moravian Region 602 00, Czech Republic",
       "lat": 49.212074,
       "lon": 16.59856,
       "src": "https://cz.linkedin.com/company/roboauto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "advanced-manipulator",
   "name": "Advanced Manipulator",
   "summary": "Designs and builds industrial manipulator arms, lift assists and torque reaction arms for material handling on the factory floor.",
   "body": "Advanced Manipulator Specialists Inc. is a company based out of 123 Memorial Dr Nw, Hoffman, MN, United States.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1341-advanced-manipulator",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://advancedmanipulator.com/"
    },
    "image": {
     "v": "/logos/advanced-manipulator.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6818fa7208704217ddf8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hoffman",
     "src": "https://www.linkedin.com/company/advanced-manipulator-specialists-inc-",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/advanced-manipulator-specialists-inc-",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "123 Memorial Dr Nw, Hoffman, MN 56339, United States",
       "lat": 45.829404,
       "lon": -95.791994,
       "src": "https://www.linkedin.com/company/advanced-manipulator-specialists-inc-"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hestia-technology-limited",
   "name": "Hestia Technology Limited",
   "summary": "Hong Kong company building automated cooking robots and an end-to-end kitchen ecosystem.",
   "body": "Hestia Technology Limited was established in 2018 in Hong Kong, also known as the \"Gourmet Paradise.\" We specialize in automated cooking robots, with a particular focus on Chinese cuisine. Our goal is to develop groundbreaking cooking technology products.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1342-hestia-technology-limited",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hestia.kitchen/"
    },
    "image": {
     "v": "/logos/hestia-technology-limited.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/31aaebd758d2fb77566d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://roboticsconnected.com/companies/1342-hestia-technology-limited",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://roboticsconnected.com/companies/1342-hestia-technology-limited",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hong Kong, Hong Kong",
       "lat": 22.281833,
       "lon": 114.158283,
       "src": "https://roboticsconnected.com/companies/1342-hestia-technology-limited"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rai-institute",
   "name": "RAI Institute",
   "summary": "The RAI Institute (Robotics and AI Institute) is a research organisation working to solve fundamental problems in robotics and artificial intelligence.",
   "body": "We aim to solve the most important and fundamental problems in robotics and AI. (Formerly The AI Institute)",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/1357-rai-institute",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rai-inst.com/"
    },
    "image": {
     "v": "/logos/rai-institute.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9895719443b00d2d39e8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.linkedin.com/company/rai-inst",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/rai-inst",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "145 Broadway, Cambridge, MA 02142, United States",
       "lat": 42.364883,
       "lon": -71.088934,
       "src": "https://www.linkedin.com/company/rai-inst"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "forgis",
   "name": "Forgis",
   "summary": "Zurich-based industrial software company founded in 2025 by Federico Martelli, Camilla Mazzoleni and Riccardo Maggioni.",
   "body": "Forging the next industrial revolution, Forgis makes Western manufacturing competitive by bringing industrial intelligence to the factories. We are based in Zurich, CH. (formerly Xelerit) Building the brain that makes manufacturing plant intelligent",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1359-forgis",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.forgis.com/"
    },
    "image": {
     "v": "/logos/forgis.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/184d5a43aa91002d7b7d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Schlieren",
     "src": "https://ch.linkedin.com/company/forgisai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/forgisai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zürcherstrasse 39, Schlieren, Zurich 8952, Switzerland",
       "lat": 47.399374,
       "lon": 8.454273,
       "src": "https://ch.linkedin.com/company/forgisai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "slamcore",
   "name": "Slamcore",
   "summary": "Makes vision-based location tracking for factories and warehouses.",
   "body": "Slamcore delivers spatial intelligence that transforms material handling equipment into connected, safety-aware assets.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1364-slamcore",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.slamcore.com/"
    },
    "image": {
     "v": "/logos/slamcore.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/651e4e7d8b0e65805ad5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/slamcore-limited",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/slamcore-limited",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "215-221 Borough High Street, London, England, United Kingdom",
       "lat": 51.50524,
       "lon": -0.089496,
       "src": "https://uk.linkedin.com/company/slamcore-limited"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "scout-ai",
   "name": "Scout AI",
   "summary": "Defence technology company building Fury, a robotic foundation model that acts as an embodied AI brain for unmanned systems.",
   "body": "Scout AI is a frontier AI lab for U.S. defense. It was founded in 2024 by Colby Adcock and Collin Otis with a mission to deploy mission-ready AI agents across unmanned systems for the Department of War and its allies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/1365-scout-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://scoutco.ai/"
    },
    "image": {
     "v": "/logos/scout-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/46a092561a9a3f8357a2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sunnyvale",
     "src": "https://roboticsconnected.com/companies/1365-scout-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1365-scout-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sunnyvale, United States",
       "lat": 37.36883,
       "lon": -122.036349,
       "src": "https://roboticsconnected.com/companies/1365-scout-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "openmind",
   "name": "OpenMind",
   "summary": "San Francisco-based company building open, decentralised intelligence infrastructure for robots.",
   "body": "OpenMind is building the operating system for robots that work with people.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1368-openmind",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://openmind.com/"
    },
    "image": {
     "v": "/logos/openmind.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/39de2b33470d37bca093.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/openmindagi",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/openmindagi",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "17 Bluxome St, San Francisco, California 94107, United States",
       "lat": 37.777138,
       "lon": -122.396036,
       "src": "https://www.linkedin.com/company/openmindagi"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kaikaku",
   "name": "KAIKAKU",
   "summary": "Builds Fusion, a back-of-house automation platform combining robotic food-assembly hardware with AI software.",
   "body": "Apollo brought light to humanity; we bring intelligence to dining. Creating the best restaurant experiences through vertically integrated hardware, software and AI.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1369-kaikaku",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kaikaku.ai/"
    },
    "image": {
     "v": "/logos/kaikaku.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/7313710f92d9750dc107.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://uk.linkedin.com/company/kaikaku-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/kaikaku-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brunswick Center, London, England WC1N 1AE, United Kingdom",
       "lat": 51.524203,
       "lon": -0.133001,
       "src": "https://uk.linkedin.com/company/kaikaku-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "adexis",
   "name": "Adexis",
   "summary": "London-based frontier robotics lab building what it calls a somatosensory cortex for physical AI.",
   "body": "Adexis is a London-based frontier research lab solving dexterous manipulation",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/1371-adexis",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://adexis.ai/"
    },
    "image": {
     "v": "/logos/adexis.png",
     "fit": "contain",
     "src": "https://adexis.ai/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/1371-adexis",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/1371-adexis",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/1371-adexis"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "paddington-robotics",
   "name": "Paddington Robotics",
   "summary": "London-based company building autonomous robots that operate in unstructured, human environments.",
   "body": "Bridging the gap between the digital world and the physical world, between product and research - solving AI + Robotics, whilst solving real world problems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1375-paddington-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://paddington-robotics.com/"
    },
    "image": {
     "v": "/logos/paddington-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/36bad58264921cfc096d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/1375-paddington-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/1375-paddington-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/1375-paddington-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "loki-robotics",
   "name": "Loki Robotics",
   "summary": "Builds Loki, an autonomous commercial cleaning robot for restrooms, kitchens and other high-contact facility spaces.",
   "body": "We build robots saving people's time.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1381-loki-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lokirobotics.co/"
    },
    "image": {
     "v": "/logos/loki-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/1xajTlatpaem1LNsvkBz6IgWiJU.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zürich",
     "src": "https://roboticsconnected.com/companies/1381-loki-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://roboticsconnected.com/companies/1381-loki-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zürich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://roboticsconnected.com/companies/1381-loki-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "reliable-robotics",
   "name": "Reliable Robotics",
   "summary": "Builds the Reliable Autonomy System, a flight automation platform that lets aircraft operate without an onboard pilot.",
   "body": "The Reliable autonomous flight system will enable a future where air transportation is safer, more convenient and fundamentally transformative to the way goods and people move around the planet.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1384-reliable-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://reliable.co/"
    },
    "image": {
     "v": "/logos/reliable-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/3446ac4bcf0eea3325e2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://roboticsconnected.com/companies/1384-reliable-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1384-reliable-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://roboticsconnected.com/companies/1384-reliable-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "omokai",
   "name": "Omokai",
   "summary": "Builds a speech-driven control layer for autonomous drones and robots.",
   "body": "Omokai is building a future of interoperable autonomous missions. Orchestrate autonomous missions across any vendor's drones, robots, USVs, cameras, sensors, etc. using the intelligence layer provided by Omokai. You can either use our mission control or expand your capabilities by embedding omokai in your own platform.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1403-omokai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://omokai.com/"
    },
    "image": {
     "v": "/logos/omokai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/backdrops/ingested/a76287f09eee91a1cf0e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://de.linkedin.com/company/omokai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/omokai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Alexanderplatz, Berlin, BE 10178, Germany",
       "lat": 52.521981,
       "lon": 13.413636,
       "src": "https://de.linkedin.com/company/omokai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "formulate-robotics",
   "name": "Formulate Robotics",
   "summary": "Building an applied AI platform for autonomous industrial batching.",
   "body": "The software combines prompt-to-production automation with a recursive learning system that improves with each formulation and batch. The company's focus is programmable, automated manufacture of formulated products, with its microfactory concept aimed at chemicals and cosmetics.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1410-formulate-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.formulaterobotics.com/"
    },
    "image": {
     "v": "/logos/formulate-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/f2843cfe-962d-406f-a50a-ecbebec8aac7.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://roboticsconnected.com/companies/1410-formulate-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1410-formulate-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://roboticsconnected.com/companies/1410-formulate-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hyfix",
   "name": "HYFIX",
   "summary": "U.S.-based semiconductor company building American-made autonomous systems chips for drones and robotics.",
   "body": "Founded in 2022, HYFIX is building American-made autonomous systems chips for high-precision drones and robotics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1422-hyfix",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hyfix.ai/"
    },
    "image": {
     "v": "/logos/hyfix.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/c9fcf033430718a2a3e2.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://roboticsconnected.com/companies/1422-hyfix",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1422-hyfix",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Santa Clara, United States",
       "lat": 37.233325,
       "lon": -121.684635,
       "src": "https://roboticsconnected.com/companies/1422-hyfix"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lv-teh",
   "name": "LV-TEH",
   "summary": "Designs and builds military unmanned ground vehicles and robotic platforms.",
   "body": "The character of war is changing. It is becoming unmanned, attritable, and won by the side that fields affordable mass and keeps iterating. LV-TEH builds the ground side of that shift.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1425-lv-teh",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lvteh.lv/"
    },
    "image": {
     "v": "/logos/lv-teh.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/dd1ecb0a46e9e49807d5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Riga",
     "src": "https://roboticsconnected.com/companies/1425-lv-teh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Latvia",
     "src": "https://roboticsconnected.com/companies/1425-lv-teh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Riga, Latvia",
       "lat": 56.949398,
       "lon": 24.105185,
       "src": "https://roboticsconnected.com/companies/1425-lv-teh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "anton-robotics",
   "name": "Anton Robotics",
   "summary": "Munich-based startup bringing autonomous robotics into industry.",
   "body": "We're an early-stage robotics startup building the next generation of industrial automation. Recent advances in robot learning and foundation models are transforming what robots will be capable of over the coming decade.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1427-anton-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://anton-robotics.com/"
    },
    "image": {
     "v": "/logos/anton-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/cb5efcfe396650d4a1da.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "München",
     "src": "https://roboticsconnected.com/companies/1427-anton-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/1427-anton-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "München, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/1427-anton-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aerobotics7",
   "name": "Aerobotics7",
   "summary": "Builds AI-driven drone and sensor platforms that detect, map and help neutralise buried landmines and unexploded ordnance.",
   "body": "Its flagship system, EAGLE A7, is a drone-based solution designed to find hidden threats without putting field operators at risk. The company works with governments, international organisations and humanitarian agencies in contaminated regions, where active landmines remain buried across more than 60 countries.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1428-aerobotics7",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aerobotics7.com/"
    },
    "image": {
     "v": "/logos/aerobotics7.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1202b969c58748fdd9db.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/1428-aerobotics7",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1428-aerobotics7",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/1428-aerobotics7"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stark-defence",
   "name": "Stark Defence",
   "summary": "Berlin-based European defence technology company building AI-enabled, software-defined unmanned weapons systems.",
   "body": "STARK is a technology-driven defence company delivering the autonomous weapons systems that Europe and NATO need now. We combine cutting-edge software, technology, and engineering to build mission-ready unmanned solutions for land, sea and air that are designed for the realities of modern warfare.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1430-stark-defence",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://stark-defence.com/"
    },
    "image": {
     "v": "/logos/stark-defence.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4578b9cb279116e60b2c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://roboticsconnected.com/companies/1430-stark-defence",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/1430-stark-defence",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Berlin, Germany",
       "lat": 52.517389,
       "lon": 13.395131,
       "src": "https://roboticsconnected.com/companies/1430-stark-defence"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hydromea",
   "name": "Hydromea",
   "summary": "Swiss underwater robotics and communication company, spun out of EPFL, building autonomous underwater vehicles and wireless subsea data links.",
   "body": "We focus on how submerged assets data acquisition and exchange, processing and analysis can be effortlessly scaled to revolutionise the industry's monitoring capabilities of critical assets.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1511-hydromea",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hydromea.com/"
    },
    "image": {
     "v": "/logos/hydromea.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d75e6768fdb4e35d589c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Renens",
     "src": "https://ch.linkedin.com/company/hydromea",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/hydromea",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Avenue de Longemalle 9, Renens, Vaud 1020, Switzerland",
       "lat": 46.527515,
       "lon": 6.59263,
       "src": "https://ch.linkedin.com/company/hydromea"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "posha",
   "name": "Posha",
   "summary": "San Francisco-based AI and robotics company building a countertop robot chef for home kitchens.",
   "body": "The appliance uses a built-in camera and onboard intelligence to detect cooking stages, add ingredients at the right moment, manage heat and stir automatically. Users pick from more than 1,000 recipes, load fresh ingredients and let the machine cook.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1517-posha",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.posha.com/"
    },
    "image": {
     "v": "/logos/posha.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9e01f7adc13cf415b2c4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/1517-posha",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1517-posha",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/1517-posha"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vimaan",
   "name": "Vimaan",
   "summary": "Builds AI-powered computer vision systems that automate inventory capture across warehouses and distribution centres.",
   "body": "Vimaan is redefining warehouse inventory operations with AI-powered computer vision. For years, inventory visibility in warehouses and distribution centers has depended on manual counting, scanning, and verification, a slow, error-prone process that absorbs labor hours and never fully closes the accuracy gap.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1524-vimaan",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vimaan.ai/"
    },
    "image": {
     "v": "/logos/vimaan.png",
     "fit": "contain",
     "src": "https://media.brand.dev/ae140efb-daf8-453d-8a1a-253cb4654fc1.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.linkedin.com/company/vimaan-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/vimaan-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "176 Component Drive, San Jose, California 95131, United States",
       "lat": 37.384093,
       "lon": -121.922284,
       "src": "https://www.linkedin.com/company/vimaan-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "apera",
   "name": "Apera",
   "summary": "Develops 4D Vision technology that gives industrial robots human-like sight and AI-driven perception.",
   "body": "Apera is a first of its kind talent, engineering and consulting organisation. We build amazing teams and support the development of bleeding-edge deep tech products. We focus exclusively on future mobility, clean energy, defence and space.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1526-apera",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://apera.co/"
    },
    "image": {
     "v": "/logos/apera.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4bf593bfb82ee0f48131.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Vancouver",
     "src": "https://roboticsconnected.com/companies/1526-apera",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/1526-apera",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Vancouver, Canada",
       "lat": 49.260872,
       "lon": -123.113952,
       "src": "https://roboticsconnected.com/companies/1526-apera"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "luxolis",
   "name": "Luxolis",
   "summary": "South Korean company building 3D vision systems for industrial automation.",
   "body": "Luxolis is a robotics and automation systems integration company focused on designing, integrating, and deploying intelligent automation solutions for industrial environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1527-luxolis",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://luxolis.ai/"
    },
    "image": {
     "v": "/logos/luxolis.png",
     "fit": "contain",
     "src": "https://luxolis.ai/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://roboticsconnected.com/companies/1527-luxolis",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://roboticsconnected.com/companies/1527-luxolis",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://roboticsconnected.com/companies/1527-luxolis"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vir-innovations",
   "name": "Vir Innovations",
   "summary": "Hyderabad-based product development company founded in 2021.",
   "body": "We are a product development company headquartered in Hyderabad, specializing in defence technology and the Internet of Things (IoT). Our primary focus is on developing advanced systems in the fields of computer vision, robotics, and fire control systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1623-vir-innovations",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.virinnovations.in/"
    },
    "image": {
     "v": "/logos/vir-innovations.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9c813dff90dc0c27f41b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hyderabad",
     "src": "https://in.linkedin.com/company/virinnovations",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/virinnovations",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Vir Innovations Pvt. Ltd., V.V.S Crest, Plot No. 8-2-438/7, Road No. – 4, Banjara Hills, Hyderabad - 500034, Hyderabad, Telangana 500034, India",
       "lat": 17.360589,
       "lon": 78.474061,
       "src": "https://in.linkedin.com/company/virinnovations"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fastems",
   "name": "Fastems",
   "summary": "Finnish provider of CNC automation systems for metalworking, combining pallet and part handling, robotic finishing cells and tool data management under its Manufacturing…",
   "body": "Fastems is the leading supplier of CNC automation solutions for variable batch production, also known as high-mix, low-volume manufacturing. We’re an open integrator with over 40 years and 4000 installations of experience with 90+ machine tool brands.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1627-fastems",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fastems.com/"
    },
    "image": {
     "v": "/logos/fastems.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f1ed74516666ff0464cc.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tampere",
     "src": "https://fi.linkedin.com/company/fastems",
     "asof": "2026-11"
    },
    "country": {
     "v": "Finland",
     "src": "https://fi.linkedin.com/company/fastems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tuotekatu 4, Tampere, 33840, Finland",
       "lat": 61.459811,
       "lon": 23.785612,
       "src": "https://fi.linkedin.com/company/fastems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "metamorphosis",
   "name": "metamorphosis",
   "summary": "Develops an AI-based, trackerless navigation platform for orthopaedic and spine surgery.",
   "body": "We develop trackerless navigation for minimally invasive orthopaedic and spinal procedures, based on automated intraoperative 3D registration from a single X-ray image.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1628-metamorphosis-gmbh",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://metamorphosis.ai/"
    },
    "image": {
     "v": "/logos/metamorphosis.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ba09a965d879689d5b87.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paderborn",
     "src": "https://de.linkedin.com/company/metamorphosis-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/metamorphosis-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Technologiepark 9, Paderborn, North Rhine-Westphalia 33100, Germany",
       "lat": 51.701071,
       "lon": 8.762496,
       "src": "https://de.linkedin.com/company/metamorphosis-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bellboy-robotics",
   "name": "Bellboy Robotics",
   "summary": "Builds Billie, a robotic workforce designed to work alongside people in real-world environments.",
   "body": "Billie is the operating system for physical AI, connecting people, agents, and robots to work as one team. We believe physical AI shouldn't be limited to factories but accessible to everyday businesses in the real world.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1629-bellboy-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bellboy-robotics.com/"
    },
    "image": {
     "v": "/logos/bellboy-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/aa583eb0b5561d904cab.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tel Aviv",
     "src": "https://roboticsconnected.com/companies/1629-bellboy-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://roboticsconnected.com/companies/1629-bellboy-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tel Aviv, Israel",
       "lat": 32.0853,
       "lon": 34.781806,
       "src": "https://roboticsconnected.com/companies/1629-bellboy-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dconstruct-robotics",
   "name": "dConstruct Robotics",
   "summary": "Builds AI-powered autonomous robots and reality-capture platforms.",
   "body": "dConstruct opened its doors in 2021, and as a start-up, our small team has been working on autonomy. What sets us apart from the rest is our belief that we can make robots easier to use. Read through our site to learn more, or simply get in touch.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1631-dconstruct-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dconstruct.ai/"
    },
    "image": {
     "v": "/logos/dconstruct-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ec5e836914b6a1a8e2a7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/dconstruct",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/dconstruct",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "10 Central Exchange Green, Singapore, 138649, Singapore",
       "lat": 1.301027,
       "lon": 103.789679,
       "src": "https://sg.linkedin.com/company/dconstruct"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "perciv",
   "name": "PERCIV",
   "summary": "Delft-based deep-tech company building AI software that gives radar sensors LiDAR-like perception.",
   "body": "Based on our extensive expertise in machine perception research, development, and deployment, Perciv AI offer AI-based perception solutions for multiple fields, often with the help of next-generation radars.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1633-perciv",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.perciv.ai/"
    },
    "image": {
     "v": "/logos/perciv.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/73794cef0cf19b1c5d13.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Delft",
     "src": "https://roboticsconnected.com/companies/1633-perciv",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://roboticsconnected.com/companies/1633-perciv",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Delft, Netherlands",
       "lat": 52.011402,
       "lon": 4.35839,
       "src": "https://roboticsconnected.com/companies/1633-perciv"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ds-automotion",
   "name": "DS AUTOMOTION",
   "summary": "Builds driverless transport systems and autonomous mobile robots, with roots in automated guided vehicles stretching back to 1984.",
   "body": "DS AUTOMOTION GmbH, headquartered in Linz, is a leading global supplier of automated guided vehicles and autonomous mobile robotics. The company has specialized in the development and production of automation solutions for a wide variety of applications and industries since 1984.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1634-ds-automotion",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ds-automotion.com/"
    },
    "image": {
     "v": "/logos/ds-automotion.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e3524f97443bff6d24db.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Linz",
     "src": "https://at.linkedin.com/company/ds-automotion-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Austria",
     "src": "https://at.linkedin.com/company/ds-automotion-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lunzerstraße 60, Linz, Oberösterreich 4030, Austria",
       "lat": 48.264256,
       "lon": 14.340454,
       "src": "https://at.linkedin.com/company/ds-automotion-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "driveblocks",
   "name": "driveblocks",
   "summary": "Munich-based software and AI specialist developing autonomy and perception systems for off-road vehicles.",
   "body": "driveblocks GmbH is a Munich-based software company developing autonomy and driver-assistance software for off-road vehicles in agriculture, construction, and defense. Off-road operation imposes constraints that differ fundamentally from on-road driving.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1635-driveblocks",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.driveblocks.ai/"
    },
    "image": {
     "v": "/logos/driveblocks.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/31ea1336329b15eccd5c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "München",
     "src": "https://de.linkedin.com/company/driveblocks",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/driveblocks",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Am Kartoffelgarten 14, München, Bavaria  81671, Germany",
       "lat": 48.123412,
       "lon": 11.607486,
       "src": "https://de.linkedin.com/company/driveblocks"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aim-intelligent-machines",
   "name": "AIM Intelligent Machines",
   "summary": "Embodied AI platform that retrofits existing heavy earthmoving machines, such as bulldozers, excavators, loaders and shovels, into autonomous fleets.",
   "body": "Everything our civilization depends on is either mined, dug, or grown. AIM transforms heavy machines into AI-powered fleets that turbocharge earthmoving. AIM’s platform has been running autonomous mines, construction sites, and building infrastructure around the world.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1639-aim-intelligent-machines",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aim.vision/"
    },
    "image": {
     "v": "/logos/aim-intelligent-machines.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d678a41671414c644e68.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redmond",
     "src": "https://roboticsconnected.com/companies/1639-aim-intelligent-machines",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1639-aim-intelligent-machines",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Redmond, United States",
       "lat": 47.669414,
       "lon": -122.123877,
       "src": "https://roboticsconnected.com/companies/1639-aim-intelligent-machines"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "swarmaero",
   "name": "Swarmaero",
   "summary": "Defence technology company building large uncrewed aircraft for swarm operations.",
   "body": "Its Gamera Group 5 UAS is designed for heavyweight, long-range strike payloads, with a claimed range above 9,000 nautical miles and a modular architecture for kinetic and non-kinetic effects. Its Legion command-and-control and autonomy system lets a single operator manage dozens of heterogeneous unmanned systems across domains.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1642-swarmaero",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.swarm.aero/"
    },
    "image": {
     "v": "/logos/swarmaero.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9c8e89fe9aca6d959cdd.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Oxnard",
     "src": "https://roboticsconnected.com/companies/1642-swarmaero",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1642-swarmaero",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Oxnard, United States",
       "lat": 34.197631,
       "lon": -119.180381,
       "src": "https://roboticsconnected.com/companies/1642-swarmaero"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "galam-robotics",
   "name": "Galam Robotics",
   "summary": "Builds modular robotic storage buffers for warehouses and last-mile logistics.",
   "body": "Galam Robotics développe et commercialise des solutions innovantes et industrielles permettant d'automatiser les buffers logistiques. Les solutions de Galam Robotics peuvent stocker, séquencer et empiler les commandes client, à des performances inégalées.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1646-galam-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.galam-robotics.com/"
    },
    "image": {
     "v": "/logos/galam-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5b5ca126a0a104546717.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Villeneuve-la-Garenne",
     "src": "https://roboticsconnected.com/companies/1646-galam-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://roboticsconnected.com/companies/1646-galam-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Villeneuve-la-Garenne, France",
       "lat": 48.935049,
       "lon": 2.332473,
       "src": "https://roboticsconnected.com/companies/1646-galam-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lupin-dental",
   "name": "Lupin Dental",
   "summary": "French robotics company developing the Lupin Robotic System, a supervised automated platform for minimally invasive tooth preparation for aesthetic veneers and other…",
   "body": "Lupin is building a new standard for aesthetic dentistry. Our digital ecosystem connects the complete treatment journey, from the first consultation to the final smile. Lupin combines digital treatment workflow, automation and robotic execution to help make treatments more predictable, efficient and reproducible.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1647-lupin-dental",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lupindental.com/"
    },
    "image": {
     "v": "/logos/lupin-dental.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a7a7867599381a34a34f.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montpellier",
     "src": "https://roboticsconnected.com/companies/1647-lupin-dental",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://roboticsconnected.com/companies/1647-lupin-dental",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Montpellier, France",
       "lat": 43.611242,
       "lon": 3.876734,
       "src": "https://roboticsconnected.com/companies/1647-lupin-dental"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xera-robotics",
   "name": "Xera Robotics",
   "summary": "Deep-tech company based in Chennai, India, building autonomous underwater systems, marine robotics and physical AI technologies.",
   "body": "Xera Robotics is a deep-tech Marine Robotics startup from India working on Electrifying Ocean",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1648-xera-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.xerarobotics.com/"
    },
    "image": {
     "v": "/logos/xera-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f3895473ca5a3c50fea6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chennai",
     "src": "https://in.linkedin.com/company/xera-robotics-india",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/xera-robotics-india",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chennai, Chennai, Tamil Nadu 600023, India",
       "lat": 13.080091,
       "lon": 80.280798,
       "src": "https://in.linkedin.com/company/xera-robotics-india"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "libiao-robotics",
   "name": "LIBIAO ROBOTICS",
   "summary": "Builds intelligent sorting robots and flexible sorting systems for logistics.",
   "body": "Robot sorting solution innovator, Zhejiang LiBiao Robot Co., Ltd. (hereinafter referred to as \"Libiao\") creates the world's first portable, modular, automated unit sorting system. We seek to integrate logistics automation with R&D, production and sales of intelligent equipment.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1650-libiao-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://libiaorobot.com/"
    },
    "image": {
     "v": "/logos/libiao-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/011c435a02b140595b25.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://cn.linkedin.com/company/libiaorobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/libiaorobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No.96 Changda Rd, Linping District, Hangzhou, Zhejiang 310000, China",
       "lat": 30.421705,
       "lon": 120.294653,
       "src": "https://cn.linkedin.com/company/libiaorobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "danu-robotics",
   "name": "Danu Robotics",
   "summary": "Designs and manufactures AI-controlled robotic systems for sorting mixed recyclables.",
   "body": "Its two-arm robots are retrofitted into existing manual sorting facilities, needing less than a metre of conveyor space and installing in under a day. The H.E.R.O. series uses computer vision and a pincer-style gripper to pick materials, recording each pick only when the object drops into the bin.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1653-danu-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.danurobotics.com/"
    },
    "image": {
     "v": "/logos/danu-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1ee643c958480bde288c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Edinburgh",
     "src": "https://roboticsconnected.com/companies/1653-danu-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/1653-danu-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Edinburgh, United Kingdom",
       "lat": 55.953346,
       "lon": -3.188375,
       "src": "https://roboticsconnected.com/companies/1653-danu-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "clutterbot",
   "name": "Clutterbot",
   "summary": "Builds and tests indoor robots that handle the repetitive upkeep of keeping shared spaces clean, tidy and ready to use.",
   "body": "Keeping indoor spaces ready to use. We design, build, and test robots that reliably handle the repetitive work of keeping spaces clean, tidy, and ready to use.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1720-clutterbot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.clutterbot.com/"
    },
    "image": {
     "v": "/logos/clutterbot.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/686f5a30f3adb7543251c0b3/68edae7946c06d3e07057018_256%20(2).svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lower Hutt",
     "src": "https://nz.linkedin.com/company/clutterbot",
     "asof": "2026-11"
    },
    "country": {
     "v": "New Zealand",
     "src": "https://nz.linkedin.com/company/clutterbot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4/32 Nevis Street, Lower Hutt, Wellington 5012, New Zealand",
       "lat": -41.224822,
       "lon": 174.867105,
       "src": "https://nz.linkedin.com/company/clutterbot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "saronic-technologies",
   "name": "Saronic Technologies",
   "summary": "Builds autonomous surface vessels for naval and maritime forces, with a portfolio spanning the Corsair, Mirage and Marauder platforms.",
   "body": "Saronic is building cutting-edge unmanned surface vehicles that enable maritime security and domain awareness by combining best-in-class hardware, software and artificial intelligence into one scalable, fully integrated platform.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1721-saronic-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.saronic.com/"
    },
    "image": {
     "v": "/logos/saronic-technologies.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1e1f13ad74c13e5604c1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://roboticsconnected.com/companies/1721-saronic-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1721-saronic-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://roboticsconnected.com/companies/1721-saronic-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "chore-robotics",
   "name": "Chore Robotics",
   "summary": "Southern California physical-AI company building a single autonomous base robot that swaps between seasonal utility attachments.",
   "body": "Chore Robotics, Inc. is a leading robotics and AI company redefining how indoor and outdoor spaces are maintained. We have developed a universal, autonomous robotic platform that tackles every seasonal chore through a highly efficient quick-swap modular system.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1722-chore-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://chorerobots.ai/"
    },
    "image": {
     "v": "/logos/chore-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/70b717cf3377084aed5d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Irvine",
     "src": "https://www.linkedin.com/company/chore-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/chore-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "15 Hubble, Irvine, California 92618, United States",
       "lat": 33.641424,
       "lon": -117.741571,
       "src": "https://www.linkedin.com/company/chore-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "berht-robotics",
   "name": "Berht Robotics",
   "summary": "Robotic automation company based in Bengaluru, India, founded in 2018.",
   "body": "Empowering Industries with Futuristic Robotics & Automation At Berht Robotics, we provide robotic services and training to help industries and individuals excel in automation and smart manufacturing.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1724-berht-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://berhtrobotics.com/"
    },
    "image": {
     "v": "/logos/berht-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/64c47d91c336dbe705f0.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://roboticsconnected.com/companies/1724-berht-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/1724-berht-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bengaluru, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://roboticsconnected.com/companies/1724-berht-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "puralink",
   "name": "Puralink",
   "summary": "Australian robotics company building autonomous pipe inspection robots.",
   "body": "Autonomous inspection systems for underground infrastructure - providing unmatched access, precise mapping, and high-quality visual data so operators can focus on assessing condition and making informed asset decisions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1725-puralink",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://puralink.com/"
    },
    "image": {
     "v": "/logos/puralink.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4017089caaa3fe16ec72.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mascot",
     "src": "https://au.linkedin.com/company/puralink",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://au.linkedin.com/company/puralink",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4 Chalmers Crescent, Mascot, New South Wales 2020, Australia",
       "lat": -33.925282,
       "lon": 151.184511,
       "src": "https://au.linkedin.com/company/puralink"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bow-robotics",
   "name": "Bow Robotics",
   "summary": "Based in West Chester, Ohio, is a robot repair and robotics services provider.",
   "body": "Bow Robotics (formerly Bow Automation, LLC) is a top tier parts, service and repair company specializing in ABB robotic systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1730-bow-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bowrobotics.com/"
    },
    "image": {
     "v": "/logos/bow-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/03132d0f832cb120d4be.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "West Chester",
     "src": "https://www.linkedin.com/company/bowrobotic",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/bowrobotic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "9914 Crescent Park Dr, West Chester, Ohio 45069, United States",
       "lat": 39.305357,
       "lon": -84.420001,
       "src": "https://www.linkedin.com/company/bowrobotic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "optonic",
   "name": "Optonic",
   "summary": "Freiburg-based supplier of 2D and 3D image processing and control solutions for industrial automation.",
   "body": "Mit der Vision unseren Kunden ein verlässlicher und innovativer Partner für industrielle Lösungen im Bereich der 2D und 3D Kamerasysteme, Bildverarbeitung, sowie Maschinen- und Robotersteuerung zu sein, wurde die Optonic GmbH im Jahr 2020 gegründet.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1731-optonic",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://optonic.com/"
    },
    "image": {
     "v": "/logos/optonic.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/afc763dd8e6e7030d5ac.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Freiburg im Breisgau",
     "src": "https://roboticsconnected.com/companies/1731-optonic",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/1731-optonic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Freiburg im Breisgau, Germany",
       "lat": 47.99609,
       "lon": 7.8494,
       "src": "https://roboticsconnected.com/companies/1731-optonic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stokes-robotics",
   "name": "Stokes Robotics",
   "summary": "Secondary developer based in Carl Junction, Missouri, that packages robots from other suppliers, mainly Unitree quadrupeds and the NAO humanoid, into customised systems.",
   "body": "SR is North American distributor and secondary developer of Unitree quadruped robots. We develops school security, industrial maintenance, law enforcement, agricultural and other industry related solutions for the quadruped robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1733-stokes-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://stokesrobotics.com/"
    },
    "image": {
     "v": "/logos/stokes-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/40648fc1d213e8384d26.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Carl Junction",
     "src": "https://www.linkedin.com/company/stokes-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/stokes-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "800 e Pennell St, Carl Junction, Missouri 64834, United States",
       "lat": 37.176483,
       "lon": -94.554421,
       "src": "https://www.linkedin.com/company/stokes-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "beyond-honeycomb",
   "name": "Beyond Honeycomb",
   "summary": "Seoul-based food-tech company building GRILL X, an AI grilling robot that cooks meat automatically to chef-level quality.",
   "body": "The founding team includes former Samsung Electronics specialists in food science, AI and robotics. The system uses molecular sensors to analyse Maillard browning, juiciness and char in real time, adjusting the cook to deliver consistent results.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1734-beyond-honeycomb",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.beyondhoneycomb.com/"
    },
    "image": {
     "v": "/logos/beyond-honeycomb.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8cd55f29c04373d92c2b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://roboticsconnected.com/companies/1734-beyond-honeycomb",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://roboticsconnected.com/companies/1734-beyond-honeycomb",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://roboticsconnected.com/companies/1734-beyond-honeycomb"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "erarob",
   "name": "ERAROB",
   "summary": "Istanbul-based company offering industrial robotic solutions tailored to customer production lines.",
   "body": "Erarob Robot Teknolojileri, robotik inovasyonlara öncülük eden bir teknoloji şirketidir. Müşterilere özel robotik çözümler geliştiren firmamız, endüstri standartlarını aşan projelerle sektördeki lider konumunu korumaktadır.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1737-erarob",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://erarob.com/"
    },
    "image": {
     "v": "/logos/erarob.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9eb307eef2d042e76e6c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "İstanbul",
     "src": "https://tr.linkedin.com/company/erarob-robot-teknolojileri",
     "asof": "2026-11"
    },
    "country": {
     "v": "Turkey",
     "src": "https://tr.linkedin.com/company/erarob-robot-teknolojileri",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "İSTİM Sanayi Sitesi, İstasyon Mah., Yarış Çıkmazı Sok., İstanbul, Tuzla 34940, Turkey",
       "lat": 40.957205,
       "lon": 29.41282,
       "src": "https://tr.linkedin.com/company/erarob-robot-teknolojileri"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autonomique",
   "name": "Autonomique",
   "summary": "Builds hardware-agnostic physical AI software that lets industrial robots perceive, reason, plan and manipulate objects with high dexterity.",
   "body": "Autonomique is building at the forefront of Physical AI. Our robotics intelligence framework enables robots to understand their environment, adapt to change, and perform complex real-world tasks. For jobs: https://www.autonomique.ai/join-us Our bi-manual robots are already tackling critical tasks in manufacturing.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1739-autonomique",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.autonomique.ai/"
    },
    "image": {
     "v": "/logos/autonomique.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2df80be960e2f7cbfb96.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://roboticsconnected.com/companies/1739-autonomique",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1739-autonomique",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Menlo Park, United States",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://roboticsconnected.com/companies/1739-autonomique"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "farmrobo-technologies",
   "name": "FarmRobo Technologies",
   "summary": "Builds electric, remote-controlled agricultural robots in India, with its flagship R1 and newer R1v2 and R5 platforms.",
   "body": "FarmRobo builds electric farm robots that take over the hard, repetitive work Indian farms struggle to find labour for: weeding, spraying, mowing, tillage and haulage. Agriculture employs close to 45% of India's workforce, and that workforce is shrinking.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1804-farmrobo-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.farmrobo.in/"
    },
    "city": {
     "v": "Patancheru",
     "src": "https://in.linkedin.com/company/farmrobo-technologies-pvt-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/farmrobo-technologies-pvt-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Muthangi Nagar Road, Patancheru, Telangana 502300, India",
       "lat": 17.528609,
       "lon": 78.267425,
       "src": "https://in.linkedin.com/company/farmrobo-technologies-pvt-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "helsing",
   "name": "Helsing",
   "summary": "Munich-based defence AI company founded in 2021 by Torsten Reil, Gundbert Scherf and Niklas Köhler.",
   "body": "Helsing is a Military AI company that designs new types of AI-defined and autonomous systems across all domains. We are aware of our special responsibility to develop and deploy these technologies thoughtfully and with the highest ethical standards.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1805-helsing",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://helsing.ai/"
    },
    "image": {
     "v": "/logos/helsing.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6370b5b62b4b5de3b7f4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/1805-helsing",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/1805-helsing",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/1805-helsing"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avetics-global",
   "name": "Avetics Global",
   "summary": "Singapore-based drone solutions company with operations in Malaysia, serving the wider Southeast Asian region.",
   "body": "Its core focus is end-to-end industrial drone services, built on customised drone technology. The company runs its own research and development, combining mechanical, systems, robotics and software work to build tailored aerial solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1807-avetics-global",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.avetics.com/"
    },
    "image": {
     "v": "/logos/avetics-global.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/56833a8d57eb8d0dbae7fd43/1462464206530-U6GQOSM08Z6096N4VVW7/favicon.ico?format=100w#on-ink",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://roboticsconnected.com/companies/1807-avetics-global",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://roboticsconnected.com/companies/1807-avetics-global",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Singapore, Singapore",
       "lat": 1.289918,
       "lon": 103.851907,
       "src": "https://roboticsconnected.com/companies/1807-avetics-global"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sunflower-labs",
   "name": "Sunflower Labs",
   "summary": "Builds the Beehive, a fully autonomous, AI-powered drone security system for commercial, industrial and residential properties.",
   "body": "Sunflower Labs builds an autonomous security drone system for commercial, industrial and high-end residential properties. The Sunflower Beehive System is a unique drone-in-a-box solution built to be fully autonomous from the ground up.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1809-sunflower-labs",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sunflower-labs.com/"
    },
    "image": {
     "v": "/logos/sunflower-labs.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ee93c356a281dcf15a79.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Carlos",
     "src": "https://roboticsconnected.com/companies/1809-sunflower-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1809-sunflower-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Carlos, United States",
       "lat": 37.504936,
       "lon": -122.261823,
       "src": "https://roboticsconnected.com/companies/1809-sunflower-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ollobot-robotics",
   "name": "Ollobot Robotics",
   "summary": "Hong Kong-registered companion-robot brand, with engineering and operations linked to Shenzhen, that makes OlloNi, a cyber pet for the home.",
   "body": "The robot uses vision, microphone arrays and emotion recognition to learn family routines and build a personality over time. The company unveiled OlloNi at CES 2026 and later showcased the OlloNi SS1 at IFA 2026.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1810-ollobot-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ollobot.com/"
    },
    "image": {
     "v": "/logos/ollobot-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0fea5f52b855bc1ef307.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://roboticsconnected.com/companies/1810-ollobot-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://roboticsconnected.com/companies/1810-ollobot-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hong Kong, Hong Kong",
       "lat": 22.281833,
       "lon": 114.158283,
       "src": "https://roboticsconnected.com/companies/1810-ollobot-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xpak-robotics",
   "name": "XPAK Robotics",
   "summary": "Designs and builds packaging automation equipment, centred on robotic case erectors, palletisers and delta robot work cells.",
   "body": "Its patented COBOXX and ROBOX systems form boxes on demand without changeovers, which suits varied production runs. The company works closely with customers to tailor each work cell to their production environment, offering around-the-clock engineering support and on-site services.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1817-xpak-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.xpakrobotics.com/"
    },
    "image": {
     "v": "/logos/xpak-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/f1e88e38-23e7-47dc-bcf3-1691698f6374.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "North Brunswick",
     "src": "https://roboticsconnected.com/companies/1817-xpak-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1817-xpak-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "North Brunswick, United States",
       "lat": 40.453925,
       "lon": -74.476545,
       "src": "https://roboticsconnected.com/companies/1817-xpak-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "saildrone",
   "name": "Saildrone",
   "summary": "Builds wind- and solar-powered autonomous surface vessels, often called ocean drones, for maritime domain awareness, anti-submarine warfare, seafloor mapping and…",
   "body": "Saildrone is a maritime defense company with a relentless passion for performance. Built to operate in the world’s harshest environments, Saildrone’s autonomous systems deliver payload effects and persistent, wide-area intelligence, enabling informed decisions across the spectrum of defense missions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1824-saildrone",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.saildrone.com/"
    },
    "image": {
     "v": "/logos/saildrone.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/bac35ddaf24dd18f33ea.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Alameda",
     "src": "https://roboticsconnected.com/companies/1824-saildrone",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1824-saildrone",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Alameda, United States",
       "lat": 37.609029,
       "lon": -121.899142,
       "src": "https://roboticsconnected.com/companies/1824-saildrone"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "noah-medical",
   "name": "Noah Medical",
   "summary": "Builds the Galaxy System, a navigated robotic bronchoscopy platform for pulmonary diagnostics.",
   "body": "Noah Medical is building the future of medical robotics. Our next generation robotic platform targets early diagnosis and treatment of patients across multiple indications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1825-noah-medical",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.noahmed.com/"
    },
    "image": {
     "v": "/logos/noah-medical.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6395e311c77c7b23a5ce.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Carlos",
     "src": "https://www.linkedin.com/company/noahmed",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/noahmed",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Carlos, San Carlos, California 94070, United States",
       "lat": 37.507567,
       "lon": -122.259971,
       "src": "https://www.linkedin.com/company/noahmed"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xdof",
   "name": "XDOF",
   "summary": "Robotics infrastructure company building data pipelines, teleoperation tools and annotation systems for training general-purpose robots.",
   "body": "XDOF is the infrastructure partner for the world's most ambitious robotics builders. We build the tools, data and services that accelerate the future of physical AI. We are hiring!",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1828-xdof",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.xdof.ai/"
    },
    "image": {
     "v": "/logos/xdof.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/e98fb44a63420d23e3d5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Mateo",
     "src": "https://roboticsconnected.com/companies/1828-xdof",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1828-xdof",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Mateo, United States",
       "lat": 37.496904,
       "lon": -122.333057,
       "src": "https://roboticsconnected.com/companies/1828-xdof"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ailand",
   "name": "AI.Land",
   "summary": "Agricultural technology provider run by Landhouz GmbH, based in Germany.",
   "body": "Automation and digitalization for agricultural sectors, especially crop and animal production. We offer innovative solutions in the fields of R&D, product development, systems engineering, and design, as well as services with a focus on robotics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1830-ai-land",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://a-i.land/"
    },
    "image": {
     "v": "/logos/ailand.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0b68f6135752185f0711.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Krefeld",
     "src": "https://de.linkedin.com/company/ai-land-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/ai-land-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Vorderorbroich 35, Krefeld, NRW 47839, Germany",
       "lat": 51.388344,
       "lon": 6.499236,
       "src": "https://de.linkedin.com/company/ai-land-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dac-robotics",
   "name": "DAC Robotics",
   "summary": "Builds, programmes, installs and supports robotic automation cells for manufacturers, distribution centres and technology companies.",
   "body": "It is a FANUC Level 4 authorised integrator and runs an in-house UL508A control panel shop, machine shop and fabrication operation from a 26,000 sq. ft.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1892-dac-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dacrobotics.com/"
    },
    "image": {
     "v": "/logos/dac-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/56858887745eb0fb6c68.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Leander",
     "src": "https://roboticsconnected.com/companies/1892-dac-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1892-dac-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Leander, United States",
       "lat": 30.573613,
       "lon": -97.856734,
       "src": "https://roboticsconnected.com/companies/1892-dac-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "radical-ai",
   "name": "Radical AI",
   "summary": "New York company building AI-directed self-driving labs to discover and manufacture new materials.",
   "body": "Radical AI is accelerating materials R&D. Through the integration of artificial intelligence, engineering, materials science, and applied research, we are changing the way materials are designed, developed, and discovered. In doing so we are tackling the world's most pressing problems.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1898-radical-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.radical-ai.com/"
    },
    "image": {
     "v": "/logos/radical-ai.png",
     "fit": "contain",
     "src": "https://radical-ai.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://roboticsconnected.com/companies/1898-radical-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1898-radical-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://roboticsconnected.com/companies/1898-radical-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "iknowhow-group",
   "name": "iKnowHow Group",
   "summary": "Greek technology group founded in Athens in 2002, combining robotics, embedded systems, AI and computer vision with custom software for the public and private sectors.",
   "body": "iKnowHow is a leading technology firm based in Athens, Greece, with a strong presence in both traditional ICT and Fourth Industrial Revolution (4IR) sectors across Greece and Europe. Founded in 2002, IKH provides custom software solutions, ICT strategy services, and complex enterprise applications.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1906-iknowhow-group",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.iknowhow.com/"
    },
    "image": {
     "v": "/logos/iknowhow-group.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/680b23b877b8897fb6ff.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Athens",
     "src": "https://gr.linkedin.com/company/iknowhow-sa",
     "asof": "2026-11"
    },
    "country": {
     "v": "Greece",
     "src": "https://gr.linkedin.com/company/iknowhow-sa",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "340 Kifissias Ave. Neo Psyhiko, Athens, 154 51, Greece",
       "lat": 37.978709,
       "lon": 23.7335,
       "src": "https://gr.linkedin.com/company/iknowhow-sa"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "voxel51",
   "name": "Voxel51",
   "summary": "Builds the data platform behind physical AI development.",
   "body": "Voxel51 is the leading data platform for physical AI. FiftyOne combines open-source flexibility with enterprise-grade capabilities to help teams understand and analyze their multimodal data, annotate the right samples, close quality and coverage gaps, and build models that perform reliably in the real world.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1910-voxel51",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://voxel51.com/"
    },
    "image": {
     "v": "/logos/voxel51.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6eb3cb2acc6dc7d8f9d3.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ann Arbor",
     "src": "https://www.linkedin.com/company/voxel51",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/voxel51",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "330 E Liberty St, Ann Arbor, Michigan 48104, United States",
       "lat": 42.279256,
       "lon": -83.744797,
       "src": "https://www.linkedin.com/company/voxel51"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "oxipital-ai",
   "name": "Oxipital AI",
   "summary": "Formerly Soft Robotics, is based in Bedford, Massachusetts.",
   "body": "Its V-CORTX platform is a visual AI system for quality inspection and robot guidance, built on synthetic data so customers need no image labelling. The platform offers no-code tools, pre-trained object models and live web dashboards, and it is aimed at food manufacturers and machine builders.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1913-oxipital-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.oxipitalai.com/"
    },
    "image": {
     "v": "/logos/oxipital-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1993403f810c3acce396.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bedford",
     "src": "https://roboticsconnected.com/companies/1913-oxipital-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1913-oxipital-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bedford, United States",
       "lat": 40.027145,
       "lon": -78.523745,
       "src": "https://roboticsconnected.com/companies/1913-oxipital-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rise-robotics",
   "name": "RISE Robotics",
   "summary": "Somerville, Massachusetts company developing fluid-free electric actuation for heavy machinery.",
   "body": "The leader in high-performance and cost-effective electric linear actuation solutions, RISE® helps machine designers embrace high-efficiency, fuel-saving actuation solutions that compete with hydraulic cylinders.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1919-rise-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.riserobotics.com/"
    },
    "image": {
     "v": "/logos/rise-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/82f7343b65bbf11e9ba6.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Somerville",
     "src": "https://www.linkedin.com/company/rise-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/rise-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1 Union Square, Somerville, Massachusetts 02143, United States",
       "lat": 42.379729,
       "lon": -71.096355,
       "src": "https://www.linkedin.com/company/rise-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "piaggio-fast-forward",
   "name": "Piaggio Fast Forward",
   "summary": "Boston-based robotics company founded in 2015 and owned by the Piaggio Group, the Italian maker of Vespa scooters.",
   "body": "Boston-based company Piaggio Fast Forward Inc. (PFF) was founded in 2015 by the Piaggio Group (the Italian manufacturer that created the iconic Vespa scooter).",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1920-piaggio-fast-forward",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://piaggiofastforward.com/"
    },
    "image": {
     "v": "/logos/piaggio-fast-forward.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/137d6a7659ffd9639093.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/piaggiofastforward",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/piaggiofastforward",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "52 Roland St, Boston, Massachusetts, United States",
       "lat": 42.381413,
       "lon": -71.079563,
       "src": "https://www.linkedin.com/company/piaggiofastforward"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "greensight",
   "name": "GreenSight",
   "summary": "Boston-based company combining robotics, drones and analytics, built on a platform of robotic mowers, soil sensors and drone scouting.",
   "body": "Its TurfCloud software brings turf management tools into one free platform for golf courses and sports fields. It was founded in 2015 by former golf superintendents and says it was the first company to develop a drone specifically for turf monitoring.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1921-greensight",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.greensightag.com/"
    },
    "image": {
     "v": "/logos/greensight.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/07888ad6d7d5a6ab682d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://roboticsconnected.com/companies/1921-greensight",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1921-greensight",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://roboticsconnected.com/companies/1921-greensight"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "luminous-robotics",
   "name": "Luminous Robotics",
   "summary": "Builds LUMI, a fleet of AI-enabled pick-and-place robots that install solar panels onto racks at utility-scale and distributed solar construction sites.",
   "body": "Luminous is building the critical infrastructure of our world, starting with energy. AI data centers are driving the fastest growth in electricity demand in a generation, and decarbonizing the planet means building more energy infrastructure in the next few decades than in all of human history combined.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1922-luminous-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.luminousrobotics.com/"
    },
    "image": {
     "v": "/logos/luminous-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/b19d3c7c2330536b768c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/luminous-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/luminous-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "12 Channel St, Boston, Massachusetts 02210, United States",
       "lat": 42.345492,
       "lon": -71.036844,
       "src": "https://www.linkedin.com/company/luminous-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "urbx",
   "name": "Urbx",
   "summary": "Builds autonomous vertical storage and goods-to-person robotic systems for e-commerce, omnichannel and retail fulfilment.",
   "body": "Helping brands distribute & customers purchase in a frictionless way.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1923-urbx",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://urbx.com/"
    },
    "image": {
     "v": "/logos/urbx.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/733de595b45b3b4f8347.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/urbx",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/urbx",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "12 Channel St, Boston, Massachusetts 02210, United States",
       "lat": 42.345492,
       "lon": -71.036844,
       "src": "https://www.linkedin.com/company/urbx"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tennibot",
   "name": "Tennibot",
   "summary": "Designs and manufactures autonomous ball machines and ball collectors.",
   "body": "Tennibot is an AI robotics company headquartered in Auburn, Alabama, building autonomous training systems for racquet sports.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1924-tennibot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tennibot.com/"
    },
    "image": {
     "v": "/logos/tennibot.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/c63575e042192b776083.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Auburn",
     "src": "https://www.linkedin.com/company/tennibot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/tennibot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1500 Pumphrey Ave, Auburn, AL 36832, United States",
       "lat": 32.60266,
       "lon": -85.51187,
       "src": "https://www.linkedin.com/company/tennibot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sea-machines-robotics",
   "name": "Sea Machines Robotics",
   "summary": "Builds autonomous control and navigation systems for ships, workboats and unmanned surface vessels.",
   "body": "Sea Machines Robotics is the lead provider of advanced technology for the marine and maritime sector with a product line of autonomous control and navigation systems for defense and commercial boats and ships.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1928-sea-machines-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sea-machines.com/"
    },
    "image": {
     "v": "/logos/sea-machines-robotics.png",
     "fit": "contain",
     "src": "https://sea-machines.com/wp-content/uploads/2026/03/favicon-seamachine.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.linkedin.com/company/sea-machines",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/sea-machines",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "266 Summer Street, Boston, MA 02210, United States",
       "lat": 42.350625,
       "lon": -71.050439,
       "src": "https://www.linkedin.com/company/sea-machines"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cyngn",
   "name": "Cyngn",
   "summary": "Builds autonomous mobile robots for industrial material handling, centred on its DriveMod Tugger, which tows up to 12,000 lbs of carts along pre-mapped routes.",
   "body": "Automate your material handling and repetitive workflows with our Autonomous Tuggers and Forklifts.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1960-cyngn",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cyngn.com/"
    },
    "image": {
     "v": "/logos/cyngn.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/971e831723504a02c3c1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://www.linkedin.com/company/cyngn",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/cyngn",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1344 Terra Bella Ave, Mountain View, California 94043, United States",
       "lat": 37.410606,
       "lon": -122.083239,
       "src": "https://www.linkedin.com/company/cyngn"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mach-industries",
   "name": "Mach Industries",
   "summary": "Huntington Beach, California defence manufacturer building unmanned aerial systems and the production capacity to make them at scale.",
   "body": "Mach Industries is a defense manufacturing company that develops and produces unmanned aerospace and defense systems, along with the infrastructure required to manufacture them at scale.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1961-mach-industries",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://machindustries.com/"
    },
    "image": {
     "v": "/logos/mach-industries.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9c4b9418b74ac43e7e12.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Huntington Beach",
     "src": "https://roboticsconnected.com/companies/1961-mach-industries",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1961-mach-industries",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Huntington Beach, United States",
       "lat": 33.678334,
       "lon": -118.000016,
       "src": "https://roboticsconnected.com/companies/1961-mach-industries"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "morph",
   "name": "Morph",
   "summary": "Soft robotics foundry based in London, with a second location in San Francisco.",
   "body": "It offers a design platform where customers start from a CAD file or prompt, simulate their product with its control model, and then receive manufactured soft robotic cells ready for integration. The company's cells ship with a physical AI model that handles sensing, embedded intelligence and adaptive control, so products can interact with their surroundings.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1962-morph",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://morph.inc/"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/1962-morph",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/1962-morph",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/1962-morph"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "join-botics-technology",
   "name": "Join Botics Technology",
   "summary": "Bengaluru-based education company offering STEM, robotics and AI programmes for schools and colleges.",
   "body": "Join Botics Technology Pvt. Ltd. is a leading EdTech company empowering the next generation of innovators through experiential learning, robotics, and AI education.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1966-join-botics-technology",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://joinbotics.com/"
    },
    "image": {
     "v": "/logos/join-botics-technology.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4661dccd97f6d21b3aeb.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru East",
     "src": "https://in.linkedin.com/company/join-botics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/join-botics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kodigehalli Main Road, Bengaluru East, Karnataka 560036, India",
       "lat": 12.997438,
       "lon": 77.72114,
       "src": "https://in.linkedin.com/company/join-botics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "moovita",
   "name": "Moovita",
   "summary": "Singapore-based autonomous vehicle company founded in 2016, building driverless mobility for urban environments.",
   "body": "MooVita curates smart mobility solutions to roadworthy autonomous vehicles for urban municipalities worldwide. The company has proudly been doing so since 2016.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1968-moovita",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.moovita.com/"
    },
    "image": {
     "v": "/logos/moovita.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a3ba0e619783ec5e1b50.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/moovita",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/moovita",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "535 Clementi Road, Singapore, 599489, Singapore",
       "lat": 1.329884,
       "lon": 103.774063,
       "src": "https://sg.linkedin.com/company/moovita"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fenka-robotics",
   "name": "FENKA Robotics",
   "summary": "Berlin-based full-service robotics integrator that deploys autonomous service robots to address the skilled labour shortage in the service industry.",
   "body": "FENKA Robotics widmet sich dem Kampf gegen den Fachkräftemangel in der Serviceindustrie mithilfe des Einsatzes von innovativen Robotiklösungen. Im Bereich der professionellen Gebäudereinigung bieten wir herstellerunabhängig und mit umfänglichen Serviceangebot überzeugende Lösungen für Ihre individuellen Bedürfnisse.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1971-fenka-robotics-gmbh",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fenka.de/"
    },
    "image": {
     "v": "/logos/fenka-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/952464946651975959f9.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://de.linkedin.com/company/fenkarobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/fenkarobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Herderstraße 15, Berlin, BE 10625, Germany",
       "lat": 52.510335,
       "lon": 13.316679,
       "src": "https://de.linkedin.com/company/fenkarobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "near-earth-autonomy",
   "name": "Near Earth Autonomy",
   "summary": "Builds the Captain autonomous pilot system, a safety-critical autopilot that lets aircraft fly missions with reduced or no onboard crew.",
   "body": "Creating a future where autonomous flight is safe and accessible.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1972-near-earth-autonomy",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nearearth.aero/"
    },
    "image": {
     "v": "/logos/near-earth-autonomy.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/a07ef8d490a252f4f7d8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.linkedin.com/company/near-earth-autonomy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/near-earth-autonomy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "150 N Lexington St, Pittsburgh, Pennsylvania 15208, United States",
       "lat": 40.449207,
       "lon": -79.898738,
       "src": "https://www.linkedin.com/company/near-earth-autonomy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "innovation-first-international",
   "name": "Innovation First International",
   "summary": "Designs control systems, electronics and robotics kits.",
   "body": "Innovation First International was founded on the belief that innovation very early in the design process is necessary to produce simple and elegant product designs.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/1975-innovation-first-international",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://innovationfirst.com/"
    },
    "image": {
     "v": "/logos/innovation-first-international.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/8063e1d71359a116b1f1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Greenville",
     "src": "https://www.linkedin.com/company/innovation-first-inc.",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/innovation-first-inc.",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "6725 W. FM 1570, Greenville, Texas 75402, United States",
       "lat": 33.138449,
       "lon": -96.110807,
       "src": "https://www.linkedin.com/company/innovation-first-inc."
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "grey-matter-robotics",
   "name": "Grey Matter Robotics",
   "summary": "Industrial automation firm based in Vadodara, Gujarat, building gantry systems and robot cells for CNC machine tending.",
   "body": "Welcome to Grey Matter Robotics Pvt Ltd! We are a leading manufacturer of 3 to 4-axis gantry systems for various pick and place automation applications like CNC machine tending , packaging, palletizing, loading and unloading, and more.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/1976-grey-matter-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gmrpl.in/"
    },
    "image": {
     "v": "/logos/grey-matter-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ea9599d3ea6a93677f2d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "vadodara",
     "src": "https://in.linkedin.com/company/greymatterauto",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/greymatterauto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "93/35, G.I.D.C makarpura, vadodara, gujarat 390010, India",
       "lat": 22.297314,
       "lon": 73.194257,
       "src": "https://in.linkedin.com/company/greymatterauto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "analog",
   "name": "Analog",
   "summary": "Builds Ana, a neural agent designed to sense spaces, remember context and direct robots, alongside Hive, a control platform for deploying physical intelligence in busy…",
   "body": "Analog is a company born from the belief that intelligence belongs in the real world. The company is building a living fabric of physical intelligence that connects people, places, and things into one continuously learning and self-reinforcing world model.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/1993-analog",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://analog.io/"
    },
    "image": {
     "v": "/logos/analog.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f742e651a9c163de83f1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Abu Dhabi",
     "src": "https://roboticsconnected.com/companies/1993-analog",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Arab Emirates",
     "src": "https://roboticsconnected.com/companies/1993-analog",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Abu Dhabi, United Arab Emirates",
       "lat": 24.453835,
       "lon": 54.377401,
       "src": "https://roboticsconnected.com/companies/1993-analog"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mesh-ag",
   "name": "MESH AG",
   "summary": "Robotics company spun out of ETH Zurich in 2022.",
   "body": "It develops robotic systems that automate the planning and assembly of rebar cages for reinforced concrete construction. The company deploys industrial robotics on construction sites and in prefabrication, targeting general contractors and construction materials suppliers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1994-mesh-ag",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mesh-energy.com/"
    },
    "image": {
     "v": "/logos/mesh-ag.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/80c1fc09fac0c227a329.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Birr",
     "src": "https://roboticsconnected.com/companies/1994-mesh-ag",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://roboticsconnected.com/companies/1994-mesh-ag",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Birr, Switzerland",
       "lat": 47.434534,
       "lon": 8.202978,
       "src": "https://roboticsconnected.com/companies/1994-mesh-ag"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "feather-robotics",
   "name": "Feather Robotics",
   "summary": "US humanoid robotics company based in East Palo Alto, California, founded in 2025 by Hoa Mai and Parsa Bakhtiari.",
   "body": "Feather is building a general-purpose robotics platform for Physical AI companies and manufacturing integrators to successfully deploy and scale their labor solutions. Our hardware ecosystem is designed to enable profitable business models for our partners.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1996-feather-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://feather.dev/"
    },
    "image": {
     "v": "/logos/feather-robotics.png",
     "fit": "contain",
     "src": "https://feather.dev/icon.svg?icon.2oe1zdvz-8cn5.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "East Palo Alto",
     "src": "https://roboticsconnected.com/companies/1996-feather-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1996-feather-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "East Palo Alto, United States",
       "lat": 37.468827,
       "lon": -122.141075,
       "src": "https://roboticsconnected.com/companies/1996-feather-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ebots",
   "name": "Ebots",
   "summary": "Builds AI-powered dual-arm robots for precision assembly in manufacturing.",
   "body": "Its systems combine 3D vision, eye-hand coordination and an onboard AI controller to handle delicate tasks such as cable harness tying, flex circuit insertion into ZIF connectors and data server insertion. The company positions its robots as a way to replace skilled-labour shortages, claiming output roughly twice that of human operators, 99.95% assembly yield and rapid changeovers without reprogra",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/1997-ebots",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ebots.com/"
    },
    "image": {
     "v": "/logos/ebots.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/db5746a225e4208635fc.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Fremont",
     "src": "https://roboticsconnected.com/companies/1997-ebots",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/1997-ebots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Fremont, United States",
       "lat": 37.54827,
       "lon": -121.988571,
       "src": "https://roboticsconnected.com/companies/1997-ebots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "scriptpro",
   "name": "ScriptPro",
   "summary": "Builds robotic prescription dispensing, pouch packaging and pharmacy management software used by community, hospital and mail-order pharmacies.",
   "body": "These are exciting and challenging times in the pharmacy industry. And that's why now is the time to automate your pharmacy practice. Automation will make a significant impact on your business, so be sure you pick the right partner for your automation needs.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/1998-scriptpro",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://scriptpro.com/"
    },
    "image": {
     "v": "/logos/scriptpro.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/2c393137c09027ea1a6d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mission",
     "src": "https://www.linkedin.com/company/scriptpro",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/scriptpro",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5828 Reeds Rd, Mission, KS 66202, United States",
       "lat": 39.022584,
       "lon": -94.652316,
       "src": "https://www.linkedin.com/company/scriptpro"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xtend",
   "name": "XTEND",
   "summary": "Building an AI-driven operating system, XOS, for autonomous robots and drones used in high-risk environments.",
   "body": "XTEND builds AI-native, software-led Physical AI for defense and security, delivering XOS — a human-guided autonomous operating system that links operators, platforms, sensors and payloads. With over 10,000 systems deployed, XTEND enables mission-critical autonomy while keeping operators in command and control.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2001-xtend",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://xtend.me/"
    },
    "image": {
     "v": "/logos/xtend.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1da05fb7736f316e3ee5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tampa",
     "src": "https://roboticsconnected.com/companies/2001-xtend",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2001-xtend",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tampa, United States",
       "lat": 27.944985,
       "lon": -82.458311,
       "src": "https://roboticsconnected.com/companies/2001-xtend"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "promise-robotics",
   "name": "Promise Robotics",
   "summary": "Builds a cloud-based production platform that combines AI, factory operations and robotic execution for homebuilding.",
   "body": "#robotics #AI #construction #sustainability #advancedmanufacturing",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2002-promise-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://promiserobotics.com/"
    },
    "image": {
     "v": "/logos/promise-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5cc6abc8e7a7fe0b9a5e.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toronto",
     "src": "https://roboticsconnected.com/companies/2002-promise-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/2002-promise-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Toronto, Canada",
       "lat": 43.653482,
       "lon": -79.383935,
       "src": "https://roboticsconnected.com/companies/2002-promise-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "synapticon",
   "name": "Synapticon",
   "summary": "Builds integrated motion control hardware and software for robotics and machinery.",
   "body": "Its portfolio spans ACTILINK actuators and integrated servo motors, SOMANET servo drives, MOTORCORTEX motion control software and the POSITRON Safety AI platform for functional safety. The company supplies humanoid robot makers, cobot and mobile robot builders, and machine manufacturers, including packaging line builders.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2004-synapticon",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.synapticon.com/"
    },
    "image": {
     "v": "/logos/synapticon.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/bfc203ff0e6c05b74820.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Schönaich",
     "src": "https://roboticsconnected.com/companies/2004-synapticon",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2004-synapticon",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Schönaich, Germany",
       "lat": 48.656545,
       "lon": 9.058829,
       "src": "https://roboticsconnected.com/companies/2004-synapticon"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "raise-robotics",
   "name": "Raise Robotics",
   "summary": "Builds reconfigurable robotic work cells that automate high-risk construction tasks such as layout, drilling, fastening, scanning and coating.",
   "body": "Let's Build.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2005-raise-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://raiserobotics.ai/"
    },
    "image": {
     "v": "/logos/raise-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/65cae92eaf0a0f55a380.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/2005-raise-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2005-raise-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/2005-raise-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "worldengine-ai",
   "name": "WorldEngine AI",
   "summary": "Physical AI infrastructure that turns human experience into robot training data.",
   "body": "Solving Robotics, for Humanity, from Humans.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2006-worldengine-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://worldengine.ai/"
    },
    "image": {
     "v": "/logos/worldengine-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d73a9ee78ad2658bcf3d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://roboticsconnected.com/companies/2006-worldengine-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2006-worldengine-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Santa Clara, United States",
       "lat": 37.233325,
       "lon": -121.684635,
       "src": "https://roboticsconnected.com/companies/2006-worldengine-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aeva",
   "name": "Aeva",
   "summary": "Builds FMCW 4D LiDAR sensors that measure range and velocity at the same time, along with onboard perception software built on its own X1 processor.",
   "body": "Aeva’s mission is to bring the next wave of perception to a broad range of applications from automated driving, manufacturing automation and smart infrastructure, to robotics and consumer devices.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2011-aeva",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aeva.com/"
    },
    "image": {
     "v": "/logos/aeva.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/25fb4c7d1c2bfb04cd53.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://www.linkedin.com/company/aevainc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/aevainc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "555 Ellis St, Mountain View, California, United States",
       "lat": 37.401419,
       "lon": -122.050961,
       "src": "https://www.linkedin.com/company/aevainc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "barrett-technology",
   "name": "Barrett Technology",
   "summary": "Newton, Massachusetts maker of robotics and drive technology, founded in 1988 by Bill Townsend.",
   "body": "Barrett Technology is the pioneer in robots that work hand-in-hand with people. Barrett’s robots, such as WAM® and BURT®, operate on Barrett’s novel gearless mechanisms, driven by its world-class Puck® motor controllers, and accessed through its open-source software.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2014-barrett-technology",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://barrett.com/"
    },
    "image": {
     "v": "/logos/barrett-technology.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/7726cd473fe55373b4bf.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Newton",
     "src": "https://www.linkedin.com/company/barrett-technology-llc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/barrett-technology-llc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "73 Chapel St., Newton, MA 02458, United States",
       "lat": 42.362186,
       "lon": -71.201142,
       "src": "https://www.linkedin.com/company/barrett-technology-llc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "blue-water-autonomy",
   "name": "Blue Water Autonomy",
   "summary": "Boston-based technology and shipbuilding company building highly producible unmanned ships for the U.S. Navy and commercial maritime operators.",
   "body": "Its first platform, Liberty Class, is a 67.7-metre, 810-ton medium unmanned surface vessel built for 90-day autonomous missions. The company fuses sensing, fusion software and AI-enabled systems with steel, validating each subsystem through software-in-the-loop, hardware-in-the-loop and open-water testing before integration.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2015-blue-water-autonomy",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.blw.ai/"
    },
    "image": {
     "v": "/logos/blue-water-autonomy.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/0394492bb374ff077b0b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://roboticsconnected.com/companies/2015-blue-water-autonomy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2015-blue-water-autonomy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://roboticsconnected.com/companies/2015-blue-water-autonomy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botinkit",
   "name": "Botinkit",
   "summary": "Builds AI-driven digital kitchen solutions for chain restaurants.",
   "body": "BOTINKIT is building a globally leading Physical AI platform for food and beverage industry, bringing AI into everyday restaurant operations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2016-botinkit",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botinkit.ai/"
    },
    "image": {
     "v": "/logos/botinkit.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6de36ad939b7a6c71b74.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/botinkit",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://hk.linkedin.com/company/botinkit",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building 19W, Hong Kong Science Park, N.T., Hong Kong, Hong Kong",
       "lat": 22.4265,
       "lon": 114.21,
       "src": "https://hk.linkedin.com/company/botinkit"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "loop-technology",
   "name": "Loop Technology",
   "summary": "UK industrial automation and robotics specialist, founded in 1998 and based in Poundbury, Dorchester.",
   "body": "Loop Technology is an industrial automation and robotics specialist for the high value manufacturing sector including aerospace, defence, and renewable energy. Loop Technology specialise in machine vision, motion control and industrial robotics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2028-loop-technology-ltd",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://looptechnology.com/"
    },
    "image": {
     "v": "/logos/loop-technology.png",
     "fit": "contain",
     "src": "https://looptechnology.com/wp-content/uploads/2019/01/cropped-favicon-site-icon-1-1-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dorchester",
     "src": "https://uk.linkedin.com/company/loop-technology-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/loop-technology-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "The Loop Technology Centre, Dorchester, Dorset DT1 3EW, United Kingdom",
       "lat": 50.713206,
       "lon": -2.437123,
       "src": "https://uk.linkedin.com/company/loop-technology-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lg-motion",
   "name": "LG Motion",
   "summary": "UK electro-mechanical motion systems manufacturer based in Basingstoke, Hampshire.",
   "body": "LG Motion are the motion control and cobot technology specialists based in the UK. We delivering quality design and experienced manufacturing with a personal, professional service to science institutes and leading machine manufacturers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/2029-lg-motion-ltd",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lg-motion.co.uk/"
    },
    "image": {
     "v": "/logos/lg-motion.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/6121552dc9921f5fdbcf.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Basingstoke",
     "src": "https://uk.linkedin.com/company/lg-motion",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/lg-motion",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brunel House, Basingstoke, Hampshire RG21 6XR, United Kingdom",
       "lat": 51.262826,
       "lon": -1.086198,
       "src": "https://uk.linkedin.com/company/lg-motion"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "adlink-technology",
   "name": "ADLINK Technology",
   "summary": "Designs embedded computers, computer-on-modules, GPU modules, industrial panel PCs and motion control hardware.",
   "body": "ADLINK Technology Inc. is a global leader in embedded and edge computing, accelerating edge AI adoption and enabling intelligence where it matters most.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/2030-adlink-technology",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.adlinktech.com/"
    },
    "image": {
     "v": "/logos/adlink-technology.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/34f06e4431c112f9d0f3.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Taoyuan City",
     "src": "https://tw.linkedin.com/company/adlink-technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "Taiwan",
     "src": "https://tw.linkedin.com/company/adlink-technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No. 66, Huaya 1st Rd., Guishan Dist., Taoyuan City, Taiwan (R.O.C.) 333411, Taiwan",
       "lat": 24.992999,
       "lon": 121.301,
       "src": "https://tw.linkedin.com/company/adlink-technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "icon-technology-inc",
   "name": "ICON Technology, Inc.",
   "summary": "Develops robotic 3D printing systems for construction, sold as the Titan printer with its BuildOS software, materials and training.",
   "body": "ICON is the global leader in construction automation, developing robotics, intelligent software systems, and advanced materials that are changing the way the world builds on Earth and beyond. For more information visit www.iconbuild.com or follow on X™, Instagram®, Facebook®, YouTube®, or Threads® (@ICON3DTech).",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2032-icon-technology-inc",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.iconbuild.com/"
    },
    "image": {
     "v": "/logos/icon-technology-inc.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/7a789b2e2e6f59f0fda1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.linkedin.com/company/icon3dtech",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/icon3dtech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "220 E Saint Elmo Rd, Austin, Texas 78745, United States",
       "lat": 30.216863,
       "lon": -97.763724,
       "src": "https://www.linkedin.com/company/icon3dtech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "forterra",
   "name": "Forterra",
   "summary": "Builds autonomous mission systems for defence, spanning ground vehicle autonomy, tactical communications, spectrum sensing and edge compute.",
   "body": "Forterra delivers autonomous mission systems for defense, building scalable hardware and software platforms—from self-driving land systems to coordinated robotic swarms—that act as force multipliers, extending reach, survivability and lethality across the battlespace.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2037-forterra",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.forterra.com/"
    },
    "image": {
     "v": "/logos/forterra.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/487318b66080909fba52.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Arlington",
     "src": "https://www.linkedin.com/company/forterra-autonomy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/forterra-autonomy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1515 N Courthouse Rd, Arlington, Virginia 22201, United States",
       "lat": 38.891261,
       "lon": -77.083469,
       "src": "https://www.linkedin.com/company/forterra-autonomy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "edgenesis",
   "name": "Edgenesis",
   "summary": "Builds an open-source, Kubernetes-native platform called Shifu that unifies device protocols into APIs, letting companies manage heterogeneous hardware, orchestrate edge…",
   "body": "Edgenesis is a technology company specializing in Kubernetes-native Edge AI and IoT solutions. We aim to drive standardization in device-driven IoT applications and offer flexible, efficient solutions to optimize production processes and reduce costs.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2040-edgenesis",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://edgenesis.ai/"
    },
    "image": {
     "v": "/logos/edgenesis.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/14efdf4dae8b6dbfc219.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sunnyvale",
     "src": "https://roboticsconnected.com/companies/2040-edgenesis",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2040-edgenesis",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sunnyvale, United States",
       "lat": 37.36883,
       "lon": -122.036349,
       "src": "https://roboticsconnected.com/companies/2040-edgenesis"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "galaxea",
   "name": "Galaxea",
   "summary": "Chinese embodied intelligence company founded in 2023 by a team with Tsinghua and Stanford roots.",
   "body": "It builds full-stack embodied AI, combining its own dual-arm wheeled robots such as the R1 series with proprietary G0 foundation models. The company also offers an embodied development platform covering data collection, quality checks, post-training and deployment, alongside a one-click fine-tuning toolkit that integrates open-source models.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/2042-galaxea",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://galaxea-ai.com/"
    },
    "image": {
     "v": "/logos/galaxea.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/be6b7b4922dcdc744629.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://roboticsconnected.com/companies/2042-galaxea",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://roboticsconnected.com/companies/2042-galaxea",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://roboticsconnected.com/companies/2042-galaxea"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "icarus-robotics",
   "name": "Icarus Robotics",
   "summary": "Builds general-purpose robots for orbital work, aiming to create a robotic labour force for space stations.",
   "body": "Icarus is developing dexterous mobile robots to augment astronaut crews by handling routine, time-consuming, and hazardous tasks at a fraction of the cost of human labor—unlocking scalable commercial manufacturing and experimentation in space.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2045-icarus-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://icarusrobotics.com/"
    },
    "image": {
     "v": "/logos/icarus-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/62cccd5a259c73718fa8.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brooklyn",
     "src": "https://www.linkedin.com/company/icarus-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/icarus-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "19 Morris Ave, Brooklyn, New York 11205, United States",
       "lat": 40.698834,
       "lon": -73.974716,
       "src": "https://www.linkedin.com/company/icarus-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "advantech",
   "name": "Advantech",
   "summary": "Taiwan-headquartered provider of industrial computing hardware, embedded systems and Internet of Things platforms.",
   "body": "Its catalogue spans embedded computers, industrial automation and I/O, edge AI systems, machine vision cameras and industrial networking products. The company sells into factory automation, healthcare, retail, transportation and energy markets.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2048-advantech",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.advantech.com/"
    },
    "image": {
     "v": "/logos/advantech.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5ab6f08e592c39463faa.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Neihu District",
     "src": "https://tw.linkedin.com/company/advantech",
     "asof": "2026-11"
    },
    "country": {
     "v": "Taiwan",
     "src": "https://tw.linkedin.com/company/advantech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No. 1, Alley 20, Lane 26, Rueiguang Road, Neihu District, Taipei 114 Taiwan, Taiwan",
       "lat": 24.152045,
       "lon": 120.668999,
       "src": "https://tw.linkedin.com/company/advantech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "apera-ai",
   "name": "Apera AI",
   "summary": "Builds 4D Vision software and hardware that gives industrial robots human-like sight.",
   "body": "Apera AI offers 4D Vision technology for industrial robotics, enabling faster, more reliable, and scalable autonomous manufacturing.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2050-apera-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://apera.ai/"
    },
    "image": {
     "v": "/logos/apera-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/57a7b9ef8da0806bac1b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Vancouver",
     "src": "https://ca.linkedin.com/company/aperaai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/aperaai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "#501-134 Abbott St., Vancouver, BC V6B 2K4, Canada",
       "lat": 49.281543,
       "lon": -123.1074,
       "src": "https://ca.linkedin.com/company/aperaai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "familiar-machines-magic",
   "name": "Familiar Machines & Magic",
   "summary": "Boston-area consumer robotics startup founded by Roomba creator Colin Angle, Ira Renfrew and Chris Jones.",
   "body": "Familiar Machines & Magic is pioneering Consumer Physical AI, beginning with Familiars - physically embodied AI systems designed to form long-term, emotionally intelligent relationships with people. The company’s mission is to create artificial life to build a more caring world.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2055-familiar-machines-and-magic",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.familiarmachines.com/"
    },
    "image": {
     "v": "/logos/familiar-machines-magic.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9059a092bbf3d41b4d68.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Woburn",
     "src": "https://roboticsconnected.com/companies/2055-familiar-machines-and-magic",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2055-familiar-machines-and-magic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Woburn, United States",
       "lat": 42.479262,
       "lon": -71.152277,
       "src": "https://roboticsconnected.com/companies/2055-familiar-machines-and-magic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "drift",
   "name": "Drift",
   "summary": "Sim-based evaluation platform and AI developer tool for robotics engineers.",
   "body": "Engineers describe a robot, world or task in natural language, and the agent generates ROS workspaces, robot description files and world files, then launches simulations in Gazebo, MuJoCo or Isaac Sim. It works across the operating system, terminal, ROS graph and simulator at once, with planning, replanning and autonomous debugging built in.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2058-drift",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.godrift.ai/"
    },
    "image": {
     "v": "/logos/drift.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4d60280ee030a5ae8422.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/2058-drift",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2058-drift",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/2058-drift"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "absolute-robotics",
   "name": "Absolute Robotics",
   "summary": "Bristol-based cobot integrator and core division of the Absolute Group.",
   "body": "Absolute Robotics offers industrial automation solutions using collaborative robots / cobots. We are a small, agile company excited about the opportunity to bring a pragmatic approach to automation using the incredible versatility and low cost of cobots. We enable UK companies to be competitive on the world stage.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2061-absolute-robotics-ltd",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.absoluterobotics.uk/"
    },
    "image": {
     "v": "/logos/absolute-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/9722ea1784c900662302.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://uk.linkedin.com/company/absoluterobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/absoluterobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Future Space, Filton Road, Stoke Gifford, Bristol, England BS34 8RB, United Kingdom",
       "lat": 51.511758,
       "lon": -2.556961,
       "src": "https://uk.linkedin.com/company/absoluterobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "deepdrive",
   "name": "DeepDrive",
   "summary": "Munich-based high-tech company developing electric motors, centred on a patented dual rotor, radial flux machine.",
   "body": "We are DeepDrive, a high-tech company headquartered in Munich, Germany, offering revolutionary drive units for electric vehicles.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2133-deepdrive",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.deepdrive.tech/"
    },
    "image": {
     "v": "/logos/deepdrive.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/69d3713f0f32ec6098ba.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/2133-deepdrive",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2133-deepdrive",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/2133-deepdrive"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "honeybee-robotics",
   "name": "Honeybee Robotics",
   "summary": "Builds robotic systems, actuators, drills and sample collection mechanisms for space and planetary exploration.",
   "body": "Founded in 1983, it has delivered more than a thousand projects for government and industrial customers. The company is best known for Mars mission hardware and NASA work, and it has also served defence robotics, medical devices, mining, and utility infrastructure clients.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2135-honeybee-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.honeybeerobotics.com/"
    },
    "image": {
     "v": "/logos/honeybee-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/ae85e229d816f2074483.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Longmont",
     "src": "https://roboticsconnected.com/companies/2135-honeybee-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2135-honeybee-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Longmont, United States",
       "lat": 40.167212,
       "lon": -105.101928,
       "src": "https://roboticsconnected.com/companies/2135-honeybee-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "visionnav-robotics",
   "name": "VisionNav Robotics",
   "summary": "Builds autonomous industrial vehicles, including driverless forklifts, stacking vehicles and other AMR and AGV logistics robots.",
   "body": "Headquartered in Atlanta, VisionNav® Robotics is a global leader in autonomous industrial vehicles (AMRs/AGVs) and logistics automation solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2136-visionnav-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.visionnav.com/"
    },
    "image": {
     "v": "/logos/visionnav-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d309bd4bcd2d81750c2c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Atlanta",
     "src": "https://www.linkedin.com/company/visionnav",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/visionnav",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2499 Newpoint Pkwy, Atlanta, Georgia 30043, United States",
       "lat": 33.754466,
       "lon": -84.389815,
       "src": "https://www.linkedin.com/company/visionnav"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rogue-cortex",
   "name": "Rogue Cortex",
   "summary": "Early-stage British company founded in 2026 by Arnaud Thiercelin, with its registered office in London and a listed headquarters in Guildford.",
   "body": "Rogue Cortex offers developer tools (software and hardware) that enables anyone creating robotics systems and solutions to achieve more, faster and cheaper.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2138-rogue-cortex",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roguecortex.com/"
    },
    "image": {
     "v": "/logos/rogue-cortex.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/5d0185a20c95d16deb60.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/2138-rogue-cortex",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/2138-rogue-cortex",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/2138-rogue-cortex"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "correct-ai",
   "name": "Correct-AI",
   "summary": "Develops AI-driven collision avoidance, mapping, and path planning systems for heavy equipment and industrial worksites.",
   "body": "Its PROX-EYE line uses cameras and LiDAR for hazard detection around operating machines, while FIELD-EYE and CABIN-EYE cover site awareness and in-cab driver monitoring. The company is also advancing machine perception, localisation and control for autonomous heavy equipment.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2139-correct-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://correct-ai.com/"
    },
    "image": {
     "v": "/logos/correct-ai.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/d3d7bec7a0590bf4d84c.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Edmonton",
     "src": "https://ca.linkedin.com/company/correct-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/correct-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "10050 112 St NW, Edmonton, Alberta T5K 2J1, Canada",
       "lat": 53.540148,
       "lon": -113.514408,
       "src": "https://ca.linkedin.com/company/correct-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ubica-robotics",
   "name": "Ubica Robotics",
   "summary": "Builds autonomous scan robots that create a digital twin of brick-and-mortar retail stores.",
   "body": "Helping retailers see, understand, and optimize their stores - through autonomous robots creating digital twins for smater decisions. As Spin-Off from a EU Reseach Project we develop, produce and sell autonomous robots for generating digital twins of brick-and-mortar retail stores.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2140-ubica-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ubica-robotics.eu/"
    },
    "image": {
     "v": "/logos/ubica-robotics.png",
     "fit": "contain",
     "src": "https://ubica-robotics.eu/wp-content/uploads/2022/08/fav-logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bremen",
     "src": "https://de.linkedin.com/company/ubica-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/ubica-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Konsul-Smidt-Str. 20, Bremen, 28217, Germany",
       "lat": 53.090425,
       "lon": 8.773854,
       "src": "https://de.linkedin.com/company/ubica-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hadrian-automation",
   "name": "Hadrian Automation",
   "summary": "US advanced manufacturing company based in Torrance, California, building highly automated factories for defence, aerospace and industrial customers.",
   "body": "Hadrian is building autonomous factories to reindustrialize America. By combining AI, advanced software, robotics, and full-stack manufacturing, we help aerospace and defense companies build rockets, satellites, aircraft, ships, and other mission-critical systems up to 10x faster and at significantly lower cost.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2141-hadrian-automation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hadrian.co/"
    },
    "image": {
     "v": "/logos/hadrian-automation.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/bebd8c2e234043cd5b69.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Torrance",
     "src": "https://roboticsconnected.com/companies/2141-hadrian-automation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2141-hadrian-automation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Torrance, United States",
       "lat": 33.837139,
       "lon": -118.341361,
       "src": "https://roboticsconnected.com/companies/2141-hadrian-automation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neuralink",
   "name": "Neuralink",
   "summary": "Neurotechnology company developing implantable brain-computer interfaces (BCIs) that let people with paralysis communicate and interact using only their thoughts.",
   "body": "Neuralink is a neurotechnology company building a generalized input/output platform for the brain. Our work has the potential to restore autonomy to those with unmet medical needs and fundamentally transform how humans interact with the world.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2146-neuralink",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://neuralink.com/"
    },
    "image": {
     "v": "/logos/neuralink.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/006d2e40e642fef0a781.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Fremont",
     "src": "https://roboticsconnected.com/companies/2146-neuralink",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2146-neuralink",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Fremont, United States",
       "lat": 37.54827,
       "lon": -121.988571,
       "src": "https://roboticsconnected.com/companies/2146-neuralink"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lunar-outpost",
   "name": "Lunar Outpost",
   "summary": "Builds planetary mobility systems, including crewed and uncrewed lunar rovers, the MAPP autonomous prospecting platform, and space-rated environmental infrastructure.",
   "body": "Lunar Outpost is the industry leader in commercial space robotics, lunar surface mobility, and in-space infrastructure. We are on a mission to enable an extended human presence in space while utilizing the vast resources in space to drive positive impacts here on Earth.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2148-lunar-outpost",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lunaroutpost.com/"
    },
    "image": {
     "v": "/logos/lunar-outpost.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/4ebc244e7bb75f3d6581.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Golden",
     "src": "https://roboticsconnected.com/companies/2148-lunar-outpost",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2148-lunar-outpost",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Golden, United States",
       "lat": 39.754635,
       "lon": -105.22058,
       "src": "https://roboticsconnected.com/companies/2148-lunar-outpost"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "acta-robotics",
   "name": "Acta Robotics",
   "summary": "Brazilian company building autonomous robots for events, logistics and industry.",
   "body": "Robôs para logística, indústria e eventos. Aumente sua produtividade ou sua visibilidade de maneira rápida e inteligente. Agende um teste e veja o robô em ação na sua empresa.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2149-acta-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.actarobotics.com/"
    },
    "image": {
     "v": "/logos/acta-robotics.png",
     "fit": "contain",
     "src": "https://www.actarobotics.com/favicon-180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Campinas",
     "src": "https://br.linkedin.com/company/acta-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Brazil",
     "src": "https://br.linkedin.com/company/acta-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "AV FRANCISCO JOSE DE CAMARGO ANDRADE 30, Campinas, SP, Brazil",
       "lat": -22.884803,
       "lon": -47.074481,
       "src": "https://br.linkedin.com/company/acta-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wingxpand",
   "name": "WingXpand",
   "summary": "Builds a family of smart autonomous robots for air, land and water, all sharing a common AI core called xPAIR.",
   "body": "WingXpand is expanding what’s possible with autonomous systems through a family of smart robots built to adapt. From the air to the ground and the water, our Universal Smart Autonomous System gives defense, public safety, agriculture and other industries the intelligence and flexibility to take on complex missions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2152-wingxpand",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.wingxpand.com/"
    },
    "image": {
     "v": "/logos/wingxpand.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/deacb0e3e11b38f0e9a9.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Saint Louis",
     "src": "https://roboticsconnected.com/companies/2152-wingxpand",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2152-wingxpand",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Saint Louis, United States",
       "lat": 38.625406,
       "lon": -90.190009,
       "src": "https://roboticsconnected.com/companies/2152-wingxpand"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "evasive-robotics",
   "name": "Evasive Robotics",
   "summary": "Dresden-based company building EvaLib, a real-time motion planning library that coordinates multiple robots sharing one workspace.",
   "body": "Evasive Robotics delivers space-saving, efficient multi-robot solutions for assembly and palletizing, optimizing floor space and cycle times in automation.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2156-evasive-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://evasive-robotics.com/"
    },
    "image": {
     "v": "/logos/evasive-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/fe6e0814c15c3b09b95d.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dresden",
     "src": "https://roboticsconnected.com/companies/2156-evasive-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2156-evasive-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dresden, Germany",
       "lat": 51.049329,
       "lon": 13.738144,
       "src": "https://roboticsconnected.com/companies/2156-evasive-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wcb-robotics",
   "name": "WCB Robotics",
   "summary": "Builds wall-climbing robots designed to take over dangerous work, starting with facade cleaning.",
   "body": "WCB Robotics is a robotics company which aims to provide robotic solutions to replace some of the most dangerous jobs. Our key innovations have been in the space of wall climbing robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2158-wcb-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.wcbrobotics.com/"
    },
    "image": {
     "v": "/logos/wcb-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/f2b266067c48f053e9f1.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Houston",
     "src": "https://roboticsconnected.com/companies/2158-wcb-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2158-wcb-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Houston, United States",
       "lat": 29.758938,
       "lon": -95.367697,
       "src": "https://roboticsconnected.com/companies/2158-wcb-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "luna-technologies",
   "name": "Luna Technologies",
   "summary": "Indian industrial automation supplier known for bearings, pneumatics, motors, controllers and drives.",
   "body": "Luna Technologies is a Leading name in Factory Automation Products, Linear Motion Products, Industrial Components, Bearings, Pneumatics, Motors, Controllers that Drives Indian Industries. We're focused on driving ongoing Safety, Innovation, Efficiency, Reliability and Productivity.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2328-luna-technologies-pvt-ltd",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://luna.co.in/"
    },
    "image": {
     "v": "/logos/luna-technologies.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/beb12936d5f1439d4af0.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "NAVI MUMBAI",
     "src": "https://in.linkedin.com/company/lunatechnologiespvtltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/lunatechnologiespvtltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "THANE BELAPUR ROAD,, NAVI MUMBAI, MAHARASHTRA 400708, India",
       "lat": 19.176592,
       "lon": 72.997673,
       "src": "https://in.linkedin.com/company/lunatechnologiespvtltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "syos-aerospace",
   "name": "SYOS Aerospace",
   "summary": "Manufactures uncrewed vehicles across air, land, sea and subsurface domains, including fixed-wing and heavy lift UAS, UGVs, USVs and UUVs.",
   "body": "SYOS is a rapidly growing uncrewed systems technology company tackling real-world challenges across air, land, sea and subsurface domains.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2330-syos-aerospace",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://syos-aerospace.com/"
    },
    "image": {
     "v": "/logos/syos-aerospace.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/17bfd952561a7c82daa7.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mount Maunganui",
     "src": "https://roboticsconnected.com/companies/2330-syos-aerospace",
     "asof": "2026-11"
    },
    "country": {
     "v": "New Zealand",
     "src": "https://roboticsconnected.com/companies/2330-syos-aerospace",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mount Maunganui, New Zealand",
       "lat": -37.638022,
       "lon": 176.183884,
       "src": "https://roboticsconnected.com/companies/2330-syos-aerospace"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "irov",
   "name": "IROV",
   "summary": "EyeROV (IROV Technologies Pvt.",
   "body": "EyeROV (IROV Technologies Pvt. Ltd), is an India-based Marine Robotics and AI deeptech company headquartered in Kochi. We design and deploy advanced unmanned underwater and surface systems that make subsea inspection, monitoring, search-and-rescue, and intervention safer, faster, and more data-rich.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2332-irov",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://eyerov.com/"
    },
    "image": {
     "v": "/logos/irov.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/694e50cb654ff668f686.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "ERNAKULAM",
     "src": "https://in.linkedin.com/company/eyerov",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/eyerov",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "KUNNATHUNAD PANCHAYATH, ERNAKULAM, KERALA 683562, India",
       "lat": 10.038395,
       "lon": 76.507414,
       "src": "https://in.linkedin.com/company/eyerov"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bob-robotics",
   "name": "Bob Robotics",
   "summary": "Italian company based in Carbonera, near Treviso, that designs service robots for restaurants, hotels, supermarkets and other venues.",
   "body": "Robot ed automazioni per attività commerciali. Siamo specializzati nell'innovazione di locali commerciali come ristoranti e bar con l'obiettivo di aumentare la Soddisfazione del cliente, ridurre i tempi di servizio ed eliminare il problema di carenza del personale.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2336-bob-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bobrobotics.com/"
    },
    "image": {
     "v": "/logos/bob-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/fbb1ebd9a247a72e3504.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Carbonera",
     "src": "https://it.linkedin.com/company/bobrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://it.linkedin.com/company/bobrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Via Tommaso Salsa, 75, Carbonera, Veneto 31030, Italy",
       "lat": 45.680072,
       "lon": 12.305275,
       "src": "https://it.linkedin.com/company/bobrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gaia-ai",
   "name": "Gaia AI",
   "summary": "Builds AI-powered forest data tools that combine sensor technology with perception AI.",
   "body": "Its backpack-mounted data collection system, paired with a mobile app and web platform, lets foresters run digital check cruises with objective, real-time metrics. The company serves forest managers, consulting foresters, government land managers such as USFS regions, and carbon project developers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2337-gaia-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gaia-ai.eco/"
    },
    "image": {
     "v": "/logos/gaia-ai.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/637c9717dbf1e3678d92683b/67bc430a9fc4e91319c563b6_Touch%20Icon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Somerville",
     "src": "https://roboticsconnected.com/companies/2337-gaia-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2337-gaia-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Somerville, United States",
       "lat": 42.387597,
       "lon": -71.099497,
       "src": "https://roboticsconnected.com/companies/2337-gaia-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inker-robotics",
   "name": "Inker Robotics",
   "summary": "Thrissur, Kerala-based company that runs a robotics education ecosystem rather than selling industrial robots.",
   "body": "INKER ROBOTICS - Anybody Can Build A Robot Anybody can build a Robot. Sounds preposterous, doesn’t it? But for us at Inker Robotics, it’s our ideology.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2338-inker-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://inkerrobotics.com/"
    },
    "image": {
     "v": "/logos/inker-robotics.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/099636530789013c45e4.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Thrissur",
     "src": "https://in.linkedin.com/company/inkerrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/inkerrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shoranur Road, Thrissur, Kerala 680008, India",
       "lat": 10.528321,
       "lon": 76.211913,
       "src": "https://in.linkedin.com/company/inkerrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kaigos",
   "name": "Kaigos",
   "summary": "Designs and develops intelligent robots, aiming to bring advanced automation within reach of small and medium-sized manufacturers.",
   "body": "Kaigos is a provider of advanced robotics solutions for system integrators in the industry. Kaigos develops the most advanced and flexible robotics applications on the market and can also assist, through software development consultancy, to the realization of the most advanced and reconfigurable robotics solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2341-kaigos",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kaigos.io/"
    },
    "image": {
     "v": "/logos/kaigos.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/1f7b4f645fb4e11c79d5.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Treviso",
     "src": "https://roboticsconnected.com/companies/2341-kaigos",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://roboticsconnected.com/companies/2341-kaigos",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Treviso, Italy",
       "lat": 45.806691,
       "lon": 12.206316,
       "src": "https://roboticsconnected.com/companies/2341-kaigos"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fulcrumair",
   "name": "FulcrumAir",
   "summary": "Builds remotely operated robotic tools for overhead power line work.",
   "body": "Its LineFly drone-carried tools and manually deployed LineSpider tools install bird diverters, spacers and other hardware on energised transmission and distribution lines. The company says its systems remove people from work at height, cut installation time by three to seven times and lower carbon emissions by around 95 percent compared with helicopter-based methods.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2342-fulcrumair",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://fulcrumair.com/"
    },
    "image": {
     "v": "/logos/fulcrumair.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/612145d8f5b84d742c44.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Calgary",
     "src": "https://roboticsconnected.com/companies/2342-fulcrumair",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/2342-fulcrumair",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Calgary, Canada",
       "lat": 51.045606,
       "lon": -114.057541,
       "src": "https://roboticsconnected.com/companies/2342-fulcrumair"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "balluff",
   "name": "Balluff",
   "summary": "Family-owned sensor and industrial automation specialist founded in 1921 in Neuhausen auf den Fildern, near Stuttgart.",
   "body": "We are your partner for innovative solutions in industrial automation. With our passion we improve your competitive position with speed and results.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2344-balluff",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.balluff.com/"
    },
    "image": {
     "v": "/logos/balluff.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/ingested/60b525c96685cfd45b51.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Neuhausen auf den Fildern",
     "src": "https://roboticsconnected.com/companies/2344-balluff",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2344-balluff",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Neuhausen auf den Fildern, Germany",
       "lat": 48.683155,
       "lon": 9.277676,
       "src": "https://roboticsconnected.com/companies/2344-balluff"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "120ft",
   "name": "120ft",
   "summary": "Builds modular, containerised microfactories in which humanoid robots assemble, inspect and pack products.",
   "body": "120ft Factory AB provides local robotic assembly, inspection and packing in modular container factories. Small production runs from 100 units, built in Stockholm. Customers keep their product designs and existing component suppliers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2347-120ft",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://120ft.com/"
    },
    "image": {
     "v": "/logos/120ft.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a4b73c7d2b31981e425a995/6a4e0832aeb19e3981110cd7_favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ladugårdsgärdet",
     "src": "https://se.linkedin.com/company/120ft",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://se.linkedin.com/company/120ft",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tullvaktsvägen 21, Ladugårdsgärdet, Stockholm County 115 27, Sweden",
       "lat": 59.339595,
       "lon": 18.119011,
       "src": "https://se.linkedin.com/company/120ft"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lab37",
   "name": "Lab37",
   "summary": "Builds robotics for commercial food preparation.",
   "body": "Robots for better food. Our technology brings profitability, reliability, calm and unthinkable consistency to your food business.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2400-lab37",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lab37.us/"
    },
    "image": {
     "v": "/logos/lab37.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/u8Q5P2udIHePSJsStqioYMqnb4.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://roboticsconnected.com/companies/2400-lab37",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2400-lab37",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://roboticsconnected.com/companies/2400-lab37"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "warp-sciences",
   "name": "Warp Sciences",
   "summary": "Combines expert chemists, AI and robotics to make and test the molecules drug discovery teams need.",
   "body": "Our mission is to help the world discover new medicines faster—and build the capacity to do it here in America. We bring AI, robotics, and life sciences together in automated labs that design, run, and learn from experiments, with each experiment making the next one better. We’re not developing drugs of our own.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2403-warp-sciences",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://warp.xyz/"
    },
    "image": {
     "v": "/logos/warp-sciences.png",
     "fit": "contain",
     "src": "https://warp.xyz/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "South San Francisco",
     "src": "https://roboticsconnected.com/companies/2403-warp-sciences",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2403-warp-sciences",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "South San Francisco, United States",
       "lat": 37.65354,
       "lon": -122.416866,
       "src": "https://roboticsconnected.com/companies/2403-warp-sciences"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "elvio-robotics",
   "name": "Elvio Robotics",
   "summary": "Offers turnkey automation systems for hospitals.",
   "body": "Elvio Robotics is a Munich-based technology company developing turnkey automation systems for hospitals. We combine robotics, software, and infrastructure and process integrations in one central system — from individual use cases to the autonomous hospital.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/2408-elvio-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.elviorobotics.com/"
    },
    "image": {
     "v": "/logos/elvio-robotics.png",
     "fit": "contain",
     "src": "https://elviorobotics.com/favicon/apple-icon-180x180.png?v=20261010",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/2408-elvio-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2408-elvio-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/2408-elvio-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "prefiro",
   "name": "Prefiro",
   "summary": "Karlsruhe-based agtech start-up building ASPIRO, a selective harvesting machine for green asparagus.",
   "body": "Asparagus cost up to 25 euros per kilo this season! This is because, like most specialty crops and vegetables, it is harvested exclusively by hand. At Prefiro, we are the first to automate these processes!",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2415-prefiro",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.prefiro.de/"
    },
    "image": {
     "v": "/logos/prefiro.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/shapes/648689_faf848a4d8524a3f85a0aaba7b165e27.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Karlsruhe",
     "src": "https://de.linkedin.com/company/prefiroprecisionfarming",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/prefiroprecisionfarming",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rintheimer Straße, Karlsruhe, Baden-Württemberg 76131, Germany",
       "lat": 49.010908,
       "lon": 8.424196,
       "src": "https://de.linkedin.com/company/prefiroprecisionfarming"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kc-robotics",
   "name": "KC Robotics",
   "summary": "Robotic systems integrator based in West Chester, Ohio, with roots dating back to 1990.",
   "body": "The company designs, engineers and installs custom automation for manufacturers, proving out each design before it reaches the factory floor. Its core services cover robotic welding, cutting, grinding and finishing, material handling, CNC and injection mould machine tending, and assembly.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/2437-kc-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kcrobotics.com/"
    },
    "image": {
     "v": "/logos/kc-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/7c6476bc-8dea-4dc6-9240-87e18591ec75.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "West Chester",
     "src": "https://roboticsconnected.com/companies/2437-kc-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2437-kc-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "West Chester, United States",
       "lat": 39.959739,
       "lon": -75.604461,
       "src": "https://roboticsconnected.com/companies/2437-kc-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "beewise",
   "name": "Beewise",
   "summary": "Builds the BeeHome, an autonomous robotic beehive that combines computer vision, AI and robotics to monitor and treat bee colonies remotely.",
   "body": "Beekeepers use it to reduce colony loss and improve hive health, while growers buy guaranteed pollination services. The company also runs a Bees for Buildings programme, letting campuses and property owners support bee conservation and measure nature impact.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2439-beewise",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://beewise.ag/"
    },
    "image": {
     "v": "/logos/beewise.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1770895614953525248/j2vwc9lf_400x400.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Ramon",
     "src": "https://roboticsconnected.com/companies/2439-beewise",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2439-beewise",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Ramon, United States",
       "lat": 37.764802,
       "lon": -121.954439,
       "src": "https://roboticsconnected.com/companies/2439-beewise"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "starpilot",
   "name": "Starpilot",
   "summary": "Describes itself as an Applied Robotics Lab, aiming to build physical capabilities beyond what humans can accomplish alone.",
   "body": "Starpilot builds the operating system for the physical world, enabling robots to perform human tasks with deterministic reliability. We combine low-latency teleoperation with advanced data capture to solve the \"last mile\" of automation. Request Data → https://www.starpilot.ai",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2440-starpilot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.starpilot.ai/"
    },
    "image": {
     "v": "/logos/starpilot.png",
     "fit": "contain",
     "src": "https://starpilot.ai/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brooklyn",
     "src": "https://roboticsconnected.com/companies/2440-starpilot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2440-starpilot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brooklyn, United States",
       "lat": 40.652601,
       "lon": -73.949721,
       "src": "https://roboticsconnected.com/companies/2440-starpilot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kovari-industries",
   "name": "Kovari Industries",
   "summary": "Builds intelligent robots for physical businesses.",
   "body": "Kovari Industries is a venture-backed company that builds intelligent machines that take on essential, high-impact work.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2442-kovari-industries",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kovari.com/"
    },
    "image": {
     "v": "/logos/kovari-industries.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1964742350980472832/agaDxJmn_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/2442-kovari-industries",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2442-kovari-industries",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/2442-kovari-industries"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "maven-robotics",
   "name": "Maven Robotics",
   "summary": "Santa Clara startup building general-purpose autonomous robots for industrial work.",
   "body": "Maven Robotics is building the world’s leading general-purpose AI robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2444-maven-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mavenrobotics.ai/"
    },
    "image": {
     "v": "/logos/maven-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/67f7e2da985ab558fd99b78c/67f7e2da985ab558fd99b7b2_Webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://roboticsconnected.com/companies/2444-maven-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2444-maven-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Santa Clara, United States",
       "lat": 37.233325,
       "lon": -121.684635,
       "src": "https://roboticsconnected.com/companies/2444-maven-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "auto-bots",
   "name": "Auto Bots",
   "summary": "Industrial automation and robotics firm based in the Bhosari industrial belt of Pune, India.",
   "body": "We are a leading Automation and Robotics Solutions Provider, dedicated to transforming industries with advanced technology and efficient, cost-effective solutions. Located in the industrial hub of MIDC, Bhosari, Pune, we have been a trusted partner for businesses since 2023.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/2446-auto-bots",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://autobotsltd.com/"
    },
    "image": {
     "v": "/logos/auto-bots.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1933803467249696768/TIwjIVc__400x400.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pune",
     "src": "https://in.linkedin.com/company/auto-bots-pvt-ltd-company",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/auto-bots-pvt-ltd-company",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pavana Industrial Estate, MIDC, Bhosari, Pune, Maharashtra 411026, India",
       "lat": 18.638365,
       "lon": 73.832243,
       "src": "https://in.linkedin.com/company/auto-bots-pvt-ltd-company"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robospecies-technologies",
   "name": "RoboSpecies Technologies",
   "summary": "Indian edtech company that sets up turnkey robotics, coding, AI, STEM and tinkering labs in schools.",
   "body": "As an organization committed to advancing the technical development of our country, RoboSpecies is proud to offer a comprehensive robotic learning program designed to educate young children in the field of robot building and programming.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/2447-robospecies-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robospecies.com/"
    },
    "image": {
     "v": "/logos/robospecies-technologies.png",
     "fit": "contain",
     "src": "https://media.brand.dev/0377341e-fe5d-44d4-ba14-dc8120afe367.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "NOIDA",
     "src": "https://in.linkedin.com/company/robospecies",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/robospecies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "D-66,First Floor, NOIDA, U.P. 201301, India",
       "lat": -33.358163,
       "lon": -70.740907,
       "src": "https://in.linkedin.com/company/robospecies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rivas-robotics",
   "name": "Rivas Robotics",
   "summary": "The trading name of Hurtado & Rivas SL, is a Valencia-based industrial automation and robotics firm with close to 60 years of experience.",
   "body": "Rivas Robotics es la División de Robótica y Automatización Industrial de Grupo Hurtado Rivas. Empresa con más de 50 años de trayectoria radicada en Valencia (España). Especialistas en diseño y construcción de proyectos de automatización y robótica industrial. Soluciones 'llave en mano'​ para múltiples sectores.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/2448-rivas-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rivasrobotics.com/"
    },
    "image": {
     "v": "/logos/rivas-robotics.png",
     "fit": "contain",
     "src": "https://rivasrobotics.com/wp-content/uploads/2024/04/cropped-cropped-favicon-192x192-1-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Picassent",
     "src": "https://es.linkedin.com/company/rivas-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://es.linkedin.com/company/rivas-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Polígono Industrial Suzi, Picassent, Valencia 4220, Spain",
       "lat": 39.363519,
       "lon": -0.461179,
       "src": "https://es.linkedin.com/company/rivas-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botmotics",
   "name": "Botmotics",
   "summary": "Spanish robotics and artificial intelligence company that combines autonomous robots, sensors, data analytics and IoT into what it calls an operational intelligence…",
   "body": "Botmotics is a technology company focused on Service Robotics, Artificial Intelligence, and Actionable Data solutions. We help businesses transform operations through intelligent automation, smart robotic systems, and data-driven decision-making.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2449-botmotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botmotics.com/"
    },
    "image": {
     "v": "/logos/botmotics.png",
     "fit": "contain",
     "src": "https://botmotics.com/wp-content/uploads/2026/07/favicon-botmotics.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Madrid",
     "src": "https://es.linkedin.com/company/botmotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Spain",
     "src": "https://es.linkedin.com/company/botmotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paseo de la Castellana 149, Madrid, Madrid, Community of Madrid, Spain",
       "lat": 40.46032,
       "lon": -3.690473,
       "src": "https://es.linkedin.com/company/botmotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autonomous-teaming",
   "name": "Autonomous Teaming",
   "summary": "Operating as Autonomous Teaming Solutions (ATS GmbH), develops decentralised, mobile and low-cost AI systems that defend against asymmetric, AI-powered threats on land…",
   "body": "Autonomous Teaming Solutions was founded as a European defence technology company to close the gap between how fast autonomous threats develop and the speed at which defence capabilities evolve by creating the foundations for connected, multi-domain operations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2540-autonomous-teaming",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://autonomous-teaming.ai/"
    },
    "image": {
     "v": "/logos/autonomous-teaming.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6ab109d508d518ce040cf0c1/6abe7472b4ffcc623d9f85d7_android-chrome-512x512.png#on-ink",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/2540-autonomous-teaming",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2540-autonomous-teaming",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/2540-autonomous-teaming"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fj-dynamics",
   "name": "FJ Dynamics",
   "summary": "Robotics company focused on digitalization, automation and new energy, building practical and affordable robots for labour-intensive industries.",
   "body": "FJDynamics is a robotics company focused on digitalization, automation, and new energy. We are committed to creating practical and affordable robots for the most labor-intensive industries and using our technology to drive AI adoption across sectors for improved productivity and working environment.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2542-fj-dynamics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fjdynamics.com/"
    },
    "image": {
     "v": "/logos/fj-dynamics.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1740276952630743040/PQFZWT7y_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/fjdynamicsglobal",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/fjdynamicsglobal",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "15 Scotts Road, Singapore, Singapore",
       "lat": 1.307871,
       "lon": 103.832707,
       "src": "https://sg.linkedin.com/company/fjdynamicsglobal"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gsg-robotics",
   "name": "GSG-Robotics",
   "summary": "Full-service provider for industrial robots, focused on ABB and Fanuc systems.",
   "body": "ROBOTIC FULL SERVICE 24/7 Hotline, maintenance, troubleshooting, repairs, programming, spare parts, overhaul or spare parts delivery - our service for your industrial robot is comprehensive! No matter if Fanuc or ABB, we know every screw and make sure that your robots stay in the same shape.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2543-gsg-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gsg-robotics.com/"
    },
    "image": {
     "v": "/logos/gsg-robotics.png",
     "fit": "contain",
     "src": "https://www.gsg-robotics.com/apple-icon-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Marl",
     "src": "https://de.linkedin.com/company/gsg-robotics-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/gsg-robotics-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8 Boschstraße, Marl, North Rhine-Westphalia 45770, Germany",
       "lat": 51.670992,
       "lon": 7.15994,
       "src": "https://de.linkedin.com/company/gsg-robotics-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "skana-robotics",
   "name": "Skana Robotics",
   "summary": "Israeli maritime defence technology company building distributed autonomous naval systems.",
   "body": "We are building the operational backbone for tomorrow’s maritime forces. Skana Robotics delivers mass-produced, software-defined autonomous vessels that enable countries and fleets to be self-sustained through mass deployment.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2546-skana-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.skanarobotics.com/"
    },
    "image": {
     "v": "/logos/skana-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6875d475164002893fd41e8e/6876001bf568f7c05a846365_webclip.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Caesarea",
     "src": "https://il.linkedin.com/company/skana-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/skana-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5 Bareket St., Northern Industrial Park, Caesarea, 3233, Israel",
       "lat": 32.513138,
       "lon": 34.905839,
       "src": "https://il.linkedin.com/company/skana-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotto-ai",
   "name": "Robotto AI",
   "summary": "Danish company building perception and autonomy software for drones and other robotic systems.",
   "body": "Robotto develops and deploys combat-proven autonomy for unmanned systems operating in contested environments. Our vision-based, edge-computing software enables drones to navigate, identify, and engage targets without reliance on GNSS or stable communication.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2547-robotto-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotto.ai/"
    },
    "image": {
     "v": "/logos/robotto-ai.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68400d9c0d5cae7f702bd8a0/68400d9c0d5cae7f702bd8c0_webclip-black.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Aalborg Øst",
     "src": "https://dk.linkedin.com/company/robottoai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/robottoai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Niels Jernes Vej 10, Aalborg Øst, North Jutland 9220, Denmark",
       "lat": 57.012738,
       "lon": 9.988313,
       "src": "https://dk.linkedin.com/company/robottoai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gritt-robotics",
   "name": "Gritt Robotics",
   "summary": "AI and robotics company building infrastructure faster, starting with utility-scale solar construction.",
   "body": "Gritt attaches to common equipment found on construction sites and performs labor-intensive tasks, including pick-and-place, assembly, and transport. Gritt systems are already building critical infrastructure in the harshest outdoor environments, starting with large-scale solar.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2550-gritt-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gritt.ai/"
    },
    "image": {
     "v": "/logos/gritt-robotics.png",
     "fit": "contain",
     "src": "https://www.gritt.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Belmont",
     "src": "https://roboticsconnected.com/companies/2550-gritt-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2550-gritt-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Belmont, United States",
       "lat": 40.005774,
       "lon": -81.009752,
       "src": "https://roboticsconnected.com/companies/2550-gritt-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "automatech-robotik",
   "name": "AutomaTech Robotik",
   "summary": "Builds custom robotic cells that automate production tasks such as CNC loading, screw driving, welding and panel veneering.",
   "body": "Its products are built on Orra, a proprietary robotic management system that powers its equipment. The company was founded in 1997 as a service business and is based in Saint-Apollinaire, Quebec.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2551-automatech-robotik",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.automatechrobotik.com/"
    },
    "image": {
     "v": "/logos/automatech-robotik.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1280874775322206208/pFVG4tLk_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Saint-Apollinaire",
     "src": "https://roboticsconnected.com/companies/2551-automatech-robotik",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/2551-automatech-robotik",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Saint-Apollinaire, Canada",
       "lat": 46.61195,
       "lon": -71.513786,
       "src": "https://roboticsconnected.com/companies/2551-automatech-robotik"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hmi-mbs",
   "name": "HMi-MBS",
   "summary": "French company based in Saint-Martin-d'Abbat, Loiret, with over twenty years of experience in industrial automation.",
   "body": "Qui sommes-nous ? Nous sommes une société avec plus de vingt ans d’expérience qui s’appuie, avant tout, sur la passion et la motivation de ses équipes pour vous proposer des solutions innovantes. En tant qu’Experts, nous vous assistons pour construire votre entreprise du futur.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2552-hmi-mbs",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hmi-mbs.fr/"
    },
    "image": {
     "v": "/logos/hmi-mbs.png",
     "fit": "contain",
     "src": "https://www.hmi-mbs.fr/wp-content/uploads/2024/09/icone-HMI-MBS-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Saint-Martin-d’Abbat",
     "src": "https://fr.linkedin.com/company/hmi-mbs",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/hmi-mbs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "27, Route de Rochevreux, Saint-Martin-d’Abbat, Centre-Val de Loire 45110, France",
       "lat": 47.863956,
       "lon": 2.276429,
       "src": "https://fr.linkedin.com/company/hmi-mbs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "x-laboratory",
   "name": "X Laboratory",
   "summary": "Develops motion control systems for offshore lifting and installation.",
   "body": "At X Laboratory we believe in excellent high-tech products that help transform our society to be more sustainable and ressource efficient. Our robotics products are currently used in the Offshore Renewables Sector to streamline the construction of offshore wind energy.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2557-x-laboratory",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://deltaxlab.com/"
    },
    "image": {
     "v": "/logos/x-laboratory.png",
     "fit": "contain",
     "src": "https://deltaxlab.com/assets/icons/Favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rotterdam",
     "src": "https://nl.linkedin.com/company/x-laboratory",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://nl.linkedin.com/company/x-laboratory",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Scheepsbouwweg 8, Rotterdam, Zuid-Holland 3089JW, Netherlands",
       "lat": 51.897646,
       "lon": 4.418447,
       "src": "https://nl.linkedin.com/company/x-laboratory"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "machenta",
   "name": "Machenta",
   "summary": "London-based frontier AI company building a robot foundation model for instant robot learning.",
   "body": "Its model learns a new task from a single demonstration, with no further training and no real-world training data. The approach relies on simulation-only training, so robots can learn new tasks quickly rather than after days or weeks of post-training on task-specific demonstrations.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/2559-machenta",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://machenta.com/"
    },
    "image": {
     "v": "/logos/machenta.png",
     "fit": "contain",
     "src": "https://machenta.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/2559-machenta",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/2559-machenta",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/2559-machenta"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "siléane",
   "name": "Siléane",
   "summary": "Builds adaptive robots combining vision, artificial intelligence and automation.",
   "body": "Siléane was created in 2002. We are specialists of robotics and vision. We automate the human gestures in any given situation with a view to improving productivity within industrial, environmental, or food industry applications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2636-sileane",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sileane.com/"
    },
    "image": {
     "v": "/logos/siléane.png",
     "fit": "contain",
     "src": "https://www.sileane.com/wp-content/uploads/2024/02/cropped-DoubleVirgule-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Saint Étienne",
     "src": "https://fr.linkedin.com/company/sileane",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/sileane",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "17 Rue Descartes, Saint Étienne, Loire 42000, France",
       "lat": 45.450837,
       "lon": 4.416446,
       "src": "https://fr.linkedin.com/company/sileane"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stratom",
   "name": "Stratom",
   "summary": "Louisville, Colorado company building autonomous and robotic systems for defence customers.",
   "body": "Stratom is a global leader in the development of unmanned ground vehicles and autonomous robotic systems that solve the most pressing real-world logistics and operational challenges for commercial and defense applications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2646-stratom",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://stratom.com/"
    },
    "image": {
     "v": "/logos/stratom.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1347640600900747266/WCKC7_ix_400x400.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Louisville",
     "src": "https://www.linkedin.com/company/stratominc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/stratominc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "331 S 104th St, Louisville, Colorado 80027, United States",
       "lat": 39.966704,
       "lon": -105.109459,
       "src": "https://www.linkedin.com/company/stratominc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "parametric",
   "name": "Parametric",
   "summary": "Builds Bit, a manipulation robot that learns repetitive work such as box assembly, packing out, taping and folding.",
   "body": "Modern robots perform complex tasks but operate as black boxes. Operators can't understand their decision-making or predict when they may fail. This uncertainty gates widespread adoption across countless industries where errors are unacceptable.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2649-parametric",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.parametric.company/"
    },
    "image": {
     "v": "/logos/parametric.png",
     "fit": "contain",
     "src": "https://parametric.company/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/parametric-pbc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/parametric-pbc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2261 Market St, San Francisco, California 94114, United States",
       "lat": 37.76475,
       "lon": -122.432024,
       "src": "https://www.linkedin.com/company/parametric-pbc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sepro-group",
   "name": "Sepro Group",
   "summary": "Designs Cartesian robots and automation systems for injection moulding machines, helping plastics processors load, unload and handle parts with precision.",
   "body": "Founded in 1973, SEPRO was one of the first companies in the world to develop Cartesian CNC robots for injection molding machines.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2653-sepro-group",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sepro-group.com/"
    },
    "image": {
     "v": "/logos/sepro-group.png",
     "fit": "contain",
     "src": "https://media.brand.dev/92ce60c2-89c0-4962-a685-d1eff29aefeb.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "La Roche sur Yon cedex",
     "src": "https://fr.linkedin.com/company/seprogroup",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/seprogroup",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rue Henry Bessemer Zone Acti Est CS 10084, La Roche sur Yon cedex, 85003, France",
       "lat": 46.23373,
       "lon": 5.353878,
       "src": "https://fr.linkedin.com/company/seprogroup"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "centelon-robotics",
   "name": "Centelon Robotics",
   "summary": "Designs and deploys intelligent automation systems that sense, learn and act, combining IoT sensing, robotics and software.",
   "body": "It is part of the wider Centelon Group, a diversified technology enterprise with a presence in Australia and India. Its product line includes Cento, a humanoid robot for customer engagement and citizen services, along with smart waste rovers, automated guided vehicles such as the CL200 AGV, and an IoT ecosystem of pre-configured sensors.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2654-centelon-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://centelonrobotics.tech/"
    },
    "image": {
     "v": "/logos/centelon-robotics.png",
     "fit": "contain",
     "src": "https://centelonrobotics.tech/wp-content/uploads/2025/08/Centelonrobotics-fav-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Melbourne",
     "src": "https://roboticsconnected.com/companies/2654-centelon-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://roboticsconnected.com/companies/2654-centelon-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Melbourne, Australia",
       "lat": -37.814245,
       "lon": 144.963173,
       "src": "https://roboticsconnected.com/companies/2654-centelon-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dynamic-creatures",
   "name": "Dynamic Creatures",
   "summary": "Designs mobile, interactive character robots for hospitality and entertainment venues.",
   "body": "Dynamic Creatures designs and builds interactive character robots for the world’s leading entertainment and hospitality brands.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2719-dynamic-creatures",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dynamiccreatures.com/"
    },
    "image": {
     "v": "/logos/dynamic-creatures.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/6b0b63_8297d508ea9a421ba5e07b713ce3c038%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/6b0b63_8297d508ea9a421ba5e07b713ce3c038%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.linkedin.com/company/dynamiccreatures",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/dynamiccreatures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "130 Bishop Allen Drive, Cambridge, MA 02139, United States",
       "lat": 42.366437,
       "lon": -71.103593,
       "src": "https://www.linkedin.com/company/dynamiccreatures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "one-off-robotics",
   "name": "One Off Robotics",
   "summary": "Builds robotic metal additive manufacturing systems, including the Monarc production wire arc additive manufacturing platform and the field-deployable Nomad system.",
   "body": "One-Off Robotics is a Chattanooga, Tennessee based advanced equipment manufacturer designing and building the world’s most innovative Robotic Metal Additive Manufacturing systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2723-one-off-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://oneoffrobotics.com/"
    },
    "image": {
     "v": "/logos/one-off-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/b0de489d-4173-4f21-842b-b45231e7977b.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chattanooga",
     "src": "https://roboticsconnected.com/companies/2723-one-off-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2723-one-off-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chattanooga, United States",
       "lat": 35.045722,
       "lon": -85.309488,
       "src": "https://roboticsconnected.com/companies/2723-one-off-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "remotics",
   "name": "Remotics",
   "summary": "Nearshored Physical AI operations company serving North American robotics companies.",
   "body": "Remotics is revolutionizing robotics. We empower your physical AI systems with expert teleoperations and high-volume data collection, bridging the gap between innovation and scalable deployment of service and quality.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2724-remotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://remotics.io/"
    },
    "image": {
     "v": "/logos/remotics.png",
     "fit": "contain",
     "src": "https://remotics.io/wp-content/uploads/2026/10/icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/remotics-io",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/remotics-io",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "548 Market St, San Francisco, California 94104, United States",
       "lat": 37.789993,
       "lon": -122.400849,
       "src": "https://www.linkedin.com/company/remotics-io"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ocean-aero",
   "name": "Ocean Aero",
   "summary": "Builds the TRITON, an autonomous underwater and surface vehicle powered by wind and solar energy.",
   "body": "The world’s only wind and solar-powered autonomous underwater and surface vehicle (AUSV) designed for long-range, persistent ocean missions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2725-ocean-aero",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.oceanaero.com/"
    },
    "image": {
     "v": "/logos/ocean-aero.png",
     "fit": "contain",
     "src": "https://media.brand.dev/6e82d1ba-12cf-470f-b781-3bde59953cc6.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gulfport",
     "src": "https://roboticsconnected.com/companies/2725-ocean-aero",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2725-ocean-aero",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gulfport, United States",
       "lat": 30.36742,
       "lon": -89.092816,
       "src": "https://roboticsconnected.com/companies/2725-ocean-aero"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "reblade",
   "name": "Reblade",
   "summary": "Develops drone-based and automated robotic systems for repairing leading edge erosion on wind turbine blades.",
   "body": "We are currently open for delivering drone-based leading edge erosion repair technology to repair campaigns planned and executed in 2026 and 2027. Our automated and drone-based solution is designed for onshore and offshore wind, as well for ease of use by regular service teams.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2727-reblade",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://reblade.dk/"
    },
    "image": {
     "v": "/logos/reblade.png",
     "fit": "contain",
     "src": "https://reblade.dk/assets/favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mørke",
     "src": "https://dk.linkedin.com/company/reblade",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/reblade",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Industrivej 8, Mørke, Middle Jutland 8544, Denmark",
       "lat": 56.334562,
       "lon": 10.377531,
       "src": "https://dk.linkedin.com/company/reblade"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "softgripping",
   "name": "SoftGripping",
   "summary": "Develops modular, pneumatically powered soft grippers and actuators for material handling.",
   "body": "SoftGripping develops and produces elastic grippers for material handling.The pneumatically powered elastic gripper allow easy, robust and very light designs. Soft and adaptive surfaces are ideal for fault-tolerant handling and a safe collaboration with humans.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2730-softgripping",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://soft-gripping.com/"
    },
    "image": {
     "v": "/logos/softgripping.png",
     "fit": "contain",
     "src": "https://enkktbdexrt.exactdn.com/assets/Logo_ohne_schrift.png?strip=all&resize=180%2C180",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hannover",
     "src": "https://roboticsconnected.com/companies/2730-softgripping",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2730-softgripping",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hannover, Germany",
       "lat": 52.374478,
       "lon": 9.738553,
       "src": "https://roboticsconnected.com/companies/2730-softgripping"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tecnorobot-srl",
   "name": "TECNOROBOT S.R.L.",
   "summary": "Designs, builds and integrates tailor-made robotic systems, centred on robotic welding and cutting cells for industrial customers.",
   "body": "Its solutions combine offline programming, machine vision, custom software and Industry 4.0 connectivity, with systems built around Fanuc robots. The company offers engineering, software, service and spare parts support, and it runs training and a collaborative robot line called TRCOBOT.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2732-tecnorobot-s-r-l",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tecnorobot.com/"
    },
    "image": {
     "v": "/logos/tecnorobot-srl.png",
     "fit": "contain",
     "src": "https://www.tecnorobot.com/wp-content/uploads/2024/03/cropped-favicon-32x32-1-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sulbiate",
     "src": "https://roboticsconnected.com/companies/2732-tecnorobot-s-r-l",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://roboticsconnected.com/companies/2732-tecnorobot-s-r-l",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sulbiate, Italy",
       "lat": 45.633999,
       "lon": 9.420684,
       "src": "https://roboticsconnected.com/companies/2732-tecnorobot-s-r-l"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ant-robotics",
   "name": "ANT Robotics",
   "summary": "Builds autonomous robots for special crop cultivation.",
   "body": "The growing population and climate change are putting pressure on agriculture. In addition, vegetable and fruit harvesting is very Labor intensive and farmers have been suffering from shortage of Labor for several years. Ant robotics is developing a collaborative robot platform for this purpose.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2733-ant-robotics-gmbh",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.antrobotics.de/"
    },
    "image": {
     "v": "/logos/ant-robotics.png",
     "fit": "contain",
     "src": "https://www.antrobotics.de/wp-content/uploads/2024/07/cropped-Ant-Robotics-Favicon-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hamburg",
     "src": "https://de.linkedin.com/company/ant-robotics-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/ant-robotics-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Adolf-Wagner-Straße 16, Hamburg, 21073, Germany",
       "lat": 53.456022,
       "lon": 9.961926,
       "src": "https://de.linkedin.com/company/ant-robotics-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bleu-robotics",
   "name": "Bleu Robotics",
   "summary": "Paris-based company building AI software that lets humanoid robots perform manual tasks on factory lines.",
   "body": "Bleu Robotics is an AI robotic company, forged on the shop floor. We develop the first AI software to effectively deploy advanced robots into factories, shop floors, warehouses.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2734-bleu-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bleu-robotics.com/"
    },
    "image": {
     "v": "/logos/bleu-robotics.png",
     "fit": "contain",
     "src": "https://bleu-robotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://fr.linkedin.com/company/bleu-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/bleu-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rue Soleillet, Paris, Île-de-France 75020, France",
       "lat": 48.865767,
       "lon": 2.391969,
       "src": "https://fr.linkedin.com/company/bleu-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "diden-robotics",
   "name": "Diden Robotics",
   "summary": "Builds Physical AI for real industrial sites, designing its legged robot platforms and core technology in-house.",
   "body": "Diden Robotics builds Physical AI for industrial sites. Founded in March 2024 by four alumni of KAIST’s Humanoid Robot Research Center, we design everything that moves our robots in-house, from actuators to AI.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2735-diden-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.didenrobotics.com/"
    },
    "image": {
     "v": "/logos/diden-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/6KuAp5PXmzOHGhDGU2zvJXM3HZs.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://kr.linkedin.com/company/diden-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/diden-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "49 Achasan-ro 17-gil, Seongdong-gu, Seoul, 04799, South Korea",
       "lat": 37.546732,
       "lon": 127.06527,
       "src": "https://kr.linkedin.com/company/diden-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dafang-ai",
   "name": "DaFang AI",
   "summary": "Singapore-registered maker of autonomous building construction robots, with engineering and manufacturing operations in Dongguan, China.",
   "body": "DAFANG AI PTE. LTD focus to design, develop, and manufacture building construction AI Robots, which based on intelligent construction, low-speed self-driving, and machine vision, providing automation building surface finishing services to customers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2787-dafang-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dafang.ai/"
    },
    "image": {
     "v": "/logos/dafang-ai.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1502126718928429059/8aj6mybe_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://roboticsconnected.com/companies/2787-dafang-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://roboticsconnected.com/companies/2787-dafang-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Singapore, Singapore",
       "lat": 1.289918,
       "lon": 103.851907,
       "src": "https://roboticsconnected.com/companies/2787-dafang-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "upside-robotics",
   "name": "Upside Robotics",
   "summary": "Builds solar-powered, autonomous field robots that deliver nitrogen and other nutrients to corn in small, precise doses.",
   "body": "Upside Robotics develops and deploys autonomous, AI-enabled field robots that help corn growers apply nutrients when and where crops need them.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2791-upside-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://upsiderobotics.com/"
    },
    "image": {
     "v": "/logos/upside-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/oJlLSED0L946lIu1kEIXmgfqIc.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Waterloo",
     "src": "https://roboticsconnected.com/companies/2791-upside-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://roboticsconnected.com/companies/2791-upside-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Waterloo, Canada",
       "lat": 43.46527,
       "lon": -80.522296,
       "src": "https://roboticsconnected.com/companies/2791-upside-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "air6-systems-airborne-robotics",
   "name": "AIR6 SYSTEMS | AIRBORNE ROBOTICS",
   "summary": "Designs and manufactures high-performance drones (UAVs) capable of carrying payloads of up to 10 kg.",
   "body": "AIR6 SYSTEMS is a developer and manufacturer of enterprise drones. The Company manufactures high-performance turnkey drone systems for industrial and government applications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2863-air6-systems-airborne-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.air6systems.com/"
    },
    "image": {
     "v": "/logos/air6-systems-airborne-robotics.png",
     "fit": "contain",
     "src": "https://www.air6systems.com/wp-content/uploads/2021/05/cropped-Profile-Picture3-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Klagenfurt am Wörthersee",
     "src": "https://at.linkedin.com/company/air6-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "Austria",
     "src": "https://at.linkedin.com/company/air6-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pharmaziegasse 5, Klagenfurt am Wörthersee, Kärnten 9020, Austria",
       "lat": 46.611843,
       "lon": 14.341498,
       "src": "https://at.linkedin.com/company/air6-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "synapse-robotics",
   "name": "Synapse Robotics",
   "summary": "Turnkey robotics systems integrator based in Coimbatore, India.",
   "body": "Synapse Robotics is an innovative industrial automation and robotics solutions company. Our out of the box ideas, combined with a very strong mechanical and controls team helps us deliver reliable, safe and optimal solutions. We also have experienced technicians for fabrication and assembly.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/2866-synapse-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://synapserobotics.in/"
    },
    "image": {
     "v": "/logos/synapse-robotics.png",
     "fit": "contain",
     "src": "https://synapserobotics.in/wp-content/uploads/2024/08/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "coimbatore",
     "src": "https://in.linkedin.com/company/synapserobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/synapserobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "410 / 2 , Tex park road, NehrunagarWest,, coimbatore, TAMILNADU 641014, India",
       "lat": 11.001812,
       "lon": 76.962842,
       "src": "https://in.linkedin.com/company/synapserobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "servo-robot",
   "name": "SERVO-ROBOT",
   "summary": "Builds 3D laser-vision and sensing systems that guide industrial welding robots.",
   "body": "For over 40 years, SERVO-ROBOT has been producing robotic laser vision and sensing systems for welding and robotic automated manufacturing.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2867-servo-robot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://servo-robot.com/"
    },
    "image": {
     "v": "/logos/servo-robot.png",
     "fit": "contain",
     "src": "https://media.brand.dev/6eba2a1f-8f38-4e64-ba6d-f4d78ff6cc5c.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Saint-Bruno-de-Montarville",
     "src": "https://ca.linkedin.com/company/servo-robot-inc-",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/servo-robot-inc-",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1370 Hocquart, Saint-Bruno-de-Montarville, Québec J3V 6E1, Canada",
       "lat": 45.520573,
       "lon": -73.358863,
       "src": "https://ca.linkedin.com/company/servo-robot-inc-"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tpc-robotics",
   "name": "TPC Robotics",
   "summary": "South Korean factory automation manufacturer founded in 1973, best known as the country's leading maker of pneumatic equipment.",
   "body": "Its core range covers cylinders, valves, air preparation units and other pneumatic components used across automated production lines. The company also sells motion control products such as servo and step motors, linear motors and electric actuators.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/2870-tpc-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://company.tpcrobotics.com/"
    },
    "image": {
     "v": "/logos/tpc-robotics.png",
     "fit": "contain",
     "src": "https://www.tpcrobotics.com/data/base/favicon.ico#on-ink",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://roboticsconnected.com/companies/2870-tpc-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://roboticsconnected.com/companies/2870-tpc-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://roboticsconnected.com/companies/2870-tpc-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bigwave-robotics",
   "name": "BIGWAVE ROBOTICS",
   "summary": "Seoul-based industrial physical AI company that positions itself as a system integrator for factory and logistics automation.",
   "body": "My Robot Solution (MRS) is the largest robotics automation solution platform in Korea. You can select the best robotics solution from the largest solution database, and get a free consultation from robotics experts.",
   "data": {
    "roles": {
     "v": [
      "Integrator",
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2871-bigwave-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bigwaverobotics.com/"
    },
    "image": {
     "v": "/logos/bigwave-robotics.png",
     "fit": "contain",
     "src": "https://cdn.imweb.me/thumbnail/20250108/07b21f125815a.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://roboticsconnected.com/companies/2871-bigwave-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://roboticsconnected.com/companies/2871-bigwave-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://roboticsconnected.com/companies/2871-bigwave-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "launchpad-build-ai",
   "name": "Launchpad Build AI",
   "summary": "Combines its Manufacturing Language Model (MLM) with advanced robotics to speed up the design and deployment of industrial automation.",
   "body": "Launchpad Build AI was founded in 2020 to reimagine manufacturing and revitalize local economies. The company combines its world-first Manufacturing Language Model (MLM™) with advanced robotics to accelerate the design and deployment of automation systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2873-launchpad-build-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://launchpadbuild.ai/"
    },
    "image": {
     "v": "/logos/launchpad-build-ai.png",
     "fit": "contain",
     "src": "https://launchpadbuild.ai/wp-content/uploads/2022/12/Launchpad-AI-black-red-logo-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "El Segundo",
     "src": "https://www.linkedin.com/company/launchpadbuildai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/launchpadbuildai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1330 E Franklin Ave, El Segundo, California 90245, United States",
       "lat": 33.917649,
       "lon": -118.401576,
       "src": "https://www.linkedin.com/company/launchpadbuildai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mova",
   "name": "MOVA",
   "summary": "Designs AI-powered smart home and outdoor appliances.",
   "body": "Its catalogue spans robot vacuums, robot lawn mowers, pool cleaners, window cleaning robots, wet and dry vacuums, personal care devices, kitchen appliances, pet care products and air purifiers. The company presents itself as a premium AI smart living brand, organising its range around six scenarios: home cleaning, smart outdoor, personal care, kitchen appliances, pet care and air purification.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2876-mova",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mova.tech/"
    },
    "image": {
     "v": "/logos/mova.png",
     "fit": "contain",
     "src": "https://www.mova.tech/cdn/shop/files/MOVA_LOGO_f4a43962-86b7-40b4-a4b1-857777ed89b2.png?v=1765937681",
     "asof": "2026-11"
    },
    "city": {
     "v": "Suzhou",
     "src": "https://roboticsconnected.com/companies/2876-mova",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://roboticsconnected.com/companies/2876-mova",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Suzhou, China",
       "lat": 31.311123,
       "lon": 120.621288,
       "src": "https://roboticsconnected.com/companies/2876-mova"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "innok-robotics",
   "name": "Innok Robotics",
   "summary": "Builds autonomous mobile robots (AMRs) for indoor, outdoor and multiterrain use, pairing its own vehicle hardware with in-house software.",
   "body": "Innok Robotics, based in Regenstauf (north of Regensburg), has been one of the technology and market leaders in highly innovative ‘autonomous mobile robots’ (AMRs) since 2012.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2881-innok-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.innok-robotics.de/"
    },
    "image": {
     "v": "/logos/innok-robotics.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1574194695068127232/xQC1THw7_400x400.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Regenstauf",
     "src": "https://de.linkedin.com/company/innok-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/innok-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bahnweg 4, Regenstauf, Bayern 93128, Germany",
       "lat": 49.116382,
       "lon": 12.124337,
       "src": "https://de.linkedin.com/company/innok-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ross-robotics",
   "name": "Ross Robotics",
   "summary": "Builds the EXTRM, an autonomous robotic platform that inspects and monitors high-voltage assets around the clock, including inside live HVDC valve halls and DC halls.",
   "body": "Ross Robotics develops, deploys and supports autonomous robotic systems with smart sensors and AI-powered analytics and insights for global high-voltage energy transmission operators for remote condition monitoring of critical national infrastructure assets.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2883-ross-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ross-robotics.co.uk/"
    },
    "image": {
     "v": "/logos/ross-robotics.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1382966301442908166/MMNi9LjM_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Reading",
     "src": "https://uk.linkedin.com/company/ross-robotics-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://uk.linkedin.com/company/ross-robotics-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1 Cremyll Road, Reading, England RG1 8NQ, United Kingdom",
       "lat": 51.46325,
       "lon": -0.982467,
       "src": "https://uk.linkedin.com/company/ross-robotics-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mesh-robotic-construction",
   "name": "MESH - Robotic Construction",
   "summary": "Builds robotic systems and software for automating rebar fabrication in construction.",
   "body": "MESH AG develops robotic automation and intuitive software for rebar fabrication and precast concrete production. We connect digital design with physical production, helping manufacturers address labour shortages, improve workplace safety, and increase productivity.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2898-mesh-robotic-construction",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mesh.ch/"
    },
    "image": {
     "v": "/logos/mesh-robotic-construction.png",
     "fit": "contain",
     "src": "https://www.datocms-assets.com/67316/1655726677-favicon.png?auto=format&h=192&w=192",
     "asof": "2026-11"
    },
    "city": {
     "v": "Birr",
     "src": "https://ch.linkedin.com/company/meshag",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/meshag",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Halle 4/2, Zentralstrasse 40, Birr, 5242, Switzerland",
       "lat": 47.437042,
       "lon": 8.21265,
       "src": "https://ch.linkedin.com/company/meshag"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agreenculture",
   "name": "AgreenCulture",
   "summary": "Toulouse-based company building autonomy and safety systems for agricultural machinery and tractors.",
   "body": "Agreenculture is a French company that designs, develops and produces autonomous solutions for the agricultural world. Agriculture is an expertise that continually rethinks itself to offer the best to consumers, through more sustainable and virtuous practices.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2899-agreenculture",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.agreenculture.fr/"
    },
    "image": {
     "v": "/logos/agreenculture.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/689243_da2cdd156b324eb08b2ec8a6c96a2e7f%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/689243_da2cdd156b324eb08b2ec8a6c96a2e7f%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toulouse",
     "src": "https://fr.linkedin.com/company/agreenculture",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/agreenculture",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "20, Avenue Didier Daurat, Toulouse, Occitanie 31400, France",
       "lat": 43.569143,
       "lon": 1.491271,
       "src": "https://fr.linkedin.com/company/agreenculture"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "palatial-platforms",
   "name": "Palatial Platforms",
   "summary": "Builds a cloud platform that generates physically accurate, simulation-ready 3D assets and scenes for robotics.",
   "body": "Palatial brings reality into every stage of robot development. Simulation is how robots learn before they touch the real world — but building accurate, validated simulations is slow, manual work, and that gap is the main reason sim is not yet ubiquitous in robotics. Palatial closes that gap.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2900-palatial-platforms",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://palatial.cloud/"
    },
    "image": {
     "v": "/logos/palatial-platforms.png",
     "fit": "contain",
     "src": "https://palatial.cloud/favicon-on-light.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/palatialsim",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/palatialsim",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "450 Bryant Street, San Francisco, California 94107, United States",
       "lat": 37.782143,
       "lon": -122.39495,
       "src": "https://www.linkedin.com/company/palatialsim"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "electrans-technologies",
   "name": "Electrans Technologies",
   "summary": "Designs hybrid-electric drive and autonomous-ready vehicle systems for commercial trucking.",
   "body": "We build robotics, vehicle interface technology, and autonomous infrastructure that simplify how commercial vehicles connect, operate, and move through industrial environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2901-electrans-technologies",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://electranstech.com/"
    },
    "image": {
     "v": "/logos/electrans-technologies.png",
     "fit": "contain",
     "src": "https://media.brand.dev/6716a3a4-d8dc-41c3-85f5-ad0188e02251.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Oakville",
     "src": "https://ca.linkedin.com/company/electrans-technologies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/electrans-technologies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2109 Wyecroft Rd, Oakville, Ontario L6L 5L7, Canada",
       "lat": 43.418831,
       "lon": -79.725276,
       "src": "https://ca.linkedin.com/company/electrans-technologies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "anadolu-robotik",
   "name": "Anadolu Robotik",
   "summary": "Builds unmanned underwater and surface vehicles, including remotely operated vehicles (ROVs) such as the ARGON series and the ARIDA unmanned surface vessel.",
   "body": "Firmamız, 2021 yılında, Erciyes Teknopark’ta kuruldu. Bu adım, ülkemizin teknolojik ilerlemesine ve insansız sistemler alanındaki başarılarına katkı yapma hedefimizin başlangıcı oldu. Kocaeli Gölcük'te bulunan fabrikamızda kurduğumuz altyapı sayesinde kritik insansız deniz sistemlerin üretimine devam etmekteyiz.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2903-anadolu-robotik",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.anadolurobotik.com/"
    },
    "image": {
     "v": "/logos/anadolu-robotik.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.anadolurobotik.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kocaeli",
     "src": "https://tr.linkedin.com/company/anadolu-robotik",
     "asof": "2026-11"
    },
    "country": {
     "v": "Turkey",
     "src": "https://tr.linkedin.com/company/anadolu-robotik",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sepetlipınar, Gelincik Sk. A blok No:19/1, 41275, Kocaeli, Başiskele, Turkey",
       "lat": 40.702057,
       "lon": 29.879404,
       "src": "https://tr.linkedin.com/company/anadolu-robotik"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sky-tag-robotics",
   "name": "Sky-Tag Robotics",
   "summary": "Penang-based automation solutions provider founded in 2005, operating as SKY-TAG Robotics Sdn Bhd.",
   "body": "We specialise in providing high-end Automated Manufacturing Machinery in terms of functionality precision, quality services, cost-effectiveness and timely delivery.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2938-sky-tag-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sky-tag.com/"
    },
    "image": {
     "v": "/logos/sky-tag-robotics.png",
     "fit": "contain",
     "src": "https://www.sky-tag.com/wp-content/uploads/2018/07/sky-tag-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bandar Cassia",
     "src": "https://my.linkedin.com/company/sky-tag-robotics-sdn-bhd",
     "asof": "2026-11"
    },
    "country": {
     "v": "Malaysia",
     "src": "https://my.linkedin.com/company/sky-tag-robotics-sdn-bhd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No.5, Jalan Cassia Selatan 3/2, Bandar Cassia, Penang 14100, Malaysia",
       "lat": 5.254309,
       "lon": 100.438141,
       "src": "https://my.linkedin.com/company/sky-tag-robotics-sdn-bhd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "revel-robotics",
   "name": "Revel Robotics",
   "summary": "Humanoid robotics company that turns skilled human work into robot intelligence.",
   "body": "Its Neural Gambit forearm sleeve captures the force, movement and intent behind expert work, and its RAI system learns from that data to drive the Genesis humanoid. The company aims to help manufacturers keep hard-won expertise while filling essential jobs that go unstaffed.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2991-revel-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://revelrobotics.com/"
    },
    "image": {
     "v": "/logos/revel-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a78cf05c5fe5f5bfb8d506b/6a7ac331f638198a0ead51f7_revelstudiosinc_logo%201.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Prague",
     "src": "https://roboticsconnected.com/companies/2991-revel-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Czech Republic",
     "src": "https://roboticsconnected.com/companies/2991-revel-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Prague, Czech Republic",
       "lat": 50.087465,
       "lon": 14.421254,
       "src": "https://roboticsconnected.com/companies/2991-revel-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "swarmer",
   "name": "Swarmer",
   "summary": "Defence technology company building vendor-agnostic software that lets one operator control hundreds of autonomous platforms in real time.",
   "body": "Its platform coordinates drones, uncrewed surface vessels, ground vehicles and stationary launchers within a single swarm. The technology was born from combat operations in Ukraine, where it was first deployed in April 2024 and has since flown more than 100,000 missions.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2992-swarmer",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://getswarmer.com/"
    },
    "image": {
     "v": "/logos/swarmer.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/2052706867734814724/e7_3mXqm_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://roboticsconnected.com/companies/2992-swarmer",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/2992-swarmer",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://roboticsconnected.com/companies/2992-swarmer"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robolinq",
   "name": "Robolinq",
   "summary": "Distribution and deployment partner that brings service robots from leading manufacturers to businesses across Europe.",
   "body": "Robolinq is the strategic distribution partner for service robot manufacturers seeking to enter or scale in the DACH and Central & Eastern European markets. One partnership. 12 countries. 200+ million end-users.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2994-robolinq",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robolinq.io/"
    },
    "image": {
     "v": "/logos/robolinq.png",
     "fit": "contain",
     "src": "https://robolinq.io/favicon-64.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://roboticsconnected.com/companies/2994-robolinq",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2994-robolinq",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://roboticsconnected.com/companies/2994-robolinq"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eternal-robotics",
   "name": "Eternal Robotics",
   "summary": "Builds AI-powered computer vision and robotics systems for industrial operations.",
   "body": "Eternal Robotics is a pioneering technology solutions provider at the forefront of innovation in robotics, artificial intelligence (AI), and automation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2995-eternal-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://eternalrobotics.com/"
    },
    "image": {
     "v": "/logos/eternal-robotics.png",
     "fit": "contain",
     "src": "https://eternalrobotics.com/wp-content/uploads/2023/09/Eternal-Robotics-List-Icon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hyderabad",
     "src": "https://in.linkedin.com/company/eternal-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/eternal-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Raghavendra Colony, Kondapur, Hyderabad, Telangana, Hyderabad, Telangana  500084, India",
       "lat": 17.471985,
       "lon": 78.362273,
       "src": "https://in.linkedin.com/company/eternal-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vetaion",
   "name": "Vetaion",
   "summary": "Munich-area startup building a fully automated production facility for control cabinets (Schaltschränke).",
   "body": "Vetaion is an AI-native manufacturer of control cabinets with highly automated production starting from batch size 1, supporting the Mittelstand mechanical and plant engineering sector. The production relies on our own operating system for controlling production and administrative tasks.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2996-vetaion",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.vetaion.com/"
    },
    "image": {
     "v": "/logos/vetaion.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6aeaee4581ad2fe119a5f0ce/6af1777d42acd2530bd1b245_Favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Garching bei München",
     "src": "https://roboticsconnected.com/companies/2996-vetaion",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/2996-vetaion",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Garching bei München, Germany",
       "lat": 48.251388,
       "lon": 11.650966,
       "src": "https://roboticsconnected.com/companies/2996-vetaion"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flybotix",
   "name": "Flybotix",
   "summary": "Builds the ASIO X, a drone designed for inspecting confined spaces such as sewers, penstocks, tunnels and tanks.",
   "body": "Flybotix | Redefining Industrial Inspection with Collision-Tolerant Drones Flybotix is a pioneering Swiss startup specializing in the development of collision-tolerant drones for industrial inspection applications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2997-flybotix",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.flybotix.com/"
    },
    "image": {
     "v": "/logos/flybotix.png",
     "fit": "contain",
     "src": "https://www.flybotix.com/wp-content/uploads/2024/06/cropped-FAVICON-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Renens",
     "src": "https://ch.linkedin.com/company/flybotix",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/flybotix",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rue de Lausanne 64, Renens, Vaud 1020, Switzerland",
       "lat": 46.532061,
       "lon": 6.592358,
       "src": "https://ch.linkedin.com/company/flybotix"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "idealworks",
   "name": "idealworks",
   "summary": "Munich-based robotics and intralogistics company that builds autonomous mobile robots, fleet orchestration software and simulation tools.",
   "body": "Idealworks transforms industrial operations into efficient, fully automated environments where logistics, robotics, software, and people work seamlessly together.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/2998-idealworks-gmbh",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.idealworks.com/"
    },
    "image": {
     "v": "/logos/idealworks.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1329048363015266304/3c2Yl6cU_400x400.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/idealworks-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/idealworks-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Riesstraße 22, Munich, Bavaria 80992, Germany",
       "lat": 48.178985,
       "lon": 11.538103,
       "src": "https://de.linkedin.com/company/idealworks-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sabanto",
   "name": "Sabanto",
   "summary": "Makes an aftermarket autonomy retrofit kit that converts existing tractors into autonomous machines for field operations such as mowing, roto-tilling, rolling, aerating…",
   "body": "We are insanely devoted to building never-before-attempted, head-turning agriculture solutions to make the next generation farmer.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/2999-sabanto",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sabantoag.com/"
    },
    "image": {
     "v": "/logos/sabanto.png",
     "fit": "contain",
     "src": "https://sabantoag.com/wp-content/uploads/2023/07/cropped-sabanto-favicon-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chicago",
     "src": "https://www.linkedin.com/company/sabanto",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/sabanto",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "965 W Chicago Ave, Chicago, Illinois 60642, United States",
       "lat": 41.89605,
       "lon": -87.65205,
       "src": "https://www.linkedin.com/company/sabanto"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "svt-robotics",
   "name": "SVT Robotics",
   "summary": "Builds SOFTBOT, a software platform that connects industrial systems such as warehouse management software, robots and automation equipment through a standardised…",
   "body": "SVT Robotics is a software provider that helps organizations integrate, optimize, and scale industrial software, hardware, and enterprise applications with the data infrastructure required to power enterprise and physical AI.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3002-svt-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.svtrobotics.com/"
    },
    "image": {
     "v": "/logos/svt-robotics.png",
     "fit": "contain",
     "src": "https://www.svtrobotics.com/wp-content/uploads/2023/11/cropped-favicon-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Norfolk",
     "src": "https://www.linkedin.com/company/svt-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/svt-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "730 W 20th St, Norfolk, Virginia 23517, United States",
       "lat": 36.869922,
       "lon": -76.295156,
       "src": "https://www.linkedin.com/company/svt-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "beyond-vision",
   "name": "Beyond Vision",
   "summary": "Portuguese drone manufacturer founded in 2013 and based in Alverca do Ribatejo, near Lisbon.",
   "body": "Beyond Vision is a leading European company in dual-use advanced unmanned aerial vehicle (UAV) technology and Artificial Intelligence (AI) algorithms, seeking to bring to life a new generation of autonomous systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3004-beyond-vision",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.beyond-vision.com/"
    },
    "image": {
     "v": "/logos/beyond-vision.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a502aa846e101406340c550/6a5536043f2c23fa9145cf17_bv-simbolo-cor.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Alverca do Ribatejo",
     "src": "https://pt.linkedin.com/company/beyondvision-join-the-future",
     "asof": "2026-11"
    },
    "country": {
     "v": "Portugal",
     "src": "https://pt.linkedin.com/company/beyondvision-join-the-future",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rua da Beyond Vision,, Alverca do Ribatejo, Lisboa 2615-153, Portugal",
       "lat": 38.893525,
       "lon": -9.039614,
       "src": "https://pt.linkedin.com/company/beyondvision-join-the-future"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kratos-defense-and-security-solutions",
   "name": "Kratos Defense and Security Solutions",
   "summary": "San Diego-based technology company serving national security markets.",
   "body": "At Kratos, we deliver affordable, disruptive technologies that enable real-world readiness for national security. Our solutions span unmanned systems, hypersonics, satellite communications, space, cyber, propulsion, and microwave solutions—supporting U.S. and allied defense missions across every domain.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3005-kratos-defense-and-security-solutions",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kratosdefense.com/"
    },
    "image": {
     "v": "/logos/kratos-defense-and-security-solutions.png",
     "fit": "contain",
     "src": "https://www.kratosdefense.com/wp-content/uploads/2025/05/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Diego",
     "src": "https://www.linkedin.com/company/kratos-defense-and-security-solutions",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/kratos-defense-and-security-solutions",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "10680 Treena St, San Diego, California 92131, United States",
       "lat": 32.912742,
       "lon": -117.113962,
       "src": "https://www.linkedin.com/company/kratos-defense-and-security-solutions"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "parallel-systems",
   "name": "Parallel Systems",
   "summary": "Builds autonomous, battery-electric rail vehicles that convert short-haul freight from trucks to rail.",
   "body": "Parallel develops autonomous, battery-electric rail vehicles to convert freight from truck to rail. Our technology enables railroads to serve new markets, decongest highways, and reduce shipping costs and pollution.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3011-parallel-systems",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.moveparallel.com/"
    },
    "image": {
     "v": "/logos/parallel-systems.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/683f147ae8bb84d089b506fc/684933f8d40361dbc812c973_Webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://roboticsconnected.com/companies/3011-parallel-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3011-parallel-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://roboticsconnected.com/companies/3011-parallel-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "watonomous",
   "name": "WATonomous",
   "summary": "Student-run design team at the University of Waterloo, Ontario, focused on autonomy and robotics software.",
   "body": "WATonomous is an Engineering Student Design Team at the University of Waterloo focused on autonomous vehicle research and development. It is an interdisciplinary team that is a cornerstone of the strong Autonomous Driving research ecosystem at the University of Waterloo.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3012-watonomous",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.watonomous.ca/"
    },
    "image": {
     "v": "/logos/watonomous.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/982670007854182401/JJW-90Yu_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Waterloo",
     "src": "https://ca.linkedin.com/company/watonomous",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/watonomous",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "200 University Avenue, Waterloo, Ontario N2L3G1, Canada",
       "lat": 43.469719,
       "lon": -80.540921,
       "src": "https://ca.linkedin.com/company/watonomous"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bioyond-robotics",
   "name": "Bioyond Robotics",
   "summary": "Builds intelligent laboratory automation, including desktop liquid-handling robots, compact transfer robots, and mobile compound robots.",
   "body": "Bioyond Robotics specializes in intelligent automation, tailored specifically for the life sciences industry. Headquartered in Dublin, with subsidiaries in Boston, Munich, London, and Shanghai.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3087-bioyond-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bioyond.com/"
    },
    "image": {
     "v": "/logos/bioyond-robotics.png",
     "fit": "contain",
     "src": "https://www.bioyond.com/wp-content/uploads/2025/08/logo-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://roboticsconnected.com/companies/3087-bioyond-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://roboticsconnected.com/companies/3087-bioyond-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://roboticsconnected.com/companies/3087-bioyond-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cmes-robotics",
   "name": "CMES Robotics",
   "summary": "Builds AI-driven 3D vision and robotic automation systems that let industrial arms handle unstructured work without fixed programming.",
   "body": "CMES Robotics automates the toughest warehouse tasks. Our AI vision identifies millions of SKUs from bags and bottles to boxes and picks them reliably and efficiently. We combine 3D vision, robots, baggers, and barcode scanners into fast, flexible systems that drop right into your warehouse. Want to see it in action?",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/3088-cmes-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cmesrobotics.ai/"
    },
    "image": {
     "v": "/logos/cmes-robotics.png",
     "fit": "contain",
     "src": "https://media.brand.dev/c89dcdaa-edf8-495e-a3b4-c9d86dfde47f.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://roboticsconnected.com/companies/3088-cmes-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://roboticsconnected.com/companies/3088-cmes-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://roboticsconnected.com/companies/3088-cmes-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yardstick-robotics",
   "name": "Yardstick Robotics",
   "summary": "German maker of AI-enabled robots built for extreme and unpredictable environments.",
   "body": "Its flagship YARO Cobot is a ruggedised arm with hard-coated aluminium construction, IP67/IP69 protection, force control and an operating range of -20°C to 50°C. The company designs and manufactures its robots in Bremen, and operates as a subsidiary of Rheinmetall AG. Its cobots and mobile platforms target offshore, outdoor, underwater and space work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3094-yardstick-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://yardstick-robotics.com/"
    },
    "image": {
     "v": "/logos/yardstick-robotics.png",
     "fit": "contain",
     "src": "https://yardstick-robotics.com/wp-content/uploads/2025/03/cropped-favicon-Rheinmetall-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bremen",
     "src": "https://roboticsconnected.com/companies/3094-yardstick-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/3094-yardstick-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bremen, Germany",
       "lat": 53.07582,
       "lon": 8.807165,
       "src": "https://roboticsconnected.com/companies/3094-yardstick-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yolabs",
   "name": "YoLabs",
   "summary": "Bengaluru-based STEAM and robotics education company for children aged six and above.",
   "body": "Yolabs has only one goal. \"Deliver state of art tech/knowledge at the earliest possible age. \" Every one @ Yolabs put his best to achieve the above every day with every student",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3095-yolabs",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://yolabs.in/"
    },
    "image": {
     "v": "/logos/yolabs.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1294256003685314561/WgPTJjPS_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bangalore",
     "src": "https://in.linkedin.com/company/yolabs",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/yolabs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "IKP-EDEN, 16, Bhuvanappa Layout,, Bangalore, 1489 560029, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://in.linkedin.com/company/yolabs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eternalag",
   "name": "eternal.ag",
   "summary": "Cologne-based agritech startup building fully autonomous harvesting robots for greenhouses.",
   "body": "Its flagship product, Harvester, is designed for tomato growers and handles truss harvesting around the clock, running up to 22 hours a day without variability in cut quality. The robots use real-time vision to read plant height, canopy, truss position and ripeness, and are trained in simulation on each greenhouse before deployment.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3096-eternal-ag",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://eternal.ag/"
    },
    "image": {
     "v": "/logos/eternalag.png",
     "fit": "contain",
     "src": "https://eternal.ag/favicon-substrate-light.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cologne",
     "src": "https://roboticsconnected.com/companies/3096-eternal-ag",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/3096-eternal-ag",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cologne, Germany",
       "lat": 50.938361,
       "lon": 6.959974,
       "src": "https://roboticsconnected.com/companies/3096-eternal-ag"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "reward-ai",
   "name": "Reward AI",
   "summary": "Robot intelligence company founded by Chen and Zipeng Fu, aiming to bring robots into everyday use in factories, kitchens and warehouses.",
   "body": "We are engineers, company builders and researchers who pioneered robot learning in dexterous manipulation, mobile manipulation, and legged locomotion, spanning the full stack: from large foundation models to gearboxes, from hands to legs, from visual and tactile perception to high-frequency control.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/3098-reward-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rewardai.com/"
    },
    "image": {
     "v": "/logos/reward-ai.png",
     "fit": "contain",
     "src": "https://rewardai.com/assets/img/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://roboticsconnected.com/companies/3098-reward-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3098-reward-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://roboticsconnected.com/companies/3098-reward-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zeromatter-technologies-inc",
   "name": "Zeromatter Technologies Inc",
   "summary": "Simulation technology company building a unified platform to build, test and train autonomous systems.",
   "body": "One platform to build, test, and train anything",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3099-zeromatter-technologies-inc",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://zeromatter.com/"
    },
    "image": {
     "v": "/logos/zeromatter-technologies-inc.png",
     "fit": "contain",
     "src": "https://zeromatter.com/icon.svg?icon.0jofq2caucznq.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://roboticsconnected.com/companies/3099-zeromatter-technologies-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3099-zeromatter-technologies-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://roboticsconnected.com/companies/3099-zeromatter-technologies-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "prime-robotics",
   "name": "Prime Robotics",
   "summary": "Denver-based warehouse and factory automation company that designs its own robots, writes the orchestration software and engineers the stations that run them.",
   "body": "Prime Robotics is a global provider of intelligent end-to-end automation solutions and autonomous mobile robots for the warehouse, distribution, e-commerce, and material handling industries.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3101-prime-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://primerobotics.com/"
    },
    "image": {
     "v": "/logos/prime-robotics.png",
     "fit": "contain",
     "src": "https://www.primerobotics.com/wp-content/uploads/2024/09/cropped-favicons-02-192x192-1.webp#on-ink",
     "asof": "2026-11"
    },
    "city": {
     "v": "Golden",
     "src": "https://www.linkedin.com/company/primerobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/primerobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1597 Cole Blvd, Golden, Colorado 80401, United States",
       "lat": 39.754635,
       "lon": -105.22058,
       "src": "https://www.linkedin.com/company/primerobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "elistair",
   "name": "Elistair",
   "summary": "Designs tethered drone systems that give military, security and public safety teams continuous aerial overwatch without the battery swaps and landings of conventional…",
   "body": "Its portfolio includes the Khronos automatic DroneBox, the Safe-T 2 and Ligh-T 4 tether stations, and a fleet of compatible drone platforms. The company was founded in 2014 and is headquartered near Lyon, France, with a North American office in Wilmington, North Carolina and a Boston presence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3102-elistair",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://elistair.com/"
    },
    "image": {
     "v": "/logos/elistair.png",
     "fit": "contain",
     "src": "https://elistair.com/wp-content/uploads/2026/06/cropped-Elistair_Tethered-drone-company-favicon-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dardilly",
     "src": "https://roboticsconnected.com/companies/3102-elistair",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://roboticsconnected.com/companies/3102-elistair",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dardilly, France",
       "lat": 45.806499,
       "lon": 4.75377,
       "src": "https://roboticsconnected.com/companies/3102-elistair"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "jnov-tech",
   "name": "JNOV TECH",
   "summary": "Designs compact collaborative mobile robots for moving heavy loads.",
   "body": "JNOV TECH is a growing company involved in the robotic industry making innovative solutions for material handling. Our products are designed to assist and not replace Man, improving its working conditions and safety.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3103-jnov-tech",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://jnovtech.com/"
    },
    "image": {
     "v": "/logos/jnov-tech.png",
     "fit": "contain",
     "src": "https://i0.wp.com/jnovtech.com/wp-content/uploads/2024/04/favicone.png?fit=180%2C180&ssl=1",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lias",
     "src": "https://fr.linkedin.com/company/jnovtech",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://fr.linkedin.com/company/jnovtech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zone Artisanale de Rudelle, Lias, Occitanie 32600, France",
       "lat": 43.562681,
       "lon": 1.135896,
       "src": "https://fr.linkedin.com/company/jnovtech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "syncere",
   "name": "Syncere",
   "summary": "Palo Alto start-up building Lume, a home robot that looks like a sculptural floor lamp but can move around the house.",
   "body": "At Syncere, we believe robots for the home should simply disappear into the background. Domestic robots shouldn’t feel like machines. They should feel like they’ve always belonged, quietly making life easier while blending into the rhythms of your home.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3104-syncere",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://syncere.com/"
    },
    "image": {
     "v": "/logos/syncere.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/dCfF2Bf24TeRXkvrOM5hwnrFLPY.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://roboticsconnected.com/companies/3104-syncere",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3104-syncere",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://roboticsconnected.com/companies/3104-syncere"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "apexwell-motor",
   "name": "Apexwell Motor",
   "summary": "Manufactures NEMA stepper motors, high-torque brushless DC motors, closed-loop motion solutions and integrated motor drivers.",
   "body": "Changzhou Apexwell Motor Technology Co., Ltd. is a manufacturer of NEMA stepper motors, brushless DC (BLDC) motors, closed-loop motion solutions, and integrated motor drivers for OEM equipment and industrial automation.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/3106-apexwell-motor",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.apexwellmotor.com/"
    },
    "image": {
     "v": "/logos/apexwell-motor.png",
     "fit": "contain",
     "src": "https://media.brand.dev/6e90f2f0-3055-4492-87ed-ba5bdbdec8c2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Changzhou",
     "src": "https://cn.linkedin.com/company/apexwell-motor-technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/apexwell-motor-technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "26 Huayang S Rd, Changzhou, Jiangsu 213025, China",
       "lat": 31.812262,
       "lon": 119.969154,
       "src": "https://cn.linkedin.com/company/apexwell-motor-technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lemvos",
   "name": "Lemvos",
   "summary": "Augsburg-based robotics company building uncrewed maritime systems and rugged outdoor robotics.",
   "body": "Lemvos is a robotics company focused on maritime technologies, unmanned systems, and rugged outdoor robotics. We specialize in developing reliable control systems and autonomous platforms designed to perform in demanding real-world environments.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3171-lemvos-gmbh",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lemvos.com/"
    },
    "image": {
     "v": "/logos/lemvos.png",
     "fit": "contain",
     "src": "https://lemvos.com/wp-content/uploads/2022/05/cropped-LogoOnly-Transperent-Background-2-2-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Augsburg",
     "src": "https://de.linkedin.com/company/lemvos",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/lemvos",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Am Mittleren Moos 48, Augsburg, Bavaria 86167, Germany",
       "lat": 48.400555,
       "lon": 10.933246,
       "src": "https://de.linkedin.com/company/lemvos"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fp-robotics",
   "name": "F&P Robotics",
   "summary": "Builds collaborative robots and autonomous mobile platforms that pair AI software with mechatronics.",
   "body": "F&P Robotics brings AI into the physical world. We are a Swiss robotics company developing intelligent robotic systems that combine AI, robotics and human-centered design.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3177-f-and-p-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fp-robotics.com/"
    },
    "image": {
     "v": "/logos/fp-robotics.png",
     "fit": "contain",
     "src": "https://www.fp-robotics.com/wp-content/uploads/2025/05/fp-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Glattbrugg ZH",
     "src": "https://ch.linkedin.com/company/fp-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/fp-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rohrstrasse 36, Glattbrugg ZH, 8152, Switzerland",
       "lat": 47.436361,
       "lon": 8.562805,
       "src": "https://ch.linkedin.com/company/fp-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intuitive-fosun",
   "name": "Intuitive Fosun",
   "summary": "Shanghai-based joint venture between US surgical robotics leader Intuitive Surgical and Fosun Pharma, founded in May 2017.",
   "body": "Intuitive Surgical, Inc. and Shanghai Fosun Pharmaceutical (Group) Co., Ltd. “Fosun Pharma” announced a joint venture to research, develop, manufacture and sell innovative, robotic-assisted catheter-based medical devices in Sep.29th, 2016.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3178-intuitive-fosun",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.intufosun.com/"
    },
    "image": {
     "v": "/logos/intuitive-fosun.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/3178/1794395237246.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://cn.linkedin.com/company/intuitive-surgical-fosun-medical-technology-shanghai-co-ltd",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/intuitive-surgical-fosun-medical-technology-shanghai-co-ltd",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1st & 2nd Floor, No. 1 Building, 168 & 178 Banxia Road, Shanghai, 201318, China",
       "lat": 31.141736,
       "lon": 121.575946,
       "src": "https://cn.linkedin.com/company/intuitive-surgical-fosun-medical-technology-shanghai-co-ltd"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intec-robotics",
   "name": "Intec Robotics",
   "summary": "Italian firm based in Travagliato, near Brescia, that designs and builds robotic machines for surface finishing.",
   "body": "With over 25 years of experience in industrial robotics and beyond 500 machines in production in more than 20 countries, we provide the ultimate solutions for surface finishing.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3186-intec-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://intecrobotics.com/"
    },
    "image": {
     "v": "/logos/intec-robotics.png",
     "fit": "contain",
     "src": "https://intecrobotics.com/wp-content/uploads/2021/11/cropped-intec-robotics-logo-squared-white-squared.png?w=180",
     "asof": "2026-11"
    },
    "city": {
     "v": "Travagliato",
     "src": "https://it.linkedin.com/company/intecrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://it.linkedin.com/company/intecrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Via Santa Maria Crocefissa di Rosa, 1, Travagliato, Brescia 25039, Italy",
       "lat": 45.577943,
       "lon": 10.009747,
       "src": "https://it.linkedin.com/company/intecrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "plaif",
   "name": "PLAIF",
   "summary": "Builds AI-powered dual-arm robots that solve assembly and fastening tasks on production lines, a stage of automation that has resisted conventional robotics.",
   "body": "PLAiF | Planning AI for a Better World 🚀 We create a better world by bringing Physical AI to the Physical World.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3259-plaif",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://plaif.com/"
    },
    "image": {
     "v": "/logos/plaif.png",
     "fit": "contain",
     "src": "https://cdn.imweb.me/thumbnail/20241204/7ffe782f15d37.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seongnam-si",
     "src": "https://roboticsconnected.com/companies/3259-plaif",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://roboticsconnected.com/companies/3259-plaif",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seongnam-si, South Korea",
       "lat": 37.420156,
       "lon": 127.126209,
       "src": "https://roboticsconnected.com/companies/3259-plaif"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "olci-engineering",
   "name": "O.L.C.I. Engineering",
   "summary": "Italian engineering company and a member of the EFORT Group, based in Turin.",
   "body": "It designs and implements industrial automation processes, with the group's Systems business unit delivering integrated production lines. Its work centres on automotive manufacturing, including body-in-white welding, flexible multi-model lines with AGVs, and automated door assembly.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3266-o-l-c-i-engineering",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.efort-overseas.com/"
    },
    "image": {
     "v": "/logos/olci-engineering.png",
     "fit": "contain",
     "src": "https://www.efort-overseas.com/wp-content/uploads/2026/09/efort-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Turin",
     "src": "https://roboticsconnected.com/companies/3266-o-l-c-i-engineering",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://roboticsconnected.com/companies/3266-o-l-c-i-engineering",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Turin, Italy",
       "lat": 45.067755,
       "lon": 7.682489,
       "src": "https://roboticsconnected.com/companies/3266-o-l-c-i-engineering"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "exasynth",
   "name": "ExaSynth",
   "summary": "Singapore deep-tech company building AI-driven laboratory systems for scientific R&D. It designs, integrates and deploys automation for materials science, chemistry and…",
   "body": "ExaSynth develops AI-native execution infrastructure for autonomous scientific laboratories. Our platform integrates robotics, laboratory instruments, and scientific AI to enable automated experimentation and closed-loop scientific discovery.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3268-exasynth",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://exasynth.ai/"
    },
    "image": {
     "v": "/logos/exasynth.png",
     "fit": "contain",
     "src": "https://media.brand.dev/76d6e370-b06c-40ef-9d6e-0d8e9d342155.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/exasynth",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/exasynth",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "81 Ayer Rajah Crescent, Singapore, 139967, Singapore",
       "lat": 1.298228,
       "lon": 103.785912,
       "src": "https://sg.linkedin.com/company/exasynth"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "powerus",
   "name": "Powerus",
   "summary": "Builds and scales unified autonomous systems for defence, ISR, wildfire response, agriculture, critical infrastructure and maritime missions.",
   "body": "Powerus is a US-owned defense and autonomy company focused on building and scaling real-world capability, not concepts. We design, develop, and deploy unmanned systems that perform where it matters, combining advanced engineering with rapid execution and reliable delivery.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3269-powerus",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.power.us/"
    },
    "image": {
     "v": "/logos/powerus.png",
     "fit": "contain",
     "src": "https://power.us/favicon.png?v=3",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rock Hill",
     "src": "https://roboticsconnected.com/companies/3269-powerus",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3269-powerus",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rock Hill, United States",
       "lat": 34.924867,
       "lon": -81.025078,
       "src": "https://roboticsconnected.com/companies/3269-powerus"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "humble-robotics",
   "name": "Humble Robotics",
   "summary": "San Francisco company building an autonomous, electric, cabless hauler for Class 8 freight.",
   "body": "Humble makes fully autonomous, electric haulers designed for the most efficient, cost-effective commercial freight transportation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/3272-humble-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://humblerobotics.ai/"
    },
    "image": {
     "v": "/logos/humble-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/69b25c23c8c90dc5d8a7e2b2/69ec1c10a051145660c5534a_social%20web%20preview.jpeg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://roboticsconnected.com/companies/3272-humble-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3272-humble-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://roboticsconnected.com/companies/3272-humble-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sudo-ai",
   "name": "Sudo AI",
   "summary": "Shanghai-based embodied AI company building robot manipulation technology.",
   "body": "Sudo AI is building the platform for developers to create the next generation of intelligent robotic applications — systems that will reshape how we live and work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/3274-sudo-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sudo.ai/"
    },
    "image": {
     "v": "/logos/sudo-ai.png",
     "fit": "contain",
     "src": "https://www.sudo.ai/apple-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://roboticsconnected.com/companies/3274-sudo-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://roboticsconnected.com/companies/3274-sudo-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://roboticsconnected.com/companies/3274-sudo-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "isee",
   "name": "ISEE",
   "summary": "Autonomous driving technology company spun out of MIT research, building AI and engineering for autonomous yard trucks.",
   "body": "ISEE is an autonomous driving technology company, spun out of MIT, whose humanistic, AI-powered, self-driving yard trucks are modernizing the global supply chain for the world’s leading companies.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3277-isee",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.isee.ai/"
    },
    "image": {
     "v": "/logos/isee.png",
     "fit": "contain",
     "src": "https://isee.ai/dist/static/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.linkedin.com/company/isee-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/isee-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "501 Massachusetts Ave, Cambridge, Massachusetts, United States",
       "lat": 42.3643,
       "lon": -71.101496,
       "src": "https://www.linkedin.com/company/isee-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "orchard-robotics",
   "name": "Orchard Robotics",
   "summary": "Builds tractor-mounted camera hardware and farm software.",
   "body": "We're a team of engineers, researchers, and farmers on a mission to revolutionize one of Earth's most important industries – agriculture. At Orchard, we're securing America’s food supply by building the AI farmer that automates our nation’s farms.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3279-orchard-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.orchard.ai/"
    },
    "image": {
     "v": "/logos/orchard-robotics.png",
     "fit": "contain",
     "src": "https://www.orchard-robotics.com/apple-icon.png?apple-icon.0ja6jqx34fo2i.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://roboticsconnected.com/companies/3279-orchard-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3279-orchard-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seattle, United States",
       "lat": 47.603832,
       "lon": -122.330062,
       "src": "https://roboticsconnected.com/companies/3279-orchard-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autonox-robotics",
   "name": "autonox Robotics",
   "summary": "Manufactures robot mechanics, the physical arm structures that can be paired with any control platform.",
   "body": "Its parallel and serial kinematic designs, such as the DuoPod delta and articc and sCara models, cover a wide range of degrees of freedom, payloads and working envelopes. The company positions itself as controller-independent, so integrators and mechanical engineering firms can connect their preferred automation system to its mechanics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3281-autonox-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.autonox.com/"
    },
    "image": {
     "v": "/logos/autonox-robotics.png",
     "fit": "contain",
     "src": "https://www.autonox.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Willstätt",
     "src": "https://roboticsconnected.com/companies/3281-autonox-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/3281-autonox-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Willstätt, Germany",
       "lat": 48.541531,
       "lon": 7.893499,
       "src": "https://roboticsconnected.com/companies/3281-autonox-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mantis-robotics",
   "name": "Mantis Robotics",
   "summary": "Builds fenceless, high-speed industrial robot arms with embedded safety technology called Mantis SafetyCore.",
   "body": "As AI models enter physical space, real-world autonomy faces a critical bottleneck: real-time spatial safety and physical execution speeds. True autonomy requires instant, deterministic physical awareness.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3282-mantis-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mantis-robotics.com/"
    },
    "image": {
     "v": "/logos/mantis-robotics.png",
     "fit": "contain",
     "src": "https://mantis-robotics.com/mirror/wp-content/uploads/2025/03/cropped-cropped-Mantis_Symbol_Logo_Double-Colors_1x-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pleasanton",
     "src": "https://www.linkedin.com/company/mantis-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/mantis-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5673 W Las Positas Blvd, Pleasanton, California 94588, United States",
       "lat": 37.689781,
       "lon": -121.884771,
       "src": "https://www.linkedin.com/company/mantis-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "voraus-robotik",
   "name": "voraus robotik",
   "summary": "Develops software for industrial automation, offering a software-defined alternative to the classic PLC controller.",
   "body": "voraus is the modern alternative to the classic controller: everything it does today, plus everything it never could. One software layer to develop, simulate and run any robot, drive or line. IT-native, AI-agnostic. Industrial grade, and running production today. voraus.core is the runtime.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3288-voraus-robotik",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vorausrobotik.com/"
    },
    "image": {
     "v": "/logos/voraus-robotik.png",
     "fit": "contain",
     "src": "https://vorausrobotik.com/apple-touch-180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hannover",
     "src": "https://de.linkedin.com/company/vorausrobotik",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/vorausrobotik",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Carl-Buderus-Straße 7, Hannover, 30455, Germany",
       "lat": 52.350403,
       "lon": 9.657552,
       "src": "https://de.linkedin.com/company/vorausrobotik"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inxpect",
   "name": "Inxpect",
   "summary": "Designs and manufactures radar sensors for industrial safety.",
   "body": "Inxpect imagines, designs, manufactures and distributes intelligent sensors based on 3D radar technology. These sensors can combine safety in the working environment with continuity of production, all in full compliance with the most up-to-date international safety standards.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/3290-inxpect",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.inxpect.com/"
    },
    "image": {
     "v": "/logos/inxpect.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1185487065720508417/MtbXoSa-_400x400.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brescia",
     "src": "https://it.linkedin.com/company/inxpect",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://it.linkedin.com/company/inxpect",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Via Serpente, 91, Brescia, Lombardy 25131, Italy",
       "lat": 45.509134,
       "lon": 10.158346,
       "src": "https://it.linkedin.com/company/inxpect"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "visual-components",
   "name": "Visual Components",
   "summary": "Develops 3D manufacturing simulation and robot offline programming (OLP) software.",
   "body": "Visual Components is a leading developer of 3D manufacturing simulation and robot offline programming (OLP) software. We offer manufacturers, machine builders, and system integrators a simple, quick, and cost-effective platform to design, optimize, and visualize production solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3291-visual-components",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.visualcomponents.com/"
    },
    "image": {
     "v": "/logos/visual-components.png",
     "fit": "contain",
     "src": "https://www.visualcomponents.com/wordpress/wp-content/uploads/2024/06/cropped-Visual-Components-Favicon-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Espoo",
     "src": "https://fi.linkedin.com/company/visual-components",
     "asof": "2026-11"
    },
    "country": {
     "v": "Finland",
     "src": "https://fi.linkedin.com/company/visual-components",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hatsinanpuisto 8, Espoo, Uusimaa 02600, Finland",
       "lat": 60.218486,
       "lon": 24.820236,
       "src": "https://fi.linkedin.com/company/visual-components"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cognex",
   "name": "Cognex",
   "summary": "Publicly traded machine vision company best known for industrial barcode readers, vision sensors, vision software and 3D vision systems.",
   "body": "For over 40 years, Cognex has been making advanced machine vision easy, paving the way for manufacturing and distribution companies to get faster, smarter, and more efficient through automation.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/3292-cognex",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cognex.com/"
    },
    "image": {
     "v": "/logos/cognex.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1617559560482439170/_wi2uF6y_400x400.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Natick",
     "src": "https://www.linkedin.com/company/cognex-corporation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/cognex-corporation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1 Vision Drive, Natick, MA 01760, United States",
       "lat": 42.302092,
       "lon": -71.355861,
       "src": "https://www.linkedin.com/company/cognex-corporation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "basler",
   "name": "Basler",
   "summary": "German manufacturer of industrial cameras, lenses, frame grabbers and vision software, headquartered in Ahrensburg near Hamburg.",
   "body": "Basler is a leading international manufacturer of imaging components for computer vision applications such as cameras, lenses, frame grabbers, software as well as embedded vision solutions, customized products and consulting services.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/3293-basler",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.baslerweb.com/"
    },
    "image": {
     "v": "/logos/basler.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1319176822232403970/Flz9CQi5_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ahrensburg",
     "src": "https://de.linkedin.com/company/basler-ag",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/basler-ag",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "An der Strusbek 60-62, Ahrensburg, 22926, Germany",
       "lat": 53.693163,
       "lon": 10.266076,
       "src": "https://de.linkedin.com/company/basler-ag"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mvtec",
   "name": "MVTec",
   "summary": "Develops machine vision software for industrial automation, sold as hardware-independent products that combine classic image processing with AI.",
   "body": "MVTec Software GmbH is a leading international manufacturer of software for machine vision. MVTec products are used in a wide range of industries, such as semiconductor and electronics manufacturing, battery production, agriculture and food, as well as logistics.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3294-mvtec",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mvtec.com/"
    },
    "image": {
     "v": "/logos/mvtec.png",
     "fit": "contain",
     "src": "https://www.mvtec.com/_assets/fa5d75f93fd301e76fbd9a7276a24d9e/Icons/Favicons/apple-touch-icon.png?1793007383",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/mvtec-software-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/mvtec-software-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Arnulfstr. 205, Munich, 80634, Germany",
       "lat": 48.14945,
       "lon": 11.521002,
       "src": "https://de.linkedin.com/company/mvtec-software-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sick",
   "name": "SICK",
   "summary": "Waldkirch-based industrial sensor manufacturer founded in 1946, best known for machine vision, safety sensors, and code readers used in factory and logistics automation.",
   "body": "SICK is a leading global technology company for intelligent sensor solutions and integrated solutions in industrial automation. Innovative technologies set benchmarks and make industrial processes more efficient, safer, and more sustainable – in both logistics and manufacturing operations.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/3295-sick",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sick.com/"
    },
    "image": {
     "v": "/logos/sick.png",
     "fit": "contain",
     "src": "https://www.sick.com/assets/icons/custom/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Waldkirch",
     "src": "https://de.linkedin.com/company/sicksensorintelligence",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/sicksensorintelligence",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Erwin-Sick-Str. 1, Waldkirch, 79183, Germany",
       "lat": 48.08897,
       "lon": 7.949476,
       "src": "https://de.linkedin.com/company/sicksensorintelligence"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "node-robotics",
   "name": "NODE Robotics",
   "summary": "Develops mobile robot software and complete mobile robot systems for industrial intralogistics.",
   "body": "NODE Robotics focuses on making mobile robot automation easy to use, with a clear emphasis on three principles: easy to integrate, easy to operate, and easy to adapt. This approach reduces complexity across deployment, operation, and scaling.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3363-node-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://node-robotics.com/"
    },
    "image": {
     "v": "/logos/node-robotics.png",
     "fit": "contain",
     "src": "https://node-robotics.com/typo3temp/assets/_processed_/7/d/csm_project_touch_icon_big_1fa79545f9.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stuttgart",
     "src": "https://roboticsconnected.com/companies/3363-node-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/3363-node-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Stuttgart, Germany",
       "lat": 48.778449,
       "lon": 9.180013,
       "src": "https://roboticsconnected.com/companies/3363-node-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "movensys",
   "name": "Movensys",
   "summary": "Builds software-defined motion control platforms, most notably the WMX controller, which runs real-time motion control on a PC via EtherCAT and other industrial networks.",
   "body": "MOVENSYS is a motion control platform provider! MOVENSYS, Inc. was originally known as Soft Servo Group and Soft Motions & Robotics of which the name was changed on March 22, 2021.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3364-movensys",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://movensys.com/"
    },
    "image": {
     "v": "/logos/movensys.png",
     "fit": "contain",
     "src": "https://media.brand.dev/0c03efa8-0d7b-4e63-b5dd-cf2ba53ab7e7.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seongnam-si",
     "src": "https://kr.linkedin.com/company/movensys",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/movensys",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Joy City Tower 8F, Seongnam-si, Gyeonggi-do 13595, South Korea",
       "lat": 37.420156,
       "lon": 127.126209,
       "src": "https://kr.linkedin.com/company/movensys"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mabo-engineering-automation",
   "name": "Mabo Engineering & Automation",
   "summary": "Designs, builds and services AGVs and autonomous mobile robots for intralogistics.",
   "body": "With over 35 years of experience Mabo Engineering & Automation offers customized solution for every logistical challenge. Mabo Engineering & Automation supports and integrates automation projects and specializes in automated guided vehicles (AGVs).",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3366-mabo-engineering-and-automation",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mabo-automation.com/"
    },
    "image": {
     "v": "/logos/mabo-engineering-automation.png",
     "fit": "contain",
     "src": "https://mabo-automation.com/wp-content/uploads/2026/08/cropped-logo-centered-large-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lier",
     "src": "https://be.linkedin.com/company/mabo-automation",
     "asof": "2026-11"
    },
    "country": {
     "v": "Belgium",
     "src": "https://be.linkedin.com/company/mabo-automation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mallekotstraat 43a, Lier, 2500, Belgium",
       "lat": 51.145667,
       "lon": 4.557086,
       "src": "https://be.linkedin.com/company/mabo-automation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mx3d",
   "name": "MX3D",
   "summary": "Amsterdam company specialising in robotic wire arc additive manufacturing (WAAM), which uses welding robots to print large metal parts layer by layer.",
   "body": "MX3D is an Amsterdam-based company in industrial 3D metal printing, specialising in large-scale Wire Arc Additive Manufacturing (WAAM). We provide both turnkey M-Metal AM Systems for in-house production and qualified Print on Demand services from our extensive factory.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3367-mx3d",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mx3d.com/"
    },
    "image": {
     "v": "/logos/mx3d.png",
     "fit": "contain",
     "src": "https://mx3d.com/wp-content/uploads/2025/09/favicon-mx3d-300x300.avif",
     "asof": "2026-11"
    },
    "city": {
     "v": "Amsterdam",
     "src": "https://roboticsconnected.com/companies/3367-mx3d",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://roboticsconnected.com/companies/3367-mx3d",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Amsterdam, Netherlands",
       "lat": 52.37308,
       "lon": 4.892453,
       "src": "https://roboticsconnected.com/companies/3367-mx3d"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pickommerce-ai-robotics",
   "name": "Pickommerce AI Robotics",
   "summary": "Builds autonomous physical AI systems for picking, packing and palletising in warehouses.",
   "body": "We are pioneering Physical AI for the supply chain, developing autonomous robotic systems that seamlessly fuse digital intelligence with physical actuation. Our systems dynamically handle an infinite variety of SKUs, box types, and unpredictable operational scenarios; all from a single, highly adaptive robotic station.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3375-pickommerce-ai-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pickommerce.com/"
    },
    "image": {
     "v": "/logos/pickommerce-ai-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/faff19_cf4debcb89de4d19b6f67e182c4f2eb3%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/faff19_cf4debcb89de4d19b6f67e182c4f2eb3%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Petah Tikva",
     "src": "https://il.linkedin.com/company/pickommerce-ai-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://il.linkedin.com/company/pickommerce-ai-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Em HaMoshavot, Petah Tikva, Center District 98, Israel",
       "lat": 32.084036,
       "lon": 34.863117,
       "src": "https://il.linkedin.com/company/pickommerce-ai-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "peppermint-robotics",
   "name": "Peppermint Robotics",
   "summary": "Manufactures autonomous floor-cleaning and material-handling robots for commercial and industrial spaces.",
   "body": "Its range includes the SD4X mid-size scrubber, the compact SD2X scrubber and the VC2X commercial vacuum robot, each built around a five-sensor safety array. The company was founded in 2019 out of IIT Bombay's SINE incubator and is based in Pune, India, with an Austin, Texas presence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3401-peppermint-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.peppermintrobotics.com/"
    },
    "image": {
     "v": "/logos/peppermint-robotics.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1627940034279260160/CPr6ecWI_400x400.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pune",
     "src": "https://roboticsconnected.com/companies/3401-peppermint-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/3401-peppermint-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pune, India",
       "lat": 18.521374,
       "lon": 73.854507,
       "src": "https://roboticsconnected.com/companies/3401-peppermint-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "10lines",
   "name": "10LINES",
   "summary": "Autonomous robots that paint parking-lot striping and pavement markings.",
   "body": "Autonomous Pavement Marking Robots and Software",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3402-10lines",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://10linesrobots.com/"
    },
    "image": {
     "v": "/logos/10lines.png",
     "fit": "contain",
     "src": "https://media.brand.dev/a0ecca3e-e371-4819-ac34-674f354debb5.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tallinn",
     "src": "https://roboticsconnected.com/companies/3402-10lines",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3402-10lines",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tallinn, United States",
       "lat": 29.454439,
       "lon": -98.65513,
       "src": "https://roboticsconnected.com/companies/3402-10lines"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fairrobotics",
   "name": "FairRobotics",
   "summary": "Robotics and Physical AI branch of FairConsult 24|7, a German software consultancy long rooted in the energy and utilities sector.",
   "body": "About FairRobotics Different Robots. One Platform. Endless Possibilities. At FairRobotics, we are driving the future of intelligent automation by combining Physical AI, humanoid robotics, and enterprise integration.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3404-fairrobotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fairconsult24-7.de/"
    },
    "image": {
     "v": "/logos/fairrobotics.png",
     "fit": "contain",
     "src": "https://fairconsult24-7.de/wp-content/uploads/2025/08/cropped-android-chrome-512x512-1-180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Heidelberg",
     "src": "https://roboticsconnected.com/companies/3404-fairrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://roboticsconnected.com/companies/3404-fairrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Heidelberg, Germany",
       "lat": 49.409358,
       "lon": 8.694724,
       "src": "https://roboticsconnected.com/companies/3404-fairrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botcraft",
   "name": "BotCraft",
   "summary": "German software specialist for Industry 4.0, combining embedded systems, cloud-native architecture, robotics and DevOps.",
   "body": "BotCraft ist ein spezialisierter Dienstleister für Konnektivitätslösungen an Maschinen, Bauteilen oder Produkten. Diese Lösungen bilden den Unterbau an Schnittstellen für AIoT, iRPA oder Industrie 4.0 Systeme.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3425-botcraft",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botcraft.de/"
    },
    "image": {
     "v": "/logos/botcraft.png",
     "fit": "contain",
     "src": "https://botcraft.de/apple-touch-icon-152x152.png?v=1.0",
     "asof": "2026-11"
    },
    "city": {
     "v": "München",
     "src": "https://de.linkedin.com/company/botcraft",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/botcraft",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Taunusstraße 45, München, Bavaria 80807, Germany",
       "lat": 48.189101,
       "lon": 11.581618,
       "src": "https://de.linkedin.com/company/botcraft"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "minimal",
   "name": "Minimal",
   "summary": "London-based company building right-sized, software-defined electric vehicles and an autonomous driving stack to move goods in cities.",
   "body": "Minimal is a building the delivery network for cities. It’s one system: right-sized and autonomous vehicles, the software that guides them and the operations that deliver. Our vehicles are already on UK roads with partners including Royal Mail & Evri, with more than 100,000 km covered.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer",
      "Model lab"
     ],
     "src": "https://roboticsconnected.com/companies/3426-minimal",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.minimal.tech/"
    },
    "image": {
     "v": "/logos/minimal.png",
     "fit": "contain",
     "src": "https://www.minimal.tech/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://roboticsconnected.com/companies/3426-minimal",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://roboticsconnected.com/companies/3426-minimal",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://roboticsconnected.com/companies/3426-minimal"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autowipebot-jiajingcat",
   "name": "AutoWipeBot - JIAJINGCAT",
   "summary": "Shenzhen-based manufacturer of window cleaning robots, offering OEM, ODM and private-label services to commercial partners.",
   "body": "Its J1 platform features 8000Pa suction, ultrasonic misting and a slim 60mm body designed for high-rise and frameless glass. The company sells strictly B2B to distributors, brand owners, retailers and commercial cleaning firms, with no consumer sales.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3427-autowipebot-jiajingcat",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.autowipebot.com/"
    },
    "image": {
     "v": "/logos/autowipebot-jiajingcat.png",
     "fit": "contain",
     "src": "https://www.autowipebot.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://roboticsconnected.com/companies/3427-autowipebot-jiajingcat",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://roboticsconnected.com/companies/3427-autowipebot-jiajingcat",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://roboticsconnected.com/companies/3427-autowipebot-jiajingcat"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "molg",
   "name": "Molg",
   "summary": "Builds robotic microfactories that autonomously disassemble complex electronics such as laptops and servers, recovering components and materials for reuse…",
   "body": "To tackle the growing e-waste problem, Molg enables circular manufacturing with robotics and design.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3494-molg",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://molg.ai/"
    },
    "image": {
     "v": "/logos/molg.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6204451f6d66215a6b9d0318/62084a095a52b60cf2af74e0_molg-webicon.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chantilly",
     "src": "https://roboticsconnected.com/companies/3494-molg",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboticsconnected.com/companies/3494-molg",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chantilly, United States",
       "lat": 38.885219,
       "lon": -77.448677,
       "src": "https://roboticsconnected.com/companies/3494-molg"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zivid",
   "name": "Zivid",
   "summary": "Oslo-based maker of industrial 3D colour cameras and software for robotic vision.",
   "body": "Zivid is a pure-play provider of structured light-based industrial 3D vision cameras for autonomous industrial robot cells, cobot cells, and other industrial automation systems. The company's primary hardware products are the Zivid 3, Zivid 2+ R-series, Zivid 2+ and Zivid 2 3D color cameras.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier",
      "Integrator"
     ],
     "src": "https://roboticsconnected.com/companies/3496-zivid",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zivid.com/"
    },
    "image": {
     "v": "/logos/zivid.png",
     "fit": "contain",
     "src": "https://pbs.twimg.com/profile_images/1861024708411490304/XaEiDwux_400x400.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Oslo",
     "src": "https://no.linkedin.com/company/zividlabs",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://no.linkedin.com/company/zividlabs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gjerdrumsvei 10A, Oslo, 0484, Norway",
       "lat": 59.953917,
       "lon": 10.764002,
       "src": "https://no.linkedin.com/company/zividlabs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "morai",
   "name": "MORAI",
   "summary": "Builds a digital twin simulation platform for testing autonomous systems before they reach the road or sky.",
   "body": "MORAI is a South Korean startup developing a virtual simulation environment for testing autonomous driving software.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3497-morai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.morai.ai/"
    },
    "image": {
     "v": "/logos/morai.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/abc373_56e655efd51a4ce49ea41d970251d811%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/abc373_56e655efd51a4ce49ea41d970251d811%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://kr.linkedin.com/company/morai",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://kr.linkedin.com/company/morai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "415, Teheran-ro, Gangnam-gu, Seoul, South Korea",
       "lat": 37.505703,
       "lon": 127.051717,
       "src": "https://kr.linkedin.com/company/morai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "t2",
   "name": "T2",
   "summary": "Tokyo-based autonomous driving company developing Level 4 self-driving trucks for trunk-route freight between major logistics hubs.",
   "body": "Its in-house stack combines bird's-eye-view perception, high-precision self-localisation, vision-language scene understanding and heavy-vehicle motion control. The company says more than 50 transport firms have adopted its Level 2 systems since 2024, and it has demonstrated a roughly 500 km highway run.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3498-t2",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://t2.auto/"
    },
    "image": {
     "v": "/logos/t2.png",
     "fit": "contain",
     "src": "https://roboticsconnected.com/media/logos/3498/1794343411766.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://roboticsconnected.com/companies/3498-t2",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://roboticsconnected.com/companies/3498-t2",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://roboticsconnected.com/companies/3498-t2"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "turf-tank",
   "name": "Turf Tank",
   "summary": "Builds autonomous line marking robots that paint sports fields, parking lots and other surfaces.",
   "body": "At Turf Tank, we make robots that paint lines on sports fields – it's that simple. Every field, whether it's at a small local school or a professional stadium, deserves to look its best. That's why we've made our technology accessible to facilities of all sizes through flexible subscriptions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3506-turf-tank",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://turftank.com/"
    },
    "image": {
     "v": "/logos/turf-tank.png",
     "fit": "contain",
     "src": "https://turftank.com/wp-content/uploads/2020/05/favicon-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Svenstrup",
     "src": "https://dk.linkedin.com/company/turf-tank-eu",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://dk.linkedin.com/company/turf-tank-eu",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lansen 15, Svenstrup, North Jutland 9230, Denmark",
       "lat": 56.958163,
       "lon": 9.859237,
       "src": "https://dk.linkedin.com/company/turf-tank-eu"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robomate",
   "name": "Robomate",
   "summary": "New Zealand robotics company best known for robot mowers, robot vacuums and pool cleaners, sold mainly under partner brands such as Mammotion, Dreame and Yarbo.",
   "body": "It started in an Auckland garage in 2018 and is founder-led by Lachlan Murray. The company supplies residential customers across New Zealand and runs a commercial mowing service for councils, schools, golf courses and sports fields.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3570-robomate",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robomate.co.nz/"
    },
    "image": {
     "v": "/logos/robomate.png",
     "fit": "contain",
     "src": "https://media.brand.dev/29e1bda0-c688-4241-92f8-c4ad1edf8447.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Auckland",
     "src": "https://roboticsconnected.com/companies/3570-robomate",
     "asof": "2026-11"
    },
    "country": {
     "v": "New Zealand",
     "src": "https://roboticsconnected.com/companies/3570-robomate",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Auckland, New Zealand",
       "lat": -36.852095,
       "lon": 174.76318,
       "src": "https://roboticsconnected.com/companies/3570-robomate"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "evolve-robot-lab",
   "name": "Evolve Robot Lab",
   "summary": "Indigenous robotics firm in Chennai, Tamil Nadu, designing and manufacturing autonomous platforms for defence, industrial automation and research.",
   "body": "Established as Robotics Research Foundation under MSME act\", with the grand vision to improve the quality of life in the very part of India with robotics deep tech solution.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3571-evolve-robot-lab",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://evolverobot.in/"
    },
    "image": {
     "v": "/logos/evolve-robot-lab.png",
     "fit": "contain",
     "src": "https://media.brand.dev/a7df6c63-5590-4d4b-8dbd-a9dee9cddf60.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chennai",
     "src": "https://in.linkedin.com/company/robots-evolve",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/robots-evolve",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Alandur, Chennai, Tamil Nadu 600016, India",
       "lat": 13.004256,
       "lon": 80.201453,
       "src": "https://in.linkedin.com/company/robots-evolve"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ronovo-surgical",
   "name": "Ronovo Surgical",
   "summary": "Develops the Carina surgical robotics platform.",
   "body": "The system is built around a modular architecture, with mobile, smaller-footprint patient carts that can be configured for urological, thoracic, gynaecological and general surgery. The company aims to make robot-assisted surgery more affordable and easier to adopt across hospitals, targeting cost-effective, multi-specialty procedure coverage.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/3705-ronovo-surgical",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ronovosurgical.com/"
    },
    "image": {
     "v": "/logos/ronovo-surgical.png",
     "fit": "contain",
     "src": "https://media.brand.dev/ee30711b-ed44-41a1-ace7-b9ec3bf64c22.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://roboticsconnected.com/companies/3705-ronovo-surgical",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://roboticsconnected.com/companies/3705-ronovo-surgical",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://roboticsconnected.com/companies/3705-ronovo-surgical"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "motion2machine",
   "name": "Motion2Machine",
   "summary": "Human demonstrations and real-world sensor data for teams training robots and Physical AI models.",
   "body": "Motion2Machine provides managed real-world data collection for teams building robots and Physical AI models. We help turn buyer-defined requirements into human demonstrations and sensor data captured from real work, in real workplaces. You define the tasks, environments, data requirements and acceptance criteria.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/3717-motion2machine",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://motion2machine.com/"
    },
    "image": {
     "v": "/logos/motion2machine.png",
     "fit": "contain",
     "src": "https://motion2machine.com/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dubai",
     "src": "https://ae.linkedin.com/company/motion2machine",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Arab Emirates",
     "src": "https://ae.linkedin.com/company/motion2machine",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "IFZA Business Park, DDP, PO Box 342001, Dubai, United Arab Emirates",
       "lat": 25.097897,
       "lon": 55.156315,
       "src": "https://ae.linkedin.com/company/motion2machine"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arculus",
   "name": "arculus",
   "summary": "Munich-based robotics and software company, founded in 2016 and now part of Jungheinrich.",
   "body": "arculus is a part of Jungheinrich that independently develops high-end mobile robots and software products for intralogistics automation. From mechanics to electronics and code – our engineering powerhouse has it all.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://roboticsconnected.com/companies/4000-arculus",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.arculus.de/"
    },
    "image": {
     "v": "/logos/arculus.png",
     "fit": "contain",
     "src": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_180,h_180/https://www.arculus.de/wp-content/uploads/2024/10/Element-2@3x-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://de.linkedin.com/company/arculus-a-jungheinrich-company",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/arculus-a-jungheinrich-company",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Balanstraße 73, Munich, Bavaria 81549, Germany",
       "lat": 48.117131,
       "lon": 11.603507,
       "src": "https://de.linkedin.com/company/arculus-a-jungheinrich-company"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ga-robot",
   "name": "G&A ROBOT",
   "summary": "Canadian company building robotic beverage, ice cream and food-service systems.",
   "body": "Gourmet & Accessible - Smart Café In A Box: Experience the next generation of foodservice with G&A ROBOT automated vending solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboticsconnected.com/companies/4001-g-and-a-robot",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://garobot.com/"
    },
    "image": {
     "v": "/logos/ga-robot.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/7emaXDQebt7NVOa5hk3PJTVnGs.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Vancouver",
     "src": "https://ca.linkedin.com/company/g-a-robot",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://ca.linkedin.com/company/g-a-robot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2999 Underhill Ave, Vancouver, British Columbia V5A 3C2, Canada",
       "lat": 49.258523,
       "lon": -122.928464,
       "src": "https://ca.linkedin.com/company/g-a-robot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kody-robots",
   "name": "Kody Robots",
   "summary": "Indian robotics company, powered by Kody Technolab Limited, that engineers autonomous robots for demanding, high-traffic environments.",
   "body": "Its systems combine sensors, vision and AI to navigate and execute tasks with precision. The product line includes Odigo, an advertising robot, Dasher, a serving robot, Vulcan, an autonomous cleaning robot, and Spilot and ForkOn for logistics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/4296-kody-robots",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kodyrobots.com/"
    },
    "image": {
     "v": "/logos/kody-robots.png",
     "fit": "contain",
     "src": "https://kodyrobots.com/wp-content/uploads/2026/06/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ahmedabad",
     "src": "https://roboticsconnected.com/companies/4296-kody-robots",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://roboticsconnected.com/companies/4296-kody-robots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ahmedabad, India",
       "lat": 23.021537,
       "lon": 72.580057,
       "src": "https://roboticsconnected.com/companies/4296-kody-robots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "april-robotics",
   "name": "April Robotics",
   "summary": "Zurich-based startup teaching robots fine manipulation by recording skilled human hand work.",
   "body": "April Robotics is pioneering human-to-robot skill transfer for dexterous manipulation. Our foundation models learn dexterity directly from human demonstrations and turn it into deployable robot skill, making intricate manufacturing work both achievable and affordable.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Supplier"
     ],
     "src": "https://roboticsconnected.com/companies/4400-april-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aprilrobotics.ai/"
    },
    "image": {
     "v": "/logos/april-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6ace9e4282a9724bd7ff202b/6acfa0d4784dec695ebd5831_april-icon-512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zürich",
     "src": "https://ch.linkedin.com/company/april-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://ch.linkedin.com/company/april-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Löwenstrasse 12, Zürich, 8001, Switzerland",
       "lat": 47.373576,
       "lon": 8.535168,
       "src": "https://ch.linkedin.com/company/april-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "boardwalk-robotics",
   "name": "Boardwalk Robotics",
   "summary": "IHMC spin-out building Alex, an upper-body humanoid for manufacturing, logistics and research.",
   "body": "Humanoids transforming your workplace.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://humano.one/companies/boardwalk-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.boardwalkrobotics.com/"
    },
    "image": {
     "v": "/logos/boardwalk-robotics.png",
     "fit": "contain",
     "src": "https://www.boardwalkrobotics.com/_assets/33051af18aa97ab9782c.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pensacola",
     "src": "https://www.linkedin.com/company/boardwalk-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/boardwalk-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pensacola, FL, United States",
       "lat": 30.421309,
       "lon": -87.216915,
       "src": "https://www.linkedin.com/company/boardwalk-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "faraday-future",
   "name": "Faraday Future",
   "summary": "EV maker that moved into embodied AI in 2026 with full-size humanoid robots.",
   "body": "Explore FF EAI Robotics: humanoid robots, athletic companions, intelligent quadruped robots, and EAI platform solutions for education, security patrol, reception, events, and research.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://humano.one/companies/faraday-future",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ff.com/"
    },
    "image": {
     "v": "/logos/faraday-future.png",
     "fit": "contain",
     "src": "https://genesis-cdn.ff.com/ff-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Gardena",
     "src": "https://www.linkedin.com/company/faradayfuture",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/faradayfuture",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "18455 S. Figueroa St., Gardena, CA 90248, United States",
       "lat": 33.863477,
       "lon": -118.282594,
       "src": "https://www.linkedin.com/company/faradayfuture"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lightwheel",
   "name": "Lightwheel",
   "summary": "Physics-validated simulation assets, synthetic data and evaluation for training robot policies.",
   "body": "We find growth opportunities and create ideas that power brands.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://humano.one/companies/lightwheel",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lightwheel.ai/"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.analog.com/en/support/our-partners/lightwheel.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.analog.com/en/support/our-partners/lightwheel.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2445 Augustine Drive, Santa Clara, CA 95054, United States",
       "lat": 37.382648,
       "lon": -121.969686,
       "src": "https://www.analog.com/en/support/our-partners/lightwheel.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "moonlake-ai",
   "name": "Moonlake AI",
   "summary": "World models and real-to-sim infrastructure for physical and embodied AI.",
   "body": "World models and simulation infrastructure for physical AI.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://humano.one/companies/moonlake-ai",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://moonlakeai.com/"
    },
    "image": {
     "v": "/logos/moonlake-ai.png",
     "fit": "contain",
     "src": "https://moonlakeai.com/apple-icon.png?apple-icon.33g01nbl2d653.png?dpl=dpl_79DyrxdcYWuNq89sHCnaZ623yGoE",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/moonlake-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/moonlake-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/moonlake-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "prismax",
   "name": "PrismaX",
   "summary": "Crowd-sourced teleoperation data network for robot foundation models.",
   "body": "PrismaX is a robotics-native service layer for physical AI. It sets the standards for how robots, data, and human work are deployed to advance intelligence for physical AI systems. Backed by a16z and part of NVIDIA Inception.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://humano.one/companies/prismax",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://prismax.ai/"
    },
    "image": {
     "v": "/logos/prismax.png",
     "fit": "contain",
     "src": "https://prismax.ai/assets/home/logos/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/prismaxai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/prismaxai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/prismaxai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dataa-robotics",
   "name": "Dataa Robotics",
   "summary": "Cloud-robotics company (formerly CloudMinds) building wheeled service humanoids and the bipedal XR-4.",
   "body": "达闼,是一家云端智能机器人运营商.达闼正为各行业客户提供专业的机器人运营服务,推出了使用云端智能的人形机器人，迎宾机器人,安保巡逻机器人,室内清洁机器人,虚拟讲解机器人等服务机器人解决方案",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://humano.one/companies/dataa-robotics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dataarobotics.com/en/"
    },
    "image": {
     "v": "/logos/dataa-robotics.png",
     "fit": "contain",
     "src": "https://www.dataarobotics.com/en/Public/images/logo3.png?v=1",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://dataarobotics.com/en/about/contact/id/38",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://dataarobotics.com/en/about/contact/id/38",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No. 3966 Dongchuan Road, Minhang District, Shanghai, China",
       "lat": 31.114767,
       "lon": 121.376943,
       "src": "https://dataarobotics.com/en/about/contact/id/38"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nineray-technology",
   "name": "NineRay Technology",
   "summary": "Shenzhen embodied-AI company building full-size industrial humanoids.",
   "body": "九光-首页",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://humano.one/companies/nineray-technology",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nineraygroup.com/"
    },
    "image": {
     "v": "/logos/nineray-technology.png",
     "fit": "contain",
     "src": "https://www.nineraygroup.com/icon/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://humano.one/companies/nineray-technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://humano.one/companies/nineray-technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://humano.one/companies/nineray-technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "alibaba-damo-academy",
   "name": "Alibaba DAMO Academy",
   "summary": "Alibaba's research academy, releasing the open-source RynnBrain embodied models.",
   "body": "阿里巴巴达摩院（Alibaba DAMO Academy for Discovery, Adventure, Momentum and Outlook）是一家致力于探索科技未知，以人类愿景为驱动力的，立足于基础科学、创新性技术和应用技术的研究院。",
   "data": {
    "roles": {
     "v": [
      "Research lab",
      "Model lab"
     ],
     "src": "https://humano.one/companies/alibaba-damo-academy",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://damo.alibaba.com/"
    },
    "image": {
     "v": "/logos/alibaba-damo-academy.png",
     "fit": "contain",
     "src": "https://img.alicdn.com/tfs/TB11wf2XwDqK1RjSZSyXXaxEVXa-64-64.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://humano.one/companies/alibaba-damo-academy",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://humano.one/companies/alibaba-damo-academy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hangzhou, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://humano.one/companies/alibaba-damo-academy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sanhua-intelligent-controls",
   "name": "Sanhua Intelligent Controls",
   "summary": "Thermal-controls group making linear and rotary actuator assemblies for humanoid robots.",
   "body": "全球制冷家电、新能源汽车热管理领域的行业领军企业",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://humano.one/companies/sanhua-intelligent-controls",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://zjshc.com/"
    },
    "image": {
     "v": "/logos/sanhua-intelligent-controls.png",
     "fit": "contain",
     "src": "https://zjshc.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shaoxing",
     "src": "https://www.zjshc.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.zjshc.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shaoxing, Zhejiang, China",
       "lat": 29.999243,
       "lon": 120.576854,
       "src": "https://www.zjshc.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "keli-sensing",
   "name": "Keli Sensing",
   "summary": "Ningbo maker of multi-axis force and torque sensors for robot joints.",
   "body": "宁波柯力传感科技股份有限公司【股票代码：603662】成立于1995 年，主要研制和生产各类传感器以及工业物联网系统及多场景应用解决方案，是全球较大钢制传感器制造企业和传感器产业森林开拓建设者；是国家级制造业单项冠军示范企业、国家级企业技术中心、国家知识产权优势企业、国家制造业“双创”平台、国家级众创空间。柯力总部设于浙江宁波，采用集团化管理模式，在深圳、广州、福州、郑州、苏州、池州等城市投资27家控股公司和11家参股公司。拥有两大研发中心、三大投资中心、三大产业园、七大生产基地，并建有包括研发、业务、供应链、投资、人力资源、信息化、智能制造等在内的集团八大赋能中心，围绕“客户、战略、人才、流程”建设KMS集团管理体系。围绕“产业投资化+产业园区化+产业集团化+产业生态化+产业资本化”发展战略途径，搭建传感器行业生态体系，立志成为国内多种传感器融合领军企业，砥砺奋进于全球机器人全身传感器核",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://humano.one/companies/keli-sensing",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kelichina.com/"
    },
    "image": {
     "v": "/logos/keli-sensing.png",
     "fit": "contain",
     "src": "https://www.kelichina.com/skin/img/flogo2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ningbo",
     "src": "https://humano.one/companies/keli-sensing",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://humano.one/companies/keli-sensing",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ningbo, China",
       "lat": 29.87196,
       "lon": 121.549964,
       "src": "https://humano.one/companies/keli-sensing"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zhaowei-machinery-and-electronics",
   "name": "Zhaowei Machinery & Electronics",
   "summary": "Micro motor and gearbox maker supplying finger-joint drives and its own dexterous hand.",
   "body": "ZHAOWEI (Dual-listed: 003021.SZ | 02692.HK) is a global leader in the design, development, and manufacturing of precision micro-drive systems. We empower the world's most innovative companies by delivering fully integrated micro-drive modules (Motor + Gearbox + Controller) tailored for demanding applications.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://humano.one/companies/zhaowei-machinery-and-electronics",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zwgearbox.com/"
    },
    "image": {
     "v": "/logos/zhaowei-machinery-and-electronics.png",
     "fit": "contain",
     "src": "https://www.zwgearbox.com/uploads/2610/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://cn.linkedin.com/company/zwgearbox",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://cn.linkedin.com/company/zwgearbox",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Office Building 62, Yanhu Road, Yanchuan Community Yanluo Street, Bao'an District, Shenzhen, Guangdong 518105, China",
       "lat": 22.559853,
       "lon": 113.879033,
       "src": "https://cn.linkedin.com/company/zwgearbox"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "prophesee",
   "name": "Prophesee",
   "summary": "Neuromorphic event-based vision sensors for low-latency robot perception.",
   "body": "Prophesee brings Event-Based Vision technology, software and AI together to detect, track and measure fast change in demanding environments.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://humano.one/companies/prophesee",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.prophesee.ai/"
    },
    "image": {
     "v": "/logos/prophesee.png",
     "fit": "contain",
     "src": "https://downloads.prophesee.ai/website/2026/10/cropped-prophesee-favicon-512-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://www.prophesee.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://www.prophesee.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://www.prophesee.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nexdata",
   "name": "Nexdata",
   "summary": "Data vendor offering robot data collection, annotation and embodied-AI datasets.",
   "body": "Nexdata provides top-notch training data solutions and serves as your reliable partner. With an extensive array of off-the-shelf datasets and flexible data collection and annotation services, our mission revolves around unleashing AI’ s full potential and expediting the AI industry’ s growth.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://humano.one/companies/nexdata",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nexdata.ai/"
    },
    "image": {
     "v": "/logos/nexdata.png",
     "fit": "contain",
     "src": "https://www.nexdata.ai/nexdata/static/image/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/nexdata-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://sg.linkedin.com/company/nexdata-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "60 Paya Lebar Road, Singapore, 409051, Singapore",
       "lat": 1.319078,
       "lon": 103.892871,
       "src": "https://sg.linkedin.com/company/nexdata-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lute",
   "name": "Lute",
   "summary": "Physical AI company building tactile foundation models (Lute-0) for retail and logistics robots.",
   "body": "Lute's mission is to tackle labour shortages and demographic challenges through physical AI. We address the needs of industries that are facing a shortage of skilled workers beginning with logistics, manufacturing, and retail.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://www.lute.one/news/seed/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lute.one/"
    },
    "image": {
     "v": "/logos/lute.png",
     "fit": "contain",
     "src": "https://www.lute.one/_astro/lute-icon-black.CUWyD6qK.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Warsaw",
     "src": "https://krsly.pl/firma/0001204225",
     "asof": "2026-11"
    },
    "country": {
     "v": "Poland",
     "src": "https://krsly.pl/firma/0001204225",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "ul. Bracka 25, 00-028 Warsaw, Poland",
       "lat": 52.232071,
       "lon": 21.016378,
       "src": "https://krsly.pl/firma/0001204225"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mosaic-intelligence-labs",
   "name": "Mosaic Intelligence Labs",
   "summary": "Building intelligent surgical robots that sense and navigate blood vessels.",
   "body": "The future of surgery starts with perception. Mosaic Intelligence Labs builds embodied intelligence and robotics to push the frontiers of surgery. Our mission is to expand the success, scope and scalability of surgery, starting from what can be treated from inside the vascular system.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.businesswire.com/news/home/20261110289756/en/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mosaicintelligence.xyz/"
    },
    "image": {
     "v": "/logos/mosaic-intelligence-labs.png",
     "fit": "contain",
     "src": "https://mosaicintelligence.xyz/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/mosaic-intelligence-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/mosaic-intelligence-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/mosaic-intelligence-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "qvyon-technologies",
   "name": "Qvyon Technologies",
   "summary": "Testing and validation platform that turns sensor recordings into 3D/4D scenarios for robots and autonomous vehicles.",
   "body": "Qyvon helps industrial teams deploy autonomous systems and robotics faster with audit-ready validation evidence built from real-world sensor data.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://betakit.com/qvyon-technologies-emerges-from-stealth-with-8-million-usd-to-prepare-physical-ai-for-dangerous-edge-cases/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://qvyon.com/"
    },
    "image": {
     "v": "/logos/qvyon-technologies.png",
     "fit": "contain",
     "src": "https://qvyon.com/wp-content/uploads/cropped-favicon_qvyon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montreal",
     "src": "https://betakit.com/qvyon-technologies-emerges-from-stealth-with-8-million-usd-to-prepare-physical-ai-for-dangerous-edge-cases/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://betakit.com/qvyon-technologies-emerges-from-stealth-with-8-million-usd-to-prepare-physical-ai-for-dangerous-edge-cases/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Montreal, Quebec, Canada",
       "lat": 45.503182,
       "lon": -73.569806,
       "src": "https://betakit.com/qvyon-technologies-emerges-from-stealth-with-8-million-usd-to-prepare-physical-ai-for-dangerous-edge-cases/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "embo",
   "name": "Embo",
   "summary": "Builds robot brains with world models; $110M seed led by a16z (Nov 2026).",
   "body": "We are building the next generation of AI, with a deep understanding of the world and fine-grained motor skills. Our robot brain will control humanoids in new environments out of the box to make goods and services abundant for everyone.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://embo.com/introducing-embo",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://embo.com/"
    },
    "image": {
     "v": "/logos/embo.png",
     "fit": "contain",
     "src": "https://embo.com/brand/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.finsmes.com/2026/11/embo-raises-110m-in-seed-funding.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.finsmes.com/2026/11/embo-raises-110m-in-seed-funding.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.finsmes.com/2026/11/embo-raises-110m-in-seed-funding.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ubitium",
   "name": "Ubitium",
   "summary": "Universal processor (UB410) for robots, drones and other physical AI machines.",
   "body": "Ubitium GmbH is a fabless semiconductor company building the next generation of general-purpose processors.",
   "data": {
    "roles": {
     "v": [
      "Compute",
      "Supplier"
     ],
     "src": "https://tech.eu/2026/10/13/ubitium-lands-14m-to-bring-universal-computing-to-physical-ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ubitium.com/"
    },
    "image": {
     "v": "/logos/ubitium.png",
     "fit": "contain",
     "src": "https://www.ubitium.com/wp-content/uploads/2025/09/cropped-logo-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Düsseldorf",
     "src": "https://de.linkedin.com/company/ubitium",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://de.linkedin.com/company/ubitium",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kasernenstraße 67, Düsseldorf, North Rhine-Westphalia 40213, Germany",
       "lat": 51.220192,
       "lon": 6.775382,
       "src": "https://de.linkedin.com/company/ubitium"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yk-robotics",
   "name": "YK-Robotics",
   "summary": "Robot-brand-agnostic software to design, program and run robotic cells with natural language.",
   "body": "A platform to unleash all potential of automation creators, from system integrators to robotic cell users. Our mission is to facilitate the usage of advanced robotics in business of all sizes by providing robotic applications that can be configured, programmed and controlled in a more natural way.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.yk-robotics.com/seed-round-2026",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.yk-robotics.com/"
    },
    "image": {
     "v": "/logos/yk-robotics.png",
     "fit": "contain",
     "src": "https://www.yk-robotics.com/wp-content/uploads/2024/02/yk-robotics-icon-logo-bianco.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pontedera",
     "src": "https://it.linkedin.com/company/yk-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://it.linkedin.com/company/yk-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Viale Rinaldo Piaggio, 32, Pontedera, Toscana 56025, Italy",
       "lat": 43.661587,
       "lon": 10.628063,
       "src": "https://it.linkedin.com/company/yk-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kodama-systems",
   "name": "Kodama Systems",
   "summary": "Remote-controlled and autonomous skidders for forestry and wildfire-risk thinning.",
   "body": "Kodama Systems is a technology company transforming the forestry industry with teleoperation and supervised autonomy.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.therobotreport.com/kodama-raises-7m-bring-robotics-forestry/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kodama.ai/"
    },
    "image": {
     "v": "/logos/kodama-systems.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6977c749037f36d9728dcb22/69a1479929d15e16f59d8abd_webgraph.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/kodama-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/kodama-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/kodama-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "emulate",
   "name": "Emulate",
   "summary": "DeepMind spinout (Genie team) building world models for robotics and simulation.",
   "body": "World models to model the world.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://sifted.eu/articles/exclusive-unity-nvidia-emulate",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.emulate.ai/"
    },
    "image": {
     "v": "/logos/emulate.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6ad167a7aba0761cf86c85ed/6ad70f9b42fa21599c0fa14d_emulate_social_icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.cityam.com/month-old-deepmind-spinout-nears-4bn-on-future-capability-bet/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.cityam.com/month-old-deepmind-spinout-nears-4bn-on-future-capability-bet/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://www.cityam.com/month-old-deepmind-spinout-nears-4bn-on-future-capability-bet/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sunrise-robotics",
   "name": "Sunrise Robotics",
   "summary": "Modular dual-arm robotic cells trained in simulation for high-mix manufacturing.",
   "body": "Sunrise Robotics revolutionizes manufacturing with intelligent, autonomous robotic cells that enhance flexibility, scalability, and efficiency.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://tech.eu/2025/06/13/sunrise-robotics-emerges-from-stealth-with-85m-to-democratise-factory-automation/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sunriserobotics.co/"
    },
    "image": {
     "v": "/logos/sunrise-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/67e67a3943ac99a246534eba/67e688b6ec2228c421d9d326_webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ljubljana",
     "src": "https://fortune.com/2025/06/13/sunrise-robotics-seed-funding-8-5-million-plural-industrial-robots/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Slovenia",
     "src": "https://fortune.com/2025/06/13/sunrise-robotics-seed-funding-8-5-million-plural-industrial-robots/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ljubljana, Slovenia",
       "lat": 46.050027,
       "lon": 14.506929,
       "src": "https://fortune.com/2025/06/13/sunrise-robotics-seed-funding-8-5-million-plural-industrial-robots/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "six-robotics",
   "name": "Six Robotics",
   "summary": "Hardware-agnostic software (Valkyrie) that lets mixed drone fleets operate as coordinated swarms.",
   "body": "We exist to strengthen defence, protect nations, and deter conflict in an era defined by unmanned warfare. Our mission is to multiply operational capabilities, accelerate the transition to robotic warfare, and give NATO, and our allies a decisive advantage in the new era of unmanned operations.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.eu-startups.com/2026/06/six-robotics-lands-e12-million-to-advance-unmanned-systems-software-with-norwegian-defence-partners/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sixrobotics.com/"
    },
    "image": {
     "v": "/logos/six-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/N7psdeDJNTNXSajaktnnXJvqhAk.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Oslo",
     "src": "https://no.linkedin.com/company/six-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://no.linkedin.com/company/six-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Oslo, Norway",
       "lat": 59.91333,
       "lon": 10.73897,
       "src": "https://no.linkedin.com/company/six-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rendezvous-robotics",
   "name": "Rendezvous Robotics",
   "summary": "Builds self-assembling spacecraft and robotic infrastructure for orbit.",
   "body": "Rendezvous Robotics builds space infrastructure using modular, autonomous systems that assemble in orbit. Its patented TESSERAE technology enables scalable, reconfigurable, and resilient infrastructure in space — serving national security, commercial and civil markets.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.rdvrobotics.com/news/rendezvous-robotics-seed-round-announcement/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rdvrobotics.com/"
    },
    "image": {
     "v": "/logos/rendezvous-robotics.png",
     "fit": "contain",
     "src": "https://www.rdvrobotics.com/wp-content/uploads/2026/10/rdv-site-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Golden",
     "src": "https://www.linkedin.com/company/rendezvous-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/rendezvous-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Golden, Colorado, United States",
       "lat": 39.754635,
       "lon": -105.22058,
       "src": "https://www.linkedin.com/company/rendezvous-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tangent-robotics",
   "name": "Tangent Robotics",
   "summary": "Dexterous robot hands with light-based touch sensing for precise manipulation.",
   "body": "Tangent Robotics is building the dexterous hands that will unlock the next generation of general purpose robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://www.tangentrobotics.ai/about/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tangentrobotics.ai/"
    },
    "image": {
     "v": "/logos/tangent-robotics.png",
     "fit": "contain",
     "src": "https://www.tangentrobotics.ai/wp-content/uploads/2026/10/favicon-196x196-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.linkedin.com/company/tangent-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/tangent-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.linkedin.com/company/tangent-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cosmochute",
   "name": "CosmoChute",
   "summary": "Lunar robotics infrastructure: the EPOC modular rover, OASYS trailer and payload cartridges.",
   "body": "Vision: To be the foundational infrastructure for economies beyond Earth. The Moon is our first destination. Mission: To make Cosmochute the best workplace in the world for our engineers to build the next frontier of human civilisation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://entrackr.com/snippets/space-robotics-startup-cosmochute-raises-15-mn-in-pre-seed-round-12677383",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cosmochute.com/"
    },
    "image": {
     "v": "/logos/cosmochute.png",
     "fit": "contain",
     "src": "https://www.cosmochute.com/images/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ahmedabad",
     "src": "https://in.linkedin.com/company/cosmochute",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://in.linkedin.com/company/cosmochute",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ahmedabad, India",
       "lat": 23.021537,
       "lon": 72.580057,
       "src": "https://in.linkedin.com/company/cosmochute"
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
   "slug": "advanced-navigation",
   "add": [
    "Robot maker"
   ],
   "src": {
    "Robot maker": "https://roboticsconnected.com/companies/26-advanced-navigation"
   },
   "asof": "2026-11"
  },
  {
   "slug": "boost-robotics",
   "add": [
    "Robot maker"
   ],
   "src": {
    "Robot maker": "https://roboticsconnected.com/companies/356-boost-robotics"
   },
   "asof": "2026-11"
  },
  {
   "slug": "d-robotics",
   "add": [
    "Supplier"
   ],
   "src": {
    "Supplier": "https://roboticsconnected.com/companies/695-d-robotics"
   },
   "asof": "2026-11"
  },
  {
   "slug": "daxo-robotics",
   "add": [
    "Supplier"
   ],
   "src": {
    "Supplier": "https://roboticsconnected.com/companies/698-daxo-robotics"
   },
   "asof": "2026-11"
  },
  {
   "slug": "mecka",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://roboticsconnected.com/companies/836-mecka"
   },
   "asof": "2026-11"
  },
  {
   "slug": "knapp",
   "add": [
    "Robot maker"
   ],
   "src": {
    "Robot maker": "https://roboticsconnected.com/companies/1229-knapp"
   },
   "asof": "2026-11"
  },
  {
   "slug": "enact-intelligence",
   "add": [
    "Robot maker"
   ],
   "src": {
    "Robot maker": "https://roboticsconnected.com/companies/1813-enact"
   },
   "asof": "2026-11"
  },
  {
   "slug": "mech-mind",
   "add": [
    "Software developer"
   ],
   "src": {
    "Software developer": "https://roboticsconnected.com/companies/3286-mech-mind-robotics"
   },
   "asof": "2026-11"
  },
  {
   "slug": "festo",
   "add": [
    "Robot maker"
   ],
   "src": {
    "Robot maker": "https://roboticsconnected.com/companies/3297-festo"
   },
   "asof": "2026-11"
  }
 ]
};
