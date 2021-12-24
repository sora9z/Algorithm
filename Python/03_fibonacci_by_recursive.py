# Recursive algorithm practice - Make fibonacci function by using recursively

def fibonacci(n):
    if n<=2 and n>0:
        return 1
    elif n==0: return 0

    else:return fibonacci(n-1)+fibonacci(n-2)

number=int(input("Enter an interger :"))

print(fibonacci(number))10
