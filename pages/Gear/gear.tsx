import React from 'react'
import { Box, Text, Button } from 'rebass'
import theme from '../../styles/theme'
import DotSlider from '../../components/shared/slider/DotSlider'

var rarity = 3;

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
                    width: ['6em', '8em', '10em'],
                    height: ['6em', '8em', '10em'],
                    visibility: 'hidden',
                },
                rarityChanger: {
                    width: ['3em', '4em', '5em'],
                    height: ['3em', '4em', '5em'],
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
        },

        thirdRow: {
            gridRow: '3',
            margin: '15px',
        },
    },
}

function changeRarity() {

}

export default function Gear() {
    return (
        <Box sx={gearStyle.wrapper}>
            <Box sx={gearStyle.grid}>

                <Box sx={gearStyle.grid.firstRow}>
                    <Box className="gearRarity" style={gearStyle.grid.firstRow.rarityContainer}>
                        <Button className="rarityIcon" sx={gearStyle.grid.firstRow.rarityContainer.rarityIcon} onClick={() => changeRarity()}>
                            <Box sx={{
                                color: 'black',
                            }}>
                                grid
                            </Box>
                        </Button>
                    </Box>
                    <Box className="gearText" sx={gearStyle.grid.firstRow.gearText}>
                        Mythic
                    </Box>
                </Box>
                
                <Box style={gearStyle.grid.secondRow}>
                    <Box>
                        <DotSlider min={0} max={15} step={3}/>
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

                <Box sx={gearStyle.grid.thirdRow}>
                    test
                </Box>
            </Box>
        </Box>
    )
}
