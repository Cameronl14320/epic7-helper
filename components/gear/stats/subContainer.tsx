import { Box } from 'rebass'
import GearSub from './GearSub'
import { subArray } from '../game/subArray'
import { Component } from 'react';

function subStats(stats : number[]) : GearSub[] {
    let subStats : GearSub[] = [];
    for (let i = 0; i < stats.length; i++) {
        subStats.push(new GearSub({key: ("subContainer-subStats-" + i), id: ("subContainer-subStats-" + i), stat:subArray[stats[i]]}))
    }
    return subStats;
}

export default class SubContainer extends Component {

    rarity : number = 4;
    enhancements : number = 0;
    selectedStats : number[] = [];
    subStatDisplay : GearSub[];
    
    constructor(props) {
        super(props);
        this.selectedStats = [5, 2, 3, 4];
        this.subStatDisplay = subStats(this.selectedStats);
    }

    /**
     * Updates currently selected stats
     * If current one is clicked, removes from selection
     * If new one, add it to the selections granted less than max currently selected
     * @param id the id of the selected stat div
     * @param stat the stat selected (index in subArray array)
     */
    handleStat(id : string, stat : number) {
        let substat = document.getElementById(id);
        let change = false;
        if (this.selectedStats.includes(stat)) {
            let tempSelected : number[] = [];
            let remove = this.selectedStats.indexOf(stat);
            for (let i = 0; i < this.selectedStats.length; i++) {
                if (i != remove) {
                    tempSelected.push(this.selectedStats[i]);
                }
            }
            this.selectedStats = tempSelected;
            substat.style.background = "blue";
            change = true;
        } else {
            if (this.selectedStats.length < this.rarity) {
                this.selectedStats.push(stat);
                substat.style.background = "pink";
                change = true;
            }
        }
        this.refreshStats();
    }

    /**
     * Refresh all stats in case some are hidden or displayed incorrectly
     */
    refreshStats() {
        // Update stats to match selected stat objects
        for (let i = 0 ; i < this.selectedStats.length; i++) {
            this.subStatDisplay[i].changeStat(subArray[this.selectedStats[i]]);
        }

        // Refresh stats to make sure they're all visible
        for (let i = 0; i < this.subStatDisplay.length; i++) {
            this.subStatDisplay[i].toggleDisplay(true);
        }

        // If max stats not selected, hide hidden ones
        let selectedLength = this.selectedStats.length;
        var displayLength = this.subStatDisplay.length;
        if (selectedLength < displayLength) { // Get difference in length to find out how many are missing
            let difference = displayLength - selectedLength;
            for (let j = displayLength - difference; j < displayLength; j++) {
                this.subStatDisplay[j].toggleDisplay(false);
            }
        }
    }

    /**
     * Creates the selection div
     * Creates a button for each substat in the subArray array
     * Stores in a grid for display
     */
   createSelect() {
    let selectStat = [];
    let maxPerColumn = 5;
    let currentColumn = 1;
    let currentRow = 1;
    for (let i = 0; i < subArray.length; i++) {
        let status : string = "blue";
        if (this.selectedStats.includes(i)) {
            status = "pink";
        }

        selectStat.push(
            <Box key={i} sx={{
                gridColumn: currentColumn,
                gridRow: currentRow,
                paddingX: '10px',
                paddingY: '5px',
                margin: '2px',
                textAlign: 'center',
                background: status,
                borderRadius: '2px',
                ':hover': {
                    cursor: "pointer",
                },
            }} id={"subContainer-selection-" + i} onClick={() => this.handleStat("subContainer-selection-" + i, i)}>
                {subArray[i].name}
            </Box>
        )
        currentColumn++;
        if (currentColumn > maxPerColumn) {
            currentColumn = 1;
            currentRow++;
        }
    }

    return selectStat;
    }

    updateEnhance(newEnhance : number) {
        this.enhancements = newEnhance;
        console.log(this.enhancements);
    }

    render() {
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
            <Box style={{
                userSelect: 'none',
                MozUserSelect: 'none',
                KhtmlUserSelect: 'none',
                WebkitUserSelect: 'none',
            }}>
                <Box>
                    {currentStats}
                </Box>
                <Box>
                    <Box id="subContainer-selections" className="selections" sx={{
                        display: 'none',
                        marginTop: '10px',
                    }}>
                        {select}
                    </Box>

                    <Box className="revealSelections" sx={{
                        width: '100%',
                        marginTop: '10px',
                        height: ["5vh", "5vh", "2vh"],
                        background: 'black',
                        ":hover": {
                            cursor: "pointer",
                        }
                    }} onClick={() => {
                        var reveal = document.getElementById("subContainer-selections");
                        if (reveal.style.display == "inline-grid") {
                            reveal.style.display = "none";
                        } else {
                            reveal.style.display = "inline-grid";
                        }
                    }}>
                    </Box>
                </Box>
            </Box>
        )
    }

}