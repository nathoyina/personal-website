export type Placement = "hero" | "featured" | "grid";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  personalNote: string;
  tags: string[];
  spotlight: boolean;
  spotlightOrder?: number;
  demoUrl?: string;
  githubUrl: string;
  ctaText: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    slug: "learn-chinese",
    title: "Chinese Conversation Practice",
    tagline: "Real-world Mandarin for product managers",
    personalNote:
      "I kept fumbling through sprint planning in Mandarin. So I built the practice app I wished existed.",
    tags: ["TTS", "Education", "PM Tools"],
    spotlight: true,
    spotlightOrder: 1,
    demoUrl: "https://learn-chinese-peach.vercel.app",
    githubUrl: "https://github.com/nathoyina/learn-chinese",
    ctaText: "Try it →",
    imageUrl: "/projects/learn-chinese.png",
  },
  {
    slug: "search-halal-food",
    title: "Halal Food Finder SG",
    tagline: "Find MUIS-certified halal food near you",
    personalNote:
      "Finding halal food in SG shouldn't mean checking 5 different lists. I scraped 4,500+ MUIS certs onto one map.",
    tags: ["Data", "Maps", "Singapore"],
    spotlight: true,
    spotlightOrder: 2,
    demoUrl: "https://search-halal-food.vercel.app",
    githubUrl: "https://github.com/nathoyina/search-halal-food",
    ctaText: "Try it →",
    imageUrl: "/projects/search-halal-food.png",
  },
  {
    slug: "foundation-p6-math",
    title: "P6 Visual Maths",
    tagline: "See it, then answer it",
    personalNote:
      "A kid I tutor at my volunteering centre was drilling fractions without seeing them. Every question now has a visual model.",
    tags: ["Education", "Math", "Singapore"],
    spotlight: true,
    spotlightOrder: 3,
    demoUrl: "https://foundation-p6-math.vercel.app",
    githubUrl: "https://github.com/nathoyina/foundation-p6-math",
    ctaText: "Try it →",
    imageUrl: "/projects/foundation-p6-math.png",
  },
  {
    slug: "kdrama-learn",
    title: "DramaK Companion",
    tagline: "Learn Korean from the dramas you watch",
    personalNote:
      "Subtitles teach you the plot, not the language. Gemini breaks down slang, honorifics, and grammar from any line.",
    tags: ["LLM", "Gemini", "Education"],
    spotlight: false,
    demoUrl: "https://k-drama-learn.vercel.app",
    githubUrl: "https://github.com/nathoyina/KDrama-Learn",
    ctaText: "Try it →",
    imageUrl: "/projects/kdrama-learn.png",
  },
  {
    slug: "pmos",
    title: "PM Learning OS",
    tagline: "Duolingo meets case-study notebook for PMs",
    personalNote:
      "PM skills need deliberate practice, not another roadmap tool. I built a local-first cockpit for drills and reflection.",
    tags: ["PM Tools", "Learning", "Local-first"],
    spotlight: false,
    demoUrl: "https://pmos-xi.vercel.app",
    githubUrl: "https://github.com/nathoyina/pmos",
    ctaText: "Try it →",
    imageUrl: "/projects/pmos.png",
  },
  {
    slug: "teaching-lesson-plan",
    title: "Classroom Slides",
    tagline: "AI-assisted lesson planning for teachers",
    personalNote:
      "Teachers spend hours on Engage → Explore → Apply structure. Gemini drafts the content; they refine and export.",
    tags: ["LLM", "Gemini", "Education"],
    spotlight: false,
    githubUrl: "https://github.com/nathoyina/teaching-lesson-plan",
    ctaText: "View on GitHub",
    imageUrl: "/projects/teaching-lesson-plan.svg",
  },
  {
    slug: "learn-sight-words",
    title: "Sight Word Adventure",
    tagline: "English learning game for young readers",
    personalNote:
      "Built a level-based sight word game for young learners I tutor — placement quiz, phonics, and progress synced across devices.",
    tags: ["Education", "Kids", "Supabase"],
    spotlight: false,
    demoUrl: "https://learn-sight-words.vercel.app",
    githubUrl: "https://github.com/nathoyina/learn-sight-words",
    ctaText: "Try it →",
    imageUrl: "/projects/learn-sight-words.png",
  },
  {
    slug: "p1-math-foundations",
    title: "Number Builders",
    tagline: "P1 addition and subtraction with column working",
    personalNote:
      "After P6 visual maths, I went younger — digit boxes for renaming tens and ones, streak bonuses, and 10-question sets that feel like a game.",
    tags: ["Education", "Math", "Singapore"],
    spotlight: false,
    demoUrl: "https://p1-math-foundations.vercel.app",
    githubUrl: "https://github.com/nathoyina/p1-math-foundations",
    ctaText: "Try it →",
    imageUrl: "/projects/p1-math-foundations.png",
  },
  {
    slug: "agent-building",
    title: "Perso Scout",
    tagline: "Weekly research agent for personalization PMs",
    personalNote:
      "Personalization PMs need signal, not another newsletter. This agent finds company conference talks on YouTube, ranks them, and writes structured briefs.",
    tags: ["Agents", "LLM", "PM Tools"],
    spotlight: false,
    demoUrl: "https://agent-building.vercel.app",
    githubUrl: "https://github.com/nathoyina/agent-building",
    ctaText: "Try it →",
    imageUrl: "/projects/agent-building.png",
  },
  {
    slug: "eat-what",
    title: "Eat What",
    tagline: "Spin your next makan",
    personalNote:
      "The group chat never picks a restaurant. Pick your area, filter by price and cuisine, spin the wheel, and let a pun settle dinner.",
    tags: ["Singapore", "Maps", "Fun"],
    spotlight: false,
    demoUrl: "https://eat-what.vercel.app",
    githubUrl: "https://github.com/nathoyina/eat-what",
    ctaText: "Try it →",
    imageUrl: "/projects/eat-what.png",
  },
];

export function getSpotlightProjects(): Project[] {
  return projects
    .filter((p) => p.spotlight)
    .sort((a, b) => (a.spotlightOrder ?? 99) - (b.spotlightOrder ?? 99));
}

export function getGridProjects(): Project[] {
  return projects.filter((p) => !p.spotlight);
}
