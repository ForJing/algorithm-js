# 冒泡排序(Bubble Sort)

## 原理

冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。
它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从 A 到 Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。
这个算法的名字由来是因为越大的元素会经由交换慢慢“浮”到数列的顶端（升序或降序排列），就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”。

## 代码实现

```js
function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    // 每次循环后最后的元素为最大的， 下次就不需要加入排序了
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
```

## 优化

上面的代码时间复杂度总是 O(n^2), 既是数组几乎已经是有序的也是如此，下面是优化后的版本：
如果内层循环没有发生交换的话，就判定已经排序完成

```js
function bubbleSort(arr) {
  const length = arr.length;
  let count = 0; // 计数，运行了几次循环.
  for (let i = 0; i < length - 1; i++) {
    let swapped = false; // 是否发生交换
    for (let j = 0; j < length - i - 1; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swappeds = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  console.log({ count });
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
```

可以看到， 如果不加这个判断的话，几乎有序的数组循环运行次数天差地别。
