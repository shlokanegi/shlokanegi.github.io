---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home # Or your name, {{ site.author }}
---

<section id="home" class="page-section home-section">
    <div class="wrapper">
        <div class="home-grid">
            <div class="home-column-left">
                <div class="profile-pic-container">
                    <!-- Placeholder for profile picture -->
                    <img src="{{ '/assets/images/profile_image_zoom.png' | relative_url }}" alt="{{ site.author }}" class="profile-pic">
                </div>
                <h1>{{ site.author }}</h1>
                <p class="title-affiliation">PhD Candidate in <a href="https://cglgenomics.ucsc.edu/" target="_blank" rel="noopener noreferrer">Computational Genomics Lab</a></p>
                <div class="affiliations-list">
                    <p class="affiliation-item"><a href="https://engineering.ucsc.edu/departments/biomolecular-engineering/" target="_blank" rel="noopener noreferrer">Department of Biomolecular Engineering and Bioinformatics, UC Santa Cruz</a></p>
                    <p class="affiliation-item"><a href="https://genomics.ucsc.edu/" target="_blank" rel="noopener noreferrer">UC Santa Cruz Genomics Institute</a></p>
                </div>
                
                <div class="icon-links-small">
                    <a href="mailto:{{ site.email }}" aria-label="Email" title="Email"><i class="fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" aria-label="LinkedIn" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/{{ site.github_username }}" aria-label="GitHub" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://scholar.google.com/citations?user={{ site.googlescholar_id }}&hl=en" aria-label="Google Scholar" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
                    <a href="https://orcid.org/{{ site.orcid_id }}" aria-label="ORCID" title="ORCID"><i class="fab fa-orcid"></i></a>
                    <a href="{{ '/assets/pdf/ShlokaNegi_CV.pdf' | relative_url }}" aria-label="Download CV" title="Download CV" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i></a>
                </div>
            </div>
            <div class="home-column-right">
                <h2>About Me</h2>
                <p>I am a third-year Bioinformatics PhD student at UC Santa Cruz, focusing on genomic data analysis and algorithm development. My key interests include leveraging computational methods to understand complex biological systems and developing tools for large-scale sequencing data.</p>
                
                <h3>Research Interests</h3>
                <ul>
                    <li>Long read sequencing</li>
                    <li>Structural variants</li>
                    <li>Pangenomics</li>
                    <li>Genome assembly</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section id="projects" class="page-section projects-section">
    <div class="wrapper">
        <h2>My Projects</h2>
        {% if site.projects.size > 0 %}
            <div class="project-grid">
                {% assign sorted_projects = site.projects | sort: "date" | reverse %}
                {% for project in sorted_projects %}
                    <div class="project-card">
                        {% if project.image %}
                            <a href="{{ project.url | relative_url }}" class="project-image-link">
                                <img src="{{ project.image | relative_url }}" alt="{{ project.title | escape }}" class="project-image">
                            </a>
                        {% endif %}
                        <div class="project-card-content">
                            <h3 class="project-title"><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h3>
                            {% if project.short_description %}
                                <p class="project-description">{{ project.short_description | escape }}</p>
                            {% endif %}
                            {% if project.tags and project.tags.size > 0 %}
                                <div class="project-tags">
                                    {% for tag in project.tags %}
                                        <span class="tag">{{ tag | escape }}</span>
                                    {% endfor %}
                                </div>
                            {% endif %}
                            <a href="{{ project.url | relative_url }}" class="project-read-more">View Details &rarr;</a>
                        </div>
                    </div>
                {% endfor %}
            </div>
        {% else %}
            <p>No projects to display yet. Check back soon!</p>
        {% endif %}
    </div>
</section>

