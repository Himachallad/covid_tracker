
const data = [
    {
        "#": 1,
        "Country": "USA",
        "Total Cases": 111820082,
        "Total Deaths": 1219487,
        "Total Recovered": 109814428,
        "Active Cases": 786167,
        "Critical": 940,
        "Total Cases(1M pop)": 333985,
        "Deaths(1M pop)": 3642,
        "Total Tests": 1186851502,
        "Tests(1M pop)": 3544901,
        "Population": 334805269,
        "countryInfo": {
            "lat": 37.09024,
            "long": -95.712891
        }
    },
    {
        "countryInfo": {
            "lat": 20.593684,
            "long": 78.96288
        },
        "#": 2,
        "Country": "India",
        "Total Cases": 45035393,
        "Total Deaths": 533570,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 32016,
        "Deaths(1M pop)": 379,
        "Total Tests": 935879495,
        "Tests(1M pop)": 665334,
        "Population": 1406631776
    },
    {
        "countryInfo": {
            "lat": 46.227638,
            "long": 2.213749
        },
        "#": 3,
        "Country": "France",
        "Total Cases": 40138560,
        "Total Deaths": 167642,
        "Total Recovered": 39970918,
        "Active Cases": 0,
        "Total Cases(1M pop)": 612013,
        "Deaths(1M pop)": 2556,
        "Total Tests": 271490188,
        "Tests(1M pop)": 4139547,
        "Population": 65584518
    },
    {
        "countryInfo": {
            "lat": 51.165691,
            "long": 10.451526
        },
        "#": 4,
        "Country": "Germany",
        "Total Cases": 38828995,
        "Total Deaths": 183027,
        "Total Recovered": 38240600,
        "Active Cases": 405368,
        "Critical": 0,
        "Total Cases(1M pop)": 462891,
        "Deaths(1M pop)": 2182,
        "Total Tests": 122332384,
        "Tests(1M pop)": 1458359,
        "Population": 83883596
    },
    {
        "countryInfo": {
            "lat": -14.235004,
            "long": -51.92528
        },
        "#": 5,
        "Country": "Brazil",
        "Total Cases": 38743918,
        "Total Deaths": 711380,
        "Total Recovered": 36249161,
        "Active Cases": 1783377,
        "Critical": 0,
        "Total Cases(1M pop)": 179908,
        "Deaths(1M pop)": 3303,
        "Total Tests": 63776166,
        "Tests(1M pop)": 296146,
        "Population": 215353593
    },
    {
        "#": 6,
        "Country": "S. Korea",
        "Total Cases": 34571873,
        "Total Deaths": 35934,
        "Total Recovered": 34535939,
        "Active Cases": 0,
        "Total Cases(1M pop)": 673523,
        "Deaths(1M pop)": 700,
        "Total Tests": 15804065,
        "Tests(1M pop)": 307892,
        "Population": 51329899
    },
    {
        "countryInfo": {
            "lat": 36.204824,
            "long": 138.252924
        },
        "#": 7,
        "Country": "Japan",
        "Total Cases": 33803572,
        "Total Deaths": 74694,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 269169,
        "Deaths(1M pop)": 595,
        "Total Tests": 100414883,
        "Tests(1M pop)": 799578,
        "Population": 125584838
    },
    {
        "countryInfo": {
            "lat": 41.87194,
            "long": 12.56738
        },
        "#": 8,
        "Country": "Italy",
        "Total Cases": 26723249,
        "Total Deaths": 196487,
        "Total Recovered": 26361218,
        "Active Cases": 165544,
        "Critical": 22,
        "Total Cases(1M pop)": 443445,
        "Deaths(1M pop)": 3261,
        "Total Tests": 281126449,
        "Tests(1M pop)": 4665010,
        "Population": 60262770
    },
    {
        "#": 9,
        "Country": "UK",
        "Total Cases": 24910387,
        "Total Deaths": 232112,
        "Total Recovered": 24678275,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 363666,
        "Deaths(1M pop)": 3389,
        "Total Tests": 522526476,
        "Tests(1M pop)": 7628357,
        "Population": 68497907
    },
    {
        "countryInfo": {
            "lat": 61.52401,
            "long": 105.318756
        },
        "#": 10,
        "Country": "Russia",
        "Total Cases": 24124215,
        "Total Deaths": 402756,
        "Total Recovered": 23545818,
        "Active Cases": 175641,
        "Critical": 0,
        "Total Cases(1M pop)": 165454,
        "Deaths(1M pop)": 2762,
        "Total Tests": 273400000,
        "Tests(1M pop)": 1875095,
        "Population": 145805947
    },
    {
        "countryInfo": {
            "lat": 38.963745,
            "long": 35.243322
        },
        "#": 11,
        "Country": "Turkey",
        "Total Cases": 17232066,
        "Total Deaths": 102174,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 201399,
        "Deaths(1M pop)": 1194,
        "Total Tests": 162743369,
        "Tests(1M pop)": 1902052,
        "Population": 85561976
    },
    {
        "countryInfo": {
            "lat": 40.463667,
            "long": -3.74922
        },
        "#": 12,
        "Country": "Spain",
        "Total Cases": 13914811,
        "Total Deaths": 121760,
        "Total Recovered": 13762417,
        "Active Cases": 30634,
        "Critical": 231,
        "Total Cases(1M pop)": 297840,
        "Deaths(1M pop)": 2606,
        "Total Tests": 471036328,
        "Tests(1M pop)": 10082298,
        "Population": 46719142
    },
    {
        "countryInfo": {
            "lat": -25.274398,
            "long": 133.775136
        },
        "#": 13,
        "Country": "Australia",
        "Total Cases": 11853144,
        "Total Deaths": 24414,
        "Total Recovered": 11820014,
        "Active Cases": 8716,
        "Critical": 3,
        "Total Cases(1M pop)": 454687,
        "Deaths(1M pop)": 937,
        "Total Tests": 81916639,
        "Tests(1M pop)": 3142326,
        "Population": 26068792
    },
    {
        "countryInfo": {
            "lat": 14.058324,
            "long": 108.277199
        },
        "#": 14,
        "Country": "Vietnam",
        "Total Cases": 11625195,
        "Total Deaths": 43206,
        "Total Recovered": 10640971,
        "Active Cases": 941018,
        "Total Cases(1M pop)": 117481,
        "Deaths(1M pop)": 437,
        "Total Tests": 85826548,
        "Tests(1M pop)": 867342,
        "Population": 98953541
    },
    {
        "countryInfo": {
            "lat": 23.69781,
            "long": 120.960515
        },
        "#": 15,
        "Country": "Taiwan",
        "Total Cases": 10241523,
        "Total Deaths": 19005,
        "Total Recovered": 10222518,
        "Active Cases": 0,
        "Total Cases(1M pop)": 428720,
        "Deaths(1M pop)": 796,
        "Total Tests": 30742304,
        "Tests(1M pop)": 1286903,
        "Population": 23888595
    },
    {
        "countryInfo": {
            "lat": -38.416097,
            "long": -63.616672
        },
        "#": 16,
        "Country": "Argentina",
        "Total Cases": 10128845,
        "Total Deaths": 130841,
        "Total Recovered": 9997258,
        "Active Cases": 746,
        "Total Cases(1M pop)": 220143,
        "Deaths(1M pop)": 2844,
        "Total Tests": 35716069,
        "Tests(1M pop)": 776264,
        "Population": 46010234
    },
    {
        "countryInfo": {
            "lat": 52.132633,
            "long": 5.291266
        },
        "#": 17,
        "Country": "Netherlands",
        "Total Cases": 8635786,
        "Total Deaths": 22992,
        "Total Recovered": 8612599,
        "Active Cases": 195,
        "Critical": 0,
        "Total Cases(1M pop)": 501747,
        "Deaths(1M pop)": 1336,
        "Total Tests": 25984435,
        "Tests(1M pop)": 1509718,
        "Population": 17211447
    },
    {
        "countryInfo": {
            "lat": 23.634501,
            "long": -102.552784
        },
        "#": 18,
        "Country": "Mexico",
        "Total Cases": 7702809,
        "Total Deaths": 334958,
        "Total Recovered": 6899865,
        "Active Cases": 467986,
        "Critical": 0,
        "Total Cases(1M pop)": 58549,
        "Deaths(1M pop)": 2546,
        "Total Tests": 20013810,
        "Tests(1M pop)": 152124,
        "Population": 131562772
    },
    {
        "countryInfo": {
            "lat": 32.427908,
            "long": 53.688046
        },
        "#": 19,
        "Country": "Iran",
        "Total Cases": 7627186,
        "Total Deaths": 146811,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 88665,
        "Deaths(1M pop)": 1707,
        "Total Tests": 57320267,
        "Tests(1M pop)": 666338,
        "Population": 86022837
    },
    {
        "countryInfo": {
            "lat": -0.789275,
            "long": 113.921327
        },
        "#": 20,
        "Country": "Indonesia",
        "Total Cases": 6829221,
        "Total Deaths": 162063,
        "Total Recovered": 6647104,
        "Active Cases": 20054,
        "Critical": 0,
        "Total Cases(1M pop)": 24466,
        "Deaths(1M pop)": 581,
        "Total Tests": 114158919,
        "Tests(1M pop)": 408975,
        "Population": 279134505
    },
    {
        "countryInfo": {
            "lat": 51.919438,
            "long": 19.145136
        },
        "#": 21,
        "Country": "Poland",
        "Total Cases": 6661991,
        "Total Deaths": 120598,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 176524,
        "Deaths(1M pop)": 3196,
        "Total Tests": 39323709,
        "Tests(1M pop)": 1041970,
        "Population": 37739785
    },
    {
        "countryInfo": {
            "lat": 4.570868,
            "long": -74.297333
        },
        "#": 22,
        "Country": "Colombia",
        "Total Cases": 6400173,
        "Total Deaths": 143200,
        "Total Recovered": 6212152,
        "Active Cases": 44821,
        "Critical": 342,
        "Total Cases(1M pop)": 124244,
        "Deaths(1M pop)": 2780,
        "Total Tests": 36951507,
        "Tests(1M pop)": 717327,
        "Population": 51512762
    },
    {
        "countryInfo": {
            "lat": 39.074208,
            "long": 21.824312
        },
        "#": 23,
        "Country": "Greece",
        "Total Cases": 6101379,
        "Total Deaths": 37869,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 591412,
        "Deaths(1M pop)": 3671,
        "Total Tests": 102228365,
        "Tests(1M pop)": 9909078,
        "Population": 10316637
    },
    {
        "countryInfo": {
            "lat": 47.516231,
            "long": 14.550072
        },
        "#": 24,
        "Country": "Austria",
        "Total Cases": 6081287,
        "Total Deaths": 22542,
        "Total Recovered": 6054934,
        "Active Cases": 3811,
        "Total Cases(1M pop)": 670727,
        "Deaths(1M pop)": 2486,
        "Total Tests": 211273524,
        "Tests(1M pop)": 23302116,
        "Population": 9066710
    },
    {
        "countryInfo": {
            "lat": 39.399872,
            "long": -8.224454
        },
        "#": 25,
        "Country": "Portugal",
        "Total Cases": 5643062,
        "Total Deaths": 28126,
        "Total Recovered": 5614809,
        "Active Cases": 127,
        "Critical": 61,
        "Total Cases(1M pop)": 556484,
        "Deaths(1M pop)": 2774,
        "Total Tests": 46139518,
        "Tests(1M pop)": 4549993,
        "Population": 10140570
    },
    {
        "countryInfo": {
            "lat": 48.379433,
            "long": 31.16558
        },
        "#": 26,
        "Country": "Ukraine",
        "Total Cases": 5557995,
        "Total Deaths": 112418,
        "Total Recovered": 5445577,
        "Active Cases": 0,
        "Total Cases(1M pop)": 128681,
        "Deaths(1M pop)": 2603,
        "Total Tests": 32603805,
        "Tests(1M pop)": 754855,
        "Population": 43192122
    },
    {
        "countryInfo": {
            "lat": -35.675147,
            "long": -71.542969
        },
        "#": 27,
        "Country": "Chile",
        "Total Cases": 5384853,
        "Total Deaths": 64497,
        "Total Recovered": 5252450,
        "Active Cases": 67906,
        "Critical": 7,
        "Total Cases(1M pop)": 279730,
        "Deaths(1M pop)": 3350,
        "Total Tests": 50382097,
        "Tests(1M pop)": 2617225,
        "Population": 19250195
    },
    {
        "countryInfo": {
            "lat": 4.210484,
            "long": 101.975766
        },
        "#": 28,
        "Country": "Malaysia",
        "Total Cases": 5278406,
        "Total Deaths": 37348,
        "Total Recovered": 5233268,
        "Active Cases": 7790,
        "Critical": 11,
        "Total Cases(1M pop)": 159079,
        "Deaths(1M pop)": 1126,
        "Total Tests": 68580916,
        "Tests(1M pop)": 2066869,
        "Population": 33181072
    },
    {
        "countryInfo": {
            "lat": 56.130366,
            "long": -106.346771
        },
        "#": 29,
        "Country": "Canada",
        "Total Cases": 4946090,
        "Total Deaths": 59034,
        "Total Recovered": 4881312,
        "New Recovered": 350,
        "Active Cases": 5744,
        "Critical": 99,
        "Total Cases(1M pop)": 128843,
        "Deaths(1M pop)": 1538,
        "Total Tests": 66572774,
        "Tests(1M pop)": 1734189,
        "Population": 38388419
    },
    {
        "countryInfo": {
            "lat": 50.503887,
            "long": 4.469936
        },
        "#": 30,
        "Country": "Belgium",
        "Total Cases": 4861695,
        "Total Deaths": 34376,
        "Total Recovered": 4826798,
        "New Recovered": 50,
        "Active Cases": 521,
        "Critical": 0,
        "Total Cases(1M pop)": 416659,
        "Deaths(1M pop)": 2946,
        "Total Tests": 37454182,
        "Tests(1M pop)": 3209915,
        "Population": 11668278
    },
    {
        "countryInfo": {
            "lat": 31.046051,
            "long": 34.851612
        },
        "#": 31,
        "Country": "Israel",
        "Total Cases": 4841772,
        "Total Deaths": 12707,
        "Total Recovered": 4798473,
        "Active Cases": 30592,
        "Critical": 0,
        "Total Cases(1M pop)": 519169,
        "Deaths(1M pop)": 1363,
        "Total Tests": 41373364,
        "Tests(1M pop)": 4436346,
        "Population": 9326000
    },
    {
        "#": 32,
        "Country": "DPRK",
        "Total Cases": 4772813,
        "Total Deaths": 74,
        "Total Recovered": 4772739,
        "Active Cases": 0,
        "Total Cases(1M pop)": 183636,
        "Deaths(1M pop)": 3,
        "Population": 25990679
    },
    {
        "countryInfo": {
            "lat": 15.870032,
            "long": 100.992541
        },
        "#": 33,
        "Country": "Thailand",
        "Total Cases": 4770149,
        "Total Deaths": 34586,
        "Total Recovered": 4692636,
        "Active Cases": 42927,
        "Critical": 0,
        "Total Cases(1M pop)": 68069,
        "Deaths(1M pop)": 494,
        "Total Tests": 17273454,
        "Tests(1M pop)": 246488,
        "Population": 70078203
    },
    {
        "#": 34,
        "Country": "Czechia",
        "Total Cases": 4759041,
        "Total Deaths": 43517,
        "Total Recovered": 4715206,
        "Active Cases": 318,
        "Critical": 2,
        "Total Cases(1M pop)": 443246,
        "Deaths(1M pop)": 4053,
        "Total Tests": 57834241,
        "Tests(1M pop)": 5386552,
        "Population": 10736784
    },
    {
        "countryInfo": {
            "lat": -9.189967,
            "long": -75.015152
        },
        "#": 35,
        "Country": "Peru",
        "Total Cases": 4572667,
        "Total Deaths": 222161,
        "Total Recovered": 4350506,
        "Active Cases": 0,
        "Critical": 4,
        "Total Cases(1M pop)": 135751,
        "Deaths(1M pop)": 6595,
        "Total Tests": 39010194,
        "Tests(1M pop)": 1158115,
        "Population": 33684208
    },
    {
        "countryInfo": {
            "lat": 46.818188,
            "long": 8.227512
        },
        "#": 36,
        "Country": "Switzerland",
        "Total Cases": 4453053,
        "Total Deaths": 14452,
        "Total Recovered": 4438309,
        "Active Cases": 292,
        "Critical": 0,
        "Total Cases(1M pop)": 507549,
        "Deaths(1M pop)": 1647,
        "Total Tests": 23833472,
        "Tests(1M pop)": 2716487,
        "Population": 8773637
    },
    {
        "countryInfo": {
            "lat": 12.879721,
            "long": 121.774017
        },
        "#": 37,
        "Country": "Philippines",
        "Total Cases": 4140383,
        "Total Deaths": 66864,
        "Total Recovered": 4067381,
        "Active Cases": 6138,
        "Critical": 0,
        "Total Cases(1M pop)": 36800,
        "Deaths(1M pop)": 594,
        "Total Tests": 36102746,
        "Tests(1M pop)": 320888,
        "Population": 112508994
    },
    {
        "countryInfo": {
            "lat": -30.559482,
            "long": 22.937506
        },
        "#": 38,
        "Country": "South Africa",
        "Total Cases": 4076463,
        "Total Deaths": 102595,
        "Total Recovered": 3912506,
        "Active Cases": 61362,
        "Critical": 192,
        "Total Cases(1M pop)": 67095,
        "Deaths(1M pop)": 1689,
        "Total Tests": 26795090,
        "Tests(1M pop)": 441027,
        "Population": 60756135
    },
    {
        "countryInfo": {
            "lat": 45.943161,
            "long": 24.96676
        },
        "#": 39,
        "Country": "Romania",
        "Total Cases": 3529735,
        "Total Deaths": 68929,
        "Total Recovered": 3460149,
        "New Recovered": 390,
        "Active Cases": 657,
        "Critical": 21,
        "Total Cases(1M pop)": 185470,
        "Deaths(1M pop)": 3622,
        "Total Tests": 28758667,
        "Tests(1M pop)": 1511122,
        "Population": 19031335
    },
    {
        "countryInfo": {
            "lat": 56.26392,
            "long": 9.501785
        },
        "#": 40,
        "Country": "Denmark",
        "Total Cases": 3183756,
        "Total Deaths": 8814,
        "Total Recovered": 3174942,
        "Active Cases": 0,
        "Total Cases(1M pop)": 545636,
        "Deaths(1M pop)": 1511,
        "Total Tests": 129333107,
        "Tests(1M pop)": 22165247,
        "Population": 5834950
    },
    {
        "countryInfo": {
            "lat": 1.352083,
            "long": 103.819836
        },
        "#": 41,
        "Country": "Singapore",
        "Total Cases": 3006155,
        "Total Deaths": 2024,
        "Total Recovered": 3004131,
        "Active Cases": 0,
        "Critical": 4,
        "Total Cases(1M pop)": 505785,
        "Deaths(1M pop)": 341,
        "Total Tests": 24756666,
        "Tests(1M pop)": 4165302,
        "Population": 5943546
    },
    {
        "countryInfo": {
            "lat": 22.396428,
            "long": 114.109497
        },
        "#": 42,
        "Country": "Hong Kong",
        "Total Cases": 2937609,
        "Total Deaths": 14924,
        "Total Recovered": 2916005,
        "Active Cases": 6680,
        "Critical": 0,
        "Total Cases(1M pop)": 386309,
        "Deaths(1M pop)": 1963,
        "Total Tests": 76127725,
        "Tests(1M pop)": 10011143,
        "Population": 7604299
    },
    {
        "countryInfo": {
            "lat": 60.128161,
            "long": 18.643501
        },
        "#": 43,
        "Country": "Sweden",
        "Total Cases": 2754129,
        "Total Deaths": 27407,
        "Total Recovered": 2726492,
        "New Recovered": 20,
        "Active Cases": 230,
        "Critical": 0,
        "Total Cases(1M pop)": 269511,
        "Deaths(1M pop)": 2682,
        "Total Tests": 19500873,
        "Tests(1M pop)": 1908301,
        "Population": 10218971
    },
    {
        "countryInfo": {
            "lat": -40.900557,
            "long": 174.885971
        },
        "#": 44,
        "Country": "New Zealand",
        "Total Cases": 2621111,
        "Total Deaths": 5697,
        "Total Recovered": 2613791,
        "Active Cases": 1623,
        "Total Cases(1M pop)": 535117,
        "Deaths(1M pop)": 1163,
        "Total Tests": 7768604,
        "Tests(1M pop)": 1586011,
        "Population": 4898203
    },
    {
        "countryInfo": {
            "lat": 44.016521,
            "long": 21.005859
        },
        "#": 45,
        "Country": "Serbia",
        "Total Cases": 2615054,
        "Total Deaths": 18057,
        "Total Recovered": 2596608,
        "Active Cases": 389,
        "Total Cases(1M pop)": 302213,
        "Deaths(1M pop)": 2087,
        "Total Tests": 13463733,
        "Tests(1M pop)": 1555958,
        "Population": 8653016
    },
    {
        "countryInfo": {
            "lat": 33.223191,
            "long": 43.679291
        },
        "#": 46,
        "Country": "Iraq",
        "Total Cases": 2465545,
        "Total Deaths": 25375,
        "Total Recovered": 2439497,
        "Active Cases": 673,
        "Total Cases(1M pop)": 58474,
        "Deaths(1M pop)": 602,
        "Total Tests": 19544451,
        "Tests(1M pop)": 463523,
        "Population": 42164965
    },
    {
        "countryInfo": {
            "lat": 47.162494,
            "long": 19.503304
        },
        "#": 47,
        "Country": "Hungary",
        "Total Cases": 2230232,
        "Total Deaths": 49048,
        "Total Recovered": 2152155,
        "Active Cases": 29029,
        "Total Cases(1M pop)": 232164,
        "Deaths(1M pop)": 5106,
        "Total Tests": 11394556,
        "Tests(1M pop)": 1186160,
        "Population": 9606259
    },
    {
        "countryInfo": {
            "lat": 23.684994,
            "long": 90.356331
        },
        "#": 48,
        "Country": "Bangladesh",
        "Total Cases": 2049377,
        "Total Deaths": 29493,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 12207,
        "Deaths(1M pop)": 176,
        "Total Tests": 15254399,
        "Tests(1M pop)": 90862,
        "Population": 167885689
    },
    {
        "countryInfo": {
            "lat": 48.669026,
            "long": 19.699024
        },
        "#": 49,
        "Country": "Slovakia",
        "Total Cases": 1877605,
        "Total Deaths": 21224,
        "Total Recovered": 1856381,
        "Active Cases": 0,
        "Critical": 23,
        "Total Cases(1M pop)": 343872,
        "Deaths(1M pop)": 3887,
        "Total Tests": 7448789,
        "Tests(1M pop)": 1364199,
        "Population": 5460193
    },
    {
        "countryInfo": {
            "lat": 42.315407,
            "long": 43.356892
        },
        "#": 50,
        "Country": "Georgia",
        "Total Cases": 1861665,
        "Total Deaths": 17132,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 469082,
        "Deaths(1M pop)": 4317,
        "Total Tests": 16920079,
        "Tests(1M pop)": 4263340,
        "Population": 3968738
    },
    {
        "countryInfo": {
            "lat": 30.585164,
            "long": 36.238414
        },
        "#": 51,
        "Country": "Jordan",
        "Total Cases": 1746997,
        "Total Deaths": 14122,
        "Total Recovered": 1731007,
        "Active Cases": 1868,
        "Critical": 59,
        "Total Cases(1M pop)": 169597,
        "Deaths(1M pop)": 1371,
        "Total Tests": 17201885,
        "Tests(1M pop)": 1669945,
        "Population": 10300869
    },
    {
        "countryInfo": {
            "lat": 53.41291,
            "long": -8.24389
        },
        "#": 52,
        "Country": "Ireland",
        "Total Cases": 1734582,
        "Total Deaths": 9491,
        "Total Recovered": 1724921,
        "Active Cases": 170,
        "Critical": 19,
        "Total Cases(1M pop)": 345521,
        "Deaths(1M pop)": 1891,
        "Total Tests": 13083449,
        "Tests(1M pop)": 2606161,
        "Population": 5020199
    },
    {
        "countryInfo": {
            "lat": 30.375321,
            "long": 69.345116
        },
        "#": 53,
        "Country": "Pakistan",
        "Total Cases": 1581936,
        "Total Deaths": 30664,
        "Total Recovered": 1538689,
        "Active Cases": 12583,
        "Total Cases(1M pop)": 6893,
        "Deaths(1M pop)": 134,
        "Total Tests": 30589153,
        "Tests(1M pop)": 133292,
        "Population": 229488994
    },
    {
        "countryInfo": {
            "lat": 61.92411,
            "long": 25.748151
        },
        "#": 54,
        "Country": "Finland",
        "Total Cases": 1516117,
        "Total Deaths": 11958,
        "Total Recovered": 1503989,
        "New Recovered": 14,
        "Active Cases": 170,
        "Critical": 0,
        "Total Cases(1M pop)": 272930,
        "Deaths(1M pop)": 2153,
        "Total Tests": 12108977,
        "Tests(1M pop)": 2179850,
        "Population": 5554960
    },
    {
        "countryInfo": {
            "lat": 60.472024,
            "long": 8.468946
        },
        "#": 55,
        "Country": "Norway",
        "Total Cases": 1509732,
        "Total Deaths": 6638,
        "Total Recovered": 1503094,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 273930,
        "Deaths(1M pop)": 1204,
        "Total Tests": 11002430,
        "Tests(1M pop)": 1996315,
        "Population": 5511370
    },
    {
        "countryInfo": {
            "lat": 48.019573,
            "long": 66.923684
        },
        "#": 56,
        "Country": "Kazakhstan",
        "Total Cases": 1411831,
        "Total Deaths": 13848,
        "Total Recovered": 1383020,
        "Active Cases": 14963,
        "Critical": 24,
        "Total Cases(1M pop)": 73514,
        "Deaths(1M pop)": 721,
        "Total Tests": 11575012,
        "Tests(1M pop)": 602707,
        "Population": 19205043
    },
    {
        "countryInfo": {
            "lat": 55.169438,
            "long": 23.881275
        },
        "#": 57,
        "Country": "Lithuania",
        "Total Cases": 1397806,
        "Total Deaths": 9897,
        "Total Recovered": 1387478,
        "Active Cases": 431,
        "Critical": 0,
        "Total Cases(1M pop)": 525154,
        "Deaths(1M pop)": 3718,
        "Total Tests": 10540357,
        "Tests(1M pop)": 3959997,
        "Population": 2661708
    },
    {
        "countryInfo": {
            "lat": 46.151241,
            "long": 14.995463
        },
        "#": 58,
        "Country": "Slovenia",
        "Total Cases": 1356546,
        "Total Deaths": 7100,
        "Total Recovered": 1349424,
        "Active Cases": 22,
        "Critical": 0,
        "Total Cases(1M pop)": 652803,
        "Deaths(1M pop)": 3417,
        "Total Tests": 2847701,
        "Tests(1M pop)": 1370382,
        "Population": 2078034
    },
    {
        "countryInfo": {
            "lat": 42.733883,
            "long": 25.48583
        },
        "#": 59,
        "Country": "Bulgaria",
        "Total Cases": 1339851,
        "Total Deaths": 38748,
        "Total Recovered": 1292944,
        "Active Cases": 8159,
        "Critical": 22,
        "Total Cases(1M pop)": 195753,
        "Deaths(1M pop)": 5661,
        "Total Tests": 11671043,
        "Tests(1M pop)": 1705147,
        "Population": 6844597
    },
    {
        "countryInfo": {
            "lat": 45.1,
            "long": 15.2
        },
        "#": 60,
        "Country": "Croatia",
        "Total Cases": 1309728,
        "Total Deaths": 18687,
        "Total Recovered": 1258432,
        "Active Cases": 32609,
        "Total Cases(1M pop)": 322650,
        "Deaths(1M pop)": 4604,
        "Total Tests": 5660084,
        "Tests(1M pop)": 1394355,
        "Population": 4059286
    },
    {
        "countryInfo": {
            "lat": 15.783471,
            "long": -90.230759
        },
        "#": 61,
        "Country": "Guatemala",
        "Total Cases": 1291293,
        "Total Deaths": 20289,
        "Total Recovered": 1269891,
        "Active Cases": 1113,
        "Critical": 5,
        "Total Cases(1M pop)": 69484,
        "Deaths(1M pop)": 1092,
        "Total Tests": 7593848,
        "Tests(1M pop)": 408622,
        "Population": 18584039
    },
    {
        "countryInfo": {
            "lat": 31.791702,
            "long": -7.09262
        },
        "#": 62,
        "Country": "Morocco",
        "Total Cases": 1278992,
        "Total Deaths": 16303,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 33860,
        "Deaths(1M pop)": 432,
        "Total Tests": 13001033,
        "Tests(1M pop)": 344191,
        "Population": 37772756
    },
    {
        "countryInfo": {
            "lat": 33.854721,
            "long": 35.862285
        },
        "#": 63,
        "Country": "Lebanon",
        "Total Cases": 1243838,
        "Total Deaths": 10952,
        "Total Recovered": 1087587,
        "Active Cases": 145299,
        "Critical": 74,
        "Total Cases(1M pop)": 186068,
        "Deaths(1M pop)": 1638,
        "Total Tests": 4795578,
        "Tests(1M pop)": 717380,
        "Population": 6684849
    },
    {
        "countryInfo": {
            "lat": 9.748917,
            "long": -83.753428
        },
        "#": 64,
        "Country": "Costa Rica",
        "Total Cases": 1238883,
        "Total Deaths": 9428,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 239058,
        "Deaths(1M pop)": 1819,
        "Total Tests": 4659757,
        "Tests(1M pop)": 899158,
        "Population": 5182354
    },
    {
        "countryInfo": {
            "lat": -16.290154,
            "long": -63.588653
        },
        "#": 65,
        "Country": "Bolivia",
        "Total Cases": 1212131,
        "Total Deaths": 22407,
        "Total Recovered": 1177145,
        "Active Cases": 12579,
        "Critical": 220,
        "Total Cases(1M pop)": 101073,
        "Deaths(1M pop)": 1868,
        "Total Tests": 2710261,
        "Tests(1M pop)": 225993,
        "Population": 11992656
    },
    {
        "countryInfo": {
            "lat": 33.886917,
            "long": 9.537499
        },
        "#": 66,
        "Country": "Tunisia",
        "Total Cases": 1153361,
        "Total Deaths": 29423,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 95741,
        "Deaths(1M pop)": 2442,
        "Total Tests": 5013383,
        "Tests(1M pop)": 416164,
        "Population": 12046656
    },
    {
        "countryInfo": {
            "lat": 21.521757,
            "long": -77.781167
        },
        "#": 67,
        "Country": "Cuba",
        "Total Cases": 1115251,
        "Total Deaths": 8530,
        "Total Recovered": 1106660,
        "Active Cases": 61,
        "Total Cases(1M pop)": 98645,
        "Deaths(1M pop)": 754,
        "Total Tests": 14402674,
        "Tests(1M pop)": 1273936,
        "Population": 11305652
    },
    {
        "countryInfo": {
            "lat": -1.831239,
            "long": -78.183406
        },
        "#": 68,
        "Country": "Ecuador",
        "Total Cases": 1070188,
        "Total Deaths": 36043,
        "Total Recovered": 1034145,
        "Active Cases": 0,
        "Total Cases(1M pop)": 59083,
        "Deaths(1M pop)": 1990,
        "Total Tests": 3082403,
        "Tests(1M pop)": 170173,
        "Population": 18113361
    },
    {
        "#": 69,
        "Country": "UAE",
        "Total Cases": 1067030,
        "Total Deaths": 2349,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 105837,
        "Deaths(1M pop)": 233,
        "Total Tests": 200732262,
        "Tests(1M pop)": 19910389,
        "Population": 10081785
    },
    {
        "countryInfo": {
            "lat": 8.537981,
            "long": -80.782127
        },
        "#": 70,
        "Country": "Panama",
        "Total Cases": 1059893,
        "Total Deaths": 8727,
        "Total Recovered": 1051102,
        "Active Cases": 64,
        "Critical": 16,
        "Total Cases(1M pop)": 238341,
        "Deaths(1M pop)": 1962,
        "Total Tests": 7882622,
        "Tests(1M pop)": 1772585,
        "Population": 4446964
    },
    {
        "countryInfo": {
            "lat": -32.522779,
            "long": -55.765835
        },
        "#": 71,
        "Country": "Uruguay",
        "Total Cases": 1041111,
        "Total Deaths": 7664,
        "Total Recovered": 1030944,
        "Active Cases": 2503,
        "Critical": 18,
        "Total Cases(1M pop)": 297799,
        "Deaths(1M pop)": 2192,
        "Total Tests": 6114822,
        "Tests(1M pop)": 1749083,
        "Population": 3496016
    },
    {
        "countryInfo": {
            "lat": 46.862496,
            "long": 103.846656
        },
        "#": 72,
        "Country": "Mongolia",
        "Total Cases": 1011496,
        "Total Deaths": 2284,
        "Total Recovered": 1009212,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 299429,
        "Deaths(1M pop)": 676,
        "Total Tests": 4030048,
        "Tests(1M pop)": 1193000,
        "Population": 3378078
    },
    {
        "countryInfo": {
            "lat": 28.394857,
            "long": 84.124008
        },
        "#": 73,
        "Country": "Nepal",
        "Total Cases": 1003450,
        "Total Deaths": 12031,
        "Total Recovered": 991322,
        "Active Cases": 97,
        "Total Cases(1M pop)": 33199,
        "Deaths(1M pop)": 398,
        "Total Tests": 6047766,
        "Tests(1M pop)": 200088,
        "Population": 30225582
    },
    {
        "countryInfo": {
            "lat": 53.709807,
            "long": 27.953389
        },
        "#": 74,
        "Country": "Belarus",
        "Total Cases": 994037,
        "Total Deaths": 7118,
        "Total Recovered": 985592,
        "Active Cases": 1327,
        "Total Cases(1M pop)": 105381,
        "Deaths(1M pop)": 755,
        "Total Tests": 13646641,
        "Tests(1M pop)": 1446722,
        "Population": 9432800
    },
    {
        "countryInfo": {
            "lat": 56.879635,
            "long": 24.603189
        },
        "#": 75,
        "Country": "Latvia",
        "Total Cases": 982505,
        "Total Deaths": 6715,
        "Total Recovered": 971406,
        "Active Cases": 4384,
        "Total Cases(1M pop)": 531418,
        "Deaths(1M pop)": 3632,
        "Total Tests": 7885792,
        "Tests(1M pop)": 4265272,
        "Population": 1848837
    },
    {
        "countryInfo": {
            "lat": 23.885942,
            "long": 45.079162
        },
        "#": 76,
        "Country": "Saudi Arabia",
        "Total Cases": 841469,
        "Total Deaths": 9646,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 23475,
        "Deaths(1M pop)": 269,
        "Total Tests": 45481735,
        "Tests(1M pop)": 1268848,
        "Population": 35844909
    },
    {
        "countryInfo": {
            "lat": -23.442503,
            "long": -58.443832
        },
        "#": 77,
        "Country": "Paraguay",
        "Total Cases": 837602,
        "Total Deaths": 20155,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 114648,
        "Deaths(1M pop)": 2759,
        "Total Tests": 2657506,
        "Tests(1M pop)": 363751,
        "Population": 7305843
    },
    {
        "countryInfo": {
            "lat": 40.143105,
            "long": 47.576927
        },
        "#": 78,
        "Country": "Azerbaijan",
        "Total Cases": 835234,
        "Total Deaths": 10400,
        "Total Recovered": 824089,
        "Active Cases": 745,
        "Total Cases(1M pop)": 81089,
        "Deaths(1M pop)": 1010,
        "Total Tests": 7748050,
        "Tests(1M pop)": 752223,
        "Population": 10300205
    },
    {
        "countryInfo": {
            "lat": 25.930414,
            "long": 50.637772
        },
        "#": 79,
        "Country": "Bahrain",
        "Total Cases": 729549,
        "Total Deaths": 1574,
        "Total Recovered": 727915,
        "Active Cases": 60,
        "Critical": 0,
        "Total Cases(1M pop)": 408944,
        "Deaths(1M pop)": 882,
        "Total Tests": 10948549,
        "Tests(1M pop)": 6137138,
        "Population": 1783983
    },
    {
        "countryInfo": {
            "lat": 35.126413,
            "long": 33.429859
        },
        "#": 80,
        "Country": "Cyprus",
        "Total Cases": 681110,
        "Total Deaths": 1365,
        "Total Recovered": 679745,
        "Active Cases": 0,
        "Total Cases(1M pop)": 556741,
        "Deaths(1M pop)": 1116,
        "Total Tests": 9640118,
        "Tests(1M pop)": 7879860,
        "Population": 1223387
    },
    {
        "countryInfo": {
            "lat": 18.735693,
            "long": -70.162651
        },
        "#": 81,
        "Country": "Dominican Republic",
        "Total Cases": 675890,
        "Total Deaths": 4384,
        "Total Recovered": 671316,
        "Active Cases": 190,
        "Critical": 4,
        "Total Cases(1M pop)": 61131,
        "Deaths(1M pop)": 397,
        "Total Tests": 3740928,
        "Tests(1M pop)": 338350,
        "Population": 11056370
    },
    {
        "countryInfo": {
            "lat": 7.873054,
            "long": 80.771797
        },
        "#": 82,
        "Country": "Sri Lanka",
        "Total Cases": 672754,
        "Total Deaths": 16897,
        "Total Recovered": 655852,
        "Active Cases": 5,
        "Total Cases(1M pop)": 31181,
        "Deaths(1M pop)": 783,
        "Total Tests": 6486117,
        "Tests(1M pop)": 300619,
        "Population": 21575842
    },
    {
        "countryInfo": {
            "lat": 29.31166,
            "long": 47.481766
        },
        "#": 83,
        "Country": "Kuwait",
        "Total Cases": 667158,
        "Total Deaths": 2570,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 152308,
        "Deaths(1M pop)": 587,
        "Total Tests": 8455743,
        "Tests(1M pop)": 1930391,
        "Population": 4380326
    },
    {
        "#": 84,
        "Country": "Myanmar",
        "Total Cases": 641873,
        "Total Deaths": 19495,
        "Total Recovered": 620159,
        "Active Cases": 2219,
        "Total Cases(1M pop)": 11622,
        "Deaths(1M pop)": 353,
        "Total Tests": 11711514,
        "Tests(1M pop)": 212061,
        "Population": 55227143
    },
    {
        "countryInfo": {
            "lat": 47.411631,
            "long": 28.369885
        },
        "#": 85,
        "Country": "Moldova",
        "Total Cases": 635145,
        "Total Deaths": 12218,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 158265,
        "Deaths(1M pop)": 3044,
        "Total Tests": 3216305,
        "Tests(1M pop)": 801437,
        "Population": 4013171
    },
    {
        "countryInfo": {
            "lat": 58.595272,
            "long": 25.013607
        },
        "#": 86,
        "Country": "Estonia",
        "Total Cases": 628070,
        "Total Deaths": 3001,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 475123,
        "Deaths(1M pop)": 2270,
        "Total Tests": 6968103,
        "Tests(1M pop)": 5271239,
        "Population": 1321910
    },
    {
        "#": 87,
        "Country": "Palestine",
        "Total Cases": 621008,
        "Total Deaths": 5404,
        "Total Recovered": 615445,
        "Active Cases": 159,
        "Total Cases(1M pop)": 116173,
        "Deaths(1M pop)": 1011,
        "Total Tests": 3078533,
        "Tests(1M pop)": 575907,
        "Population": 5345541
    },
    {
        "countryInfo": {
            "lat": 6.42375,
            "long": -66.58973
        },
        "#": 88,
        "Country": "Venezuela",
        "Total Cases": 552695,
        "Total Deaths": 5856,
        "Total Recovered": 546537,
        "Active Cases": 302,
        "Critical": 31,
        "Total Cases(1M pop)": 18885,
        "Deaths(1M pop)": 200,
        "Total Tests": 3359014,
        "Tests(1M pop)": 114771,
        "Population": 29266991
    },
    {
        "countryInfo": {
            "lat": 26.820553,
            "long": 30.802498
        },
        "#": 89,
        "Country": "Egypt",
        "Total Cases": 516023,
        "Total Deaths": 24613,
        "Total Recovered": 442182,
        "Active Cases": 49228,
        "Critical": 122,
        "Total Cases(1M pop)": 4861,
        "Deaths(1M pop)": 232,
        "Total Tests": 3693367,
        "Tests(1M pop)": 34792,
        "Population": 106156692
    },
    {
        "countryInfo": {
            "lat": 25.354826,
            "long": 51.183884
        },
        "#": 90,
        "Country": "Qatar",
        "Total Cases": 514524,
        "Total Deaths": 690,
        "Total Recovered": 513687,
        "Active Cases": 147,
        "Critical": 16,
        "Total Cases(1M pop)": 172664,
        "Deaths(1M pop)": 232,
        "Total Tests": 4065369,
        "Tests(1M pop)": 1364257,
        "Population": 2979915
    },
    {
        "countryInfo": {
            "lat": 26.3351,
            "long": 17.228331
        },
        "#": 91,
        "Country": "Libya",
        "Total Cases": 507274,
        "Total Deaths": 6437,
        "Total Recovered": 500835,
        "Active Cases": 2,
        "Total Cases(1M pop)": 72048,
        "Deaths(1M pop)": 914,
        "Total Tests": 2483848,
        "Tests(1M pop)": 352782,
        "Population": 7040745
    },
    {
        "countryInfo": {
            "lat": 35.86166,
            "long": 104.195397
        },
        "#": 92,
        "Country": "China",
        "Total Cases": 503302,
        "Total Deaths": 5272,
        "Total Recovered": 379053,
        "Active Cases": 118977,
        "Critical": 0,
        "Total Cases(1M pop)": 347,
        "Deaths(1M pop)": 4,
        "Total Tests": 160000000,
        "Tests(1M pop)": 110461,
        "Population": 1448471400
    },
    {
        "countryInfo": {
            "lat": 9.145,
            "long": 40.489673
        },
        "#": 93,
        "Country": "Ethiopia",
        "Total Cases": 501157,
        "Total Deaths": 7574,
        "Total Recovered": 488171,
        "Active Cases": 5412,
        "Total Cases(1M pop)": 4148,
        "Deaths(1M pop)": 63,
        "Total Tests": 5565340,
        "Tests(1M pop)": 46066,
        "Population": 120812698
    },
    {
        "countryInfo": {
            "lat": -21.115141,
            "long": 55.536384
        },
        "#": 94,
        "Country": "Réunion",
        "Total Cases": 494595,
        "Total Deaths": 921,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 544672,
        "Deaths(1M pop)": 1014,
        "Total Tests": 1603660,
        "Tests(1M pop)": 1766027,
        "Population": 908061
    },
    {
        "countryInfo": {
            "lat": 15.199999,
            "long": -86.241905
        },
        "#": 95,
        "Country": "Honduras",
        "Total Cases": 474590,
        "Total Deaths": 11165,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 46432,
        "Deaths(1M pop)": 1092,
        "Total Tests": 1660662,
        "Tests(1M pop)": 162472,
        "Population": 10221247
    },
    {
        "countryInfo": {
            "lat": 40.069099,
            "long": 45.038189
        },
        "#": 96,
        "Country": "Armenia",
        "Total Cases": 451831,
        "Total Deaths": 8777,
        "Total Recovered": 435162,
        "Active Cases": 7892,
        "Total Cases(1M pop)": 152031,
        "Deaths(1M pop)": 2953,
        "Total Tests": 3242901,
        "Tests(1M pop)": 1091164,
        "Population": 2971966
    },
    {
        "countryInfo": {
            "lat": 43.915886,
            "long": 17.679076
        },
        "#": 97,
        "Country": "Bosnia and Herzegovina",
        "Total Cases": 403615,
        "Total Deaths": 16388,
        "Total Recovered": 379084,
        "Active Cases": 8143,
        "Total Cases(1M pop)": 124215,
        "Deaths(1M pop)": 5044,
        "Total Tests": 1884721,
        "Tests(1M pop)": 580036,
        "Population": 3249317
    },
    {
        "countryInfo": {
            "lat": 21.512583,
            "long": 55.923255
        },
        "#": 98,
        "Country": "Oman",
        "Total Cases": 399449,
        "Total Deaths": 4628,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 75028,
        "Deaths(1M pop)": 869,
        "Total Tests": 25000000,
        "Tests(1M pop)": 4695724,
        "Population": 5323993
    },
    {
        "countryInfo": {
            "lat": 49.815273,
            "long": 6.129583
        },
        "#": 99,
        "Country": "Luxembourg",
        "Total Cases": 391232,
        "Total Deaths": 1232,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 609044,
        "Deaths(1M pop)": 1918,
        "Total Tests": 4587145,
        "Tests(1M pop)": 7140959,
        "Population": 642371
    },
    {
        "#": 100,
        "Country": "North Macedonia",
        "Total Cases": 350567,
        "Total Deaths": 9976,
        "Total Recovered": 337068,
        "Active Cases": 3523,
        "Total Cases(1M pop)": 168436,
        "Deaths(1M pop)": 4793,
        "Total Tests": 2226216,
        "Tests(1M pop)": 1069626,
        "Population": 2081304
    },
    {
        "countryInfo": {
            "lat": -13.133897,
            "long": 27.849332
        },
        "#": 101,
        "Country": "Zambia",
        "Total Cases": 349304,
        "Total Deaths": 4069,
        "Total Recovered": 341316,
        "Active Cases": 3919,
        "Total Cases(1M pop)": 17940,
        "Deaths(1M pop)": 209,
        "Total Tests": 4112961,
        "Tests(1M pop)": 211244,
        "Population": 19470234
    },
    {
        "countryInfo": {
            "lat": -0.023559,
            "long": 37.906193
        },
        "#": 102,
        "Country": "Kenya",
        "Total Cases": 344130,
        "Total Deaths": 5689,
        "Total Recovered": 337309,
        "Active Cases": 1132,
        "Critical": 0,
        "Total Cases(1M pop)": 6122,
        "Deaths(1M pop)": 101,
        "Total Tests": 3967062,
        "Tests(1M pop)": 70569,
        "Population": 56215221
    },
    {
        "countryInfo": {
            "lat": 4.535277,
            "long": 114.727669
        },
        "#": 103,
        "Country": "Brunei",
        "Total Cases": 343719,
        "Total Deaths": 225,
        "Total Recovered": 243601,
        "Active Cases": 99893,
        "Critical": 3,
        "Total Cases(1M pop)": 771655,
        "Deaths(1M pop)": 505,
        "Total Tests": 717784,
        "Tests(1M pop)": 1611437,
        "Population": 445431
    },
    {
        "countryInfo": {
            "lat": 41.153332,
            "long": 20.168331
        },
        "#": 104,
        "Country": "Albania",
        "Total Cases": 334863,
        "Total Deaths": 3605,
        "Total Recovered": 330233,
        "Active Cases": 1025,
        "Total Cases(1M pop)": 116825,
        "Deaths(1M pop)": 1258,
        "Total Tests": 1941032,
        "Tests(1M pop)": 677173,
        "Population": 2866374
    },
    {
        "countryInfo": {
            "lat": -22.328474,
            "long": 24.684866
        },
        "#": 105,
        "Country": "Botswana",
        "Total Cases": 330638,
        "Total Deaths": 2801,
        "Total Recovered": 327049,
        "Active Cases": 788,
        "Critical": 1,
        "Total Cases(1M pop)": 135443,
        "Deaths(1M pop)": 1147,
        "Total Tests": 2026898,
        "Tests(1M pop)": 830300,
        "Population": 2441162
    },
    {
        "countryInfo": {
            "lat": 42.708678,
            "long": 19.37439
        },
        "#": 106,
        "Country": "Montenegro",
        "Total Cases": 296542,
        "Total Deaths": 2846,
        "Total Recovered": 291794,
        "Active Cases": 1902,
        "Critical": 0,
        "Total Cases(1M pop)": 472238,
        "Deaths(1M pop)": 4532,
        "Total Tests": 2769281,
        "Tests(1M pop)": 4410034,
        "Population": 627950
    },
    {
        "countryInfo": {
            "lat": 28.033886,
            "long": 1.659626
        },
        "#": 107,
        "Country": "Algeria",
        "Total Cases": 272010,
        "Total Deaths": 6881,
        "Total Recovered": 183061,
        "Active Cases": 82068,
        "Total Cases(1M pop)": 5998,
        "Deaths(1M pop)": 152,
        "Total Tests": 230960,
        "Tests(1M pop)": 5093,
        "Population": 45350148
    },
    {
        "countryInfo": {
            "lat": 9.081999,
            "long": 8.675277
        },
        "#": 108,
        "Country": "Nigeria",
        "Total Cases": 267188,
        "Total Deaths": 3155,
        "Total Recovered": 259953,
        "Active Cases": 4080,
        "Critical": 11,
        "Total Cases(1M pop)": 1233,
        "Deaths(1M pop)": 15,
        "Total Tests": 5708974,
        "Tests(1M pop)": 26339,
        "Population": 216746934
    },
    {
        "countryInfo": {
            "lat": -19.015438,
            "long": 29.154857
        },
        "#": 109,
        "Country": "Zimbabwe",
        "Total Cases": 266359,
        "Total Deaths": 5740,
        "Total Recovered": 258888,
        "Active Cases": 1731,
        "Critical": 12,
        "Total Cases(1M pop)": 17373,
        "Deaths(1M pop)": 374,
        "Total Tests": 2525756,
        "Tests(1M pop)": 164744,
        "Population": 15331428
    },
    {
        "countryInfo": {
            "lat": 41.377491,
            "long": 64.585262
        },
        "#": 110,
        "Country": "Uzbekistan",
        "Total Cases": 253662,
        "Total Deaths": 1637,
        "Total Recovered": 241486,
        "Active Cases": 10539,
        "Critical": 23,
        "Total Cases(1M pop)": 7378,
        "Deaths(1M pop)": 48,
        "Total Tests": 1377915,
        "Tests(1M pop)": 40077,
        "Population": 34382084
    },
    {
        "countryInfo": {
            "lat": 33.93911,
            "long": 67.709953
        },
        "#": 111,
        "Country": "Afghanistan",
        "Total Cases": 234174,
        "Total Deaths": 7996,
        "Total Recovered": 211080,
        "Active Cases": 15098,
        "Total Cases(1M pop)": 5746,
        "Deaths(1M pop)": 196,
        "Total Tests": 1390730,
        "Tests(1M pop)": 34125,
        "Population": 40754388
    },
    {
        "countryInfo": {
            "lat": -18.665695,
            "long": 35.529562
        },
        "#": 112,
        "Country": "Mozambique",
        "Total Cases": 233731,
        "Total Deaths": 2250,
        "Total Recovered": 228805,
        "Active Cases": 2676,
        "Critical": 11,
        "Total Cases(1M pop)": 7064,
        "Deaths(1M pop)": 68,
        "Total Tests": 1371127,
        "Tests(1M pop)": 41437,
        "Population": 33089461
    },
    {
        "countryInfo": {
            "lat": 14.641528,
            "long": -61.024174
        },
        "#": 113,
        "Country": "Martinique",
        "Total Cases": 230354,
        "Total Deaths": 1102,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 615777,
        "Deaths(1M pop)": 2946,
        "Total Tests": 828928,
        "Tests(1M pop)": 2215870,
        "Population": 374087
    },
    {
        "countryInfo": {
            "lat": 19.85627,
            "long": 102.495496
        },
        "#": 114,
        "Country": "Laos",
        "Total Cases": 218970,
        "Total Deaths": 758,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 29270,
        "Deaths(1M pop)": 101,
        "Total Tests": 1233207,
        "Tests(1M pop)": 164845,
        "Population": 7481023
    },
    {
        "countryInfo": {
            "lat": 64.963051,
            "long": -19.020835
        },
        "#": 115,
        "Country": "Iceland",
        "Total Cases": 209906,
        "Total Deaths": 229,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 607731,
        "Deaths(1M pop)": 663,
        "Total Tests": 1996384,
        "Tests(1M pop)": 5780036,
        "Population": 345393
    },
    {
        "countryInfo": {
            "lat": 41.20438,
            "long": 74.766098
        },
        "#": 116,
        "Country": "Kyrgyzstan",
        "Total Cases": 206897,
        "Total Deaths": 2991,
        "Total Recovered": 196406,
        "Active Cases": 7500,
        "Critical": 131,
        "Total Cases(1M pop)": 30750,
        "Deaths(1M pop)": 445,
        "Total Tests": 1907195,
        "Tests(1M pop)": 283460,
        "Population": 6728271
    },
    {
        "countryInfo": {
            "lat": 16.995971,
            "long": -62.067641
        },
        "#": 117,
        "Country": "Guadeloupe",
        "Total Cases": 203235,
        "Total Deaths": 1021,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 508349,
        "Deaths(1M pop)": 2554,
        "Total Tests": 938039,
        "Tests(1M pop)": 2346306,
        "Population": 399794
    },
    {
        "countryInfo": {
            "lat": 13.794185,
            "long": -88.89653
        },
        "#": 118,
        "Country": "El Salvador",
        "Total Cases": 201855,
        "Total Deaths": 4230,
        "Total Recovered": 179410,
        "Active Cases": 18215,
        "Total Cases(1M pop)": 30816,
        "Deaths(1M pop)": 646,
        "Total Tests": 2610114,
        "Tests(1M pop)": 398467,
        "Population": 6550389
    },
    {
        "countryInfo": {
            "lat": 10.691803,
            "long": -61.222503
        },
        "#": 119,
        "Country": "Trinidad and Tobago",
        "Total Cases": 191496,
        "Total Deaths": 4390,
        "Total Recovered": 187078,
        "Active Cases": 28,
        "Critical": 0,
        "Total Cases(1M pop)": 136143,
        "Deaths(1M pop)": 3121,
        "Total Tests": 913289,
        "Tests(1M pop)": 649295,
        "Population": 1406585
    },
    {
        "countryInfo": {
            "lat": 3.202778,
            "long": 73.22068
        },
        "#": 120,
        "Country": "Maldives",
        "Total Cases": 186694,
        "Total Deaths": 316,
        "Total Recovered": 163687,
        "Active Cases": 22691,
        "Critical": 25,
        "Total Cases(1M pop)": 345100,
        "Deaths(1M pop)": 584,
        "Total Tests": 2213831,
        "Tests(1M pop)": 4092223,
        "Population": 540985
    },
    {
        "countryInfo": {
            "lat": -22.95764,
            "long": 18.49041
        },
        "#": 121,
        "Country": "Namibia",
        "Total Cases": 172389,
        "Total Deaths": 4106,
        "Total Recovered": 167099,
        "Active Cases": 1184,
        "Total Cases(1M pop)": 65451,
        "Deaths(1M pop)": 1559,
        "Total Tests": 1062663,
        "Tests(1M pop)": 403460,
        "Population": 2633874
    },
    {
        "countryInfo": {
            "lat": 1.373333,
            "long": 32.290275
        },
        "#": 122,
        "Country": "Uganda",
        "Total Cases": 172149,
        "Total Deaths": 3632,
        "Total Recovered": 100431,
        "Active Cases": 68086,
        "Total Cases(1M pop)": 3554,
        "Deaths(1M pop)": 75,
        "Total Tests": 3012408,
        "Tests(1M pop)": 62198,
        "Population": 48432863
    },
    {
        "countryInfo": {
            "lat": 7.946527,
            "long": -1.023194
        },
        "#": 123,
        "Country": "Ghana",
        "Total Cases": 171889,
        "Total Deaths": 1462,
        "Total Recovered": 170425,
        "Active Cases": 2,
        "Total Cases(1M pop)": 5306,
        "Deaths(1M pop)": 45,
        "Total Tests": 2541625,
        "Tests(1M pop)": 78456,
        "Population": 32395450
    },
    {
        "countryInfo": {
            "lat": 18.109581,
            "long": -77.297508
        },
        "#": 124,
        "Country": "Jamaica",
        "Total Cases": 156869,
        "Total Deaths": 3756,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 52551,
        "Deaths(1M pop)": 1258,
        "Total Tests": 1183986,
        "Tests(1M pop)": 396633,
        "Population": 2985094
    },
    {
        "countryInfo": {
            "lat": 12.565679,
            "long": 104.990963
        },
        "#": 125,
        "Country": "Cambodia",
        "Total Cases": 139103,
        "Total Deaths": 3056,
        "Total Recovered": 136044,
        "Active Cases": 3,
        "Total Cases(1M pop)": 8102,
        "Deaths(1M pop)": 178,
        "Total Tests": 3091420,
        "Tests(1M pop)": 180062,
        "Population": 17168639
    },
    {
        "countryInfo": {
            "lat": -1.940278,
            "long": 29.873888
        },
        "#": 126,
        "Country": "Rwanda",
        "Total Cases": 133518,
        "Total Deaths": 1468,
        "Total Recovered": 132039,
        "Active Cases": 11,
        "Total Cases(1M pop)": 9817,
        "Deaths(1M pop)": 108,
        "Total Tests": 6021981,
        "Tests(1M pop)": 442778,
        "Population": 13600464
    },
    {
        "countryInfo": {
            "lat": 7.369722,
            "long": 12.354722
        },
        "#": 127,
        "Country": "Cameroon",
        "Total Cases": 125379,
        "Total Deaths": 1974,
        "Total Recovered": 123280,
        "Active Cases": 125,
        "Critical": 0,
        "Total Cases(1M pop)": 4492,
        "Deaths(1M pop)": 71,
        "Total Tests": 1751774,
        "Tests(1M pop)": 62762,
        "Population": 27911548
    },
    {
        "countryInfo": {
            "lat": 35.937496,
            "long": 14.375416
        },
        "#": 128,
        "Country": "Malta",
        "Total Cases": 121420,
        "Total Deaths": 885,
        "Total Recovered": 120149,
        "Active Cases": 386,
        "Total Cases(1M pop)": 273448,
        "Deaths(1M pop)": 1993,
        "Total Tests": 2170600,
        "Tests(1M pop)": 4888375,
        "Population": 444033
    },
    {
        "countryInfo": {
            "lat": 13.193887,
            "long": -59.543198
        },
        "#": 129,
        "Country": "Barbados",
        "Total Cases": 110578,
        "Total Deaths": 648,
        "Total Recovered": 108647,
        "Active Cases": 1283,
        "Total Cases(1M pop)": 383921,
        "Deaths(1M pop)": 2250,
        "Total Tests": 814159,
        "Tests(1M pop)": 2826715,
        "Population": 288023
    },
    {
        "countryInfo": {
            "lat": -11.202692,
            "long": 17.873887
        },
        "#": 130,
        "Country": "Angola",
        "Total Cases": 107327,
        "Total Deaths": 1937,
        "Total Recovered": 103419,
        "Active Cases": 1971,
        "Total Cases(1M pop)": 3064,
        "Deaths(1M pop)": 55,
        "Total Tests": 1499795,
        "Tests(1M pop)": 42818,
        "Population": 35027343
    },
    {
        "#": 131,
        "Country": "Channel Islands",
        "Total Cases": 101717,
        "Total Deaths": 228,
        "Total Recovered": 101321,
        "Active Cases": 168,
        "Total Cases(1M pop)": 576421,
        "Deaths(1M pop)": 1292,
        "Total Tests": 1252808,
        "Tests(1M pop)": 7099551,
        "Population": 176463
    },
    {
        "#": 132,
        "Country": "DRC",
        "Total Cases": 99338,
        "Total Deaths": 1468,
        "Total Recovered": 84489,
        "Active Cases": 13381,
        "Total Cases(1M pop)": 1043,
        "Deaths(1M pop)": 15,
        "Total Tests": 846704,
        "Tests(1M pop)": 8890,
        "Population": 95240792
    },
    {
        "countryInfo": {
            "lat": 3.933889,
            "long": -53.125782
        },
        "#": 133,
        "Country": "French Guiana",
        "Total Cases": 98041,
        "Total Deaths": 420,
        "Total Recovered": 11254,
        "Active Cases": 86367,
        "Critical": 6,
        "Total Cases(1M pop)": 312065,
        "Deaths(1M pop)": 1337,
        "Total Tests": 651257,
        "Tests(1M pop)": 2072951,
        "Population": 314169
    },
    {
        "countryInfo": {
            "lat": -13.254308,
            "long": 34.301525
        },
        "#": 134,
        "Country": "Malawi",
        "Total Cases": 89535,
        "Total Deaths": 2686,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 4437,
        "Deaths(1M pop)": 133,
        "Total Tests": 624784,
        "Tests(1M pop)": 30959,
        "Population": 20180839
    },
    {
        "countryInfo": {
            "lat": 14.497401,
            "long": -14.452362
        },
        "#": 135,
        "Country": "Senegal",
        "Total Cases": 89053,
        "Total Deaths": 1971,
        "Total Recovered": 87024,
        "Active Cases": 58,
        "Total Cases(1M pop)": 5044,
        "Deaths(1M pop)": 112,
        "Total Tests": 1146543,
        "Tests(1M pop)": 64946,
        "Population": 17653671
    },
    {
        "#": 136,
        "Country": "Ivory Coast",
        "Total Cases": 88384,
        "Total Deaths": 835,
        "Total Recovered": 87497,
        "Active Cases": 52,
        "Total Cases(1M pop)": 3186,
        "Deaths(1M pop)": 30,
        "Total Tests": 1690934,
        "Tests(1M pop)": 60951,
        "Population": 27742298
    },
    {
        "countryInfo": {
            "lat": 3.919305,
            "long": -56.027783
        },
        "#": 137,
        "Country": "Suriname",
        "Total Cases": 82588,
        "Total Deaths": 1408,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 138378,
        "Deaths(1M pop)": 2359,
        "Total Tests": 242207,
        "Tests(1M pop)": 405822,
        "Population": 596831
    },
    {
        "countryInfo": {
            "lat": -20.904305,
            "long": 165.618042
        },
        "#": 138,
        "Country": "New Caledonia",
        "Total Cases": 80064,
        "Total Deaths": 314,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 275214,
        "Deaths(1M pop)": 1079,
        "Total Tests": 98964,
        "Tests(1M pop)": 340182,
        "Population": 290915
    },
    {
        "countryInfo": {
            "lat": -17.679742,
            "long": -149.406843
        },
        "#": 139,
        "Country": "French Polynesia",
        "Total Cases": 79254,
        "Total Deaths": 650,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 278902,
        "Deaths(1M pop)": 2287,
        "Population": 284164
    },
    {
        "#": 140,
        "Country": "Eswatini",
        "Total Cases": 75191,
        "Total Deaths": 1427,
        "Total Recovered": 73116,
        "Active Cases": 648,
        "Total Cases(1M pop)": 63462,
        "Deaths(1M pop)": 1204,
        "Total Tests": 1048704,
        "Tests(1M pop)": 885119,
        "Population": 1184817
    },
    {
        "countryInfo": {
            "lat": 4.860416,
            "long": -58.93018
        },
        "#": 141,
        "Country": "Guyana",
        "Total Cases": 74137,
        "Total Deaths": 1300,
        "Total Recovered": 72013,
        "Active Cases": 824,
        "Total Cases(1M pop)": 93366,
        "Deaths(1M pop)": 1637,
        "Total Tests": 733218,
        "Tests(1M pop)": 923396,
        "Population": 794045
    },
    {
        "countryInfo": {
            "lat": 17.189877,
            "long": -88.49765
        },
        "#": 142,
        "Country": "Belize",
        "Total Cases": 71409,
        "Total Deaths": 688,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 173243,
        "Deaths(1M pop)": 1669,
        "Total Tests": 576016,
        "Tests(1M pop)": 1397453,
        "Population": 412190
    },
    {
        "countryInfo": {
            "lat": -16.578193,
            "long": 179.414413
        },
        "#": 143,
        "Country": "Fiji",
        "Total Cases": 69117,
        "Total Deaths": 885,
        "Total Recovered": 67226,
        "Active Cases": 1006,
        "Total Cases(1M pop)": 75997,
        "Deaths(1M pop)": 973,
        "Total Tests": 672883,
        "Tests(1M pop)": 739866,
        "Population": 909466
    },
    {
        "countryInfo": {
            "lat": -18.766947,
            "long": 46.869107
        },
        "#": 144,
        "Country": "Madagascar",
        "Total Cases": 68486,
        "Total Deaths": 1426,
        "Total Recovered": 66862,
        "Active Cases": 198,
        "Total Cases(1M pop)": 2347,
        "Deaths(1M pop)": 49,
        "Total Tests": 531329,
        "Tests(1M pop)": 18210,
        "Population": 29178077
    },
    {
        "#": 145,
        "Country": "Cabo Verde",
        "Total Cases": 64477,
        "Total Deaths": 417,
        "Total Recovered": 63755,
        "Active Cases": 305,
        "Critical": 23,
        "Total Cases(1M pop)": 113580,
        "Deaths(1M pop)": 735,
        "Total Tests": 401622,
        "Tests(1M pop)": 707482,
        "Population": 567678
    },
    {
        "countryInfo": {
            "lat": 12.862807,
            "long": 30.217636
        },
        "#": 146,
        "Country": "Sudan",
        "Total Cases": 63993,
        "Total Deaths": 5046,
        "Total Recovered": 58947,
        "Active Cases": 0,
        "Total Cases(1M pop)": 1391,
        "Deaths(1M pop)": 110,
        "Total Tests": 562941,
        "Tests(1M pop)": 12240,
        "Population": 45992020
    },
    {
        "countryInfo": {
            "lat": 21.00789,
            "long": -10.940835
        },
        "#": 147,
        "Country": "Mauritania",
        "Total Cases": 63848,
        "Total Deaths": 997,
        "Total Recovered": 62471,
        "Active Cases": 380,
        "Total Cases(1M pop)": 13025,
        "Deaths(1M pop)": 203,
        "Total Tests": 1009957,
        "Tests(1M pop)": 206030,
        "Population": 4901981
    },
    {
        "countryInfo": {
            "lat": 27.514162,
            "long": 90.433601
        },
        "#": 148,
        "Country": "Bhutan",
        "Total Cases": 62697,
        "Total Deaths": 21,
        "Total Recovered": 61564,
        "Active Cases": 1112,
        "Total Cases(1M pop)": 79571,
        "Deaths(1M pop)": 27,
        "Total Tests": 2303734,
        "Tests(1M pop)": 2923739,
        "Population": 787941
    },
    {
        "countryInfo": {
            "lat": 34.802075,
            "long": 38.996815
        },
        "#": 149,
        "Country": "Syria",
        "Total Cases": 57743,
        "Total Deaths": 3165,
        "Total Recovered": 54578,
        "Active Cases": 0,
        "Total Cases(1M pop)": 2982,
        "Deaths(1M pop)": 163,
        "Total Tests": 146269,
        "Tests(1M pop)": 7553,
        "Population": 19364809
    },
    {
        "countryInfo": {
            "lat": -3.373056,
            "long": 29.918886
        },
        "#": 150,
        "Country": "Burundi",
        "Total Cases": 54721,
        "Total Deaths": 38,
        "Total Recovered": 53569,
        "Active Cases": 1114,
        "Total Cases(1M pop)": 4334,
        "Deaths(1M pop)": 3,
        "Total Tests": 345742,
        "Tests(1M pop)": 27386,
        "Population": 12624840
    },
    {
        "countryInfo": {
            "lat": -4.679574,
            "long": 55.491977
        },
        "#": 151,
        "Country": "Seychelles",
        "Total Cases": 51220,
        "Total Deaths": 172,
        "Total Recovered": 51048,
        "Active Cases": 0,
        "Total Cases(1M pop)": 515157,
        "Deaths(1M pop)": 1730,
        "Population": 99426
    },
    {
        "countryInfo": {
            "lat": -0.803689,
            "long": 11.609444
        },
        "#": 152,
        "Country": "Gabon",
        "Total Cases": 49051,
        "Total Deaths": 307,
        "Total Recovered": 48674,
        "Active Cases": 70,
        "Total Cases(1M pop)": 21038,
        "Deaths(1M pop)": 132,
        "Total Tests": 1621909,
        "Tests(1M pop)": 695641,
        "Population": 2331533
    },
    {
        "countryInfo": {
            "lat": 42.546245,
            "long": 1.601554
        },
        "#": 153,
        "Country": "Andorra",
        "Total Cases": 48015,
        "Total Deaths": 165,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 619844,
        "Deaths(1M pop)": 2130,
        "Total Tests": 249838,
        "Tests(1M pop)": 3225256,
        "Population": 77463
    },
    {
        "countryInfo": {
            "lat": -6.314993,
            "long": 143.95555
        },
        "#": 154,
        "Country": "Papua New Guinea",
        "Total Cases": 46864,
        "Total Deaths": 670,
        "Total Recovered": 46168,
        "Active Cases": 26,
        "Critical": 0,
        "Total Cases(1M pop)": 5043,
        "Deaths(1M pop)": 72,
        "Total Tests": 249149,
        "Tests(1M pop)": 26813,
        "Population": 9292169
    },
    {
        "#": 155,
        "Country": "Curaçao",
        "Total Cases": 45986,
        "Total Deaths": 295,
        "Total Recovered": 44720,
        "Active Cases": 971,
        "Critical": 3,
        "Total Cases(1M pop)": 277812,
        "Deaths(1M pop)": 1782,
        "Total Tests": 496693,
        "Tests(1M pop)": 3000640,
        "Population": 165529
    },
    {
        "countryInfo": {
            "lat": 12.52111,
            "long": -69.968338
        },
        "#": 156,
        "Country": "Aruba",
        "Total Cases": 44224,
        "Total Deaths": 292,
        "Total Recovered": 42438,
        "Active Cases": 1494,
        "Critical": 2,
        "Total Cases(1M pop)": 410969,
        "Deaths(1M pop)": 2714,
        "Total Tests": 177885,
        "Tests(1M pop)": 1653068,
        "Population": 107609
    },
    {
        "countryInfo": {
            "lat": -6.369028,
            "long": 34.888822
        },
        "#": 157,
        "Country": "Tanzania",
        "Total Cases": 43223,
        "Total Deaths": 846,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 683,
        "Deaths(1M pop)": 13,
        "Population": 63298550
    },
    {
        "countryInfo": {
            "lat": -20.348404,
            "long": 57.552152
        },
        "#": 158,
        "Country": "Mauritius",
        "Total Cases": 43025,
        "Total Deaths": 1051,
        "Total Recovered": 41278,
        "Active Cases": 696,
        "Total Cases(1M pop)": 33752,
        "Deaths(1M pop)": 824,
        "Total Tests": 358675,
        "Tests(1M pop)": 281374,
        "Population": 1274727
    },
    {
        "countryInfo": {
            "lat": -12.8275,
            "long": 45.166244
        },
        "#": 159,
        "Country": "Mayotte",
        "Total Cases": 42027,
        "Total Deaths": 188,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 146815,
        "Deaths(1M pop)": 657,
        "Total Tests": 176919,
        "Tests(1M pop)": 618038,
        "Population": 286259
    },
    {
        "countryInfo": {
            "lat": 8.619543,
            "long": 0.824782
        },
        "#": 160,
        "Country": "Togo",
        "Total Cases": 39572,
        "Total Deaths": 290,
        "Total Recovered": 39281,
        "Active Cases": 1,
        "Total Cases(1M pop)": 4559,
        "Deaths(1M pop)": 33,
        "Total Tests": 815204,
        "Tests(1M pop)": 93908,
        "Population": 8680837
    },
    {
        "countryInfo": {
            "lat": 9.945587,
            "long": -9.696645
        },
        "#": 161,
        "Country": "Guinea",
        "Total Cases": 38572,
        "Total Deaths": 468,
        "Total Recovered": 37757,
        "Active Cases": 347,
        "Critical": 0,
        "Total Cases(1M pop)": 2782,
        "Deaths(1M pop)": 34,
        "Total Tests": 660107,
        "Tests(1M pop)": 47607,
        "Population": 13865691
    },
    {
        "countryInfo": {
            "lat": 25.03428,
            "long": -77.39628
        },
        "#": 162,
        "Country": "Bahamas",
        "Total Cases": 38084,
        "Total Deaths": 844,
        "Total Recovered": 36366,
        "Active Cases": 874,
        "Critical": 1,
        "Total Cases(1M pop)": 95087,
        "Deaths(1M pop)": 2107,
        "Total Tests": 257839,
        "Tests(1M pop)": 643767,
        "Population": 400516
    },
    {
        "countryInfo": {
            "lat": 54.236107,
            "long": -4.548056
        },
        "#": 163,
        "Country": "Isle of Man",
        "Total Cases": 38008,
        "Total Deaths": 116,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 443335,
        "Deaths(1M pop)": 1353,
        "Total Tests": 150753,
        "Tests(1M pop)": 1758422,
        "Population": 85732
    },
    {
        "countryInfo": {
            "lat": -29.609988,
            "long": 28.233608
        },
        "#": 164,
        "Country": "Lesotho",
        "Total Cases": 36138,
        "Total Deaths": 723,
        "Total Recovered": 25980,
        "Active Cases": 9435,
        "Total Cases(1M pop)": 16610,
        "Deaths(1M pop)": 332,
        "Total Tests": 431221,
        "Tests(1M pop)": 198199,
        "Population": 2175699
    },
    {
        "countryInfo": {
            "lat": 18.971187,
            "long": -72.285215
        },
        "#": 165,
        "Country": "Haiti",
        "Total Cases": 34667,
        "Total Deaths": 860,
        "Total Recovered": 33734,
        "Active Cases": 73,
        "Total Cases(1M pop)": 2968,
        "Deaths(1M pop)": 74,
        "Total Tests": 132422,
        "Tests(1M pop)": 11337,
        "Population": 11680283
    },
    {
        "#": 166,
        "Country": "Faeroe Islands",
        "Total Cases": 34658,
        "Total Deaths": 28,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 703959,
        "Deaths(1M pop)": 569,
        "Total Tests": 778000,
        "Tests(1M pop)": 15802409,
        "Population": 49233
    },
    {
        "countryInfo": {
            "lat": 17.570692,
            "long": -3.996166
        },
        "#": 167,
        "Country": "Mali",
        "Total Cases": 33164,
        "Total Deaths": 743,
        "Total Recovered": 32332,
        "Active Cases": 89,
        "Total Cases(1M pop)": 1544,
        "Deaths(1M pop)": 35,
        "Total Tests": 804909,
        "Tests(1M pop)": 37483,
        "Population": 21473764
    },
    {
        "countryInfo": {
            "lat": 19.513469,
            "long": -80.566956
        },
        "#": 168,
        "Country": "Cayman Islands",
        "Total Cases": 31472,
        "Total Deaths": 37,
        "Total Recovered": 8553,
        "Active Cases": 22882,
        "Critical": 1,
        "Total Cases(1M pop)": 467797,
        "Deaths(1M pop)": 550,
        "Total Tests": 222773,
        "Tests(1M pop)": 3311280,
        "Population": 67277
    },
    {
        "countryInfo": {
            "lat": 13.909444,
            "long": -60.978893
        },
        "#": 169,
        "Country": "Saint Lucia",
        "Total Cases": 30215,
        "Total Deaths": 410,
        "Total Recovered": 29805,
        "Active Cases": 0,
        "Total Cases(1M pop)": 163225,
        "Deaths(1M pop)": 2215,
        "Total Tests": 210983,
        "Tests(1M pop)": 1139752,
        "Population": 185113
    },
    {
        "countryInfo": {
            "lat": 9.30769,
            "long": 2.315834
        },
        "#": 170,
        "Country": "Benin",
        "Total Cases": 28036,
        "Total Deaths": 163,
        "Total Recovered": 27847,
        "Active Cases": 26,
        "Total Cases(1M pop)": 2193,
        "Deaths(1M pop)": 13,
        "Total Tests": 604310,
        "Tests(1M pop)": 47268,
        "Population": 12784726
    },
    {
        "#": 171,
        "Country": "Macao",
        "Total Cases": 27673,
        "Total Deaths": 123,
        "Total Recovered": 3487,
        "Active Cases": 24063,
        "Total Cases(1M pop)": 41458,
        "Deaths(1M pop)": 184,
        "Total Tests": 7850,
        "Tests(1M pop)": 11760,
        "Population": 667490
    },
    {
        "countryInfo": {
            "lat": 5.152149,
            "long": 46.199616
        },
        "#": 172,
        "Country": "Somalia",
        "Total Cases": 27334,
        "Total Deaths": 1361,
        "Total Recovered": 13182,
        "Active Cases": 12791,
        "Total Cases(1M pop)": 1623,
        "Deaths(1M pop)": 81,
        "Total Tests": 400466,
        "Tests(1M pop)": 23778,
        "Population": 16841795
    },
    {
        "countryInfo": {
            "lat": 7.425554,
            "long": 150.550812
        },
        "#": 173,
        "Country": "Micronesia",
        "Total Cases": 26547,
        "Total Deaths": 65,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 225953,
        "Deaths(1M pop)": 553,
        "Total Tests": 82430,
        "Tests(1M pop)": 701598,
        "Population": 117489
    },
    {
        "countryInfo": {
            "lat": 43.94236,
            "long": 12.457777
        },
        "#": 174,
        "Country": "San Marino",
        "Total Cases": 26185,
        "Total Deaths": 128,
        "Total Recovered": 26011,
        "Active Cases": 46,
        "Critical": 0,
        "Total Cases(1M pop)": 768226,
        "Deaths(1M pop)": 3755,
        "Total Tests": 196855,
        "Tests(1M pop)": 5775414,
        "Population": 34085
    },
    {
        "countryInfo": {
            "lat": -9.64571,
            "long": 160.156194
        },
        "#": 175,
        "Country": "Solomon Islands",
        "Total Cases": 25954,
        "Total Deaths": 199,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 35989,
        "Deaths(1M pop)": 276,
        "Population": 721159
    },
    {
        "#": 176,
        "Country": "Congo",
        "Total Cases": 25375,
        "Total Deaths": 386,
        "Total Recovered": 24006,
        "Active Cases": 983,
        "Total Cases(1M pop)": 4377,
        "Deaths(1M pop)": 67,
        "Total Tests": 347815,
        "Tests(1M pop)": 59991,
        "Population": 5797805
    },
    {
        "countryInfo": {
            "lat": -8.874217,
            "long": 125.727539
        },
        "#": 177,
        "Country": "Timor-Leste",
        "Total Cases": 23460,
        "Total Deaths": 138,
        "Total Recovered": 23102,
        "Active Cases": 220,
        "Total Cases(1M pop)": 17131,
        "Deaths(1M pop)": 101,
        "Total Tests": 278529,
        "Tests(1M pop)": 203391,
        "Population": 1369429
    },
    {
        "countryInfo": {
            "lat": 12.238333,
            "long": -1.561593
        },
        "#": 178,
        "Country": "Burkina Faso",
        "Total Cases": 22114,
        "Total Deaths": 400,
        "Total Recovered": 21596,
        "Active Cases": 118,
        "Total Cases(1M pop)": 1001,
        "Deaths(1M pop)": 18,
        "Total Tests": 248995,
        "Tests(1M pop)": 11265,
        "Population": 22102838
    },
    {
        "countryInfo": {
            "lat": 47.166,
            "long": 9.555373
        },
        "#": 179,
        "Country": "Liechtenstein",
        "Total Cases": 21574,
        "Total Deaths": 94,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 562013,
        "Deaths(1M pop)": 2449,
        "Total Tests": 112457,
        "Tests(1M pop)": 2929559,
        "Population": 38387
    },
    {
        "countryInfo": {
            "lat": 36.137741,
            "long": -5.345374
        },
        "#": 180,
        "Country": "Gibraltar",
        "Total Cases": 20550,
        "Total Deaths": 113,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 609720,
        "Deaths(1M pop)": 3353,
        "Total Tests": 534283,
        "Tests(1M pop)": 15852213,
        "Population": 33704
    },
    {
        "countryInfo": {
            "lat": 12.262776,
            "long": -61.604171
        },
        "#": 181,
        "Country": "Grenada",
        "Total Cases": 19693,
        "Total Deaths": 238,
        "Total Recovered": 19358,
        "Active Cases": 97,
        "Critical": 4,
        "Total Cases(1M pop)": 173545,
        "Deaths(1M pop)": 2097,
        "Total Tests": 182981,
        "Tests(1M pop)": 1612523,
        "Population": 113475
    },
    {
        "countryInfo": {
            "lat": 32.321384,
            "long": -64.75737
        },
        "#": 182,
        "Country": "Bermuda",
        "Total Cases": 18860,
        "Total Deaths": 165,
        "Total Recovered": 18685,
        "Active Cases": 10,
        "Total Cases(1M pop)": 304493,
        "Deaths(1M pop)": 2664,
        "Total Tests": 1029558,
        "Tests(1M pop)": 16622128,
        "Population": 61939
    },
    {
        "#": 183,
        "Country": "South Sudan",
        "Total Cases": 18819,
        "Total Deaths": 147,
        "Total Recovered": 18115,
        "Active Cases": 557,
        "Critical": 1,
        "Total Cases(1M pop)": 1620,
        "Deaths(1M pop)": 13,
        "Total Tests": 410280,
        "Tests(1M pop)": 35313,
        "Population": 11618511
    },
    {
        "countryInfo": {
            "lat": 12.865416,
            "long": -85.207229
        },
        "#": 184,
        "Country": "Nicaragua",
        "Total Cases": 18491,
        "Total Deaths": 225,
        "Total Recovered": 4225,
        "Active Cases": 14041,
        "Total Cases(1M pop)": 2728,
        "Deaths(1M pop)": 33,
        "Population": 6779100
    },
    {
        "countryInfo": {
            "lat": 38.861034,
            "long": 71.276093
        },
        "#": 185,
        "Country": "Tajikistan",
        "Total Cases": 17786,
        "Total Deaths": 125,
        "Total Recovered": 17264,
        "Active Cases": 397,
        "Total Cases(1M pop)": 1786,
        "Deaths(1M pop)": 13,
        "Population": 9957464
    },
    {
        "countryInfo": {
            "lat": 1.650801,
            "long": 10.267895
        },
        "#": 186,
        "Country": "Equatorial Guinea",
        "Total Cases": 17229,
        "Total Deaths": 183,
        "Total Recovered": 16907,
        "Active Cases": 139,
        "Critical": 5,
        "Total Cases(1M pop)": 11512,
        "Deaths(1M pop)": 122,
        "Total Tests": 365697,
        "Tests(1M pop)": 244342,
        "Population": 1496662
    },
    {
        "countryInfo": {
            "lat": 43.750298,
            "long": 7.412841
        },
        "#": 187,
        "Country": "Monaco",
        "Total Cases": 17181,
        "Total Deaths": 67,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 431868,
        "Deaths(1M pop)": 1684,
        "Total Tests": 78646,
        "Tests(1M pop)": 1976875,
        "Population": 39783
    },
    {
        "countryInfo": {
            "lat": -13.759029,
            "long": -172.104629
        },
        "#": 188,
        "Country": "Samoa",
        "Total Cases": 17006,
        "Total Deaths": 31,
        "Total Recovered": 1605,
        "Active Cases": 15370,
        "Total Cases(1M pop)": 84089,
        "Deaths(1M pop)": 153,
        "Total Tests": 187397,
        "Tests(1M pop)": 926612,
        "Population": 202239
    },
    {
        "countryInfo": {
            "lat": -21.178986,
            "long": -175.198242
        },
        "#": 189,
        "Country": "Tonga",
        "Total Cases": 16950,
        "Total Deaths": 13,
        "Total Recovered": 15638,
        "Active Cases": 1299,
        "Total Cases(1M pop)": 157310,
        "Deaths(1M pop)": 121,
        "Total Tests": 535009,
        "Tests(1M pop)": 4965327,
        "Population": 107749
    },
    {
        "countryInfo": {
            "lat": 7.131474,
            "long": 171.184478
        },
        "#": 190,
        "Country": "Marshall Islands",
        "Total Cases": 16138,
        "Total Deaths": 17,
        "Total Recovered": 16121,
        "Active Cases": 0,
        "Total Cases(1M pop)": 268711,
        "Deaths(1M pop)": 283,
        "Population": 60057
    },
    {
        "countryInfo": {
            "lat": 15.414999,
            "long": -61.370976
        },
        "#": 191,
        "Country": "Dominica",
        "Total Cases": 16038,
        "Total Deaths": 74,
        "Total Recovered": 15964,
        "Active Cases": 0,
        "Total Cases(1M pop)": 221691,
        "Deaths(1M pop)": 1023,
        "Total Tests": 229344,
        "Tests(1M pop)": 3170187,
        "Population": 72344
    },
    {
        "countryInfo": {
            "lat": 11.825138,
            "long": 42.590275
        },
        "#": 192,
        "Country": "Djibouti",
        "Total Cases": 15690,
        "Total Deaths": 189,
        "Total Recovered": 15427,
        "Active Cases": 74,
        "Total Cases(1M pop)": 15441,
        "Deaths(1M pop)": 186,
        "Total Tests": 305941,
        "Tests(1M pop)": 301094,
        "Population": 1016097
    },
    {
        "countryInfo": {
            "lat": 13.443182,
            "long": -15.310139
        },
        "#": 194,
        "Country": "Gambia",
        "Total Cases": 12626,
        "Total Deaths": 372,
        "Total Recovered": 12189,
        "Active Cases": 65,
        "Total Cases(1M pop)": 4935,
        "Deaths(1M pop)": 145,
        "Total Tests": 155686,
        "Tests(1M pop)": 60851,
        "Population": 2558482
    },
    {
        "countryInfo": {
            "lat": -15.376706,
            "long": 166.959158
        },
        "#": 196,
        "Country": "Vanuatu",
        "Total Cases": 12019,
        "Total Deaths": 14,
        "Total Recovered": 11976,
        "Active Cases": 29,
        "Total Cases(1M pop)": 37346,
        "Deaths(1M pop)": 44,
        "Total Tests": 24976,
        "Tests(1M pop)": 77606,
        "Population": 321832
    },
    {
        "countryInfo": {
            "lat": 71.706936,
            "long": -42.604303
        },
        "#": 197,
        "Country": "Greenland",
        "Total Cases": 11971,
        "Total Deaths": 21,
        "Total Recovered": 2761,
        "Active Cases": 9189,
        "Critical": 4,
        "Total Cases(1M pop)": 210117,
        "Deaths(1M pop)": 369,
        "Total Tests": 164926,
        "Tests(1M pop)": 2894810,
        "Population": 56973
    },
    {
        "countryInfo": {
            "lat": 15.552727,
            "long": 48.516388
        },
        "#": 198,
        "Country": "Yemen",
        "Total Cases": 11945,
        "Total Deaths": 2159,
        "Total Recovered": 9124,
        "Active Cases": 662,
        "Critical": 0,
        "Total Cases(1M pop)": 383,
        "Deaths(1M pop)": 69,
        "Total Tests": 329592,
        "Tests(1M pop)": 10579,
        "Population": 31154867
    },
    {
        "countryInfo": {
            "lat": 12.226079,
            "long": -69.060087
        },
        "#": 199,
        "Country": "Caribbean Netherlands",
        "Total Cases": 11682,
        "Total Deaths": 38,
        "Total Recovered": 10476,
        "Active Cases": 1168,
        "Total Cases(1M pop)": 438398,
        "Deaths(1M pop)": 1426,
        "Total Tests": 30126,
        "Tests(1M pop)": 1130559,
        "Population": 26647
    },
    {
        "countryInfo": {
            "lat": 15.179384,
            "long": 39.782334
        },
        "#": 201,
        "Country": "Eritrea",
        "Total Cases": 10189,
        "Total Deaths": 103,
        "Total Recovered": 10086,
        "Active Cases": 0,
        "Total Cases(1M pop)": 2782,
        "Deaths(1M pop)": 28,
        "Total Tests": 23693,
        "Tests(1M pop)": 6470,
        "Population": 3662244
    },
    {
        "countryInfo": {
            "lat": 17.607789,
            "long": 8.081666
        },
        "#": 202,
        "Country": "Niger",
        "Total Cases": 9931,
        "Total Deaths": 312,
        "Total Recovered": 8890,
        "Active Cases": 729,
        "Critical": 1,
        "Total Cases(1M pop)": 381,
        "Deaths(1M pop)": 12,
        "Total Tests": 254538,
        "Tests(1M pop)": 9759,
        "Population": 26083660
    },
    {
        "countryInfo": {
            "lat": 12.984305,
            "long": -61.287228
        },
        "#": 203,
        "Country": "St. Vincent Grenadines",
        "Total Cases": 9674,
        "Total Deaths": 124,
        "Total Recovered": 9493,
        "Active Cases": 57,
        "Total Cases(1M pop)": 86723,
        "Deaths(1M pop)": 1112,
        "Total Tests": 114197,
        "Tests(1M pop)": 1023720,
        "Population": 111551
    },
    {
        "countryInfo": {
            "lat": 11.803749,
            "long": -15.180413
        },
        "#": 204,
        "Country": "Guinea-Bissau",
        "Total Cases": 9614,
        "Total Deaths": 177,
        "Total Recovered": 8929,
        "Active Cases": 508,
        "Critical": 6,
        "Total Cases(1M pop)": 4659,
        "Deaths(1M pop)": 86,
        "Total Tests": 145231,
        "Tests(1M pop)": 70385,
        "Population": 2063367
    },
    {
        "countryInfo": {
            "lat": -11.875001,
            "long": 43.872219
        },
        "#": 205,
        "Country": "Comoros",
        "Total Cases": 9109,
        "Total Deaths": 161,
        "Total Recovered": 8939,
        "Active Cases": 9,
        "Total Cases(1M pop)": 10038,
        "Deaths(1M pop)": 177,
        "Population": 907419
    },
    {
        "countryInfo": {
            "lat": 17.060816,
            "long": -61.796428
        },
        "#": 206,
        "Country": "Antigua and Barbuda",
        "Total Cases": 9106,
        "Total Deaths": 146,
        "Total Recovered": 8954,
        "Active Cases": 6,
        "Critical": 0,
        "Total Cases(1M pop)": 91509,
        "Deaths(1M pop)": 1467,
        "Total Tests": 18901,
        "Tests(1M pop)": 189943,
        "Population": 99509
    },
    {
        "countryInfo": {
            "lat": 6.428055,
            "long": -9.429499
        },
        "#": 207,
        "Country": "Liberia",
        "Total Cases": 8090,
        "Total Deaths": 295,
        "Total Recovered": 7783,
        "Active Cases": 12,
        "Critical": 2,
        "Total Cases(1M pop)": 1525,
        "Deaths(1M pop)": 56,
        "Total Tests": 139824,
        "Tests(1M pop)": 26356,
        "Population": 5305117
    },
    {
        "countryInfo": {
            "lat": 8.460555,
            "long": -11.779889
        },
        "#": 208,
        "Country": "Sierra Leone",
        "Total Cases": 7779,
        "Total Deaths": 126,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 937,
        "Deaths(1M pop)": 15,
        "Total Tests": 259958,
        "Tests(1M pop)": 31296,
        "Population": 8306436
    },
    {
        "countryInfo": {
            "lat": 15.454166,
            "long": 18.732207
        },
        "#": 209,
        "Country": "Chad",
        "Total Cases": 7701,
        "Total Deaths": 194,
        "Total Recovered": 4874,
        "Active Cases": 2633,
        "Total Cases(1M pop)": 442,
        "Deaths(1M pop)": 11,
        "Total Tests": 191341,
        "Tests(1M pop)": 10988,
        "Population": 17413580
    },
    {
        "countryInfo": {
            "lat": 18.420695,
            "long": -64.639968
        },
        "#": 210,
        "Country": "British Virgin Islands",
        "Total Cases": 7392,
        "Total Deaths": 64,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 241600,
        "Deaths(1M pop)": 2092,
        "Total Tests": 107339,
        "Tests(1M pop)": 3508269,
        "Population": 30596
    },
    {
        "countryInfo": {
            "lat": -21.236736,
            "long": -159.777671
        },
        "#": 211,
        "Country": "Cook Islands",
        "Total Cases": 7203,
        "Total Deaths": 2,
        "Total Recovered": 7150,
        "Active Cases": 51,
        "Total Cases(1M pop)": 409937,
        "Deaths(1M pop)": 114,
        "Total Tests": 19690,
        "Tests(1M pop)": 1120596,
        "Population": 17571
    },
    {
        "countryInfo": {
            "lat": 0.18636,
            "long": 6.613081
        },
        "#": 212,
        "Country": "Sao Tome and Principe",
        "Total Cases": 6778,
        "Total Deaths": 80,
        "Total Recovered": 6685,
        "Active Cases": 13,
        "Total Cases(1M pop)": 29770,
        "Deaths(1M pop)": 351,
        "Total Tests": 29600,
        "Tests(1M pop)": 130008,
        "Population": 227679
    },
    {
       
        "#": 213,
        "Country": "Turks and Caicos",
        "Total Cases": 6752,
        "Total Deaths": 40,
        "Total Recovered": 6709,
        "Active Cases": 3,
        "Critical": 4,
        "Total Cases(1M pop)": 169900,
        "Deaths(1M pop)": 1007,
        "Total Tests": 616788,
        "Tests(1M pop)": 15520193,
        "Population": 39741
    },
    {
        "countryInfo": {
            "lat": 17.357822,
            "long": -62.782998
        },
        "#": 214,
        "Country": "Saint Kitts and Nevis",
        "Total Cases": 6607,
        "Total Deaths": 48,
        "Total Recovered": 6559,
        "Active Cases": 0,
        "Total Cases(1M pop)": 122645,
        "Deaths(1M pop)": 891,
        "Total Tests": 126958,
        "Tests(1M pop)": 2356704,
        "Population": 53871
    },
    {
        "countryInfo": {
            "lat": 7.51498,
            "long": 134.58252
        },
        "#": 215,
        "Country": "Palau",
        "Total Cases": 6290,
        "Total Deaths": 10,
        "Total Recovered": 6276,
        "Active Cases": 4,
        "Total Cases(1M pop)": 344979,
        "Deaths(1M pop)": 548,
        "Total Tests": 71434,
        "Tests(1M pop)": 3917841,
        "Population": 18233
    },
    {
        "#": 216,
        "Country": "St. Barth",
        "Total Cases": 5507,
        "Total Deaths": 6,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Total Cases(1M pop)": 553746,
        "Deaths(1M pop)": 603,
        "Total Tests": 78646,
        "Tests(1M pop)": 7908095,
        "Population": 9945
    },
    {
        "countryInfo": {
            "lat": -0.522778,
            "long": 166.931503
        },
        "#": 217,
        "Country": "Nauru",
        "Total Cases": 5393,
        "Total Deaths": 1,
        "Total Recovered": 5347,
        "Active Cases": 45,
        "Total Cases(1M pop)": 494635,
        "Deaths(1M pop)": 92,
        "Total Tests": 20509,
        "Tests(1M pop)": 1881042,
        "Population": 10903
    },
    {
        "countryInfo": {
            "lat": -3.370417,
            "long": -168.734039
        },
        "#": 218,
        "Country": "Kiribati",
        "Total Cases": 5085,
        "Total Deaths": 24,
        "Total Recovered": 2703,
        "Active Cases": 2358,
        "Critical": 3,
        "Total Cases(1M pop)": 41201,
        "Deaths(1M pop)": 194,
        "Population": 123419
    },
    {
        "countryInfo": {
            "lat": 18.220554,
            "long": -63.068615
        },
        "#": 219,
        "Country": "Anguilla",
        "Total Cases": 3904,
        "Total Deaths": 12,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 256336,
        "Deaths(1M pop)": 788,
        "Total Tests": 51382,
        "Tests(1M pop)": 3373736,
        "Population": 15230
    },
    {
        "countryInfo": {
            "lat": -13.768752,
            "long": -177.156097
        },
        "#": 220,
        "Country": "Wallis and Futuna",
        "Total Cases": 3550,
        "Total Deaths": 8,
        "Total Recovered": 438,
        "Active Cases": 3104,
        "Total Cases(1M pop)": 323256,
        "Deaths(1M pop)": 728,
        "Total Tests": 20508,
        "Tests(1M pop)": 1867419,
        "Population": 10982
    },
    {
        "countryInfo": {
            "lat": 46.941936,
            "long": -56.27111
        },
        "#": 221,
        "Country": "Saint Pierre Miquelon",
        "Total Cases": 3452,
        "Total Deaths": 2,
        "Total Recovered": 2449,
        "Active Cases": 1001,
        "Total Cases(1M pop)": 599410,
        "Deaths(1M pop)": 347,
        "Total Tests": 25400,
        "Tests(1M pop)": 4410488,
        "Population": 5759
    },
    {
        "countryInfo": {
            "lat": -7.109535,
            "long": 177.64933
        },
        "#": 222,
        "Country": "Tuvalu",
        "Total Cases": 2943,
        "Total Deaths": 1,
        "Total Recovered": 0,
        "New Recovered": 0,
        "Active Cases": 0,
        "Critical": 0,
        "Total Cases(1M pop)": 243909,
        "Deaths(1M pop)": 83,
        "Population": 12066
    },
    {
        "countryInfo": {
            "lat": -24.143474,
            "long": -10.030696
        },
        "#": 223,
        "Country": "Saint Helena",
        "Total Cases": 2166,
        "Total Recovered": 2,
        "Active Cases": 2164,
        "Total Cases(1M pop)": 354211,
        "Population": 6115
    },
    {
        "countryInfo": {
            "lat": -51.796253,
            "long": -59.523613
        },
        "#": 224,
        "Country": "Falkland Islands",
        "Total Cases": 1930,
        "Total Recovered": 1930,
        "Active Cases": 0,
        "Total Cases(1M pop)": 545352,
        "Total Tests": 8632,
        "Tests(1M pop)": 2439107,
        "Population": 3539
    },
    {
        "countryInfo": {
            "lat": 16.742498,
            "long": -62.187366
        },
        "#": 225,
        "Country": "Montserrat",
        "Total Cases": 1403,
        "Total Deaths": 8,
        "Total Recovered": 1376,
        "Active Cases": 19,
        "Total Cases(1M pop)": 282578,
        "Deaths(1M pop)": 1611,
        "Total Tests": 17762,
        "Tests(1M pop)": 3577442,
        "Population": 4965
    },
    {
        "countryInfo": {
            "lat": -19.054445,
            "long": -169.867233
        },
        "#": 226,
        "Country": "Niue",
        "Total Cases": 1059,
        "Total Recovered": 1056,
        "Active Cases": 3,
        "Total Cases(1M pop)": 652898,
        "Population": 1622
    },
    {
        "countryInfo": {
            "lat": -8.967363,
            "long": -171.855881
        },
        "#": 228,
        "Country": "Tokelau",
        "Total Cases": 80,
        "Active Cases": 80,
        "Total Cases(1M pop)": 58055,
        "Population": 1378
    },
    {
        "countryInfo": {
            "lat": 41.902916,
            "long": 12.453389
        },
        "#": 229,
        "Country": "Vatican City",
        "Total Cases": 29,
        "Total Recovered": 29,
        "Active Cases": 0,
        "Total Cases(1M pop)": 36295,
        "Population": 799
    },
    {
        "countryInfo": {
            "lat": 24.215527,
            "long": -12.885834
        },
        "#": 230,
        "Country": "Western Sahara",
        "Total Cases": 10,
        "Total Deaths": 1,
        "Total Recovered": 9,
        "Active Cases": 0,
        "Total Cases(1M pop)": 16,
        "Deaths(1M pop)": 2,
        "Population": 626161
    }
]
   


console.log("Try programiz.pro");


data.map(item => {
    if (!item.countryInfo) {
        console.log(item.Country)
    }
    return null;
})

