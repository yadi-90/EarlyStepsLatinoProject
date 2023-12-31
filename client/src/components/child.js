

import { useState, useEffect } from "react";
import Form from "./form";

function Child(props) {
  let user = props.user;
  const [child, setChild] = useState([]);
  const [editChildId, setEditChildId] = useState(null);

  const loadChild = () => {
    fetch("/api/child")
      .then((response) => response.json())
      .then((child) => {
        setChild(child);
      });
  }

  useEffect(() => {
    loadChild();
  }, []);

  const onDelete = (child) => {
    return fetch(`/api/child/${child.id}`, {
      method: "DELETE"
    })
    .then((response) => {
      if (response.ok) {
        loadChild();
      } else {
        throw new Error('Error deleting child');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  

  const addChild = (newChild) => {
    setChild((child) => [...child, newChild]);
  };

  const updateChild = (savedChild) => {
    setChild((child) => {
      const newArrayChild = [];
      for (let ch of child) {
        if (ch.id === savedChild.id) {
          newArrayChild.push(savedChild);
        } else {
          newArrayChild.push(ch);
        }
      }
      return newArrayChild;
    })
    setEditChildId(null);
  }

  const onEdit = (child) => {
    const editingID = child.id;
    setEditChildId(editingID);
  }

  return (
    <div className="child">
      <h2> Child </h2>
      <ul>
        {child.map((child) => {
          if (child.id === editChildId) {
            return <Form initialChild={child} saveChild={updateChild} />
          } else {
            return (
              <li key={child.id}>
                {child.firstname} {child.lastname}
                <button type="button" onClick={() => { onEdit(child) }}>EDIT</button>
                <button type="button" onClick={() => { onDelete(child) }}>DELETE</button>
              </li>
            )
          }
        })}
      </ul>
      {!user ? (<h4>Please signup to add child to our DB </h4>) : (<Form saveChild={addChild} />)}
    </div>
  );
}

export default Child;




// import { useState, useEffect } from "react";
// import Form from "./form";

// function Students(props) {
//   let user = props.user;
//   // this is my original state with an array of students 
//   const [students, setStudents] = useState([]);

//   // New State to contro the existing student Id that the user wants to edit
//   const [editStudentId, setEditStudentId] = useState(null);

//   const loadStudents = () =>{
//     // A function to fetch the list of students that will be load anytime that list change
//     fetch("/api/students")
//       .then((response) => response.json())
//       .then((students) => {
//             setStudents(students);
//           });
//   }

//   useEffect(() => {
//     loadStudents();
//   }, []);

//   //A function to handle the Delete funtionality
//   const onDelete = (student) =>{
//     return fetch(`/api/students/${student.id}`, {
//       method: "DELETE"
//     }).then((response) => {
//       //console.log(response);
//       if(response.ok){
//         loadStudents();
//       }
//     })
//   }

//   const addStudent = (newStudent) => {
//     //console.log(newStudent);
//     //postStudent(newStudent);
//     setStudents((students) => [...students, newStudent]);
//   };

//   //A function to control the update in the parent (student component)

//   const updateStudent = (savedStudent) =>{
//     console.log("Line 29 savedStudent", savedStudent);
//     // This function should update the whole list of students - 
//     setStudents((students) => {
//       const newArrayStudents = [];
//       for(let student of students){
//         if(student.id === savedStudent.id){
//           newArrayStudents.push(savedStudent);
//         } else {
//           newArrayStudents.push(student);
//         }
//       }
//       return newArrayStudents;
//     })
//     // This line is only to close the form;
//     setEditStudentId(null);
//   }
  
//   const onEdit = (student) =>{
//     console.log("This is line 26 on student component", student);
//     const editingID = student.id;
//     console.log("Just the student id", student.id)
//     setEditStudentId(editingID);

//   }

//   return (
//     <div className="students">
//       <h2> List of Students </h2>
//       <ul>
//         {students.map((student) => {
//           if(student.id === editStudentId){
//             //something needs to happento allow the user edit that existing student
//             // At some point I need to pass the update function as props - connect this to the backend
//             return <Form initialStudent={student} saveStudent={updateStudent}/>
//           } else{
//             return (
//               <li key={student.id}>
//            {student.firstname} {student.lastname} 
//            <button type="button" onClick={() =>{onEdit(student)}}>EDIT</button>
//            <button type="button" onClick={() =>{onDelete(student)}}>DELETE</button>
//         </li>
//             )
//           }
//         })}
//       </ul>
//       {!user ? (<h4>Please signup to add students to our DB </h4>) : (<Form saveStudent={addStudent} />)}
      
//     </div>
//   );
// }

// export default Students;
