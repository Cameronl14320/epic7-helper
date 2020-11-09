import React from 'react'
import { Box, Text, Button } from 'rebass'
import {Label} from '@rebass/forms'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
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
        width: ['90vw', '80vw', '35vw'],
        
        firstRow: {
            gridRow: '1',
            margin: '15px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            justifyContent: 'center',
            
            rarityContainer: {
                display: 'flex',
                justifyContent: 'center',
                rarityIcon: {
                    width: ['5em', '6em', '7em'],
                    height: ['5em', '6em', '7em'],
                },
            },

            gearText: {
                display: 'block',
                textAlign: 'center',
                color: 'black',
                fontSize: [5, 6],
            }
        },

        secondRow: {
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
                        Mythic
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
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Text>0</Text>
                            <Text>3</Text>
                            <Text>6</Text>
                            <Text>9</Text>
                            <Text>12</Text>
                            <Text>15</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
