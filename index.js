// const StudentName = document.getElementById("StudentName")
// const StudentAge = document.getElementById("StudentAge")
// const StudentGrade = document.getElementById("StudentGrade")

// const Add = document.getElementById("Add")


// let tablecount = 0;

// // if tablecount = 1 element is showed else not


// function addfunction() {
//  // create element


//  // if value is not empty

//    if(StudentName.value && StudentAge.value && StudentGrade.value !== "") {
    
   
//     const Table = document.createElement("div")
        
//     Table.className = "TableClass"
//     Table.style.backgroundColor = "#EBEBEB"
//     Table.style.border = "2px solid"
//     Table.style.borderColor = "#7C7C7C"
//     Table.style.height = "80px"
//     Table.style.width = "400px"
//     Table.style.borderRadius = "10px"

//     const NameText = document.createElement("div")
//     const AgeText = document.createElement("div")
//     const GradeText = document.createElement("div")

//     NameText.innerText = `Student Name: ${StudentName.value}`
//     NameText.style.fontWeight = "bold"
//     NameText.style.fontFamily = "Arial"

//     AgeText.innerText = `Student Age: ${StudentAge.value}`
//     AgeText.style.fontWeight = "normal"
//     AgeText.style.fontFamily = "Arial"

//     GradeText.innerText = `Student Grade: ${StudentGrade.value}`
//     GradeText.style.fontWeight = "normal"
//     GradeText.style.fontFamily = "Arial"

//     Table.appendChild(NameText)
//     Table.appendChild(AgeText)
//     Table.appendChild(GradeText)

//     document.body.appendChild(Table)

//     // local storage save table

//     // if (document.getElementsByClassName("TableClass").length > 1 && Table == Table) { // if theres the same values
//     //     Table.remove()

//     //     // Table.appendChild(NameText)
//     //     // Table.appendChild(AgeText)
//     //     // Table.appendChild(GradeText)

//     // } 
//     // console.log(document.getElementsByClassName("TableClass").length)

//     // local storage


//     const StudentObject = {
//         Name: StudentName.value,
//         Age: StudentAge.value,
//         StudentGrade: StudentGrade.value
//     }

//     console.log(StudentObject)

//     localStorage.setItem("Identity", JSON.stringify(StudentObject))

    

//     // if(StudentObject.length > 1 && StudentObject == StudentObject) {
//     //     // StudentObject.remove()
//     //     Table.remove()
//     // }

//     // local storage save it

//     // if(StudentObject.value == StudentObject.value) {
//     //     console.log(StudentObject) = false
//     // }

//   }
// }


const StudentName = document.getElementById("StudentName");
const StudentAge = document.getElementById("StudentAge");
const StudentGrade = document.getElementById("StudentGrade");
const Add = document.getElementById("Add");

let students = JSON.parse(localStorage.getItem("students")) || []; // Retrieve existing students from localStorage

// Function to render saved students from localStorage
function renderStudents() {
  students.forEach(student => {
    createStudentTable(student);
  });
}

// Function to create and display a student's table
function createStudentTable(student) {
  const Table = document.createElement("div");

  Table.className = "TableClass";
  Table.style.backgroundColor = "#EBEBEB";
  Table.style.border = "2px solid";
  Table.style.borderColor = "#7C7C7C";
  Table.style.height = "80px";
  Table.style.width = "400px";
  Table.style.borderRadius = "10px";
  Table.style.marginBottom = "10px";

  const NameText = document.createElement("div");
  const AgeText = document.createElement("div");
  const GradeText = document.createElement("div");

  NameText.innerText = `Student Name: ${student.Name}`;
  NameText.style.fontWeight = "bold";
  NameText.style.fontFamily = "Arial";

  AgeText.innerText = `Student Age: ${student.Age}`;
  AgeText.style.fontWeight = "normal";
  AgeText.style.fontFamily = "Arial";

  GradeText.innerText = `Student Grade: ${student.Grade}`;
  GradeText.style.fontWeight = "normal";
  GradeText.style.fontFamily = "Arial";

  Table.appendChild(NameText);
  Table.appendChild(AgeText);
  Table.appendChild(GradeText);

  document.body.appendChild(Table);
}

// Add function to save data and update UI
function addfunction() {
  if (StudentName.value && StudentAge.value && StudentGrade.value !== "") {
    const StudentObject = {
      Name: StudentName.value,
      Age: StudentAge.value,
      Grade: StudentGrade.value
    };

    // Add the new student to the array
    students.push(StudentObject);

    // Save to localStorage
    localStorage.setItem("students", JSON.stringify(students));

    // Display the new student
    createStudentTable(StudentObject);

    // Clear input fields
    StudentName.value = "";
    StudentAge.value = "";
    StudentGrade.value = "";
  }
}

// Attach event listener
Add.addEventListener("click", addfunction);

// Render students on page load
renderStudents();
