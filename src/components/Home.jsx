




// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// export default function Home() {
//   const [todolist, settodolist] = useState([]);
//   const [todoTitle, setTodoTitle] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   async function fetchtodolist() {
//     const response = await fetch("http://localhost:3001/todos");
//     const fetchedtodolist = await response.json();
//     settodolist(fetchedtodolist);
//   }

//   useEffect(() => {
//     fetchtodolist();
//   }, []);
//   const data = {
//     id: String(Date.now()),
//     title: todoTitle,
//     completed: false,
//   };
//   const handleAdd = async (data) => {
//     const response = await fetch("http://localhost:3001/todos", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const newData = await response.json();
//     settodolist((prevState) => [...prevState, newData]);
//     setTodoTitle("");
//   };
//   const handleDelete = async (todoId) => {
//     const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
//       method: "DELETE",
//     });
//     settodolist((prevState) => {
//       return prevState.filter((fuckyou) => {
//         return fuckyou.id !== todoId;
//       });
//     });
//   };

//   const handlePatch = async (data) => {
//     const response = await fetch("http://localhost:3001/todos", {
//       method: "PATCH",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   };



//   console.log(todolist);


//   return (
//     <>
//       <div class=" text-center mr-5">
//         <h1 className="font-mono text-2xl mr-5">
//           <b>TO DO LISTS</b>
//         </h1>
//         <div class="flex justify-center">
//           <div>
//             <input
//               type="text"
//               class="bg-gray-500  text-black  rounded-lg  w-80 ps-5 p-2.5 "
//               placeholder="Title"
//               value={todoTitle}
//               onChange={(e) => setTodoTitle(e.target.value)}
//             />
//           </div>

//           <div>
//             {isEditing ? (
//                 <button
//                 type="submit"
//                 class=" py-2 px-2 ms-1 text-black bg-teal-200 rounded-lg border border-teal-700 hover:bg-teal-500 "
//                 onClick={() => handlePatch(data)}
//               >
//                 Confirm
//               </button>
              
//             ) : (<button
//               type="submit"
//               class=" py-2 px-2 ms-1 text-black bg-teal-200 rounded-lg border border-teal-700 hover:bg-teal-500 "
//               onClick={() => handleAdd(data)}
//             >
//               Add
//               <i class="fa-solid fa-plus"></i>
//             </button>
            
//             )}
//           </div>
//         </div>
//       </div>
//       <div class="flex justify-center mt-5 mr-20 ">
//         <ol class=" w-80 h-46 bg-gray-500 px-3 pb-3 rounded-lg">
//           {todolist.map((item) => (
//             <li>
//               <div class="flex items-center justify-between p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
//                 <div>
//                   <input
//                     id="checkbox-item-11"
//                     type="checkbox"
//                     value=""
//                     class="w-4 h-4   rounded "
//                   />
//                 </div>
//                 <p>{item.title}</p>
//                 <div>
//                   <button
//                     type="button"
//                     class="text-black  bg-teal-200 hover:bg-teal-800 rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 "
//                     onClick={() => setIsEditing(true)}
//                   >
//                     <i class="fa-solid fa-pen-to-square"></i>
//                   </button>
//                   <button
//                     type="button"
//                     class="text-black bg-teal-200 hover:bg-teal-800 rounded-lg text-sm p-1.5  inline-flex items-center me-2 "
//                     onClick={() => handleDelete(item.id)}
//                   >
//                     <i class="fa-solid fa-trash"></i>
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </>
//   );
// }