<section id="publications" class="page-section publications-section">
    <div class="wrapper">
        <h2>Publications</h2>
        <p class="google-scholar-link">
            You can also find my work on 
            <a href="https://scholar.google.com/citations?user={{ site.googlescholar_id }}&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar <i class="fas fa-external-link-alt fa-xs"></i></a>.
        </p>

        {% if site.data.publications and site.data.publications.size > 0 %}
            <div class="publications-list">
                {% assign sorted_pubs = site.data.publications | sort: "year" | reverse %}
                {% for pub in sorted_pubs %}
                    <article class="publication-entry">
                        <div class="publication-badges">
                            {% if pub.doi %}
                                <div class="altmetric-embed" data-badge-type="2" data-doi="{{ pub.doi }}" data-hide-no-mentions="true" data-hide-less-than="1" data-badge-popover="top" data-link-target="_blank"></div>
                                <div data-doi="{{ pub.doi }}" data-style="small_circle" class="__dimensions_badge_embed__"></div>
                            {% endif %}
                        </div>
                        <div class="publication-main-info">
                            <p class="publication-authors">
                                {%- capture author_list -%}{{ pub.authors }}{%- endcapture -%}
                                {{ author_list | markdownify | remove: '<p>' | remove: '</p>' }}
                            </p>
                            <p class="publication-title-journal">
                                <a href="{{ pub.doi_link }}" target="_blank" rel="noopener noreferrer" class="publication-title">{{ pub.title }}</a>.
                                <span class="publication-journal"><em>{{ pub.journal_conference }}</em></span>, {{ pub.year }}.
                                {%- if pub.volume -%}
                                    Vol. {{ pub.volume }}
                                {%- endif -%}
                                {%- if pub.issue -%}
                                    , Issue {{ pub.issue }}
                                {%- endif -%}
                                {%- if pub.pages -%}
                                    , pp. {{ pub.pages }}
                                {%- endif -%}.
                            </p>
                        </div>
                        <div class="publication-links">
                            {% if pub.pdf_link %}<a href="{{ pub.pdf_link }}" target="_blank" rel="noopener noreferrer" class="pub-link pdf-link">PDF</a>{% endif %}
                            {% if pub.preprint_link %}<a href="{{ pub.preprint_link }}" target="_blank" rel="noopener noreferrer" class="pub-link preprint-link">Preprint</a>{% endif %}
                            {% if pub.code_link %}<a href="{{ pub.code_link }}" target="_blank" rel="noopener noreferrer" class="pub-link code-link">Code</a>{% endif %}
                            {% if pub.slides_link %}<a href="{{ pub.slides_link }}" target="_blank" rel="noopener noreferrer" class="pub-link slides-link">Slides</a>{% endif %}
                            {% if pub.bibtex %}
                                <button class="pub-link bibtex-toggle-button" data-target="bibtex-{{ forloop.index }}">BibTeX</button>
                            {% endif %}
                        </div>
                        {% if pub.bibtex %}
                            <div id="bibtex-{{ forloop.index }}" class="bibtex-content" style="display: none;">
                                <pre><code>{{ pub.bibtex | escape }}</code></pre>
                            </div>
                        {% endif %}
                    </article>
                {% endfor %}
            </div>
        {% else %}
            <p>No publications listed yet. Check back soon!</p>
        {% endif %}
    </div>
</section>

<!-- Talks & Presentations Section -->
<section id="talks" class="page-section">
  <div class="wrapper">
    <h2>Talks & Presentations</h2>
    <p>Coming soon! This section will feature information about invited talks, conference presentations, and workshops.</p>
    <!-- Placeholder for talks list or content -->
  </div>
</section>

