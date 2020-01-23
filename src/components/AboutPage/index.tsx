import React from 'react'
import { createUseStyles } from 'react-jss'

import styles from './style'

const AboutPage = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return <div className={classes.container}>test</div>
}

export default AboutPage
