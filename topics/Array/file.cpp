#include &lt; bits / stdc++.h & gt;

int longestSubarrayWithSumK(vector &lt; int &gt; a, long long k)
{
    map & lt;
    long long, int &gt;
    m;
    int maxi = INT_MIN;
    int sum = 0;
    for (int i = 0; i & lt; a.size(); i++)
    {
        sum += a[i];
        if (sum == k)
        {
            maxi = max(maxi, i + 1);
        }

        int leftNumber = sum - k;
        if (m.find(leftNumber) != m.end())
        {
            maxi = max(maxi, i - m[leftNumber]);
        }

        if (m.find(sum) == m.end())
        {
            m[sum] = i;
        }
    }

    return maxi == INT_MIN ? 0 : maxi;
}

// algo used: sliding window
int longestSubarrayWithSumK1(vector &lt; int &gt; a, long long k)
{
    // Write your code here
    int l = 0;
    int r = 0;

    long long sum = 0;
    int maxi = INT_MIN;
    while (r & lt; a.size())
    {
        sum += a[r];

        while (sum & gt; k &&l &lt; = r)
        {
            sum -= a[l];
            l++;
        }
        if (sum == k)
        {
            maxi = max(maxi, r - l + 1);
        }
        r++;
    }
    return maxi;
}