import React, {
  useEffect,
  useState
} from 'react';


// import Colors from "../../styles/Colors"
import './style.css'
import { CustomInput } from './Components/Components';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import MyButton from '../../components/MyButton';
import Colors from '../../styles/Colors';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';


// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   label: {
//     fontSize: '1rem', // adjust the font size as needed
//     '@media (max-width: 600px)': { // adjust the styles for smaller screens
//       fontSize: '0.8rem',
//     },
//   },
// });

function ConfirmAddress() {

  const [check, setCheck] = useState()
  return (
    <>
      <div className='confirmAddressContainer'>
        Confirm You Delivery address
      </div >
      <div className='createAddressSection'>
        <div style={{ width: '50%' }}>

          <p className='AddressHeading'>
            Create address
          </p>
          <CustomInput inputTitle={`Address Information:`} placeholder={"Please enter text"} />
          <CustomInput inputTitle={`Zip Code:`}
            helperTextStyle={'adressHelperStyle'}
            helperText={'The length of the detailed address needs to be 5-120 '}
            multiLine placeholder={"Please Fill in the zip code"} />
          <CustomInput inputTitle={`Zip Code:`} placeholder={"Please Fill in the zip code"} />
          <CustomInput inputTitle={`Zip Code:`} placeholder={"Please Fill in the zip code"} />
          <CustomInput doubleInput inputTitle={`Zip Code:`} placeholder={"Please Fill in the zip code"} />
          {/* <FormControlLabel control={<Checkbox size='large'  defaultChecked />} label="Set as default shipping address" /> */}
          {/* <CheckBoxOutlineBlankIcon sx={{fontSize:'3vw'}}/> */}
          <button
            onClick={() => setCheck(!check)}
            style={{ display: 'flex', alignItems: 'center', margin: '1px -.3vw', padding: 0, backgroundColor: 'transparent', border: '0px' }}>
            {check ?
              <CheckBoxOutlineBlankIcon sx={{ fontSize: '2.5vw' }} />
              :
              <CheckBoxOutlinedIcon sx={{ fontSize: '2.5vw' }} />
            }
            <p className='AddressInputTitle'>Set as default shipping address</p>
          </button>
          {/* import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'; */}
          {/* <label>
            <Checkbox sx={{height:'10vw',width:'10vw'}} />
            Option 1
          </label> */}
          {/* <FormControlLabel
            control={
              <p> 'ahmed '</p>
            }
            label="Set as default shipping address"
          /> */}
          <div>
            <a href='#'>

              <MyButton label='Confirmation' className={'confirmationBtn'} onClick={() => alert()} style={{

                backgroundColor: Colors.primary, height: '4vw', padding: '0px 1vw',
                border: "0px",
                fontSize: '1vw',
                color: Colors.white
              }} />
            </a>
            {/* <textarea value={text} onChange={handleChange} /> */}
          </div>
        </div>
        <div style={{ width: '50%', backgroundColor: "red" }}></div>

      </div >
    </>
  );
}


export default ConfirmAddress;
