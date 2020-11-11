import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import theme from '../../../styles/theme'

export default function DotSlider(props: { min: number; max: number; step: number }) {
    return (
        <Slider 
        min={props.min}
        max={props.max}
        step={props.step}
        dots
        dotStyle={{borderColor: theme.colors.primary}}
        activeDotStyle={{borderColor: theme.colors.secondary}}
        />
    )
}