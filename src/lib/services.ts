export type ServicePage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  capabilities: string[];
  outcomes: string[];
  details: string[];
};

export const services: ServicePage[] = [
  {
    slug: "sap-staffing",
    title: "SAP Staffing & Global Resourcing",
    eyebrow: "SAP DELIVERY TALENT",
    summary: "Build dependable SAP delivery capacity with pre-vetted functional and technical specialists aligned to your programme, timeline, and operating model. We support enterprise teams evaluating SAP capability for Singapore and wider APAC delivery requirements.",
    image: "/staffingp.jpg",
    capabilities: ["S/4HANA transformation, rollout, migration, and application support", "SAP SuccessFactors, BTP, ABAP, Fiori, integration, and Basis roles", "Functional leadership across Finance, Controlling, Supply Chain, Procurement, Sales, and HCM", "Contract, contract-to-hire, permanent, project pod, and build-operate-transfer models"],
    outcomes: ["Shorter time to mobilise critical SAP roles", "Clearer accountability across workstreams and vendors", "Flexible capacity without compromising delivery quality", "A documented shortlist aligned to location, seniority, start date, and rate expectations"],
    details: ["Our SAP delivery teams are structured around the work your programme actually needs: solution architects, programme and project leads, functional consultants, technical consultants, ABAP and Fiori developers, integration specialists, testers, data specialists, security roles, and cutover support.", "We use role calibration, CV review, technical screening, reference checks, and structured onboarding to build a reliable talent pipeline for greenfield implementations, S/4HANA conversions, migrations, regional rollouts, AMS, and enhancement programmes.", "For Singapore and wider APAC requirements, we clarify working location, time-zone overlap, onsite or remote expectations, travel requirements, notice period, right-to-work considerations, and engagement model before presenting profiles. Final hiring and compliance decisions remain with the client.", "Engagements can scale from one specialist to a multi-disciplinary pod, with defined deliverables, weekly reporting, escalation paths, and regular delivery reviews."],
  },
  {
    slug: "it-cloud-solutions",
    title: "IT & Cloud Solutions",
    eyebrow: "MODERN ENGINEERING",
    summary: "Modernise platforms and delivery environments with practical cloud architecture, migration planning, and engineering support.",
    image: "/IT.jpg",
    capabilities: ["Cloud readiness and migration roadmaps", "Architecture, platform engineering, and DevOps", "Serverless, integration, observability, and resilience", "Technical delivery squads for transformation programmes"],
    outcomes: ["A clearer path from legacy constraints to modern platforms", "More resilient, observable systems", "Engineering capacity matched to delivery priorities"],
    details: ["We help technology leaders translate cloud strategy into an executable roadmap, with architecture decisions grounded in security, cost, performance, and operational ownership.", "Our teams can support discovery, migration waves, landing zones, application modernisation, and post-migration optimisation."],
  },
  {
    slug: "compliance-security",
    title: "Compliance & Security",
    eyebrow: "RISK AND ASSURANCE",
    summary: "Strengthen trust with practical compliance reviews, security controls, and governance support designed around the way your organisation operates.",
    image: "/PRIVACY.jpg",
    capabilities: ["ISO, SOC, CMMI, GDPR, and DPDP readiness support", "Control mapping, evidence preparation, and gap assessments", "Security governance and policy support", "Third-party and operational risk reviews"],
    outcomes: ["Visible control ownership and evidence trails", "Fewer surprises during audits and reviews", "Security practices connected to business operations"],
    details: ["Our approach connects policy to practice. We help teams identify control gaps, assign ownership, build evidence routines, and prepare for external assessment.", "The work is designed to be useful beyond audit day: clearer accountability, repeatable review cycles, and risk decisions that can be understood by technical and business stakeholders."],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Growth",
    eyebrow: "DEMAND AND BRAND",
    summary: "Turn market insight into measurable growth through focused digital campaigns, content systems, and performance-led acquisition.",
    image: "/digital.jpg",
    capabilities: ["Go-to-market and campaign planning", "Content, SEO, paid media, and social programmes", "Conversion journeys and analytics", "Reporting tied to pipeline and commercial outcomes"],
    outcomes: ["A clearer relationship between activity and revenue", "More consistent brand and content execution", "Faster learning through measurable campaigns"],
    details: ["We combine strategy and execution so marketing teams can move from fragmented activity to an accountable growth system.", "Each engagement starts with audience, offer, channel, and measurement decisions before moving into production and optimisation."],
  },
  {
    slug: "bpo-customer-experience",
    title: "BPO & Customer Experience Operations",
    eyebrow: "CUSTOMER OPERATIONS",
    summary: "Create dependable customer operations with trained teams, documented workflows, and performance management that scales with demand.",
    image: "/BPO.jpg",
    capabilities: ["Customer support and service desk operations", "Back-office process execution", "Workforce planning and quality assurance", "Knowledge management and performance reporting"],
    outcomes: ["Consistent service across channels", "Improved visibility into quality and productivity", "Flexible operational capacity during growth or change"],
    details: ["We design customer operations around service levels, process clarity, quality standards, and the experience your customers should receive.", "Teams can support launch, stabilisation, peak demand, and ongoing operations with clear escalation and reporting models."],
  },
  {
    slug: "political-consulting",
    title: "Political Consulting",
    eyebrow: "RESEARCH AND ADVISORY",
    summary: "Support public-facing programmes with structured research, stakeholder intelligence, communications planning, and disciplined field execution.",
    image: "/political-consulting.jpg",
    capabilities: ["Constituency and stakeholder research", "Message, narrative, and communications planning", "Campaign operations and field coordination", "Issue monitoring and decision support"],
    outcomes: ["Better-informed strategic decisions", "Consistent communication across stakeholder groups", "Clearer operating rhythm for complex campaigns"],
    details: ["Our advisory work is research-led and execution-aware. We help teams organise information, understand stakeholder priorities, and translate strategy into coordinated activity.", "Engagements are scoped around the required research, communications, field, and reporting workstreams, with clear governance and responsible handling of sensitive information."],
  },
  {
    slug: "emotional-homes-infra",
    title: "Emotional Homes & Infra",
    eyebrow: "PLACE AND EXPERIENCE",
    summary: "Shape residential and infrastructure initiatives with a people-first perspective that connects planning, identity, and practical delivery.",
    image: "/home.jpg",
    capabilities: ["Concept and positioning support", "Stakeholder and community communication", "Project coordination and execution support", "Experience-led property and infrastructure narratives"],
    outcomes: ["A clearer story for every stakeholder", "Better alignment between ambition and delivery", "Human-centred communication for complex projects"],
    details: ["This specialist advisory service helps projects communicate their purpose and coordinate the people, partners, and decisions required to move forward.", "It is available through the Services menu as a separate offering and is intentionally not included in the main technology service cards."],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
