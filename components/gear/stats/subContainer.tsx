import { Box } from 'rebass'
import GearSub from './GearSub'
import { subArray } from '../game/subArray'
import { Component } from 'react';

const firstStat = new GearSub({id:"firstStat", stat:subArray[0]});
const secondStat = new GearSub({id:"secondStat", stat:subArray[1]});
const thirdStat = new GearSub({id:"thirdStat", stat:subArray[2]});
const fourthStat = new GearSub({id:"fourthStat", stat:subArray[3]});

export default class subContainer extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Box>
                Hello
            </Box>
        )
    }

}