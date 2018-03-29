const cheerio = require('cheerio');
const jsonframe = require('jsonframe-cheerio');

const frame = {
    title: '.headertitle h1',
    description: '.viewcontentright div:nth-of-type(3)',
    author: {
        name: '.addedby span a',
        avatar: '.contentheaderavatar img',
    },
    items: {
        _s: '.itembox',
        _d: [{
            title: '.titletitle a',
            image: '.notesviewimage img',
            description: '.text.listnote',
            rating: '.current-rating | number',
        }],
    },
};

const exportList = (html, options) => {
    const $ = cheerio.load(html);
    jsonframe($);

    return $('.maincontent').scrape(frame, options);
};

module.exports = {
    exportList,
};
