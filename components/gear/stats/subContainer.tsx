import { Box } from 'rebass'
import GearSub from './GearSub'
import { subArray } from '../../../objects/subArray'
import { Component } from 'react';
import statObject from '../../../objects/GearStat';

const subStyle = {
    wrapper: {
        userSelect: 'none',
        MozUserSelect: 'none',
        KhtmlUserSelect: 'none',
        WebkitUserSelect: 'none',
        minWidth: '300px',
    },
    currentDisplay: {
        transition: 'display .2s, visibility .2s, height .2s, opacity .2s'
    },
    subContainer: {
        selections: {
            display: "inline-grid",
            marginTop: '10px',
            overflow: 'hidden',
            height: 'auto',
            hidden: {
                transition: 'max-height .2s, visibility .2s, opacity .2s',
                visibility: "hidden",
                maxHeight: '0',
                opacity: '0',
            },
            revealed: {
                transition: 'max-height .2s, visibility .5s, opacity .5s',
                visibility: "visible",
                maxHeight: '500px',
                opacity: '1',
            },
        },
        reveal: {
            width: '100%',
            marginTop: '10px',
            height: ["6vh", "5vh", "4vh"],
            background: 'black',
            ":hover": {
                cursor: "pointer",
            }
        }

    }

}

function subStats(stats : number[]) : GearSub[] {
    let subStats : GearSub[] = [];
    for (let i = 0; i < stats.length; i++) {
        subStats.push(new GearSub({key: ("subContainer-subStats-" + i), id: ("subContainer-subStats-" + i), stat:subArray[stats[i]]}))
    }
    return subStats;
}

/*
export interface SubContainer {
    rarity: number
    enhancements: number  
}

const subContainer: SubContainer = {
    rarity: 1,
    enhancements: 5,
    stats: [1,2,3]
}
*/


export default subContainer() {
    var currentStats = [];
    for (let i = 0; i < this.selectedStats.length; i++) {
        currentStats.push(
            <Box key={"subContainer-substat-" + i} id={"subContainer-substat-" + i}>
                {this.subStatDisplay[i].render()}
            </Box>
            );
    }
    
    var select = this.createSelect();
        return (
            <Box sx={subStyle.wrapper}>
                <Box sx={{
                    transition: 'height .2s',
                }}>
                    {currentStats}
                </Box>
                <Box>
                    <Box id="subContainer-selections" className="selections" style={{visibility: "hidden", maxHeight: '0', height: 'auto', opacity: '0',}} sx={subStyle.subContainer.selections}>
                        {select}
                    </Box>

                    <Box className="revealSelections" sx={subStyle.subContainer.reveal} onClick={() => {
                        var reveal = document.getElementById("subContainer-selections");
                        if (reveal.style.visibility == "visible") {
                            reveal.style.transition = subStyle.subContainer.selections.hidden.transition;
                            reveal.style.visibility = subStyle.subContainer.selections.hidden.visibility;
                            reveal.style.maxHeight = subStyle.subContainer.selections.hidden.maxHeight;
                            reveal.style.opacity = subStyle.subContainer.selections.hidden.opacity;

                        } else {
                            reveal.style.transition = subStyle.subContainer.selections.revealed.transition;
                            reveal.style.visibility = subStyle.subContainer.selections.revealed.visibility;
                            reveal.style.maxHeight = subStyle.subContainer.selections.revealed.maxHeight;
                            reveal.style.opacity = subStyle.subContainer.selections.revealed.opacity;
                        }
                    }}>
                    </Box>
                </Box>
            </Box>
        )
    }



