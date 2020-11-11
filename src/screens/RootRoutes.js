import Landing from "../components/pages/Homepage/Homepage";
import AboutMe from "../components/pages/AboutMe/AboutMe";
import Contact from "../components/pages/Contact/Contact";
import Projects from "../components/pages/Projects/Projects";
import Resume from "../components/pages/Resume/Resume";

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
    },
    {
        path: '*',
        exact: false,
        // todo create component 404
        // component: Page404
    }
]