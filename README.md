# AIStuCon — Hi! PARIS Student AI Conference

Welcome! **AIStuCon** is a **student blog-post conference** organized by **Hi! PARIS**.
Instead of writing a traditional paper, you write a clear, technical **blog post in Markdown**,
submit it through a **GitHub Pull Request**, and — once it's reviewed and accepted — see it
**published on the conference website**.

It's a friendly, hands-on way to deepen your understanding of AI/ML, practice writing about
technical ideas, and share your work with a wider community.

## Origin

AIStuCon is organized by **Hi! PARIS**, the shared educational platform of **HEC Paris** and
**Institut Polytechnique de Paris**. The format is inspired by the
[ICLR Blogposts track](https://github.com/iclr-blogposts/2026): a scientific conference whose
"papers" are peer-reviewed blog posts. This repository reuses that track's open-source machinery
(the [al-folio](https://github.com/alshedivat/al-folio) Jekyll site + its review and deployment
automation) and adapts it for students.

## How it works (the principle)

1. You **fork** this repository.
2. You **add your blog post** (one Markdown file + its images and references).
3. You **open a Pull Request**.
4. Your submission is **checked automatically** for compliance (correct files and naming) and
   **reviewed by the organizers**.
5. Accepted posts are **merged and published** automatically on the website.

## Key dates

| Milestone | Date |
|-----------|------|
| Submission deadline | **30 Sep 2026** |
| Notification of acceptance | **31 Oct 2026** |
| Publication | **15 Nov 2026** |

## Who can participate

This conference is **open to students**.

> **TODO (organizers):** confirm the eligibility details — which students can take part
> (e.g. Master's / PhD, specific institutions or open to all), the expected level, and whether
> posts may be written solo or in small teams.

## What to write about

Your blog post can do **any one** of the following:

1. **Explain** and build intuition about an ML paper, method, or concept.
2. Offer a **fresh perspective** or a comparison of existing techniques.
3. **Discuss an open issue** in AI/ML (for example reproducibility, evaluation, or ethics).
4. **Analyze the societal impact** of a recent AI advance.
5. Share an **idea you tried that didn't work** — and what you learned from it.

## Instructions (consignes) — how to submit

👉 **Read [`REQUIREMENTS.md`](REQUIREMENTS.md)** — it explains, step by step and in simple terms,
how to write and submit your post (file naming, front matter, images, citations, and the Pull
Request flow).

A **working example** is already included — copy it, rename the three files, and write your post:

- `_posts/2026-04-28-my-blog-post.md`
- `assets/img/2026-04-28-my-blog-post/`
- `assets/bibliography/2026-04-28-my-blog-post.bib`

> ⚠️ **The three names must match**, and your Pull Request may only add files that belong to your
> post. An automatic check will otherwise reject it.

## Contact

For any question, reach the organizers at **contact@hi-paris.fr**.

---

## For organizers — how the automation works

- ✅ **Automatic review** — [`.github/workflows/filter-files.yml`](.github/workflows/filter-files.yml)
  checks that each Pull Request only touches its own files and uses the correct `YYYY-MM-DD-name`
  naming.
- ✅ **Automatic deployment** — [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml)
  rebuilds and publishes the site to GitHub Pages whenever changes land on `main`.

### One-time setup (after pushing this repo)

1. **Set the site URL** in `_config.yml` (it currently points at the ICLR site):
   ```yaml
   url: https://hi-paris.github.io                       # <-- your GitHub Pages host
   baseurl: /NeuriX-hi-paris-Student-AI-Conference       # <-- your repo name (blank for a user/org page)
   ```
2. In **Settings → Pages**, set the source to the **`gh-pages`** branch (the deploy workflow
   creates and pushes it automatically).
3. In **Settings → Actions**, enable Actions with **read and write permissions**.

### Preview the site locally (optional)

Building locally needs Ruby + Jekyll, easiest via Docker:

```bash
./bin/docker_run.sh
```

Otherwise, rely on the automatic GitHub Actions build after pushing.

---

*Based on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and the ICLR
Blogposts track. See [`README_THEME.md`](README_THEME.md) for the original theme documentation.*
