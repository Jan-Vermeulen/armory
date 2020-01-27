import React from 'react'
import { createUseStyles } from 'react-jss'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import styles from './style'

//@ts-ignore

const Menu = () => {
    const [value, setValue] = React.useState(2)
    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Paper square>
            <Tabs
                className={classes.tabs}
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Active" />
                <Tab className={classes.label} label="Disabled" disabled />
                <Tab className={classes.label} label="Active" />
            </Tabs>
        </Paper>
    )
}

export default Menu
