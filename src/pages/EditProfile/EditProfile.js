import React, {
    useState
} from 'react';
import { CheckBox, CustomInput } from '../ConfirmAddress/Components/Components';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MyButton from '../../components/MyButton';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import '.../'
import './style.css'
import Colors from '../../styles/Colors';
import { DropDown } from '../ProductCart/Components/Components';

function EditProfile() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => { setAge(event.target.value); };
    return (
        <>
            <div className='confirmAddressContainer makeColumn' style={{
                display: 'flex',
                height: 'auto',
                borderWidth: '0px'
            }}>
                <div className='cartHeading  ' style={{ margin: "2vw 0px" }}>
                    個人檔案
                </div>
                <p className='AddressHeading ' style={{ marginBottom: '.5vw' }}>
                    個人頭像
                </p>
                <div className='profileSection'>
                    <div className='profileContainer'>
                        {/* <div className='productSideImg'> */}
                        <PhotoLibraryIcon sx={{ fontSize: '6vw', color: Colors.tabInactive }} />
                        {/* </div> */}
                    </div>
                    <div className='profileBodyContainer'>
                        <p className='AddressInputTitle2'>{`清晰的正面照片是買賣雙方相互了解的重要方式。`}</p>
                        <MyButton
                            label='上傳一張照片'
                            style={{ width: '10vw', padding: 0 }}
                            className={'confirmationBtn'}
                        />
                    </div>
                </div>
            </div >
            <div className='createAddressSection'>
                <div style={{ width: '50%', paddingLeft: '4vw' }}>

                    <p className='AddressHeading'>
                        公開檔案
                    </p>
                    <CustomInput inputTitle={`使用者名稱`} />
                    <CustomInput inputTitle={`姓名`} />
                    <CustomInput inputTitle={`姓氏`} />
                    <CustomInput inputTitle={`個人簡介`} />

                    <p className='AddressHeading nationMargin' >位置</p>
                    <p className='AddressInputTitle2'>{`國家`}</p>
                    <DropDown height={'3.5vw'} autoWidth={"90%"} />
                    <p className='AddressInputTitle2'>{`地區`}</p>
                    <DropDown height={'3.5vw'} autoWidth={"90%"} />
                    <p className='AddressInputTitle2'>{`城市`}</p>
                    <DropDown height={'3.5vw'} autoWidth={"90%"} />
                    <p className='AddressHeading nationMargin' >個人資料</p>
                    <p className='AddressInputTitle2' style={{ display: 'flex', alignItems: 'center' }}><LockOutlinedIcon sx={{ fontSize: 'inherit', margin: '0px .3vw' }} />{`除非您明確許可，否則我們不會與其他用戶共享此信息。`}</p>

                    <CustomInput inputTitle={`電子郵件`} />
                    <CustomInput inputTitle={`手機號碼`} />
                    <CustomInput inputTitle={`性別`} />
                    <CustomInput inputTitle={`生日`} placeholder={`年 / 月 / 日`} />



                    <div className='confirmContainer addMarginY' style={{ justifyContent: 'flex-end', width: '90%' }}>
                        <MyButton
                            label='儲存更改'
                            className={'confirmationBtn'}
                        // onClick={() => handleOpen('MasterCard')}
                        />
                    </div>
                </div>
                <div style={{ width: '50%', paddingLeft: '4vw',}}>

                    <p className='AddressHeading'>
                        更改密碼
                    </p>
                    <CustomInput inputTitle={`目前密碼`} />
                    <CustomInput inputTitle={`新密碼`} />
                    <CustomInput inputTitle={`確認新密碼`} />

                    <div className='confirmContainer addMarginY' style={{ justifyContent: 'flex-end', width: '90%', margin: "2.5vw 0px" }}>
                        <MyButton
                            label='儲存更改'
                            className={'confirmationBtn'}
                        />
                    </div>
                    <p className='AddressHeading nationMargin' style={{ marginBottom: '0px' }}>數據和隱私設定</p>
                    <p className='AddressInputTitle2' style={{ margin: '0px' }}>{`管理我們如何分享你的信息`}</p>
                    <p className='AddressInputTitle2 nationMargin width90'>{`我們尊重你的私隱以及我們不會售賣你的個人資料予第三方。本文中使用的術語以及未在此定義的術語應具有我們隱私政策和服務條款中賦予它們的含義。`}</p>
                    <p className='AddressInputTitle2 width90' >{`但我們可能會根據我們的隱私政策，分享或出售由你處獲取或收集的匿名資料給予我們的第三方數據管理平台或我們的廣告和分析合作夥伴：`}</p>
                    <p className='AddressInputTitle2 width90' style={{ margin: '0px' }}>{`散列裝置標識`}</p>
                    <p className='AddressInputTitle2 width90' style={{ margin: '0px' }}>{`人口統計信息`}</p>
                    <p className='AddressInputTitle2 width90' style={{ margin: '0px' }}>{`位置相關信息`}</p>
                    <p className='AddressInputTitle2 width90' style={{ margin: '0px' }}>{`合計統計`}</p>
                    <p className='AddressInputTitle2 width90' style={{ margin: '0px' }}>{`除非你同意分享你的個人信息，否則我們可能共享的信息格式不會直接標識你。`}</p>
                    <p className='AddressInputTitle2 width90' >{`我們的第三方數據管理平台或廣告和分析合作夥伴可能會收集和分享你的散列裝置標識符，準確的位置數據以及有關你設備的其他信息，以及使用BUYONE應用進行廣告，研究和位置分析。`}</p>
                    <p className='AddressInputTitle2 width90' >{`我們也可能收集和接收來自其他數據管理平台或廣告和分析合作夥伴的信息。此類第三方可能會使用自己的Cookie和/或其他追踪技術，這些技術可能會在非BUYONE相關平台上收集關於你的信息。我們無法控制此類網站或資源的內容和隱私方法。建議你查看這些網站和第三方運營資源的隱私政策，並了解你的信息如何被第三方使用。`}</p>
                    <p className='AddressInputTitle2 width90' >{`從你帳戶的“設定“頁面中，你可以選擇不共享上面列出的匿名信息。請注意，如果你選擇“退出“，我們不會與數據管理平台或我們的廣告和分析合作夥伴共享匿名信息，但仍可能會與我們的分支機構，以及協助我們在代表我們服務的各個方面執行某些操作的第三方服務提供商共享你的信息，例如處理交易，履行信息請求，接收和發送通信，更新市場列表，分析數據，提供支持服務或執行其他任務。根據我們的隱私政策，這些服務提供商將只能訪問你的個人信息，以履行其職能。`}</p>

                    {/* <CustomInput
                        inputTitle={`詳細地址:`}
                        helperTextStyle={'adressHelperStyle'}
                        helperText={'詳細地址長度需要在5-120個漢字或字符，不能包含表情符號'}
                        multiLine
                        placeholder={"請輸入詳細地址信息，如道路、門牌號、小區、樓棟號、單元等信息"} />
                    <CustomInput
                        inputTitle={`郵政編碼:`}
                        placeholder={"請填寫郵編"} />
                    <CustomInput
                        inputTitle={`收貨人姓名:`}
                        placeholder={"長度不超過25個字符"} />
                    <CustomInput
                        doubleInput
                        inputTitle={`手機號碼:`}
                        input1Style={{ width: '30%', marginRight: '.5vw' }}
                        input2Style={{ width: '70%', marginLeft: '.5vw' }}
                        placeholder2={'電話號碼、手機號碼必須填一項'}
                        placeholder={"中國香港 +852"} />
                    <CustomInput
                        inputTitle={`收貨人姓名:`}
                        placeholder={"長度不超過25個字符"} />
                    <CheckBox label={`設置為默認收貨地址`} />

                    <div className='confirmContainer'>
                        <MyButton
                            label='確 認'
                            className={'confirmationBtn'}
                        // onClick={() => handleOpen('MasterCard')}
                        />
                    </div> */}
                </div>

            </div >
        </>
    );
}


export default EditProfile;
