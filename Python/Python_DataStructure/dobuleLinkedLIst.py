class Node:
    """더블 링크드 리트 노드"""

    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class DobuleLinkedLIst:
    """더블 링그크 리스트"""

    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, data):
        """더블링크드 리스트 추가 연산 메소드"""
        new_node = Node(data)  # 새로운 데이터르 저장하는 노드

        # 링크드 리스트가 비어있는 경우
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:  # 더블 링크드리스트에 데이터가 이미 있는 경우
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node

    def insert_after(self, previous_node, data):
        """링크드 리스트 추가 연산 메소드"""
        # 삽입할 새 노드를 만든다
        new_node = Node(data)
        # tail에 삽입하는 경우
        if(previous_node == self.tail):
            previous_node.next = new_node  # previous_node의 next로 new_node를 가리킨다
            new_node.prev = previous_node  # new_node의 prev는 previous_node를 가가리킨다
            self.tail = new_node  # tail은 new_node를 가리킨다
        # 노드 사이에 삽입하는 경우
        else:
            new_node.prev = previous_node  # new_node의 이전 노드는 previous_node를 가리킨다
            # 이전 노드의 다음 노드를 new_node.next로 가리킨다.
            new_node.next = previous_node.next
            previous_node.next.prev = new_node  # 이전 노드의 다음 노드의 이전 노드로 new_node를 가리킨다
            previous_node.next = new_node  # 이전 노드의 다음 노드로 new_node를 가리킨다

    def prepend(self, data):
        """링크드 리스트 가장 앞에 데이터를 추가시켜주는 메소드"""
        # 새로운 node를 만든다
        new_node = Node(data)

        # 리스트가 비어있다면
        if(self.head is None):
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    # ! 삭제 연산 : doubly linked list는 이전 노드와 다음 노드 둘 다 가리키기때문에 인자로 삭제하려는 노드만 넘긴다.
    # ! O(1)으로 삭제가 가능하다
    # 지우려는 노드가 링크드 리스트에 남은 마지막 노드인 경우 head와 tail에 none
    # 지우려는 노드가 head node인 경우
    # 지우려는 노드가 tail인 겨우
    # 지우려는 노드가 노드 사이에 있는 경우
    def delete(self, node_to_delete):
        """더블리 링크드 리스트 삭제 연산 메소드"""
        # 링크드 리스트에 한 개의 노드만 남아있는 경우
        # 링크드 리스트에서 마지막 남은 데이터를 삭제할 때
        if node_to_delete is self.head and node_to_delete is self.tail:
            self.tail = None
            self.head = None

        # 링크드 리스트 가장 앞 데이터 삭제할 때
        elif node_to_delete is self.head:
            self.head = self.head.next
            self.head.prev = None

        # 링크드 리스트 가장 뒤 데이터 삭제할 떄
        elif node_to_delete is self.tail:
            self.tail = self.tail.prev
            self.tail.next = None

        # 두 노드 사이에 있는 데이터 삭제할 때
        else:
            node_to_delete.prev.next = node_to_delete.next
            node_to_delete.next.prev = node_to_delete.prev

        # 삭제하는 노드 데이터 리턴
        return node_to_delete.data

    def find_node_at(self, index):
        """링크드 리스트 접근 연산 메소드. 파라미터 인덱스는 항상 있다고 가정한다."""

        iterator = self.head  # 링크드 리스트를 돌기 위해 필요한 노드 변수

        # index 번째 있는 노드로 간다.
        for _ in range(index):
            iterator = iterator.next

        return iterator

    def find_node_with_data(self, data):
        """링크드 리스트에서 주어진 데이터를 갖고있는 노드를 리턴한다. 단, 해당 노드가 없으면 None을 리턴한다"""

        iterator = self.head  # 링크드 리스트를 돌기 위해 필요하 노드 변수
        while iterator is not None:
            if iterator.data == data:
                return data
            iterator = iterator.next
        return None

    def __str__(self):
        """링크드 리스드를 문자열로 표현해서 리턴하는 메소드"""
        res_str = "|"

        # 링크드 리스트 안에 모든 노드를 돌기 위한 변수. 일단 가장 앞 노드로 정의한다.
        iterator = self.head

        # 링크드 리스트 끝까지 돈다.
        while iterator is not None:
            # 각 노드의 데이터를 리턴하는 문자열에 더해준다
            res_str += " {} |".format(iterator.data)
            iterator = iterator.next  # 다음 노드로 넘어간다
        return res_str

#! ========== teset ===============


# 빈 더블 링크드 리스트 정의
my_list = DobuleLinkedLIst()

# 더블 링크드 리스트에 데이터 추가
my_list.append(2)
my_list.append(3)
my_list.append(5)
my_list.append(7)

# print(my_list)

my_list.prepend(11)
my_list.prepend(8)
my_list.prepend(5)
my_list.prepend(9)
my_list.prepend(6)


print(my_list)
# print(my_list.head.data)
# print(my_list.tail.data)

# 두 노드 사이에 있는 노드 삭제
node_at_index_2 = my_list.find_node_at(2)
print(node_at_index_2)
my_list.delete(node_at_index_2)
print(my_list)

# 가장 앞 노드 삭제
head_node = my_list.head
print(my_list.delete(head_node))
print(my_list)

# 가장 뒤 노드 삭제
tail_node = my_list.tail
my_list.delete(tail_node)
print(my_list)

# 마지막 노드 삭제
last_node = my_list.head
my_list.delete(last_node)
print(my_list)
