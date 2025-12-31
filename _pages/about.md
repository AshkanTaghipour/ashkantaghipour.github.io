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

<!-- Make all paper thumbnails visually consistent -->
<style>
  .paper-box-image img {
    width: 100%;
    height: 170px;          /* adjust if you want taller/shorter cards */
    object-fit: cover;      /* crop to fill while keeping a clean look */
    border-radius: 10px;    /* optional: matches modern card style */
    display: block;
  }
</style>

<span class='anchor' id='about-me'></span>
# 👨‍💻 About Me

I am an enthusiastic researcher focused on generative AI, working under the supervision of [Prof. Mohammed Bennamoun](https://scholar.google.com.au/citations?user=ylX5MEAAAAAJ&hl=en), [Prof. Farid Boussaid](https://scholar.google.com.au/citations?user=SacY05oAAAAJ&hl=en), and [Prof. Hamid Laga](https://scholar.google.com.au/citations?user=Qxmqp-0AAAAJ&hl=en). My research area primarily involves text-to-image and text-to-video generation. I am passionate about pushing the boundaries of AI-generated content (AIGC), especially for kids, to democratize visual storytelling for anyone, anywhere.



<!--

# 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
-->

# 📝 Selected Research & Projects


<!-- ========================= -->
<!-- 1) Text-to-Skeleton (submitted) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">submitted</div><img src='images/kangaroo.jpg' alt="Kangaroo thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Text-to-Skeleton Cascades for Controllable Complex Human Motion Video Generation](#)

**Ashkan Taghipour**, Morteza Ghahremani, Zinuo Li, Hamid Laga, Farid Boussaid, Mohammed Bennamoun

[**Project Page**](https://ashkantaghipour.github.io/kangaroo/) &nbsp;|&nbsp; [**Short Video**](YOUR_YOUTUBE_LINK_HERE)
</div>
</div>


<!-- ========================= -->
<!-- 2) SVR-GS (submitted) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">submitted</div><img src='images/svrgs.jpg' alt="SVR-GS thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SVR-GS: Spatially Variant Regularization for Probabilistic Masks in 3D Gaussian Splatting](https://arxiv.org/abs/2509.11116)

**Ashkan Taghipour**, Morteza Ghahremani, Mohammed Bennamoun, Hamid Laga, Farid Boussaid

[**Project Page**](PROJECT_PAGE_LINK_TBD) &nbsp;|&nbsp; [**Short Video**](https://youtu.be/0HNOfUCQrHM)
</div>
</div>


<!-- ========================= -->
<!-- 3) BoxIt2BindIt (IEEE TMM) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TMM</div><img src='images/boxittobindit.jpg' alt="BoxIt2BindIt thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Box It to Bind It: Unified Layout Control and Attribute Binding in T2I Diffusion Model](https://ieeexplore.ieee.org/abstract/document/11153996)

**Ashkan Taghipour**, Morteza Ghahremani, Mohammed Bennamoun, Aref Miri Rekavandi, Hamid Laga, Farid Boussaid

[**Code**](https://github.com/nextaistudio/BoxIt2BindIt) &nbsp;|&nbsp; [**Short Video**](https://youtu.be/X_gxuGWOsss) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
</div>
</div>


<!-- ========================= -->
<!-- 4) Faster I2V (IEEE Access) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE Access</div><img src='images/fasteri2v.jpg' alt="Faster I2V thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Faster image2video generation: A closer look at clip image embedding’s impact on spatio-temporal cross-attentions](https://ieeexplore.ieee.org/abstract/document/11114950)

**Ashkan Taghipour**, Morteza Ghahremani, Mohammed Bennamoun, Hamid Laga, Farid Boussaid

[**Short Video**](YOUR_YOUTUBE_LINK_HERE)
</div>
</div>



<!--
# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.

-->

# Softwares & Libraries
- Git
- Pytorch
- [HuggingFace](https://huggingface.co/)
- [Diffusers](https://github.com/huggingface/diffusers)
- [PEFT](https://github.com/huggingface/peft)
- [Accelerator](https://github.com/huggingface/accelerate)
- [Transformers](https://github.com/huggingface/transformers)

<!--
# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

-->

# 💻 Development Experience

### Innovation center Manager at [MTN](https://mtn.com/)
*April 2021 - April 2023*
- Developed and deployed scalable models for credit scoring and "buy now, pay later" services using PySpark and Databricks.
- Engineered robust data pipelines and machine learning workflows to analyze vast datasets, serving over 50 million users.
