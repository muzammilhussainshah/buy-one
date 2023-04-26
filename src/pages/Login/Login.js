import React, {
    useState
} from 'react';

import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonIcon from '@mui/icons-material/Person';
import { FaLock } from "react-icons/fa";

import './style.css'
import MyButton from '../../components/MyButton';
import { CustomInput } from '../ConfirmAddress/Components/Components';

function Login() {

    const [selectedButton, setSelectedButton] = useState('')

    return (
        <div className='createAddressSection  logInContainer ' >

            <div className='logInPageContainer'>

                <div className='logInLeftSide'>
                    <PhotoLibraryIcon className='myStoreImgIcon' />
                </div>

                <div className='logInRightSide'>

                    <MyButton
                        onClick={() => setSelectedButton(`密碼登入`)}
                        label={`密碼登入`}
                        className={selectedButton == '密碼登入' ? 'selectedLoginButton' : 'loginFormButtons'} />
                    <MyButton
                        onClick={() => setSelectedButton(`短信登入`)}
                        label={`短信登入`}
                        className={selectedButton == '短信登入' ? 'selectedLoginButton' : 'loginFormButtons'} />

                    <div style={{ margin: '1.5vw' }}>
                        <CustomInput
                            icon={<PersonIcon className='loginInputIcons' />}
                            inputTitle={`使用者電郵`} />
                        <CustomInput
                            icon={<FaLock className='loginInputPasswordIcons' />}
                            inputTitle={`使用者密碼`} />
                    </div>

                    <div className='loginBtnContainer'>
                        <MyButton
                            label='登入'
                            style={{ width: '12vw', padding: 0 }}
                            className={'confirmationBtn'}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>

                        <MyButton label='忘記密碼  ' className={'confirmationBtn loginFooterButtons'} />

                        <MyButton label='忘記用戶名 ' className={'confirmationBtn loginFooterButtons'} />

                        <MyButton label='免費註冊' className={'confirmationBtn loginFooterButtons'} />

                    </div>
                </div>
            </div>
        </div>

    );
}


export default Login;
