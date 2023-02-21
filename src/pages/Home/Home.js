import Banner from '../../components/Banner'



function Home() {
  return (
    <div style={{ backgroundColor: 'red', display: "flex", paddingLeft: '5%', paddingRight: '5%', flexDirection: 'column' }}>
      <Banner />
      <div style={{ backgroundColor: 'orange', flex: 1, flexDirection: 'row', display: 'flex' }}>

        <div>
          <a aria-current="page" href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </div>
        <div>
          <a href="#" >Home</a>
          <a href="#" >Home</a>
          <a href="#" >Home</a>
          <a href="#" >Home</a>
          <a href="#" >Home</a>
          <a href="#" >Home</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
