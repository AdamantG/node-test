# 01
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

# 02

## 题目：
1. https://cnodejs.org/ 小爬虫程序，抓取当天的帖子信息：包括 url、用户、标题、发布时间、分类

## 遇到问题：
1. cell使用find方法为undefined,cell本身不为空。->cell返回一个cheerio对象初始化，故不为空，但实际没有关于html的内容。each参数与forEach参数是反的。
2. 要求时间是当天，抓取html页面是根据page，无法知道时间，故只能获取所有page的html，但不知道total page数。

## 涉及知识点：
1. https
2. cheerio

## 疑问
1. 如何最后统一获取最后内容？

# 03
## 题目：
1. 获取最近一周发布的包并进行一些分类提取或过滤

# 04
## 题目：
1. 对01代码优化
2. 尽量使用异步实现
3. 遗留问题解决