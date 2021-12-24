# 입력으로 주어지는 리스트 X의 첫 원소와 마지막 원소의 합을 리턴하는 함수 solution()완성
# def solution()

## 1. Do it myself

def solution(x):
    answar=x[0]+x[-1]
    return answar

x=[]
while True:
    k=int(input("Enter elements of list:"))
    if k is 00000:
        break
    x.append(k)
    
y=solution(x)
print(x[0],x[-1],y)

