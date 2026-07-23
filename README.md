# Blog Post Conference — Submission Template

This repository is a **student-friendly template** for a blog-post conference, modeled on the
[ICLR 2026 Blogposts track](https://github.com/iclr-blogposts/2026). It keeps the full machinery
that makes the real track work:

- ✅ **Automatic review** of submissions (a GitHub Action checks that each Pull Request only
  touches its own files and uses the correct naming) — see `.github/workflows/filter-files.yml`.
- ✅ **Automatic deployment** to GitHub Pages whenever changes land on `main` — see
  `.github/workflows/deploy.yaml`.

## For students

👉 Read **[`REQUIREMENTS.md`](REQUIREMENTS.md)** — it explains, simply, how to write and submit a post.

A working example is already included:
- `_posts/2026-04-28-my-blog-post.md`
- `assets/img/2026-04-28-my-blog-post/`
- `assets/bibliography/2026-04-28-my-blog-post.bib`

Copy those, rename them, and write your post.

## For the teacher / repo owner (one-time setup)

Do this **once**, after pushing this folder to your empty GitHub repository:

1. **Set the site URL** in `_config.yml` (currently pointing at the ICLR site):
   ```yaml
   url: https://YOUR-USERNAME.github.io   # <-- change this
   baseurl: /YOUR-REPO-NAME               # <-- change this (or leave blank for a user/org page)
   ```
2. In your GitHub repo, go to **Settings → Pages** and set the source to the **`gh-pages`** branch.
   (The `deploy.yaml` workflow creates and pushes that branch automatically.)
3. In **Settings → Actions**, make sure Actions are enabled with **read and write permissions**
   (needed so the deploy workflow can publish and merge accepted posts).

That's all — from then on, students open Pull Requests and the site updates itself.

## Previewing the site locally (optional)

Building the site locally needs Ruby + Jekyll, which is easiest via Docker:

```bash
./bin/docker_run.sh
```

If you don't have Docker, you can rely entirely on the automatic GitHub Actions build after pushing.

---

*Based on the al-folio Jekyll theme and the ICLR Blogposts track. See `README_THEME.md` for the original
theme documentation.*
