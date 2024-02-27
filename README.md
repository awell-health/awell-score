<h1 align="center">
  <a href="https://developers.awellhealth.com/awell-score/">
    Awell Score
  </a>
</h1>

<p align="center">
  <strong>An open source API</strong><br>
  to perform clinically validated score calculations.
</p>

<p align="center">
  <i>This project is licensed under the terms of the MIT license.</i>
</p>

<p align="center">
    <img src="https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555" alt="Built with Typescript" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
</p>

<h3 align="center" style='margin-bottom: 24px;'>
  <a href="https://developers.awellhealth.com/awell-score">Documentation</a>
  <span> · </span>
  <a href="https://developers.awellhealth.com/awell-score/developer-tools/api-playground">API playground</a>
  <span> · </span>
  <a href="https://score.awellhealth.com">Playground app</a>
</h3>

Awell Score is an API developed by the [Awell](http://awell.health/) team used to calculate validated scores for clinical & patient reported outcome measures or perform any other clinical algorithms. **The API currently has a library of over 100 validated scores.**

It was originally developed as an in-house microservice used by our own products. However, in February 2024 we decided to open source the project and make it available to everyone.

With Awell Score, you can avoid building clinical score calculations yourself which has a couple of benefits:

- ⏱️ **Save time and resources.** There's no need anymore to build these scoring algorithms yourself, which can be a time-consuming process.
- 📏 **Reliability & validity.** Score calculations can be openly peer-reviewed and clinically assured, resulting in a higher level of scrutiny and verifiability.
- 🧑‍🤝‍🧑 **Contributions.** Clinicians, developers, health care organizations, ... can contribute knowledge to a single, shared knowledgebase.

## Contents

- [Background](#-background)
- [Documentation](#-documentation)
- [Installation and running the app](#-installation-and-running-the-app)
- [Test suite](#-test-suite)
- [License policy](#-license-policy)
- [How to Contribute](#-how-to-contribute)

## 📜 Background

Clinical score calculations are tools which medical professionals use to help make decisions. Many of them are available in web page form on sites such as [MDCalc](https://www.mdcalc.com/).

However, a webpage is not something that a computer program or system can use, so in order to embed these calculations inside clinical systems an API would be more beneficial.

## 📖 Documentation

The full documentation for Awell Score can be found on our [Developer hub](https://developers.awellhealth.com/awell-score/docs/getting-started/what-is-awell-score).

## 🎉 Installation and running the app

The API is running on Node and built with Express and Typescript. NPM is used as the package manager. The API needs to be connected to a MongoDb database as it writes requests logs and calculation results into a database.

**Installation guide:**

1. Run `npm i` to install all the packages.
2. Create an `.env` file at the root of the project. Have a look at `.env.example` for the variables you need to run the app.
3. Make sure MongoDb is running on your machine (see instructions below).
4. Run the app via the `npm run dev` command.

### MongoDb

- [Installation instructions for Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- [Installation instructions for Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [Installation instructions for Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

## 🧪 Test suite

All calculations are covered with an extensive test suite to make sure the results are reliable and valid.

Run all tests via the `npm run test` command.

## 🪪 License policy

This open-source library supports calculations for various clinical questionnaires, some of which may have licensing requirements. **Users are responsible for ensuring they have the appropriate licenses** to use these questionnaires.

We do not provide licenses for the questionnaires nor manage licensing on your behalf. Failure to secure necessary licenses or comply with their terms is solely the user's liability.

Please ensure you have all necessary permissions before using this library.

## 👏 How to Contribute

The main purpose of this repository is to continue evolving Awell Score together with the healthcare community.

We want to make contributing to this project as easy and transparent as possible, and we are grateful to the community for contributing bug fixes and improvements. Read below to learn how you can take part in improving Awell Score.

### Contributing Guide

We are currently working on this section.

### Known issues

The first version of the API - which was only used by Awell internally - was built in December 2020 with plain JavaScript and Flow for static type checking. When we decided to make the API publically available, we did the effort to migrate the app to Typescript as that's the golden standard nowadays.

However, not all code passed Typescript's validation and quite some `//@ts-expect-error` comments had to be added in several places. Removing all of the errors will take some time and will be a gradual and progressive effort. There's a high confidence that there's no impact on the reliability & validity of scores given the extensive test coverage that is present.

### Contributors ✨

Awell Score was made possible by the following people:

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://www.linkedin.com/in/nckhell/"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEYDXgdp2oo9Q/profile-displayphoto-shrink_800_800/0/1539797053431?e=1669852800&v=beta&t=fR7HyaFffJOw3obemS-aw611YwQiHNbCAj_7GVlPIPY" width="100px;" alt=""/><br /><sub><b>Nick Hellemans</b></sub></a></td>
    </tr>
  </tbody>
</table>
