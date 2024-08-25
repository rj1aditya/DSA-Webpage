#include <iostream>
#include <stack>
#include <vector>
using namespace std;

void dfs(int node, vector<int> &vis, stack<int> &st, vector<vector<int>> &adj)
{
    vis[node] = 1;
    for (auto it : adj[node])
    {
        if (!vis[it])
        {
            dfs(it, vis, st, adj);
        }
    }
    st.push(node);
}

void dfs1(int node, vector<int> &vis, vector<vector<int>> &adjT)
{
    vis[node] = 1;
    for (auto it : adjT[node])
    {
        if (!vis[it])
        {
            dfs1(it, vis, adjT);
        }
    }
}

int stronglyConnectedComponents(int V, vector<vector<int>> &adj)
{
    // Step 2: Perform DFS to get the finish order in a stack
    vector<int> vis(V, 0);
    stack<int> st;
    for (int i = 0; i < V; i++)
    {
        if (!vis[i])
        {
            dfs(i, vis, st, adj);
        }
    }

    // Step 3: Transpose the graph (reverse the edges)
    vector<vector<int>> adjT(V);
    for (int i = 0; i < V; i++)
    {
        for (auto it : adj[i])
        {
            adjT[it].push_back(i);
        }
    }

    // Step 4: Perform DFS on the transposed graph using the order from the stack
    fill(vis.begin(), vis.end(), 0); // Reset visited array
    int sccCount = 0;
    while (!st.empty())
    {
        int node = st.top();
        st.pop();
        if (!vis[node])
        {
            sccCount++;
            dfs1(node, vis, adjT);
        }
    }

    return sccCount;
}

int main()
{
    // Number of vertices
    int V = 5;

    // List of edges (directed)
    vector<vector<int>> adj(V);
    adj[0].push_back(1);
    adj[1].push_back(2);
    adj[1].push_back(4);
    adj[2].push_back(3);
    adj[3].push_back(2);
    adj[4].push_back(0);
    adj[1].push_back(0);

    // Call the function and print the result
    int result = stronglyConnectedComponents(V, adj);
    cout << "The number of strongly connected components (SCCs) is: " << result << endl;

    return 0;
}