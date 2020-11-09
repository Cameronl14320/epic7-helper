import React from 'react'
import { Box, Text } from 'rebass'
import gearStyle from './gearStyle'

export default function Gear() {
    return (
        <Box className="gearWrapper" sx={{
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px',
        }}>
            <Box className="gearGrid" sx={{
                display: 'grid',
                color: 'black',
                background: gearStyle.colors.test,
                width: '500px',
            }}>
                <Box className="gearFirstRow" sx={{
                    display: 'inline-grid',
                    columnGap: '0px',
                    gridRow: '1',
                    margin: '15px 15px 15px 15px',
                }}>
                    <Box className="gearRarity" style={{
                        display: 'flex',
                        gridRow: '1',
                        gridColumn: '1',
                        background: 'blue',
                        position: 'relative',
                    }}
                    >
                    </Box>
                    <Box className="gearText" sx={{
                        width: 'auto',
                        gridRow: '1',
                        gridColumn: '2',
                        color: 'black',
                        fontSize: [1, 2, 3, 4],
                        position: 'relative',
                    }}>
                        hello
                    </Box>
                </Box>
                <Box style={{
                    gridColumn: '1',
                    gridRow: '2',
                }}>
                    Two
                </Box>
                <Box style={{
                    gridColumn: '1',
                    gridRow: '3',
                }}>
                    Three
                </Box>
            </Box>
        </Box>
    )
}
