/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
    TreeNode* createTree(vector&lt;int&gt;& inorder, int ins, int ine, vector&lt;int&gt;& postorder, int pos, int poe, map&lt;int, int&gt; &m)
    {
        if(pos &gt; poe || ins &gt; ine)
            return NULL;
        
        TreeNode* root = new TreeNode(postorder[poe]);
        int inroot = m[postorder[poe]];
        int numLeft = inroot - ins;

        root-&gt;left = createTree(inorder, ins, inroot-1, postorder, pos, pos + numLeft - 1, m);
        root-&gt;right = createTree(inorder, inroot+1, ine, postorder, pos+numLeft ,poe-1, m);

        return root;
    }
public:
    TreeNode* buildTree(vector&lt;int&gt;& inorder, vector&lt;int&gt;& postorder) {
        map&lt;int, int&gt; m;
        for(int i = 0; i &lt; inorder.size(); i++)
            m[inorder[i]] = i;
        
        return createTree(inorder, 0, inorder.size()-1, postorder, 0, postorder.size()-1, m);
    }
};