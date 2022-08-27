import axios from "axios";

// let { idx, bgcolor, completed, name, brand, sortByNum, testData, btnLimit } =
//     props;

//   const totalUpOnce = (id) => {
//     const dataCopy = [...testData];
//     // console.log("id : ", id);
//     dataCopy[id].completed += 1;
//     dataCopy[id].btnLimit = !btnLimit;

//     sortByNum(() => dataCopy);

//   };

//   const onClickUp = (e) => {
//     e.preventDefault();
//     {
//       btnLimit
//         ? alert("이미 올린 항목입니다")
//         : totalUpOnce(e.nativeEvent.path[2].id);
//     }
//   };

function ProgressBar(props) {
  let {
    id,
    bgcolor,
    completed,
    name,
    brand,
    testData,
    btnLimit,

    sortByNum,
  } = props;

  const idPlusOne = (clickedId) => {
    const dataCopy = [...testData];
    // dataCopy.filter(dataCopy.id == clickedId)
    dataCopy.map((item) => {
      if (item.id == clickedId) {
        item.completed += 1;
        item.btnLimit = !btnLimit;
      }
    });
    sortByNum(() => dataCopy);
    axios.post(`http://127.0.0.1:8000/chickens/${clickedId}`);
  };
  const onClick = (e) => {
    e.preventDefault();
    const clickedId = e.nativeEvent.path[2].id;
    {
      btnLimit ? alert("이미 올려버린 치킨입니다") : idPlusOne(clickedId);
    }
  };
  const containerStyles = {
    height: 20,
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
    <div id={id} className="bodyStyles">
      <div className="nameAndTotal">
        <span className="labelStyles">{`${name}`}</span>
        <span className="labelStyles">{`${completed}%`}</span>
      </div>
      <div style={containerStyles} className="containerStyles">
        <div style={fillerStyles} className="fillerStyles">
          <span className="labelStylesSmall">{`${brand}`}</span>
        </div>
      </div>
      <div className="buttonContainer">
        <a href="#" className="button" onClick={onClick}>
          UP!
        </a>
      </div>
    </div>
  );
}

export default ProgressBar;
