// example api calls

// NearbySearch Query
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.3419004463682798,103.96154272865057&radius=500&type=restaurant
const data = [
  {
    html_attributions: [],
    results: [
      {
        business_status: "CLOSED_TEMPORARILY",
        geometry: {
          location: {
            lat: 1.344177,
            lng: 103.964998,
          },
          viewport: {
            northeast: {
              lat: 1.345595480291502,
              lng: 103.9665050802915,
            },
            southwest: {
              lat: 1.342897519708498,
              lng: 103.9638071197085,
            },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        name: "D' Cuisines",
        permanently_closed: true,
        photos: [
          {
            height: 2592,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/108945845662059855150">Kiran Veeramallu</a>',
            ],
            photo_reference:
              "Aap_uEBXFbSabCNtasLVJT0qMNso9sYxZDmhgcC_YYPqShEJYX6QEcevrfR11keUkPa9q15AHYrSS83UPOwJLDkvlS0YXbvrhO6X-DqxFitsL-580LfU8sMy_r0tBSSO5lhw4eERRWKso1fp519R0pNPeTKOX3EhJhur_EALoc8ptgbWY5be",
            width: 4608,
          },
        ],
        place_id: "ChIJmx1ln-A82jERhkDDxgb4Ub8",
        plus_code: {
          compound_code: "8XV7+MX Singapore",
          global_code: "6PH58XV7+MX",
        },
        rating: 4.1,
        reference: "ChIJmx1ln-A82jERhkDDxgb4Ub8",
        scope: "GOOGLE",
        types: ["restaurant", "food", "point_of_interest", "establishment"],
        user_ratings_total: 109,
        vicinity: "726 Upper Changi Road East",
      },
      {
        business_status: "OPERATIONAL",
        geometry: {
          location: {
            lat: 1.3409243,
            lng: 103.962,
          },
          viewport: {
            northeast: {
              lat: 1.342464930291502,
              lng: 103.9635473802915,
            },
            southwest: {
              lat: 1.339766969708498,
              lng: 103.9608494197085,
            },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        name: "Crooked Cooks",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 2268,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114797681359989621581">Kyeongrok Kim</a>',
            ],
            photo_reference:
              "Aap_uEB54WAtGyVRmA4Nv8mGKPTKu_AxIDaO8P7SfRnXeOCFes9JCskJNHYlCQFq6X4dF1n5BTfleNYQk24Qg6eQQ9IOkRNKUg_H0nJdnpUfErZGcX6M_1a9JSPdrwI0yEePjCk46vUnSxyWeY7u6LU7qkEPDNM7ZUxqAanRZLjlgiCy1NjF",
            width: 4032,
          },
        ],
        place_id: "ChIJlR0LQd882jERddRWo1bkCRM",
        plus_code: {
          compound_code: "8XR6+9Q Singapore",
          global_code: "6PH58XR6+9Q",
        },
        price_level: 2,
        rating: 4.1,
        reference: "ChIJlR0LQd882jERddRWo1bkCRM",
        scope: "GOOGLE",
        types: ["restaurant", "food", "point_of_interest", "establishment"],
        user_ratings_total: 101,
        vicinity: "8 Somapah Road, #01-204 Building 2, Singapore",
      },
      {
        business_status: "OPERATIONAL",
        geometry: {
          location: {
            lat: 1.3407509,
            lng: 103.9621313,
          },
          viewport: {
            northeast: {
              lat: 1.342371930291502,
              lng: 103.9636210302915,
            },
            southwest: {
              lat: 1.339673969708498,
              lng: 103.9609230697085,
            },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        name: "My NoNNa's",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 3024,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114618288802387811066">My NoNNa&#39;s</a>',
            ],
            photo_reference:
              "Aap_uEBHpGwp2sbBpIpEbUdffDKpK9XJuA_Fk4EowcEXikgT1VJRm0rdyihAGHbUPHFE1yFg8HDj05mdPkMwzWA6Ez1YsB-OEnhg4BX_zyFLOhxSwxGptVLtmxqdhRuSr5gyW8dB0eQQuCZdWjZ5TKUQqY6DxQhAUZF43llBYqhf9wlvr4F-",
            width: 4032,
          },
        ],
        place_id: "ChIJ6QXVQN882jER7NArKTKpe6I",
        plus_code: {
          compound_code: "8XR6+8V Singapore",
          global_code: "6PH58XR6+8V",
        },
        rating: 4.7,
        reference: "ChIJ6QXVQN882jER7NArKTKpe6I",
        scope: "GOOGLE",
        types: ["restaurant", "food", "point_of_interest", "establishment"],
        user_ratings_total: 87,
        vicinity: "8 Somapah Road, #01-203 Building 2, Singapore",
      },
      {
        business_status: "OPERATIONAL",
        geometry: {
          location: {
            lat: 1.3404563,
            lng: 103.9625725,
          },
          viewport: {
            northeast: {
              lat: 1.341408280291502,
              lng: 103.9639460802915,
            },
            southwest: {
              lat: 1.338710319708498,
              lng: 103.9612481197085,
            },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        name: "d'Star Bistro",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 2736,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/104527916285751902034">BrYan LeE</a>',
            ],
            photo_reference:
              "Aap_uEBX79TwhLTbLpcimqqFxn8W214LNF4-P9xZZX38LK915X9-UIp8yEY_TDNEsSwhud-ae5VmRIzUgqcnuO9hhyYIHFaLb9QQxEqhPmhNR6oZ8A-XubHJlS47IVdb_-1PN4fgalTZHWY2kMhChhkZ1yYq5TxICmtFI45QCXHdQ6845oKO",
            width: 3648,
          },
        ],
        place_id: "ChIJ2VrdtPs92jERvljNwucJfi0",
        plus_code: {
          compound_code: "8XR7+52 Singapore",
          global_code: "6PH58XR7+52",
        },
        rating: 4.2,
        reference: "ChIJ2VrdtPs92jERvljNwucJfi0",
        scope: "GOOGLE",
        types: ["restaurant", "food", "point_of_interest", "establishment"],
        user_ratings_total: 57,
        vicinity: "8 Somapah Road, #01-102 Building 1, SUTD",
      },
      {
        business_status: "OPERATIONAL",
        geometry: {
          location: {
            lat: 1.3442082,
            lng: 103.9649276,
          },
          viewport: {
            northeast: {
              lat: 1.345554080291502,
              lng: 103.9664565302915,
            },
            southwest: {
              lat: 1.342856119708498,
              lng: 103.9637585697085,
            },
          },
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        name: "Zareen's Kitchen",
        opening_hours: {
          open_now: true,
        },
        photos: [
          {
            height: 1960,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/116105837040111766407">Kenneth Chan</a>',
            ],
            photo_reference:
              "Aap_uEAUTSNjcqgCeGIq5omAjH6w-Hg2xFPwsoGgZPijTAk7DwaLWClJJD2u534AWtuRFtXR7D27aegdOf5uc6mlYqZoDPu936W7-9w7RwHYQU0UX77-hkE3v57oJ9kVESKpYVUPbHSZ0RICRrGiTuEnyqA6RJhBtFmnGz5YyJILzbtiq-o_",
            width: 4032,
          },
        ],
        place_id: "ChIJvbGFf8492jERMnDPOIEWln0",
        plus_code: {
          compound_code: "8XV7+MX Singapore",
          global_code: "6PH58XV7+MX",
        },
        rating: 5,
        reference: "ChIJvbGFf8492jERMnDPOIEWln0",
        scope: "GOOGLE",
        types: ["restaurant", "food", "point_of_interest", "establishment"],
        user_ratings_total: 2,
        vicinity: "294 Bedok Road, Simpang Bedok Bedok Shopping Complex",
      },
    ],
    status: "OK",
  },
];
