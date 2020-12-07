import { Component } from "react";
import { Box, SxStyleProp } from 'rebass'
import { Label, Input } from '@rebass/forms'
import statObject from "../game/statObject";

const subStyle = {
    wrapper: {
        MozUserSelect: "none",
        WebkitUserSelect: "none", 
        msUserSelect: "none",
        display: "block",
        marginLeft: '10px',
        marginRight: '10px',
    },
    subGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr);',
        gridTemplateAreas: "\"a a a a b\" \"a a a a b\"",
        width: '100%',
        gap: '10px',
        paddingY: '5px',

        stat: {
            gridArea: 'a',
            textAlign: 'left',
            fontSize: '1.5em',
        },
        value: {
            gridArea: 'b',
            height: '100%',

            input: {
                WebkitAppearance: "none",
                MozAppearance: "textfield",
                maxWidth: ['75px', '100px', '125px'],
                padding: '0',
                height: '100%',
                borderRadius: '5px',
                textAlign: 'center',
                background: 'white',
                border: 'none',
            }
        }
    },
    style: {
        padding: '0px 5px 0px 5px',
        fontSize: '1.5em',
    },
}

export default class GearSub extends Component<{}, {id : string, stat : statObject}> {

    private stat : statObject;
    private id : string;
    private value : number = 0;

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
            <Box id={this.id + "-GearSub-Wrapper"} sx={subStyle.wrapper}>
                <Box sx={subStyle.subGrid}>
                    <Box id={this.id} sx={subStyle.subGrid.stat}>
                        {this.stat.name}
                    </Box>

                    <Box id={this.id + "-GearSub-Value"} sx={subStyle.subGrid.value}>
                        <Input id={this.id + "-GearSub-Value-Input"} placeholder='Value' type='number' sx={subStyle.subGrid.value.input}
                        onChange={(e) => {
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
