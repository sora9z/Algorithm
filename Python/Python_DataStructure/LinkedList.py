
class Node:
    """링크드 리스트의 노드 클래스"""

    def __init__(self, data):
        self.data = data  # 실제 노드가 저장하는 데이터
        self.next = None  # 다음 노드에 대한 레퍼런스


class LinkedList:
    """링크드 리스트 클래스"""

    def __init__(self):
        self.head = None
        self.tail = None

    def find_node_with_data(self, data):
        """링크드 리스트에서 탐색 연산 메소드. 단, 해당 노드가 없으면 None을 리턴한다"""

        iterator = self.head
        while iterator is not None:
            if iterator.data == data:
                return iterator
            iterator = iterator.next
        return None

    def append(self, data):
        """링크드 리스트 추가 연산 메소드"""
        new_node = Node(data)

        # 링크드 리스트가 비어 있으면 새로운 노드가 링크드 리스트의 처음이자 마지막 노드다
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        # 링크드 리스트가 비어있지 않으면
        else:
            self.tail.next = new_node  # 가장 마지막 노드 뒤에 새로운 노드를 추가하고
            self.tail = new_node  # 마지막 노드를 추가한 노드로 바꿔준다.

    def __str__(self):
        """링크드 리스트를 문자열로 표현해서 리턴하는 메소드"""
        res_str = "|"

        # 링크드 리스트 안에 모든 노드를 돌기 위한 변수. 일단 가장 앞 노드로 정의한다.
        iterator = self.head

        # 링크드 리스트 끝까지 돈다
        while iterator is not None:
            # 각 노드의 데이터를 리턴하는 문자열에 더해준다.
            res_str += " {} |".format(iterator.data)
            iterator = iterator.next  # 다음 노드로 넘어간하

        return res_str

    def insert_after(self, previous_node, data):
        """링크드 리스트 주어진 노드 뒤 삽입 얀신 메소드"""
        #! 이 방법은 head node 앞에는 새로운 노드를 추가할 수 없다는 단점이 있다. (가장 앞에 삽입 불가)
        new_node = Node(data)

        # 노드의 삽입은 가장 마지막에 삽입할 경우와 노드 사이에 삽입할 경우로 나뉜다.
        # 가장 마지막 순서에 삽입할 때: tail 노드 다음에 노드를 삽입할 때
        if previous_node is self.tail:
            self.tail.next = new_node
            self.tail = new_node
        # 두 노드 사이에 삽입할 때 : 두 노드 사이에 새로운 노드를 삽입할 때
        else:
            new_node.next = previous_node.next
            previous_node.next = new_node

    def prepend(self, data):
        """링크드 리스트의 가장 앞에 데이터 삽입"""
        # 코드를 쓰세요
        new_node = Node(data)  # 추가 할 새로운 노드를 생성한다
        # head node가 비어있다면
        if self.head is None:
            self.head = new_node  # head에 새로운 노드를 할당한다.
            self.tail = new_node  # tail에 새로운 노드를 항당한다.
        # 비어있지 않다면
        else:
            # 새로운 노드의 next가 현재 head가 가리키는 노드를 가리키게 한다.
            new_node.next = self.head
            self.head = new_node  # head가 새로운 노드를 가리키게 한다.

    def delete_after(self, previous_node):
        """링크드 리스트 삭제 연산. 주어진 노드 뒤 노드를 삭제한다"""
        data = previous_node.next.data
        # 지우려는 노드가 tail 노드 일 때:
        if previous_node.next is self.tail:
            previous_node.next = None  # previous_node가 가리키는 노드를 None으로 처리한다.
            self.tail = previous_node
        # 두 노드 사이 노드를 지울 때
        else:
            previous_node.next = previous_node.next.next
        return data


## ! Test ##

# 새로운 링크드 리스트 생성
linked_list = LinkedList()

# 여러 데이터를 링크드 리스트 마지막에 추가
linked_list.append(2)
linked_list.append(3)
linked_list.append(5)
linked_list.append(7)
linked_list.append(11)

# 데이터 2를 갖는 노드 탐색
node_with_2 = linked_list.find_node_with_data(2)

if not node_with_2 is None:
    print(node_with_2.data)
else:
    print("2를 갖는 노드는 없습니다")

# 데이터 11을 갖는 노드 탐색
node_with_11 = linked_list.find_node_with_data(11)

if not node_with_11 is None:
    print(node_with_11.data)
else:
    print("11를 갖는 노드는 없습니다")

# 데이터 6 갖는 노드 탐색
node_with_6 = linked_list.find_node_with_data(6)

if not node_with_6 is None:
    print(node_with_6.data)
else:
    print("6을 갖는 노드는 없습니다")


#! insert_after 메서드 Test

print(linked_list)
node_2 = linked_list.find_node_with_data(2)  # 인덱스 2에 있는 노드 접근
linked_list.insert_after(node_2, 6)  # 인덱스 2 뒤에 6 삽입
print(linked_list)

head_node = linked_list.head  # 헤드 노드 접근
linked_list.insert_after(head_node, 9)  # 헤드 노드 뒤에 9 삽입
print(linked_list)


#! prepend 메서드 Test

# 새로운 링크드 리스트 생성
linked_list = LinkedList()

# 여러 데이터를 링크드 리스트 앞에 추가
linked_list.prepend(11)
linked_list.prepend(7)
linked_list.prepend(5)
linked_list.prepend(3)
linked_list.prepend(2)

print(linked_list)  # 링크드 리스트 출력

# head, tail 노드가 제대로 설정됐는지 확인
print(linked_list.head.data)
print(linked_list.tail.data)

#! delete_after 메서드 Test
node_2 = linked_list.find_node_with_data(7)
linked_list.delete_after(node_2)
print(linked_list)

second_to_last_node = linked_list.find_node_with_data(3)
print(linked_list.delete_after(second_to_last_node))
print(linked_list)
