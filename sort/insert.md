# 插入排序(Insert Sort)

## 原理

插入排序好像你在打牌， 每次从牌堆里面拿一张牌， 插入手中适当的位置

## 代码实现

```js
function insertSort(arr) {
  const length = arr.length;

  for (j = 1; j < arr.length; j++) {
    const value = arr[j];
    let i = j - 1;
    // 相当于把大于当前要插入的值得值都向后移动一位
    while (i >= 0 && arr[i] > value) {
      a[i + 1] = a[i];
      i--;
    }
    // 最后把值插入改在的地方
    a[i + 1] = value;
  }
}
```

## 时间复杂度

O(n^2)
