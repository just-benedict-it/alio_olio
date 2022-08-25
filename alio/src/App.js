import "./App.css";
import Item from "./Components/Item.js";
import { useState, useEffect } from "react";
import "./Components/components.css";
import "./Components/button.css";
// import ProgressBar from "./Components/Slider.js";

function ProgressBar(props) {
  let { idx, bgcolor, completed, name, brand, getData, testData } = props;
  const [btnLimit, setbtnLimit] = useState(false);

  const totalUpOnce = (id) => {
    const dataCopy = [...testData];
    // console.log(dataCopy[idx]);
    console.log(id);
    dataCopy[id].completed += 1;
    getData(() => dataCopy);
    console.log(dataCopy);
    setbtnLimit((e) => !e);
  };

  const onClickUp = (e) => {
    e.preventDefault();
    {
      btnLimit
        ? alert("이미 올린 항목입니다")
        : totalUpOnce(e.nativeEvent.path[2].id);
    }
  };

  const containerStyles = {
    height: 50,
    width: "50%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
  };

  return (
    <div id={idx} className="bodyStyles">
      <div className="nameAndTotal">
        <span className="labelStyles">{`${name}`}</span>
        <span className="labelStyles">{`${completed}%`}</span>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles} className="fillerStyles">
          <span className="labelStylesSmall">{`${brand}`}</span>
        </div>
      </div>

      <div onClick={onClickUp}>
        <a href="#" className="button">
          UP!
        </a>
      </div>
    </div>
  );
}

const datas = [
  { brand: "bhc", name: "뿌링클", bgcolor: "#66FF00", completed: 45 },
  { brand: "bbq", name: "황금올리브", bgcolor: "#FFCC00", completed: 60 },
  {
    brand: "Nene Chicken",
    name: "오리엔탈파닭",
    bgcolor: "#ef6c00",
    completed: 59,
  },
  { brand: "Kyochon", name: "레드콤보", bgcolor: "#FF0000", completed: 50 },
  {
    brand: "Nene Chicken",
    name: "스노윙 치킨",
    bgcolor: "#af6c00",
    completed: 49,
  },
  {
    brand: "Pelicana",
    name: "양념치킨",
    bgcolor: "#CC0000",
    completed: 48,
  },
  {
    brand: "Goubne",
    name: "고추 바사삭",
    bgcolor: "#330000",
    completed: 48,
  },
  {
    brand: "Hosigi",
    name: "매운 간장치킨",
    bgcolor: "#660099",
    completed: 60,
  },
  { brand: "bhc", name: "맛초킹", bgcolor: "#CC33CC", completed: 50 },
  {
    brand: "CHEOGAJIP",
    name: "슈프림 양념치킨",
    bgcolor: "#FF6666",
    completed: 50,
  },
  {
    brand: "Kyochon",
    name: "허니콤보",
    bgcolor: "#bf6c00",
    completed: 50,
  },
];

function App() {
  const [testData, setTestData] = useState(datas);

  const getData = (data) => {
    setTestData(data);
    console.log(data);
    sortByNum();
  };

  const sortByNum = () => {
    const sorted = [...testData].sort((a, b) => {
      return b.completed - a.completed;
    });
    setTestData(sorted);
    console.log("renderd!!");
  };

  useEffect(() => sortByNum(), []);
  return (
    <div>
      <h1>올리오</h1>
      <p>UP! 버튼을 눌러 원하는 치킨의 순서를 바꿔보세요!</p>
      <hr></hr>

      {testData.map((item, idx) => (
        <ProgressBar
          getData={getData}
          key={idx}
          idx={idx}
          brand={item.brand}
          name={item.name}
          bgcolor={item.bgcolor}
          completed={item.completed}
          testData={testData}
        />
      ))}
    </div>
  );
}

export default App;
