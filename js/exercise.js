let studentArray = [
    {
      name: "Kamal",
      mark: 92,
    },
    {
      name: "Nimal",
      mark: 73,
    },
    {
      name: "Namal",
      mark: 75,
    },
    {
      name: "Sunimal",
      mark: 100,
    },
    {
      name: "Somapala",
      mark: 15,
    },
    {
      name: "Abethilaka",
      mark: 40,
    },
    {
      name: "Gunarathna",
      mark: -42,
    }
  ];
  
  for (let student of studentArray) {
      getStudentGrade(student.name, student.mark);
  }
  
  function getGrade(mark) {
    let grade = "Invalid Mark";
  
    if (90 < mark) grade = "A+";
    else if (80 < mark) grade = "A-";
    else if (75 < mark) grade = "A";
    else if (65 < mark) grade = "B";
    else if (55 < mark) grade = "C";
    else if (35 < mark) grade = "S";
    else if (mark < 35 && mark > 0) grade = "F";
  
    return grade;
  }
  
  function getStudentGrade(name, marks) {
    console.log(name + " 's Grade for " + marks + " => " + getGrade(marks));
  }