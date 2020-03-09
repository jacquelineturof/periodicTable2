import React from 'react'

import colors from '../colors.module.css' // global colors file
import classes from './TableLegend.module.css'

import { families } from '../data/familys'

const Key = ({ color, label, show, close }) => (
    <div 
        className = { classes.LegendKey }
        onMouseEnter = { show }
        onMouseLeave = { close }>
        <div className = { [ classes.Color, colors[color] ].join(' ') }>

        </div>
        <p className = { classes.Label }>
            { label }
        </p>
    </div>
)

export default function TableLegend( { seeKeyInfo, closeKeyInfo }) {
    const familiesArray = Object.entries(families)
    
    return (
        <div className = { classes.Legend }>
            { familiesArray.map(family => (
                <Key
                    key = { family[0] }
                    color = { family[1].color }
                    label = { family[0] }
                    show = { () => seeKeyInfo(family[0]) }
                    close = { closeKeyInfo } />
            ))}
        </div>
    )
}