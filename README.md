# node-test01
## 题目：
1. 读取你本地的项目仓库package.json 文件，然后统计用到的npm包最多的前5个包。
2. 获取这Top5包的最近7天下载量。（调用tnpm的接口）

## 遇到问题：
1. 异步打开文件打印时候有数组输出，循环时候报错为undefined。－> 改为同步
2. 异步读文件时候，内部可访问全局包对象，但最后打印为空。－> 改为同步
3. 如何调试
4. 请求 https://api.npmjs.org/downloads/point 报错 getaddrinfo ENOTFOUND https://api.npmjs.org(原因是host不能加协议)

## 涉及知识点：
1. 文件API
2. 同步与异步
3. 调试问题
4. http
￼

## 疑问
1. 下载不同版本的包如何获取下载数量？
