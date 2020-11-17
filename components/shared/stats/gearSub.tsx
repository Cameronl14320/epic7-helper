import { Component } from "react";

import { Box, SxStyleProp } from 'rebass'
import { subArray } from '../game/subArray'

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

    }

    render() {
        return (
            <>
                <Box sx={{
                    display: 'inline-grid',
                }}>
                    <Box className="Stat" style={subStyle.style}>
                        {this.name}
                    </Box>
                    <Box className="Amount" style={subStyle.style}>
                        Two
                    </Box>
                </Box>
            </>
        )
    }
}