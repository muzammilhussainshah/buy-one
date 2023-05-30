import React, { useEffect, useState } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AddIcon from '@mui/icons-material/Add';
import MoodIcon from '@mui/icons-material/Mood';

import Colors from '../../../styles/Colors';
import MyButton from '../../../components/MyButton';
import '../style.css'

export const CustomInput = ({
    inputTitle,
    placeholder,
    multiLine,
    icon,
    helperText,
    input1Style,
    input2Style,
    helperTextStyle,
    doubleInput,
    placeholder2 }) => {

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
                    icon ?
                        <div style={{ display: 'flex' }}>
                            <div className='inputIconContainer'>
                                {icon}
                            </div>
                            <div className='inputIconRightContainer'>
                                <OutlinedInput className='inputForm' placeholder={placeholder} />
                            </div>
                        </div>
                        :
                        <OutlinedInput className='inputForm' placeholder={placeholder} />
            }
            {helperText && <p className={helperTextStyle}>{helperText}</p>}
        </div>
    )
}


export const LogisticManagementCart = () => {
    return (
        <>
            <div className="productImgContainer2" style={{ flex: 6, flexDirection: 'row', padding: '1.5vw 0vw' }}>
                <div className='goodsContainer'>
                    <div>
                        <button className={`goodsBtn`}>{'貨物'}</button>
                        <p className='orderHeaderBtn fontWeightNormal' >交易訂單號：2579127733766131261</p>
                    </div>

                    <div>
                        <p className='AddressInputTitle'>{`運單號：L5311543`}</p>
                        <p className='AddressInputTitle'>{`物流商：- -`}</p>
                    </div>
                </div>
                <div className='goodsContainer'>
                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter'  >0公斤</p>
                </div>
                <div className='goodsContainer'>
                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter'  >0公斤</p>
                </div>
                <div className='goodsContainer'>
                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter'  >0日</p>
                </div>
                <div className='goodsContainer'>
                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter' style={{ width: "40%", margin: 'auto' }} >等待貨物到達倉庫</p>
                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter makeAnchr buttonsHover'  > 查看物流</p>
                </div>
            </div>
        </>
    )
}
export const LogisticManagementPagesCart = () => {
    return (
        <>

            <div className="productImgContainer2 logisticManagementPagesCartContainer">

                <div className='goodsContainer goodContainer3'>
                    <div >

                        <div className='goodsStockBtnContainer'>
                            <button className={`goodsBtn`}>{'已出庫'}</button>
                            <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter ' style={{ width: "50%" }}  >含9件</p>
                        </div>

                        <p className='orderHeaderBtn priceText removeMargin'>2022-04-16</p>

                        <p className='orderHeaderBtn fontWeightNormal removeMargin' >運輸訂單號：2579127733766131261</p>

                    </div>

                    <div>
                        <p className='AddressInputTitle'>{`運單號：L5311543`}</p>
                        <p className='AddressInputTitle'>{`物流商：- -`}</p>
                    </div>

                </div>

                <div className='goodsContainer goodsContainer4'>

                    <p className='priceText removeMargin textAlignCenter transportTitle'>物流運輸：買一官方運輸</p>

                    <div>
                        <p className='orderHeaderBtn priceText removeMargin textAlignCenter'>集運</p>
                        <p className='orderHeaderBtn priceText removeMargin textAlignCenter'>送貨上門</p>
                    </div>

                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter'  > 查看物流</p>

                </div>

                <div className='goodsContainer goodContainer2'>
                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter' >$71.00</p>
                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter' >( 6.72公斤)</p>
                </div>

                <div className='goodsContainer goodContainer2' style={{ borderRight: '0px solid black' }}>
                    <p className='orderHeaderBtn fontWeightNormal removeMargin textAlignCenter blue'  >確認收貨</p>
                    <p className='  fontWeightNormal removeMargin textAlignCenter makeAnchr buttonsHover' style={{ fontSize: '1vw' }} >退款/投訴</p>
                </div>

            </div>
        </>
    )
}
export const Cart = ({ checkBox, label, LogisticManagementPages, LogisticManagement }) => {
    const [count, setCount] = useState(0)
    const [checkState, setcheckState] = useState(LogisticManagementPages ? false : true)
    const [price, setPrice] = useState('760.00')

    const handleCheck = () => { setcheckState(!checkState) }

    return (
        <>

            <div
                onClick={handleCheck}
                className='orderHeader' style={{ justifyContent: 'flex-start' }}>
                {!LogisticManagementPages && LogisticManagement &&
                    <CheckBox
                        state={checkState}
                        label={label}
                        className="marginAdd1 orderHeaderBtn" />
                }

                {!LogisticManagement &&
                    <>
                        {checkBox ?
                            <CheckBox
                                state={checkState}
                                label={label}
                                className="marginAdd1 orderHeaderBtn" />
                            :
                            <p className='orderHeaderBtn'>店鋪: 蘇寧易購官方旗艦店</p>
                        }
                        <p className='orderHeaderBtn' style={{ marginLeft: '1vw', marginRight: '1vw', display: 'flex', justifyContent: 'center' }}> <MoodIcon sx={{ fontSize: '1.5vw', color: 'green', }} /> </p>
                        <p className='orderHeaderBtn makeAnchr fontWeightNormal buttonsHover'>customer service</p>
                    </>
                }
            </div>
            <div
                className={checkState ? `disablecartContainer` : `cartContainer ${LogisticManagementPages && 'LogisticManagementPagesCartContainer'}`} >
                <div className="productImgContainer" style={{ justifyContent: LogisticManagement ? 'center' : 'flex-end' }}>
                    {checkBox &&
                        <div
                            onClick={handleCheck}
                            className='productImgCheckBox'>
                            <CheckBox state={checkState} />
                        </div>
                    }
                    <div className='imgContainer'>< PermMediaIcon sx={{ fontSize: '5vw', color: Colors.tabInactive }} /></div>
                </div>
                {
                    LogisticManagementPages ?
                        <LogisticManagementPagesCart />
                        :
                        LogisticManagement ?
                            <LogisticManagementCart />
                            :
                            <>
                                <div className="productImgContainer2">

                                    <p className='orderHeaderBtn simple'>ASTM Level 3 成人三層衛生口罩(175mmx95mm) -藍色 30個</p>
                                    <div style={{
                                        display: 'flex', justifyContent: "space-between"
                                    }}>
                                        <p className='orderHeaderBtn simple'>顏色分類：淺棕色</p>
                                        <p className='orderHeaderBtn simple makeAnchr buttonsHover' style={{ textAlign: 'end' }}>修改</p>
                                    </div>
                                    <div>
                                        <p className='orderHeaderBtn simple' style={{ marginBottom: '0px' }}>移入收藏夾</p>
                                        <p className='orderHeaderBtn simple' style={{ marginTop: '0px', }}>刪除</p>
                                    </div>

                                </div>
                                <div className='pricing'>
                                    <p className='orderHeaderBtn priceText'   >${price}</p>
                                </div>
                                <div className='pricing'>
                                    <div onClick={() => {
                                        if (count > 0) {
                                            setcheckState(checkState)
                                            setCount(count - 1)
                                        }
                                    }}
                                        className='makeBox makeAnchr'><RemoveOutlinedIcon sx={{ fontSize: '1.5vw' }} /></div>
                                    <div className='makeBox'>{count}</div>
                                    <div
                                        onClick={() => {
                                            if (count < 10) {
                                                setcheckState(checkState)
                                                setCount(count + 1)
                                            }
                                        }}
                                        className='makeBox makeAnchr'><AddIcon sx={{ fontSize: '1.5vw' }} /></div>
                                </div>
                                <div className='pricing'>
                                    <p className='orderHeaderBtn priceText blue'   >{(price * count).toFixed(2)}</p>
                                </div>
                            </>
                }
            </div>
        </>
    )
}




export const OrderHeader = ({ ShoppingCart }) => {
    return (
        <>
            {!ShoppingCart &&

                <p className='AddressHeading2'>
                    確認訂單信息
                </p >}
            <div className='orderHeader'>
                {ShoppingCart ?
                    <CheckBox label={`全選`} className="marginAdd1 orderHeaderBtn" />
                    :
                    <p className='orderHeaderBtn'>店鋪名稱</p>
                }
                <p className='orderHeaderBtn'>產品內容</p>
                <p className='orderHeaderBtn'>單價</p>
                <p className='orderHeaderBtn'>數量</p>
                <p className='orderHeaderBtn'>金額</p>
            </div>
        </>

    )
}


export const CheckBox = ({ label, className, state }) => {
    const [check, setCheck] = useState(true)

    useEffect(() => { setCheck(state) }, [state])

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
            {label &&
                <p className={`AddressInputTitle ${className}`}>{label}</p>
            }
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