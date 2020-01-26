import { createStore, compose } from 'redux'
import commonReducer from './state/reducers'

const initialState = {
    locale: 'fr_FR',
    stats: {
        str: 0,
        agi: 0,
        stam: 0,
        intel: 0,
        hit: 0,
        crit: 0,
        ap: 0,
        proc: [],
    },
    image: ' https://wow.zamimg.com/uploads/screenshots/small/9269.jpg',
}

export default createStore(
    commonReducer,
    initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
