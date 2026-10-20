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
[ICLR Blogposts track](https://iclr-blogposts.github.io/). ICLR is one of the top 3 ML&AI conferences, and it has run a blog track for the last 5 years, a format the community enjoys a lot.

The machinery may seem a bit tricky at first, but it is ultimately very efficient — and you don't need to know Git: **everything can be done from your web browser**. Follow the steps in order and it will work.

## TL;DR

A **Pull Request (PR)** is GitHub's way of saying *"here are some files I'd like to add to your repository — please take a look."* You work on your own copy of the conference repository, then ask the organizers to bring your files into the official one. That's all.

**The whole process in 6 steps:**

1. **Create two accounts**: [GitHub](https://github.com/signup) and [OpenReview](https://openreview.net/signup) (use your **institutional email** for OpenReview, see [Step 0](#step-0--before-you-start)).
2. **Fork** the conference repository [`hi-paris/HiPARIS-Student-Conference-on-AI`](https://github.com/hi-paris/HiPARIS-Student-Conference-on-AI/) — this creates *your own copy* under your GitHub account.
3. **Add your 3 files** to *your copy*: your post (`.md`), your images (a folder), your references (`.bib`), all sharing the **same name** `2026-04-28-your-post-name`. The easiest way is to copy the included example and rename it. **Please take care to follow the exact file/folder structure described bellow in the full walkthrough.**
4. **Open a Pull Request** from your copy to the official repository, with the **title exactly equal to your post name**. A robot checks your files within a few minutes; fix whatever it reports.
5. **Register your submission on OpenReview**: title, abstract, authors, context of creation, **the URL of your Pull Request**, and the **PDF of your post**.
6. **Wait for the decision.** If accepted, you update the *same* Pull Request with your real names, and we merge it: your post is published on this website.


**Where do I enter what?**

| Information | Where you enter it |
|-------------|--------------------|
| Title, description, `authors: Anonymous`, bibliography name, table of contents | **Front matter** (top of your `.md` file) on GitHub |
| Post name (`2026-04-28-your-post-name`) | **File names** + **Pull Request title** |
| Title, abstract, authors, context of creation, PR URL, PDF | **OpenReview** submission form |


## Detailed walkthrough

**Naming used below.** Your *post name* is `2026-04-28-your-post-name` (a date, then a short title with dashes). You choose it once and use it everywhere. Replace `your-post-name` with your own, e.g. `2026-04-28-diffusion-for-time-series`.

### Step 0 — Before you start

- **GitHub account** — create one at [github.com/signup](https://github.com/signup). Any email works.
- **OpenReview account** — create one at [openreview.net/signup](https://openreview.net/signup) with your **institutional email** (`…@polytechnique.edu`, `…@hec.edu`, …). Profiles created with an institutional email are activated automatically; profiles created with a personal email go through a moderation process that can take **up to two weeks** — don't wait for the deadline.
- **Your post, ready to paste** — it helps to have a draft of your text, your images and your references at hand (see [Writing your post](#writing-your-post) below for the format).
- **Co-authors** — decide who will open the Pull Request. One person is enough; only that person needs to do Steps 1–4.

### Step 1 — Fork the conference repository

*Goal: get your own copy of the official repository, where you are allowed to add files.*

1. Log in to GitHub and open the official repository:
   **<https://github.com/hi-paris/HiPARIS-Student-Conference-on-AI/>**
   This is the **only** repository you need to fork. (Not your project repository, not the ICLR one.)
2. Click the **Fork** button at the top right of the page.
3. Leave the default settings (you can keep the name as is) and click **Create fork**.
4. You land on `github.com/<your-username>/HiPARIS-Student-Conference-on-AI`. This is *your copy*. **All the work of Steps 2–3 happens here.**

> **How to check you are in the right place:** under the repository name, you should read *"forked from hi-paris/HiPARIS-Student-Conference-on-AI"*.

### Step 2 — Add your three files to your copy

*Goal: put your post, your images and your bibliography at the right place, with the right names.*

The three files live in three different folders of your copy, and share the same name:

| What | Where it goes |
|------|---------------|
| Your post (Markdown) | `_posts/2026-04-28-your-post-name.md` |
| Your images | `assets/img/2026-04-28-your-post-name/` |
| Your references (BibTeX) | `assets/bibliography/2026-04-28-your-post-name.bib` |

**The easiest way: start from the included example.** The repository already contains a working sample post — `_posts/2026-04-28-my-blog-post.md`, `assets/img/2026-04-28-my-blog-post/` and `assets/bibliography/2026-04-28-my-blog-post.bib`. You can view the rendered result here: [sample post]({% post_url 2026-04-28-my-blog-post %}). Copy its content into your own files (renamed) and replace it with yours.

**Doing it from the browser (no Git needed):**

1. **The post.** In your copy, open the `_posts/` folder → **Add file** → **Create new file**. In the name field, type `_posts/2026-04-28-your-post-name.md`. Paste the content of the example post and edit it (see [Step 3](#step-3--fill-in-the-front-matter-and-write)). Click **Commit changes…** (see the box below).
2. **The bibliography.** **Add file** → **Create new file**, and type the name `assets/bibliography/2026-04-28-your-post-name.bib`. Paste your BibTeX entries. Commit.
3. **The images.** Go to `assets/img/` → **Add file** → **Upload files**. Drag and drop **a folder** named exactly `2026-04-28-your-post-name` containing your images (you can also create the folder by typing `assets/img/2026-04-28-your-post-name/placeholder.png` as a file name in *Create new file* — typing a `/` creates a folder). Commit.

**The "Commit changes" box.** GitHub saves each change as a *commit*. When you click the green **Commit changes…** button, a small window appears: write a short message (e.g. "Add my post") and keep **"Commit directly to the main branch"** selected — "main" here means the main branch of *your copy*, not the official repository. Click **Commit changes**.

**Doing it with Git (if you know how):** clone your fork, add the three files, commit, and push. Same rule: **only touch the three files that belong to your post**.

**Only add or change files that belong to your post.** An automatic check rejects a Pull Request that touches anything else — don't edit the website's other pages, even to fix a typo.

### Step 3 — Fill in the front matter and write

*Goal: tell the website the title, the description, the bibliography, and the table of contents of your post.*

The top of your `.md` file contains the **front matter**, between two `---` lines. This is where you provide the information about your post for the website:

| Field | What to put |
|-------|-------------|
| `layout` | Always `distill`. |
| `title` | The title of your post. |
| `description` | A 2–3 sentence summary. **No** math, links, or images here. |
| `date` | `2026-04-28` |
| `authors` | `Anonymous` until acceptance. |
| `bibliography` | The **exact** name of your `.bib` file, e.g. `2026-04-28-your-post-name.bib`. |
| `toc` | The list of your section titles (for the table of contents). |

Then write your post below the front matter, following [Writing your post](#writing-your-post). You can edit the file again at any time: open it in your copy and click the ✏️ pencil icon at the top right. Every edit you commit to your copy is **automatically added to your Pull Request** once it is open — no need to redo anything.

### Step 4 — Open the Pull Request

*Goal: ask the organizers to bring your files into the official repository.*

1. Go to your copy (`github.com/<your-username>/HiPARIS-Student-Conference-on-AI`). After your commits, GitHub shows a banner *"This branch is N commits ahead of hi-paris:main"*. Click **Contribute** → **Open pull request**. (You can also go to the official repository → **Pull requests** → **New pull request** → **compare across forks**.)
2. Check the direction of the arrow at the top of the page:
   - **base repository:** `hi-paris/HiPARIS-Student-Conference-on-AI`, **base:** `main` (the official one — *where* your files go);
   - **head repository:** your fork, **compare:** `main` (your copy — *where* your files come from).
3. Set the **title to exactly your post name**, e.g. `2026-04-28-your-post-name`. Leave the description empty or write one line.
4. Click **Create pull request**. **Copy the URL of the page you land on** (`https://github.com/hi-paris/HiPARIS-Student-Conference-on-AI/pull/<number>`): you will need it for OpenReview.

**What happens next.** Within a few minutes, a robot checks that your files follow the rules and that the website builds with your post.

- ✅ A green check at the bottom of the Pull Request means you are good.
- ❌ A red cross means something is wrong: a comment from the bot explains what to fix. Fix it by editing your files **in your copy** (Step 2–3) — the Pull Request updates itself. No need to close it and open a new one.

### Step 5 — Register your submission on OpenReview

*Goal: make your submission official. Reviewers see your submission through OpenReview.*

A Pull Request alone is **not** a submission: you must also register it on OpenReview.

1. Log in to OpenReview and open the conference venue:
   [openreview.net/group?id=HPSCAI/2026/Conference](https://openreview.net/group?id=HPSCAI/2026/Conference).
2. Click the **Submission** button and fill in the form:

   | Field | What to put |
   |-------|-------------|
   | Title | The title of your post. |
   | Abstract | The same short summary as the `description` of your post. |
   | Authors | All co-authors (they need an OpenReview profile). Authors are hidden from reviewers. |
   | Context of creation | Where and why the project was done (internship, lab, course follow-up, personal initiative). |
   | Pull Request URL | The URL you copied at the end of Step 4. |
   | PDF | The **PDF version of your blog post** — see below. |

3. **About the PDF.** OpenReview requires a PDF file. This PDF is **a printout of your blog post** as it appears on the website: it is only what reviewers read in OpenReview, and the **Pull Request remains the real submission**. The PDF must be **anonymous** too (no names, no affiliations). To produce it: open the rendered preview of your post (from the check of your Pull Request, or locally, see [Step 7](#preview-locally-optional)) and use your browser's **Print → Save as PDF**. It does *not* need to be pretty — but it must contain the same content as your Pull Request.
4. Submit. You can edit your OpenReview submission until the deadline.

> **Don't wait for the last minute.** The Pull Request and the OpenReview registration are two separate steps, and **both** are needed.

### Step 6 — After the decision: final version

If your post is accepted:

1. update the **same Pull Request** (edit the files in your copy): put your real names and affiliations in `authors:`, and take the reviews into account;
2. the publication team checks the rendering and **merges** your Pull Request;
3. your post is **published automatically** on this website, at a stable URL.

---

## Reference

### I'm completely lost

Do not hesitate to ask help from an LLM or to contact us directly !

### File structure and naming

- The name **must** start with a date like `2026-04-28-`, followed by a short title with
  dashes instead of spaces (lowercase letters, digits, dashes).
- The `.md` file, the image folder, and the `.bib` file **must use the exact same name**.
- **Only add or change files that belong to your post** — an automatic check rejects a Pull
  Request that touches anything else.

### Anonymization (double blind)

Review is **double blind**. Until decisions are announced:

- keep `authors:` set to `Anonymous` in your front matter;
- do not include your names, school, lab, company, or acknowledgements in the text (nor in the PDF);
- avoid links that trivially identify you (e.g. your personal website).

Your **project repository** (see below) generally cannot be fully anonymous — that is
expected. We ask for anonymization *of the blog post* and for **good-faith anonymity**
overall: Pull Requests and repositories are public on GitHub, but reviewers commit to not inspecting GitHub accounts or repository history to
identify authors. After acceptance, you add your real names in the final version.

### Writing your post

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

**Language.** Submissions are written in **English**.

**Length.** Recommended **2,500–3,500 words** (a 10–15 minute read). Hard limit:
**6,000 words**. Figures, visualizations, videos and demos are encouraged — the goal is
clarity, not length.

**Appendix.** You may add an **appendix of unlimited length** at the end of your post
(after the main content). The word limits apply to the main text only; reviewers are not
required to read the appendix.

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

### Your project repository

Each submission is backed by a **public GitHub repository** containing your project. It is
**a different repository** from the conference one you forked in Step 1: it is *your* project's own repository. It
should include:

- a `README.md` explaining what the project is and how to use it;
- an explicit **license** (MIT, Apache 2.0, or BSD for code; Creative Commons for written
  or educational content);
- a dependency file (`requirements.txt`, `environment.yml`, `pyproject.toml`, …);
- installation and, where relevant, **reproduction instructions** (commands, data, seeds,
  expected results).

You link to this repository from your blog post. You are responsible for having the right
to publish everything it contains.

### Preview locally (optional)

If you have Docker, you can build the site locally to preview your post before submitting:

```bash
docker compose up
```

Then open <http://localhost:8080>.

### Troubleshooting

| Problem | What to do |
|---------|------------|
| The bot comments that a file doesn't belong to your post | Remove the extra file from your copy, or rename your files so that the three names match exactly. |
| The check fails on naming | Make sure the name starts with a date (`2026-04-28-…`) and that the `.md`, the image folder and the `.bib` all use the same name. |
| The check fails on the build | Look at the bot comment: common causes are a `bibliography:` field that doesn't match the `.bib` file name, or a broken `<d-cite>` key. |
| I made a mistake after opening the Pull Request | Just edit the files in your copy: the Pull Request updates itself. |
| I can't find my Pull Request | Go to the official repository → **Pull requests** tab, or open your copy → **Pull requests**. |
| I don't see the *Submission* button on OpenReview | Check that you are logged in and that your profile has been activated (institutional email, see Step 0). |

## Checklist before you submit

- [ ] I forked **`hi-paris/HiPARIS-Student-Conference-on-AI`** and added my files to **my copy**.
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
- [ ] My Pull Request title matches my post name, I only added files that belong to
      my post, and the automatic check is green.
- [ ] I registered my submission on **OpenReview** with the PR URL and an anonymous PDF of my post.
- [ ] All co-authors approved the submission, and we respect the submission limit
      (1 solo / 2 as a pair / 3 as a trio).
