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

<!-- Custom styles for consistent UI -->
<style>
  /* Paper thumbnail styling */
  .paper-box-image img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  /* Section divider styling */
  .section-divider {
    border: none;
    height: 2px;
    background: linear-gradient(to right, transparent, #e5e7eb, transparent);
    margin: 2.5rem 0 2rem 0;
  }

  /* Experience card styling */
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

I architect, train, and deploy multimodal AI systems spanning 2D/3D Generative AI, LLMs, and computer vision. As a Research Software Engineer and Data Scientist with a Ph.D. in Computer Science, I bring 3+ years of experience delivering AI/ML solutions in heavy industrial operations, combining strong foundations in statistics, machine learning, and predictive analytics with proven business impact.

My expertise covers end-to-end ML pipelines: from data extraction, feature engineering, and statistical modelling to model development, deployment, and monitoring. I have delivered measurable improvements in operational efficiency (130% throughput gains, 20% error reduction) across industrial robotics, telecommunications, and AR/VR applications. Proficient in Python, SQL, PyTorch, and TensorFlow, with hands-on experience in Databricks, Apache Spark, and AWS for scalable data processing and ML operations.

I specialize in diffusion models (DDPMs, Flow Matching) for image and video generation, with hands-on experience in multi-billion-parameter DiT architectures (Wan-Video, CogVideoX) and UNet-based systems (Stable Diffusion, Stable Video Diffusion). My technical expertise includes multi-GPU distributed training, custom CUDA kernels, 3D Gaussian Splatting, and vision-language models (Qwen-VL, LLaVA, SAM/SAM 2). I have published first-author papers in IEEE TMM and IEEE Access, demonstrating strong communication skills and the ability to translate complex technical concepts for diverse stakeholders.

<hr class="section-divider">

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
     style="color:#1d4ed8; font-weight:800;">
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


<!-- ========================= -->
<!-- 5) MineWatchAI (Data Science Project) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Data Science</div><img src='images/minewatchai.jpg' alt="MineWatchAI thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MineWatchAI — Mining Rehabilitation Monitoring](https://huggingface.co/spaces/AshkanTaghipour/MineWatchAI)

End-to-end data science application for monitoring vegetation rehabilitation at WA mining sites using Sentinel-2 imagery, vegetation indices (NDVI, SAVI, EVI), and automated compliance reporting.

[**Live Demo**](https://huggingface.co/spaces/AshkanTaghipour/MineWatchAI)
</div>
</div>


<!-- ========================= -->
<!-- 6) WealthPathAU (Data Science Project) -->
<!-- ========================= -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Data Science</div><img src='images/wealthpathau.jpg' alt="WealthPathAU thumbnail" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[WealthPathAU — Investment Portfolio Simulator](https://huggingface.co/spaces/AshkanTaghipour/WealthPathAU)

ASX investment simulator with Monte Carlo projections, historical backtesting, dividend forecasting, and risk-based portfolio allocation serving Australian retail investors.

[**Live Demo**](https://wealthpath-au.streamlit.app/)
</div>
</div>

<hr class="section-divider">

# Experience

<div class="experience-item" markdown="1">

### Data Scientist / ML Engineer at [Novarc Technologies](https://www.novarctech.com/)
*Apr 2024 - Sep 2025 (Part-Time, Remote) — Vancouver, Canada*

- Designed and deployed AI/ML models for industrial video analytics, improving operational throughput by 130% (15 to 35+ FPS) and reducing prediction errors by 20%.
- Developed predictive analytics pipelines for quality control and anomaly detection in manufacturing processes, enabling proactive maintenance and reducing downtime.
- Engineered synthetic data generation frameworks that reduced real-data labelling costs by 60–75%, improving model robustness for industrial robotics applications.
- Applied experimental design and A/B testing methodologies to optimise model performance, achieving 4–8% accuracy improvements on challenging segmentation tasks.
- Collaborated with cross-functional teams (engineering, operations, product) to translate business requirements into technical specifications for data science projects.

</div>

<div class="experience-item" markdown="1">

### Research Intern — Advanced Technology Group at [Dolby Laboratories](https://www.dolby.com/)
*May 2025 - Sep 2025 — Sydney, Australia*

- Developed a Gaussian pruning framework for 3D Gaussian Splatting achieving 5.6× compression while maintaining visual quality for AR/VR rendering ([SVR-GS Paper](https://ashkantaghipour.github.io/svrgs/)).
- Implemented high-performance computing solutions using custom CUDA kernels, reducing GPU memory footprint by 82% and enabling real-time novel view synthesis on consumer hardware.
- Communicated research findings through presentations and technical documentation to stakeholders across technical and business teams.

</div>

<div class="experience-item" markdown="1">

### AI Researcher (Ph.D. Candidate) at [University of Western Australia](https://www.uwa.edu.au/)
*Apr 2023 - Present — Perth, Australia*

- Published 8 peer-reviewed papers in top-tier journals (IEEE TMM, IEEE Access), demonstrating expertise in statistical analysis, experimental design, and applied analytical modelling.
- Developed and deployed computer vision and NLP models including natural language processing (traditional and LLM-based), image classification, segmentation, and predictive analytics.
- Managed 10TB+ datasets using distributed computing frameworks, building scalable data pipelines with comprehensive documentation and version control.
- Mentored 4 students on research methodology and ML best practices, fostering a culture of collaboration and continuous learning.

</div>

<div class="experience-item" markdown="1">

### Innovation Center Manager — ML & Data Science at [MTN Group](https://www.mtn.com/)
*Apr 2021 - Apr 2023 — Tehran, Iran*

- Built credit scoring and predictive analytics models using PySpark and Databricks, serving 50+ million users and reducing default rates by 10%.
- Designed and maintained data pipelines for large-scale data processing, ensuring data integrity, accessibility, and compliance with security standards.
- Created interactive dashboards and BI solutions serving 15+ stakeholders, reducing report generation time by 40% and enabling data-driven decision making.
- Led continuous improvement initiatives integrating AI solutions into business operations, contributing to 5% revenue increase.
- Managed and influenced stakeholders across technical, operational, and business teams, translating business needs into actionable data science projects.

</div>
