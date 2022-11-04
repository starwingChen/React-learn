#include <bits/stdc++.h>
using namespace std;
int main()
{
    // 数字替换
    // 7 007
    // 运算符替换
    // p **
    // / //
    // < <<
    // > >>
    int nums[] = { 0,2,2,2,2,2,2,2,2,2,3,5,5,6,7,7,17,17,20,20,24,24,26,27,28,33};
    char ops[] = {" %+>>/"};
    int nnum = sizeof(nums) / 4, nop = sizeof(ops) - 1;
    if (nnum < 4 || nop < 3)
    {
        cout << "No more cards\n";
        return 0;
    }
    sort(nums, nums + nnum);
    sort(ops, ops + nop);
    for (int i = 0; i <= nnum - 4; ++i)
    {
        do
        {
            for (int j = 0; j <= nop - 3; ++j)
            {
                do
                {
                    int a = nums[i];
                    for (int l = 0; l != 3; ++l)
                    {
                        switch (ops[j + l])
                        {
                        case '+':
                            a += nums[i + l + 1];
                            break;
                        case '-':
                            a -= nums[i + l + 1];
                            break;
                        case '*':
                            a *= nums[i + l + 1];
                            break;
                        case 'p':
                            a = pow(a, nums[i + l + 1]);
                            break;
                        case '%':
                            if (!nums[i + l + 1])
                            {
                                a = -1;
                                break;
                            }
                            a %= nums[i + l + 1];
                            break;
                        case '/':
                            if (!nums[i + l + 1])
                            {
                                a = -1;
                                break;
                            }
                            a /= nums[i + l + 1];
                            break;
                        case '|':
                            a |= nums[i + l + 1];
                            break;
                        case '&':
                            a &= nums[i + l + 1];
                            break;
                        case '^':
                            a ^= nums[i + l + 1];
                            break;
                        case '<':
                            a <<= nums[i + l + 1];
                            break;
                        case '>':
                            a >>= nums[i + l + 1];
                            break;
                        default:
                            break;
                        }
                        if (a < 0)
                        {
                            break;
                        }
                    }
                    if (a == 1024)
                    {
                        printf("%d", nums[i]);
                        for (int l = 0; l != 3; ++l)
                        {
                            printf(" %c %d", ops[j + l], nums[i + l + 1]);
                        }
                        putchar(10);
                    }
                } while (next_permutation(ops + j, ops + j + 3));
            }
        } while (next_permutation(nums + i, nums + i + 4));
    }
    return 0;
}
