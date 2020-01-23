import React from 'react'
import { createUseStyles } from 'react-jss'
import { Grid } from '@material-ui/core'
import stuff from './stuff.json'
import styles from './style'

const BestInSlotPage = () => {
    //@ts-ignore
    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    const generateSlotForStuff = (
        items: Record<string, string>[],
        from: number,
        to: number
    ) => {
        return items.slice(from, to).map(item => {
            const { image, name, rarity, alt, ilvl } = item
            const borderColor: Record<string, string> = {
                epic: '#c600ff',
                rare: '#0081ff',
            }
            return (
                <div className={classes.slot}>
                    <img
                        className={classes.item}
                        style={{ border: `solid 2px ${borderColor[rarity]}` }}
                        src={image}
                        alt={alt}
                    />
                    {/* 
                //@ts-ignore */}
                    <div className={classes.details}>
                        <span className={classes[rarity]}>{name}</span>
                        <span className={classes.ilvl}>{ilvl}</span>
                    </div>
                </div>
            )
        })
    }
    return (
        <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.mainContainer}
        >
            <img
                className={classes.backgroundImage}
                src="https://render-eu.worldofwarcraft.com/shadow/profile-background/warrior-orc-male.jpg"
                alt=""
            />
            <div className={classes.container}>
                {generateSlotForStuff(stuff, 0, 8)}
            </div>
            <div className={classes.container}>
                {generateSlotForStuff(stuff, 9, 17)}
            </div>
        </Grid>
    )
}

export default BestInSlotPage
