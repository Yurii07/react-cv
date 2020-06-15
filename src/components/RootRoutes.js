import Landing from "./main/landingpage";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Projects from "./projects/projects";
import Resume from "./resume/resume";

export default [
    {
        path: '/',
        exact: true,
        component: Landing
    },
    {
        path: '/aboutme',
        exact: true,
        component: AboutMe
    },
    {
        path: '/contact',
        exact: true,
        component: Contact
    },
    {
        path: '/projects',
        exact: true,
        component: Projects
    },
    {
        path: '/resume',
        exact: true,
        component: Resume
    }
]