// import { useState } from "react";

// const Form = (props) => {

//   const {initialStudent = {id: null, 
//                           firstname: "", 
//                         lastname: ""}} = props;


//   // This is the oroginal State with not initial student 
//   const [student, setStudent] = useState(initialStudent);

//   //create functions that handle the event of the user typing into the form
//   const handleNameChange = (event) => {
//     const firstname = event.target.value;
//     setStudent((student) => ({ ...student, firstname }));
//   };

//   const handleLastnameChange = (event) => {
//     const lastname = event.target.value;
//     setStudent((student) => ({ ...student, lastname }));
//   };

//   //A function to handle the post request
//   const postStudent = (newStudent) => {
//     return fetch("/api/students", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newStudent),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("From the post ", data);
//         props.saveStudent(data);
//       });
//   };

//     //A function to handle the Update request
//     const updateStudent = (existingStudent) =>{
//       return fetch(`/api/students/${existingStudent.id}`, {
//           method: 'PUT',
//           headers: {'Content-Type': 'application/json'}, 
//           body: JSON.stringify(existingStudent)
//         }).then((response) => {
//             return response.json()
//         }).then((data) => {
//           console.log("From put request ", data);
//           props.saveStudent(data);
//       });

//   }


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(student.id){
//       updateStudent(student);
//     } else{
//       postStudent(student);
//     }
    
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset>
//         <label>First Name</label>
//         <input
//           type="text"
//           id="add-user-name"
//           placeholder="First Name"
//           required
//           value={student.firstname}
//           onChange={handleNameChange}
//         />
//         <label>Last Name</label>
//         <input
//           type="text"
//           id="add-user-lastname"
//           placeholder="Last Name"
//           required
//           value={student.lastname}
//           onChange={handleLastnameChange}
//         />
//       </fieldset>
//       <button type="submit">{!student.id ? "ADD": "SAVE"}</button>
//     </form>
//   );
// };

// export default Form;


import { useState } from "react";

const Form = (props) => {

  const {initialChild = {id: null, 
                          firstname: "", 
                        lastname: ""}} = props;

  const [child, setChild] = useState(initialChild);

  const handleNameChange = (event) => {
    const firstname = event.target.value;
    setChild((child) => ({ ...child, firstname }));
  };

  const handleLastnameChange = (event) => {
    const lastname = event.target.value;
    setChild((child) => ({ ...child, lastname }));
  };

  const postChild = (newChild) => {
    return fetch("/api/child", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newChild),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error posting child');
      }
      return response.json();
    })
    .then((data) => {
      console.log("From the post ", data);
      props.saveChild(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

const updateChild = (existingChild) => {
  return fetch(`/api/child/${existingChild.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(existingChild)
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error updating child');
    }
    return response.json()
  })
  .then((data) => {
    console.log("From put request ", data);
    props.saveChild(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(child.id){
      updateChild(child);
    } else{
      postChild(child);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>First Name</label>
        <input
          type="text"
          id="add-child-name"
          placeholder="First Name"
          required
          value={child.firstname}
          onChange={handleNameChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          id="add-child-lastname"
          placeholder="Last Name"
          required
          value={child.lastname}
          onChange={handleLastnameChange}
        />
      </fieldset>
      <button type="submit">{!child.id ? "ADD": "SAVE"}</button>
    </form>
  );
};

export default Form;
