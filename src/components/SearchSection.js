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

function SearchSection() {
    return (
        <div
            style={searchBarSection()}
        >
            <div
                style={searchBarContainer()}
            >
                <div style={searchBar()}>
                    <TextField
                        variant="standard"
                        placeholder='搜尋商品'
                        sx={inputStyle()}
                        InputProps={{
                            disableUnderline: true,
                            style: { fontSize: '1vw' }
                        }}
                    />
                    <button
                        className='searchButtonsHover'
                        style={searchBarBtn()}>
                        {`搜尋`}
                    </button>
                </div>
            </div>
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
                    style={rightButton()}
                    label="登 " />
            </div>
        </div>
    );
}


export default SearchSection;
