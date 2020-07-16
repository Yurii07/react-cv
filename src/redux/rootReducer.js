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
} from "../components/images";

const initialState = {
    activeTab: 0,
    cards: [
        {
            name: 'ALL',
            idTab: 0,
            urlImage: 'http://localhost:3000/react-cv/images/b6aec1e14a04185a03ea631c4aa215c3.png',
            title: 'Project',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
        },
        {
            name: 'LATEST',
            idTab: 1,
            urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
            title: 'Project',
            text: 'lorem lorem',
        },
        {
            name: 'FRONT-END',
            idTab: 2,
            urlImage: project1,
            title: 'Project Alexis',
            urlProject: 'https://yurii07.github.io/alexis/',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
        },
        {
            name: 'FRONT-END',
            idTab: 2,
            urlImage: project2,
            title: 'Project Waxom',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/waxom/',
        }, {
            name: 'FRONT-END',
            idTab: 2,
            urlImage: project3,
            title: 'Project Food LTD',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/foodltd/',
        }, {
            name: 'FRONT-END',
            idTab: 2,
            urlImage: project4,
            title: 'Portfolio web',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/portfolioWeb/',
        }, {
            name: 'FRONT-END',
            idTab: 2,
            urlImage: project5,
            title: 'Curriculum',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/curriculum/',
        }, {
            name: 'FRONT-END',
            idTab: 2,
            urlImage: project6,
            title: 'Test',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/test/',
        }, {
            name: 'FRONT-END',
            idTab: 2,
            urlImage: project7,
            title: 'Testing',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/testing/',
        }, {
            name: 'FRONT-END',
            idTab: 2,
            urlImage: project8,
            title: 'GoodInc',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/goodinc/',
        },
        {
            name: 'REACT',
            idTab: 3,
            urlImage: project9,
            title: 'Project weather',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/cities/',
        },
        {
            name: 'REACT',
            idTab: 3,
            urlImage: project10,
            title: 'Bitcoin Profit',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://profit.invest-info.com/',
        },
        {
            name: 'JS',
            idTab: 4,
            urlImage: project11,
            title: 'Game',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/nova-test/',
        },
        {
            name: 'JS',
            idTab: 4,
            urlImage: project12,
            title: 'api',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
            urlProject: 'https://yurii07.github.io/api/',
        }
    ]
}

export default function rootReducer(state = initialState, action) {
    console.log('action', action, state, 'state');

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