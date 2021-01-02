import React from 'react'
import { Box, Text, Button, SxStyleProp } from 'rebass'
import theme from '../../styles/theme'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { subArray } from '../../objects/subArray'
import SubContainer from '../../components/gear/stats/SubContainer'
import colors from '../../styles/colors'
import GearStat from '../../objects/GearStat'
import { Label } from '@rebass/forms'
import SubObject from '../../objects/SubObject'

let rarity = 4;
let tier = 3;
let enhancements = 0;
let selectedStats = [0, 1, 2, 3];
const data : SubObject = new SubObject(rarity, enhancements, selectedStats, tier);
var rarityColors : string[] = ["gray", "green", "blue", "purple", "pink"];

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
                    borderRadius: '5px',
                    background: rarityColors[rarity],
                    padding: 0,

                    ':hover': {
                        cursor: "pointer",
                    }
                },
                rarityChanger: {
                    width: ['3em', '4em', '5em'],
                    height: ['3em', '4em', '5em'],
                },
                enhanceIcon: {
                    width: ['2em', '3em', '4em'],
                    height: ['1em', '1.5em', '2em'],
                    background: 'black',
                    position: 'absolute',
                    marginLeft: ['4em', '6em', '8em'],
                    borderRadius: '5px',
                    marginTop: '-5px',
                    color: 'white',
                    textAlign: 'center',
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
    let tempRarity = data.rarity;
    if (tempRarity + 1 >= rarityColors.length) {
        tempRarity = 0;
    } else {
        tempRarity = tempRarity + 1;
    }
    data.rarity = tempRarity;
    document.getElementById("gear-rarity-icon").style.background = rarityColors[data.rarity];
}

function calculate(data : SubObject) {
    let values : number[] = data.getValues();
    let stats : GearStat[] = data.getStats();
    let enhancements : number = data.enhancements;

    if (stats.length > data.rarity && enhancements <= (values.length - data.rarity)) {
        // No enhancements, yet there are more substats then there should be
        console.log("Number of substats > possible amount of substats because insufficent enhancements")
        console.log(stats.length + " > " + data.rarity + " && " + enhancements + " <= " + (values.length - data.rarity))
        return;
    }

    for (let i = 0; i < values.length; i++) {
        if (values[i] > (stats[i].max[data.tier] + (stats[i].max[data.tier] * enhancements))) {
            // Value is greater than possible max, where max is base roll + (enhance roll * number of enhancements)
            console.log("There is a stat > possible maximum")
            return;
        }
        if (values[i] < (stats[i].min[data.tier])) {
            // Value is less than the possible minimum, where min is defined uniquely for each sub stat
            console.log("There is a stat < possible minimum")
            return;
        }
    }

    // Array of enhancements, stores number of enhancements per substat, initialised with 0s
    let enhanced : number[] = new Array(stats.length).fill(0);
    let foundEnhancements = 0;

    // If rarity isn't equal with number of sub stats, it means enhancements have rolled into new sub stats
    // Must add an extra enhancement due to this
    if (values.length > data.rarity) {
        let extraSubs = values.length - data.rarity;
        for (let i = values.length - 1; i > (values.length - extraSubs - 1); i--) {
            enhanced[i]++;
            foundEnhancements++;
        }
    }

    while(foundEnhancements != enhancements) {
        for (let i = 0; i < values.length; i++) {
            let currentValue = values[i];
            let maxRoll = stats[i].max[data.tier];
            var simulateEnhance = maxRoll;
            while (simulateEnhance < currentValue) {
                foundEnhancements++;
                simulateEnhance += maxRoll;
                enhanced[i]++;
            }
        }

        if (foundEnhancements > enhancements) {
            // When we search for enhancements, we go by max possible rolls - this finds the minimum enhancements necessary to reach inputted parameters
            // If the number we find > number there is, impossible case, inaccurate number of enhancements
            console.log("Incorrect parameters (" + foundEnhancements + " > " + enhancements + ")")
            return;
        } else if (foundEnhancements < enhancements) {
            // Less than enhancements, found enhancement is actually comprised of multiple enhancements
            let max = 0;
            let maxValue = 0;
            for (let i = 0; i < values.length; i++) {
                console.log(foundEnhancements);
                if (values[i] > maxValue) {
                    maxValue = values[i];
                    values[i] = values[i] - stats[i].max[data.tier]; // Update value so that it doesn't repeatedly scan the same max
                    foundEnhancements++;
                    enhanced[i]++;
                    max = i;

                    if (foundEnhancements >= enhancements) { // Found all enhancements, time to stop
                        break;
                    }
                }
            }
        }
    }

    // Create an array of all the max values determined by max roll and number of enhancements
    let maxValues : number[] = [values.length];
    for (let i = 0; i < values.length; i++) {
        let maxRoll = stats[i].max[data.tier];
        maxValues[i] = maxRoll + (maxRoll * enhanced[i]);
    }

    // Removes the initiall maxRoll in the above for loop, as the extra sub stat(s) is not a base roll.
    if (values.length > data.rarity) {
        let extraSubs = values.length - data.rarity;
        for (let i = values.length - 1; i > (values.length - extraSubs - 1); i--) {
            let maxRoll = stats[i].max[data.tier];
            maxValues[i] = maxValues[i] - (maxRoll);
        }
    }

    console.log("Enhancements found: " + enhanced)
    console.log("Max Values: " + maxValues)
    return maxValues;
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
    const subCon = SubContainer({data});

    return (
        <Box sx={gearStyle.wrapper}>
            <Box sx={gearStyle.gridContainer}>
                <Box sx={gearStyle.grid}>

                    <Box sx={gearStyle.grid.iconRow}>
                        <Box id="gear-rarity" className="gearRarity" style={gearStyle.grid.iconRow.rarityContainer}>
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Box id="gear-rarity-icon" className="rarityIcon" sx={gearStyle.grid.iconRow.rarityContainer.rarityIcon} onClick={() => changeRarity()}>
                                    <Box sx={{
                                        color: 'black',
                                    }}>
                                        grid
                                    </Box>
                                </Box>
                                <Box id="gear-rarity-level" className="enhanceLevel" sx={gearStyle.grid.iconRow.rarityContainer.enhanceIcon}>
                                    0
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box id="gear-slider" style={gearStyle.grid.sliderRow}>
                        <Box>
                        <Label sx={{
                            marginY: '5px',
                            fontSize: '1.5em',
                        }}>Enhancement Level</Label>
                        <Slider 
                            min={0} max={15} step={3} dots 
                            handleStyle={gearStyle.grid.sliderRow.slider.handleStyle}
                            railStyle={gearStyle.grid.sliderRow.slider.railStyle}
                            dotStyle={gearStyle.grid.sliderRow.slider.dotStyle} 
                            activeDotStyle={gearStyle.grid.sliderRow.slider.activeDotStyle}
                            onChange={(e) => {
                                //subCon.updateEnhance(e.valueOf())
                                document.getElementById("gear-rarity-level").textContent = e.valueOf().toString();
                            }}
                        />
                        </Box>
                    </Box>

                    <Box id="gear-substats" sx={gearStyle.grid.substatRow}>
                        {subCon}
                    </Box>
                </Box>
            </Box>
            
            <Box id="gear-calculate" sx={gearStyle.calculate}>
                <Box sx={gearStyle.calculate.button} onClick={() => calculate(data)}>
                    Compute
                </Box>
            </Box>
        </Box>
    )
}
