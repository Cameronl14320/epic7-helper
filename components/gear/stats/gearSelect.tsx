import { subArray } from '../../../objects/subArray'
import { Box } from 'rebass'
import SubObject from '../../../objects/SubObject';

const selectStyle = {
    button: {
        paddingX: '10px',
        paddingY: '5px',
        margin: '2px',
        textAlign: 'center',
        background: 'black',
        borderRadius: '2px',
        ':hover': {
            cursor: "pointer",
        }
    },
    color: {
        selected: "",
        notSelected: ""
    }
}

/**
 * Refresh all stats in case some are hidden or displayed incorrectly
 */
function refreshStats() {
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
 * Updates currently selected stats
 * If current one is clicked, removes from selection
 * If new one, add it to the selections granted less than max currently selected
 * @param id the id of the selected stat div
 * @param stat the stat selected (index in subArray array)
 */
function handleStat(data: SubObject, id : string, stat : number) {
    let substat = document.getElementById(id);
    let change = false;
    if (data.selectedStats.includes(stat)) {
        let tempSelected : number[] = [];
        let remove = data.selectedStats.indexOf(stat);
        for (let i = 0; i < data.selectedStats.length; i++) {
            if (i != remove) {
                tempSelected.push(data.selectedStats[i]);
            }
        }
        data.selectedStats = tempSelected;
        substat.style.background = "blue";
        change = true;
    } else {
        if (data.selectedStats.length < data.rarity) {
            data.selectedStats.push(stat);
            substat.style.background = "pink";
            change = true;
        }
    }
    this.refreshStats();
}

export default function createSelect(props : {data : SubObject}) {
    var data : SubObject = props.data;
    let selectStat = [];
    let maxPerColumn = 5;
    let currentColumn = 1;
    let currentRow = 1;
    for (let i = 0; i < subArray.length; i++) {
        let status : string = selectStyle.color.notSelected;
        if (data.selectedStats.includes(i)) {
            status = selectStyle.color.selected;
        }

        selectStat.push(
            <Box key={i} sx={selectStyle.button} style={{gridColumn: currentColumn, gridRow: currentRow}} 
                id={"subContainer-selection-" + i} onClick={() => handleStat(data, "subContainer-selection-" + i, i)}>
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