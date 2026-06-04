---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<style>
/* Bilingual (EN / 中文) toggle */
.lang-cn { display: none; }
body.show-cn .lang-en { display: none; }
body.show-cn span.lang-cn { display: inline; }
body.show-cn div.lang-cn  { display: block; }
.lang-switch { text-align: right; margin: 0 0 1.2em 0; }
.lang-switch button {
  border: 1px solid #002FA7; background: #fff; color: #002FA7;
  padding: 2px 12px; border-radius: 4px; cursor: pointer;
  font-size: 0.85em; font-weight: bold; margin-left: 4px;
}
.lang-switch button.active { background: #002FA7; color: #fff; }
</style>

<div class="lang-switch">
  <button id="btn-en" onclick="setLang('en')">EN</button>
  <button id="btn-cn" onclick="setLang('cn')">中文</button>
</div>

<script>
function setLang(l){
  var cn = (l === 'cn');
  document.body.classList.toggle('show-cn', cn);
  var e = document.getElementById('btn-en'), c = document.getElementById('btn-cn');
  if (e && c) { e.classList.toggle('active', !cn); c.classList.toggle('active', cn); }
  try { localStorage.setItem('siteLang', l); } catch (err) {}
}
(function(){
  var l = 'en';
  try { l = localStorage.getItem('siteLang') || 'en'; } catch (err) {}
  setLang(l);
})();
</script>

<span class='anchor' id='about-me'></span>

<div class="lang-en" markdown="1">
I am a postdoctoral researcher at the Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences (SIAT, CAS), co-supervised by [Prof. Dong Liang (梁栋)](https://english.siat.ac.cn/about/il/pre/202505/t20250526_1044430.html). I am affiliated with the National Key Laboratory of Medical Imaging Science and Technology Systems at [SIAT](https://medimaging.siat.ac.cn/) ([Director: Hairong Zheng](https://medimaging.siat.ac.cn/cxqjzx/2025-03/06/article_2025030604595159147.html)). My primary research interests include medical imaging, deep learning, and signal processing. In addition, I have worked on several projects involving hardware–software co-design.

I obtained my Ph.D. on January 5, 2025, at the Paul C. Lauterbur Research Center for Biomedical Imaging and the Medical AI Research Center, where I was advised by [Prof. Dong Liang](https://english.siat.ac.cn/about/il/pre/202505/t20250526_1044430.html) and worked closely with [Prof. Zhuo-Xu Cui](https://zhuoxucui.github.io/). Previously, I was also advised by [Prof. Dong Liang](https://english.siat.ac.cn/about/il/pre/202505/t20250526_1044430.html) and [Prof. Haifeng Wang](https://people.ucas.edu.cn/~hfwang?language=en) during my master’s studies.
</div>

<div class="lang-cn" markdown="1">
我目前是中国科学院深圳先进技术研究院（SIAT, CAS）的博士后研究员，合作导师为[梁栋教授](https://english.siat.ac.cn/about/il/pre/202505/t20250526_1044430.html)。我所在的科研平台为深圳先进院[医学影像科学与技术系统全国重点实验室](https://medimaging.siat.ac.cn/)（主任：[郑海荣](https://medimaging.siat.ac.cn/cxqjzx/2025-03/06/article_2025030604595159147.html)）。我的主要研究方向包括医学影像、深度学习与信号处理；此外，我也参与过多项软硬件协同设计相关的工作。

我于 2025 年 1 月 5 日在保罗·劳特伯生物医学成像研究中心与医学人工智能研究中心取得博士学位，师从[梁栋教授](https://english.siat.ac.cn/about/il/pre/202505/t20250526_1044430.html)，并与[崔卓须教授](https://zhuoxucui.github.io/)开展了密切合作。在硕士阶段，我亦师从[梁栋教授](https://english.siat.ac.cn/about/il/pre/202505/t20250526_1044430.html)与[王海峰教授](https://people.ucas.edu.cn/~hfwang?language=en)。
</div>

E-mail: cc.liu at siat.ac.cn / liuc23539 at gmail.com / sober_235 at 163.com
 
<span class='anchor' id='-news'></span>

# 🔥 <span class="lang-en">News</span><span class="lang-cn">最新动态</span>

<span class="lang-en">To be updated.</span><span class="lang-cn">待更新。</span>

<span class='anchor' id='-publications'></span>

# 📝 <span class="lang-en">Publications</span><span class="lang-cn">论文发表</span>

<div class="lang-en" markdown="1">
- It’s currently being updated; Please feel free to see my [Google Scholar](https://scholar.google.com/citations?user=jGnxZdsAAAAJ&hl=zh-CN) profile.
</div>
<div class="lang-cn" markdown="1">
- 正在更新中，欢迎查看我的 [Google Scholar](https://scholar.google.com/citations?user=jGnxZdsAAAAJ&hl=zh-CN) 主页。
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/haf.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Hamiltonian Asymmetric Fusion: One-Way Safe Directed Refinement under Modality Imbalance](https://openreview.net/forum?id=Iv8D6q1gQL)

<a href="https://github.com/MAiTL-Group/HAF" style="display:inline-block;background-color:#002FA7;color:#ffffff;padding:2px 10px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:0.9em;">Code</a>

Bingbing Chen\*, **Congcong Liu**\*, Dong Liang†, Zhuo-Xu Cui† (\*Equal Contribution, †Co-Corresponding Author)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMI 2025</div><img src='images/jscore.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[J-Score: Joint Distribution Learning With Score-Based Diffusion for Accelerating T1ρ Mapping](https://ieeexplore.ieee.org/abstract/document/11152307)

<a href="https://github.com/sober235/j-score" style="display:inline-block;background-color:#002FA7;color:#ffffff;padding:2px 10px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:0.9em;">Code</a>

**Congcong Liu**, Yuanyuan Liu, Chentao Cao, Jing Cheng, Qingyong Zhu, Tian Zhou, Chen Luo, Yanjie Zhu, Haifeng Wang, Zhuo-Xu Cui†, Dong Liang† (†Co-Corresponding Author)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMI 2024</div><img src='images/deepmri.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Physics-Informed DeepMRI: k-Space Interpolation Meets Heat Diffusion](https://ieeexplore.ieee.org/document/10683732/)

<a href="https://github.com/MAiTL-Group/Heat-Diffusion" style="display:inline-block;background-color:#002FA7;color:#ffffff;padding:2px 10px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:0.9em;">Code</a>

**Zhuo-Xu Cui**\*, **Congcong Liu**\*, Xiaohong Fan, Chentao Cao, Jing Cheng, Qingyong Zhu, Yuanyuan Liu, Sen Jia, Haifeng Wang, Yanjie Zhu, Yihang Zhou†, Jianping Zhang, Qiegen Liu, Dong Liang† (\*Equal Contribution, †Co-Corresponding Author)
</div>
</div>

<div class="lang-en" markdown="1">
- Under construction
</div>
<div class="lang-cn" markdown="1">
- 持续更新中
</div>

<span class='anchor' id='-honors-and-awards'></span>

# 🥇 <span class="lang-en">Honors and Awards</span><span class="lang-cn">荣誉与奖励</span>

<div class="lang-en" markdown="1">
- *2024.10* 2024 National Scholarship for Graduate Students. 
- *2024.05* International Society for Magnetic Resonance in Medicine (ISMRM) Stipend Award. 
</div>
<div class="lang-cn" markdown="1">
- *2024.10* 2024 年研究生国家奖学金。
- *2024.05* 国际医学磁共振学会（ISMRM）Stipend Award。
</div>

<span class='anchor' id='-service'></span>

# 🔍 <span class="lang-en">Service</span><span class="lang-cn">学术服务</span>

<div class="lang-en" markdown="1">
- Journal Reviewer: IEEE Transactions on Medical Imaging (TMI), IEEE Transactions on Computational Imaging (TCI), Artificial Intelligence Review, The International Journal of Cardiovascular Imaging, etc.
- Conference Reviewer: Conference on Neural Information Processing Systems (NeurIPS), International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI), IEEE International Conference on Bioinformatics and Biomedicine (BIBM), etc.
</div>
<div class="lang-cn" markdown="1">
- 期刊审稿人：IEEE Transactions on Medical Imaging (TMI)、IEEE Transactions on Computational Imaging (TCI)、Artificial Intelligence Review、The International Journal of Cardiovascular Imaging 等。
- 会议审稿人：Conference on Neural Information Processing Systems (NeurIPS)、International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI)、IEEE International Conference on Bioinformatics and Biomedicine (BIBM) 等。
</div>

<span class='anchor' id='-educations'></span>

# 📚 <span class="lang-en">Educations</span><span class="lang-cn">教育经历</span>

<div class="lang-en" markdown="1">
- *2020.09 - 2025.01 *, University of Chinese Academy of Sciences (UCAS), Pattern Recognition and Intelligent Systems.
</div>
<div class="lang-cn" markdown="1">
- *2020.09 - 2025.01*，中国科学院大学（UCAS），模式识别与智能系统。
</div>

<div style="text-align:center; margin-top:2em;">
<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=2ILkDrwTQU5fMt_qVuEPtavwc9iON4cUTOiXAr6xTt4&cl=ffffff&w=200"></script>
</div>
