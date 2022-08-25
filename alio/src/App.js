import "./App.css";
import Item from "./Components/Item.js";
import { useState } from "react";
import ProgressBar from "./Components/Slider.js";

function App() {
  let testData = [
    { brand: "bhc", name: "뿌링클", bgcolor: "#6a1b9a", completed: 45 },
    { brand: "bbq", name: "황금올리브", bgcolor: "#00695c", completed: 60 },
    {
      brand: "Nene Chicken",
      name: "오리엔탈파닭",
      bgcolor: "#ef6c00",
      completed: 50,
    },
    { brand: "Kyochon", name: "레드콤보", bgcolor: "#w6x2s9", completed: 50 },
    {
      brand: "Nene Chicken",
      name: "스노윙 치킨",
      bgcolor: "#af6c00",
      completed: 50,
    },
    { brand: "Pelicana", name: "양념치킨", bgcolor: "#5gwe90", completed: 50 },
    {
      brand: "Goubne",
      name: "고추 바사삭",
      bgcolor: "#efec00",
      completed: 50,
    },
    {
      brand: "Hosigi",
      name: "매운 간장치킨",
      bgcolor: "#3f6c00",
      completed: 50,
    },
    { brand: "bhc", name: "맛초킹", bgcolor: "#tf6c00", completed: 50 },
    {
      brand: "CHEOGAJIP",
      name: "슈프림 양념치킨",
      bgcolor: "#bf6c00",
      completed: 50,
    },
    {
      brand: "Kyochon",
      name: "허니콤보",
      bgcolor: "#bf6c00",
      completed: 50,
    },
  ];

  return (
    <div>
      <h1>올리고</h1>
      <p>UP! 버튼을 눌러 원하는 치킨의 순서를 바꿔보세요!</p>
      <hr></hr>
      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          name={item.name}
          bgcolor={item.bgcolor}
          completed={item.completed}
          brand={item.brand}
        />
      ))}
    </div>
  );
}

export default App;
