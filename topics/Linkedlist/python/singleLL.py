class Node:
    def __init__(self, val):
        self.data = val
        self.next = None

class linklist:
    def __init__(self):
        self.head=None
    def append(self, val):
        newN = Node(val)
        if self.head is None:
            self.head = newN
        else:
            curN = self.head
            while curN.next is not None:
                curN = curN.next
            curN.next = newN
    def display(self):
        curN = self.head
        while curN is not None:
            print(curN.data, end=" ")
            curN = curN.next
        print('None')

obj = linklist()
obj.append(10)
obj.append(20)
obj.append(30)

obj.display()
