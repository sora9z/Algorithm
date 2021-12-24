function mapCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr=[];
    function createNewArr(newArr){
      for(let i of arr){
        function square(num) {
            return Math.pow(num, 2);
          }
          
          function mul10(num) {
            return num * 10;
          }
          
          let output = mapCallback(square, [2, 4, 7]);
          console.log(output); // --> [4, 16, 49]
          function square(num) {
            return Math.pow(num, 2);
          }function square(num) {
            return Math.pow(num, 2);
          }
          
          function mul10(num) {
            return num * 10;
          }
          
          let output = mapCallback(square, [2, 4, 7]);
          console.log(output); // --> [4, 16, 49]
          
          
          function mul10(num) {
            return num * 10;
          }
          
          let output = mapCallback(square, [2, 4, 7]);
          console.log(output); // --> [4, 16, 49]
                          }   return newArr;    
    }
    return createNewArr(newArr);
  }

  function square(num) {
    return Math.pow(num, 2);
  }
  
  function mul10(num) {
    return num * 10;
  }
  
  let output = mapCallback(square, [2, 4, 7]);
  console.log(output); // --> [4, 16, 49]

  function square(num) {
    return Math.pow(num, 2);
  }
  
  function mul10(num) {
    return num * 10;
  }
  
  let output = mapCallback(square, [2, 4, 7]);
  console.log(output); // --> [4, 16, 49]
  