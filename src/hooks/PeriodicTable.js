import React, { useState } from 'react'

import Column from '../components/Column'
import Legend from '../components/TableLengend'
import Card from '../components/UI/Card'
import FamilyCardInfo from '../components/FamilyCardInfo'

import { data } from '../data/data'

import classes from './PeriodicTable.module.css'

export default function PeriodicTable() {
    const [ showLegendInfo, setLegendInfo ] = useState('')
    const [ showElementInfo, setElementInfo ] = useState('')
    
    let card = null 

    if (showLegendInfo) {
        card = (
            <Card>
                <FamilyCardInfo familyName = { showLegendInfo } />
            </Card>
        )
    }

    if (showElementInfo) {
        card = (
            <Card>
                Element
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
        </div>
    )
}