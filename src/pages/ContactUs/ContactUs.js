import React from 'react';

import MoodIcon from '@mui/icons-material/Mood';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

import './style.css'

function ContactUs() {
    return (
        <>
            <div className='confirmAddressContainer' style={{ display: 'flex' }}>
                <div className='cartHeading'>
                    線上支援
                </div>
            </div >

            <div className='createAddressSection  logInContainer column'>

                <div className='logInPageContainer column ' style={{ justifyContent: 'center' }}>
                    <p className='ContactUsHeading'>聯絡 bUYONE 支援</p>
                    <PhotoLibraryIcon className='myStoreImgIcon' />
                </div>

                <div className='contactContainer' style={{ padding: '5vw' }}>
                    <div style={{ width: '60%', }}>
                        <p className='AddressHeading profilePictureText phoneSupportTitle '>
                            電話支援
                        </p>
                        <p className='orderHeaderBtn simple addMarginY regionMsg'>你可以致電你所在國家或地區的 buyone 支援電話號碼，與 buyone 技術顧問通話。</p>
                        <div className='contactContainer'>
                            <p className='AddressHeading profilePictureText'>
                                香港&nbsp;&nbsp;
                            </p>
                            <div style={{}}>
                                <p className='AddressHeading profilePictureText blue makeAnchr removeUnderLine'>
                                    +852 2888 8888
                                </p>
                                <div className='customerContainer'  >
                                    <p className='orderHeaderBtn moodIconContainer margin0 lockIconContainer'> <MoodIcon sx={{ fontSize: '1.5vw', color: 'green', }} /> </p>
                                    <p className='orderHeaderBtn makeAnchr margin0 fontWeightNormal buttonsHover' >{`customer service`}</p>
                                </div>
                            </div>
                        </div>
                        <p className='masterCardHeading addMarginY2'  >
                            電話號碼可能隨時變更。
                        </p>
                        <p className='masterCardHeading'  >
                            使用固網電話致電免費電話號碼費用全免，但使用手機則可能需要另付費用。
                        </p>
                        <p className='masterCardHeading'  >
                            部分流動網絡供應商可能不支援此號碼。
                        </p>
                        <p className='masterCardHeading'  >
                            如需更多資料，請聯絡你的網絡供應商。
                        </p>
                        <p className='masterCardHeading'  >
                            需要支付本地和國內通話費。
                        </p>
                    </div>
                    <div>
                        <p className='AddressHeading profilePictureText' >
                            協助我解決有關購買項目的問題
                        </p>
                        <p className='orderHeaderBtn simple' style={{ margin: '0px' }}>查看訂單狀態或了解 buyone 服務計劃。</p>

                    </div>
                </div>

            </div>
        </>
    );
}


export default ContactUs;