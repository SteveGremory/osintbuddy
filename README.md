[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Total Downloads](https://static.pepy.tech/badge/osintbuddy)](https://pepy.tech/project/osintbuddy)
[![Downloads](https://static.pepy.tech/badge/osintbuddy/week)](https://pepy.tech/project/osintbuddy)

<br />


<p>
  <a href="https://github.com/jerlendds/osintbuddy">
    <img src="./docs/watermark.svg" height="130px" alt="OSINT Buddy Logo">
  </a>

> *I have no data yet. It is a capital mistake to theorize before one has data. Insensibly
> one begins to twist facts to suit theories, instead of theories to suit facts.*


<span style="display: inline-block; width:830px"> [Discord](https://discord.gg/gsbbYHA3K3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [osintbuddy.com](https://osintbuddy.com)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  [osintbuddy-plugins](https://github.com/jerlendds/osintbuddy-plugins) </span>


  <h2><b>Introducing OSINTBuddy</b></h2>
  <p>
      Welcome to the OSINTBuddy project where you can connect, combine,
      and get insights from unstructured and public data as results that
      can be explored step-by-step. An easy-to-use plugin system allows any
      Python developer to quickly integrate new data sources.
  </p>
<br/>

![osintbuddy-demo](https://github.com/jerlendds/osintbuddy/assets/29207058/5640a430-50f7-45df-9f75-8dd473dcdd1b)

  ---
</p>

<details open="open">
<summary> 
<b>Table of Contents</b>
</summary>
  <ol>
    <li>
      <a href="#what-is-osintbuddycom">What is OSINTBuddy</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

### What is <a referrerpolicy="unsafe-url" target="_blank" href="https://osintbuddy.com">osintbuddy.com</a>?


Not much, yet.


But here's the concept:


An almost incomprehensible amount of data is created every day. And each year, figures are growing at an ever-increasing rate. These data sources can be divided up into six different categories of information flow:


- Public government data
- Media *(newspapers, magazines, radio)*
- Internet *(blogs, discussion groups, citizen media, etc)*
- Professional and academic publications *(budgets, hearings, telephone directories, websites, etc)*
- Commercial data *(commercial imagery, financial assessments, databases, etc)*
- Grey literature *(technical reports, preprints, patents, business documents, etc)*


Some of the main hindrances to practical OSINT is the volume of information it has to deal with [(information explosion)](https://en.wikipedia.org/wiki/Information_explosion) and the issue of low quality data. With the majority of this data being unstructured, there's many challenges to analyzing it and producing actionable intelligence since most data analytics databases are designed for structured data.


We've decided to do something about it. The rapid developments in technologies such as AI and Big Data Analytics have opened new horizons for OSINT which weren't previously available. We want our information quick and to the point, that's why we're building an open-source OSINT tool that's free. Free to use, free to modify, free to do with as you wish, and built with plain old web technologies anyone can learn. But this isn't really the project. This is a free new community. A community for OSINT enthusiast around the world and we need your help to design it, to program it, and to build it. We want to hear your suggestions, your ideas, and we're going to build it right in front of your eyes. The notion of a “needle in a haystack” is taken to the extreme on the internet. Let's build a magnet.


[OSINTBuddy demo video](https://www.youtube.com/watch?v=XKBusfYGL4M)


### Key Features
- Simplified data fetching from multiple sources.
- Visual representation of fetched data for easy understanding.
- A powerful development platform that is open for contributions.
- New plugin-based system for transforming data, check out the [osintbuddy](https://pypi.org/project/osintbuddy/) package. Documentation is coming soon.



## [↑](#what-is-osintbuddycom)Getting Started

To start using OSINTBuddy, follow these simple installation steps:

<!-- @todo make this easier for windows users...
https://willi.am/blog/2016/08/11/docker-for-windows-dealing-with-windows-line-endings/
 -->

### Installation
1. Open your terminal
   - *Note for Windows: I recommend using [tabby](https://tabby.sh/) configured with a git bash profile*
   - *Note for Windows: For this project to work you need unix line endings. Before cloning, run `git config --global core.autocrlf false` ([a](https://stackoverflow.com/a/13154031))* 
2. Clone the repo and submodules
   ```sh
   git clone --recurse-submodules https://github.com/jerlendds/osintbuddy.git
   cd osintbuddy
   ```
3. Install Docker
    - [Learn how to install Docker on Mac](https://docs.docker.com/desktop/install/mac-install/)
    - [Learn how to install Docker on Windows](https://docs.docker.com/desktop/install/windows-install/)
    - [Learn how to install Docker on Linux](https://docs.docker.com/desktop/install/linux-install/)
4. Start the stack with Docker *(if the `cp` command doesn't work on your OS, copy and rename the `.env.example` file to `.env`)*: 
   ```sh
   cp .env.example .env
   docker compose up
   ```

- **URLs**
  - Frontend: http://localhost:3000
  - Backend: http://localhost:8000/api/
  - Documentation: http://localhost:8000/docs -- http://localhost:8000/redoc
- Access OSINTBuddy through the URLs provided for frontend, backend, and documentation.

## [↑](#what-is-osintbuddycom)Roadmap
 
See our [trello board](https://trello.com/b/99Q70frX/) 
for a list of our upcoming features.

See the [open issues](https://github.com/jerlendds/osintbuddy/issues)
for a list of requested features (and known issues).

## [↑](#what-is-osintbuddycom)Progress Notes

- [x] Website node
- [x] Google search node
- [x] Google cache search node
- [x] Google dorks
- [x] DNS node
- [x] URL node
- [x] IP node
- [x] CSE node
- [x] Username node
- [x] Added a plugin system

-  For this update you'll have to rebuild your docker containers. After that long wait you'll be rewarded with a newly released package: [osintbuddy](https://pypi.org/project/osintbuddy/)  
    The osintbuddy package allows for transforming data through a `@transform` decorator, which is applied to methods in the Plugin class.
- The transform decorator must have a label and, optionally, a [tabler-icons](https://tabler-icons.io/) icon name. You can manage node transformations and node creation easily through the API.
-  Basically these updates make it easier to create nodes and context menu options for a nodes transform options which are mapped to plugin methods.
- More documentation is coming soon when I have the time.
  Here's a video on the new update in the meantime: [Introducing OSINTBuddy: A plugin based Maltego alternative in beta](https://www.youtube.com/watch?v=XKBusfYGL4M).
  



## [↑](#what-is-osintbuddycom)Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/add-core-plugin`)
3. Commit your Changes (`git commit -m 'feat: add core plugin to osintbuddy app'`)
4. Push to the Branch (`git push origin feature/add-core-plugin`)
5. Open a Pull Request


## [↑](#what-is-osintbuddycom)License

[GNU AGPLv3](https://choosealicense.com/licenses/gpl-3.0/)

*Note, the [OSINTBuddy plugins package](https://github.com/jerlendds/osintbuddy-plugins) is MIT licensed*.



## [↑](#what-is-osintbuddycom)Contact

[Open an issue](https://github.com/jerlendds/osintbuddy/issues/new?assignees=jerlendds&labels=Type%3A+Suggestion&projects=&template=feature.md&title=%5BFEATURE+REQUEST%5D+Your_feature_request_here) if you need to get in touch with me.

- Project Link: [https://github.com/jerlendds/osintbuddy](https://github.com/jerlendds/osintbuddy)
- Plugins Package Link: [https://github.com/jerlendds/osintbuddy-plugins](https://github.com/jerlendds/osintbuddy-plugins)

[contributors-shield]: https://img.shields.io/github/contributors/jerlendds/osintbuddy.svg?style=for-the-badge
[contributors-url]: https://github.com/jerlendds/osintbuddy/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jerlendds/osintbuddy.svg?style=for-the-badge
[forks-url]: https://github.com/jerlendds/osintbuddy/network/members
[stars-shield]: https://img.shields.io/github/stars/jerlendds/osintbuddy.svg?style=for-the-badge
[stars-url]: https://github.com/jerlendds/osintbuddy/stargazers
[issues-shield]: https://img.shields.io/github/issues/jerlendds/osintbuddy.svg?style=for-the-badge
[issues-url]: https://github.com/jerlendds/osintbuddy/issues
