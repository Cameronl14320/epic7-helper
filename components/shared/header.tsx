import React from 'react'
import theme from '../../styles/theme'
import { Box} from 'rebass'
import Link from 'next/link'

export default function Header(){
    return (
    <Box sx= {theme.header}>
        <Box sx={theme.header_layout}>
            <Box sx={theme.header_buttons}>
                <Link href="/">Home</Link>
            </Box>
            <Box sx={theme.header_buttons}>
                <Link href="/Heroes/heroes">Heroes</Link>
            </Box>
            <Box sx={theme.header_buttons}>
                <Link href="/Gear/gear">Gear</Link>
            </Box>
            <Box sx={theme.header_buttons}>
                <Link href="/DamageCalc/damagecalc">Damage Calculator</Link>
            </Box>
        </Box>
    </Box>
    )
}