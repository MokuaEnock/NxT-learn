<p align="center">
    <a href="nxt-learn.vercel.app" target="_blank">
        <img width="50%" src="./src/components/assets/logo.png" alt="NxT Logo">
    </a>
</p>

<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold; margin-block-start: 1em; margin-block-end: 1em;">

<a name="logo" href="https://www.aregtech.com"><img align="center" src="./src/components/assets/Screenshot from 2022-10-07 11-42-05.png" alt="NxT learn" style="width:100%;height:100%"/></a>
<br><br><strong>NxT Learn</strong>

</h1>

---
![Viewers](https://gpvc.arturio.dev/MokuaEnock)

---

## Introduction[![](./docs/img/pin.svg)](#introduction)

**[NxT Learn](https://sulu.io/)** is an open source E-Learning platform that relies on the learner guided education philosophy. NxT learn focuses on overcoming the traditional learning strategies such as exams at the end of the module but rather offers learners skill-based projects during the module and after the module.

Have a look at the official [NxT Learn](nxt-learn.vercel.app) for a comprehensive list of Sulu's features, core values and use cases.

If you want to join the NxT learn as a learner or an instructor you can join us **[here.](nxt-learn.vercel.app)**. If you want to help us maintain the core architecture of the NxT learn project you can also join us **[here](https://github.com/MokuaEnock/NxT-learn)** for a complete step-by-step guide on how you can develop with us.

---

## Table of contents[![](./docs/img/pin.svg)](#table-of-contents)

- [Project Status![](#project-status)](#project-status)
- [Introduction![](#introduction)](#introduction)
- [Table of contents![](#table-of-contents)](#table-of-contents)
- [Motivation![](#motivation)](#motivation)
- [More than embedded![](#more-than-embedded)](#more-than-embedded)
- [Composition![](#composition)](#composition)
- [Software build![](#software-build)](#software-build)
- [Software integration![](#software-integration)](#software-integration)
  - [Mulitcast router](#mulitcast-router)
  - [Logging service](#logging-service)
  - [Development](#development)
- [Use cases and benefits![](#use-cases-and-benefits)](#use-cases-and-benefits)
  - [Distributed solution](#distributed-solution)
  - [Driverless devices](#driverless-devices)
  - [Real-time solutions](#real-time-solutions)
  - [Digital twin](#digital-twin)
  - [Simulation and test automations](#simulation-and-test-automations)
- [Examples![](#examples)](#examples)
- [Licensing![](#licensing)](#licensing)
- [Call for action![](#call-for-action)](#call-for-action)

---

## Motivation[![](./docs/img/pin.svg)](#motivation)

Traditional avenues for education are resource intensive and have been criticized for a long time for not allowing room for differently-abled learners to explore their options, this has led to education rewarding individuals who are good at cramming and not necessarily at problem-solving. The crammers after completing their education and being released into the world are faced with very different problems that do not require cramming.

The NxT learn was implemented to overcome these challenges it seeks to change the avenues of education by implementing the following.

1. **Project-based** - Learners doing real world projects throughout the course and after the course.

2. **Learner-centered** - Learning is student-centered and learners solve challenges within themselves and only have access to the instructor when they face a blocker. The instructor only guides the learner through motivation and rewards.

---

## 👨‍💻 Tech stack

Here's a brief high-level overview of the tech stack the NxT project uses:



- This project uses **[Raect Js](https://reactjs.org/)** as the frontend framework.
-
- The styling of the project has been done using custom pure CSS3 and it is encouraged for any future contribution this will be the default styling language.
- The uses JSON for data handling.
-  🚨 Currently, the app is still in development and more features will be added in the coming week.
- The app uses the font ["Chakra Petch"](https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap) as its main font, and the design of the app adheres to the material design guidelines.

---
## 🎨 Features

- Courses - Listing the most recent courses offered by experienced instructors.

Recommendation engine - Recommending courses and instructors that might interest the user.

-Clean UI - simple UI that allows users to navigate easily.

---
## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                               Yes                                                                                |                                                                                   11+                                                                                   |                                                                             Yes                                                                              |                                                                               Yes                                                                                |                                                                                Yes                                                                                 |



---

## Folder Structure

├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
|
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── about
    │   │   └── about.js
    │   ├── assets
    │   │   ├── david-clode-xNSCi_K179c-unsplash.jpg
    │   │   ├── emiliano-vittoriosi-IR-71TP2E8o-unsplash.jpg
    │   │   ├── github-logo.png
    │   │   ├── illustrator.svg
    │   │   ├── instagram.png
    │   │   ├── kacper-janczy-OXtVaNGprrE-unsplash.jpg
    │   │   ├── linkedin.png
    │   │   ├── logo.png
    │   │   ├── mitchell-luo-H07T9WbyLUw-unsplash.jpg
    │   │   ├── pexels-eriks-abzinovs-3117225.jpg
    │   │   ├── pexels-eva-bronzini-7641223.jpg
    │   │   ├── pexels-johannes-plenio-1456301.jpg
    │   │   ├── pexels-kelly-4098504.jpg
    │   │   ├── pexels-pixabay-433159.jpg
    │   │   ├── Screenshot from 2022-10-07 11-42-05.png
    │   │   └── twitter.png
    │   ├── contact
    │   │   └── contact.js
    │   ├── courses
    │   │   ├── Aside.js
    │   │   ├── CourseCard.js
    │   │   ├── CourseList.js
    │   │   ├── courses.js
    │   │   ├── DescriptionItem.js
    │   │   └── Description.js
    │   ├── Home
    │   │   ├── courses.js
    │   │   ├── Home.js
    │   │   ├── insts.js
    │   │   └── View.js
    │   ├── Instructors
    │   │   ├── InstructorDescription.js
    │   │   ├── InstructorItem.js
    │   │   ├── Instructors.js
    │   │   └── InstructorsList.js
    │   ├── landing
    │   │   ├── footer.js
    │   │   ├── header.js
    │   │   ├── landing.js
    │   │   └── main.js
    │   ├── login
    │   │   ├── LoginForm.js
    │   │   └── login.js
    │   └── path
    │       ├── courseview.js
    │       ├── pathitem.js
    │       ├── path.js
    │       └── pathlist.js
    ├── index.css
    ├── index.js
    ├── logo main.png
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
## Future work

- Incorporate a database to handle all the user's data.

- Update the UI and UX of the website.

- Allow instructors to upload own courses.

- Create learners' and instructors' dashboards.
Integrate an IDE.

- Write end-to-end tests using mocha and chai.

---
# ✍️ Contributing

Interested in contributing to the Well app project? Thanks so much for your interest! We are always looking for improvements to the project and contributions from open-source developers are greatly appreciated.

---

# 🌟 Spread the word

If you want to say thank you and/or support the active development of the Well app:

- Add a GitHub Star to the project!
- Tweet about the project on your Twitter!
  - Tag [@254_enok\_](https://twitter.com/254_enok_) and/or `#NxTLearn`

---

## Licensing[![](./docs/img/pin.svg)](#licensing)

The NxT Learn is an open-source platform and everyone can learn and contribute to its development, it is licensed under the GNU General Public License v3.0. All designs were created by [Enock Mokua](https://github.com/MokuaEnock) and distributed under a Creative Commons license (CC BY-SA 4.0 International).

<p align="center">
    <a href="LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/sulu/sulu.svg" alt="GitHub license">
    </a>
</p>

