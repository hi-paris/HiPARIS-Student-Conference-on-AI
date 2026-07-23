# Submission Requirements

This page explains, in simple terms, how to submit a blog post. It is inspired by the
[ICLR Blogposts track guidelines](https://iclr-blogposts.github.io/2025/submitting/).

A ready-to-use example is already in the repo — start from these three files:

- `_posts/2026-04-28-my-blog-post.md`
- `assets/img/2026-04-28-my-blog-post/`
- `assets/bibliography/2026-04-28-my-blog-post.bib`

---

## 1. File structure and naming (most important rule)

Your submission is made of **three things**, and they all share the **same name**:

| What | Where it goes |
|------|---------------|
| Your post (Markdown) | `_posts/2026-04-28-your-post-name.md` |
| Your images | `assets/img/2026-04-28-your-post-name/` |
| Your references (BibTeX) | `assets/bibliography/2026-04-28-your-post-name.bib` |

Rules:

- The name **must** start with a date, like `2026-04-28-`, followed by a short title
  with dashes instead of spaces (e.g. `2026-04-28-my-cool-idea`).
- The `.md` file, the image folder, and the `.bib` file **must all use the exact same name**.
- **Only add or change files that belong to your post.** An automatic check will reject
  your submission if you touch anything else in the repo.

## 2. Front matter (the top of your `.md` file)

Every post starts with a block between two `---` lines. The important fields:

| Field | What to put |
|-------|-------------|
| `layout` | Always `distill`. Don't change it. |
| `title` | The title of your post. |
| `description` | A 2–3 sentence summary. **No** math, links, or images here. |
| `date` | `2026-04-28` |
| `authors` | Keep it as `Anonymous` while your post is reviewed. |
| `bibliography` | The **exact** name of your `.bib` file (e.g. `2026-04-28-your-post-name.bib`). |
| `toc` | The list of your section titles (for the table of contents). |

## 3. Writing your post

- Write in normal **Markdown** (headings, bold, lists, tables, code blocks…).
- Each main section uses a `## Heading`, and that heading should also appear in the
  `toc:` list so it shows in the table of contents.
- **Images:** put them in your `assets/img/...` folder and include them with:
  ```
  {% include figure.liquid
     path="assets/img/2026-04-28-your-post-name/your-image.png"
     caption="Your caption." %}
  ```
- **Citations:** add the reference to your `.bib` file, then cite it in the text with
  `<d-cite key="the-reference-key"></d-cite>`. The reference list is built automatically.
- **Math:** use `$$ ... $$` for equations (LaTeX syntax).

## 4. How to submit

1. Create a new **branch** (or fork the repo).
2. Add **only your three files** (post, images, bibliography).
3. Open a **Pull Request** whose **title is exactly your post name**, e.g.
   `2026-04-28-your-post-name`.
4. An automatic check (`filter-files`) verifies your files follow the rules. If something
   is wrong, a comment will tell you what to fix — just update your Pull Request.
5. Once merged, your post is **built and published automatically**.

## 5. Do and Don't

**Do**
- ✅ Keep the three names identical.
- ✅ Cite your sources in the `.bib` file.
- ✅ Keep your post readable and clear.

**Don't**
- ❌ Edit files that are not part of your post.
- ❌ Rename or change the `layout`.
- ❌ Put links, images, or math in the `description`.

## 6. Checklist before you submit

- [ ] My `.md`, image folder, and `.bib` file all have the **same name**.
- [ ] The name starts with a date, like `2026-04-28-...`.
- [ ] My front matter has `title`, `description`, `date`, `authors`, `bibliography`, `toc`.
- [ ] `bibliography:` matches my `.bib` file name exactly.
- [ ] Every `## Heading` is listed in `toc:`.
- [ ] My images are inside my `assets/img/...` folder.
- [ ] My citations use `<d-cite key="...">` and exist in the `.bib` file.
- [ ] My Pull Request title matches my post name.
- [ ] I only added files that belong to my post.
