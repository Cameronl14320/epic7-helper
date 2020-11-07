import React from 'react'
import { Box } from 'rebass'
import Link from 'next/link'

import headerStyle from './headerStyle'

export default function Header(){
    return (
    <Box sx= {headerStyle.header}>
        <Box sx={headerStyle.header_layout}>
            <Box sx={headerStyle.header_buttons}>
                <Link href="/">Home</Link>
            </Box>
            <Box sx={headerStyle.header_buttons}>
                <Link href="/Heroes/heroes">Heroes</Link>
            </Box>
            <Box sx={headerStyle.header_buttons}>
                <Link href="/Gear/gear">Gear</Link>
            </Box>
            <Box sx={headerStyle.header_buttons}>
                <Link href="/DamageCalc/damageCalc">Damage Calculator</Link>
            </Box>
        </Box>
    </Box>
    )
}