<!-- Spotlight Section -->
<section id="spotlight" class="page-section spotlight-section">
  <div class="wrapper">
    <h2>Spotlight</h2>
    <p>Here are some highlights and features of my work and achievements.</p>

    <div class="achievement-grid">
      <div class="achievement-item">
        <div class="achievement-image">
          <img src="assets/images/AJHG_GI_pic.jpg" alt="GI picture">
        </div>
        <div class="achievement-content">
          <h3>Long-Read Nanopore Sequencing Improves Rare Disease Diagnosis</h3>
          <p class="achievement-meta">Published by: Genetic Engineering and Biotechnology News | Date: January 26, 2025</p>
          <a href="https://www.genengnews.com/topics/omics/long-read-nanopore-sequencing-improves-rare-disease-diagnosis" target="_blank" rel="noopener noreferrer" class="btn">Read More</a>
        </div>
      </div>

      <div class="achievement-item">
        <div class="achievement-image">
          <img src="assets/images/AJHG_GI_pic.jpg" alt="GI picture">
        </div>
        <div class="achievement-content">
          <h3>Long read sequencing reveals more genetic information while cutting time and cost of rare disease diagnoses</h3>
          <p class="achievement-meta">Published by: UC Santa Cruz News | Date: January 24, 2025</p>
          <a href="https://news.ucsc.edu/2025/01/paten-ajhg-25/" target="_blank" rel="noopener noreferrer" class="btn">Read More</a>
        </div>
      </div>

      <div class="achievement-item">
        <div class="achievement-image">
          <img src="assets/images/news3.png" alt="Jagran Article Thumbnail">
        </div>
        <div class="achievement-content">
          <h3>Know more about Shloka Negi, the student who received 13 medals in IIT BHU (Article in Hindi)</h3>
          <p class="achievement-meta">Published by: Jagran | Date: October 13, 2022</p>
          <a href="https://www.jagran.com/news/national-know-more-about-shloka-negi-iit-banaras-hindu-university-jagran-special-23143654.html" target="_blank" rel="noopener noreferrer" class="btn">Read More</a>
        </div>
      </div>

      <div class="achievement-item">
        <div class="achievement-image">
          <img src="assets/images/TOI_news_photo.png" alt="News Highlight Thumbnail">
        </div>
        <div class="achievement-content">
          <h3>Shloka Negi bags 13 medals at IIT(BHU) 11th convocation</h3>
          <p class="achievement-meta">Published by: Times of India | Date: October 11, 2022</p>
          <a href="https://timesofindia.indiatimes.com/city/varanasi/shloka-negi-bags-13-medalsat-iitbhu-11th-convocation/articleshow/94774510.cms" target="_blank" rel="noopener noreferrer" class="btn">Read More</a>
        </div>
      </div>

      <div class="achievement-item">
        <div class="achievement-image">
          <img src="assets/images/news2.png" alt="Campusvarta Article Thumbnail">
        </div>
        <div class="achievement-content">
          <h3>IIT (BHU) Varanasi conducts its 11th convocation; B.Tech student Shloka Negi bags 13 medals and awards</h3>
          <p class="achievement-meta">Published by: Campusvarta | Date: October 11, 2022</p>
          <a href="https://www.campusvarta.com/article/iit-bhu-varanasi-conducts-its-11th-convocation-btech-student-shloka-negi-bags-13-medals-and-awards" target="_blank" rel="noopener noreferrer" class="btn">Read More</a>
        </div>
      </div>

      <div class="achievement-item">
        <div class="achievement-image">
          <img src="assets/images/news1.png" alt="Free Press Journal Article Thumbnail">
        </div>
        <div class="achievement-content">
          <h3>B.Tech student Shloka Negi bags 13 medals and awards</h3>
          <p class="achievement-meta">Published by: Free Press Journal | Date: October 10, 2022</p>
          <a href="https://www.freepressjournal.in/education/iit-bhu-varanasi-conducts-its-11th-convocation-btech-student-shloka-negi-bags-13-medals-and-awards" target="_blank" rel="noopener noreferrer" class="btn">Read More</a>
        </div>
      </div>

    <div class="achievement-item">
        <div class="achievement-content">
          <h3>आईआईटीबीएचयू दीक्षांत समारोह में सबसे ज्यादा मेडल जीतने वाली|Shloka Negi</h3>
          <p class="achievement-meta">Channel: Atv भारतवर्ष | Upload Date: October 11, 2022</p>
          <p class="achievement-description">Interview after bagging 13 medals at IIT-BHU Convocation, 2022</p>
          <div class="youtube-embed-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4cfnLEsRY0E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
    </div>

    <div class="achievement-item">
        <div class="achievement-content">
          <h3>PhD In USA: STEP-BY-STEP Process & Planning</h3>
          <p class="achievement-meta">Channel: Durdam's Catalogue | Upload Date: September 18, 2022</p>
          <p class="achievement-description">A complete guide covering all the topics in the process of getting a PHD position in USA</p>
          <div class="youtube-embed-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5mKjaIBQDMc" title="YouTube video: PhD In USA: STEP-BY-STEP Process & Planning (2022) | $2700/month Salary | No Masters Required" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Contact Section -->
<section id="contact" class="page-section">
    <div class="wrapper">
        <h2>Get In Touch</h2>
        <p class="contact-intro">I'm always open to discussing new research ideas, potential collaborations, or interesting opportunities. Feel free to reach out!</p>
        <div class="contact-list">
            <div class="contact-item">
                <i class="fas fa-map-marker-alt contact-icon"></i>
                <span>
                    Department of Biomolecular Engineering<br>
                    University of California, Santa Cruz<br>
                    Santa Cruz, CA 95064
                </span>
            </div>
        </div>
    </div>
</section>
