// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/HiPARIS-Student-Conference-on-AI/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/HiPARIS-Student-Conference-on-AI/about/";
          },
        },{id: "nav-call-for-submissions",
          title: "call for submissions",
          description: "Spirit and rules of the Hi! PARIS Student Conference on AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/HiPARIS-Student-Conference-on-AI/call/";
          },
        },{id: "nav-submission-guidelines",
          title: "submission guidelines",
          description: "How to write and submit your blog post, step by step.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/HiPARIS-Student-Conference-on-AI/submitting/";
          },
        },{id: "nav-reviewer-guidelines",
          title: "reviewer guidelines",
          description: "How to write a good review — constructive feedback first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/HiPARIS-Student-Conference-on-AI/reviewing/";
          },
        },{id: "nav-committee",
          title: "committee",
          description: "Who runs the conference, and how decisions are made.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/HiPARIS-Student-Conference-on-AI/committee/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/HiPARIS-Student-Conference-on-AI/blog/";
          },
        },{id: "post-my-blog-post-title-start-here-template",
        
          title: "My Blog Post Title (Start Here Template)",
        
        description: "This is the template blog post. Copy this file, rename it, and write your own post. The description is a short 2-3 sentence abstract of your post. Do not use math, links, or images in the description.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/HiPARIS-Student-Conference-on-AI/blog/2026/my-blog-post/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/HiPARIS-Student-Conference-on-AI/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/HiPARIS-Student-Conference-on-AI/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
