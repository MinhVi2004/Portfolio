export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  role: string
  duration: string
  description: string
  tech: string[]
  links: ProjectLink[]
  image: string
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type Education = {
  school: string
  program: string
  period: string
}

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
}

export type Profile = {
  name: string
  title: string
  location: string
  email: string
  phone: string
  portfolioUrl: string
  resumeUrl: string
  careerObjective: string
  skills: SkillGroup[]
  education: Education[]
  experience: Experience[]
  projects: Project[]
  activities: string[]
}

export const profile: Profile = {
  name: 'Duong Van Minh Vi',
  title: 'Software Engineer',
  location: 'Ho Chi Minh City',
  email: 'dvmv2017@gmail.com',
  phone: '0772912452',
  portfolioUrl: 'https://github.com/MinhVi2004',
  resumeUrl: '/DuongVanMinhVi_SoftwareEngineer.pdf',
  careerObjective:
  "I'm a Software Engineering student seeking an Intern Software Engineer position to gain hands-on experience, improve programming skills, and contribute to real-world projects.",
  skills: [
    {
      label: 'Languages',
      items: ['PHP', 'JavaScript', 'Java', 'Python'],
    },
    {
      label: 'Frameworks',
      items: ['React', 'Node.js', 'Express', 'Spring Boot'],
    },
    {
      label: 'Databases',
      items: ['MySQL', 'MongoDB', 'SQL Server'],
    },
    {
      label: 'Others',
      items: ['REST API', 'JWT', 'Git', 'Shopify Liquid'],
    },
  ],
  education: [
    {
      school: 'Saigon University (SGU)',
      program: 'Information Technology – Software Engineering Intern',
      period: '2022 – Present',
    },
  ],
  experience: [
    {
      role: 'Technical Support (Developer-related tasks)',
      company: 'BSS Commerce',
      period: '09/2025 – Present',
      summary:
        'Consult and support international customers on Shopify interfaces and applications; customize themes using Liquid, HTML, and CSS; collaborate with the development team to reproduce bugs, test fixes, and ensure delivery quality.',
    },
  ],
  projects: [
    {
      title: 'VSport – E-Commerce',
      role: 'Personal Project',
      duration: '',
      description:
        'E-commerce website built with React, Node.js, and MongoDB. Implements REST APIs with JWT authentication, role-based authorization, VNPAY payment integration, and email confirmation.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'VNPAY'],
      links: [
        {
          label: 'Live Demo',
          href: 'https://v-sport.vercel.app/',
        },
        {
          label: 'Source',
          href: 'https://github.com/MinhVi2004/VSport',
        },
      ],
      image: '/vsport.png',
    },
    {
      title: 'GalaxyCine Clone – Movie Ticket Booking',
      role: 'Personal Project',
      duration: '',
      description:
        'Clone of a movie ticket booking system built with PHP and MySQL. Supports online ticket booking, combo purchases, email invoices, and admin management for movies, showtimes, revenue, and food items.',
      tech: ['PHP', 'MySQL'],
      links: [
        {
          label: 'Live Demo',
          href: 'https://gxlcine.42web.io/',
        },
        {
          label: 'Source',
          href: 'https://github.com/MinhVi2004/GalaxyCine',
        },
      ],
      image: '/galaxycine.jpg',
    },
    {
      title: 'GiftShop – E-Commerce',
      role: 'Personal Project',
      duration: '',
      description:
        'E-commerce website developed with PHP and MySQL. Provides user authentication, online shopping, order tracking, and admin management for products and promotions.',
      tech: ['PHP', 'MySQL'],
      links: [
        {
          label: 'Live Demo',
          href: 'https://giftshop.42web.io/',
        },
        {
          label: 'Source',
          href: 'https://github.com/MinhVi2004/Giftshop',
        },
      ],
      image: '/giftshop.png',
    },
  ],
  activities: [
    'Member of the university’s Social Work Team; received certificates for participating in short-term activities organized by the university.',
    'Participated in volunteer activities at charity classes and nursing homes in both urban and suburban areas.',
    'Assisted in blood donation campaigns organized locally and by the university.',
  ],
}

