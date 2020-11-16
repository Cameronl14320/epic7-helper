import { Component } from "react";

import { Box } from 'rebass'

const subStyle = {
    style: {
        gridRow: 1,
        padding: '0px 5px 0px 5px',
    }
}

export default class GearSub extends Component<{}, {name : string, min : number, max : number}> {

    name: string;
    min: number;
    max: number;

    constructor(props) {
        super(props);
        this.name = props.name;
        this.min = props.min;
        this.max = props.max;
    }

    render() {
        return (
            <>
                <Box sx={{
                    display: 'inline-grid',
                }}>
                    <Box style={subStyle.style}>
                        {this.name}
                    </Box>
                    <Box style={subStyle.style}>
                        Two
                    </Box>
                </Box>
            </>
        )
    }
}