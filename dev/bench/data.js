window.BENCHMARK_DATA = {
  "lastUpdate": 1652579929234,
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
      }
    ]
  }
}