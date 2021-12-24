// 31_studentReport
//문제 : 객체를 요소로 갖는 배열을 입력받아 조건에 맞게 변형된 배열을 리턴한다
// 1. 남학생들의 정보는 제외한다. 2. grades 속성값은 평균값으로 바꾼다.
// input : 객체는 name, gender, contury, grades 속성을 갖는다.
// output : 배열을 리턴한다. 배열로 되어있는 학생들의 성적을 number 타입의 평균값으로 변형해야 한다.
// 주의 : 반복문 사용 금지 , 
//------------------------------------------------

function studentReports(students){

    // filter를 사용하여 여학생 배열만 추린다
    // map을 사용하여 각 요소에 접근하고
        // reduce를 사용하여 grades의 평균값 을 구한다
    // 결과값을 return 한다.

    // let femaleStd=student.filter((el)=>el.gender==='female')
    let filterStu = students.filter(function(el) {
        return el.gender === 'female';
      });
    
      let result = filterStu.map(function(el){
        el.grades = (el.grades.reduce(function(acc, cur){
          return acc += cur;
        }))/el.grades.length;
        return el;
      });
      return result;

    // let result= femaleStd.map((std)=>{
    //     std.grades= (std.grades.reduce((acc,cur)=>{
    //         return acc+=cur;
    //     }))/std.length;

    //     return std;
       
    // });
    // return result

}


let studentList = [
    {
      name: 'Anna',
      gender: 'female',
      grades: [4.5, 3.5, 4],
    },
    {
      name: 'Dennis',
      gender: 'male',
      country: 'Germany',
      grades: [5, 1.5, 4],
    },
    {
      name: 'Martha',
      gender: 'female',
      grades: [5, 4, 4, 3],
    },
    {
      name: 'Brock',
      gender: 'male',
      grades: [4, 3, 2],
    },
  ];
  
  let output = studentReports(studentList);
  
  console.log(output); 

 