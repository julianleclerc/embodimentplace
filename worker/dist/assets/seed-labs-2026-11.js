// Content seed for the Academia page, 2026-11-28. Research labs become their own record type ("lab", linked to the
// university with "parent") instead of Catalogue products: labMove converts the labs added by seed-study-2026-11.js,
// labs adds three labs that seed skipped because another lab had the same name, and labHeads fills each lab's Head
// (from the lab's own website, as of November 2026; left empty where it was not clear). Papers are not seeded: they
// come from OpenAlex through epLabPapersCron. Imported once by epSeedCron in index.js; see CHANGELOG.md.
export const EP_SEED_LABS_2026_11 = {
 "id": "labs-2026-11",
 "note": "Research labs moved to their own record type (Academia), November 2026",
 "asof": "2026-11",
 "labMove": true,
 "labs": [
  {
   "uni": "epfl",
   "uni_name": "EPFL",
   "name": "EPFL Biorobotics Lab",
   "summary": "Bio-inspired locomotion robots.",
   "data": {
    "focus": {
     "v": [
      "Bio-inspired robots",
      "Legged locomotion"
     ],
     "src": "https://www.epfl.ch/labs/biorob/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.epfl.ch/labs/biorob/",
     "src": "https://www.epfl.ch/labs/biorob/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "eth-zurich",
   "uni_name": "ETH Zurich",
   "name": "ETH Autonomous Systems Lab",
   "summary": "Mobile robots, drones and mapping.",
   "data": {
    "focus": {
     "v": [
      "Aerial robots",
      "SLAM",
      "Field robots"
     ],
     "src": "https://asl.ethz.ch/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://asl.ethz.ch/",
     "src": "https://asl.ethz.ch/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "politecnico-di-milano",
   "uni_name": "Politecnico di Milano",
   "name": "Polimi AIRLab",
   "summary": "AI and robotics lab.",
   "data": {
    "focus": {
     "v": [
      "Robot learning",
      "Field robots"
     ],
     "src": "https://airlab.deib.polimi.it/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://airlab.deib.polimi.it/",
     "src": "https://airlab.deib.polimi.it/",
     "asof": "2026-11"
    }
   }
  }
 ],
 "labHeads": [
  {
   "name": "Learning Systems and Robotics Lab",
   "head": "Angela Schoellig",
   "src": "https://www.ce.cit.tum.de/lsy/"
  },
  {
   "name": "Computer Vision Group",
   "head": "Daniel Cremers",
   "src": "https://cvg.cit.tum.de/"
  },
  {
   "name": "Robotics Institute",
   "head": "Matthew Johnson-Roberson",
   "src": "https://www.ri.cmu.edu/"
  },
  {
   "name": "Biorobotics Lab",
   "head": "Howie Choset",
   "src": "https://biorobotics.org/"
  },
  {
   "name": "AirLab",
   "head": "Sebastian Scherer",
   "src": "https://theairlab.org/"
  },
  {
   "name": "MIT CSAIL",
   "head": "Daniela Rus",
   "src": "https://www.csail.mit.edu/"
  },
  {
   "name": "Biomimetic Robotics Lab",
   "head": "Sangbae Kim",
   "src": "https://biomimetics.mit.edu/"
  },
  {
   "name": "Learning and Intelligent Systems Group",
   "head": "Leslie Pack Kaelbling, Tomás Lozano-Pérez",
   "src": "https://lis.csail.mit.edu/"
  },
  {
   "name": "Robot Locomotion Group",
   "head": "Russ Tedrake",
   "src": "https://locomotion.csail.mit.edu/"
  },
  {
   "name": "Kumar Robotics",
   "head": "Vijay Kumar",
   "src": "https://www.kumarrobotics.org/"
  },
  {
   "name": "ModLab",
   "head": "Mark Yim",
   "src": "https://www.modlabupenn.org/"
  },
  {
   "name": "AUTOLAB",
   "head": "Ken Goldberg",
   "src": "https://autolab.berkeley.edu/"
  },
  {
   "name": "Hybrid Robotics",
   "head": "Koushil Sreenath",
   "src": "https://hybrid-robotics.berkeley.edu/"
  },
  {
   "name": "Robotic AI and Learning Lab (RAIL)",
   "head": "Sergey Levine",
   "src": "https://rail.eecs.berkeley.edu/"
  },
  {
   "name": "JSK Robotics Lab",
   "head": "Kei Okada",
   "src": "https://www.jsk.t.u-tokyo.ac.jp/"
  },
  {
   "name": "Matsuo-Iwasawa Lab",
   "head": "Yutaka Matsuo",
   "src": "https://weblab.t.u-tokyo.ac.jp/"
  },
  {
   "name": "Human Centered Robotics Lab",
   "head": "Luis Sentis",
   "src": "https://sites.utexas.edu/hcrl/"
  },
  {
   "name": "Robot Perception and Learning Lab",
   "head": "Yuke Zhu",
   "src": "https://ut-austin-rpl.github.io/"
  },
  {
   "name": "MBZUAI Robotics Department",
   "head": "Yoshihiko Nakamura",
   "src": "https://mbzuai.ac.ae/"
  },
  {
   "name": "Interactive Perception and Robot Learning Lab",
   "head": "Jeannette Bohg",
   "src": "https://iprl.stanford.edu/"
  },
  {
   "name": "Stanford Vision and Learning Lab",
   "head": "Fei-Fei Li",
   "src": "https://svl.stanford.edu/"
  },
  {
   "name": "Autonomous Systems Lab",
   "head": "Marco Pavone",
   "src": "https://stanfordasl.github.io/"
  },
  {
   "name": "IRIS Lab",
   "head": "Chelsea Finn",
   "src": "https://irislab.stanford.edu/"
  },
  {
   "name": "Perception and Robotics Group",
   "head": "Yiannis Aloimonos",
   "src": "https://prg.cs.umd.edu/"
  },
  {
   "name": "GAMMA",
   "head": "Dinesh Manocha",
   "src": "https://gamma.umd.edu/"
  },
  {
   "name": "Existential Robotics Lab",
   "head": "Nikolay Atanasov",
   "src": "https://existentialrobotics.org/"
  },
  {
   "name": "Advanced Robotics and Controls Lab",
   "head": "Michael Yip",
   "src": "https://www.ucsdarclab.com/"
  },
  {
   "name": "Dynamic Robotic Systems Lab",
   "head": "Jaeheung Park",
   "src": "https://dyros.snu.ac.kr/"
  },
  {
   "name": "Soft Robotics and Bionics Lab",
   "head": "Yong-Lae Park",
   "src": "https://softrobotics.snu.ac.kr/"
  },
  {
   "name": "Ames Group (AMBER)",
   "head": "Aaron D. Ames",
   "src": "https://www.ames.caltech.edu/"
  },
  {
   "name": "Statistical Learning and Motor Control Group",
   "head": "Sethu Vijayakumar",
   "src": "https://informatics.ed.ac.uk/slmc"
  },
  {
   "name": "High Performance Humanoid Technologies (H2T)",
   "head": "Tamim Asfour",
   "src": "https://h2t.iar.kit.edu/"
  },
  {
   "name": "Organic Robotics Lab",
   "head": "Robert F. Shepherd",
   "src": "https://orl.mae.cornell.edu/"
  },
  {
   "name": "EmPRISE Lab",
   "head": "Tapomayukh Bhattacharjee",
   "src": "https://emprise.cs.cornell.edu/"
  },
  {
   "name": "PRACSYS Lab",
   "head": "Kostas E. Bekris",
   "src": "https://pracsys.cs.rutgers.edu/"
  },
  {
   "name": "Dynamic Robot Control and Design Lab",
   "head": "Hae-Won Park",
   "src": "https://dynamicrobot.kaist.ac.kr/"
  },
  {
   "name": "Robotics and Artificial Intelligence Lab",
   "head": "Jemin Hwangbo",
   "src": "https://railab.kaist.ac.kr/"
  },
  {
   "name": "Urban Robotics Lab",
   "head": "Hyun Myung",
   "src": "https://urobot.kaist.ac.kr/"
  },
  {
   "name": "Robot Intelligence Lab",
   "head": "Petar Kormushev",
   "src": "https://www.imperial.ac.uk/robot-intelligence/"
  },
  {
   "name": "Dyson Robotics Lab",
   "head": "Andrew J. Davison",
   "src": "https://www.imperial.ac.uk/dyson-robotics-lab/"
  },
  {
   "name": "Aerial Robotics Lab",
   "head": "Mirko Kovac",
   "src": "https://www.imperial.ac.uk/aerial-robotics/"
  },
  {
   "name": "Robotics and Biology Lab",
   "head": "Oliver Brock",
   "src": "https://www.tu.berlin/robotics"
  },
  {
   "name": "Helping Hands Lab",
   "head": "Robert Platt",
   "src": "https://www2.ccs.neu.edu/research/helpinghands/"
  },
  {
   "name": "MARS Lab",
   "head": "Stergios I. Roumeliotis",
   "src": "https://mars.cs.umn.edu/"
  },
  {
   "name": "Robotic Embedded Systems Lab",
   "head": "Gaurav S. Sukhatme",
   "src": "https://robotics.usc.edu/resl/"
  },
  {
   "name": "Interaction Lab",
   "head": "Maja J. Matarić",
   "src": "https://uscinteractionlab.web.app/"
  },
  {
   "name": "Autonomous Intelligent Systems",
   "head": "Sven Behnke",
   "src": "https://www.ais.uni-bonn.de/"
  },
  {
   "name": "Photogrammetry and Robotics Lab",
   "head": "Cyrill Stachniss",
   "src": "https://www.ipb.uni-bonn.de/"
  },
  {
   "name": "Humanoid Robots Lab",
   "head": "Maren Bennewitz",
   "src": "https://www.hrl.uni-bonn.de/"
  },
  {
   "name": "Personal Robotics Lab",
   "head": "Siddhartha S. Srinivasa",
   "src": "https://personalrobotics.cs.washington.edu/"
  },
  {
   "name": "EPIC Lab",
   "head": "He Wang",
   "src": "https://pku-epic.github.io/"
  },
  {
   "name": "Multi-robot Systems Group",
   "head": "Martin Saska",
   "src": "https://mrs.fel.cvut.cz/"
  },
  {
   "name": "Intelligent Autonomous Systems",
   "head": "Jan Peters",
   "src": "https://www.ias.informatik.tu-darmstadt.de/"
  },
  {
   "name": "Simulation, Systems Optimization and Robotics Group",
   "head": "Oskar von Stryk",
   "src": "https://www.sim.informatik.tu-darmstadt.de/"
  },
  {
   "name": "Autonomous Robotics and Perception Group",
   "head": "Christoffer Heckman",
   "src": "https://arpg.colorado.edu/"
  },
  {
   "name": "Interactive Robotics Lab",
   "head": "Heni Ben Amor",
   "src": "https://interactive-robotics.engineering.asu.edu/"
  },
  {
   "name": "HKUST Aerial Robotics Group",
   "head": "Shaojie Shen",
   "src": "https://uav.hkust.edu.hk/"
  },
  {
   "name": "Humans To Robots Lab",
   "head": "Stefanie Tellex",
   "src": "https://h2r.cs.brown.edu/"
  },
  {
   "name": "GRAB Lab",
   "head": "Aaron M. Dollar",
   "src": "https://www.eng.yale.edu/grablab/"
  },
  {
   "name": "Learning Algorithms and Systems Lab (LASA)",
   "head": "Aude Billard",
   "src": "https://www.epfl.ch/labs/lasa/"
  },
  {
   "name": "EPFL Biorobotics Lab",
   "head": "Auke Jan Ijspeert",
   "src": "https://www.epfl.ch/labs/biorob/"
  },
  {
   "name": "Laboratory of Intelligent Systems",
   "head": "Dario Floreano",
   "src": "https://www.epfl.ch/labs/lis/"
  },
  {
   "name": "Reconfigurable Robotics Lab",
   "head": "Jamie Paik",
   "src": "https://www.epfl.ch/labs/rrl/"
  },
  {
   "name": "FAST Lab",
   "head": "Fei Gao",
   "src": "https://zju-fast.com/"
  },
  {
   "name": "Machine Vision and Intelligence Group (MVIG)",
   "head": "Cewu Lu",
   "src": "https://www.mvig.org/"
  },
  {
   "name": "Robotic Systems Lab",
   "head": "Marco Hutter",
   "src": "https://rsl.ethz.ch/"
  },
  {
   "name": "ETH Autonomous Systems Lab",
   "head": "Roland Siegwart",
   "src": "https://asl.ethz.ch/"
  },
  {
   "name": "Computational Robotics Lab",
   "head": "Stelian Coros",
   "src": "https://crl.ethz.ch/"
  },
  {
   "name": "Soft Robotics Lab",
   "head": "Robert K. Katzschmann",
   "src": "https://srl.ethz.ch/"
  },
  {
   "name": "Prorok Lab",
   "head": "Amanda Prorok",
   "src": "https://proroklab.org/"
  },
  {
   "name": "Bio-Inspired Robotics Lab",
   "head": "Fumiya Iida",
   "src": "https://birlab.org/"
  },
  {
   "name": "Harvard Microrobotics Lab",
   "head": "Robert J. Wood",
   "src": "https://www.micro.seas.harvard.edu/"
  },
  {
   "name": "Harvard Biodesign Lab",
   "head": "Conor J. Walsh",
   "src": "https://biodesign.seas.harvard.edu/"
  },
  {
   "name": "RoMeLa",
   "head": "Dennis Hong",
   "src": "https://www.romela.org/"
  },
  {
   "name": "Robotics, Perception and Learning",
   "head": "Danica Kragic",
   "src": "https://www.kth.se/is/rpl"
  },
  {
   "name": "PIC4SeR",
   "head": "Marcello Chiaberge",
   "src": "https://pic4ser.polito.it/"
  },
  {
   "name": "Laboratory for Perceptual Robotics",
   "head": "Roderic A. Grupen",
   "src": "https://www-robotics.cs.umass.edu/"
  }
 ]
};
