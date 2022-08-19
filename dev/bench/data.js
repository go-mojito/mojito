window.BENCHMARK_DATA = {
  "lastUpdate": 1660928545174,
  "repoUrl": "https://github.com/go-mojito/mojito",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "0skillallluck@pm.me",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "0skillallluck@pm.me",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "distinct": true,
          "id": "5ecb1d88596db29c5d2b36a3ccc88e19e62986b4",
          "message": "fix(bench): Fix typo",
          "timestamp": "2022-05-06T02:22:52+02:00",
          "tree_id": "152831a627bde83097813570a729ea00683dc5f5",
          "url": "https://github.com/go-mojito/mojito/commit/5ecb1d88596db29c5d2b36a3ccc88e19e62986b4"
        },
        "date": 1651796642079,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 260827,
            "unit": "ns/op\t   23762 B/op\t     176 allocs/op",
            "extra": "4016 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 245473,
            "unit": "ns/op\t   29311 B/op\t     179 allocs/op",
            "extra": "4320 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 771124,
            "unit": "ns/op\t   29424 B/op\t     178 allocs/op",
            "extra": "4035 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2156034,
            "unit": "ns/op\t   27021 B/op\t     176 allocs/op",
            "extra": "543 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "b870e7a80a34cb1f0b7d40d65969b394c6a02f9d",
          "message": "De-duplicate test code",
          "timestamp": "2022-05-06T02:29:10+02:00",
          "tree_id": "d60449427fe594955587462ab89d10f3e1f44dfc",
          "url": "https://github.com/go-mojito/mojito/commit/b870e7a80a34cb1f0b7d40d65969b394c6a02f9d"
        },
        "date": 1651797004001,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 396443,
            "unit": "ns/op\t   24093 B/op\t     176 allocs/op",
            "extra": "2726 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 349059,
            "unit": "ns/op\t   29385 B/op\t     179 allocs/op",
            "extra": "2984 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 339487,
            "unit": "ns/op\t   29258 B/op\t     179 allocs/op",
            "extra": "3255 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2301348,
            "unit": "ns/op\t   22883 B/op\t     175 allocs/op",
            "extra": "3145 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "0skillallluck@pm.me",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "0skillallluck@pm.me",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "distinct": true,
          "id": "f5ee2a6171be430668511cf86466b894d030f759",
          "message": "feat(ci): Run benchmarks mutiple times",
          "timestamp": "2022-05-06T02:32:13+02:00",
          "tree_id": "0eabbf5e649d52580925a5e9ba7094892209d7fd",
          "url": "https://github.com/go-mojito/mojito/commit/f5ee2a6171be430668511cf86466b894d030f759"
        },
        "date": 1651797242391,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 495436,
            "unit": "ns/op\t   28905 B/op\t     179 allocs/op",
            "extra": "2037 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 445314,
            "unit": "ns/op\t   28744 B/op\t     179 allocs/op",
            "extra": "2738 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 449821,
            "unit": "ns/op\t   28562 B/op\t     178 allocs/op",
            "extra": "2314 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 454601,
            "unit": "ns/op\t   28566 B/op\t     179 allocs/op",
            "extra": "2528 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 438141,
            "unit": "ns/op\t   28575 B/op\t     179 allocs/op",
            "extra": "2581 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1648207,
            "unit": "ns/op\t   29315 B/op\t     178 allocs/op",
            "extra": "2389 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3012213,
            "unit": "ns/op\t   26445 B/op\t     175 allocs/op",
            "extra": "399 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3229124,
            "unit": "ns/op\t   26257 B/op\t     175 allocs/op",
            "extra": "366 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3038066,
            "unit": "ns/op\t   27009 B/op\t     177 allocs/op",
            "extra": "338 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2949921,
            "unit": "ns/op\t   27558 B/op\t     178 allocs/op",
            "extra": "398 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3379091,
            "unit": "ns/op\t   28453 B/op\t     178 allocs/op",
            "extra": "418 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2834055,
            "unit": "ns/op\t   27420 B/op\t     178 allocs/op",
            "extra": "391 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3036433,
            "unit": "ns/op\t   27505 B/op\t     178 allocs/op",
            "extra": "400 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3000825,
            "unit": "ns/op\t   27407 B/op\t     178 allocs/op",
            "extra": "386 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3034899,
            "unit": "ns/op\t   27057 B/op\t     178 allocs/op",
            "extra": "334 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3111029,
            "unit": "ns/op\t   27609 B/op\t     178 allocs/op",
            "extra": "408 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3255600,
            "unit": "ns/op\t   27523 B/op\t     178 allocs/op",
            "extra": "406 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3551586,
            "unit": "ns/op\t   27473 B/op\t     178 allocs/op",
            "extra": "397 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3179820,
            "unit": "ns/op\t   27082 B/op\t     178 allocs/op",
            "extra": "337 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3314716,
            "unit": "ns/op\t   28422 B/op\t     178 allocs/op",
            "extra": "326 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bfb04712cc226b92c49185bb06dff5cd3df4699",
          "message": "Update util.go",
          "timestamp": "2022-05-06T03:08:12+02:00",
          "tree_id": "a27d5c243a17b0834ee32ffaac7e76873dd03997",
          "url": "https://github.com/go-mojito/mojito/commit/1bfb04712cc226b92c49185bb06dff5cd3df4699"
        },
        "date": 1651799379781,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 366614,
            "unit": "ns/op\t   22350 B/op\t     175 allocs/op",
            "extra": "2737 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 357427,
            "unit": "ns/op\t   28776 B/op\t     179 allocs/op",
            "extra": "3493 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 366592,
            "unit": "ns/op\t   28691 B/op\t     178 allocs/op",
            "extra": "3506 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1226668,
            "unit": "ns/op\t   28673 B/op\t     178 allocs/op",
            "extra": "3289 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2702456,
            "unit": "ns/op\t   26275 B/op\t     176 allocs/op",
            "extra": "513 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2114409,
            "unit": "ns/op\t   27021 B/op\t     176 allocs/op",
            "extra": "544 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2172810,
            "unit": "ns/op\t   28529 B/op\t     178 allocs/op",
            "extra": "565 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2163367,
            "unit": "ns/op\t   27970 B/op\t     178 allocs/op",
            "extra": "537 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2798845,
            "unit": "ns/op\t   28021 B/op\t     178 allocs/op",
            "extra": "547 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2237874,
            "unit": "ns/op\t   22574 B/op\t     175 allocs/op",
            "extra": "525 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2409966,
            "unit": "ns/op\t   28010 B/op\t     178 allocs/op",
            "extra": "541 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2184271,
            "unit": "ns/op\t   28088 B/op\t     178 allocs/op",
            "extra": "566 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2296671,
            "unit": "ns/op\t   28782 B/op\t     178 allocs/op",
            "extra": "526 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2361770,
            "unit": "ns/op\t   27823 B/op\t     178 allocs/op",
            "extra": "486 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2308879,
            "unit": "ns/op\t   27842 B/op\t     178 allocs/op",
            "extra": "481 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2560558,
            "unit": "ns/op\t   27939 B/op\t     178 allocs/op",
            "extra": "506 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2317534,
            "unit": "ns/op\t   27901 B/op\t     178 allocs/op",
            "extra": "501 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2487446,
            "unit": "ns/op\t   27902 B/op\t     178 allocs/op",
            "extra": "501 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2309202,
            "unit": "ns/op\t   27902 B/op\t     178 allocs/op",
            "extra": "499 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2341684,
            "unit": "ns/op\t   27818 B/op\t     178 allocs/op",
            "extra": "477 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "16dfc5607c8955680258888b06fbf7e3147d8fb0",
          "message": "Migrate legacy helpers to new packages",
          "timestamp": "2022-05-07T00:28:52+02:00",
          "tree_id": "850aa9ac619ea16bad22532d9f9520cc66d83dbe",
          "url": "https://github.com/go-mojito/mojito/commit/16dfc5607c8955680258888b06fbf7e3147d8fb0"
        },
        "date": 1651876211527,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 253139,
            "unit": "ns/op\t   23223 B/op\t     175 allocs/op",
            "extra": "4068 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 254231,
            "unit": "ns/op\t   28623 B/op\t     178 allocs/op",
            "extra": "4100 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 950959,
            "unit": "ns/op\t   28888 B/op\t     179 allocs/op",
            "extra": "4237 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2208759,
            "unit": "ns/op\t   26220 B/op\t     176 allocs/op",
            "extra": "496 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2315900,
            "unit": "ns/op\t   26309 B/op\t     176 allocs/op",
            "extra": "524 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2294357,
            "unit": "ns/op\t   26946 B/op\t     176 allocs/op",
            "extra": "519 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2257649,
            "unit": "ns/op\t   27871 B/op\t     178 allocs/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2335987,
            "unit": "ns/op\t   27842 B/op\t     178 allocs/op",
            "extra": "490 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2321088,
            "unit": "ns/op\t   27839 B/op\t     178 allocs/op",
            "extra": "486 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2417664,
            "unit": "ns/op\t   27835 B/op\t     178 allocs/op",
            "extra": "484 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2390755,
            "unit": "ns/op\t   27847 B/op\t     178 allocs/op",
            "extra": "486 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2504658,
            "unit": "ns/op\t   27884 B/op\t     178 allocs/op",
            "extra": "495 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2503660,
            "unit": "ns/op\t   27719 B/op\t     178 allocs/op",
            "extra": "456 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2455674,
            "unit": "ns/op\t   28739 B/op\t     178 allocs/op",
            "extra": "462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2489997,
            "unit": "ns/op\t   27813 B/op\t     178 allocs/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2471186,
            "unit": "ns/op\t   27725 B/op\t     178 allocs/op",
            "extra": "452 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2547810,
            "unit": "ns/op\t   27752 B/op\t     178 allocs/op",
            "extra": "454 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2594820,
            "unit": "ns/op\t   27656 B/op\t     178 allocs/op",
            "extra": "434 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2612081,
            "unit": "ns/op\t   27767 B/op\t     178 allocs/op",
            "extra": "454 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2656734,
            "unit": "ns/op\t   27722 B/op\t     178 allocs/op",
            "extra": "448 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "92fdc56c8039d1ec4a6aa4c5ccd1e2238610f955",
          "message": "Modify request copy instead of original request in asset handler to preserve requested URL",
          "timestamp": "2022-05-07T17:15:17+02:00",
          "tree_id": "7aa2fb525f159c7fef0133853c76e0c6fce15054",
          "url": "https://github.com/go-mojito/mojito/commit/92fdc56c8039d1ec4a6aa4c5ccd1e2238610f955"
        },
        "date": 1651936599034,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 251045,
            "unit": "ns/op\t   21942 B/op\t     175 allocs/op",
            "extra": "4731 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1061942,
            "unit": "ns/op\t   28780 B/op\t     178 allocs/op",
            "extra": "4496 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2151761,
            "unit": "ns/op\t   26396 B/op\t     176 allocs/op",
            "extra": "555 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2218450,
            "unit": "ns/op\t   26372 B/op\t     176 allocs/op",
            "extra": "546 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2177516,
            "unit": "ns/op\t   26365 B/op\t     176 allocs/op",
            "extra": "544 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2181211,
            "unit": "ns/op\t   27864 B/op\t     178 allocs/op",
            "extra": "516 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2221264,
            "unit": "ns/op\t   27903 B/op\t     178 allocs/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2239712,
            "unit": "ns/op\t   27917 B/op\t     178 allocs/op",
            "extra": "510 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2268148,
            "unit": "ns/op\t   27875 B/op\t     178 allocs/op",
            "extra": "499 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2282502,
            "unit": "ns/op\t   27938 B/op\t     178 allocs/op",
            "extra": "513 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2326735,
            "unit": "ns/op\t   27863 B/op\t     178 allocs/op",
            "extra": "494 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2381797,
            "unit": "ns/op\t   28749 B/op\t     178 allocs/op",
            "extra": "482 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2404705,
            "unit": "ns/op\t   27835 B/op\t     178 allocs/op",
            "extra": "480 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2467285,
            "unit": "ns/op\t   27791 B/op\t     178 allocs/op",
            "extra": "469 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2455098,
            "unit": "ns/op\t   27747 B/op\t     178 allocs/op",
            "extra": "457 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2495474,
            "unit": "ns/op\t   27825 B/op\t     178 allocs/op",
            "extra": "471 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2447951,
            "unit": "ns/op\t   27787 B/op\t     178 allocs/op",
            "extra": "465 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2483556,
            "unit": "ns/op\t   27699 B/op\t     178 allocs/op",
            "extra": "444 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2541154,
            "unit": "ns/op\t   27763 B/op\t     178 allocs/op",
            "extra": "454 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2509253,
            "unit": "ns/op\t   30472 B/op\t     178 allocs/op",
            "extra": "481 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "de28c2fbf941c7698abdea0539f6bb43695cad20",
          "message": "Sanitize fields",
          "timestamp": "2022-05-10T10:17:49+02:00",
          "tree_id": "737a5404928de29a4ec2393f025fa8451e1736bf",
          "url": "https://github.com/go-mojito/mojito/commit/de28c2fbf941c7698abdea0539f6bb43695cad20"
        },
        "date": 1652170747819,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 359452,
            "unit": "ns/op\t   23012 B/op\t     175 allocs/op",
            "extra": "3001 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 369449,
            "unit": "ns/op\t   28603 B/op\t     178 allocs/op",
            "extra": "2714 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 379487,
            "unit": "ns/op\t   28635 B/op\t     179 allocs/op",
            "extra": "3219 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 598461,
            "unit": "ns/op\t   28764 B/op\t     178 allocs/op",
            "extra": "2979 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2172518,
            "unit": "ns/op\t   26375 B/op\t     176 allocs/op",
            "extra": "547 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2130819,
            "unit": "ns/op\t   26830 B/op\t     176 allocs/op",
            "extra": "483 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2314233,
            "unit": "ns/op\t   28083 B/op\t     178 allocs/op",
            "extra": "560 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2077754,
            "unit": "ns/op\t   27856 B/op\t     178 allocs/op",
            "extra": "506 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2169917,
            "unit": "ns/op\t   28724 B/op\t     178 allocs/op",
            "extra": "565 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2252357,
            "unit": "ns/op\t   27950 B/op\t     178 allocs/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2617869,
            "unit": "ns/op\t   27686 B/op\t     178 allocs/op",
            "extra": "458 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2654945,
            "unit": "ns/op\t   27721 B/op\t     178 allocs/op",
            "extra": "451 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2666958,
            "unit": "ns/op\t   27734 B/op\t     178 allocs/op",
            "extra": "452 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2528009,
            "unit": "ns/op\t   27564 B/op\t     178 allocs/op",
            "extra": "418 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2887363,
            "unit": "ns/op\t   27753 B/op\t     178 allocs/op",
            "extra": "447 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2558414,
            "unit": "ns/op\t   27660 B/op\t     178 allocs/op",
            "extra": "434 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2810999,
            "unit": "ns/op\t   28708 B/op\t     178 allocs/op",
            "extra": "440 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2675876,
            "unit": "ns/op\t   27712 B/op\t     178 allocs/op",
            "extra": "442 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2749650,
            "unit": "ns/op\t   27704 B/op\t     178 allocs/op",
            "extra": "441 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2615624,
            "unit": "ns/op\t   27811 B/op\t     178 allocs/op",
            "extra": "465 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "e469fd814307837bd6306dd84c601144e4f29c93",
          "message": "Add HasContentType to request",
          "timestamp": "2022-05-11T21:18:18+02:00",
          "tree_id": "e9262e6e95df3dd642f0375da062fb0747709f52",
          "url": "https://github.com/go-mojito/mojito/commit/e469fd814307837bd6306dd84c601144e4f29c93"
        },
        "date": 1652296783840,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 274926,
            "unit": "ns/op\t   24272 B/op\t     176 allocs/op",
            "extra": "3944 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 262156,
            "unit": "ns/op\t   28739 B/op\t     179 allocs/op",
            "extra": "4365 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 821362,
            "unit": "ns/op\t   28875 B/op\t     179 allocs/op",
            "extra": "4447 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2286009,
            "unit": "ns/op\t   26275 B/op\t     176 allocs/op",
            "extra": "513 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2296094,
            "unit": "ns/op\t   26287 B/op\t     176 allocs/op",
            "extra": "517 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2419401,
            "unit": "ns/op\t   26779 B/op\t     176 allocs/op",
            "extra": "469 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2540245,
            "unit": "ns/op\t   27570 B/op\t     177 allocs/op",
            "extra": "493 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2663031,
            "unit": "ns/op\t   27780 B/op\t     178 allocs/op",
            "extra": "472 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2570307,
            "unit": "ns/op\t   27865 B/op\t     178 allocs/op",
            "extra": "488 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2535334,
            "unit": "ns/op\t   22731 B/op\t     175 allocs/op",
            "extra": "505 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2435022,
            "unit": "ns/op\t   27810 B/op\t     178 allocs/op",
            "extra": "482 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2629367,
            "unit": "ns/op\t   27756 B/op\t     178 allocs/op",
            "extra": "462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2376512,
            "unit": "ns/op\t   27616 B/op\t     178 allocs/op",
            "extra": "428 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2555824,
            "unit": "ns/op\t   28774 B/op\t     178 allocs/op",
            "extra": "466 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2668195,
            "unit": "ns/op\t   27803 B/op\t     178 allocs/op",
            "extra": "469 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2665301,
            "unit": "ns/op\t   27603 B/op\t     178 allocs/op",
            "extra": "426 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2692751,
            "unit": "ns/op\t   27745 B/op\t     178 allocs/op",
            "extra": "446 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2658410,
            "unit": "ns/op\t   27658 B/op\t     178 allocs/op",
            "extra": "433 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2648431,
            "unit": "ns/op\t   27722 B/op\t     178 allocs/op",
            "extra": "444 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2556065,
            "unit": "ns/op\t   27685 B/op\t     178 allocs/op",
            "extra": "436 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "f533faaa75666b3540f76fb9f36b0d74c338830b",
          "message": "Fix singular struct depndencies",
          "timestamp": "2022-05-14T17:21:48+02:00",
          "tree_id": "7f212324a12975aeaf731dc04e128935f3f86a3e",
          "url": "https://github.com/go-mojito/mojito/commit/f533faaa75666b3540f76fb9f36b0d74c338830b"
        },
        "date": 1652541793469,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 254795,
            "unit": "ns/op\t   23388 B/op\t     176 allocs/op",
            "extra": "4081 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 260209,
            "unit": "ns/op\t   28667 B/op\t     179 allocs/op",
            "extra": "4491 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1174556,
            "unit": "ns/op\t   28868 B/op\t     179 allocs/op",
            "extra": "4555 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2252964,
            "unit": "ns/op\t   26341 B/op\t     176 allocs/op",
            "extra": "535 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2267551,
            "unit": "ns/op\t   26306 B/op\t     176 allocs/op",
            "extra": "523 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2323997,
            "unit": "ns/op\t   26907 B/op\t     176 allocs/op",
            "extra": "506 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2366139,
            "unit": "ns/op\t   27667 B/op\t     177 allocs/op",
            "extra": "511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2361555,
            "unit": "ns/op\t   27903 B/op\t     178 allocs/op",
            "extra": "507 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2344334,
            "unit": "ns/op\t   27860 B/op\t     178 allocs/op",
            "extra": "495 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2399972,
            "unit": "ns/op\t   27824 B/op\t     178 allocs/op",
            "extra": "483 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2428660,
            "unit": "ns/op\t   27786 B/op\t     178 allocs/op",
            "extra": "468 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2446855,
            "unit": "ns/op\t   27810 B/op\t     178 allocs/op",
            "extra": "471 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2476748,
            "unit": "ns/op\t   28761 B/op\t     178 allocs/op",
            "extra": "478 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2493102,
            "unit": "ns/op\t   27769 B/op\t     178 allocs/op",
            "extra": "465 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2514067,
            "unit": "ns/op\t   27798 B/op\t     178 allocs/op",
            "extra": "468 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2584008,
            "unit": "ns/op\t   27760 B/op\t     178 allocs/op",
            "extra": "458 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2623277,
            "unit": "ns/op\t   27750 B/op\t     178 allocs/op",
            "extra": "454 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2816546,
            "unit": "ns/op\t   27661 B/op\t     178 allocs/op",
            "extra": "434 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2612690,
            "unit": "ns/op\t   27788 B/op\t     178 allocs/op",
            "extra": "458 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2607651,
            "unit": "ns/op\t   27715 B/op\t     178 allocs/op",
            "extra": "446 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "4404ecfccbba1a6b926065ccece380ebf0043759",
          "message": "Clean up go mod",
          "timestamp": "2022-05-14T17:23:40+02:00",
          "tree_id": "1cc5497410f5d311d2d0b8ec3cd83e43df341e74",
          "url": "https://github.com/go-mojito/mojito/commit/4404ecfccbba1a6b926065ccece380ebf0043759"
        },
        "date": 1652541902070,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 360954,
            "unit": "ns/op\t   22372 B/op\t     175 allocs/op",
            "extra": "2881 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 365970,
            "unit": "ns/op\t   28678 B/op\t     179 allocs/op",
            "extra": "3063 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 380928,
            "unit": "ns/op\t   28517 B/op\t     178 allocs/op",
            "extra": "2832 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 874727,
            "unit": "ns/op\t   28842 B/op\t     179 allocs/op",
            "extra": "3244 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2893707,
            "unit": "ns/op\t   25573 B/op\t     175 allocs/op",
            "extra": "361 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2760087,
            "unit": "ns/op\t   26344 B/op\t     175 allocs/op",
            "extra": "381 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2636677,
            "unit": "ns/op\t   26959 B/op\t     176 allocs/op",
            "extra": "462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2681720,
            "unit": "ns/op\t   27513 B/op\t     178 allocs/op",
            "extra": "415 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2700507,
            "unit": "ns/op\t   27317 B/op\t     178 allocs/op",
            "extra": "375 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2926038,
            "unit": "ns/op\t   28324 B/op\t     178 allocs/op",
            "extra": "380 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3185898,
            "unit": "ns/op\t   27280 B/op\t     178 allocs/op",
            "extra": "363 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3680213,
            "unit": "ns/op\t   27382 B/op\t     178 allocs/op",
            "extra": "376 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3250224,
            "unit": "ns/op\t   27163 B/op\t     178 allocs/op",
            "extra": "346 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3643282,
            "unit": "ns/op\t   27262 B/op\t     178 allocs/op",
            "extra": "355 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 4615238,
            "unit": "ns/op\t   26508 B/op\t     177 allocs/op",
            "extra": "274 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3443165,
            "unit": "ns/op\t   27326 B/op\t     178 allocs/op",
            "extra": "356 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3455211,
            "unit": "ns/op\t   27263 B/op\t     178 allocs/op",
            "extra": "355 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3943255,
            "unit": "ns/op\t   27273 B/op\t     178 allocs/op",
            "extra": "357 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 4085258,
            "unit": "ns/op\t   26535 B/op\t     177 allocs/op",
            "extra": "276 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 4956231,
            "unit": "ns/op\t   27683 B/op\t     177 allocs/op",
            "extra": "207 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "fdef394011244b5238f184542c5c1b0b26ff335b",
          "message": "Add WebSocketContext",
          "timestamp": "2022-05-15T02:26:40+02:00",
          "tree_id": "0252cb42bbf743baffbe29b0ac452f90fef9fb94",
          "url": "https://github.com/go-mojito/mojito/commit/fdef394011244b5238f184542c5c1b0b26ff335b"
        },
        "date": 1652574499366,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 264286,
            "unit": "ns/op\t   25159 B/op\t     178 allocs/op",
            "extra": "4626 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1000723,
            "unit": "ns/op\t   28967 B/op\t     179 allocs/op",
            "extra": "4522 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2290077,
            "unit": "ns/op\t   26404 B/op\t     177 allocs/op",
            "extra": "518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2389217,
            "unit": "ns/op\t   26260 B/op\t     177 allocs/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2475368,
            "unit": "ns/op\t   26284 B/op\t     177 allocs/op",
            "extra": "482 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2669321,
            "unit": "ns/op\t   27417 B/op\t     177 allocs/op",
            "extra": "483 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2578463,
            "unit": "ns/op\t   27607 B/op\t     178 allocs/op",
            "extra": "432 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3544410,
            "unit": "ns/op\t   27048 B/op\t     177 allocs/op",
            "extra": "340 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3550075,
            "unit": "ns/op\t   26980 B/op\t     178 allocs/op",
            "extra": "318 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3628475,
            "unit": "ns/op\t   27298 B/op\t     178 allocs/op",
            "extra": "355 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3622129,
            "unit": "ns/op\t   26916 B/op\t     178 allocs/op",
            "extra": "313 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3705871,
            "unit": "ns/op\t   27070 B/op\t     178 allocs/op",
            "extra": "325 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3678298,
            "unit": "ns/op\t   27013 B/op\t     178 allocs/op",
            "extra": "318 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3697138,
            "unit": "ns/op\t   26965 B/op\t     178 allocs/op",
            "extra": "312 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3707974,
            "unit": "ns/op\t   28377 B/op\t     178 allocs/op",
            "extra": "313 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3403614,
            "unit": "ns/op\t   27304 B/op\t     178 allocs/op",
            "extra": "354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3417447,
            "unit": "ns/op\t   27316 B/op\t     178 allocs/op",
            "extra": "362 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3489071,
            "unit": "ns/op\t   27175 B/op\t     178 allocs/op",
            "extra": "344 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3395381,
            "unit": "ns/op\t   27143 B/op\t     178 allocs/op",
            "extra": "336 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3419332,
            "unit": "ns/op\t   27262 B/op\t     178 allocs/op",
            "extra": "352 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "136266d90da12a9dae9acc7dbbac503bbbdb8737",
          "message": "Do not enable read check by default, as it can cause data loss",
          "timestamp": "2022-05-15T03:57:15+02:00",
          "tree_id": "8a1bddf520c5d5d3500aa93eaea77492bd0fa0cb",
          "url": "https://github.com/go-mojito/mojito/commit/136266d90da12a9dae9acc7dbbac503bbbdb8737"
        },
        "date": 1652579928678,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 314819,
            "unit": "ns/op\t   22014 B/op\t     176 allocs/op",
            "extra": "3253 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 310298,
            "unit": "ns/op\t   28905 B/op\t     180 allocs/op",
            "extra": "3685 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 326066,
            "unit": "ns/op\t   28901 B/op\t     179 allocs/op",
            "extra": "3493 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2276987,
            "unit": "ns/op\t   28766 B/op\t     179 allocs/op",
            "extra": "3579 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2551692,
            "unit": "ns/op\t   26191 B/op\t     176 allocs/op",
            "extra": "457 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2534598,
            "unit": "ns/op\t   26605 B/op\t     175 allocs/op",
            "extra": "427 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2603660,
            "unit": "ns/op\t   26838 B/op\t     176 allocs/op",
            "extra": "450 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2624368,
            "unit": "ns/op\t   27486 B/op\t     178 allocs/op",
            "extra": "409 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2727000,
            "unit": "ns/op\t   27740 B/op\t     178 allocs/op",
            "extra": "445 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2821905,
            "unit": "ns/op\t   27478 B/op\t     178 allocs/op",
            "extra": "406 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2845914,
            "unit": "ns/op\t   27438 B/op\t     178 allocs/op",
            "extra": "391 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2670593,
            "unit": "ns/op\t   27758 B/op\t     178 allocs/op",
            "extra": "444 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2933773,
            "unit": "ns/op\t   28666 B/op\t     178 allocs/op",
            "extra": "427 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2852057,
            "unit": "ns/op\t   27645 B/op\t     178 allocs/op",
            "extra": "427 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2905222,
            "unit": "ns/op\t   27450 B/op\t     178 allocs/op",
            "extra": "396 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2798829,
            "unit": "ns/op\t   27637 B/op\t     178 allocs/op",
            "extra": "420 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3088460,
            "unit": "ns/op\t   27537 B/op\t     178 allocs/op",
            "extra": "409 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2952761,
            "unit": "ns/op\t   27471 B/op\t     178 allocs/op",
            "extra": "397 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3164576,
            "unit": "ns/op\t   27463 B/op\t     178 allocs/op",
            "extra": "392 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2897452,
            "unit": "ns/op\t   27459 B/op\t     178 allocs/op",
            "extra": "391 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "791df25965258f178f13599ec200a67a8931cba5",
          "message": "Make sure to read at least one byte in read check to clear out remaining buffer",
          "timestamp": "2022-05-15T03:59:00+02:00",
          "tree_id": "23589a021f3258e998a451835eacd5ad65b02f5c",
          "url": "https://github.com/go-mojito/mojito/commit/791df25965258f178f13599ec200a67a8931cba5"
        },
        "date": 1652580033949,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 353542,
            "unit": "ns/op\t   23309 B/op\t     176 allocs/op",
            "extra": "3020 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 351411,
            "unit": "ns/op\t   28853 B/op\t     180 allocs/op",
            "extra": "3483 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 837884,
            "unit": "ns/op\t   22925 B/op\t     177 allocs/op",
            "extra": "3339 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2960587,
            "unit": "ns/op\t   25830 B/op\t     176 allocs/op",
            "extra": "385 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2961059,
            "unit": "ns/op\t   25923 B/op\t     176 allocs/op",
            "extra": "403 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2905679,
            "unit": "ns/op\t   26555 B/op\t     176 allocs/op",
            "extra": "406 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2821688,
            "unit": "ns/op\t   27608 B/op\t     178 allocs/op",
            "extra": "420 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3024295,
            "unit": "ns/op\t   28406 B/op\t     178 allocs/op",
            "extra": "415 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2917146,
            "unit": "ns/op\t   27497 B/op\t     178 allocs/op",
            "extra": "404 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2952691,
            "unit": "ns/op\t   27546 B/op\t     178 allocs/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3005253,
            "unit": "ns/op\t   27606 B/op\t     178 allocs/op",
            "extra": "418 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2953708,
            "unit": "ns/op\t   27497 B/op\t     178 allocs/op",
            "extra": "404 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3011575,
            "unit": "ns/op\t   27549 B/op\t     178 allocs/op",
            "extra": "410 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2971493,
            "unit": "ns/op\t   27435 B/op\t     178 allocs/op",
            "extra": "393 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2960436,
            "unit": "ns/op\t   27422 B/op\t     178 allocs/op",
            "extra": "385 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2976587,
            "unit": "ns/op\t   27537 B/op\t     178 allocs/op",
            "extra": "404 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3011118,
            "unit": "ns/op\t   28607 B/op\t     178 allocs/op",
            "extra": "400 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2976254,
            "unit": "ns/op\t   27354 B/op\t     178 allocs/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3161601,
            "unit": "ns/op\t   27447 B/op\t     178 allocs/op",
            "extra": "387 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3506731,
            "unit": "ns/op\t   27366 B/op\t     178 allocs/op",
            "extra": "374 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "50820949f5c2eff4e28c940a025a54bcefa869ab",
          "message": "Remove unecessary code and add safeguard that prevents infinite loop",
          "timestamp": "2022-05-15T21:48:20+02:00",
          "tree_id": "2d0ade0606d0119ea66b6e0aa39f881e01ff51af",
          "url": "https://github.com/go-mojito/mojito/commit/50820949f5c2eff4e28c940a025a54bcefa869ab"
        },
        "date": 1652644181353,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 247404,
            "unit": "ns/op\t   23202 B/op\t     176 allocs/op",
            "extra": "4191 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 244893,
            "unit": "ns/op\t   28852 B/op\t     180 allocs/op",
            "extra": "4723 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1325800,
            "unit": "ns/op\t   28876 B/op\t     179 allocs/op",
            "extra": "4309 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2127356,
            "unit": "ns/op\t   26475 B/op\t     177 allocs/op",
            "extra": "543 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2303603,
            "unit": "ns/op\t   26470 B/op\t     177 allocs/op",
            "extra": "541 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2274304,
            "unit": "ns/op\t   26935 B/op\t     176 allocs/op",
            "extra": "510 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2301625,
            "unit": "ns/op\t   27916 B/op\t     178 allocs/op",
            "extra": "516 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2291627,
            "unit": "ns/op\t   27968 B/op\t     178 allocs/op",
            "extra": "526 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2324429,
            "unit": "ns/op\t   27940 B/op\t     178 allocs/op",
            "extra": "520 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2394807,
            "unit": "ns/op\t   27902 B/op\t     178 allocs/op",
            "extra": "507 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2411925,
            "unit": "ns/op\t   27838 B/op\t     178 allocs/op",
            "extra": "487 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2542796,
            "unit": "ns/op\t   28745 B/op\t     178 allocs/op",
            "extra": "477 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2519893,
            "unit": "ns/op\t   27763 B/op\t     178 allocs/op",
            "extra": "463 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2472287,
            "unit": "ns/op\t   27837 B/op\t     178 allocs/op",
            "extra": "476 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2589161,
            "unit": "ns/op\t   27825 B/op\t     178 allocs/op",
            "extra": "476 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2574982,
            "unit": "ns/op\t   27818 B/op\t     178 allocs/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2552494,
            "unit": "ns/op\t   27764 B/op\t     178 allocs/op",
            "extra": "460 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2603785,
            "unit": "ns/op\t   27658 B/op\t     178 allocs/op",
            "extra": "436 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2634011,
            "unit": "ns/op\t   27742 B/op\t     178 allocs/op",
            "extra": "447 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2617597,
            "unit": "ns/op\t   27797 B/op\t     178 allocs/op",
            "extra": "463 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b75bf51dd524f185c200272f490d67b99f20efc",
          "message": "Bump github.com/infinytum/structures from 0.0.1 to 0.0.2 (#1)",
          "timestamp": "2022-05-17T09:41:01+02:00",
          "tree_id": "6c9114846afde2290c8f4fa4930ede02254e9dff",
          "url": "https://github.com/go-mojito/mojito/commit/7b75bf51dd524f185c200272f490d67b99f20efc"
        },
        "date": 1652773336288,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 265584,
            "unit": "ns/op\t   23813 B/op\t     177 allocs/op",
            "extra": "3934 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 265288,
            "unit": "ns/op\t   28860 B/op\t     180 allocs/op",
            "extra": "4460 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1012620,
            "unit": "ns/op\t   28978 B/op\t     180 allocs/op",
            "extra": "4456 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2308950,
            "unit": "ns/op\t   26332 B/op\t     177 allocs/op",
            "extra": "496 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2396911,
            "unit": "ns/op\t   26280 B/op\t     177 allocs/op",
            "extra": "481 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2397158,
            "unit": "ns/op\t   26860 B/op\t     176 allocs/op",
            "extra": "492 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2484359,
            "unit": "ns/op\t   27578 B/op\t     177 allocs/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2409615,
            "unit": "ns/op\t   27833 B/op\t     178 allocs/op",
            "extra": "488 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2439888,
            "unit": "ns/op\t   27780 B/op\t     178 allocs/op",
            "extra": "471 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2435907,
            "unit": "ns/op\t   27791 B/op\t     178 allocs/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2486358,
            "unit": "ns/op\t   27770 B/op\t     178 allocs/op",
            "extra": "465 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2528137,
            "unit": "ns/op\t   27800 B/op\t     178 allocs/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2513002,
            "unit": "ns/op\t   27758 B/op\t     178 allocs/op",
            "extra": "459 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2582899,
            "unit": "ns/op\t   28714 B/op\t     178 allocs/op",
            "extra": "453 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2638079,
            "unit": "ns/op\t   27689 B/op\t     178 allocs/op",
            "extra": "441 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2567767,
            "unit": "ns/op\t   27768 B/op\t     178 allocs/op",
            "extra": "456 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2719117,
            "unit": "ns/op\t   27714 B/op\t     178 allocs/op",
            "extra": "446 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2679477,
            "unit": "ns/op\t   27754 B/op\t     178 allocs/op",
            "extra": "453 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2698496,
            "unit": "ns/op\t   27661 B/op\t     178 allocs/op",
            "extra": "434 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2673338,
            "unit": "ns/op\t   27696 B/op\t     178 allocs/op",
            "extra": "438 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "1a2713543587e0cafb3dae60ad93aa01fe6dc08a",
          "message": "Fix Metadata not initialized",
          "timestamp": "2022-05-19T00:30:42+02:00",
          "tree_id": "d513cfe71fa7d576ab64e02c0e84d6d01ed5bd1d",
          "url": "https://github.com/go-mojito/mojito/commit/1a2713543587e0cafb3dae60ad93aa01fe6dc08a"
        },
        "date": 1652913127724,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 233312,
            "unit": "ns/op\t   23980 B/op\t     179 allocs/op",
            "extra": "4598 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 236336,
            "unit": "ns/op\t   28946 B/op\t     182 allocs/op",
            "extra": "5323 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1524605,
            "unit": "ns/op\t   28955 B/op\t     181 allocs/op",
            "extra": "5038 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1900629,
            "unit": "ns/op\t   26652 B/op\t     179 allocs/op",
            "extra": "580 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1851414,
            "unit": "ns/op\t   26751 B/op\t     179 allocs/op",
            "extra": "624 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1870589,
            "unit": "ns/op\t   27235 B/op\t     176 allocs/op",
            "extra": "636 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1952747,
            "unit": "ns/op\t   28078 B/op\t     178 allocs/op",
            "extra": "616 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1952679,
            "unit": "ns/op\t   28030 B/op\t     178 allocs/op",
            "extra": "567 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1988901,
            "unit": "ns/op\t   28862 B/op\t     178 allocs/op",
            "extra": "576 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2101335,
            "unit": "ns/op\t   28160 B/op\t     178 allocs/op",
            "extra": "600 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2091106,
            "unit": "ns/op\t   27943 B/op\t     178 allocs/op",
            "extra": "534 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2122551,
            "unit": "ns/op\t   28118 B/op\t     178 allocs/op",
            "extra": "576 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2097342,
            "unit": "ns/op\t   28113 B/op\t     178 allocs/op",
            "extra": "583 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2097278,
            "unit": "ns/op\t   27983 B/op\t     178 allocs/op",
            "extra": "543 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2085473,
            "unit": "ns/op\t   27946 B/op\t     178 allocs/op",
            "extra": "523 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2154638,
            "unit": "ns/op\t   30324 B/op\t     178 allocs/op",
            "extra": "553 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2181563,
            "unit": "ns/op\t   29032 B/op\t     178 allocs/op",
            "extra": "553 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3256789,
            "unit": "ns/op\t   28114 B/op\t     179 allocs/op",
            "extra": "554 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 12887612,
            "unit": "ns/op\t   22841 B/op\t     188 allocs/op",
            "extra": "93 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 12986508,
            "unit": "ns/op\t   23716 B/op\t     190 allocs/op",
            "extra": "92 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "711f1fc0e4bd3da9eb5e39c2118ee13a85e5eac3",
          "message": "Add helper package for easier web socket usage (#2)\n\n* Allow structs to be used as a handler if they provide a function to create a handler func\r\n\r\n* Websocket Channel Helper\r\n\r\n* Add logging for errors that cannot be handled\r\n\r\n* Renamed ws.go file",
          "timestamp": "2022-06-04T16:56:28+02:00",
          "tree_id": "e983338a5844517221fa25d52237e3b4ecdc92e5",
          "url": "https://github.com/go-mojito/mojito/commit/711f1fc0e4bd3da9eb5e39c2118ee13a85e5eac3"
        },
        "date": 1654354669577,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 227837,
            "unit": "ns/op\t   23984 B/op\t     179 allocs/op",
            "extra": "4520 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 237697,
            "unit": "ns/op\t   28956 B/op\t     182 allocs/op",
            "extra": "5400 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1404533,
            "unit": "ns/op\t   28966 B/op\t     181 allocs/op",
            "extra": "5294 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1745983,
            "unit": "ns/op\t   26845 B/op\t     179 allocs/op",
            "extra": "672 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1792576,
            "unit": "ns/op\t   26824 B/op\t     179 allocs/op",
            "extra": "661 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1806345,
            "unit": "ns/op\t   27255 B/op\t     176 allocs/op",
            "extra": "644 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1839443,
            "unit": "ns/op\t   28169 B/op\t     178 allocs/op",
            "extra": "646 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1871421,
            "unit": "ns/op\t   28897 B/op\t     178 allocs/op",
            "extra": "636 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1902998,
            "unit": "ns/op\t   28170 B/op\t     178 allocs/op",
            "extra": "620 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1914853,
            "unit": "ns/op\t   28184 B/op\t     178 allocs/op",
            "extra": "621 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 1955535,
            "unit": "ns/op\t   28148 B/op\t     178 allocs/op",
            "extra": "608 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 1975917,
            "unit": "ns/op\t   28142 B/op\t     178 allocs/op",
            "extra": "602 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 1990667,
            "unit": "ns/op\t   28136 B/op\t     178 allocs/op",
            "extra": "597 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 1996025,
            "unit": "ns/op\t   28113 B/op\t     178 allocs/op",
            "extra": "588 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2040207,
            "unit": "ns/op\t   30247 B/op\t     178 allocs/op",
            "extra": "579 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2053443,
            "unit": "ns/op\t   29041 B/op\t     178 allocs/op",
            "extra": "574 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 4719143,
            "unit": "ns/op\t   28235 B/op\t     182 allocs/op",
            "extra": "552 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 12234367,
            "unit": "ns/op\t   23084 B/op\t     188 allocs/op",
            "extra": "98 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 12288034,
            "unit": "ns/op\t   23956 B/op\t     190 allocs/op",
            "extra": "97 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 12409469,
            "unit": "ns/op\t   23860 B/op\t     190 allocs/op",
            "extra": "97 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "michael.teuscher@pm.me",
            "name": "Michael Teuscher",
            "username": "nilathedragon"
          },
          "distinct": true,
          "id": "301c42d92fd09c78e151226b7c4c960635f94901",
          "message": "Disable Origin Check in Websockets",
          "timestamp": "2022-06-11T18:15:04+02:00",
          "tree_id": "fb6877442b4916de2041d58a02d463b76775043d",
          "url": "https://github.com/go-mojito/mojito/commit/301c42d92fd09c78e151226b7c4c960635f94901"
        },
        "date": 1654964183960,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 261934,
            "unit": "ns/op\t   24439 B/op\t     179 allocs/op",
            "extra": "4126 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 253098,
            "unit": "ns/op\t   28852 B/op\t     182 allocs/op",
            "extra": "4482 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 939940,
            "unit": "ns/op\t   29051 B/op\t     181 allocs/op",
            "extra": "4389 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2112792,
            "unit": "ns/op\t   26557 B/op\t     179 allocs/op",
            "extra": "544 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2188987,
            "unit": "ns/op\t   26513 B/op\t     179 allocs/op",
            "extra": "528 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2230803,
            "unit": "ns/op\t   26911 B/op\t     176 allocs/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2193369,
            "unit": "ns/op\t   27910 B/op\t     178 allocs/op",
            "extra": "534 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2200497,
            "unit": "ns/op\t   27911 B/op\t     178 allocs/op",
            "extra": "514 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2334691,
            "unit": "ns/op\t   27892 B/op\t     178 allocs/op",
            "extra": "505 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2264349,
            "unit": "ns/op\t   27932 B/op\t     178 allocs/op",
            "extra": "514 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2787468,
            "unit": "ns/op\t   27971 B/op\t     178 allocs/op",
            "extra": "525 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2375732,
            "unit": "ns/op\t   27827 B/op\t     178 allocs/op",
            "extra": "488 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2368442,
            "unit": "ns/op\t   28783 B/op\t     178 allocs/op",
            "extra": "498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2396533,
            "unit": "ns/op\t   27832 B/op\t     178 allocs/op",
            "extra": "483 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2407530,
            "unit": "ns/op\t   27857 B/op\t     178 allocs/op",
            "extra": "486 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2495133,
            "unit": "ns/op\t   27832 B/op\t     178 allocs/op",
            "extra": "480 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2476509,
            "unit": "ns/op\t   27814 B/op\t     178 allocs/op",
            "extra": "475 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2483090,
            "unit": "ns/op\t   27806 B/op\t     178 allocs/op",
            "extra": "470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2534387,
            "unit": "ns/op\t   27801 B/op\t     178 allocs/op",
            "extra": "469 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2538469,
            "unit": "ns/op\t   27789 B/op\t     178 allocs/op",
            "extra": "466 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "945769a3d5cbc352c07df03ac2d98f1f938c2b47",
          "message": "Only use elem of pointer dep when its not registered (#4)",
          "timestamp": "2022-07-10T18:02:28+02:00",
          "tree_id": "7f6e400e581bdf9a4cca269a5219b5c84a056aa5",
          "url": "https://github.com/go-mojito/mojito/commit/945769a3d5cbc352c07df03ac2d98f1f938c2b47"
        },
        "date": 1657469034358,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 243886,
            "unit": "ns/op\t   22173 B/op\t     178 allocs/op",
            "extra": "4956 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1806908,
            "unit": "ns/op\t   28962 B/op\t     181 allocs/op",
            "extra": "4651 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2988479,
            "unit": "ns/op\t   25844 B/op\t     178 allocs/op",
            "extra": "374 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 3019159,
            "unit": "ns/op\t   25956 B/op\t     178 allocs/op",
            "extra": "394 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 3054450,
            "unit": "ns/op\t   25870 B/op\t     178 allocs/op",
            "extra": "378 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3059763,
            "unit": "ns/op\t   26328 B/op\t     175 allocs/op",
            "extra": "378 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3110062,
            "unit": "ns/op\t   26806 B/op\t     177 allocs/op",
            "extra": "363 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3370942,
            "unit": "ns/op\t   27338 B/op\t     178 allocs/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3244366,
            "unit": "ns/op\t   27261 B/op\t     178 allocs/op",
            "extra": "358 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3215130,
            "unit": "ns/op\t   27332 B/op\t     178 allocs/op",
            "extra": "367 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3254978,
            "unit": "ns/op\t   27373 B/op\t     178 allocs/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3405824,
            "unit": "ns/op\t   27134 B/op\t     178 allocs/op",
            "extra": "340 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3324479,
            "unit": "ns/op\t   28515 B/op\t     178 allocs/op",
            "extra": "352 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3458227,
            "unit": "ns/op\t   27207 B/op\t     178 allocs/op",
            "extra": "346 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3610041,
            "unit": "ns/op\t   27252 B/op\t     178 allocs/op",
            "extra": "351 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3545988,
            "unit": "ns/op\t   27186 B/op\t     178 allocs/op",
            "extra": "343 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3568389,
            "unit": "ns/op\t   27173 B/op\t     178 allocs/op",
            "extra": "340 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3394175,
            "unit": "ns/op\t   27148 B/op\t     178 allocs/op",
            "extra": "336 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3611430,
            "unit": "ns/op\t   27156 B/op\t     178 allocs/op",
            "extra": "337 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3599754,
            "unit": "ns/op\t   27053 B/op\t     178 allocs/op",
            "extra": "325 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b1b9590c26cd7378c49974e4b85aa1b241288f9",
          "message": "Fix Gosec Reports (#5)",
          "timestamp": "2022-07-10T18:22:46+02:00",
          "tree_id": "ab2e399b0a49482cabd047e0791944af8f3f9914",
          "url": "https://github.com/go-mojito/mojito/commit/5b1b9590c26cd7378c49974e4b85aa1b241288f9"
        },
        "date": 1657470248997,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 250818,
            "unit": "ns/op\t   22456 B/op\t     178 allocs/op",
            "extra": "4120 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 257902,
            "unit": "ns/op\t   28935 B/op\t     182 allocs/op",
            "extra": "4612 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1330248,
            "unit": "ns/op\t   27991 B/op\t     181 allocs/op",
            "extra": "4528 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2033985,
            "unit": "ns/op\t   26633 B/op\t     179 allocs/op",
            "extra": "573 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2158680,
            "unit": "ns/op\t   26757 B/op\t     179 allocs/op",
            "extra": "566 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2075738,
            "unit": "ns/op\t   28011 B/op\t     178 allocs/op",
            "extra": "552 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2184662,
            "unit": "ns/op\t   27958 B/op\t     178 allocs/op",
            "extra": "532 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2141790,
            "unit": "ns/op\t   27967 B/op\t     178 allocs/op",
            "extra": "530 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2126982,
            "unit": "ns/op\t   28020 B/op\t     178 allocs/op",
            "extra": "543 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2163746,
            "unit": "ns/op\t   28015 B/op\t     178 allocs/op",
            "extra": "543 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2240024,
            "unit": "ns/op\t   28765 B/op\t     178 allocs/op",
            "extra": "511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2244548,
            "unit": "ns/op\t   27971 B/op\t     178 allocs/op",
            "extra": "524 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2276317,
            "unit": "ns/op\t   27937 B/op\t     178 allocs/op",
            "extra": "516 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2327290,
            "unit": "ns/op\t   27914 B/op\t     178 allocs/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2350223,
            "unit": "ns/op\t   27931 B/op\t     178 allocs/op",
            "extra": "510 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2302922,
            "unit": "ns/op\t   27946 B/op\t     178 allocs/op",
            "extra": "514 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2379542,
            "unit": "ns/op\t   27821 B/op\t     178 allocs/op",
            "extra": "483 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2311095,
            "unit": "ns/op\t   27782 B/op\t     178 allocs/op",
            "extra": "466 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2337711,
            "unit": "ns/op\t   30443 B/op\t     178 allocs/op",
            "extra": "494 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2353095,
            "unit": "ns/op\t   29009 B/op\t     178 allocs/op",
            "extra": "502 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cedric@qubyte.io",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2ee972fb45bc9622e065a1151b927bc920a377c",
          "message": "docs: Add CODE_OF_CONDUCT (#6)",
          "timestamp": "2022-07-16T18:42:42+02:00",
          "tree_id": "7f7cfe774f8955e10298022356a4db33230ec4b9",
          "url": "https://github.com/go-mojito/mojito/commit/a2ee972fb45bc9622e065a1151b927bc920a377c"
        },
        "date": 1657989839002,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 249714,
            "unit": "ns/op\t   23429 B/op\t     178 allocs/op",
            "extra": "4099 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 832317,
            "unit": "ns/op\t   22930 B/op\t     178 allocs/op",
            "extra": "4872 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1957308,
            "unit": "ns/op\t   26485 B/op\t     179 allocs/op",
            "extra": "519 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2070172,
            "unit": "ns/op\t   26580 B/op\t     179 allocs/op",
            "extra": "552 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2065525,
            "unit": "ns/op\t   26460 B/op\t     179 allocs/op",
            "extra": "511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2105866,
            "unit": "ns/op\t   27410 B/op\t     177 allocs/op",
            "extra": "506 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2115544,
            "unit": "ns/op\t   27969 B/op\t     178 allocs/op",
            "extra": "525 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2141653,
            "unit": "ns/op\t   27840 B/op\t     178 allocs/op",
            "extra": "493 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2226537,
            "unit": "ns/op\t   27989 B/op\t     178 allocs/op",
            "extra": "528 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2322145,
            "unit": "ns/op\t   27885 B/op\t     178 allocs/op",
            "extra": "506 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2274569,
            "unit": "ns/op\t   27698 B/op\t     178 allocs/op",
            "extra": "454 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2381961,
            "unit": "ns/op\t   28773 B/op\t     178 allocs/op",
            "extra": "480 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2424704,
            "unit": "ns/op\t   27736 B/op\t     178 allocs/op",
            "extra": "457 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2276406,
            "unit": "ns/op\t   27810 B/op\t     178 allocs/op",
            "extra": "469 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2331974,
            "unit": "ns/op\t   27896 B/op\t     178 allocs/op",
            "extra": "493 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2334360,
            "unit": "ns/op\t   27752 B/op\t     178 allocs/op",
            "extra": "462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2288377,
            "unit": "ns/op\t   27870 B/op\t     178 allocs/op",
            "extra": "483 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2387855,
            "unit": "ns/op\t   27872 B/op\t     178 allocs/op",
            "extra": "489 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2372297,
            "unit": "ns/op\t   27894 B/op\t     178 allocs/op",
            "extra": "496 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2413546,
            "unit": "ns/op\t   27673 B/op\t     178 allocs/op",
            "extra": "445 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cedric@qubyte.io",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99951e19d56a99cf1d582c2f1268cb608a8734fa",
          "message": "docs: Add security policy (#8)",
          "timestamp": "2022-07-16T18:45:48+02:00",
          "tree_id": "508eff74e9d8eda3992531285edb899fa90c6593",
          "url": "https://github.com/go-mojito/mojito/commit/99951e19d56a99cf1d582c2f1268cb608a8734fa"
        },
        "date": 1657990027973,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 234150,
            "unit": "ns/op\t   23991 B/op\t     179 allocs/op",
            "extra": "4507 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 230801,
            "unit": "ns/op\t   28950 B/op\t     182 allocs/op",
            "extra": "5176 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1443624,
            "unit": "ns/op\t   26747 B/op\t     180 allocs/op",
            "extra": "5127 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1980236,
            "unit": "ns/op\t   26622 B/op\t     179 allocs/op",
            "extra": "568 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1954305,
            "unit": "ns/op\t   27134 B/op\t     180 allocs/op",
            "extra": "586 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2066939,
            "unit": "ns/op\t   28037 B/op\t     178 allocs/op",
            "extra": "565 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2020444,
            "unit": "ns/op\t   28110 B/op\t     178 allocs/op",
            "extra": "584 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2087618,
            "unit": "ns/op\t   28033 B/op\t     178 allocs/op",
            "extra": "559 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2059704,
            "unit": "ns/op\t   28884 B/op\t     178 allocs/op",
            "extra": "586 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2100976,
            "unit": "ns/op\t   28018 B/op\t     178 allocs/op",
            "extra": "555 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2117656,
            "unit": "ns/op\t   27906 B/op\t     178 allocs/op",
            "extra": "516 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2147134,
            "unit": "ns/op\t   28075 B/op\t     178 allocs/op",
            "extra": "556 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2048769,
            "unit": "ns/op\t   28110 B/op\t     178 allocs/op",
            "extra": "578 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2116611,
            "unit": "ns/op\t   28053 B/op\t     178 allocs/op",
            "extra": "562 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2059363,
            "unit": "ns/op\t   28106 B/op\t     178 allocs/op",
            "extra": "577 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2129498,
            "unit": "ns/op\t   30277 B/op\t     178 allocs/op",
            "extra": "567 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2260713,
            "unit": "ns/op\t   28012 B/op\t     178 allocs/op",
            "extra": "552 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2238838,
            "unit": "ns/op\t   28976 B/op\t     178 allocs/op",
            "extra": "513 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 8206711,
            "unit": "ns/op\t   28391 B/op\t     187 allocs/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 13732786,
            "unit": "ns/op\t   29374 B/op\t     191 allocs/op",
            "extra": "73 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cedric@qubyte.io",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97afa9fbba0698f2eaff52f6f78cf0053a55fd3f",
          "message": "docs: Add ISSUE_TEMPLATES (#7)",
          "timestamp": "2022-07-16T18:50:41+02:00",
          "tree_id": "5366276f1ed10a73cf4770dae7635fd3370d4eae",
          "url": "https://github.com/go-mojito/mojito/commit/97afa9fbba0698f2eaff52f6f78cf0053a55fd3f"
        },
        "date": 1657990317549,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 325267,
            "unit": "ns/op\t   29268 B/op\t     182 allocs/op",
            "extra": "3170 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 320573,
            "unit": "ns/op\t   28987 B/op\t     182 allocs/op",
            "extra": "3764 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 296733,
            "unit": "ns/op\t   28868 B/op\t     182 allocs/op",
            "extra": "4228 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1008178,
            "unit": "ns/op\t   28949 B/op\t     181 allocs/op",
            "extra": "3853 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2249414,
            "unit": "ns/op\t   26438 B/op\t     179 allocs/op",
            "extra": "504 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2215314,
            "unit": "ns/op\t   26936 B/op\t     176 allocs/op",
            "extra": "516 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2282437,
            "unit": "ns/op\t   27863 B/op\t     176 allocs/op",
            "extra": "508 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2258072,
            "unit": "ns/op\t   27846 B/op\t     178 allocs/op",
            "extra": "492 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2501768,
            "unit": "ns/op\t   27673 B/op\t     178 allocs/op",
            "extra": "448 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 2677768,
            "unit": "ns/op\t   27593 B/op\t     178 allocs/op",
            "extra": "423 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2522050,
            "unit": "ns/op\t   27748 B/op\t     178 allocs/op",
            "extra": "450 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2382066,
            "unit": "ns/op\t   22865 B/op\t     175 allocs/op",
            "extra": "498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2410029,
            "unit": "ns/op\t   27807 B/op\t     178 allocs/op",
            "extra": "478 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2610877,
            "unit": "ns/op\t   27691 B/op\t     178 allocs/op",
            "extra": "447 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2511656,
            "unit": "ns/op\t   28634 B/op\t     178 allocs/op",
            "extra": "418 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2492144,
            "unit": "ns/op\t   27738 B/op\t     178 allocs/op",
            "extra": "444 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2494049,
            "unit": "ns/op\t   27731 B/op\t     178 allocs/op",
            "extra": "448 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3095008,
            "unit": "ns/op\t   27652 B/op\t     178 allocs/op",
            "extra": "432 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2816843,
            "unit": "ns/op\t   27805 B/op\t     178 allocs/op",
            "extra": "462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2616469,
            "unit": "ns/op\t   27612 B/op\t     178 allocs/op",
            "extra": "427 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cedric@qubyte.io",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0a4cdc535ee9999dfa595cd23362c276706011d",
          "message": "docs: Rename ISSUE_TEMPLATES to ISSUE_TEMPLATE (#9)",
          "timestamp": "2022-07-16T19:01:17+02:00",
          "tree_id": "602cf249feadd5e52b5e9a499b71bd0c3d22eb3e",
          "url": "https://github.com/go-mojito/mojito/commit/e0a4cdc535ee9999dfa595cd23362c276706011d"
        },
        "date": 1657990973591,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 396039,
            "unit": "ns/op\t   23358 B/op\t     178 allocs/op",
            "extra": "2704 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 387607,
            "unit": "ns/op\t   28951 B/op\t     182 allocs/op",
            "extra": "3076 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 394617,
            "unit": "ns/op\t   22508 B/op\t     178 allocs/op",
            "extra": "2953 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 2468279,
            "unit": "ns/op\t   26413 B/op\t     180 allocs/op",
            "extra": "3026 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 3266843,
            "unit": "ns/op\t   25770 B/op\t     178 allocs/op",
            "extra": "362 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3236099,
            "unit": "ns/op\t   28019 B/op\t     177 allocs/op",
            "extra": "373 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3307786,
            "unit": "ns/op\t   27297 B/op\t     178 allocs/op",
            "extra": "364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3254411,
            "unit": "ns/op\t   27307 B/op\t     178 allocs/op",
            "extra": "364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3287672,
            "unit": "ns/op\t   27309 B/op\t     178 allocs/op",
            "extra": "364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3365973,
            "unit": "ns/op\t   27264 B/op\t     178 allocs/op",
            "extra": "358 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3308214,
            "unit": "ns/op\t   27118 B/op\t     178 allocs/op",
            "extra": "337 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3377294,
            "unit": "ns/op\t   27379 B/op\t     178 allocs/op",
            "extra": "370 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3384467,
            "unit": "ns/op\t   27294 B/op\t     178 allocs/op",
            "extra": "363 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3258054,
            "unit": "ns/op\t   27337 B/op\t     178 allocs/op",
            "extra": "367 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3391232,
            "unit": "ns/op\t   27211 B/op\t     178 allocs/op",
            "extra": "349 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3396188,
            "unit": "ns/op\t   28534 B/op\t     178 allocs/op",
            "extra": "360 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3400002,
            "unit": "ns/op\t   27298 B/op\t     178 allocs/op",
            "extra": "360 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3374166,
            "unit": "ns/op\t   27253 B/op\t     178 allocs/op",
            "extra": "354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3419686,
            "unit": "ns/op\t   27226 B/op\t     178 allocs/op",
            "extra": "349 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3514072,
            "unit": "ns/op\t   27194 B/op\t     178 allocs/op",
            "extra": "344 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cedric@qubyte.io",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0c756b4f0b48c4fa58af201b4d860b48a65c3d3",
          "message": "docs: Allow blank issues (#10)",
          "timestamp": "2022-07-16T19:08:14+02:00",
          "tree_id": "d6c34ab7b7c3d4af29c468554ead099ac6a70f5b",
          "url": "https://github.com/go-mojito/mojito/commit/a0c756b4f0b48c4fa58af201b4d860b48a65c3d3"
        },
        "date": 1657991382857,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 315619,
            "unit": "ns/op\t   23547 B/op\t     179 allocs/op",
            "extra": "3426 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 302093,
            "unit": "ns/op\t   28972 B/op\t     182 allocs/op",
            "extra": "3738 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1595168,
            "unit": "ns/op\t   22128 B/op\t     178 allocs/op",
            "extra": "3830 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 3123783,
            "unit": "ns/op\t   26347 B/op\t     179 allocs/op",
            "extra": "477 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 3066334,
            "unit": "ns/op\t   25814 B/op\t     178 allocs/op",
            "extra": "369 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3338314,
            "unit": "ns/op\t   27064 B/op\t     177 allocs/op",
            "extra": "340 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3516404,
            "unit": "ns/op\t   27111 B/op\t     178 allocs/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3572762,
            "unit": "ns/op\t   27324 B/op\t     178 allocs/op",
            "extra": "362 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3284597,
            "unit": "ns/op\t   26859 B/op\t     177 allocs/op",
            "extra": "308 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 3172336,
            "unit": "ns/op\t   27287 B/op\t     178 allocs/op",
            "extra": "352 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3208179,
            "unit": "ns/op\t   27264 B/op\t     178 allocs/op",
            "extra": "356 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3770192,
            "unit": "ns/op\t   27021 B/op\t     178 allocs/op",
            "extra": "325 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3550347,
            "unit": "ns/op\t   27140 B/op\t     178 allocs/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3519098,
            "unit": "ns/op\t   26997 B/op\t     178 allocs/op",
            "extra": "318 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 3402657,
            "unit": "ns/op\t   27317 B/op\t     178 allocs/op",
            "extra": "356 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3644237,
            "unit": "ns/op\t   28509 B/op\t     178 allocs/op",
            "extra": "355 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3760855,
            "unit": "ns/op\t   27300 B/op\t     178 allocs/op",
            "extra": "360 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3657607,
            "unit": "ns/op\t   27100 B/op\t     178 allocs/op",
            "extra": "333 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 3556583,
            "unit": "ns/op\t   27019 B/op\t     178 allocs/op",
            "extra": "320 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2596727,
            "unit": "ns/op\t   22860 B/op\t     175 allocs/op",
            "extra": "428 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cedric@qubyte.io",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e85101babab13a985178861184858110c153b74",
          "message": "test(bench): Only run once (#11)",
          "timestamp": "2022-07-16T20:31:03+02:00",
          "tree_id": "c4cfc33a951ad44d26bbc12403a53942cd55573b",
          "url": "https://github.com/go-mojito/mojito/commit/5e85101babab13a985178861184858110c153b74"
        },
        "date": 1657996302423,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 306802,
            "unit": "ns/op\t   22929 B/op\t     178 allocs/op",
            "extra": "3421 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 286168,
            "unit": "ns/op\t   29415 B/op\t     178 allocs/op",
            "extra": "3547 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 1858391,
            "unit": "ns/op\t   21365 B/op\t     174 allocs/op",
            "extra": "4174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2528311,
            "unit": "ns/op\t   26730 B/op\t     175 allocs/op",
            "extra": "457 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b695d3e1c935375bb7b99d8593299b503ee317d",
          "message": "Store the ViewBag in Metadata to prevent state loss when using RendererContext middleware. (#12)",
          "timestamp": "2022-07-30T15:36:50+02:00",
          "tree_id": "55d5df1a532e4da656a3ab7290a14d2231c78a63",
          "url": "https://github.com/go-mojito/mojito/commit/5b695d3e1c935375bb7b99d8593299b503ee317d"
        },
        "date": 1659188246324,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 233639,
            "unit": "ns/op\t   23565 B/op\t     179 allocs/op",
            "extra": "4368 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 229117,
            "unit": "ns/op\t   29418 B/op\t     179 allocs/op",
            "extra": "5132 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 1382471,
            "unit": "ns/op\t   27398 B/op\t     178 allocs/op",
            "extra": "5226 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 1809970,
            "unit": "ns/op\t   27235 B/op\t     176 allocs/op",
            "extra": "636 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49b3bea3646472c1e4ecc09ca0d5f040409c4a3d",
          "message": "Flip error check that causes cache-miss page load to be empty (#13)",
          "timestamp": "2022-07-30T15:53:19+02:00",
          "tree_id": "354d6fc287dd00c24f972000d86881bee99c5c18",
          "url": "https://github.com/go-mojito/mojito/commit/49b3bea3646472c1e4ecc09ca0d5f040409c4a3d"
        },
        "date": 1659189235305,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 440456,
            "unit": "ns/op\t   29154 B/op\t     182 allocs/op",
            "extra": "2272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 412808,
            "unit": "ns/op\t   29432 B/op\t     179 allocs/op",
            "extra": "3174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 378234,
            "unit": "ns/op\t   29321 B/op\t     178 allocs/op",
            "extra": "3266 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 383529,
            "unit": "ns/op\t   29163 B/op\t     178 allocs/op",
            "extra": "2912 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cedric@qubyte.io",
            "name": "Cedric Lewe",
            "username": "0SkillAllLuck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b96625dae3ab036165a6e8867e10dd9886684d75",
          "message": "docs: Remove typos (#14)",
          "timestamp": "2022-07-31T01:19:16+02:00",
          "tree_id": "2594aa72036fd99867ebc4e7b558b89c08ca2140",
          "url": "https://github.com/go-mojito/mojito/commit/b96625dae3ab036165a6e8867e10dd9886684d75"
        },
        "date": 1659223189262,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 270600,
            "unit": "ns/op\t   23782 B/op\t     179 allocs/op",
            "extra": "3816 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 264917,
            "unit": "ns/op\t   29424 B/op\t     179 allocs/op",
            "extra": "4527 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 897325,
            "unit": "ns/op\t   29511 B/op\t     178 allocs/op",
            "extra": "4428 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2182940,
            "unit": "ns/op\t   26988 B/op\t     176 allocs/op",
            "extra": "534 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bcb5e44cd3458531aea51937c66b5b13a037ef1e",
          "message": "fix: Route loss on group (#15)\n\n* fix route loss on group when registering the same route with different methods\r\n\r\n* Panic if table fails",
          "timestamp": "2022-07-31T01:51:02+02:00",
          "tree_id": "67bc579dcf58b21687a7502efc052ed6cfeb8f1c",
          "url": "https://github.com/go-mojito/mojito/commit/bcb5e44cd3458531aea51937c66b5b13a037ef1e"
        },
        "date": 1659225095266,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 272914,
            "unit": "ns/op\t   24550 B/op\t     179 allocs/op",
            "extra": "3760 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 265070,
            "unit": "ns/op\t   29464 B/op\t     179 allocs/op",
            "extra": "4372 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 402719,
            "unit": "ns/op\t   29400 B/op\t     178 allocs/op",
            "extra": "3860 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2147797,
            "unit": "ns/op\t   26959 B/op\t     176 allocs/op",
            "extra": "524 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71fb4e2ecf37cd93dc984ef2dd38f94f6b4e7598",
          "message": "Add helper methods for reading JSON and XML bodies into an object (#16)",
          "timestamp": "2022-08-18T21:36:26+02:00",
          "tree_id": "506d7514b9c9b0c9a7aae3a4204157142e57df8c",
          "url": "https://github.com/go-mojito/mojito/commit/71fb4e2ecf37cd93dc984ef2dd38f94f6b4e7598"
        },
        "date": 1660851426397,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 493414,
            "unit": "ns/op\t   29137 B/op\t     182 allocs/op",
            "extra": "2138 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 429483,
            "unit": "ns/op\t   23779 B/op\t     176 allocs/op",
            "extra": "2847 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 421357,
            "unit": "ns/op\t   29228 B/op\t     178 allocs/op",
            "extra": "2943 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 1655555,
            "unit": "ns/op\t   23436 B/op\t     176 allocs/op",
            "extra": "2847 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c7481a46f933ec5a395ceb5519ea479133a8c46",
          "message": "Use .GetWriter on Response when passing to stdlib implementation (#17)",
          "timestamp": "2022-08-18T22:01:03+02:00",
          "tree_id": "cb0d2c5ef46f588d9c4cd276c431d00dca6b7940",
          "url": "https://github.com/go-mojito/mojito/commit/3c7481a46f933ec5a395ceb5519ea479133a8c46"
        },
        "date": 1660852904090,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 230746,
            "unit": "ns/op\t   23878 B/op\t     179 allocs/op",
            "extra": "4389 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 243492,
            "unit": "ns/op\t   29443 B/op\t     179 allocs/op",
            "extra": "5385 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 1587958,
            "unit": "ns/op\t   26653 B/op\t     177 allocs/op",
            "extra": "5356 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 1985353,
            "unit": "ns/op\t   27089 B/op\t     176 allocs/op",
            "extra": "572 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c7481a46f933ec5a395ceb5519ea479133a8c46",
          "message": "Use .GetWriter on Response when passing to stdlib implementation (#17)",
          "timestamp": "2022-08-18T22:01:03+02:00",
          "tree_id": "cb0d2c5ef46f588d9c4cd276c431d00dca6b7940",
          "url": "https://github.com/go-mojito/mojito/commit/3c7481a46f933ec5a395ceb5519ea479133a8c46"
        },
        "date": 1660901036207,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 240095,
            "unit": "ns/op\t   23481 B/op\t     178 allocs/op",
            "extra": "4364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 230760,
            "unit": "ns/op\t   29399 B/op\t     179 allocs/op",
            "extra": "4851 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 1396183,
            "unit": "ns/op\t   27949 B/op\t     178 allocs/op",
            "extra": "4695 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2052555,
            "unit": "ns/op\t   27090 B/op\t     176 allocs/op",
            "extra": "572 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43315617+nilathedragon@users.noreply.github.com",
            "name": "Nila",
            "username": "nilathedragon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00f910f01e7ed8043fc3d351156ab125e39285c9",
          "message": "Allow customization of the view cache ttl (#19)",
          "timestamp": "2022-08-19T19:01:38+02:00",
          "tree_id": "658400f9d50b9b884aafddb4c1b830453fa3007c",
          "url": "https://github.com/go-mojito/mojito/commit/00f910f01e7ed8043fc3d351156ab125e39285c9"
        },
        "date": 1660928544645,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Router_Handler",
            "value": 242300,
            "unit": "ns/op\t   22153 B/op\t     178 allocs/op",
            "extra": "4915 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Not_Found",
            "value": 1269543,
            "unit": "ns/op\t   28418 B/op\t     178 allocs/op",
            "extra": "4920 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_1",
            "value": 2202140,
            "unit": "ns/op\t   27011 B/op\t     176 allocs/op",
            "extra": "541 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_With_Middleware_5",
            "value": 2226662,
            "unit": "ns/op\t   26982 B/op\t     176 allocs/op",
            "extra": "531 times\n2 procs"
          }
        ]
      }
    ]
  }
}