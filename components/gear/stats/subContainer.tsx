import { Box } from 'rebass'
import GearSub from './GearSub'
import { subArray } from '../game/subArray'
import { Component } from 'react';

const firstStat = new GearSub({key: "firstStat", id:"firstStat", stat:subArray[0]});
const secondStat = new GearSub({key: "secondStat", id:"secondStat", stat:subArray[1]});
const thirdStat = new GearSub({key: "thirdStat", id:"thirdStat", stat:subArray[2]});
const fourthStat = new GearSub({key: "fourthStat", id:"fourthStat", stat:subArray[3]});

export default class subContainer extends Component {
    
    constructor(props) {
        super(props);
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