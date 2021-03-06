---
layout: post
title:  "Mac系统下使用chmod命令修改文件权限"
date:   2018-3-27 14:38:20 +0800
categories: test
---
[TOC]


# Mac系统下使用chmod命令修改文件权限
自动打包的时候，创建的./xcodebuild.sh文件执行的时候出现
> -bash: ./build.sh: Permission denied

是权限不足导致的。Mac终端修改文件权限使用的是chmod命令。可以直接通过 **man chmod** 在终端工具上查看该命令的帮助手册。

## 查看文件的权限
**ls -l** 命令可以查看当前目录下所有文件的访问权限，也可以查看指定文件。任意新建一个 **build.sh** 文件，查看该文件的权限：

```
biubiubiu:Desktop jsyl$ ls -l build.sh
-rw-r--r--  1 jsyl  staff  0  3 14 10:09 build.sh

biubiubiu:~ jsyl$ ls -l /Users/jsyl/Desktop
total 38976
drwxr-xr-x@  8 jsyl  staff       272  1 23 12:18 (iOS)S2iCodeModule_v2.4.0
-rw-r--r--@  1 jsyl  staff    199471  3  9 15:25 5c95d50c5d2c.gif
drwxr-xr-x  10 jsyl  staff       340  2  1 09:19 视频录制
```

打印出来的是就是当前文件的信息，如果查看的是文件夹，将输出文件夹下所有文件的信息。
文件信息含义对应解释如下：

-rw-r--r--  | 1 | jsyl | staff | 0 | 3 14 10:09 | build.sh
---|---|---|---|---|---|---
文件类型和访问权限|文件数量|所属用户|所在群组|文件大小|修改日期|文件名称

对 **-rw-r--r--** 的详细说明：

1. 第一个符号代表文件类型，‘-’ 符号表示该文件为非目录类型，‘d’ 符号表示目录类型；
2. 后面9个字母分为三组“rw- r-- r--”，每组对应的是所属用户(user)、所属用户所在组(group)、其他用户(other)对该文件的访问权限；每组中的三个字符分别对应用户对该文件用户的权限：可读(read)、可写(write)、可执行(excute);如果应有所有权限就是 **rwx** ；如果没有权限就是用 **-** 表示；
3. 有的文件类型后面会多一个**@**，形如**-rwxrwxrwx@**，@符号表示文件拓展属性，属于文件系统的一个功能

## 修改访问权限
### 直接修改
根据上面查看权限的介绍，修改权限也应该包括 访问用户、添加或取消操作、具体权限和访问文件，语法格式：
> chmod [who] [opt] [mode] 文件/目录名 
> chmod 用户+操作+权限 文件

1. 用户 who：使用字母**u**代表拥有者(user)、字母**g**代表拥有者所在群组(group)、字母**o**代表其他用户(other)、字母**a**表示所有用户(all,包含前面的三种用户)
2. 操作 opt：“+”表示增加权限，“-”表示取消权限，“=”表示赋值权限，取消原有权限
3. 权限 mode：“r” 符号表示可读(read)，“w” 表示可写(write)，“x” 表示可执行权限(execute)
4. 文件：如果不指定文件名，表示操作对象为当前目录下的所有文件

以前面buil.sh文件为例，将拥有着所在群组和其他用户改为**可读可写可执行**权限的方式：

```
biubiubiu:Desktop jsyl$ chmod go+rwx build.sh
biubiubiu:Desktop jsyl$ ls -l build.sh
-rw-rwxrwx  1 jsyl  staff  0  3 14 10:09 build.sh
```
更复杂一点，可以同时添加多种操作，操作之间使用“,”隔开就行
user拥有所有权限，other没有任何权限，group取消执行权限

```
biubiubiu:Desktop jsyl$ chmod u+rwx,o-rwx,g-x build.sh
biubiubiu:Desktop jsyl$ ls -l build.sh
-rwxrw----  1 jsyl  staff  0  3 14 10:09 build.sh
```

### 使用数字修改
更简单的方法：使用数字表示权限部分的读、写、执行权限。
数字设定的语法格式
> chmod [mode] 文件名 

这里关键是mode的取值，我们将rwx看成二进制数，如果有则有1表示，没有则有0表示，那么`rwx r-x r--`则可以表示成为： 

`111 101 100`

再将其每三位转换成为一个十进制数，就是754。 
可以看出，三个数字从前到后就分别表示u、g、o三种用户的访问权限。

再如我们给build.sh这些权限：

～|自己 | 同组用户 | 其他用户 
---|---|---|---
可读 | 是 | 是 | 是 
可写 | 是 | 是 |  /
可执行|/|/|/
那么，我们先根据上表得到权限串为：**rw-rw-r--**，那么转换成二进制数就是110 110 100，再每三位转换成为一个十进制数，就得到664，因此我们执行命令： 

> chmod 664 build.sh

 
我们也可以通过下面的图来直接看出权限之间的关系 
数字和权限对应关系如图：


即：1.可执行，2.可写，4.可读；相交部分就是同时拥有权限。0表示没有权限

***
例子
----
1. 修改**所有用户**拥有**读写执行**的所有权限：

```
biubiubiu:Desktop jsyl$ chmod 777 build.sh
biubiubiu:Desktop jsyl$ ls -l build.sh
-rwxrwxrwx  1 jsyl  staff  0  3 14 10:09 build.sh
```
====
2.user拥有所有权限，group没有执行权限，other没有任何权限

```shell
biubiubiu:Desktop jsyl$ chmod 760 build.sh
biubiubiu:Desktop jsyl$ ls -l build.sh
-rwxrw----  1 jsyl  staff  0  3 14 10:09 build.sh
```

补充一点，有时候需要递归修改目录文件及其子目录中的文件类型，可以使用 -R 选项。


参考：
    <http://blog.csdn.net/growing_tree/article/details/78289707>
    <http://www.7do.net/resources-11706-1-1.html>


