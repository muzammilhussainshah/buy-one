import React, {
  useEffect,
  useState
} from 'react';

import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { TextField } from '@mui/material';
import {
  collection,
  query,
  addDoc,
  limit,
  startAfter,
  getDocs
} from "@firebase/firestore";

import Banner from '../../components/Banner'
import Colors from "../../styles/Colors"
import MyButton from '../../components/MyButton';
import useDrag from '../../components/useDrage';
import { Card } from '../../components/card';
import { db } from '../../firebase';
import '../../App.css'
import { async } from '@firebase/util';


function Home() {
  const [selected, setSelected] = useState("");
  const [docs, setDocs] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [isSticky, setSticky] = useState(false);
  const [loader, setLoader] = useState(false);
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  // if we wana add more data to db so we can use this function 
  const addData = async (data) => {
    const ref = await collection(db, "cart")
    let array = data
    await addDoc(ref, { cartdata: array })
  }
  // if we wana add more data to db so we can use this function 


  useEffect(() => {
    const q = query(
      collection(db, 'cart'),
      limit(20)
    );
    getDocs(q).then((snapshot) => {
      setDocs(snapshot.docs);
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const loadMore = async () => {
    setLoader(true)
    const q = await query(
      collection(db, 'cart'),
      startAfter(lastVisible),
      limit(20)
    );
    await getDocs(q).then((snapshot) => {
      setDocs([...docs, ...snapshot.docs]);
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
    });

    setLoader(false)
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
        className="cartHover"
        style={{ height: '19vw', width: '14vw', padding: '.5vw', borderRadius: '1vw', display: "flex", flexDirection: 'column', margin: '2%' }}>
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

      <div

        style={{ display: "flex", backgroundColor: Colors.white, paddingLeft: '5%', paddingRight: '5%', flexDirection: 'column' }}>
        <Banner />
      </div>
      <div
        className="sticky"
        style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'space-between', padding: '1% 3%', paddingLeft: '5%', paddingRight: '5%', }}>
        <div style={{ width: '25%', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          {isSticky && <img src={require('../../assets/logo.JPG')} alt="My Image" style={{ height: '2vw', width: '2vw', objectFit: 'contain' }} />}
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`中國香港`}</a>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`帳戶名稱`}</a>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }}>{`手機瀏覽器`}</a>
        </div>
        <div style={{ width: '45%', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`帳戶資料`}</a>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`購物車`}</a>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`心願清單`}</a>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`物流管理`}</a>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1.1vw', color: 'black', textDecoration: 'none' }} >{`線上支援`}</a>
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
              placeholder='搜尋商品'
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
            <button
              className='searchButtonsHover'
              style={{
                height: '85%',
                margin: '0vw .5vw',
                width: '7vw',
                borderRadius: '2vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.primary,
                border: '0px solid ',
                color: Colors.white,
                fontSize: '1.2vw'
              }}>
              {`搜尋`}
            </button>
          </div>
        </div>
        <div
          style={{ display: 'flex', flex: 3.5, margin: '0px auto', width: '50%', justifyContent: 'space-evenly', }}
        >
          {['食品及飲品', '酒類', '美食預訂', '調味料', '水果', '醬料', '個人護理', '寵物食品', '更多'].map((item) => {
            return (
              <MyButton
                style={{ fontSize: '0.9vw', border: '0px', }}
                label={<span style={{ margin: 0 }}>{item}</span>} />
            )
          })}
          <MyButton
            style={{ backgroundColor: 'transparent', fontSize: '0.9vw', border: '0px', margin: '0px 2vw' }}
            label="登 " />
        </div>
      </div>
      <div
        style={{ height: '35vw', width: '95%', margin: '0px auto', backgroundColor: Colors.white, display: 'flex' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', flex: 1.5, minWidth: "12vw" }}
        >
          <h3 style={{ margin: '5% 2vw', fontSize: '1.4vw' }}>{`分類`}</h3>
          <div style={{ display: 'flex', flexDirection: "column", flex: 1, justifyContent: "center" }}>
            {['飲品、即沖飲品', '酒類、酒精飲品', '美食預訂/到會', '美食預訂/到會', '罐頭、醃製食品', '調味料、醬料', '零食、餅乾', '甜品', '烘焙', '乾貨', '嬰幼兒奶粉'].map((item, index) => {
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
        >
          <div style={{ height: '4vw', display: "flex", alignItems: 'center', }}>
            <h3 style={{ margin: '1vw', fontSize: '1.5vw', fontWeight: 'normal' }}>最新上架</h3>
            <div style={{ height: '1.8vw', backgroundColor: Colors.red, width: '3.2vw', borderRadius: 5, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
              <p style={{ fontSize: '.9vw', color: Colors.white }}>NEW!</p>
            </div>
          </div>
          <div style={{
            height: 500
            , display: 'flex',
            alignItems: 'center'
          }}  >
            <div
              style={{ width: '100%' }}
              onMouseLeave={dragStop}>
              <ScrollMenu
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
        style={{ width: '95%', margin: '0px auto', backgroundColor: Colors.white }}
      >
        <div style={{ height: '5vw', display: "flex", alignItems: 'center' }}>

          <h3 style={{ margin: '2vw', fontSize: '1.5vw', fontWeight: 'normal' }}>{`猜你喜歡`}</h3>
          <div style={{ height: '1.8vw', backgroundColor: Colors.red, width: '3.2vw', borderRadius: 5, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <p style={{ fontSize: '.9vw', color: Colors.white }}>NEW!</p>
          </div>


        </div>
        <div >
          <InfiniteScroll
            dataLength={docs.length}
            next={loadMore}
            hasMore={true}
            // loader={
            //   <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
            //     <img
            //       style={{ height: '10vw', width: '10vw' }}
            //       src="https://static.wixstatic.com/media/369c26_b396f2977e5a40839e2fc77a6f9aac2b~mv2.gif"
            //       // style={=}
            //       alt="GIF image" />
            //   </div>
            //   // <h4>Loading...</h4>
            // }
            style={{
              display: 'flex', flexWrap: 'wrap', padding: '.5vw',
              //  maxHeight: '100vw' 
            }}
            className='scrollBar'
          >
            {docs.map((doc, index) => {

              const { id, icon, title, ProductName, price, oldPrice } = doc.data().cartdata
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
                </>
              )
            })}
          </InfiniteScroll>
          {loader &&
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
              <img
                style={{ height: '10vw', width: '10vw' }}
                src="https://static.wixstatic.com/media/369c26_b396f2977e5a40839e2fc77a6f9aac2b~mv2.gif"
                // style={=}
                alt="GIF image" />
            </div>
          }

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
          <img src={require('../../assets/E2-OC1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-OC1-1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-UN1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-visa1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-VS-1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
          <img src={require('../../assets/E2-AE1.png')} alt="My Image" style={{ height: '100%', width: '13%', objectFit: 'contain' }} />
        </div>
      </div>
      <div style={{ height: '13vw', backgroundColor: Colors.gray, width: '100%', display: 'flex', fontSize: '1.4vw', padding: '0.5vw 5% 0vw 3%', }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, }}>
          <p style={{ fontSize: '1.2vw', margin: '1vw 3vw', }}>
            {`全新體驗 立即下載`}
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
            {['關於我們', '關於買一', '企業資訊', '可持續發展', '加入我們'].map((item, index) => (
              <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
                <a
                  className='buttonsHover'
                  href='#' style={{ color: 'black', textDecoration: 'none', }}>
                  {item}
                </a>
              </p>
            ))}
          </div>
          <div>
            {['網上購物', '網上購物流程', '店鋪一覽', '退款/退換政策', '送貨服務'].map((item, index) => <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
              <a
                className='buttonsHover'
                href='#' style={{ color: 'black', textDecoration: 'none', }}>
                {item}
              </a>
            </p>)}
          </div>
          <div>
            {['客戶服務', '電郵: Buyone.info.com.hk', '電話:(852) 2690 0948', '聯絡我們'].map((item, index) => <p style={{ fontSize: '1vw', fontWeight: index == 0 ? '600' : 'normal', margin: index == 0 ? '1vw 1vw' : '.7vw 2vw 0vw 1vw', }}>
              <a
                className='buttonsHover'
                href='#' style={{ color: 'black', textDecoration: 'none', }}>
                {item}
              </a>
            </p>)}
          </div>
        </div>
      </div>
      <div style={{ height: '12vw', backgroundColor: Colors.gray, width: '100%', display: 'flex', fontSize: '1.4vw' }}>
        <div style={{ display: 'flex', flex: 7, flexDirection: 'column', justifyContent: "space-evenly" }}>
          <div>
            <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: 'normal' }}>{`根據香港法律，不得在業務過程中，向未成年人(18歲以下人士)售賣或供應令人醺醉的酒類。`}</p>
            <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: '600' }}>{`Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor (under 18) in the course of business.`}</p>
          </div>
          <p style={{ fontSize: '1vw', fontWeight: 'normal', margin: '0% 8%', fontWeight: '600' }}>{`©2022 Buyone.com Online Store. 版權所有`}</p>
        </div>
        <div style={{ display: 'flex', flex: 3, justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
          <a
            className='buttonsHover'
            href="#" style={{ color: 'black', textDecoration: 'none', fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', }} >
            {`使用條款`}
          </a>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', color: 'black', textDecoration: 'none', }}>{`私隱政策`}</a>
          <a
            className='buttonsHover'
            href="#" style={{ fontSize: '1vw', fontWeight: 'normal', margin: '5% 0%', color: 'black', textDecoration: 'none', }}>{`免責聲明及通知`}</a>
        </div>
      </div>
    </div >
  );
}


export default Home;
