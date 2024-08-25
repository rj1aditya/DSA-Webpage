class Solution
{
    int timer{1};
    void dfs(int node, int parent, vector &lt; int &gt; &vis, vector &lt; int &gt; adj[],
                                                                                   int tin[], int low[], vector &lt;
             int &gt; &mark)
    {
        vis[node] = 1;
        tin[node] = low[node] = timer;
        timer++;
        int child = 0;
        for (auto it : adj[node])
        {
            if (it == parent)
                continue;
            if (!vis[it])
            {
                dfs(it, node, vis, adj, tin, low, mark);
                low[node] = min(low[it], low[node]);
                if (low[it] &gt; = tin[node] && parent != -1)
                {
                    mark[node] = 1;
                }
                child++;
            }
            else
            {
                low[node] = min(low[node], tin[it]);
            }
        }
        if (child & gt; 1 && parent == -1)
            mark[node] = 1;
    }

public:
    vector &lt;
    int &gt;
    articulationPoints(int V, vector &lt; int &gt; adj[])
    {
        // Code here

        vector & lt;
        int &gt;
        vis(V, 0);
        int tin[V];
        int low[V];
        vector & lt;
        int &gt;
        mark(V, 0);

        for (int i = 0; i & lt; V; i++)
        {
            if (!vis[i])
            {
                dfs(i, -1, vis, adj, tin, low, mark);
            }
        }

        vector & lt;
        int &gt;
        ans;
        for (int i = 0; i & lt; V; i++)
        {
            if (mark[i] == 1)
                ans.push_back(i);
        }
        if (ans.size() == 0)
            return {-1};
        return ans;
    }
};