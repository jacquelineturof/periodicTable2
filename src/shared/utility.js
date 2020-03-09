import colors from '../colors.module.css'

export function familyToColor(type) {
    let cssColor

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

    return cssColor
}