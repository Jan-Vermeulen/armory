import React from 'react'
import { createUseStyles } from 'react-jss'

import rarityColor from '../../../data/color.json'
import bossImg from '../../../data/boss.json'
import styles from './style'

type Props = {
    name: string
    rarity: string
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
    damage: string
    speed: string
    dps: string
}

const Item = (props: Props) => {
    const {
        name,
        rarity,
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
        damage,
        speed,
        dps,
    } = props

    //@ts-ignore
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    return (
        <div className={classes.tooltipContainer}>
            <div
                style={{
                    //@ts-ignore
                    color: rarityColor[rarity],
                }}
                className={classes.tooltipName}
            >
                {name}
            </div>
            {binding && <div className={classes.tooltipText}>{binding}</div>}
            {unique && <div className={classes.tooltipText}>Unique</div>}
            <div className={classes.tooltipSlotAndMaterial}>
                <span className={classes.tooltipText}>{slot}</span>
                {material && (
                    <span className={classes.tooltipText}>{material}</span>
                )}
            </div>
            {damage && (
                <div className={classes.tooltipSlotAndMaterial}>
                    <span className={classes.tooltipText}>{damage}</span>
                    <span className={classes.tooltipText}>{speed}</span>
                </div>
            )}
            {dps && <div className={classes.tooltipText}>{dps}</div>}
            {armor && (
                <div className={classes.tooltipText}>Armure : {armor}</div>
            )}
            {stats &&
                stats.map((stat: any) => (
                    <div className={classes.tooltipText}>{stat}</div>
                ))}
            {durability && (
                <div className={classes.tooltipText}>
                    Durabilité : {durability}
                </div>
            )}
            {lvl && (
                <div className={classes.tooltipText}>Niveau {lvl} requis</div>
            )}
            {specialStats &&
                specialStats.map((sStat: string) => (
                    <div className={classes.tooltipSpecialStat}>{sStat}</div>
                ))}
            <div>
                {setName && (
                    <span className={classes.tooltipText}>{setName}</span>
                )}
                {setParts &&
                    setParts.map((part: any) => (
                        <div className={classes.tooltipText}>{part}</div>
                    ))}
            </div>
            {setEffects && (
                <div className={classes.tooltipText}>{setEffects}</div>
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
                        <span className={classes.bossImageText}>{boss}</span>
                    </div>
                ))}
        </div>
    )
}

export default Item
