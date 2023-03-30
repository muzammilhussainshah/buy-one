import React, { useState } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AddIcon from '@mui/icons-material/Add';
import MoodIcon from '@mui/icons-material/Mood';

import Colors from '../../../styles/Colors';
import '../style.css'
import MyButton from '../../../components/MyButton';

export const CustomInput = ({ inputTitle, placeholder, multiLine, helperText, input1Style, input2Style, helperTextStyle, doubleInput, placeholder2 }) => {
    const [text, setText] = useState("");

    const handleChange = (event) => setText(event.target.value);

    return (
        <div>
            <p className='AddressInputTitle'>{inputTitle}</p>
            {multiLine ?
                <textarea value={text} className='inputForm multiText' onChange={handleChange} />
                :
                doubleInput ?
                    <div className='doubleInputContainer'>
                        <OutlinedInput
                            className='inputForm'
                            sx={input1Style}
                            placeholder={placeholder} />
                        <OutlinedInput
                            className='inputForm'
                            sx={input2Style}
                            placeholder={placeholder2} />
                    </div>
                    :
                    <OutlinedInput className='inputForm' placeholder={placeholder} />
            }
            {helperText && <p className={helperTextStyle}>{helperText}</p>}
        </div>
    )
}



export const Cart = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className='orderHeader' style={{ justifyContent: 'flex-start' }}>
                <p className='orderHeaderBtn'>店鋪: 蘇寧易購官方旗艦店</p>
                <p className='orderHeaderBtn' style={{ marginLeft: '1vw', marginRight: '1vw' }}> <MoodIcon sx={{ fontSize: '1.5vw', color: 'green', }} /> </p>
                <p className='orderHeaderBtn makeAnchr'>customer service</p>
            </div>
            <div className='cartContainer' >
                <div className="productImgContainer">
                    <div className='imgContainer'>< PermMediaIcon sx={{ fontSize: '5vw', color: Colors.tabInactive }} /></div>
                </div>
                <div className="productImgContainer2">

                    <p className='orderHeaderBtn simple'>ASTM Level 3 成人三層衛生口罩(175mmx95mm) -藍色 30個</p>
                    <div style={{
                        display: 'flex', justifyContent: "space-between"
                    }}>
                        <p className='orderHeaderBtn simple'>顏色分類：淺棕色</p>
                        <p className='orderHeaderBtn simple' style={{ textAlign: 'end' }}>修改</p>
                    </div>
                    <div>
                        <p className='orderHeaderBtn simple' style={{ marginBottom: '0px' }}>移入收藏夾</p>
                        <p className='orderHeaderBtn simple' style={{ marginTop: '0px', }}>刪除</p>
                    </div>

                </div>
                <div className='pricing'>
                    <p className='orderHeaderBtn priceText'   >$760.00</p>
                </div>
                <div className='pricing'>
                    <div onClick={() => { if (count > 0) setCount(count - 1) }}
                        className='makeBox makeAnchr'><RemoveOutlinedIcon sx={{ fontSize: '1.5vw' }} /></div>
                    <div className='makeBox'>{count}</div>
                    <div
                        onClick={() => { if (count < 10) setCount(count + 1) }}
                        className='makeBox makeAnchr'><AddIcon sx={{ fontSize: '1.5vw' }} /></div>
                </div>
                <div className='pricing'>
                    <p className='orderHeaderBtn priceText blue'   >$760.00</p>
                </div>
            </div>
        </>
    )
}




export const OrderHeader = () => {
    return (
        <>
            <p className='AddressHeading2'>
                確認訂單信息
            </p>
            <div className='orderHeader'>
                <p className='orderHeaderBtn'>店鋪名稱</p>
                <p className='orderHeaderBtn'>產品內容</p>
                <p className='orderHeaderBtn'>單價</p>
                <p className='orderHeaderBtn'>數量</p>
                <p className='orderHeaderBtn'>金額</p>
            </div>
        </>
    )
}


export const CheckBox = ({ label }) => {
    const [check, setCheck] = useState(true)
    return (
        <button
            onClick={() => setCheck(!check)}
            className="checkBoxContainer"
        >
            {check ?
                <CheckBoxOutlineBlankIcon sx={{ fontSize: '2.5vw' }} />
                :
                <CheckBoxOutlinedIcon sx={{ fontSize: '2.5vw' }} />
            }
            <p className='AddressInputTitle'>{label}</p>
        </button>
    )
}
export const MasterCard = ({ label }) => {
    return (
        <div className='paymentModalComponent'>
            <div className='paymentModalChildContainer'>
                <div className='paymentModalHeader'>
                    <p className='AddressHeading paymentModalHeading'>
                        Buyone 網上付款平台
                    </p>
                </div>
                <div className='addressInputBody'>
                    <p className='AddressInputTitle'>
                        請輸入卡號
                    </p>
                    <div className='paymentCartContainer'>
                        <div className='paymentCartHeader spaceBetween'>
                            <div className='paymentCartHeader'>
                                <RadioButtonCheckedIcon sx={{ fontSize: '1vw', color: Colors.primary }} />
                                <img
                                    src={require('../../../assets/Repeat Grid 3.png')}
                                    className="paymentCartHeaderMasterLogo"></img>
                                <p className='orderHeaderBtn simple mastercard' >mastercard</p>
                            </div>
                            <p className='orderHeaderBtn simple mastercard' >******* 2959</p>
                            <p className='orderHeaderBtn simple mastercard makeAnchr' >新增銀行卡付款</p>
                        </div>
                        <div className='cartInputContainer'>
                            <div style={{ width: '60%' }}>
                                <CustomInput
                                    inputTitle={`卡號:`}
                                    placeholder={"請輸入銀行卡號"} />

                            </div>
                            <CustomInput
                                inputTitle={`有效期:`}
                                placeholder={"月/年"} />
                            <CustomInput
                                inputTitle={`安全碼:`}
                                placeholder={"CCV"} />

                        </div>
                    </div>
                    <div className='cartCheckboxContainer'>
                        <CheckBox label={`本人 確應付款無誤`} />
                    </div>
                    <div className='cartCheckboxContainer paymentcartButton'>
                        <MyButton
                            label='立即付款'
                            className={'confirmationBtn'}
                            // onClick={() => alert()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}