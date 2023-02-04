# readmelint

## 1.1 安装依赖

```shell
npm install --save-dev @ranwawa/readmelint
```

## 1.2 添加 lint 命令

自动添加 `npm7+`

```shell
npm set-script lint:readme readmelint
```

手动添加到 package.json 文件

```json
{
  "scripts": {
    "lint:readme": "readmelint"
  }
}
```

## 1.3 运行 lint 命令

```shell
npm run lint:readme
```
