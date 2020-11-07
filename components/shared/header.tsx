import React from 'react'
import theme from '../../styles/theme'
import { Box } from 'rebass'
import Link from 'next/link'

export default function Header(){
    return (
    <Box style= {theme.header}>
        <ul style={theme.header_layout}>
            <li style={theme.header_buttons}>
                <Link href="/">Home</Link>
            </li>
            <li style={theme.header_buttons}>
                <Link href="/Heroes">Heroes</Link>
            </li>
            <li style={theme.header_buttons}>
                <Link href="/Gear">Gear</Link>
            </li>
            <li style={theme.header_buttons}>
                <Link href="/DamageCalc">Damage Calculator</Link>
            </li>
        </ul>
    </Box>
    )
}