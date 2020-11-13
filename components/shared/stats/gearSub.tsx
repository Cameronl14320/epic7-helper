import { Component } from "react";

import { Box } from 'rebass'

const subStyle = {
    style: {
        gridRow: 1,
        padding: '0px 5px 0px 5px',
    }
}

export default function GearSub() {
    return (
        <>
            <Box sx={{
                display: 'inline-grid',
            }}>
                <Box style={subStyle.style}>
                    One
                </Box>
                <Box style={subStyle.style}>
                    Two
                </Box>
            </Box>
        </>
    )
}