#include <iostream>
#include <vector>
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

Node *convertArrayIntoSingleLL(vector<int> &vec)
{
    int n = vec.size();
    if (n == 0)
        return nullptr;

    Node *head = new Node(vec[0]);
    Node *currN = head;
    for (int i = 1; i < n; i++)
    {
        Node *newN = new Node(vec[i]);
        currN->next = newN;
        currN = newN;
    }
    return head;
}

void displayLL(Node *head)
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
    vector<int> vec{};
    Node *head = NULL;
    head = convertArrayIntoSingleLL(vec);
    displayLL(head);
}