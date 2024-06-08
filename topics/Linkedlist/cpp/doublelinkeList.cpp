#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node *prev;
    Node(int val) : next(nullptr), prev(nullptr), data(val) {}
};

class list
{
public:
    Node *head;
    list() : head(nullptr)
    {
    }
    // this constructor can accept argument like
    // linkedlist obj{1,2,3,4,5};
    list(initializer_list<int> ll) : head(nullptr)
    {
        for (auto value : ll)
            append(value);
    }

    list(int llSize, int value) : head(nullptr)
    {
        while (llSize--)
            append(value);
    }

    list(int llSize) : head(nullptr)
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
            newNode->prev = currentNode;
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

        Node *currN = head;
        head = head->next;
        if (head != nullptr) // this is the case when there are more than 1 node in dll
            head->prev = nullptr;
        delete currN;
    }

    void deleteLastNode()
    {
        if (head == nullptr)
            return;

        // Single node element case
        if (head->next == nullptr)
        {
            delete head;
            head = nullptr;
            return;
        }

        Node *currN = head;
        while (currN->next != nullptr)
            currN = currN->next;

        currN->prev->next = nullptr;
        delete currN;
    }
    // k will be in range of the double ll
    void deleteKthNode(int k)
    {
        // Write your code here.
        if (head == nullptr)
            return;

        Node *currN = head;
        int cnt = 0;
        while (currN != nullptr)
        {
            if (++cnt == k)
                break;

            currN = currN->next;
        }

        Node *prevN = currN->prev;
        Node *frontN = currN->next;

        if (prevN == nullptr && frontN == nullptr) // single node case
        {
            delete head;
            head = nullptr;
        }
        else if (frontN == nullptr) // tail node case
            deleteLastNode();
        else if (prevN == nullptr) // head node case
            deleteFirstNode();
        else // element present in some where first and last node
        {
            currN->prev->next = currN->next;
            currN->next->prev = currN->prev;
        }
    }
    void deleteGivenNode(Node *tmp) // Currenty that head node won't be given to delete
    {
        // Write your code here.
        Node *frontN = tmp->next;
        if (frontN == nullptr)
        {
            tmp->prev->next = nullptr;
            tmp->prev = nullptr;
        }
        else
        {
            tmp->prev->next = tmp->next;
            tmp->next->prev = tmp->prev;
        }
        delete tmp;
    }

    // Insert element in the linked list
    void insertBeforeHead(int val)
    {
        Node *currN = new Node(val);
        if (head == nullptr)
        {
            head = currN;
            return;
        }
        currN->next = head;
        head->prev = currN;
        head = currN;
    }

    void insertBeforeTail(int val)
    {
        if (head == nullptr)
        {
            Node *currN = new Node(val);
            head = currN;
            return;
        }
        else if (head->next == nullptr)
        {
            insertBeforeHead(val);
            return;
        }

        Node *lastN = head;
        while (lastN->next != nullptr)
            lastN = lastN->next;

        Node *currN = new Node(val);
        currN->prev = lastN->prev;
        currN->next = lastN;
        lastN->prev->next = currN;
        lastN->prev = currN;
    }

    void insertElemAtMidNode(int val) {}
    void insertBeforeKthNode(int k, int val)
    {
        if (k == 1)
        {
            insertBeforeHead(val);
            return;
        }

        int cur = 1;
        Node *temp = head;
        while (cur < k && temp->next != nullptr)
        {
            cur++;
            temp = temp->next;
        }

        if (temp->next == nullptr)
        {
            insertBeforeTail(val);
            return;
        }

        Node *currN = new Node(val);
        currN->prev = temp->prev;
        currN->next = temp;
        temp->prev->next = currN;
        temp->prev = currN;
    }
    // ptr won't be head node
    void insertBeforeGivenNode(Node *ptr, int data)
    {
        Node *newN = new Node(data);
        newN->prev = ptr->prev;
        newN->next = ptr;
        ptr->prev->next = newN;
        ptr->prev = newN;
    }
    void insertElemBeforeNValue(int val) {}

    ~list()
    {
        clear();
    }
};

int main()
{
    // list will be created with intitializer list with 4 element value{1,2,3,4}
    list obj1{1, 2, 3, 4};
    // list will be created with 4 element value{5,5,5,5}
    list obj2(4, 5);
    // list will be created with 4 element value{0,0,0,0}
    list obj3(4);
    // list will be created with initialy no elements
    list obj4;
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
    obj4.insertBeforeHead(0);
    obj4.insertBeforeTail(10);
    obj4.printlinkedlist();
    cout << endl;
    obj4.insertBeforeKthNode(6, 4);
    // obj4.printlinkedlist();
    obj4.printlinkedlist();
    cout << endl;
    obj1.clear();
    obj2.clear();
    obj3.clear();
    obj4.clear();
}