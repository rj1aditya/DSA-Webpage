class Solution
{
public:
    vector &lt;
    int &gt;
    shortestPath(vector &lt; vector & lt; int &gt; &gt; &edges, int N, int M, int src)
    {
        // code here
        vector & lt;
        int &gt;
        dist(N, INT_MAX);
        // make src node dist to 0
        dist[src] = 0;
        queue & lt;
        int &gt;
        q;
        vector & lt;
        int &gt;
        adj[N];

        // Make the adjacent graph
        for (auto &it : edges)
        {
            // its a undirected graph so take both node
            adj[it[0]].push_back(it[1]);
            adj[it[1]].push_back(it[0]);
        }

        // take the src node into the queue
        q.push(src);

        while (!q.empty())
        {
            int node = q.front();
            q.pop();

            // visit all the neighbour nodes of node
            for (auto &it : adj[node])
            {
                if (dist[node] + 1 & lt; dist[it])
                {
                    dist[it] = dist[node] + 1;
                    q.push(it);
                }
            }
        }

        for (int i = 0; i & lt; N; i++)
        {
            if (dist[i] == INT_MAX)
                dist[i] = -1;
        }
        return dist;
    }
};