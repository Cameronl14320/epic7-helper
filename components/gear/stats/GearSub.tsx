import { Component } from "react";
import { Box, SxStyleProp } from 'rebass'
import { Label, Input } from '@rebass/forms'
import statObject from "../game/statObject";

const subStyle = {
    style: {
        padding: '0px 5px 0px 5px',
        fontSize: '1.5em',
    },
    substat: {
        maxHeight: '1.5em'
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
                marginLeft: '10px',
                marginRight: '10px',
            }} id={this.id + "-GearSub-Wrapper"}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr);',
                    gridTemplateAreas: "\"a a a a b\" \"a a a a b\"",
                    width: '100%',
                    gap: '10px',
                }}>
                    <Box id={this.id} sx={{
                        gridArea: 'a',
                        textAlign: 'left',
                        fontSize: subStyle.substat.maxHeight,
                    }}>
                        {this.stat.name}
                    </Box>
                    <Box id={this.id + "-GearSub-Value"} sx={
                        {
                            gridArea: 'b',
                            height: '100%',
                        }
                    }>
                        <Input id={this.id + "-GearSub-Value-Input"} type="number" style={{
                            WebkitAppearance: "none",
                            MozAppearance: "textfield",
                            maxWidth: '75px',
                            padding: '0',
                            height: '100%',
                            borderRadius: '5px',
                            textAlign: 'center',

                        }}  onChange={(e) => {
                                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2); // only allow two characters
                                this.value = e.target.valueAsNumber; console.log(this.value); // Update current value
                            }} >
                        </Input>
                    </Box>
                </Box>
            </Box>
        )
    }
}
