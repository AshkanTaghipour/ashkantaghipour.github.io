---
permalink: /
title: "Ashkan Taghipour"
layout: home
redirect_from:
  - /about/
  - /about.html
---

<section class="section" id="about">
  <h2>About</h2>
  <div class="about">
    <div class="about__text">
      <p>I am a Postdoctoral Researcher at the <a href="https://www.perkins.org.au/" target="_blank" rel="noopener">Harry Perkins Institute of Medical Research</a> in Perth, where I develop multimodal and agentic AI for medical imaging and clinical research.</p>
      <p>I completed my Ph.D. in Computer Science at <a href="https://www.uwa.edu.au/" target="_blank" rel="noopener">The University of Western Australia</a>, working on generative models for images, video and 3D scenes. Along the way I worked on 3D Gaussian Splatting with the Advanced Technology Group at <a href="https://www.dolby.com/" target="_blank" rel="noopener">Dolby Laboratories</a>, and on video generation for robotic welding at <a href="https://www.novarctech.com/" target="_blank" rel="noopener">Novarc Technologies</a>.</p>
      <ul class="tags">
        <li>Multimodal understanding</li>
        <li>Image &amp; video generation</li>
        <li>3D generation &amp; understanding</li>
        <li>LLMs</li>
        <li>Agentic systems</li>
        <li>Medical imaging</li>
      </ul>
    </div>
    <img class="about__photo" src="{{ '/images/ashkan_taghipour.jpg' | relative_url }}" alt="Portrait of Ashkan Taghipour">
  </div>
</section>

<section class="section" id="news">
  <h2>News</h2>
  <ul class="news">
    <li><time>Jul 2026</time><span>Joined the Harry Perkins Institute of Medical Research as a Postdoctoral Researcher.</span></li>
    <li><time>Jun 2026</time><span>Presented <a href="https://ashkantaghipour.github.io/svrgs/" target="_blank" rel="noopener">SVR-GS</a> as an oral presentation at ICRA 2026 in Vienna.</span></li>
    <li><time>Feb 2026</time><span>SVR-GS, from my internship at Dolby Laboratories, accepted to ICRA 2026.</span></li>
  </ul>
</section>

<section class="section" id="publications">
  <h2>Publications</h2>

  <article class="pub">
    <img class="pub__thumb" src="{{ '/images/kangaroo.jpg' | relative_url }}" alt="" loading="lazy">
    <div>
      <h3 class="pub__title"><a href="https://ashkantaghipour.github.io/kangaroo/" target="_blank" rel="noopener">Text-to-Skeleton Cascades for Controllable Complex Human Motion Video Generation</a></h3>
      <p class="pub__authors"><strong>Ashkan Taghipour</strong>, Morteza Ghahremani, Zinuo Li, Hamid Laga, Farid Boussaid, Mohammed Bennamoun</p>
      <div class="pub__meta">
        <span class="venue">Under review</span>
        <a href="https://ashkantaghipour.github.io/kangaroo/" target="_blank" rel="noopener">Project page</a>
      </div>
    </div>
  </article>

  <article class="pub">
    <img class="pub__thumb" src="{{ '/images/svrgs.jpg' | relative_url }}" alt="" loading="lazy">
    <div>
      <h3 class="pub__title"><a href="https://arxiv.org/abs/2509.11116" target="_blank" rel="noopener">SVR-GS: Spatially Variant Regularization for Probabilistic Masks in 3D Gaussian Splatting</a></h3>
      <p class="pub__authors"><strong>Ashkan Taghipour</strong>, Vahid Naghshin, Benjamin Southwell, Farid Boussaid, Hamid Laga, Mohammed Bennamoun</p>
      <div class="pub__meta">
        <span class="venue">ICRA 2026 · Oral</span>
        <a href="https://ashkantaghipour.github.io/svrgs/" target="_blank" rel="noopener">Project page</a>
        <a href="https://github.com/AshkanTaghipour/SVR-GS" target="_blank" rel="noopener">Code</a>
        <a href="https://youtu.be/0HNOfUCQrHM" target="_blank" rel="noopener">Video</a>
        <span class="note">Work done at Dolby Laboratories</span>
      </div>
    </div>
  </article>

  <article class="pub">
    <img class="pub__thumb" src="{{ '/images/boxittobindit.jpg' | relative_url }}" alt="" loading="lazy">
    <div>
      <h3 class="pub__title"><a href="https://ieeexplore.ieee.org/abstract/document/11153996" target="_blank" rel="noopener">Box It to Bind It: Unified Layout Control and Attribute Binding in T2I Diffusion Models</a></h3>
      <p class="pub__authors"><strong>Ashkan Taghipour</strong>, Morteza Ghahremani, Mohammed Bennamoun, Aref Miri Rekavandi, Hamid Laga, Farid Boussaid</p>
      <div class="pub__meta">
        <span class="venue">IEEE TMM</span>
        <a href="https://github.com/nextaistudio/BoxIt2BindIt" target="_blank" rel="noopener">Code</a>
        <a href="https://youtu.be/X_gxuGWOsss" target="_blank" rel="noopener">Video</a>
      </div>
    </div>
  </article>

  <article class="pub">
    <img class="pub__thumb" src="{{ '/images/fasteri2v.jpg' | relative_url }}" alt="" loading="lazy">
    <div>
      <h3 class="pub__title"><a href="https://ieeexplore.ieee.org/abstract/document/11114950" target="_blank" rel="noopener">Faster Image2Video Generation: A Closer Look at CLIP Image Embedding's Impact on Spatio-Temporal Cross-Attentions</a></h3>
      <p class="pub__authors"><strong>Ashkan Taghipour</strong>, Morteza Ghahremani, Aref Miri Rekavandi, Zinuo Li, Mohammed Bennamoun, Hamid Laga, Farid Boussaid</p>
      <div class="pub__meta">
        <span class="venue">IEEE Access</span>
        <a href="https://youtu.be/eSty6-B2RbU" target="_blank" rel="noopener">Video</a>
      </div>
    </div>
  </article>

  <p class="subhead">Selected projects</p>

  <article class="pub">
    <img class="pub__thumb" src="{{ '/images/geollm.jpg' | relative_url }}" alt="" loading="lazy">
    <div>
      <h3 class="pub__title"><a href="https://github.com/AshkanTaghipour/GeoLLM-Qwen3.5-FineTune" target="_blank" rel="noopener">GeoLLM — Domain-Specific LLM Fine-Tuning</a></h3>
      <p class="pub__desc">Extracts structured QA datasets from 1,000+ geological PDFs with OCR, then fine-tunes Qwen 3.5 models (0.8B–27B) with LoRA for domain-specific reasoning.</p>
      <div class="pub__meta">
        <a href="https://github.com/AshkanTaghipour/GeoLLM-Qwen3.5-FineTune" target="_blank" rel="noopener">Code</a>
        <a href="https://huggingface.co/spaces/AshkanTaghipour/GeoLLM" target="_blank" rel="noopener">Demo</a>
        <a href="https://huggingface.co/datasets/AshkanTaghipour/mineral-exploration-geology-qa" target="_blank" rel="noopener">Dataset</a>
        <a href="https://huggingface.co/AshkanTaghipour/models" target="_blank" rel="noopener">Models</a>
      </div>
    </div>
  </article>

  <article class="pub">
    <img class="pub__thumb" src="{{ '/images/minewatchai.jpg' | relative_url }}" alt="" loading="lazy">
    <div>
      <h3 class="pub__title"><a href="https://huggingface.co/spaces/AshkanTaghipour/MineWatchAI" target="_blank" rel="noopener">MineWatchAI — Mining Rehabilitation Monitoring</a></h3>
      <p class="pub__desc">Monitors vegetation rehabilitation at WA mining sites using Sentinel-2 imagery, vegetation indices (NDVI, SAVI, EVI) and automated compliance reporting.</p>
      <div class="pub__meta">
        <a href="https://huggingface.co/spaces/AshkanTaghipour/MineWatchAI" target="_blank" rel="noopener">Demo</a>
      </div>
    </div>
  </article>

  <article class="pub">
    <img class="pub__thumb" src="{{ '/images/wealthpathau.jpg' | relative_url }}" alt="" loading="lazy">
    <div>
      <h3 class="pub__title"><a href="https://wealthpath-au.streamlit.app/" target="_blank" rel="noopener">WealthPathAU — Investment Portfolio Simulator</a></h3>
      <p class="pub__desc">ASX investment simulator with Monte Carlo projections, historical backtesting and risk-based portfolio allocation.</p>
      <div class="pub__meta">
        <a href="https://wealthpath-au.streamlit.app/" target="_blank" rel="noopener">Demo</a>
      </div>
    </div>
  </article>
