window.BENCHMARK_DATA = {
  "lastUpdate": 1651876211918,
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
      }
    ]
  }
}