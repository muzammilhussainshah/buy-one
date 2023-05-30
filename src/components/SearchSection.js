import React from 'react';

import { TextField } from '@mui/material';

import MyButton from './MyButton';
import {
    inputStyle,
    leftPanelButtonContainer,
    rightButton,
    searchBar,
    searchBarBtn,
    searchBarContainer,
    searchBarSection
} from '../pages/Home/styles';


export const SearchBarWithBtn = ({ width, outLine, placeHolder, btnText }) => {
    return (
        <div
            style={searchBarContainer()}
        >
            <div style={searchBar(width ? width : '50%', outLine)}>
                <TextField
                    variant="standard"
                    placeholder={placeHolder ? placeHolder : '搜尋商品'}
                    sx={inputStyle()}
                    InputProps={{
                        disableUnderline: true,
                        style: { fontSize: '1vw' }
                    }}
                />
                <button
                    className='searchButtonsHover'
                    style={searchBarBtn()}>
                    {btnText ? btnText : `搜尋`}
                </button>
            </div>
        </div>
    )
}

function SearchSection({ widthOutBtn }) {
    return (
        <div
            style={searchBarSection()}
        >
            <SearchBarWithBtn />
            {!widthOutBtn &&
                <div
                    style={leftPanelButtonContainer()}
                >
                    {['食品及飲品', '酒類', '美食預訂', '調味料', '水果', '醬料', '個人護理', '寵物食品', '更多'].map((item) => {
                        return (
                            <MyButton
                                style={{ fontSize: '0.9vw', border: '0px', }}
                                label={<span style={{ margin: 0 }}>{item}</span>} />
                        )
                    })}
                    <MyButton
                        className={'makeAnchr buttonsHover'}
                        style={rightButton()}
                        label="登 " />
                </div>
            }
        </div>
    );
}


export default SearchSection;
