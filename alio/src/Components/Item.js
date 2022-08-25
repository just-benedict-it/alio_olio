// import { useState } from "react";

// function Item({ name, num }) {
//   const [total, setTotal] = useState(num);
//   const [btnLimit, setbtnLimit] = useState(false);
//   const totalUpOnce = () => {
//     setTotal((n) => n + 1);
//     setbtnLimit((e) => !e);
//   };
//   //   const totalDownOnce = () => {
//   //     setTotal((n) => n - 1);
//   //     setbtnLimit((e) => !e);
//   //   };
//   const onClickUp = () => {
//     {
//       btnLimit ? alert("투표를 완료하셨습니다") : totalUpOnce();
//     }
//   };
//   //   const onClickDown = () => {
//   //     {
//   //       btnLimit ? alert("투표를 완료하셨습니다") : totalDownOnce();
//   //     }
//   //   };

//   return (
//     <>
//       <p>
//         {name}
//         {total}
//       </p>
//       <button onClick={onClickUp}>올리고</button>
//       {/* <button onClick={onClickDown}>내리고</button> */}
//     </>
//   );
// }

// export default Item;
