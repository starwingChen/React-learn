from typing import List

class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        # (L<x,R<=x)
        res = 0
        n = len(arr)

        # 找左边界
        left = [-1] * n # 默认左边界是-1
        st = [] # 存的是最小元素的下标
        for i,num in enumerate(arr):
            # 若栈顶元素大于等于当前元素，则不断移除,直到找到小于的元素，作为新的栈顶元素
            while st and arr[st[-1]] >= num:
                st.pop()
            if st: left[i] = st[-1]
            st.append(i)

        # 找右边界
        right = [n] * n
        st = []
        for i in range(n-1,-1,-1):
            while st and arr[st[-1]] > arr[i]:
                st.pop()
            if st: right[i] = st[-1]
            st.append(i)
        
        # 计算
        for i in range(n):
            res += arr[i] * (i-left[i]) * (right[i] - i)

        return res % (10**9+7)

arr = [1,2,4,2,3,1]
test =Solution()
print(test.sumSubarrayMins(arr))