---
layout: distill
title: "My Blog Post Title (Start Here Template)"
description: This is the template blog post. Copy this file, rename it, and write your own post. The description is a short 2-3 sentence abstract of your post. Do not use math, links, or images in the description.
date: 2026-04-28
future: true
htmlwidgets: true

# Keep this as "Anonymous" while your post is being reviewed.
# After acceptance you can add the real author names.
authors:
  - name: Anonymous

# This MUST be the exact same name as your post's .bib file.
bibliography: 2026-04-28-my-blog-post.bib

# The table of contents. Each "name" must match a "## Heading" in the text below.
toc:
  - name: Introduction
  - name: A Section With a Subsection
  - name: Adding an Image
  - name: Adding a Citation
  - name: Adding Some Math
  - name: Conclusion

# Optional custom CSS for this post only.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
---

## Introduction

Welcome! This file is a **ready-to-use template**. To make your own blog post:

1. Copy this file and rename it to `2026-04-28-your-post-name.md`.
2. Rename the image folder `assets/img/2026-04-28-your-post-name/`.
3. Rename the bibliography file `assets/bibliography/2026-04-28-your-post-name.bib`.

The three names **must match**. See [`REQUIREMENTS.md`](../REQUIREMENTS.md) for the full rules.

Write your post in normal Markdown. You can use **bold**, *italic*, `code`, lists,
tables, quotes, and everything you already know from Markdown.

## A Section With a Subsection

Every `## Heading` you write should also appear in the `toc:` list at the top of the
file, so it shows up in the table of contents.

### This is a subsection

Use `###` for subsections. You do not need to list `###` subsections in the `toc:`.

## Adding an Image

Put your image files in `assets/img/2026-04-28-my-blog-post/`, then include them like this:

```liquid
{% raw %}{% include figure.liquid
   path="assets/img/2026-04-28-my-blog-post/example.png"
   caption="Figure 1: A short caption describing the image." %}{% endraw %}
```

Add your own PNG/JPG to the image folder and update the `path`. The image will then be
displayed here when the post is built.

## Adding a Citation

First add your reference to the `.bib` file, then cite it in the text with a
`<d-cite>` tag using the reference's key <d-cite key="vaswani2017attention"></d-cite>.
The reference list at the bottom of the page is generated automatically.

## Adding Some Math

You can write inline math like $$E = mc^2$$, or a full equation on its own line:

$$
\text{softmax}(x_i) = \frac{e^{x_i}}{\sum_{j} e^{x_j}}
$$

## Conclusion

That's it! Replace all of this text with your own content, keep the file structure the
same, and open a pull request. Good luck. 🎉
