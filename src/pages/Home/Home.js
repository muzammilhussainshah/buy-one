import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import Slider from 'react-slick';

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Card } from '../../components/card';
import Banner from '../../components/Banner'
import Colors from "../../styles/Colors"
import MyButton from '../../components/MyButton';
import useDrag from '../../components/useDrage';
import { collection, query, addDoc, orderBy, limit, startAfter, getDocs } from "@firebase/firestore";

import '../../App.css'
import { db } from '../../firebase';
import { fetchCartData } from '../../store/action/action';
import { cartDummyData } from './data';

const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function Home() {
  const [selected, setSelected] = useState("");
  const [cartData, setcartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [messages, setMessages] = useState([]);
  // console.log(cartData, 'cartDatacartDatacartDatacartData',cartDummyData)

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const getCartData = async () => {
    let deepCopy = JSON.parse(JSON.stringify(cartData));
    const ref = await getDocs(collection(db, "cart"));
    // console.log(ref, 'ref ref ref ')
    ref.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      deepCopy.push(doc.data().cartdata)
    });

    setcartData(deepCopy)
    // console.log(deepCopy, 'deepCopydeepCopy')
  }
  const addData = async (data) => {
    // console.log(data, 'run')
    const ref = await collection(db, "cart")
    let array = data
    await addDoc(ref, { cartdata: array })
  }

  const [docs, setDocs] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loadMoreEnable, setloadMoreEnable] = useState(true);

  useEffect(() => {
    // cartDummyData.map((item) => {
    // addData(item)
    // })



    const q = query(
      collection(db, 'cart'),
      limit(20)
    );
    getDocs(q).then((snapshot) => {
      setDocs(snapshot.docs);
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      if (snapshot.docs.length < 10) { setloadMoreEnable(false) }
    });

  }, []);
  const loadMore = () => {
    const q = query(
      collection(db, 'cart'),
      startAfter(lastVisible),
      limit(20)
    );
    getDocs(q).then((snapshot) => {
      if (snapshot.docs.length < 10) { setloadMoreEnable(false) }
      setDocs([...docs, ...snapshot.docs]);
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
    });
  };


  var settings = {
    arrows: false,
    focusOnSelect: true,
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    speed: 500

  };

  const [items] = React.useState(getItems);
  // console.log(items, 'itemsitemsitems', cartData)
  // NOTE: for drag by mouse
  const handleDrag = ({ scrollContainer }) => (
    ev
  ) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  const handleItemClick = (itemId) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };


  const Cart = ({ disableBtn, icon, title, ProductName, price, oldPrice }) => {
    return (
      <div
        style={{ height: '20vw', width: '15vw', display: "flex", flexDirection: 'column', margin: '1.5%' }}>
        <div style={{ display: "flex", flex: 7, overflow: 'hidden' }}>
          <img src={icon} alt="My Image" style={{ height: '100%', width: "100%", }} />
        </div>
        <div style={{ display: "flex", flexDirection: 'column', flex: 3, }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <p style={{ margin: 0, fontSize: '1vw' }}>{title}</p>
            <p style={{ margin: 0, fontSize: '1vw' }}>{ProductName}</p>

          </div>
          <div style={{ display: 'flex', flex: 1, }}>
            <div style={{ display: 'flex', flex: 1, flexDirection: disableBtn ? 'row' : 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ margin: 0, fontWeight: '700', color: Colors.primary, fontSize: '1.5vw' }}>{price}</p>
              <p style={{ margin: 0, fontSize: '.8vw' }}>{oldPrice}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: Colors.bg }}>

      <div style={{ display: "flex", backgroundColor: Colors.white, paddingLeft: '5%', paddingRight: '5%', flexDirection: 'column' }}>
        <Banner />
        <div style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: '1% 3%' }}>
          <div style={{ width: '25%', display: 'flex', justifyContent: "space-between" }}>
            <a href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`????????????`}</a>
            <a href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`????????????`}</a>
            <a href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`???????????????`}</a>
          </div>
          <div style={{ width: '45%', display: 'flex', justifyContent: "space-between" }}>
            <a href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`????????????`}</a>
            <a href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`?????????`}</a>
            <a href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`????????????`}</a>
            <a href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`????????????`}</a>
            <a href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`????????????`}</a>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '9vw'

          , display: 'flex', flexDirection: 'column'
        }}
      // style={searchBarContainer}
      >
        <div
          style={{ display: 'flex', flex: 6.5, justifyContent: "center", alignItems: "center", }}
        >
          <div style={{
            height: "60%"
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
              placeholder='????????????'
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
            <Button style={{ height: '85%', margin: '0vw .5vw', width: '7vw', borderRadius: '2vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary }}>
              <p style={{ color: Colors.white, fontSize: '1.2vw' }}>
                {`??????`}
              </p>
            </Button>
          </div>
        </div>
        <div
          style={{ display: 'flex', flex: 3.5, margin: '0px auto', width: '50%', justifyContent: 'space-evenly', }}
        >
          {['???????????????', '??????', '????????????', '?????????', '??????', '??????', '????????????', '????????????', '??????'].map((item) => {
            return (
              <MyButton
                style={{ fontSize: '0.9vw', border: '0px', }}
                // style={searchBtns(0)}
                label={<span style={{ margin: 0 }}>{item}</span>} />

            )
          })}
          <MyButton
            // style={searchBtns('0vw 1vw')}
            style={{ backgroundColor: 'transparent', fontSize: '0.9vw', border: '0px', margin: '0px 2vw' }}

            label="??? " />
        </div>
      </div>
      <div
        // style={specialProductContainer}
        style={{ height: '35vw', width: '95%', margin: '0px auto', backgroundColor: Colors.white, display: 'flex' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', flex: 1.5, minWidth: "12vw" }}

        >
          <h3 style={{ margin: '5% 2vw', fontSize: '1.4vw' }}>{`??????`}</h3>
          <div style={{ display: 'flex', flexDirection: "column", flex: 1, justifyContent: "center" }}>

            {['?????????????????????', '?????????????????????', '????????????/??????', '????????????/??????', '?????????????????????', '??????????????????', '???????????????', '??????', '??????', '??????', '???????????????'].map((item, index) => {
              return (
                <MyButton icon={
                  <ArrowForwardIosIcon
                    sx={{ color: Colors.skyBlue, fontSize: '1.2vw' }}
                  />
                }
                  style={{ height: '7.5%', display: 'flex', alignItems: 'center', width: "100%", backgroundColor: Colors.lightGray, margin: '1px 0px', border: '0px', }}
                  label={<span style={{ flex: 1, fontSize: '1vw', textAlign: 'start', margin: '0vw 2vw', }}>{item}</span>} />

              )
            })}

          </div>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', flex: 8.5, overflow: 'hidden' }}
        //  style={specialProuductsRightPanel}
        >
          <div style={{ height: '4vw', display: "flex", alignItems: 'center', }}>

            <h3 style={{ margin: '1vw', fontSize: '1.5vw', fontWeight: 'normal' }}>????????????</h3>
            <div style={{ height: '1.8vw', backgroundColor: Colors.red, width: '3.2vw', borderRadius: 5, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
              <p style={{ fontSize: '.9vw', color: Colors.white }}>NEW!</p>
            </div>

          </div>
          {/* <div onMouseLeave={dragStop}>
            <ScrollMenu
              onWheel={onWheel}
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
            >
              {items.map(({ id }) => (
                <Card
                  title={id}
                  itemId={id} // NOTE: itemId is required for track items
                  key={id}
                  onClick={handleItemClick(id)}
                  selected={id === selected}
                />
              ))}
            </ScrollMenu>
          </div> */}

          <div style={{
            height: 500
            , display: 'flex',
            alignItems: 'center'
          }}  >

            <div
              style={{ width: '100%' }}

              onMouseLeave={dragStop}>
              <ScrollMenu
                onWheel={onWheel}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
              >
                {docs?.length > 0 && docs.map((doc) => {
                  const { id, icon, title, ProductName, price, oldPrice } = doc.data().cartdata
                  return (
                    <Card
                      title={title}
                      ProductName={ProductName}
                      price={price}
                      icon={icon}
                      oldPrice={oldPrice}
                      itemId={id}
                      key={id}
                      onClick={handleItemClick(id)}
                      selected={id === selected}
                    />
                  )
                })
                }
              </ScrollMenu>
              {/* <Cart />
            <Cart />
            <Cart />
            <Cart /> */}
            </div>
          </div>
        </div>
      </div>

      <div style={{
        height: '13vw', width: "95%",
        margin: '0px auto 0vw auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        //  alignItems: 'center'
      }}
      >
        <Slider {...settings} pagination={false}>
          {[0, 0, 0, 0, 0, 0].map(() => {
            return (
              <div
              >
                <div style={{ height: '11vw', backgroundColor: Colors.gray, width: '34vw', display: 'flex', fontSize: '1.4vw' }}>
                  <div style={{ backgroundColor: 'black', padding: '0px 0.1vw', height: '2vw' }}>
                    <p style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'white', margin: 0, fontSize: '1.5vw' }}>
                      ad
                    </p>
                  </div>
                  <p style={{ margin: 'auto', fontWeight: 'lighter' }}>
                    ADVERTISING BANNER
                  </p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div
        // style={specialProductContainer}
        style={{ width: '95%', margin: '0px auto', backgroundColor: Colors.white }}
      >
        <div style={{ height: '5vw', display: "flex", alignItems: 'center' }}>

          <h3 style={{ margin: '2vw', fontSize: '1.5vw', fontWeight: 'normal' }}>{`????????????`}</h3>
          <div style={{ height: '1.8vw', backgroundColor: Colors.red, width: '3.2vw', borderRadius: 5, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <p style={{ fontSize: '.9vw', color: Colors.white }}>NEW!</p>
          </div>


        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '.5vw' }}>
          {docs?.length > 0 && docs.map((doc, index) => {
            const { id, icon, title, ProductName, price, oldPrice } = doc.data().cartdata
            // console.log(doc.data().cartdata)
            return (
              <>
                <Cart
                  title={title}
                  icon={icon}
                  ProductName={ProductName}
                  price={price}
                  oldPrice={oldPrice}
                  disableBtn
                />
                {index == docs?.length - 1 && loadMoreEnable &&
                  <Button
                    // disableFocusRipple
                    // disableRipple
                    disableElevation
                    // disableTouchRipple
                    onClick={loadMore}
                    sx={{
                      boxShadow: `0 ${0.15}vw ${0.15}vw #888`,
                      backgroundColor: Colors.white, color: Colors.primary, border: `.5px solid ${Colors.primary}`, borderRadius: '.5vw', padding: '.8vw', margin: 'auto auto', fontSize: '1vw', maxHeight: '3vw'
                    }}>
                    Load More
                  </Button>
                  // < MyButton
                  //   style={{
                  //     boxShadow: `0 ${0.15}vw ${0.15}vw #888`,
                  //     backgroundColor: Colors.gray, color: Colors.primary, border: `.5px solid ${Colors.primary}`, borderRadius: '.5vw', padding: '.8vw', margin: 'auto auto', fontSize: '1.2vw', maxHeight: '3vw'
                  //   }}
                  //   onClick={() => loadMore()}
                  //   label={'Load More'} />
                }
              </>
            )
          })}
        </div>
      </div>
      <div style={{ height: '8vw', backgroundColor: Colors.white, width: '100%', margin: '2vw 0vw 0vw 0vw', display: 'flex', fontSize: '1.4vw', padding: '0vw 5%' }}>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', }}>
          <img src={require('../../assets/50.png')} alt="My Image" style={{ height: '4vw', width: "20%", objectFit: 'contain' }} />
          <img src={require('../../assets/award-friendly.png')} alt="My Image" style={{ height: '5vw', width: "20%", objectFit: 'contain' }} />
          <img src={require('../../assets/1.png')} alt="My Image" style={{ height: '5vw', width: "20%", objectFit: 'contain' }} />
          <img src={require('../../assets/2.png')} alt="My Image" style={{ height: '5vw', width: "20%", objectFit: 'contain' }} />
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <img src={require('../../assets/Repeat Grid 3.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          {/* <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png`} alt="My Image" style={{ height: '4vw', width: "15%" , objectFit: 'contain' }} /> */}
          <img src={require('../../assets/E2-OC1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          {/* <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logos.svg/1200px-Logos.svg.png`} alt="My Image" style={{ height: '4vw', width: "15%" , objectFit: 'contain' }} /> */}
          <img src={require('../../assets/E2-OC1-1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-UN1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-visa1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-VS-1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-AE1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          {/* <img src={`https://www.boredpanda.com/blog/wp-content/uploads/2020/06/Artist-shows-alternative-versions-of-famous-logos-in-different-styles-5ed4ac823b564__880.jpg`} alt="My Image" style={{ height: '4vw', width: "15%", objectFit: 'contain' }} /> */}
          {/* <img src={`https://bestlifeonline.com/wp-content/uploads/sites/3/2018/09/tostitos.jpg?quality=82&strip=all`} alt="My Image" style={{ height: '4vw', width: "15%", objectFit: 'contain' }} /> */}
        </div>
      </div>
      <div style={{ height: '13vw', backgroundColor: Colors.gray, width: '100%', display: 'flex', fontSize: '1.4vw', padding: '0.5vw 5% 0vw 3%', }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, }}>
          {/* label={<span style={{ flex: 1, fontSize: '1.2vw' }}>????????????</span>} /> */}
          <p style={{ fontSize: '1.2vw', margin: '1vw 3vw', }}>
            {`???????????? ????????????`}
          </p>
          <div style={{ display: 'flex', flex: 1, width: '35%', margin: '0px 3vw', }}>
            <img src={require('../../assets/BUYONE-01.png')} alt="My Image" style={{ height: '85%', borderRadius: '1vw', overflow: 'hidden', width: "50%" }} />
            <div style={{ display: "flex", flex: 1, flexDirection: 'column', alignItems: 'center', }}>
              <img src={`https://www.hammerheadshop.com/wp-content/uploads/2019/01/appstore-icon-mobile-retina-rs.png`} alt="My Image" style={{ height: '5vw', margin: '0%', width: '80%' }} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'flex-end', }}>
          <div>
            {['????????????', '????????????', '????????????', '???????????????', '????????????'].map((item, index) => (
              <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
                <a href='#' style={{ color: 'black', textDecoration: 'none', }}>
                  {item}
                </a>
              </p>
            ))}
          </div>
          <div>
            {['????????????', '??????????????????', '????????????', '??????/????????????', '????????????'].map((item, index) => <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
              <a href='#' style={{ color: 'black', textDecoration: 'none', }}>
                {item}
              </a>
            </p>)}
          </div>
          <div>
            {['????????????', '??????: Buyone.info.com.hk', '??????:(852) 2690 0948', '????????????'].map((item, index) => <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
              <a href='#' style={{ color: 'black', textDecoration: 'none', }}>
                {item}
              </a>
            </p>)}
          </div>
        </div>
      </div>
      <div style={{ height: '12vw', backgroundColor: Colors.gray, width: '100%', display: 'flex', fontSize: '1.4vw' }}>
        <div style={{ display: 'flex', flex: 7, flexDirection: 'column', justifyContent: "space-evenly" }}>
          <div>
            <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: 'normal' }}>{`???????????????????????????????????????????????????????????????(18???????????????)???????????????????????????????????????`}</p>
            <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: '600' }}>{`Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor (under 18) in the course of business.`}</p>
          </div>
          <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: '600' }}>{`??2022 Buyone.com Online Store. ????????????`}</p>
        </div>
        <div style={{ display: 'flex', flex: 3, justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
          <a href="#" style={{ color: 'black', textDecoration: 'none', fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', }} >
            {`????????????`}
          </a>
          <a href="#" style={{ fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', color: 'black', textDecoration: 'none', }}>{`????????????`}</a>
          <a href="#" style={{ fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', color: 'black', textDecoration: 'none', }}>{`?????????????????????`}</a>
        </div>
      </div>
    </div >
  );
}

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default Home;
