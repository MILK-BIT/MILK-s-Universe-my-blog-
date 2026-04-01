---
title: Python 学习笔记
description: Python常用技巧和最佳实践整理
date: 2024-03-15
tags: [编程, Python]
---

# Python 学习笔记

## 基础语法

### 变量和数据类型

Python是动态类型语言，变量不需要声明类型：

```python
name = "Alice"      # 字符串
age = 25            # 整数
height = 1.75       # 浮点数
is_student = True   # 布尔值
```

### 列表推导式

列表推导式是Python的一大特色，可以用简洁的语法创建列表：

```python
# 普通写法
squares = []
for x in range(10):
    squares.append(x ** 2)

# 列表推导式
squares = [x ** 2 for x in range(10)]

# 带条件的列表推导式
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
```

## 常用技巧

### 字典的 get 方法

使用 `get` 方法可以避免 KeyError：

```python
data = {'name': 'Alice', 'age': 25}

# 不推荐
try:
    city = data['city']
except KeyError:
    city = 'Unknown'

# 推荐
city = data.get('city', 'Unknown')
```

### enumerate 和 zip

```python
# enumerate: 同时获取索引和值
for i, item in enumerate(['a', 'b', 'c']):
    print(f"{i}: {item}")

# zip: 并行迭代多个列表
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

## 最佳实践

1. **使用 with 语句处理资源**：确保文件等资源正确关闭
2. **遵循 PEP 8 编码规范**：保持代码风格一致
3. **编写文档字符串**：为函数和类添加说明
4. **使用类型注解**：提高代码可读性

---

*持续更新中...*
