import React from 'react'

import Element from './Element'

import classes from './Column.module.css'

import { elementData } from '../data/elements'

/*
    A column in the periodic table.
    @family: the column label as a roman numeral
    @elements: the array of <Element />
    @showInfo: hover handler
    @closeInfo: destroy element once user is no longer hovering over the element.
*/
export default function Column({ family, elements, showInfo, closeInfo  }) {
    return (
        <div className = { classes.Column }>
            <h5 className = { classes.ColumnLabel }>
                { family }
            </h5>
            { elements.map((symbol, index) => 
                <Element 
                    key = { "" + index }
                    symbol = { symbol } 
                    data = { elementData[symbol] }
                    showInfo = { showInfo }
                    closeInfo = { closeInfo } />)}
        </div>
    )
}