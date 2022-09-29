<p align="center">
    <a href="https://sulu.io/" target="_blank">
        <img width="50%" src="https://sulu.io/website/images/sulu.svg" alt="Sulu logo">
    </a>
</p>

<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold; margin-block-start: 1em; margin-block-end: 1em;">
<a name="logo" href="https://www.aregtech.com"><img align="center" src="/docs/img/areg-sdk-1280x360px-logo.png" alt="AREG SDK Home" style="width:100%;height:100%"/></a>
  <br><br><strong>AREG SDK</strong>
</h1>

![Latest release](https://img.shields.io/github/v/release/aregtech/areg-sdk?label=%20%F0%9F%93%A3%20Latest%20release&style=flat&logoColor=b0c0c0&labelColor=363D44)

The latest development sources can be cloned from [20220701-candidate](https://github.com/aregtech/areg-sdk/tree/20220701-candidate) branch. Please check the branch [build status](https://github.com/aregtech/areg-sdk/actions) before using it.

---

## Introduction[![](./docs/img/pin.svg)](#introduction)

**[Sulu](https://sulu.io/)** is a highly extensible open-source **PHP content management system based** on the [Symfony](https://symfony.com/) framework. Sulu is developed to deliver robust **multi-lingual and multi-portal websites** while providing an **intuitive and extensible administration interface** to manage the full content lifecycle.

Have a look at the official [Sulu website](https://sulu.io/) for a comprehensive list of Sulu's features, core values and use cases.

<br/>
<p align="center">
    <img width="80%" src="https://sulu.io/uploads/media/800x@2x/07/167-ezgif.gif?v=2" alt="Sulu Slideshow">
</p>
<br/>

This repository contains the **core framework of the Sulu content management system**. The framework implements the functionality that is built into the Sulu content management system and therefore is a dependency of all Sulu projects.

If you want to **start a new Sulu project**, you might be interested in the [sulu/skeleton](https://github.com/sulu/skeleton) template repository. If you are planning to **extend your existing Sulu project**, visit the [Sulu organization](https://github.com/sulu) on GitHub for a complete list of official Sulu bundles.

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

## Motivation[![](./docs/img/pin.svg)](#motivation)

Traditionally, devices are connected to clients to stream data to the cloud or fog servers for further processing.
<br><br><a href="/docs/img/mist-network.png"><img src="/docs/img/mist-network.png" alt="IoT-to-Cloud (Nebula) network" style="width:70%;height:70%"/></a><br><br>
Since data is generated and collected at the edge of the network (mist network), it makes sense to change the role of connected Things and provide network-accessible (_Public_) services directly on devices. This extends _Cloud_ to the extreme edge and it is a good foothold for robust solutions such as:

- _Increase data privacy_, which is an important factor for sensitive data.
- _Decrease data streaming_, which is a fundamental condition to optimize network communication.
- Develop _autonomous, intelligent and self-aware devices_ by providing network services directly in the environment of data origin.

## Licensing[![](./docs/img/pin.svg)](#licensing)

AREG SDK is dual-licensed under free open source license (Apache version 2 license) and commercial license, which gives the commercial support, full rights to create and distribute software without open source license obligations. For licensing details see [LICENSE](./LICENSE.txt) document.

For commercial license, support or additional information, please visit [Aregtech](https://www.aregtech.com/) website or contact _info[at]aregtech.com_.

---

## Call for action[![](./docs/img/pin.svg)](#call-for-action)

Do you like the project, have new ideas or need features? You are welcome to join the project. To join the development team, please prepare an introduction and code examples. Please also share the project with your connections on [![Twitter](https://img.shields.io/twitter/url?label=Twitter&style=social&url=https%3A%2F%2Fgithub.com%2Faregtech%2Fareg-sdk)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Faregtech%2Fareg-sdk) and other social media platforms. [![Star AREG SDK](https://img.shields.io/github/stars/aregtech/areg-sdk.svg?style=social&label=Star%20AREG%20SDK)](https://github.com/aregtech/areg-sdk/) on GitHub to inspire us and continue to develop the technology with heart! We'll feel useful and motivated to develop more.

---

**Follow us**<br>
[![Follow us on twitter](https://img.shields.io/twitter/follow/aregtech.svg?style=social)](https://twitter.com/intent/follow?screen_name=aregtech)
[![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-Aregtech-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/company/aregtech) [![Join the chat at https://gitter.im/areg-sdk/community](https://badges.gitter.im/areg-sdk/community.svg)](https://gitter.im/areg-sdk/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

---

![Viewers](https://gpvc.arturio.dev/aregtec)

<!-- markdownlint-enable -->

![The Well App](thumbnail.png)

<div align='center'>

<a href='https://github.com/chroline/well_app/releases'>

<img src='https://img.shields.io/github/v/release/chroline/well_app?color=%23FDD835&label=version&style=for-the-badge'>

</a>

<a href='https://github.com/chroline/well_app/blob/main/LICENSE'>

<img src='https://img.shields.io/github/license/chroline/well_app?style=for-the-badge'>

</a>

</div>

<br />

<div align='center'>

### Quick Links

<a href='https://projects.colegaw.in/well-app?utm_source=GitHub&utm_medium=readme&utm_campaign=well_app_readme'>

<img src='https://img.shields.io/badge/HOMEPAGE-gray?style=for-the-badge'>

</a>

<a href='https://projects.colegaw.in/well-app/research?utm_source=GitHub&utm_medium=readme&utm_campaign=well_app_readme'>

<img src='https://img.shields.io/badge/RESEARCH-blue?style=for-the-badge'>

</a>

<a href='https://projects.colegaw.in/well-app/case-study?utm_source=GitHub&utm_medium=readme&utm_campaign=well_app_readme'>

<img src='https://img.shields.io/badge/CASE STUDY-green?style=for-the-badge'>

</a>

<br />

<br />

<a href="https://www.producthunt.com/posts/well?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-well" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=322651&theme=light" alt="Well - Improve your productivity and happiness in just 21 days. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

</div>

# 🧐 Project philosophy

> The Well app is a mental health and mindfulness app built on top of the science of positive psychology. The Well app is more than just another meditation or journaling app; it encourages you to enhance and reflect on your day with structured, guided activities.
>
> There are 5 daily tasks that the Well app asks you to complete each day: record 3 gratitudes, write a journal entry, perform 3 acts of kindness, exercise for 20 minutes, and meditate for 15 minutes.

**Read more about the Well app on [the project homepage](https://projects.colegaw.in/well-app?utm_source=GitHub&utm_medium=readme&utm_campaign=well_app_readme).**

# 📒 Wiki

This project repository has [a great wiki](https://github.com/chroline/well_app/wiki) (currently WIP) that you should consider reading! It goes into detail about the project from a more technical aspect. If you are interested in learning more about the app itself, go ahead and check it out!

# 👨‍💻 Tech stack

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.

For more information on the technologies that power the Well app, check out the [Tech Stack](https://github.com/chroline/well_app/wiki/Tech-Stack) page on our wiki.

# ✍️ Contributing

Interested in contributing to the Well app project? Thanks so much for your interest! We are always looking for improvements to the project and contributions from open-source developers are greatly appreciated.

If you have a contribution in mind, please check out our [Contribution Guide](https://github.com/chroline/well_app/wiki/Contribution-Guide) for information on how to do so. Also, make sure you read our [Code of Conduct](https://github.com/chroline/well_app/wiki/Code-of-Conduct) to foster an encouraging sense of community.

# 🌟 Spread the word

If you want to say thank you and/or support the active development of the Well app:

- Add a GitHub Star to the project!
- Tweet about the project on your Twitter!
  - Tag [@colegawin\_](https://twitter.com/colegawin_) and/or `#thewellapp`
- Leave us a review [on the iOS App Store](https://apps.apple.com/us/app/well-reboot-your-mindset/id1573357406)!

Thanks so much for your interest in growing the reach of the Well app!

_**PS:** consider sponsoring me ([Cole Gawin](https://colegaw.in)) to continue the development of this project on [BuyMeACoffee](https://buymeacoffee.com/colegawin) :)_

# ⚠️ License

The Well app is free and open-source software licensed under the GNU General Public License v3.0. All designs were created by [Cole Gawin](https://github.com/chroline) and distributed under Creative Commons license (CC BY-SA 4.0 International).

<p align="center">
    <a href="LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/sulu/sulu.svg" alt="GitHub license">
    </a>
    <a href="https://github.com/sulu/sulu/releases" target="_blank">
        <img src="https://img.shields.io/github/tag/sulu/sulu.svg" alt="GitHub tag (latest SemVer)">
    </a>
    <a href="https://github.com/sulu/sulu/actions" target="_blank">
        <img src="https://img.shields.io/github/workflow/status/sulu/sulu/Test%20application.svg?label=test-workflow" alt="Test workflow status">
    </a>
    <a href="https://github.com/sulu/sulu/commits/2.x" target="_blank">
        <img src="https://img.shields.io/github/commit-activity/y/sulu/sulu.svg" alt="GitHub commit activity">
    </a>
    <a href="https://github.com/sulu/sulu/graphs/contributors" target="_blank">
        <img src="https://img.shields.io/github/contributors-anon/sulu/sulu.svg" alt="GitHub contributors">
    </a>
    <a href="https://packagist.org/packages/sulu/sulu" target="_blank">
        <img src="https://img.shields.io/packagist/dt/sulu/sulu.svg" alt="Packagist downloads">
    </a>
</p>

## 📫&nbsp; Have a question? Want to chat? Ran into a problem?

We are happy to welcome you in our official [Slack channel](https://sulu.io/services-and-support) or answer your questions via [GitHub Discussions](https://github.com/sulu/sulu/discussions)! Obviously you can always **reach out to us directly** via the [Sulu twitter account](https://twitter.com/sulu) or post your question on [StackOverflow](https://stackoverflow.com/questions/tagged/sulu) with the official `sulu` tag.

## 🤝&nbsp; Found a bug? Missing a specific feature?

Feel free to **file a new issue** with a respective title and description on the the [sulu/sulu](https://github.com/sulu/sulu/issues) repository. If you already found a solution to your problem, **we would love to review your pull request**! Have a look at our [contribution guidelines](http://docs.sulu.io/en/latest/developer/contributing/) to find out about our coding standards.

## ✅&nbsp; Requirements

Sulu requires a **PHP version higher or equal to 7.2** and is compatible with every **Symfony version starting from 4.3**. Have a look at the `require` section in the [composer.json](composer.json) of the [sulu/sulu](https://github.com/sulu/sulu) core framework to find an **up-to-date list of the requirements** of Sulu content management system.

## 📘&nbsp; License

The Sulu content management system is released under the under terms of the [MIT License](LICENSE).

## ❤️&nbsp; Community and Contributions

The Sulu content management system is a **community-driven open source project** backed by various partner companies. We are committed to a fully transparent development process and **highly appreciate any contributions**. Whether you are helping us fixing bugs, proposing new feature, improving our documentation or spreading the word - **we would love to have you as part of the Sulu community**.

<h3>
        <a href="https://www.github.com/andiemmadavies">
            <img src="https://img.shields.io/badge/maintainer-%40andiemmadavies-yellow">
        </a>
        <a href="https://www.triumphmayflowerclub.com/">
            <img src="https://img.shields.io/website?url=http%3A%2F%2Fwww.triumphmayflowerclub.com%2F">
        </a>
        <a href="https://www.triumphmayflowerclub.com/news/2018/03/launchofthenewclubwebsite">
            <img src="https://img.shields.io/badge/launched-march%202018-teal">
        </a>
        <a href="https://www.github.com/Stack-in-a-box/triumphmayflowerclub.com/commits/master">
            <img src="https://img.shields.io/github/last-commit/Stack-in-a-box/triumphmayflowerclub.com?color=blue&label=updated">
        </a>
        <a href="https://www.github.com/Stack-in-a-box/triumphmayflowerclub.com/releases/latest">
            <img src="https://img.shields.io/github/v/release/Stack-in-a-box/triumphmayflowerclub.com?color=blueviolet&label=version">
        </a>
        <a href="#copyright">
            <img src="https://img.shields.io/badge/licence-%C2%A9-crimson">
        </a>
        <a href="https://www.facebook.com/triumphmayflowerclub">
            <img src="https://img.shields.io/badge/social-facebook-darkred">
        </a>
</h3>

## Contact

If you need to get in-touch with me ([Andi Emma Davies](https://www.github.com/andiemmadavies) – lead developer), please do so at the following email address: [andi@stackinabox.co.uk](mailto:andi@stackinabox.co.uk?subject=Triumph%20Mayflower%20Club%20Website)

## Copyright

Copyright © Stack-in-a-box Software 2017–2021

Copyright © Triumph Mayflower Club 2005-2021

## 3. Future work

- Normalise the observation spaces.
- Implement an action space that only permits the agent to take non-terminal actions.
- Implement more shaping rewards: potential-style, potential-based, dynamic potential-based, and non-potential. Optimise their weights using an optimisation algorithm.
- Write end-to-end and integration tests using pytest.
- Perform mutation and property-based testing using mutmut and Hypothesis.
- Use Coverage.py to increase code coverage.

## 4. Acknowledgements

This package utilises several methods from the [codebase](https://github.com/andreanlay/tetris-ai-deep-reinforcement-learning) developed by andreanlay (2020) and the [codebase](https://github.com/Benjscho/gym-mdptetris) developed by Benjscho (2021).

![NSGIF](https://dl.dropboxusercontent.com/s/0rq3fr0dtpvwd4h/NSGIF-header.png?dl=0)

NSGIF is an iOS Library for converting your videos into beautiful animated GIFs.
Check out [_this example_](http://files.parsetfss.com/2677410f-fd15-46aa-a2fa-258c85d4da30/tfss-2215cfe6-03b5-4546-8422-d292f875efb9-whom.gif).

_Sometimes we need to deal with GIFs in Cocoa. This can really be a pain in the ass (believe me). And here comes our hero :octocat:. Breaking through errors and glitches and generating smooth GIFs :dash:._

## How it works

![NSGIF](https://dl.dropboxusercontent.com/s/nsh0s1shh9fbqpu/NSGIF-HIW.png?dl=0)
That's it really. Although iOS defaults to .MOV for recordings you can also use .AVI and .MP4. If you want to go into some technical details though, here they are:

[![github release version](https://img.shields.io/github/v/release/nhn/tui.editor.svg?include_prereleases)](https://github.com/nhn/tui.editor/releases/latest) [![npm version](https://img.shields.io/npm/v/@toast-ui/editor.svg)](https://www.npmjs.com/package/@toast-ui/editor) [![license](https://img.shields.io/github/license/nhn/tui.editor.svg)](https://github.com/nhn/tui.editor/blob/master/LICENSE) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/nhn/tui.editor/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) [![code with hearth by NHN Cloud](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-NHN_Cloud-ff1414.svg)](https://github.com/nhn)

## 🎨 Features

- [Viewer](https://github.com/nhn/tui.editor/tree/master/docs/en/viewer.md) : Supports a mode to display only markdown data without an editing area.
- [Internationalization (i18n)](https://github.com/nhn/tui.editor/tree/master/docs/en/i18n.md) : Supports English, Dutch, Korean, Japanese, Chinese, Spanish, German, Russian, French, Ukrainian, Turkish, Finnish, Czech, Arabic, Polish, Galician, Swedish, Italian, Norwegian, Croatian + language and you can extend.
- [Widget](https://github.com/nhn/tui.editor/tree/master/docs/en/widget.md) : This feature allows you to configure the rules that replaces the string matching to a specific `RegExp` with the widget node.
- [Custom Block](https://github.com/nhn/tui.editor/tree/master/docs/en/custom-block.md) : Nodes not supported by Markdown can be defined through custom block. You can display the node what you want through writing the parsing logic with custom block.

## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                               Yes                                                                                |                                                                                   11+                                                                                   |                                                                             Yes                                                                              |                                                                               Yes                                                                                |                                                                                Yes                                                                                 |

## 🔧 Pull Request Steps

TOAST UI products are open source, so you can create a pull request(PR) after you fix issues. Run npm scripts and develop yourself with the following process.

### Setup

Fork `main` branch into your personal repository. Clone it to local computer. Install node modules. Before starting development, you should check if there are any errors.

```sh
git clone https://github.com/{your-personal-repo}/tui.editor.git
npm install
npm run build toastmark
npm run test editor
```

> TOAST UI Editor uses [npm workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces/), so you need to set the environment based on [npm7](https://github.blog/2021-02-02-npm-7-is-now-generally-available/). If subversion is used, dependencies must be installed by moving direct paths per package.

### Develop

You can see your code reflected as soon as you save the code by running a server. Don't miss adding test cases and then make green rights.

#### Run snowpack-dev-server

[snowpack](https://www.snowpack.dev/) allows you to run a development server without bundling.

```sh
npm run serve editor
```

#### Run webpack-dev-server

If testing of legacy browsers is required, the development server can still be run using a [webpack](https://webpack.js.org/).

```sh
npm run serve:ie editor
```

#### Run test

```sh
npm test editor
```

### Pull Request

Before uploading your PR, run test one last time to check if there are any errors. If it has no errors, commit and then push it!

For more information on PR's steps, please see links in the Contributing section.

## 💬 Contributing

- [Code of Conduct](https://github.com/nhn/tui.editor/blob/master/CODE_OF_CONDUCT.md)
- [Contributing Guideline](https://github.com/nhn/tui.editor/blob/master/CONTRIBUTING.md)
- [Commit Convention](https://github.com/nhn/tui.editor/blob/master/docs/COMMIT_MESSAGE_CONVENTION.md)
- [Issue Guidelines](https://github.com/nhn/tui.editor/tree/master/.github/ISSUE_TEMPLATE)

<p align="center">
  <!-- version -->
  <img src='https://img.shields.io/github/package-json/v/MananTank/radioactive-state?color=blue&label=npm&style=flat' />
  <!-- size -->
  <img src='https://img.shields.io/bundlephobia/minzip/radioactive-state?color=success&label=size' />
  <!-- downloads npm per week  -->
  <img src='https://img.shields.io/npm/dw/radioactive-state?color=blueviolet' />
  <!-- chat -->
  <a href='https://join.slack.com/t/radioactive-state/shared_invite/zt-gwd1rsvr-vkoizw5RG5rk9rwsdgT3gQ'>
    <img src='https://img.shields.io/badge/Chat-Slack-red'>
  </a>
  <!-- stars -->
  <img src='https://img.shields.io/github/stars/MananTank/radioactive-state?style=social&color=%23FFB31A' />
  <!-- follow -->
  <img src='https://img.shields.io/github/followers/MananTank?label=Follow&style=social&color=%23FFB31A' />
  <!-- Twitter intent -->
  <a href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2FMananTank%2Fradioactive-state&via=MananTank_&text=Make%20your%20@reactjs%20App%20Truly%20Reactive%20with%20radioactive-state&hashtags=react%2CradioactiveState' target='_blank'>
    <img src='https://img.shields.io/twitter/url/http/shields.io.svg?style=social'/>
  </a>
</p>


<h2 id="folder-structure"> :cactus: Folder Structure</h2>

    code
    .
    │
    ├── data
    │   ├── raw_data
    │   │   ├── phone
    │   │   │   ├── accel
    │   │   │   └── gyro
    │   │   ├── watch
    │   │       ├── accel
    │   │       └── gyro
    │   │
    │   ├── transformed_data
    │   │   ├── phone
    │   │   │   ├── accel
    │   │   │   └── gyro
    │   │   ├── watch
    │   │       ├── accel
    │   │       └── gyro
    │   │
    │   ├── feature_label_tables
    │   │    ├── feature_phone_accel
    │   │    ├── feature_phone_gyro
    │   │    ├── feature_watch_accel
    │   │    ├── feature_watch_gyro
    │   │
    │   ├── wisdm-dataset
    │        ├── raw
    │        │   ├── phone
    │        │   ├── accel
    │        │   └── gyro
    │        ├── watch
    │            ├── accel
    │            └── gyro
    │
    ├── CNN_Impersonal_TransformedData.ipynb
    ├── CNN_Personal_TransformedData.ipynb
    ├── CNN_Impersonal_RawData.ipynb
    ├── CNN_Personal_RawData.ipynb
    ├── Classifier_SVM_Personal.ipynb
    ├── Classifier_SVM_Impersonal.ipynb
    ├── statistical_analysis_time_domain.py
    ├── Topological data analysis.ipynb

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
