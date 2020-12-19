import { subArray } from '../../../objects/subArray'
import { Box } from 'rebass'

const selectStyle = {
    button: {
        paddingX: '10px',
        paddingY: '5px',
        margin: '2px',
        textAlign: 'center',
        background: status,
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
 * Updates currently selected stats
 * If current one is clicked, removes from selection
 * If new one, add it to the selections granted less than max currently selected
 * @param id the id of the selected stat div
 * @param stat the stat selected (index in subArray array)
 */
function handleStat(id : string, stat : number) {
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

export default function createSelect() {
    let selectStat = [];
    let maxPerColumn = 5;
    let currentColumn = 1;
    let currentRow = 1;
    for (let i = 0; i < subArray.length; i++) {
        let status : string = selectStyle.color.notSelected;
        if (this.selectedStats.includes(i)) {
            status = selectStyle.color.selected;
        }

        selectStat.push(
            <Box key={i} sx={selectStyle.button} style={{gridColumn: currentColumn, gridRow: currentRow}} 
                id={"subContainer-selection-" + i} onClick={() => handleStat("subContainer-selection-" + i, i)}>
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