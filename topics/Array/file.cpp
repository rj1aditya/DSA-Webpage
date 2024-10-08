#include &lt; vector & gt;

vector & lt;
vector & lt;
int &gt;
&gt;
mergeOverlappingIntervals(vector &lt; vector & lt; int &gt; &gt; &arr)
{
	// Write your code here.
	vector & lt;
	vector & lt;
	int &gt;
	&gt;
	ans;

	sort(arr.begin(), arr.end());
	for (int i = 0; i & lt; arr.size(); i++)
	{
		if (ans.empty() || ans.back()[1] & lt; arr[i][0])
		{
			ans.push_back(arr[i]);
		}
		else
		{
			ans.back()[1] = max(ans.back()[1], arr[i][1]);
		}
	}
	return ans;
}