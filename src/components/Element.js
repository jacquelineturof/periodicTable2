import React from 'react'

import colors from '../colors.module.css' // global colors file
import classes from './Element.module.css'

export default function Element({ symbol, data, showInfo, closeInfo }) {
    let cssColor = ''
    let atomicNumber = ''
    
    if (data) {
        atomicNumber = data.atomicNumber
    }

    if (data) {
        const { type } = data
        
        switch(type) {
            case ('Nonmetal'):
                cssColor = colors.Red
                break
            case ('Noble Gas'):
                cssColor = colors.Orange
                break
            case ('Alkali Metal'):
                cssColor = colors.Yellow
                break
            case ('Alkaline Earth Metal'):
                cssColor = colors.Green
                break
            case ('Metalloid'):
                cssColor = colors.Blue
                break
            case ('Halogen'):
                cssColor = colors.Pink
                break
            case ('Post-transition Metal'):
                cssColor = colors.CarribeanGreen
                break
            case ('Transition Metal'):
                cssColor = colors.Liberty
                break
            case ('Rare Earth Metal'):
                cssColor = colors.GargoyleGas
                break
            default: cssColor = ''
        }
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