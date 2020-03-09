import React from 'react'

import { elementData } from '../data/elements'
import { familyToColor } from '../shared/utility'

import classes from './ElementCardInfo.module.css'

export default function ElementCardInfo({ symbol }) {
    const data = elementData[symbol]
    const cssColor = familyToColor(data.type)

    return (
        <div className = { classes.Container }>
            <div className = { [ classes.ElementContainer, cssColor ].join(' ')}>
                <p>{ data.atomicNumber }</p>
                <h1>{ symbol }</h1>
            </div>
        </div>
    )
}