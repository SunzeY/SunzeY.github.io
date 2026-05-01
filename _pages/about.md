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

<span class='anchor' id='about-me'></span>

I am currently a third-year Ph.D. student in Information Engineering at [Shanghai Jiao Tong University](https://ee.sjtu.edu.cn/).
I obtained my Bachelor's degree in Computer Science from [Beihang University](https://ev.buaa.edu.cn/) in 2023.

My research interest includes multimodal learning, RL.


# 🔥 News
- [2026-04] SEAgent is accepted by ICML 2026.
- [2026-03] Excited that Visual-RFT ranks in top2 of the [most influential ICCV 2025 papers](https://www.paperdigest.org/2026/03/most-influential-iccv-papers-2026-03-version/)
- [2026-02] We release Seed2.0, where I contribute to general agent.
- [2025-12] We release Seed1.8, where I contribute to GUI agent.
- [2025-06] BootStrap3D, Visual-RFT, X-Prompt are accepted by ICCV 2025.
- [2024-09] Make-it-Real is accepted by NeurIPS 2024.
- [2024-03] Alpha-CLIP, GPT4Point are accepted by CVPR 2024.

# 📄 Preprints

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/seed20.png' alt="Seed2.0" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Seed2.0 Model Card: Towards Intelligence Frontier for Real-World Complexity](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf)

Contribute to General Agent.

[Page](https://seed.bytedance.com/en/seed2) | [PDF](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/seed18.png' alt="Seed1.8" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Seed1.8 Model Card: Towards Generalized Real-World Agency](https://arxiv.org/abs/2603.20633)

Contribute to GUI Agent.

[Github ![](https://img.shields.io/github/stars/ByteDance-Seed/Seed-1.8)](https://github.com/ByteDance-Seed/Seed-1.8) | [Arxiv](https://arxiv.org/abs/2603.20633)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/CODA.jpg' alt="CODA" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CODA: Coordinating the Cerebrum and Cerebellum for a Dual-Brain Computer Use Agent with Decoupled Reinforcement Learning](https://github.com/OpenIXCLab/CODA)

**Zeyi Sun\***, Yuhang Cao\*, Jianze Liang\*, Qiushi Sun\*, Ziyu Liu\*, Zhixiong Zhang, Yuhang Zang, Xiaoyi Dong, Kai Chen, Dahua Lin, Jiaqi Wang

<span> Early Exploration of Decoupling planner with fixed grounder for Computer Use Agent with RL.</span>

[Github ![](https://img.shields.io/github/stars/OpenIXCLab/CODA)](https://github.com/OpenIXCLab/CODA) | [Arxiv](https://arxiv.org/abs/2508.20096) | [HF](https://huggingface.co/collections/Zery/coda-68afce6edd5c1db147a94494)
</div>
</div>


# 📝 Selected Publications (* Equal Contribution)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/SEAgent.jpg' alt="SEAgent" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://github.com/SunzeY/SEAgent)

**Zeyi Sun**, Ziyu Liu, Yuhang Zang, Yuhang Cao, Xiaoyi Dong, Tong Wu, Dahua Lin, Jiaqi Wang

**[ICML 2026]**

<span> Early Exploration of Self-Evolving Agent for Computer Use with RL.</span>

[Github ![](https://img.shields.io/github/stars/SunzeY/SEAgent)](https://github.com/SunzeY/SEAgent) | [Arxiv](https://arxiv.org/abs/2508.04700) | [HF](https://huggingface.co/collections/Zery/seagent-689421166100c44e88676cc9)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/Visual-RFT.png' alt="Visual-RFT" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Visual-RFT: Visual Reinforcement Fine-Tuning](https://github.com/Liuziyu77/Visual-RFT)

Ziyu Liu\*, **Zeyi Sun\***, Yuhang Zang, Xiaoyi Dong, Yuhang Cao, Haodong Duan, Dahua Lin, Jiaqi Wang

**[ICCV 2025]**

<span> Early Exploration of Deepseek-R1's RL strategy to the multimodal field</span>

<a href="https://www.paperdigest.org/2026/03/most-influential-iccv-papers-2026-03-version/" style="color: #c62828;">Top2 most influential ICCV 2025 papers</a>

[Github ![](https://img.shields.io/github/stars/Liuziyu77/Visual-RFT)](https://github.com/Liuziyu77/Visual-RFT) | [Arxiv](https://arxiv.org/abs/2503.01785) | [HF Model](https://huggingface.co/Zery/Qwen2-VL-7B_visual_rft_lisa_IoU_reward)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/Bootstrap3D.png' alt="BootStrap3D" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Bootstrap3D: Improving Multi-view Diffusion Model with Synthetic Data](https://github.com/SunzeY/Bootstrap3D)

**Zeyi Sun**, Tong Wu, Pan Zhang, Yuhang Zang, Xiaoyi Dong, Yuanjun Xiong, Dahua Lin, Jiaqi Wang

**[ICCV 2025]**

[Github ![](https://img.shields.io/github/stars/SunzeY/Bootstrap3D)](https://github.com/SunzeY/Bootstrap3D) | [Arxiv](https://arxiv.org/abs/2406.00093) | [HF](https://huggingface.co/collections/Zery/bootstrap3d-66503f90d3bb1b461778935d) | [Page](https://sunzey.github.io/Bootstrap3D/)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/RAR.png' alt="RAR" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[RAR: Retrieving And Ranking Augmented MLLMs for Visual Recognition](https://arxiv.org/abs/2403.13805)

Ziyu Liu*, **Zeyi Sun\***, Yuhang Zang, Wei Li, Pan Zhang, Xiaoyi Dong, Yuanjun Xiong, Dahua Lin, Jiaqi Wang

**[IEEE Transactions on Image Processing]**

[**Github** ![](https://img.shields.io/github/stars/Liuziyu77/RAR)](https://github.com/Liuziyu77/RAR)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/Make-It-Real.jpg' alt="Visual-RFT" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Make-it-Real: Unleashing Large Multimodal Model for Painting 3D Objects with Realistic Materials](https://github.com/Aleafy/Make_it_Real)

Ye Fang*, **Zeyi Sun\***, Tong Wu, Jiaqi Wang, Ziwei Liu, Gordon Wetzstein, Dahua Lin

**[NeurIPS 2024]**

[Github ![](https://img.shields.io/github/stars/Aleafy/Make_it_Real)](https://github.com/Aleafy/Make_it_Real/) | 
[Arxiv](https://arxiv.org/abs/2404.16829) | [Page](https://sunzey.github.io/Make-it-Real/)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/Alpha-CLIP.jpg' alt="Visual-RFT" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Alpha-CLIP: A CLIP Model Focusing on Wherever Your Want](https://github.com/SunzeY/AlphaCLIP)

**Zeyi Sun\***, Ye Fang*, Tong Wu, Pan Zhang, Yuhang Zang, Shu Kong, Yuanjun Xiong, Dahua Lin, Jiaqi Wang

**[CVPR 2024] Strong Accept By All Reviewers**

<span> Region Level Contrastive Learning Fundation model based on CLIP.</span>

[Github ![](https://img.shields.io/github/stars/SunzeY/AlphaCLIP)](https://github.com/SunzeY/AlphaCLIP) | 
[Arxiv](https://arxiv.org/abs/2312.03818) | [HF](https://huggingface.co/collections/Zery/alpha-clip-6641d0c73b2643b9e217247a) | [Page](https://aleafy.github.io/alpha-clip/)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/GPT4Point.jpg' alt="Visual-RFT" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[GPT4Point: A Unified Framework for Point-Language Understanding and Generation](https://github.com/Pointcept/GPT4Point)

Zhangyang Qi\*, Ye Fang\*, **Zeyi Sun\***, Xiaoyang Wu, Tong Wu, Jiaqi Wang, Dahua Lin, Hengshuang Zhao

**[CVPR 2024] Highlight**

[Github ![](https://img.shields.io/github/stars/Pointcept/GPT4Point)](https://github.com/Pointcept/GPT4Point) | 
[Arxiv](https://arxiv.org/abs/2312.02980) | [Page](https://gpt4point.github.io/)
</div>
</div>



# 🎖 Honors and Awards
- *2023.06*, Beihang University Outstanding Graduates (Top 5%).
- *2021*,*2022* Beihang University Undergraduate Excellent Scholarship.
- *2018.05*, First Prize, 35th Chinese Physics Olympiad (CPhO), Provincial Round (ranked 13th).

# 📖 Educations
- *2023.09 - until now*, Ph.D. at Shanghai Jiao Tong University (SJTU).
- *2019.09 - 2023.06*, Bachelor in Computer Science, Beihang University (BUAA).

# 📌 Services
- Conference reviewer of CVPR, ICCV, ECCV, ICML, ICLR, NeurIPS.
- Workshop organizing community of <a href='https://vplow.github.io/vplow_4th.html'>VPLOW@CVPR2024</a>.
- S.T.A.R teaching assistant of OS-2022-Spring in CS department, BUAA (founded by [Qian Liu](https://siviltaram.github.io/)).