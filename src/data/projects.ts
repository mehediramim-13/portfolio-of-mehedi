export type Project = {
  slug: string; title: string; image: string; summary: string; description: string;
  stack: string[]; live?: string; github: string; challenges: string[]; improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "news-channel-web",
    title: "News Channel Web",
    image: "/image/newsChannel.png",
    summary: "A modern, fast and responsive news channel website.",
    description: "A news channel website that presents the latest stories in a clean, fast and responsive interface, built with Next.js.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://project-news-channel24-web.vercel.app/",
    github: "https://github.com/mehediramim-13/project-news-channel-web",
    challenges: ["Designing a layout that stays readable from phones to large screens.", "Organising news data and reusable components cleanly.", "Keeping pages fast while showing many stories."],
    improvements: ["Connect a real news API or CMS.", "Add categories, search and bookmarks.", "Add an admin dashboard and user login."],
  },
  {
    slug: "fitweb",
    title: "FitWeb – Gym & Fitness Website",
    image: "/image/fitWeb.png",
    summary: "A modern, responsive fitness website with a bold, energetic look.",
    description: "A gym and fitness website I built with Next.js to practise turning a clean design into real, reusable components. I focused on a bold look, smooth sections and a layout that feels just as good on a phone as on a big screen.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://my-fit-web1-a06.vercel.app",
    github: "https://github.com/mehediramim-13/my-FitWeb1-a06",
    challenges: ["Making the layout look great on every screen size.", "Breaking the page into small, reusable components.", "Keeping the design bold without making the page heavy."],
    improvements: ["Add class schedules and a trainers section.", "Add a membership signup form with a backend.", "Add a BMI calculator and workout plans."],
  },
  {
    slug: "bazardor",
    title: "BazarDor (বাজার দর)",
    image: "/image/bazarDor1.png",
    summary: "A Bangla website to track the daily price of everyday items in Bangladesh.",
    description: "BazarDor is a fully Bangla website where anyone can check the daily price of things we buy every day, like rice, lentils, oil, vegetables, fish, meat, eggs, milk and spices. For each item you can see today's price, how much it went up or down since yesterday, and the price in different markets. You can browse by category, sort by price, and sign in to open the full details page with lowest, highest and average prices.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "daisyUI", "MongoDB", "Better Auth"],
    live: "https://bazardor-a07-mhr.vercel.app",
    github: "https://github.com/mehediramim-13/bazardor-a07-mhr",
    challenges: ["Setting up sign in with email, Google and GitHub using Better Auth and MongoDB.", "Protecting private pages so only logged in users can open product details.", "Showing Bangla digits and today's Bangla date correctly everywhere.", "Making the price ticker, cards and market table work well on small screens."],
    improvements: ["Connect real market price data instead of static data.", "Add price history charts for each item.", "Add search and a favourites list for logged in users.", "Add price alerts when an item crosses a limit."],
  },
];