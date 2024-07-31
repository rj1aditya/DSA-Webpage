#include <iostream>
#include <vector>
using namespace std;

class Solution
{
    vector<vector<int>> vis;
    vector<int> dr{-1, 0, 1, 0};
    vector<int> dc{0, 1, 0, -1};
    int n1;
    int m1;

    void dfs(int row, int col, vector<vector<char>> &mat)
    {
        vis[row][col] = 1;
        for (int i = 0; i < 4; i++)
        {
            int nr = row + dr[i];
            int nc = col + dc[i];
            if (nr >= 0 && nr < n1 && nc >= 0 && nc < m1 && vis[nr][nc] == 0 && mat[nr][nc] == 'O')
            {
                dfs(nr, nc, mat);
            }
        }
    }

public:
    vector<vector<char>> fill(int n, int m, vector<vector<char>> mat)
    {
        for (auto x : dr)
            std::cout << x << " ";

        std::cout << endl;
        for (auto y : dc)
            std::cout << y << " ";
        std::cout << endl;
        n1 = n;
        m1 = m;

        vis = vector<vector<int>>(n, vector<int>(m, 0));

        // Check 0th and m-1th row boundary
        for (int i = 0; i < m; i++)
        {
            if (vis[0][i] == 0 && mat[0][i] == 'O')
            {
                dfs(0, i, mat);
            }
            if (vis[n - 1][i] == 0 && mat[n - 1][i] == 'O')
            {
                dfs(n - 1, i, mat);
            }
        }

        // Check 0th and n-1th col boundary
        for (int i = 0; i < n; i++)
        {
            if (vis[i][0] == 0 && mat[i][0] == 'O')
            {
                dfs(i, 0, mat);
            }
            if (vis[i][m - 1] == 0 && mat[i][m - 1] == 'O')
            {
                dfs(i, m - 1, mat);
            }
        }

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                if (vis[i][j] == 0 && mat[i][j] == 'O')
                {
                    mat[i][j] = 'X';
                }
            }
        }

        return mat;
    }
};

int main()
{
    Solution sol;
    vector<vector<char>> mat = {
        {'O', 'X', 'X', 'O', 'O', 'X', 'O', 'X', 'O'},
        {'O', 'X', 'O', 'X', 'X', 'O', 'X', 'X', 'O'},
        {'X', 'O', 'X', 'X', 'X', 'O', 'O', 'O', 'O'},
        {'X', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'O'},
        {'O', 'O', 'X', 'X', 'X', 'X', 'O', 'O', 'X'},
        {'O', 'X', 'O', 'O', 'X', 'X', 'X', 'X', 'X'},
        {'X', 'X', 'O', 'X', 'X', 'X', 'O', 'X', 'X'},
        {'X', 'O', 'O', 'X', 'X', 'O', 'X', 'O', 'X'},
        {'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X'},
        {'O', 'O', 'O', 'X', 'X', 'O', 'X', 'X', 'X'},
        {'X', 'X', 'O', 'X', 'O', 'X', 'X', 'X', 'O'}};

    vector<vector<char>> result = sol.fill(11, 9, mat);

    for (const auto &row : result)
    {
        for (char c : row)
        {
            cout << c << " ";
        }
        cout << endl;
    }

    return 0;
}
