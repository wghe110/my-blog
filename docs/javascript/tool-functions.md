# 工具函数

## 小数 转 百分比
```typescript
const decimalToPercentFn = (val: number | string, digits = 2) => {
  const perVal = Number(val || 0) * 100;
  const strPer = perVal.toFixed(digits);
  return `${Number(strPer)}%`;
};
```