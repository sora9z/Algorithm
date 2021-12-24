def binserch(L,x,l,u):
    if x>L[u] or x<L[l]:
        return -1
    
    mid=(l+u)//2
    print("mid",mid)
    if x==L[mid]:
        return mid
    elif x<L[mid]:
        return binserch(L,x,l,mid-1)
    else :
        return binserch(L,x,mid+1,u)

L1=[1,2,3,4,5,6,7,8,9]
u1=8
l1=0

ans1=binserch(L1,6,l1,u1)
# ans2=binserch(L2,4,l2,u2)
print(ans1)

