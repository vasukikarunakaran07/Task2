students=[
    {
        studentId:1,
        name:"Thaarani",
        grade:12,
        course:["Maths","Science","English"],
        attendance:{"2025-10-25": true,"2025-09-12":false},
        hobbies:{
            sports:["football","cricket","basket ball"],Studies:["Reading"]
        }
    },
    {
        studentId:2,
        name:"Muthalagi",
        grade:11,
        course:["Maths","Biology","Tamil"],
        attendance:{"2025-08-12":false,"2025-09-12":true},
        hobbies:{
             Studies:["Reading","Writing"],music:["Piano"]
        }
    },
    {
        studentId:3,
        name:"Hari",
        grade:12,
        course:["English","Maths"],
        attendance:{"2025-08-12":true,"2025-09-12":false},
        hobbies:{
             tecnical:["coding challenges","attending webinars"], sports:["football","cricket"]
        }
    },
    {
        studentId:4,
        name:"Shasvi",
        grade:2,
        course:["English","Tamil"],
        attendance:{"2025-08-12":false,"2025-09-12":true},
        hobbies:{
             playing:["hide-and-seek","running"],sports:["football"]
        }
    },
    {
        studentId:5,
        name:"Nivi",
        grade:10,
        course:["English","Tamil","Science","Biology"],
        attendance:{"2025-10-25": true,"2025-09-12":true},
        hobbies:{
             sports:["football","cricket"],Studies:["Reading","Writing"]
        }
    },
    {
        studentId:6,
        name:"Jelcy",
        grade:10,
        course:["English","Tamil","Science",],
        attendance:{"2025-10-25": false,"2025-09-12":true},
        hobbies:{
             playing:["hide-and-seek","running"],Studies:["Reading","Writing"]
        }
    }
]

//Student Details Display

const displayStudentsDetails=()=>{
    for(const student of students){
        console.log(`
            StudentId: ${student.studentId},
            Name: ${student.name},
            Grade: ${student.grade},
            Courses: ${student.course.join(",")}
        `)
        for(const key in student.attendance){
            console.log(`${key}:${student.attendance[key]}`)
        }
        for(const key in student.hobbies){
            console.log(`${key}:${student.hobbies[key]}`)
        }
    }
}
displayStudentsDetails()

//Filter Students By Grade

let filterStudentsByGrade= students.filter((grade)=>{
    return grade.grade==12
})
console.log(filterStudentsByGrade)

//Find Students By Id

let findStudentsById= students.find((stud)=>{
    return stud.studentId==4
})
console.log(findStudentsById)

//Record Attendance

const attendanceModule=(()=>{
const recordAttendance=((student,date)=>{
    if(student.attendance[date]===true ){
        return "Present"
    }
    else if(student.attendance[date]===false) {
        return "Absent"
    }
    else{
        return "No Record"
    }
})
return{recordAttendance:recordAttendance}
})();
const checkAttendance =(studentId,date,trueFalse)=>{
    const student= students.find((student)=>{
        return student.studentId===studentId
    })
    const check=attendanceModule.recordAttendance(student,date,trueFalse);
    return `Attendance:${check}`;
}

console.log(checkAttendance(1,"2025-09-12",true))

//Add a Course to a Student

const findStudentByStudentId= (studentId)=>{
    return students.find((student)=>student.studentId===studentId)
}
const addCourse=(studentId,courses)=>{
     const student = findStudentByStudentId(studentId)
     if(student){
        if(!student.course.includes(courses)){
            student.course.push(courses);
            return`${courses} course added to studentId ${studentId}`
        }
        else{
            return`${courses} course already exists`
        }
     }
     else{
        return"Student Not found"
     }
}
console.log(addCourse(4,"Biology"));

//Remove Student

const findStudentByIndex=(studentId)=>{
   return students.findIndex((fin)=> fin.studentId===studentId)}

const removeStudent=(studentId)=>{
    const index=findStudentByIndex(studentId)
    if(index !== -1){
        return students.splice(index,1)
    }
    else{
        return "does not exists"
    }
}
console.log(removeStudent(2));
displayStudentsDetails(findStudentByStudentId(2))

//Find Students With Most Hobbies

const findhobbies = (category)=>{
    let maxCount=0
    let result=[]
    for(const hobbie of students){
        const checkMax = hobbie.hobbies[category]
        if(checkMax){
            const checkLength= checkMax.length
            if(checkLength > maxCount){
                maxCount=checkLength
                result=[hobbie]
            }
            else if(checkLength == maxCount){
                result.push(hobbie)
            }
        }
    }
    return result
} 
console.log(findhobbies("Studies"))