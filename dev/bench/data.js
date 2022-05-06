window.BENCHMARK_DATA = {
  "lastUpdate": 1651796642561,
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
      }
    ]
  }
}