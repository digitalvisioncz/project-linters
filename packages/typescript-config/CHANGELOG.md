# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.1](https://github.com/digitalvisioncz/project-linters/compare/@dvdevcz/typescript-config@0.1.0...@dvdevcz/typescript-config@0.1.1) (2026-10-06)

**Note:** Version bump only for package @dvdevcz/typescript-config





# [0.1.0](https://github.com/digitalvisioncz/project-linters/compare/@dvdevcz/typescript-config@0.0.3...@dvdevcz/typescript-config@0.1.0) (2026-10-06)


* feat(typescript-config)!: switch moduleResolution to bundler ([c1de579](https://github.com/digitalvisioncz/project-linters/commit/c1de579827e439d485ea5ac67560118763075b5b))


### BREAKING CHANGES

* `moduleResolution` is now `bundler`. Since TypeScript 6 the `types`
option also defaults to `[]`, so global types (e.g. `@types/node`) must be listed explicitly.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>





## [0.0.3](https://github.com/digitalvisioncz/project-linters/compare/@dvdevcz/typescript-config@0.0.2...@dvdevcz/typescript-config@0.0.3) (2023-06-12)


### Bug Fixes

* remove git heads from packages ([86408b5](https://github.com/digitalvisioncz/project-linters/commit/86408b5e2a9cc8a56aca6f832792a7ef198a327e))
