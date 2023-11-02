const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
///Users/cristina/src/2022H2TemplateFinal/client/build
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  //res.json({ message: 'Hello from My template ExpressJS' });
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

app.get('/assessment', (req, res) => {
  res.json({ message: 'Hello from the assessment page' })

}
);

app.get('/resources', (req, res)=>{
  res.json({ message: 'Hello from the resources page' })
}
);

app.post('/api/updateChildAssessmentScore', (req, res) => {
  const { childId, assessmentMessage } = req.body;
  const sql = `UPDATE child_assessments SET score = \$1 WHERE child_id = \$2 AND assessment_message = \$3`;
  const values = [childId, assessmentMessage];
  db.query(sql, values)
    .then((result) => {
      res.json(result.rows);
    }) 
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
 });
 // this is grabbing the children from the database
 app.get('/api/child', cors(), async (req, res) => {
  try {
    const { rows: child } = await db.query('SELECT * FROM child');
    res.send(child);
  } catch (e) {
    return res.status(400).json({ e });
  }
 });


// create the get request
// app.get('/api/students', cors(), async (req, res) => {
  // const STUDENTS = [

  //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
  //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
  //     { id: 3, firstName: 'Fariba', lastName: 'Dadko' },
  //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
  //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
  // ];
  // res.json(STUDENTS);
//   try {
//     const { rows: students } = await db.query('SELECT * FROM students');
//     res.send(students);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });
// this is posting new children int othe database
app.post('/api/child', cors(), async (req, res) => {
  const newChild = {
    firstname: req.body.firstname
  };
  const result = await db.query(
    'INSERT INTO child(firstname) VALUES($1) RETURNING *',
    [newChild.firstname]
  );
  
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});


// create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

//A put request - Update a student 
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//   console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId
//   const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
//   console.log("In the server from the url - the student id", studentId);
//   console.log("In the server, from the react - the student to be edited", updatedStudent);
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
//   const values = [updatedStudent.lastname, updatedStudent.firstname];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);

//   }catch(e){
//     console.log(e);
//     return res.status(400).json({e})
//   }
// })

app.put('/api/child/:childId', cors(), async (req, res) => {
  const childId = req.params.childId;
  const updatedChild = { id: req.body.id, firstname: req.body.firstname};
  const query = `UPDATE child SET  firstname=\$1 WHERE id=${childId} RETURNING *`;

  const values = [ updatedChild.firstname];
  try {
    const updated = await db.query(query, values);
    res.send(updated.rows[0]);
  } catch(e) {
    console.log(e);
    return res.status(400).json({e})
  }
 });


// delete request
// app.delete('/api/students/:studentId', cors(), async (req, res) =>{
//   const studentId = req.params.studentId;
//   //console.log("From the delete request-url", req.params);
//   await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//   res.status(200).end();

// });

app.delete('/api/children/:childId', cors(), async (req, res) => {
  const childId = req.params.childId;
  await db.query('DELETE FROM child WHERE id=\$1', [childId]);
  res.status(200).end();
 });

// create the POST request for a new user
// CREATE TABLE users (
// 	ID SERIAL PRIMARY KEY,
// 	lastname varchar(255),
// 	firstname varchar(255),
//     email varchar(255), 
//     sub varchar(255));
// app.post('/api/me', cors(), async (req, res) => {
//   const newUser = {
//     lastname: req.body.family_name,
//     firstname: req.body.given_name,
//     email: req.body.email,
//     sub: req.body.sub

//   }
//   //console.log(newUser);

//   const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
//   const valuesEmail = [newUser.email]
//   const resultsEmail = await db.query(queryEmail, valuesEmail);
//   if(resultsEmail.rows[0]){
//     console.log(`Thank you ${resultsEmail.rows[0].firstname} for comming back`)
//   } else{
//   const query = 'INSERT INTO users(lastname, firstname, email, sub) VALUES($1, $2, $3, $4) RETURNING *'
//   const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.sub]
//   const result = await db.query(query, values);
//   console.log(result.rows[0]);

//   }

// });

app.post('/api/me', cors(), async (req, res) => {
  const newUser = {
    lastname: req.body.family_name,
    firstname: req.body.given_name,
    email: req.body.email,
    sub: req.body.sub
  }
  const queryEmail = 'SELECT * FROM users WHERE email=\\$1 LIMIT 1';
  const valuesEmail = [newUser.email]
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if(resultsEmail.rows[0]){
    console.log(`Thank you ${resultsEmail.rows[0].firstname} for comming back`)
  } else{
    const query = 'INSERT INTO users(lastname, firstname, email, sub) VALUES(\$1, \$2, \$3, \$4) RETURNING *'
  const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.sub]
  const result = await db.query(query, values);
  console.log(result.rows[0]);

  }

});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
