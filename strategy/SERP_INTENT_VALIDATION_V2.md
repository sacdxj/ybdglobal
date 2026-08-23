# SERP 意图验证 V2

验证日期：2026-08-11

## 结论

核心采购词应由独立的 B2B 制造商/供应商落地页承接，不能只依赖普通产品目录页。当前代表性搜索结果中，USB cable、HDMI cable、DisplayPort cable、USB-C hub/docking station 的 manufacturer/OEM 查询均主要返回制造商、OEM/ODM 能力和批量采购页面。

因此 V2 结构保留：

- 产品类目页：承接产品范围与规格探索；
- 独立 OEM 制造商页：承接 manufacturer、supplier、factory、wholesale、OEM、ODM、custom 等采购意图；
- 规格页：承接 USB4、HDMI 2.1、DP 2.1、AOC、GaN、高功率等明确技术需求；
- 买家解决方案页：承接 wholesaler、distributor、brand、private label、retail/ecommerce buyer；
- 信息页：暂列 P3，未经更细 SERP 验证不进入首批开发。

## 代表性证据

- USB manufacturer 结果强调工厂、批发、OEM/ODM、定制和批量生产：[ByteCable](https://www.bytecable.com/)、[LineUSB](https://www.lineusb.com/en/)、[CableDo](https://www.cabledo.com/)。
- HDMI/DisplayPort manufacturer 结果以 OEM/ODM 产品范围和认证能力为主要内容：[Foyun Cables](https://fycables.com/)、[Fenfei Electronic](https://www.fenfei-tech.com/)、[Stantek DisplayPort Assemblies](https://www.stantek-us.com/product/displayport-cable-assemblies/)。
- USB-C hub/docking manufacturer 结果直接组合 manufacturer、OEM/ODM、brands、distributors 和具体端口矩阵：[YUANSHAN](https://www.yuanshan-tech.com/)。

## 对页面规划的影响

1. `/oem/*-manufacturer/` 保留为独立 BOFU 页面，不与产品目录合并。
2. 产品目录页仍保留，因为普通产品词与 manufacturer 词的 SERP 形式不同。
3. USB/HDMI 大类目中的大量长度、措辞变体继续合并到类目页，不按每个关键词建页。
4. 高流量规格页进入 P1；低价值 how-to、best、review 和设备兼容问题不进入首批发布。
