import React from 'react'
import { useDispatch } from 'react-redux'
import { Tooltip } from '@material-ui/core'
import { createUseStyles } from 'react-jss'

import { setStats } from '../../../state/actions'

import bossImg from './boss.json'
import styles from './style'

type Item = {
    image: string
    name: string
    rarity: string
    alt: string
    ilvl: number
    binding: string
    unique: boolean
    slot: string
    material: string
    armor: number
    stats: string[]
    specialStats: string[]
    setName: string
    setParts: string[]
    setEffects: string[]
    dropedBy: string[]
    durability: string
    lvl: number
    link: string
    damage: number
    speed: string
    dps: string
    str: number
    stam: number
    agi: number
    intel: number
    crit: number
    dodge: number
    hit: number
    proc: never
}

type Props = {
    items: Item[]
    from: number
    to: number
}
const allStats = {
    armor: 0,
    str: 0,
    stam: 0,
    agi: 0,
    intel: 0,
    crit: 0,
    dodge: 0,
    hit: 0,
    proc: [],
}
const GenerateSlotForStuff = (props: Props) => {
    const { items, from, to } = props

    const dispatch = useDispatch()
    //@ts-ignore
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    const rarityColor: Record<string, string> = {
        epic: '#c600ff',
        rare: '#0081ff',
        common: '#fff',
    }

    return items.slice(from, to).map((item: Item) => {
        let {
            image,
            name,
            rarity,
            alt,
            ilvl,
            binding,
            unique,
            slot,
            material,
            armor,
            stats,
            specialStats,
            setName,
            setParts,
            setEffects,
            dropedBy,
            durability,
            lvl,
            link,
            damage,
            speed,
            dps,
            str,
            stam,
            agi,
            intel,
            crit,
            dodge,
            hit,
            proc,
        } = item

        if (armor) allStats.armor += armor
        if (str) allStats.str += str
        if (stam) allStats.stam += stam
        if (agi) allStats.agi += agi
        if (intel) allStats.intel += intel
        if (crit) allStats.crit += crit
        if (dodge) allStats.dodge += dodge
        if (hit) allStats.hit += hit
        if (proc) allStats.proc.push(proc)

        dispatch(setStats(allStats))
        return (
            <Tooltip
                title={
                    <div className={classes.tooltipContainer}>
                        <div
                            style={{
                                color: rarityColor[rarity],
                            }}
                            className={classes.tooltipName}
                        >
                            {name}
                        </div>
                        {binding && (
                            <div className={classes.tooltipText}>{binding}</div>
                        )}
                        {unique && (
                            <div className={classes.tooltipText}>Unique</div>
                        )}
                        <div className={classes.tooltipSlotAndMaterial}>
                            <span className={classes.tooltipText}>{slot}</span>
                            {material && (
                                <span className={classes.tooltipText}>
                                    {material}
                                </span>
                            )}
                        </div>
                        {damage && (
                            <div className={classes.tooltipSlotAndMaterial}>
                                <span className={classes.tooltipText}>
                                    {damage}
                                </span>
                                <span className={classes.tooltipText}>
                                    {speed}
                                </span>
                            </div>
                        )}
                        {dps && (
                            <div className={classes.tooltipText}>{dps}</div>
                        )}
                        {armor && (
                            <div className={classes.tooltipText}>
                                Armure : {armor}
                            </div>
                        )}
                        {stats &&
                            stats.map(stat => (
                                <div className={classes.tooltipText}>
                                    {stat}
                                </div>
                            ))}
                        {durability && (
                            <div className={classes.tooltipText}>
                                Durabilité : {durability}
                            </div>
                        )}
                        {lvl && (
                            <div className={classes.tooltipText}>
                                Niveau {lvl} requis
                            </div>
                        )}
                        {specialStats &&
                            specialStats.map((sStat: string) => (
                                <div className={classes.tooltipSpecialStat}>
                                    {sStat}
                                </div>
                            ))}
                        <div>
                            {setName && (
                                <span className={classes.tooltipText}>
                                    {setName}
                                </span>
                            )}
                            {setParts &&
                                setParts.map(part => (
                                    <div className={classes.tooltipText}>
                                        {part}
                                    </div>
                                ))}
                        </div>
                        {setEffects && (
                            <div className={classes.tooltipText}>
                                {setEffects}
                            </div>
                        )}
                        {dropedBy &&
                            dropedBy.map((boss: string) => (
                                <div className={classes.dropedByContainer}>
                                    <span>
                                        <img
                                            className={classes.bossImage}
                                            //@ts-ignore
                                            src={bossImg[boss]}
                                            alt={boss}
                                        />
                                    </span>
                                    <span className={classes.bossImageText}>
                                        {boss}
                                    </span>
                                </div>
                            ))}
                    </div>
                }
                placement={from < 8 ? 'right' : 'left'}
            >
                <div className={classes.slot}>
                    <a className={classes.link} href={link}>
                        <img
                            className={classes.item}
                            style={{
                                border: `solid 2px ${rarityColor[rarity]}`,
                            }}
                            src={image}
                            alt={alt}
                        />
                    </a>
                    <div id="testt"></div>
                    <div className={classes.details}>
                        <span className={classes[rarity]}>{name}</span>
                        <span className={classes.ilvl}>{ilvl}</span>
                    </div>
                </div>
            </Tooltip>
        )
    })
}

export default GenerateSlotForStuff
