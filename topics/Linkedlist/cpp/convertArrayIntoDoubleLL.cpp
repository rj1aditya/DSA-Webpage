#include <iostream>
#include <vector>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
    Node *prev;
    Node(int val) : data(val), next(nullptr), prev(nullptr) {}
};

Node *convertArrayIntoDoubleLL(vector<int> &vec)
{
    int n = vec.size();
    if (n == 0)
        return nullptr;

    Node *head = new Node(vec[0]);
    Node *prevN = head;

    Node *currN = head;
    for (int i = 1; i < n; i++)
    {
        Node *newN = new Node(vec[i]);
        newN->prev = prevN;
        prevN->next = newN;
        prevN = newN;
    }
    return head;
}

void displayDoubleLL(Node *head)
{
    Node *currN = head;
    while (currN)
    {
        cout << currN->data << " ";
        currN = currN->next;
    }
}

int main()
{
    vector<int> vec{1, 2, 3, 4, 5, 6};
    Node *head = convertArrayIntoDoubleLL(vec);
    displayDoubleLL(head);
}