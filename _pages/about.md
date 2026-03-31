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

<!-- Google Fonts: Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Custom styles -->
<style>
  /* ===== Global Font ===== */
  body, .page__content, .author__name, .author__bio, .author__urls {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  /* ===== Section Headers ===== */
  .page__content h1 {
    font-size: 1.6em;
    font-weight: 700;
    margin-top: 1.5em;
    padding-bottom: 0.4em;
    border-bottom: 2px solid #224b8d;
  }

  /* ===== About Highlights ===== */
  .about-highlights {
    list-style: none;
    padding: 0;
    margin: 1.2em 0;
  }
  .about-highlights li {
    padding: 0.4em 0 0.4em 1.5em;
    position: relative;
    line-height: 1.6;
  }
  .about-highlights li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: #224b8d;
    font-weight: bold;
  }

  /* ===== Paper thumbnail styling ===== */
  .paper-box-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    display: block;
  }
  .paper-box-image {
    min-height: 200px;
  }

  /* ===== Section divider ===== */
  .section-divider {
    border: none;
    height: 2px;
    background: linear-gradient(to right, #224b8d, #e5e7eb, transparent);
    margin: 2.5rem 0 2rem 0;
  }


  /* ===== Experience ===== */
  .experience-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #f3f4f6;
  }
  .experience-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .experience-item h3 {
    margin-bottom: 0.25rem;
  }
  .experience-item em {
    color: #6b7280;
    font-size: 0.9rem;
  }
  .experience-item ul {
    margin-top: 0.75rem;
  }
</style>

# About Me

AI/ML Engineer and Researcher with a Ph.D. in Computer Science from the [University of Western Australia](https://www.uwa.edu.au/). I build and optimise multimodal AI systems spanning computer vision, NLP, and generative AI.

<ul class="about-highlights">
  <li><strong>Computer Vision & Real-Time Inference</strong> — Object detection, video analytics, 3D reconstruction; 130% throughput gains, 82% GPU memory reduction via custom CUDA kernels</li>
  <li><strong>NLP & LLMs</strong> — LLM fine-tuning (LoRA), RAG pipelines, document data extraction from 1000+ geological PDFs (<a href="https://huggingface.co/spaces/AshkanTaghipour/GeoLLM">Live Demo</a>)</li>
  <li><strong>Scalable ML</strong> — Pipelines serving 50M+ users, 5.6× model compression, synthetic data generation reducing labelling costs by 60–75%</li>
  <li><strong>Publications</strong> — 8 peer-reviewed papers in ICRA, IEEE TMM, IEEE Access, Int. J. Remote Sensing</li>
</ul>

<hr class="section-divider">

# Selected Research & Projects

<!-- ========================= -->
<!-- 1) Text-to-Skeleton (submitted) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Submitted</div><img src='images/kangaroo.jpg' alt="Kangaroo thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Text-to-Skeleton Cascades for Controllable Complex Human Motion Video Generation](#)

**Ashkan Taghipour**, Morteza Ghahremani, Zinuo Li, Hamid Laga, Farid Boussaid, Mohammed Bennamoun

[**Project Page**](https://ashkantaghipour.github.io/kangaroo/)
</div>
</div>


<!-- ========================= -->
<!-- 2) SVR-GS (ICRA 2026) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2026</div><img src='images/svrgs.jpg' alt="SVR-GS thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SVR-GS: Spatially Variant Regularization for Probabilistic Masks in 3D Gaussian Splatting](https://arxiv.org/abs/2509.11116)

**Ashkan Taghipour**, Vahid Naghshin, Benjamin Southwell, Farid Boussaid, Hamid Laga, Mohammed Bennamoun

<em>This work was conducted during my <span style="color:#b45309; font-weight:700;">research internship</span> at <a href="https://www.dolby.com/" target="_blank" rel="noopener" style="color:#1d4ed8; font-weight:800;">Dolby</a>.</em>

