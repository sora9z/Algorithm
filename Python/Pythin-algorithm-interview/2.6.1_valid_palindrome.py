# 유요한 팰린드롬
# 리트코드 125 Valid Palindrome
# palindrome은 앞 뒤가 똑같은 단어나 문장으로, 뒤집어도 같은 말이 되는 단어 또는 문장을 말한다.
# 대소문자를 구분하지 않는다.

# My 풀이 
# Runtime: 52 ms, faster than 47.40% of Python3 online submissions for Valid Palindrome.
# Memory Usage: 19.6 MB, less than 12.74% of Python3 online submissions for Valid Palindrome

import collections
from typing import Deque
import re

def isPalindrome_mine(s:str)->bool:
    strs=[]
    
    # 먼저 문자를 변환한다 (공백을 제하고 소문자로 변경한다)
    # lambda 사용 
    
    for char in s:
        # 만약 char가 공백이면 strs에 추가한다.
        # isalnum은 영문자,숫자 여부를 판별하는 함수이다.
        if char.isalnum():
            #str에 추가하는데, 소문자로 변환하여 추가한다.
            strs.append(char.lower()) 
    # 문자를 비교한다 
    # 반복문을 사용한다
        # 첫 문자 != 끝 문자 -> false를 출력한다
    # 반복문이 끝나면 true를 출력한다
    length=len(strs)
    for i in range(int(length/2)):
        start=i
        end=length-i-1
        if(strs[start]!=strs[end]):
            return False
        
    return True

str1="A man, a plan, a canal: Panama"
str2="race a caddr"

print(isPalindrome_mine(str1))
print(isPalindrome_mine(str2))

# 책의 풀이 1
# Runtime: 316 ms, faster than 5.27% of Python3 online submissions for Valid Palindrome.
# Memory Usage: 19.5 MB, less than 12.74% of Python3 online submissions for Valid Palindrome.
def isPalindrome_1(s:str)->bool:
    strs=[]
    for char in s:
        if char.isalnum():
            strs.append(char.lower())

    # 팰린드로 여부 판별
    while len(strs)>1:
        if strs.pop(0)!=strs.pop():
            return False
    return True


# 책의 풀이 2 --> 데크사용 
# Runtime: 84 ms, faster than 10.63% of Python3 online submissions for Valid Palindrome.
# Memory Usage: 19.3 MB, less than 15.54% of Python3 online submissions for Valid Palindrome.
# 자요현 데크를 선언한다. 

def ispalindrome_2(s:str)->bool:
    strs:Deque=collections.deque()

    for char in s:
        if char.isalnum():
            strs.append(char.lower())
    
    while len(strs)>1:
        if strs.popleft()!=strs.pop():
            return False
    return True

# 책의 풀이 3 -> 파이썬의 최적화된 내부 기능 사용 -> 슬라이스 & 정규식 이용
# Runtime: 55 ms, faster than 32.89% of Python3 online submissions for Valid Palindrome.
# Memory Usage: 15.7 MB, less than 20.09% of Python3 online submissions for Valid Palindrome.
def isPalindrome_3(s:str)->bool:
    s=s.lower()
    s=re.sub('[^a-z0-9]', "", s)
    return s==s[::-1]

