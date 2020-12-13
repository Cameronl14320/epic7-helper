import React from 'react'
import { Box, Text, Button, SxStyleProp } from 'rebass'
import theme from '../../styles/theme'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { subArray } from '../../components/gear/game/subArray'
import SubContainer from '../../components/gear/stats/SubContainer'
import colors from '../../styles/colors'
import statObject from '../../components/gear/game/statObject'

var rarity = 3;
var firstStat = 0;
var secondStat = 1;
var thirdStat = 2;
var fourthStat = 3;

const gearStyle = {
    wrapper: {
        breakpoints: theme.breakpoints,
        background: 'white',
        display: 'block',
        justifyContent: 'center',
        paddingTop: '10px',
    },
    grid: {
        display: 'grid',
        color: 'black',
        background: theme.colors.test,
        borderRadius: '10px',
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
                    width: ['6em', '9em', '12em'],
                    height: ['6em', '9em', '12em'],
                    background: colors.secondary,
                    padding: 0,
                },
                rarityChanger: {
                    width: ['3em', '4em', '5em'],
                    height: ['3em', '4em', '5em'],
                },
                enhanceIcon: {
                    width: ['2em', '3em', '4em'],
                    height: ['2em', '3em', '4em'],
                    background: 'black',
                    position: 'absolute',
                    marginLeft: ['4em', '6em', '8em'],
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
            justifyContent: 'center',
            textAlign: 'center',
            stat: {

            }
        },
    },
}

function changeRarity() {
    // Select rarity
}

function calculate(subStats : SubContainer) {
    let values : number[] = subStats.getValues();
    let stats : statObject[] = subStats.getStats();
    let enhancements : number = subStats.getEnhancement();

    // Identify which stats have been enhanced
    // Need to account for scenarios where more than possible values have been applied
}

function changeStat(currentStat : number) {
    var totalStats = subArray.length;

    currentStat++;
    if (currentStat >= totalStats) {
        currentStat = 0;
    }
    return currentStat;
}

export default function Gear() {

    const subStats = new SubContainer({});

    return (
        <Box sx={gearStyle.wrapper}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box sx={gearStyle.grid}>

                    <Box sx={gearStyle.grid.firstRow}>
                        <Box className="gearRarity" style={gearStyle.grid.firstRow.rarityContainer}>
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Box className="rarityIcon" sx={gearStyle.grid.firstRow.rarityContainer.rarityIcon} onClick={() => changeRarity()}>
                                    <Box sx={{
                                        color: 'black',
                                    }}>
                                        grid
                                    </Box>
                                </Box>
                                <Box className="enhanceLevel" sx={gearStyle.grid.firstRow.rarityContainer.enhanceIcon}>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box style={gearStyle.grid.secondRow}>
                        <Box>
                        <Slider 
                            min={0} max={15} step={3} dots dotStyle={{borderColor: theme.colors.primary}} activeDotStyle={{borderColor: theme.colors.secondary}}
                            onChange={(e) => {subStats.updateEnhance(e.valueOf())}}
                        />
                        </Box>
                    </Box>

                    <Box sx={gearStyle.grid.thirdRow}>
                        {subStats.render()}
                    </Box>
                </Box>
            </Box>
            
            <Box sx={{
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                userSelect: 'none',
                MozUserSelect: 'none',
                KhtmlUserSelect: 'none',
                WebkitUserSelect: 'none',
                margin: '15px',
            }}>
                <Box sx={{
                    padding: '15px',
                    borderRadius: '5px',
                    background: 'blue',
                    color: 'white',
                    width: ['90vw', '80vw', '35vw'],
                    ':hover': {
                        cursor: 'pointer',
                    }
                }} onClick={() => calculate(subStats)}>
                    Compute
                </Box>
            </Box>
        </Box>
    )
}
