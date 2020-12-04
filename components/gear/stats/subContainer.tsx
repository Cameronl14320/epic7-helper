import { Box } from 'rebass'
import GearSub from './GearSub'
import { subArray } from '../game/subArray'
import { Component } from 'react';

function subStats() : GearSub[] {
    let subStats : GearSub[] = [];
    for (let i = 0; i < 4; i++) {
        subStats.push(new GearSub({key: ("subContainer-subStats-" + i), id: ("subContainer-subStats-" + i), stat:subArray[i]}))
    }
    return subStats;
}

export default class SubContainer extends Component {

    rarity : number = 3;
    selected : number = 4;
    selectedStats : number[] = [];
    subStats = subStats();
    
    constructor(props) {
        super(props);
    }

    getSelected() {
        var currentSelect : number[] = [];
        for (let i = 0; i < this.rarity; i++) {
            currentSelect.push(subArray.indexOf(subStats[i].stat));
        }
        return currentSelect
    }

    changeStat(stat : number) {

    }
    
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
                paddingX: '10px',
                paddingY: '5px',
                margin: '2px',
                textAlign: 'center',
                background: 'blue',
                borderRadius: '2px',
                ':hover': {
                    cursor: "pointer",
                },
                ':checked': {
                    color: 'blue',
                    background: 'pink',
                },
            }} type="checkbox" onClick={() => this.changeStat(i)}>
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
        let currentStats = [];
        for (let i = 0; i < this.selected; i++) {
            currentStats.push(
                <Box key={"subContainer-substat-" + i}>
                    {this.subStats[i].render()}
                </Box>
                );
        }
        let select = this.createSelect();

        return (
            <>
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
            </>
        )
    }

}