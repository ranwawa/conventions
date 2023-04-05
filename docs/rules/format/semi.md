### 4.4 语句结尾使用分号

- BAD

```javascript
const a = 1;
a++;
++a;
```

- GOOD

```javascript
const a = 1;
a++;
++a;
```

- WHY
  - 不使用分号,在某些情况下会引发 BUG,所以每条语句结束都要使用分号
