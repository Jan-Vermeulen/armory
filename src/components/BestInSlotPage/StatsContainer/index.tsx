import React from 'react'
import { useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { getStats } from '../../../state/selectors'
import styles from './style'

type Stats = {
    armor: number
    stam: number
    str: number
    agi: number
    dodge: number
    crit: number
    hit: number
    proc: string[]
    intel: number
}

const StatsContainer = () => {
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    const stats = useSelector(getStats)

    const {
        armor,
        stam,
        str,
        agi,
        intel,
        dodge,
        crit,
        hit,
        proc,
    }: Stats = stats

    return (
        <>
            <div className={classes.statsContainer}>
                <div>
                    Armure:<span className={classes.stat}>{armor}</span>
                </div>
                <div>
                    Endurance:<span className={classes.stat}>{stam}</span>
                </div>
                <div>
                    Force:<span className={classes.stat}>{str}</span>
                </div>
                <div>
                    Agilité:<span className={classes.stat}>{agi}</span>
                </div>
                <div>
                    Inteligence:<span className={classes.stat}>{intel}</span>
                </div>
                <div>
                    Esquive:<span className={classes.stat}>{dodge}%</span>
                </div>
                <div>
                    Critique:<span className={classes.stat}>{crit}%</span>
                </div>
                <div>
                    Touché:<span className={classes.stat}>{hit}%</span>
                </div>
            </div>
            <div className={classes.procContainer}>
                {proc.map(element => {
                    return <div>{element}</div>
                })}
            </div>
        </>
    )
}

export default StatsContainer