[**Project Page**](https://ashkantaghipour.github.io/svrgs/) &nbsp;|&nbsp; [**Code**](https://github.com/AshkanTaghipour/SVR-GS) &nbsp;|&nbsp; [**Short Video**](https://youtu.be/0HNOfUCQrHM)
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


<!-- ========================= -->
<!-- 5) GeoLLM (LLM Fine-Tuning) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">LLM Project</div><img src='images/geollm.jpg' alt="GeoLLM thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GeoLLM — Domain-Specific LLM Fine-Tuning](https://github.com/AshkanTaghipour/GeoLLM-Qwen3.5-FineTune)

End-to-end pipeline extracting structured QA datasets from 1000+ geological PDFs using OCR, then fine-tuning Qwen 3.5 models (0.8B–27B) with LoRA for domain-specific reasoning.

[**Code**](https://github.com/AshkanTaghipour/GeoLLM-Qwen3.5-FineTune) &nbsp;|&nbsp; [**Live Demo**](https://huggingface.co/spaces/AshkanTaghipour/GeoLLM) &nbsp;|&nbsp; [**Dataset**](https://huggingface.co/datasets/AshkanTaghipour/mineral-exploration-geology-qa) &nbsp;|&nbsp; [**Models**](https://huggingface.co/AshkanTaghipour/models)
</div>
</div>


<!-- ========================= -->
<!-- 6) MineWatchAI -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Data Science</div><img src='images/minewatchai.jpg' alt="MineWatchAI thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MineWatchAI — Mining Rehabilitation Monitoring](https://huggingface.co/spaces/AshkanTaghipour/MineWatchAI)

End-to-end application for monitoring vegetation rehabilitation at WA mining sites using Sentinel-2 imagery, vegetation indices (NDVI, SAVI, EVI), and automated compliance reporting.

[**Live Demo**](https://huggingface.co/spaces/AshkanTaghipour/MineWatchAI)
</div>
</div>


<!-- ========================= -->
<!-- 7) WealthPathAU -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Fintech</div><img src='images/wealthpathau.jpg' alt="WealthPathAU thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[WealthPathAU — Investment Portfolio Simulator](https://wealthpath-au.streamlit.app/)

ASX investment simulator with Monte Carlo projections, historical backtesting, and risk-based portfolio allocation serving Australian retail investors.

[**Live Demo**](https://wealthpath-au.streamlit.app/)
</div>
</div>

<hr class="section-divider">

# Experience

<div class="experience-item" markdown="1">

### AI/ML Engineer at [Novarc Technologies](https://www.novarctech.com/)
*Apr 2024 – Sep 2025 (Part-Time, Remote) — Vancouver, Canada*

- Built deep learning pipelines for **real-time video analytics**, improving throughput by **130%** (15 to 35+ FPS)
- Designed **synthetic data generation pipelines**, reducing labelling costs by **60–75%**
- Applied **object detection** and **segmentation** with **4–8% accuracy gains** through edge-case analysis
- Designed **multimodal conditioning frameworks** for complex video understanding tasks

</div>

<div class="experience-item" markdown="1">

### Research Intern — Advanced Technology Group at [Dolby Laboratories](https://www.dolby.com/)
*May 2025 – Sep 2025 — Sydney, Australia*

- Developed **3D scene reconstruction** pipeline using Gaussian Splatting ([SVR-GS](https://ashkantaghipour.github.io/svrgs/), accepted **ICRA 2026**)
- Achieved **5.6× model compression** and **82% GPU memory reduction** via custom **CUDA kernels**
- Optimised models for **real-time inference** on consumer hardware

</div>

<div class="experience-item" markdown="1">

### Computer Vision Researcher (Ph.D.) at [University of Western Australia](https://www.uwa.edu.au/)
*Apr 2023 – Mar 2026 — Perth, Australia*

- Published **8 peer-reviewed papers** in ICRA, IEEE TMM, IEEE Access, and Int. J. Remote Sensing
- Trained **multi-billion parameter** video models on **10TB+ datasets** using distributed multi-GPU computing
- Built annotation, evaluation, and data quality pipelines for deep learning at scale

</div>

<div class="experience-item" markdown="1">

### Innovation Center Manager — ML & Data Science at [MTN Group](https://www.mtn.com/)
*Apr 2021 – Apr 2023 — Tehran, Iran*

- Built **predictive analytics** models using **PySpark** and **Databricks**, serving **50+ million users**
- Designed dashboards and reports for **15+ stakeholders**, reducing report generation time by **40%**
- Led end-to-end ML projects from concept through model training and handoff to engineering teams

</div>
