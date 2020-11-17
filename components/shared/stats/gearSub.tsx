import { Component } from "react";

import { Box, SxStyleProp } from 'rebass'

const subStyle = {
    style: {
        gridRow: 1,
        padding: '0px 5px 0px 5px',
    }
}

export default class GearSub extends Component<{}, {id : number, name : string, min : number, max : number, substats : Array<SxStyleProp>}> {

    id : number;
    name: string;
    min: number;
    max: number;
    substats : Array<SxStyleProp>;

    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.min = props.min;
        this.max = props.max;
        this.substats = props.substats;
    }

    changeStat() {
        var totalStats = this.substats.length;

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