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
const MasterCardHeader = ({ label, label2 }) => {
    return (
        <>
            <div className='paymentModalHeader'>
                <p className='AddressHeading paymentModalHeading'>
                    {label ? label : 'Buyone 網上付款平台'}
                </p>
                {label2 &&
                    <p className='AddressHeading paymentModalHeading'>
                        {label2}
                    </p>
                }
            </div>
        </>
    )
}
const MasterCardBody = () => {
    return (
        <>

            <div className='paymentCartContainer'>
                <div className='paymentCartHeader spaceBetween'>
                    <div className='paymentCartHeader'>
                        <RadioButtonCheckedIcon sx={{ fontSize: '1vw', color: Colors.primary }} />
                        <img
                            src={require('../../../assets/Repeat Grid 3.png')}
                            className="paymentCartHeaderMasterLogo"></img>
                        <p className='orderHeaderBtn simple mastercard' >mastercard</p>
                    </div>
                    <p className='orderHeaderBtn simple mastercard' style={{ width: '35%', }} >******* 2959</p>
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
                />
            </div>
        </>
    )
}
const CardCategoryBody = ({ setOpenCategory }) => {
    return (
        <div className='paymentCartCategoryContainer'>
            <div style={{ display: 'flex', flex: 1 }}>
                <div onClick={() => {
                    setOpenCategory(true)
                }} className='paymentCardContainer'>
                    <img src={require('../../../assets/Repeat Grid 3.png')} className='paymentCardImgStyle' />
                </div>
                <div onClick={() => {
                    setOpenCategory(true)
                }} className='paymentCardContainer'>
                    <img src={require('../../../assets/E2-OC1.png')} className='paymentCardImgStyle' />
                </div>
                <div onClick={() => {
                    setOpenCategory(true)
                }} className='paymentCardContainer'>
                    <img src={require('../../../assets/E2-OC1-1.png')} className='paymentCardImgStyle' />
                </div>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>
                <div onClick={() => {
                    setOpenCategory(true)
                }} className='paymentCardContainer'>
                    <img src={require('../../../assets/E2-AE1.png')} className='paymentCardImgStyle' />
                </div>
                <div onClick={() => {
                    setOpenCategory(true)
                }} className='paymentCardContainer'>
                    <img src={require('../../../assets/E2-visa1.png')} className='paymentCardImgStyle' />
                </div>
                <div onClick={() => {
                    setOpenCategory(true)
                }} className='paymentCardContainer'>
                    <img src={require('../../../assets/E2-UN1.png')} className='paymentCardImgStyle' />
                </div>
            </div>
        </div>

    )
}
const PrivacyPolicyCardBody = ({ setOpenCategory }) => {
    return (
        <>
            <div className='PrivacyPolicyCardBody'>
                <p className='masterCardHeading'  >
                    關於個人相關資料提供的增加項目
                </p>
                <p className='masterCardHeading'  >
                    本次增加了以下項目。
                </p>
                <p className='masterCardHeading letterSpace'  >
                    7. 個人相關資料的提供<br />
                    本公司從訪問解析、廣告以及成果報酬型廣告業者等利用個人相關資料的營運商處獲得客戶在該網站的瀏覽資訊、位置資訊、年齡性別、設備/OS/網路、興趣及關注、參照源以及購買資訊等個人相關資料（指個人資料保護法中規定的個人相關資料。下同），將之用於統計資料製作、服務改善以及廣告等目的。<br />
                    關於個人資料適用於日本境外營運商的增加項目

                </p>
                <p className='masterCardHeading'  >
                    本次增加了以下項目。
                </p>
                <p className='masterCardHeading letterSpace'  >
                    10. 向日本境外營運商提供個人資料<br />
                    本公司使用日本境外營運商的廣告投放服務和分析服務時，為了向客戶投放更有關連的廣告、了解與分析使用情況、改善服務，我們可能向日本境外營運商提供個人資料。關於各營運商的個人資料保護措施以及該國的個人資料保護制度，請參閱以下連結。<br />
                    ・Meta Platforms, Inc. (Facebook)：美國（加利福尼亞州）<br />
                    ・Google LLC：美國（加利福尼亞州）<br />其他
                </p>
                <p className='masterCardHeading'  >
                    本次增加了應用程式隱私政策。
                </p>
            </div>
            <div className='cartCheckboxContainer'>
                <CheckBox label={`同意隱私政策。`} />
            </div>
            <div className='cartCheckboxContainer paymentcartButton'>
                <MyButton
                    label='同意隱私政策,開始使用Buyone'
                    className={'confirmationBtn'}
                />
            </div>
        </>

    )
}
export const MasterCard = ({ PrivacyPolicyCard, label, label2 }) => {
    const [openCategory, setOpenCategory] = useState(false)
    return (
        <div className='paymentModalComponent'>
            <div className='paymentModalChildContainer'>
                <MasterCardHeader label2={label2} label={label} />
                <div className='addressInputBody'>
                    {!PrivacyPolicyCard ?
                        <p className='masterCardHeading'>

                            {!openCategory ? `請選擇付款方式` : `請輸入卡號`}
                        </p> :
                        <p className='masterCardHeading' style={{ width: '65%' }}>
                            感謝您使用Buyone的服務。<br />
                            我們於2022年8月31日進行了隱私政策的修訂，特此通知。

                        </p>

                    }
                    {PrivacyPolicyCard ? <PrivacyPolicyCardBody /> :
                        openCategory ?
                            <MasterCardBody setOpenCategory={setOpenCategory} />
                            :
                            <CardCategoryBody setOpenCategory={setOpenCategory} />
                    }
                </div>
            </div>
        </div>
    )
} 