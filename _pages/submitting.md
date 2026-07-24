---
layout: page
title: submitting
permalink: /submitting/
description: How to write and submit your AIStuCon blog post.
nav: true
nav_order: 3
---

Everything happens on **GitHub**. You add your blog post to the repository through a
**Pull Request**; it is then checked automatically and reviewed by the organizers, and accepted
posts are published on this website.

The quickest way to start is to **copy the included example** and rename it:

- `_posts/2026-04-28-my-blog-post.md`
- `assets/img/2026-04-28-my-blog-post/`
- `assets/bibliography/2026-04-28-my-blog-post.bib`

You can view the rendered result here: [sample post]({% post_url 2026-04-28-my-blog-post %}).

## 1. File structure and naming

Your submission is made of **three things**, and they all share the **same name**:

| What | Where it goes |
|------|---------------|
| Your post (Markdown) | `_posts/2026-04-28-your-post-name.md` |
| Your images | `assets/img/2026-04-28-your-post-name/` |
| Your references (BibTeX) | `assets/bibliography/2026-04-28-your-post-name.bib` |

- The name **must** start with a date like `2026-04-28-`, followed by a short title with
  dashes instead of spaces.
- The `.md` file, the image folder, and the `.bib` file **must use the exact same name**.
- **Only add or change files that belong to your post** — an automatic check rejects a Pull
  Request that touches anything else.

## 2. Front matter (the top of your `.md` file)

Every post starts between two `---` lines. The important fields:

| Field | What to put |
|-------|-------------|
| `layout` | Always `distill`. |
| `title` | The title of your post. |
| `description` | A 2–3 sentence summary. **No** math, links, or images here. |
| `date` | `2026-04-28` |
| `authors` | Your name and affiliation. |
| `bibliography` | The **exact** name of your `.bib` file. |
| `toc` | The list of your section titles (for the table of contents). |

## 3. Writing your post

- Write in normal **Markdown** (headings, bold, lists, tables, code…).
- Each main section uses a `## Heading`, and that heading should also appear in the `toc:` list.
- **Images** — put them in your `assets/img/...` folder and include them with:
  ```liquid
  {% raw %}{% include figure.liquid
     path="assets/img/2026-04-28-your-post-name/your-image.png"
     caption="Your caption." %}{% endraw %}
  ```
- **Citations** — add the reference to your `.bib` file, then cite it in the text with
  `<d-cite key="the-reference-key"></d-cite>`.
- **Math** — use `$$ ... $$` for equations (LaTeX syntax).

## 4. Open your Pull Request

1. **Fork** the [repository](https://github.com/hi-paris/NeuriX-hi-paris-Student-AI-Conference).
2. Add **only your three files**.
3. Open a **Pull Request** whose **title is exactly your post name**, e.g.
   `2026-04-28-your-post-name`.
4. An automatic check verifies your files follow the rules. If something is wrong, a comment
   tells you what to fix — just update your Pull Request.
5. The **organizers review** your post. Once accepted and merged, it is **published
   automatically** on this site.

## 5. Preview locally (optional)

If you have Docker, you can build the site locally to preview your post before submitting:

```bash
./bin/docker_run.sh
```

## Checklist before you submit

- [ ] My `.md`, image folder, and `.bib` file all have the **same name**.
- [ ] The name starts with a date, like `2026-04-28-...`.
- [ ] My front matter has `title`, `description`, `date`, `authors`, `bibliography`, `toc`.
- [ ] Every `## Heading` is listed in `toc:`.
- [ ] My images are inside my `assets/img/...` folder, and citations exist in my `.bib`.
- [ ] My Pull Request title matches my post name, and I only added files that belong to my post.
