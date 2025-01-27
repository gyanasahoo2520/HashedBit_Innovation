const students = [
    {
      student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
    {
      student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
    {
      student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37,
      },
    },
  ];
  
  const output = students.map(student => {
    const [name, subjects] = Object.entries(student)[0]; 
    const scores = Object.values(subjects); 
    const total = scores.reduce((sum, score) => sum + score, 0); 
    const average = Math.floor(total / scores.length); 
    return { [name]: { average } }; 
  });
  
  console.log(output);
