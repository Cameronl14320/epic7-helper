import { Box } from 'rebass'
import GearSub from './GearSub'
import { subArray } from '../game/subArray'
import { Component } from 'react';

const firstStat = new GearSub({key: "firstStat", id:"firstStat", stat:subArray[0]});
const secondStat = new GearSub({key: "secondStat", id:"secondStat", stat:subArray[1]});
const thirdStat = new GearSub({key: "thirdStat", id:"thirdStat", stat:subArray[2]});
const fourthStat = new GearSub({key: "fourthStat", id:"fourthStat", stat:subArray[3]});

export default class subContainer extends Component {

    rarity : number = 3;
    selectedStats : number[] = [];
    
    constructor(props) {
        super(props);
    }

    getSelected() {
        var newSelect : number[] = [];
        newSelect.push(subArray.indexOf(firstStat.stat));
        newSelect.push(subArray.indexOf(secondStat.stat));
        newSelect.push(subArray.indexOf(thirdStat.stat));
        newSelect.push(subArray.indexOf(fourthStat.stat));
    }

    changeStat(stat : number) {

    }

    changeVisibility() {
        var panel = document.getElementById("statPanel");
        var state = panel.style.visibility == "hidden";
        if (state) {
            panel.style.visibility = "visible";
            panel.style.display = "grid";
        } else {
            panel.style.visibility = "hidden";
            panel.style.display = "none";
        }
    }

        /*
    * Might be better to create this in gear instead,
    * Have a panel you can maximize -> click on x separate stats (Depending on rarity) to select them all in one panel rather than open up each time.
    * This way, allows to keep track of what stats are selected
    */
   createSelect() {
    let selectStat = [];
    let maxPerColumn = 5;
    let currentColumn = 1;
    let currentRow = 1;
    for (let i = 0; i < subArray.length; i++) {
        selectStat.push(
            <Box key={i} sx={{
                gridColumn: currentColumn,
                gridRow: currentRow,
                margin: '5px',
                textAlign: 'center',
                ':checked': {
                    color: 'blue',
                },
            }} onClick={() => this.changeStat(i)}>
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
    
    render() {


        return (
            <>
                <Box>
                    <Box>
                        {firstStat.render()}
                    </Box>
                    <Box>
                        {secondStat.render()}
                    </Box>
                    <Box>
                        {thirdStat.render()}
                    </Box>
                    <Box>
                        {fourthStat.render()}
                    </Box>
                </Box>
                <Box>
                    Hello
                </Box>
            </>
        )
    }

}