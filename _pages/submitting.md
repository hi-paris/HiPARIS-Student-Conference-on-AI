---
layout: page
title: submission guidelines
permalink: /submitting/
description: How to write and submit your blog post, step by step.
nav: true
nav_order: 3
---

This page explains **how** to submit. For **what** to submit and the rules of the
conference, read the [call for submissions]({{ '/call/' | relative_url }}) first.



Everything happens on **GitHub**, following the machinery of the
[ICLR Blogposts track](https://iclr-blogposts.github.io/). ICLR is one of the top 3 ML&AI conferences, and the conference has had a blog-track over the last 5 years, a format that the community enjoys a lot.

The machinery may seem a bit tricky at first, but is ultimately very efficient. Carefully following the steps should work great. 
You add your blog post to this
repository through a **Pull Request**; it is checked automatically, reviewed anonymously,
and — if accepted — merged and **published on this website**.

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

## 2. Anonymization (double blind)

Review is **double blind**. Until decisions are announced:

- keep `authors:` set to `Anonymous` in your front matter;
- do not include your names, school, lab, company, or acknowledgements in the text;
- avoid links that trivially identify you (e.g. your personal website).

Your **project repository** (see §4) generally cannot be fully anonymous — that is
expected. We ask for anonymization *of the blog post* and for **good-faith anonymity**
overall: reviewers commit to not inspecting GitHub accounts or repository history to
identify authors. After acceptance, you add your real names in the camera-ready version.

## 3. Writing your post

**Structure.** The following sections are *suggested*, not mandatory — adapt them to your
project:

- **Context of the project** *(strongly encouraged)* — the story: where the project was
  done (internship, lab, course follow-up, personal initiative), and why you did it;
- abstract, introduction & motivation;
- related work;
- problem formulation;
- method / solution;
- results;
- limitations;
- reproducibility (when relevant).

**Length.** Recommended **2,500–3,500 words** (a 10–15 minute read). Hard limit:
**6,000 words**. Figures, visualizations, videos and demos are encouraged — the goal is
clarity, not length.

**Mechanics.**

- Write in normal **Markdown** (headings, bold, lists, tables, code…).
- Each main section uses a `## Heading`, and that heading should also appear in the `toc:`
  list of your front matter.
- **Images** — put them in your `assets/img/...` folder and include them with:
  ```liquid
  {% raw %}{% include figure.liquid
     path="assets/img/2026-04-28-your-post-name/your-image.png"
     caption="Your caption." %}{% endraw %}
  ```
- **Citations** — add the reference to your `.bib` file, then cite it in the text with
  `<d-cite key="the-reference-key"></d-cite>`.
- **Math** — use `$$ ... $$` for equations (LaTeX syntax).

**Front matter fields** (top of your `.md` file, between the two `---` lines):

| Field | What to put |
|-------|-------------|
| `layout` | Always `distill`. |
| `title` | The title of your post. |
| `description` | A 2–3 sentence summary. **No** math, links, or images here. |
| `date` | `2026-04-28` |
| `authors` | `Anonymous` until acceptance. |
| `bibliography` | The **exact** name of your `.bib` file. |
| `toc` | The list of your section titles (for the table of contents). |

## 4. Your project repository

Each submission is backed by a **public GitHub repository** containing your project. It
should include:

- a `README.md` explaining what the project is and how to use it;
- an explicit **license** (MIT, Apache 2.0, or BSD for code; Creative Commons for written
  or educational content);
- a dependency file (`requirements.txt`, `environment.yml`, `pyproject.toml`, …);
- installation and, where relevant, **reproduction instructions** (commands, data, seeds,
  expected results).

You link to this repository from your blog post. You are responsible for having the right
to publish everything it contains.

## 5. Open your Pull Request

1. **Fork** this repository.
2. Add **only your three files** (post, image folder, bibliography).
3. Open a **Pull Request** whose **title is exactly your post name**, e.g.
   `2026-04-28-your-post-name`.
4. An automatic check verifies your files follow the rules. If something is wrong, a
   comment tells you what to fix — just update your Pull Request.
5. Register your submission on the conference's **OpenReview** venue *(link to be
   announced)*: title, abstract, authors, the **context of creation** of your project, and
   the URL of your Pull Request.

## 6. After the decision: camera-ready

If your post is accepted:

1. update the **same Pull Request**: put your real names and affiliations in `authors:`,
   and take the reviews into account;
2. the publication team checks the rendering and **merges** your Pull Request;
3. your post is **published automatically** on this website, at a stable URL.

## 7. Preview locally (optional)

If you have Docker, you can build the site locally to preview your post before submitting:

```bash
docker compose up
```

Then open <http://localhost:8080>.

## Checklist before you submit

- [ ] My `.md`, image folder, and `.bib` file all have the **same name**.
- [ ] The name starts with a date, like `2026-04-28-...`.
- [ ] My front matter has `title`, `description`, `date`, `authors: Anonymous`,
      `bibliography`, `toc`.
- [ ] Every `## Heading` is listed in `toc:`.
- [ ] My post contains no identifying information (names, school, lab, company).
- [ ] My post is within the length limits (recommended 2,500–3,500 words, max 6,000).
- [ ] My project repository is public, documented, licensed, and linked from the post.
- [ ] I have the right (and, for internships, written authorization) to publish everything.
- [ ] My images are inside my `assets/img/...` folder, and citations exist in my `.bib`.
- [ ] My Pull Request title matches my post name, and I only added files that belong to
      my post.
- [ ] All co-authors approved the submission, and we respect the submission limit
      (1 solo / 2 as a pair / 3 as a trio).
