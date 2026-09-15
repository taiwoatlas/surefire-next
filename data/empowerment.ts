import type { EmpowermentContent } from "@/types/empowerment";

/**
 * Ported 1:1 from the existing static site's assets/js/config.js
 * (window.SUREFIRE.empowerment), itself sourced from the Empowerment
 * Ministry Handbook. Nothing here is invented; department "note" fields
 * are preserved verbatim where the church specified a caveat (e.g. Grants).
 */
export const empowerment: EmpowermentContent = {
  motto: "Empowering Lives, Building Businesses, Transforming Communities for the Glory of God.",
  vision:
    "To build a Christ-centred community of spiritually mature, economically empowered, and socially responsible believers who transform their families, communities, and nations through Kingdom principles.",
  mission:
    "To equip members of the Surefire Christian Church of God with biblical knowledge, practical skills, financial education, entrepreneurial opportunities, mentorship, and compassionate support that enable them to become self-reliant, productive, and effective ambassadors of Christ.",
  purpose:
    "A structured and sustainable platform through which Surefire equips members and communities with the knowledge, skills, opportunities, resources and support required for holistic empowerment — combining assistance, where appropriate, with training, mentoring, monitoring, accountability and follow-up, in order to build capacity and reduce dependency.",

  values: [
    { name: "Christ-Centeredness", desc: "Jesus Christ is the foundation of every empowerment initiative." },
    { name: "Biblical Stewardship", desc: "Every gift, talent, opportunity and resource belongs to God and must be managed faithfully." },
    { name: "Integrity", desc: "Honesty, transparency and accountability in every decision." },
    { name: "Excellence", desc: "The highest standard in leadership, training and delivery." },
    { name: "Compassion", desc: "Responding to the needs of the vulnerable with wisdom and care." },
    { name: "Diligence", desc: "Hard work, discipline and continuous improvement as biblical principles." },
    { name: "Empowerment", desc: "Equipping people rather than creating dependency." },
    { name: "Accountability", desc: "Every leader, mentor and beneficiary is accountable to God and one another." },
    { name: "Service", desc: "Leadership as a ministry of serving others with humility." },
    { name: "Community Impact", desc: "A blessing that extends beyond the Church to families and society." },
  ],

  journey: [
    { num: 1, name: "Believe", strap: "Faith takes root.", items: ["Faith", "Christ", "The Gospel", "Biblical foundations", "Prayer", "Discipleship"] },
    { num: 2, name: "Become", strap: "Character is formed.", items: ["Character", "Purpose", "Leadership", "Knowledge", "Skills", "Mentorship"] },
    { num: 3, name: "Build", strap: "Capacity is put to work.", items: ["Business", "Career", "Financial stewardship", "Enterprise", "Innovation"] },
    { num: 4, name: "Bless", strap: "Impact reaches outward.", items: ["Family", "Community", "Service", "Outreach", "Social impact"] },
  ],

  departments: [
    {
      key: "business",
      num: "01",
      slug: "business-development",
      name: "Business Development",
      theme: "Ideas deserve the opportunity to become enterprises.",
      vision: "To develop successful, ethical and Kingdom-minded entrepreneurs who create sustainable businesses, generate employment and positively impact their communities.",
      summary: "Entrepreneurship education, business planning, registration support and mentorship for members founding or growing a business on biblical principles.",
      functions: [
        "Entrepreneurship training, seminars and workshops",
        "Opportunity identification and business idea development",
        "Business registration, licensing and statutory compliance support",
        "Business planning, market research and financial projections",
        "Access to professional legal and advisory services",
        "Encouragement of youth entrepreneurship and family businesses",
      ],
      pathway: ["Idea", "Plan", "Launch", "Grow", "Scale"],
    },
    {
      key: "grants",
      num: "02",
      slug: "grants",
      name: "Grants & Business Support",
      theme: "Support that builds capacity.",
      vision: "A transparent, accountable and sustainable grant programme that empowers members to build thriving businesses and achieve financial independence.",
      summary: "Administers the Church Small Business Grant Programme — structured, transparent and paired with mentorship and monitoring, never a guarantee of funding.",
      functions: [
        "Publicising grant opportunities and eligibility requirements",
        "Receiving, verifying and scoring grant applications",
        "Business viability assessment and applicant interviews",
        "Recommendation to the Grants Assessment Committee and Empowerment Board",
        "Grant disbursement, documentation and beneficiary monitoring",
        "Post-grant mentoring and business advisory support",
      ],
      pathway: ["Eligibility", "Application", "Assessment", "Interview", "Approval", "Agreement", "Support", "Monitoring", "Outcome"],
      note: "Support is subject to programme eligibility, assessment, approval and available resources. No outcome is guaranteed.",
    },
    {
      key: "microfinance",
      num: "03",
      slug: "microfinance",
      name: "Microfinance & Cooperative",
      theme: "Faithful with little, entrusted with much.",
      vision: "A financially empowered church community that saves consistently, accesses responsible financial services, and invests wisely for sustainable prosperity.",
      summary: "The financial empowerment arm of the Church — the Church Cooperative Society, a savings culture, responsible loans and financial literacy.",
      functions: [
        "Establishing and managing the Church Cooperative Society",
        "Voluntary and compulsory savings products, with regular statements",
        "Loan application, eligibility assessment and disbursement",
        "Responsible borrowing, repayment monitoring and financial discipline",
        "Financial literacy and investment-awareness education",
        "Annual general meetings and member participation",
      ],
      pathway: ["Save", "Learn", "Plan", "Access", "Build", "Repay", "Grow"],
    },
    {
      key: "skills",
      num: "04",
      slug: "skills",
      name: "Skills Acquisition",
      theme: "A skill in the hand is a future in motion.",
      vision: "A highly skilled, innovative and productive church community equipped with practical and professional competencies for sustainable livelihoods.",
      summary: "Vocational, technical and digital training — from tailoring to coding — carrying members from needs assessment through to certification and post-training support.",
      functions: [
        "Vocational training in trades such as fashion, catering, furniture and agribusiness",
        "Technical training in electrical, refrigeration, solar and construction fields",
        "Digital training from computer appreciation to AI fundamentals and e-commerce",
        "Apprenticeship coordination and competency-based assessment",
        "Recognised certification and post-training support",
        "Partnerships with training institutions and industry professionals",
      ],
      pathway: ["Needs Assessment", "Registration", "Orientation", "Practical Training", "Assessment", "Certification", "Post-Training Support"],
    },
    {
      key: "career",
      num: "05",
      slug: "career-development",
      name: "Employment & Career Development",
      theme: "From potential to professional.",
      vision: "A highly employable and professionally excellent church community whose members thrive in their careers while reflecting Christian values.",
      summary: "The bridge between skills and employment — career counselling, CV development, interview preparation, internships and employer partnerships.",
      functions: [
        "Job-seeker database and employer relationship building",
        "Career counselling, planning and workplace-readiness training",
        "CV, cover letter and professional profile development",
        "Interview preparation and personal branding",
        "Internship, apprenticeship and job-placement facilitation",
        "Job fairs and employment outreach",
      ],
      pathway: ["Discover", "Prepare", "Apply", "Interview", "Work", "Advance"],
    },
    {
      key: "family",
      num: "06",
      slug: "family-intervention",
      name: "Family Intervention",
      theme: "Stronger families. Stronger futures.",
      vision: "Strong, resilient and financially stable families that honour God, nurture future generations and contribute positively to the Church and society.",
      summary: "Compassionate, dignified support for widows, widowers, single parents and families in crisis — combining care with practical empowerment and long-term restoration.",
      functions: [
        "Support for widows and widowers, including fellowship and business opportunities",
        "Assistance for single parents — employment, training and parenting education",
        "Youth intervention, mentoring and discipleship",
        "Prompt response for families facing emergencies",
        "Financial guidance and harmony within marriages",
        "Referral to skills acquisition, grants and cooperative programmes",
      ],
      pathway: ["Identify", "Care", "Counsel", "Equip", "Support", "Restore"],
    },
    {
      key: "special",
      num: "07",
      slug: "special-projects",
      name: "Special Empowerment Projects",
      theme: "Every person, valued and included.",
      vision: "An inclusive and compassionate church where every vulnerable person is valued, empowered and given the opportunity to live with dignity.",
      summary: "Targeted empowerment for persons with disabilities, elderly members and the vulnerable, plus disaster response and community outreach — designed to grow as new needs emerge.",
      functions: [
        "Identification, accessibility assessment and vocational training for persons with disabilities",
        "Health, wellness and fellowship programmes for elderly members",
        "Support for individuals facing extreme hardship or prolonged illness",
        "Disaster preparedness, relief and recovery coordination",
        "Community outreach and humanitarian assistance",
        "Advocacy for inclusion and equal opportunity",
      ],
      pathway: ["Identify Need", "Assess", "Design Response", "Deliver", "Follow Up"],
    },
    {
      key: "wealth",
      num: "08",
      slug: "wealth-management",
      name: "Wealth Management",
      theme: "Wealth is a stewardship responsibility.",
      vision: "Financially wise and Kingdom-minded believers who build sustainable wealth through biblical principles and become faithful stewards of God's resources.",
      summary: "A 10-week financial education programme teaching biblical wealth principles alongside budgeting, investment, risk protection, estate planning and legacy building.",
      functions: [
        "Biblical wealth principles — God as owner, diligence and productivity",
        "Personal budgeting, saving and responsible spending",
        "Investment education and risk / asset protection",
        "Retirement, succession and estate planning",
        "Kingdom stewardship through generosity and service",
        "Personal coaching and individual financial-planning projects",
      ],
      pathway: ["Learn", "Budget", "Save", "Invest", "Protect", "Leave a Legacy"],
    },
    {
      key: "mentorship",
      num: "09",
      slug: "mentorship",
      name: "Mentorship & Leadership",
      theme: "People helping people grow.",
      vision: "A thriving community of Kingdom entrepreneurs and leaders who achieve sustainable success through biblical wisdom, mentorship and servant leadership.",
      summary: "Experienced Christian business leaders and professionals walk alongside emerging entrepreneurs and programme participants — sharing wisdom, accountability and encouragement.",
      functions: [
        "Mentor identification, vetting and orientation",
        "Structured matching of mentors with mentees",
        "Regular meetings, reporting and progress reviews",
        "Accountability for grant beneficiaries and entrepreneurs",
        "Leadership-capacity development for business owners",
        "A growing network of Kingdom-minded professionals — including future mentors raised from today's mentees",
      ],
      pathway: ["Mentor", "Match", "Meet", "Grow", "Multiply"],
    },
  ],
};

export const governance = [
  { level: "Church Governing Council", desc: "Highest decision-making authority — approves vision, major policy, budgets, and the Empowerment Board." },
  { level: "Empowerment Board", desc: "Strategic oversight and policy implementation, chaired with representatives across business, finance and law." },
  { level: "Executive Director", desc: "Day-to-day leadership of the Empowerment Ministry and its departments." },
  { level: "Departmental Heads & Coordinators", desc: "Implement approved programmes within delegated responsibility, in every local church." },
] as const;

export function getDepartment(slug: string) {
  return empowerment.departments.find((d) => d.slug === slug);
}
