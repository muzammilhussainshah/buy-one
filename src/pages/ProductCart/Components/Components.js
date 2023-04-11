import React from 'react';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Colors from '../../../styles/Colors';

export const ProductImg = () => {
    return (
        <div className='productSideImg'>
            <PhotoLibraryIcon sx={{ fontSize: '6vw', color: Colors.tabInactive }} />
        </div>
    )
}

export const DropDown = ({ maxWidth }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => { setAge(event.target.value); };
    return (
        <FormControl sx={{ maxWidth: maxWidth && maxWidth }}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{
                    height: '2vw',
                    fontSize: '1vw',
                    borderRadius: '0px',
                    margin: '.5vw 0px 0vw 1.5vw',
                    '.MuiSelect-icon': {
                        fontSize: '2vw',
                    },
                    '.MuiMenuItem-root': {
                        backgroundColor: 'red',
                        height: '5vw',
                    },
                }}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem sx={{ fontSize: '1vw', }} value="">
                    <em>None</em>
                    {/* None */}
                </MenuItem>
                <MenuItem sx={{ fontSize: '1vw', }} value={10}>
                    Ten
                </MenuItem>
                <MenuItem sx={{ fontSize: '1vw', }} value={20}>
                    Twenty
                </MenuItem>
                <MenuItem sx={{ fontSize: '1vw', }} value={30}>
                    Thirty
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export const TimeUi = ({ name, value, red }) => {
    return (
        <div className='timeLeftContainer'>
            <p className='rightPanelHeading AddressInputTitle2'>{name}</p>
            <p className={`rightPanelHeading AddressInputTitle2 priceText ${red && 'timeValue'}`}>{value}</p>
        </div>
    )
}