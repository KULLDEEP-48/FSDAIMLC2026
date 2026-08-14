const employee={
    empId:2,
    name:'KULDEEP',
    designation:'CS student',
    salary:'00000',
    techstack:[{
        plang:"java",
        server:'apache Tomcat',
        database:'mySql',
        database2:'mongodb',
    },
{
        plang:"python",
        server:'jango',
        database:'mySql',
        database2:'mongodb',
    },
{
        plang:"react",
        server:'node server',
        database:'mySql',
        database2:'mongodb',
    }
]
}
console.log(employee.empId)
console.log(employee.name)
console.log(employee.designation)
console.log(employee.salary)
// console.log(employee.techstack)
console.log(employee.techstack[0])
console.log(employee.techstack[1].server)
console.log(employee.techstack[2])

// console.log(employee.techstack.database)