</section>

<section class="section" id="experience">
  <h2>Experience</h2>

  <div class="role">
    <div class="role__date">Jul 2026 – Present</div>
    <div>
      <h3 class="role__title">Postdoctoral Researcher</h3>
      <p class="role__org"><a href="https://www.perkins.org.au/" target="_blank" rel="noopener">Harry Perkins Institute of Medical Research</a> · Full-time · Perth, Australia</p>
      <ul>
        <li>Deploy AI models using GPU-accelerated and high-performance computing</li>
        <li>Develop multimodal AI pipelines for complex medical imaging data</li>
        <li>Develop agentic AI workflows for clinical research and data analysis</li>
        <li>Collaborate across AI, clinical and biomedical research teams</li>
      </ul>
    </div>
  </div>

  <div class="role">
    <div class="role__date">Jul 2024 – Oct 2025</div>
    <div>
      <h3 class="role__title">AI Engineer</h3>
      <p class="role__org"><a href="https://www.novarctech.com/" target="_blank" rel="noopener">Novarc Technologies</a> · Contract · Remote (Greater Toronto Area, Canada)</p>
      <ul>
        <li>Developed an image and video generation pipeline for robotic welding, integrating motion-aware conditioning and temporal diffusion modules</li>
        <li>Built data processing and training workflows for welding footage, generating structured datasets for supervised fine-tuning</li>
        <li>Optimised inference for real-world deployment, achieving high-fidelity frame consistency and realistic illumination in industrial welding scenes</li>
      </ul>
    </div>
  </div>

  <div class="role">
    <div class="role__date">May 2025 – Sep 2025</div>
    <div>
      <h3 class="role__title">Advanced Technology Group (ATG) Intern</h3>
      <p class="role__org"><a href="https://www.dolby.com/" target="_blank" rel="noopener">Dolby Laboratories</a> · Full-time · Sydney, Australia</p>
      <ul>
        <li>3D Gaussian Splatting for novel view synthesis (<a href="https://ashkantaghipour.github.io/svrgs/" target="_blank" rel="noopener">SVR-GS</a>, ICRA 2026)</li>
        <li>Real-time 3D graphics and rendering with CUDA</li>
        <li>Applications in AR/VR and immersive media</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" id="education">
  <h2>Education</h2>

  <div class="role">
    <div class="role__date">Apr 2023 – Oct 2026</div>
    <div>
      <h3 class="role__title">Ph.D. in Computer Science</h3>
      <p class="role__org"><a href="https://www.uwa.edu.au/" target="_blank" rel="noopener">The University of Western Australia</a> · Perth, Australia</p>
    </div>
  </div>
</section>
