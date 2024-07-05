#include <iostream>
#include <queue>
#include <stack>
#include <utility> // For std::pair
using namespace std;

class Node
{
public:
    int data;
    Node *left;
    Node *right;

    Node(int val = 0) : data(val), left(nullptr), right(nullptr) {}
};

class BinaryTree
{
    Node *root;
    Node *insertNode(Node *n, int data)
    {
        if (n == nullptr)
        {
            return new Node(data);
        }

        if (n->data > data)
            n->left = insertNode(n->left, data);
        else
            n->right = insertNode(n->right, data);

        return n;
    }

    void inorderTraversal(Node *node)
    {
        if (node)
        {
            inorderTraversal(node->left);
            cout << node->data << " ";
            inorderTraversal(node->right);
        }
    }

    void preOrderTraversal(Node *node)
    {
        if (node)
        {
            cout << node->data << " ";
            preOrderTraversal(node->left);
            preOrderTraversal(node->right);
        }
    }

    void postOrderTraversal(Node *node)
    {
        if (node)
        {
            postOrderTraversal(node->left);
            postOrderTraversal(node->right);
            cout << node->data << " ";
        }
    }

    int findHeight(Node *node)
    {
        if (node == nullptr)
            return 0;

        int leftH = findHeight(node->left);
        int rightH = findHeight(node->right);

        return 1 + max(leftH, rightH);
    }

public:
    BinaryTree() : root(nullptr) {}
    void insert(int data)
    {
        root = insertNode(root, data);
    }

    // left, root, right
    void inorder()
    {
        inorderTraversal(root);
    }

    // root, left, right
    void preinorder()
    {
        preOrderTraversal(root);
    }

    // left, right, root
    void postorder()
    {
        postOrderTraversal(root);
    }

    void iterativePostorderTraversal()
    {
        stack<Node *> s1;
        stack<Node *> s2;

        s1.push(root);
        while (!s1.empty())
        {
            Node *node = s1.top();
            s1.pop();
            s2.push(node);
            if (node->left)
                s1.push(node->left);
            if (node->right)
                s1.push(node->right);
        }
        cout << "Post Order traversal using iterative approach:\n";
        while (!s2.empty())
        {
            Node *node = s2.top();
            s2.pop();
            cout << node->data << " ";
        }
        cout << endl;
    }
    void levelorder()
    {
        queue<Node *> q;
        if (root)
            q.push(root);
        else
            return;

        while (!q.empty())
        {
            Node *currN = q.front();
            q.pop();
            if (currN->left)
                q.push(currN->left);
            if (currN->right)
                q.push(currN->right);

            cout << currN->data << " ";
        }
    }

    int Height()
    {
        return findHeight(root);
    }

    void printLevelOrderNodeData(Node *node, int level)
    {
        if (node == nullptr)
            return;

        if (level == 1)
        {
            cout << node->data << " ";
            return;
        }
        else
        {
            printLevelOrderNodeData(node->left, level - 1);
            printLevelOrderNodeData(node->right, level - 1);
        }
    }

    void leverOrderTraversal()
    {
        int h = Height();
        for (int i = 1; i <= h; i++)
        {
            printLevelOrderNodeData(root, i);
        }
    }
    void deleteTree(Node *node)
    {
        if (node)
        {
            deleteTree(node->left);
            deleteTree(node->right);
            cout << "deleting node:" << node->data << endl;
            delete node;
        }
    }
    void deleteT()
    {
        deleteTree(root);
        root = nullptr;
    }
    void iterativeTraversalForAllOrder()
    {
        if (root == nullptr)
            return;

        vector<int> pre, post, in;

        stack<pair<Node *, int>> st;
        st.push({root, 1});

        while (!st.empty())
        {
            Node *temp = st.top().first;
            int val = st.top().second;
            st.pop();
            if (val == 1)
            {
                pre.push_back(temp->data);
                st.push({temp, val + 1});
                if (temp->left)
                    st.push({temp->left, 1});
            }
            else if (val == 2)
            {
                in.push_back(temp->data);
                st.push({temp, val + 1});
                if (temp->right)
                    st.push({temp->right, 1});
            }
            else
            {
                post.push_back(temp->data);
            }
        }

        cout << "Preorder traversal:";
        for (auto x : pre)
            cout << x << " ";
        cout << endl;
        cout << "Inorder traversal:";
        for (auto x : in)
            cout << x << " ";
        cout << endl;
        cout << "Postorder traversal:";
        for (auto x : post)
            cout << x << " ";
        cout << endl;
    }

    ~BinaryTree()
    {
        deleteTree(root);
    }
};

int main()
{
    BinaryTree obj1;
    obj1.insert(10);
    obj1.insert(5);
    obj1.insert(7);
    obj1.insert(4);
    obj1.insert(15);
    obj1.insert(12);
    obj1.insert(17);
    obj1.insert(19);
    cout << "In order traversal output:\n";
    obj1.inorder();
    cout << endl;
    cout << "Pre order traversal output:\n";
    obj1.preinorder();
    cout << endl;
    cout << "Post order traversal output:\n";
    obj1.postorder();
    cout << endl;
    obj1.iterativePostorderTraversal();
    cout << "Level order traversal output:\n";
    obj1.levelorder();
    cout << endl;
    cout << "Height of the tree is:" << obj1.Height();
    cout << endl;
    obj1.leverOrderTraversal();
    cout << endl;
    obj1.iterativeTraversalForAllOrder();
    cout << endl;
    obj1.deleteT();
    cout << "Height of the tree is:" << obj1.Height();
    return 0;
}