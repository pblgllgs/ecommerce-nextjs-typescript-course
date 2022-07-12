interface Person {
    name: string,
}

interface Student extends Person {
    age: number,
}

interface PostGraduateStudent extends Person {
    age: number,
    projects:string[]
}

interface Car {
    make: string,
    model: string,
}

type Vehicle = Car | Student | PostGraduateStudent;

type StudentInfo<T extends any = Student > = T extends Student ? {
    data: T,
    grades:number[],
}: string



export default function play() {

    function logStudentInfo(info: StudentInfo<Student>){
        console.log(info.data.name)
        console.log(info.data.age)
    }

    const info:StudentInfo = {
        data: {
            name: 'John',
            age: 20,
        },
        grades: [1,2,3,4,5],
    }
    logStudentInfo(info)
}