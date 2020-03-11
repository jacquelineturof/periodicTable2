import React, { useState } from 'react'

import Column from '../components/Column'
import Legend from '../components/TableLengend'
import BottomSeries from '../components/BottomSeries'
import Card from '../components/UI/Card'
import FamilyCardInfo from '../components/FamilyCardInfo'
import ElementCardInfo from '../components/ElementCardInfo'

import { data } from '../data/data'
import { elementData } from '../data/elements'

import classes from './PeriodicTable.module.css'

export default function PeriodicTable() {
    const [ showLegendInfo, setLegendInfo ] = useState('')
    const [ showElementInfo, setElementInfo ] = useState('')
    
    let card = null 

    if (showLegendInfo) {
        card = (
            <Card type = "mid">
                <FamilyCardInfo 
                    familyName = { showLegendInfo } />
            </Card>
        )
    }

    if (showElementInfo) {
        // determines the position of the card on screen.
        // Don't want the card placed over the element being
        // hovered over.
        const cardType = elementData[showElementInfo].type === 'Transition Metal'
            ? 'end'
            : 'mid'

        card = (
            <Card type = { cardType }>
                <ElementCardInfo symbol = { showElementInfo } />
            </Card>
        )
    }

    return (
        <div className = { classes.PeriodicTable }>
            { card }
            <Legend 
                seeKeyInfo = { setLegendInfo }
                closeKeyInfo = { () => setLegendInfo('')} />
            { data.map((family, index) => 
                <Column
                    key = { index } 
                    family = { family.abrv }
                    elements = { family.elements }
                    showInfo = { setElementInfo }
                    closeInfo = { () => setElementInfo('') } />)}
            <BottomSeries />
        </div>
    )
}