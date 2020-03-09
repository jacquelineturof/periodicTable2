import React from 'react'

import '../colors.module.css'
import classes from './Element.module.css'
import { familyToColor } from '../shared/utility'

export default function Element({ symbol, data, showInfo, closeInfo }) {
    let cssColor = ''
    let atomicNumber = ''
    
    if (data) {
        atomicNumber = data.atomicNumber
    }

    if (data) {
        const { type } = data
        cssColor = familyToColor(type)
    }
    
    return (
        <div 
            className = { [ classes.ElementContainer, cssColor ].join(' ')}
            onMouseEnter = { () => showInfo(symbol)}
            onMouseLeave = { closeInfo }>
            <h3 className = { classes.Label }>
                { symbol }
            </h3>
            <h5 className = { classes.Label }>
                { atomicNumber }
            </h5>
        </div>
    )
}