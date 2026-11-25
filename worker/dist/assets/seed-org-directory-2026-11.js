// Content seed: organisation directory pass of 2026-11-25. Adds organisations working on humanoids, physical AI and
// embodied AI (robot makers, model labs, software, suppliers, compute, universities, research labs, investors) with their
// HQ address and map position in data.locations, and fills the HQ for existing organisations that had no location.
// epSeedRun inserts an organisation only if no organisation has that slug or name, and fills only empty fields.
// See CHANGELOG.md.
export const EP_SEED_ORG_DIRECTORY_2026_11 = {
 "id": "org-directory-2026-11",
 "note": "Added in the organisation directory pass, November 2026",
 "newOrgs": [
  {
   "slug": "limx-dynamics",
   "name": "LimX Dynamics",
   "summary": "Shenzhen maker of legged and humanoid robots.",
   "body": "Its robots include the TRON 1 biped and the Oli full-size humanoid, alongside wheeled-legged platforms.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.limxdynamics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.limxdynamics.com/"
    },
    "image": {
     "v": "/logos/limx-dynamics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.limxdynamics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.limxdynamics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.limxdynamics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.limxdynamics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "galbot",
   "name": "Galbot",
   "summary": "Beijing developer of wheeled general-purpose humanoid robots and embodied AI models.",
   "body": "Its Galbot G1 robot is aimed at retail, pharmacy and factory tasks, driven by the company's own multimodal models.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.galbot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.galbot.com/"
    },
    "image": {
     "v": "/logos/galbot.png",
     "fit": "contain",
     "src": "https://www.galbot.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.galbot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.galbot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.galbot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "leju-robotics",
   "name": "Leju Robotics",
   "summary": "Shenzhen humanoid robot maker (Lejoin Intelligence).",
   "body": "It develops, manufactures and sells humanoid robots, including the Kuavo series.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.lejurobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lejurobot.com/"
    },
    "image": {
     "v": "/logos/leju-robotics.png",
     "fit": "contain",
     "src": "https://www.lejurobot.com/favicon.ico?favicon.3xcdvj43-oswk.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.lejurobot.com/en",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.lejurobot.com/en",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.lejurobot.com/en"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "engineai",
   "name": "EngineAI",
   "summary": "Shenzhen humanoid robot maker with in-house joints and actuators.",
   "body": "Shenzhen EngineAI Robotics Technology develops its own joints; its products include the SE01, SA01 and PM01 humanoids for research, education and industry.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.engineai.com.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.engineai.com.cn/"
    },
    "image": {
     "v": "/logos/engineai.png",
     "fit": "contain",
     "src": "https://www.engineai.com.cn/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.engineai.com.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.engineai.com.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Floor 69, Tower T1, Shenzhen Bay Innovation and Technology Centre, Nanshan District, Shenzhen, China",
       "lat": 22.531316,
       "lon": 113.942051,
       "src": "https://www.engineai.com.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "magiclab",
   "name": "MagicLab",
   "summary": "Wuxi maker of general-purpose humanoid robots and embodied AI.",
   "body": "MagicLab handles its own R&D, manufacturing, sales and service; its robots include the MagicBot humanoids.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.magiclab.top/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.magiclab.top/"
    },
    "image": {
     "v": "/logos/magiclab.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.magiclab.top&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wuxi",
     "src": "https://baike.baidu.com/item/%E9%AD%94%E6%B3%95%E5%8E%9F%E5%AD%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%A7%91%E6%8A%80%EF%BC%88%E6%97%A0%E9%94%A1%EF%BC%89%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/66826567",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://baike.baidu.com/item/%E9%AD%94%E6%B3%95%E5%8E%9F%E5%AD%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%A7%91%E6%8A%80%EF%BC%88%E6%97%A0%E9%94%A1%EF%BC%89%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/66826567",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "98 Jianghai West Road, Liangxi District, Wuxi, Jiangsu, China",
       "lat": 31.609837,
       "lon": 120.25805,
       "src": "https://baike.baidu.com/item/%E9%AD%94%E6%B3%95%E5%8E%9F%E5%AD%90%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%A7%91%E6%8A%80%EF%BC%88%E6%97%A0%E9%94%A1%EF%BC%89%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/66826567"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "booster-robotics",
   "name": "Booster Robotics",
   "summary": "Beijing maker of humanoid robots for developers, education and robot soccer.",
   "body": "Its products are the K1 and T2 humanoids, with development tools for research and real-world applications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.booster.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.booster.tech/"
    },
    "image": {
     "v": "/logos/booster-robotics.png",
     "fit": "contain",
     "src": "https://fe-cdn.booster.tech/booster-official-website/release-0.1.14/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://linkedin.com/company/booster-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://linkedin.com/company/booster-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://linkedin.com/company/booster-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "noetix-robotics",
   "name": "Noetix Robotics",
   "summary": "Beijing humanoid and embodied AI robot maker.",
   "body": "Founded by a team from Tsinghua and Zhejiang universities, it makes the low-cost Bumi consumer humanoid, N- and E-series bipeds and a wheeled robot, W1.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.noetixrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.noetixrobotics.com/"
    },
    "image": {
     "v": "/logos/noetix-robotics.png",
     "fit": "contain",
     "src": "https://www.noetixrobotics.com/assets/favicon-CGvop1bs.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.noetixrobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.noetixrobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.noetixrobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kepler-robotics",
   "name": "Kepler Robotics",
   "summary": "Shanghai maker of the Kepler Forerunner general-purpose humanoid robots.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.gotokepler.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gotokepler.com/"
    },
    "image": {
     "v": "/logos/kepler-robotics.png",
     "fit": "contain",
     "src": "https://www.gotokepler.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.gotokepler.com/about",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.gotokepler.com/about",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zhangjiang AI Island, Pudong, Shanghai, China",
       "lat": 31.223267,
       "lon": 121.539785,
       "src": "https://www.gotokepler.com/about"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pndbotics",
   "name": "PNDbotics",
   "summary": "Beijing maker of the Adam humanoid robot.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.pndbotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pndbotics.com/"
    },
    "image": {
     "v": "/logos/pndbotics.png",
     "fit": "contain",
     "src": "https://www.pndbotics.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://wiki.pndbotics.com/en/about/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://wiki.pndbotics.com/en/about/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Haidian District, Beijing, China",
       "lat": 39.958072,
       "lon": 116.292405,
       "src": "https://wiki.pndbotics.com/en/about/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "x-humanoid",
   "name": "Beijing Humanoid Robot Innovation Center",
   "summary": "Beijing humanoid robotics innovation centre (X-Humanoid), developer of the Tiangong robots.",
   "body": "It builds the Tiangong general-purpose robot platform, the Huisi Kaiwu embodied-AI platform, and offers data and pilot-testing services.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Research lab"
     ],
     "src": "https://www.x-humanoid.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.x-humanoid.com/"
    },
    "image": {
     "v": "/logos/x-humanoid.png",
     "fit": "contain",
     "src": "https://www.x-humanoid.com/fav2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.x-humanoid.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.x-humanoid.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.x-humanoid.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "x-square-robot",
   "name": "X Square Robot",
   "summary": "Shenzhen developer of general-purpose robots driven by end-to-end embodied foundation models.",
   "body": "X Square builds its own data collection, models, components and robot bodies, and has deployed in home and logistics settings. Its model series is called WALL.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.x2robot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.x2robot.com/"
    },
    "image": {
     "v": "/logos/x-square-robot.png",
     "fit": "contain",
     "src": "https://x2robot.com/api/images/file/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.x2robot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.x2robot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Aerospace Innovation Building, 7013 Liuxian Avenue, Xili, Nanshan District, Shenzhen, China",
       "lat": 22.583696,
       "lon": 113.94941,
       "src": "https://www.x2robot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "spirit-ai",
   "name": "Spirit AI",
   "summary": "Hangzhou embodied AI company building general-purpose humanoid robots and robot foundation models.",
   "body": "It develops both the robot hardware and the learning algorithms, and also has a team in Beijing.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.spirit-ai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.spirit-ai.com/"
    },
    "image": {
     "v": "/logos/spirit-ai.png",
     "fit": "contain",
     "src": "https://www.spirit-ai.com/templates/dist/images/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://pitchhub.36kr.com/project/3051237195749764",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://pitchhub.36kr.com/project/3051237195749764",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Xiaoshan District, Hangzhou, Zhejiang, China",
       "lat": 30.186182,
       "lon": 120.259753,
       "src": "https://pitchhub.36kr.com/project/3051237195749764"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dexmate",
   "name": "Dexmate",
   "summary": "Bay Area maker of mobile robots for physical AI teams.",
   "body": "Dexmate builds a platform intended to make physical AI accessible to any team.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.dexmate.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dexmate.ai/"
    },
    "image": {
     "v": "/logos/dexmate.png",
     "fit": "contain",
     "src": "https://www.dexmate.com/apple-icon.png?apple-icon.2z6d81au1kp84.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Fremont",
     "src": "https://www.dexmate.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.dexmate.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Fremont, CA, United States",
       "lat": 37.54827,
       "lon": -121.988571,
       "src": "https://www.dexmate.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "foundation-robotics",
   "name": "Foundation Robotics",
   "summary": "San Francisco humanoid robot maker.",
   "body": "Foundation builds the Phantom humanoid and its Cortex software, designed in California and made in the US for industrial and defence work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://foundation.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://foundation.bot/"
    },
    "image": {
     "v": "/logos/foundation-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/PLJcg9Snlnef0hkLonMvePlX38.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://foundation.bot/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://foundation.bot/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://foundation.bot/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "persona-ai",
   "name": "Persona AI",
   "summary": "Houston maker of industrial humanoid robots for shipyards and heavy industry.",
   "body": "Its humanoids are aimed at welding, fitting and fabrication work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://persona.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://persona.ai/"
    },
    "image": {
     "v": "/logos/persona-ai.png",
     "fit": "contain",
     "src": "https://persona.ai/wp-content/uploads/favicon-300x300.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Houston",
     "src": "https://persona.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://persona.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Houston, TX, United States",
       "lat": 29.758938,
       "lon": -95.367697,
       "src": "https://persona.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "humanoid",
   "name": "Humanoid",
   "summary": "London humanoid robot company.",
   "body": "Founded by Artem Sokolov in 2024, it builds the HMND 01 humanoid in wheeled and legged versions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://thehumanoid.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://thehumanoid.ai/"
    },
    "image": {
     "v": "/logos/humanoid.png",
     "fit": "contain",
     "src": "https://thehumanoid.ai/wp-content/uploads/2024/12/cropped-DARK_W_BG_ROUNDED-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://thehumanoid.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://thehumanoid.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://thehumanoid.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mentee-robotics",
   "name": "Mentee Robotics",
   "summary": "Israeli maker of the MenteeBot humanoid, now part of Mobileye.",
   "body": "Co-founded by Amnon Shashua in 2022. Mobileye completed its acquisition of the company in February 2026.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.menteebot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.menteebot.com/"
    },
    "image": {
     "v": "/logos/mentee-robotics.png",
     "fit": "contain",
     "src": "https://www.menteebot.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Herzliya",
     "src": "https://www.israelrobotics.org/en/companies/mentee-robotics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://www.israelrobotics.org/en/companies/mentee-robotics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Herzliya, Israel",
       "lat": 32.165625,
       "lon": 34.846902,
       "src": "https://www.israelrobotics.org/en/companies/mentee-robotics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kinisi-robotics",
   "name": "Kinisi Robotics",
   "summary": "Bristol maker of the KR1 wheeled humanoid, now part of Bear Robotics.",
   "body": "Founded by Bear Robotics co-founder Brennand Pierce. Bear Robotics agreed to acquire it in June 2026.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.kinisi.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kinisi.com/"
    },
    "image": {
     "v": "/logos/kinisi-robotics.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/652cbb3fb1f91809d4610dc0/76e0fba4-62c7-49c1-92cf-997196a4bec3/kinisi-logo.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://www.bearrobotics.ai/blog/bear-robotics-to-acquire-kinisi-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.bearrobotics.ai/blog/bear-robotics-to-acquire-kinisi-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bristol, United Kingdom",
       "lat": 51.443014,
       "lon": -2.581662,
       "src": "https://www.bearrobotics.ai/blog/bear-robotics-to-acquire-kinisi-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "reflex-robotics",
   "name": "Reflex Robotics",
   "summary": "New York maker of wheeled humanoid robots for logistics and manufacturing.",
   "body": "Founded in 2022, it combines its robots with remote supervision for repetitive industrial tasks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.reflexrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.reflexrobotics.com/"
    },
    "image": {
     "v": "/logos/reflex-robotics.png",
     "fit": "contain",
     "src": "https://www.reflexrobotics.com/Favicon_V5.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://pitchbook.com/profiles/company/590329-81",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://pitchbook.com/profiles/company/590329-81",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "141 Flushing Avenue, Brooklyn, NY 11205, United States",
       "lat": 40.698585,
       "lon": -73.971148,
       "src": "https://pitchbook.com/profiles/company/590329-81"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "weave-robotics",
   "name": "Weave Robotics",
   "summary": "San Francisco maker of home robots.",
   "body": "Founded in 2024 by former Apple engineers and backed by Y Combinator. Its first product, Isaac 0, is a laundry-folding robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.weaverobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.weaverobotics.com/"
    },
    "image": {
     "v": "/logos/weave-robotics.png",
     "fit": "contain",
     "src": "https://www.weaverobotics.com/images/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://robottoday.com/suppliers-discovery/weave-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://robottoday.com/suppliers-discovery/weave-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "944 Folsom Street, San Francisco, CA 94107, United States",
       "lat": 37.779411,
       "lon": -122.404615,
       "src": "https://robottoday.com/suppliers-discovery/weave-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "the-bot-company",
   "name": "The Bot Company",
   "summary": "San Francisco startup building robots for household chores.",
   "body": "Founded in 2024 by Cruise co-founder Kyle Vogt.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.bot.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bot.co/"
    },
    "image": {
     "v": "/logos/the-bot-company.png",
     "fit": "contain",
     "src": "https://www.bot.co/icon/apple-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.cbinsights.com/company/bot-company",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.cbinsights.com/company/bot-company",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "552 Brannan Street, San Francisco, CA 94107, United States",
       "lat": 37.777438,
       "lon": -122.397891,
       "src": "https://www.cbinsights.com/company/bot-company"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sunday-robotics",
   "name": "Sunday Robotics",
   "summary": "Bay Area maker of the Memo home robot.",
   "body": "Founded by Tony Zhao and Cheng Chi. Memo is a wheeled robot for chores such as dishes, laundry and tidying.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.sunday.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sunday.ai/"
    },
    "image": {
     "v": "/logos/sunday-robotics.png",
     "fit": "contain",
     "src": "https://www.sunday.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redwood City",
     "src": "https://jobs.ashbyhq.com/sunday",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://jobs.ashbyhq.com/sunday",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "305 Walnut Street, Redwood City, CA, United States",
       "lat": 37.49209,
       "lon": -122.222341,
       "src": "https://jobs.ashbyhq.com/sunday"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hexagon-robotics",
   "name": "Hexagon Robotics",
   "summary": "Zurich humanoid robotics division of Hexagon, maker of the AEON humanoid.",
   "body": "Part of the Swedish measurement-technology group Hexagon AB.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robotics.hexagon.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotics.hexagon.com/"
    },
    "image": {
     "v": "/logos/hexagon-robotics.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Hexagon_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://robotics.hexagon.com/imprint/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://robotics.hexagon.com/imprint/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Räffelstrasse 26, 8045 Zurich, Switzerland",
       "lat": 47.36358,
       "lon": 8.512606,
       "src": "https://robotics.hexagon.com/imprint/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "enchanted-tools",
   "name": "Enchanted Tools",
   "summary": "Paris maker of the Mirokaï service robots.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://enchanted.tools/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://enchanted.tools/"
    },
    "image": {
     "v": "/logos/enchanted-tools.png",
     "fit": "contain",
     "src": "https://enchanted.tools/_nuxt/icons/icon_512x512.9caff1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://enchanted.tools/",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://enchanted.tools/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "18 rue de la Fontaine au Roi, 75011 Paris, France",
       "lat": 48.868195,
       "lon": 2.370587,
       "src": "https://enchanted.tools/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pollen-robotics",
   "name": "Pollen Robotics",
   "summary": "Bordeaux maker of open-source robots, part of Hugging Face.",
   "body": "It makes the Reachy humanoid and, with Hugging Face, the Reachy Mini desktop robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.pollen-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pollen-robotics.com/"
    },
    "image": {
     "v": "/logos/pollen-robotics.png",
     "fit": "contain",
     "src": "https://pollen-robotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bordeaux",
     "src": "https://www.pollen-robotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://www.pollen-robotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2 Place Jean Jaurès, 33000 Bordeaux, France",
       "lat": 44.842818,
       "lon": -0.571042,
       "src": "https://www.pollen-robotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "maxtronics",
   "name": "Maxtronics",
   "summary": "French company continuing the NAO humanoid line after Aldebaran.",
   "body": "Maxvision Technology bought the core assets of Aldebaran (formerly SoftBank Robotics Europe), maker of NAO and Pepper, in July 2025 and created Maxtronics in August 2025.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://maxtronics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://maxtronics.com/"
    },
    "image": {
     "v": "/logos/maxtronics.png",
     "fit": "contain",
     "src": "https://maxtronics.com/wp-content/uploads/logo_maxtronics_blue.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Issy-les-Moulineaux",
     "src": "https://maxtronics.com/en/contact-us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://maxtronics.com/en/contact-us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "11 rue Camille Desmoulins, 92130 Issy-les-Moulineaux, France",
       "lat": 48.830325,
       "lon": 2.26596,
       "src": "https://maxtronics.com/en/contact-us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kawada-robotics",
   "name": "Kawada Robotics",
   "summary": "Japanese maker of the NEXTAGE humanoid industrial robots.",
   "body": "Part of the Kawada group, it was early to commercialise humanoid robots that work alongside people.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.kawadarobot.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kawadarobot.co.jp/"
    },
    "image": {
     "v": "/logos/kawada-robotics.png",
     "fit": "contain",
     "src": "https://www.kawadarobot.co.jp/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.kawadarobot.co.jp/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.kawadarobot.co.jp/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://www.kawadarobot.co.jp/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "westwood-robotics",
   "name": "Westwood Robotics",
   "summary": "Los Angeles-area maker of humanoid robots and actuators.",
   "body": "Its products include the THEMIS humanoid and BEAR actuators.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.westwoodrobotics.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.westwoodrobotics.io/"
    },
    "image": {
     "v": "/logos/westwood-robotics.png",
     "fit": "contain",
     "src": "https://www.westwoodrobotics.io/wp-content/uploads/2020/09/cropped-SiteIdentity-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.usaspending.gov/recipient/2d2eb1ff-40b9-597c-687c-a835ae5c15b4-P/latest",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.usaspending.gov/recipient/2d2eb1ff-40b9-597c-687c-a835ae5c15b4-P/latest",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "13206 Fiji Way, Unit K, Marina del Rey, CA 90292, United States",
       "lat": 33.978244,
       "lon": -118.436796,
       "src": "https://www.usaspending.gov/recipient/2d2eb1ff-40b9-597c-687c-a835ae5c15b4-P/latest"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "anybotics",
   "name": "ANYbotics",
   "summary": "Zurich maker of the ANYmal legged inspection robot.",
   "body": "A 2016 spin-off from ETH Zurich. ANYmal does autonomous inspection at industrial plants.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.anybotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.anybotics.com/"
    },
    "image": {
     "v": "/logos/anybotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.anybotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://en.wikipedia.org/wiki/ANYbotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://en.wikipedia.org/wiki/ANYbotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://en.wikipedia.org/wiki/ANYbotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hello-robot",
   "name": "Hello Robot",
   "summary": "California maker of the Stretch mobile manipulator.",
   "body": "Stretch is a lightweight mobile manipulator for homes, research and assistive use.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://hello-robot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hello-robot.com/"
    },
    "image": {
     "v": "/logos/hello-robot.png",
     "fit": "contain",
     "src": "https://hello-robot.com/wp-content/uploads/2026/04/hello-robot-favicon.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Martinez",
     "src": "https://hello-robot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://hello-robot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Martinez, CA, United States",
       "lat": 38.013893,
       "lon": -122.133867,
       "src": "https://hello-robot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kinova",
   "name": "Kinova",
   "summary": "Quebec maker of lightweight robot arms for assistive, medical and research use.",
   "body": "Its Gen3 arms are widely used in robotics research labs.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.kinovarobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kinovarobotics.com/"
    },
    "image": {
     "v": "/logos/kinova.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Kinova_Robotics_logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boisbriand",
     "src": "https://en.wikipedia.org/wiki/Kinova",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://en.wikipedia.org/wiki/Kinova",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boisbriand, QC, Canada",
       "lat": 45.613025,
       "lon": -73.838611,
       "src": "https://en.wikipedia.org/wiki/Kinova"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "trossen-robotics",
   "name": "Trossen Robotics",
   "summary": "Illinois maker of research robot arms, including the ALOHA kits.",
   "body": "Its arms and kits are used for machine-learning and imitation-learning research.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.trossenrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.trossenrobotics.com/"
    },
    "image": {
     "v": "/logos/trossen-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/d3716d_634838f511dd4a3ca990e9ba55b96ea6%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/d3716d_634838f511dd4a3ca990e9ba55b96ea6%7Emv2.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Downers Grove",
     "src": "https://www.trossenrobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.trossenrobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2854 Hitchcock Avenue, Downers Grove, IL 60515, United States",
       "lat": 41.794441,
       "lon": -88.033737,
       "src": "https://www.trossenrobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agilex-robotics",
   "name": "AgileX Robotics",
   "summary": "Shenzhen maker of mobile robot platforms and robot arms.",
   "body": "Products include UGV chassis such as Scout and Ranger, and the PiPER arm, often used in research.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://global.agilex.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://global.agilex.ai/"
    },
    "image": {
     "v": "/logos/agilex-robotics.png",
     "fit": "contain",
     "src": "https://global.agilex.ai/cdn/shop/files/agilexrobotics_official_website_favicon_logo.png?crop=center&height=32&v=1787729560&width=32",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://global.agilex.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://global.agilex.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://global.agilex.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pudu-robotics",
   "name": "Pudu Robotics",
   "summary": "Shenzhen maker of service robots for delivery and cleaning.",
   "body": "Pudu also makes semi-humanoid and humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.pudurobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pudurobotics.com/"
    },
    "image": {
     "v": "/logos/pudu-robotics.png",
     "fit": "contain",
     "src": "https://www.pudurobotics.com/favicon.ico?v=20260831",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.pudurobotics.com/en",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.pudurobotics.com/en",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.pudurobotics.com/en"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "keenon-robotics",
   "name": "Keenon Robotics",
   "summary": "Shanghai maker of service robots for restaurants, hotels and hospitals.",
   "body": "Founded in 2010.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.keenon.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.keenon.com/"
    },
    "image": {
     "v": "/logos/keenon-robotics.png",
     "fit": "contain",
     "src": "https://storage.keenon.cn/assets/site/keenon-static/static.keenon.com/assets/images/common/logo-Colorful.png?sign=3753e3363d636158eb31ab05b02d5ce9&t=6b072bd0",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.keenon.com/en",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.keenon.com/en",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://www.keenon.com/en"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bear-robotics",
   "name": "Bear Robotics",
   "summary": "Bay Area maker of autonomous service robots, majority-owned by LG Electronics.",
   "body": "It says it has shipped more than 16,000 service robots. In 2026 it agreed to acquire the humanoid maker Kinisi Robotics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.bearrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bearrobotics.ai/"
    },
    "image": {
     "v": "/logos/bear-robotics.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/652cbb3fb1f91809d4610dc0/74b951f7-549f-47a7-bc65-a55df6f78687/favicon.ico?format=100w",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redwood City",
     "src": "https://www.bearrobotics.ai/blog/bear-robotics-to-acquire-kinisi-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.bearrobotics.ai/blog/bear-robotics-to-acquire-kinisi-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Redwood City, CA, United States",
       "lat": 37.486324,
       "lon": -122.232523,
       "src": "https://www.bearrobotics.ai/blog/bear-robotics-to-acquire-kinisi-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "naver-labs",
   "name": "Naver Labs",
   "summary": "Seongnam research arm of Naver working on AI, robotics, autonomous driving and mapping.",
   "body": "Its robots operate in Naver's 1784 headquarters building.",
   "data": {
    "roles": {
     "v": [
      "Research lab",
      "Robot maker"
     ],
     "src": "https://www.naverlabs.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.naverlabs.com/"
    },
    "image": {
     "v": "/logos/naver-labs.png",
     "fit": "contain",
     "src": "https://www.naverlabs.com/img/naver_labs_favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seongnam",
     "src": "https://www.naverlabs.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.naverlabs.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1784 Naver, 95 Jeongjail-ro, Bundang-gu, Seongnam, Gyeonggi, South Korea",
       "lat": 37.358881,
       "lon": 127.105184,
       "src": "https://www.naverlabs.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sony",
   "name": "Sony",
   "summary": "Tokyo electronics and entertainment group, maker of the aibo robot dog.",
   "body": "Sony's robotics work includes aibo and research through Sony AI.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.sony.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sony.com/"
    },
    "image": {
     "v": "/logos/sony.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Sony_Group_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://en.wikipedia.org/wiki/Sony",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://en.wikipedia.org/wiki/Sony",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1-7-1 Konan, Minato, Tokyo, Japan",
       "lat": 35.630129,
       "lon": 139.750752,
       "src": "https://en.wikipedia.org/wiki/Sony"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "samsung-electronics",
   "name": "Samsung Electronics",
   "summary": "South Korean electronics maker and the largest shareholder of Rainbow Robotics.",
   "body": "Samsung became Rainbow Robotics' largest shareholder in 2024–2025 and set up a future robotics office.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Investor"
     ],
     "src": "https://www.samsung.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.samsung.com/"
    },
    "image": {
     "v": "/logos/samsung-electronics.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Samsung_wordmark.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Suwon",
     "src": "https://en.wikipedia.org/wiki/Samsung_Electronics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://en.wikipedia.org/wiki/Samsung_Electronics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "129 Samsung-ro, Yeongtong-gu, Suwon, Gyeonggi, South Korea",
       "lat": 37.258116,
       "lon": 127.051315,
       "src": "https://en.wikipedia.org/wiki/Samsung_Electronics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lg-electronics",
   "name": "LG Electronics",
   "summary": "Seoul electronics maker with a robotics business and a majority stake in Bear Robotics.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Investor"
     ],
     "src": "https://www.lg.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lg.com/"
    },
    "image": {
     "v": "/logos/lg-electronics.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/LG_Electronics_logo_2015_%28english%29.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://en.wikipedia.org/wiki/LG_Electronics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://en.wikipedia.org/wiki/LG_Electronics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "LG Twin Towers, 128 Yeoui-daero, Yeongdeungpo-gu, Seoul, South Korea",
       "lat": 37.527927,
       "lon": 126.929241,
       "src": "https://en.wikipedia.org/wiki/LG_Electronics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dexterity",
   "name": "Dexterity",
   "summary": "Bay Area developer of AI robots for logistics, including truck loading.",
   "body": "Its Mech system is a two-armed mobile robot for loading and unloading trucks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.dexterity.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dexterity.ai/"
    },
    "image": {
     "v": "/logos/dexterity.png",
     "fit": "contain",
     "src": "https://dexterity.ai:443/apple-icon.png?apple-icon.6d03d19d.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redwood City",
     "src": "https://www.dexterity.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.dexterity.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Redwood City, CA, United States",
       "lat": 37.486324,
       "lon": -122.232523,
       "src": "https://www.dexterity.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "covariant",
   "name": "Covariant",
   "summary": "Emeryville developer of AI for warehouse robot picking.",
   "body": "Founded in 2017 by Pieter Abbeel, Peter Chen, Rocky Duan and Tianhao Zhang. Its founders and part of its team joined Amazon in 2024 under a licensing deal.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://covariant.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://covariant.ai/"
    },
    "image": {
     "v": "/logos/covariant.png",
     "fit": "contain",
     "src": "https://covariant.ai/covariant-c.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Emeryville",
     "src": "https://en.wikipedia.org/wiki/Covariant_(company)",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Covariant_(company)",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Emeryville, CA, United States",
       "lat": 37.831409,
       "lon": -122.286527,
       "src": "https://en.wikipedia.org/wiki/Covariant_(company)"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mujin",
   "name": "Mujin",
   "summary": "Tokyo developer of intelligent robot control software for factories and warehouses.",
   "body": "Its MujinOS runs industrial robots for picking, palletising and depalletising. It also has a US office in Georgia.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://mujin-corp.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mujin-corp.com/"
    },
    "image": {
     "v": "/logos/mujin.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/GaWdMmVtiRxsghsJbNs6ggSBfU.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://mujin-corp.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://mujin-corp.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://mujin-corp.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ambi-robotics",
   "name": "Ambi Robotics",
   "summary": "Berkeley maker of AI-powered robotic parcel sorting systems.",
   "body": "Spun out of UC Berkeley research.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.ambirobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ambirobotics.com/"
    },
    "image": {
     "v": "/logos/ambi-robotics.png",
     "fit": "contain",
     "src": "https://www.ambirobotics.com/wp-content/themes/ambirobotics/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berkeley",
     "src": "https://www.ambirobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ambirobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1610 Fifth Street, Berkeley, CA 94710, United States",
       "lat": 37.873566,
       "lon": -122.300815,
       "src": "https://www.ambirobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pickle-robot",
   "name": "Pickle Robot",
   "summary": "Boston-area maker of robots that unload trucks.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://picklerobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://picklerobot.com/"
    },
    "image": {
     "v": "/logos/pickle-robot.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.picklerobot.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.picklerobot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.picklerobot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "465 Medford Street, Suite 102, Charlestown, MA 02129, United States",
       "lat": 42.384762,
       "lon": -71.067991,
       "src": "https://www.picklerobot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nimble-robotics",
   "name": "Nimble Robotics",
   "summary": "San Francisco developer of autonomous fulfilment robots, operating as a robotic 3PL.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://nimble.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://nimble.ai/"
    },
    "image": {
     "v": "/logos/nimble-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=nimble.ai&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://pitchbook.com/profiles/company/399536-92",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://pitchbook.com/profiles/company/399536-92",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "488 8th Street, San Francisco, CA, United States",
       "lat": 37.77262,
       "lon": -122.407516,
       "src": "https://pitchbook.com/profiles/company/399536-92"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "collaborative-robotics",
   "name": "Collaborative Robotics",
   "summary": "Santa Clara maker of the Proxie mobile manipulator for logistics and healthcare.",
   "body": "Founded by Brad Porter, formerly head of robotics at Amazon.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.co.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.co.bot/"
    },
    "image": {
     "v": "/logos/collaborative-robotics.png",
     "fit": "contain",
     "src": "https://www.co.bot/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.co.bot/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.co.bot/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Santa Clara, CA, United States",
       "lat": 37.354113,
       "lon": -121.955174,
       "src": "https://www.co.bot/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "machina-labs",
   "name": "Machina Labs",
   "summary": "Los Angeles developer of robotic, software-defined metal forming.",
   "body": "Machina uses pairs of industrial robots to form complex sheet-metal structures.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://machinalabs.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://machinalabs.ai/"
    },
    "image": {
     "v": "/logos/machina-labs.png",
     "fit": "contain",
     "src": "https://machinalabs.ai/hubfs/Machina-Labs_Brandmark-Logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://machinalabs.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://machinalabs.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "9410 Owensmouth Avenue, Chatsworth, CA 91311, United States",
       "lat": 34.241113,
       "lon": -118.601741,
       "src": "https://machinalabs.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mytra",
   "name": "Mytra",
   "summary": "Bay Area maker of robotic warehouse storage systems.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://mytra.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mytra.ai/"
    },
    "image": {
     "v": "/logos/mytra.png",
     "fit": "contain",
     "src": "https://mytra.ai/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brisbane",
     "src": "https://mytra.ai/news/mytra-announces-expansion-and-new-headquarters-with-brisbane-california-campus",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://mytra.ai/news/mytra-announces-expansion-and-new-headquarters-with-brisbane-california-campus",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brisbane, CA, United States",
       "lat": 37.687165,
       "lon": -122.402794,
       "src": "https://mytra.ai/news/mytra-announces-expansion-and-new-headquarters-with-brisbane-california-campus"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bedrock-robotics",
   "name": "Bedrock Robotics",
   "summary": "San Francisco developer of autonomy kits for excavators and other construction machines.",
   "body": "Led by co-founder and CEO Boris Sofman, formerly of Waymo and Anki.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://bedrockrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bedrockrobotics.com/"
    },
    "image": {
     "v": "/logos/bedrock-robotics.png",
     "fit": "contain",
     "src": "https://bedrockrobotics.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://bedrockrobotics.com/about",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://bedrockrobotics.com/about",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://bedrockrobotics.com/about"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "field-ai",
   "name": "Field AI",
   "summary": "Irvine developer of autonomy software (field foundation models) for robots in unstructured environments.",
   "body": "Founded by Ali Agha. Its software runs on legged, wheeled and humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.fieldai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.fieldai.com/"
    },
    "image": {
     "v": "/logos/field-ai.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.fieldai.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Irvine",
     "src": "https://www.ocbj.com/oc-homepage/fieldai-robotics-growing-will-need-more-space/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ocbj.com/oc-homepage/fieldai-robotics-growing-will-need-more-space/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3 Morgan, Irvine, CA, United States",
       "lat": 33.655058,
       "lon": -117.715375,
       "src": "https://www.ocbj.com/oc-homepage/fieldai-robotics-growing-will-need-more-space/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "generalist-ai",
   "name": "Generalist AI",
   "summary": "San Mateo lab building embodied foundation models for general-purpose robots.",
   "body": "Co-founded and led by Pete Florence. Its models include GEN-0.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://generalistai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://generalistai.com/"
    },
    "image": {
     "v": "/logos/generalist-ai.png",
     "fit": "contain",
     "src": "https://generalistai.com/assets/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Mateo",
     "src": "https://www.therobotreport.com/generalist-raises-400m-to-scale-its-general-purpose-ai-models/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.therobotreport.com/generalist-raises-400m-to-scale-its-general-purpose-ai-models/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Mateo, CA, United States",
       "lat": 37.563,
       "lon": -122.325327,
       "src": "https://www.therobotreport.com/generalist-raises-400m-to-scale-its-general-purpose-ai-models/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "genesis-ai",
   "name": "Genesis AI",
   "summary": "Physical AI lab building a robotics foundation model trained with its own physics simulation.",
   "body": "Co-founded by Zhou Xian, it works from California and Paris. It launched in 2025 with a $105M seed round led by Eclipse and Khosla Ventures.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://www.genesis.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.genesis.ai/"
    },
    "image": {
     "v": "/logos/genesis-ai.png",
     "fit": "contain",
     "src": "https://www.datocms-assets.com/199265/1790235967-genesis-favicon.png?auto=format&amp;h=192&amp;w=192",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://techcrunch.com/2025/07/01/genesis-ai-launches-with-105m-seed-funding-from-eclipse-khosla-to-build-ai-models-for-robots/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://techcrunch.com/2025/07/01/genesis-ai-launches-with-105m-seed-funding-from-eclipse-khosla-to-build-ai-models-for-robots/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, CA, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://techcrunch.com/2025/07/01/genesis-ai-launches-with-105m-seed-funding-from-eclipse-khosla-to-build-ai-models-for-robots/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dyna-robotics",
   "name": "Dyna Robotics",
   "summary": "Redwood City developer of robot foundation models and commercial robots.",
   "body": "Founded by Lindon Gao, York Yang and Jason Ma. Its robots do end-to-end workflows in hospitality and other sectors.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://www.dyna.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dyna.co/"
    },
    "image": {
     "v": "/logos/dyna-robotics.png",
     "fit": "contain",
     "src": "https://www.dyna.co/apple-icon.png?apple-icon.0nfw9_f0t9tz-.png?dpl=dpl_8X8H2CjPxcjftKFyXyqLfdZPGhkS",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redwood City",
     "src": "https://salesforceventures.com/perspectives/welcome-dyna-robotics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://salesforceventures.com/perspectives/welcome-dyna-robotics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Redwood City, CA, United States",
       "lat": 37.486324,
       "lon": -122.232523,
       "src": "https://salesforceventures.com/perspectives/welcome-dyna-robotics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hillbot",
   "name": "Hillbot",
   "summary": "San Diego robotics startup using simulation to train general-purpose robots.",
   "body": "Co-founded by Hao Su, whose lab created the ManiSkill simulator.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Model lab"
     ],
     "src": "https://www.hillbot.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hillbot.ai/"
    },
    "image": {
     "v": "/logos/hillbot.png",
     "fit": "contain",
     "src": "https://www.hillbot.ai/Symbol-72X72.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Diego",
     "src": "https://www.linkedin.com/company/hillbot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/hillbot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Diego, CA, United States",
       "lat": 32.715706,
       "lon": -117.163828,
       "src": "https://www.linkedin.com/company/hillbot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rlwrld",
   "name": "RLWRLD",
   "summary": "Seoul startup building dexterity-first robot foundation models.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.rlwrld.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rlwrld.ai/"
    },
    "image": {
     "v": "/logos/rlwrld.png",
     "fit": "contain",
     "src": "https://www.rlwrld.ai/uploads/meta/69eabef4e838e4.34557471.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://www.rlwrld.ai/en",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.rlwrld.ai/en",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://www.rlwrld.ai/en"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "openai",
   "name": "OpenAI",
   "summary": "San Francisco AI lab, maker of GPT and ChatGPT, with a robotics team.",
   "body": "OpenAI has invested in robotics companies such as Figure and 1X, and restarted its own robotics team in 2024.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Investor"
     ],
     "src": "https://openai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://openai.com/"
    },
    "image": {
     "v": "/logos/openai.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/OpenAI_logo_2025_%28wordmark%29.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://en.wikipedia.org/wiki/OpenAI",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/OpenAI",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://en.wikipedia.org/wiki/OpenAI"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bytedance-seed",
   "name": "ByteDance Seed",
   "summary": "ByteDance's AI research team, which builds robot models such as GR-3.",
   "body": "Set up in 2023; its robotics work covers vision-language-action models and robot hardware.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://seed.bytedance.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://seed.bytedance.com/"
    },
    "image": {
     "v": "/logos/bytedance-seed.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/ByteDance_logo_English.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://seed.bytedance.com/en/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://seed.bytedance.com/en/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://seed.bytedance.com/en/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tencent-robotics-x",
   "name": "Tencent Robotics X",
   "summary": "Tencent's robotics research lab in Shenzhen.",
   "body": "Founded in 2018, it researches legged robots, dexterous manipulation and embodied AI.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.tencent.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tencent.com/"
    },
    "image": {
     "v": "/logos/tencent-robotics-x.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Tencent_logo_2017.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://en.wikipedia.org/wiki/Tencent",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/Tencent",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tencent Binhai Towers, Nanshan District, Shenzhen, China",
       "lat": 22.525875,
       "lon": 113.930408,
       "src": "https://en.wikipedia.org/wiki/Tencent"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "microsoft-research",
   "name": "Microsoft Research",
   "summary": "Microsoft's research organisation, including robotics and embodied AI work.",
   "body": "It published Magma, a foundation model for multimodal AI agents and robots, in 2025.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.microsoft.com/en-us/research/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.microsoft.com/en-us/research/"
    },
    "image": {
     "v": "/logos/microsoft-research.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Segoe_msr_logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redmond",
     "src": "https://en.wikipedia.org/wiki/Microsoft_Research",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Microsoft_Research",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Redmond, WA, United States",
       "lat": 47.669414,
       "lon": -122.123877,
       "src": "https://en.wikipedia.org/wiki/Microsoft_Research"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ai2",
   "name": "Allen Institute for AI",
   "summary": "Seattle non-profit AI research institute (Ai2), with an embodied AI programme.",
   "body": "Founded by Paul Allen in 2014. Its embodied AI work includes the AI2-THOR simulator and the open MolmoAct robot model.",
   "data": {
    "roles": {
     "v": [
      "Research lab",
      "Model lab"
     ],
     "src": "https://allenai.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://allenai.org/"
    },
    "image": {
     "v": "/logos/ai2.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Allen_Institute_for_Artificial_Intelligence.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://allenai.org/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://allenai.org/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3800 Latona Ave NE, Suite 300, Seattle, WA 98105, United States",
       "lat": 47.654394,
       "lon": -122.324895,
       "src": "https://allenai.org/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shanghai-ai-laboratory",
   "name": "Shanghai AI Laboratory",
   "summary": "Shanghai state-backed AI research lab with an embodied AI programme.",
   "body": "Its embodied AI work includes the GRUtopia simulation platform and open robot datasets.",
   "data": {
    "roles": {
     "v": [
      "Research lab",
      "Model lab"
     ],
     "src": "https://www.shlab.org.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.shlab.org.cn/"
    },
    "image": {
     "v": "/logos/shanghai-ai-laboratory.png",
     "fit": "contain",
     "src": "https://www.shlab.org.cn/static/asset/2025/imgs/logo.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.shlab.org.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.shlab.org.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "201 Yunwang Road, Xuhui District, Shanghai, China",
       "lat": 31.190094,
       "lon": 121.431114,
       "src": "https://www.shlab.org.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "baai",
   "name": "Beijing Academy of Artificial Intelligence",
   "summary": "Beijing non-profit AI research lab (BAAI) with embodied AI research.",
   "body": "Founded in 2018. Its embodied AI work includes RoboBrain models.",
   "data": {
    "roles": {
     "v": [
      "Research lab",
      "Model lab"
     ],
     "src": "https://www.baai.ac.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.baai.ac.cn/"
    },
    "image": {
     "v": "/logos/baai.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing_Academy_of_Artificial_Intelligence_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://en.wikipedia.org/wiki/Beijing_Academy_of_Artificial_Intelligence",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/Beijing_Academy_of_Artificial_Intelligence",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Haidian District, Beijing, China",
       "lat": 39.958072,
       "lon": 116.292405,
       "src": "https://en.wikipedia.org/wiki/Beijing_Academy_of_Artificial_Intelligence"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "foxglove",
   "name": "Foxglove",
   "summary": "San Francisco maker of a data and visualisation platform for robotics.",
   "body": "Teams use it to collect, search and debug robot fleet data and curate training datasets.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://foxglove.dev/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://foxglove.dev/"
    },
    "image": {
     "v": "/logos/foxglove.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=foxglove.dev&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://foxglove.dev/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://foxglove.dev/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://foxglove.dev/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rerun",
   "name": "Rerun",
   "summary": "Stockholm maker of open-source tools to log and visualise multimodal robot data.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://rerun.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rerun.io/"
    },
    "image": {
     "v": "/logos/rerun.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=rerun.io&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stockholm",
     "src": "https://rerun.io/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://rerun.io/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Stockholm, Sweden",
       "lat": 59.325117,
       "lon": 18.071093,
       "src": "https://rerun.io/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "viam",
   "name": "Viam",
   "summary": "New York maker of a software platform for building and running robots.",
   "body": "Founded by Eliot Horowitz, co-founder of MongoDB.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.viam.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.viam.com/"
    },
    "image": {
     "v": "/logos/viam.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.viam.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.viam.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.viam.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.viam.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "formant",
   "name": "Formant",
   "summary": "San Francisco maker of robot fleet monitoring and operations software.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://formant.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://formant.io/"
    },
    "image": {
     "v": "/logos/formant.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/oXr4hxO6zktCkRwlGGTK3hUQAc.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.formant.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.formant.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.formant.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inorbit",
   "name": "InOrbit",
   "summary": "Mountain View maker of robot orchestration software for mixed robot fleets.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.inorbit.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.inorbit.ai/"
    },
    "image": {
     "v": "/logos/inorbit.png",
     "fit": "contain",
     "src": "https://www.inorbit.ai/hubfs/favicon-inorbit.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://www.inorbit.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.inorbit.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, CA, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://www.inorbit.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "picknik-robotics",
   "name": "PickNik Robotics",
   "summary": "Boulder robotics software company, maintainer of MoveIt.",
   "body": "Its MoveIt Pro platform helps companies deploy AI to robot arms.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://picknik.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://picknik.ai/"
    },
    "image": {
     "v": "/logos/picknik-robotics.png",
     "fit": "contain",
     "src": "https://picknik.ai/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boulder",
     "src": "https://picknik.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://picknik.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boulder, CO, United States",
       "lat": 40.014986,
       "lon": -105.270545,
       "src": "https://picknik.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cyberbotics",
   "name": "Cyberbotics",
   "summary": "Swiss developer of the open-source Webots robot simulator.",
   "body": "Spun out of EPFL in 1998.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://cyberbotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cyberbotics.com/"
    },
    "image": {
     "v": "/logos/cyberbotics.png",
     "fit": "contain",
     "src": "https://cyberbotics.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lausanne",
     "src": "https://cyberbotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://cyberbotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lausanne, Switzerland",
       "lat": 46.521827,
       "lon": 6.632702,
       "src": "https://cyberbotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "duality-robotics",
   "name": "Duality Robotics",
   "summary": "San Mateo maker of the Falcon digital-twin simulator for robotics and AI.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.duality.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.duality.ai/"
    },
    "image": {
     "v": "/logos/duality-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.duality.ai&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Mateo",
     "src": "https://www.duality.ai/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.duality.ai/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Mateo, CA, United States",
       "lat": 37.563,
       "lon": -122.325327,
       "src": "https://www.duality.ai/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lucky-robots",
   "name": "Lucky Robots",
   "summary": "Austin developer of simulation worlds for training robots.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://luckyrobots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://luckyrobots.com/"
    },
    "image": {
     "v": "/logos/lucky-robots.png",
     "fit": "contain",
     "src": "https://luckyrobots.com/assets/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://robottoday.com/suppliers-discovery/lucky-robots",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://robottoday.com/suppliers-discovery/lucky-robots",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, TX, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://robottoday.com/suppliers-discovery/lucky-robots"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "scale-ai",
   "name": "Scale AI",
   "summary": "San Francisco AI data company, with a physical AI data programme for robotics.",
   "body": "Founded in 2016 by Alexandr Wang and Lucy Guo. Meta bought a 49% stake in 2025.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Software developer"
     ],
     "src": "https://scale.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://scale.com/"
    },
    "image": {
     "v": "/logos/scale-ai.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Scale_AI.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://en.wikipedia.org/wiki/Scale_AI",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Scale_AI",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://en.wikipedia.org/wiki/Scale_AI"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "harmonic-drive-systems",
   "name": "Harmonic Drive Systems",
   "summary": "Tokyo maker of strain-wave (Harmonic Drive) precision gears used in robot joints.",
   "body": "Its reducers are used in industrial robots, cobots and humanoids.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.hds.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hds.co.jp/"
    },
    "image": {
     "v": "/logos/harmonic-drive-systems.png",
     "fit": "contain",
     "src": "https://www.hds.co.jp/Portals/0/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.hds.co.jp/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.hds.co.jp/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shinagawa, Tokyo, Japan",
       "lat": 35.609201,
       "lon": 139.730198,
       "src": "https://www.hds.co.jp/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nabtesco",
   "name": "Nabtesco",
   "summary": "Tokyo maker of precision RV reducers for industrial robot joints.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.nabtesco.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nabtesco.com/"
    },
    "image": {
     "v": "/logos/nabtesco.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Nabtesco_company_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://en.wikipedia.org/wiki/Nabtesco",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://en.wikipedia.org/wiki/Nabtesco",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://en.wikipedia.org/wiki/Nabtesco"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "maxon",
   "name": "maxon",
   "summary": "Swiss maker of precision electric motors and drives, used in robots and Mars rovers.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.maxongroup.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.maxongroup.com/"
    },
    "image": {
     "v": "/logos/maxon.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Maxon_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sachseln",
     "src": "https://en.wikipedia.org/wiki/Maxon_Group",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://en.wikipedia.org/wiki/Maxon_Group",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brünigstrasse 220, 6072 Sachseln, Switzerland",
       "lat": 46.859563,
       "lon": 8.220492,
       "src": "https://en.wikipedia.org/wiki/Maxon_Group"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "schaeffler",
   "name": "Schaeffler",
   "summary": "German automotive and industrial supplier making actuators and bearings for humanoid robots.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.schaeffler.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.schaeffler.com/"
    },
    "image": {
     "v": "/logos/schaeffler.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Schaeffler_Gruppe_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Herzogenaurach",
     "src": "https://en.wikipedia.org/wiki/Schaeffler_Group",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://en.wikipedia.org/wiki/Schaeffler_Group",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Industriestraße 1–3, 91074 Herzogenaurach, Germany",
       "lat": 49.564686,
       "lon": 10.885996,
       "src": "https://en.wikipedia.org/wiki/Schaeffler_Group"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shadow-robot-company",
   "name": "Shadow Robot Company",
   "summary": "London maker of the Shadow Dexterous Hand.",
   "body": "Its dexterous hands and teleoperation systems are used in research, including OpenAI's Dactyl and Google DeepMind's projects.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://www.shadowrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.shadowrobot.com/"
    },
    "image": {
     "v": "/logos/shadow-robot-company.png",
     "fit": "contain",
     "src": "https://shadowrobot.com/wp-content/uploads/2022/04/cropped-SR-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.shadowrobot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.shadowrobot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://www.shadowrobot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inspire-robots",
   "name": "Inspire Robots",
   "summary": "Beijing maker of dexterous five-fingered robot hands, micro servo actuators and grippers.",
   "body": "Its hands are used on many humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.inspire-robots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.inspire-robots.com/"
    },
    "image": {
     "v": "/logos/inspire-robots.png",
     "fit": "contain",
     "src": "https://www.inspire-robots.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.inspire-robots.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.inspire-robots.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.inspire-robots.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sharpa",
   "name": "Sharpa",
   "summary": "Singapore maker of tactile dexterous robot hands and humanoid robots.",
   "body": "Its SharpaWave hand has 22 degrees of freedom and visuo-tactile sensing.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://www.sharpa.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sharpa.com/"
    },
    "image": {
     "v": "/logos/sharpa.png",
     "fit": "contain",
     "src": "https://www.sharpa.com/cdn/shop/files/favicon.jpg?crop=center&height=32&v=1765525772&width=32",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://exa.ai/library/legal/entity/wgk6m66gc95",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://exa.ai/library/legal/entity/wgk6m66gc95",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "11 Beach Road, Singapore 189675",
       "lat": 1.300736,
       "lon": 103.860901,
       "src": "https://exa.ai/library/legal/entity/wgk6m66gc95"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wonik-robotics",
   "name": "Wonik Robotics",
   "summary": "Korean maker of the Allegro Hand and mobile robots.",
   "body": "The Allegro Hand is a widely used research robot hand.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.wonikrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.wonikrobotics.com/"
    },
    "image": {
     "v": "/logos/wonik-robotics.png",
     "fit": "contain",
     "src": "https://wonikrobotics.com/img/favicon/android-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seongnam",
     "src": "https://wonikrobotics.com/en/sub/company/location.php",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://wonikrobotics.com/en/sub/company/location.php",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "20 Pangyo-ro 255beon-gil, Bundang-gu, Seongnam, Gyeonggi, South Korea",
       "lat": 37.404129,
       "lon": 127.098509,
       "src": "https://wonikrobotics.com/en/sub/company/location.php"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "psyonic",
   "name": "PSYONIC",
   "summary": "US maker of the Ability Hand, a bionic hand also used on robots.",
   "body": "Founded at the University of Illinois Urbana-Champaign.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.psyonic.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.psyonic.io/"
    },
    "image": {
     "v": "/logos/psyonic.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/10227d27-d28c-4eff-a557-3288c139c925/favicon.ico?format=100w",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Diego",
     "src": "https://www.psyonic.io/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.psyonic.io/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "10939 Technology Place, San Diego, CA 92127, United States",
       "lat": 33.008626,
       "lon": -117.094497,
       "src": "https://www.psyonic.io/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tesollo",
   "name": "Tesollo",
   "summary": "Incheon maker of multi-fingered robot grippers and hands.",
   "body": "Founded in 2019; products include the DG-5F humanoid hand.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://en.tesollo.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://en.tesollo.com/"
    },
    "image": {
     "v": "/logos/tesollo.png",
     "fit": "contain",
     "src": "https://www.tesollo.com/branding/logo_color_180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Incheon",
     "src": "https://www.tesollo.com/company/location",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.tesollo.com/company/location",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Posco Tower, 165 Convensia-daero, Yeonsu-gu, Incheon, South Korea",
       "lat": 37.389394,
       "lon": 126.644228,
       "src": "https://www.tesollo.com/company/location"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotiq",
   "name": "Robotiq",
   "summary": "Quebec maker of grippers, sensors and palletising cells for collaborative robots.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://robotiq.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotiq.com/"
    },
    "image": {
     "v": "/logos/robotiq.png",
     "fit": "contain",
     "src": "https://robotiq.com/hubfs/favicon-32x32-1e60fbc9121451d8bf09f1a45967594c.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lévis",
     "src": "https://robotiq.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://robotiq.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lévis, QC, Canada",
       "lat": 46.803311,
       "lon": -71.177879,
       "src": "https://robotiq.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "schunk",
   "name": "SCHUNK",
   "summary": "German maker of grippers, tool-holding and automation components.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://schunk.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://schunk.com/"
    },
    "image": {
     "v": "/logos/schunk.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Schunk.svg?width=600",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lauffen am Neckar",
     "src": "https://schunk.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://schunk.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bahnhofstraße 106–134, 74348 Lauffen am Neckar, Germany",
       "lat": 49.072149,
       "lon": 9.136112,
       "src": "https://schunk.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "onrobot",
   "name": "OnRobot",
   "summary": "Danish maker of end-of-arm tools and grippers for collaborative robots.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://onrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://onrobot.com/"
    },
    "image": {
     "v": "/logos/onrobot.png",
     "fit": "contain",
     "src": "https://onrobot.com/images/favicon-180px.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Odense",
     "src": "https://onrobot.com/en",
     "asof": "2026-11"
    },
    "country": {
     "v": "Denmark",
     "src": "https://onrobot.com/en",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Odense, Denmark",
       "lat": 55.399723,
       "lon": 10.38521,
       "src": "https://onrobot.com/en"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gelsight",
   "name": "GelSight",
   "summary": "Waltham maker of high-resolution tactile sensors, a spin-off from MIT.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.gelsight.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gelsight.com/"
    },
    "image": {
     "v": "/logos/gelsight.png",
     "fit": "contain",
     "src": "https://www.gelsight.com/wp-content/uploads/2021/09/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Waltham",
     "src": "https://www.gelsight.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.gelsight.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "179 Bear Hill Road, Suite 202, Waltham, MA 02451, United States",
       "lat": 42.382641,
       "lon": -71.264777,
       "src": "https://www.gelsight.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "paxini",
   "name": "PaXini",
   "summary": "Chinese maker of multi-dimensional tactile sensors and dexterous hands for robots.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.paxini.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.paxini.com/"
    },
    "image": {
     "v": "/logos/paxini.png",
     "fit": "contain",
     "src": "https://www.paxini.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.paxini.com/cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.paxini.com/cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.paxini.com/cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xela-robotics",
   "name": "XELA Robotics",
   "summary": "Tokyo maker of tactile sensors that give robots a sense of touch.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.xelarobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.xelarobotics.com/"
    },
    "image": {
     "v": "/logos/xela-robotics.png",
     "fit": "contain",
     "src": "https://xelarobotics.com/wp-content/uploads/2025/11/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://xelarobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://xelarobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://xelarobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "orbbec",
   "name": "Orbbec",
   "summary": "Shenzhen maker of 3D depth cameras for robotics.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.orbbec.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.orbbec.com/"
    },
    "image": {
     "v": "/logos/orbbec.png",
     "fit": "contain",
     "src": "https://new-orbbec3d-s3.s3.amazonaws.com/wp-content/uploads/2023/06/30053428/favicon-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://en.wikipedia.org/wiki/Orbbec",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/Orbbec",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://en.wikipedia.org/wiki/Orbbec"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "realsense",
   "name": "RealSense",
   "summary": "Cupertino maker of RealSense depth cameras for robots, spun out of Intel in 2025.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.realsenseai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.realsenseai.com/"
    },
    "image": {
     "v": "/logos/realsense.png",
     "fit": "contain",
     "src": "https://www.realsenseai.com/wp-content/uploads/2025/06/8f3275c228beb8bf1cbf594a4dd0e703c7dee80e.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cupertino",
     "src": "https://www.realsenseai.com/news-insights/news/realsense-completes-spin-out-from-intel-raises-50-million-to-accelerate-ai-powered-vision-for-robotics-and-biometrics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.realsenseai.com/news-insights/news/realsense-completes-spin-out-from-intel-raises-50-million-to-accelerate-ai-powered-vision-for-robotics-and-biometrics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "20400 Stevens Creek Boulevard, Cupertino, CA, United States",
       "lat": 37.32163,
       "lon": -122.0303,
       "src": "https://www.realsenseai.com/news-insights/news/realsense-completes-spin-out-from-intel-raises-50-million-to-accelerate-ai-powered-vision-for-robotics-and-biometrics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ouster",
   "name": "Ouster",
   "summary": "San Francisco maker of digital lidar sensors.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://ouster.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ouster.com/"
    },
    "image": {
     "v": "/logos/ouster.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Ouster_Logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://en.wikipedia.org/wiki/Ouster_(company)",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Ouster_(company)",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://en.wikipedia.org/wiki/Ouster_(company)"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "luxonis",
   "name": "Luxonis",
   "summary": "Colorado maker of OAK AI depth cameras.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.luxonis.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.luxonis.com/"
    },
    "image": {
     "v": "/logos/luxonis.png",
     "fit": "contain",
     "src": "https://www.luxonis.com/apple-touch-icon.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Littleton",
     "src": "https://www.luxonis.com/assets/marketing/brand/luxonis_product_guide.pdf",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.luxonis.com/assets/marketing/brand/luxonis_product_guide.pdf",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "7901 Shaffer Parkway, Littleton, CO 80127, United States",
       "lat": 39.613321,
       "lon": -105.016649,
       "src": "https://www.luxonis.com/assets/marketing/brand/luxonis_product_guide.pdf"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "qualcomm",
   "name": "Qualcomm",
   "summary": "San Diego chipmaker with robotics processors and platforms.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.qualcomm.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.qualcomm.com/"
    },
    "image": {
     "v": "/logos/qualcomm.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Qualcomm-Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Diego",
     "src": "https://en.wikipedia.org/wiki/Qualcomm",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Qualcomm",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5775 Morehouse Drive, San Diego, CA 92121, United States",
       "lat": 32.895941,
       "lon": -117.195819,
       "src": "https://en.wikipedia.org/wiki/Qualcomm"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "horizon-robotics",
   "name": "Horizon Robotics",
   "summary": "Beijing maker of AI chips and software for driver assistance and robots.",
   "body": "Founded in 2015 by Yu Kai. Its RDK kits are used in robot development.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://en.horizon.auto/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://en.horizon.auto/"
    },
    "image": {
     "v": "/logos/horizon-robotics.png",
     "fit": "contain",
     "src": "https://www.horizon.auto/Public/Uploads/uploadfile/images/20240805/a0logo01.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://en.wikipedia.org/wiki/Horizon_Robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/Horizon_Robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://en.wikipedia.org/wiki/Horizon_Robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stanford-ai-lab",
   "name": "Stanford Artificial Intelligence Laboratory",
   "summary": "Stanford University's AI lab (SAIL), home to many robot learning groups.",
   "body": "Founded by John McCarthy in 1963.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://ai.stanford.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ai.stanford.edu/"
    },
    "image": {
     "v": "/logos/stanford-ai-lab.png",
     "fit": "contain",
     "src": "https://ai.stanford.edu/wp-content/themes/sail/img/favicon64.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stanford",
     "src": "https://ai.stanford.edu/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://ai.stanford.edu/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "353 Jane Stanford Way, Stanford, CA 94305, United States",
       "lat": 37.430138,
       "lon": -122.173535,
       "src": "https://ai.stanford.edu/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "texas-robotics",
   "name": "Texas Robotics",
   "summary": "University of Texas at Austin's robotics research centre.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.utexas.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotics.utexas.edu/"
    },
    "image": {
     "v": "/logos/texas-robotics.png",
     "fit": "contain",
     "src": "https://robotics.utexas.edu/sites/default/files/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://robotics.utexas.edu/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://robotics.utexas.edu/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, TX, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://robotics.utexas.edu/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "caltech-cast",
   "name": "Caltech Center for Autonomous Systems and Technologies",
   "summary": "Caltech's centre for autonomous systems research (CAST).",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://cast.caltech.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cast.caltech.edu/"
    },
    "image": {
     "v": "/logos/caltech-cast.png",
     "fit": "contain",
     "src": "https://cast.caltech.edu/static/core/img/favicon-192.png?v=7.16.1",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pasadena",
     "src": "https://cast.caltech.edu/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://cast.caltech.edu/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1200 East California Boulevard, Pasadena, CA 91125, United States",
       "lat": 34.135895,
       "lon": -118.121044,
       "src": "https://cast.caltech.edu/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "utoronto-robotics-institute",
   "name": "University of Toronto Robotics Institute",
   "summary": "University of Toronto's multidisciplinary robotics research hub.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://robotics.utoronto.ca/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotics.utoronto.ca/"
    },
    "image": {
     "v": "/logos/utoronto-robotics-institute.png",
     "fit": "contain",
     "src": "https://robotics.utoronto.ca/wp-content/themes/uoft_fase_theme_2023/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toronto",
     "src": "https://robotics.utoronto.ca/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://robotics.utoronto.ca/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Toronto, ON, Canada",
       "lat": 43.653482,
       "lon": -79.383935,
       "src": "https://robotics.utoronto.ca/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nyu-courant",
   "name": "NYU Courant Institute",
   "summary": "New York University's school of mathematics, computing and data science, with robot learning research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://cims.nyu.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cims.nyu.edu/"
    },
    "image": {
     "v": "/logos/nyu-courant.png",
     "fit": "contain",
     "src": "https://cims.nyu.edu/static/cims/images/Courant_Logos/NYUCourant_Long-Color.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://en.wikipedia.org/wiki/Courant_Institute_of_Mathematical_Sciences",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Courant_Institute_of_Mathematical_Sciences",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "251 Mercer Street, New York, NY 10012, United States",
       "lat": 40.728699,
       "lon": -73.995715,
       "src": "https://en.wikipedia.org/wiki/Courant_Institute_of_Mathematical_Sciences"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "columbia-university",
   "name": "Columbia University",
   "summary": "New York research university with robotics labs in its engineering school.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.columbia.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.columbia.edu/"
    },
    "image": {
     "v": "/logos/columbia-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Coat_of_Arms_of_Columbia_University.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://en.wikipedia.org/wiki/Columbia_University",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Columbia_University",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "West 116th Street and Broadway, New York, NY 10027, United States",
       "lat": 40.807751,
       "lon": -73.96249,
       "src": "https://en.wikipedia.org/wiki/Columbia_University"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "princeton-university",
   "name": "Princeton University",
   "summary": "New Jersey research university with robotics and embodied AI research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.princeton.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.princeton.edu/"
    },
    "image": {
     "v": "/logos/princeton-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Princeton_text_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Princeton",
     "src": "https://en.wikipedia.org/wiki/Princeton_University",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Princeton_University",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1 Nassau Hall, Princeton, NJ 08544, United States",
       "lat": 40.348686,
       "lon": -74.659392,
       "src": "https://en.wikipedia.org/wiki/Princeton_University"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "uc-san-diego",
   "name": "UC San Diego",
   "summary": "University of California, San Diego, with an active robotics and robot learning research community.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://ucsd.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ucsd.edu/"
    },
    "image": {
     "v": "/logos/uc-san-diego.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_California%2C_San_Diego_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Diego",
     "src": "https://ucsd.edu/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://ucsd.edu/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "9500 Gilman Drive, La Jolla, CA 92093, United States",
       "lat": 32.879244,
       "lon": -117.231125,
       "src": "https://ucsd.edu/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "uiuc",
   "name": "University of Illinois Urbana-Champaign",
   "summary": "Illinois research university with a robotics centre.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://illinois.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://illinois.edu/"
    },
    "image": {
     "v": "/logos/uiuc.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Illinois_at_Urbana%E2%80%93Champaign_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Urbana-Champaign",
     "src": "https://en.wikipedia.org/wiki/University_of_Illinois_Urbana-Champaign",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/University_of_Illinois_Urbana-Champaign",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "601 E John Street, Champaign, IL 61820, United States",
       "lat": 40.108839,
       "lon": -88.230037,
       "src": "https://en.wikipedia.org/wiki/University_of_Illinois_Urbana-Champaign"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ihmc",
   "name": "Florida Institute for Human and Machine Cognition",
   "summary": "Pensacola research institute (IHMC) known for humanoid and exoskeleton research.",
   "body": "IHMC teams placed second in the DARPA Robotics Challenge finals in 2015.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.ihmc.us/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ihmc.us/"
    },
    "image": {
     "v": "/logos/ihmc.png",
     "fit": "contain",
     "src": "https://www.ihmc.us/favicon-196x196.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pensacola",
     "src": "https://www.ihmc.us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ihmc.us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "40 South Alcaniz Street, Pensacola, FL 32502, United States",
       "lat": 30.41295,
       "lon": -87.209516,
       "src": "https://www.ihmc.us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sri-international",
   "name": "SRI International",
   "summary": "Menlo Park non-profit research institute, birthplace of the Shakey robot.",
   "body": "Founded in 1946 by Stanford University. Shakey, built at SRI in the 1960s, was the first mobile robot to reason about its actions.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.sri.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sri.com/"
    },
    "image": {
     "v": "/logos/sri-international.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/SRI_International_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://www.sri.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.sri.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "333 Ravenswood Avenue, Menlo Park, CA 94025, United States",
       "lat": 37.456605,
       "lon": -122.174686,
       "src": "https://www.sri.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nasa-jpl",
   "name": "NASA Jet Propulsion Laboratory",
   "summary": "NASA research centre managed by Caltech, builder of the Mars rovers.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.jpl.nasa.gov/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.jpl.nasa.gov/"
    },
    "image": {
     "v": "/logos/nasa-jpl.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Jet_Propulsion_Laboratory_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pasadena",
     "src": "https://en.wikipedia.org/wiki/Jet_Propulsion_Laboratory",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Jet_Propulsion_Laboratory",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4800 Oak Grove Drive, La Cañada Flintridge, CA 91011, United States",
       "lat": 34.199883,
       "lon": -118.171926,
       "src": "https://en.wikipedia.org/wiki/Jet_Propulsion_Laboratory"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mpi-intelligent-systems",
   "name": "Max Planck Institute for Intelligent Systems",
   "summary": "Max Planck institute in Stuttgart and Tübingen researching perception, learning and robotics.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://is.mpg.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://is.mpg.de/"
    },
    "image": {
     "v": "/logos/mpi-intelligent-systems.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=is.mpg.de&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tübingen",
     "src": "https://en.wikipedia.org/wiki/Max_Planck_Institute_for_Intelligent_Systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://en.wikipedia.org/wiki/Max_Planck_Institute_for_Intelligent_Systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Max-Planck-Ring 4, 72076 Tübingen, Germany",
       "lat": 48.535504,
       "lon": 9.057922,
       "src": "https://en.wikipedia.org/wiki/Max_Planck_Institute_for_Intelligent_Systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tum-mirmi",
   "name": "Munich Institute of Robotics and Machine Intelligence",
   "summary": "Technical University of Munich's robotics and machine intelligence institute (MIRMI).",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.mirmi.tum.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mirmi.tum.de/"
    },
    "image": {
     "v": "/logos/tum-mirmi.png",
     "fit": "contain",
     "src": "https://www.mirmi.tum.de/_frontend/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://www.mirmi.tum.de/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.mirmi.tum.de/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Heßstraße 134, 80797 Munich, Germany",
       "lat": 48.157754,
       "lon": 11.553513,
       "src": "https://www.mirmi.tum.de/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tu-darmstadt",
   "name": "TU Darmstadt",
   "summary": "German technical university with robot learning research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.tu-darmstadt.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tu-darmstadt.de/"
    },
    "image": {
     "v": "/logos/tu-darmstadt.png",
     "fit": "contain",
     "src": "https://www.tu-darmstadt.de/media/resources/images_1/favicon_80x80.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Darmstadt",
     "src": "https://en.wikipedia.org/wiki/Technische_Universit%C3%A4t_Darmstadt",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://en.wikipedia.org/wiki/Technische_Universit%C3%A4t_Darmstadt",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Karolinenplatz 5, 64289 Darmstadt, Germany",
       "lat": 49.87489,
       "lon": 8.656553,
       "src": "https://en.wikipedia.org/wiki/Technische_Universit%C3%A4t_Darmstadt"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fraunhofer-ipa",
   "name": "Fraunhofer IPA",
   "summary": "Stuttgart Fraunhofer institute for manufacturing engineering and automation.",
   "body": "It developed the Care-O-bot service robots.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.ipa.fraunhofer.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ipa.fraunhofer.de/"
    },
    "image": {
     "v": "/logos/fraunhofer-ipa.png",
     "fit": "contain",
     "src": "https://www.ipa.fraunhofer.de/static/css/fraunhofer/resources/img/favicons/apple-touch-icon_180x180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stuttgart",
     "src": "https://www.ipa.fraunhofer.de/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.ipa.fraunhofer.de/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nobelstraße 12, 70569 Stuttgart, Germany",
       "lat": 48.740835,
       "lon": 9.098716,
       "src": "https://www.ipa.fraunhofer.de/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dfki",
   "name": "DFKI",
   "summary": "German Research Center for Artificial Intelligence, with a robotics innovation centre in Bremen.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.dfki.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dfki.de/"
    },
    "image": {
     "v": "/logos/dfki.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/DFKI_logo_since_2023.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kaiserslautern",
     "src": "https://en.wikipedia.org/wiki/German_Research_Centre_for_Artificial_Intelligence",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://en.wikipedia.org/wiki/German_Research_Centre_for_Artificial_Intelligence",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Trippstadter Straße 122, 67663 Kaiserslautern, Germany",
       "lat": 49.429286,
       "lon": 7.751244,
       "src": "https://en.wikipedia.org/wiki/German_Research_Centre_for_Artificial_Intelligence"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "edinburgh-centre-for-robotics",
   "name": "Edinburgh Centre for Robotics",
   "summary": "Joint robotics centre of the University of Edinburgh and Heriot-Watt University.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.edinburgh-robotics.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.edinburgh-robotics.org/"
    },
    "image": {
     "v": "/logos/edinburgh-centre-for-robotics.png",
     "fit": "contain",
     "src": "https://www.edinburgh-robotics.org/sites/all/themes/bootstrap_banner/icons/favicon-152.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Edinburgh",
     "src": "https://www.edinburgh-robotics.org/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.edinburgh-robotics.org/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bayes Centre, 47 Potterrow, Edinburgh EH8 9BT, United Kingdom",
       "lat": 55.945156,
       "lon": -3.186927,
       "src": "https://www.edinburgh-robotics.org/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bristol-robotics-laboratory",
   "name": "Bristol Robotics Laboratory",
   "summary": "Robotics lab run by the University of the West of England and the University of Bristol.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.bristolroboticslab.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bristolroboticslab.com/"
    },
    "image": {
     "v": "/logos/bristol-robotics-laboratory.png",
     "fit": "contain",
     "src": "https://irp.cdn-website.com/4eb3016f/dms3rep/multi/BRL_Logo_Main.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://www.bristolroboticslab.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.bristolroboticslab.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "T-Block, UWE Bristol, Coldharbour Lane, Bristol BS16 1QY, United Kingdom",
       "lat": 51.503072,
       "lon": -2.552672,
       "src": "https://www.bristolroboticslab.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-cambridge",
   "name": "University of Cambridge",
   "summary": "UK research university with robotics research in engineering and computer science.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.cam.ac.uk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cam.ac.uk/"
    },
    "image": {
     "v": "/logos/university-of-cambridge.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Cambridge_logo.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.cam.ac.uk/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.cam.ac.uk/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "The Old Schools, Trinity Lane, Cambridge CB2 1TN, United Kingdom",
       "lat": 52.205331,
       "lon": 0.11692,
       "src": "https://www.cam.ac.uk/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kth",
   "name": "KTH Royal Institute of Technology",
   "summary": "Stockholm technical university with robotics, perception and learning research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.kth.se/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kth.se/"
    },
    "image": {
     "v": "/logos/kth.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.kth.se&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Stockholm",
     "src": "https://en.wikipedia.org/wiki/KTH_Royal_Institute_of_Technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "Sweden",
     "src": "https://en.wikipedia.org/wiki/KTH_Royal_Institute_of_Technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brinellvägen 8, 114 28 Stockholm, Sweden",
       "lat": 59.349818,
       "lon": 18.070783,
       "src": "https://en.wikipedia.org/wiki/KTH_Royal_Institute_of_Technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tu-delft",
   "name": "TU Delft",
   "summary": "Dutch technical university with a cognitive robotics department.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.tudelft.nl/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tudelft.nl/"
    },
    "image": {
     "v": "/logos/tu-delft.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Zegel_Technische_Universiteit_Delft.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Delft",
     "src": "https://www.tudelft.nl/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://www.tudelft.nl/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mekelweg 5, 2628 CD Delft, Netherlands",
       "lat": 52.002192,
       "lon": 4.373471,
       "src": "https://www.tudelft.nl/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "waseda-university",
   "name": "Waseda University",
   "summary": "Tokyo university known for humanoid robotics since WABOT-1 in 1973.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.waseda.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.waseda.jp/"
    },
    "image": {
     "v": "/logos/waseda-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Waseda.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://en.wikipedia.org/wiki/Waseda_University",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://en.wikipedia.org/wiki/Waseda_University",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1-104 Totsukamachi, Shinjuku, Tokyo, Japan",
       "lat": 35.70894,
       "lon": 139.721579,
       "src": "https://en.wikipedia.org/wiki/Waseda_University"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "osaka-university",
   "name": "Osaka University",
   "summary": "Japanese university known for android research by Hiroshi Ishiguro's lab.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.osaka-u.ac.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.osaka-u.ac.jp/"
    },
    "image": {
     "v": "/logos/osaka-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/University_of_Osaka_logo%2C_B_%282009-2025%29.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Suita",
     "src": "https://en.wikipedia.org/wiki/University_of_Osaka",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://en.wikipedia.org/wiki/University_of_Osaka",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Suita, Osaka, Japan",
       "lat": 34.759419,
       "lon": 135.516835,
       "src": "https://en.wikipedia.org/wiki/University_of_Osaka"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "peking-university",
   "name": "Peking University",
   "summary": "Beijing research university with embodied AI and robotics research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.pku.edu.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pku.edu.cn/"
    },
    "image": {
     "v": "/logos/peking-university.png",
     "fit": "contain",
     "src": "https://www.pku.edu.cn/pku_logo_red.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://en.wikipedia.org/wiki/Peking_University",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/Peking_University",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5 Yiheyuan Road, Haidian District, Beijing, China",
       "lat": 39.991662,
       "lon": 116.303965,
       "src": "https://en.wikipedia.org/wiki/Peking_University"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shanghai-jiao-tong-university",
   "name": "Shanghai Jiao Tong University",
   "summary": "Shanghai research university with robotics and embodied AI research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.sjtu.edu.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sjtu.edu.cn/"
    },
    "image": {
     "v": "/logos/shanghai-jiao-tong-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/SJTU_emblem_1940.jpg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://en.wikipedia.org/wiki/Shanghai_Jiao_Tong_University",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/Shanghai_Jiao_Tong_University",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "800 Dongchuan Road, Minhang District, Shanghai, China",
       "lat": 30.998233,
       "lon": 121.35014,
       "src": "https://en.wikipedia.org/wiki/Shanghai_Jiao_Tong_University"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zhejiang-university",
   "name": "Zhejiang University",
   "summary": "Hangzhou research university known for legged-robot research.",
   "body": "Founders of DEEP Robotics and Noetix came from Zhejiang University.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.zju.edu.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zju.edu.cn/"
    },
    "image": {
     "v": "/logos/zhejiang-university.png",
     "fit": "contain",
     "src": "https://en.wikipedia.org/wiki/Special:FilePath/Zhejiang_University_Logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://en.wikipedia.org/wiki/Zhejiang_University",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/Zhejiang_University",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "866 Yuhangtang Road, Hangzhou, Zhejiang, China",
       "lat": 30.312705,
       "lon": 120.082873,
       "src": "https://en.wikipedia.org/wiki/Zhejiang_University"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "harbin-institute-of-technology",
   "name": "Harbin Institute of Technology",
   "summary": "Harbin engineering university with a long-standing robotics research programme.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.hit.edu.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hit.edu.cn/"
    },
    "image": {
     "v": "/logos/harbin-institute-of-technology.png",
     "fit": "contain",
     "src": "https://www.hit.edu.cn/_upload/site/00/ee/238/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Harbin",
     "src": "https://en.wikipedia.org/wiki/Harbin_Institute_of_Technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/Harbin_Institute_of_Technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "92 West Dazhi Street, Nangang District, Harbin, China",
       "lat": 45.741589,
       "lon": 126.625563,
       "src": "https://en.wikipedia.org/wiki/Harbin_Institute_of_Technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-hong-kong",
   "name": "The University of Hong Kong",
   "summary": "Hong Kong research university with robotics and embodied AI research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.hku.hk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hku.hk/"
    },
    "image": {
     "v": "/logos/university-of-hong-kong.png",
     "fit": "contain",
     "src": "https://www.hku.hk/etc.clientlibs/hkucms/clientlibs/clientlib-site/resources/icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://en.wikipedia.org/wiki/University_of_Hong_Kong",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.wikipedia.org/wiki/University_of_Hong_Kong",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pokfulam Road, Hong Kong",
       "lat": 22.281936,
       "lon": 114.132299,
       "src": "https://en.wikipedia.org/wiki/University_of_Hong_Kong"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "national-university-of-singapore",
   "name": "National University of Singapore",
   "summary": "Singapore research university with robotics research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.nus.edu.sg/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.nus.edu.sg/"
    },
    "image": {
     "v": "/logos/national-university-of-singapore.png",
     "fit": "contain",
     "src": "https://en.wikipedia.org/wiki/Special:FilePath/NUS_coat_of_arms.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://en.wikipedia.org/wiki/National_University_of_Singapore",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://en.wikipedia.org/wiki/National_University_of_Singapore",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "21 Lower Kent Ridge Road, Singapore 119077",
       "lat": 1.295715,
       "lon": 103.778997,
       "src": "https://en.wikipedia.org/wiki/National_University_of_Singapore"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "seoul-national-university",
   "name": "Seoul National University",
   "summary": "Seoul research university with robotics research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.snu.ac.kr/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.snu.ac.kr/"
    },
    "image": {
     "v": "/logos/seoul-national-university.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_national_university_logotype.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://en.wikipedia.org/wiki/Seoul_National_University",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://en.wikipedia.org/wiki/Seoul_National_University",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1 Gwanak-ro, Gwanak-gu, Seoul, South Korea",
       "lat": 37.46434,
       "lon": 126.954873,
       "src": "https://en.wikipedia.org/wiki/Seoul_National_University"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kist",
   "name": "Korea Institute of Science and Technology",
   "summary": "Seoul government research institute (KIST) with humanoid and robotics research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.kist.re.kr/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kist.re.kr/"
    },
    "image": {
     "v": "/logos/kist.png",
     "fit": "contain",
     "src": "https://www.kist.re.kr/_res/kist/eng/img/common/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://en.wikipedia.org/wiki/Korea_Institute_of_Science_and_Technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://en.wikipedia.org/wiki/Korea_Institute_of_Science_and_Technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "5 Hwarang-ro 14-gil, Seongbuk-gu, Seoul, South Korea",
       "lat": 37.600737,
       "lon": 127.043182,
       "src": "https://en.wikipedia.org/wiki/Korea_Institute_of_Science_and_Technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "technion",
   "name": "Technion",
   "summary": "Israel Institute of Technology, with robotics research across engineering faculties.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.technion.ac.il/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.technion.ac.il/"
    },
    "image": {
     "v": "/logos/technion.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Technion_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Haifa",
     "src": "https://en.wikipedia.org/wiki/Technion_%E2%80%93_Israel_Institute_of_Technology",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://en.wikipedia.org/wiki/Technion_%E2%80%93_Israel_Institute_of_Technology",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Technion City, Haifa, Israel",
       "lat": 32.776751,
       "lon": 35.022539,
       "src": "https://en.wikipedia.org/wiki/Technion_%E2%80%93_Israel_Institute_of_Technology"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "qut-centre-for-robotics",
   "name": "QUT Centre for Robotics",
   "summary": "Queensland University of Technology's robotics research centre.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://research.qut.edu.au/qcr/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://research.qut.edu.au/qcr/"
    },
    "image": {
     "v": "/logos/qut-centre-for-robotics.png",
     "fit": "contain",
     "src": "https://research.qut.edu.au/qcr/wp-content/uploads/sites/305/2020/08/cropped-ROBO_RGB_paths-1-220x220.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brisbane",
     "src": "https://research.qut.edu.au/qcr/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://research.qut.edu.au/qcr/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brisbane, QLD, Australia",
       "lat": -27.468962,
       "lon": 153.023501,
       "src": "https://research.qut.edu.au/qcr/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "australian-centre-for-robotics",
   "name": "Australian Centre for Robotics",
   "summary": "University of Sydney's robotics research centre, formerly the Australian Centre for Field Robotics.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.sydney.edu.au/engineering/our-research/robotics-and-intelligent-systems/australian-centre-for-robotics.html",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sydney.edu.au/engineering/our-research/robotics-and-intelligent-systems/australian-centre-for-robotics.html"
    },
    "image": {
     "v": "/logos/australian-centre-for-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.sydney.edu.au&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sydney",
     "src": "https://www.sydney.edu.au/engineering/our-research/robotics-and-intelligent-systems/australian-centre-for-robotics.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://www.sydney.edu.au/engineering/our-research/robotics-and-intelligent-systems/australian-centre-for-robotics.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sydney, NSW, Australia",
       "lat": -33.869844,
       "lon": 151.208285,
       "src": "https://www.sydney.edu.au/engineering/our-research/robotics-and-intelligent-systems/australian-centre-for-robotics.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "iit-bombay",
   "name": "IIT Bombay",
   "summary": "Indian Institute of Technology in Mumbai, with robotics research.",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.iitb.ac.in/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.iitb.ac.in/"
    },
    "image": {
     "v": "/logos/iit-bombay.png",
     "fit": "contain",
     "src": "https://en.wikipedia.org/wiki/Special:FilePath/IIT_Bombay_Wordmark_Logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mumbai",
     "src": "https://en.wikipedia.org/wiki/IIT_Bombay",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://en.wikipedia.org/wiki/IIT_Bombay",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Powai, Mumbai, India",
       "lat": 19.11872,
       "lon": 72.907348,
       "src": "https://en.wikipedia.org/wiki/IIT_Bombay"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "khosla-ventures",
   "name": "Khosla Ventures",
   "summary": "Menlo Park venture firm founded by Vinod Khosla, an investor in robotics and AI.",
   "body": "Founded in 2004. Its robotics investments include Genesis AI and Reflex Robotics.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.khoslaventures.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.khoslaventures.com/"
    },
    "image": {
     "v": "/logos/khosla-ventures.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Khosla_Ventures_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://www.khoslaventures.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.khoslaventures.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2128 Sand Hill Road, Menlo Park, CA 94025, United States",
       "lat": 37.425419,
       "lon": -122.192817,
       "src": "https://www.khoslaventures.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "thrive-capital",
   "name": "Thrive Capital",
   "summary": "New York venture firm founded by Josh Kushner.",
   "body": "Founded in 2009. It has invested in OpenAI and in Physical Intelligence.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://thrivecap.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://thrivecap.com/"
    },
    "image": {
     "v": "/logos/thrive-capital.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Thrive_Capital.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://en.wikipedia.org/wiki/Thrive_Capital",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Thrive_Capital",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://en.wikipedia.org/wiki/Thrive_Capital"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sequoia-capital",
   "name": "Sequoia Capital",
   "summary": "Menlo Park venture firm, an investor in AI and robotics companies.",
   "body": "Founded by Don Valentine in 1972.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.sequoiacap.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.sequoiacap.com/"
    },
    "image": {
     "v": "/logos/sequoia-capital.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Sequoia_Capital_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://en.wikipedia.org/wiki/Sequoia_Capital",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Sequoia_Capital",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2800 Sand Hill Road, Menlo Park, CA 94025, United States",
       "lat": 37.420577,
       "lon": -122.210696,
       "src": "https://en.wikipedia.org/wiki/Sequoia_Capital"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lightspeed-venture-partners",
   "name": "Lightspeed Venture Partners",
   "summary": "Menlo Park multi-stage venture firm investing in AI and robotics.",
   "body": "Founded in 2000.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://lsvp.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lsvp.com/"
    },
    "image": {
     "v": "/logos/lightspeed-venture-partners.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/LSVP_Horizontal_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://en.wikipedia.org/wiki/Lightspeed_Venture_Partners",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Lightspeed_Venture_Partners",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Menlo Park, CA, United States",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://en.wikipedia.org/wiki/Lightspeed_Venture_Partners"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bezos-expeditions",
   "name": "Bezos Expeditions",
   "summary": "Jeff Bezos's personal investment firm.",
   "body": "Its robotics investments include Physical Intelligence, Figure AI and Skild AI.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.bezosexpeditions.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bezosexpeditions.com/"
    },
    "image": {
     "v": "/logos/bezos-expeditions.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Bezos_Expeditions.png?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://en.wikipedia.org/wiki/Bezos_Expeditions",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Bezos_Expeditions",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seattle, WA, United States",
       "lat": 47.603832,
       "lon": -122.330062,
       "src": "https://en.wikipedia.org/wiki/Bezos_Expeditions"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eclipse",
   "name": "Eclipse",
   "summary": "Palo Alto venture firm focused on industrial and physical-world technology.",
   "body": "It co-led the seed round of Genesis AI.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://eclipse.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://eclipse.vc/"
    },
    "image": {
     "v": "/logos/eclipse.png",
     "fit": "contain",
     "src": "https://cdn.sanity.io/images/5uq66tk5/production/760081f4994965efe12899d377f5f414663d6e96-512x512.png?fit=max&amp;auto=format",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://eclipse.capital/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://eclipse.capital/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "514 High Street, Palo Alto, CA 94301, United States",
       "lat": 37.443747,
       "lon": -122.163132,
       "src": "https://eclipse.capital/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "general-catalyst",
   "name": "General Catalyst",
   "summary": "Venture firm founded in Cambridge, Massachusetts, investing in AI and robotics.",
   "body": "Founded in 2000.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.generalcatalyst.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.generalcatalyst.com/"
    },
    "image": {
     "v": "/logos/general-catalyst.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/General_Catalyst_Logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.generalcatalyst.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.generalcatalyst.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "20 University Road, Cambridge, MA 02138, United States",
       "lat": 42.372292,
       "lon": -71.12359,
       "src": "https://www.generalcatalyst.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "y-combinator",
   "name": "Y Combinator",
   "summary": "San Francisco startup accelerator that has funded many robotics startups.",
   "body": "Founded in 2005. Robotics alumni include Weave Robotics.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.ycombinator.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ycombinator.com/"
    },
    "image": {
     "v": "/logos/y-combinator.png",
     "fit": "contain",
     "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Y_Combinator_logo.svg?width=512",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://en.wikipedia.org/wiki/Y_Combinator",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Y_Combinator",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://en.wikipedia.org/wiki/Y_Combinator"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "redalpine",
   "name": "Redalpine",
   "summary": "Zurich venture firm investing in software and science, including robotics.",
   "body": "Founded in 2006.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.redalpine.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.redalpine.com/"
    },
    "image": {
     "v": "/logos/redalpine.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/e621ba_d3c8b78726564d2eb036b2d2b7996c4a%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/e621ba_d3c8b78726564d2eb036b2d2b7996c4a%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://www.redalpine.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://www.redalpine.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://www.redalpine.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  }
 ],
 "orgData": [
  {
   "slug": "robotera",
   "data": {
    "city": {
     "v": "Beijing",
     "src": "https://www.robotera.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.robotera.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.robotera.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intrinsic",
   "data": {
    "city": {
     "v": "Mountain View",
     "src": "https://en.wikipedia.org/wiki/X_Development",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/X_Development",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, CA, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://en.wikipedia.org/wiki/X_Development"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "meta-ai",
   "data": {
    "city": {
     "v": "Menlo Park",
     "src": "https://en.wikipedia.org/wiki/Meta_Platforms",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Meta_Platforms",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1 Hacker Way, Menlo Park, CA 94025, United States",
       "lat": 37.484668,
       "lon": -122.148365,
       "src": "https://en.wikipedia.org/wiki/Meta_Platforms"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "world-labs",
   "data": {
    "city": {
     "v": "San Francisco",
     "src": "https://www.worldlabs.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.worldlabs.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.worldlabs.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "techman-robot",
   "data": {
    "city": {
     "v": "Taoyuan",
     "src": "https://www.tm-robot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Taiwan",
     "src": "https://www.tm-robot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Taoyuan, Taiwan",
       "lat": 24.992999,
       "lon": 121.301,
       "src": "https://www.tm-robot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "epson-robots",
   "data": {
    "city": {
     "v": "Suwa",
     "src": "https://en.wikipedia.org/wiki/Seiko_Epson",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://en.wikipedia.org/wiki/Seiko_Epson",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3-3-5 Owa, Suwa, Nagano, Japan",
       "lat": 36.055198,
       "lon": 138.11663,
       "src": "https://en.wikipedia.org/wiki/Seiko_Epson"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "realtime-robotics",
   "data": {
    "city": {
     "v": "Boston",
     "src": "https://rtr.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://rtr.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "27 Wormwood Street, Suite 110, Boston, MA 02210, United States",
       "lat": 42.346756,
       "lon": -71.049751,
       "src": "https://rtr.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robco",
   "data": {
    "city": {
     "v": "Munich",
     "src": "https://www.rob.co/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.rob.co/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://www.rob.co/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fairino",
   "data": {
    "city": {
     "v": "Suzhou",
     "src": "https://www.fairino.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.fairino.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "209 Zhuyuan Road, Suzhou New District, Suzhou, Jiangsu, China",
       "lat": 31.373943,
       "lon": 120.52058,
       "src": "https://www.fairino.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "elephant-robotics",
   "data": {
    "city": {
     "v": "Shenzhen",
     "src": "https://www.elephantrobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.elephantrobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Huaqiangbei, Futian District, Shenzhen, China",
       "lat": 22.544818,
       "lon": 114.081542,
       "src": "https://www.elephantrobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "greyorange",
   "data": {
    "city": {
     "v": "Suwanee",
     "src": "https://www.greyorange.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.greyorange.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3975 Lakefield Court, Suite 110, Suwanee, GA 30024, United States",
       "lat": 34.05149,
       "lon": -84.0713,
       "src": "https://www.greyorange.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "osaro",
   "data": {
    "city": {
     "v": "San Francisco",
     "src": "https://www.osaro.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.osaro.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.osaro.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fetch-robotics",
   "data": {
    "city": {
     "v": "San Jose",
     "src": "https://en.wikipedia.org/wiki/Fetch_Robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Fetch_Robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Jose, CA, United States",
       "lat": 37.336166,
       "lon": -121.890591,
       "src": "https://en.wikipedia.org/wiki/Fetch_Robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "otto-motors",
   "data": {
    "city": {
     "v": "Kitchener",
     "src": "https://en.wikipedia.org/wiki/Clearpath_Robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://en.wikipedia.org/wiki/Clearpath_Robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kitchener, ON, Canada",
       "lat": 43.451291,
       "lon": -80.492782,
       "src": "https://en.wikipedia.org/wiki/Clearpath_Robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vecna-robotics",
   "data": {
    "city": {
     "v": "Waltham",
     "src": "https://www.vecnarobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.vecnarobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "425 Waverley Oaks Road, Waltham, MA 02452, United States",
       "lat": 42.386327,
       "lon": -71.20209,
       "src": "https://www.vecnarobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "comma-ai",
   "data": {
    "city": {
     "v": "San Diego",
     "src": "https://comma.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://comma.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Diego, CA, United States",
       "lat": 32.715706,
       "lon": -117.163828,
       "src": "https://comma.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "skydio",
   "data": {
    "city": {
     "v": "San Mateo",
     "src": "https://www.skydio.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.skydio.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3000 Clearview Way, San Mateo, CA 94402, United States",
       "lat": 37.534517,
       "lon": -122.331279,
       "src": "https://www.skydio.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wing",
   "data": {
    "city": {
     "v": "Palo Alto",
     "src": "https://en.wikipedia.org/wiki/Wing_(company)",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Wing_(company)",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, CA, United States",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://en.wikipedia.org/wiki/Wing_(company)"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "clone-robotics",
   "data": {
    "city": {
     "v": "Wrocław",
     "src": "https://clonerobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Poland",
     "src": "https://clonerobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Wrocław, Poland",
       "lat": 51.126311,
       "lon": 16.978196,
       "src": "https://clonerobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ghost-robotics",
   "data": {
    "city": {
     "v": "Philadelphia",
     "src": "https://en.wikipedia.org/wiki/Ghost_Robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://en.wikipedia.org/wiki/Ghost_Robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Philadelphia, PA, United States",
       "lat": 39.952724,
       "lon": -75.163526,
       "src": "https://en.wikipedia.org/wiki/Ghost_Robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "swiss-mile",
   "data": {
    "city": {
     "v": "Zurich",
     "src": "https://www.rivr.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://www.rivr.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://www.rivr.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mech-mind",
   "data": {
    "city": {
     "v": "Beijing",
     "src": "https://www.mech-mind.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.mech-mind.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.mech-mind.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "realbotix",
   "data": {
    "city": {
     "v": "Las Vegas",
     "src": "https://realbotix.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://realbotix.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Las Vegas, NV, United States",
       "lat": 36.167426,
       "lon": -115.148413,
       "src": "https://realbotix.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  }
 ]
};
