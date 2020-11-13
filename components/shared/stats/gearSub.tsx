import { Component } from "react";

import { Box } from 'rebass'

export default class gearSub extends Component {
    description : string;

    constructor(props) {
        super(props)
        this.description = props.description
    }

    render() {
        return (
            <>
                <Box sx={{
                    display: 'inline-grid',
                }}>
                    <Box>
                        {this.description}
                    </Box>
                    <Box>
                        Percentage
                    </Box>
                </Box>
            </>
        )
    }
}