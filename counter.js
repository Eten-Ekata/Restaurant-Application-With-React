// const [number, setNumber] = useState(0);
//   const increaseNumber = (e) => {
//     e.preventDefault();
//     setNumber((prev) => (prev >= 10 ? 0 : prev + 1));
//   };
//   const decreaseNumber = (e) => {
//     e.preventDefault();
//     setNumber((prev) => (prev <= 0 ? 0 : prev - 1));
//   };

//   return (
//     <div className="counter">
//       <h1>{number}</h1>
//       <div className="flex">
//         <button onClick={increaseNumber}>increase</button>
//         <button onClick={decreaseNumber}>decrease</button>
//       </div>
//     </div>
//   );
// .counter {
//   max-width: 480px;
//   margin: 60px auto;
// }

// .counter h1 {
//   text-align: center;
//   margin-bottom: 120px;
// }

// .flex {
//   display: flex;
//   gap: 20px;
// }

// .flex button {
//   padding: 8px;
//   flex: 1 1 auto;
// }
// const { color, changeColor } = useTheme();
