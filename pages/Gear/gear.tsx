import React from 'react'
import { Box, Text, Button } from 'rebass'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import theme from '../../styles/theme'


const gearStyle = {
    wrapper: {
        breakpoints: theme.breakpoints,
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10px',
    },
    grid: {
        display: 'grid',
        color: 'black',
        background: theme.colors.test,
        width: ['90vw', '80vw', '45vw'],
        
        firstRow: {
            display: 'flex',
            columnGap: '0px',
            gridRow: '1',
            margin: '15px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',

            rarityContainer: {
                display: 'inline-flex',
                gridRow: '1',
                gridColumn: '1',
                rarityIcon: {
                    width: ['5em', '6em', '7em'],
                    height: ['5em', '6em', '7em'],
                },
            },

            gearText: {
                marginLeft: 2,
                display: 'inline',
                gridRow: '1',
                gridColumn: '2',
                color: 'black',
                fontSize: [5, 6],
            }
        },

        secondRow: {
            gridColumn: '1',
            gridRow: '2',
            margin: '15px',
        }
    },
}

export default function Gear() {
    return (
        <Box sx={gearStyle.wrapper}>
            <Box sx={gearStyle.grid}>

                <Box sx={gearStyle.grid.firstRow}>
                    <Box className="gearRarity" style={gearStyle.grid.firstRow.rarityContainer}>
                        <Button className="rarityIcon" sx={gearStyle.grid.firstRow.rarityContainer.rarityIcon}/>
                    </Box>
                    <Box className="gearText" sx={gearStyle.grid.firstRow.gearText}>
                        insert rarity here 123123
                    </Box>
                </Box>
                
                <Box style={gearStyle.grid.secondRow}>
                    <Box>
                        <Slider 
                            min={0}
                            max={15}
                            step={3}
                            dots
                            dotStyle={{borderColor: 'black'}}
                            activeDotStyle={{borderColor: 'blue'}}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
