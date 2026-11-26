// Content seed: second organisation directory pass of 2026-11-25. Adds humanoid, physical-AI and embodied-AI
// organisations that were still missing (robot makers, hand and actuator suppliers, model labs, data and teleoperation
// startups, YC robotics companies, investors, universities and labs), each with its HQ in data.locations.
// epSeedRun inserts an organisation only if no organisation has that slug or name, and fills only empty fields.
// See CHANGELOG.md.
export const EP_SEED_ORG_DIRECTORY_2_2026_11 = {
 "id": "org-directory-2-2026-11",
 "note": "Added in the second organisation directory pass, November 2026",
 "newOrgs": [
  {
   "slug": "aheadform",
   "name": "AheadForm",
   "summary": "Developer of realistic humanoid robot heads and faces.",
   "body": "It builds lifelike humanoid heads aimed at natural human-robot interaction.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.aheadform.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aheadform.com/"
    },
    "image": {
     "v": "/logos/aheadform.png",
     "fit": "contain",
     "src": "https://oss.aheadform.com/www/images/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.wikidata.org/wiki/Q138669710",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.wikidata.org/wiki/Q138669710",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://www.wikidata.org/wiki/Q138669710"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ai2-robotics",
   "name": "AI² Robotics",
   "summary": "Chinese developer of general-purpose embodied AI robots and multimodal models.",
   "body": "Known in Chinese as Zhipingfang, it builds its own multimodal perception and interaction models for its robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://ai2robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ai2robotics.com/"
    },
    "image": {
     "v": "/logos/ai2-robotics.png",
     "fit": "contain",
     "src": "https://ai2robotics.com/wp-content/uploads/2023/11/cropped-fav-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://pitchbook.com/profiles/company/731959-39",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://pitchbook.com/profiles/company/731959-39",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Room 1904, Building 1, Chongwen Park, Nanshan Zhiyuan, 3370 Liuxian Avenue, Nanshan District, Shenzhen",
       "lat": 22.536014,
       "lon": 113.925622,
       "src": "https://pitchbook.com/profiles/company/731959-39"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "anigon",
   "name": "ANIGON",
   "summary": "Swiss company combining embodied foundation models, tactile perception and robot hardware.",
   "body": "Its stack spans embodied foundation models, world models, tactile perception, data technology and robotic hardware.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://anigon.ch/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://anigon.ch/"
    },
    "image": {
     "v": "/logos/anigon.png",
     "fit": "contain",
     "src": "https://anigon.ch/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Altendorf",
     "src": "https://linkedin.com/company/anigon",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://linkedin.com/company/anigon",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Altendorf, Schwyz, Switzerland",
       "lat": 47.191637,
       "lon": 8.829498,
       "src": "https://linkedin.com/company/anigon"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aimoga-robotics",
   "name": "AiMOGA Robotics",
   "summary": "Chery-backed maker of humanoid and quadruped robots.",
   "body": "AiMOGA is the robotics business linked to carmaker Chery, building the Mornine humanoid.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.aimoga-robot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.aimoga-robot.com/"
    },
    "image": {
     "v": "/logos/aimoga-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.aimoga-robot.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wuhu",
     "src": "https://www.aimoga-robot.com/global/en/contactUs/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.aimoga-robot.com/global/en/contactUs/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "No. 3 Zhujiang Road, Jiujiang District, Wuhu, Anhui",
       "lat": 31.371815,
       "lon": 118.386046,
       "src": "https://www.aimoga-robot.com/global/en/contactUs/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "akinrobotics",
   "name": "Akinrobotics",
   "summary": "Turkish maker of humanoid robots.",
   "body": "Based in Konya, it has built several humanoid robots including the ADA and AKINCI series.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://akinrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://akinrobotics.com/"
    },
    "image": {
     "v": "/logos/akinrobotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=akinrobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Konya",
     "src": "https://humanoid.observer/companies/akinrobotics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Turkey",
     "src": "https://humanoid.observer/companies/akinrobotics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Konya, Turkey",
       "lat": 37.872734,
       "lon": 32.492438,
       "src": "https://humanoid.observer/companies/akinrobotics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "allonic",
   "name": "Allonic",
   "summary": "Developer of a 3D tissue-braiding process for manufacturing robotic hands and bodies.",
   "body": "Its machine builds robotic hands and bodies with tendons, joints and skin in one automated process.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://allonic.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://allonic.co/"
    },
    "image": {
     "v": "/logos/allonic.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a79af5f257ba52c910bb7e6/6afb9415a42803ca71333751_favicon-onlight.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Budapest",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hungary",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Budapest, Hungary",
       "lat": 47.481849,
       "lon": 19.144905,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "almond",
   "name": "Almond",
   "summary": "Maker of Axol, a dual-arm robot for physical AI builders.",
   "body": "A Y Combinator Spring 2025 company; Axol is sold as an out-of-the-box dual-arm platform for real work and robot learning.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.almond.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.almond.bot/"
    },
    "image": {
     "v": "/logos/almond.png",
     "fit": "contain",
     "src": "https://www.almond.bot/apple-icon.png?apple-icon.12a0p73jx~09p.png?dpl=dpl_GqoG2WVQpKt79craM1fsRtuWtdmP",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/almond-2",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/almond-2",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/almond-2"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "andromeda",
   "name": "Andromeda",
   "summary": "Australian maker of personalised companion robots for aged care.",
   "body": "Its robot companion Abi is used by aged-care and assisted-living teams; it also has a US office in San Francisco.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://andromedarobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://andromedarobotics.ai/"
    },
    "image": {
     "v": "/logos/andromeda.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68df6f147a002d319954fff7/68df6f147a002d3199550096_Webclip.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Melbourne",
     "src": "https://andromedarobotics.ai/contact-us",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://andromedarobotics.ai/contact-us",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "226 Normanby Rd, Southbank VIC 3006",
       "lat": -37.828328,
       "lon": 144.949069,
       "src": "https://andromedarobotics.ai/contact-us"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aidol",
   "name": "AIDOL",
   "summary": "Russian developer of the AIDOL anthropomorphic AI robot.",
   "body": "It presents AIDOL as the first Russian anthropomorphic robot with embodied AI.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://aidoltech.ru/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aidoltech.ru/"
    },
    "image": {
     "v": "/logos/aidol.png",
     "fit": "contain",
     "src": "https://static.tildacdn.com/tild3538-6133-4937-b863-373530653938/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Moscow",
     "src": "https://aidoltech.ru/en/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "Russia",
     "src": "https://aidoltech.ru/en/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "17 Selskokhozyaystvennaya St., Moscow",
       "lat": 55.625578,
       "lon": 37.606392,
       "src": "https://aidoltech.ru/en/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ati-robotics",
   "name": "Ati Robotics",
   "summary": "Maker of autonomous mobile robots and software for factory material flow.",
   "body": "Formerly Ati Motors; its AMRs and orchestration software are deployed in more than 70 plants.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.atirobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.atirobotics.ai/"
    },
    "image": {
     "v": "/logos/ati-robotics.png",
     "fit": "contain",
     "src": "https://www.atirobotics.ai/assets/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Rochester Hills",
     "src": "https://www.atirobotics.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.atirobotics.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rochester Hills, United States",
       "lat": 42.658366,
       "lon": -83.149932,
       "src": "https://www.atirobotics.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avatar-robotics",
   "name": "Avatar Robotics",
   "summary": "San Francisco developer of robots for warehouse automation.",
   "body": "It targets warehouse labour shortages with intelligent robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.avatarrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.avatarrobotics.com/"
    },
    "image": {
     "v": "/logos/avatar-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/dTbQaVyofuj7AFlI9QQHnjbsOqc.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.avatarrobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.avatarrobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "650 California St, Floor 7, San Francisco, CA 94108",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.avatarrobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bionit-labs",
   "name": "BionIT Labs",
   "summary": "Italian developer of bionic robotic hands.",
   "body": "It develops the Adam's Hand bionic hand.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://bionitlabs.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bionitlabs.com/"
    },
    "image": {
     "v": "/logos/bionit-labs.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=bionitlabs.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Soleto",
     "src": "https://bionitlabs.com/corporate-information/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://bionitlabs.com/corporate-information/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Via Cracovia 1, 73010 Soleto (LE)",
       "lat": 40.20733,
       "lon": 18.166981,
       "src": "https://bionitlabs.com/corporate-information/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "blue-worm-robotics",
   "name": "Blue Worm Robotics",
   "summary": "Chinese embodied robotics company behind the Mantis platform.",
   "body": "Known in Chinese as Lanchong Jushen, it presents the Mantis Standard robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://bluewormrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bluewormrobotics.com/"
    },
    "image": {
     "v": "/logos/blue-worm-robotics.png",
     "fit": "contain",
     "src": "https://bluewormrobotics.com/assets/brand-apple-touch-a01623-180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Xi'an",
     "src": "https://www.bluewormrobotics.com/about",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.bluewormrobotics.com/about",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Room A1105, Nanyang Times, Xi'an Jiaotong University, Yanta District, Xi'an",
       "lat": 34.217216,
       "lon": 108.937846,
       "src": "https://www.bluewormrobotics.com/about"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "borg-robotics",
   "name": "Borg Robotics",
   "summary": "Startup building robots for repetitive physical jobs.",
   "body": "It describes its goal as an autonomous workforce for repetitive physical work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.borgrobotic.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.borgrobotic.com/"
    },
    "image": {
     "v": "/logos/borg-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/fd535a_fb152b53909a4b66a2db18470c37c903%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/fd535a_fb152b53909a4b66a2db18470c37c903%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Detroit",
     "src": "https://linkedin.com/company/borgrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://linkedin.com/company/borgrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Detroit, Michigan",
       "lat": 42.331551,
       "lon": -83.04664,
       "src": "https://linkedin.com/company/borgrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "harbin-boshi-automation",
   "name": "Harbin Boshi Automation",
   "summary": "Harbin maker of industrial automation equipment and robots.",
   "body": "A listed Chinese automation company that has also shown a humanoid robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://boshi.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://boshi.cn/"
    },
    "image": {
     "v": "/logos/harbin-boshi-automation.png",
     "fit": "contain",
     "src": "https://boshi.cn/_nuxt/logo.LgPZxQJo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Harbin",
     "src": "https://boshi.cn",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://boshi.cn",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "黑龙江省哈尔滨开发区迎宾路集中区东湖街9号, Harbin, China",
       "lat": 45.759363,
       "lon": 126.627618,
       "src": "https://boshi.cn"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "botyard",
   "name": "Botyard",
   "summary": "Shenzhen developer of dexterous robot hands.",
   "body": "Its Gaoshan S1 hand has 22 degrees of freedom and is aimed at embodied AI research, teleoperation and data collection.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://botyard.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://botyard.ai/"
    },
    "image": {
     "v": "/logos/botyard.png",
     "fit": "contain",
     "src": "https://botyard.ai/images/logo-blue.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://botyard.ai/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://botyard.ai/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "深圳市南山区西丽街道清华信息港科研楼, Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://botyard.ai/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "brainco",
   "name": "BrainCo",
   "summary": "Brain-computer interface company that also makes dexterous bionic hands.",
   "body": "Its Revo dexterous hands are used on humanoid robots as well as in prosthetics.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://brainco.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://brainco.tech/"
    },
    "image": {
     "v": "/logos/brainco.png",
     "fit": "contain",
     "src": "https://brainco.tech/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://www.cbinsights.com/company/brainrobotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.cbinsights.com/company/brainrobotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building 1, Artificial Intelligence Town, Yuhang District, Hangzhou",
       "lat": 30.276243,
       "lon": 119.974647,
       "src": "https://www.cbinsights.com/company/brainrobotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "casbot",
   "name": "CASBOT",
   "summary": "Beijing humanoid robot startup with roots in the Chinese Academy of Sciences.",
   "body": "Known in Chinese as Zhongke Huiling, it builds general-purpose humanoids including the CASBOT 01.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://casbot.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://casbot.tech/"
    },
    "image": {
     "v": "/logos/casbot.png",
     "fit": "contain",
     "src": "https://casbot.tech/images/index/logo/logo_1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://casbot.tech",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://casbot.tech",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "北京市海淀区西小口路66号, Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://casbot.tech"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "changingtek",
   "name": "Changingtek",
   "summary": "Chinese maker of dexterous robot hands and grippers.",
   "body": "It supplies dexterous hands to humanoid robot makers.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://changingtek.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://changingtek.com/"
    },
    "image": {
     "v": "/logos/changingtek.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=changingtek.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Taicang",
     "src": "https://en.changingtek.com/about",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://en.changingtek.com/about",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building 18, No. 99 Fuda Road, Taicang, Jiangsu",
       "lat": 31.460589,
       "lon": 121.165357,
       "src": "https://en.changingtek.com/about"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "covvi",
   "name": "COVVI",
   "summary": "British maker of the COVVI five-finger robotic hand.",
   "body": "It develops and distributes the COVVI hand, which also has a US office in San Antonio.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.covvi-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.covvi-robotics.com/"
    },
    "image": {
     "v": "/logos/covvi.png",
     "fit": "contain",
     "src": "https://www.covvi-robotics.com/wp-content/uploads/2018/10/cropped-Flavicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Leeds",
     "src": "https://www.covvi-robotics.com/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.covvi-robotics.com/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Direct House (Unit 4), Quayside Business Park, George Mann Road, Leeds LS10 1DJ",
       "lat": 53.776855,
       "lon": -1.514967,
       "src": "https://www.covvi-robotics.com/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cyborg-robotics",
   "name": "Cyborg Robotics",
   "summary": "Chinese developer of embodied humanoid robots.",
   "body": "Its Cyborg-R01 humanoid has 62 degrees of freedom and a 20 kg dual-arm payload.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.cyb-org.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cyb-org.cn/"
    },
    "image": {
     "v": "/logos/cyborg-robotics.png",
     "fit": "contain",
     "src": "https://www.cyb-org.cn/res/202510/18/7f5e66c8e936ca29.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://registry.deploy.report/companies/cyborg-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://registry.deploy.report/companies/cyborg-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://registry.deploy.report/companies/cyborg-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "daimon-robotics",
   "name": "Daimon Robotics",
   "summary": "Shenzhen maker of visuotactile sensors for robot hands.",
   "body": "It develops high-resolution, high-frequency vision-based tactile sensors for grasping and manipulation.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.dmrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dmrobot.com/"
    },
    "image": {
     "v": "/logos/daimon-robotics.png",
     "fit": "contain",
     "src": "https://www.dmrobot.com/template/index/pc/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.dmrobot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.dmrobot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "深圳市宝安区海纳百川总部大厦, Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.dmrobot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "daxo-robotics",
   "name": "Daxo Robotics",
   "summary": "Robotics startup listed among humanoid and hand makers.",
   "body": "It is listed on humanoid.guide among humanoid robot manufacturers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.daxo-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.daxo-robotics.com/"
    },
    "image": {
     "v": "/logos/daxo-robotics.png",
     "fit": "contain",
     "src": "https://www.daxo-robotics.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://linkedin.com/company/daxo-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://linkedin.com/company/daxo-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://linkedin.com/company/daxo-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rysen-robotics",
   "name": "RYSEN Robotics",
   "summary": "Maker of the Apex five-finger dexterous robot hand.",
   "body": "Apex Hand is a high-dexterity five-finger hand built for real work.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.rysenbot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rysenbot.com/"
    },
    "image": {
     "v": "/logos/rysen-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.rysenbot.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://robottoday.com/suppliers-discovery/rysen-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robottoday.com/suppliers-discovery/rysen-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://robottoday.com/suppliers-discovery/rysen-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dexforce",
   "name": "Dexforce",
   "summary": "Shenzhen embodied AI company using generative world models.",
   "body": "Founded in 2021, it builds an embodied AI engine spanning data, models, robot bodies and applications.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://dexforce.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dexforce.com/"
    },
    "image": {
     "v": "/logos/dexforce.png",
     "fit": "contain",
     "src": "https://dexforce.com/favicon.ico?favicon.3uvyjmop96ud0.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://dexforce.com",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://dexforce.com",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "广东省深圳市南山区科园, Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://dexforce.com"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dexrobot",
   "name": "DexRobot",
   "summary": "Chinese developer of high-DOF dexterous robot hands and components.",
   "body": "It focuses on multi-modal intelligent dexterous hands and key components.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.dex-robot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dex-robot.com/"
    },
    "image": {
     "v": "/logos/dexrobot.png",
     "fit": "contain",
     "src": "https://www.dex-robot.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shaoxing",
     "src": "https://www.dex-robot.com/about",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.dex-robot.com/about",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "浙江省绍兴市新昌县澄潭街道新昌高创智造科技园, Shaoxing, China",
       "lat": 29.999243,
       "lon": 120.576854,
       "src": "https://www.dex-robot.com/about"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dh-robotics",
   "name": "DH-Robotics",
   "summary": "Shenzhen maker of electric grippers, actuators and dexterous hands.",
   "body": "Its products include electric and servo grippers, rotary grippers and linear actuators.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.dh-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dh-robotics.com/"
    },
    "image": {
     "v": "/logos/dh-robotics.png",
     "fit": "contain",
     "src": "https://www.dh-robotics.com/wp-content/themes/dh-robotics/images/logo-white-en.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.dh-robotics.com/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.dh-robotics.com/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "深圳市南山区桃园, Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.dh-robotics.com/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "digital-huaxia",
   "name": "Digital Huaxia",
   "summary": "Shenzhen developer of interactive humanoid robots.",
   "body": "It works on multimodal interaction models and hardware for humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.digit.com.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.digit.com.cn/"
    },
    "image": {
     "v": "/logos/digital-huaxia.png",
     "fit": "contain",
     "src": "https://www.digit.com.cn/UserFiles/SiteConfig/GSxrrbSP.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.digit.com.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.digit.com.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "深圳市南山区科技南八路8号, Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.digit.com.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "donut-robotics",
   "name": "Donut Robotics",
   "summary": "Japanese robotics startup developing humanoid robots.",
   "body": "Known for its cinnamon humanoid and earlier communication robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.donutrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.donutrobotics.com/"
    },
    "image": {
     "v": "/logos/donut-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/b84f20_9def0274f2f94ec1b853ae44920e87d1%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/b84f20_9def0274f2f94ec1b853ae44920e87d1%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.donutrobotics.com/en/team",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.donutrobotics.com/en/team",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Midtown Tower 18F, 9-7-1 Akasaka, Minato-ku, Tokyo",
       "lat": 35.666329,
       "lon": 139.731362,
       "src": "https://www.donutrobotics.com/en/team"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "droidup",
   "name": "DroidUp",
   "summary": "Shanghai developer of general-purpose humanoid robots.",
   "body": "Its full Chinese name is Shanghai Zhuoyide Robot Co.; it builds humanoids for education, research and services.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://droidup.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://droidup.com/"
    },
    "image": {
     "v": "/logos/droidup.png",
     "fit": "contain",
     "src": "https://droidup.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://droidup.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://droidup.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://droidup.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "duatic",
   "name": "Duatic",
   "summary": "Swiss ETH Zurich spin-off building human-scale robot arms and mobile manipulators.",
   "body": "It merges ETH Zurich research into human-scale robotic hardware.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.duatic.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.duatic.com/"
    },
    "image": {
     "v": "/logos/duatic.png",
     "fit": "contain",
     "src": "https://www.duatic.com/web/image/website/1/logo/Duatic?unique=a48f9bd",
     "asof": "2026-11"
    },
    "city": {
     "v": "Opfikon",
     "src": "https://www.duatic.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://www.duatic.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Thurgauerstrasse 119, 8152 Opfikon",
       "lat": 47.424594,
       "lon": 8.559386,
       "src": "https://www.duatic.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sichuan-embodied-humanoid-robot",
   "name": "Sichuan Embodied Humanoid Robot",
   "summary": "Sichuan maker of humanoid and emotional robots.",
   "body": "Its products include full-size humanoid robots and industry solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.eir.com.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.eir.com.cn/"
    },
    "image": {
     "v": "/logos/sichuan-embodied-humanoid-robot.png",
     "fit": "contain",
     "src": "https://robot-website.oss-cn-chengdu.aliyuncs.com/sm-frontend-public/public/vite.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chengdu",
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
       "address": "Chengdu, Sichuan, China",
       "lat": 30.659867,
       "lon": 104.063315,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "elite-robots",
   "name": "Elite Robots",
   "summary": "Chinese maker of collaborative, mobile and humanoid robots.",
   "body": "Known in Chinese as Ailite, it focuses on collaborative, composite and humanoid robot categories.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.elibot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.elibot.com/"
    },
    "image": {
     "v": "/logos/elite-robots.png",
     "fit": "contain",
     "src": "https://www.elibot.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Suzhou",
     "src": "https://www.eliterobots.com/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.eliterobots.com/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bldg. 4, 259 Changyang Road, Suzhou",
       "lat": 31.311123,
       "lon": 120.621288,
       "src": "https://www.eliterobots.com/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "embodied-ai-air",
   "name": "Embodied AI (AIR)",
   "summary": "Swiss company deploying AI-powered robots in human environments.",
   "body": "Its AIR system handles dull, dirty and dangerous tasks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://embodiedai.ch/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://embodiedai.ch/"
    },
    "image": {
     "v": "/logos/embodied-ai-air.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/696e4d2b681829764d29ce1c/6a7d7312f065e5e1a0763746_favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lausanne",
     "src": "https://pitchbook.com/profiles/company/820659-25",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://pitchbook.com/profiles/company/820659-25",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rue du Lac 12, 1007 Lausanne",
       "lat": 46.507623,
       "lon": 6.625813,
       "src": "https://pitchbook.com/profiles/company/820659-25"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "fauna-robotics",
   "name": "Fauna Robotics",
   "summary": "Maker of Sprout, a humanoid robot designed to be safe and fun.",
   "body": "It builds capable, safe robots for everyone, starting with Sprout.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://faunarobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://faunarobotics.com/"
    },
    "image": {
     "v": "/logos/fauna-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6931911db0300aa6e7e3fc81/6977858c9e604b93eef026d9_Frame%203.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.wikidata.org/wiki/Q133845954",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q133845954",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.wikidata.org/wiki/Q133845954"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "futuring-robot",
   "name": "Futuring Robot",
   "summary": "General-purpose robotics company building humanoid robots.",
   "body": "It is listed among humanoid makers for its Futuring humanoid series.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://futuringrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://futuringrobot.com/"
    },
    "image": {
     "v": "/logos/futuring-robot.png",
     "fit": "contain",
     "src": "https://web-data.zmlearn.com/image/5PfUPx2CztmyZs6Z88Yk5v/logo_64%402x.png",
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
   "slug": "generative-bionics",
   "name": "Generative Bionics",
   "summary": "Italian humanoid robot company spun out of IIT.",
   "body": "It builds on the Italian Institute of Technology's humanoid research.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://gbionics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gbionics.ai/"
    },
    "image": {
     "v": "/logos/generative-bionics.png",
     "fit": "contain",
     "src": "https://gbionics.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Genoa",
     "src": "https://www.gbionics.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://www.gbionics.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Via Enrico Melen 83, Tower B, 16152 Genova",
       "lat": 44.40726,
       "lon": 8.933862,
       "src": "https://www.gbionics.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "genisom-ai",
   "name": "Genisom AI",
   "summary": "Beijing embodied AI company making quadrupeds, mid-size robots and joint modules.",
   "body": "Its products include the Gangbeng L1 quadruped, the Tongchui M1 robot and CHAMP joint modules.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.genisomai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.genisomai.com/"
    },
    "image": {
     "v": "/logos/genisom-ai.png",
     "fit": "contain",
     "src": "https://qiniu.mfdemo.cn/zhishen/2026/05/18/DBtdbXYwysyQ9.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.genisomai.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.genisomai.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "北京市海淀区农科院西路6号, Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.genisomai.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gento-robotics",
   "name": "GENTO Robotics",
   "summary": "Robotics company developing the Gento Luna humanoid.",
   "body": "It is listed on humanoid.guide for its Luna robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://gentorobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gentorobotics.ai/"
    },
    "image": {
     "v": "/logos/gento-robotics.png",
     "fit": "contain",
     "src": "https://gentorobotics.ai/wp-content/uploads/2026/04/cropped-logo1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dongguan",
     "src": "https://www.gentorobotics.ai/contact-us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.gentorobotics.ai/contact-us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building 3, No. 6 Industrial West Third Road, Songshan Lake Park, Dongguan, Guangdong",
       "lat": 23.091866,
       "lon": 113.896542,
       "src": "https://www.gentorobotics.ai/contact-us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "optics-valley-dongzhi-embodied-ai",
   "name": "Optics Valley Dongzhi Embodied AI",
   "summary": "Wuhan company deploying humanoid robots in entertainment and elder care.",
   "body": "It provides humanoid solutions for performances, eldercare and other scenarios.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Integrator"
     ],
     "src": "https://www.hecbot.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hecbot.cn/"
    },
    "image": {
     "v": "/logos/optics-valley-dongzhi-embodied-ai.png",
     "fit": "contain",
     "src": "https://www.hecbot.cn/img/seo/apple-touch-icon-180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wuhan",
     "src": "https://www.hecbot.cn",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.hecbot.cn",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "湖北省武汉市东湖高新区人工智能产业园, Wuhan, China",
       "lat": 30.578891,
       "lon": 114.29212,
       "src": "https://www.hecbot.cn"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hiro-industries",
   "name": "HIRO Industries",
   "summary": "American robotics company building the Origin dual-arm robot.",
   "body": "It is building an American robotics platform, starting with Origin.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://hiroindustries.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hiroindustries.com/"
    },
    "image": {
     "v": "/logos/hiro-industries.png",
     "fit": "contain",
     "src": "https://hiroindustries.com/apple-icon.png?0e4f197d25f1719e",
     "asof": "2026-11"
    },
    "city": {
     "v": "Corvallis",
     "src": "https://hiroindustries.com/about/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://hiroindustries.com/about/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Corvallis, Oregon",
       "lat": 44.564566,
       "lon": -123.262044,
       "src": "https://hiroindustries.com/about/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hitbot",
   "name": "HITBOT",
   "summary": "Chinese maker of SCARA arms, cobots and electric grippers.",
   "body": "It also builds dexterous hands for humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.hitbotrobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hitbotrobot.com/"
    },
    "image": {
     "v": "/logos/hitbot.png",
     "fit": "contain",
     "src": "https://www.hitbotrobot.com/wp-content/uploads/2021/08/cropped-hitbot-logo-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.hitbotrobot.com/contact-us-2/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.hitbotrobot.com/contact-us-2/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2F, Building E, Huafeng International Robot Industrial Park, Bao'an District, Shenzhen",
       "lat": 22.559853,
       "lon": 113.879033,
       "src": "https://www.hitbotrobot.com/contact-us-2/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "holiday-robotics",
   "name": "Holiday Robotics",
   "summary": "Korean startup building dexterous humanoids for industrial work.",
   "body": "It builds dexterous humanoid robots for real industrial tasks.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://holiday-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://holiday-robotics.com/"
    },
    "image": {
     "v": "/logos/holiday-robotics.png",
     "fit": "contain",
     "src": "https://holiday-robotics.com/logos/logo-open.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://linkedin.com/company/holiday-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://linkedin.com/company/holiday-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Gangnam-gu, Seoul",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://linkedin.com/company/holiday-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "huashu-robot",
   "name": "Huashu Robot",
   "summary": "Chinese industrial robot maker.",
   "body": "A national high-tech enterprise building industrial robots and smart-factory solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.hsrobotics.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hsrobotics.cn/"
    },
    "image": {
     "v": "/logos/huashu-robot.png",
     "fit": "contain",
     "src": "https://www.hsrobotics.cn/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Chongqing",
     "src": "https://linkedin.com/company/%E9%87%8D%E5%BA%86%E5%8D%8E%E6%95%B0%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://linkedin.com/company/%E9%87%8D%E5%BA%86%E5%8D%8E%E6%95%B0%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Chongqing, China",
       "lat": 30.05518,
       "lon": 107.874871,
       "src": "https://linkedin.com/company/%E9%87%8D%E5%BA%86%E5%8D%8E%E6%95%B0%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "jingchu-humanoid-robot",
   "name": "Jingchu Humanoid Robot",
   "summary": "Wuhan maker of linear-drive humanoid robots and components.",
   "body": "It develops linear-actuator humanoid parts and complete robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.jingchurobot.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.jingchurobot.cn/"
    },
    "image": {
     "v": "/logos/jingchu-humanoid-robot.png",
     "fit": "contain",
     "src": "https://www.jingchurobot.cn/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wuhan",
     "src": "https://www.jingchurobot.cn",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.jingchurobot.cn",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "湖北省武汉市武昌区杨园, Wuhan, China",
       "lat": 30.578891,
       "lon": 114.29212,
       "src": "https://www.jingchurobot.cn"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ihub-robotics",
   "name": "iHub Robotics",
   "summary": "Indian developer of humanoid robots.",
   "body": "It builds humanoid robots in India.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.ihubrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ihubrobotics.com/"
    },
    "image": {
     "v": "/logos/ihub-robotics.png",
     "fit": "contain",
     "src": "https://www.ihubrobotics.com/favicon-512x512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kochi",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kochi, India",
       "lat": 9.967903,
       "lon": 76.244438,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ymbot",
   "name": "YMBOT",
   "summary": "Chinese maker of wheeled humanoid robots.",
   "body": "Known in Chinese as Yunmu Zhizao, it builds the YMBOT series.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://ymbot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ymbot.com/"
    },
    "image": {
     "v": "/logos/ymbot.png",
     "fit": "contain",
     "src": "https://ymbot.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Taicang",
     "src": "https://linkedin.com/company/ymbot",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://linkedin.com/company/ymbot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Taicang, Jiangsu, China",
       "lat": 31.459037,
       "lon": 121.126477,
       "src": "https://linkedin.com/company/ymbot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kinetix-ai",
   "name": "Kinetix AI",
   "summary": "Startup developing AI and humanoid robots.",
   "body": "It is listed on humanoid.guide for its humanoid robot work.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://www.kinetixai.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kinetixai.tech/"
    },
    "image": {
     "v": "/logos/kinetix-ai.png",
     "fit": "contain",
     "src": "https://www.kinetixai.tech/favicon.ico",
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
   "slug": "knowin",
   "name": "Knowin",
   "summary": "Shenzhen developer of home robots and the GLOW embodied model.",
   "body": "Its products include the KNOWIN-X1 robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://knowinai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://knowinai.com/"
    },
    "image": {
     "v": "/logos/knowin.png",
     "fit": "contain",
     "src": "https://knowinai.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://knowinai.com/contact.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://knowinai.com/contact.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "深圳市南山区科技南路18号, Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://knowinai.com/contact.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kyber-labs",
   "name": "Kyber Labs",
   "summary": "Brooklyn developer of robot hands driven by artificial muscles.",
   "body": "It is based at Newlab in the Brooklyn Navy Yard.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://kyberlabs.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kyberlabs.ai/"
    },
    "image": {
     "v": "/logos/kyber-labs.png",
     "fit": "contain",
     "src": "https://img1.wsimg.com/isteam/ip/11f1cef5-5695-48e5-8a28-44f6f44e1b1e/kyber_labs_blue_logo.png/:/rs=w:180,h:180,m",
     "asof": "2026-11"
    },
    "city": {
     "v": "Brooklyn",
     "src": "https://kyberlabs.ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://kyberlabs.ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "19 Morris Ave, Building 128 (Newlab), Brooklyn, NY 11205",
       "lat": 40.652601,
       "lon": -73.949721,
       "src": "https://kyberlabs.ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lanxin-robotics",
   "name": "Lanxin Robotics",
   "summary": "Chinese maker of 3D-vision mobile robots and logistics automation.",
   "body": "It delivers 3D vision mobile robots and AMR solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.lanxinrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lanxinrobotics.com/"
    },
    "image": {
     "v": "/logos/lanxin-robotics.png",
     "fit": "contain",
     "src": "https://www.lanxinrobotics.com/wp-content/uploads/2025/10/cropped-LANXIN-192x192.png",
     "asof": "2026-11"
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
   "slug": "leadshine",
   "name": "Leadshine",
   "summary": "Chinese supplier of servo drives, motors and motion control.",
   "body": "It supplies motion-control components including for humanoid joints.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://leadshine.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://leadshine.com/"
    },
    "image": {
     "v": "/logos/leadshine.png",
     "fit": "contain",
     "src": "https://leadshine.com/static/pc/favicon.ico",
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
   "slug": "light-origins",
   "name": "Light Origins",
   "summary": "Chinese startup building a full stack for general embodied intelligence.",
   "body": "Its work spans multimodal learning, action models, whole-body control and robot systems.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://www.lightorigins.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lightorigins.com/"
    },
    "image": {
     "v": "/logos/light-origins.png",
     "fit": "contain",
     "src": "https://www.lightorigins.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://linkedin.com/company/lightorigins",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://linkedin.com/company/lightorigins",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://linkedin.com/company/lightorigins"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "linkerbot",
   "name": "LinkerBot",
   "summary": "Beijing maker of high-performance dexterous robot hands.",
   "body": "Known in Chinese as Lingxin Qiaoshou, it makes high-DOF hands with many sensors.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://linkerbot.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://linkerbot.cn/"
    },
    "image": {
     "v": "/logos/linkerbot.png",
     "fit": "contain",
     "src": "https://linkerbot.cn/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://linkerbot.cn",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://linkerbot.cn",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "北京市海淀区大钟寺东路京仪科技大厦, Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://linkerbot.cn"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lumos",
   "name": "Lumos",
   "summary": "Developer of general-purpose humanoids and data-collection hardware.",
   "body": "It builds humanoids for industrial embodied AI and hardware for data collection.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.lumosbot.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.lumosbot.tech/"
    },
    "image": {
     "v": "/logos/lumos.png",
     "fit": "contain",
     "src": "https://www.lumosbot.tech/logo-mini.png",
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
   "slug": "matrix-robotics",
   "name": "Matrix Robotics",
   "summary": "Chinese maker of the MATRIX humanoid robot series.",
   "body": "MATRIX-3 features a biomimetic design, tactile perception and dexterous manipulation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://matrixrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://matrixrobotics.ai/"
    },
    "image": {
     "v": "/logos/matrix-robotics.png",
     "fit": "contain",
     "src": "https://matrixrobotics.ai/favicon.ico",
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
   "slug": "menlo-research",
   "name": "Menlo Research",
   "summary": "Singapore lab building the Asimov humanoid and tools for robots.",
   "body": "It builds robots and the tools to make them useful, starting with Asimov.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://menlo.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://menlo.ai/"
    },
    "image": {
     "v": "/logos/menlo-research.png",
     "fit": "contain",
     "src": "https://menlo.ai/apple-icon.png?apple-icon.0sbf~h8-~.6ey.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://menlo.ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://menlo.ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "100 Victoria St, Singapore",
       "lat": 1.297667,
       "lon": 103.854292,
       "src": "https://menlo.ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mimic",
   "name": "Mimic",
   "summary": "Zurich ETH spin-off building dexterous robot hands and AI.",
   "body": "It develops dexterous hands and foundation models for manipulation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.mimicrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mimicrobotics.com/"
    },
    "image": {
     "v": "/logos/mimic.png",
     "fit": "contain",
     "src": "https://www.mimicrobotics.com/favicon.ico?favicon.f725dee9.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://www.mimicrobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://www.mimicrobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://www.mimicrobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mirrorme-technology",
   "name": "MirrorMe Technology",
   "summary": "Beijing robotics company.",
   "body": "Registered as MirrorMe Technology (Beijing) Co., Ltd.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.mirrormetech.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mirrormetech.com/"
    },
    "image": {
     "v": "/logos/mirrorme-technology.png",
     "fit": "contain",
     "src": "https://www.mirrormetech.com/static/img/logo_bottomen.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.mirrormetech.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.mirrormetech.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.mirrormetech.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mirsee-robotics",
   "name": "Mirsee Robotics",
   "summary": "Canadian company producing humanoid robots for physically punishing work.",
   "body": "It builds humanoids to take on physically demanding jobs.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://mirsee.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mirsee.com/"
    },
    "image": {
     "v": "/logos/mirsee-robotics.png",
     "fit": "contain",
     "src": "https://mirsee.com/mfavi2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://linkedin.com/company/mirsee-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://linkedin.com/company/mirsee-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cambridge, Ontario",
       "lat": 43.360054,
       "lon": -80.312302,
       "src": "https://linkedin.com/company/mirsee-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "muks-robotics",
   "name": "Muks Robotics",
   "summary": "Indian AI humanoid robotics company.",
   "body": "It builds autonomous humanoid robots in India.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://muksrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://muksrobotics.com/"
    },
    "image": {
     "v": "/logos/muks-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/ddB16w2VRckERZYpnWYspzX1Kw.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pune",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pune, India",
       "lat": 18.521374,
       "lon": 73.854507,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neubility",
   "name": "Neubility",
   "summary": "Korean maker of autonomous delivery robots and humanoids.",
   "body": "It applies physical AI through autonomous robots and humanoids.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.neubility.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.neubility.ai/"
    },
    "image": {
     "v": "/logos/neubility.png",
     "fit": "contain",
     "src": "https://www.neubility.ai/favicon/favicon-32x32.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://www.cbinsights.com/company/neubility",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://www.cbinsights.com/company/neubility",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seongdong-gu, Seoul",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://www.cbinsights.com/company/neubility"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "noble-machines",
   "name": "Noble Machines",
   "summary": "Robotics startup building humanoid robots.",
   "body": "Formerly Under Control Robotics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.noblemachines.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.noblemachines.ai/"
    },
    "image": {
     "v": "/logos/noble-machines.png",
     "fit": "contain",
     "src": "https://www.noblemachines.ai/favicon/android-chrome-512x512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sunnyvale",
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
       "address": "Sunnyvale, United States",
       "lat": 37.36883,
       "lon": -122.036349,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nori",
   "name": "Nori",
   "summary": "Maker of NORI, an affordable bimanual robot for home and office.",
   "body": "A Y Combinator Summer 2026 company; its NORI A3 is made in the US.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.norirobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.norirobotics.com/"
    },
    "image": {
     "v": "/logos/nori.png",
     "fit": "contain",
     "src": "https://www.norirobotics.com/favicon-mark.84d68036.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/noril1",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/noril1",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/noril1"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "o-id",
   "name": "O-ID",
   "summary": "Japanese maker of modular humanoid robots.",
   "body": "It builds modular humanoids made in Japan.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://o-id.net/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://o-id.net/"
    },
    "image": {
     "v": "/logos/o-id.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/yL0KzOBy6FB4EDLLrltVJLaN87o.png",
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
   "slug": "oceantrix",
   "name": "OceanTrix",
   "summary": "Maker of dexterous robotic hands.",
   "body": "It focuses solely on dexterous robotic hands.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://oceantrix.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://oceantrix.com/"
    },
    "image": {
     "v": "/logos/oceantrix.png",
     "fit": "contain",
     "src": "https://oceantrix.com/wp-content/uploads/2024/09/cropped-oceanTrix-13-1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://oceantrix.com/about-us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://oceantrix.com/about-us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://oceantrix.com/about-us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "open-bionics",
   "name": "Open Bionics",
   "summary": "Bristol maker of bionic hands.",
   "body": "It develops medical devices that enhance the human body, starting with the Hero Arm.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://openbionics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://openbionics.com/"
    },
    "image": {
     "v": "/logos/open-bionics.png",
     "fit": "contain",
     "src": "https://openbionics.com/wp-content/uploads/2021/05/cropped-OB-Favicon-512x512-1-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bristol",
     "src": "https://openbionics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://openbionics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bristol, United Kingdom",
       "lat": 51.443014,
       "lon": -2.581662,
       "src": "https://openbionics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "droid-open-droids",
   "name": "Droid (Open Droids)",
   "summary": "Maker of open robotics platforms, formerly Open Droids.",
   "body": "Its platforms include R2D3, R1D3 and DH116.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://droid.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://droid.org/"
    },
    "image": {
     "v": "/logos/droid-open-droids.png",
     "fit": "contain",
     "src": "https://droid.org/icon.svg?icon.192bd423.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://www.humanoidmegahub.com/companies/550-opendroids",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.humanoidmegahub.com/companies/550-opendroids",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, California",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://www.humanoidmegahub.com/companies/550-opendroids"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "oversonic-robotics",
   "name": "Oversonic Robotics",
   "summary": "Italian maker of cognitive humanoid robots.",
   "body": "Its RoBee humanoid is used in industry and healthcare.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.oversonicrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.oversonicrobotics.com/"
    },
    "image": {
     "v": "/logos/oversonic-robotics.png",
     "fit": "contain",
     "src": "https://www.oversonicrobotics.com/images/icon/favicon-512x512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Besana in Brianza",
     "src": "https://humanoid.observer/companies/oversonic-robotics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://humanoid.observer/companies/oversonic-robotics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Besana in Brianza, Italy",
       "lat": 45.702538,
       "lon": 9.289542,
       "src": "https://humanoid.observer/companies/oversonic-robotics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "oymotion",
   "name": "OYMotion",
   "summary": "Chinese maker of bionic hands and EMG gesture recognition.",
   "body": "Known in Chinese as Aoyi Technology, it makes intelligent bionic hands.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://oymotion.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://oymotion.com/"
    },
    "image": {
     "v": "/logos/oymotion.png",
     "fit": "contain",
     "src": "https://oymotion.com/upload/images/20190814/logo4878799.png",
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
   "slug": "perceptyne",
   "name": "Perceptyne",
   "summary": "Indian builder of intelligent robots.",
   "body": "It combines advanced hardware and adaptive software.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.perceptyne.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.perceptyne.com/"
    },
    "image": {
     "v": "/logos/perceptyne.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68c3c8db9f41332d34b592dd/68e355f1c6d3d5acd9141100_perceptyne-favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hyderabad",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hyderabad, India",
       "lat": 17.360589,
       "lon": 78.474061,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "phybot",
   "name": "Phybot",
   "summary": "Chinese robot developer.",
   "body": "Known in Chinese as Dongyi Technology, it builds robots and smart-manufacturing solutions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.phybot.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.phybot.tech/"
    },
    "image": {
     "v": "/logos/phybot.png",
     "fit": "contain",
     "src": "https://www.phybot.tech/assets/images/PHYBOT%20Logo-BfcH-1sb.svg",
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
   "slug": "pink-robotics",
   "name": "Pink Robotics",
   "summary": "Darmstadt startup building humanoid robots.",
   "body": "It builds humanoid robots in Darmstadt, Germany.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.pink-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pink-robotics.com/"
    },
    "image": {
     "v": "/logos/pink-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/b8a0f0_09598b5fb13949868ac57d7aada1b8ed%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/b8a0f0_09598b5fb13949868ac57d7aada1b8ed%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Darmstadt",
     "src": "https://www.pink-robotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.pink-robotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Landwehrstraße 55, 64293 Darmstadt",
       "lat": 49.878553,
       "lon": 8.641836,
       "src": "https://www.pink-robotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pl-universe",
   "name": "PL Universe",
   "summary": "Chinese embodied robot company deploying its robots across scenarios.",
   "body": "Known in Chinese as Puluo Yuzhou, it builds the Dabai industrial embodied robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://pl-universe.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://pl-universe.com/"
    },
    "image": {
     "v": "/logos/pl-universe.png",
     "fit": "contain",
     "src": "https://pl-universe.com/static/index/images/logo.png",
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
   "slug": "prensilia",
   "name": "Prensilia",
   "summary": "Italian maker of robotic hands.",
   "body": "Its hands range from medical to industrial and research uses.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.prensilia.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.prensilia.com/"
    },
    "image": {
     "v": "/logos/prensilia.png",
     "fit": "contain",
     "src": "https://www.prensilia.com/wp-content/uploads/2023/02/cropped-Icona-Prensilia-192x192.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pontedera",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pontedera, Italy",
       "lat": 43.663454,
       "lon": 10.635485,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "proception",
   "name": "Proception",
   "summary": "Developer of humanoid robot hands that move and sense like human hands.",
   "body": "A Y Combinator Winter 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.proception.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.proception.ai/"
    },
    "image": {
     "v": "/logos/proception.png",
     "fit": "contain",
     "src": "https://www.proception.ai/favicon.ico?favicon.1fy03bgbetxwe.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/proception-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/proception-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/proception-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "psibot",
   "name": "PsiBot",
   "summary": "Shanghai embodied AI company focused on dexterous manipulation.",
   "body": "Known in Chinese as Lingchu Intelligence, it builds models, hardware, simulation and data systems.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.psibot.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.psibot.ai/"
    },
    "image": {
     "v": "/logos/psibot.png",
     "fit": "contain",
     "src": "https://www.psibot.ai/wp-content/uploads/2025/05/cropped-PsiBot_Logo-1-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.psibot.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.psibot.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "上海市徐汇区北杨人工智能小镇华发路899弄1号, Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://www.psibot.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "qbrobotics",
   "name": "qbrobotics",
   "summary": "Italian maker of soft robotic hands, arms and humanoid robots.",
   "body": "It produces artificial hands and arms, service robots and humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://qbrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://qbrobotics.com/"
    },
    "image": {
     "v": "/logos/qbrobotics.png",
     "fit": "contain",
     "src": "https://qbrobotics.com/wp-content/uploads/fbrfg/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cascina",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cascina, Italy",
       "lat": 43.676674,
       "lon": 10.549224,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "realman-robotics",
   "name": "RealMan Robotics",
   "summary": "Chinese maker of lightweight robot arms and embodied robot platforms.",
   "body": "It positions itself as a system-level platform for physical AI.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.realman-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.realman-robotics.com/"
    },
    "image": {
     "v": "/logos/realman-robotics.png",
     "fit": "contain",
     "src": "https://www.realman-robotics.com/prop/logo-avatar.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.realman-robotics.com/en/main/about-us.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.realman-robotics.com/en/main/about-us.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.realman-robotics.com/en/main/about-us.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "richtech-robotics",
   "name": "Richtech Robotics",
   "summary": "Maker of service robots for food, delivery and cleaning.",
   "body": "Its robots cover beverage service, delivery, cleaning, manufacturing and logistics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://info.richtechrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://info.richtechrobotics.com/"
    },
    "image": {
     "v": "/logos/richtech-robotics.png",
     "fit": "contain",
     "src": "https://info.richtechrobotics.com/hubfs/Logo-2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Las Vegas",
     "src": "https://www.wikidata.org/wiki/Q124361729",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q124361729",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Las Vegas, NV",
       "lat": 36.167426,
       "lon": -115.148413,
       "src": "https://www.wikidata.org/wiki/Q124361729"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboligent",
   "name": "Roboligent",
   "summary": "Texas developer of soft-actuated two-armed robots.",
   "body": "Its Robin robot uses soft actuation and real-time force control.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboligent.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roboligent.com/"
    },
    "image": {
     "v": "/logos/roboligent.png",
     "fit": "contain",
     "src": "https://roboligent.com/assets/apple-touch-icon-navy.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Round Rock",
     "src": "https://roboligent.com",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://roboligent.com",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2712 Meister Place, Round Rock, TX 78664",
       "lat": 30.488015,
       "lon": -97.636183,
       "src": "https://roboligent.com"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboscience",
   "name": "RoboScience",
   "summary": "Shenzhen developer of a cross-embodiment embodied AI model.",
   "body": "It builds autonomous manipulation robots on its own model.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://www.robosci.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robosci.com/"
    },
    "image": {
     "v": "/logos/roboscience.png",
     "fit": "contain",
     "src": "https://www.robosci.com/wp-content/uploads/2026/10/20261010-182021-300x300.jpeg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.robosci.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.robosci.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "深圳市宝安区海城路5号, Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.robosci.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotis",
   "name": "ROBOTIS",
   "summary": "Korean maker of Dynamixel actuators and robot kits.",
   "body": "Its actuators are widely used in research and humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://robotis.us/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotis.us/"
    },
    "image": {
     "v": "/logos/robotis.png",
     "fit": "contain",
     "src": "https://robotis.us/cdn/shop/files/logo_9cdf5374-c365-49e7-a1a9-87d4b21ba4c5.png?v=1785310767&amp;width=600",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robros",
   "name": "Robros",
   "summary": "Korean full-stack AI humanoid robot company.",
   "body": "It developed the IGRIS-C humanoid.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.robros.co.kr/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robros.co.kr/"
    },
    "image": {
     "v": "/logos/robros.png",
     "fit": "contain",
     "src": "https://www.robros.co.kr/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ruiyan",
   "name": "Ruiyan",
   "summary": "Shenzhen maker of dexterous robot hands.",
   "body": "Known in Chinese as Ruiyan Zhikong, it focuses on dexterous hands and core components.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.ruirobot.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ruirobot.cn/"
    },
    "image": {
     "v": "/logos/ruiyan.png",
     "fit": "contain",
     "src": "https://www.ruirobot.cn/icon.png?icon.2-8mvg93ur8zb.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.ruirobot.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.ruirobot.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "深圳市南山区粤海街道科技园, Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.ruirobot.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sarcomere-dynamics",
   "name": "Sarcomere Dynamics",
   "summary": "Canadian maker of dexterous robot hands.",
   "body": "It builds lightweight dexterous hands.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://sarcomeredynamics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sarcomeredynamics.com/"
    },
    "image": {
     "v": "/logos/sarcomere-dynamics.png",
     "fit": "contain",
     "src": "https://sarcomeredynamics.com/assets/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "St. Albert",
     "src": "https://canadamakes.ca/places/sarcomere-dynamics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://canadamakes.ca/places/sarcomere-dynamics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "200 Carnegie Dr, Unit 206, St. Albert, Alberta T8N 5A8",
       "lat": 53.633239,
       "lon": -113.628845,
       "src": "https://canadamakes.ca/places/sarcomere-dynamics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "seed-robotics",
   "name": "Seed Robotics",
   "summary": "Maker of robotic hands and actuators.",
   "body": "Its RH8D hand is used in research.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.seedrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.seedrobotics.com/"
    },
    "image": {
     "v": "/logos/seed-robotics.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/5db846da1bb60d0407fed0ac/1572382262065-ELN2HNYENUEO5PO0GAPD/favicon.ico?format=100w",
     "asof": "2026-11"
    },
    "city": {
     "v": "Lisbon",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Portugal",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lisbon, Portugal",
       "lat": 38.707751,
       "lon": -9.136592,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboparty",
   "name": "RoboParty",
   "summary": "Maker of fully open-source robots for researchers and developers.",
   "body": "It publishes its robots as open-source hardware.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://roboparty.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://roboparty.com/"
    },
    "image": {
     "v": "/logos/roboparty.png",
     "fit": "contain",
     "src": "https://roboparty.com/icon.png?icon.269e3tg6w0g6f.png",
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
   "slug": "zwhand",
   "name": "ZWHAND",
   "summary": "Chinese maker of dexterous robot hands.",
   "body": "It makes dexterous hands for robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://zwhand.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://zwhand.com/"
    },
    "image": {
     "v": "/logos/zwhand.png",
     "fit": "contain",
     "src": "https://zwhand.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://robottoday.com/suppliers-discovery/zwhand",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://robottoday.com/suppliers-discovery/zwhand",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, Guangdong, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://robottoday.com/suppliers-discovery/zwhand"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "siasun",
   "name": "Siasun",
   "summary": "Shenyang industrial and mobile robot maker.",
   "body": "A major Chinese robot maker serving 4,000+ companies in 40+ countries, also developing humanoids.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.siasun.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.siasun.com/"
    },
    "image": {
     "v": "/logos/siasun.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.siasun.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenyang",
     "src": "https://www.siasun.com",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.siasun.com",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "辽宁省沈阳市浑南区全运路33号, Shenyang, China",
       "lat": 41.80261,
       "lon": 123.42791,
       "src": "https://www.siasun.com"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "starbot",
   "name": "StarBot",
   "summary": "Maker of embodied AI robot platforms for education and research.",
   "body": "Its platforms target youth education and university research.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.starbotusa.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.starbotusa.com/"
    },
    "image": {
     "v": "/logos/starbot.png",
     "fit": "contain",
     "src": "https://www.starbotusa.com/icon.png?icon.39ko-gsur1159.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Barbara",
     "src": "https://www.starbotusa.com/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.starbotusa.com/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Santa Barbara, California",
       "lat": 34.422132,
       "lon": -119.702667,
       "src": "https://www.starbotusa.com/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "svaya-robotics",
   "name": "Svaya Robotics",
   "summary": "Indian robot maker.",
   "body": "It builds collaborative and humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://svayarobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://svayarobotics.com/"
    },
    "image": {
     "v": "/logos/svaya-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=svayarobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hyderabad",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hyderabad, India",
       "lat": 17.360589,
       "lon": 78.474061,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "syntheva",
   "name": "Syntheva",
   "summary": "Norwegian maker of the Synthia companion robot.",
   "body": "Synthia (SNT-01A) is a realistic companion robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robotics.syntheva.no/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotics.syntheva.no/"
    },
    "image": {
     "v": "/logos/syntheva.png",
     "fit": "contain",
     "src": "https://robotics.syntheva.no/user/themes/oxygen/images/favicon.png?fp=4702",
     "asof": "2026-11"
    },
    "city": {
     "v": "Orkanger",
     "src": "https://linkedin.com/company/syntheva-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "Norway",
     "src": "https://linkedin.com/company/syntheva-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Orkanger, Norway",
       "lat": 63.304819,
       "lon": 9.849668,
       "src": "https://linkedin.com/company/syntheva-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tacta-systems",
   "name": "Tacta Systems",
   "summary": "Palo Alto developer of robot hands, touch sensing and skill transfer.",
   "body": "It builds the hand, touch, skill-transfer and intelligence layers as one.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Model lab"
     ],
     "src": "https://www.tactasystems.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tactasystems.com/"
    },
    "image": {
     "v": "/logos/tacta-systems.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6a45a9994d98f3a059e8ac0c/6a63ec1fe4fd8a3b4f4f00e5_T_Logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.tactasystems.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.tactasystems.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3240 Hillview Ave Palo Alto, CA 94304",
       "lat": 37.408,
       "lon": -122.146169,
       "src": "https://www.tactasystems.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tangible-robots",
   "name": "Tangible Robots",
   "summary": "Robotics startup building physical robots.",
   "body": "It is listed among humanoid makers on humanoid.guide.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://tangiblerobots.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tangiblerobots.ai/"
    },
    "image": {
     "v": "/logos/tangible-robots.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/eGkroJzHXsiukXHiVanDToEZ4.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://vcmaps.com/company/tangiblerobots.ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://vcmaps.com/company/tangiblerobots.ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://vcmaps.com/company/tangiblerobots.ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "the-robot-studio",
   "name": "The Robot Studio",
   "summary": "French maker of open humanoid robots.",
   "body": "It is based near Lyon.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.therobotstudio.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.therobotstudio.com/"
    },
    "image": {
     "v": "/logos/the-robot-studio.png",
     "fit": "contain",
     "src": "https://www.therobotstudio.com/wp-content/uploads/2019/01/icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Villeurbanne",
     "src": "https://www.therobotstudio.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://www.therobotstudio.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "11 Avenue du Bel Air, 69100 Villeurbanne",
       "lat": 45.766058,
       "lon": 4.879627,
       "src": "https://www.therobotstudio.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ti5",
   "name": "Ti5",
   "summary": "Chinese maker of lightweight robot joint modules and bionic hands.",
   "body": "Also known as Axion Motion Technologies.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.ti5robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ti5robotics.com/"
    },
    "image": {
     "v": "/logos/ti5.png",
     "fit": "contain",
     "src": "https://images.yybcdn.com/yyb_icons/68274/1779076186914845592076902400.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://www.ti5robot.com/?lang=en",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.ti5robot.com/?lang=en",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2nd Floor, Building 3C, Liandong U Valley, 55 Zidong Road, Maqiao Town, Minhang District, Shanghai",
       "lat": 31.114767,
       "lon": 121.376943,
       "src": "https://www.ti5robot.com/?lang=en"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tianlian-robot",
   "name": "Tianlian Robot",
   "summary": "Sichuan maker of humanoid, cobot and palletising robots.",
   "body": "It develops and produces humanoid robots and core robot components.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://www.tlibot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tlibot.com/"
    },
    "image": {
     "v": "/logos/tianlian-robot.png",
     "fit": "contain",
     "src": "https://www.tlibot.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mianyang",
     "src": "https://www.tlibot.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.tlibot.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "四川省绵阳高新区火炬西街南段10号, Mianyang, China",
       "lat": 31.460271,
       "lon": 104.716072,
       "src": "https://www.tlibot.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "topstar",
   "name": "Topstar",
   "summary": "Listed Chinese robot and industrial automation maker.",
   "body": "It has also shown a humanoid robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.topstarmachine.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.topstarmachine.com/"
    },
    "image": {
     "v": "/logos/topstar.png",
     "fit": "contain",
     "src": "https://www.topstarmachine.com/wp-content/uploads/2026/07/cropped-Topstar-logo-site-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dongguan",
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
       "address": "Dongguan, China",
       "lat": 23.018357,
       "lon": 113.745233,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "torchkernel-robotics",
   "name": "TorchKernel Robotics",
   "summary": "Hangzhou maker of industrial dexterous hands and end effectors.",
   "body": "Its products include the TORCH HAND 1 and 2.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://torchkernel.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://torchkernel.com/"
    },
    "image": {
     "v": "/logos/torchkernel-robotics.png",
     "fit": "contain",
     "src": "https://torchkernel.com/images/logo.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://torchkernel.com",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://torchkernel.com",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "浙江省杭州市余杭区仓前街道龙舟北路76号, Hangzhou, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://torchkernel.com"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ugo",
   "name": "ugo",
   "summary": "Japanese maker of the ugo remote-operated robot.",
   "body": "Its robots remotely operate and automate on-site work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://ugo.plus/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ugo.plus/"
    },
    "image": {
     "v": "/logos/ugo.png",
     "fit": "contain",
     "src": "https://ugo.plus/wp-content/themes/ugo%20Products/assets/img/cropped-ugo_corp_logo-192x192-1.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://corp.ugo.plus/company/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://corp.ugo.plus/company/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1-7-8 Higashi-Kanda, Chiyoda-ku, Tokyo",
       "lat": 35.694328,
       "lon": 139.780497,
       "src": "https://corp.ugo.plus/company/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ultra",
   "name": "Ultra",
   "summary": "Maker of Operator, an AI robot that packs, sorts and kits orders.",
   "body": "A Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://ultra.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ultra.tech/"
    },
    "image": {
     "v": "/logos/ultra.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/SOyH70FPNBv2Vp0Y6BX76Kafeg.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.ycombinator.com/companies/ultra",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/ultra",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.ycombinator.com/companies/ultra"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "uma",
   "name": "UMA",
   "summary": "Robotics startup building robots with experience.",
   "body": "It is listed among humanoid makers on humanoid.guide.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://uma.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://uma.bot/"
    },
    "image": {
     "v": "/logos/uma.png",
     "fit": "contain",
     "src": "https://uma.bot/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "unix-ai",
   "name": "UniX AI",
   "summary": "Chinese humanoid robot maker.",
   "body": "It develops versatile humanoids for commercial and home use.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.unix-group.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.unix-group.ai/"
    },
    "image": {
     "v": "/logos/unix-ai.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.unix-group.ai&sz=256",
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
   "slug": "vbot",
   "name": "Vbot",
   "summary": "Beijing robot maker.",
   "body": "Registered as Weita Dongli Beijing Technology.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.vbot.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.vbot.cn/"
    },
    "image": {
     "v": "/logos/vbot.png",
     "fit": "contain",
     "src": "https://www.vbot.cn/favicon.ico?v=202603074",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.vbot.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.vbot.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.vbot.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "veichi",
   "name": "VEICHI",
   "summary": "Chinese supplier of electric drives and industrial control.",
   "body": "It offers high-performance drives used in automation and robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.veichi.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.veichi.com/"
    },
    "image": {
     "v": "/logos/veichi.png",
     "fit": "contain",
     "src": "https://www.veichi.com/favicon.ico",
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
   "slug": "vesoma",
   "name": "Vesoma",
   "summary": "Developer of humanoid robots that learn from humans.",
   "body": "It describes its goal as physical general intelligence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://vesoma.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vesoma.com/"
    },
    "image": {
     "v": "/logos/vesoma.png",
     "fit": "contain",
     "src": "https://vesoma.com/icon.png?icon.11j2q9qs4nl5y.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Garching bei München",
     "src": "https://vesoma.com/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://vesoma.com/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zeppelinstraße 22D, 85748 Garching bei München",
       "lat": 48.253832,
       "lon": 11.619359,
       "src": "https://vesoma.com/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vinmotion",
   "name": "VinMotion",
   "summary": "Vietnamese humanoid robot company in the Vingroup ecosystem.",
   "body": "It provides infrastructure for large-scale humanoid deployment, with a US office in Cypress, California.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://vinmotion.net/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vinmotion.net/"
    },
    "image": {
     "v": "/logos/vinmotion.png",
     "fit": "contain",
     "src": "https://vinmotion.net/favicon.ico?favicon.1i7cxjqxx50z6.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hanoi",
     "src": "https://humanoid.observer/companies/vinmotion/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Vietnam",
     "src": "https://humanoid.observer/companies/vinmotion/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hanoi, Vietnam",
       "lat": 21.028333,
       "lon": 105.854041,
       "src": "https://humanoid.observer/companies/vinmotion/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "walden-robotics",
   "name": "Walden Robotics",
   "summary": "Robotics startup building humanoid robots.",
   "body": "It is listed on humanoid.guide for its Walden robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.waldenrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.waldenrobotics.com/"
    },
    "image": {
     "v": "/logos/walden-robotics.png",
     "fit": "contain",
     "src": "https://www.waldenrobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://www.waldenrobotics.com/news/walden-robotics-launches-from-stealth",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.waldenrobotics.com/news/walden-robotics-launches-from-stealth",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cambridge, Massachusetts",
       "lat": 42.365635,
       "lon": -71.104002,
       "src": "https://www.waldenrobotics.com/news/walden-robotics-launches-from-stealth"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wirobotics",
   "name": "WIRobotics",
   "summary": "Korean maker of wearable robots and humanoids.",
   "body": "Its WIM wearable robot assists walking.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.wirobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.wirobotics.com/"
    },
    "image": {
     "v": "/logos/wirobotics.png",
     "fit": "contain",
     "src": "https://www.wirobotics.com:443/images/img-logo-wh.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cheonan",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cheonan, South Korea",
       "lat": 36.815028,
       "lon": 127.114065,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "westlake-robotics",
   "name": "Westlake Robotics",
   "summary": "Hangzhou developer of general robot brains and controllers.",
   "body": "Registered as Westlake Robotics Technology (Hangzhou) Co.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://wlrobo.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://wlrobo.com/"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://wlrobo.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://wlrobo.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hangzhou, China",
       "lat": 30.248963,
       "lon": 120.205234,
       "src": "https://wlrobo.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wuji-technology",
   "name": "Wuji Technology",
   "summary": "Chinese maker of dexterous robot hands and data gloves.",
   "body": "It makes the Wuji Hand.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://wuji.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://wuji.tech/"
    },
    "image": {
     "v": "/logos/wuji-technology.png",
     "fit": "contain",
     "src": "https://wuji.tech/apple-touch-icon.png",
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
   "slug": "xynova",
   "name": "Xynova",
   "summary": "Chinese supplier of core humanoid robot components.",
   "body": "A core component supplier for robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://xynova.com.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://xynova.com.cn/"
    },
    "image": {
     "v": "/logos/xynova.png",
     "fit": "contain",
     "src": "https://xynova.com.cn/favicon.png",
     "asof": "2026-11"
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
   "slug": "yuequan-bionics",
   "name": "Yuequan Bionics",
   "summary": "Chinese maker of bionic robot hands.",
   "body": "It makes bionic hands for robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://yqbionics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://yqbionics.com/"
    },
    "image": {
     "v": "/logos/yuequan-bionics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=yqbionics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://pitchbook.com/profiles/company/533395-72",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://pitchbook.com/profiles/company/533395-72",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building 1, No. 3 Courtyard, Yingcai South First Street, Changping, Beijing",
       "lat": 40.219646,
       "lon": 116.225091,
       "src": "https://pitchbook.com/profiles/company/533395-72"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zerith",
   "name": "Zerith",
   "summary": "Chinese embodied AI company building manipulation models and wheeled humanoids.",
   "body": "Its Zerith V models and H1 wheeled humanoid aim to make manipulation available via API.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://zerith.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://zerith.com/"
    },
    "image": {
     "v": "/logos/zerith.png",
     "fit": "contain",
     "src": "https://zerith.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hefei",
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
       "address": "Hefei, China",
       "lat": 31.866568,
       "lon": 117.281428,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zeroth",
   "name": "Zeroth",
   "summary": "Robotics company building embodied robots.",
   "body": "It is listed on humanoid.guide.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.zeroth0.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zeroth0.com/"
    },
    "image": {
     "v": "/logos/zeroth.png",
     "fit": "contain",
     "src": "https://www.zeroth0.com/cdn/shop/files/Group_117.png?v=1761879322&width=96",
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
   "slug": "festo",
   "name": "Festo",
   "summary": "German automation company known for bionic robotics research.",
   "body": "Its Bionic Learning Network has produced robot hands and arms.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://festo.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://festo.com/"
    },
    "image": {
     "v": "/logos/festo.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=festo.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Esslingen am Neckar",
     "src": "https://www.wikidata.org/wiki/Q657230",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wikidata.org/wiki/Q657230",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Esslingen am Neckar, Germany",
       "lat": 48.742758,
       "lon": 9.307168,
       "src": "https://www.wikidata.org/wiki/Q657230"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "addverb",
   "name": "Addverb",
   "summary": "Indian warehouse automation and robotics company building quadrupeds and humanoids.",
   "body": "A Reliance company with offices in the US and Australia.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://addverb.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://addverb.com/"
    },
    "image": {
     "v": "/logos/addverb.png",
     "fit": "contain",
     "src": "https://addverb.com/wp-content/themes/onepress-child/assets/images/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Noida",
     "src": "https://humanoid.observer/companies/addverb/",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://humanoid.observer/companies/addverb/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Noida, Uttar Pradesh, India",
       "lat": 28.570633,
       "lon": 77.327215,
       "src": "https://humanoid.observer/companies/addverb/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "android-technics",
   "name": "Android Technics",
   "summary": "Russian developer of robotic systems including the FEDOR humanoid.",
   "body": "It builds anthropomorphic and other robotic complexes.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://npo-at.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://npo-at.com/"
    },
    "image": {
     "v": "/logos/android-technics.png",
     "fit": "contain",
     "src": "https://npo-at.com/wp-content/uploads/2025/05/cropped-logo-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Magnitogorsk",
     "src": "https://humanoid.observer/companies/android-technics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Russia",
     "src": "https://humanoid.observer/companies/android-technics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Magnitogorsk, Russia",
       "lat": 53.425687,
       "lon": 59.050732,
       "src": "https://humanoid.observer/companies/android-technics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "devanthro",
   "name": "Devanthro",
   "summary": "Munich maker of the Robody telepresence humanoid.",
   "body": "It calls itself the Robody company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.devanthro.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.devanthro.com/"
    },
    "image": {
     "v": "/logos/devanthro.png",
     "fit": "contain",
     "src": "https://www.devanthro.com/wp-content/uploads/2021/10/cropped-DevanthroSymbolWonT512px-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://humanoid.observer/companies/devanthro/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://humanoid.observer/companies/devanthro/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://humanoid.observer/companies/devanthro/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hanson-robotics",
   "name": "Hanson Robotics",
   "summary": "Hong Kong maker of human-like robots including Sophia.",
   "body": "Its robots are known for realistic faces and expressions.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://hansonrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hansonrobotics.com/"
    },
    "image": {
     "v": "/logos/hanson-robotics.png",
     "fit": "contain",
     "src": "https://hansonrobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://humanoid.observer/companies/hanson-robotics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://humanoid.observer/companies/hanson-robotics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Hong Kong",
       "lat": 22.281833,
       "lon": 114.158283,
       "src": "https://humanoid.observer/companies/hanson-robotics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hiwonder",
   "name": "Hiwonder",
   "summary": "Shenzhen maker of open-source educational robots.",
   "body": "Its kits include small humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.hiwonder.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hiwonder.com/"
    },
    "image": {
     "v": "/logos/hiwonder.png",
     "fit": "contain",
     "src": "https://www.hiwonder.com/cdn/shop/files/H.svg?crop=center&height=128&v=1792552704&width=128",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://humanoid.observer/companies/hiwonder/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://humanoid.observer/companies/hiwonder/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://humanoid.observer/companies/hiwonder/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "humanoid-robots-shanghai",
   "name": "Humanoid Robots (Shanghai)",
   "summary": "Shanghai open-source humanoid robot centre behind OpenLoong.",
   "body": "It offers fully open-source humanoid hardware, software, models and data, including Qinglong.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Research lab"
     ],
     "src": "https://www.openloong.org.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.openloong.org.cn/"
    },
    "image": {
     "v": "/logos/humanoid-robots-shanghai.png",
     "fit": "contain",
     "src": "https://www.openloong.org.cn/logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://humanoid.observer/companies/humanoid-robots-shanghai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://humanoid.observer/companies/humanoid-robots-shanghai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://humanoid.observer/companies/humanoid-robots-shanghai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inmoov",
   "name": "InMoov",
   "summary": "Open-source 3D-printed humanoid robot project.",
   "body": "Created by Gaël Langevin in France.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://inmoov.fr/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://inmoov.fr/"
    },
    "image": {
     "v": "/logos/inmoov.png",
     "fit": "contain",
     "src": "https://inmoov.fr/wp-content/themes/klein/inmoov/icon-ipad.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Paris",
     "src": "https://humanoid.observer/companies/inmoov/",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://humanoid.observer/companies/inmoov/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Paris, France",
       "lat": 48.853495,
       "lon": 2.348391,
       "src": "https://humanoid.observer/companies/inmoov/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kondo-kagaku",
   "name": "Kondo Kagaku",
   "summary": "Tokyo maker of small biped robots and servos.",
   "body": "It makes KHR humanoid kits and servos.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://kondo-robot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kondo-robot.com/"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://humanoid.observer/companies/kondo/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://humanoid.observer/companies/kondo/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://humanoid.observer/companies/kondo/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "oregon-state-university",
   "name": "Oregon State University",
   "summary": "Oregon university whose robotics programme developed the Cassie biped.",
   "body": "Its Dynamic Robotics Lab work led to Agility Robotics.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://oregonstate.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://oregonstate.edu/"
    },
    "image": {
     "v": "/logos/oregon-state-university.png",
     "fit": "contain",
     "src": "https://oregonstate.edu/themes/custom/madrone_homepage/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Corvallis",
     "src": "https://oregonstate.edu",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://oregonstate.edu",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1500 SW Jefferson Way Corvallis, OR 97331",
       "lat": 44.565067,
       "lon": -123.277115,
       "src": "https://oregonstate.edu"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robosen-robotics",
   "name": "Robosen Robotics",
   "summary": "Shenzhen maker of consumer transforming robots.",
   "body": "It makes licensed transforming robots for consumers.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Entertainment"
     ],
     "src": "https://www.robosen.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robosen.com/"
    },
    "image": {
     "v": "/logos/robosen-robotics.png",
     "fit": "contain",
     "src": "https://dbx1fvnryss68.cloudfront.net/public1/robosen-logo.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://humanoid.observer/companies/robosen/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://humanoid.observer/companies/robosen/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shenzhen, China",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://humanoid.observer/companies/robosen/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tmsuk",
   "name": "Tmsuk",
   "summary": "Japanese service robot maker.",
   "body": "It develops service robots for medical, disaster and enterprise use.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.tmsuk.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tmsuk.co.jp/"
    },
    "image": {
     "v": "/logos/tmsuk.png",
     "fit": "contain",
     "src": "https://www.tmsuk.co.jp/wp-content/themes/tmsuk/images/common/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kyoto",
     "src": "https://humanoid.observer/companies/tmsuk/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://humanoid.observer/companies/tmsuk/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kyoto, Japan",
       "lat": 35.011575,
       "lon": 135.768144,
       "src": "https://humanoid.observer/companies/tmsuk/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autonomous-intelligent-systems-university-of-bonn",
   "name": "Autonomous Intelligent Systems (University of Bonn)",
   "summary": "University of Bonn group known for humanoid soccer and cognitive robotics.",
   "body": "It is Computer Science VI at the University of Bonn.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.ais.uni-bonn.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ais.uni-bonn.de/"
    },
    "image": {
     "v": "/logos/autonomous-intelligent-systems-university-of-bonn.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.ais.uni-bonn.de&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bonn",
     "src": "https://humanoid.observer/companies/university-of-bonn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://humanoid.observer/companies/university-of-bonn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bonn, Germany",
       "lat": 50.735262,
       "lon": 7.102463,
       "src": "https://humanoid.observer/companies/university-of-bonn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-southern-california",
   "name": "University of Southern California",
   "summary": "Los Angeles university with robotics and embodied AI research.",
   "body": "Its robotics research spans the Viterbi School of Engineering.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://usc.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://usc.edu/"
    },
    "image": {
     "v": "/logos/university-of-southern-california.png",
     "fit": "contain",
     "src": "https://usc.edu/wp-content/uploads/2025/11/cropped-usc_512x512-Android@1x-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.marshall.usc.edu/news/energy-business-summit-explores-ai-innovations-and-adaptivity-to-policy-shifts",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.marshall.usc.edu/news/energy-business-summit-explores-ai-innovations-and-adaptivity-to-policy-shifts",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3670 Trousdale Parkway Los Angeles, California 90089",
       "lat": 34.01885,
       "lon": -118.285778,
       "src": "https://www.marshall.usc.edu/news/energy-business-summit-explores-ai-innovations-and-adaptivity-to-policy-shifts"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "virginia-tech",
   "name": "Virginia Tech",
   "summary": "Virginia university with humanoid robotics research.",
   "body": "Its TREC lab worked on humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.vt.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.vt.edu/"
    },
    "image": {
     "v": "/logos/virginia-tech.png",
     "fit": "contain",
     "src": "https://www.vt.edu/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Blacksburg",
     "src": "https://humanoid.observer/companies/virginia-tech/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://humanoid.observer/companies/virginia-tech/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Blacksburg, Virginia, United States",
       "lat": 37.229657,
       "lon": -80.413677,
       "src": "https://humanoid.observer/companies/virginia-tech/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "abstract",
   "name": "Abstract",
   "summary": "San Francisco provider of inference infrastructure for robot action models.",
   "body": "One API key serves robot action models such as π0.5, MolmoAct2 and Isaac 0.5 alongside open LLMs.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Compute"
     ],
     "src": "https://abstract.inc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://abstract.inc/"
    },
    "image": {
     "v": "/logos/abstract.png",
     "fit": "contain",
     "src": "https://abstract.inc/favicon-192.png?v=568dad4698f6",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.linkedin.com/company/abstract-pbc/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/abstract-pbc/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.linkedin.com/company/abstract-pbc/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dimensional",
   "name": "Dimensional",
   "summary": "Developer of dimOS, an open-source agentic operating system for robots.",
   "body": "Its open-source framework lets developers program humanoids, quadrupeds and arms with agents; it also has a team in Shenzhen.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://dimensional.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dimensional.org/"
    },
    "image": {
     "v": "/logos/dimensional.png",
     "fit": "contain",
     "src": "https://dimensional.org/favicon-64.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://jobs.ashbyhq.com/dimensional",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://jobs.ashbyhq.com/dimensional",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://jobs.ashbyhq.com/dimensional"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "general-robotics",
   "name": "General Robotics",
   "summary": "AI research and deployment company building intelligence for robots.",
   "body": "Formerly Scaled Foundations, it develops the GRID platform for robot AI; it was founded in 2023.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://www.generalrobotics.company/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.generalrobotics.company/"
    },
    "image": {
     "v": "/logos/general-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/6aa0328c48614f5ed0e1f130/6aa04546e359b0bc13b92681_favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Redmond",
     "src": "https://www.linkedin.com/company/generalrobotics/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.linkedin.com/company/generalrobotics/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Redmond, United States",
       "lat": 47.669414,
       "lon": -122.123877,
       "src": "https://www.linkedin.com/company/generalrobotics/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rek",
   "name": "REK",
   "summary": "San Francisco league where people pilot humanoid robots in combat.",
   "body": "Robot Entertainment Kombat lets operators in VR control humanoid robots in live fights.",
   "data": {
    "roles": {
     "v": [
      "Entertainment"
     ],
     "src": "https://rek.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rek.com/"
    },
    "image": {
     "v": "/logos/rek.png",
     "fit": "contain",
     "src": "https://rek.com/apple-touch-icon.png?v=6",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://thesfnews.com/rek-shops-robot-brawl/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://thesfnews.com/rek-shops-robot-brawl/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1415 Van Ness Avenue, San Francisco, CA",
       "lat": 37.788793,
       "lon": -122.422423,
       "src": "https://thesfnews.com/rek-shops-robot-brawl/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "roboforce",
   "name": "RoboForce",
   "summary": "AI robotics startup building robots for outdoor labour.",
   "body": "It builds what it calls Robo-Labor for industries such as solar and utilities.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.roboforce.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.roboforce.ai/"
    },
    "image": {
     "v": "/logos/roboforce.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68242280f6fbc0d64e77075c/68242280f6fbc0d64e77078f_favicon%40256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Milpitas",
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
       "address": "Milpitas, United States",
       "lat": 37.433227,
       "lon": -121.898925,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "matic-robots",
   "name": "Matic Robots",
   "summary": "Mountain View maker of a vision-based home cleaning robot.",
   "body": "Matic sees and avoids clutter while vacuuming and mopping.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://maticrobots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://maticrobots.com/"
    },
    "image": {
     "v": "/logos/matic-robots.png",
     "fit": "contain",
     "src": "https://dt8esguquqvs0.cloudfront.net/assets/favicons/192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://maticrobots.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://maticrobots.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, United States",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://maticrobots.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bright-machines",
   "name": "Bright Machines",
   "summary": "Maker of robotic micro-factories for electronics and AI infrastructure.",
   "body": "It builds AI and data-centre infrastructure using robotics and physical AI.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.brightmachines.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.brightmachines.com/"
    },
    "image": {
     "v": "/logos/bright-machines.png",
     "fit": "contain",
     "src": "https://www.brightmachines.com/wp-content/themes/bright-machines/img/favicons/favicon-228.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Burlingame",
     "src": "https://www.brightmachines.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.brightmachines.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1635 Rollins Rd., Ste. B, Burlingame, CA 94010",
       "lat": 37.578097,
       "lon": -122.34731,
       "src": "https://www.brightmachines.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vention",
   "name": "Vention",
   "summary": "Cloud platform to design, automate, order and deploy manufacturing equipment.",
   "body": "Customers design and deploy robot cells through its cloud software and modular hardware.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://vention.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vention.com/"
    },
    "image": {
     "v": "/logos/vention.png",
     "fit": "contain",
     "src": "https://assets.vention.io/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Montreal",
     "src": "https://pitchbook.com/profiles/company/170846-02",
     "asof": "2026-11"
    },
    "country": {
     "v": "Canada",
     "src": "https://pitchbook.com/profiles/company/170846-02",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "4767 Dagenais Street, Montreal, QC H4C 1L8",
       "lat": 45.503182,
       "lon": -73.569806,
       "src": "https://pitchbook.com/profiles/company/170846-02"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robust-ai",
   "name": "Robust AI",
   "summary": "Developer of collaborative warehouse robots.",
   "body": "It builds AI-powered robots designed to work alongside people.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.robust.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robust.ai/"
    },
    "image": {
     "v": "/logos/robust-ai.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/6658c5126fe477069fe8a5ed/96bbee7b-d581-44e1-845b-b13d394ac232/favicon.ico?format=100w",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Carlos",
     "src": "https://pitchbook.com/profiles/company/267926-77",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://pitchbook.com/profiles/company/267926-77",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1050 Commercial Street, San Carlos, CA 94070",
       "lat": 37.50368,
       "lon": -122.254345,
       "src": "https://pitchbook.com/profiles/company/267926-77"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "simbe",
   "name": "Simbe",
   "summary": "Maker of Tally, a shelf-scanning retail robot.",
   "body": "Its robots and vision systems track inventory in stores.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://simbe.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://simbe.com/"
    },
    "image": {
     "v": "/logos/simbe.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=simberobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Burlingame",
     "src": "https://www.simberobotics.com/about/contact-us",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.simberobotics.com/about/contact-us",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Burlingame, CA 94010",
       "lat": 37.578097,
       "lon": -122.34731,
       "src": "https://www.simberobotics.com/about/contact-us"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "brain-corp",
   "name": "Brain Corp",
   "summary": "Autonomy software company powering commercial cleaning and inventory robots.",
   "body": "Its BrainOS runs fleets of autonomous floor scrubbers and other robots.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.braincorp.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.braincorp.com/"
    },
    "image": {
     "v": "/logos/brain-corp.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/650caff2e60146b72295e1c4/6a70cea4df5a3168e5794737_Untitled%20design%20(4).png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Diego",
     "src": "https://www.wikidata.org/wiki/Q56347442",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q56347442",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Diego, CA",
       "lat": 32.715706,
       "lon": -117.163828,
       "src": "https://www.wikidata.org/wiki/Q56347442"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "miso-robotics",
   "name": "Miso Robotics",
   "summary": "Pasadena maker of kitchen automation robots.",
   "body": "Its Flippy robot automates frying in commercial kitchens.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.misorobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.misorobotics.com/"
    },
    "image": {
     "v": "/logos/miso-robotics.png",
     "fit": "contain",
     "src": "https://www.misorobotics.com/hubfs/Miso_Logo_Mark_4C.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pasadena",
     "src": "https://www.misorobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.misorobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "650 E Green Street Pasadena, CA 91101",
       "lat": 34.14434,
       "lon": -118.137445,
       "src": "https://www.misorobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "chef-robotics",
   "name": "Chef Robotics",
   "summary": "San Francisco maker of AI robots for food manufacturing.",
   "body": "Its robots assemble meals on food-production lines.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.chefrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.chefrobotics.ai/"
    },
    "image": {
     "v": "/logos/chef-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/64b77d8a4c7f046a3e2e5feb/64b933dc321d617372fdb707_Favicon%20Chef.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.chefrobotics.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.chefrobotics.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "200 Kansas St, STE 204 San Francisco, CA 94103",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.chefrobotics.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "carbon-robotics",
   "name": "Carbon Robotics",
   "summary": "Seattle maker of AI-powered agricultural robots.",
   "body": "Its LaserWeeder uses computer vision and lasers to remove weeds.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://carbonrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://carbonrobotics.com/"
    },
    "image": {
     "v": "/logos/carbon-robotics.png",
     "fit": "contain",
     "src": "https://images.squarespace-cdn.com/content/v1/606b788e71df0270bd2616de/66f91225-96fc-49f8-a940-ef0243f88d86/favicon.ico?format=100w",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seattle",
     "src": "https://carbonrobotics.com/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://carbonrobotics.com/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2211 Elliott Ave, Suite 300 Seattle, WA 98121",
       "lat": 47.603832,
       "lon": -122.330062,
       "src": "https://carbonrobotics.com/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "monarch-tractor",
   "name": "Monarch Tractor",
   "summary": "Maker of electric, autonomy-ready tractors.",
   "body": "Its MK-V tractor is electric and driver-optional.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://monarchtractor.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://monarchtractor.com/"
    },
    "image": {
     "v": "/logos/monarch-tractor.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.monarchtractor.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Livermore",
     "src": "https://monarchtractor.com/news",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://monarchtractor.com/news",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "151 Lawrence Dr., Livermore, CA 94551",
       "lat": 37.710286,
       "lon": -121.705695,
       "src": "https://monarchtractor.com/news"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "built-robotics",
   "name": "Built Robotics",
   "summary": "Maker of autonomous construction robots for solar farms.",
   "body": "It automates repetitive tasks in solar construction.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.builtrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.builtrobotics.com/"
    },
    "image": {
     "v": "/logos/built-robotics.png",
     "fit": "contain",
     "src": "https://www.builtrobotics.com/apple-touch-icon-precomposed.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.builtrobotics.com/contact/general",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.builtrobotics.com/contact/general",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "225 7th Street, San Francisco, CA 94103",
       "lat": 37.777689,
       "lon": -122.408879,
       "src": "https://www.builtrobotics.com/contact/general"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "canvas",
   "name": "Canvas",
   "summary": "Maker of a drywall-finishing robot.",
   "body": "Its robot sprays and sands drywall on construction sites.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://canvas.build/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://canvas.build/"
    },
    "image": {
     "v": "/logos/canvas.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=canvas.build&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.cbinsights.com/company/canvas-construction",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.cbinsights.com/company/canvas-construction",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1960 Folsom St., San Francisco, CA 94103",
       "lat": 37.765897,
       "lon": -122.415948,
       "src": "https://www.cbinsights.com/company/canvas-construction"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dusty-robotics",
   "name": "Dusty Robotics",
   "summary": "Maker of construction layout robots.",
   "body": "Its robots print digital building models directly onto the floor.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.dustyrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dustyrobotics.com/"
    },
    "image": {
     "v": "/logos/dusty-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/64d2bbdae796ca9291a4c909/64d2bbdae796ca9291a4c93f_dusty-robotics-favicon-256px.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://www.dustyrobotics.com/terms-of-service",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.dustyrobotics.com/terms-of-service",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "909 San Rafael Ave., Mountain View, CA 94043",
       "lat": 37.406546,
       "lon": -122.07278,
       "src": "https://www.dustyrobotics.com/terms-of-service"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gecko-robotics",
   "name": "Gecko Robotics",
   "summary": "Maker of wall-climbing inspection robots and infrastructure AI.",
   "body": "Its robots measure industrial assets and feed data into AI software.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.geckorobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.geckorobotics.com/"
    },
    "image": {
     "v": "/logos/gecko-robotics.png",
     "fit": "contain",
     "src": "https://www.geckorobotics.com/apple-icon.png?apple-icon.2nfu9bh1yh8up.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
     "src": "https://www.wikidata.org/wiki/Q137570136",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q137570136",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pittsburgh, PA",
       "lat": 40.440697,
       "lon": -80.002567,
       "src": "https://www.wikidata.org/wiki/Q137570136"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "palladyne-ai",
   "name": "Palladyne AI",
   "summary": "Salt Lake City developer of embodied AI software for robots and drones.",
   "body": "Formerly Sarcos Technology and Robotics.",
   "data": {
    "roles": {
     "v": [
      "Software developer",
      "Robot maker"
     ],
     "src": "https://www.palladyneai.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.palladyneai.com/"
    },
    "image": {
     "v": "/logos/palladyne-ai.png",
     "fit": "contain",
     "src": "https://www.palladyneai.com/wp-content/uploads/2024/04/Palladyne-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Salt Lake City",
     "src": "https://www.palladyneai.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.palladyneai.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Salt Lake City, United States",
       "lat": 40.75962,
       "lon": -111.886797,
       "src": "https://www.palladyneai.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "teleo",
   "name": "Teleo",
   "summary": "Palo Alto company turning heavy equipment into remote-operated and autonomous robots.",
   "body": "Its kits retrofit loaders, dozers and other machines.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.teleo.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.teleo.ai/"
    },
    "image": {
     "v": "/logos/teleo.png",
     "fit": "contain",
     "src": "https://www.teleo.ai/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.teleo.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.teleo.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "292 Lambert Ave, Palo Alto, CA 94306",
       "lat": 37.42283,
       "lon": -122.13557,
       "src": "https://www.teleo.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "extend-robotics",
   "name": "Extend Robotics",
   "summary": "British developer of VR teleoperation and robot learning software.",
   "body": "Its AMAS software lets people control robots remotely and collect training data.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.extendrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.extendrobotics.com/"
    },
    "image": {
     "v": "/logos/extend-robotics.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/93e6e0_96224d03c1fb4120923e344c8e75a607%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/93e6e0_96224d03c1fb4120923e344c8e75a607%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Reading",
     "src": "https://www.extendrobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.extendrobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "The Maltings, Fobney Street, Reading RG1 6BY",
       "lat": 51.451619,
       "lon": -0.973584,
       "src": "https://www.extendrobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "contactile",
   "name": "Contactile",
   "summary": "Australian maker of tactile sensors for robot grippers.",
   "body": "Its sensors measure force and slip at the fingertip.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://contactile.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://contactile.com/"
    },
    "image": {
     "v": "/logos/contactile.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=contactile.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sydney",
     "src": "https://contactile.com/about-contactile/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Australia",
     "src": "https://contactile.com/about-contactile/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "The National Innovation Centre, 4 Cornwallis St, Eveleigh, NSW 2015",
       "lat": -33.893966,
       "lon": 151.19715,
       "src": "https://contactile.com/about-contactile/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "micropsi-industries",
   "name": "Micropsi Industries",
   "summary": "Developer of MIRAI, AI vision control for industrial robots.",
   "body": "MIRAI lets robots handle variance in real time.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.micropsi-industries.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.micropsi-industries.com/"
    },
    "image": {
     "v": "/logos/micropsi-industries.png",
     "fit": "contain",
     "src": "https://www.micropsi-industries.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Berlin",
     "src": "https://robottoday.com/suppliers-discovery/micropsi-industries-gmbh",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://robottoday.com/suppliers-discovery/micropsi-industries-gmbh",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lise-Meitner-Straße 39-41, 10589 Berlin",
       "lat": 52.528756,
       "lon": 13.306543,
       "src": "https://robottoday.com/suppliers-discovery/micropsi-industries-gmbh"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nomagic",
   "name": "Nomagic",
   "summary": "Developer of physical AI robots for e-commerce picking and packing.",
   "body": "It automates picking, packing and sorting in warehouses.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://nomagic.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://nomagic.ai/"
    },
    "image": {
     "v": "/logos/nomagic.png",
     "fit": "contain",
     "src": "https://nomagic.ai/wp-content/uploads/2026/03/cropped-nomagic_favicon_48px-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Warsaw",
     "src": "https://nomagic.ai/contact-us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Poland",
     "src": "https://nomagic.ai/contact-us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Rakowiecka 36, 02-532 Warsaw",
       "lat": 52.207446,
       "lon": 21.000691,
       "src": "https://nomagic.ai/contact-us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wandelbots",
   "name": "Wandelbots",
   "summary": "German developer of a physical AI platform for industrial robots.",
   "body": "Its software connects robot programming and simulation.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.wandelbots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.wandelbots.com/"
    },
    "image": {
     "v": "/logos/wandelbots.png",
     "fit": "contain",
     "src": "https://www.wandelbots.com/hubfs/Favicon%20Wandelbots.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dresden",
     "src": "https://www.wandelbots.com/imprint",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.wandelbots.com/imprint",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tharandter Straße 33, 01159 Dresden",
       "lat": 51.03801,
       "lon": 13.706073,
       "src": "https://www.wandelbots.com/imprint"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dexory",
   "name": "Dexory",
   "summary": "British maker of warehouse scanning robots and inventory analytics.",
   "body": "DexoryView turns autonomous scans into real-time warehouse intelligence.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.dexory.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dexory.com/"
    },
    "image": {
     "v": "/logos/dexory.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/672df24a07935ada864724fb/67519cffc394bf4deed2f35c_Dexory_monogram_lime%20256x256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.dexory.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.dexory.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://www.dexory.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "automata",
   "name": "Automata",
   "summary": "British lab automation company.",
   "body": "Its LINQ platform integrates robotics for life-science labs.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.automata.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.automata.tech/"
    },
    "image": {
     "v": "/logos/automata.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68b56a65d0f80cfb0ab4991d/68b56cec75ae7ad1058a244e_Automata-WebClip-icon-graphite.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.automata.tech/contact-us",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.automata.tech/contact-us",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "10 White Lion Street, London N1 9PD",
       "lat": 51.532794,
       "lon": -0.107861,
       "src": "https://www.automata.tech/contact-us"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kewazo",
   "name": "Kewazo",
   "summary": "Munich-area maker of construction material-handling robots.",
   "body": "It automates on-site material handling with robotics and data, with a US office in Houston.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.kewazo.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kewazo.com/"
    },
    "image": {
     "v": "/logos/kewazo.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/0bQC0IltQ6vEcjIQFS0JMtH0LI.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Garching",
     "src": "https://www.kewazo.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.kewazo.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Lichtenbergstraße 8, 85748 Garching",
       "lat": 48.268644,
       "lon": 11.664521,
       "src": "https://www.kewazo.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "opteran",
   "name": "Opteran",
   "summary": "British developer of insect-brain-inspired natural intelligence for robot autonomy.",
   "body": "Its technology gives robots vision and navigation without deep learning.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://opteran.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://opteran.com/"
    },
    "image": {
     "v": "/logos/opteran.png",
     "fit": "contain",
     "src": "https://opteran.com/images/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sheffield",
     "src": "https://opteran.com/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://opteran.com/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pennine Five, 1 Tenter Street, Sheffield S1 4BY",
       "lat": 53.384013,
       "lon": -1.473116,
       "src": "https://opteran.com/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "moley-robotics",
   "name": "Moley Robotics",
   "summary": "British developer of a robotic kitchen.",
   "body": "Its robotic arms cook recipes in home and commercial kitchens.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.moley.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.moley.com/"
    },
    "image": {
     "v": "/logos/moley-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.moley.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.moley.com/terms-and-conditions/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.moley.com/terms-and-conditions/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "16A Wigmore Street, London W1U 2RF",
       "lat": 51.51676,
       "lon": -0.147078,
       "src": "https://www.moley.com/terms-and-conditions/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "telexistence",
   "name": "Telexistence",
   "summary": "Tokyo developer of remote-controlled and AI robots for retail.",
   "body": "Its robots restock drinks in Japanese convenience stores.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://tx-inc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tx-inc.com/"
    },
    "image": {
     "v": "/logos/telexistence.png",
     "fit": "contain",
     "src": "https://tx-inc.com/wp-content/uploads/2026/08/TX_siteicon_fulllogo_rounded_512-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://tx-inc.com/en/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://tx-inc.com/en/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo Ryutsu Center Building A, 6-1-1 Heiwajima, Ota-ku, Tokyo",
       "lat": 35.582867,
       "lon": 139.746029,
       "src": "https://tx-inc.com/en/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "preferred-networks",
   "name": "Preferred Networks",
   "summary": "Tokyo AI company working on chips, models and robotics.",
   "body": "It develops AI semiconductors, compute platforms and generative AI.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer",
      "Compute"
     ],
     "src": "https://www.preferred.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.preferred.jp/"
    },
    "image": {
     "v": "/logos/preferred-networks.png",
     "fit": "contain",
     "src": "https://www.preferred.jp:443/apple-icon.png?98b0016698193766",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.wikidata.org/wiki/Q53309069",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q53309069",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Otemachi Building, Chiyoda, Tokyo",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://www.wikidata.org/wiki/Q53309069"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gitai",
   "name": "GITAI",
   "summary": "Space robotics startup.",
   "body": "It builds robots for work in orbit and on the Moon.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://gitai.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gitai.tech/"
    },
    "image": {
     "v": "/logos/gitai.png",
     "fit": "contain",
     "src": "https://gitai.tech/wp-content/uploads/2025/08/gitai-logo-300x52.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.kddi.com/english/open-innovation-program/news/20230525/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.kddi.com/english/open-innovation-program/news/20230525/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1-20-13 Haneda, Ota-ku, Tokyo",
       "lat": 35.549546,
       "lon": 139.743733,
       "src": "https://www.kddi.com/english/open-innovation-program/news/20230525/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tokyo-robotics",
   "name": "Tokyo Robotics",
   "summary": "Japanese maker of torque-controlled robot arms and humanoids.",
   "body": "It developed the Torobo humanoid.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://tokyo-robotics.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tokyo-robotics.co.jp/"
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
   "slug": "cyberdyne",
   "name": "Cyberdyne",
   "summary": "Japanese maker of the HAL wearable cyborg robot.",
   "body": "HAL assists walking for people with mobility disorders.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://cyberdyne.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cyberdyne.jp/"
    },
    "image": {
     "v": "/logos/cyberdyne.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=cyberdyne.jp&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tsukuba",
     "src": "https://www.wikidata.org/wiki/Q5197777",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q5197777",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tsukuba, Ibaraki, Japan",
       "lat": 36.083326,
       "lon": 140.077279,
       "src": "https://www.wikidata.org/wiki/Q5197777"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "groove-x",
   "name": "GROOVE X",
   "summary": "Tokyo maker of the LOVOT companion robot.",
   "body": "It builds robots designed to form relationships with people.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://groove-x.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://groove-x.com/"
    },
    "image": {
     "v": "/logos/groove-x.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=groove-x.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.wikidata.org/wiki/Q138309744",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q138309744",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nihonbashi-Hamachō, Chūō, Tokyo",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://www.wikidata.org/wiki/Q138309744"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rapyuta-robotics",
   "name": "Rapyuta Robotics",
   "summary": "Tokyo maker of warehouse robots and cloud robotics software.",
   "body": "Founded as an ETH Zurich spin-off, it now runs warehouse pick-assist robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.rapyuta-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rapyuta-robotics.com/"
    },
    "image": {
     "v": "/logos/rapyuta-robotics.png",
     "fit": "contain",
     "src": "https://www.rapyuta-robotics.com/wp-content/uploads/2022/03/rr-favicon2022-300x300.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://www.rapyuta-robotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.rapyuta-robotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://www.rapyuta-robotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neuromeka",
   "name": "Neuromeka",
   "summary": "Korean maker of collaborative robots.",
   "body": "It builds cobots, industrial and mobile robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.neuromeka.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.neuromeka.com/"
    },
    "image": {
     "v": "/logos/neuromeka.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/a83c47_1b53f52cf8d343b88cb79d978dca0d0f%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/a83c47_1b53f52cf8d343b88cb79d978dca0d0f%7Emv2.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://en.neuromeka.com/contactus",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://en.neuromeka.com/contactus",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://en.neuromeka.com/contactus"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aeirobot",
   "name": "AeiRobot",
   "summary": "Korean developer of humanoid robots.",
   "body": "It develops the ALICE humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://aeirobot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aeirobot.com/"
    },
    "image": {
     "v": "/logos/aeirobot.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=aeirobot.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ansan",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Ansan, South Korea",
       "lat": 37.321715,
       "lon": 126.83086,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "angel-robotics",
   "name": "Angel Robotics",
   "summary": "Korean maker of wearable robots.",
   "body": "Its exoskeletons support rehabilitation.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.angel-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.angel-robotics.com/"
    },
    "image": {
     "v": "/logos/angel-robotics.png",
     "fit": "contain",
     "src": "https://www.angel-robotics.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://linkedin.com/company/angel-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://linkedin.com/company/angel-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://linkedin.com/company/angel-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hiwin",
   "name": "HIWIN",
   "summary": "Taiwanese maker of ball screws, linear guides and robots.",
   "body": "Its motion-control components are used in robot joints.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://www.hiwin.tw/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hiwin.tw/"
    },
    "image": {
     "v": "/logos/hiwin.png",
     "fit": "contain",
     "src": "https://www.hiwin.tw/img/icon_hiwin.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Taichung",
     "src": "https://www.wikidata.org/wiki/Q15815687",
     "asof": "2026-11"
    },
    "country": {
     "v": "Taiwan",
     "src": "https://www.wikidata.org/wiki/Q15815687",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Taichung, Taiwan",
       "lat": 24.163162,
       "lon": 120.647828,
       "src": "https://www.wikidata.org/wiki/Q15815687"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kollmorgen",
   "name": "Kollmorgen",
   "summary": "Maker of motors and drives for robot joints.",
   "body": "Its frameless motors are used in robot actuators.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://kollmorgen.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kollmorgen.com/"
    },
    "image": {
     "v": "/logos/kollmorgen.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=kollmorgen.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Radford",
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
       "address": "Radford, United States",
       "lat": 37.134315,
       "lon": -80.574917,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cubemars",
   "name": "CubeMars",
   "summary": "Chinese maker of robot actuators and frameless torque motors.",
   "body": "Its actuators are used in legged and humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.cubemars.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cubemars.com/"
    },
    "image": {
     "v": "/logos/cubemars.png",
     "fit": "contain",
     "src": "https://www.cubemars.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nanchang",
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
       "address": "Nanchang, China",
       "lat": 28.647212,
       "lon": 116.034848,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "myactuator",
   "name": "MyActuator",
   "summary": "Chinese maker of compact robot actuators.",
   "body": "Its actuators are used in humanoid and legged robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.myactuator.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.myactuator.com/"
    },
    "image": {
     "v": "/logos/myactuator.png",
     "fit": "contain",
     "src": "https://static.wixstatic.com/media/cab28a_aafa9b0c57934216b9d4d37b1dab16c1%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/cab28a_aafa9b0c57934216b9d4d37b1dab16c1%7Emv2.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Kunshan",
     "src": "https://www.myactuator.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.myactuator.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "599 Yuanchuang Road, Huaqiao, Kunshan, Suzhou, Jiangsu",
       "lat": 31.300602,
       "lon": 121.099759,
       "src": "https://www.myactuator.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robosense",
   "name": "RoboSense",
   "summary": "Shenzhen lidar and robot perception supplier.",
   "body": "Listed in Hong Kong (2498.HK).",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.robosense.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robosense.ai/"
    },
    "image": {
     "v": "/logos/robosense.png",
     "fit": "contain",
     "src": "https://cdn.robosense.cn/shop_logo",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.robosense.ai/en",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.robosense.ai/en",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1213 Liuxian Avenue, Taoyuan Street, Nanshan District, Shenzhen",
       "lat": 22.556896,
       "lon": 113.978346,
       "src": "https://www.robosense.ai/en"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stereolabs",
   "name": "Stereolabs",
   "summary": "Maker of ZED stereo cameras for robot perception.",
   "body": "Its ZED cameras provide depth and spatial AI.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.stereolabs.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.stereolabs.com/"
    },
    "image": {
     "v": "/logos/stereolabs.png",
     "fit": "contain",
     "src": "https://www.stereolabs.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.signalhire.com/companies/stereolabs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.signalhire.com/companies/stereolabs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "600 California St, San Francisco, CA 94108",
       "lat": 37.792983,
       "lon": -122.404791,
       "src": "https://www.signalhire.com/companies/stereolabs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ambarella",
   "name": "Ambarella",
   "summary": "Santa Clara maker of edge AI vision chips.",
   "body": "Its chips power perception in cameras, cars and robots.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.ambarella.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ambarella.com/"
    },
    "image": {
     "v": "/logos/ambarella.png",
     "fit": "contain",
     "src": "https://www.ambarella.com/wp-content/themes/ambarella/img/favicons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://www.ambarella.com/contact-us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ambarella.com/contact-us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3001 Tasman Drive Santa Clara, CA 95054",
       "lat": 37.403176,
       "lon": -121.982189,
       "src": "https://www.ambarella.com/contact-us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hailo",
   "name": "Hailo",
   "summary": "Israeli maker of edge AI processors.",
   "body": "Its AI accelerators run perception on devices.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://hailo.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hailo.ai/"
    },
    "image": {
     "v": "/logos/hailo.png",
     "fit": "contain",
     "src": "https://hailo.ai/wp-content/uploads/2023/10/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tel Aviv",
     "src": "https://hailo.ai/company-overview/contact-us/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://hailo.ai/company-overview/contact-us/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "82 Yigal Alon St, Tel Aviv",
       "lat": 32.0853,
       "lon": 34.781806,
       "src": "https://hailo.ai/company-overview/contact-us/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "odyssey",
   "name": "Odyssey",
   "summary": "AI lab building interactive world models.",
   "body": "It builds causal, multimodal world models that learn from video.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://odyssey.systems/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://odyssey.systems/"
    },
    "image": {
     "v": "/logos/odyssey.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/ifiJSCW36zuZNKAmr6lfmkJslw.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://linkedin.com/company/odysseyml",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://linkedin.com/company/odysseyml",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Palo Alto, California",
       "lat": 37.444329,
       "lon": -122.159847,
       "src": "https://linkedin.com/company/odysseyml"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "decart",
   "name": "Decart",
   "summary": "AI lab building real-time world models.",
   "body": "Its models generate interactive environments in real time.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://decart.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://decart.ai/"
    },
    "image": {
     "v": "/logos/decart.png",
     "fit": "contain",
     "src": "https://decart.ai/images/webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tel Aviv",
     "src": "https://en.wikipedia.org/wiki/Decart",
     "asof": "2026-11"
    },
    "country": {
     "v": "Israel",
     "src": "https://en.wikipedia.org/wiki/Decart",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tel Aviv, Israel",
       "lat": 32.0853,
       "lon": 34.781806,
       "src": "https://en.wikipedia.org/wiki/Decart"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "runway",
   "name": "Runway",
   "summary": "AI company building video and world models.",
   "body": "It is extending its generative video models toward general world models.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://runway.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://runway.com/"
    },
    "image": {
     "v": "/logos/runway.png",
     "fit": "contain",
     "src": "https://runway.com/icon.png?icon.35ps9bmugbe1e.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.wikidata.org/wiki/Q123367593",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q123367593",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Manhattan, New York, NY",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.wikidata.org/wiki/Q123367593"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cynlr",
   "name": "CynLr",
   "summary": "Indian developer of visual object intelligence for robots.",
   "body": "Its vision technology lets robots grasp unknown objects; it has a US office in Austin.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://www.cynlr.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cynlr.com/"
    },
    "image": {
     "v": "/logos/cynlr.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.cynlr.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://www.cynlr.com/contact-us",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.cynlr.com/contact-us",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bengaluru, Karnataka, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://www.cynlr.com/contact-us"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rokae",
   "name": "Rokae",
   "summary": "Chinese maker of collaborative and industrial robots.",
   "body": "Its products include cobots and medical and grinding robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.rokae.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rokae.com/"
    },
    "image": {
     "v": "/logos/rokae.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.rokae.com&sz=256",
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
   "slug": "hans-robot",
   "name": "Han's Robot",
   "summary": "Chinese maker of intelligent collaborative robots.",
   "body": "It focuses on cobots for industry, healthcare and logistics.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.huayan-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.huayan-robotics.com/"
    },
    "image": {
     "v": "/logos/hans-robot.png",
     "fit": "contain",
     "src": "https://www.huayan-robotics.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://linkedin.com/company/%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%A4%A7%E6%97%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://linkedin.com/company/%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%A4%A7%E6%97%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "High-Tech Park, Nanshan District, Shenzhen",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://linkedin.com/company/%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%A4%A7%E6%97%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "seer-robotics",
   "name": "SEER Robotics",
   "summary": "Shanghai maker of robot controllers and mobile robots.",
   "body": "It provides controllers, robots and software so others can build mobile robots.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Software developer"
     ],
     "src": "https://seer-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://seer-robotics.com/"
    },
    "image": {
     "v": "/logos/seer-robotics.png",
     "fit": "contain",
     "src": "https://seer-robotics.com/android-chrome-192x192.png?v=20260805",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shanghai",
     "src": "https://seer-robotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://seer-robotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shanghai, China",
       "lat": 31.231271,
       "lon": 121.470015,
       "src": "https://seer-robotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "standard-robots",
   "name": "Standard Robots",
   "summary": "Chinese maker of autonomous mobile robots.",
   "body": "It builds AMRs for factories.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://standard-robots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://standard-robots.com/"
    },
    "image": {
     "v": "/logos/standard-robots.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=standard-robots.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.standard-robots.com/case/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.standard-robots.com/case/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Building D, Phase 2, Huafeng International Robot Industrial Park, Bao'an District, Shenzhen",
       "lat": 22.559853,
       "lon": 113.879033,
       "src": "https://www.standard-robots.com/case/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "midea-group",
   "name": "Midea Group",
   "summary": "Chinese appliance maker with humanoid robot development; owner of KUKA.",
   "body": "It has shown humanoid robots for home and factory use.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Customer"
     ],
     "src": "https://www.midea.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.midea.com/"
    },
    "image": {
     "v": "/logos/midea-group.png",
     "fit": "contain",
     "src": "https://web-res.midea.com/etc.clientlibs/midea-aem/clientlibs/clientlib-site/resources/img/common/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Foshan",
     "src": "https://humanoid.observer/companies/midea/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://humanoid.observer/companies/midea/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Foshan, China",
       "lat": 23.023979,
       "lon": 113.115956,
       "src": "https://humanoid.observer/companies/midea/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gac-group",
   "name": "GAC Group",
   "summary": "Chinese carmaker developing the GoMate humanoid robot.",
   "body": "Its humanoid programme builds on its autonomous driving work.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.gacgroup.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gacgroup.com/"
    },
    "image": {
     "v": "/logos/gac-group.png",
     "fit": "contain",
     "src": "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202503/60ff2381-aa68-418e-8634-d1d47b19d8cb.webp",
     "asof": "2026-11"
    },
    "city": {
     "v": "Guangzhou",
     "src": "https://humanoid.observer/companies/gac/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://humanoid.observer/companies/gac/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Guangzhou, China",
       "lat": 23.128843,
       "lon": 113.258958,
       "src": "https://humanoid.observer/companies/gac/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "andreessen-horowitz",
   "name": "Andreessen Horowitz",
   "summary": "Venture firm investing in AI, robotics and American dynamism.",
   "body": "Known as a16z.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://a16z.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://a16z.com/"
    },
    "image": {
     "v": "/logos/andreessen-horowitz.png",
     "fit": "contain",
     "src": "https://d1lamhf6l6yk6d.cloudfront.net/uploads/2025/06/Favicon-%E2%80%94-270x270px.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://www.wikidata.org/wiki/Q4034010",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q4034010",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Menlo Park, CA",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://www.wikidata.org/wiki/Q4034010"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "founders-fund",
   "name": "Founders Fund",
   "summary": "San Francisco venture firm backing hard tech and robotics.",
   "body": "It describes itself as a San Francisco based venture capital firm.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://foundersfund.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://foundersfund.com/"
    },
    "image": {
     "v": "/logos/founders-fund.png",
     "fit": "contain",
     "src": "https://foundersfund.com/apple-touch-icon-152x152.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://foundersfund.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://foundersfund.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://foundersfund.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "greenoaks",
   "name": "Greenoaks",
   "summary": "Long-term investment firm.",
   "body": "It is a concentrated, long-term partner to founders.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://greenoaks.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://greenoaks.com/"
    },
    "image": {
     "v": "/logos/greenoaks.png",
     "fit": "contain",
     "src": "https://greenoaks.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://papertrailfinance.com/firms/greenoaks-165941",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://papertrailfinance.com/firms/greenoaks-165941",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://papertrailfinance.com/firms/greenoaks-165941"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dcvc",
   "name": "DCVC",
   "summary": "Deep-tech venture capital firm.",
   "body": "It invests in deep tech including robotics.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.dcvc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dcvc.com/"
    },
    "image": {
     "v": "/logos/dcvc.png",
     "fit": "contain",
     "src": "https://www.dcvc.com/dist/images/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.dcvc.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.dcvc.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "270 University Avenue Palo Alto, CA 94301",
       "lat": 37.445559,
       "lon": -122.16178,
       "src": "https://www.dcvc.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "root-ventures",
   "name": "Root Ventures",
   "summary": "Deep-tech seed investor.",
   "body": "It backs hardware and robotics founders at the earliest stages.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://root.vc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://root.vc/"
    },
    "image": {
     "v": "/logos/root-ventures.png",
     "fit": "contain",
     "src": "https://root.vc/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://root.vc/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://root.vc/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://root.vc/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "the-engine",
   "name": "The Engine",
   "summary": "MIT-built incubator and venture fund for tough tech.",
   "body": "It supports founders in hard tech, including robotics.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://engine.xyz/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://engine.xyz/"
    },
    "image": {
     "v": "/logos/the-engine.png",
     "fit": "contain",
     "src": "https://engine.xyz/static/dist/img/favicon/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Cambridge",
     "src": "https://engine.xyz/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://engine.xyz/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cambridge, United States",
       "lat": 42.365635,
       "lon": -71.104002,
       "src": "https://engine.xyz/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "toyota-ventures",
   "name": "Toyota Ventures",
   "summary": "Venture arm of Toyota.",
   "body": "It invests in robotics, autonomy and climate tech.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://toyota.ventures/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://toyota.ventures/"
    },
    "image": {
     "v": "/logos/toyota-ventures.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=toyota.ventures&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Altos",
     "src": "https://toyota.ventures/20-2.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://toyota.ventures/20-2.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Altos, California",
       "lat": 37.379063,
       "lon": -122.116578,
       "src": "https://toyota.ventures/20-2.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "samsung-next",
   "name": "Samsung Next",
   "summary": "Samsung's venture investment arm.",
   "body": "It invests in AI and frontier technology startups.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.samsungnext.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.samsungnext.com/"
    },
    "image": {
     "v": "/logos/samsung-next.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/69ab197ca148d582724c4ac3/69b343da9481eaad71179872_snext%20256256.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Mountain View",
     "src": "https://pitchbook.com/profiles/investor/166690-90",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://pitchbook.com/profiles/investor/166690-90",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Mountain View, California",
       "lat": 37.389389,
       "lon": -122.08321,
       "src": "https://pitchbook.com/profiles/investor/166690-90"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intel-capital",
   "name": "Intel Capital",
   "summary": "Venture arm of Intel.",
   "body": "It invests in AI, compute and robotics.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.intelcapital.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.intelcapital.com/"
    },
    "image": {
     "v": "/logos/intel-capital.png",
     "fit": "contain",
     "src": "https://www.intelcapital.com/wp-content/themes/intel-capital/dist/images/logo-color.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Santa Clara",
     "src": "https://pitchbook.com/profiles/investor/11220-13",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://pitchbook.com/profiles/investor/11220-13",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2200 Mission College Boulevard, Santa Clara, CA 95054",
       "lat": 37.388266,
       "lon": -121.963779,
       "src": "https://pitchbook.com/profiles/investor/11220-13"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bessemer-venture-partners",
   "name": "Bessemer Venture Partners",
   "summary": "Venture capital firm.",
   "body": "It backs founders worldwide, including in robotics.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.bvp.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.bvp.com/"
    },
    "image": {
     "v": "/logos/bessemer-venture-partners.png",
     "fit": "contain",
     "src": "https://www.bvp.com/favicon.ico?favicon.2rmsoxim8swnj.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://www.wikidata.org/wiki/Q4896433",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q4896433",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Menlo Park, CA",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://www.wikidata.org/wiki/Q4896433"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "index-ventures",
   "name": "Index Ventures",
   "summary": "Venture capital firm based in San Francisco and London.",
   "body": "It partners with founders from seed to growth.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.indexventures.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.indexventures.com/"
    },
    "image": {
     "v": "/logos/index-ventures.png",
     "fit": "contain",
     "src": "https://www.indexventures.com/static/images/apple-touch-icon.334e2c0ca650.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.wikidata.org/wiki/Q3809397",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.wikidata.org/wiki/Q3809397",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://www.wikidata.org/wiki/Q3809397"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "felicis",
   "name": "Felicis",
   "summary": "Venture capital firm.",
   "body": "It backs founders from seed.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.felicis.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.felicis.com/"
    },
    "image": {
     "v": "/logos/felicis.png",
     "fit": "contain",
     "src": "https://www.felicis.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://reports.adviserinfo.sec.gov/reports/ADV/162301/PDF/162301.pdf",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://reports.adviserinfo.sec.gov/reports/ADV/162301/PDF/162301.pdf",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Menlo Park, California",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://reports.adviserinfo.sec.gov/reports/ADV/162301/PDF/162301.pdf"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hongshan",
   "name": "HongShan",
   "summary": "Chinese venture capital firm, formerly Sequoia China.",
   "body": "It invests across technology including robotics.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.hongshan.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hongshan.com/"
    },
    "image": {
     "v": "/logos/hongshan.png",
     "fit": "contain",
     "src": "https://www.hongshan.com:443/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://www.hsgcap.com/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.hsgcap.com/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://www.hsgcap.com/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "prosperity7-ventures",
   "name": "Prosperity7 Ventures",
   "summary": "Venture arm of Aramco Ventures.",
   "body": "It invests in deep tech.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.prosperity7vc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.prosperity7vc.com/"
    },
    "image": {
     "v": "/logos/prosperity7-ventures.png",
     "fit": "contain",
     "src": "https://www.prosperity7vc.com/wp-content/uploads/2021/03/cropped-favicon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dhahran",
     "src": "https://www.prosperity7vc.com/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Saudi Arabia",
     "src": "https://www.prosperity7vc.com/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Dhahran, Saudi Arabia",
       "lat": 26.296653,
       "lon": 50.120215,
       "src": "https://www.prosperity7vc.com/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gv",
   "name": "GV",
   "summary": "Venture capital arm of Alphabet.",
   "body": "It supports founders across AI, life sciences and frontier tech.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.gv.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gv.com/"
    },
    "image": {
     "v": "/logos/gv.png",
     "fit": "contain",
     "src": "https://www.gv.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://linkedin.com/company/googleventures",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://linkedin.com/company/googleventures",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, California",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://linkedin.com/company/googleventures"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "menlo-ventures",
   "name": "Menlo Ventures",
   "summary": "Early-stage venture capital firm.",
   "body": "It invests across AI and infrastructure.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://menlovc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://menlovc.com/"
    },
    "image": {
     "v": "/logos/menlo-ventures.png",
     "fit": "contain",
     "src": "https://menlovc.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://menlovc.com/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://menlovc.com/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1300 El Camino Real, Suite 150, Menlo Park, CA 94025",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://menlovc.com/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "first-round-capital",
   "name": "First Round Capital",
   "summary": "Seed-stage venture capital firm.",
   "body": "It works with founders at the earliest stages.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.firstround.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.firstround.com/"
    },
    "image": {
     "v": "/logos/first-round-capital.png",
     "fit": "contain",
     "src": "https://www.firstround.com/images/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.firstround.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.firstround.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "921 Front Street, San Francisco, CA 94111",
       "lat": 37.799929,
       "lon": -122.400221,
       "src": "https://www.firstround.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "8vc",
   "name": "8VC",
   "summary": "Austin technology and bioscience investment firm.",
   "body": "It invests in industrial and defence tech among others.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://8vc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://8vc.com/"
    },
    "image": {
     "v": "/logos/8vc.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/622f20536085ed0c3c604069/62503a64f26d50803f4aedce_8VC-Webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://8vc.com",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://8vc.com",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "907 South Congress Avenue, Austin, TX 78704",
       "lat": 30.256353,
       "lon": -97.74708,
       "src": "https://8vc.com"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "bain-capital-ventures",
   "name": "Bain Capital Ventures",
   "summary": "Venture arm of Bain Capital.",
   "body": "It invests from seed to growth.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://baincapitalventures.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://baincapitalventures.com/"
    },
    "image": {
     "v": "/logos/bain-capital-ventures.png",
     "fit": "contain",
     "src": "https://baincapitalventures.com/icon-xgl6v7.png?icon.3ep7428jkyd28.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://baincapitalventures.com/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://baincapitalventures.com/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "200 Clarendon Street Boston, MA 02116",
       "lat": 42.349168,
       "lon": -71.075124,
       "src": "https://baincapitalventures.com/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "accel",
   "name": "Accel",
   "summary": "Venture capital firm.",
   "body": "It has invested in over 300 companies.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.accel.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.accel.com/"
    },
    "image": {
     "v": "/logos/accel.png",
     "fit": "contain",
     "src": "https://www.accel.com/icon.png?icon.399ir6exptelf.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Palo Alto",
     "src": "https://www.accel.com/contact-us",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.accel.com/contact-us",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "500 University Avenue Palo Alto, CA 94301",
       "lat": 37.45047,
       "lon": -122.156727,
       "src": "https://www.accel.com/contact-us"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kleiner-perkins",
   "name": "Kleiner Perkins",
   "summary": "American venture capital firm.",
   "body": "It invests in AI and hard tech.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.kleinerperkins.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kleinerperkins.com/"
    },
    "image": {
     "v": "/logos/kleiner-perkins.png",
     "fit": "contain",
     "src": "https://www.kleinerperkins.com/wp-content/uploads/2026/03/cropped-Frame-1.png?w=192",
     "asof": "2026-11"
    },
    "city": {
     "v": "Menlo Park",
     "src": "https://www.wikidata.org/wiki/Q4346838",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.wikidata.org/wiki/Q4346838",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Menlo Park, CA",
       "lat": 37.451967,
       "lon": -122.177992,
       "src": "https://www.wikidata.org/wiki/Q4346838"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "coatue",
   "name": "Coatue",
   "summary": "Technology investment firm.",
   "body": "It invests across AI and technology.",
   "data": {
    "roles": {
     "v": [
      "Investor"
     ],
     "src": "https://www.coatue.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.coatue.com/"
    },
    "image": {
     "v": "/logos/coatue.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=www.coatue.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.coatue.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.coatue.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "9 West 57th Street, New York, NY 10019",
       "lat": 40.763835,
       "lon": -73.974953,
       "src": "https://www.coatue.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cornell-university",
   "name": "Cornell University",
   "summary": "Ithaca university with robotics and embodied AI research.",
   "body": "Its robotics research spans engineering and computer science.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.cornell.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cornell.edu/"
    },
    "image": {
     "v": "/logos/cornell-university.png",
     "fit": "contain",
     "src": "https://www.cornell.edu/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Ithaca",
     "src": "https://www.cornell.edu/contact/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.cornell.edu/contact/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "616 Thurston Ave. Ithaca, NY 14853",
       "lat": 42.452126,
       "lon": -76.480316,
       "src": "https://www.cornell.edu/contact/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "romela-ucla",
   "name": "RoMeLa (UCLA)",
   "summary": "UCLA Robotics and Mechanisms Laboratory, known for humanoid robots.",
   "body": "It developed the ARTEMIS humanoid.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://romela.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://romela.org/"
    },
    "image": {
     "v": "/logos/romela-ucla.png",
     "fit": "contain",
     "src": "https://romela.org/wp-content/uploads/2015/03/romela_logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.engineering10.com/US/Los-Angeles/145254262253909/RoMeLa",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.engineering10.com/US/Los-Angeles/145254262253909/RoMeLa",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "420 Westwood Plaza, Engineering IV, UCLA, Los Angeles, CA 90095",
       "lat": 34.070878,
       "lon": -118.44685,
       "src": "https://www.engineering10.com/US/Los-Angeles/145254262253909/RoMeLa"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "laboratory-for-computational-sensing-and-robotics-jhu",
   "name": "Laboratory for Computational Sensing and Robotics (JHU)",
   "summary": "Johns Hopkins robotics institute.",
   "body": "It covers medical and other robotics research.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://lcsr.jhu.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lcsr.jhu.edu/"
    },
    "image": {
     "v": "/logos/laboratory-for-computational-sensing-and-robotics-jhu.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=lcsr.jhu.edu&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Baltimore",
     "src": "https://lcsr.jhu.edu/about/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://lcsr.jhu.edu/about/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "3400 North Charles Street, 200 Hackerman Hall, Baltimore, MD 21218",
       "lat": 39.290882,
       "lon": -76.610759,
       "src": "https://lcsr.jhu.edu/about/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "karlsruhe-institute-of-technology",
   "name": "Karlsruhe Institute of Technology",
   "summary": "German university known for the ARMAR humanoid robots.",
   "body": "Its H2T lab develops the ARMAR series.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.kit.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.kit.edu/"
    },
    "image": {
     "v": "/logos/karlsruhe-institute-of-technology.png",
     "fit": "contain",
     "src": "https://www.kit.edu/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Karlsruhe",
     "src": "https://www.kit.edu/impressum.php",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.kit.edu/impressum.php",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Kaiserstraße 12, 76131 Karlsruhe",
       "lat": 49.009472,
       "lon": 8.411596,
       "src": "https://www.kit.edu/impressum.php"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "laas-cnrs",
   "name": "LAAS-CNRS",
   "summary": "French CNRS lab with humanoid robotics research.",
   "body": "Its Gepetto team works on humanoid locomotion.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://laas.fr/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://laas.fr/"
    },
    "image": {
     "v": "/logos/laas-cnrs.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=laas.fr&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Toulouse",
     "src": "https://www.wikidata.org/wiki/Q3214408",
     "asof": "2026-11"
    },
    "country": {
     "v": "France",
     "src": "https://www.wikidata.org/wiki/Q3214408",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "7 avenue du Colonel Roche, Toulouse",
       "lat": 43.563544,
       "lon": 1.476725,
       "src": "https://www.wikidata.org/wiki/Q3214408"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "santanna-school-of-advanced-studies",
   "name": "Sant'Anna School of Advanced Studies",
   "summary": "Pisa university with a BioRobotics Institute.",
   "body": "Its BioRobotics Institute works on bionic and soft robots.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://santannapisa.it/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://santannapisa.it/"
    },
    "image": {
     "v": "/logos/santanna-school-of-advanced-studies.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=santannapisa.it&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pisa",
     "src": "https://www.wikidata.org/wiki/Q774609",
     "asof": "2026-11"
    },
    "country": {
     "v": "Italy",
     "src": "https://www.wikidata.org/wiki/Q774609",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Piazza Martiri della Libertà 33, Pisa",
       "lat": 43.720608,
       "lon": 10.402644,
       "src": "https://www.wikidata.org/wiki/Q774609"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "riken",
   "name": "RIKEN",
   "summary": "Japanese national research institute with robotics and AI centres.",
   "body": "It runs research on robotics and AI.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.riken.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.riken.jp/"
    },
    "image": {
     "v": "/logos/riken.png",
     "fit": "contain",
     "src": "https://www.riken.jp/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wakō",
     "src": "https://www.wikidata.org/wiki/Q1153275",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.wikidata.org/wiki/Q1153275",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Wakō, Saitama, Japan",
       "lat": 35.781705,
       "lon": 139.605869,
       "src": "https://www.wikidata.org/wiki/Q1153275"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nanyang-technological-university",
   "name": "Nanyang Technological University",
   "summary": "Singapore university with robotics research.",
   "body": "Its robotics research spans engineering and AI.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.ntu.edu.sg/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ntu.edu.sg/"
    },
    "image": {
     "v": "/logos/nanyang-technological-university.png",
     "fit": "contain",
     "src": "https://www.ntu.edu.sg/ResourcePackages/NTU/assets/images/NTU_Logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Singapore",
     "src": "https://www.ntu.edu.sg/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Singapore",
     "src": "https://www.ntu.edu.sg/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "50 Nanyang Avenue, Singapore",
       "lat": 1.353701,
       "lon": 103.686601,
       "src": "https://www.ntu.edu.sg/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hkust",
   "name": "HKUST",
   "summary": "Hong Kong university with robotics and embodied AI research.",
   "body": "The Hong Kong University of Science and Technology.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://hkust.edu.hk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hkust.edu.hk/"
    },
    "image": {
     "v": "/logos/hkust.png",
     "fit": "contain",
     "src": "https://hkust.edu.hk/themes/custom/hkust/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://hkust.edu.hk/contact-us",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://hkust.edu.hk/contact-us",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Clear Water Bay, Kowloon, Hong Kong",
       "lat": 22.281833,
       "lon": 114.158283,
       "src": "https://hkust.edu.hk/contact-us"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "the-chinese-university-of-hong-kong",
   "name": "The Chinese University of Hong Kong",
   "summary": "Hong Kong university with robotics research.",
   "body": "It runs robotics and AI research.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://cuhk.edu.hk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cuhk.edu.hk/"
    },
    "image": {
     "v": "/logos/the-chinese-university-of-hong-kong.png",
     "fit": "contain",
     "src": "https://cuhk.edu.hk/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hong Kong",
     "src": "https://www.cuhk.edu.hk/english/contact.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "Hong Kong",
     "src": "https://www.cuhk.edu.hk/english/contact.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Shatin, New Territories, Hong Kong",
       "lat": 22.281833,
       "lon": 114.158283,
       "src": "https://www.cuhk.edu.hk/english/contact.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "southern-university-of-science-and-technology",
   "name": "Southern University of Science and Technology",
   "summary": "Shenzhen university with robotics research.",
   "body": "Known as SUSTech.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://sustech.edu.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://sustech.edu.cn/"
    },
    "image": {
     "v": "/logos/southern-university-of-science-and-technology.png",
     "fit": "contain",
     "src": "https://sustech.edu.cn/static/images/sustech-logo-cn.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://sustech.edu.cn/en/contact_us.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://sustech.edu.cn/en/contact_us.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1088 Xueyuan Avenue, Nanshan District, Shenzhen",
       "lat": 22.536014,
       "lon": 113.925622,
       "src": "https://sustech.edu.cn/en/contact_us.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "beijing-institute-of-technology",
   "name": "Beijing Institute of Technology",
   "summary": "Beijing university known for the BHR humanoid robots.",
   "body": "Its robotics institute develops humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://bit.edu.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://bit.edu.cn/"
    },
    "image": {
     "v": "/logos/beijing-institute-of-technology.png",
     "fit": "contain",
     "src": "https://bit.edu.cn/images/gb20190805/footer_logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Beijing",
     "src": "https://bit.edu.cn/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://bit.edu.cn/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Beijing, China",
       "lat": 39.905714,
       "lon": 116.391297,
       "src": "https://bit.edu.cn/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "indian-institute-of-science",
   "name": "Indian Institute of Science",
   "summary": "Bengaluru research institute with robotics research.",
   "body": "Known as IISc.",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.iisc.ac.in/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.iisc.ac.in/"
    },
    "image": {
     "v": "/logos/indian-institute-of-science.png",
     "fit": "contain",
     "src": "https://www.iisc.ac.in/wp-content/themes/iisc/images/favicon/android-icon-192x192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Bengaluru",
     "src": "https://www.wikidata.org/wiki/Q948720",
     "asof": "2026-11"
    },
    "country": {
     "v": "India",
     "src": "https://www.wikidata.org/wiki/Q948720",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bengaluru, Karnataka, India",
       "lat": 12.976794,
       "lon": 77.590082,
       "src": "https://www.wikidata.org/wiki/Q948720"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sony-ai",
   "name": "Sony AI",
   "summary": "Sony's AI research organisation, including robotics.",
   "body": "It researches robotics, gaming and imaging.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://ai.sony/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ai.sony/"
    },
    "image": {
     "v": "/logos/sony-ai.png",
     "fit": "contain",
     "src": "https://ai.sony/hubfs/SonyAI_2026/Logos/logo-sony.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tokyo",
     "src": "https://ai.sony/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://ai.sony/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Tokyo, Japan",
       "lat": 35.67686,
       "lon": 139.763895,
       "src": "https://ai.sony/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "honda-research-institute",
   "name": "Honda Research Institute",
   "summary": "Honda's research institutes, behind ASIMO-era humanoid research.",
   "body": "It runs research centres in Japan, the US and Europe.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.honda-ri.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.honda-ri.com/"
    },
    "image": {
     "v": "/logos/honda-research-institute.png",
     "fit": "contain",
     "src": "https://www.honda-ri.com/o/liferay-hri-theme/images/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Wakō",
     "src": "https://www.jp.honda-ri.com/en/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Japan",
     "src": "https://www.jp.honda-ri.com/en/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "8-1 Honcho, Wako, Saitama 351-0188",
       "lat": 35.781705,
       "lon": 139.605869,
       "src": "https://www.jp.honda-ri.com/en/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "wyss-institute",
   "name": "Wyss Institute",
   "summary": "Harvard institute for biologically inspired engineering, including soft robots.",
   "body": "Its work includes soft exosuits and soft robots.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://wyss.harvard.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://wyss.harvard.edu/"
    },
    "image": {
     "v": "/logos/wyss-institute.png",
     "fit": "contain",
     "src": "https://wyss.harvard.edu/app/themes/wyss-institute/favicon-180.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://wyss.harvard.edu",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://wyss.harvard.edu",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "201 Brookline Ave. Boston, MA 02215",
       "lat": 42.345031,
       "lon": -71.102046,
       "src": "https://wyss.harvard.edu"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zhejiang-lab",
   "name": "Zhejiang Lab",
   "summary": "Hangzhou research institute with robotics and AI work.",
   "body": "It runs research on intelligent robots.",
   "data": {
    "roles": {
     "v": [
      "Research lab"
     ],
     "src": "https://www.zhejianglab.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zhejianglab.org/"
    },
    "image": {
     "v": "/logos/zhejiang-lab.png",
     "fit": "contain",
     "src": "https://www.zhejianglab.org/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Hangzhou",
     "src": "https://www.zhejianglab.org/lab/",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.zhejianglab.org/lab/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "2880 Wenyi West Road, Yuhang District, Hangzhou",
       "lat": 30.28417,
       "lon": 120.021793,
       "src": "https://www.zhejianglab.org/lab/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "labelbox",
   "name": "Labelbox",
   "summary": "Data and evaluation company for AI, including robotics data.",
   "body": "It provides environments and expert data for frontier labs.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://labelbox.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://labelbox.com/"
    },
    "image": {
     "v": "/logos/labelbox.png",
     "fit": "contain",
     "src": "https://labelbox.com/static/images/favicon-v4-black.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://h1bgrader.com/h1b-sponsors/labelbox-inc-ok8576orkd/lca/2026/lca-details/I-200-25308-366649",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://h1bgrader.com/h1b-sponsors/labelbox-inc-ok8576orkd/lca/2026/lca-details/I-200-25308-366649",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "510 Treat Avenue, San Francisco, CA 94110",
       "lat": 37.761998,
       "lon": -122.41412,
       "src": "https://h1bgrader.com/h1b-sponsors/labelbox-inc-ok8576orkd/lca/2026/lca-details/I-200-25308-366649"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ufactory",
   "name": "UFACTORY",
   "summary": "Maker of affordable cobots such as xArm and Lite 6.",
   "body": "Its cobots range from 600 g to 5 kg payload.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.ufactory.cc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ufactory.cc/"
    },
    "image": {
     "v": "/logos/ufactory.png",
     "fit": "contain",
     "src": "https://www.ufactory.cc/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shenzhen",
     "src": "https://www.ufactory.cc/en-us/about",
     "asof": "2026-11"
    },
    "country": {
     "v": "China",
     "src": "https://www.ufactory.cc/en-us/about",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nanshan District, Shenzhen",
       "lat": 22.544574,
       "lon": 114.054543,
       "src": "https://www.ufactory.cc/en-us/about"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "d-robotics",
   "name": "D-Robotics",
   "summary": "Maker of RDK edge AI computing boards for robots.",
   "body": "Its developer kits target embodied robotics.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://en.d-robotics.cc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://en.d-robotics.cc/"
    },
    "image": {
     "v": "/logos/d-robotics.png",
     "fit": "contain",
     "src": "https://en.d-robotics.cc/favicon.ico",
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
   "slug": "blaize",
   "name": "Blaize",
   "summary": "Maker of edge AI processors.",
   "body": "It builds AI computing for the edge.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.blaize.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.blaize.com/"
    },
    "image": {
     "v": "/logos/blaize.png",
     "fit": "contain",
     "src": "https://www.blaize.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Jose",
     "src": "https://www.bizjournals.com/sacramento/news/2026/11/10/blaize-san-jose-move.html",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.bizjournals.com/sacramento/news/2026/11/10/blaize-san-jose-move.html",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Jose, California",
       "lat": 37.336166,
       "lon": -121.890591,
       "src": "https://www.bizjournals.com/sacramento/news/2026/11/10/blaize-san-jose-move.html"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aidin-robotics",
   "name": "AIDIN Robotics",
   "summary": "Korean maker of force, torque and touch sensors for robots.",
   "body": "Its products include ankle and hand sensors for humanoids.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://aidinrobotics.co.kr/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aidinrobotics.co.kr/"
    },
    "image": {
     "v": "/logos/aidin-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=aidinrobotics.co.kr&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Anyang",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Anyang, South Korea",
       "lat": 37.393853,
       "lon": 126.95706,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "ati-industrial-automation",
   "name": "ATI Industrial Automation",
   "summary": "Maker of six-axis force/torque sensors and robotic tool changers.",
   "body": "Its sensors are used on industrial, collaborative and medical robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://ati-ia.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ati-ia.com/"
    },
    "image": {
     "v": "/logos/ati-industrial-automation.png",
     "fit": "contain",
     "src": "https://www.ati-ia.com/Images/ATI_Logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Apex",
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
       "address": "Apex, United States",
       "lat": 35.732535,
       "lon": -78.850552,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avita",
   "name": "AVITA",
   "summary": "Tokyo maker of avatar services and lifelike android robots.",
   "body": "Its N2H humanoids include lifelike versions with skin and hair.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://avita.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://avita.co.jp/"
    },
    "image": {
     "v": "/logos/avita.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=avita.co.jp&sz=256",
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
   "slug": "damiao-technology",
   "name": "Damiao Technology",
   "summary": "Shenzhen maker of robot joint motors with built-in drivers.",
   "body": "It makes joint motors, hub motors and gimbals widely used in legged robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://dmbot.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dmbot.cn/"
    },
    "image": {
     "v": "/logos/damiao-technology.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=dmbot.cn&sz=256",
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
   "slug": "enactic",
   "name": "Enactic",
   "summary": "Tokyo maker of the open-source OpenArm research arm.",
   "body": "It is also developing the Ena care robot.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://enactic.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://enactic.ai/"
    },
    "image": {
     "v": "/logos/enactic.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=enactic.ai&sz=256",
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
   "slug": "hebi-robotics",
   "name": "HEBI Robotics",
   "summary": "Pittsburgh maker of modular smart robot actuators.",
   "body": "Each actuator combines motor, gears, sensors and control electronics.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Robot maker"
     ],
     "src": "https://hebirobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hebirobotics.com/"
    },
    "image": {
     "v": "/logos/hebi-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=hebirobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Pittsburgh",
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
       "address": "Pittsburgh, United States",
       "lat": 40.440697,
       "lon": -80.002567,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kokoro",
   "name": "Kokoro",
   "summary": "Japanese maker of lifelike Actroid humanoids.",
   "body": "It builds Actroid androids to order or for rent.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://kokoro-dreams.co.jp/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://kokoro-dreams.co.jp/"
    },
    "city": {
     "v": "Hamura",
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
       "address": "Hamura, Japan",
       "lat": 35.764833,
       "lon": 139.307862,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "laifual",
   "name": "Laifual",
   "summary": "Chinese maker of harmonic reducers and robot joint modules.",
   "body": "It supplies strain-wave reducers for robot joints.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://laifual.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://laifual.com/"
    },
    "image": {
     "v": "/logos/laifual.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=laifual.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Shengzhou",
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
       "address": "Shengzhou, China",
       "lat": 29.564401,
       "lon": 120.82667,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "leaderdrive",
   "name": "Leaderdrive",
   "summary": "Suzhou maker of strain-wave reducers for robot joints.",
   "body": "Its harmonic reducers are used in industrial and humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://leaderdrive.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://leaderdrive.com/"
    },
    "image": {
     "v": "/logos/leaderdrive.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=leaderdrive.com&sz=256",
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
   "slug": "livox",
   "name": "Livox",
   "summary": "Shenzhen maker of lidar sensors for robots.",
   "body": "Its lidars are used in robots, cars and mapping.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://livoxtech.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://livoxtech.com/"
    },
    "image": {
     "v": "/logos/livox.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=livoxtech.com&sz=256",
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
   "slug": "orca-dexterity",
   "name": "ORCA Dexterity",
   "summary": "Zurich maker of open-design humanoid robot hands.",
   "body": "Its 17-joint hands are sold built or as kits.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://orcahand.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://orcahand.com/"
    },
    "image": {
     "v": "/logos/orca-dexterity.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=orcahand.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robbyant",
   "name": "Robbyant",
   "summary": "Ant Group's robotics company building wheeled humanoids and open robot models.",
   "body": "Its products include the R2 wheeled humanoid and the LingBot open-source model family.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://robbyant.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robbyant.com/"
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
   "slug": "robstride",
   "name": "RobStride",
   "summary": "Beijing maker of integrated robot joint modules.",
   "body": "Each module combines motor, driver and gearbox.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://robstride.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robstride.com/"
    },
    "image": {
     "v": "/logos/robstride.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=robstride.com&sz=256",
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
   "slug": "rochu",
   "name": "Rochu",
   "summary": "Chinese maker of soft grippers and soft fingers.",
   "body": "Its soft grippers are offered as hand options for robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://rochu.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rochu.com/"
    },
    "image": {
     "v": "/logos/rochu.png",
     "fit": "contain",
     "src": "https://rochu.com/_nuxt/img/logo.4bab2a4.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zhangjiagang",
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
       "address": "Zhangjiagang, China",
       "lat": 31.878298,
       "lon": 120.55146,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotcom",
   "name": "Robot.com",
   "summary": "Maker of the R-noid humanoid plus delivery and logistics robots.",
   "body": "R-noid targets kitchens, packing, picking and linen folding.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robot.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robot.com/"
    },
    "image": {
     "v": "/logos/robotcom.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=robot.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
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
       "address": "San Francisco, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "chestnut-robotics",
   "name": "Chestnut Robotics",
   "summary": "Maker of dexterous robot hands and a wearable task-capture rig.",
   "body": "The rig records how people do tasks so robots can learn them.",
   "data": {
    "roles": {
     "v": [
      "Supplier",
      "Software developer"
     ],
     "src": "https://tetheria.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tetheria.ai/"
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
   "slug": "ff-eai-robotics",
   "name": "FF EAI Robotics",
   "summary": "Faraday Future's robotics unit building humanoid and quadruped robots.",
   "body": "Its robots include FF Futurist, FF Master and FF Nova humanoids.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robotics.ff.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robotics.ff.com/"
    },
    "image": {
     "v": "/logos/ff-eai-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=robotics.ff.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "El Segundo",
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
       "address": "El Segundo, United States",
       "lat": 33.917028,
       "lon": -118.415634,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "gigaai",
   "name": "GigaAI",
   "summary": "Beijing developer of world models and wheeled humanoids.",
   "body": "Its products include the Maker H01 humanoid and the GigaBrain and GigaWorld models.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Robot maker"
     ],
     "src": "https://gigaai.cc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://gigaai.cc/"
    },
    "image": {
     "v": "/logos/gigaai.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=gigaai.cc&sz=256",
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
   "slug": "infiforce",
   "name": "INFIFORCE",
   "summary": "Hangzhou developer of wheeled humanoids and embodied AI infrastructure.",
   "body": "Its robots include the AstroDroid and UltraDroid humanoids.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://infiforce.cn/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://infiforce.cn/"
    },
    "image": {
     "v": "/logos/infiforce.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=infiforce.com&sz=256",
     "asof": "2026-11"
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
   "slug": "wowrobo-robotics",
   "name": "WowRobo Robotics",
   "summary": "Dongguan maker of robot arm kits and parts.",
   "body": "It sells robot arm kits, ready-built arms and parts.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://wowrobo.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://wowrobo.com/"
    },
    "image": {
     "v": "/logos/wowrobo-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=wowrobo.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Dongguan",
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
       "address": "Dongguan, China",
       "lat": 23.018357,
       "lon": 113.745233,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "isento-pib",
   "name": "isento (pib)",
   "summary": "Nuremberg company behind pib, an open-source 3D-printable humanoid.",
   "body": "pib.Pro is its assembled version.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://pib.rocks/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://pib.rocks/"
    },
    "image": {
     "v": "/logos/isento-pib.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=pib.rocks&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Nuremberg",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Nuremberg, Germany",
       "lat": 49.453872,
       "lon": 11.077298,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "alt-bionics",
   "name": "Alt-Bionics",
   "summary": "San Antonio maker of bionic hands for humanoids and prosthetics.",
   "body": "Its Surge Hand is for humanoid robots.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://altbionics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://altbionics.com/"
    },
    "image": {
     "v": "/logos/alt-bionics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=altbionics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Antonio",
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
       "address": "San Antonio, United States",
       "lat": 29.4246,
       "lon": -98.495141,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zhejiang-humanoid-robot-innovation-center",
   "name": "Zhejiang Humanoid Robot Innovation Center",
   "summary": "Ningbo humanoid robot innovation centre.",
   "body": "It builds the NAVIAI i3 humanoid and NAVIAI mobile manipulators.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://zj-humanoid.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://zj-humanoid.com/"
    },
    "image": {
     "v": "/logos/zhejiang-humanoid-robot-innovation-center.png",
     "fit": "contain",
     "src": "https://zj-humanoid.com/static/cms/images/logo.svg",
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
   "slug": "seeed-studio",
   "name": "Seeed Studio",
   "summary": "Shenzhen maker of open-source hardware for edge AI and robotics.",
   "body": "It sells robot kits, including low-cost arms used for robot learning.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://seeedstudio.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://seeedstudio.com/"
    },
    "image": {
     "v": "/logos/seeed-studio.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=seeedstudio.com&sz=256",
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
   "slug": "xyz",
   "name": "XYZ",
   "summary": "Seoul maker of semi-humanoid service and barista robots.",
   "body": "Its products include DEUX and Baris Brew.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://xyzcorp.imweb.me/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://xyzcorp.imweb.me/"
    },
    "image": {
     "v": "/logos/xyz.png",
     "fit": "contain",
     "src": "https://cdn.imweb.me/thumbnail/20220722/7a54bc076383d.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Seoul",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "country": {
     "v": "South Korea",
     "src": "https://robodienst.com/companies",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Seoul, South Korea",
       "lat": 37.566679,
       "lon": 126.978291,
       "src": "https://robodienst.com/companies"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "polymath-robotics",
   "name": "Polymath Robotics",
   "summary": "General Autonomy for Industrial Vehicles.",
   "body": "Polymath is building a general autonomy stack for cautious vehicles. Our software allows any industrial vehicle - whether it's a tractor in a field or a bulldozer in a mine, drive itself. Y Combinator Summer 2022 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.polymathrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.polymathrobotics.com/"
    },
    "image": {
     "v": "/logos/polymath-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/62c8ad6737aca1ee35a094f3/62d19893fe997323a05a4d4f_Polymath%20logo%20webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/polymath-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/polymath-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/polymath-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "andromeda-surgical",
   "name": "Andromeda Surgical",
   "summary": "Autonomous surgical robots.",
   "body": "We're building autonomous robots to make surgery safe, easier and more efficient. Robots currently perform about 1/4 of surgeries but only help with the physical aspects. We use AI to make surgery cognitively easier. Y Combinator Summer 2023 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.andromedasurgical.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.andromedasurgical.com/"
    },
    "image": {
     "v": "/logos/andromeda-surgical.png",
     "fit": "contain",
     "src": "https://www.andromedasurgical.com/apple-icon.png?5eb8db9aa686e630",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/andromeda-surgical",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/andromeda-surgical",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/andromeda-surgical"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "relari",
   "name": "Relari",
   "summary": "Building dexterous robots that learn from human biomechanics.",
   "body": "Relari is a robotics research company developing new ways for robots to learn dexterous manipulation from humans. Y Combinator Winter 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Model lab"
     ],
     "src": "https://www.relari.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.relari.ai/"
    },
    "image": {
     "v": "/logos/relari.png",
     "fit": "contain",
     "src": "https://www.relari.ai/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/relari",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/relari",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/relari"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tekton-dynamics",
   "name": "Tekton Dynamics",
   "summary": "AI control layer for welding robots.",
   "body": "Our mission is to empower every manufacturer, no matter their scale, to invent and build anything using intelligent robots. Today’s industrial robots are fast but \"blind\". They struggle with any task that isn't perfectly repetitive. Y Combinator Winter 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://tekton-dynamics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tekton-dynamics.com/"
    },
    "image": {
     "v": "/logos/tekton-dynamics.png",
     "fit": "contain",
     "src": "https://tekton-dynamics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://tekton-dynamics.com",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://tekton-dynamics.com",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Industrial Lab London 66 Druid Street London SE1 2HQ",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://tekton-dynamics.com"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pivot-robotics",
   "name": "Pivot Robotics",
   "summary": "AI for Robot Arms in Factories.",
   "body": "Pivot Robotics makes AI software for robotic arms that helps manufacturers automate their most labor intensive tasks. We are starting out with the dangerous task of metal grinding and are currently deploying our software on 10+ robots in a cast-iron foundry. Y Combinator Winter 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.pivotrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.pivotrobotics.com/"
    },
    "image": {
     "v": "/logos/pivot-robotics.png",
     "fit": "contain",
     "src": "https://www.pivotrobotics.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/pivot-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/pivot-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/pivot-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yondu",
   "name": "Yondu",
   "summary": "Robots to Automate Fulfillment.",
   "body": "Yondu is creating the robotic workforce of the future starting with logistics automation. We're deploying humanoid robots in the first flexible, drop-in picking automation solution designed for 3PLs. Y Combinator Winter 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.yondu.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.yondu.ai/"
    },
    "image": {
     "v": "/logos/yondu.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/68b78b24b8c6d7f8c97cb125/68b8bbd722505cfdcdc146f6_ICON.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.ycombinator.com/companies/yondu",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/yondu",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, CA, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.ycombinator.com/companies/yondu"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "miru",
   "name": "Miru",
   "summary": "Config Management for Robotics.",
   "body": "Miru makes it easy for robotics teams to manage, version, and deploy robot configurations. Developers use our well-documented APIs and UI components to automate configuration updates for both engineers and operators. Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.mirurobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mirurobotics.com/"
    },
    "image": {
     "v": "/logos/miru.png",
     "fit": "contain",
     "src": "https://www.mirurobotics.com/favicon-light.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/miru-ml",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/miru-ml",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/miru-ml"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "azalea-robotics",
   "name": "Azalea Robotics",
   "summary": "Automating airport baggage handling with robots.",
   "body": "Azalea Robotics automates airport baggage handling with intelligent robot operations. The global market for airport baggage handling systems is $20+ billion and growing, presenting a significant opportunity for innovation and market disruption in this sector. Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.azalearobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.azalearobotics.com/"
    },
    "image": {
     "v": "/logos/azalea-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/69b2e97a0e33221ae2092aad/69cc686454e9e8dae65d2cff_webclip.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/azalea-robotics-corporation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/azalea-robotics-corporation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/azalea-robotics-corporation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "autopallet-robotics",
   "name": "AutoPallet Robotics",
   "summary": "We make robots that move boxes in warehouses.",
   "body": "We’re building the next generation of warehouse robotics. In the US today, retailers spend approximately $10B per year paying human laborers to pick up and move cardboard boxes in warehouses. Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://autopallet.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://autopallet.bot/"
    },
    "image": {
     "v": "/logos/autopallet-robotics.png",
     "fit": "contain",
     "src": "https://autopallet.bot/static/images/2k_round.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/autopallet-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/autopallet-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/autopallet-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "piggy-robotics",
   "name": "Piggy Robotics",
   "summary": "Humanoid robots that do your chores for the price of an iPhone.",
   "body": "We build humanoid robots that do your chores at iPhone prices. Just like the millions of cars generating data for self-driving, we need millions of humanoids generating real-world data for general-purpose robotics. Y Combinator Fall 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://piggyrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://piggyrobotics.com/"
    },
    "image": {
     "v": "/logos/piggy-robotics.png",
     "fit": "contain",
     "src": "https://piggyrobotics.com/favicon.ico?favicon.0b3bf435.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "London",
     "src": "https://www.ycombinator.com/companies/piggy-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United Kingdom",
     "src": "https://www.ycombinator.com/companies/piggy-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "London, England, United Kingdom",
       "lat": 51.507446,
       "lon": -0.127765,
       "src": "https://www.ycombinator.com/companies/piggy-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cerulion",
   "name": "Cerulion",
   "summary": "Open source operating system for robots.",
   "body": "Cerulion is an open source operating system for robots built by 2 MIT robotics PhDs. Engineers at Amazon Robotics and Boston Dynamics AI Institute are using us to develop faster and ship more reliable robots than with ROS. Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://cerulion.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cerulion.com/"
    },
    "image": {
     "v": "/logos/cerulion.png",
     "fit": "contain",
     "src": "https://cerulion.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/cerulion",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/cerulion",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/cerulion"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "sensei",
   "name": "Sensei",
   "summary": "Robotic Training Data at Scale.",
   "body": "Sensei helps robotics companies scale and outsource their training data collection. Our hardware platform enables the collection of human-demonstration data at a tenth of the cost and twice the speed of current teleop approaches. Y Combinator Summer 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://senseirobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://senseirobotics.com/"
    },
    "image": {
     "v": "/logos/sensei.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=senseirobotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.ycombinator.com/companies/sensei",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/sensei",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, MA, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://www.ycombinator.com/companies/sensei"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "innate",
   "name": "Innate",
   "summary": "Personal AI Robots.",
   "body": "We make personal AI robots. We believe building open platforms like the first PCs this is the only way to bring the robotics future that we all want, where everyone can participate in the robotics revolution, and reap its rewards. Y Combinator Fall 2024 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.innate.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.innate.bot/"
    },
    "image": {
     "v": "/logos/innate.png",
     "fit": "contain",
     "src": "https://www.innate.bot/innate-favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/innate",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/innate",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/innate"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "revise-robotics",
   "name": "Revise Robotics",
   "summary": "Automating refurbishment of $1T in consumer electronics.",
   "body": "E-waste recycling facilities spend most of their time and effort sifting through discarded electronics, searching for valuable devices, refurbishing them, and reselling them in second-hand markets. Y Combinator Winter 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://reviserobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://reviserobotics.com/"
    },
    "image": {
     "v": "/logos/revise-robotics.png",
     "fit": "contain",
     "src": "https://reviserobotics.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.ycombinator.com/companies/revise-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/revise-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.ycombinator.com/companies/revise-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pave-robotics",
   "name": "Pave Robotics",
   "summary": "Robots that repair roads.",
   "body": "Pave Robotics builds robots that seal cracks in asphalt, helping paving companies save time and money. Our robots work 24/7 and deliver higher-quality results than humans. Y Combinator Winter 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://pave-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://pave-robotics.com/"
    },
    "image": {
     "v": "/logos/pave-robotics.png",
     "fit": "contain",
     "src": "https://www.google.com/s2/favicons?domain=pave-robotics.com&sz=256",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/pave-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/pave-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/pave-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "red-barn-robotics",
   "name": "Red Barn Robotics",
   "summary": "A Roomba for weeds on a farm.",
   "body": "We are building an autonomous robot to precisely eliminate weeds and leave crops untouched. Despite $100 billion being spent annually on weed control, weeds still cost the US economy $46B/year. Y Combinator Winter 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.redbarnrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.redbarnrobotics.com/"
    },
    "image": {
     "v": "/logos/red-barn-robotics.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/679c26bf7f96c23ec67d2854/67a26f8c72c91fa67fc33c82_Frame%202.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Tukwila",
     "src": "https://www.redbarnrobotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.redbarnrobotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1020 Industry Drive, Tukwila, WA 98188",
       "lat": 47.448232,
       "lon": -122.247643,
       "src": "https://www.redbarnrobotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "the-robot-learning-company",
   "name": "The Robot Learning Company",
   "summary": "Tools for the next era of physical automation.",
   "body": "Y Combinator Spring 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.robot-learning.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.robot-learning.co/"
    },
    "city": {
     "v": "Munich",
     "src": "https://shop.robot-learning.co/policies/contact-information",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://shop.robot-learning.co/policies/contact-information",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://shop.robot-learning.co/policies/contact-information"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zeon-systems",
   "name": "Zeon Systems",
   "summary": "AI-powered robotics for scientific lab automation.",
   "body": "We’re building AI-powered systems that automate manual work in scientific labs using robotics. Scientists simply type their experiment in plain English. Zeon translates it into code and runs it on robotic arms (no coding required). Y Combinator Spring 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.zeonsystems.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.zeonsystems.ai/"
    },
    "image": {
     "v": "/logos/zeon-systems.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/xHiIHdBMIlAYzZCmJkuCdS9TCI.jpg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/zeon-systems",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/zeon-systems",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/zeon-systems"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mbodi-ai",
   "name": "Mbodi AI",
   "summary": "Industrial Robots that Learn and Operate Like Humans.",
   "body": "Teach robots new skills through natural language and run reliably in production in minutes. Mbodi combines generative AI and agent orchestration, turning everyday language and quick demos into precise, reliable robot actions for industrial automation. Y Combinator Spring 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab",
      "Software developer"
     ],
     "src": "https://www.mbodi.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mbodi.ai/"
    },
    "image": {
     "v": "/logos/mbodi-ai.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/ASIV8C53iwJiZxh1HaMAHdbJeE.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.ycombinator.com/companies/mbodi-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/mbodi-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.ycombinator.com/companies/mbodi-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "boost-robotics",
   "name": "Boost Robotics",
   "summary": "Robots for the inspection and maintenance of data centers.",
   "body": "Boost Robotics is building autonomous mobile manipulation robots to remotely perform manual tasks in data centers. Y Combinator Spring 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.boostrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.boostrobotics.ai/"
    },
    "image": {
     "v": "/logos/boost-robotics.png",
     "fit": "contain",
     "src": "https://www.boostrobotics.ai/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.ycombinator.com/companies/boost-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/boost-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, MA, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://www.ycombinator.com/companies/boost-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "vassar-robotics",
   "name": "Vassar Robotics",
   "summary": "Gearless robot joints for better embodied AI.",
   "body": "Vassar Robotics is building gearless robot joints and arms using high-torque transverse-flux motors. Eliminating gearboxes makes robots more precise, reliable, affordable, and easier to simulate. Y Combinator Spring 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker",
      "Supplier"
     ],
     "src": "https://vassarrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vassarrobotics.com/"
    },
    "image": {
     "v": "/logos/vassar-robotics.png",
     "fit": "contain",
     "src": "https://vassarrobotics.com/apple-icon?6d125e9e0e4f4a16",
     "asof": "2026-11"
    },
    "city": {
     "v": "Boston",
     "src": "https://www.ycombinator.com/companies/vassar-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/vassar-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Boston, MA, United States",
       "lat": 42.358834,
       "lon": -71.05783,
       "src": "https://www.ycombinator.com/companies/vassar-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "verne-robotics",
   "name": "Verne Robotics",
   "summary": "AI models that teach robots new skills in hours.",
   "body": "Verne builds general‑purpose physical AI. We deploy robots to expand the productive capacity of the physical world. Y Combinator Summer 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://vernerobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://vernerobotics.com/"
    },
    "image": {
     "v": "/logos/verne-robotics.png",
     "fit": "contain",
     "src": "https://vernerobotics.com/apple-icon.png?apple-icon.14z31e5jzyu4e.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Sacramento",
     "src": "https://www.ycombinator.com/companies/verne-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/verne-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Sacramento, CA, United States",
       "lat": 38.581061,
       "lon": -121.493895,
       "src": "https://www.ycombinator.com/companies/verne-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robotics-center-of-silicon-valley",
   "name": "Robotics Center of Silicon Valley",
   "summary": "Robots, parts & RL envs & evals - delivered in 48 hrs / pickup in SF.",
   "body": "DeepAware (Robotics Center of Silicon Valley, https://roboticscenter.ai/) is the fastest way for enterprises and researchers to get robots and robotics parts in the US — 72-hour delivery or Bay Area pickup. Y Combinator Summer 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://www.roboticscenter.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.roboticscenter.ai/"
    },
    "image": {
     "v": "/logos/robotics-center-of-silicon-valley.png",
     "fit": "contain",
     "src": "https://www.roboticscenter.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.roboticscenter.ai/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.roboticscenter.ai/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "90 Welsh St, San Francisco, CA 94107",
       "lat": 37.779521,
       "lon": -122.39736,
       "src": "https://www.roboticscenter.ai/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "physical-turing",
   "name": "Physical Turing",
   "summary": "Next generation robot deployer.",
   "body": "Physical Turing is a neo robot deployer. Our core tech lets us deploy any robot fast, and every deployment produces the real-world data we use to train our own intelligence. Y Combinator Summer 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://physicalturing.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://physicalturing.ai/"
    },
    "image": {
     "v": "/logos/physical-turing.png",
     "fit": "contain",
     "src": "https://physicalturing.ai/icon.png?icon.3pe1-5hjqy3nz.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.ycombinator.com/companies/physical-turing",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/physical-turing",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.ycombinator.com/companies/physical-turing"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "relling",
   "name": "Relling",
   "summary": "deploying the first billion robots for manufacturing.",
   "body": "Y Combinator Summer 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://rellingsystems.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://rellingsystems.com/"
    },
    "image": {
     "v": "/logos/relling.png",
     "fit": "contain",
     "src": "https://rellingsystems.com/assets/icons/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/relling",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/relling",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/relling"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "os3-robotics",
   "name": "OS3 Robotics",
   "summary": "Affordable, intelligent humanoid robots built to deploy at scale.",
   "body": "OS3 is building the platform that makes intelligent robots accessible to every business. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://os3robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://os3robotics.com/"
    },
    "image": {
     "v": "/logos/os3-robotics.png",
     "fit": "contain",
     "src": "https://os3robotics.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/os3",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/os3",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/os3"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "flywheel-ai",
   "name": "Flywheel AI",
   "summary": "Waymo for excavators.",
   "body": "Flywheel AI converts any existing excavators for contractors to enable remote ops to increase safety and productivity, and use robotics context dataset to train autonomous policies. Y Combinator Summer 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://useflywheel.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://useflywheel.ai/"
    },
    "image": {
     "v": "/logos/flywheel-ai.png",
     "fit": "contain",
     "src": "https://useflywheel.ai/wp-content/uploads/2025/08/cropped-flywheel-ai-logo-transparent.png?w=192",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/flywheel-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/flywheel-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/flywheel-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tensr",
   "name": "Tensr",
   "summary": "Robotic factories that build robots.",
   "body": "Robotic factories that build robotics in the US. Currently operating a 12,000 sqft factory in the Bay Area and actively manufacturing customer orders for some of the largest robotics companies in the US and the International Space Station. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.tensr.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tensr.com/"
    },
    "image": {
     "v": "/logos/tensr.png",
     "fit": "contain",
     "src": "https://www.tensr.com/favicon-tensr.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Emeryville",
     "src": "https://www.ycombinator.com/companies/tensr",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/tensr",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Emeryville, CA, United States",
       "lat": 37.831409,
       "lon": -122.286527,
       "src": "https://www.ycombinator.com/companies/tensr"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "darwin-robotics",
   "name": "Darwin Robotics",
   "summary": "Robot technicians for AI infrastructure.",
   "body": "Darwin Robotics is building general-purpose robot technicians that assemble and maintain the machines civilization runs on. We're starting with AI infrastructure, automating physical work across data center assembly, commissioning, and maintenance. Y Combinator Fall 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://darwinrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://darwinrobotics.ai/"
    },
    "image": {
     "v": "/logos/darwin-robotics.png",
     "fit": "contain",
     "src": "https://darwinrobotics.ai/favicon.ico?favicon.2vrnruzmhtw31.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/darwin-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/darwin-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/darwin-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cortex-ai",
   "name": "Cortex AI",
   "summary": "Large-scale real-world robot & human data for embodied AI.",
   "body": "Cortex AI builds the world’s most diverse and large-scale real-world workplace robot & egocentric dataset — where the physical world becomes the next training and evaluation set for embodied AI. Y Combinator Fall 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://cortexrobot.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://cortexrobot.ai/"
    },
    "image": {
     "v": "/logos/cortex-ai.png",
     "fit": "contain",
     "src": "https://cortexrobot.ai/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/cortex-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/cortex-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/cortex-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "philon",
   "name": "Philon",
   "summary": "General Purpose Robots.",
   "body": "Building open-source general-purpose robots capable of performing unsafe, repetitive or boring tasks. Y Combinator Fall 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://philon.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://philon.ai/"
    },
    "image": {
     "v": "/logos/philon.png",
     "fit": "contain",
     "src": "https://philon.ai/images/logo.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/philon",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/philon",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/philon"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "lightberry",
   "name": "Lightberry",
   "summary": "Robots with soul.",
   "body": "We build brains for robots. We work with manufacturers like Unitree to make robots listen, speak, and act. You can program your robot out of the box by literally talking to it, no coding involved. Y Combinator Fall 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://lightberry.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://lightberry.com/"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/lightberry",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/lightberry",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/lightberry"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "forge-robotics",
   "name": "Forge Robotics",
   "summary": "A robotics intelligence system for metal fabrication.",
   "body": "Forge Robotics is changing the way that metal parts are fabricated. We are enabling a future where our intelligent robotic system completes all steps needed to take raw metal stock and transform it into fully welded parts. Y Combinator Fall 2025 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://forge-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://forge-robotics.com/"
    },
    "image": {
     "v": "/logos/forge-robotics.png",
     "fit": "contain",
     "src": "https://forge-robotics.com/favicon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://forge-robotics.com",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://forge-robotics.com",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "1385 Fairfax Ave, STE B San Francisco, CA 94124",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://forge-robotics.com"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hlabs",
   "name": "Hlabs",
   "summary": "US-Made Parts for Robots.",
   "body": "HLabs is making an industrial supply chain for building robots in the USA including electronics and actuators, with a focus on in-house manufacturing. Robotics is going to be one of the largest industries the world has ever seen. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.hlaboratories.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.hlaboratories.com/"
    },
    "image": {
     "v": "/logos/hlabs.png",
     "fit": "contain",
     "src": "https://www.hlaboratories.com/branding/favicon-black.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Austin",
     "src": "https://www.ycombinator.com/companies/hlabs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/hlabs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, TX, United States",
       "lat": 30.264926,
       "lon": -97.747409,
       "src": "https://www.ycombinator.com/companies/hlabs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "one-robot",
   "name": "One Robot",
   "summary": "World models for robot evals and training.",
   "body": "One Robot builds simulation environments that are realistic to see and realistic to interact with, so robotics teams can train and evaluate robot policies without being bottlenecked by robot time. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.onerobot.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.onerobot.io/"
    },
    "image": {
     "v": "/logos/one-robot.png",
     "fit": "contain",
     "src": "https://www.onerobot.io/one-robot-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/one-robot",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/one-robot",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/one-robot"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "asimov-data",
   "name": "Asimov (data)",
   "summary": "Real-world human movement data for humanoid robots.",
   "body": "Asimov collects real-world human movement data from households and businesses to train humanoid robots. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://tryasimov.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://tryasimov.ai/"
    },
    "image": {
     "v": "/logos/asimov-data.png",
     "fit": "contain",
     "src": "https://tryasimov.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/asimov",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/asimov",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/asimov"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robodock",
   "name": "RoboDock",
   "summary": "Robots that run autonomous depots for autonomous fleets.",
   "body": "RoboDock builds robots that automate depot operations, like charging and vehicle checks, for electric and autonomous vehicle fleets. We turn fleet depots from manual sites into self-running systems that lower operational costs and increase vehicle uptime. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://robodock.tech/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robodock.tech/"
    },
    "image": {
     "v": "/logos/robodock.png",
     "fit": "contain",
     "src": "https://cdn.prod.website-files.com/69828aca357130fb28dc8b68/6984c0cf826ee1d3309d86ca_webclip.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/robodock",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/robodock",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/robodock"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "human-archive",
   "name": "Human Archive",
   "summary": "Infrastructure for Training, Evaluating, and Deploying Physical AI.",
   "body": "Human Archive is a full-stack global infrastructure company for training, evaluating, and deploying Physical AI. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.humanarchive.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.humanarchive.ai/"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/human-archive",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/human-archive",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/human-archive"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "datoric",
   "name": "Datoric",
   "summary": "The training data R&D engine for physical AI.",
   "body": "Datoric develops custom datasets for robotics, treating research, collection, verification, and production as one continuous process. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.datoric.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.datoric.com/"
    },
    "image": {
     "v": "/logos/datoric.png",
     "fit": "contain",
     "src": "https://www.datoric.com/icon.png?icon.0x5y-f0idc94h.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/datoric",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/datoric",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/datoric"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "servo7",
   "name": "Servo7",
   "summary": "Container unloading robots for warehouses.",
   "body": "We deploy robots in warehouses to automate the most demanding job in logistics: unloading loose-loaded containers. Our customers include 3PLs (CEVA, Stord), distributors (DHL, PostNL) and many more logistics companies. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://servo7.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://servo7.com/"
    },
    "image": {
     "v": "/logos/servo7.png",
     "fit": "contain",
     "src": "https://servo7.com/icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Amsterdam",
     "src": "https://www.ycombinator.com/companies/servo7",
     "asof": "2026-11"
    },
    "country": {
     "v": "Netherlands",
     "src": "https://www.ycombinator.com/companies/servo7",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Amsterdam, NH, Netherlands",
       "lat": 52.37308,
       "lon": 4.892453,
       "src": "https://www.ycombinator.com/companies/servo7"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "libra-robotics",
   "name": "Libra Robotics",
   "summary": "The robot workforce for infrastructure of the AI era.",
   "body": "Infrastructure faces rapid expansion and labor shortages. Today, robots struggle to scale to meet customers’ high-mix work needs. Libra builds AI that engineers robots for new tasks across embodiments. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.librabots.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.librabots.com/"
    },
    "image": {
     "v": "/logos/libra-robotics.png",
     "fit": "contain",
     "src": "https://www.librabots.com/assets/icon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Newark",
     "src": "https://www.librabots.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.librabots.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "7730 Enterprise Drive, Suite 4 Newark, CA, 94560",
       "lat": 37.529659,
       "lon": -122.04024,
       "src": "https://www.librabots.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "remy-ai",
   "name": "Remy AI",
   "summary": "Automating dexterous tasks in warehouses with AI-powered robots.",
   "body": "Building robots and training models for automating manipulation in warehouse, starting with e-commerce 3PLs Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.tryremy.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.tryremy.ai/"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/remy-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/remy-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/remy-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "origami-robotics",
   "name": "Origami Robotics",
   "summary": "Manipulate Anything Robot.",
   "body": "We are building a \"manipulate anything\" model with the robot hardware that embodies it. Y Combinator Winter 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.origami-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.origami-robotics.com/"
    },
    "image": {
     "v": "/logos/origami-robotics.png",
     "fit": "contain",
     "src": "https://framerusercontent.com/images/uAwjeIa9kZfsWuAXKD9hodBzez8.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/origami-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/origami-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/origami-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "most-robotic",
   "name": "Most Robotic",
   "summary": "Research lab building the most robotic household in the world.",
   "body": "We're a robotics research lab pushing what's possible with physical AI. We're MIT computer scientists & friends since middle school, with robotics research backgrounds and industry experience at NASA JPL, SpaceX, and AWS. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://mostrobotic.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://mostrobotic.com/"
    },
    "image": {
     "v": "/logos/most-robotic.png",
     "fit": "contain",
     "src": "https://mostrobotic.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/most-robotic",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/most-robotic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/most-robotic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "inloop-robotics",
   "name": "InLoop Robotics",
   "summary": "Robotic arms that pick and pack your orders.",
   "body": "We are building AI-native fulfillment powered by robotics. Warehouses without human labor that get better, faster, and cheaper with every order. Most robotics companies wait until their system is perfect before deploying. We don't. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.inloop-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.inloop-robotics.com/"
    },
    "image": {
     "v": "/logos/inloop-robotics.png",
     "fit": "contain",
     "src": "https://www.inloop-robotics.com/icon.svg?icon.89833079.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "Munich",
     "src": "https://www.inloop-robotics.com/",
     "asof": "2026-11"
    },
    "country": {
     "v": "Germany",
     "src": "https://www.inloop-robotics.com/",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Munich, Germany",
       "lat": 48.137108,
       "lon": 11.575382,
       "src": "https://www.inloop-robotics.com/"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hub-labs",
   "name": "Hub Labs",
   "summary": "Deployment and data infrastructure for Embodied AI.",
   "body": "Hub deploys hardware and embodied machines to collect data for robotics labs, to produce labor output for real world businesses. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://hub.xyz/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hub.xyz/"
    },
    "image": {
     "v": "/logos/hub-labs.png",
     "fit": "contain",
     "src": "https://hub.xyz/icon-192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/hub-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/hub-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/hub-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shotwell",
   "name": "Shotwell",
   "summary": "Annotations for robotics data.",
   "body": "Shotwell AI is building the data QA layer for dexterous robotics. We work with teams collecting teleoperation and egocentric data to provide dense semantic annotation and validate task adherence. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://shotwell.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://shotwell.ai/"
    },
    "image": {
     "v": "/logos/shotwell.png",
     "fit": "contain",
     "src": "https://shotwell.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/shotwellai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/shotwellai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/shotwellai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "synphony",
   "name": "Synphony",
   "summary": "Train and deploy robots for any task in any embodiment, quickly.",
   "body": "Synphony Robotics trains and deploys robots for factories, processors, and other industrial facilities. Our product, Forte, works across robot hardware. We commit to 12 weeks from signing to deployment. Our robots are working in real facilities right now. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://synphony.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://synphony.co/"
    },
    "image": {
     "v": "/logos/synphony.png",
     "fit": "contain",
     "src": "https://synphony.co/synphony-mark.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/synphony",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/synphony",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/synphony"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stablebrowse",
   "name": "StableBrowse",
   "summary": "Building the Data Infrastructure layer for Physical AI.",
   "body": "Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://stablebrowse.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://stablebrowse.ai/"
    },
    "image": {
     "v": "/logos/stablebrowse.png",
     "fit": "contain",
     "src": "https://stablebrowse.ai/stablebrowse-logo.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/stablebrowse",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/stablebrowse",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/stablebrowse"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eden-robotics",
   "name": "Eden Robotics",
   "summary": "Autonomous services for humanity.",
   "body": "We're building robots that just work and use them to deliver autonomous services at scale. Our first use case is semi-humanoid robots for manufacturing and logistics. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://edenrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://edenrobotics.ai/"
    },
    "image": {
     "v": "/logos/eden-robotics.png",
     "fit": "contain",
     "src": "https://edenrobotics.ai/icon3.png?icon3.0u96f10mapv6p.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/eden-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/eden-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/eden-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rodeo-robotics",
   "name": "Rodeo Robotics",
   "summary": "Robots for vehicle maintenance.",
   "body": "Rodeo Robotics (YC F26) automates vehicle maintenance so shops can get vehicles back to work at lower cost. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.rodeorobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.rodeorobotics.com/"
    },
    "image": {
     "v": "/logos/rodeo-robotics.png",
     "fit": "contain",
     "src": "https://www.rodeorobotics.com/apple-icon?c0eea6885fa15b6d",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/rodeo-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/rodeo-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/rodeo-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "avea-robotics",
   "name": "Avea Robotics",
   "summary": "The human-in-the-loop system for robots.",
   "body": "We built the fastest software to control robots from anywhere in the world. We make it possible for robotics companies to keep their robots at 100% uptime, and intervene instantly when a failure occurs. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.avearobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.avearobotics.com/"
    },
    "image": {
     "v": "/logos/avea-robotics.png",
     "fit": "contain",
     "src": "https://www.avearobotics.com/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/avea-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/avea-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/avea-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "intelligence-factory",
   "name": "Intelligence Factory",
   "summary": "Human Intelligence for Robots.",
   "body": "Robotics is the new paradigm. With hardware converging, Intelligence is the biggest bottleneck. Our world was built for humans and we're giving robots the ability to reason and act like us. Y Combinator Spring 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://www.intelligence-factory.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.intelligence-factory.com/"
    },
    "image": {
     "v": "/logos/intelligence-factory.png",
     "fit": "contain",
     "src": "https://www.intelligence-factory.com/icon.png?icon.b740810e.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "New York",
     "src": "https://www.ycombinator.com/companies/intelligence-factory",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/intelligence-factory",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "New York, NY, United States",
       "lat": 40.712728,
       "lon": -74.006015,
       "src": "https://www.ycombinator.com/companies/intelligence-factory"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "proprio-robotics",
   "name": "Proprio Robotics",
   "summary": "Robots to maintain and assemble data centers.",
   "body": "Proprio Robotics is building state-of-the-art physical intelligence to automate the entire data center lifecycle—from buildout to maintenance to decommissioning. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.propriorobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.propriorobotics.com/"
    },
    "image": {
     "v": "/logos/proprio-robotics.png",
     "fit": "contain",
     "src": "https://www.propriorobotics.com/favicon.ico?favicon.0isgjzizv_8ic.ico?dpl=dpl_99LejXDnLKyJ9h7zcjuy5MgZc6Hw",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/proprio-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/proprio-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/proprio-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "edgerun",
   "name": "Edgerun",
   "summary": "Military exoskeletons.",
   "body": "Edgerun builds military exoskeletons. Read the mission at edgerun.com/mission Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.edgerun.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.edgerun.com/"
    },
    "image": {
     "v": "/logos/edgerun.png",
     "fit": "contain",
     "src": "https://www.edgerun.com/seo/icon-512.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/edgerun",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/edgerun",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/edgerun"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "enact",
   "name": "Enact",
   "summary": "Real-world RL environments for robotics models.",
   "body": "Enact creates the physical environments to benchmark and hill climb robotics models on high-value tasks. We find where robots fail, and fix them with our in-house training loop. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://enact.company/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://enact.company/"
    },
    "image": {
     "v": "/logos/enact.png",
     "fit": "contain",
     "src": "https://enact.company/apple-icon.png?apple-icon.e389a78f.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/enact",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/enact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/enact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "deepreach",
   "name": "DeepReach",
   "summary": "Network for Physical AI Data Business.",
   "body": "Physical AI — robots and world models — is bottlenecked on one thing: diverse, real-world data at massive scale showing how humans actually do work in the physical world. It was never written down, and you can't buy it, because no one has ever captured it. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://deepreach.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://deepreach.ai/"
    },
    "image": {
     "v": "/logos/deepreach.png",
     "fit": "contain",
     "src": "https://deepreach.ai/favicon.ico",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/deepreach-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/deepreach-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/deepreach-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "manifold",
   "name": "Manifold",
   "summary": "Drop-in robotic labor that works on Day 1.",
   "body": "The US Warehouse industry spends $75bn on labor each year. Yet, only 10% of US warehouses have any form of automation, because existing robotics are too expensive and hard to integrate. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.manifoldindustries.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.manifoldindustries.ai/"
    },
    "image": {
     "v": "/logos/manifold.png",
     "fit": "contain",
     "src": "https://www.manifoldindustries.ai/apple-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.ycombinator.com/companies/manifold-2",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/manifold-2",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, CA, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.ycombinator.com/companies/manifold-2"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "agency-tool-company",
   "name": "Agency Tool Company",
   "summary": "Reliable infrastructure to build, deploy and manage real-world robots.",
   "body": "Agency Tool Company ships software to robots in the field 20x faster than a Docker pull with ATC Deploy, sending only the bytes that changed and resuming when the network drops. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://agencytool.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://agencytool.com/"
    },
    "image": {
     "v": "/logos/agency-tool-company.png",
     "fit": "contain",
     "src": "https://agencytool.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Denver",
     "src": "https://www.ycombinator.com/companies/agency-tool-company",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/agency-tool-company",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Denver, CO, United States",
       "lat": 39.739236,
       "lon": -104.984862,
       "src": "https://www.ycombinator.com/companies/agency-tool-company"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "6thsense",
   "name": "6thSense",
   "summary": "Nervous System for Physical AI.",
   "body": "Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://6thsense.dev/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://6thsense.dev/"
    },
    "image": {
     "v": "/logos/6thsense.png",
     "fit": "contain",
     "src": "https://6thsense.dev/logos/Logo_Alpha.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/6thsense",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/6thsense",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/6thsense"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "aktoria-robotics",
   "name": "Aktoria Robotics",
   "summary": "Human as API for robots.",
   "body": "Aktoria is the teleoperation layer for robotics: deployments, data collection and interventions. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://aktoria.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://aktoria.com/"
    },
    "image": {
     "v": "/logos/aktoria-robotics.png",
     "fit": "contain",
     "src": "https://aktoria.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/aktoria-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/aktoria-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/aktoria-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "neuromorphic",
   "name": "Neuromorphic",
   "summary": "Building robots to automate wetlabs.",
   "body": "We are building robots that can work autonomously in existing wet labs. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.neuromorphic.vision/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.neuromorphic.vision/"
    },
    "image": {
     "v": "/logos/neuromorphic.png",
     "fit": "contain",
     "src": "https://www.neuromorphic.vision/brand/neuromorphic-mark.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/neuromorphic",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/neuromorphic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/neuromorphic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cosmic-robotics",
   "name": "Cosmic Robotics",
   "summary": "Autonomous construction on Earth and beyond.",
   "body": "Our mission is to build a city on Mars. Cosmic-1, the first equipment in our fleet, is an autonomous robot capable of heavy-lift manipulation. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.cosmicrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cosmicrobotics.com/"
    },
    "image": {
     "v": "/logos/cosmic-robotics.png",
     "fit": "contain",
     "src": "https://www.cosmicrobotics.com/assets/img/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/cosmic-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/cosmic-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/cosmic-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "praxis-robotics",
   "name": "Praxis Robotics",
   "summary": "Turns real businesses into robotics data vendors.",
   "body": "Praxis captures the data physical AI is bottlenecked on: egocentric video, 3D scans, and multimodal capture from inside real industrial and residential environments. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.praxisrobotics.io/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.praxisrobotics.io/"
    },
    "image": {
     "v": "/logos/praxis-robotics.png",
     "fit": "contain",
     "src": "https://www.praxisrobotics.io/icon.svg?12c320cd3254fdcd",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/praxis-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/praxis-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/praxis-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shiraz-ai",
   "name": "Shiraz AI",
   "summary": "Robots that learn on the job.",
   "body": "We deploy robots that learn new tasks from a single human demonstration in the factory. We're starting in contract manufacturing, where lines change every week and both traditional automation and today's VLAs fall over. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://shiraz.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://shiraz.ai/"
    },
    "image": {
     "v": "/logos/shiraz-ai.png",
     "fit": "contain",
     "src": "https://shiraz.ai/assets/favicon-192.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/shiraz-ai",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/shiraz-ai",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/shiraz-ai"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "grip-robotics",
   "name": "Grip Robotics",
   "summary": "Robots for waste manipulation.",
   "body": "Grip is a robotics company building intelligent robotic systems for waste and recycling. We are starting with organic waste, where removing contaminants from messy, constantly changing streams remains difficult and highly manual. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://griprobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://griprobotics.ai/"
    },
    "image": {
     "v": "/logos/grip-robotics.png",
     "fit": "contain",
     "src": "https://griprobotics.ai/logo_full.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zürich",
     "src": "https://www.ycombinator.com/companies/grip",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://www.ycombinator.com/companies/grip",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zürich, ZH, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://www.ycombinator.com/companies/grip"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hebbian-robotics",
   "name": "Hebbian Robotics",
   "summary": "Foundational infrastructure for Physical AI.",
   "body": "Hebbian Robotics builds open source foundational infrastructure for Physical AI to develop robots that extend what humanity can do, for the benefit of the communities they serve. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://hebbianrobotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hebbianrobotics.com/"
    },
    "image": {
     "v": "/logos/hebbian-robotics.png",
     "fit": "contain",
     "src": "https://hebbianrobotics.com/hebbian-mark.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/hebbian-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/hebbian-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/hebbian-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dawn-industries",
   "name": "Dawn Industries",
   "summary": "Making Robots Easy to Deploy in Factories Today.",
   "body": "Dawn Industries enables artificial intelligence to design, build, and program factory automation. Our robots create real things in the real world. Together we are building the next generation of American industry for all. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://dawnxr.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://dawnxr.com/"
    },
    "image": {
     "v": "/logos/dawn-industries.png",
     "fit": "contain",
     "src": "https://dawnxr.com/assets/apple-touch-icon.fbedb65399a090cd.png?v=edge-boxed",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/dawn-industries",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/dawn-industries",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/dawn-industries"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "robocurve",
   "name": "Robocurve",
   "summary": "Evals for robots.",
   "body": "Robocurve builds open-source tools and independent benchmarks to measure how well robots can do real-world jobs. Instead of relying on unverified demo videos from frontier labs, we score their models on reproducible benchmarks that anyone can trust. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Media"
     ],
     "src": "https://robocurve.org/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://robocurve.org/"
    },
    "image": {
     "v": "/logos/robocurve.png",
     "fit": "contain",
     "src": "https://robocurve.org/assets/logo/robocurve-mark-v2.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/robocurve",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/robocurve",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/robocurve"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "salem-robotics",
   "name": "Salem Robotics",
   "summary": "Deploying robots to replace workers in hazardous spaces.",
   "body": "Our software turns any robot we deploy into an everyday independent worker at your facility. Y Combinator Summer 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://www.salemroboticsinc.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.salemroboticsinc.com/"
    },
    "image": {
     "v": "/logos/salem-robotics.png",
     "fit": "contain",
     "src": "https://www.salemroboticsinc.com/logo-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/salem-robotics-inc",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/salem-robotics-inc",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/salem-robotics-inc"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "runtime",
   "name": "Runtime",
   "summary": "Fast, Reliable Agentic Robotics.",
   "body": "Runtime is building fast, reliable agentic robotics to help robots learn new tasks without fine-tuning. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://runtime.si/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://runtime.si/"
    },
    "image": {
     "v": "/logos/runtime.png",
     "fit": "contain",
     "src": "https://runtime.si/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/runtime-si",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/runtime-si",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/runtime-si"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "se3-labs",
   "name": "SE3 Labs",
   "summary": "Real-World RL Environments for Physical AI.",
   "body": "We build real-world RL environments for robots. Starting with tasks from industry partners, we test policies on real robots and identify where they fail. We use those failures to decide what data to collect and curate for the next policy update. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://se3labs.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://se3labs.ai/"
    },
    "image": {
     "v": "/logos/se3-labs.png",
     "fit": "contain",
     "src": "https://se3labs.ai/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/se3-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/se3-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/se3-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "outworld-labs",
   "name": "Outworld Labs",
   "summary": "Robotics simulation indistinguishable from reality.",
   "body": "Outworld Labs is building a simulation platform for training and evaluating robot foundation models. The platform is built on a brand new physics engine designed from the ground up for dexterous manipulation. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Model lab"
     ],
     "src": "https://outworldlabs.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://outworldlabs.com/"
    },
    "image": {
     "v": "/logos/outworld-labs.png",
     "fit": "contain",
     "src": "https://outworldlabs.com/favicon.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/outworld-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/outworld-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/outworld-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "open-actuation",
   "name": "Open Actuation",
   "summary": "Quick-turn, purpose-built motors & actuators for all.",
   "body": "We design and manufacture high-mix drone motors and robotic actuators in LA. DJI, Apple, and Ford don't settle for OTS components. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://openactuation.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://openactuation.com/"
    },
    "image": {
     "v": "/logos/open-actuation.png",
     "fit": "contain",
     "src": "https://openactuation.com/assets/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Los Angeles",
     "src": "https://www.ycombinator.com/companies/open-actuation",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/open-actuation",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, CA, United States",
       "lat": 34.053692,
       "lon": -118.242768,
       "src": "https://www.ycombinator.com/companies/open-actuation"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shepherd-robotics",
   "name": "Shepherd Robotics",
   "summary": "Robots for high skilled labor powering AI infrastructure.",
   "body": "Shepherd Robotics builds general purpose robots for skilled physical work across AI infrastructure and advanced manufacturing. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://shepherdrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://shepherdrobotics.ai/"
    },
    "image": {
     "v": "/logos/shepherd-robotics.png",
     "fit": "contain",
     "src": "https://shepherdrobotics.ai/apple-touch-icon.png?v=2",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/shepherd-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/shepherd-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/shepherd-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "deploy-robotics",
   "name": "Deploy Robotics",
   "summary": "The generalist robot deployment company.",
   "body": "Deploy's core belief is that robots should be useful. Getting a generalist robot to do real work is fundamentally the same problem across industries. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://deployrobotics.co/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://deployrobotics.co/"
    },
    "image": {
     "v": "/logos/deploy-robotics.png",
     "fit": "contain",
     "src": "https://deployrobotics.co/favicon-96x96.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/deploy",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/deploy",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/deploy"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hemlock",
   "name": "Hemlock",
   "summary": "Force data collected at scale for training physical AI models.",
   "body": "The first pre-training scale tactile dataset for robotic AI, utilizing proprietary EMG technology. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://hemlock.inc/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://hemlock.inc/"
    },
    "image": {
     "v": "/logos/hemlock.png",
     "fit": "contain",
     "src": "https://hemlock.inc/brand/brand-mark.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/hemlock",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/hemlock",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/hemlock"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "dreamscale-labs",
   "name": "Dreamscale Labs",
   "summary": "Cloud inference and training infrastructure for robotics.",
   "body": "Dreamscale Labs is building the fastest cloud inference platform for robotics. As complex physical AI models become difficult to fit on expensive on-robot GPUs, we let users offload inference to the cloud and serve them with real-time latency. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Compute"
     ],
     "src": "https://www.dreamscalelabs.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.dreamscalelabs.com/"
    },
    "image": {
     "v": "/logos/dreamscale-labs.png",
     "fit": "contain",
     "src": "https://www.dreamscalelabs.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/dreamscale-labs",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/dreamscale-labs",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/dreamscale-labs"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "silica-machines",
   "name": "Silica Machines",
   "summary": "Actuators for Physical AI.",
   "body": "Silica makes the first affordable actuators that sense forces directly, so that all robots can feel the world around them. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Supplier"
     ],
     "src": "https://www.silicamachines.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.silicamachines.com/"
    },
    "image": {
     "v": "/logos/silica-machines.png",
     "fit": "contain",
     "src": "https://www.silicamachines.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/silica",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/silica",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/silica"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "odin-robotics",
   "name": "Odin Robotics",
   "summary": "We deploy robots that adapt to high-mix factories.",
   "body": "Odin Robotics deploys robot arms in factories to do repetitive manual work, like machine tending and packing. They work alongside existing machines and people, so factories don't have to redesign their lines. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://odin-robotics.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://odin-robotics.com/"
    },
    "image": {
     "v": "/logos/odin-robotics.png",
     "fit": "contain",
     "src": "https://odin-robotics.com/assets/odin-mark.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/odin-robotics",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/odin-robotics",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/odin-robotics"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "preload",
   "name": "Preload",
   "summary": "Multisensory systems (EMG+tactile+video) for training physical AI.",
   "body": "Designing and iterating a multimodal hardware stack (currently ego + tactile gloves + EMG) to collect rich and scalable datasets for physical AI. Also interested in how we can use this technology to advance surgery. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://preload.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://preload.ai/"
    },
    "image": {
     "v": "/logos/preload.png",
     "fit": "contain",
     "src": "https://preload.ai/assets/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/preload",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/preload",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/preload"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "axonnic",
   "name": "Axonnic",
   "summary": "Creating human skill at robot scale.",
   "body": "Axonnic is building the missing data layer for dexterous robotics. Our wearable EMG technology captures human intent, effort and force directly from muscle activity as people demonstrate physical tasks. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Software developer"
     ],
     "src": "https://www.axonnic.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.axonnic.com/"
    },
    "image": {
     "v": "/logos/axonnic.png",
     "fit": "contain",
     "src": "https://www.axonnic.com/icon.svg?icon.0dohf-617a98m.svg?dpl=dpl_DtYBq9fd4xSkCDoTGmadmD5dx4nW",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/axonnic",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/axonnic",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/axonnic"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "theseus-robotics",
   "name": "Theseus Robotics",
   "summary": "Humanoids to restock retail shelves & pick orders.",
   "body": "Theseus Robotics creates the OS & Physical AI to deploys humanoids to automate menial tasks in supermarkets. During the day, our robotics pick orders for e-grocery orders. Overnight, they restocks shelves with goods from the back warehouse. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://theseus.bot/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://theseus.bot/"
    },
    "image": {
     "v": "/logos/theseus-robotics.png",
     "fit": "contain",
     "src": "https://theseus.bot/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "Zurich",
     "src": "https://theseus.bot/contact",
     "asof": "2026-11"
    },
    "country": {
     "v": "Switzerland",
     "src": "https://theseus.bot/contact",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zürich, Switzerland",
       "lat": 47.374449,
       "lon": 8.541042,
       "src": "https://theseus.bot/contact"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nines",
   "name": "Nines",
   "summary": "Robot pit crew for AI data centers.",
   "body": "Nines builds autonomous robots, and the models that run them, for data centers. The AI buildout is the biggest construction project of our lifetime, and the physical work inside it is still done by hand. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Robot maker"
     ],
     "src": "https://ninesrobotics.ai/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ninesrobotics.ai/"
    },
    "image": {
     "v": "/logos/nines.png",
     "fit": "contain",
     "src": "https://ninesrobotics.ai/icon.svg?icon.3q9-xm4c_kjil.svg",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/nines",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/nines",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/nines"
      }
     ],
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mantle-machines",
   "name": "Mantle Machines",
   "summary": "The pit crew for machines and robots.",
   "body": "Mantle is a full-stack field service company that deploys, fixes and maintains machines for the companies that build them. Y Combinator Fall 2026 company.",
   "data": {
    "roles": {
     "v": [
      "Integrator"
     ],
     "src": "https://www.mantlemachines.com/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mantlemachines.com/"
    },
    "image": {
     "v": "/logos/mantle-machines.png",
     "fit": "contain",
     "src": "https://www.mantlemachines.com/apple-touch-icon.png",
     "asof": "2026-11"
    },
    "city": {
     "v": "San Francisco",
     "src": "https://www.ycombinator.com/companies/mantle-machines",
     "asof": "2026-11"
    },
    "country": {
     "v": "United States",
     "src": "https://www.ycombinator.com/companies/mantle-machines",
     "asof": "2026-11"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "San Francisco, CA, United States",
       "lat": 37.787936,
       "lon": -122.40752,
       "src": "https://www.ycombinator.com/companies/mantle-machines"
      }
     ],
     "asof": "2026-11"
    }
   }
  }
 ],
 "orgData": []
};
