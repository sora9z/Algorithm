// 로또의 최고 순위와 초저 순위
// 문제: 선택한 로또 번호와 당첨 번호가 인자로 주어진다.
// 선택한 번호에는 0이 포함 되어있을 수도 있다 
// 0에 어떤 번호가 들어가느야에 따라 선택한 로또 번호의 최서 순위와 최고 순위가 결정된다.
// 최고 순위와 최저 순위를 리턴하라.

// Input : 선택한 로또번로 배열(lottos) , 당첨 번호 배열 (win_nums) 둘 다 길이 6 , 0~45 이하의 정수를 요소로 한다
// outout 최고 순위와 최저 순위가 있는 배열 
// 주의 : 같은 숫자가 2개 이상 들어있지 않다.
// -----------------------------------------------------------------------------------

// 첫 번째 풀이
/*
function lottoHighestAndLowest(lottos,win_nums){
    
    var answer=[];
    
    // Rank를 판별하는 함수를 작성한다.
        // count (일치하는 요소 개수)를 담을 변수를 선언한다.
        // wins_num의 요소만큼 반복문을 돌린다.
            // 만약 lottos에 el이 있다면,
                // count ++;
        // 만약 count가 1보다 작거나 같다면 6을 출력한다
        // return 7-count;
    
    const lottoRank=()=>{
        let count=0;
        for(el of win_nums){
            if(lottos.indexOf(el)!==-1) count ++;
        }
        if(count<=1) return 6;
        return 7-count;
                        
    }

    // 최하의 순위를 구한다.  이미 0은 win_nums에 없기 때문에 따로 번호를 넣지 않아도 된다.
    let lowest=lottoRank()
    answer.push(lowest);

    // 최고의 순위를 구한다. 최고의 순위는 0의 갯수만큼 최하의 순위에 더해주면 된다.
    // temp 빈 배열을 한개 선언한다. lotts를 slice로 copy 한다.
        // count0을 선언한다 (0의 개수를 넣을 변수)
            // 반복문을 돌린다 (종결 조건은 0이 없는 경우이다)
                // 만약 0이 있다면 count ++
            // 만약 count가 6이면 초상위 순위는 1을 넣는다.
            // 아니라면 최하위 순위에 count0를 뺜다.
    
    let highest=0;

    if(lowest===1)
    highest=1;
   
    else{        
        let temp=lottos.slice();
        let count0=0;
        
        while(true){
            if(temp.indexOf(0)===-1) break;
            count0++;
            temp.splice(temp.indexOf(0),1)
        }  
        if(count0===6)
        highest=1;
        else      
        highest+=lowest-count0;
    }

    answer.push(highest)    
    
    return answer;
}

*/


// 두 번째 풀이

function lottoHighestAndLowest(lottos,win_nums){
    
    var answer=[];

    // lottos 길이만큼 반복
    // 만약 0이 있다면 zero_count ++
    // 0이 아니고, win_nums에 포함되어있는 요소라면
            // correct_count ++

    let zero_count=0;
    let correct_count=0;

    for(let i=0; i<lottos.length;i++){
        if(!lottos[i]) zero_count ++;
        else if(win_nums.includes(lottos[i])) correct_count ++;
    }

    const lowest=correct_count;
    const highest=zero_count+correct_count;
        
    // rank 객체를 만든다
     const rank={
         6 : 1,
         5 : 2,
         4 : 3,
         3 : 4,
         2 : 5,
         1 : 6,
         0 : 6,
              }

    answer[0]=rank[highest];
    answer[1]=rank[lowest];
    

    

    return answer;
}


// let input1=[44,1,0,0,31,25];
// const win_nums1=[31,10,45,1,6,19]
// console.log(lottoHighestAndLowest(input1,win_nums1))

// let input2=[0,0,0,0,0,0];
// const win_nums2=[38,19,20,40,15,25]
// console.log(lottoHighestAndLowest(input2,win_nums2))

let input3=[45,4,35,20,3,9];
const win_nums3=[20,9,3,45,4,35];
console.log(lottoHighestAndLowest(input3,win_nums3))

