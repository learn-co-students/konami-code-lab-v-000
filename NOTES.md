const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    *sequence: ↑,  ↑,  ↓,  ↓,  ←,  →,  ←,  →,  B,  A*
       *index: 0,  1,  2,  3,  4,  5,  6,  7,  8,  9*

[up arrow, up arrow, down arrow, down arrow, left arrow, right arrow, left arrow, right arrow, B, A]


KEYDOWN #1
User presses up arrow (38)
38 equals the element located in code[0]...we increment `index` by 1 (index == 1)
1 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #2
User presses up arrow (38)
38 equals the element located in code[1]...we increment `index` by 1 (index == 2)
2 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #3
User presses down arrow (40)
40 equals the element located in code[2]...we increment `index` by 1 (index == 3)
3 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #4
User presses down arrow (40)
40 equals the element located in code[3]...we increment `index` by 1 (index == 4)
4 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #5
User presses left arrow (37)
37 equals the element located in code[4]...we increment `index` by 1 (index == 5)
5 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #6
User presses right arrow (39)
39 equals the element located in code[5]...we increment `index` by 1 (index == 6)
6 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #7
User presses left arrow (37)
37 equals the element located in code[6]...we increment `index` by 1 (index == 7)
7 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #8
User presses right arrow (39)
39 equals the element located in code[7]...we increment `index` by 1 (index == 8)
8 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #9
User presses B (66)
66 equals the element located in code[8]...we increment `index` by 1 (index == 9)
9 does not equal 10...so no alert or resetting of `index`
End of function call

KEYDOWN #10
User presses A (65)
65 equals the element located in code[9]...we increment `index` by 1 (index == 10)
10 does equal 10...so alert pops up with text "Bravo!" and `index` is set to 0 (index == 0)
End of function call
