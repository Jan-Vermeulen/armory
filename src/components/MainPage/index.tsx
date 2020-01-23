import React from 'react'
import { createUseStyles } from 'react-jss'

import BestInSlotPage from '../BestInSlotPage'
import styles from './style'

const MainPage = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <BestInSlotPage />
        </div>
    )
}

export default MainPage
