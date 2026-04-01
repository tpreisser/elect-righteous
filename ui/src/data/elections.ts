export type ElectionLevel = "Federal" | "State" | "Local" | "Ballot Measure";

export interface Election {
  slug: string;
  name: string;
  level: ElectionLevel;
  date: string;
  jurisdiction: string;
  seats: number;
  status: "Open Seat" | "Incumbent Running" | "N/A";
  candidateCount: number;
  candidateSlugs: string[];
  description: string;
  plainEnglish: string;
  whyItMatters: string;
}

export const ELECTIONS: Election[] = [
  {
    slug: "us-senate-2026",
    name: "U.S. Senate",
    level: "Federal",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 9,
    candidateSlugs: [
      "roger-marshall",
      "jason-hart",
      "patrick-schmidt",
      "christy-cauble-davis",
      "sandy-spidel-neumann",
      "erik-murray",
      "anne-parelkar",
      "michael-soetaert",
      "chase-laporte",
    ],
    description:
      "Roger Marshall faces a crowded field of Democratic challengers plus a Republican primary challenger in one of Kansas's highest-profile races.",
    plainEnglish:
      "Kansas gets only two U.S. senators, and this seat is on the ballot in November 2026. Incumbent Roger Marshall is running again, while Democrats have built an unusually large field of challengers and Chase LaPorte has filed on the Republican side.",
    whyItMatters:
      "U.S. senators vote on judges, war powers, federal spending, farm policy, healthcare, and the national laws that affect Kansas every day. This race shapes who speaks for the entire state in Washington.",
  },
  {
    slug: "ks-01-house-2026",
    name: "KS-01 U.S. House",
    level: "Federal",
    date: "2026-11-03",
    jurisdiction: "Kansas 1st Congressional District",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 4,
    candidateSlugs: [
      "tracey-mann",
      "colin-mcroberts",
      "lauren-reinhold",
      "craig-musser",
    ],
    description:
      "Tracey Mann is seeking another term in the Big First, with Democratic and independent challengers already in the field.",
    plainEnglish:
      "If you live in Hays, this is your U.S. House race. Tracey Mann is the incumbent, and Colin McRoberts, Lauren Reinhold, and Craig Musser have all entered the contest to represent western and central Kansas.",
    whyItMatters:
      "The KS-01 member of Congress becomes the main federal voice for agriculture, water, roads, trade, and rural infrastructure across a huge stretch of Kansas.",
  },
  {
    slug: "kansas-governor-2026",
    name: "Kansas Governor",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 11,
    candidateSlugs: [
      "scott-schwab",
      "vicki-schmidt",
      "ty-masterson",
      "jeff-colyer",
      "philip-sarnecki",
      "charlotte-ohara",
      "stacy-rogers",
      "joy-eakins",
      "ethan-corson",
      "cindy-holscher",
      "marty-tuley",
    ],
    description:
      "With Laura Kelly term-limited, both parties are building large fields for one of the most important open-seat races in Kansas politics.",
    plainEnglish:
      "Kansas will elect a new governor in 2026 because Laura Kelly cannot run again. Republicans already have a crowded primary, Democrats have multiple contenders, and the winner will control the executive branch in Topeka.",
    whyItMatters:
      "The governor signs or vetoes bills, writes budgets, appoints agency leaders, and shapes policy on education, taxes, roads, public health, and much more.",
  },
  {
    slug: "kansas-ag-2026",
    name: "Kansas Attorney General",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 2,
    candidateSlugs: ["kris-kobach", "chris-mann"],
    description:
      "Kris Kobach is seeking another term as attorney general while Chris Mann runs as the Democratic challenger.",
    plainEnglish:
      "The attorney general is Kansas's top lawyer and one of its most visible statewide offices. Kris Kobach is the incumbent, and Chris Mann is the main challenger on the board right now.",
    whyItMatters:
      "This office decides which lawsuits Kansas joins, which criminal or civil fights get statewide attention, and how aggressively state law is enforced in court.",
  },
  {
    slug: "kansas-sos-2026",
    name: "Kansas Secretary of State",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 4,
    candidateSlugs: ["pat-proctor", "ken-rahjes", "jennifer-day", "sam-lane"],
    description:
      "Scott Schwab is leaving the office to run for governor, which opens a four-candidate contest over who will manage Kansas elections and business filings.",
    plainEnglish:
      "The secretary of state runs Kansas elections, handles candidate filings, and oversees major state records. With Scott Schwab stepping aside, Pat Proctor, Ken Rahjes, Jennifer Day, and Sam Lane are all in the race.",
    whyItMatters:
      "This office decides how easy or difficult it is to vote, how election disputes are handled, and how confidently Kansans can trust the statewide process.",
  },
  {
    slug: "kansas-insurance-2026",
    name: "Kansas Insurance Commissioner",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 1,
    status: "Open Seat",
    candidateCount: 2,
    candidateSlugs: ["daniel-hawkins", "dinah-sykes"],
    description:
      "The open-seat insurance commissioner race currently pits Daniel Hawkins against Dinah Sykes.",
    plainEnglish:
      "Kansas elects its insurance commissioner, and this office touches rates, claims, consumer complaints, and company oversight. Daniel Hawkins and Dinah Sykes are the two main candidates on the site right now.",
    whyItMatters:
      "Insurance decisions affect what Kansans pay for health, auto, crop, and home coverage, and whether regulators push back when companies fail consumers.",
  },
  {
    slug: "ks-house-111",
    name: "KS House District 111",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "Kansas House District 111",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 1,
    candidateSlugs: ["barb-wasinger"],
    description:
      "Barb Wasinger currently anchors the House District 111 race on the site as the district's incumbent representative.",
    plainEnglish:
      "House District 111 is one of the most directly local state races for Hays-area voters. Barb Wasinger is the incumbent, and this race affects the laws and budget choices that hit closest to home.",
    whyItMatters:
      "Your state representative votes on school funding, tax policy, roads, public safety, and the state laws that shape daily life in Ellis County.",
  },
  {
    slug: "sboe-district-5",
    name: "State Board of Education District 5",
    level: "State",
    date: "2026-11-03",
    jurisdiction: "Kansas State Board of Education District 5",
    seats: 1,
    status: "Incumbent Running",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "District 5 covers western Kansas, including Ellis County, and the seat is back on the ballot in 2026.",
    plainEnglish:
      "The State Board of Education helps decide statewide standards, curriculum fights, accreditation, and major school policy. District 5 includes Hays and much of western Kansas, so this race matters even if the candidate field is still thin on the site.",
    whyItMatters:
      "Board members influence what schools teach, how districts are judged, and what statewide education debates look like for years to come.",
  },
  {
    slug: "hays-city-current",
    name: "Hays City Leadership",
    level: "Local",
    date: "2027-11-02",
    jurisdiction: "City of Hays, Kansas",
    seats: 6,
    status: "N/A",
    candidateCount: 6,
    candidateSlugs: [
      "mason-ruder",
      "alaina-cunningham",
      "shaun-musil",
      "sandy-jacobs",
      "david-vilaysing",
      "toby-dougherty",
    ],
    description:
      "City races are not on the 2026 Hays ballot, but these are the officeholders currently running city government and setting local direction.",
    plainEnglish:
      "Hays city elections are not the main focus of the 2026 ballot, but the people already in office still make decisions about water, housing, growth, budgeting, and city services. This page groups the current city leadership in one place.",
    whyItMatters:
      "Local city decisions shape day-to-day life faster than almost anything else: utility projects, zoning, housing growth, city spending, and how Hays responds to long-running issues like water.",
  },
  {
    slug: "ellis-county-current",
    name: "Ellis County Officials",
    level: "Local",
    date: "2026-11-03",
    jurisdiction: "Ellis County, Kansas",
    seats: 7,
    status: "N/A",
    candidateCount: 7,
    candidateSlugs: [
      "scott-braun",
      "aaron-cunningham",
      "bobbi-dreiling",
      "nathan-leiker",
      "neal-younger",
      "rebecca-herzog",
      "vernon-ruder-jr",
    ],
    description:
      "Some Ellis County offices return to the ballot in 2026 and others do not, but these are the county officials currently holding the posts most relevant to Hays voters.",
    plainEnglish:
      "County government handles elections, law enforcement, prosecutions, taxes, property records, and commission decisions that affect Hays and the surrounding rural areas. This guide groups the current Ellis County officeholders together for context.",
    whyItMatters:
      "County officials touch public safety, election administration, land records, tax collection, and the county budget that underpins a lot of everyday local government.",
  },
  {
    slug: "usd-489-current",
    name: "USD 489 School Leadership",
    level: "Local",
    date: "2027-11-02",
    jurisdiction: "Hays USD 489",
    seats: 8,
    status: "N/A",
    candidateCount: 8,
    candidateSlugs: [
      "ken-brooks",
      "curt-vajnar",
      "ruth-ruder",
      "derek-yarmer",
      "allen-park",
      "jayme-goetz",
      "craig-pallister",
      "ron-wilson",
    ],
    description:
      "The next USD 489 school board election is in 2027, but the people in charge now are already making high-impact decisions about curriculum, contracts, and district direction.",
    plainEnglish:
      "USD 489 is not a 2026 ballot fight, but the board and superintendent still matter right now. They control district policy, bond oversight, curriculum fights, and the tone of public-school leadership in Hays.",
    whyItMatters:
      "School leaders influence what kids are taught, how tax-backed bond projects are managed, and how parents experience the district long before the next board election arrives.",
  },
  {
    slug: "supreme-court-amendment",
    name: "Supreme Court Amendment",
    level: "Ballot Measure",
    date: "2026-08-04",
    jurisdiction: "State of Kansas",
    seats: 0,
    status: "N/A",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "A constitutional amendment that would change how Kansans choose state Supreme Court justices.",
    plainEnglish:
      "This August 4, 2026 measure would reshape how Kansas Supreme Court justices are selected. It is one of the most important statewide ballot questions because it changes the rules, not just the people involved.",
    whyItMatters:
      "Judicial selection changes can outlast any single election cycle and affect abortion law, school funding, constitutional rights, and the court's independence from direct political pressure.",
  },
  {
    slug: "citizenship-amendment",
    name: "Citizenship Amendment",
    level: "Ballot Measure",
    date: "2026-11-03",
    jurisdiction: "State of Kansas",
    seats: 0,
    status: "N/A",
    candidateCount: 0,
    candidateSlugs: [],
    description:
      "A constitutional amendment about citizen-only voting language that will appear on the November 2026 ballot.",
    plainEnglish:
      "This measure would add explicit citizen-only voting language to the Kansas Constitution. Supporters call it a safeguard, while opponents say it solves a problem already covered by existing law.",
    whyItMatters:
      "Even when a measure changes little on day one, it can shape future voting laws and court fights by changing the language written into the state constitution itself.",
  },
];

export function getElectionBySlug(slug: string): Election | undefined {
  return ELECTIONS.find((election) => election.slug === slug);
}

export function getAllElectionSlugs(): string[] {
  return ELECTIONS.map((election) => election.slug);
}
