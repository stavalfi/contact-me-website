import torrentXImage from '../assets/images/portfolio/torrentx-image.png'
import webpackImage from '../assets/images/portfolio/webpack-image.png'

const creations = [
    {
        title: "BitTorrent Protocol Implementation",
        imageAddress: torrentXImage,
        summary: "Fully functional and reactive implementation of the p2p protocol.",
        githubLink: "https://github.com/stavalfi/TorrentX",
        tags: [
            "Java",
            "Project Reactor",
            "Networking",
            "Cucumber",
            "GIT",
            "CircleCI",
            "TravisCI"
        ]
    },
    {
        title: "Webpack Starter",
        imageAddress: webpackImage,
        summary: "Configured starter project with Webpack visual analyzers and documentation.",
        githubLink: "https://github.com/stavalfi/webpack-starter",
        tags: [
            "Javascript",
            "Webpack 4",
            "Babel 7",
            "NPM",
            "React 16",
            "HMR",
            "ES6"
        ]
    },
    {
        title: "Stav Website",
        imageAddress: webpackImage,
        summary: "This website",
        githubLink: "https://github.com/stavalfi/contact-me-website",
        tags: [
            "Javascript",
            "Webpack 4",
            "Babel 7",
            "NPM",
            "React 16",
            "HMR",
            "ES6"
        ]
    }
];

export {creations};