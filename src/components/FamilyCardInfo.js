import React from 'react'

import { families } from '../data/familys'

import classes from './FamilyCardInfo.module.css'

const FamilyHeader = ({ familyName }) => (
    <header className = { classes.FamilyCardHeading }>
        <h5 className = { classes.FamilyTag }>
            FAMILY
        </h5>
        <h1>{ familyName }</h1>
    </header>
)

const FamilyDescription = ({ familyName }) => (
    <div>
        <p>{ families[familyName].description }</p>
    </div>
)

const FamilyController = () => (
    <div className = { classes.ControllerContainer }>

    </div>
)

export default function FamilyCardInfo({ familyName }) {
    return (
        <div className = { classes.Container }>
            <FamilyHeader familyName = { familyName } />
            <FamilyDescription familyName = { familyName } /> 
            <FamilyController />
        </div>
    )
}