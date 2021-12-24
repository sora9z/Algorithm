# 1강 Data Structure and algorithm

##  알고리즘이란? 
- 사전적 정의 : 어떤 문제를 해결하기 위한 절차, 방법, 명령어들의 집합
- 프로그래밍 : 주어진 문제를 해결하기 위한 자료구조와 연산 방법에 대한 선택
자료구조를 배워야 하는 이유 : 문제를 파악하고 내가 사용한 자료구조가 어떤 성질이여야 하는지 알아야 한다.

# 2 강 Linear Array

## Array와  List
- Array : 원소들을 순서대로 늘어놓는 것
- List :  data type이 다른 원소들 사용 가능.

## Python List에 활용할 수 있는 연산들
- 실행시간이 스트 길이에 독립적임 O(1)
  - .append() : 맨 끝에 원소 덧붙임
  - .pop()  : 맨 끝의 원소 하나를 꺼냄 (꺼낸 것을 출력)
              When index is out of range, it returns IndexError
  
- 리스트의 길이와 실행시간 비례함 O(n)
  - .insert(index,element) : 원소 삽입하기 
    - 삽입 할 위치인 index에 있던 기존의 element 들을 한 칸씩 땡기고 그곳에 삽입하므로.
      실행 시간이 list 길이와 비레하다. 
  - .del(element) : 원소 삭제하기
    - 원소 삭제 후 elements를 한 칸씩 당기고 마지막 element를 삭제한다.

- 추가 다른 연산
  - index(element) -> index 출력
    - 해당 element가 없다면 valError 
    - Time complexity : O(n) --> 각 리스트의 원소들을 비교해야하기 때문에.

- list.remove() , del list, list.pop() 의 차이점
  - list.remove
    - remove는 첫 번째로 matching 되는 원소를 제거한다.
        ```python
        myList=[1,2,3,2]
        myList.remove(2)
        myList
        #[1,3,2]
        ```
  - del list[index]
    - index에 해당되는 element 제거
        ```python
        myList=[1,2,3,2]
        del myList[2]
        myList
        #[1,2,2]
        ```
  - list.pop(index)
    - index 에 해당되는 element 제거 후 제거된 element return
        ```python
        myList=[4,3,5]
        myList.pop(1)
        #2
        myList
        [4,5]
        ```
    

  