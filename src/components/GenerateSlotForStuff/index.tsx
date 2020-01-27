import { ItemStats } from './Item/types'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createUseStyles } from 'react-jss'

import WowTooltip from '../WowTooltip'
import Item from './Item'
import { setStats } from '../../state/actions'

import rarityColor from '../../data/color.json'
import styles from './style'

type Props = {
    items: ItemStats[]
    from: number
    to: number
}
export const allStats = {
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
    //@ts-ignore
    const useStyles = createUseStyles(styles)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setStats(allStats))
    }, [dispatch])

    return items.slice(from, to).map((item: ItemStats) => {
        let {
            name,
            rarity,
            image,
            alt,
            ilvl,
            armor,
            link,
            str,
            stam,
            agi,
            intel,
            crit,
            dodge,
            hit,
            proc,
            binding,
            unique,
            slot,
            material,
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

        return (
            <WowTooltip
                title={
                    <Item
                        name={name}
                        rarity={rarity}
                        binding={binding}
                        unique={unique}
                        slot={slot}
                        material={material}
                        armor={armor}
                        stats={stats}
                        specialStats={specialStats}
                        setName={setName}
                        setParts={setParts}
                        setEffects={setEffects}
                        dropedBy={dropedBy}
                        durability={durability}
                        lvl={lvl}
                        damage={damage}
                        speed={speed}
                        dps={dps}
                    />
                }
                placement={from < 8 ? 'right' : 'left'}
            >
                <div className={classes.slot}>
                    <a href={link}>
                        <img
                            className={classes.item}
                            style={{
                                //@ts-ignore
                                border: `solid 2px ${rarityColor[rarity]}`,
                            }}
                            src={image}
                            alt={alt}
                        />
                    </a>
                    <div className={classes.details}>
                        <span
                            style={{
                                //@ts-ignore
                                color: rarityColor[rarity],
                            }}
                        >
                            {name}
                        </span>
                        <span className={classes.ilvl}>{ilvl}</span>
                    </div>
                </div>
            </WowTooltip>
        )
    })
}

export default GenerateSlotForStuff
