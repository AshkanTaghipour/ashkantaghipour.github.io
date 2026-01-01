# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Ashkan Taghipour's academic personal homepage, built using the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) Jekyll template. The site is hosted on GitHub Pages at `ashkantaghipour.github.io`.

## Development Commands

```bash
# Install dependencies (requires Ruby, RubyGems, GCC, Make)
bundle install

# Run local development server with live reload
bash run_server.sh
# or directly:
bundle exec jekyll liveserve

# Access locally at http://127.0.0.1:4000
```

## Architecture

### Content Structure
- **`_pages/about.md`**: Main homepage content (bio, publications, experience). Uses mixed HTML+Markdown with Jekyll/Liquid templating.
- **`_config.yml`**: Site configuration including author info, social links, SEO settings, and Google Scholar integration.
- **`images/`**: Store profile photo and publication thumbnails here.

### Styling
- **`_sass/`**: SCSS partials compiled by Jekyll. `_variables.scss` contains theme customization options.
- **`assets/css/`**: Compiled CSS output.

### Layouts & Includes
- **`_layouts/default.html`**: Base page template.
- **`_includes/`**: Reusable components (author-profile, head, scripts, analytics, SEO).

### Google Scholar Citations
Automatic citation updates are configured via:
- **`.github/workflows/google_scholar_crawler.yaml`**: Runs daily at 08:00 UTC and on page builds.
- **`google_scholar_crawler/`**: Python script that fetches citation data.
- Requires `GOOGLE_SCHOLAR_ID` secret in GitHub repository settings.
- Citation data is pushed to the `google-scholar-stats` branch.

To display paper citations in `about.md`:
```html
<span class='show_paper_citations' data='PAPER_ID'></span>
```
Paper ID is found in your Google Scholar URL: `citation_for_view=PAPER_ID`.

## Key Customization Points

1. **Author profile**: Edit `author` section in `_config.yml`
2. **Homepage content**: Edit `_pages/about.md`
3. **Favicon**: Generate at [favicon-generator](https://redketchup.io/favicon-generator) and place in `images/`
4. **Analytics**: Set `google_analytics_id` in `_config.yml`
5. **SEO verification**: Set `google_site_verification`, `bing_site_verification` in `_config.yml`
