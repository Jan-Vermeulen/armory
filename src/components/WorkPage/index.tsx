import React from 'react'
import { createUseStyles } from 'react-jss'

import styles from './style'

const WorkPage = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return <div className={classes.container}>WorkPage</div>
}

export default WorkPage
