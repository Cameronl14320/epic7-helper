import { Component } from "react";
import { Box, SxStyleProp } from 'rebass'
import statObject from "../game/statObject";
import { subArray } from '../game/subArray'

const subStyle = {
    style: {
        gridRow: 1,
        padding: '0px 5px 0px 5px',
    }
}

export default class GearSub extends Component<{}, {id : string, stat : statObject}> {

    stat : statObject = new statObject("null", 0, 0);
    id : string;

    constructor(props) {
        super(props);
        this.id = props.id;
        this.stat = props.stat;
    }

    changeVisibility() {
        var panel = document.getElementById(this.id + "Change");
        var state = panel.style.visibility == "hidden";
        if (state) {
            panel.style.visibility = "visible";
            panel.style.display = "grid";
        } else {
            panel.style.visibility = "hidden";
            panel.style.display = "none";
        }
    }

    changeStat(index : number) {
        if (index >= 0 && index < subArray.length) {
            this.stat = subArray[index];
        }
        document.getElementById(this.id).textContent = this.stat.name;
        this.changeVisibility();
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
        var selectStat = this.createSelect();

        return (
            <Box style={{
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none"
            }}>
                <Box sx={{
                    display: 'inline-grid',
                    background: 'white',
                }}>
                    <Box id={this.id} sx={subStyle.style} onClick={() => this.changeVisibility()}>
                        {this.stat.name}
                    </Box>
                    <Box id="Amount" sx={subStyle.style}>
                        Two
                    </Box>
                </Box>
                <Box id ={this.id + "Change"}sx={{
                    visibility: 'hidden',
                    display: 'none',
                    textAlign: 'center',
                    background: 'lightblue',
                }}>
                    {selectStat}
                </Box>
            </Box>
        )
    }
}