import niceLogo from '../assets/images/expeience/nice-logo.png'
import idfLogo from '../assets/images/expeience/idf-logo.png'

const jobs = [
    {
        companyName: "NICE",
        websiteLink: "https://www.nice.com/",
        companyLogoAddress: niceLogo,
        location: "israel",
        jobTitle: "Software Engineering Student",
        responsibilities: [
            "Writing micro services using Spring technologies: Dependency Injection, MVC, Cloud, Cloud Stream.",
            "Writing websites using Javascript: Angular 6, Webpack, Typescript, ESLint"
        ]
    },
    {
        companyName: "IDF",
        websiteLink: "https://www.idf.il/en/",
        companyLogoAddress: idfLogo,
        location: "israel",
        jobTitle: "Networking technician",
        responsibilities: [
            "CISCO Routers & Switches technician.",
            "Developing Website for my unit."
        ]
    }
];


export {jobs};