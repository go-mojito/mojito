window.BENCHMARK_DATA = {
  "lastUpdate": 1651797004908,
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
      }
    ]
  }
}