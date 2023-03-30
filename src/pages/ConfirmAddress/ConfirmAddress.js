import React, {
  useState
} from 'react';

import { Modal, } from '@mui/material';

import './style.css'
import MyButton from '../../components/MyButton';
import {
  CardMethods,
  Cart,
  CheckBox,
  CustomInput,
  MasterCard,
  OrderHeader
} from './Components/Components';
import Colors from '../../styles/Colors';


function ConfirmAddress() {

  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} className="paymentModal" >
        {/* <MasterCard /> */}
        <CardMethods />
      </Modal>

      <div className='confirmAddressContainer'>
        確認收貨地址
      </div >
      <div className='createAddressSection'>
        <div style={{ width: '50%', paddingLeft: '4vw' }}>

          <p className='AddressHeading'>
            創建地址
          </p>
          <CustomInput
            inputTitle={`地址信息:`}
            placeholder={"請選擇省/市/區/街道"} />
          <CustomInput
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
              onClick={handleOpen}
            />
          </div>
        </div>
        <div className='productSection'>
          <img src={require('../../assets/PRODUCTIMG.png')}
            className="productImg"></img>
          <p className='AddressHeading detailText' >
            詳情
          </p>
        </div>

      </div >
      <div className='createAddressSection' style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '0px 7vw' }}>
        <OrderHeader />
        <Cart />
        <Cart />
        <div className='totalCost'>
          <div style={{ margin: '1.5vw 0vw' }}>
            <p className='totalCost'>$780.50</p>
            <p className='totalCost orderHeaderBtn' style={{ marginTop: '0px', marginBottom: '0px' }}>合共計算（含運費):</p>
          </div>
          <p className='totalCost orderHeaderBtn' style={{ marginTop: '0px', marginBottom: '0px' }}>寄送至：香港特別行政區香港島東區西灣河，興民街28-36號，地下E鋪A部份</p>
          <p className='totalCost orderHeaderBtn' style={{ marginTop: '0px', marginBottom: '0px' }}>收貨人：MD 55025508</p>
        </div>
        <div className='totalCost' style={{ margin: '1.5vw 0vw' }}>
          <MyButton
            label='立即付款'
            className={'confirmationBtn'}
          // onClick={() => alert()}
          />
        </div>
      </div >
    </>
  );
}


export default ConfirmAddress;
