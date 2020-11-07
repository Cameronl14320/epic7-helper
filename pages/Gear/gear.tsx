import React from 'react'
import { Box } from 'rebass'
import theme from '../../styles/theme'

export default function Gear() {
    return (
        <Box style={{
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px',
        }}>
            <Box style={{
                display: 'grid',
                color: 'black',
                background: 'red',
                textAlign: 'center',
                width: '500px',
            }}>
                Gear Box
            </Box>
        </Box>
    )
}
