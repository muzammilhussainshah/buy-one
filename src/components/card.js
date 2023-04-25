import React, { useState } from "react";

import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import Colors from "../styles/Colors";
import MyButton from "./MyButton";
import { absStar } from "./styles";
import '../App.css'

export function Card({ disableBtn, icon, itemId, price, title, oldPrice, ProductName, onClick, starEnable, selected }) {
  const [stared, setStared] = useState(false)
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <>
      <div
        className="cartHover"
        onClick={() => {
          if (starEnable) setStared(!stared)
          onClick && onClick()
        }}
        role="button"
        style={{ height: '24vw', width: '15vw', padding: '.5vw', borderRadius: '1vw', display: "flex", flexDirection: 'column', margin: '1.5vw', opacity: !starEnable ? 1 : stared ? 1 : 0.5 }}>
        {starEnable == true &&
          < div
            style={{
              position: 'absolute', zIndex: 1,
              marginLeft: '.5vw',
              marginTop: '.5vw'
            }}
          >
            {stared ?
              <StarRateRoundedIcon sx={absStar} /> :
              <StarOutlineRoundedIcon sx={absStar} />
            }
          </div>
        }
        {!starEnable &&
          <div style={{ height: '85%', width: '17.5%', position: "absolute" }}>
            <div style={{ color: 'transparent' }}>
              {JSON.stringify(visible)}
            </div>
            <div style={{ color: 'transparent' }}>
              {JSON.stringify(!!selected)}</div>
          </div>
        }
        <div style={{ display: "flex", flex: 7, overflow: "hidden" }}>
          <img src={icon} alt="My Image" style={{ height: '100%', width: "100%", }} />
        </div>
        <div style={{ display: "flex", flexDirection: 'column', flex: 3, }}>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <p style={{ margin: 0, fontSize: '1.1vw' }}>{title}</p>
            <p style={{ margin: 0, fontSize: '1.1vw' }}>{ProductName}</p>

          </div>
          <div style={{ display: 'flex', flex: 1, }}>
            <div style={{ display: 'flex', flex: 1, flexDirection: disableBtn ? 'row' : 'column', justifyContent: 'space-between', }}>
              <p style={{ margin: 0, fontWeight: '700', color: Colors.primary, fontSize: '1.3vw' }}>{price}</p>
              <p style={{ margin: 0, fontSize: '1vw' }}>{oldPrice}</p>
            </div>
            {!disableBtn &&
              <div style={{ position: 'absolute', zIndex: 3, width: '6.5vw', bottom: '9%', marginLeft: '7.1vw' }}>
                <MyButton label={
                  <span style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', fontSize: '0.7vw', padding: '.3vw 0vw' }}
                  >
                    <LocalMallOutlinedIcon sx={{ fontSize: '0.9vw' }} />
                    加入購物車</span>} style={{ backgroundColor: Colors.gray, width: '100%', borderWidth: '0px', height: "55%" }} />
              </div>
            }
          </div>
        </div>
      </div >
    </>
  );
}
