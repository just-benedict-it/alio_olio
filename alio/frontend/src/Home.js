import "./App.css";
import { useState, useEffect } from "react";
import "./Components/components.css";
import ProgressBar from "./Components/ProgressBar";

function Home() {
  const [testData, setTestData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://olio-back-server.herokuapp.com/chickens")
      .then((response) => response.json())
      .then((json) => {
        setTestData(
          json.sort((a, b) => {
            return b.completed - a.completed;
          })
        );
        setLoading((loading) => !loading);
        console.log("rendered!!");
      });
  }, []);

  const sortByNum = (data) => {
    setTestData(data);
    const sorted = [...testData].sort((a, b) => {
      return b.completed - a.completed;
    });
    console.log(sorted);
    setTestData(sorted);
  };

  return (
    <div>
      <h1>올리오</h1>
      <p>UP! 버튼을 눌러 원하는 치킨의 순서를 바꿔보세요!</p>
      <hr></hr>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {testData.map((item, idx) => (
            <ProgressBar
              sortByNum={sortByNum}
              key={idx}
              id={item.id}
              brand={item.brand}
              name={item.name}
              bgcolor={item.bgcolor}
              completed={item.completed}
              testData={testData}
              btnLimit={item.btnLimit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
