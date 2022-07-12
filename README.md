# Arranger 개발환경세팅 정보

git clone http://jedje@issue.aedata.co.kr/yona/skang/A-rranger

[Window OS]
프로젝트 폴더로 이동하여 명령어 실행

최초 실행시 터미널 build 필수
> refine.bat build

run 방법1) 터미널 실행
> refine.bat

run 방법2) 포트 변경하여 터미널 실행
> refine.bat /p xxxx 

run 방법3) 개발툴 run configuration 에서 maven 선택 후 exec:java로 설정하여 run

# OpenRefine

[![DOI](https://zenodo.org/badge/6220644.svg)](https://zenodo.org/badge/latestdoi/6220644)
[![Join the chat at https://gitter.im/OpenRefine/OpenRefine](https://badges.gitter.im/OpenRefine/OpenRefine.svg)](https://gitter.im/OpenRefine/OpenRefine) ![Java CI](https://github.com/OpenRefine/OpenRefine/workflows/Java%20CI/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/OpenRefine/OpenRefine/badge.svg?branch=master)](https://coveralls.io/github/OpenRefine/OpenRefine?branch=master) [![Translation progress](https://hosted.weblate.org/widgets/openrefine/-/svg-badge.svg)](https://hosted.weblate.org/engage/openrefine/?utm_source=widget) [![Total alerts](https://img.shields.io/lgtm/alerts/g/OpenRefine/OpenRefine.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/OpenRefine/OpenRefine/alerts/)

OpenRefine is a Java-based power tool that allows you to load data, understand it,
clean it up, reconcile it, and augment it with data coming from
the web. All from a web browser and the comfort and privacy of your own computer.

[<img src="https://github.com/OpenRefine/OpenRefine/blob/master/graphics/icon/open-refine-320px.png" align="right">](http://openrefine.org)

## Download

* [OpenRefine Releases](https://github.com/OpenRefine/OpenRefine/releases)

## Snapshot releases

Latest development version, packaged for:
* [Linux](https://oss.sonatype.org/service/local/artifact/maven/content?r=snapshots&g=org.openrefine&a=openrefine&v=3.7-SNAPSHOT&c=linux&p=tar.gz)
* [MacOS](https://oss.sonatype.org/service/local/artifact/maven/content?r=snapshots&g=org.openrefine&a=openrefine&v=3.7-SNAPSHOT&c=mac&p=dmg)
* [Windows without embedded JRE](https://oss.sonatype.org/service/local/artifact/maven/content?r=snapshots&g=org.openrefine&a=openrefine&v=3.7-SNAPSHOT&c=win&p=zip)
* [Windows with embedded JRE](https://oss.sonatype.org/service/local/artifact/maven/content?r=snapshots&g=org.openrefine&a=openrefine&v=3.7-SNAPSHOT&c=win-with-java&p=zip)

## Run from source

If you have cloned this repository to your computer, you can run OpenRefine with:

* `./refine` on Mac OS and Linux
* `refine.bat` on Windows

This requires [JDK 11](https://adoptium.net/), [Apache Maven](https://maven.apache.org/) and [NPM](https://www.npmjs.com/).

## Documentation and Videos

* [User Manual](https://docs.openrefine.org)
* [FAQ](https://github.com/OpenRefine/OpenRefine/wiki/FAQ)
* [Official Website and tutorial videos](http://openrefine.org)

## Contributing to the project

* [Developers Guide & Architecture](https://github.com/OpenRefine/OpenRefine/wiki/Documentation-For-Developers)
* [Contributing Guide](https://github.com/OpenRefine/OpenRefine/blob/master/CONTRIBUTING.md)
* [Project Governance](https://github.com/OpenRefine/OpenRefine/blob/master/GOVERNANCE.md)

## Contact us

* [Mailing List](https://groups.google.com/forum/#!forum/openrefine)
* [Twitter](http://www.twitter.com/openrefine)
* [Gitter](https://gitter.im/OpenRefine/OpenRefine)
* [Matrix (bridged from Gitter)](https://matrix.to/#/#OpenRefine_OpenRefine:gitter.im)

## Licensing and legal issues

OpenRefine is open source software and is licensed under the BSD license
located in the [LICENSE.txt](LICENSE.txt). See the folder `licenses` for information on open source
libraries that OpenRefine depends on.

## Credits

This software was created by Metaweb Technologies, Inc. and originally written
and conceived by David Huynh <dfhuynh@google.com>. Metaweb Technologies, Inc.
was acquired by Google, Inc. in July 2010 and the product was renamed Google Refine.
In October 2012, it was renamed OpenRefine as it transitioned to a
community-supported product.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for instructions on how to contribute yourself.
