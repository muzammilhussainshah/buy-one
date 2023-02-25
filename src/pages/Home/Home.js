import Banner from '../../components/Banner'
// import { MyButton } from '../../components/Button';
// import { SearchBar } from '../../components/SearchBar';
// import { bannerStyle, inputContainer, inputStyle, searchBarContainer, searchBtns, searchBtnStyle, searchMenuBtns, specialProductBtnStyle, specialProductContainer, specialProuductsCategory, specialProuductsLeftPanel, specialProuductsRightPanel } from './styles';
import Colors from "../../styles/Colors"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { settings } from './components';
import Imag from '../../components/Image';
import { fontSize } from '@mui/system';
import MyButton from '../../components/MyButton';
import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
function Home() {
  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
    { id: 6, name: 'Fig' }
  ];
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const Cart = () => {
    return (
      <div style={{ height: '25vw', width: '18vw', display: "flex", flexDirection: 'column', margin: '0px 1.5%' }}>
        <div style={{ display: "flex", flex: 7, }}>
          <img src={`https://s40424.pcdn.co/in/wp-content/uploads/2022/04/March_How-to-become-Product-Manager-1-1140x800.jpg`} alt="My Image" style={{ height: '100%', width: "100%", }} />
        </div>
        <div style={{ display: "flex", flexDirection: 'column', flex: 3, }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <p style={{ margin: 0, fontSize: '1.2vw' }}>ASTMN LEVEL 3 Product Name</p>
            <p style={{ margin: 0, fontSize: '1.2vw' }}>Product Name</p>

          </div>
          <div style={{ display: 'flex', flex: 1, }}>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between', }}>
              <p style={{ margin: 0, fontWeight: '700', color: Colors.primary, fontSize: '1.3vw' }}>$760.00</p>
              <p style={{ margin: 0, fontSize: '1vw' }}>155 YES#$</p>
            </div>
            <div style={{ display: 'flex', flex: 1, justifyContent: "center", alignItems: 'flex-end' }}>
              <MyButton label={
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.1vw' }}
                >

                  Add to Cart</span>} style={{ backgroundColor: Colors.gray, width: '100%', borderWidth: '0px', height: "55%" }} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: Colors.gray }}>

      <div style={{ display: "flex", backgroundColor: Colors.white, paddingLeft: '5%', paddingRight: '5%', flexDirection: 'column' }}>
        <Banner />
        <div style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: '1% 3%' }}>
          <div style={{ width: '25%', display: 'flex', justifyContent: "space-between" }}>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }}>Home</a>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }}>Features</a>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }}>Pricing</a>
          </div>
          <div style={{ width: '55%', display: 'flex', justifyContent: "space-between" }}>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }} >Home</a>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }} >Home</a>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }} >Home</a>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }} >Home</a>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }} >Home</a>
            <a href="#" style={{ fontSize: '1.7vw', color: 'black', textDecoration: 'none' }} >Home</a>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '9vw'
          // , backgroundColor: 'red'
          , display: 'flex', flexDirection: 'column'
        }}
      // style={searchBarContainer}
      >
        <div
          style={{ display: 'flex', flex: 6.5, justifyContent: "center", alignItems: "flex-end", }}
        >
          <div style={{
            height: "65%"
            , width: "50%", backgroundColor: 'white',
            display: 'flex',
            justifyContent: "space-between",
            // overflow:'hidden',
            // padding: '0vw 1vw',
            alignItems: "center",
            borderRadius: '5vw'
          }}>
            <TextField
              // size='small'
              variant="standard"
              placeholder='创建账户'
              sx={{
                display: "flex",
                flex: 1, margin: '0vw 0vw 0vw 2vw',
                justifyContent: 'center',
                // fontSize:'2px'
              }}
              InputProps={{
                disableUnderline: true,
                style: { fontSize: '1vw' }
              }}
            />
            {/* <input
              // disabled
              type="text" style={{
                border: '0px',
                display: 'flex',
                flex: 1,
                // height: '100%'
              }} value={text} onChange={handleChange} /> */}
            <div style={{ height: '85%', margin: '0vw .5vw', width: '7vw', borderRadius: '2vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary }}>
              <p style={{ color: Colors.white, fontSize: '1.2vw' }}>

                现 在
              </p>
            </div>
          </div>
        </div>
        {/* <SearchBar
          data={data}
          containerStyle={inputContainer}
          inputStyle={inputStyle}
          Icon={<div style={searchBtnStyle} />} /> */}
        <div
          //  style={searchMenuBtns}
          style={{ display: 'flex', flex: 3.5, margin: '0px auto', width: '50%', justifyContent: 'space-evenly', }}
        >
          {['电子邮件', '报名', '电子邮件', '报名', '电子邮件', '报名', '电子邮件', '电子邮件'].map((item) => {
            return (
              <MyButton
                style={{ backgroundColor: 'transparent', fontSize: '0.9vw', border: '0px', }}
                // style={searchBtns(0)}
                label={item} />

            )
          })}
          <MyButton
            // style={searchBtns('0vw 1vw')}
            style={{ backgroundColor: 'transparent', fontSize: '0.9vw', border: '0px', margin: '0px 2vw' }}

            label="登 " />
        </div>
      </div>
      <div
        // style={specialProductContainer}
        style={{ height: '35vw', width: '90%', margin: '0px auto', backgroundColor: Colors.white, display: 'flex' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', flex: 1.5 }}

        // style={specialProuductsLeftPanel}
        >
          <h3 style={{ margin: '1vw', fontSize: '1.4vw' }}>电子</h3>
          {['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'].map(() => {
            return (
              <MyButton icon={<ArrowForwardIosIcon
                sx={{ color: Colors.skyBlue, fontSize: '1.2vw' }}
              />}

                onClick={() => alert()}
                style={{ display: 'flex', height: '3vw', justifyContent: "center", backgroundColor: Colors.lightGray, border: '0px', alignItems: 'center', width: '90%', margin: '1px 0px' }}
                label={<span style={{ flex: 1, fontSize: '1.2vw' }}>电子邮件</span>} />

            )
          })}

        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', flex: 8.5 }}
        //  style={specialProuductsRightPanel}
        >
          <div style={{ height: '4vw', display: "flex", alignItems: 'center', }}>

            <h3 style={{ margin: '1vw', fontSize: '1.5vw', fontWeight: 'normal' }}>电子邮件</h3>
            <div style={{ height: '1.8vw', backgroundColor: Colors.red, width: '3.2vw', borderRadius: 5, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
              <p style={{ fontSize: '.9vw', color: Colors.white }}>NEW!</p>
            </div>

          </div>
          <div style={{ display: "flex", flex: 1 , padding: '0vw 0vw', }}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>
      </div>
      <div
      // style={bannerStyle}
      >
      </div>
      <div style={{ height: 100,backgroundColor:'red' }}>

      </div>
    </div >
  );
}

export default Home;
