// Content seed for the Study tab, 2026-11-28: robotics ranking inputs for universities and their research labs.
// rank_csr = CSRankings robotics (ICRA, IROS, RSS), 2016-2026, sum of adjusted paper counts and number of faculty,
// computed from CSRankings' open data (generated-author-info.csv). rank_qs_mech = QS World University Rankings by Subject
// 2025, Mechanical, Aeronautical & Manufacturing Engineering. Labs were added as Catalogue products (kind Research lab)
// linked with "maker"; seed-labs-2026-11.js turns them into "lab" records. Universities missing from the site are added as organisations. Imported once by
// epSeedCron in index.js; see CHANGELOG.md.
export const EP_SEED_STUDY_2026_11 = {
 "id": "study-2026-11",
 "note": "Imported with the Study tab (university robotics ranking and research labs), November 2026",
 "newOrgs": [
  {
   "slug": "carnegie-mellon-university",
   "name": "Carnegie Mellon University",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.cmu.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.cmu.edu/"
    },
    "city": {
     "v": "Pittsburgh"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pittsburgh, United States",
       "lat": 40.4433,
       "lon": -79.9436
      }
     ]
    },
    "rank_csr": {
     "v": 98.4,
     "faculty": 42,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 53,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "massachusetts-institute-of-technology",
   "name": "Massachusetts Institute of Technology",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.mit.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.mit.edu/"
    },
    "city": {
     "v": "Cambridge"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Cambridge, United States",
       "lat": 42.3601,
       "lon": -71.0942
      }
     ]
    },
    "rank_csr": {
     "v": 87.0,
     "faculty": 22,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 1,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-pennsylvania",
   "name": "University of Pennsylvania",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.upenn.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.upenn.edu/"
    },
    "city": {
     "v": "Philadelphia"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Philadelphia, United States",
       "lat": 39.9522,
       "lon": -75.1932
      }
     ]
    },
    "rank_csr": {
     "v": 84.4,
     "faculty": 19,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 84,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "georgia-institute-of-technology",
   "name": "Georgia Institute of Technology",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.gatech.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.gatech.edu/"
    },
    "city": {
     "v": "Atlanta"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Atlanta, United States",
       "lat": 33.7756,
       "lon": -84.3963
      }
     ]
    },
    "rank_csr": {
     "v": 82.6,
     "faculty": 30,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 17,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-california-berkeley",
   "name": "University of California, Berkeley",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.berkeley.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.berkeley.edu/"
    },
    "city": {
     "v": "Berkeley"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Berkeley, United States",
       "lat": 37.8719,
       "lon": -122.2585
      }
     ]
    },
    "rank_csr": {
     "v": 76.4,
     "faculty": 23,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 11,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-texas-at-austin",
   "name": "University of Texas at Austin",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.utexas.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.utexas.edu/"
    },
    "city": {
     "v": "Austin"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Austin, United States",
       "lat": 30.2849,
       "lon": -97.7341
      }
     ]
    },
    "rank_csr": {
     "v": 63.7,
     "faculty": 16,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 33,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "stanford-university",
   "name": "Stanford University",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.stanford.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.stanford.edu/"
    },
    "city": {
     "v": "Stanford"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Stanford, United States",
       "lat": 37.4275,
       "lon": -122.1697
      }
     ]
    },
    "rank_csr": {
     "v": 61.5,
     "faculty": 13,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 2,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "california-institute-of-technology",
   "name": "California Institute of Technology",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.caltech.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.caltech.edu/"
    },
    "city": {
     "v": "Pasadena"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Pasadena, United States",
       "lat": 34.1377,
       "lon": -118.1253
      }
     ]
    },
    "rank_csr": {
     "v": 46.2,
     "faculty": 9,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 18,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-edinburgh",
   "name": "University of Edinburgh",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.ed.ac.uk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ed.ac.uk/"
    },
    "city": {
     "v": "Edinburgh"
    },
    "country": {
     "v": "United Kingdom"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Edinburgh, United Kingdom",
       "lat": 55.9445,
       "lon": -3.1892
      }
     ]
    },
    "rank_csr": {
     "v": 44.7,
     "faculty": 18,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 94,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "queensland-university-of-technology",
   "name": "Queensland University of Technology",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.qut.edu.au/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.qut.edu.au/"
    },
    "city": {
     "v": "Brisbane"
    },
    "country": {
     "v": "Australia"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Brisbane, Australia",
       "lat": -27.4772,
       "lon": 153.028
      }
     ]
    },
    "rank_csr": {
     "v": 41.2,
     "faculty": 20,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-bonn",
   "name": "University of Bonn",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.uni-bonn.de/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.uni-bonn.de/"
    },
    "city": {
     "v": "Bonn"
    },
    "country": {
     "v": "Germany"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Bonn, Germany",
       "lat": 50.7339,
       "lon": 7.1022
      }
     ]
    },
    "rank_csr": {
     "v": 33.9,
     "faculty": 7,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "johns-hopkins-university",
   "name": "Johns Hopkins University",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.jhu.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.jhu.edu/"
    },
    "city": {
     "v": "Baltimore"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Baltimore, United States",
       "lat": 39.3299,
       "lon": -76.6205
      }
     ]
    },
    "rank_csr": {
     "v": 32.9,
     "faculty": 22,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-toronto",
   "name": "University of Toronto",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.utoronto.ca/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.utoronto.ca/"
    },
    "city": {
     "v": "Toronto"
    },
    "country": {
     "v": "Canada"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Toronto, Canada",
       "lat": 43.6629,
       "lon": -79.3957
      }
     ]
    },
    "rank_csr": {
     "v": 30.1,
     "faculty": 11,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 38,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "eth-zurich",
   "name": "ETH Zurich",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://ethz.ch/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://ethz.ch/"
    },
    "city": {
     "v": "Zurich"
    },
    "country": {
     "v": "Switzerland"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Zurich, Switzerland",
       "lat": 47.3763,
       "lon": 8.5477
      }
     ]
    },
    "rank_csr": {
     "v": 19.0,
     "faculty": 11,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 6,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-oxford",
   "name": "University of Oxford",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.ox.ac.uk/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ox.ac.uk/"
    },
    "city": {
     "v": "Oxford"
    },
    "country": {
     "v": "United Kingdom"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Oxford, United Kingdom",
       "lat": 51.7548,
       "lon": -1.2544
      }
     ]
    },
    "rank_csr": {
     "v": 16.1,
     "faculty": 12,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 8,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-california-los-angeles",
   "name": "University of California, Los Angeles",
   "summary": "",
   "body": "",
   "data": {
    "roles": {
     "v": [
      "University"
     ],
     "src": "https://www.ucla.edu/",
     "asof": "2026-11"
    },
    "website": {
     "v": "https://www.ucla.edu/"
    },
    "city": {
     "v": "Los Angeles"
    },
    "country": {
     "v": "United States"
    },
    "locations": {
     "v": [
      {
       "kind": "HQ",
       "address": "Los Angeles, United States",
       "lat": 34.0689,
       "lon": -118.4452
      }
     ]
    },
    "rank_csr": {
     "v": 4.8,
     "faculty": 8,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 24,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  }
 ],
 "orgData": [
  {
   "slug": "technical-university-of-munich",
   "data": {
    "rank_csr": {
     "v": 103.4,
     "faculty": 27,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 25,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-tokyo",
   "data": {
    "rank_csr": {
     "v": 66.0,
     "faculty": 16,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 21,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "mohamed-bin-zayed-university-of-artificial-intelligence",
   "data": {
    "rank_csr": {
     "v": 62.5,
     "faculty": 26,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-maryland",
   "data": {
    "rank_csr": {
     "v": 55.7,
     "faculty": 18,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tsinghua-university",
   "data": {
    "rank_csr": {
     "v": 54.8,
     "faculty": 41,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 7,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "uc-san-diego",
   "data": {
    "rank_csr": {
     "v": 52.4,
     "faculty": 20,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 78,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "seoul-national-university",
   "data": {
    "rank_csr": {
     "v": 52.3,
     "faculty": 21,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 21,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "karlsruhe-institute-of-technology",
   "data": {
    "rank_csr": {
     "v": 40.7,
     "faculty": 11,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 45,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "cornell-university",
   "data": {
    "rank_csr": {
     "v": 40.5,
     "faculty": 20,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 53,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rutgers-university",
   "data": {
    "rank_csr": {
     "v": 39.9,
     "faculty": 10,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "texas-am-university",
   "data": {
    "rank_csr": {
     "v": 39.1,
     "faculty": 13,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 39,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kaist",
   "data": {
    "rank_csr": {
     "v": 39.1,
     "faculty": 25,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 27,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "uiuc",
   "data": {
    "rank_csr": {
     "v": 38.2,
     "faculty": 23,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 35,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "imperial-college-london",
   "data": {
    "rank_csr": {
     "v": 37.2,
     "faculty": 14,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 9,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "technische-universität-berlin",
   "data": {
    "rank_csr": {
     "v": 36.1,
     "faculty": 7,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 56,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "northeastern-university",
   "data": {
    "rank_csr": {
     "v": 35.8,
     "faculty": 14,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-minnesota",
   "data": {
    "rank_csr": {
     "v": 35.3,
     "faculty": 13,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-southern-california",
   "data": {
    "rank_csr": {
     "v": 34.8,
     "faculty": 18,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "purdue-university",
   "data": {
    "rank_csr": {
     "v": 32.9,
     "faculty": 19,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 19,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-washington",
   "data": {
    "rank_csr": {
     "v": 32.7,
     "faculty": 18,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "peking-university",
   "data": {
    "rank_csr": {
     "v": 32.3,
     "faculty": 29,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 20,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "czech-technical-university-in-prague",
   "data": {
    "rank_csr": {
     "v": 31.2,
     "faculty": 14,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tu-darmstadt",
   "data": {
    "rank_csr": {
     "v": 30.7,
     "faculty": 8,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "national-university-of-singapore",
   "data": {
    "rank_csr": {
     "v": 27.1,
     "faculty": 13,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 9,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-colorado-boulder",
   "data": {
    "rank_csr": {
     "v": 26.8,
     "faculty": 12,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "arizona-state-university",
   "data": {
    "rank_csr": {
     "v": 25.5,
     "faculty": 14,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "hkust",
   "data": {
    "rank_csr": {
     "v": 23.5,
     "faculty": 16,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 42,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "the-chinese-university-of-hong-kong",
   "data": {
    "rank_csr": {
     "v": 22.6,
     "faculty": 8,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 84,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "brown-university",
   "data": {
    "rank_csr": {
     "v": 24.0,
     "faculty": 8,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "yale-university",
   "data": {
    "rank_csr": {
     "v": 21.8,
     "faculty": 8,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 69,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "northwestern-university",
   "data": {
    "rank_csr": {
     "v": 22.7,
     "faculty": 13,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 39,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "epfl",
   "data": {
    "rank_csr": {
     "v": 22.7,
     "faculty": 7,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 16,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-michigan",
   "data": {
    "rank_csr": {
     "v": 22.4,
     "faculty": 13,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 14,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "harbin-institute-of-technology",
   "data": {
    "rank_csr": {
     "v": 22.1,
     "faculty": 23,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 36,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "zhejiang-university",
   "data": {
    "rank_csr": {
     "v": 21.7,
     "faculty": 18,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 28,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "shanghai-jiao-tong-university",
   "data": {
    "rank_csr": {
     "v": 19.7,
     "faculty": 28,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 15,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-cambridge",
   "data": {
    "rank_csr": {
     "v": 9.4,
     "faculty": 7,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 3,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "nanyang-technological-university",
   "data": {
    "rank_csr": {
     "v": 14.6,
     "faculty": 19,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 4,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "harvard-university",
   "data": {
    "rank_csr": {
     "v": 6.4,
     "faculty": 2,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 5,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "politecnico-di-milano",
   "data": {
    "rank_csr": {
     "v": 5.5,
     "faculty": 5,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 12,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "tu-delft",
   "data": {
    "rank_csr": {
     "v": 1.7,
     "faculty": 6,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 13,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "rwth-aachen-university",
   "data": {
    "rank_csr": {
     "v": 9.3,
     "faculty": 4,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 23,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "kth",
   "data": {
    "rank_csr": {
     "v": 15.0,
     "faculty": 5,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 25,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-manchester",
   "data": {
    "rank_csr": {
     "v": 4.9,
     "faculty": 5,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 29,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "politecnico-di-torino",
   "data": {
    "rank_qs_mech": {
     "v": 30,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "katholieke-universiteit-leuven",
   "data": {
    "rank_csr": {
     "v": 0.4,
     "faculty": 2,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 31,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "technical-university-of-denmark",
   "data": {
    "rank_csr": {
     "v": 0.9,
     "faculty": 2,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 32,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "xian-jiaotong-university",
   "data": {
    "rank_csr": {
     "v": 13.5,
     "faculty": 14,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 37,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "pohang-university-of-science-and-technology",
   "data": {
    "rank_csr": {
     "v": 0.8,
     "faculty": 3,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    },
    "rank_qs_mech": {
     "v": 39,
     "src": "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering/2025",
     "asof": "2026-11"
    }
   }
  },
  {
   "slug": "university-of-massachusetts-amherst",
   "data": {
    "rank_csr": {
     "v": 24.6,
     "faculty": 11,
     "src": "https://csrankings.org/#/fromyear/2016/toyear/2026/index?robotics&world",
     "data": "https://github.com/emeryberger/CSrankings",
     "asof": "2026-11"
    }
   }
  }
 ],
 "labs": [
  {
   "uni": "technical-university-of-munich",
   "uni_name": "Technical University of Munich",
   "name": "Munich Institute of Robotics and Machine Intelligence (MIRMI)",
   "summary": "TUM's integrative research centre for robotics and machine intelligence.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.mirmi.tum.de/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Medical robots",
      "Robot learning"
     ],
     "src": "https://www.mirmi.tum.de/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.mirmi.tum.de/",
     "src": "https://www.mirmi.tum.de/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "technical-university-of-munich",
   "uni_name": "Technical University of Munich",
   "name": "Learning Systems and Robotics Lab",
   "summary": "Safe learning-based control for robots and drones.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ce.cit.tum.de/lsy/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Aerial robots",
      "Control"
     ],
     "src": "https://www.ce.cit.tum.de/lsy/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ce.cit.tum.de/lsy/",
     "src": "https://www.ce.cit.tum.de/lsy/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "technical-university-of-munich",
   "uni_name": "Technical University of Munich",
   "name": "Computer Vision Group",
   "summary": "Visual SLAM, 3D reconstruction and scene understanding.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://cvg.cit.tum.de/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Perception",
      "SLAM"
     ],
     "src": "https://cvg.cit.tum.de/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://cvg.cit.tum.de/",
     "src": "https://cvg.cit.tum.de/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "carnegie-mellon-university",
   "uni_name": "Carnegie Mellon University",
   "name": "Robotics Institute",
   "summary": "One of the largest university robotics departments, with its own Robotics degrees.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ri.cmu.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Field robots",
      "Manipulation"
     ],
     "src": "https://www.ri.cmu.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ri.cmu.edu/",
     "src": "https://www.ri.cmu.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "carnegie-mellon-university",
   "uni_name": "Carnegie Mellon University",
   "name": "Field Robotics Center",
   "summary": "Robots for mining, agriculture, space and outdoor work.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://frc.ri.cmu.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Autonomous driving"
     ],
     "src": "https://frc.ri.cmu.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://frc.ri.cmu.edu/",
     "src": "https://frc.ri.cmu.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "carnegie-mellon-university",
   "uni_name": "Carnegie Mellon University",
   "name": "Biorobotics Lab",
   "summary": "Snake robots, modular robots and locomotion.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://biorobotics.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Snake robots",
      "Legged locomotion"
     ],
     "src": "https://biorobotics.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://biorobotics.org/",
     "src": "https://biorobotics.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "carnegie-mellon-university",
   "uni_name": "Carnegie Mellon University",
   "name": "AirLab",
   "summary": "Autonomous aerial and ground robots in hard environments.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://theairlab.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Field robots"
     ],
     "src": "https://theairlab.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://theairlab.org/",
     "src": "https://theairlab.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "massachusetts-institute-of-technology",
   "uni_name": "Massachusetts Institute of Technology",
   "name": "MIT CSAIL",
   "summary": "MIT's largest research lab, home to many robotics groups.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.csail.mit.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Manipulation",
      "Perception"
     ],
     "src": "https://www.csail.mit.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.csail.mit.edu/",
     "src": "https://www.csail.mit.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "massachusetts-institute-of-technology",
   "uni_name": "Massachusetts Institute of Technology",
   "name": "Biomimetic Robotics Lab",
   "summary": "Dynamic legged robots such as the MIT Mini Cheetah.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://biomimetics.mit.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Legged locomotion",
      "Actuators"
     ],
     "src": "https://biomimetics.mit.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://biomimetics.mit.edu/",
     "src": "https://biomimetics.mit.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "massachusetts-institute-of-technology",
   "uni_name": "Massachusetts Institute of Technology",
   "name": "Learning and Intelligent Systems Group",
   "summary": "Task and motion planning with learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://lis.csail.mit.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Planning"
     ],
     "src": "https://lis.csail.mit.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://lis.csail.mit.edu/",
     "src": "https://lis.csail.mit.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "massachusetts-institute-of-technology",
   "uni_name": "Massachusetts Institute of Technology",
   "name": "Robot Locomotion Group",
   "summary": "Optimisation-based control and manipulation.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://locomotion.csail.mit.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Control",
      "Manipulation",
      "Legged locomotion"
     ],
     "src": "https://locomotion.csail.mit.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://locomotion.csail.mit.edu/",
     "src": "https://locomotion.csail.mit.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-pennsylvania",
   "uni_name": "University of Pennsylvania",
   "name": "GRASP Lab",
   "summary": "Penn's interdisciplinary robotics lab, home of the ROBO master's.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.grasp.upenn.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Perception",
      "Manipulation"
     ],
     "src": "https://www.grasp.upenn.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.grasp.upenn.edu/",
     "src": "https://www.grasp.upenn.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-pennsylvania",
   "uni_name": "University of Pennsylvania",
   "name": "Kumar Robotics",
   "summary": "Aerial robot swarms and autonomous flight.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.kumarrobotics.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Multi-robot"
     ],
     "src": "https://www.kumarrobotics.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.kumarrobotics.org/",
     "src": "https://www.kumarrobotics.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-pennsylvania",
   "uni_name": "University of Pennsylvania",
   "name": "ModLab",
   "summary": "Modular and reconfigurable robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.modlabupenn.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Modular robots",
      "Legged locomotion"
     ],
     "src": "https://www.modlabupenn.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.modlabupenn.org/",
     "src": "https://www.modlabupenn.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "georgia-institute-of-technology",
   "uni_name": "Georgia Institute of Technology",
   "name": "Institute for Robotics and Intelligent Machines (IRIM)",
   "summary": "Georgia Tech's robotics research institute and home of its Robotics PhD.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.gatech.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Field robots",
      "Human-robot interaction"
     ],
     "src": "https://robotics.gatech.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.gatech.edu/",
     "src": "https://robotics.gatech.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "georgia-institute-of-technology",
   "uni_name": "Georgia Institute of Technology",
   "name": "Robotarium",
   "summary": "A remotely accessible swarm robotics testbed.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.robotarium.gatech.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Multi-robot",
      "Control"
     ],
     "src": "https://www.robotarium.gatech.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.robotarium.gatech.edu/",
     "src": "https://www.robotarium.gatech.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-california-berkeley",
   "uni_name": "University of California, Berkeley",
   "name": "Berkeley Artificial Intelligence Research (BAIR)",
   "summary": "Berkeley's AI lab, a leader in robot learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://bair.berkeley.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Perception"
     ],
     "src": "https://bair.berkeley.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://bair.berkeley.edu/",
     "src": "https://bair.berkeley.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-california-berkeley",
   "uni_name": "University of California, Berkeley",
   "name": "AUTOLAB",
   "summary": "Grasping, cloud robotics and surgical robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://autolab.berkeley.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Manipulation",
      "Medical robots"
     ],
     "src": "https://autolab.berkeley.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://autolab.berkeley.edu/",
     "src": "https://autolab.berkeley.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-california-berkeley",
   "uni_name": "University of California, Berkeley",
   "name": "Hybrid Robotics",
   "summary": "Dynamic legged robots and humanoids.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://hybrid-robotics.berkeley.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Legged locomotion",
      "Humanoids",
      "Control"
     ],
     "src": "https://hybrid-robotics.berkeley.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://hybrid-robotics.berkeley.edu/",
     "src": "https://hybrid-robotics.berkeley.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-california-berkeley",
   "uni_name": "University of California, Berkeley",
   "name": "Robotic AI and Learning Lab (RAIL)",
   "summary": "Reinforcement learning and generalist robot policies.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://rail.eecs.berkeley.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning"
     ],
     "src": "https://rail.eecs.berkeley.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://rail.eecs.berkeley.edu/",
     "src": "https://rail.eecs.berkeley.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-tokyo",
   "uni_name": "University of Tokyo",
   "name": "JSK Robotics Lab",
   "summary": "Humanoid and life-support robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.jsk.t.u-tokyo.ac.jp/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Manipulation"
     ],
     "src": "https://www.jsk.t.u-tokyo.ac.jp/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.jsk.t.u-tokyo.ac.jp/",
     "src": "https://www.jsk.t.u-tokyo.ac.jp/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-tokyo",
   "uni_name": "University of Tokyo",
   "name": "Matsuo-Iwasawa Lab",
   "summary": "Deep learning and world models, including for robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://weblab.t.u-tokyo.ac.jp/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "AI"
     ],
     "src": "https://weblab.t.u-tokyo.ac.jp/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://weblab.t.u-tokyo.ac.jp/",
     "src": "https://weblab.t.u-tokyo.ac.jp/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-texas-at-austin",
   "uni_name": "University of Texas at Austin",
   "name": "Texas Robotics",
   "summary": "UT Austin's cross-department robotics hub and robotics portfolio programme.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.utexas.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Humanoids",
      "Field robots"
     ],
     "src": "https://robotics.utexas.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.utexas.edu/",
     "src": "https://robotics.utexas.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-texas-at-austin",
   "uni_name": "University of Texas at Austin",
   "name": "Human Centered Robotics Lab",
   "summary": "Humanoid and legged robot control.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://sites.utexas.edu/hcrl/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Legged locomotion"
     ],
     "src": "https://sites.utexas.edu/hcrl/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://sites.utexas.edu/hcrl/",
     "src": "https://sites.utexas.edu/hcrl/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-texas-at-austin",
   "uni_name": "University of Texas at Austin",
   "name": "Robot Perception and Learning Lab",
   "summary": "Learning general-purpose manipulation.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://ut-austin-rpl.github.io/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Manipulation"
     ],
     "src": "https://ut-austin-rpl.github.io/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://ut-austin-rpl.github.io/",
     "src": "https://ut-austin-rpl.github.io/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "mohamed-bin-zayed-university-of-artificial-intelligence",
   "uni_name": "Mohamed bin Zayed University of Artificial Intelligence",
   "name": "MBZUAI Robotics Department",
   "summary": "Graduate-only AI university with a robotics department (MSc and PhD).",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://mbzuai.ac.ae/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Humanoids"
     ],
     "src": "https://mbzuai.ac.ae/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://mbzuai.ac.ae/",
     "src": "https://mbzuai.ac.ae/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "stanford-university",
   "uni_name": "Stanford University",
   "name": "Stanford AI Lab (SAIL)",
   "summary": "Stanford's AI lab, home to many robotics groups.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://ai.stanford.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Perception"
     ],
     "src": "https://ai.stanford.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://ai.stanford.edu/",
     "src": "https://ai.stanford.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "stanford-university",
   "uni_name": "Stanford University",
   "name": "Interactive Perception and Robot Learning Lab",
   "summary": "Multisensory manipulation and learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://iprl.stanford.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Manipulation",
      "Robot learning"
     ],
     "src": "https://iprl.stanford.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://iprl.stanford.edu/",
     "src": "https://iprl.stanford.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "stanford-university",
   "uni_name": "Stanford University",
   "name": "Stanford Vision and Learning Lab",
   "summary": "Embodied AI, simulation and robot learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://svl.stanford.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Perception",
      "Robot learning",
      "Simulation"
     ],
     "src": "https://svl.stanford.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://svl.stanford.edu/",
     "src": "https://svl.stanford.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "stanford-university",
   "uni_name": "Stanford University",
   "name": "Autonomous Systems Lab",
   "summary": "Planning and control for autonomous vehicles and spacecraft.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://stanfordasl.github.io/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Space robots",
      "Autonomous driving"
     ],
     "src": "https://stanfordasl.github.io/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://stanfordasl.github.io/",
     "src": "https://stanfordasl.github.io/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "stanford-university",
   "uni_name": "Stanford University",
   "name": "IRIS Lab",
   "summary": "Learning from people and interactive robot learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://irislab.stanford.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Human-robot interaction"
     ],
     "src": "https://irislab.stanford.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://irislab.stanford.edu/",
     "src": "https://irislab.stanford.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-maryland",
   "uni_name": "University of Maryland",
   "name": "Maryland Robotics Center",
   "summary": "UMD's robotics centre, with a robotics master's (MEng).",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.umd.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Medical robots",
      "Aerial robots"
     ],
     "src": "https://robotics.umd.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.umd.edu/",
     "src": "https://robotics.umd.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-maryland",
   "uni_name": "University of Maryland",
   "name": "Perception and Robotics Group",
   "summary": "Active perception and neuromorphic vision.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://prg.cs.umd.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Perception",
      "Aerial robots"
     ],
     "src": "https://prg.cs.umd.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://prg.cs.umd.edu/",
     "src": "https://prg.cs.umd.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-maryland",
   "uni_name": "University of Maryland",
   "name": "GAMMA",
   "summary": "Geometric algorithms, navigation and simulation.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://gamma.umd.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Autonomous driving",
      "Simulation"
     ],
     "src": "https://gamma.umd.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://gamma.umd.edu/",
     "src": "https://gamma.umd.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "tsinghua-university",
   "uni_name": "Tsinghua University",
   "name": "Department of Automation",
   "summary": "Control, perception and intelligent systems research.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.au.tsinghua.edu.cn/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Control",
      "Perception"
     ],
     "src": "https://www.au.tsinghua.edu.cn/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.au.tsinghua.edu.cn/",
     "src": "https://www.au.tsinghua.edu.cn/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "tsinghua-university",
   "uni_name": "Tsinghua University",
   "name": "Institute for Interdisciplinary Information Sciences",
   "summary": "Home of several embodied AI and robot learning groups.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://iiis.tsinghua.edu.cn/en/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Embodied AI"
     ],
     "src": "https://iiis.tsinghua.edu.cn/en/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://iiis.tsinghua.edu.cn/en/",
     "src": "https://iiis.tsinghua.edu.cn/en/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "uc-san-diego",
   "uni_name": "UC San Diego",
   "name": "Existential Robotics Lab",
   "summary": "Mapping, planning and learning for autonomous robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://existentialrobotics.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Perception",
      "Planning"
     ],
     "src": "https://existentialrobotics.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://existentialrobotics.org/",
     "src": "https://existentialrobotics.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "uc-san-diego",
   "uni_name": "UC San Diego",
   "name": "Advanced Robotics and Controls Lab",
   "summary": "Surgical robots and control.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ucsdarclab.com/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Medical robots",
      "Control"
     ],
     "src": "https://www.ucsdarclab.com/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ucsdarclab.com/",
     "src": "https://www.ucsdarclab.com/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "seoul-national-university",
   "uni_name": "Seoul National University",
   "name": "Dynamic Robotic Systems Lab",
   "summary": "Humanoids and dynamic robot control.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://dyros.snu.ac.kr/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Control"
     ],
     "src": "https://dyros.snu.ac.kr/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://dyros.snu.ac.kr/",
     "src": "https://dyros.snu.ac.kr/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "seoul-national-university",
   "uni_name": "Seoul National University",
   "name": "Soft Robotics and Bionics Lab",
   "summary": "Soft and bio-inspired robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://softrobotics.snu.ac.kr/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Soft robots"
     ],
     "src": "https://softrobotics.snu.ac.kr/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://softrobotics.snu.ac.kr/",
     "src": "https://softrobotics.snu.ac.kr/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "california-institute-of-technology",
   "uni_name": "California Institute of Technology",
   "name": "Center for Autonomous Systems and Technologies (CAST)",
   "summary": "Caltech's autonomy centre with a large flight arena.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://cast.caltech.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Legged locomotion",
      "Field robots"
     ],
     "src": "https://cast.caltech.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://cast.caltech.edu/",
     "src": "https://cast.caltech.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "california-institute-of-technology",
   "uni_name": "California Institute of Technology",
   "name": "Ames Group (AMBER)",
   "summary": "Bipedal robots, exoskeletons and safety-critical control.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ames.caltech.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Legged locomotion",
      "Humanoids",
      "Control"
     ],
     "src": "https://www.ames.caltech.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ames.caltech.edu/",
     "src": "https://www.ames.caltech.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-edinburgh",
   "uni_name": "University of Edinburgh",
   "name": "Edinburgh Centre for Robotics",
   "summary": "Joint centre with Heriot-Watt, with a robotics PhD training centre.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.edinburgh-robotics.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Field robots"
     ],
     "src": "https://www.edinburgh-robotics.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.edinburgh-robotics.org/",
     "src": "https://www.edinburgh-robotics.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-edinburgh",
   "uni_name": "University of Edinburgh",
   "name": "Statistical Learning and Motor Control Group",
   "summary": "Learning and control for legged robots and humanoids.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://informatics.ed.ac.uk/slmc",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Legged locomotion",
      "Control"
     ],
     "src": "https://informatics.ed.ac.uk/slmc",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://informatics.ed.ac.uk/slmc",
     "src": "https://informatics.ed.ac.uk/slmc",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "queensland-university-of-technology",
   "uni_name": "Queensland University of Technology",
   "name": "QUT Centre for Robotics",
   "summary": "Robotic vision, agriculture and field robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://research.qut.edu.au/qcr/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Perception",
      "Field robots",
      "Robot learning"
     ],
     "src": "https://research.qut.edu.au/qcr/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://research.qut.edu.au/qcr/",
     "src": "https://research.qut.edu.au/qcr/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "karlsruhe-institute-of-technology",
   "uni_name": "Karlsruhe Institute of Technology",
   "name": "High Performance Humanoid Technologies (H2T)",
   "summary": "The ARMAR humanoid robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://h2t.iar.kit.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Manipulation"
     ],
     "src": "https://h2t.iar.kit.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://h2t.iar.kit.edu/",
     "src": "https://h2t.iar.kit.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "karlsruhe-institute-of-technology",
   "uni_name": "Karlsruhe Institute of Technology",
   "name": "Institute for Anthropomatics and Robotics",
   "summary": "KIT's robotics institute.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.iar.kit.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Medical robots",
      "Perception"
     ],
     "src": "https://www.iar.kit.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.iar.kit.edu/",
     "src": "https://www.iar.kit.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "cornell-university",
   "uni_name": "Cornell University",
   "name": "Cornell Robotics",
   "summary": "Cornell's robotics community across departments.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.cornell.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Soft robots",
      "Human-robot interaction"
     ],
     "src": "https://robotics.cornell.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.cornell.edu/",
     "src": "https://robotics.cornell.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "cornell-university",
   "uni_name": "Cornell University",
   "name": "Organic Robotics Lab",
   "summary": "Soft robots and stretchable sensors.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://orl.mae.cornell.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Soft robots"
     ],
     "src": "https://orl.mae.cornell.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://orl.mae.cornell.edu/",
     "src": "https://orl.mae.cornell.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "cornell-university",
   "uni_name": "Cornell University",
   "name": "EmPRISE Lab",
   "summary": "Robots that help people with daily living.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://emprise.cs.cornell.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Assistive robots",
      "Manipulation"
     ],
     "src": "https://emprise.cs.cornell.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://emprise.cs.cornell.edu/",
     "src": "https://emprise.cs.cornell.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "rutgers-university",
   "uni_name": "Rutgers University",
   "name": "PRACSYS Lab",
   "summary": "Motion planning and manipulation.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://pracsys.cs.rutgers.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Planning",
      "Manipulation"
     ],
     "src": "https://pracsys.cs.rutgers.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://pracsys.cs.rutgers.edu/",
     "src": "https://pracsys.cs.rutgers.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "texas-am-university",
   "uni_name": "Texas A&M University",
   "name": "Robotics and Automation Design Lab",
   "summary": "Robot design and automation research.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://rad.engr.tamu.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Manipulation"
     ],
     "src": "https://rad.engr.tamu.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://rad.engr.tamu.edu/",
     "src": "https://rad.engr.tamu.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "kaist",
   "uni_name": "KAIST",
   "name": "Hubo Lab",
   "summary": "Home of the HUBO humanoid robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://hubolab.kaist.ac.kr/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids"
     ],
     "src": "https://hubolab.kaist.ac.kr/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://hubolab.kaist.ac.kr/",
     "src": "https://hubolab.kaist.ac.kr/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "kaist",
   "uni_name": "KAIST",
   "name": "Dynamic Robot Control and Design Lab",
   "summary": "Legged robots and robot design.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://dynamicrobot.kaist.ac.kr/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Legged locomotion",
      "Control"
     ],
     "src": "https://dynamicrobot.kaist.ac.kr/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://dynamicrobot.kaist.ac.kr/",
     "src": "https://dynamicrobot.kaist.ac.kr/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "kaist",
   "uni_name": "KAIST",
   "name": "Robotics and Artificial Intelligence Lab",
   "summary": "Learned locomotion for legged robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://railab.kaist.ac.kr/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Legged locomotion",
      "Robot learning"
     ],
     "src": "https://railab.kaist.ac.kr/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://railab.kaist.ac.kr/",
     "src": "https://railab.kaist.ac.kr/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "kaist",
   "uni_name": "KAIST",
   "name": "Urban Robotics Lab",
   "summary": "Robots for cities, mapping and inspection.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://urobot.kaist.ac.kr/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "SLAM"
     ],
     "src": "https://urobot.kaist.ac.kr/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://urobot.kaist.ac.kr/",
     "src": "https://urobot.kaist.ac.kr/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "uiuc",
   "uni_name": "University of Illinois Urbana-Champaign",
   "name": "Illinois Robotics",
   "summary": "UIUC's robotics community and its robotics programmes.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.illinois.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Field robots"
     ],
     "src": "https://robotics.illinois.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.illinois.edu/",
     "src": "https://robotics.illinois.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "uiuc",
   "uni_name": "University of Illinois Urbana-Champaign",
   "name": "Center for Autonomy",
   "summary": "Research on autonomous systems.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://autonomy.illinois.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Autonomous driving",
      "Aerial robots"
     ],
     "src": "https://autonomy.illinois.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://autonomy.illinois.edu/",
     "src": "https://autonomy.illinois.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "imperial-college-london",
   "uni_name": "Imperial College London",
   "name": "Robot Intelligence Lab",
   "summary": "Robot learning and dexterous manipulation.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.imperial.ac.uk/robot-intelligence/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Manipulation"
     ],
     "src": "https://www.imperial.ac.uk/robot-intelligence/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.imperial.ac.uk/robot-intelligence/",
     "src": "https://www.imperial.ac.uk/robot-intelligence/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "imperial-college-london",
   "uni_name": "Imperial College London",
   "name": "Dyson Robotics Lab",
   "summary": "Vision for home robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.imperial.ac.uk/dyson-robotics-lab/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Perception",
      "SLAM"
     ],
     "src": "https://www.imperial.ac.uk/dyson-robotics-lab/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.imperial.ac.uk/dyson-robotics-lab/",
     "src": "https://www.imperial.ac.uk/dyson-robotics-lab/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "imperial-college-london",
   "uni_name": "Imperial College London",
   "name": "Hamlyn Centre",
   "summary": "Medical and surgical robotics.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.imperial.ac.uk/hamlyn-centre/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Medical robots"
     ],
     "src": "https://www.imperial.ac.uk/hamlyn-centre/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.imperial.ac.uk/hamlyn-centre/",
     "src": "https://www.imperial.ac.uk/hamlyn-centre/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "imperial-college-london",
   "uni_name": "Imperial College London",
   "name": "Aerial Robotics Lab",
   "summary": "Drones for construction and the environment.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.imperial.ac.uk/aerial-robotics/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots"
     ],
     "src": "https://www.imperial.ac.uk/aerial-robotics/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.imperial.ac.uk/aerial-robotics/",
     "src": "https://www.imperial.ac.uk/aerial-robotics/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "technische-universität-berlin",
   "uni_name": "Technische Universität Berlin",
   "name": "Robotics and Biology Lab",
   "summary": "Soft hands and interactive perception.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.tu.berlin/robotics",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Manipulation",
      "Soft robots"
     ],
     "src": "https://www.tu.berlin/robotics",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.tu.berlin/robotics",
     "src": "https://www.tu.berlin/robotics",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "northeastern-university",
   "uni_name": "Northeastern University",
   "name": "Institute for Experiential Robotics",
   "summary": "Northeastern's robotics institute, with a robotics MS.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.northeastern.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Human-robot interaction"
     ],
     "src": "https://robotics.northeastern.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.northeastern.edu/",
     "src": "https://robotics.northeastern.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "northeastern-university",
   "uni_name": "Northeastern University",
   "name": "Helping Hands Lab",
   "summary": "Learning manipulation with symmetry.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www2.ccs.neu.edu/research/helpinghands/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Manipulation",
      "Robot learning"
     ],
     "src": "https://www2.ccs.neu.edu/research/helpinghands/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www2.ccs.neu.edu/research/helpinghands/",
     "src": "https://www2.ccs.neu.edu/research/helpinghands/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-minnesota",
   "uni_name": "University of Minnesota",
   "name": "Minnesota Robotics Institute",
   "summary": "UMN's robotics institute, with a robotics MS.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://cse.umn.edu/mnri",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Medical robots"
     ],
     "src": "https://cse.umn.edu/mnri",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://cse.umn.edu/mnri",
     "src": "https://cse.umn.edu/mnri",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-minnesota",
   "uni_name": "University of Minnesota",
   "name": "MARS Lab",
   "summary": "Visual-inertial navigation and mapping.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://mars.cs.umn.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "SLAM",
      "Perception"
     ],
     "src": "https://mars.cs.umn.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://mars.cs.umn.edu/",
     "src": "https://mars.cs.umn.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-southern-california",
   "uni_name": "University of Southern California",
   "name": "Robotic Embedded Systems Lab",
   "summary": "Multi-robot systems and robot learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.usc.edu/resl/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Multi-robot",
      "Aerial robots"
     ],
     "src": "https://robotics.usc.edu/resl/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.usc.edu/resl/",
     "src": "https://robotics.usc.edu/resl/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-southern-california",
   "uni_name": "University of Southern California",
   "name": "Interaction Lab",
   "summary": "Socially assistive robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://uscinteractionlab.web.app/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Human-robot interaction",
      "Assistive robots"
     ],
     "src": "https://uscinteractionlab.web.app/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://uscinteractionlab.web.app/",
     "src": "https://uscinteractionlab.web.app/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-bonn",
   "uni_name": "University of Bonn",
   "name": "Autonomous Intelligent Systems",
   "summary": "Humanoid soccer, cognitive robots and drones.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ais.uni-bonn.de/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Perception",
      "Aerial robots"
     ],
     "src": "https://www.ais.uni-bonn.de/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ais.uni-bonn.de/",
     "src": "https://www.ais.uni-bonn.de/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-bonn",
   "uni_name": "University of Bonn",
   "name": "Photogrammetry and Robotics Lab",
   "summary": "Mapping and agricultural robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ipb.uni-bonn.de/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Perception",
      "SLAM",
      "Field robots"
     ],
     "src": "https://www.ipb.uni-bonn.de/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ipb.uni-bonn.de/",
     "src": "https://www.ipb.uni-bonn.de/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-bonn",
   "uni_name": "University of Bonn",
   "name": "Humanoid Robots Lab",
   "summary": "Navigation and planning for humanoids.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.hrl.uni-bonn.de/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Planning"
     ],
     "src": "https://www.hrl.uni-bonn.de/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.hrl.uni-bonn.de/",
     "src": "https://www.hrl.uni-bonn.de/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "johns-hopkins-university",
   "uni_name": "Johns Hopkins University",
   "name": "Laboratory for Computational Sensing and Robotics (LCSR)",
   "summary": "Medical robotics leader, with a robotics master's.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://lcsr.jhu.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Medical robots",
      "Perception"
     ],
     "src": "https://lcsr.jhu.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://lcsr.jhu.edu/",
     "src": "https://lcsr.jhu.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "purdue-university",
   "uni_name": "Purdue University",
   "name": "Purdue Robotics Accelerator",
   "summary": "Purdue's hub connecting its robotics labs.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.purdue.edu/robotics/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Field robots"
     ],
     "src": "https://www.purdue.edu/robotics/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.purdue.edu/robotics/",
     "src": "https://www.purdue.edu/robotics/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-washington",
   "uni_name": "University of Washington",
   "name": "UW Robotics",
   "summary": "Robotics at the Allen School.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.cs.washington.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Manipulation"
     ],
     "src": "https://robotics.cs.washington.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.cs.washington.edu/",
     "src": "https://robotics.cs.washington.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-washington",
   "uni_name": "University of Washington",
   "name": "Personal Robotics Lab",
   "summary": "Robots that work with and for people.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://personalrobotics.cs.washington.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Assistive robots",
      "Manipulation"
     ],
     "src": "https://personalrobotics.cs.washington.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://personalrobotics.cs.washington.edu/",
     "src": "https://personalrobotics.cs.washington.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "peking-university",
   "uni_name": "Peking University",
   "name": "EPIC Lab",
   "summary": "Embodied perception and interaction.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://pku-epic.github.io/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Manipulation",
      "Embodied AI"
     ],
     "src": "https://pku-epic.github.io/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://pku-epic.github.io/",
     "src": "https://pku-epic.github.io/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "czech-technical-university-in-prague",
   "uni_name": "Czech Technical University in Prague",
   "name": "Multi-robot Systems Group",
   "summary": "Drone swarms and multi-robot systems.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://mrs.fel.cvut.cz/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Multi-robot"
     ],
     "src": "https://mrs.fel.cvut.cz/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://mrs.fel.cvut.cz/",
     "src": "https://mrs.fel.cvut.cz/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "czech-technical-university-in-prague",
   "uni_name": "Czech Technical University in Prague",
   "name": "CIIRC",
   "summary": "Czech Institute of Informatics, Robotics and Cybernetics.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ciirc.cvut.cz/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Perception"
     ],
     "src": "https://www.ciirc.cvut.cz/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ciirc.cvut.cz/",
     "src": "https://www.ciirc.cvut.cz/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "tu-darmstadt",
   "uni_name": "TU Darmstadt",
   "name": "Intelligent Autonomous Systems",
   "summary": "Robot learning and reinforcement learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ias.informatik.tu-darmstadt.de/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Manipulation"
     ],
     "src": "https://www.ias.informatik.tu-darmstadt.de/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ias.informatik.tu-darmstadt.de/",
     "src": "https://www.ias.informatik.tu-darmstadt.de/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "tu-darmstadt",
   "uni_name": "TU Darmstadt",
   "name": "Simulation, Systems Optimization and Robotics Group",
   "summary": "Rescue robots and legged robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.sim.informatik.tu-darmstadt.de/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Legged locomotion"
     ],
     "src": "https://www.sim.informatik.tu-darmstadt.de/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.sim.informatik.tu-darmstadt.de/",
     "src": "https://www.sim.informatik.tu-darmstadt.de/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-toronto",
   "uni_name": "University of Toronto",
   "name": "University of Toronto Robotics Institute",
   "summary": "Toronto's robotics institute and robotics engineering programmes.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.utoronto.ca/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Aerial robots",
      "Medical robots"
     ],
     "src": "https://robotics.utoronto.ca/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.utoronto.ca/",
     "src": "https://robotics.utoronto.ca/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-toronto",
   "uni_name": "University of Toronto",
   "name": "UTIAS",
   "summary": "Institute for Aerospace Studies, home to several robotics labs.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.utias.utoronto.ca/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Space robots",
      "Field robots"
     ],
     "src": "https://www.utias.utoronto.ca/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.utias.utoronto.ca/",
     "src": "https://www.utias.utoronto.ca/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "national-university-of-singapore",
   "uni_name": "National University of Singapore",
   "name": "Advanced Robotics Centre",
   "summary": "NUS's robotics centre.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://arc.nus.edu.sg/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Medical robots",
      "Field robots"
     ],
     "src": "https://arc.nus.edu.sg/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://arc.nus.edu.sg/",
     "src": "https://arc.nus.edu.sg/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-colorado-boulder",
   "uni_name": "University of Colorado Boulder",
   "name": "Autonomous Robotics and Perception Group",
   "summary": "Perception and autonomy for field robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://arpg.colorado.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Perception",
      "Field robots"
     ],
     "src": "https://arpg.colorado.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://arpg.colorado.edu/",
     "src": "https://arpg.colorado.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "arizona-state-university",
   "uni_name": "Arizona State University",
   "name": "Interactive Robotics Lab",
   "summary": "Human-robot collaboration and imitation learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://interactive-robotics.engineering.asu.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Human-robot interaction",
      "Robot learning"
     ],
     "src": "https://interactive-robotics.engineering.asu.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://interactive-robotics.engineering.asu.edu/",
     "src": "https://interactive-robotics.engineering.asu.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "hkust",
   "uni_name": "HKUST",
   "name": "HKUST Aerial Robotics Group",
   "summary": "Autonomous drones and visual-inertial navigation.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://uav.hkust.edu.hk/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "SLAM"
     ],
     "src": "https://uav.hkust.edu.hk/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://uav.hkust.edu.hk/",
     "src": "https://uav.hkust.edu.hk/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "the-chinese-university-of-hong-kong",
   "uni_name": "The Chinese University of Hong Kong",
   "name": "CUHK T Stone Robotics Institute",
   "summary": "CUHK's robotics institute.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://ri.cuhk.edu.hk/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Medical robots",
      "Logistics robots"
     ],
     "src": "https://ri.cuhk.edu.hk/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://ri.cuhk.edu.hk/",
     "src": "https://ri.cuhk.edu.hk/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "brown-university",
   "uni_name": "Brown University",
   "name": "Humans To Robots Lab",
   "summary": "Robots that understand language and work with people.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://h2r.cs.brown.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Human-robot interaction",
      "Robot learning"
     ],
     "src": "https://h2r.cs.brown.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://h2r.cs.brown.edu/",
     "src": "https://h2r.cs.brown.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "yale-university",
   "uni_name": "Yale University",
   "name": "GRAB Lab",
   "summary": "Grasping and open-source robot hands.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.eng.yale.edu/grablab/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Manipulation",
      "Robot hands"
     ],
     "src": "https://www.eng.yale.edu/grablab/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.eng.yale.edu/grablab/",
     "src": "https://www.eng.yale.edu/grablab/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "northwestern-university",
   "uni_name": "Northwestern University",
   "name": "Center for Robotics and Biosystems",
   "summary": "Northwestern's robotics centre and MS in Robotics.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.northwestern.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Manipulation",
      "Bio-inspired robots"
     ],
     "src": "https://robotics.northwestern.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.northwestern.edu/",
     "src": "https://robotics.northwestern.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "epfl",
   "uni_name": "EPFL",
   "name": "Learning Algorithms and Systems Lab (LASA)",
   "summary": "Learning from demonstration and compliant control.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.epfl.ch/labs/lasa/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Manipulation"
     ],
     "src": "https://www.epfl.ch/labs/lasa/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.epfl.ch/labs/lasa/",
     "src": "https://www.epfl.ch/labs/lasa/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "epfl",
   "uni_name": "EPFL",
   "name": "Biorobotics Lab",
   "summary": "Bio-inspired locomotion robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.epfl.ch/labs/biorob/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Bio-inspired robots",
      "Legged locomotion"
     ],
     "src": "https://www.epfl.ch/labs/biorob/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.epfl.ch/labs/biorob/",
     "src": "https://www.epfl.ch/labs/biorob/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "epfl",
   "uni_name": "EPFL",
   "name": "Laboratory of Intelligent Systems",
   "summary": "Bio-inspired drones and soft robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.epfl.ch/labs/lis/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Bio-inspired robots"
     ],
     "src": "https://www.epfl.ch/labs/lis/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.epfl.ch/labs/lis/",
     "src": "https://www.epfl.ch/labs/lis/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "epfl",
   "uni_name": "EPFL",
   "name": "Reconfigurable Robotics Lab",
   "summary": "Origami and reconfigurable robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.epfl.ch/labs/rrl/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Soft robots",
      "Modular robots"
     ],
     "src": "https://www.epfl.ch/labs/rrl/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.epfl.ch/labs/rrl/",
     "src": "https://www.epfl.ch/labs/rrl/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-michigan",
   "uni_name": "University of Michigan",
   "name": "Michigan Robotics",
   "summary": "A full robotics department offering bachelor's, master's and PhD degrees.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robotics.umich.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Legged locomotion",
      "Autonomous driving",
      "Manipulation"
     ],
     "src": "https://robotics.umich.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robotics.umich.edu/",
     "src": "https://robotics.umich.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "harbin-institute-of-technology",
   "uni_name": "Harbin Institute of Technology",
   "name": "State Key Laboratory of Robotics and System",
   "summary": "National robotics lab, known for space robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://robot.hit.edu.cn/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Space robots",
      "Medical robots"
     ],
     "src": "https://robot.hit.edu.cn/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://robot.hit.edu.cn/",
     "src": "https://robot.hit.edu.cn/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "zhejiang-university",
   "uni_name": "Zhejiang University",
   "name": "FAST Lab",
   "summary": "Fast autonomous flight and drone swarms.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://zju-fast.com/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "Planning"
     ],
     "src": "https://zju-fast.com/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://zju-fast.com/",
     "src": "https://zju-fast.com/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "shanghai-jiao-tong-university",
   "uni_name": "Shanghai Jiao Tong University",
   "name": "Machine Vision and Intelligence Group (MVIG)",
   "summary": "Grasping, perception and embodied AI.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.mvig.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Manipulation",
      "Perception"
     ],
     "src": "https://www.mvig.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.mvig.org/",
     "src": "https://www.mvig.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "eth-zurich",
   "uni_name": "ETH Zurich",
   "name": "Robotic Systems Lab",
   "summary": "The ANYmal legged robots and learned locomotion.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://rsl.ethz.ch/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Legged locomotion",
      "Field robots"
     ],
     "src": "https://rsl.ethz.ch/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://rsl.ethz.ch/",
     "src": "https://rsl.ethz.ch/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "eth-zurich",
   "uni_name": "ETH Zurich",
   "name": "Autonomous Systems Lab",
   "summary": "Mobile robots, drones and mapping.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://asl.ethz.ch/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Aerial robots",
      "SLAM",
      "Field robots"
     ],
     "src": "https://asl.ethz.ch/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://asl.ethz.ch/",
     "src": "https://asl.ethz.ch/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "eth-zurich",
   "uni_name": "ETH Zurich",
   "name": "Computational Robotics Lab",
   "summary": "Computational design and control of robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://crl.ethz.ch/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Simulation",
      "Legged locomotion"
     ],
     "src": "https://crl.ethz.ch/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://crl.ethz.ch/",
     "src": "https://crl.ethz.ch/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "eth-zurich",
   "uni_name": "ETH Zurich",
   "name": "Soft Robotics Lab",
   "summary": "Soft robot hands and bio-inspired robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://srl.ethz.ch/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Soft robots",
      "Robot hands"
     ],
     "src": "https://srl.ethz.ch/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://srl.ethz.ch/",
     "src": "https://srl.ethz.ch/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-oxford",
   "uni_name": "University of Oxford",
   "name": "Oxford Robotics Institute",
   "summary": "Oxford's robotics institute.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://ori.ox.ac.uk/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Legged locomotion",
      "Perception"
     ],
     "src": "https://ori.ox.ac.uk/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://ori.ox.ac.uk/",
     "src": "https://ori.ox.ac.uk/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-cambridge",
   "uni_name": "University of Cambridge",
   "name": "Prorok Lab",
   "summary": "Multi-robot systems and learning.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://proroklab.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Multi-robot",
      "Robot learning"
     ],
     "src": "https://proroklab.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://proroklab.org/",
     "src": "https://proroklab.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-cambridge",
   "uni_name": "University of Cambridge",
   "name": "Bio-Inspired Robotics Lab",
   "summary": "Bio-inspired and soft robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://birlab.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Bio-inspired robots",
      "Soft robots"
     ],
     "src": "https://birlab.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://birlab.org/",
     "src": "https://birlab.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "nanyang-technological-university",
   "uni_name": "Nanyang Technological University",
   "name": "Robotics Research Centre",
   "summary": "NTU's robotics research centre.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.ntu.edu.sg/rrc",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Manipulation"
     ],
     "src": "https://www.ntu.edu.sg/rrc",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.ntu.edu.sg/rrc",
     "src": "https://www.ntu.edu.sg/rrc",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "harvard-university",
   "uni_name": "Harvard University",
   "name": "Harvard Microrobotics Lab",
   "summary": "Insect-scale robots such as RoboBee.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.micro.seas.harvard.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Microrobots",
      "Bio-inspired robots"
     ],
     "src": "https://www.micro.seas.harvard.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.micro.seas.harvard.edu/",
     "src": "https://www.micro.seas.harvard.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "harvard-university",
   "uni_name": "Harvard University",
   "name": "Harvard Biodesign Lab",
   "summary": "Soft wearable robots and exosuits.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://biodesign.seas.harvard.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Wearable robots",
      "Soft robots"
     ],
     "src": "https://biodesign.seas.harvard.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://biodesign.seas.harvard.edu/",
     "src": "https://biodesign.seas.harvard.edu/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "politecnico-di-milano",
   "uni_name": "Politecnico di Milano",
   "name": "AIRLab",
   "summary": "AI and robotics lab.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://airlab.deib.polimi.it/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Field robots"
     ],
     "src": "https://airlab.deib.polimi.it/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://airlab.deib.polimi.it/",
     "src": "https://airlab.deib.polimi.it/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "politecnico-di-milano",
   "uni_name": "Politecnico di Milano",
   "name": "MERLIN Lab",
   "summary": "Mechatronics and robotics for medicine and industry.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.merlin.polimi.it/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Medical robots",
      "Manipulation"
     ],
     "src": "https://www.merlin.polimi.it/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.merlin.polimi.it/",
     "src": "https://www.merlin.polimi.it/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "tu-delft",
   "uni_name": "TU Delft",
   "name": "TU Delft Robotics Institute",
   "summary": "Delft's robotics institute and MSc Robotics.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.tudelft.nl/robotics-institute",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Aerial robots",
      "Autonomous driving"
     ],
     "src": "https://www.tudelft.nl/robotics-institute",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.tudelft.nl/robotics-institute",
     "src": "https://www.tudelft.nl/robotics-institute",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-california-los-angeles",
   "uni_name": "University of California, Los Angeles",
   "name": "RoMeLa",
   "summary": "Robotics and Mechanisms Laboratory, humanoids and novel robots.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.romela.org/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Humanoids",
      "Legged locomotion"
     ],
     "src": "https://www.romela.org/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.romela.org/",
     "src": "https://www.romela.org/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "kth",
   "uni_name": "KTH Royal Institute of Technology",
   "name": "Robotics, Perception and Learning",
   "summary": "KTH's robotics division.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.kth.se/is/rpl",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Robot learning",
      "Manipulation",
      "Perception"
     ],
     "src": "https://www.kth.se/is/rpl",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.kth.se/is/rpl",
     "src": "https://www.kth.se/is/rpl",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-manchester",
   "uni_name": "University of Manchester",
   "name": "Manchester Centre for Robotics and AI",
   "summary": "Robots for extreme and real-world environments.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www.robotics.manchester.ac.uk/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Nuclear robots"
     ],
     "src": "https://www.robotics.manchester.ac.uk/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www.robotics.manchester.ac.uk/",
     "src": "https://www.robotics.manchester.ac.uk/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "politecnico-di-torino",
   "uni_name": "Politecnico di Torino",
   "name": "PIC4SeR",
   "summary": "Service robotics centre.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://pic4ser.polito.it/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Field robots",
      "Aerial robots"
     ],
     "src": "https://pic4ser.polito.it/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://pic4ser.polito.it/",
     "src": "https://pic4ser.polito.it/",
     "asof": "2026-11"
    }
   }
  },
  {
   "uni": "university-of-massachusetts-amherst",
   "uni_name": "University of Massachusetts Amherst",
   "name": "Laboratory for Perceptual Robotics",
   "summary": "Robot learning and manipulation.",
   "data": {
    "category": {
     "v": "Research lab",
     "src": "https://www-robotics.cs.umass.edu/",
     "asof": "2026-11"
    },
    "lab_focus": {
     "v": [
      "Manipulation",
      "Robot learning"
     ],
     "src": "https://www-robotics.cs.umass.edu/",
     "asof": "2026-11"
    },
    "lab_url": {
     "v": "https://www-robotics.cs.umass.edu/",
     "src": "https://www-robotics.cs.umass.edu/",
     "asof": "2026-11"
    }
   }
  }
 ]
};
