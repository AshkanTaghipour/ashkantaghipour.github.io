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

# About Me

Generative AI Researcher and Ph.D. candidate at the University of Western Australia, supervised by [Prof. Mohammed Bennamoun](https://scholar.google.com.au/citations?user=ylX5MEAAAAAJ&hl=en). I specialize in diffusion models (DDPMs, Flow Matching) for image and video generation, with hands-on experience in multi-billion-parameter DiT architectures (Wan-Video, CogVideoX) and UNet-based systems (Stable Diffusion, Stable Video Diffusion). My technical expertise spans end-to-end ML pipelines, multi-GPU distributed training, custom CUDA kernels, 3D Gaussian Splatting, and vision-language models (Qwen-VL, LLaVA, SAM/SAM 2). I have delivered production-ready AI systems at Dolby and Novarc Technologies, with first-author publications in IEEE TMM and IEEE Access.

# Selected Research & Projects


<!-- ========================= -->
<!-- 1) Text-to-Skeleton (submitted) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">submitted</div><img src='images/kangaroo.jpg' alt="Kangaroo thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Text-to-Skeleton Cascades for Controllable Complex Human Motion Video Generation](#)

**Ashkan Taghipour**, Morteza Ghahremani, Zinuo Li, Hamid Laga, Farid Boussaid, Mohammed Bennamoun

[**Project Page**](https://ashkantaghipour.github.io/kangaroo/)
</div>
</div>


<!-- ========================= -->
<!-- 2) SVR-GS (submitted) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">submitted</div><img src='images/svrgs.jpg' alt="SVR-GS thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SVR-GS: Spatially Variant Regularization for Probabilistic Masks in 3D Gaussian Splatting](https://arxiv.org/abs/2509.11116)

**Ashkan Taghipour**, Vahid Naghshin, Benjamin Southwell, Farid Boussaid, Hamid Laga, Mohammed Bennamoun

<em>
  This work was conducted during my
  <span style="color:#b45309; font-weight:700;">research internship</span>
  at
  <a href="https://www.dolby.com/" target="_blank" rel="noopener"
     style="color:#1d4ed8; font-weight:800; text-decoration:underline;">
    Dolby
  </a>.
</em>

[**Project Page**](https://ashkantaghipour.github.io/svrgs/) &nbsp;|&nbsp; [**Short Video**](https://youtu.be/0HNOfUCQrHM)
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

[Faster image2video generation: A closer look at clip image embedding's impact on spatio-temporal cross-attentions](https://ieeexplore.ieee.org/abstract/document/11114950)

**Ashkan Taghipour**, Morteza Ghahremani, Aref Miri Rekavandi, Z Li, Mohammed Bennamoun, Hamid Laga, Farid Boussaid

[**Short Video**](https://youtu.be/eSty6-B2RbU)
</div>
</div>


# Technical Skills

**Generative AI:** DDPM, Flow-Matching, Latent Diffusion, DiT (CogVideoX, Wan, PixArt), Stable Diffusion & Stable Video Diffusion, 3D Gaussian Splatting

**Vision-Language Models:** Qwen-VL, LLaVA, SAM/SAM 2, DINOv3, DETR, CLIP

**Frameworks & Tools:** PyTorch, CUDA, Hugging Face (Diffusers, Transformers, PEFT, Accelerate), DeepSpeed, Apache Spark, Databricks

**Infrastructure:** Multi-GPU Distributed Training, Docker, GCP, AWS, HPC


# Experience

### AI/ML Engineer at [Novarc Technologies](https://www.novarctech.com/)
*Apr 2024 - Sep 2025 (Remote)*
- Built diffusion-based synthetic data pipelines and I2V Flow-Matching models for industrial robotics, reducing labeling needs by 60-75% and boosting video analytics throughput from 15 to 50+ FPS.

### Research Intern at [Dolby Laboratories](https://www.dolby.com/)
*May 2025 - Sep 2025*
- Developed a Gaussian pruning framework achieving 5.6x compression and implemented custom CUDA kernels reducing GPU memory by 82% for real-time AR/VR rendering.

### Innovation Center Manager at [MTN Group](https://mtn.com/)
*Apr 2021 - Apr 2023*
- Led ML initiatives for credit scoring and financial services using PySpark and Databricks, serving 50+ million users.
