# Recursive algorithm practice - Make fibonacci function by using iteratively

def fibonacci_iteratively(n):

    n1=0
    n2=1
    n3=0
 
    for i in range(n-1):
        n3=n1+n2
        n1=n2
        n2=n3
    return n3

a=int(input("Enter an integer:"))
print(fibonacci_iteratively(a))


