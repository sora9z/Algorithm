# Linear array question 1 
# Add new element to list
## 정렬된 리스트에 주어진 원소 삽입하기
## 힌트 : 
## (1) 주어진 원소를 삽입할 위치를 찾는다.
## (2) 해당 위치에 원소를 삽입한다.
## 그 결과는 여전히 정렬된 상태를 유지할 것.

'''
리스트 L 과 정수 x 가 인자로 주어질 때, 리스트 내의 올바른 위치에 x 를 삽입하여 그 결과 리스트를 반환하는 함수 solution 을 완성하세요.

인자로 주어지는 리스트 L 은 정수 원소들로 이루어져 있으며 크기에 따라 (오름차순으로) 정렬되어 있다고 가정합니다.

예를 들어, L = (20, 37, 58, 72, 91) 이고 x = 65 인 경우, 올바른 리턴 값은 (20, 37, 58, 65, 72, 91) 입니다.

힌트: 순환문을 이용하여 올바른 위치를 결정하고 insert() 메서드를 이용하여 삽입하는 것이 한 가지 방법입니다.

주의: 리스트 내에 존재하는 모든 원소들보다 작거나 모든 원소들보다 큰 정수가 주어지는 경우에 대해서도 올바르게 처리해야 합니다.
'''
### Do it myself #1

'''
def solution(L,x):
    len_L=len(L)
    i=0
    
    while i<len_L:
        if x<=L[0]:
            L.insert(0,x)
            print("Index 0")
            break
        elif x>=L[-1]:
            L.insert(-1,x)
            print("last inde")
            break
        elif x>L[i]:
            i+=1
            print(i)
        else:
            L.insert(i,x)
            print(i,"th indx")
            break

L=[1,4,6,8,10]
x=int(input("Enter an integer:"))
print("Befor:",L)
solution(L,x)
print("After:",L)
### This code is too long.. tru again
'''
### Do it myself 2
def solution(L,x):
    len_L=len(L)
    i=0
    
    while i<=len_L:
        if x>L[-1]:
            L.insert(len_L,x)
            print("Index ",len_L)
            break
        elif x>L[i]:
            i+=1
        else:
            L.insert(i,x)
            print(i,"th indx")
            break

L=[1,4,6,8,10]
x=int(input("Enter an integer:"))
print("Befor:",L)
solution(L,x)
print("After:",L)



