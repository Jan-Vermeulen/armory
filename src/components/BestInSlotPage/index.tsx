//@ts-nocheck
import React from 'react'
import { createUseStyles } from 'react-jss'
import GenerateSlotForStuff from './GenerateSlotForStuff'
import { Grid } from '@material-ui/core'

import stuff from './stuff.json'
import styles from './style'

const BestInSlotPage = () => {
    //@ts-ignore
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    return (
        <>
            <Grid
                container
                justify="space-around"
                alignItems="center"
                className={classes.mainContainer}
            >
                <div className={classes.container}>
                    <GenerateSlotForStuff items={stuff} from={0} to={8} />
                </div>
                <div className={classes.container}>
                    <GenerateSlotForStuff items={stuff} from={8} to={16} />
                </div>
            </Grid>
            <div className={classes.weapons}>
                <GenerateSlotForStuff items={stuff} from={16} to={19} />
            </div>
        </>
    )
}

export default BestInSlotPage
