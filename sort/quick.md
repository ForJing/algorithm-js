# 快速排序(Quick Sort)

## 原理

快速排序是选取一数作为中位数， 然后将数组中小于中位数的放到左边， 大于中位数的放到右边， 再对这两部分进行递归操作， 直到排序完成

## 代码实现

```js
// low: 开始索引，  high ： 结束索引

function quickSort(arr) {
  sort(arr, 0, arr.length - 1);
}

function sort(arr, low, high) {
  if (low < high) {
    // pi : 中间数索引, pi 已在正确位置
    const pi = partition(arr, low, high);
    sort(arr, 0, pi - 1);
    sort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];

  let i = low - 1; // 指向 更小元素的索引

  for (j = low; j <= high - 1; j++) {
    //  相当于 碰到小于中间值得数， 就i指向下一个格子， 用来存放小的数， 这样走完循环之后小数全部都 放在左边了
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
```

## 时间复杂度

- 最坏情况 O(n^2)
- 平均 O(nlogn)
- 最好 O(nlogn)

## 参考

[https://www.geeksforgeeks.org/quick-sort/](https://www.geeksforgeeks.org/quick-sort/)
