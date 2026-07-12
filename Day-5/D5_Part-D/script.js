let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

function displayStudents(list = students) {
  let output = "";

  list.forEach((student, index) => {
    output += `
<div class="student">

<div>

<b>${student.name}</b><br>

Courses : ${student.course}

</div>

<div>

<button onclick="editStudent(${index})">Edit</button>

<button onclick="deleteStudent(${index})">Delete</button>

</div>

</div>
`;
  });

  document.getElementById("students").innerHTML = output;

  saveData();
}

function addStudent() {
  let name = document.getElementById("name").value;

  let course = document.getElementById("course").value;

  if (name == "" || course == "") {
    alert("Fill all fields");

    return;
  }

  students.push({
    name: name,

    course: course,
  });

  document.getElementById("name").value = "";

  document.getElementById("course").value = "";

  displayStudents();
}

function editStudent(index) {
  let newName = prompt("Enter new name", students[index].name);

  let newCourse = prompt("Enter course count", students[index].course);

  if (newName && newCourse) {
    students[index].name = newName;

    students[index].course = newCourse;

    displayStudents();
  }
}

function deleteStudent(index) {
  students.splice(index, 1);

  displayStudents();
}

document.getElementById("search").addEventListener("input", function () {
  let text = this.value.toLowerCase();

  let filtered = students.filter((student) =>
    student.name.toLowerCase().includes(text),
  );

  displayStudents(filtered);
});

displayStudents();
