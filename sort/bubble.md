# 冒泡排序

## 普通实现

```js
function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
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

## 优化实现

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
