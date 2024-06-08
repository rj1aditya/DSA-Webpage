#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node(int val)
    {
        next = nullptr;
        data = val;
    }
};

class forward_list
{
public:
    Node *head;
    forward_list() : head(nullptr)
    {
    }
    // this constructor can accept argument like
    // linkedlist obj{1,2,3,4,5};
    forward_list(initializer_list<int> ll) : head(nullptr)
    {
        for (auto value : ll)
            append(value);
    }

    forward_list(int llSize, int value) : head(nullptr)
    {
        while (llSize--)
            append(value);
    }

    forward_list(int llSize) : head(nullptr)
    {
        while (llSize--)
            append(0);
    }

    void append(int val)
    {
        Node *newNode = new Node(val);
        if (head == nullptr)
            head = newNode;
        else
        {
            Node *currentNode = head;
            while (currentNode->next != nullptr)
                currentNode = currentNode->next;

            currentNode->next = newNode;
        }
    }

    void printlinkedlist()
    {
        Node *currentNode = head;
        while (currentNode != nullptr)
        {
            cout << currentNode->data << " ";
            currentNode = currentNode->next;
        }
    }
    void clear()
    {
        Node *curr = head;

        while (head != nullptr)
        {
            head = curr->next;
            delete curr;
            curr = head;
        }
    }

    // Delete various nodes
    void deleteFirstNode()
    {
        if (head == nullptr)
            return;

        Node *currHead = head;
        head = head->next;
        delete currHead;
    }
    void deleteLastNode()
    {
        if (head == nullptr)
            return;

        // To handle in case if only single node element present in the ll.
        if (head->next == nullptr)
        {
            delete head;
            head = nullptr;
            return;
        }
        Node *prevNode = nullptr;
        Node *currNode = head;

        while (currNode->next != nullptr)
        {
            prevNode = currNode;
            currNode = currNode->next;
        }
        prevNode->next = nullptr;
        delete currNode;
    }
    void deleteKthNode(int k)
    {
        // Write your code here.
        if (head == nullptr)
            return;

        if (k == 0)
        {
            Node *currN = head;
            head = head->next;
            delete currN;
            return;
        }

        Node *prevNode = head;
        Node *currNode = head;
        int cnt = 0;
        while (currNode != nullptr)
        {
            if (cnt++ == k)
            {
                prevNode->next = currNode->next;
                delete currNode;
                return;
            }
            prevNode = currNode;
            currNode = currNode->next;
        }
    }
    void deleteNodeWithNValue(int val)
    {
        // Write your code here.
        if (head == nullptr)
            return;

        if (head->data == val)
        {
            Node *currN = head;
            head = head->next;
            delete currN;
            return;
        }

        Node *prevNode = head;
        Node *currNode = head;
        int cnt = 0;
        while (currNode != nullptr)
        {
            if (currNode->data == val)
            {
                prevNode->next = currNode->next;
                delete currNode;
                return;
            }
            prevNode = currNode;
            currNode = currNode->next;
        }
    }

    // Insert element in the linked list
    void insertElemAtFirstNode(int val)
    {
        Node *currN = new Node(val);
        currN->next = head;
        head = currN;
    }
    void insertElemAtLastNode(int val)
    {
        Node *currN = new Node(val);
        if (head == nullptr)
        {
            head = currN;
            return;
        }
        Node *lastN = head;
        while (lastN->next != nullptr)
            lastN = lastN->next;
        lastN->next = currN;
    }
    void insertElemAtMidNode(int val) {}
    void insertElemAfterKthNode(int k, int val)
    {
        if (k == 0)
        {
            insertElemAtFirstNode(val);
            return;
        }

        int cur = 1;
        Node *temp = head;
        while (cur < k && temp != nullptr)
        {
            cur++;
            temp = temp->next;
        }
        if (temp == nullptr)
        {
            cout << "Invalid kth number" << endl;
            return;
        }
        Node *currN = new Node(val);
        currN->next = temp->next;
        temp->next = currN;
    }
    void insertElemAfterNValue(int val, int data)
    {
        if (head == nullptr)
            return;
        Node *currN = head;
        while (currN != nullptr)
        {
            if (currN->data == val)
                break;
            currN = currN->next;
        }
        if (currN == nullptr || currN->data != val)
        {
            cout << "val: " << val << " Not found in the linkedlist\n";
            return;
        }
        Node *newN = new Node(data);
        newN->next = currN->next;
        currN->next = newN;
    }
    void insertElemBeforeNValue(int val) {}

    ~forward_list()
    {
        clear();
    }
};

int main()
{
    // forward_list will be created with intitializer list with 4 element value{1,2,3,4}
    forward_list obj1{1, 2, 3, 4};
    // forward_list will be created with 4 element value{5,5,5,5}
    forward_list obj2(4, 5);
    // forward_list will be created with 4 element value{0,0,0,0}
    forward_list obj3(4);
    // forward_list will be created with initialy no elements
    forward_list obj4;
    obj4.deleteFirstNode();
    obj4.printlinkedlist();
    cout << endl;
    obj4.append(6);
    obj4.append(7);
    obj4.append(8);
    obj4.append(9);
    obj1.printlinkedlist();
    cout << endl;
    obj1.deleteFirstNode();
    obj1.printlinkedlist();
    cout << endl;
    obj2.printlinkedlist();
    cout << endl;
    obj3.printlinkedlist();
    cout << endl;
    obj4.insertElemAtFirstNode(0);
    obj4.insertElemAfterKthNode(0, -1);
    obj4.insertElemAfterKthNode(10, -2);
    obj4.printlinkedlist();
    cout << endl;
    obj1.clear();
    obj2.clear();
    obj3.clear();
    obj4.clear();
}