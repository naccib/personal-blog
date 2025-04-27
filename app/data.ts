type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'NeuroKeypoint AR',
    description:
      'Neuronavigation app for iPhones using augmented reality to guide surgeons during brain surgeries.',
    link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DPMHef4Bts7E&ved=2ahUKEwi--Yj8-vWMAxU7GLkGHRJDCV8QtwJ6BAgqEAI&usg=AOvVaw0UCJZ579Kb67SDVSBBKEq0',
    image:
      'https://pub-4156699f48e3436d9bc00c2a132210cb.r2.dev/nkar-preview.jpg',
    id: 'project1',
  },
  {
    name: 'pFFR',
    description: 'A tool to help cardiologists decide on the best treatment for coronary artery disease.',
    link: 'a',
    image:
      'https://pub-4156699f48e3436d9bc00c2a132210cb.r2.dev/pffr-preview.jpg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'MyCardium AI',
    title: 'Developer',
    start: '2024',
    end: 'Present',
    link: 'https://www.mycardium.com',
    id: 'work1',
  },
  {
    company: 'Federal University of Sergipe',
    title: 'Medical Student',
    start: '2019',
    end: '2025',
    link: 'https://http://www.ufs.br',
    id: 'education1',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/naccib',
  },
]

export const EMAIL = 'guilherme.almeida422@gmail.com'
