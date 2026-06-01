export type NewsInsight = {
  id: string;
  type: "Insight" | "Article" | "News";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imagePosition: string;
  image?: string;
  sections: Array<{
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};

export const newsInsights: NewsInsight[] = [
  {
    id: "rearm-europe-strategic-materials",
    type: "Insight",
    title:
      "ReArm Europe: Why Strategic Materials May Become the Most Overlooked Investment Theme of the Decade",
    excerpt:
      "Europe's defence-industrial expansion may create opportunity deeper inside the upstream materials and manufacturing supply chain.",
    date: "2026-05-29",
    readTime: "4 min read",
    imagePosition: "76% 48%",
    sections: [
      {
        paragraphs: [
          "Europe is entering the largest defence-industrial expansion in decades.",
          "Driven by geopolitical instability, NATO spending commitments, supply-chain vulnerabilities, and the need to rebuild depleted stockpiles, governments across Europe are accelerating investment into defence manufacturing capacity.",
          "But the real opportunity may not sit only within weapons systems themselves.",
          "It may emerge deeper inside the industrial supply chain.",
        ],
      },
      {
        heading: "Beyond Weapons: The Industrial Backbone of Rearmament",
        paragraphs: [
          "The current rearmament cycle is not simply about tanks, missiles, or ammunition.",
          "It requires the rebuilding of entire industrial ecosystems capable of supporting sustained manufacturing over many years.",
          "Many of these upstream sectors remain fragmented, underinvested, or heavily dependent on external supply chains developed during decades of relative geopolitical stability.",
          "That environment is now changing rapidly.",
        ],
        bullets: [
          "specialty metals",
          "energetic compounds",
          "industrial chemicals",
          "advanced materials",
          "pyrotechnic inputs",
          "technical carbons",
          "controlled manufacturing components",
        ],
      },
      {
        heading: "Strategic Materials Are Becoming a National Priority",
        paragraphs: [
          "Governments and defence manufacturers are increasingly focused on supply-chain resilience, domestic or regional sourcing, industrial traceability, production security, and long-term manufacturing continuity.",
          "As a result, specialist industrial materials once considered secondary are becoming strategically important.",
          "In many cases, production bottlenecks no longer originate from demand itself, but from limited access to critical inputs required for continuous industrial output.",
          "This is particularly relevant in energetic-material and ammunition supply chains, where material consistency, chemical stability, and manufacturing reliability are essential.",
        ],
      },
      {
        heading: "Why Upstream Industrial Assets May Benefit",
        paragraphs: [
          "Historically, investors have tended to focus on visible defence contractors and system integrators.",
          "However, industrial cycles often create disproportionate value for upstream suppliers positioned at critical points within the production chain.",
          "The current environment may therefore favour businesses capable of providing repeatable industrial quality, scalable production, specialised processing, regulatory compliance, and secure regional supply capacity.",
          "As Europe expands industrial readiness, these suppliers may evolve from niche operators into strategically relevant infrastructure.",
        ],
      },
      {
        heading: "The Return of Industrial Sovereignty",
        paragraphs: [
          "The geopolitical environment is accelerating a broader shift toward industrial sovereignty.",
          "Europe is increasingly reassessing dependence on non-European supply chains, vulnerability to geopolitical disruption, and the strategic importance of maintaining domestic manufacturing capability.",
          "This trend extends far beyond defence itself.",
          "It affects energy security, critical infrastructure, advanced manufacturing, logistics, and industrial materials across multiple sectors.",
          "The result is a structural revaluation of industrial capacity that, until recently, was often considered non-strategic.",
        ],
      },
      {
        heading: "A Long-Term Structural Theme",
        paragraphs: [
          "Rearmament is unlikely to be a short-term event.",
          "The rebuilding of industrial ecosystems, manufacturing capacity, and strategic reserves may require sustained investment over many years.",
          "For investors, this creates a broader theme: not only defence spending itself, but the industrial foundation required to sustain it.",
          "In this environment, upstream strategic materials and specialist industrial processing may become one of the most overlooked yet potentially significant areas of the next European industrial cycle.",
        ],
      },
    ],
  },
  {
    id: "bitpoint-loyalty-points-solution",
    type: "Insight",
    title: "BitPoint: Turning Unused Loyalty Points into a More Flexible Rewards Platform",
    excerpt:
      "Why fragmented loyalty programmes, expiring points, and unused customer value create room for a more centralized rewards solution.",
    date: "2026-06-01",
    readTime: "4 min read",
    imagePosition: "50% 50%",
    image: "/assets/opportunity-bitpoint-banner.png",
    sections: [
      {
        paragraphs: [
          "Loyalty programmes have become a major part of the consumer economy, but much of their value remains trapped inside fragmented systems.",
          "Consumers collect points across airlines, retail, food, hospitality, financial services, and digital platforms, yet many of those points are never used effectively.",
          "The result is a paradox: companies issue loyalty value to strengthen customer relationships, while customers often experience complexity, expiry dates, limited redemption options, and low perceived usefulness.",
        ],
      },
      {
        heading: "The Problem: Value Exists, but Access Is Fragmented",
        paragraphs: [
          "Unused and expiring loyalty points represent a large pool of latent consumer value. The challenge is not only the existence of points, but the lack of a simple way to manage, compare, and convert them across programmes.",
          "For consumers, this creates friction. Points are spread across multiple accounts, redemption rules are inconsistent, and rewards are often difficult to evaluate.",
          "For brands, this creates an engagement gap. Loyalty programmes may generate data and retention potential, but inactive points and low redemption engagement can weaken the customer relationship they were designed to support.",
        ],
      },
      {
        heading: "The BitPoint Concept",
        paragraphs: [
          "BitPoint is positioned as a platform that helps users centralize loyalty cards, convert unused points into platform value, and access a broader rewards catalogue.",
          "The core idea is to turn dormant or underused points into a more flexible rewards experience, while creating a structured environment for partner brands to reach consumers through targeted redemption and engagement channels.",
        ],
      },
      {
        heading: "Why the Model Is Strategically Interesting",
        bullets: [
          "it addresses a real consumer frustration around unused points",
          "it can sit across multiple loyalty categories rather than one vertical",
          "it creates potential partner-brand revenue streams",
          "it may generate useful consumer behaviour insights",
          "it supports a marketplace-style rewards environment without positioning itself as a public investment platform",
        ],
      },
      {
        heading: "Execution Will Matter",
        paragraphs: [
          "The attractiveness of the concept depends on execution: user acquisition, partner onboarding, technology reliability, reward catalogue depth, conversion logic, and clear consumer trust.",
          "For investors and strategic partners, the key question is whether BitPoint can move from a compelling solution concept into a scalable operating platform with disciplined commercial partnerships.",
          "That is why the opportunity should be reviewed through a structured diligence process, with attention to technology, partnerships, user economics, regulatory considerations, and management execution capacity.",
        ],
      },
    ],
  },
  {
    id: "investment-memorandum-discipline",
    type: "Article",
    title: "The Role of Disciplined Investor Materials in Project Development",
    excerpt:
      "A serious investment memorandum should reduce ambiguity, align counterparties, and make diligence easier before capital discussions begin.",
    date: "2026-05-29",
    readTime: "5 min read",
    imagePosition: "54% 42%",
    sections: [
      {
        paragraphs: [
          "Project owners often underestimate how much investor confidence is shaped before the first meeting takes place.",
          "A disciplined investment memorandum is not a marketing brochure. It is a structured evidence base that helps qualified investors, strategic partners, and advisers understand the opportunity on consistent terms.",
        ],
      },
      {
        heading: "From Narrative to Financeable Proposition",
        paragraphs: [
          "Many real-economy projects have attractive industrial logic but weak investor presentation. The opportunity may be sound, yet the materials do not clearly explain the market, technical assumptions, regulatory path, use of proceeds, execution risks, or management plan.",
          "The role of investor materials is to translate that project logic into a financeable proposition without exaggerating certainty or hiding complexity.",
        ],
      },
      {
        heading: "What Professional Materials Should Clarify",
        bullets: [
          "the investment thesis and strategic rationale",
          "the development stage and remaining workstreams",
          "the use of proceeds and funding requirement",
          "management capability and delivery responsibilities",
          "key commercial, technical, regulatory, and execution risks",
          "the diligence documents available for review",
        ],
      },
      {
        heading: "Why It Matters",
        paragraphs: [
          "Well-prepared materials create a more efficient review process. They allow investors to identify whether the opportunity fits their mandate, whether the project is ready for diligence, and which questions should be addressed first.",
          "For project owners, this reduces wasted conversations and improves the quality of introductions. For investors, it supports a more controlled assessment process.",
        ],
      },
    ],
  },
  {
    id: "confidential-access-private-opportunities",
    type: "Insight",
    title: "Why Confidential Access Matters in Private Opportunity Review",
    excerpt:
      "Controlled information flow helps protect project owners while giving qualified parties the context needed for serious diligence.",
    date: "2026-05-29",
    readTime: "4 min read",
    imagePosition: "38% 45%",
    sections: [
      {
        paragraphs: [
          "Private real-economy opportunities are not public listings. They often involve sensitive commercial information, counterparties, regulatory workstreams, supplier relationships, intellectual property, or early-stage strategic positioning.",
          "For this reason, access to detailed materials should be controlled rather than broadly distributed.",
        ],
      },
      {
        heading: "Qualification Before Disclosure",
        paragraphs: [
          "A qualification process helps confirm whether a party has the relevant investment mandate, sector interest, transaction capacity, and professional context to review the opportunity seriously.",
          "This does not need to create friction for the right counterparties. It simply ensures that detailed materials are shared with parties who are suitable for the stage and nature of the project.",
        ],
      },
      {
        heading: "A Relationship-Led Review Process",
        paragraphs: [
          "Confidential access also supports better communication. When introductions are relationship-led, management teams can understand the investor's perspective, respond to diligence questions in a structured way, and avoid uncontrolled circulation of incomplete information.",
          "This is particularly important for cross-border opportunities where regulatory, industrial, and cultural context can materially influence the review process.",
        ],
      },
      {
        heading: "Protecting Both Sides",
        paragraphs: [
          "For project owners, controlled access protects sensitive materials and supports a more professional process.",
          "For investors and strategic partners, it creates a clearer channel for information, documentation, and management interaction.",
          "The outcome is not secrecy for its own sake. It is disciplined access, better qualification, and more credible diligence.",
        ],
      },
    ],
  },
];

export function getNewsInsight(id: string) {
  return newsInsights.find((item) => item.id === id);
}
