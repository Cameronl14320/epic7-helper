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

    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    grid: {
        display: 'grid',
        color: 'black',
        background: theme.colors.test,
        borderRadius: '10px',
        width: ['90vw', '80vw', '35vw'],
        
        iconRow: {
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

        sliderRow: {
            gridRow: '2',
            margin: '15px',
            slider: {
                handleStyle: {

                },
                railStyle: {

                },
                dotStyle: {
                    borderColor: theme.colors.primary,
                },
                activeDotStyle: {

                },
            },
        },

        substatRow: {
            gridRow: '3',
            justifyContent: 'center',
            textAlign: 'center',
            stat: {

            }
        },
    },
    calculate: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        MozUserSelect: 'none',
        KhtmlUserSelect: 'none',
        WebkitUserSelect: 'none',
        margin: '15px',

        button: {
            padding: '15px',
            borderRadius: '5px',
            background: 'blue',
            color: 'white',
            width: ['90vw', '80vw', '35vw'],
            ':hover': {
                cursor: 'pointer',
            }
        }
    }
}

function changeRarity() {
    // Select rarity
}

function getMax(substat : statObject, tier : number, enhancements : number, value : number, rarity : number) {

}

function calculate(subStats : SubContainer) {
    let values : number[] = subStats.getValues();
    let tier = 0;
    let stats : statObject[] = subStats.getStats();
    let enhancements : number = subStats.getEnhancement();

    if (stats.length > rarity && enhancements == 0) {
        // No enhancements, yet there are more substats then there should be
        return;
    }

    for (let i = 0; i < values.length; i++) {
        if (values[i] > (stats[i].max[tier] + (stats[i].max[tier] * enhancements))) {
            // Value is greater than possible max, where max is base roll + (enhance roll * number of enhancements)
            return;
        }
        if (values[i] < (stats[i].min[tier])) {
            // Value is less than the possible minimum, where min is defined uniquely for each sub stat
            return;
        }
    }

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
            <Box sx={gearStyle.gridContainer}>
                <Box sx={gearStyle.grid}>

                    <Box sx={gearStyle.grid.iconRow}>
                        <Box className="gearRarity" style={gearStyle.grid.iconRow.rarityContainer}>
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Box className="rarityIcon" sx={gearStyle.grid.iconRow.rarityContainer.rarityIcon} onClick={() => changeRarity()}>
                                    <Box sx={{
                                        color: 'black',
                                    }}>
                                        grid
                                    </Box>
                                </Box>
                                <Box className="enhanceLevel" sx={gearStyle.grid.iconRow.rarityContainer.enhanceIcon}>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box style={gearStyle.grid.sliderRow}>
                        <Box>
                        <Slider 
                            min={0} max={15} step={3} dots 
                            handleStyle={gearStyle.grid.sliderRow.slider.handleStyle}
                            railStyle={gearStyle.grid.sliderRow.slider.railStyle}
                            dotStyle={gearStyle.grid.sliderRow.slider.dotStyle} 
                            activeDotStyle={gearStyle.grid.sliderRow.slider.activeDotStyle}
                            onChange={(e) => {subStats.updateEnhance(e.valueOf())}}
                        />
                        </Box>
                    </Box>

                    <Box sx={gearStyle.grid.substatRow}>
                        {subStats.render()}
                    </Box>
                </Box>
            </Box>
            
            <Box sx={gearStyle.calculate}>
                <Box sx={gearStyle.calculate.button} onClick={() => calculate(subStats)}>
                    Compute
                </Box>
            </Box>
        </Box>
    )
}
