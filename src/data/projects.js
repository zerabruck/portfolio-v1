export const data = {
    projects: [
        {
            title: "JobbedIn",
            description:
                "A Full Stack Job Portal website for Employers and candidates. Separate accounts for both employers and candidates. ",
            technologies: [
                "React",
                "Express",
                "Mongo DB",
                "Redux",
                "Tailwind CSS",
            ],
            github: "https://github.com/SciSaif/JobbedIn",
            website: "https://jobbedin.herokuapp.com/",
            img: require("../assets/jobbedInHome.png"),
        },

        {
            title: "SciMeet",
            description:
                "A video conferencing web app that allows users to create and join rooms. Users can also chat with each other",
            technologies: [
                "React",
                "Express",
                "Typescript",
                "Socket.io",
                "WebRTC",
                "MongoDB",
            ],
            github: "https://github.com/SciSaif/sciMeet-client",
            website: "https://scimeet.vercel.app/",
            img: require("../assets/scimeet.png"),
        },
        {
            title: "AIQatar.qa",
            description:
                "Led end-to-end Next.js site creation, optimizing UX with multistep appointments and event registration. Streamlined admin control for events, appointments, and partners. Integrated secure Sadad payments and efficient SendGrid communication. Engineered dynamic events page with enhanced user and admin functionalities. Amplified operational efficiency and user satisfaction.",
            technologies: [
                "Next.js",
                "Express",
                "Typescript",
                "Sendgrid",
                "Sadad Payment Gateway",
            ],
            github: "https://github.com/SciSaif",
            website: "https://aiqatar.qa/",
            img: require("../assets/aiqatar.png"),
        },
    ],
};
