import {TOGGLE_TAB_ID} from "./action/actionTypes";

const initialState = {
    activeTab: 0,
    cards : [
        {
            name: 'ALL',
            idTab: 0,
            urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
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
            urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
            title: 'Project',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',

        },
        {
            name: 'REACT',
            idTab: 3,
            urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
            title: 'Project',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',

        },
        {
            name: 'REACT',
            idTab: 3,
            urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
            title: 'Project',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',

        },
        {
            name: 'JS',
            idTab: 4,
            urlImage: 'https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg',
            title: 'Project',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',

        }
    ]
}

export default function rootReducer(state = initialState,action) {
    console.log('action',action,state,'state');

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