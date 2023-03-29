import React, { useState } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import Colors from '../../../styles/Colors';
import '../style.css'
import { TextField } from '@mui/material';
import { height } from '@mui/system';

export const CustomInput = ({ inputTitle, placeholder, multiLine, helperText, helperTextStyle, doubleInput }) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <p className='AddressInputTitle'>
                {/* Address Information: */}
                {inputTitle}
            </p>
            {multiLine ?
                // <div style={{ height: '9vw',overflow:'hidden' }}>
                // <TextField
                //     id="outlined-multiline-static"
                //     multiline
                //     rows={4}
                //     className='inputForm multiText'
                //     // sx={{ height: '9vw' }}
                //     InputProps={{ style: { borderRadius: '0px', height: '10vw' } }}
                //     value={text}
                //     onChange={handleChange}
                // />
                <textarea
                    value={text}
                    className='inputForm multiText'
                    onChange={handleChange} />

                // </div>
                :
                doubleInput ?
                    <div style={{ display: 'flex',justifyContent:'space-between',width:'90%'}}>
                        <OutlinedInput
                            className='inputForm doubleInput'
                            sx={{display:'flex',flex:3,marginRight:'.5vw'}}
                            placeholder={placeholder} />
                        <OutlinedInput
                            className='inputForm doubleInput'
                            sx={{display:'flex',flex:7,marginLeft:'.5vw'}}
                            placeholder={placeholder} />
                    </div>
                    :
                    <OutlinedInput
                        // sx={{borderRadius:0,height:'4vw'}}
                        className='inputForm'
                        placeholder={placeholder} />
            }
            {helperText &&
                <p className={helperTextStyle}>
                    {helperText}
                </p>
            }
        </>
    )
}