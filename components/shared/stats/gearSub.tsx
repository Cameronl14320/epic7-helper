import { Component } from "react";
import ReactDOM from "react-dom";

import { Box, SxStyleProp } from 'rebass'
import subArray from '../game/subArray'

const subStyle = {
    style: {
        gridRow: 1,
        padding: '0px 5px 0px 5px',
    }
}

export default class GearSub extends Component<{}, {id : number, name : string, min : number, max : number}> {

    id : number;
    name: string;
    min: number;
    max: number;

    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.min = props.min;
        this.max = props.max;
    }

    changeStat() {
        var totalSub = subArray.length;
        this.id++;
        if (this.id >= totalSub) {
            this.id = 0;
        }

        /*
        var props = subArray[this.id];
        this.name = props.name;
        this.min = props.min;
        this.max = props.max;

        */

        document.getElementById('Stat').textContent;
    }

    render() {
        return (
            <>
                <Box sx={{
                    display: 'inline-grid',
                }}>
                    <Box id="Stat" sx={subStyle.style}>
                        {this.name}
                    </Box>
                    <Box id="Amount" sx={subStyle.style}>
                        Two
                    </Box>
                </Box>
            </>
        )
    }
}