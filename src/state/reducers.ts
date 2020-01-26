//@ts-nocheck
import { SET_LOCALE, SET_STATS, SET_IMAGE } from './actions'

export default function commonReducer(state, action) {
    switch (action.type) {
        case SET_LOCALE:
            return {
                ...state,
                locale: action.payload,
            }
        case SET_STATS:
            return {
                ...state,
                stats: { ...action.payload },
            }
        case SET_IMAGE:
            return {
                ...state,
                image: action.payload,
            }
        default:
            return state
    }
}
