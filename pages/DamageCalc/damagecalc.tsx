import React from 'react'
import { Box, Text } from 'rebass'
import {subArray, createArray} from '../../components/gear/game/subArray'

export default function DamageCalc() {
    return (
        <Box style={{
            color: 'black',
        }}>
            <Box sx={{
                width: '100px',
                height: '100px',
                background: 'blue',
            }}
            onClick={() => createArray()}
            ></Box>
        </Box>
    )
}