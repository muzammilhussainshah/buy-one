import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Colors from "../styles/Colors";
import MyButton from "./MyButton";
import '../App.css'
export function Card({ disableBtn,icon, itemId, price, title, oldPrice, ProductName, onClick, selected }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      onClick={() => onClick && onClick()}
      role="button"
      style={{ height: '25vw', width: '16vw', display: "flex", flexDirection: 'column', margin: '1.5vw' }}>
      <div style={{ height: '100%', width: '26%',  position: "absolute " }}>
        <div style={{ color: 'transparent' }}>
          {JSON.stringify(visible)}
        </div>
        <div style={{ color: 'transparent' }}>
          {JSON.stringify(!!selected)}</div>
      </div>
      <div style={{ display: "flex", flex: 7, overflow:"hidden"}}>
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
            <div style={{ display: 'flex', flex: 1, justifyContent: "center", alignItems: 'flex-end' }}>
              <MyButton label={
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.1vw' }}
                >

                  Add to Cart</span>} style={{ backgroundColor: Colors.gray, width: '100%', borderWidth: '0px', height: "55%" }} />
            </div>
          }
        </div>
      </div>
    </div>
    // <div
    //   onClick={() => onClick()}
    //   role="button"
    //   style={{
    //     border: "1px solid",
    //     display: "inline-block",
    //     margin: "0 10px",
    //     width: "160px",
    //     userSelect: "none"
    //   }}
    //   tabIndex={0}
    //   className="card"
    // >
    //   <div>
    //     <div>{title}</div>
    //     <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
    //       visible: {JSON.stringify(visible)}
    //     </div>
    //     <div>selected: {JSON.stringify(!!selected)}</div>
    //   </div>
    //   <div
    //     style={{
    //       backgroundColor: selected ? "green" : "bisque",
    //       height: "200px"
    //     }}
    //   />
    // </div>
  );
}
