const features = [
    {
        id: 'grid',
        name: 'Grid',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11250,
                        percentage: 99.3,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 6156,
                            percentage: 54.7,
                        },
                        {
                            id: 'heard',
                            count: 4890,
                            percentage: 43.5,
                        },
                        {
                            id: 'never_heard',
                            count: 204,
                            percentage: 1.8,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2372,
                        percentage: 98.8,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1855,
                            percentage: 78.2,
                        },
                        {
                            id: 'heard',
                            count: 501,
                            percentage: 21.1,
                        },
                        {
                            id: 'never_heard',
                            count: 16,
                            percentage: 0.7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'subgrid',
        name: 'Subgrid',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2358,
                        percentage: 98.2,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 1239,
                            percentage: 52.5,
                        },
                        {
                            id: 'never_heard',
                            count: 954,
                            percentage: 40.5,
                        },
                        {
                            id: 'used',
                            count: 165,
                            percentage: 7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'flexbox',
        name: 'Flexbox',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11284,
                        percentage: 99.6,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 10690,
                            percentage: 94.7,
                        },
                        {
                            id: 'heard',
                            count: 525,
                            percentage: 4.7,
                        },
                        {
                            id: 'never_heard',
                            count: 69,
                            percentage: 0.6,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2360,
                        percentage: 98.3,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 2322,
                            percentage: 98.4,
                        },
                        {
                            id: 'heard',
                            count: 38,
                            percentage: 1.6,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'multi_column',
        name: 'Multi-Column Layout',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11290,
                        percentage: 99.6,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 4613,
                            percentage: 40.9,
                        },
                        {
                            id: 'used',
                            count: 3492,
                            percentage: 30.9,
                        },
                        {
                            id: 'heard',
                            count: 3185,
                            percentage: 28.2,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2352,
                        percentage: 98,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 957,
                            percentage: 40.7,
                        },
                        {
                            id: 'never_heard',
                            count: 844,
                            percentage: 35.9,
                        },
                        {
                            id: 'heard',
                            count: 551,
                            percentage: 23.4,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'writing_modes',
        name: 'Writing Modes',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11290,
                        percentage: 99.6,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 8261,
                            percentage: 73.2,
                        },
                        {
                            id: 'heard',
                            count: 2197,
                            percentage: 19.5,
                        },
                        {
                            id: 'used',
                            count: 832,
                            percentage: 7.4,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2360,
                        percentage: 98.3,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1401,
                            percentage: 59.4,
                        },
                        {
                            id: 'heard',
                            count: 632,
                            percentage: 26.8,
                        },
                        {
                            id: 'used',
                            count: 327,
                            percentage: 13.9,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'exclusions',
        name: 'Exclusions',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11283,
                        percentage: 99.6,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 8863,
                            percentage: 78.6,
                        },
                        {
                            id: 'heard',
                            count: 1618,
                            percentage: 14.3,
                        },
                        {
                            id: 'used',
                            count: 802,
                            percentage: 7.1,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2358,
                        percentage: 98.2,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1761,
                            percentage: 74.7,
                        },
                        {
                            id: 'heard',
                            count: 329,
                            percentage: 14,
                        },
                        {
                            id: 'used',
                            count: 268,
                            percentage: 11.4,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'position_sticky',
        name: 'CSS position:sticky',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2366,
                        percentage: 98.5,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1890,
                            percentage: 79.9,
                        },
                        {
                            id: 'heard',
                            count: 364,
                            percentage: 15.4,
                        },
                        {
                            id: 'never_heard',
                            count: 112,
                            percentage: 4.7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'logical_properties',
        name: 'CSS Logical Properties',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2354,
                        percentage: 98,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1105,
                            percentage: 46.9,
                        },
                        {
                            id: 'heard',
                            count: 935,
                            percentage: 39.7,
                        },
                        {
                            id: 'used',
                            count: 314,
                            percentage: 13.3,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'aspect_ratio',
        name: 'CSS property: aspect-ratio',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2361,
                        percentage: 98.3,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 1311,
                            percentage: 55.5,
                        },
                        {
                            id: 'never_heard',
                            count: 563,
                            percentage: 23.8,
                        },
                        {
                            id: 'used',
                            count: 487,
                            percentage: 20.6,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'content_visibility',
        name: 'CSS content-visibility',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2362,
                        percentage: 98.4,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 1013,
                            percentage: 42.9,
                        },
                        {
                            id: 'never_heard',
                            count: 819,
                            percentage: 34.7,
                        },
                        {
                            id: 'used',
                            count: 530,
                            percentage: 22.4,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'shapes',
        name: 'Shapes',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11263,
                        percentage: 99.4,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 5337,
                            percentage: 47.4,
                        },
                        {
                            id: 'never_heard',
                            count: 3495,
                            percentage: 31,
                        },
                        {
                            id: 'used',
                            count: 2431,
                            percentage: 21.6,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2221,
                        percentage: 92.5,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 905,
                            percentage: 40.7,
                        },
                        {
                            id: 'never_heard',
                            count: 722,
                            percentage: 32.5,
                        },
                        {
                            id: 'used',
                            count: 594,
                            percentage: 26.7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'object_fit',
        name: 'object-fit',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11267,
                        percentage: 99.4,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 4798,
                            percentage: 42.6,
                        },
                        {
                            id: 'never_heard',
                            count: 4147,
                            percentage: 36.8,
                        },
                        {
                            id: 'heard',
                            count: 2322,
                            percentage: 20.6,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2220,
                        percentage: 92.5,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1577,
                            percentage: 71,
                        },
                        {
                            id: 'never_heard',
                            count: 339,
                            percentage: 15.3,
                        },
                        {
                            id: 'heard',
                            count: 304,
                            percentage: 13.7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'clip_path',
        name: 'clip-path',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11265,
                        percentage: 99.4,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 4425,
                            percentage: 39.3,
                        },
                        {
                            id: 'used',
                            count: 4381,
                            percentage: 38.9,
                        },
                        {
                            id: 'never_heard',
                            count: 2459,
                            percentage: 21.8,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2224,
                        percentage: 92.6,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1272,
                            percentage: 57.2,
                        },
                        {
                            id: 'heard',
                            count: 685,
                            percentage: 30.8,
                        },
                        {
                            id: 'never_heard',
                            count: 267,
                            percentage: 12,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'masks',
        name: 'Masking',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11257,
                        percentage: 99.4,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 5098,
                            percentage: 45.3,
                        },
                        {
                            id: 'never_heard',
                            count: 3173,
                            percentage: 28.2,
                        },
                        {
                            id: 'used',
                            count: 2986,
                            percentage: 26.5,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2235,
                        percentage: 93.1,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 979,
                            percentage: 43.8,
                        },
                        {
                            id: 'used',
                            count: 795,
                            percentage: 35.6,
                        },
                        {
                            id: 'never_heard',
                            count: 461,
                            percentage: 20.6,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'blend_modes',
        name: 'blend-mode',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11252,
                        percentage: 99.3,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 4003,
                            percentage: 35.6,
                        },
                        {
                            id: 'used',
                            count: 3820,
                            percentage: 33.9,
                        },
                        {
                            id: 'never_heard',
                            count: 3429,
                            percentage: 30.5,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2226,
                        percentage: 92.7,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 908,
                            percentage: 40.8,
                        },
                        {
                            id: 'heard',
                            count: 699,
                            percentage: 31.4,
                        },
                        {
                            id: 'never_heard',
                            count: 619,
                            percentage: 27.8,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'filter_effects',
        name: 'Filters & Effects',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11274,
                        percentage: 99.5,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 6650,
                            percentage: 59,
                        },
                        {
                            id: 'heard',
                            count: 3148,
                            percentage: 27.9,
                        },
                        {
                            id: 'never_heard',
                            count: 1476,
                            percentage: 13.1,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2233,
                        percentage: 93,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1579,
                            percentage: 70.7,
                        },
                        {
                            id: 'heard',
                            count: 457,
                            percentage: 20.5,
                        },
                        {
                            id: 'never_heard',
                            count: 197,
                            percentage: 8.8,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'backdrop_filter',
        name: 'backdrop-filter',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2238,
                        percentage: 93.2,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 919,
                            percentage: 41.1,
                        },
                        {
                            id: 'used',
                            count: 735,
                            percentage: 32.8,
                        },
                        {
                            id: 'heard',
                            count: 584,
                            percentage: 26.1,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'scroll_snap',
        name: 'Scroll Snap',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11239,
                        percentage: 99.2,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 5380,
                            percentage: 47.9,
                        },
                        {
                            id: 'heard',
                            count: 4551,
                            percentage: 40.5,
                        },
                        {
                            id: 'used',
                            count: 1308,
                            percentage: 11.6,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2138,
                        percentage: 89,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 784,
                            percentage: 36.7,
                        },
                        {
                            id: 'never_heard',
                            count: 759,
                            percentage: 35.5,
                        },
                        {
                            id: 'used',
                            count: 595,
                            percentage: 27.8,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'overscroll_behavior',
        name: 'overscroll-behavior',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11230,
                        percentage: 99.1,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 6527,
                            percentage: 58.1,
                        },
                        {
                            id: 'heard',
                            count: 2462,
                            percentage: 21.9,
                        },
                        {
                            id: 'used',
                            count: 2241,
                            percentage: 20,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2139,
                        percentage: 89.1,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1112,
                            percentage: 52,
                        },
                        {
                            id: 'used',
                            count: 519,
                            percentage: 24.3,
                        },
                        {
                            id: 'heard',
                            count: 508,
                            percentage: 23.7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'overflow_anchor',
        name: 'overflow-anchor',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11242,
                        percentage: 99.2,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 8775,
                            percentage: 78.1,
                        },
                        {
                            id: 'heard',
                            count: 1646,
                            percentage: 14.6,
                        },
                        {
                            id: 'used',
                            count: 821,
                            percentage: 7.3,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2141,
                        percentage: 89.2,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1583,
                            percentage: 73.9,
                        },
                        {
                            id: 'heard',
                            count: 385,
                            percentage: 18,
                        },
                        {
                            id: 'used',
                            count: 173,
                            percentage: 8.1,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'touch_action',
        name: 'touch-action',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2140,
                        percentage: 89.1,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1268,
                            percentage: 59.3,
                        },
                        {
                            id: 'heard',
                            count: 494,
                            percentage: 23.1,
                        },
                        {
                            id: 'used',
                            count: 378,
                            percentage: 17.7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'pointer_events',
        name: 'pointer-events',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2152,
                        percentage: 89.6,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1566,
                            percentage: 72.8,
                        },
                        {
                            id: 'never_heard',
                            count: 326,
                            percentage: 15.1,
                        },
                        {
                            id: 'heard',
                            count: 260,
                            percentage: 12.1,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'web_fonts',
        name: '@font-face\n',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11252,
                        percentage: 99.3,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 10510,
                            percentage: 93.4,
                        },
                        {
                            id: 'heard',
                            count: 547,
                            percentage: 4.9,
                        },
                        {
                            id: 'never_heard',
                            count: 195,
                            percentage: 1.7,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2114,
                        percentage: 88,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 2001,
                            percentage: 94.7,
                        },
                        {
                            id: 'heard',
                            count: 80,
                            percentage: 3.8,
                        },
                        {
                            id: 'never_heard',
                            count: 33,
                            percentage: 1.6,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'line_breaking',
        name: 'Line Breaking Properties',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11260,
                        percentage: 99.4,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 9902,
                            percentage: 87.9,
                        },
                        {
                            id: 'heard',
                            count: 947,
                            percentage: 8.4,
                        },
                        {
                            id: 'never_heard',
                            count: 411,
                            percentage: 3.7,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2126,
                        percentage: 88.5,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1831,
                            percentage: 86.1,
                        },
                        {
                            id: 'heard',
                            count: 184,
                            percentage: 8.7,
                        },
                        {
                            id: 'never_heard',
                            count: 111,
                            percentage: 5.2,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'font_variant',
        name: 'font-variant',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11231,
                        percentage: 99.1,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 5288,
                            percentage: 47.1,
                        },
                        {
                            id: 'heard',
                            count: 3210,
                            percentage: 28.6,
                        },
                        {
                            id: 'used',
                            count: 2733,
                            percentage: 24.3,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2124,
                        percentage: 88.5,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 907,
                            percentage: 42.7,
                        },
                        {
                            id: 'heard',
                            count: 668,
                            percentage: 31.5,
                        },
                        {
                            id: 'used',
                            count: 549,
                            percentage: 25.8,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'initial_letter',
        name: 'initial_letter',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11250,
                        percentage: 99.3,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 4040,
                            percentage: 35.9,
                        },
                        {
                            id: 'heard',
                            count: 4017,
                            percentage: 35.7,
                        },
                        {
                            id: 'used',
                            count: 3193,
                            percentage: 28.4,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2128,
                        percentage: 88.6,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 770,
                            percentage: 36.2,
                        },
                        {
                            id: 'heard',
                            count: 756,
                            percentage: 35.5,
                        },
                        {
                            id: 'used',
                            count: 602,
                            percentage: 28.3,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'font_variant_numeric',
        name: 'font-variant-numeric',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2122,
                        percentage: 88.4,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1253,
                            percentage: 59,
                        },
                        {
                            id: 'heard',
                            count: 481,
                            percentage: 22.7,
                        },
                        {
                            id: 'used',
                            count: 388,
                            percentage: 18.3,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'font_display',
        name: 'font-display',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2130,
                        percentage: 88.7,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 958,
                            percentage: 45,
                        },
                        {
                            id: 'never_heard',
                            count: 786,
                            percentage: 36.9,
                        },
                        {
                            id: 'heard',
                            count: 386,
                            percentage: 18.1,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'line_clamp',
        name: 'line-clamp',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2128,
                        percentage: 88.6,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1079,
                            percentage: 50.7,
                        },
                        {
                            id: 'heard',
                            count: 545,
                            percentage: 25.6,
                        },
                        {
                            id: 'used',
                            count: 504,
                            percentage: 23.7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'direction',
        name: 'direction',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2130,
                        percentage: 88.7,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 865,
                            percentage: 40.6,
                        },
                        {
                            id: 'used',
                            count: 651,
                            percentage: 30.6,
                        },
                        {
                            id: 'never_heard',
                            count: 614,
                            percentage: 28.8,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'transitions',
        name: 'Transitions',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11179,
                        percentage: 98.7,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 10609,
                            percentage: 94.9,
                        },
                        {
                            id: 'heard',
                            count: 498,
                            percentage: 4.5,
                        },
                        {
                            id: 'never_heard',
                            count: 72,
                            percentage: 0.6,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2077,
                        percentage: 86.5,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1980,
                            percentage: 95.3,
                        },
                        {
                            id: 'heard',
                            count: 70,
                            percentage: 3.4,
                        },
                        {
                            id: 'never_heard',
                            count: 27,
                            percentage: 1.3,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'transforms',
        name: 'Transforms',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11165,
                        percentage: 98.5,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 10554,
                            percentage: 94.5,
                        },
                        {
                            id: 'heard',
                            count: 473,
                            percentage: 4.2,
                        },
                        {
                            id: 'never_heard',
                            count: 138,
                            percentage: 1.2,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2088,
                        percentage: 87,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 2004,
                            percentage: 96,
                        },
                        {
                            id: 'heard',
                            count: 71,
                            percentage: 3.4,
                        },
                        {
                            id: 'never_heard',
                            count: 13,
                            percentage: 0.6,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'animations',
        name: 'Animations',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11253,
                        percentage: 99.3,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 10131,
                            percentage: 90,
                        },
                        {
                            id: 'heard',
                            count: 968,
                            percentage: 8.6,
                        },
                        {
                            id: 'never_heard',
                            count: 154,
                            percentage: 1.4,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2085,
                        percentage: 86.8,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1954,
                            percentage: 93.7,
                        },
                        {
                            id: 'heard',
                            count: 116,
                            percentage: 5.6,
                        },
                        {
                            id: 'never_heard',
                            count: 15,
                            percentage: 0.7,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'perspective',
        name: 'Perspective',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2091,
                        percentage: 87.1,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 908,
                            percentage: 43.4,
                        },
                        {
                            id: 'never_heard',
                            count: 628,
                            percentage: 30,
                        },
                        {
                            id: 'heard',
                            count: 555,
                            percentage: 26.5,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'prefers_reduced_motion',
        name: 'prefers-reduced-motion',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2061,
                        percentage: 85.8,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 836,
                            percentage: 40.6,
                        },
                        {
                            id: 'never_heard',
                            count: 760,
                            percentage: 36.9,
                        },
                        {
                            id: 'used',
                            count: 465,
                            percentage: 22.6,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'prefers_color_scheme',
        name: 'prefers-color-scheme',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2062,
                        percentage: 85.9,
                    },
                    buckets: [
                        {
                            id: 'heard',
                            count: 870,
                            percentage: 42.2,
                        },
                        {
                            id: 'never_heard',
                            count: 631,
                            percentage: 30.6,
                        },
                        {
                            id: 'used',
                            count: 561,
                            percentage: 27.2,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'color_gamut',
        name: 'color-gamut',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2070,
                        percentage: 86.2,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1705,
                            percentage: 82.4,
                        },
                        {
                            id: 'heard',
                            count: 341,
                            percentage: 16.5,
                        },
                        {
                            id: 'used',
                            count: 24,
                            percentage: 1.2,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'variables',
        name: 'Variables',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11244,
                        percentage: 99.2,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 6691,
                            percentage: 59.5,
                        },
                        {
                            id: 'heard',
                            count: 3964,
                            percentage: 35.3,
                        },
                        {
                            id: 'never_heard',
                            count: 589,
                            percentage: 5.2,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2038,
                        percentage: 84.9,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1621,
                            percentage: 79.5,
                        },
                        {
                            id: 'heard',
                            count: 358,
                            percentage: 17.6,
                        },
                        {
                            id: 'never_heard',
                            count: 59,
                            percentage: 2.9,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'feature_support_queries',
        name: '@supports',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11250,
                        percentage: 99.3,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 4147,
                            percentage: 36.9,
                        },
                        {
                            id: 'heard',
                            count: 4072,
                            percentage: 36.2,
                        },
                        {
                            id: 'never_heard',
                            count: 3031,
                            percentage: 26.9,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2036,
                        percentage: 84.8,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1031,
                            percentage: 50.6,
                        },
                        {
                            id: 'heard',
                            count: 594,
                            percentage: 29.2,
                        },
                        {
                            id: 'never_heard',
                            count: 411,
                            percentage: 20.2,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'containment',
        name: 'Contain',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11226,
                        percentage: 99.1,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 9316,
                            percentage: 83,
                        },
                        {
                            id: 'heard',
                            count: 1375,
                            percentage: 12.2,
                        },
                        {
                            id: 'used',
                            count: 535,
                            percentage: 4.8,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2040,
                        percentage: 85,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1582,
                            percentage: 77.5,
                        },
                        {
                            id: 'heard',
                            count: 310,
                            percentage: 15.2,
                        },
                        {
                            id: 'used',
                            count: 148,
                            percentage: 7.3,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'will_change',
        name: 'will-change',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11234,
                        percentage: 99.2,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 6542,
                            percentage: 58.2,
                        },
                        {
                            id: 'used',
                            count: 2670,
                            percentage: 23.8,
                        },
                        {
                            id: 'heard',
                            count: 2022,
                            percentage: 18,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2039,
                        percentage: 84.9,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 898,
                            percentage: 44,
                        },
                        {
                            id: 'used',
                            count: 758,
                            percentage: 37.2,
                        },
                        {
                            id: 'heard',
                            count: 383,
                            percentage: 18.8,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'calc',
        name: 'calc()',
        experience: {
            all_years: [
                {
                    year: 2019,
                    completion: {
                        count: 11257,
                        percentage: 99.4,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 9693,
                            percentage: 86.1,
                        },
                        {
                            id: 'heard',
                            count: 1043,
                            percentage: 9.3,
                        },
                        {
                            id: 'never_heard',
                            count: 521,
                            percentage: 4.6,
                        },
                    ],
                },
                {
                    year: 2020,
                    completion: {
                        count: 2040,
                        percentage: 85,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 1890,
                            percentage: 92.6,
                        },
                        {
                            id: 'heard',
                            count: 112,
                            percentage: 5.5,
                        },
                        {
                            id: 'never_heard',
                            count: 38,
                            percentage: 1.9,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'houdini',
        name: 'CSS Houdini',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2035,
                        percentage: 84.8,
                    },
                    buckets: [
                        {
                            id: 'never_heard',
                            count: 1021,
                            percentage: 50.2,
                        },
                        {
                            id: 'heard',
                            count: 969,
                            percentage: 47.6,
                        },
                        {
                            id: 'used',
                            count: 45,
                            percentage: 2.2,
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 'comparison_functions',
        name: 'CSS Comparison Functions',
        experience: {
            all_years: [
                {
                    year: 2020,
                    completion: {
                        count: 2042,
                        percentage: 85,
                    },
                    buckets: [
                        {
                            id: 'used',
                            count: 977,
                            percentage: 47.8,
                        },
                        {
                            id: 'heard',
                            count: 796,
                            percentage: 39,
                        },
                        {
                            id: 'never_heard',
                            count: 269,
                            percentage: 13.2,
                        },
                    ],
                },
            ],
        },
    },
]

const featuresByCategory = {
    layout: [
        'grid',
        'subgrid',
        'flexbox',
        'multi_column',
        'writing_modes',
        'exclusions',
        'position_sticky',
        'logical_properties',
        'aspect_ratio',
        'content_visibility',
    ],
    shapes_graphics: [
        'shapes',
        'object_fit',
        'clip_path',
        'masks',
        'blend_modes',
        'filter_effects',
        'backdrop_filter',
    ],
    interactions: [
        'scroll_snap',
        'overscroll_behavior',
        'overflow_anchor',
        'touch_action',
        'pointer_events',
    ],
    typography: [
        'web_fonts',
        'variables_fonts',
        'line_breaking',
        'font_variant',
        'initial_letter',
        'font_variant_numeric',
        'font_display',
        'line_clamp',
        'direction',
    ],
    animations_transforms: ['transitions', 'transforms', 'animations', 'perspective'],
    media_queries: ['prefers_reduced_motion', 'prefers_color_scheme', 'color_gamut'],
    other_features: [
        'variables',
        'feature_support_queries',
        'containment',
        'will_change',
        'calc',
        'houdini',
        'comparison_functions',
    ],
}

export const getFeatureCategory = (featureId) => {
    const categories = Object.entries(featuresByCategory)

    const category = categories.find(([categoryId, featureIds]) => featureIds.includes(featureId))

    return category[0]
}

const participation = {
    2019: 11330,
    2020: 2402,
}

export const getNormalizedData = () => {
    const years = []
    let categories = {}

    const normalizedFeatures = features.map((feature) => {
        const category = getFeatureCategory(feature.id)
        if (categories[category] === undefined) {
            categories[category] = []
        }

        const featureYears = {}
        feature.experience.all_years.forEach((year) => {
            if (!years.includes(year.year)) {
                years.push(year.year)
            }

            const usedBucket = year.buckets.find((bucket) => bucket.id === 'used')
            const heardBucket = year.buckets.find((bucket) => bucket.id === 'heard')
            const neverHeardBucket = year.buckets.find((bucket) => bucket.id === 'never_heard')

            featureYears[year.year] = {
                total: year.completion.count,
                used: usedBucket ? usedBucket.count : 0,
                heard: heardBucket ? heardBucket.count : 0,
                neverHeard: neverHeardBucket ? neverHeardBucket.count : 0,
            }
            featureYears[year.year].awareness =
                featureYears[year.year].used + featureYears[year.year].heard
            featureYears[year.year].awarenessRatio =
                featureYears[year.year].awareness / participation[year.year]
            featureYears[year.year].usageRatio =
                featureYears[year.year].used / featureYears[year.year].awareness
        })

        const normalizedFeature = {
            category,
            id: feature.id,
            name: feature.name,
            years: featureYears,
        }

        categories[category].push(normalizedFeature)

        return normalizedFeature
    })

    years.sort()

    categories = Object.entries(categories).map(([category, categoryFeatures]) => ({
        id: category,
        features: categoryFeatures,
    }))

    return {
        years,
        categories,
        features: normalizedFeatures,
    }
}
