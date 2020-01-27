import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Tooltip } from '@material-ui/core'

const CustomTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#fff',
        maxWidth: 220,
        fontSize: 12,
        border: '1px solid #dadde9',
    },
}))(Tooltip)

const WowTooltip = (props: any) => {
    const { title, placement, children } = props
    return (
        <CustomTooltip title={title} placement={placement}>
            {children}
        </CustomTooltip>
    )
}

export default WowTooltip
