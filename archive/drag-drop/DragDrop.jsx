// "use client";
//
// import { useState } from "react";
// // import classes from "./drag-drop.module.css"; // создадим позже
//
// export default function DragDropImage({ onImageSelect }) {
//   const [preview, setPreview] = useState(null);
//
//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith("image/")) {
//       setPreview(URL.createObjectURL(file));
//       onImageSelect(file); // передаем файл наверх
//     }
//   };
//
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       setPreview(URL.createObjectURL(file));
//       onImageSelect(file);
//     }
//   };
//
//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };
//
//   return (
//     <div
//       className={classes.dropZone}
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//     >
//       <p>Drag and drop an image here, or click to select</p>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className={classes.fileInput}
//       />
//       {preview && (
//         <img src={preview} alt="Preview" className={classes.preview} />
//       )}
//     </div>
//   );
// }
