#include <iostream>
#include <stack>
#include <vector>
using namespace std;

void topologicalsort(vector<vector<int>> &adj, vector<bool> &vistied, stack<int> &s, int node)

{

    vistied[node] = true;

    for (auto child : adj[node])

    {

        if (!vistied[child])

        {

            topologicalsort(adj, vistied, s, child);
        }
    }

    s.push(node);
}

void dfs(vector<vector<int>> &adj, vector<bool> &vistied, int node)

{

    vistied[node] = true;

    for (auto child : adj[node])

    {

        if (!vistied[child])

        {

            dfs(adj, vistied, child);
        }
    }
}

int stronglyConnectedComponents(int v, vector<vector<int>> &edges)

{

    // Write your code here.

    vector<vector<int>> adj(v);

    for (int i = 0; i < edges.size(); ++i)

    {

        int x = edges[i][0];

        int y = edges[i][1];

        adj[x].push_back(y);
    }

    // toplogical sort

    stack<int> s;

    vector<bool> vistied(v, false);

    for (int i = 0; i < v; ++i)

    {

        if (!vistied[i])

        {

            topologicalsort(adj, vistied, s, i);
        }
    }

    // inverse the paths

    vector<vector<int>> inversedadj(v);

    for (int i = 0; i < v; ++i)

    {

        vistied[i] = false;

        for (auto child : adj[i])

        {

            inversedadj[child].push_back(i);
        }
    }

    // perform dfs on this toplogical sort with inversed adj

    int count = 0;

    while (!s.empty())

    {

        int top = s.top();

        s.pop();

        if (!vistied[top])

        {

            count++;

            dfs(inversedadj, vistied, top);
        }
    }

    return count;
}
