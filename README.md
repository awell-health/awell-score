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
    <img src="https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555" alt="Built with Typescript" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
</p>

<h3 align="center" style='margin-bottom: 24px;'>
  <a href="https://developers.awellhealth.com/awell-score">Documentation</a>
  <span> · </span>
  <a href="https://score.awellhealth.com">Playground app</a>
  <span> · </span>
  <a href="https://developers.awellhealth.com/awell-score/developer-tools/api-playground">API playground</a>
</h3>

Awell Score is an API developed by the [Awell Health](http://awell.health/) team used to calculate validated scores for clinical & patient reported outcome measures or perform any other clinical algorithms. **The API currently has a library of over 100 validated scores.**

It was originally developed as an in-house microservice used by our own products. However, in September 2022 we decided to make the project open source and make it available to everyone.

With Awell Score, you can avoid building clinical score calculations yourself which has a couple of benefits:

- ⏱️ **Save time and resources.** There's no need anymore to build these scoring algorithms yourself, which can be a time-consuming process.
- 📏 **Reliability & validity.** Score calculations can be openly peer-reviewed and clinically assured, resulting in a higher level of scrutiny and verifiability.
- 🔍 **Compliance.** There's an Awell hosted/deployed version of the API available which is a certified class Ia medical device. Additionally, compliance can be achieved at the API level instead of at the app level.
- 🧑‍🤝‍🧑 **Contributions.** Clinicians, developers, health care organizations, ... can contribute knowledge to a single, shared knowledgebase.

## Contents

- [Background](#-background)
- [Documentation](#-documentation)
- [Installation and running the app](#-installation-and-running-the-app)
- [Test suite](#-test-suite)
- [How to Contribute](#-how-to-contribute)

## 📜 Background

Clinical score calculations are tools which medical professionals use to help make decisions. Many of them are available in web page form on sites such as [MDCalc](https://www.mdcalc.com/).

However, a webpage is not something that a computer or system program can use, so in order to embed these calculations inside clinical systems an API would be more beneficial. That's why we have created Awell Score.

## 📖 Documentation

The full documentation for Awell Score can be found on our [Developer hub][https://developers.awellhealth.com/awell-score/docs/getting-started/what-is-awell-score].

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

All calculations are covered with an extensive test suite to make sure the results are reliable and valid. This is required because the Awell hosted version of the API is a medical device class Ia.

Run all tests via the `npm run test` command.

## 👏 How to Contribute

The main purpose of this repository is to continue evolving Awell Score together with the healthcare community.

We want to make contributing to this project as easy and transparent as possible, and we are grateful to the community for contributing bug fixes and improvements. Read below to learn how you can take part in improving Awell Score.

### Contributing Guide

We are currently working on this section.
