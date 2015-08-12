
[![Circle CI](https://circleci.com/gh/RebootJeff/yt-power-search.svg?style=svg)](https://circleci.com/gh/RebootJeff/yt-power-search)

# YT-Power-Search
A more advanced search tool for finding YouTube content. Feel the power! ...once I've actually completed some features.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Screenshots](#screenshots)
- [Development](#development)
  - [Tech](#tech)
  - [Challenges](#challenges)
  - [Credits](#credits)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Screenshots

*Work in progress*

## Development

### Tech

- AngularJS
  - Angular-Material
- Google API JavaScript Client
- CircleCI

### Challenges

- Using Google's API JavaScript Client Library with AngularJS is surprisingly *not* straightforward.
  - The Google API Client (GAPI) has some sort of async loading going on. Waiting for that to finish before the Angular app starts using it was a bit tricky, but I ended up using a promise-based solution after being unsatisfied by both (1) the most relevant [SO answer I could find](http://stackoverflow.com/questions/19399419/angular-js-and-google-api-client-js-gapi) and (2) [Google's own recommendation](https://cloud.google.com/solutions/angularjs-cloud-endpoints-recipe-for-building-modern-web-applications)

### Credits
- Creator: [RebootJeff](https://twitter.com/RebootJeff)
- Superman vs Batman w/Trampoline gif by: Unknown :pensive:
