import React, { useState } from 'react';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaRegEdit } from "react-icons/fa";

import Colors from '../../../styles/Colors';

export const ProductImg = ({ edit }) => {
    return (
        <div className={edit ? `productSideImg2` : `productSideImg`}>
            {edit && <FaRegEdit className="edit-icon productCardEditIcon" />}
            <PhotoLibraryIcon sx={{ fontSize: '6vw', color: Colors.tabInactive, width: "100%" }} />
        </div>
    )
}

export const DropDown = ({ maxWidth, autoWidth, height }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => { setAge(event.target.value); };
    return (
        <FormControl sx={{ maxWidth: maxWidth && maxWidth, width: autoWidth ? autoWidth : 'auto' }}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{
                    height: height ? height : '2vw',
                    fontSize: '1vw',
                    borderRadius: '0px',
                    margin: autoWidth ? '0vw' : '.5vw 0px 0vw 1.5vw',
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

export const RadioButtons = ({ value, selectedValue, label, handleRadioChange }) => {
    return (
        <div className='radioButtonContainer'>
            <input
                type="radio"
                id={value}
                value={value}
                checked={selectedValue === value}
                onChange={handleRadioChange}
                style={{
                    transform: `scale(${window.innerWidth * 0.001})`,
                    marginRight: '1vw',
                }}
            />
            <label style={{
                fontSize: '1.1vw', fontWeight: "normal",
            }} htmlFor={value}>{value}</label>
        </div>

    )
}


export const RadioSection = ({ value, label, selectedValue, handleRadioChange }) => {
    return (
        <div className='EditProductCartRadioButtons'>
            <RadioButtons value={value} selectedValue={selectedValue} handleRadioChange={handleRadioChange} label={label} />
            <p className='rightPanelHeading  AddressInputTitle2 makeAnchr buttonsHover '>{`修改`}</p>
        </div>
    )
}


export const ClassificationHeader = ({ title, disableBtn }) => {
    return (
        <div className='classificationHeader'>
            <p className='removeMargin rightPanelHeading'  >{title}</p>
            {!disableBtn &&
                <div className='classificationHeaderRightBtns'>
                    <p className='rightPanelHeading AddressInputTitle2 makeAnchr buttonsHover'>{`新增分類`}</p>
                    <p className='rightPanelHeading AddressInputTitle2 makeAnchr buttonsHover '>{`修改`}</p>
                </div>
            }
        </div>
    )
}

export const OptionCart = ({ edit, title, desc, img, color, transportation, bgColor }) => {
    const [productPriceValue, setProductPriceValue] = useState(20.50);
    return (
        <div className={'optionCart'} style={{ backgroundColor: bgColor }}>
            <div className='optionCartImgContainer'>
                {transportation ?
                    img ? img : <ProductImg edit={edit} />
                    :
                    <ProductImg edit={edit} />
                }
            </div>
            <div className={transportation ? 'optionCartBodyContainerTransportation' : 'optionCartBodyContainer'}>
                <div>
                    <p className='rightPanelHeading AddressInputTitle2 priceText  ' style={{ width: '80%', color: color }}>{title}</p>
                    <p className='rightPanelHeading  AddressInputTitle2 addMarginY ' style={{ width: '80%', color: color }}>{desc}</p>
                </div>
                {transportation ?

                    <div className='transportationFooterContainer'>
                        <p className='removeMargin rightPanelHeading' style={{ fontSize: '1.5vw', color: color }} >
                            {`$ ${productPriceValue.toFixed(2)} 港元`}
                        </p>
                        <div className='productCardEditArrowIconContainer'>
                            <ArrowDropUpIcon
                                onClick={() => setProductPriceValue(productPriceValue + 1)}
                                className='productCardEditArrowIcon' style={{ backgroundColor: color, color: bgColor }} />
                            <ArrowDropDownIcon
                                onClick={() => { if (productPriceValue >= 1) setProductPriceValue(productPriceValue - 1) }}
                                className='productCardEditArrowIcon' style={{ backgroundColor: color, color: bgColor }} />
                        </div>
                    </div>
                    :
                    <p className='rightPanelHeading  AddressInputTitle2 makeAnchr buttonsHover '>{`修改`}</p>
                }
            </div>
        </div >
    )
} 