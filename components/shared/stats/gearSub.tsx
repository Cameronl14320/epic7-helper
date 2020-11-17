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

export default class GearSub extends Component<{}, {stat : statObject}> {

    stat : statObject;

    constructor(props) {
        super(props);
        this.stat = props.stat;
    }

    changeStat() {
        var totalSub = subArray.length;
        var id : number = subArray.indexOf(this.stat);
        if (id >= totalSub) {
            id = 0;
        }
        this.stat = subArray[id];

        document.getElementById('Stat').textContent = this.stat.name;
    }

    render() {
        return (
            <>
                <Box sx={{
                    display: 'inline-grid',
                }}>
                    <Box id="Stat" sx={subStyle.style} onClick={() => this.changeStat()}>
                        {this.stat.name}
                    </Box>
                    <Box id="Amount" sx={subStyle.style}>
                        Two
                    </Box>
                </Box>
            </>
        )
    }
}