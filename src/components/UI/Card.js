import React from 'react'

import classes from './Card.module.css'

/*
    Card UI. Just a wrapper class.
    @children the content of the card
    @type the type of card which will determine
    it's position.
*/
export default function Card({ children, type }) {
    let typeCSSClass = type === 'mid'
        ? classes.MidCard
        : classes.EndCard

    return (
        <div className = { [ classes.Card, typeCSSClass ].join(' ')}>
            { children }
        </div>
    )
}