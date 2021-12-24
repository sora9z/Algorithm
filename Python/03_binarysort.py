'''
리스트 L 과, 그 안에서 찾으려 하는 원소 x 가 인자로 주어질 때, x 와 같은 값을 가지는 원소의 인덱스를 리턴하는 함수 solution() 을 완성하세요. 
만약 리스트 L 안에 x 와 같은 값을 가지는 원소가 존재하지 않는 경우에는 -1 을 리턴합니다. 리스트 L 은 자연수 원소들로 이루어져 있으며, 
크기 순으로 정렬되어 있다고 가정합니다. 또한, 동일한 원소는 두 번 이상 나타나지 않습니다.
예를 들어,
L = [2, 3, 5, 6, 9, 11, 15]
x = 6
의 인자들이 주어지면, L[3] == 6 이므로 3 을 리턴해야 합니다.

또 다른 예로,
L = [2, 5, 7, 9, 11]
x = 4
로 주어지면, 리스트 L 내에 4 의 원소가 존재하지 않으므로 -1 을 리턴해야 합니다.
'''

def solution(L,x):
    lower=0
    upper=len(L)-1
    
    while lower<=upper:
        middle=(lower+upper)//2
        if L[middle]==x:
            return middle
        elif L[middle]>x:
            upper=middle-1
        else : lower=middle+1
    #if lower>upper:
    return -1


L=[2,5,7,9,11]
x1=9
x2=4
print(solution(L,x1))
print(solution(L,x2))
      