[![npm version](https://badge.fury.io/js/%40oliboy50%2Flistal-exporter.svg)](https://www.npmjs.com/package/@oliboy50/listal-exporter)

# listal-exporter

Leverages [jsonframe-cheerio](https://github.com/gahabeen/jsonframe-cheerio) to extract data from a list on [listal](http://www.listal.com).

## Install

```shell
npm install --save @oliboy50/listal-exporter
```

## Usage

```js
const listalExporter = require('@oliboy50/listal-exporter');

// This "html" will be passed to "cheerio.load()" function (so it can be everything cheerio can load)
const html = htmlOfTheListalListToExtractDataFrom;

// "exportList" also accept a second parameter to pass "options" to "jsonframe-cheerio"'s scrape function (such as "{string: true}" to get data as a JSON string instead of a javascript object)
const listData = listalExporter.exportList(html);
```

## Note

This package main purpose is to export the data you "own" (for instance, I don't want to use Listal anymore, so I decided to remake my [own list](http://www.listal.com/list/my-animes-list-oliboy50) elsewhere, without having to rewrite everything manually).

I mean that you should **not** use this package to extract data from every list you want on Listal... Be kind and do it only on the ones you own.
