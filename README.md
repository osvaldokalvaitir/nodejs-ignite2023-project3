<h1 align="center">
    <img src="/.github/assets/logo.svg"
    width="200px"
    alt="Logo" />
</h1>

<h3 align="center">
  Node.js - Ignite 2023 Project 3
</h3>

<p align="center">
  :muscle: Application in SOLID in GymPass style using TypeScript, Fastify, @fastify/cookie, @fastify/jwt, Prisma, Zod, Day.js, bcrypt.js, HTTPie, Insomnia and Docker. Unit tests and e2e with Vitest, @vitest/ui, @vitest/coverage-v8, vite-tsconfig-paths and SuperTest. CI/CD with Git, GitHub and GitHub Actions
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/osvaldokalvaitir/nodejs-ignite2023-project3.svg?color=00A83A">

  <img alt="GitHub language top" src="https://img.shields.io/github/languages/top/osvaldokalvaitir/nodejs-ignite2023-project3.svg?color=00A83A">

  <a href="https://kalvaitir.com/">
    <img alt="Made by Kalvaitir" src="https://img.shields.io/badge/made%20by-Kalvaitir-00A83A">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-00A83A">
</p>

<p align="center">
  <a href="#clipboard-system-requirements">System Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#wrench-install-and-run">Install and run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#memo-license">License</a>
</p>

## :clipboard: System Requirements

### Functional Requirements

- [x] It should be possible to register;
- [x] It should be possible to authenticate;
- [x] It should be possible to retrieve the profile of a logged-in user;
- [x] It should be possible to retrieve the number of check-ins made by the logged-in user;
- [x] It should be possible for the user to retrieve their check-in history;
- [x] It should be possible for the user to search for nearby gyms (up to 10km);
- [x] It should be possible for the user to search for gyms by name;
- [x] It should be possible for the user to check in at a gym;
- [x] It should be possible to validate a user's check-in;
- [x] It should be possible to register a gym;

### Business Rules

- [x] The user should not be able to register with a duplicate email;
- [x] The user cannot perform 2 check-ins on the same day;
- [x] The user cannot check in if they are not near (100m) the gym;
- [x] The check-in can only be validated up to 20 minutes after being created;
- [x] The check-in can only be validated by administrators;
- [x] The gym can only be registered by administrators;

## Non-Functional Requirements

- [x] The user's password must be encrypted;
- [x] The application's data must be persisted in a PostgreSQL database;
- [x] All data lists must be paginated with 20 items per page;
- [x] The user must be identified by a JWT (JSON Web Token);

## :wrench: Install and run

Open terminal:

```sh
# Clone this repo
git clone https://github.com/osvaldokalvaitir/nodejs-ignite2023-project3

# Entry in folder
cd nodejs-ignite2023-project3

# Install deps with npm
npm install

# Launch the app with npm
npm run dev
```

Click to learn more about the tools used:  [Docker](https://github.com/osvaldokalvaitir/awesome/blob/main/src/containers/docker.md), [PostgreSQL Docker Image bitnami-postgresql](https://github.com/osvaldokalvaitir/awesome/blob/main/src/containers/docker/images/bitnami-postgresql.md), [Insomnia](https://github.com/osvaldokalvaitir/awesome/blob/main/src/api-clients/insomnia.md), [Git](https://github.com/osvaldokalvaitir/awesome/blob/main/src/version-controls/git.md), [GitHub](https://github.com/osvaldokalvaitir/awesome/blob/main/src/version-controls/git/tools/github.md), [GitHub Actions](https://github.com/osvaldokalvaitir/awesome/blob/main/src/ci-cd/github-actions.md).

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Ignite%20-%20API%20SOLID%20Node.js&uri=https%3A%2F%2Fgithub.com%2Fosvaldokalvaitir%2Fnodejs-ignite2023-project3%2FInsomnia.yaml)

## :memo: License

This project is under the MIT license. See [LICENSE](/LICENSE) for more information.

---

<p align="center">
Developed with 💚 by <a href="https://www.linkedin.com/in/osvaldokalvaitir">Osvaldo Kalvaitir Filho</a>
</p>
