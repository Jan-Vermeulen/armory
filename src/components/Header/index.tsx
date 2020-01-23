import React from 'react'
import { createUseStyles } from 'react-jss'
import Menu from './Menu'

import styles from './style'

const Header = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Menu />
        </div>
    )
}

export default Header
