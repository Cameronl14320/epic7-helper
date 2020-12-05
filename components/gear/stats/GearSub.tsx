import { Component } from "react";
import { Box, SxStyleProp } from 'rebass'
import { Label, Input } from '@rebass/forms'
import statObject from "../game/statObject";

const subStyle = {
    style: {
        gridRow: 1,
        padding: '0px 5px 0px 5px',
    }
}

export default class GearSub extends Component<{}, {id : string, stat : statObject}> {

    stat : statObject;
    id : string;
    value : number = 0;

    constructor(props) {
        super(props);
        this.id = props.id;
        this.stat = props.stat;
    }

    changeStat(newStat : statObject) {
        this.stat = newStat;
        var statLeft = document.getElementById(this.id);
        var statRight = document.getElementById(this.id + "-GearSub-Value");
        statLeft.textContent = this.stat.name;
    }

    toggleDisplay(display : boolean) {
        var wrapper = document.getElementById(this.id+"-GearSub-Wrapper");
        if (display) {
            wrapper.style.display = "block";
        } else {
            wrapper.style.display = "none";
        }
    }

    returnValue() {
        return this.value;
    }

    render() {
        return (
            <Box style={{
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
                display: "block",
            }} id={this.id + "-GearSub-Wrapper"}>
                <Box sx={{
                    display: 'inline-grid',
                    background: 'white',               
                }}>
                    <Box id={this.id} sx={subStyle.style}>
                        {this.stat.name}
                    </Box>
                    <Box id={this.id + "-GearSub-Value"} sx={subStyle.style}>
                        <Input id={this.id + "-GearSub-Value-Input"} type="number" onChange={(e) => {this.value = e.target.valueAsNumber; console.log(this.value)}} style={{
                            height: "10px",
                            WebkitAppearance: "none",
                            MozAppearance: "textfield",
                            margin: 0,
                        }}>
                        </Input>
                    </Box>
                </Box>
            </Box>
        )
    }
}