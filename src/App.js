import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import'./App.css'
import CandleComp from "./CandleComp";
import CutCake from "./CutCake";
import SelectKnife from "./SelectKnife";
import Wish from "./Wish";

function App() {
  const[wlc,setWlc]=useState(true)
  const[candle,setCandle]=useState(false)
  const[knife,setKnife]=useState(false)
  const[cake,setCake]=useState(false)
  const[wish,setWish]=useState(false)
  const handleComponent=()=>{
    setWlc(false)
    setCandle(true)
  }
  return (
    <>
    {wlc&&<div className="">
      <div className='w-50 m-auto'>
        <div className='Appdiv'>
      <Card body>
        <h3 className='text-danger'>Hello Nuzhat you are welcome</h3>
        <h4>Today is special day for you</h4>
        <h5>A web developer would like to celebrate your special day. Please co-operate him</h5>
        <Button onClick={handleComponent}>Forword</Button>
        </Card>
        </div>
      </div>
    </div>}
    {candle&&<CandleComp setWlc={setWlc} setKnife={setKnife} setCandle={setCandle}/>}
    {knife&&<SelectKnife setKnife={setKnife} setCake={setCake} setCandle={setCandle}/>}
    {cake&&<CutCake setWish={setWish} setKnife={setKnife} setCandle={setCandle} setCake={setCake}/>}
    {wish&&<Wish />}
    </>
  );
}

export default App;
