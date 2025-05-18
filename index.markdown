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
                <p class="title-affiliation">PhD Candidate</p>
                <p class="title-affiliation"><a href="https://engineering.ucsc.edu/departments/biomolecular-engineering/" target="_blank" rel="noopener noreferrer">Department of Biomolecular Engineering, UC Santa Cruz</a></p>
                <p class="internship">Bioinformatics Intern (Summer 2025), Roche Sequencing</p>
                
                <div class="icon-links-small">
                    <a href="mailto:{{ site.email }}" aria-label="Email" title="Email"><i class="fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" aria-label="LinkedIn" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/{{ site.github_username }}" aria-label="GitHub" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://scholar.google.com/citations?user={{ site.googlescholar_id }}" aria-label="Google Scholar" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
                    <a href="https://orcid.org/{{ site.orcid_id }}" aria-label="ORCID" title="ORCID"><i class="fab fa-orcid"></i></a>
                    <a href="{{ '/assets/pdf/ShlokaNegi_CV.pdf' | relative_url }}" aria-label="Download CV" title="Download CV" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i></a>
                </div>
            </div>
            <div class="home-column-right">
                <h2>About Me</h2>
                <p>I am a third-year Bioinformatics PhD student at UC Santa Cruz, focusing on genomic data analysis and algorithm development. Currently, I am a Bioinformatics Intern at Roche Sequencing, where I'm working on variant calling pipelines. My key interests include leveraging computational methods to understand complex biological systems and developing tools for large-scale sequencing data.</p>
                
                <h3>Research Interests</h3>
                <ul>
                    <li>Structural Variation</li>
                    <li>Pangenomics</li>
                    <li>Computational Genomics</li>
                    <li>Machine Learning in Biology</li>
                    <li>Sequencing Analysis</li>
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
            <a href="https://scholar.google.com/citations?user={{ site.googlescholar_id }}" target="_blank" rel="noopener noreferrer">Google Scholar <i class="fas fa-external-link-alt fa-xs"></i></a>.
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
