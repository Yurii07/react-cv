import {TOGGLE_TAB_ID} from "./action/actionTypes";
import {
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10,
    project11,
    project12,
    project13,
    project14,
    project15,
    project16,
} from "../components/images";

const initialState = {
    activeTab: 0,
    cards: [
        {
            name: 'LATEST',
            idTab: 4,
            urlImage: project14,
            title: 'Millionaire game',
            text: 'Who Wants to Be a Millionaire? (abbreviated WWTBAM and informally known as simply Millionaire) is an international television game show franchise of British origin, created by David Briggs, Mike Whitehill and Steven Knight.',
            urlProject: 'https://yurii07.github.io/millionaire/',
        },
        {
            name: 'LATEST',
            idTab: 4,
            urlImage: project15,
            title: 'Todo app',
            text: 'Todo app with firebase',
            urlProject: 'https://keep-a7233.web.app/',
        },
        {
            name: 'LATEST',
            idTab: 4,
            urlImage: project16,
            title: 'Todo app',
            text: 'Todo app ',
            urlProject: 'https://yurii07.github.io/react-todo/',
        },
        {
            name: 'FRONT-END',
            idTab: 1,
            urlImage: project1,
            title: 'Project Alexis',
            urlProject: 'https://yurii07.github.io/alexis/',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
        },
        {
            name: 'FRONT-END',
            idTab: 1,
            urlImage: project2,
            title: 'Project Waxom',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/waxom/',
        }, {
            name: 'FRONT-END',
            idTab: 1,
            urlImage: project3,
            title: 'Project Food LTD',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/foodltd/',
        }, {
            name: 'FRONT-END',
            idTab: 1,
            urlImage: project4,
            title: 'Portfolio web',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/portfolioWeb/',
        }, {
            name: 'FRONT-END',
            idTab: 1,
            urlImage: project5,
            title: 'Curriculum',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/curriculum/',
        }, {
            name: 'FRONT-END',
            idTab: 1,
            urlImage: project6,
            title: 'Test',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/test/',
        }, {
            name: 'FRONT-END',
            idTab: 1,
            urlImage: project7,
            title: 'Testing',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/testing/',
        }, {
            name: 'FRONT-END',
            idTab: 1,
            urlImage: project8,
            title: 'GoodInc',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/goodinc/',
        },
        {
            name: 'REACT',
            idTab: 2,
            urlImage: project9,
            title: 'Project weather',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/cities/',
        },
        {
            name: 'REACT',
            idTab: 2,
            urlImage: project10,
            title: 'Bitcoin Profit',
            text: 'Bitcoin Profit - Earn millions from bitcoin even when crypto markets are crashing',
            urlProject: 'https://hedgemyway.com/bitcoin-profit/',
        },
        {
            name: 'REACT',
            idTab: 2,
            urlImage: project13,
            title: 'Movie App',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/movie-app/',
        },
        {
            name: 'REACT',
            idTab: 2,
            urlImage: project14,
            title: 'Millionaire game',
            text: 'Who Wants to Be a Millionaire? (abbreviated WWTBAM and informally known as simply Millionaire) is an international television game show franchise of British origin, created by David Briggs, Mike Whitehill and Steven Knight.',
            urlProject: 'https://yurii07.github.io/millionaire/',
        },
        {
            name: 'REACT',
            idTab: 2,
            urlImage: project15,
            title: 'Todo app',
            text: 'Todo app with firebase',
            urlProject: 'https://keep-a7233.web.app/',
        },
        {
            name: 'REACT',
            idTab: 2,
            urlImage: project16,
            title: 'Todo app',
            text: 'Todo app ',
            urlProject: 'https://yurii07.github.io/react-todo/',
        },
        {
            name: 'JS',
            idTab: 3,
            urlImage: project11,
            title: 'Game',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/nova-test/',
        },
        {
            name: 'JS',
            idTab: 3,
            urlImage: project12,
            title: 'api',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/api/',
        }
    ]
}

export default function rootReducer(state = initialState, action) {
    // console.log('action', action, state, 'state');

    switch (action.type) {
        case 'SHOW_ALL':
            return {
                activeTab: state.activeTab + 1,
            }
        case TOGGLE_TAB_ID:
            return {
                ...state,
                activeTab: action.payload
            }
        default:
            return state
    }
}