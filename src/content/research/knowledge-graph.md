---
title: 知识图谱构建与应用
date: 2023-09-20
authors: [张三, 王五, 赵六]
venue: KDD 2023
tags: [知识图谱, 知识推理]
pdf: https://arxiv.org
code: https://github.com
---

## 摘要

知识图谱作为一种结构化的知识表示形式，在问答系统、推荐系统等领域有广泛应用。本文研究了从非结构化文本中自动构建知识图谱的方法。

## 主要工作

### 实体识别

采用BERT-CRF模型进行命名实体识别，在CoNLL-2003数据集上达到92.3%的F1值。

### 关系抽取

设计了基于远程监督的关系抽取方法，利用知识库中的已有关系进行弱监督学习。

### 知识融合

提出了基于实体对齐的知识融合方法，解决了多源知识图谱的融合问题。

## 引用

```bibtex
@inproceedings{zhang2023knowledge,
  title={Knowledge Graph Construction and Application},
  author={Zhang, San and Wang, Wu and Zhao, Liu},
  booktitle={KDD},
  year={2023}
}
```
