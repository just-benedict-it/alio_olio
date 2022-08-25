// import { useState } from "react";
// import "./components.css";
// import "./button.css";

// const ProgressBar = (props) => {
//   let { bgcolor, completed, name, brand, rerender } = props;
//   const [total, setTotal] = useState(completed);
//   const [btnLimit, setbtnLimit] = useState(false);
//   const totalUpOnce = () => {
//     setTotal((completed) => completed + 1);
//     setbtnLimit((e) => !e);
//     rerender(completed);
//   };
//   const onClickUp = (e) => {
//     {
//       e.preventDefault();
//       completed++;
//       btnLimit ? alert("이미 올린 항목입니다") : totalUpOnce();
//     }
//   };

//   const containerStyles = {
//     height: 50,
//     width: "50%",
//     backgroundColor: "#e0e0de",
//     borderRadius: 50,
//     margin: 50,
//   };

//   const fillerStyles = {
//     height: "100%",
//     width: `${total}%`,
//     backgroundColor: bgcolor,
//     borderRadius: "inherit",
//   };

//   return (
//     <div className="bodyStyles">
//       <div className="nameAndTotal">
//         <span className="labelStyles">{`${name}`}</span>
//         <span className="labelStyles">{`${total}%`}</span>
//       </div>
//       <div style={containerStyles}>
//         <div style={fillerStyles} className="fillerStyles">
//           <span className="labelStylesSmall">{`${brand}`}</span>
//         </div>
//       </div>

//       <div onClick={onClickUp}>
//         <a href="#" className="button">
//           UP!
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;
