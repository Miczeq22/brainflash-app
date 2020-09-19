# Brainflash App

![Lint Check](https://github.com/Miczeq22/brainflash-app/workflows/Lint%20Check/badge.svg)
![Production Build](https://github.com/Miczeq22/brainflash-app/workflows/Production%20Build/badge.svg)

---

Client for Brainflash application, which is a flashcard portal.

## 📖 Table of Contents

- [✨ Getting started](#%e2%9c%a8-getting-started)
  - [Prerequisites](#prerequisites)
  - [Bootstrap](#bootstrap)
- [📜 Scripts](#%f0%9f%93%9c-scripts)
  - [Build](#build)
  - [Test](#test)
  - [Analyze](#analyze)
  - [Development](#development)
- [📚 Documentation](#%f0%9f%93%9a-documentation)
  - [Commit Message Guideline](#commit-message-guideline)

## ✨ Getting started

### Prerequisites

You need to have installed the following software:

- [nodejs](https://nodejs.org/en/) (>=12.13.1)
- [npm](https://npmjs.com/) (>= 6.13.0)

### Bootstrap

```bash
  git clone git@github.com:Miczeq22/zombies-app.git
  cd brainflash-app
  npm i
  cp .env.dist .env
```

**Please remember that `.env` must be implemented for proper work.**

## 📜 Scripts

### Build

- `build`: Builds production ready application.

### Test

- `test`: Run `jest` in standard mode.
- `test:watch`: Run `jest` in watch mode.
- `test:ci`: Run `jest` for CI purposes with coverage and database as docker container.

### Analyze

- `typecheck`: Run `typescript` in dry-mode (no output). Type errors will be printed to console.
- `format`: Run `prettier` to format all files. Gets invoked by the pre-commit hook.
- `lint`: Run `eslint` and `prettier`. Output any errors.

### Development

- `start`: Start app in development mode.
- `version`: Generates `CHANGELOG` file based on commit messages.

## 📚 Documentation

### Commit Message Guideline

- For easier commit type recognition commit messages are prefixed with an emoji
- See available [commit-emojis](https://github.com/sebald/commit-emojis#available-emojis)
