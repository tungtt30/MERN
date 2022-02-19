import * as React from 'react';
import style from './sam.module.css'
import { useState } from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';





export default function Sam() {
    const [playerName1, setPlayerName1] = useState('')
    const [playerName2, setPlayerName2] = useState('')
    const [playerName3, setPlayerName3] = useState('')
    const [playerName4, setPlayerName4] = useState('')
    const [playerName5, setPlayerName5] = useState('')
    const [slot, setSlot] = useState()

    const playerNumber = [1, 2, 3, 4, 5]

    const handleChangeInputName = (e) => {
        setSlot(e.target.value)
    }


    const handleChange = (e) => {
        switch (slot) {
            case 's1':
                setPlayerName1(e.target.value)
                break;
            case 's2':
                setPlayerName2(e.target.value)
                break;
            case 's3':
                setPlayerName3(e.target.value)
                break;
            case 's4':
                setPlayerName4(e.target.value)
                break
            case 's5':
                setPlayerName5(e.target.value)
                break
            default:
                alert('Chọn slot đã !!')
                break;
        }

    }
    const handleChangeValue = () => {

    }





    return (
        <div className={style["bg"]}>
            <div className={style["table-container"]}>
                <div>
                    <Box sx={{
                        '& > :not(style)': { m: 1, width: '25ch', },
                    }}
                    >
                        <FormControl autoWidth={true} color='secondary'>
                            <InputLabel id="demo-simple-select-label">Player</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Slot"
                                onChange={handleChangeInputName}
                            >
                                <MenuItem value='s1'>S1</MenuItem>
                                <MenuItem value='s2'>S2</MenuItem>
                                <MenuItem value='s3'>S3</MenuItem>
                                <MenuItem value='s4'>S4</MenuItem>
                                <MenuItem value='s5'>S5</MenuItem>

                            </Select>
                        </FormControl>
                        <TextField onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" />
                    </Box>
                </div>


                <table class={style["table"]} >
                    <thead className={style["tHead"]}>
                        <tr className={style['PlayerName']}>
                            <th scope="col">{playerName1}</th>
                            <th scope="col">{playerName2}</th>
                            <th scope="col">{playerName3}</th>
                            <th scope="col">{playerName4}</th>
                            <th scope="col">{playerName5}</th>
                        </tr>
                        <tr>
                            {playerNumber.map((index) => {
                                return (<th>
                                    <FormControl key={index} autoWidth={true} color='secondary'>
                                        <InputLabel id="demo-simple-select-label">?</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            label='#'
                                            onChange={handleChangeValue}
                                        >
                                            <MenuItem value='-1'>-1</MenuItem>
                                            <MenuItem value='-2'>-2</MenuItem>
                                            <MenuItem value='-3'>-3</MenuItem>
                                            <MenuItem value='-4'>-4</MenuItem>
                                            <MenuItem value='-5'>-5</MenuItem>
                                            <MenuItem value='-6'>-6</MenuItem>
                                            <MenuItem value='-7'>-7</MenuItem>
                                            <MenuItem value='-8'>-8</MenuItem>
                                            <MenuItem value='-9'>-9</MenuItem>
                                            <MenuItem value='-10'>-10</MenuItem>
                                            <MenuItem value='-15'>-15</MenuItem>
                                            <MenuItem value='-20'>-20</MenuItem>
                                        </Select>
                                    </FormControl>
                                </th>)
                            })}

                        </tr>
                    </thead>
                    <tbody className={style["tBody"]}>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
                <Button variant="outlined" style={{ margin: '20px 40px' }}>Click</Button>
            </div>
        </div>
    );
}