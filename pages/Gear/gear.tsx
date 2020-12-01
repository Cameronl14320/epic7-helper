import React from 'react'
import { Box, Text, Button, SxStyleProp } from 'rebass'
import theme from '../../styles/theme'
import DotSlider from '../../components/shared/slider/DotSlider'
import { subArray } from '../../components/gear/game/subArray'
import GearSub from '../../components/gear/stats/GearSub'
import SubContainer from '../../components/gear/stats/SubContainer'
import { Style } from 'util'
import colors from '../../styles/colors'

var rarity = 3;
var firstStat = 0;
var secondStat = 1;
var thirdStat = 2;
var fourthStat = 3;

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
                    <Box className="gearText" sx={gearStyle.grid.firstRow.gearText}>
                        Mythic
                    </Box>
                </Box>
                
                <Box style={gearStyle.grid.secondRow}>
                    <Box>
                        <DotSlider min={0} max={15} step={3}/>
                    </Box>
                </Box>

                <Box sx={gearStyle.grid.thirdRow}>
                    {subStats.render()}
                </Box>
            </Box>
        </Box>
    )
}
