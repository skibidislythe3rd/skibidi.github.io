// gitprofile.config.js

const config = {
  github: {
    username: 'skibidislythe3rd', //TODO: Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  scratch: {
    username: 'hhsyl', //TODO: Your Scratch username. (Required)
    limit: 8, // How many projects to display; maximum 20
    sortBy: 'date', // date | views | remixes
    corsProxy: 'https://scratchapicors-git-main-skibidithesly3rds-projects.vercel.app/', //TODO: Enter your CORS Proxy here
  },
  social: {
    //TODO: Add in Socials
    linkedin: '',
    facebook: '',
    instagram: '',
    tiktok: 'syl_thinmints',
    email: '',
    website: '',
    // dev: '',
    // twitter: '',
    // mastodon: '',
    // dribbble: '',
    // behance: '',
    // medium: '',
    // stackoverflow: '', // format: userid/username
    // skype: '',
    // telegram: '',
    // phone: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },  
  skills: [
    'SKIBIDI',
    'GOT FANUM TAXED',
    'GRIMACESHAKE',
    'GOT REJECTED 6 TIMES',
    'Python',
    'Git',
    'CSS',
    'MakeCode',
    'ScratchJr',
    'Hopscotch',
    'Robotics',
    'Typescript',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],

  // TODO: Add external projects
  externalProjects: [
    {
      title: 'Microbit Flappy Bird',
      description:
        'This project presents a Flappy Bird-inspired game designed for the Micro:bit v2 platform. It is constructed using for loops, conditional statements, functions, and lists to create an entertaining and interactive gaming experience.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png',
      link: 'https://makecode.microbit.org/_8hTHCD4ax7ty',
    },
    {
      title: 'Microbit Space Invaders',
      description:
        "This project features a traditional Space Invaders game developed for the Microbit v2 platform. It utilizes while loops, conditional statements, variables, and the Microbit's native game coordinate system to deliver an engaging gaming experience.",
      imageUrl:
        'https://www.svg.com/img/gallery/the-original-idea-behind-space-invaders-that-could-have-changed-gaming-forever/l-intro-1608754172.jpg',
      link: 'https://makecode.microbit.org/_UXqLuYJfJRL6',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    //TODO: Change the theme of the website to your liking
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    //TODO: Change to false if you want to have the option to see switch
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
  class="text-primary" href="https://github.com/arifszn/gitprofile"
  target="_blank"
  rel="noreferrer"
>GitProfile</a> & <div class="flex items-center"><img src="https://i.ibb.co/L10rd94/TYMLogo-Background.png" width="20" height="20" alt="TYMLogo-Background" border="0" /> <a class="text-primary" href="https://theyoungmaker.com/" target="_blank" rel="noreferrer">The Young Maker </a></div>`,
};

export default config;
