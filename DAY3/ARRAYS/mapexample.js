let students = [
    {name : "Shravya", marks : 95},
    {name : "Namita", marks : 96},
    {name : "Namjoon", marks : 98},
    {name : "Jin", marks : 34},
]

let name = students.map((s)=>s.name)
console.log(name)

// to filter out things

let passed = students.filter((s) => s.marks > 35)
console.log(passed)
