export type PartyKey = "R" | "D" | "I" | "NP";

export interface Donor {
  name: string;
  amount: string;
}

export interface CampaignFinance {
  totalRaised: string;
  narrative: string;
  donors: Donor[];
  undisclosed?: string;
  reportingPeriod: string;
  source: string;
}

export interface ChurchInfo {
  name: string;
  denomination?: string;
  url?: string;
  details?: string;
}

export interface Source {
  title: string;
  url: string;
  publication: string;
  date: string;
}

export interface Quote {
  text: string;
  source: string;
  date?: string;
  url?: string;
  topic?: string;
}

export interface CandidateCard {
  slug: string;
  name: string;
  party: PartyKey;
  position: string;
  electionSlug: string;
  incumbent: boolean;
  occupation: string;
}

export interface CandidateFull extends CandidateCard {
  born?: string;
  hometown?: string;
  religion?: string;
  education?: string;
  family?: string;
  district?: string;
  margin2024?: string;
  campaignWebsite?: string;
  whoTheyAre: string;
  theirRecord: string;
  whatYouShouldKnow: string[];
  whereTheyWorship: string;
  church?: ChurchInfo;
  quotes: Quote[];
  campaignFinance?: CampaignFinance;
  sources: Source[];
}

export const TRACEY_MANN_FULL: CandidateFull = {
  slug: "tracey-mann",
  name: "Tracey Mann",
  party: "R",
  position: "U.S. Representative, KS-01",
  electionSlug: "ks-01-house-2026",
  incumbent: true,
  occupation: "Farmer / Real Estate Broker",

  // At A Glance
  born: "December 17, 1976",
  hometown: "Quinter, Kansas",
  religion: "Christian (Evangelical Covenant)",
  education: "Kansas State University, B.S. Business Administration",
  family: "Married to Audra Mann; four children",
  district: "KS-01 (R+16) — western and central Kansas including Hays",
  margin2024: "Won re-election 2024 with 66.2% of the vote",
  campaignWebsite: "https://mann.house.gov",

  // Article body
  whoTheyAre: `Tracey Robert Mann, born December 17, 1976, is a fifth-generation Kansas farmer from Quinter who became a commercial real estate broker in Salina before entering politics. He grew up on the family's Gove County farm — an operation still active today — and attended Kansas State University, earning a B.S. in Business Administration before returning to western Kansas to work the land and build a real estate career.

Mann first entered public life when he won a seat in the Kansas Senate in 2009, representing Senate District 36. After a narrow loss in the 2010 Republican primary for the KS-01 congressional seat, he returned to private business for nearly a decade. He re-entered the congressional race in 2020, won the Republican primary, and defeated Democrat Kali Barnett in the general election with 67% of the vote. He has since been re-elected in 2022 and 2024 by similar margins, cementing KS-01 as among the most reliably Republican districts in the nation.

Before entering Congress, Mann served as Senior Program Director for the National Student Leadership Forum on Faith and Values — a Washington-based faith leadership program. He and his wife Audra have four children and live in Quinter. His congressional biography foregrounds his farming identity and stated commitment to rural Kansas values.`,

  theirRecord: `Mann serves on the House Agriculture Committee and the House Transportation and Infrastructure Committee. His tenure has centered on four areas: agricultural policy, including the Farm Bill and crop insurance programs; border security legislation; energy production and opposition to green energy mandates; and fiscal conservatism, including opposition to large spending packages. Heritage Action rates him at 96%, placing him among the most conservative members of the House.

On January 6–7, 2021, Mann voted to object to certifying Arizona's and Pennsylvania's electoral votes, citing "election integrity" concerns. This vote placed him among the 147 House Republicans who maintained their objections even after the Capitol breach earlier that day. Mann has defended the vote in subsequent constituent communications, framing it as responding to voter concerns rather than endorsing the attack.

Mann also voted against the bipartisan ROTOR Act — legislation that would have expanded drone delivery infrastructure in rural areas. The bill had support from agricultural organizations and rural broadband advocates, and its failure drew criticism from rural development groups. Mann has not offered detailed public comment on the vote.

Key legislation Mann has supported includes the Secure the Border Act, the REIN IN Inflation Act, the Parents Bill of Rights Act, and the Energy Independence and Security Act. He has consistently voted against large omnibus spending packages and opposed expanded federal social programs.`,

  whatYouShouldKnow: [
    "Voted against certifying Arizona AND Pennsylvania's electoral votes on January 6, 2021 — one of 147 House Republicans to do so after the Capitol breach that same day.",
    "The only member of the Kansas congressional delegation to vote against the ROTOR Act, bipartisan legislation that would have expanded drone delivery routes in rural and agricultural communities.",
    "56.71% of his campaign funding comes from PACs — with only 0.72% from small-dollar donors (under $200). The majority of his individual grassroots support comes from larger donors.",
    "His single largest donor category is the Crop Production industry ($197,200), representing large agricultural input corporations — chemical, seed, and fertilizer companies — rather than individual family farmers.",
    "He served as Senior Program Director for the National Student Leadership Forum on Faith and Values prior to Congress — a faith-based leadership development organization based in Washington, D.C.",
  ],

  whereTheyWorship: `Mann attends First Covenant Church in Salina, Kansas, affiliated with the Evangelical Covenant Church denomination — a theologically centrist Protestant tradition with roots in Swedish pietism. Before his congressional career, Mann served as Senior Program Director for the National Student Leadership Forum on Faith and Values, a Washington-based nonprofit that runs faith-oriented leadership programs for high school and college students. His public statements frequently invoke faith as a personal anchor, though he does not typically make church policy a campaign centerpiece.`,

  // Quotes
  quotes: [
    {
      text: "I voted to object to certifying Arizona and Pennsylvania because my constituents deserved to have their concerns heard. Millions of Americans had legitimate questions about the integrity of that election, and I believe Congress had a responsibility to examine those concerns.",
      source: "Tracey Mann, constituent town hall, Hays, KS",
      date: "2021-03-15",
      topic: "January 6 Objection",
    },
    {
      text: "Western Kansas is farm country. When Washington forgets the farmer, it forgets the backbone of this nation. I will always fight for crop insurance, for fair commodity prices, and for the freedom to farm without federal interference.",
      source: "Tracey Mann, House Agriculture Committee hearing",
      date: "2023-06-08",
      url: "https://mann.house.gov",
      topic: "Agriculture",
    },
    {
      text: "America's energy independence is a national security issue, not just an economic one. We have the resources. We have the workers. The only thing standing in the way is bad policy from Washington.",
      source: "Tracey Mann, House floor speech",
      date: "2022-09-22",
      topic: "Energy Policy",
    },
  ],

  // Church
  church: {
    name: "First Covenant Church",
    denomination: "Evangelical Covenant Church",
    url: "https://fccsalina.com/",
    details: "Salina, Kansas. Mann was active in faith-oriented leadership before Congress, serving as Senior Program Director for the National Student Leadership Forum on Faith and Values. He co-chaired the National Prayer Breakfast in 2023 and 2024.",
  },

  // Finance
  campaignFinance: {
    totalRaised: "$1.4M (2023–2024 cycle)",
    narrative: "In the 2023–2024 election cycle, Tracey Mann raised approximately $1.4 million. 56.71% of that total came from Political Action Committees, 30.81% from large individual contributions, and only 0.72% from small-dollar donors giving under $200. His funding is overwhelmingly institutional, not grassroots.",
    donors: [
      { name: "Crop Production & Basic Processing PACs", amount: "$197,200" },
      { name: "AIPAC (American Israel Public Affairs Committee)", amount: "$33,607" },
      { name: "Koch Industries PAC", amount: "Top 20 donor" },
      { name: "American Farm Bureau Federation PAC", amount: "Top 20 donor" },
      { name: "National Cattlemen's Beef Association PAC", amount: "Top 20 donor" },
      { name: "National Rural Electric Cooperative Association PAC", amount: "Top 20 donor" },
      { name: "AT&T PAC", amount: "Top 20 donor" },
      { name: "U.S. Chamber of Commerce", amount: "$1.9M independent expenditure (2020)" },
    ],
    undisclosed: "Exact individual itemized donor breakdowns require OpenSecrets premium access. 56.71% PAC, 30.81% large individual, 11.75% other, 0.72% small-dollar.",
    reportingPeriod: "2023–2024 election cycle",
    source: "OpenSecrets.org / FEC",
  },

  // Sources
  sources: [
    {
      title: "Tracey Mann Official Biography",
      url: "https://mann.house.gov/about",
      publication: "mann.house.gov",
      date: "2024-01-01",
    },
    {
      title: "Kansas 1st Congressional District Election Results 2024",
      url: "https://ballotpedia.org/Kansas%27s_1st_Congressional_District_election,_2024",
      publication: "Ballotpedia",
      date: "2024-11-06",
    },
    {
      title: "Tracey Mann Campaign Finance Overview",
      url: "https://www.opensecrets.org/members-of-congress/tracey-mann",
      publication: "OpenSecrets.org",
      date: "2024-12-31",
    },
    {
      title: "Heritage Action Congressional Scorecard",
      url: "https://heritageaction.com/scorecard/members/M001212/congress/117",
      publication: "Heritage Action for America",
      date: "2024-01-01",
    },
    {
      title: "Roll Call Vote: Objection to Arizona Electoral Votes",
      url: "https://clerk.house.gov/Votes/2021",
      publication: "Office of the Clerk, U.S. House of Representatives",
      date: "2021-01-07",
    },
    {
      title: "ROTOR Act Vote Record",
      url: "https://clerk.house.gov/Votes/2022",
      publication: "Office of the Clerk, U.S. House of Representatives",
      date: "2022-07-20",
    },
    {
      title: "First Covenant Church — Salina, KS",
      url: "https://www.firstcovenantchurchsalina.org",
      publication: "First Covenant Church",
      date: "2024-01-01",
    },
    {
      title: "National Student Leadership Forum on Faith and Values",
      url: "https://www.nslf.org",
      publication: "NSLF",
      date: "2024-01-01",
    },
  ],
};

export const FULL_CANDIDATES: CandidateFull[] = [
  TRACEY_MANN_FULL,
  ...([
  {
    "slug": "roger-marshall",
    "name": "Roger Marshall",
    "party": "R",
    "position": "U.S. Senator",
    "electionSlug": "us-senate-2026",
    "incumbent": true,
    "occupation": "Obstetrician / U.S. Senator",
    "born": "August 9, 1960, El Dorado, Kansas",
    "hometown": "Great Bend, Kansas",
    "religion": "Christian Church (Disciples of Christ) / Non-denominational",
    "education": "~1978-1980 — Butler Community College (El Dorado, KS) — Associate's Degree (1980)",
    "family": "Laina Marshall — married 40+ years; Not yet verified",
    "campaignWebsite": "https://kansansformarshall.com",
    "whoTheyAre": "Marshall is a 5th-generation Kansas farm kid from Butler County. He was the first in his family to attend college. After completing his medical training, he moved to Great Bend, Kansas in 1991, where he practiced obstetrics and gynecology for over 25 years. He delivered more than 5,000 babies during his career. He entered politics in 2016 by defeating incumbent Rep. Tim Huelskamp in the Republican primary for Kansas's 1st Congressional District (\"The Big First\"), served two terms in the House (2017-2021), then won election to the U.S. Senate in 2020.\n\nFull Name: Roger Wayne Marshall.\n\nBorn: August 9, 1960.\n\nBirthplace: El Dorado, Butler County, Kansas.",
    "theirRecord": "VOTED TO OBJECT to certification in BOTH Arizona AND Pennsylvania.\n\nArizona objection: Voted YES to sustain objection. Senate rejected 6-93.\n\nPennsylvania objection: Voted YES to sustain objection. Senate rejected 7-92.\n\nMarshall was one of only 8 Republican senators to vote against certification in both states.",
    "whatYouShouldKnow": [
      "Marshall's faith appears deeply personal and longstanding -- not performative. 25+ years of Sunday school teaching, elder/deacon/board chairman service, and daily Bible reading since age 10 represent genuine, sustained commitment. His pro-life positions are rooted in both his faith and his medical career delivering thousands of babies",
      "Marshall occupies a position common among Republican physician-politicians: he personally supports vaccines but aggressively fights mandates, opposes masks, promoted unproven treatments, and pushed conspiracy-adjacent theories about COVID origins. His credibility as a doctor makes his anti-mandate/anti-mask positions more influential",
      "Strengths from a Judeo-Christian values perspective:",
      "25+ years of genuine church leadership (elder, deacon, board chair, Sunday school teacher)",
      "Daily Bible reader since age 10"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED.\n\nDenomination: Christian Church (Disciples of Christ) / Non-denominational.",
    "church": {
      "name": "First Christian Church, Great Bend, KS",
      "denomination": "Christian Church (Disciples of Christ) / Non-denominational",
      "url": "https://www.firstchristianchurchgb.com/",
      "details": "Confidence: CONFIRMED. Denomination: Christian Church (Disciples of Christ) / Non-denominational."
    },
    "quotes": [
      {
        "text": "paid Democratic operatives.",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://kansansformarshall.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "abortion is wrong at any stage",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://kansansformarshall.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "We cannot continue selling our grandchildren down a river...",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://kansansformarshall.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "small-town Christian values",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://kansansformarshall.com/meet-doc/",
        "topic": "ROGER MARSHALL"
      },
      {
        "text": "I don't wear my faith on my shirt sleeve, but in my heart.",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://www.marshall.senate.gov/about/",
        "topic": "COMPLETE DOSSIER: Senator Roger Marshall, M.D."
      },
      {
        "text": "I have tried to read the Bible every day since I was 10 years of age, so a lot of the wisdom I've been given comes from reading the Bible.",
        "source": "Roger Marshall research file",
        "date": "2026-03-31",
        "url": "https://www.marshall.senate.gov/about/",
        "topic": "COMPLETE DOSSIER: Senator Roger Marshall, M.D."
      }
    ],
    "campaignFinance": {
      "totalRaised": "Q4 2025 Filing (filed January 31, 2026): $621,400 raised",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S0KS00315/.\n\nFEC committee page: https://www.fec.gov/data/committee/C00576173/?cycle=2026.",
      "donors": [
        {
          "name": "2025 receipts alone were with $195,870.35 in disbursements.",
          "amount": "$2,563,147.27,"
        },
        {
          "name": "Public donor notes from prior research: Koch Industries PAC Spirit AeroSystems PAC $10,000, and U.S. Chamber of Commerce IE support of roughly $1.9M.",
          "amount": "$10,000,"
        },
        {
          "name": "Koch Industries PAC",
          "amount": "$10,000 contribution (2020)"
        },
        {
          "name": "Spirit AeroSystems PAC",
          "amount": "$10,000 contribution (2020)"
        },
        {
          "name": "U.S. Chamber of Commerce",
          "amount": "$1.9 million supporting Marshall (2020)"
        },
        {
          "name": "Koch Industries was the biggest overall corporate donor to GOP spending groups ( total) -- strong Kansas connection",
          "amount": "$13.75M"
        },
        {
          "name": "Total Receipts (2025 calendar year)",
          "amount": "$2,563,147.27"
        },
        {
          "name": "Q4 2025 Filing (filed January 31, 2026): raised",
          "amount": "$621,400"
        },
        {
          "name": "Q2 2025 Filing (filed July 15, 2025): raised",
          "amount": "$464,400"
        },
        {
          "name": "Small Individual Contributions (<): 8.40%",
          "amount": "$200"
        },
        {
          "name": "Health Professionals: (top sector)",
          "amount": "$667,476"
        },
        {
          "name": "2020 Senate race: in outside spending",
          "amount": "$29.8 million"
        },
        {
          "name": "U.S. Chamber of Commerce added in \"dark money\" spending during 2020 campaign",
          "amount": "$329,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Kansansformarshall.Com",
        "url": "https://kansansformarshall.com/",
        "publication": "Kansansformarshall.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansansformarshall.Com",
        "url": "https://kansansformarshall.com/life",
        "publication": "Kansansformarshall.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Thehill.Com",
        "url": "https://thehill.com/homenews/senate/5778492-roger-marshall-iran-nuclear-program-comments/",
        "publication": "Thehill.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-releases-statement-on-foreign-aid-bill/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Firstchristianchurchgb.Com",
        "url": "https://www.firstchristianchurchgb.com/",
        "publication": "Firstchristianchurchgb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasdisciples.Org",
        "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
        "publication": "Kansasdisciples.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S0KS00315/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00576173/?cycle=2026",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/about/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-releases-statement-after-president-trumps-joint-address-to-congress/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall.Senate.Gov",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-introduces-comprehensive-bill-to-reform-americas-dysfunctional-budget-process/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/members-of-congress/roger-marshall/summary?cid=N00037034",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kwch.Com",
        "url": "https://www.kwch.com/2025/03/04/sen-marshall-doubles-down-decision-leave-town-hall-early-claim-that-it-was-sabotaged/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Justfacts.Votesmart.Org",
        "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov",
        "url": "https://marshall.senate.gov",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR Candidate Guide",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "FEC.gov",
        "url": "https://www.fec.gov/data/elections/senate/KS/2026/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansans for Marshall - Meet Doc",
        "url": "https://kansansformarshall.com/meet-doc/",
        "publication": "Kansansformarshall.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Marshall - Federal Watch / KSOpen",
        "url": "https://ksopen.org/marshall",
        "publication": "Ksopen.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Congress.gov Profile",
        "url": "https://www.congress.gov/member/roger-marshall/M001198",
        "publication": "Congress.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "GovTrack Profile",
        "url": "https://www.govtrack.us/congress/members/roger_marshall/412704",
        "publication": "Govtrack.Us",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Roger_Marshall",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Roger_Marshall",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Historical Society - Kansapedia",
        "url": "https://www.kansashistory.gov/kansapedia/roger-w-marshall/19968",
        "publication": "Kansashistory.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "OpenSecrets Industries",
        "url": "https://www.opensecrets.org/members-of-congress/roger-marshall/industries?cid=N00037034",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Quiver Quantitative Net Worth",
        "url": "https://www.quiverquant.com/congresstrading/politician/Roger%20Marshall-M001198/net-worth",
        "publication": "Quiverquant.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart Key Votes",
        "url": "https://justfacts.votesmart.org/candidate/key-votes/172080/roger-marshall",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Heritage Action Scorecard",
        "url": "https://heritageaction.com/scorecard/members/m001198",
        "publication": "Heritageaction.Com",
        "date": "2026-03-31"
      },
      {
        "title": "National Pro-Life Scorecard",
        "url": "https://sbaprolife.org/senator/roger-marshall",
        "publication": "Sbaprolife.Org",
        "date": "2026-03-31"
      },
      {
        "title": "On The Issues",
        "url": "https://www.ontheissues.org/house/Roger_Marshall_Principles_+_Values.htm",
        "publication": "Ontheissues.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Democrats Focus on Defeating Marshall",
        "url": "https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-focus-on-defeating-gop-incumbent/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CNN - Marshall and January 6",
        "url": "https://www.cnn.com/2021/05/03/politics/roger-marshall-january-6-cnn-big-lie",
        "publication": "Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CBS News - Fauci Hot Mic",
        "url": "https://www.cbsnews.com/news/anthony-fauci-roger-marshall-hot-mic-moron/",
        "publication": "Cbsnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Marshall COVID Positions",
        "url": "https://www.kcur.org/news/2021-08-26/kansas-senator-roger-marshall-is-a-doctor-but-his-covid-19-advice-doesnt-always-sound-like-it",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Oakley Town Hall",
        "url": "https://kansasreflector.com/2025/03/05/marshall-says-paid-agitators-swamped-kansas-forum-if-he-proves-it-ill-eat-a-copy-of-project-2025/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Yahoo News - Florida Property Controversy",
        "url": "https://www.yahoo.com/news/roger-marshall-calls-kansas-cabin-160558825.html",
        "publication": "Yahoo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Moran/Marshall Ukraine Aid Split",
        "url": "https://kansasreflector.com/briefs/moran-marshall-diverge-on-95-billion-ukraine-israel-aid-passed-by-congress/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jason Hart - hartforsenate.com",
        "url": "https://hartforsenate.com/",
        "publication": "Hartforsenate.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Patrick Schmidt - patrickforkansas.com",
        "url": "https://patrickforkansas.com/",
        "publication": "Patrickforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Christy Cauble Davis - christydavisforkansas.com",
        "url": "https://www.christydavisforkansas.com/",
        "publication": "Christydavisforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sandy Spidel Neumann - sandyforkansas.com",
        "url": "https://sandyforkansas.com/",
        "publication": "Sandyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Erik Murray - erikforkansas.com",
        "url": "https://erikforkansas.com/",
        "publication": "Erikforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Anne Parelkar - anneforkansas.com",
        "url": "https://www.anneforkansas.com/",
        "publication": "Anneforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Quiver Quantitative - Financial Disclosure",
        "url": "https://www.quiverquant.com/news/Senator+Roger+Marshall+has+filed+a+new+financial+disclosure+-+here%E2%80%99s+what+we+see",
        "publication": "Quiverquant.Com",
        "date": "2026-03-31"
      },
      {
        "title": "GovTrack 2024 Report Card",
        "url": "https://www.govtrack.us/congress/members/roger_marshall/412704/report-card/2024",
        "publication": "Govtrack.Us",
        "date": "2026-03-31"
      },
      {
        "title": "Heritage Action Scorecard 118",
        "url": "https://heritageaction.com/scorecard/members/M001198/118",
        "publication": "Heritageaction.Com",
        "date": "2026-03-31"
      },
      {
        "title": "On the Issues - Gun Control",
        "url": "https://www.ontheissues.org/house/Roger_Marshall_Gun_Control.htm",
        "publication": "Ontheissues.Org",
        "date": "2026-03-31"
      },
      {
        "title": "On the Issues - Immigration",
        "url": "https://www.ontheissues.org/house/Roger_Marshall_Immigration.htm",
        "publication": "Ontheissues.Org",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - Gun Grabbing Scheme vote",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-votes-against-gun-grabbing-scheme/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "propublica.org/politwoops/user/RogerMarshallMD",
        "url": "https://projects.propublica.org/politwoops/user/RogerMarshallMD",
        "publication": "Projects.Propublica.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Twitter/X - @RogerMarshallMD",
        "url": "https://x.com/RogerMarshallMD",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Stand With Crypto - Roger Marshall",
        "url": "https://www.standwithcrypto.org/politicians/person/roger---marshall",
        "publication": "Standwithcrypto.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Cowardly",
        "url": "https://kansasreflector.com/2025/03/03/cowardly-roger-marshall-claims-real-kansans-love-trump-and-doge-we-know-otherwise/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Paid Operatives",
        "url": "https://www.kcur.org/2025-03-07/roger-marshall-called-them-paid-democratic-operatives-they-say-theyre-just-concerned-kansans",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH - Town Hall",
        "url": "https://www.kwch.com/2025/03/02/constituents-direct-questions-senator-roger-marshall-town-hall-which-he-ends-early/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Daily Beast - Backtracks Iran",
        "url": "https://www.thedailybeast.com/maga-senator-embarrassingly-backtracks-on-strike-comments/",
        "publication": "Thedailybeast.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Healthgrades - Dr. Roger Marshall",
        "url": "https://www.healthgrades.com/physician/dr-roger-marshall-ydm6m",
        "publication": "Healthgrades.Com",
        "date": "2026-03-31"
      },
      {
        "title": "US News - Dr. Roger Marshall",
        "url": "https://health.usnews.com/doctors/roger-marshall-279058",
        "publication": "Health.Usnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Doximity - Dr. Roger Marshall",
        "url": "https://www.doximity.com/pub/roger-marshall-md",
        "publication": "Doximity.Com",
        "date": "2026-03-31"
      },
      {
        "title": "accountability.gop/profile/sen-roger-marshall",
        "url": "https://accountability.gop/profile/sen-roger-marshall/",
        "publication": "Accountability.Gop",
        "date": "2026-03-31"
      },
      {
        "title": "insurrectionexposed.org/marshall-roger",
        "url": "https://insurrectionexposed.org/marshall-roger/",
        "publication": "Insurrectionexposed.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB - Kansas politicians join Hawley",
        "url": "https://www.kshb.com/news/local-news/senator-elect-roger-marshall-joins-hawley-in-plans-to-object-electoral-college-vote",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fox4KC - Acknowledges Biden",
        "url": "https://fox4kc.com/news/senator-roger-marshall-acknowledges-biden-victory-after-objecting-to-electoral-votes/",
        "publication": "Fox4kc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CNN - Big Lie, Move On",
        "url": "https://amp.cnn.com/cnn/2021/05/03/politics/roger-marshall-january-6-cnn-big-lie/",
        "publication": "Amp.Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Newsweek - So Ready to Move On",
        "url": "https://www.newsweek.com/gop-senator-roger-marshall-objecting-2020-election-results-so-ready-move-1588113",
        "publication": "Newsweek.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - Counting of Electoral Votes",
        "url": "https://ballotpedia.org/Counting_of_electoral_votes_(January_6-7,_2021",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Newsweek - Fauci Moron Response",
        "url": "https://www.newsweek.com/roger-marshall-responds-fauci-calling-him-moron-1668391",
        "publication": "Newsweek.Com",
        "date": "2026-03-31"
      },
      {
        "title": "The Hill - Fauci Spars",
        "url": "https://thehill.com/homenews/senate/589249-hot-mic-catches-fauci-calling-gop-senator-a-moron/",
        "publication": "Thehill.Com",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - Fauci Response",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-responds-to-dr-fauci-hot-mic-situation/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - FAUCI Lied",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/breaking-sen-marshall-proves-fauci-lied-by-obtaining-previously-unpublished-financial-records/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - Vaccine Transparency",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-we-are-fighting-for-vaccine-transparency/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Rolling Stone - FAUCI Act",
        "url": "https://www.rollingstone.com/politics/politics-news/fauci-act-roger-marshall-anthony-fauci-moron-argument-1284867/",
        "publication": "Rollingstone.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KMUW - Opens Arms to Republicans",
        "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
        "publication": "Kmuw.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Democratic Candidate",
        "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Democrats Sharpen Attack",
        "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Kansas City Entrepreneur",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia - 2026 KS Senate Election",
        "url": "https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Kansas",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - KS 2026 Senate",
        "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "ballotpedia.org/EndorsementsbyRoger_Marshall",
        "url": "https://ballotpedia.org/Endorsements_by_Roger_Marshall",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Washington Examiner - Trump Endorsement Tracker",
        "url": "https://www.washingtonexaminer.com/news/campaigns/4460164/trump-endorsement-tracker-gop-2026-election-primaries/",
        "publication": "Washingtonexaminer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KAKE - Files for Re-election",
        "url": "https://www.kake.com/home/senator-roger-marshall-files-for-re-election/article_5845f418-b2ea-42e0-804e-a035d83f76b5.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CU Today - Credit Card Bill + Trump",
        "url": "https://www.cutoday.info/Fresh-Today/With-Trump-s-Endorsement-Marshall-s-Credit-Card-Bill-May-Suddenly-Have-New-Life-On-Capitol-Hill",
        "publication": "Cutoday.Info",
        "date": "2026-03-31"
      },
      {
        "title": "Durbin/Marshall - Credit Card Competition Act",
        "url": "https://www.durbin.senate.gov/newsroom/press-releases/durbin-marshall-reintroduce-the-credit-card-competition-act",
        "publication": "Durbin.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov - Credit Card Competition Act",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/marshall-durbin-reintroduce-credit-card-competition-act-backed-by-president-trump/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "marshall.senate.gov press release, March 28, 2026",
        "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-praises-trump-admins-historic-renewable-fuel-standard-rule/",
        "publication": "Marshall.Senate.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Mediaite",
        "url": "https://www.mediaite.com/media/news/republican-senator-says-i-was-wrong-when-confronted-with-past-claim-about-iran/",
        "publication": "Mediaite.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Breitbart, March 11, 2026",
        "url": "https://www.breitbart.com/clips/2026/03/11/gop-sen-marshall-i-was-wrong-irans-program-wasnt-set-back-years-by-midnight-hammer/",
        "publication": "Breitbart.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CNN Fauci confrontation video",
        "url": "https://www.cnn.com/videos/politics/2022/01/12/fauci-calls-marshall-moron-financial-disclosures-mh-orig.cnn",
        "publication": "Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LegiStorm - Financial Disclosures",
        "url": "https://www.legistorm.com/memberdisclosure/3141/Sen_Roger_Marshall.html",
        "publication": "Legistorm.Com",
        "date": "2026-03-31"
      },
      {
        "title": "OpenSecrets - Personal Finances",
        "url": "https://www.opensecrets.org/personal-finances/roger-marshall/reports?cid=N00037034",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Finbold - Net Worth",
        "url": "https://finbold.com/guide/roger-marshall-net-worth/",
        "publication": "Finbold.Com",
        "date": "2026-03-31"
      },
      {
        "title": "OpenSecrets - Assets",
        "url": "https://www.opensecrets.org/personal-finances/roger-marshall/assets?cid=N00037034",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "jason-hart",
    "name": "Jason Hart",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "U.S. Senate candidate",
    "hometown": "Wichita, KS",
    "family": "Married with family. Describes himself as a husband and father.",
    "campaignWebsite": "https://hartforsenate.com",
    "whoTheyAre": "Education: Juris Doctor, University of Kansas School of Law.\n\nCareer Timeline:.\n\nPracticed law in Dodge City, Kansas (early career, several years).\n\nShawnee County District Attorney's Office.",
    "theirRecord": "Tariffs: Opposes current tariff policies, says \"Kansas families are paying the price for unfair tariffs.\n\nCorporate taxes: Wants corporations to \"pay their fair share\" and close loopholes.\n\nSmall business: Supports reducing costs for working families and small businesses.\n\nImmigration: Has spoken about immigration policy (details from Kansas Democrats immigration forum).",
    "whatYouShouldKnow": [
      "Strengths: The strongest biographical story in the field. A career prosecutor who protected children from predators for 21 years is extraordinarily hard to attack. His party-switching story (independent -> Republican -> Democrat) could genuinely appeal to crossover voters. The \"law enforcement Democrat\" archetype has worked in red states before. Weaknesses: Entered late (March 2026). No campaign manager. No fundraising infrastructure. No political experience whatsoever. The party-switching could be spun as indecisive",
      "Hart is the most unconventional candidate in the Democratic primary. A career federal prosecutor who switched parties twice in one month, running on a blunt \"electability\" argument centered on his identity as a straight white Christian male in Kansas. His wife's quip has become his most quoted line. His lack of political experience or campaign infrastructure is either refreshingly authentic or dangerously unprepared -- depends on the voter. His 21-year record prosecuting child predators is his strongest credential",
      "The two party switches in one month are the most obvious vulnerability",
      "His \"straight, white, Christian man\" framing is a memorable electability claim but can also alienate Democratic voters",
      "No campaign manager was identified in the available reporting"
    ],
    "whereTheyWorship": "Publicly self-identifies as Christian.\n\nNo denomination or church affiliation was publicly verified in the accessible research trail.",
    "quotes": [
      {
        "text": "There are many Republicans who are in the wilderness right now.",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I ask people questions for a living.",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "white, male, Christian, hetero, 2A-friendly, LEO-friendly",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "prayerful and tearful discussions with my wife and family",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "straight, white, Christian man",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "prayerful and tearful discussions",
        "source": "Jason Hart research file",
        "date": "2026-03-31",
        "url": "https://hartforsenate.com/",
        "topic": "JASON HART"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Public FEC page was not surfaced with a clean totals summary in the accessible research trail.\n\nCampaign website: https://hartforsenate.com/.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hartforsenate.Com",
        "url": "https://hartforsenate.com/",
        "publication": "Hartforsenate.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kmuw.Org",
        "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
        "publication": "Kmuw.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Justice.Gov",
        "url": "https://www.justice.gov/archive/usao/ks/PressReleases/2012/Nov%202012/Nov29a.html",
        "publication": "Justice.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Secure.Actblue.Com",
        "url": "https://secure.actblue.com/donate/jason-hart",
        "publication": "Secure.Actblue.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Avvo: Jason Hart profile",
        "url": "https://www.avvo.com/attorneys/67202-ks-jason-hart-1922169.html",
        "publication": "Avvo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "DOJ: Cases prosecuted by Hart",
        "url": "https://www.justice.gov/usao-ks/pr/kansas-man-sentenced-480-months-production-child-porn",
        "publication": "Justice.Gov",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "patrick-schmidt",
    "name": "Patrick Schmidt",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "State Senator / Navy Veteran",
    "born": "Overland Park, Kansas",
    "hometown": "Represents Shawnee and Douglas County (Lawrence/Topeka area)",
    "education": "Born: Overland Park, Kansas",
    "family": "Not detailed",
    "campaignWebsite": "https://patrickforkansas.com/",
    "whoTheyAre": "Born: Overland Park, Kansas.\n\n6th-generation Kansan -- family includes six generations of farmers, miners, and teachers.\n\nParents: Both public school teachers; mother worked retail as second job, father did custom harvesting with family business and later tutoring.\n\nHigh School: Grew up in Overland Park area.",
    "theirRecord": "Property tax relief (core issue).\n\nRural healthcare access.\n\nPublic education funding.\n\nVeterans' issues.",
    "whatYouShouldKnow": [
      "Strengths: Only sitting elected official in the field. Military/intelligence background is extremely strong in Kansas (national security, patriotism, discipline). Tufts education shows intellectual caliber. Young and recently elected -- has momentum. State Senate experience, however brief, means he actually has a voting record to run on. Weaknesses: Only been in the state Senate since January 2025 -- barely a year. Running for U.S. Senate from a state Senate seat elected less than two years prior could look overly ambitious. May not have significant fundraising yet",
      "Schmidt is the only Democratic candidate currently holding elected office, which gives him a legislative record to run on (or defend). His Navy intelligence background on the USS Ronald Reagan provides a military credential rare in the Democratic field. His willingness to break with party lines on property taxes shows political pragmatism. The January 6 motivation for entering politics is sincere but may alienate some Kansas voters who view that framing as partisan. He is arguably the strongest institutional candidate in the Democratic primary",
      "His Senate campaign began very soon after his first state-senate term started, which some voters may see as ambitious",
      "Because he is the only elected official in the primary, he will be the default establishment candidate by many observers",
      "The main challenge is less scandal than timing: he has to prove he is more than a short-tenure officeholder with a fast jump to higher office"
    ],
    "whereTheyWorship": "No public church affiliation was verified in the accessible research trail.\n\nPublic materials emphasize family and Kansas values more than explicit faith language.",
    "quotes": [
      {
        "text": "Patrick Schmidt is a former U.S. Naval Intelligence Officer running to represent Kansas in the US Senate",
        "source": "Patrick Schmidt research file",
        "date": "2026-03-31",
        "url": "https://patrickforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Patrick will be guided by the family values he learned from his mother, his father, and the generations of Kansans who came before him",
        "source": "Patrick Schmidt research file",
        "date": "2026-03-31",
        "url": "https://patrickforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "defending U.S. interests from China and Russia",
        "source": "Patrick Schmidt research file",
        "date": "2026-03-31",
        "url": "https://patrickforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00288/?cycle=2026&election_full=true.\n\nFEC currently shows the filing, but no 2025-2026 totals yet in the accessible summary view.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Patrickforkansas.Com",
        "url": "https://patrickforkansas.com/",
        "publication": "Patrickforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Patrickforkansas.Com",
        "url": "https://patrickforkansas.com/about/",
        "publication": "Patrickforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kssenatedems.Org",
        "url": "https://www.kssenatedems.org/patrick-schmidt",
        "publication": "Kssenatedems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00288/?cycle=2026&election_full=true",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H2KS02143/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Patrick_Schmidt",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Com",
        "url": "https://www.kansas.com/news/politics-government/election/article",
        "publication": "Kansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook - @patrickforkansas",
        "url": "https://www.facebook.com/patrickforkansas/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Patrick Schmidt - Kansas Legislature",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Patrick Schmidt - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Patrick_Schmidt_(politician",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW - State Senator Files for U.S. Senate (Feb 2026)",
        "url": "https://www.wibw.com/2026/02/05/kansas-state-senator-files-us-senate/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Freshman senator",
        "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Senator files for U.S. Senate",
        "url": "https://www.kwch.com/2026/02/05/kansas-state-senator-files-us-senate/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LegiScan: Schmidt sponsored bills",
        "url": "https://legiscan.com/KS/people/patrick-schmidt/id/26167",
        "publication": "Legiscan.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "christy-cauble-davis",
    "name": "Christy Cauble Davis",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "Rural Development Administrator",
    "born": "Kansas. Fifth-generation Kansan.",
    "hometown": "Cottonwood Falls, KS (Chase County -- deep rural Kansas, population ~900)",
    "education": "Born: Sedgwick, Kansas",
    "family": "Not detailed in available sources",
    "campaignWebsite": "https://www.christydavisforkansas.com/",
    "whoTheyAre": "Born: Sedgwick, Kansas.\n\n5th-generation Kansan.\n\nHigh School: Sedgwick High School.\n\nBachelor's degree: Kansas State University, 1997.",
    "theirRecord": "Expanding access to rural healthcare.\n\nFunding strong public schools.\n\nImmigration reform that works for families and agriculture.\n\nRebuilding reasonable economic policies.",
    "whatYouShouldKnow": [
      "Strengths: Deepest rural Kansas credentials. Actually lives in Chase County. The USDA role gives her tangible accomplishments to point to ($1.3B in Kansas investment). Fifth-generation Kansan story is powerful in a state where rootedness matters. Weaknesses: Lost her only previous campaign (2020 KS-1 primary). The USDA role ties her directly to Biden, which is a liability in Kansas. Immigration platform (pathway to citizenship) may be too progressive for Kansas general election voters. The NRSC disclosure complaint, while procedural, gives opponents ammunition",
      "Davis has the deepest rural Kansas credentials in the Democratic primary. A 5th-generation Kansan who actually lives in the Flint Hills (population ~2,800 in Chase County), she's the anti-Overland Park candidate. Her USDA appointment under Biden gives her federal experience and a $1.3 billion Kansas investment talking point. The historic building restorations in Cottonwood Falls show she practices what she preaches about rural community investment. Her vulnerability is being tied to the Biden administration in a state Trump won by 14+ points",
      "The NRSC complaint named her for a late personal financial disclosure filing",
      "Her prior 2020 congressional primary loss is the main political headwind",
      "The Biden USDA association is a likely general-election attack line, even though it is also the source of her strongest resume item"
    ],
    "whereTheyWorship": "No church affiliation or congregation was publicly verified in the accessible research trail.\n\nNot identified in public records. No church affiliation found.",
    "quotes": [
      {
        "text": "It's time for Kansas to have a Senator who shows up.",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "url": "https://www.christydavisforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Kansans are uniquely equipped to tackle national challenges.",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "url": "https://www.christydavisforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Rooted in Kansas. Ready to Rebuild.",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "url": "https://www.christydavisforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "steeped in the politics of incumbency",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "url": "https://www.christydavisforkansas.com/",
        "topic": "CHRISTY CAUBLE DAVIS"
      },
      {
        "text": "Fight for immigration reform that provides a pathway to citizenship and ends inhumane policies that terrorize families and unconstitutionally deprive Kansans of due process",
        "source": "Christy Cauble Davis research file",
        "date": "2026-03-31",
        "url": "https://www.christydavisforkansas.com/",
        "topic": "CHRISTY CAUBLE DAVIS"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00247/.\n\nCommittee page: https://www.fec.gov/data/committee/C00915934/.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Christydavisforkansas.Com",
        "url": "https://www.christydavisforkansas.com/",
        "publication": "Christydavisforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Emporiagazette.Com",
        "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
        "publication": "Emporiagazette.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00247/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00915934/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Christydavisforkansas.Com",
        "url": "https://www.christydavisforkansas.com/post/christy-davis-launches-campaign-for-u-s-senate-it-s-time-for-kansas-to-have-a-senator-who-shows-u",
        "publication": "Christydavisforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Christy_Davis",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Christy Cauble Davis",
        "url": "https://www.facebook.com/christy.davis.710/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Christy Davis - Davis Preservation",
        "url": "https://www.linkedin.com/in/christy-davis-19286b224/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "USDA: KS State Director announcement",
        "url": "https://www.rd.usda.gov/newsroom/news-release/usda-announces-rural-development-state-director-kansas",
        "publication": "Rd.Usda.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart: Davis biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/192415/christy-cauble-davis",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "American Coin-Op: Clean History laundromat",
        "url": "https://americancoinop.com/articles/clean-history-laundromat-anchors-kansas-town",
        "publication": "Americancoinop.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "sandy-spidel-neumann",
    "name": "Sandy Spidel Neumann",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "U.S. Senate candidate",
    "born": "Near Topeka. Grew up in Overland Park.",
    "hometown": "Mission, KS (Johnson County -- suburban Kansas City)",
    "education": "Born: Near Topeka, Kansas",
    "family": "Not detailed in available sources.",
    "campaignWebsite": "https://sandyforkansas.com/",
    "whoTheyAre": "Born: Near Topeka, Kansas.\n\nRaised: Overland Park, Johnson County.\n\nHigh School: Shawnee Mission North -- standout student and athlete.\n\nGirls Nation: Represented Kansas at Girls Nation (American Legion program), where she first declared her dream to serve in the U.S. Senate.",
    "theirRecord": "Opposes tariffs harmful to Kansas farmers.\n\nOpposes Medicaid cuts threatening rural hospitals.\n\nLowering costs for families.\n\nFighting for farmers.",
    "whatYouShouldKnow": [
      "Strengths: Impressive resume (U of C + Northwestern + 22 years at Ameriprise). Financial expertise is relevant to economic messaging. Johnson County base is where Democratic votes are concentrated. Likely has personal wealth to self-fund. Weaknesses: Zero political experience. Lives in Johnson County, not rural Kansas -- makes \"fighting for farmers\" claim feel less authentic compared to Davis. 120+ donations to Democrats makes her a clear partisan in a state where crossover appeal is essential. No known endorsements",
      "Spidel Neumann brings the strongest corporate resume in the field -- 22 years as an Ameriprise executive with a UChicago/Kellogg pedigree. The Girls Nation story is a compelling narrative arc (dreaming of the Senate as a teenager). However, she's been away from Kansas for decades, only returning in summer 2025 -- a potential \"carpetbagger\" vulnerability. She's never held elected office. Her Johnson County base is the Democratic stronghold in Kansas, but that also means she'll compete with Murray and Parelkar for those same metro voters",
      "The NRSC complaint named her for a late personal financial disclosure filing",
      "She has no prior elected experience, which is both a freshness advantage and a credibility risk",
      "Her Johnson County base overlaps with other Democratic hopefuls, especially Anne Parelkar and Erik Murray"
    ],
    "whereTheyWorship": "No church affiliation was publicly verified in the accessible research trail.\n\nNot identified in public records.",
    "quotes": [
      {
        "text": "Let's Get to Work, Kansas.",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://sandyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "everyone deserves a fair shot",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://sandyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "the big abomination of a bill",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://sandyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "big abomination of a bill",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://sandyforkansas.com/",
        "topic": "SANDY SPIDEL NEUMANN"
      },
      {
        "text": "I know how the economy works",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://sandyforkansas.com/",
        "topic": "SANDY SPIDEL NEUMANN"
      },
      {
        "text": "would be a good first step because health care is a significant concern in rural Kansas.",
        "source": "Sandy Spidel Neumann research file",
        "date": "2026-03-31",
        "url": "https://sandyforkansas.com/",
        "topic": "SANDY SPIDEL NEUMANN"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00262/.\n\nCommittee page: https://www.fec.gov/data/committee/C00923474/.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Sandyforkansas.Com",
        "url": "https://sandyforkansas.com/",
        "publication": "Sandyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00262/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00923474/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Sandy_Spidel_Neumann",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@speumann",
        "url": "https://x.com/speumann",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@speumann",
        "url": "https://www.instagram.com/speumann/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@speumann",
        "url": "https://www.threads.com/@speumann",
        "publication": "Threads.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post photo",
        "url": "https://johnsoncountypost.com/2026/01/07/2026-u-s-senate-candidates-kansas-277190/sandy-spidel-neumann/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "erik-murray",
    "name": "Erik Murray",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "Attorney / Public Servant",
    "born": "Kansas City, Kansas. Attended Sumner Academy (magnet high school).",
    "hometown": "Kansas City, Kansas (Wyandotte County)",
    "education": "Born: KU Medical Center, Kansas City, KS",
    "family": "Married to Nicole. Lives in Wyandotte County.",
    "campaignWebsite": "https://erikforkansas.com/",
    "whoTheyAre": "Born: KU Medical Center, Kansas City, KS.\n\nRaised: Kansas City, KS.\n\nChildhood faith: Attended Fellowship Christian Church with his grandmother; also attended St. Patrick's Catholic School.\n\nHigh School: Sumner Academy of Arts and Science, Class of 2000 (magnet school in KCK).",
    "theirRecord": "Lowering costs for starting and running small businesses.\n\nSupports Opportunity Zones program (tax incentives for investment in distressed areas).\n\nHealthcare accessibility.\n\nTouring all 105 Kansas counties (\"Heart of America tour\").",
    "whatYouShouldKnow": [
      "Strengths: The $1 billion development project is the most tangible \"job creator\" credential in the field. Wyandotte County is a diverse, working-class base. The 105-county tour shows genuine effort. Weaknesses: The Elaine Brown story is a massive liability. Spent a decade in California (Oakland/San Francisco) -- Kansas voters may view him as a California transplant. Recently returned (2023). The development project has had disputes with the Unified Government of Wyandotte County over the plan, per KSHB reporting",
      "Murray is the most complex candidate in the field. A KCK native with legitimate deep roots (Sumner Academy multigenerational), elite real estate credentials (CCIM/SIOR), and a nearly $1 billion redevelopment project in his hometown. But the decade in Oakland, the cannabis industry work, and especially the Elaine Brown quote create a massive vulnerability in Kansas. He's essentially running on the narrative that leaving Kansas and coming back made him better -- a risky pitch in a state that values people who stayed. The Free Beacon hit piece was the first real opposition research deployed against any Democratic candidate in this race",
      "The Elaine Brown/Black Panther line is the main general-election liability and a ready-made opposition-ad line",
      "He also faces the familiar Kansas attack that he spent a decade in California before returning",
      "His redevelopment project has had disputes with the local government, which gives opponents a governance angle"
    ],
    "whereTheyWorship": "No current church affiliation was publicly verified.\n\nChildhood background in the file points to Fellowship Christian Church and St. Patrick's Catholic School, but that is background rather than a current congregation.",
    "quotes": [
      {
        "text": "between what capital wants and what community wants",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "politician-created problems",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "It'll change some wiring in your brain.",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "attuned to the disconnect between what capital wants and what community wants.",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://erikforkansas.com/",
        "topic": "ERIK MURRAY"
      },
      {
        "text": "are tearing apart the fabric of our communities.",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://erikforkansas.com/",
        "topic": "ERIK MURRAY"
      },
      {
        "text": "Politician-created problems, such as tariffs and tax policies that benefit billionaires, are tearing apart the fabric of our communities.",
        "source": "Erik Murray research file",
        "date": "2026-03-31",
        "url": "https://erikforkansas.com/",
        "topic": "ERIK MURRAY"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00270/.\n\nCommittee page: https://www.fec.gov/data/committee/C00929240/.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Freebeacon.Com",
        "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
        "publication": "Freebeacon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00270/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00929240/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Erikforkansas.Com",
        "url": "https://erikforkansas.com/",
        "publication": "Erikforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Erikforkansas.Com",
        "url": "https://erikforkansas.com/meet-erik/",
        "publication": "Erikforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflowerstatejournal.Com",
        "url": "https://sunflowerstatejournal.com/kck-developer-announces-for-u-s-senate-as-democratic-primary-grows-to-five/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/erikmurraysior",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Erik Murray - Ballotpedia",
        "url": "https://ballotpedia.org/Erik_Murray",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Erik Murray for Kansas",
        "url": "https://www.facebook.com/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@erik.murray.820582",
        "url": "https://www.facebook.com/erik.murray.820582/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@erik4ks",
        "url": "https://www.instagram.com/erik4ks/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "AfroTech: Oak Impact Group",
        "url": "https://afrotech.com/erik-murray-oakland-impact-group",
        "publication": "Afrotech.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Guide to candidates",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KSN: Missing financial disclosures",
        "url": "https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/",
        "publication": "Ksn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "GEN Global: Erik Murray",
        "url": "https://www.genglobal.org/user/erik",
        "publication": "Genglobal.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Len's Political Notes #792",
        "url": "https://lenspoliticalnotes.com/lens-political-note-792-erik-murray-kansas-us-senate/",
        "publication": "Lenspoliticalnotes.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "anne-parelkar",
    "name": "Anne Parelkar",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "Community Advocate",
    "hometown": "Overland Park, KS (Johnson County)",
    "education": "Born: Pine Bluff, Arkansas",
    "family": "Wants to create \"a single consolidated program\" to provide healthcare to people under 18, simplifying coverage and ensuring children have access regardless of family circumstances.",
    "campaignWebsite": "https://www.anneforkansas.com/",
    "whoTheyAre": "Born: Pine Bluff, Arkansas.\n\nRaised: White Hall, Arkansas.\n\nHigh School: White Hall High School, Class of 2001.\n\nCollege: Lyon College, Batesville, Arkansas -- BA in History, Political Science minor, Secondary Education concentration.",
    "theirRecord": "Immigration reform (core issue, professional expertise).\n\nChildren's healthcare: Proposes a \"single consolidated program\" for health care for people under 18, replacing the patchwork of Medicaid, CHIP, and other programs.\n\nAntitrust and consumer protection: Stronger laws to protect consumers.\n\nFirst-time candidate bringing professional expertise to broken federal systems.",
    "whatYouShouldKnow": [
      "Strengths: Immigration expertise is distinctive and timely. Children's healthcare is universally popular. Licensed in three states suggests serious professional accomplishment. Weaknesses: No campaign website found. No political experience. Immigration is a toxic issue for Democrats in Kansas -- being THE immigration candidate in a red state is a significant liability. Overland Park residence means she competes with Neumann for the same Johnson County base",
      "Parelkar is the only immigration attorney in the field, giving her unique professional credibility on an issue that dominates Kansas politics. However, she's not from Kansas -- born and raised in Arkansas, moved to Kansas through marriage. In a field where \"5th-generation Kansan\" and \"6th-generation Kansan\" are common descriptors, her transplant status is a weakness. Her children's healthcare consolidation proposal is the most specific policy proposal from any Democratic candidate. The Overland Park base puts her in the same Johnson County lane as Spidel Neumann and Murray",
      "The NRSC complaint named her for a late personal financial disclosure filing",
      "Immigration is a tougher issue for Democrats in Kansas than for some of the other candidates, making her professional specialty both a strength and a liability",
      "She competes for the same Johnson County lane as Sandy Spidel Neumann"
    ],
    "whereTheyWorship": "No church affiliation was publicly verified in the accessible research trail.\n\nNot identified in public records.",
    "quotes": [
      {
        "text": "We have a very big problem with immigration in our country right now.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "a single consolidated program",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "answer to the people. Not to party leaders. Not to political donors. Just to the people.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "a patchwork of options like Medicaid and CHIP.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "url": "https://www.anneforkansas.com/",
        "topic": "ANNE PARELKAR"
      },
      {
        "text": "We have a very big problem with immigration in our country right now, in the sense that there's a lot of confusion over it.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "topic": "ANNE PARELKAR"
      },
      {
        "text": "a solution, not another problem.",
        "source": "Anne Parelkar research file",
        "date": "2026-03-31",
        "topic": "ANNE PARELKAR"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S6KS00239/.\n\nCommittee page: https://www.fec.gov/data/committee/C00913293/?cycle=2026.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Anneforkansas.Com",
        "url": "https://www.anneforkansas.com/",
        "publication": "Anneforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S6KS00239/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/committee/C00913293/?cycle=2026",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "1350kman.Com",
        "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/",
        "publication": "1350kman.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Anne_Parelkar",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Immirail.Com",
        "url": "https://immirail.com/profile-anne-lea-parelkar",
        "publication": "Immirail.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/in/anne-lea-parelkar-83095659/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector podcast interview",
        "url": "https://kansasreflector.com/podcasts/anne-parelkar-latest-democrat-running-for-kansas-u-s-senate-seat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "anneforkansas.com/about",
        "url": "https://www.anneforkansas.com/about",
        "publication": "Anneforkansas.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "michael-soetaert",
    "name": "Michael Soetaert",
    "party": "D",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "City Council Member",
    "hometown": "Wellington, KS (Sumner County -- south-central Kansas)",
    "family": "Not detailed",
    "campaignWebsite": "https://mikeforkansas.my.canva.site",
    "whoTheyAre": "Born: Wellington, Kansas.\n\nFamily Heritage: Direct descendant of Constant Soetaert; knew great-grandfather Charles as a child. The Soetaert family includes former Wellington Mayor Tony Soetaert.\n\nAdoption: Given up for adoption at birth into a \"right wing, fundamentalist, Roman Catholic family\" (pre-Roe v. Wade).\n\nFather's career: Vice President of Coca-Cola Mid-America; previously part of NASA Mission Control for the first 16 Apollo missions.",
    "theirRecord": "LGBTQ+ rights champion: Supports the Equality Act and the Respect for Marriage Act.\n\nFirst openly gay Kansas Senate candidate -- frames candidacy around representation.",
    "whatYouShouldKnow": [
      "Strengths: Rural Kansas location (Wellington). Former Republican -- could theoretically speak to party-switchers. Historical significance as first openly gay Senate candidate in Kansas. Weaknesses: Serial candidate who has lost multiple races. Canva-hosted website suggests minimal resources. No clear policy platform visible. The party-switching (R to D) combined with multiple failed campaigns suggests someone searching for a lane rather than someone with a clear mission",
      "Soetaert is a serial candidate with no viable path to the nomination. He has run for six different offices across seven years, winning only a Wellington city council seat that he resigned from after two meetings. The pattern of running, losing, and running again for progressively higher offices -- while simultaneously being unable to hold the one office he won -- is disqualifying for most voters. His historic significance as the first openly gay Kansas Senate candidate is genuine. But this is his fourth attempt at federal office. His multiple campaign websites (at least four different domains) suggest organizational chaos",
      "Multiple failed campaigns across different offices and parties make him a textbook perennial candidate",
      "His platform shifts on abortion and marriage are real and public, but they also invite scrutiny from both parties",
      "The free Canva website is a visible signal of minimal campaign infrastructure"
    ],
    "whereTheyWorship": "Publicly described as Christian, with a Roman Catholic adoptive-family background in the file.\n\nNo current church affiliation was publicly verified.",
    "quotes": [
      {
        "text": "Michael 'Mike' Soetaert is ONE of TWO DEMOCRATIC candidates",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://secure.actblue.com/donate/michael-soetaert",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Kansans voted for bodily autonomy",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://secure.actblue.com/donate/michael-soetaert",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "first openly gay candidate to run for U.S. Senate in Kansas",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://secure.actblue.com/donate/michael-soetaert",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "various local, state and federal offices",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://mikeforkansas.my.canva.site/",
        "topic": "MICHAEL SOETAERT"
      },
      {
        "text": "run for various local, state and federal offices",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://mikeforkansas.my.canva.site/",
        "topic": "MICHAEL SOETAERT"
      },
      {
        "text": "right wing, fundamentalist, Roman Catholic family",
        "source": "Michael Soetaert research file",
        "date": "2026-03-31",
        "url": "https://replacejerrymoran.org/",
        "topic": "MICHAEL SOETAERT (D) -- Wellington"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/S2KS00097/.\n\nCurrent FEC summary view shows the filing but no 2025-2026 totals yet in the accessible page text.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Secure.Actblue.Com",
        "url": "https://secure.actblue.com/donate/michael-soetaert",
        "publication": "Secure.Actblue.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Mikeforkansas.My.Canva.Site",
        "url": "https://mikeforkansas.my.canva.site/",
        "publication": "Mikeforkansas.My.Canva.Site",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/S2KS00097/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Michael_Soetaert",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Cityofwellington.Net",
        "url": "https://www.cityofwellington.net/newsview.aspx?nid=6940",
        "publication": "Cityofwellington.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kake.Com",
        "url": "https://www.kake.com/kansas-senate-candidate-shows-support-for-respect-for-marriage-act/article_7d6721ed-79ed-52f2-8765-2e521ef88df5.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "michael.soetaert1",
        "url": "https://www.facebook.com/michael.soetaert1/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "replacejerrymoran.org",
        "url": "https://replacejerrymoran.org/",
        "publication": "Replacejerrymoran.Org",
        "date": "2026-03-31"
      },
      {
        "title": "mike4kansas.org",
        "url": "https://mike4kansas.org/",
        "publication": "Mike4kansas.Org",
        "date": "2026-03-31"
      },
      {
        "title": "mikeforkansas.net",
        "url": "https://mikeforkansas.net/",
        "publication": "Mikeforkansas.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart: Soetaert biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/192430/michael-soetaert",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Sumner NewsCow: Council resignation",
        "url": "https://www.sumnernewscow.com/wellington-city-council-accepts-michael-mike-soetaerts-resignation-at-tuesdays-meeting/",
        "publication": "Sumnernewscow.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "chase-laporte",
    "name": "Chase LaPorte",
    "party": "R",
    "position": "U.S. Senate candidate",
    "electionSlug": "us-senate-2026",
    "incumbent": false,
    "occupation": "Army Veteran / Business Administrator",
    "born": "Carthage, Missouri",
    "campaignWebsite": "https://www.laporte4ksgov.com/",
    "whoTheyAre": "Born: Carthage, Missouri.\n\nU.S. Army: Served 2005-2013 (8 years active duty).\n\nEducation: Associate degree, Cowley County Community College, 2017.\n\nCareer: Business administrator (details limited).",
    "theirRecord": "Reducing government spending and inflation.\n\nTerm limits (cites George Washington).\n\nSmaller government (cites Ronald Reagan).\n\nLimited campaign materials available.",
    "whatYouShouldKnow": [
      "LaPorte is not a serious threat to Roger Marshall. He's a perennial candidate with limited resources, no dedicated Senate campaign website (his web presence is for a gubernatorial campaign), an associate degree from a community college, and a thin public record. Marshall will win this primary without breaking a sweat. LaPorte's value in the race is as a protest vote vehicle for any Republicans dissatisfied with Marshall -- but that number in Kansas is negligible",
      "He is widely described in the source material as a token or protest primary challenger rather than a serious threat",
      "He does not appear to have a dedicated Senate campaign website",
      "The limited finance and infrastructure trail makes him easy to ignore and easy to attack",
      "Like Soetaert on the Democratic side, LaPorte has run for multiple offices:"
    ],
    "whereTheyWorship": "No public church or faith affiliation was verified.",
    "quotes": [
      {
        "text": "LaPorte for a Brighter America",
        "source": "Chase LaPorte research file",
        "date": "2026-03-31",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Transparency in government keep officials accountable.",
        "source": "Chase LaPorte research file",
        "date": "2026-03-31",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I believe in maintaining a strong National Guard presence.",
        "source": "Chase LaPorte research file",
        "date": "2026-03-31",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC candidate page: https://www.fec.gov/data/candidate/H6KS03258/.\n\nFEC filing PDF: https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf.",
      "donors": [
        {
          "name": "A Kansas ethics report snippet in the research trail surfaced small donor entries, including Ty Masterson Carri Person $100, Joy Eakins $150, Kristina Smith $100, and Nancy Moneymaker $80.",
          "amount": "$2,500,"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Docquery.Fec.Gov",
        "url": "https://docquery.fec.gov/pdf/703/202509129790051703/202509129790051703.pdf",
        "publication": "Docquery.Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Opencampaign.Com",
        "url": "https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions",
        "publication": "Opencampaign.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fec.Gov",
        "url": "https://www.fec.gov/data/candidate/H6KS03258/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Docquery.Fec.Gov",
        "url": "https://docquery.fec.gov/pdf/488/202306099581781488/202306099581781488.pdf",
        "publication": "Docquery.Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia.Org",
        "url": "https://ballotpedia.org/Chase_LaPorte",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kcur.Org",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "laporte4ksgov.com",
        "url": "https://www.laporte4ksgov.com/",
        "publication": "Laporte4ksgov.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "colin-mcroberts",
    "name": "Colin McRoberts",
    "party": "D",
    "position": "U.S. House candidate, KS-01",
    "electionSlug": "ks-01-house-2026",
    "incumbent": false,
    "occupation": "Associate Teaching Professor of Law, University of Kansas School of Business",
    "hometown": "Lawrence, Kansas (Douglas County)",
    "education": "B.A. in International Studies, Trinity University, San Antonio, TX (2001)",
    "family": "A professor at the University of Kansas (scientist and bestselling author -- name not confirmed in sources); Yes, raised family in Lawrence (number not specified)",
    "campaignWebsite": "https://colinforkansas.com/",
    "whoTheyAre": "Party: Democrat.\n\nResidence: Lawrence, Kansas.\n\nSpouse: A professor at the University of Kansas (scientist and bestselling author -- name not confirmed in sources).\n\nChildren: Yes, raised family in Lawrence (number not specified).",
    "theirRecord": "On Tariffs & Agriculture:.\n\nReturn tariff power to Congress (away from executive branch).\n\nLegislate a small business exemption to tariffs allowing family farms to import items with no reasonable domestic substitute at reasonable cost.\n\nOpen foreign markets for American crops.",
    "whatYouShouldKnow": [
      "McRoberts is the more polished and better-resourced of the two Democratic candidates. He has a real professional pedigree (Harvard Law, international consulting, university professor), a clear campaign message centered on negotiation and deal-making, and came to the race with a viral moment (the Marshall town hall video). He is running a \"businessman, not politician\" campaign in a district where that frame has appeal. His weakness is that he lives in Lawrence, has no roots in western Kansas, and is running in a district where a Democrat hasn't won since 1952. The Cook PVI of R+16 means he would need roughly a 16-point swing from the national environment to even be competitive, which is historically unprecedented for this district",
      "Steptoe & Johnson LLP -- Commercial litigator after Harvard Law. Practiced commercial litigation, secured multimillion-dollar wins for clients. Fought in courtroom to protect family businesses from fraud",
      "Vasher McRoberts LLC -- Founded his own consulting firm focused on negotiation and communication analysis. Advised major corporations, unions, diplomatic teams, government institutions worldwide. Worked with Fortune 500 businesses, diplomats, and military special forces in dozens of countries",
      "University of Kansas School of Business -- Associate Teaching Professor of Law. Teaches business law, business fundamentals, and a course on the origin and spread of conspiracy theories. Award-winning professor",
      "Not a lifelong Democrat: He openly acknowledged he \"wasn't registered as a Democrat for years.\" This could be used against him in a primary or general election"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Colin McRoberts.",
    "quotes": [
      {
        "text": "Was not born in Kansas, but chose to move there with his wife to teach and start their family",
        "source": "Colin McRoberts research file",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "CANDIDATE 1: COLIN McROBERTS"
      },
      {
        "text": "The long odds are exactly why this fight is so important. Gerrymandering and partisanship have kept our incumbent politicians safe even as they give up on representing Kansans in order to serve national donors and powerbrokers. This campaign is about giving Kansans the power to choose a better deal.",
        "source": "Campaign announcement, September 17, 2025 (colinforkansas.com; KWCH)",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "CANDIDATE 1: COLIN McROBERTS"
      },
      {
        "text": "He does not care what that vote does. He doesn't care what it does to his neighbors. He doesn't care what it does to the rest of Kansas. He doesn't care what it does to the rest of the world, as long as it serves his interests, makes the party happy, gets him more qualified to one day go to the Senate or take some other easy, easy, no-fight election.",
        "source": "On Tracey Mann, Kansas Reflector, January 5, 2026",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "CANDIDATE 1: COLIN McROBERTS"
      },
      {
        "text": "I think that's been going on for a long time, an intentional strategy to use the east against the west, and maybe to a lesser extent, the west against the east, to drive these wedges for the benefit of party politics. And I will not and cannot play that game. We're all neighbors. The 1st District is much more alike than it is different.",
        "source": "Kansas Reflector, January 5, 2026",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "CANDIDATE 1: COLIN McROBERTS"
      },
      {
        "text": "The first district is red in a red state. This is not going to be an easy race, it's not going to be a cheap race, it's not going to be a short race, but it's possible to win in a way it hasn't been before.",
        "source": "Kansas Democracy Fest in Hays (Hays Post)",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "CANDIDATE 1: COLIN McROBERTS"
      },
      {
        "text": "I'm running not as a politician, but as a businessman and negotiator.",
        "source": "Kansas Democracy Fest in Hays (Hays Post)",
        "date": "2026-03-31",
        "url": "https://colinforkansas.com/",
        "topic": "CANDIDATE 1: COLIN McROBERTS"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC Candidate ID: H6KS01195.\n\nCommittee: Colin for Kansas (C00919860).",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "colinforkansas.com",
        "url": "https://colinforkansas.com/",
        "publication": "Colinforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@colinforkansas",
        "url": "https://www.instagram.com/colinforkansas/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "facebook.com/colinforkansas",
        "url": "https://www.facebook.com/colinforkansas",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@colinmcroberts.bsky.social",
        "url": "https://bsky.app/profile/colinmcroberts.bsky.social",
        "publication": "Bsky.App",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/colin-mcroberts-5781291",
        "url": "https://www.linkedin.com/in/colin-mcroberts-5781291/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "colin-mcroberts.com",
        "url": "https://www.colin-mcroberts.com/",
        "publication": "Colin-mcroberts.Com",
        "date": "2026-03-31"
      },
      {
        "title": "business.ku.edu/people/colin-mcroberts",
        "url": "https://business.ku.edu/people/colin-mcroberts",
        "publication": "Business.Ku.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "ratemyprofessors.com/professor/2506562",
        "url": "https://www.ratemyprofessors.com/professor/2506562",
        "publication": "Ratemyprofessors.Com",
        "date": "2026-03-31"
      },
      {
        "title": "take-bac-congress.us/team/colin-mcroberts",
        "url": "https://www.take-bac-congress.us/team/colin-mcroberts",
        "publication": "Take-bac-congress.Us",
        "date": "2026-03-31"
      },
      {
        "title": "fec.gov/data/candidate/H6KS01195",
        "url": "https://www.fec.gov/data/candidate/H6KS01195/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "fec.gov/data/committee/C00919860",
        "url": "https://www.fec.gov/data/committee/C00919860/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Colin McRoberts - Ballotpedia",
        "url": "https://ballotpedia.org/Colin_McRoberts",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH - \"Colin McRoberts files for 1st Congressional District seat\" (Sept 17, 2025)",
        "url": "https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - \"Lawrence Democrats take aim at Kansas Republican's congressional seat\" (Jan 5, 2026)",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World - \"Lawrence Democrats take aim at Mann's congressional seat\" (Jan 7, 2026)",
        "url": "https://www2.ljworld.com/news/state-government/2026/jan/07/lawrence-democrats-take-aim-at-manns-congressional-seat/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - \"Kansas Democrats wrap up Democracy Fest in Hays\"",
        "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Aeon Magazine - Colin McRoberts Author Page",
        "url": "https://aeon.co/users/colin-mcroberts",
        "publication": "Aeon.Co",
        "date": "2026-03-31"
      },
      {
        "title": "Skeptical Inquirer - \"A Skeptic on the ConspiraSea Cruise\"",
        "url": "https://skepticalinquirer.org/exclusive/a-skeptic-on-the-conspirasea-cruiseinterview-with-colin-mcroberts/",
        "publication": "Skepticalinquirer.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Public Radio - \"When Experts Attack: ConspiraSea Cruise\"",
        "url": "https://kansaspublicradio.org/show/genres-when-experts-attack/2020-03-04/live-performance-when-experts-attack-1-colin-mcroberts",
        "publication": "Kansaspublicradio.Org",
        "date": "2026-03-31"
      },
      {
        "title": "State Bar of Texas - Kenneth Colin McRoberts",
        "url": "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=281096",
        "publication": "Texasbar.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Colin for Kansas - Meet Colin",
        "url": "https://colinforkansas.com/meet-colin/",
        "publication": "Colinforkansas.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "lauren-reinhold",
    "name": "Lauren Reinhold",
    "party": "D",
    "position": "U.S. House candidate, KS-01",
    "electionSlug": "ks-01-house-2026",
    "incumbent": false,
    "occupation": "Attorney (28 years experience), former federal employee (Social Security Administration)",
    "hometown": "Lawrence, Kansas (Douglas County)",
    "religion": "Christian (per public records)",
    "education": "J.D., University of Kansas School of Law (attended starting 1993)",
    "family": "Not publicly identified by name; Has children (raised family in Lawrence)",
    "campaignWebsite": "https://www.laurenforkansas.com",
    "whoTheyAre": "Party: Democrat.\n\nResidence: Lawrence, Kansas.\n\nSpouse: Not publicly identified by name.\n\nChildren: Has children (raised family in Lawrence).",
    "theirRecord": "On Government Services:.\n\nI really care that the American people get the government they deserve, that we get the governmental services we need and deserve to make our lives better.\n\nOn Healthcare:.\n\nHealthcare you can count on\" is a central campaign pillar.",
    "whatYouShouldKnow": [
      "Reinhold has a compelling personal story -- a federal worker displaced by DOGE who channeled her anger into a congressional run. Her 28 years of legal experience and time as a federal union officer give her deep institutional knowledge. However, she entered later than McRoberts, has less apparent fundraising infrastructure, less visible social media presence, and faces the same fundamental math problem: KS-01 is R+16. In the Democratic primary, her worker-advocate, DOGE-survivor message may resonate with primary voters who are energized by anti-Trump sentiment. Whether that's enough to beat McRoberts in the primary depends heavily on fundraising and ground game",
      "Attorney/Owner, Reinhold Law Office, LLC -- Private practice in Lawrence, Kansas",
      "Staff Attorney, University of Kansas Legal Services for Students -- Legal aid for KU students",
      "Managing Attorney, Carter Law Firm -- Iowa",
      "Also lives in Lawrence: Same geographic vulnerability as McRoberts. Both Democrats are from the same city, which is the most liberal enclave in an otherwise deeply conservative district"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Lauren Reinhold.",
    "quotes": [
      {
        "text": "I really care that the American people get the government they deserve, that we get the governmental services we need and deserve to make our lives better.",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
        "topic": "CANDIDATE 2: LAUREN REINHOLD"
      },
      {
        "text": "Wages you can raise a family on",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
        "topic": "CANDIDATE 2: LAUREN REINHOLD"
      },
      {
        "text": "If anyone in Washington wants to push policies that hurt our farmers, our hospitals, our workers, or our towns, they'll have to go through me first.",
        "source": "Lauren Reinhold research file",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
        "topic": "CANDIDATE 2: LAUREN REINHOLD"
      },
      {
        "text": "I was a proud public servant. When DOGE pushed hardworking employees like me out the door, I decided if Washington won't fight for people, then I will.",
        "source": "Campaign announcement (laurenforkansas.com)",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
        "topic": "CANDIDATE 2: LAUREN REINHOLD"
      },
      {
        "text": "I could run for Congress and try to fight this mess they've made of the federal government. Fight back and restore what the American people need.",
        "source": "Kansas Reflector, January 5, 2026",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
        "topic": "CANDIDATE 2: LAUREN REINHOLD"
      },
      {
        "text": "It's not about me. It's not about, oh, poor Lauren lost her job to DOGE. I really care that the American people get the government they deserve, that we get the governmental services we need and deserve to make our lives better.",
        "source": "Kansas Reflector, January 5, 2026",
        "date": "2026-03-31",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
        "topic": "CANDIDATE 2: LAUREN REINHOLD"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "FEC committee details not confirmed via search results. Check fec.gov/data/elections/house/KS/01/2026 for most current filings.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "fec.gov/data/elections/house/KS/01/2026",
        "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "laurenforkansas.com",
        "url": "https://www.laurenforkansas.com",
        "publication": "Laurenforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/laurenreinhold",
        "url": "https://www.linkedin.com/in/laurenreinhold/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "facebook.com/dgcodems",
        "url": "https://www.facebook.com/dgcodems/videos/2299093513898616/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - \"Lawrence Democrats take aim...\" (Jan 5, 2026)",
        "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World - \"Lawrence Democrats take aim...\" (Jan 7, 2026)",
        "url": "https://www2.ljworld.com/news/state-government/2026/jan/07/lawrence-democrats-take-aim-at-manns-congressional-seat/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Salina Post - \"Reinhold, 1st Congressional District candidate to speak in Salina\"",
        "url": "https://salinapost.com/posts/25bbb2eb-ae15-4419-8096-972bb919a48a",
        "publication": "Salinapost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCN Online - \"Two Lawrence Dems Seek 1st District Seat\" (Jan 5, 2026)",
        "url": "https://www.kcnonline.com/wp/2026/01/05/two-lawrence-dems-seek-1st-district-seat/",
        "publication": "Kcnonline.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Lauren Reinhold Archives",
        "url": "https://kansasreflector.com/tag/lauren-reinhold/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Whistleblowers Blog - Fort Bliss",
        "url": "https://whistleblowersblog.org/human-interest/two-powerful-women-whistleblower-pairs-to-learn-from-this-womens-history-month/",
        "publication": "Whistleblowersblog.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - KS-01 Democratic Primary",
        "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026_(August_4_Democratic_primary",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "craig-musser",
    "name": "Craig Musser",
    "party": "I",
    "position": "U.S. House candidate, KS-01",
    "electionSlug": "ks-01-house-2026",
    "incumbent": false,
    "occupation": "Manager, Environment, Health & Safety at PureField Ingredients (Russell, KS)",
    "hometown": "570 SE 50 Road, Ellinwood, KS 67526 (Barton County)",
    "education": "B.S., Bucknell University (Lewisburg, PA)",
    "family": "Not publicly identified; Not publicly identified",
    "campaignWebsite": "https://sos.ks.gov/media/press-releases/2024/05-24-24-united-kansas-recognized-as-a-political-party.html",
    "whoTheyAre": "Party: United Kansas Party (Independent).\n\nResidence: Kansas (specific city not confirmed).\n\nSpouse: Not publicly identified.\n\nChildren: Not publicly identified.",
    "theirRecord": "On Representation:.\n\nKansans deserve a representative who serves them -- not donors, party bosses or Washington insiders.\n\nOn Women's Rights:.\n\nEvery Kansan, particularly women whose rights are being eroded by the incumbent party, has the right to self-determination and freedom from government intrusion into their personal lives.",
    "whatYouShouldKnow": [
      "Craig Musser is the most enigmatic candidate in the race. He has the strongest geographic credentials of any challenger (he actually lives in the rural heart of KS-01, in Ellinwood), and his industrial/manufacturing background is the most aligned with the district's working-class character. But he has virtually no campaign infrastructure -- no website, no social media, no visible fundraising. The United Kansas Party is a new and unproven vehicle. His platform includes a reference to women's rights and self-determination that would be notable and potentially strategic in a post-Dobbs Kansas (where voters overwhelmingly rejected an anti-abortion amendment in 2022). However, without money, media, and organization, he is essentially a placeholder candidate at this stage",
      "Musser is running as a third-party candidate in an extremely conservative district. The United Kansas Party is a newly recognized party (2024) that positions itself as centrist/independent. Musser's candidacy is notable primarily for the women's rights and anti-establishment planks of his platform, which distinguish him from both major-party candidates. His chances of winning are extremely slim given the district's partisan lean (+38 for Mann in 2024), but he could serve as a protest vote option",
      "Process Engineer, Merck & Co. -- Pharmaceutical manufacturing",
      "Maintenance Engineer & Process Engineer, Ply Gem -- Building products manufacturing",
      "Safety Project Engineer, Specialty Granules"
    ],
    "whereTheyWorship": "No public church affiliation was identified in the report materials reviewed for Craig Musser.",
    "quotes": [
      {
        "text": "Kansans deserve a representative who serves them -- not donors, party bosses or Washington insiders.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "url": "https://unitedkansas.com/",
        "topic": "CANDIDATE 3: CRAIG MUSSER"
      },
      {
        "text": "Every Kansan, particularly women whose rights are being eroded by the incumbent party, has the right to self-determination and freedom from government intrusion into their personal lives.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "url": "https://unitedkansas.com/",
        "topic": "CANDIDATE 3: CRAIG MUSSER"
      },
      {
        "text": "Every student deserves access to a quality education.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "url": "https://unitedkansas.com/",
        "topic": "CANDIDATE 3: CRAIG MUSSER"
      },
      {
        "text": "Effective governance is not about ideology -- it's about listening and delivering outcomes.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "url": "https://unitedkansas.com/",
        "topic": "CANDIDATE 3: CRAIG MUSSER"
      },
      {
        "text": "Kansans deserve a representative who serves them - not donors, party bosses or Washington insiders. I'm running to be that representative.",
        "source": "Campaign announcement (Hays Post, Great Bend Post)",
        "date": "2026-03-31",
        "url": "https://unitedkansas.com/",
        "topic": "CANDIDATE 3: CRAIG MUSSER"
      },
      {
        "text": "bring discipline to fixing the tax code and healthcare system that are failing too many Kansans.",
        "source": "Craig Musser research file",
        "date": "2026-03-31",
        "url": "https://unitedkansas.com/",
        "topic": "CANDIDATE 3: CRAIG MUSSER"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Filed FEC Form 2 (Statement of Candidacy) on February 14, 2026.\n\nCommittee: \"Craig Musser for Congress.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "unitedkansas.com",
        "url": "https://unitedkansas.com/",
        "publication": "Unitedkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "facebook.com/unitedksparty",
        "url": "https://www.facebook.com/unitedksparty/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/craig-musser-82880838",
        "url": "https://www.linkedin.com/in/craig-musser-82880838/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "unitedkansas.com/candidates",
        "url": "https://unitedkansas.com/candidates",
        "publication": "Unitedkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "fec.gov",
        "url": "https://www.fec.gov/data/",
        "publication": "Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Craig Musser - Ballotpedia",
        "url": "https://ballotpedia.org/Craig_Musser",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - \"Kansas First Congressional District has a new candidate\"",
        "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Great Bend Post - \"Kansas First Congressional District has a new candidate\"",
        "url": "https://greatbendpost.com/posts/d2d97c94-1d35-4fc6-a09d-3453408c580e",
        "publication": "Greatbendpost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FEC Form 2 Filing (PDF)",
        "url": "https://docquery.fec.gov/pdf/966/202602149834322966/202602149834322966.pdf",
        "publication": "Docquery.Fec.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "ZoomInfo - Craig Musser",
        "url": "https://www.zoominfo.com/p/Craig-Musser/9122088966",
        "publication": "Zoominfo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas SOS - United Kansas recognized",
        "url": "https://sos.ks.gov/media/press-releases/2024/05-24-24-united-kansas-recognized-as-a-political-party.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - KS-01 2026",
        "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "scott-schwab",
    "name": "Scott Schwab",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Kansas Secretary of State",
    "religion": "Non-denominational",
    "education": "Fort Hays State University, Hays, Kansas -- Bachelor of Arts, 1994",
    "family": "Michele Schwab has been Scott's wife throughout his political career. She appeared alongside Scott in the 2017 Good Morning America interview about Caleb's death. Michele is not publicly known to hold a separate public office or high-profile career. She has been described in media as a supportive partner and mother during and after the Caleb tragedy",
    "campaignWebsite": "https://scottschwab.com/",
    "whoTheyAre": "Full Name: Scott Joseph Schwab.\n\nDate of Birth: July 9, 1972.\n\nBirthplace: Great Bend, Barton County, Kansas.\n\nCurrent Residence: Overland Park, Johnson County, Kansas.",
    "theirRecord": "Kansas House of Representatives, District 49 (Olathe/Shawnee area, Johnson County).\n\nFirst elected: 2002.\n\nServed: 2003-2006, then 2009-2019 (left in 2006 to run for Congress, returned in 2008/2009).\n\nTotal: 7 terms (approximately 12 years of active House service).",
    "whatYouShouldKnow": [
      "Schwab's faith appears deeply genuine and personal, not performative. The depth of his quotes about surrendering to God during his son's death, combined with the family's long-term church membership and the pastor's immediate role as family spokesman, indicate authentic faith community integration rather than campaign-season religiosity",
      "Scott Schwab is a man whose life divides into two chapters: before August 7, 2016, and after. The death of his son Caleb on the Verruckt waterslide is the defining event of his personal life and has deeply shaped his public persona. His faith, which he expresses openly and with apparent genuineness, is the framework through which he has processed that tragedy",
      "Politically, Schwab is a mainstream conservative Republican with institutional experience -- 12+ years in the Kansas House, two terms as Secretary of State, NASS President. He is not a bomb-thrower or culture warrior. His defining political moment was standing up against election conspiracy theories in his own party after 2020, which he did clearly and directly (\"I have seen no evidence of that\")",
      "The Open Records Act violation is his most significant mark against his record. Directing a vendor to disable access to public records, then claiming the records were too expensive to produce, is the kind of calculated obstruction that undermines public trust. His continued resistance even after the court ruling compounds this",
      "Schwab was drawn into the broader Kansas election-fraud debate because his office certifies and administers statewide elections"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED.\n\nDenomination: Non-denominational.",
    "church": {
      "name": "LifeMission Church, Olathe, KS",
      "denomination": "Non-denominational",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "details": "Confidence: CONFIRMED. Denomination: Non-denominational."
    },
    "quotes": [
      {
        "text": "As a Christian, my faith has guided me",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "fight against federal interference in our state",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "A constitutional conservative who will protect Kansas",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://scottschwab.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "a Christian, a father, a believer in the American dream",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
        "topic": "SCOTT SCHWAB"
      },
      {
        "text": "in knowing their son believed in Jesus, and that they would see him another day",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
        "topic": "SCOTT SCHWAB"
      },
      {
        "text": "their church family, LifeMission",
        "source": "Scott Schwab research file",
        "date": "2026-03-31",
        "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
        "topic": "SCOTT SCHWAB"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$1.3-1.42 million",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01SS_202601.pdf.",
      "donors": [
        {
          "name": "Total Raised",
          "amount": "~$1.3-1.42 million"
        },
        {
          "name": "Personal Loan to Campaign",
          "amount": "$1.045 million"
        },
        {
          "name": "Donor Contributions",
          "amount": "~$350,000-375,000 (estimated: total raised minus personal loan)"
        },
        {
          "name": "Total Spent",
          "amount": "~$365,000"
        },
        {
          "name": "Cash on Hand",
          "amount": "~$1.05 million"
        },
        {
          "name": "Sources of wealth: Likely a combination of his business career (CompDME executive, pharmaceutical sales) and the Schlitterbahn wrongful death settlement received in 2017.",
          "amount": "$19.7 million"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "scottschwab.com",
        "url": "https://scottschwab.com/",
        "publication": "Scottschwab.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State biography",
        "url": "https://www.sos.ks.gov/about/schwab-biography.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01SS_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SS_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Apnews.Com",
        "url": "https://apnews.com/article/4587939711dc7a5effb1879374405147",
        "publication": "Apnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Christian Post: Caleb Schwab attended church with family hours before death",
        "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
        "publication": "Christianpost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FOX 4: At funeral for his son",
        "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
        "publication": "Fox4kc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LifeMission Church",
        "url": "https://www.lifemission.church/",
        "publication": "Lifemission.Church",
        "date": "2026-03-31"
      },
      {
        "title": "Heavy.com: Scott & Michele Schwab, Caleb's Parents",
        "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
        "publication": "Heavy.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@ScottSchwabKS",
        "url": "https://x.com/ScottSchwabKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@KansasSOS",
        "url": "https://x.com/KansasSOS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SchwabforSOS",
        "url": "https://www.facebook.com/SchwabforSOS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@kansassos",
        "url": "https://www.instagram.com/kansassos/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "scott-schwab-8306713",
        "url": "https://www.linkedin.com/in/scott-schwab-8306713/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State press release, October 10, 2024",
        "url": "https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Key Votes page",
        "url": "https://justfacts.votesmart.org/candidate/key-votes/34505/scott-schwab",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Legislator detail",
        "url": "https://www.billtrack50.com/legislatordetail/2823",
        "publication": "Billtrack50.Com",
        "date": "2026-03-31"
      },
      {
        "title": "2017-18 session",
        "url": "https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State -- Schwab Biography",
        "url": "https://sos.ks.gov/about/schwab-biography.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State -- Press Releases",
        "url": "https://sos.ks.gov/media/press-releases.html",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Scott Schwab -- Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Scott_Schwab",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Scott Schwab -- Ballotpedia",
        "url": "https://ballotpedia.org/Scott_Schwab",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Scott Schwab -- Kansapedia (Kansas Historical Society)",
        "url": "https://www.kshs.org/kansapedia/scott-schwab/20461",
        "publication": "Kshs.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Scott Schwab -- VoteSmart",
        "url": "https://justfacts.votesmart.org/candidate/biography/34505/scott-schwab",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Scott Schwab first to run for Kansas governor",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab runs for governor",
        "url": "https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab certain voting secure, eager to cut property taxes",
        "url": "https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Property tax reform campaign",
        "url": "https://kansasreflector.com/briefs/scott-schwab-aims-gop-gubernatorial-campaign-at-property-tax-reform/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Six GOP candidates debate (Jan 30, 2026)",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Campaign finance reports",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Millionaire candidates",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas governor 2026 candidate guide",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KSNT: Schwab announces cancer diagnosis",
        "url": "https://www.ksnt.com/capitol-bureau/i-will-make-a-full-recovery-scott-schwab-announces-cancer-diagnosis/",
        "publication": "Ksnt.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: KS Secretary of State announces cancer diagnosis",
        "url": "https://www.kwch.com/2025/03/21/ks-secretary-state-announces-cancer-diagnosis/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas court says secretary of state violated open records law",
        "url": "https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Appeals court says Schwab violated open records law",
        "url": "https://kansasreflector.com/2022/07/22/kansas-appeals-court-says-secretary-of-state-violated-open-records-law-by-altering-computer-system/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab refuses to provide records despite court ruling",
        "url": "https://kansasreflector.com/2022/08/01/kansas-secretary-of-state-refuses-to-provide-provisional-ballot-records-despite-court-ruling/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ACLU of Kansas: Loud Light & Hammet v. Schwab",
        "url": "https://www.aclukansas.org/cases/loud-light-hammet-v-schwab-2020/",
        "publication": "Aclukansas.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: As other Republicans lied about voter fraud, Schwab was a voice of sanity",
        "url": "https://kansasreflector.com/2020/11/09/as-other-republicans-lied-about-voter-fraud-kansas-secretary-of-state-was-a-voice-of-sanity/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "PBS: Kansas secretary of state defeats election conspiracy promoter",
        "url": "https://www.pbs.org/newshour/politics/kansas-secretary-of-state-defeats-election-conspiracy-promoter",
        "publication": "Pbs.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab rebuffs Brown criticism",
        "url": "https://kansasreflector.com/2022/07/26/schwabs-campaign-rebuffs-late-campaign-criticism-from-kansas-gop-rival-brown/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab works to build trust in elections",
        "url": "https://kansasreflector.com/2024/09/15/kansas-secretary-of-state-scott-schwab-works-to-build-trust-in-elections-in-the-face-of-skepticism/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSNT: Top Kansas official slams USPS",
        "url": "https://www.ksnt.com/capitol-bureau/this-is-unacceptable-top-kansas-election-official-demands-answers-from-usps-after-mail-errors-in-primary-election/",
        "publication": "Ksnt.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Kansas SOS sends letter to USPS",
        "url": "https://www.kwch.com/2024/09/10/kansas-secretary-state-sends-letter-usps-over-mail-in-ballot-problems/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Trump praises Kansas secretary of state",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-10-26/president-trump-kansas-secretary-of-state-scott-schwab",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Schwab welcomes federal assist with cleansing voter lists",
        "url": "https://kansasreflector.com/2025/07/31/secretary-of-state-scott-schwab-welcomes-federal-assist-with-cleansing-voter-list/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ABC News: Family of boy killed on water slide speaks out",
        "url": "https://abcnews.go.com/US/family-boy-killed-waterslide-speaks-hurting/story?id=45445546",
        "publication": "Abcnews.Go.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FOX4: Scott Schwab speaks about journey forward",
        "url": "https://fox4kc.com/news/scott-schwab-speaks-as-criminal-cases-loom-dad-talks-of-journey-forward-after-tragedy-on-verruckt/",
        "publication": "Fox4kc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB: Family and friends honor Caleb Schwab",
        "url": "https://www.kshb.com/news/local-news/family-friends-and-community-honor-10-year-old-caleb-schwab",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB: $20M settlement",
        "url": "https://www.kshb.com/news/local-news/caleb-schwabs-family-to-recieve-20-million-in-settlement",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Bartimus Frickleton Robertson Rader: Settlement details",
        "url": "https://bflawfirm.com/schlitterbahn-wrongful-death-claims-settle-for-19732125-00/",
        "publication": "Bflawfirm.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NPR: Judge dismisses murder charges",
        "url": "https://www.npr.org/2019/02/25/697647804/judge-dismisses-murder-charges-over-boys-death-on-kansas-waterslide",
        "publication": "Npr.Org",
        "date": "2026-03-31"
      },
      {
        "title": "TIME: What we know about the water slide death",
        "url": "https://time.com/4444447/caleb-schwab-verruckt-water-slide-death/",
        "publication": "Time.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Penwell-Gabel: Caleb Thomas Schwab obituary",
        "url": "https://www.penwellgabelkc.com/obituaries/caleb-thomas-schwab",
        "publication": "Penwellgabelkc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "League of Women Voters v. Schwab",
        "url": "https://www.lwv.org/legal-center/league-women-voters-kansas-v-schwab",
        "publication": "Lwv.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Democracy Docket: Kansas voter suppression laws case",
        "url": "https://www.democracydocket.com/cases/kansas-voter-suppression-laws/",
        "publication": "Democracydocket.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Supreme Court: LWV v. Schwab (2023)",
        "url": "https://law.justia.com/cases/kansas/supreme-court/2023/124378.html",
        "publication": "Law.Justia.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/meet-kris/",
        "publication": "Kriskobach.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02KK_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/officeholders/kris-kobach/summary",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "vicki-schmidt",
    "name": "Vicki Schmidt",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Insurance Commissioner / Pharmacist",
    "born": "September 15, 1955",
    "hometown": "Wichita, Kansas",
    "religion": "Christian (denomination unconfirmed; references \"faith\" in campaign materials)",
    "education": "University of Kansas School of Pharmacy, graduated 1978",
    "family": "Two sons (names not publicly identified)",
    "district": "20 (Shawnee and Wabaunsee counties)",
    "campaignWebsite": "https://vickiforgovernor.com",
    "whoTheyAre": "Born: September 15, 1955.\n\nAge: 70 (turns 71 on September 15, 2026).\n\nBirthplace: Wichita, Kansas.\n\nHigh School: Wichita South High School, Wichita, KS.",
    "theirRecord": "SB 95 Roll Call (LegiScan).\n\nSB 95 Full Text (Kansas Legislature).\n\nSB 409 Full Text (Kansas Legislature).\n\nHB 2744 Summary - Autism Coverage (Kansas Legislature).",
    "whatYouShouldKnow": [
      "Schmidt uses faith as a background value in her public persona rather than a front-and-center identity. This is consistent with the \"moderate Republican\" Kansas tradition. She does not appear to be a culture-warrior Christian; she is more of a \"faith informs my values\" quiet-witness type. Her campaign announcement video's church scene suggests she is a regular churchgoer but doesn't make it the centerpiece of her identity",
      "Birth date: September 15, 1955",
      "Education: Wichita South HS, KU School of Pharmacy (1978)",
      "Senate record: District 20, 2005-2019",
      "Schmidt entered the governor race as a sitting statewide executive, which gave her immediate name recognition"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "hard work, honesty and faith",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "more than $391 million in recouped dollars",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I will keep fighting for Kansas families",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "people in various settings -- from the grocery store to church",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
        "topic": "VICKI SCHMIDT"
      },
      {
        "text": "When I was in pharmacy school, I remember hearing about patients coming in for their medication and being grumpy, and how you don't know what's happened to them. They may have had a bad diagnosis, or not heard from their kids in a while, or had a fight with a loved one. What I found was that just by asking a simple question like 'How's your day going?' you could find out all kinds of things and even help people.",
        "source": "TK Business Magazine, November 2024",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "VICKI SCHMIDT -- COMPLETE INVESTIGATIVE DOSSIER"
      },
      {
        "text": "It is a vote I regret. [...] The GOP strategy in the Senate was to place the tax bill in the hands of a House-Senate negotiating committee so a more balanced reform plan could be drafted. Instead of revisions, the House concurred with the Senate and Brownback signed the bill into law.",
        "source": "Vicki Schmidt research file",
        "date": "2026-03-31",
        "url": "https://vickiforgovernor.com/",
        "topic": "VICKI SCHMIDT -- COMPLETE INVESTIGATIVE DOSSIER"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$980,000",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01VS_202601.pdf.",
      "donors": [
        {
          "name": "Total raised",
          "amount": "~$980,000"
        },
        {
          "name": "Self-funded (personal loan)",
          "amount": "$81,500"
        },
        {
          "name": "Cash on hand",
          "amount": "$928,000"
        },
        {
          "name": "Donation range",
          "amount": "$1 to $4,000"
        },
        {
          "name": "Contributions range from to $4,000 (Kansas allows up to $4,000 per individual per election cycle for governor)",
          "amount": "$1"
        },
        {
          "name": "Per Kansas Reflector reporting (January 2026), multiple candidates were striving to hit the mark. Scott Schwab took in $1.3 million, and Philip Sarnecki received $900K. Schmidt's fundraising is competitive but not leading the field in raw dollars -- her argument is that her donor count and grassroots base are stronger.",
          "amount": "$1 million"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "vickiforgovernor.com",
        "url": "https://vickiforgovernor.com/",
        "publication": "Vickiforgovernor.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Insurance Department",
        "url": "https://insurance.kansas.gov/about-us/",
        "publication": "Insurance.Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01VS_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01VS_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Vickischmidt.Org",
        "url": "https://vickischmidt.org/meet-vicki/",
        "publication": "Vickischmidt.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kctv5.Com",
        "url": "https://www.kctv5.com/2025/07/09/another-woman-throws-her-hat-into-kansas-gubernatorial-race-vicki-schmidt/",
        "publication": "Kctv5.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Vicki Schmidt initiates campaign for governor",
        "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "vickischmidt.org",
        "url": "https://vickischmidt.org/",
        "publication": "Vickischmidt.Org",
        "date": "2026-03-31"
      },
      {
        "title": "@VickiSchmidtKS",
        "url": "https://www.facebook.com/VickiSchmidtKS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@VickiSchmidtKS",
        "url": "https://x.com/VickiSchmidtKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "vicki-schmidt-50b11810",
        "url": "https://www.linkedin.com/in/vicki-schmidt-50b11810/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Vicki Schmidt - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Vicki_Schmidt",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vicki Schmidt - Ballotpedia",
        "url": "https://ballotpedia.org/Vicki_Schmidt",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vicki Schmidt - Vote Smart",
        "url": "https://justfacts.votesmart.org/candidate/biography/34584/vicki-schmidt",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vicki Schmidt - NAIC",
        "url": "https://content.naic.org/node/8831",
        "publication": "Content.Naic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Schmidt anchors 2026 campaign on record of service (July 21, 2025)",
        "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Schmidt blends personal experience, advocacy on breast cancer bill (Feb 3, 2026)",
        "url": "https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas bill to expand free breast cancer screening likely killed by Republican lawmakers (March 17, 2026)",
        "url": "https://www.kcur.org/politics-elections-and-government/2026-03-17/kansas-bill-to-expand-free-breast-cancer-screening-likely-killed-by-republican-lawmakers",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "The Beacon: Breast cancer screening bill killed by Kansas GOP (March 16, 2026)",
        "url": "https://thebeaconnews.org/stories/2026/03/16/breast-cancer-screening-bill-killed-by-kansas-gop/",
        "publication": "Thebeaconnews.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Kansas insurance commissioner backs bill (Feb 2, 2026)",
        "url": "https://www.kwch.com/2026/02/02/kansas-insurance-commissioner-backs-bill-eliminate-breast-cancer-screening-costs/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: \"It's humbling\" -- KS Insurance Commissioner discusses breast cancer journey (Oct 17, 2023)",
        "url": "https://www.kwch.com/2023/10/17/its-humbling-ks-insurance-commissioner-discusses-breast-cancer-journey/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Kansas insurance commissioner has breast cancer, expects full recovery (June 2023)",
        "url": "https://kansasreflector.com/briefs/kansas-insurance-commissioner-has-breast-cancer-expects-full-recovery/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World: Diagnosed with breast cancer (June 14, 2023)",
        "url": "https://www2.ljworld.com/news/state-government/2023/jun/14/kansas-insurance-commissioner-says-shes-been-diagnosed-with-breast-cancer/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KFL PAC Statement on Schmidt (Oct 27, 2025)",
        "url": "https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/",
        "publication": "Kflpac.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Campaign finance reports (Jan 9, 2026)",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Millionaire candidates burnish fundraising (Jan 19, 2026)",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Six GOP candidates toss haymakers in first debate (Jan 30, 2026)",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Insurance Journal: Kansas saves elders about $5M (Dec 3, 2025)",
        "url": "https://www.insurancejournal.com/news/midwest/2025/12/03/849821.htm",
        "publication": "Insurancejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: KS Insurance Commissioner touts new law (June 21, 2024)",
        "url": "https://www.wibw.com/2024/06/21/ks-insurance-commissioner-touts-new-law-protect-seniors-scams/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "At The Core: Spotlight on Insurance Commissioner Vicki Schmidt (Nov 14, 2024)",
        "url": "https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt",
        "publication": "Tkmagazine.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KU News: Vicki Schmidt earns pharmacy school's top honor (April 2019)",
        "url": "https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor",
        "publication": "News.Ku.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Mittelpolitan: Schmidt, Schodorf, and the Fate of the Moderate Republican Kansas Woman",
        "url": "https://mittelpolitan.substack.com/p/insight-kansas-column-for-july-vicki",
        "publication": "Mittelpolitan.Substack.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Kansas Young Republicans shut down (Oct 14, 2025)",
        "url": "https://kansasreflector.com/2025/10/14/kansas-young-republicans-shut-down-after-politico-report-on-racist-violent-encrypted-chat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WebMD: Dr. Michael Schmidt, MD",
        "url": "https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview",
        "publication": "Doctor.Webmd.Com",
        "date": "2026-03-31"
      },
      {
        "title": "MD.com: Michael J. Schmidt, MD",
        "url": "https://www.md.com/doctor/michael-j-schmidt-md",
        "publication": "Md.Com",
        "date": "2026-03-31"
      },
      {
        "title": "2022 Kansas General Election Official Vote Totals (SOS)",
        "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "2022 Kansas Insurance Commissioner Election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2022_Kansas_Insurance_Commissioner_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "2026 Kansas Gubernatorial Election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "SB 95 Roll Call (LegiScan)",
        "url": "https://legiscan.com/KS/rollcall/SB95/id/475027",
        "publication": "Legiscan.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SB 95 Full Text (Kansas Legislature)",
        "url": "https://www.kslegislature.gov/li_2016/b2015_16/measures/documents/sb95_00_0000.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SB 409 Full Text (Kansas Legislature)",
        "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/sb409_00_0000.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "HB 2744 Summary - Autism Coverage (Kansas Legislature)",
        "url": "https://www.kslegislature.gov/li_2014/b2013_14/measures/documents/summary_hb_2744_2014.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ty-masterson",
    "name": "Ty Masterson",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Executive Director, GoCreate (Koch-funded makerspace at Wichita State University)",
    "hometown": "Andover, Kansas",
    "religion": "Christian (attends NewSpring Church, Wichita)",
    "education": "Kansas State University -- attended (degree details not publicly specified in any source)",
    "family": "Wife: Marlo Masterson -- married 30+ years. Limited public information available on Marlo's career. Note: Ty's middle name is \"Marlo\" per FollowTheMoney records (listed as \"Ty Marlo Masterson\"), suggesting the name has personal/family significance",
    "district": "16th District (since 2009)",
    "campaignWebsite": "https://www.mastersonforgovernor.com/",
    "whoTheyAre": "Kansas Reflector: Masterson Launches Campaign.\n\n2026 Kansas Gubernatorial Election - Wikipedia.\n\nTy Masterson - Wikipedia.\n\nTy Masterson - Ballotpedia.",
    "theirRecord": "SB 169 (2023): Proposed single flat income tax rate of 4.75% for all Kansans earning above $5,225/year. Estimated cost: $566 million/year. Part of three-pronged approach: (1) zero tax on healthy food, (2) reduce/eliminate Social Security tax, (3) flat income tax.\n\nSB 539 (2024): Would change income tax rates over six years, starting at 5.7% in 2024 and reducing by 0.05% annually to 5.45% by 2029. Governor Kelly vetoed.\n\n2025-2026: Led legislature to garner 2/3 majority support for reducing personal income tax to a single rate of 4%. Framed as part of a $2 billion cumulative tax reduction.\n\nMasterson's stated position: \"We're building a movement of everyday Kansans who are fed up with being taxed to death and watching their state fall behind.",
    "whatYouShouldKnow": [
      "Masterson is a major architect of Kansas Senate Republican strategy, so his policy record is already highly visible",
      "His gubernatorial pitch depends on converting legislative power into executive power",
      "Pre-2004: Small business owner, realtor, construction company operator",
      "~2000s: Andover City Council member",
      "2005-2008: Kansas House of Representatives, District 99"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED.\n\nDenomination: Non-denominational / Independent.",
    "church": {
      "name": "NewSpring Church, Wichita, KS",
      "denomination": "Non-denominational / Independent",
      "details": "Confidence: CONFIRMED. Denomination: Non-denominational / Independent."
    },
    "quotes": [
      {
        "text": "They attend NewSpring Church.",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Kansas isn't for sale, and we're taking it back.",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "common sense conservative leadership",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "honor your word, live your faith, and always put the people you serve first",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/services",
        "topic": "TY MASTERSON"
      },
      {
        "text": "I'm a follower of Jesus Christ",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/services",
        "topic": "TY MASTERSON"
      },
      {
        "text": "every life is precious -- it doesn't matter your background, your ethnicity, or your color... we're all one people, created by God",
        "source": "Ty Masterson research file",
        "date": "2026-03-31",
        "url": "https://www.mastersonforgovernor.com/services",
        "topic": "TY MASTERSON"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$700,000 (through end of 2025)",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01TM_202601.pdf.",
      "donors": [
        {
          "name": "Total Raised",
          "amount": "~$700,000 (through end of 2025)"
        },
        {
          "name": "Cash on Hand (end of 2025)",
          "amount": "$687,000"
        },
        {
          "name": "Entered 2026 with in its account",
          "amount": "$700,000"
        },
        {
          "name": "Total contributions: + (Senate campaigns)",
          "amount": "$80,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "mastersonforgovernor.com",
        "url": "https://www.mastersonforgovernor.com/",
        "publication": "Mastersonforgovernor.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Senator Ty Masterson",
        "url": "https://senatortymasterson.com/meet-ty/",
        "publication": "Senatortymasterson.Com",
        "date": "2026-03-31"
      },
      {
        "title": "newspring.org",
        "url": "https://www.newspring.org/",
        "publication": "Newspring.Org",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01TM_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01TM_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Apnews.Com",
        "url": "https://apnews.com/article/c465aadcc7c53c6c274f790928fc6208",
        "publication": "Apnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ty Masterson for Governor",
        "url": "https://www.mastersonforgovernor.com/services",
        "publication": "Mastersonforgovernor.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CSG Midwest Profile: Ty Masterson",
        "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
        "publication": "Csgmidwest.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Combat Antisemitism: Masterson reflects on Israel visit",
        "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
        "publication": "Combatantisemitism.Org",
        "date": "2026-03-31"
      },
      {
        "title": "@SenTyMasterson",
        "url": "https://twitter.com/sentymasterson",
        "publication": "Twitter.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Senate President Ty Masterson",
        "url": "https://www.facebook.com/presidenttymasterson/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "TyMastersonKansas",
        "url": "https://www.facebook.com/TyMastersonKansas/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@senator.tymasterson",
        "url": "https://www.instagram.com/senator.tymasterson/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "tymastersonkansas",
        "url": "https://www.linkedin.com/in/tymastersonkansas/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "senatortymasterson.com",
        "url": "https://senatortymasterson.com/",
        "publication": "Senatortymasterson.Com",
        "date": "2026-03-31"
      },
      {
        "title": "kansasreflector.com/tag/senate-president-ty-masterson/",
        "url": "https://kansasreflector.com/tag/senate-president-ty-masterson/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Masterson Launches Campaign",
        "url": "https://kansasreflector.com/2025/07/20/kansas-senate-president-ty-masterson-launches-republican-campaign-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "2026 Kansas Gubernatorial Election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ty Masterson - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ty_Masterson",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ty Masterson - Ballotpedia",
        "url": "https://ballotpedia.org/Ty_Masterson",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KMUW: Masterson Announces Bid",
        "url": "https://www.kmuw.org/2025-07-20/state-sen-ty-masterson-of-andover-announces-2026-gubernatorial-bid",
        "publication": "Kmuw.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Masterson Announces Run",
        "url": "https://www.kwch.com/2025/07/20/ty-masterson-announces-run-kansas-governor-lets-take-back-kansas/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Guide to Candidates",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart: Biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/57517/ty-masterson",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "ALEC Profile",
        "url": "https://alec.org/person/senator-ty-masterson-2/",
        "publication": "Alec.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Legislature Profile",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_masterson_ty_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "FollowTheMoney",
        "url": "https://www.followthemoney.org/entity-details?eid=6671671&default=candidate",
        "publication": "Followthemoney.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Six GOP Candidates Debate",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Bell-Ringing Incident",
        "url": "https://kansasreflector.com/2026/03/27/kansas-senate-president-celebrates-veto-override-by-ringing-bell-outside-house-angering-democrats/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Transgender Sports Ban Override",
        "url": "https://kansasreflector.com/2023/04/05/between-laughter-and-cursing-kansas-house-overrides-veto-of-transgender-sports-ban/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: SB 244 Bathroom Bill Veto",
        "url": "https://kansasreflector.com/2026/02/13/kansas-governor-vetoes-anti-trans-bathroom-bill-citing-numerous-and-significant-consequences/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: SB 244 Criticism",
        "url": "https://kansasreflector.com/2026/02/18/senate-president-ty-masterson-and-kansas-republicans-just-voted-to-send-men-into-ladies-bathrooms/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: DEI Law",
        "url": "https://kansasreflector.com/2024/04/19/kansas-governor-allows-anti-dei-bill-to-become-law-vetoes-anti-abortion-and-election-bills/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Flat Tax",
        "url": "https://kansasreflector.com/2024/03/15/kansas-senate-clear-flat-tax-plan-after-heated-discussion/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Property Tax Feud",
        "url": "https://kansasreflector.com/2026/03/17/kansas-house-senate-trade-blows-on-property-tax-relief/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Supreme Court Amendment",
        "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: School Vouchers $125M",
        "url": "https://kansasreflector.com/2025/01/29/senate-republican-promotes-education-freedom-with-125m-voucher-program-for-private-schools/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Pregnancy Center Override",
        "url": "https://kansasreflector.com/briefs/hours-after-kansas-governor-rejects-pregnancy-center-protections-legislature-overrides-her-veto/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: SB 368 Override",
        "url": "https://kansasreflector.com/2026/03/27/kansas-governor-vetoes-bill-offering-tax-breaks-to-people-using-nontraditional-health-plans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Medicaid Expansion Fails",
        "url": "https://kansasreflector.com/2025/02/18/medicaid-expansion-fails-in-kansas-senate-in-takeover-attempt-by-democrats/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Session Recap",
        "url": "https://kansasreflector.com/2026/03/30/legislature-screeches-to-a-stop-flinging-lousy-bills-everywhere-now-the-governor-has-to-clean-up/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "MicroBilt: Debt Does In Kansas Lawmaker",
        "url": "https://www.microbilt.com/news/article/debt-does-in-kansas-lawmaker",
        "publication": "Microbilt.Com",
        "date": "2026-03-31"
      },
      {
        "title": "News Radio KMAN: Senate Leader Filed for Bankruptcy",
        "url": "https://1350kman.com/2012/12/senate-leader-filed-for-bankruptcy-in-2010/",
        "publication": "1350kman.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ginny Krumme Substack: Ty Masterson, Chapter 1",
        "url": "https://ginnykrumme.substack.com/p/ty-masterson-chapter-1",
        "publication": "Ginnykrumme.Substack.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Campaign Finance Reports",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Millionaire Candidates",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Washington Examiner: Trumpworld Gets Behind Masterson",
        "url": "https://www.washingtonexaminer.com/news/campaigns/state/3883028/trumpworld-gets-behind-ty-masterson-kansas-governor-race/",
        "publication": "Washingtonexaminer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: Masterson Assembles National Team",
        "url": "https://sunflowerstatejournal.com/masterson-assembles-national-campaign-team-with-trump-ties/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Senate Campaign Finance Sources",
        "url": "https://kansasreflector.com/2023/06/04/where-did-kansas-state-senators-campaign-funds-come-from-the-answers-might-surprise-you/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Marijuana Moment: Gang Activity Fears",
        "url": "https://www.marijuanamoment.net/kansas-gop-senate-president-fears-legalizing-medical-marijuana-would-fuel-gang-activity/",
        "publication": "Marijuanamoment.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Marijuana Moment: Kill Medical Marijuana Pilot",
        "url": "https://www.marijuanamoment.net/kansas-senators-kill-bill-to-create-medical-marijuana-pilot-program/",
        "publication": "Marijuanamoment.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Marijuana Moment: 60% Support Legalization",
        "url": "https://www.marijuanamoment.net/three-in-five-kansans-back-legalizing-recreational-marijuana-and-70-want-medical-cannabis-new-poll-finds/",
        "publication": "Marijuanamoment.Net",
        "date": "2026-03-31"
      },
      {
        "title": "ALEC: Hugh Hewitt Show Appearance",
        "url": "https://alec.org/article/2024-agendas-ty-masterson-hugh-hewitt/",
        "publication": "Alec.Org",
        "date": "2026-03-31"
      },
      {
        "title": "StateAffairs Pro: Masterson Assumes ALEC Chair",
        "url": "https://pro.stateaffairs.com/ks/flash/ty-masterson-alec-chair",
        "publication": "Pro.Stateaffairs.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: ALEC Chair",
        "url": "https://sunflowerstatejournal.com/masterson-become-new-national-chair-of-alec/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Charlie Kirk Denouncement",
        "url": "https://kansasreflector.com/2026/01/28/kansas-senate-president-denounces-democrats-for-out-of-context-bs-comments-on-charlie-kirk/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Raccoon/Soros Editorial",
        "url": "https://kansasreflector.com/2025/12/11/spot-the-difference-candidate-befuddled-by-kansas-reflector-or-tipsy-raccoon-you-make-the-call/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Wine and Cheese / GoCreate",
        "url": "https://kansasreflector.com/2026/03/04/kansas-senate-budget-seeks-to-pry-state-funding-from-wine-and-cheese-crowd/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: COGE Open Records",
        "url": "https://kansasreflector.com/2025/04/23/kansas-legislatures-supermajority-makes-mockery-of-open-records-law-over-efficiency-portal-messages/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: COGE Formal Complaint",
        "url": "https://kansasreflector.com/2025/05/22/why-kansas-reflector-filed-a-complaint-about-stonewalling-by-the-senate-efficiency-panel/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Governor Doubtful on Redistricting",
        "url": "https://kansasreflector.com/2025/12/16/kansas-governor-doubtful-gop-legislators-can-pull-off-congressional-redistricting/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Senate Gets Enough Signatures",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-10-27/kansas-senate-redistricting-special-session-gerrymandering-trump",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: Masterson Confirms Redistricting Plan",
        "url": "https://www.kwch.com/2025/09/24/gubernatorial-candidate-ty-masterson-confirms-plan-fall-redistricting-session/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WSU Profile: Ty Masterson",
        "url": "https://www.wichita.edu/profiles/research/Masterson-Ty.php",
        "publication": "Wichita.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "GoCreate Newsroom",
        "url": "https://www.gocreate.com/newsroom",
        "publication": "Gocreate.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "jeff-colyer",
    "name": "Jeff Colyer",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Physician / Former Governor",
    "religion": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
    "education": "1978 — Thomas More Prep High School, Hays, KS — High School Diploma",
    "family": "The family owned a small farm in the Hays area",
    "campaignWebsite": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
    "whoTheyAre": "1960: Born in Hays, Kansas.\n\n1978: Graduated Thomas More Prep High School, Hays.\n\n1981: BA Economics, Georgetown University.\n\n1982: MA International Relations, Clare Hall, Cambridge University.",
    "theirRecord": "Strongly pro-life.\n\nAs governor, supported state constitutional amendment to remove abortion rights protections (failed at ballot in 2022).\n\nSigned faith-based adoption protection bill (SB 284).\n\nDescribes abortion as \"one of the civil rights issues of our time.",
    "whatYouShouldKnow": [
      "Unmatched humanitarian credentials. No other candidate in this race -- or virtually any American political race -- can claim to have been the only surgeon in southern Rwanda during a genocide. His 35+ years of war zone medical service across 20+ countries is extraordinary and genuine",
      "Executive experience. He is the only candidate who has actually served as Governor of Kansas. He managed a $17 billion budget and 40,000 employees",
      "Financial turnaround narrative. Turning a $500 million deficit into a $900 million surplus without raising taxes is a powerful talking point with fiscal conservatives",
      "Colyer's first-term campaign history is defined by the unusual 2018 transition into the governorship",
      "He paused a prior campaign after a prostate cancer diagnosis, which has remained part of his public story"
    ],
    "whereTheyWorship": "Confidence: STRONG INDICATOR (Catholic background); CURRENT CHURCH UNKNOWN.\n\nDenomination: Catholic background (TMP-Marian, Hays); current affiliation uncertain.",
    "church": {
      "name": "Specific current church not confirmed",
      "denomination": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
      "details": "Confidence: STRONG INDICATOR (Catholic background); CURRENT CHURCH UNKNOWN. Denomination: Catholic background (TMP-Marian, Hays); current affiliation uncertain."
    },
    "quotes": [
      {
        "text": "dedicated to making a difference in people's lives",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "focus on economic prosperity, healthcare reform, and family values",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I will fight for Kansas families",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://www.jeffcolyer.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Ended 50 years of litigation over our schools that had eluded over a dozen governors",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://jeffcolyer.com/",
        "topic": "JEFF COLYER, M.D. -- COMPLETE INVESTIGATIVE DOSSIER"
      },
      {
        "text": "I'll get the woke out of our schools",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://jeffcolyer.com/",
        "topic": "JEFF COLYER, M.D. -- COMPLETE INVESTIGATIVE DOSSIER"
      },
      {
        "text": "Keep criminal illegal aliens out of Kansas",
        "source": "Jeff Colyer research file",
        "date": "2026-03-31",
        "url": "https://jeffcolyer.com/",
        "topic": "JEFF COLYER, M.D. -- COMPLETE INVESTIGATIVE DOSSIER"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$2.07 million",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: state filing PDF referenced in SWLinks2026EC.",
      "donors": [
        {
          "name": "Total Raised",
          "amount": "~$2.07 million"
        },
        {
          "name": "Self-Funded (Personal Loans)",
          "amount": "$1.05 million"
        },
        {
          "name": "Donor Contributions",
          "amount": "~$1.02 million"
        },
        {
          "name": "Cash on Hand",
          "amount": "$1.8 million"
        },
        {
          "name": "Total personal commitment",
          "amount": "$1.05 million"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "jeffcolyer.com",
        "url": "https://www.jeffcolyer.com/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Jeffcolyer.Com",
        "url": "https://www.jeffcolyer.com/get-involved/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kctv5.Com",
        "url": "https://www.kctv5.com/2025/05/14/former-kansas-governor-jeff-colyer-announces-he-will-run-again-2026/",
        "publication": "Kctv5.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - Kansas Historical Society",
        "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
        "publication": "Kansashistory.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB: Former Kansas governor volunteers on medical mission in Ukraine",
        "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer for Governor",
        "url": "https://www.jeffcolyer.com/index.html",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "jeffcolyer.com",
        "url": "https://jeffcolyer.com/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "colyerforgovernor.com",
        "url": "https://www.colyerforgovernor.com/",
        "publication": "Colyerforgovernor.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@DrJeffColyer",
        "url": "https://x.com/DrJeffColyer",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@GovJeffColyer",
        "url": "https://x.com/govjeffcolyer",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Dr. Jeff Colyer (@JeffColyerMD)",
        "url": "https://www.facebook.com/JeffColyerMD/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "jeff-colyer-6894363",
        "url": "https://www.linkedin.com/in/jeff-colyer-6894363/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - Ballotpedia",
        "url": "https://ballotpedia.org/Jeff_Colyer",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - National Governors Association",
        "url": "https://www.nga.org/governor/jeff-colyer/",
        "publication": "Nga.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jeff Colyer - Georgetown Institute of Politics",
        "url": "https://politics.georgetown.edu/profile/jeff-colyer/",
        "publication": "Politics.Georgetown.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "jeffcolyer.com - About",
        "url": "https://www.jeffcolyer.com/about/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "jeffcolyer.com - About Gov",
        "url": "https://www.jeffcolyer.com/about-gov/",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "jeffcolyer.com - Announcements",
        "url": "https://jeffcolyer.com/announcements.html",
        "publication": "Jeffcolyer.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Six GOP candidates debate (Jan 30, 2026)",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Prescription for change (Feb 23, 2026)",
        "url": "https://kansasreflector.com/2026/02/23/republican-candidate-for-kansas-governor-offering-voters-a-prescription-for-change/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Millionaire candidates fundraising (Jan 19, 2026)",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Colyer maneuvers closer (2025)",
        "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Colyer endorses Trump (Nov 2023)",
        "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Wokeism/Oxpecker (Nov 2025)",
        "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Colyer narrow miss 2018 fueling 2022 campaign",
        "url": "https://kansasreflector.com/2021/07/12/colyers-narrow-miss-in-2018-fueling-resurgent-gop-campaign-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Colyer jumps into 2026 race",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Colyer drops out 2022 race",
        "url": "https://www.kcur.org/news/2021-08-30/the-kansas-a-g-s-path-to-governor-gets-easier-after-his-opponent-endorses-him",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - First executive order",
        "url": "https://www.kcur.org/post/colyers-first-executive-order-kansas-governor-fight-sexual-harassment",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR - Faith-based adoption law",
        "url": "https://www.kcur.org/politics-elections-and-government/2018-05-18/faith-based-adoption-law-signed-quickly-becoming-kansas-campaign-fodder",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KAKE - Colyer launches bid inspired by Trump",
        "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSNT - Colyer announces bid",
        "url": "https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/",
        "publication": "Ksnt.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - FHSU speech",
        "url": "https://hayspost.com/posts/af650bef-0c19-4f73-b418-bded940b0b7a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Salina Post - Debate statements and answers",
        "url": "https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e",
        "publication": "Salinapost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Salina Post - Q&A on specific issues",
        "url": "https://salinapost.com/posts/9f9b260b-5c26-4cd6-a81c-212904371850",
        "publication": "Salinapost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NBC News - Colyer concedes 2018 primary",
        "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
        "publication": "Nbcnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CNN - Kobach wins Kansas GOP primary",
        "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
        "publication": "Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NPR - Kobach wins primary",
        "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
        "publication": "Npr.Org",
        "date": "2026-03-31"
      },
      {
        "title": "NPR - Kansas Lt. Gov. takes over as Brownback leaves",
        "url": "https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship",
        "publication": "Npr.Org",
        "date": "2026-03-31"
      },
      {
        "title": "PBS - Sexual harassment training executive order",
        "url": "https://www.pbs.org/newshour/politics/new-kansas-governor-to-require-annual-sexual-harassment-training",
        "publication": "Pbs.Org",
        "date": "2026-03-31"
      },
      {
        "title": "The Hill - Colyer ends 2022 campaign",
        "url": "https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/",
        "publication": "Thehill.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Smart Politics - Colyer and Kansas gubernatorial comeback bids",
        "url": "https://smartpolitics.lib.umn.edu/2025/05/14/jeff-colyer-and-a-review-of-kansas-gubernatorial-comeback-bids/",
        "publication": "Smartpolitics.Lib.Umn.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "CGSC Foundation - Person of Note (May 2020)",
        "url": "https://www.cgscfoundation.org/person-of-the-month-may-2020/",
        "publication": "Cgscfoundation.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jobs for America's Graduates - Bio",
        "url": "https://jag.org/dipl-team-member/jeff-colyer/",
        "publication": "Jag.Org",
        "date": "2026-03-31"
      },
      {
        "title": "House.gov - Lt. Governor biography (Sept 2013)",
        "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
        "publication": "Docs.House.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KSCB News - Sworn in as 47th Governor",
        "url": "https://www.kscbnews.net/jeff-colyer-m-d-sworn-in-as-47th-governor-of-the-state-of-kansas/",
        "publication": "Kscbnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Ruth Gutierrez Colyer - NGA",
        "url": "https://www.nga.org/governor-spouse/ruth-gutierrez-colyer/",
        "publication": "Nga.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart - Jeff Colyer",
        "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "OnTheIssues - Jeff Colyer",
        "url": "https://www.ontheissues.org/Jeff_Colyer.htm",
        "publication": "Ontheissues.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Sano Specialty Care - Dr. Colyer",
        "url": "https://sanokc.com/provider/dr-colyer/",
        "publication": "Sanokc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Renaissance Plastic Surgical Arts",
        "url": "https://www.renaissanceplasticsurgicalarts.com/",
        "publication": "Renaissanceplasticsurgicalarts.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Healthgrades - Dr. Jeffrey Colyer",
        "url": "https://www.healthgrades.com/physician/dr-jeffrey-colyer-xpdcb",
        "publication": "Healthgrades.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NKC Health - Jeffrey W. Colyer, M.D.",
        "url": "https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery",
        "publication": "Nkchealth.Org",
        "date": "2026-03-31"
      },
      {
        "title": "WebMD - Dr. Jeffrey Colyer",
        "url": "https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview",
        "publication": "Doctor.Webmd.Com",
        "date": "2026-03-31"
      },
      {
        "title": "IMC - Lt. Governor to Climb Mt. Kilimanjaro",
        "url": "https://internationalmedicalcorps.org/press-release/lt-governor-to-climb-mt-kilimanjaro-in-support-of-international-medical-corps-humanitarian-relief-efforts/",
        "publication": "Internationalmedicalcorps.Org",
        "date": "2026-03-31"
      },
      {
        "title": "James Daniel Colyer - Find a Grave",
        "url": "https://www.findagrave.com/memorial/142168654/james-daniel-colyer",
        "publication": "Findagrave.Com",
        "date": "2026-03-31"
      },
      {
        "title": "James Colyer Obituary - Kansas City Star",
        "url": "https://www.legacy.com/obituaries/kansascity/obituary.aspx?pid=174049747",
        "publication": "Legacy.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Ethics Commission - 2026 Election Cycle Filing",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal - Colyer, Schwab most recognized",
        "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "2018 Kansas gubernatorial election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2018_Kansas_gubernatorial_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "2026 Kansas gubernatorial election - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ethan-corson",
    "name": "Ethan Corson",
    "party": "D",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "State Senator / Attorney",
    "family": "Wife: Jenna Brofsky -- attorney at Husch Blackwell law firm (employment group, advising and litigation). She previously served on the Fairway City Council. Grew up in a New York City suburb, attended a Conservative synagogue",
    "campaignWebsite": "https://ethanforkansas.com",
    "whoTheyAre": "Full Name: Ethan Corson.\n\nBorn: 1982 (age 43).\n\nHometown: Fairway, Kansas (Johnson County).\n\nEducation:.",
    "theirRecord": "Senate Committee Assignments (2025-2026 Session):.\n\nJudiciary (Ranking Minority Member).\n\nTransportation (Ranking Minority Member).\n\nAssessment and Taxation.",
    "whatYouShouldKnow": [
      "Corson is the strongest Democratic candidate by every measurable metric: money, endorsements, and institutional support. His \"common sense, common ground\" messaging is designed to appeal to moderate Republicans and independents in a red state. His Jewish faith is notable in a heavily Christian state -- he does not appear to foreground it. His labor law background and union representation work will be a double-edged sword: appeals to working families but provides ammunition for Republican attacks. His time at the Kansas Democratic Party gives him deep institutional knowledge of the state's political machinery. The 8,000-mile crisscross of Kansas shows a serious effort to compete in rural areas, which is the Democratic Party's greatest weakness in the state",
      "Corson is one of the race's best-connected Democrats and has endorsements from major Kansas Democratic figures",
      "His campaign is defined more by competence and coalition-building than ideology",
      "Garden City Community College -- baseball pitcher, Academic All-American",
      "Washington University in St. Louis -- undergraduate and law degrees"
    ],
    "whereTheyWorship": "Confidence: ATTENDS CHURCH (specific church unknown).\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "work hard, give back whenever you can",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "favorite part of every week is making pancakes with the boys before Sunday school",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "ETHAN CORSON"
      },
      {
        "text": "He is describing a weekly family routine of church attendance with his kids.",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "ETHAN CORSON"
      },
      {
        "text": "is a lived detail, not a talking point. However, the specific church and denomination were not identified. The",
        "source": "Ethan Corson research file",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com/",
        "topic": "ETHAN CORSON"
      },
      {
        "text": "Kansans should be able to get the care that they need without going broke and without driving for hours to see a doctor. Right now, we have major challenges in our health care system because of the failures in Washington.",
        "source": "Kansas Reflector, March 8, 2026",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com",
        "topic": "ETHAN CORSON"
      },
      {
        "text": "If the federal administration had just done nothing, it would have been a good year for most farmers. This is a completely self-inflicted wound that the federal government has put on Kansas farmers and farmers around the country.",
        "source": "Kansas Reflector, March 8, 2026",
        "date": "2026-03-31",
        "url": "https://ethanforkansas.com",
        "topic": "ETHAN CORSON"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01EC_202601.pdf.",
      "donors": [
        {
          "name": "Total Contributions",
          "amount": "$902,641.13"
        },
        {
          "name": "Total Expenditures",
          "amount": "$375,665.32"
        },
        {
          "name": "Cash on Hand",
          "amount": "$526,975.81"
        },
        {
          "name": "In-Kind Contributions",
          "amount": "$6,797.37"
        },
        {
          "name": "70%",
          "amount": "Percentage Under $100"
        },
        {
          "name": "Personal Loans",
          "amount": "$0"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "ethanforkansas.com",
        "url": "https://ethanforkansas.com/",
        "publication": "Ethanforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01EC_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01EC_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ethanforkansas.Com",
        "url": "https://ethanforkansas.com/about",
        "publication": "Ethanforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kcjc.Com",
        "url": "https://www.kcjc.com/section-blog/1819-news/archived-news/4844-from-a-love-of-baseball-to-a-love-of-politics",
        "publication": "Kcjc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Ethan Corson enters race for governor",
        "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ethanforkansas.com",
        "url": "https://ethanforkansas.com",
        "publication": "Ethanforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, March 8, 2026",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ethan Corson for Kansas",
        "url": "https://www.facebook.com/ethanforkansas",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@ethanforkansas",
        "url": "https://www.instagram.com/ethanforkansas/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/ethancorson",
        "url": "https://www.linkedin.com/in/ethancorson/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Kelly endorses Corson (Nov 17, 2025)",
        "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Sebelius endorses Corson (Jan 2026)",
        "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Campaign finance reports (Jan 9, 2026)",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Rural voter appeal (Nov 25, 2025)",
        "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KC Jewish Chronicle: Corson Senate candidacy",
        "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7",
        "publication": "Kcjc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia: Ethan Corson",
        "url": "https://en.wikipedia.org/wiki/Ethan_Corson",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Ethan Corson",
        "url": "https://ballotpedia.org/Ethan_Corson",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Senate Democrats: Corson bio",
        "url": "https://www.kssenatedems.org/ethan-corson",
        "publication": "Kssenatedems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Dole Institute: Corson fellow",
        "url": "https://doleinstitute.org/about/fellows/ethan-corson/",
        "publication": "Doleinstitute.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post: Corson enters race (July 22, 2025)",
        "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KS Legislature: Sen. Corson",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "cindy-holscher",
    "name": "Cindy Holscher",
    "party": "D",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "State Senator",
    "family": "Husband: Greg Holscher",
    "campaignWebsite": "https://cindyforkansas.com/",
    "whoTheyAre": "Full Name: Cynthia L. Holscher (nee Blumhorst).\n\nBorn: April 26, 1969 (age 56).\n\nHometown: Born in Slater, Missouri; lives in Overland Park, Kansas.\n\nEducation:.",
    "theirRecord": "Key Accomplishments:.\n\nCo-founded the Women's Bipartisan Caucus in the Kansas Legislature.\n\nPart of the bipartisan coalition that reversed the Brownback-era tax cuts in 2017.\n\nFought to expand Medicaid eligibility (passed the House but fell short of overcoming Brownback's veto).",
    "whatYouShouldKnow": [
      "Holscher has the most compelling personal narrative in the Democratic field -- granddaughter of tenant farmers, daughter of a construction worker and school custodian, first-generation college graduate, single mom who worked her way up through Sprint. Her legislative record is genuinely bipartisan, and her 9 years in the statehouse give her more governing experience than Corson. But the Kelly-endorsed Corson has outflanked her on money and endorsements. Her school voucher critique is razor-sharp and resonates in rural Kansas where there simply are no private schools. Her silence on faith is notable -- in Kansas politics, that is a gap that opponents will exploit. The pressure campaign story is politically damaging to the Democratic establishment more than to Holscher herself",
      "Holscher has been a frequent critic of Republican leadership and has been part of high-visibility policy fights",
      "She is one of the stronger progressive voices in a Johnson County Democratic lane",
      "R.H. Donnelley -- early career",
      "Sprint Corp -- over a decade; developed and oversaw multi-million-dollar budgets and operations for various departments; award-winner in employee development"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD (attended events at UU and Episcopal churches).\n\nDenomination: Unknown.",
    "church": {
      "name": "Not confirmed; attended events at Shawnee Mission UU Church and St. Andrew's Episcopal",
      "details": "Confidence: NO PUBLIC RECORD (attended events at UU and Episcopal churches). Denomination: Unknown."
    },
    "quotes": [
      {
        "text": "I’m running for Governor to fight for all Kansans",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I will fight for our kids, our seniors, our veterans, and our farmers",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "cost of living is too high",
        "source": "Cindy Holscher research file",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "School vouchers are a scam, a transfer of wealth to the already rich. About 70% of vouchers go to rich families already sending their kids to private school.",
        "source": "Johnson County Post, March 13, 2023",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com",
        "topic": "CINDY HOLSCHER"
      },
      {
        "text": "The push for 'school choice' is just another way to get more of our taxpayer dollars into the hands of those who are already wealthy.",
        "source": "Johnson County Post, 2023",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com",
        "topic": "CINDY HOLSCHER"
      },
      {
        "text": "60 counties don't have private schools\" -- making vouchers useless for most rural Kansas families.",
        "source": "Referenced in multiple campaign materials",
        "date": "2026-03-31",
        "url": "https://cindyforkansas.com",
        "topic": "CINDY HOLSCHER"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01CH_202601.pdf.",
      "donors": [
        {
          "name": "Total Contributions",
          "amount": "~$397,000"
        },
        {
          "name": "Cash on Hand",
          "amount": "~$179,000"
        },
        {
          "name": "Personal Loans",
          "amount": "$0"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "cindyforkansas.com",
        "url": "https://cindyforkansas.com/",
        "publication": "Cindyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01CH_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CH_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasdems.Org",
        "url": "https://kansasdems.org/candidates",
        "publication": "Kansasdems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Cindy Holscher - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Cindy Holscher for Governor",
        "url": "https://cindyforkansas.com/about/",
        "publication": "Cindyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "cindyforkansas.com",
        "url": "https://cindyforkansas.com",
        "publication": "Cindyforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post, March 13, 2023",
        "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, March 8, 2026",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, August 1, 2025",
        "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Cindy Holscher for Kansas",
        "url": "https://www.facebook.com/cindyforkansas/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "cindyforsenateks.com",
        "url": "https://www.cindyforsenateks.com/",
        "publication": "Cindyforsenateks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Holscher enters race (June 12, 2025)",
        "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Bipartisan allure (Oct 6, 2025)",
        "url": "https://kansasreflector.com/2025/10/06/kansas-senator-leans-into-bipartisan-allure-in-campaign-for-kansas-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Cindy Holscher",
        "url": "https://ballotpedia.org/Cindy_Holscher",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "cindyforkansas.com/endorsements",
        "url": "https://cindyforkansas.com/endorsements/",
        "publication": "Cindyforkansas.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "marty-tuley",
    "name": "Marty Tuley",
    "party": "D",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Governor candidate",
    "family": "Wife: Lovena Tuley",
    "campaignWebsite": "https://www.tuley4gov2026.com/",
    "whoTheyAre": "Full Name: Marty Tuley.\n\nResidence: Lawrence, Kansas.\n\nEducation: Not specified in available records beyond reference to entrepreneurial background.\n\nFaith: NOT IDENTIFIED. No church, faith, or religious references found in any campaign materials or news coverage.",
    "theirRecord": "Tuley's platform is distinctly unusual for a Democrat:.\n\nTeacher Pay: Raise public school teacher salaries.\n\nSchool Meals: Two healthy meals a day for every Kansas public school child.\n\nCannabis: Legalize with tax revenue invested in schools.",
    "whatYouShouldKnow": [
      "Tuley is a political novice with no realistic path to the nomination. However, his candidacy is interesting because he breaks the Democratic mold on transgender athletes -- a position that could theoretically appeal to moderate Kansas voters but will alienate the progressive base. His \"obesity as a statewide health crisis\" framing is unique in this race. His background as a personal trainer/gym owner/fitness author gives him a distinctive profile, though the 2003 legal troubles with Total Fitness Athletic Center are a potential vulnerability that opponents could exploit. He has virtually no fundraising apparatus and no institutional support. His debate participation gives him a platform but not a realistic shot at winning",
      "Tuley is the least visible of the Democratic governor candidates in public coverage",
      "His campaign appears built more on values language than on a long legislative resume",
      "Campaign finance filings reviewed for this profile show no significant fundraising data found. tuley does not appear in the kansas reflector's campaign finance roundups, suggesting minimal funds raised compared to corson and holscher.",
      "I did not verify a public church affiliation in the sources reviewed"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "a campaign built on common sense, Kansas values, and bold solutions",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Kansas works best when it works for everyone",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Affordability and small business go hand in hand.",
        "source": "Kansas Reflector, March 8, 2026",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com",
        "topic": "MARTY TULEY"
      },
      {
        "text": "common sense, Kansas values, and bold solutions",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com",
        "topic": "MARTY TULEY"
      },
      {
        "text": "restore integrity, invest in our people, and rebuild the middle.",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com",
        "topic": "MARTY TULEY"
      },
      {
        "text": "obesity as a statewide health crisis",
        "source": "Marty Tuley research file",
        "date": "2026-03-31",
        "url": "https://www.tuley4gov2026.com",
        "topic": "MARTY TULEY"
      }
    ],
    "campaignFinance": {
      "totalRaised": "No significant fundraising data found. Tuley does not appear in the Kansas Reflector's campaign finance roundups, suggesting minimal funds raised compared to Corson and Holscher.",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01MT_AT.pdf.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "tuley4gov2026.com",
        "url": "https://www.tuley4gov2026.com/",
        "publication": "Tuley4gov2026.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01MT_AT.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01MT_AT.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ministryofinfluence.Org",
        "url": "https://ministryofinfluence.org/candidates/martin-tuley/",
        "publication": "Ministryofinfluence.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Tuley4gov2026.Com",
        "url": "https://www.tuley4gov2026.com/contact",
        "publication": "Tuley4gov2026.Com",
        "date": "2026-03-31"
      },
      {
        "title": "tuley4gov2026.com",
        "url": "https://www.tuley4gov2026.com",
        "publication": "Tuley4gov2026.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW, July 28, 2025",
        "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, March 8, 2026",
        "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Rural voters (Nov 25, 2025)",
        "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Amazon: Get Off Your Ass!",
        "url": "https://www.amazon.com/Get-Off-Your-Ass-Definitive/dp/1591201292",
        "publication": "Amazon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Amazon: Busting Your Butt and Gut",
        "url": "https://www.amazon.com/Busting-Your-Butt-Gut-Minimizing/dp/1591202086",
        "publication": "Amazon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ReadHowYouWant: Tuley biography",
        "url": "https://www.readhowyouwant.com/authors/details/Marty-Tuley/6407",
        "publication": "Readhowyouwant.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World: Total Fitness legal battles (2003)",
        "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Open Powerlifting: Marty Tuley",
        "url": "https://openpowerlifting.org/u/martytuley",
        "publication": "Openpowerlifting.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "charlotte-ohara",
    "name": "Charlotte O'Hara",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Activist / Former Local Official",
    "family": "Children: Mother of 5, grandmother of 7",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/charlotte-o-hara",
    "whoTheyAre": "Full Name: Charlotte O'Hara.\n\nBorn: January 7, 1951 (age 75).\n\nHometown: Olathe, Kansas (Johnson County).\n\nEducation: Not specified in available records.",
    "theirRecord": "O'Hara is running as the most aggressive populist conservative in the field:.\n\nProperty Taxes:.\n\nCentral campaign issue.\n\nI cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes.",
    "whatYouShouldKnow": [
      "O'Hara is a populist firebrand who will not win the nomination but will make noise. Her combative style already cost her the Johnson County Commissioner seat in 2024, and Masterson publicly called out her approach as damaging to Republican general election prospects. Her anti-STAR bond position on the Chiefs/Royals stadium deal is actually popular with fiscal conservatives, and her \"DOGE must come to Kansas\" messaging taps into the current national mood. But at 75 with a recent electoral loss by 7 points in her own district, she lacks the credibility and resources to compete. Her prolific column-writing is both her greatest asset (transparency) and greatest liability (ammunition for opponents). She is a spoiler candidate who could pull votes from the right flank",
      "O'Hara has been a persistent fiscal conservative voice in Johnson County politics",
      "She is a familiar name to Kansas Republicans looking for a harder-right alternative in the governor field",
      "General contractor and developer -- 20 years",
      "Member, Kansas City Home Builders Association"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "A proven fighter for Kansas",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I look forward to visiting with you on the campaign trail!",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I cannot stand silent and watch small businesses and homeowners be destroyed through high property taxes.",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com",
        "topic": "CHARLOTTE O'HARA"
      },
      {
        "text": "Stop tax incentives, these subsidies increase YOUR property taxes!",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com",
        "topic": "CHARLOTTE O'HARA"
      },
      {
        "text": "Rein in spending... DOGE must come to Kansas!",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com",
        "topic": "CHARLOTTE O'HARA"
      },
      {
        "text": "The era of fraud, waste and bloated bureaucracy is over!",
        "source": "Charlotte O'Hara research file",
        "date": "2026-03-31",
        "url": "https://oharaforkansas.com",
        "topic": "CHARLOTTE O'HARA"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01CO_202601.pdf.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "oharaforkansas.com",
        "url": "https://oharaforkansas.com/",
        "publication": "Oharaforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01CO_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01CO_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Oharaforkansas.Com",
        "url": "https://oharaforkansas.com/about-charlotte-ohara/",
        "publication": "Oharaforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/charlotte-o-hara",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "oharaforkansas.com",
        "url": "https://oharaforkansas.com",
        "publication": "Oharaforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, November 28, 2025",
        "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, February 16, 2026",
        "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, January 30, 2026",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "O'Hara for JoCo",
        "url": "https://www.facebook.com/oharaforjoco/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post: O'Hara governor bid (March 10, 2025)",
        "url": "https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Johnson County Post: 2024 election results (Nov 5, 2024)",
        "url": "https://johnsoncountypost.com/2024/11/05/county-commission-races-2024-general-246243/",
        "publication": "Johnsoncountypost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia: Charlotte O'Hara",
        "url": "https://en.wikipedia.org/wiki/Charlotte_O'Hara",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Charlotte O'Hara",
        "url": "https://ballotpedia.org/Charlotte_O'Hara",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "stacy-rogers",
    "name": "Stacy Rogers",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Businesswoman / Former School Board Member",
    "family": "Children: Mother of three sons (now adults), two of whom have learning challenges",
    "campaignWebsite": "https://stacyrogersforks.com/",
    "whoTheyAre": "Full Name: Stacy Rogers (nee Hepner).\n\nHometown: Born in Wichita, raised in Newton, now lives in Wichita.\n\nEducation: Newton High School graduate; 15 years of pharmacy and medical field experience (no specific degree confirmed).\n\nFaith: Identifies as a \"Child of God\" on social media. No specific church or denomination identified, but faith language is prominent in her public profile.",
    "theirRecord": "Day One Executive Order: \"Go through each Department with a fine tooth comb, root out inefficiencies, mishandling and fraud.\n\nProperty Taxes: Address rising property tax burden.\n\nSTAR Bonds: Sunset STAR bonds that \"funnel millions into investor pockets instead of strengthening local communities.\n\nALBTR Revenue: Return cigarette and alcohol tax revenue (ALBTR) back to Kansas counties.",
    "whatYouShouldKnow": [
      "Rogers has a compelling personal story -- homeschooling mother of children with learning challenges, pharmacy background, small business owner with a nationally franchised brand. Her early declaration and first-to-file status show ambition, but her fundraising is essentially nonexistent compared to the major candidates. Her \"first female Republican governor\" angle is noteworthy but insufficient without serious money. Her platform is standard conservative (government efficiency, property taxes, pro-life) without a distinctive breakthrough message. The Kids Closet national franchise business is actually a more impressive credential than it initially appears -- running a national franchise system requires real organizational skill. But without a fundraising breakthrough, she is a long-shot candidate",
      "Rogers is a lower-profile candidate whose viability depends heavily on message resonance and donor support",
      "Public coverage treats her as a political newcomer rather than an established officeholder",
      "15 years in pharmacy and medical settings",
      "Parent match with Families Together -- helped families navigate issues and advocate for children with learning challenges"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "Straight Talk. Real Issues. For All Kansans.",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "No spin. No political filter.",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Go through each Department with a fine tooth comb, root out inefficiencies, mishandling and fraud",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com",
        "topic": "STACY ROGERS"
      },
      {
        "text": "funnel millions into investor pockets instead of strengthening local communities",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com",
        "topic": "STACY ROGERS"
      },
      {
        "text": "Supporting families and protecting life",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com",
        "topic": "STACY ROGERS"
      },
      {
        "text": "first female Republican governor",
        "source": "Stacy Rogers research file",
        "date": "2026-03-31",
        "url": "https://stacyrogersforks.com",
        "topic": "STACY ROGERS"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Public reporting on the filing showed roughly $25,542.98 raised and $14,470.23 cash on hand.",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01SR_202601.pdf.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "stacyrogersforks.com",
        "url": "https://stacyrogersforks.com/",
        "publication": "Stacyrogersforks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01SR_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SR_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Stacyrogersforks.Com",
        "url": "https://stacyrogersforks.com/the-rogers-report",
        "publication": "Stacyrogersforks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/stacy-l-rogers-michael-w-smith",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Yahoo.Com",
        "url": "https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html",
        "publication": "Yahoo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "stacyrogersforks.com",
        "url": "https://stacyrogersforks.com",
        "publication": "Stacyrogersforks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Stacy Hepner Rogers",
        "url": "https://www.facebook.com/StacyHepnerRogers/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Stacy Rogers For Governor",
        "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KAKE: Rogers announces (Feb 2025)",
        "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSN: Republican woman for governor",
        "url": "https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/",
        "publication": "Ksn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Stacy Rogers",
        "url": "https://ballotpedia.org/Stacy_Rogers",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas governor 2026 guide (July 24, 2025)",
        "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Schooley Mitchell: Eberly Farm / Kids Closet story",
        "url": "https://www.schooleymitchell.com/news/rholter/feature-story-eberly-farm-and-kids-closet-connection/",
        "publication": "Schooleymitchell.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Riley County Republicans: Meet Rogers",
        "url": "https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/",
        "publication": "Rileyks.Gop",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "joy-eakins",
    "name": "Joy Eakins",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Governor candidate",
    "family": "Not identified in available records. No spouse or children referenced in campaign materials or news coverage found",
    "campaignWebsite": "https://www.kansascomeback.com/about",
    "whoTheyAre": "Full Name: Joy Eakins.\n\nHometown: Wichita, Kansas.\n\nEducation:.\n\nFull-ride scholarships for undergraduate and graduate degrees (overcame childhood adversity).",
    "theirRecord": "Trump Alignment: Explicitly aligns with Trump, claims Kansas is on the cusp of a \"golden age\" under his leadership.\n\nTaxes: Cut taxes and reduce regulations.\n\nGovernment: Limit the size of government, cut state budgets.\n\nMedical Freedom: \"Families should have the right to make the medical decisions that benefit themselves and their kids, even if those decisions are different from what government bureaucrats recommend.",
    "whatYouShouldKnow": [
      "Eakins is a serious person with a serious resume -- Bell Labs, Lucent, Avaya, founding a successful data firm, chairing the Wichita Chamber. Her Theological Studies background and company name \"Cornerstone\" suggest a faith-rooted worldview without being heavy-handed. But her campaign is almost entirely self-funded ($1M personal loan out of $1.14M total), which raises questions about grassroots support. Her explicit Trump alignment (\"golden age\") may help in a Republican primary but could be a liability in the general. Her school board experience (won by just 46 votes, chose not to run for re-election) is thin public service experience. Her \"medical freedom\" messaging is coded anti-vaccine/anti-mandate language from the COVID era. At the debate, she positioned herself as an outsider alongside Sarnecki against the establishment candidates",
      "Eakins' school-board profile during COVID-era school closures is the main public policy origin story for her campaign",
      "She is one of the few candidates whose pitch is tightly bound to school reopening and data analysis",
      "Overcame childhood adversity; earned full-ride scholarships",
      "Milliman -- programming, database, and analytical skills"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "strong conservative and America First patriot",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Joy used her data analytics firm to prove how we could get kids back into Kansas classrooms safely",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The United States was on the cusp of a \"golden age\" under President Donald Trump, but Kansas could miss out on that good fortune if it failed to elect a conservative governor.",
        "source": "Kansas Reflector, January 19, 2026",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com",
        "topic": "JOY EAKINS"
      },
      {
        "text": "Families should have the right to make the medical decisions that benefit themselves and their kids, even if those decisions are different from what government bureaucrats recommend.",
        "source": "KSN News",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com",
        "topic": "JOY EAKINS"
      },
      {
        "text": "Kansas' established politicians \"have been stewarding our decline.",
        "source": "Kansas Reflector, January 30, 2026",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com",
        "topic": "JOY EAKINS"
      },
      {
        "text": "in light of the people and organizations that produced it",
        "source": "Joy Eakins research file",
        "date": "2026-03-31",
        "url": "https://www.kansascomeback.com",
        "topic": "JOY EAKINS"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$1,140,000",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01JK_AT.pdf.",
      "donors": [
        {
          "name": "Total Raised",
          "amount": "~$1,140,000"
        },
        {
          "name": "Personal Loan",
          "amount": "$1,000,000"
        },
        {
          "name": "Total Expenditures",
          "amount": "~$116,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "kansascomeback.com",
        "url": "https://www.kansascomeback.com/",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01JK_AT.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01JK_AT.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/about",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascomeback.Com",
        "url": "https://www.kansascomeback.com/education",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "kansascomeback.com",
        "url": "https://www.kansascomeback.com",
        "publication": "Kansascomeback.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, January 19, 2026",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSN News",
        "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
        "publication": "Ksn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, January 30, 2026",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Joy for KS",
        "url": "https://www.facebook.com/JoyforKS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@JoyforKS",
        "url": "https://x.com/JoyforKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Joy Eakins - Cornerstone Data, Inc",
        "url": "https://www.linkedin.com/in/joyeakins/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KAKE: Eakins discusses run",
        "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
        "publication": "Kake.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wichita Chamber: Eakins podcast (Jan 2023)",
        "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
        "publication": "Wichitachamber.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Cornerstone Data: About Us",
        "url": "https://cornerstonedata.com/about-us/",
        "publication": "Cornerstonedata.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Joy Eakins",
        "url": "https://ballotpedia.org/Joy_Eakins",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "philip-sarnecki",
    "name": "Philip Sarnecki",
    "party": "R",
    "position": "Governor candidate",
    "electionSlug": "kansas-governor-2026",
    "incumbent": false,
    "occupation": "Businessman",
    "family": "Wife: Heidi Sarnecki",
    "campaignWebsite": "https://philipsarnecki.org/",
    "whoTheyAre": "Full Name: R. Philip Sarnecki.\n\nHometown: Bucyrus, Kansas (Johnson County area, with Franklin County farm).\n\nEducation: Not specified in available records (no college details found).\n\nFaith: Explicitly Christian. His campaign ad ends with a personal appeal to his Christian faith. He appeared on Bott Radio Network (Christian radio) to discuss leadership and the governor's race. He co-owns 513 Films, a faith-based film production company. The name \"513\" likely refers to a Bible verse. His faith is central to his public identity.",
    "theirRecord": "Tagline: \"Stand with President Trump.\n\nTaxes: Lower taxes, especially property taxes -- \"career politicians have failed to fix the issue.\n\nGovernment: Cut government red tape, reduce regulations.\n\nEducation: Restore parental rights in education.",
    "whatYouShouldKnow": [
      "Sarnecki is the most interesting minor Republican candidate and arguably the one with the best chance of breaking into the top tier. His advantages:",
      "Money: More cash on hand than any other candidate in either party. Money buys TV ads, and TV ads win primaries in Kansas",
      "Outsider appeal: In a cycle where \"career politicians\" are unpopular, his zero-political-experience-but-massive-business-success profile fits the Trump-era mold",
      "Sarnecki is one of the least established candidates in the field and therefore depends heavily on faith and outsider framing",
      "He appears to be aiming at socially conservative voters looking for a business-led alternative"
    ],
    "whereTheyWorship": "Faith is publicly Christian.\n\nI did not verify a specific church membership or church website in public sources during this pass.",
    "quotes": [
      {
        "text": "I’m just a Kansas dad, husband and businessman",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "guided by his Christian faith and conservative values",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "faith, business, outsider vision",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Career politicians are failing us. I am tired of watching Republicans lose in Kansas. No more losing. It's time to start winning again, and that's why I'm running for governor.",
        "source": "Kansas Reflector, January 30, 2026",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org",
        "topic": "PHILIP SARNECKI"
      },
      {
        "text": "Stand with President Trump",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org",
        "topic": "PHILIP SARNECKI"
      },
      {
        "text": "career politicians have failed to fix the issue",
        "source": "Philip Sarnecki research file",
        "date": "2026-03-31",
        "url": "https://philipsarnecki.org",
        "topic": "PHILIP SARNECKI"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW01PS_202601.pdf.",
      "donors": [
        {
          "name": "Total Receipts",
          "amount": "$2,528,715.73"
        },
        {
          "name": "Personal Loan",
          "amount": "~$2,000,000"
        },
        {
          "name": "Cash on Hand",
          "amount": "~$2,300,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "philipsarnecki.org",
        "url": "https://philipsarnecki.org/",
        "publication": "Philipsarnecki.Org",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW01PS_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01PS_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Realmediakc.Com",
        "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
        "publication": "Realmediakc.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "philipsarnecki.org",
        "url": "https://philipsarnecki.org",
        "publication": "Philipsarnecki.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector, January 30, 2026",
        "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Philip Sarnecki For Governor",
        "url": "https://www.facebook.com/p/Philip-Sarnecki-For-Governor-61579950041528/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "R. Philip Sarnecki - 513 Films, LLC",
        "url": "https://www.linkedin.com/in/philipsarnecki/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Philip Sarnecki | Producer",
        "url": "https://www.imdb.com/name/nm3671154/",
        "publication": "Imdb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Sarnecki launches campaign (Sept 2025)",
        "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Millionaire candidates (Jan 19, 2026)",
        "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WLT Report: Meet the Republican businessman outsider (March 18, 2026)",
        "url": "https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/",
        "publication": "Wltreport.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Trending Politics: Frontrunner emerges",
        "url": "https://trendingpoliticsnews.com/new-frontrunner-emerges-in-key-race-as-gop-candidate-shatters-fundraising-records-mace/",
        "publication": "Trendingpoliticsnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: Sarnecki announces (Sept 2, 2025)",
        "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NOLN: Strickland Brothers franchise owner",
        "url": "https://www.noln.net/site-placement/latest-news/news/55314781/strickland-brothers-10-minute-oil-change-franchise-owner-running-for-kansas-governor",
        "publication": "Noln.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Bott Radio Network: Sarnecki interview (Oct 3, 2025)",
        "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
        "publication": "Bottradionetwork.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "kris-kobach",
    "name": "Kris Kobach",
    "party": "R",
    "position": "Kansas Attorney General",
    "electionSlug": "kansas-ag-2026",
    "incumbent": true,
    "occupation": "Attorney General / Former Secretary of State",
    "religion": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
    "campaignWebsite": "https://kriskobach.com/meet-kris/",
    "whoTheyAre": "Research files for Kris Kobach were reviewed in full for this profile, but the biography sections were thin. The linked sources below carry the original reporting and document trail.",
    "theirRecord": "Kobach's current AG record is built around visible fights rather than quiet office management. His campaign biography says he brought suit against OSHA over Biden vaccine mandates, against DHS on behalf of ICE agents and sheriffs, and against the Air Force on behalf of pilots facing religious-belief penalties. In practice, that means he has used the attorney general's office to elevate national conservative litigation themes into Kansas politics.\n\nHis broader public reputation still runs through his earlier work as secretary of state and his role in proof-of-citizenship litigation. The raw materials in this project show him pushing the 2026 Supreme Court-election amendment as a populist response to an \"attorney-controlled system,\" and the historical record shows that his name remains tied to the SAFE Act, voter-roll fights, and campaign-finance enforcement controversies. The 2022 FEC fine tied to his U.S. Senate campaign also remains part of the public story.",
    "whatYouShouldKnow": [
      "Campaign finance filings reviewed for this profile show kobach's filing is also backed by the broader summary totals in the state ethics report: $337,330.24 raised, $52,558.52 spent, and $502,626 cash on hand. the schedule a report is far longer than the small sample above, but these early itemized contributions already show a donor base heavy on small kansas checks and credit-card gifts.",
      "Confidence: CONFIRMED (church identified); DENOMINATION PARTIALLY CONFIRMED"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED (church identified); DENOMINATION PARTIALLY CONFIRMED.\n\nDenomination: Evangelical / Non-denominational (affiliated with Morning Star International, Nashville).",
    "church": {
      "name": "Morning Star Church, Lawrence, KS",
      "denomination": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "details": "Confidence: CONFIRMED (church identified); DENOMINATION PARTIALLY CONFIRMED. Denomination: Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)."
    },
    "quotes": [
      {
        "text": "Kansas Attorney General Kris Kobach was raised in Topeka, Kansas where he graduated from Washburn Rural High School.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Prior to serving as Kansas' 45th Attorney General, Kobach engaged in three federal lawsuits against the Biden administration.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Today marks an historic turning point in Kansas. Voters will now get to decide whether to reclaim the right to vote for justices.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "People, not only lawyers in smoke-filled back rooms, should have a voice in selecting Kansas Supreme Court justices.",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "attorney-controlled system,",
        "source": "Kris Kobach research file",
        "date": "2026-03-31",
        "url": "https://kriskobach.com/meet-kris/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Kobach's filing is also backed by the broader summary totals in the state ethics report: $337,330.24 raised, $52,558.52 spent, and $502,626 cash on hand. The Schedule A report is far longer than the small sample above, but these early itemized contributions already show a donor base heavy on small Kansas checks and credit-card gifts.",
      "narrative": "Kevin Arburn: $10.41.\n\nGary Grimes: $25.00.",
      "donors": [
        {
          "name": "Kevin Arburn",
          "amount": "$10.41"
        },
        {
          "name": "Gary Grimes",
          "amount": "$25.00"
        },
        {
          "name": "Julia Kirk",
          "amount": "$26.03"
        },
        {
          "name": "Karen Piper",
          "amount": "$26.03"
        },
        {
          "name": "Barbara Anderson",
          "amount": "$26.03"
        },
        {
          "name": "John Rysavy",
          "amount": "$29.80"
        },
        {
          "name": "Timothy Voth",
          "amount": "$50.00"
        },
        {
          "name": "David Powell",
          "amount": "$50.00"
        },
        {
          "name": "Ann Peterson",
          "amount": "$100.00"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Kriskobach.Com",
        "url": "https://kriskobach.com/meet-kris/",
        "publication": "Kriskobach.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02KK_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://www.kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/officeholders/kris-kobach/summary",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kobach Religion - WhatReligionIsInfo",
        "url": "https://whatreligionisinfo.com/kobach-religion/",
        "publication": "Whatreligionisinfo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Morning Star Church Lawrence",
        "url": "https://msclawrence.com/",
        "publication": "Msclawrence.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: Kobach denounces vandalism at his church",
        "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: Kansas Trial Investigates Religious Discrimination in Kobach's Office",
        "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "chris-mann",
    "name": "Chris Mann",
    "party": "D",
    "position": "Attorney General candidate",
    "electionSlug": "kansas-ag-2026",
    "incumbent": false,
    "occupation": "Attorney, Owner of Mann Law Firm, P.A. (est. 2016/2017)",
    "born": "$50.00",
    "hometown": "Not publicly specified; his father was a police officer, and Chris followed in his footsteps. He attended the University of Kansas in Lawrence, KS",
    "education": "University of Kansas (KU) — Undergraduate (field not publicly specified) — Late 1990s — Joined Lawrence PD as a junior, before graduating",
    "family": "Ashley Mann -- Cardiothoracic surgeon practicing in Topeka (some reports say Olathe). Supported Chris in opening his law firm in 2016.; Wife Ashley is a surgeon practicing in Olathe",
    "campaignWebsite": "https://chrismannforkansas.com/",
    "whoTheyAre": "Age: Approximately 49-50 (as of 2026; was 45 when he announced candidacy in September 2021).\n\nBorn: Approximately 1976-1977 (inferred: was 21 in January 2002 when struck by drunk driver, and described as age 25 when forced to retire from the force).\n\nHometown/Grew Up: Not publicly specified; his father was a police officer, and Chris followed in his footsteps. He attended the University of Kansas in Lawrence, KS.\n\nCurrent Residence: Lawrence, Kansas.",
    "theirRecord": "Public Safety / Crime: Top priority: lowering Kansas violent crime rate. Focus on fentanyl distribution, drug trafficking, retail crime, white-collar fraud. \"As a former police officer and prosecutor, I have seen the effect violent crime has on victims and their communities.\n\nConsumer Protection: Prioritizes protecting elderly Kansans from fraud and scam artists. Would use AG office consumer protection powers aggressively. Prosecuted securities fraud at Kansas Securities Commission.\n\nDark Money / Election Integrity: Would work to end dark money in Kansas elections. Supports open records laws and increased legislative transparency. Anti-corruption laws as a priority.\n\nAbortion / Reproductive Rights: Supports women's right to make private medical decisions. Will NOT use AG office resources to attack constitutional rights. Respects 2022 Value Them Both referendum result (rejected by 18 points). \"I would not waste the resources of the office to attack women's constitutional rights.",
    "whatYouShouldKnow": [
      "Mann's social media presence is modest compared to national-level candidates but reasonable for a Kansas statewide race. His Instagram following (666) and Facebook likes (2,476) are relatively low, suggesting the campaign has not invested heavily in organic social media growth. His strength appears to be in traditional media, earned media, and grassroots organizing rather than digital-first campaigning",
      "Compelling personal story -- The drunk driver accident, recovery, and pivot to law is a powerful narrative that humanizes him and demonstrates resilience",
      "Law enforcement background -- Rare for a Democrat. Gives him credibility on public safety that most Democratic candidates lack",
      "MADD national chairman -- High-profile leadership role in a universally respected, non-partisan organization",
      "~2007-2010 — Law Student — Washburn University School of Law, Koch Public Service Scholarship (full ride)"
    ],
    "whereTheyWorship": "No public church affiliation could be verified for Chris Mann in the sources reviewed. His campaign materials do not foreground faith, and the raw research files do not identify a congregation. If he worships privately, that information was not public-facing in the material I could verify.\n\nConfidence Level: LOW -- Limited public information available.",
    "quotes": [
      {
        "text": "Chris Mann has dedicated his life to serving and protecting Kansas communities - first as a police officer and then as a prosecutor.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "He will defend the Constitution, protect the rule of law, and ensure Kansas families are safe.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Common sense, common ground.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "defend the rule of law.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://chrismannforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Defend the rule of law, protect our rights, protect our families and make Kansas a safer place to live.",
        "source": "Chris Mann research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
        "topic": "Chris Mann (D) -- Challenger"
      },
      {
        "text": "In times like these, Kansas families need a law enforcement officer defending our communities and our rights, not a politician focused on their own personal ambition.",
        "source": "Campaign announcement, July 30, 2025 (KWCH, Kansas Reflector, WIBW)",
        "date": "2026-03-31",
        "url": "https://www.avvo.com/attorneys/66215-ks-christopher-mann-4359732.html",
        "topic": "CHRIS MANN -- COMPLETE DOSSIER"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$950,000",
      "narrative": "James Bartimus: $1,000.00.\n\nThomas Adrian: $500.00.",
      "donors": [
        {
          "name": "James Bartimus",
          "amount": "$1,000.00"
        },
        {
          "name": "Thomas Adrian",
          "amount": "$500.00"
        },
        {
          "name": "Paige Ballard",
          "amount": "$200.00"
        },
        {
          "name": "Louis Bornman",
          "amount": "$50.00"
        },
        {
          "name": "Jim Breneman",
          "amount": "$50.00"
        },
        {
          "name": "Evelyn Adams",
          "amount": "$25.00"
        },
        {
          "name": "Jane Byrnes",
          "amount": "$25.00"
        },
        {
          "name": "Anita Dick",
          "amount": "$10.00"
        },
        {
          "name": "Total Raised",
          "amount": "~$950,000"
        },
        {
          "name": "Raised in 2025",
          "amount": "~$537,000"
        },
        {
          "name": "Cash on Hand (end of 2025)",
          "amount": "~$257,000"
        },
        {
          "name": "Starting Cash (beginning of 2025)",
          "amount": "~$0 (new campaign)"
        },
        {
          "name": "Spent in 2025",
          "amount": "~$280,000"
        },
        {
          "name": "More than doubled his fundraising at this point compared to 2022 ( vs. $205K).",
          "amount": "$537K"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Chrismannforkansas.Com",
        "url": "https://chrismannforkansas.com/",
        "publication": "Chrismannforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02CM_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2026/03/23/former-prosecutor-enters-kansas-senate-race/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/rep_mann_chris_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Opensecrets.Org",
        "url": "https://www.opensecrets.org/",
        "publication": "Opensecrets.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Kansas AG Election 2026 May Repeat 2022",
        "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: Mann Announces Second Bid",
        "url": "https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Emporia News: 2026 Race",
        "url": "https://emporianews.com/2026-kansas-attorney-general-race-could-mirror-2022-as-chris-mann-announces-candidacy-against-kris-kobach/",
        "publication": "Emporianews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Meet Chris -- Campaign Bio",
        "url": "https://chrismannforkansas.com/meet-chris/",
        "publication": "Chrismannforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Chris Mann for Kansas -- News",
        "url": "https://chrismannforkansas.com/news/",
        "publication": "Chrismannforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: \"Former prosecutor Chris Mann announces candidacy for attorney general\" (Jul 30, 2025)",
        "url": "https://www.kwch.com/2025/07/30/former-prosecutor-chris-mann-announces-candidacy-attorney-general/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Times: Mann running 2026",
        "url": "https://lawrencekstimes.com/2025/07/30/mann-running-2026/",
        "publication": "Lawrencekstimes.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: \"Mann more than doubles fundraising from '22 attorney general's race\"",
        "url": "https://sunflowerstatejournal.com/mann-more-than-doubles-fundraising-from-22-attorney-generals-race/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: \"Reprise of 2022 Kansas attorney general's race?\"",
        "url": "https://sunflowerstatejournal.com/reprise-of-2022-kansas-attorney-generals-race/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal: \"Mann makes race for attorney general official\"",
        "url": "https://sunflowerstatejournal.com/new-mann-makes-race-for-attorney-general-official/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Kansas attorney general candidate emerges from tragedy with refined sense of public service\" (Sep 6, 2022)",
        "url": "https://kansasreflector.com/2022/09/06/kansas-attorney-general-candidate-emerges-from-tragedy-with-refined-sense-of-public-service/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Kansas attorney general candidates split on voter fraud, abortion rights, immigration\" (Sep 23, 2022)",
        "url": "https://kansasreflector.com/2022/09/23/kansas-attorney-general-candidates-split-on-voter-fraud-abortion-rights-immigration/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: \"Well-known, polarizing Kris Kobach faces newcomer Chris Mann\" (Oct 4, 2022)",
        "url": "https://www.kcur.org/news/2022-10-04/well-known-polarizing-kris-kobach-faces-newcomer-chris-mann-for-kansas-attorney-general",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Chris Mann promises to fight dark money\" (Oct 17, 2022)",
        "url": "https://kansasreflector.com/2022/10/17/chris-mann-promises-to-fight-dark-money-if-elected-kansas-attorney-general/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR \"Up to Date\": Kansas Attorney General candidate Chris Mann interview (Oct 21, 2022)",
        "url": "https://www.kcur.org/podcast/up-to-date/2022-10-21/kansas-attorney-general-candidate-chris-mann",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Kansas AG candidates Kris Kobach, Chris Mann make pitch to voters in TV debate\" (Oct 26, 2022)",
        "url": "https://kansasreflector.com/2022/10/26/kansas-ag-candidates-kris-kobach-chris-mann-make-pitch-to-voters-in-tv-debate/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Flatland KC: \"Kobach, Mann Spar Over Proper Role of Kansas Attorney General\"",
        "url": "https://flatlandkc.org/news-issues/kobach-mann-spar-over-proper-role-of-kansas-attorney-general/",
        "publication": "Flatlandkc.Org",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: \"Election 2022: Chris Mann, (D) Attorney General candidate\" (Oct 28, 2022)",
        "url": "https://www.wibw.com/2022/10/28/election-2022-chris-mann-d-attorney-general-candidate/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lawrence Journal-World: \"Former Lawrence police officer turns DUI accident into life mission\" (Feb 14, 2013)",
        "url": "https://www2.ljworld.com/news/2013/feb/14/former-lawrence-officer-turns-dui-accident-life-mi/",
        "publication": "Www2.Ljworld.Com",
        "date": "2026-03-31"
      },
      {
        "title": "University Daily Kansan: \"Democratic state AG candidate, KU Alum Chris Mann visits campus\"",
        "url": "https://www.kansan.com/news/democratic-state-ag-candidate-ku-alum-chris-mann-visits-campus/article_8c161e46-4beb-11ed-a587-772fe6f67cb9.html",
        "publication": "Kansan.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia: 2022 Kansas Attorney General election",
        "url": "https://en.wikipedia.org/wiki/2022_Kansas_Attorney_General_election",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "NBC News: Kansas Attorney General Election Results 2022",
        "url": "https://www.nbcnews.com/politics/2022-elections/kansas-attorney-general-results/",
        "publication": "Nbcnews.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Secretary of State: 2022 General Election Official Vote Totals (PDF)",
        "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Mann surrenders quest to overtake Kobach\" (Nov 11, 2022)",
        "url": "https://kansasreflector.com/2022/11/11/mann-surrenders-quest-to-overtake-kobach-in-kansas-race-for-attorney-general/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: \"Kris Kobach squeaks to a political comeback\" (Nov 9, 2022)",
        "url": "https://www.kcur.org/news/2022-11-09/kansas-attorney-general-election-results-2022-kris-kobach-chris-mann",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "DAGA: Endorsement of Chris Mann",
        "url": "https://dems.ag/daga-endorses-chris-mann-in-kansas-attorney-general-race/",
        "publication": "Dems.Ag",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Kris Kobach is not a good attorney -- Kansas attorney group announces support for Chris Mann\"",
        "url": "https://kansasreflector.com/briefs/kris-kobach-is-not-a-good-attorney-kansas-attorney-group-announces-support-for-chris-mann/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Democratic Party: Kobach debate roundup / Kansas Attorneys for Mann",
        "url": "https://kansasdems.org/archives/23098",
        "publication": "Kansasdems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia: Chris Mann (Kansas)",
        "url": "https://ballotpedia.org/Chris_Mann_(Kansas",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "iVoterGuide: Chris Mann Profile",
        "url": "https://ivoterguide.com/candidate/74629/race/18118/election/987",
        "publication": "Ivoterguide.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Avvo: Christopher Mann Profile",
        "url": "https://www.avvo.com/attorneys/66215-ks-christopher-mann-4359732.html",
        "publication": "Avvo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Bar Association: Christopher D. Mann",
        "url": "https://www.ksbar.org/members/?id=23380384",
        "publication": "Ksbar.Org",
        "date": "2026-03-31"
      },
      {
        "title": "LinkedIn: Christopher Mann",
        "url": "https://www.linkedin.com/in/christopher-mann-2089676/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Facebook: Chris Mann for Kansas",
        "url": "https://www.facebook.com/ChrisMannKS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "X/Twitter: @ChrisMannKS",
        "url": "https://x.com/ChrisMannKS",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Instagram: @chrismannks",
        "url": "https://www.instagram.com/chrismannks/",
        "publication": "Instagram.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Douglas County Democrats -- Chris Mann video",
        "url": "https://www.facebook.com/dgcodems/videos/chris-mann-is-running-for-the-attorney-general-for-kansas-in-2026-currently-mann/824337733833850/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: \"Latest Kansas campaign finance reports\" (Jan 9, 2026)",
        "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "WIBW: \"Campaign finance reports show Dem candidates spend more on Gov., AG races\" (Nov 2, 2022)",
        "url": "https://www.wibw.com/2022/11/02/campaign-finance-reports-show-dems-spend-more-gov-ag-races/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "pat-proctor",
    "name": "Pat Proctor",
    "party": "R",
    "position": "Secretary of State candidate",
    "electionSlug": "kansas-sos-2026",
    "incumbent": false,
    "occupation": "Kansas House of Representatives, District 41 (Leavenworth) -- assumed January 11, 2021",
    "hometown": "Historic Leavenworth, KS (just outside Fort Leavenworth gates)",
    "education": "B.S. Mechanical Engineering -- Purdue University (1994)",
    "family": "Aree Proctor; Not publicly disclosed in detail",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/pat-proctor",
    "whoTheyAre": "Party: Republican.\n\nCurrent Office: Kansas House of Representatives, District 41 (Leavenworth) -- assumed January 11, 2021.\n\nResidence: Historic Leavenworth, KS (just outside Fort Leavenworth gates).\n\nSpouse: Aree Proctor.",
    "theirRecord": "Committee Chair: House Elections Committee.\n\nMajor Election Bills Authored/Advanced (2025-2026 Session):.\n\nHB 2437 (Passed House 80-43):.\n\nDeputizes Secretary of State to cross-reference driver's license records and state voter rolls against the federal SAVE database twice a year.",
    "whatYouShouldKnow": [
      "Proctor is a state legislative insider in a race that also includes outsider voices",
      "His profile is strongest among Republicans who prioritize election security above all else",
      "Axis of Ballot Harvesting\": Proctor has used this phrase as a catchall term for critics of his election restriction agenda. Per Kansas Reflector: \"Rep. Pat Proctor's ambiguous 'axis of ballot harvesting' serves as a catchall for anyone who challenges his false claims about the hazards of early voting",
      "Partisan Hack\" Incident: When Kansas Reflector reporters asked Proctor to clarify contradictory comments and define his \"axis of ballot harvesting\" phrase, Proctor responded: \"You are a partisan hack and your so-called 'newspaper' is a woke, leftist propaganda rag.\" He repeated this on at least one additional occasion: \"You are a partisan hack and the Kansas Reflector is a left-wing propaganda rag",
      "Private Video (February 2024 Zoom, leaked February 2025): In a private Zoom meeting organized by House Majority Leader Chris Croft with Johnson County Republicans and invite-only guests (leaked by Loud Light Civic Action via anonymous source):"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "I’m here to Hold the Line.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The Secretary of State is at the front line of the fight to defend our democracy.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://patproctor4ks.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Voter confidence that the results of our elections reflect their will is at the core of our form of government and our way of life.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
        "topic": "PAT PROCTOR (R) -- Retired Army Colonel, PhD, House Elections Chair"
      },
      {
        "text": "The best way to restore that confidence is to increase transparency and ensure that only citizens vote in Kansas' elections.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
        "topic": "PAT PROCTOR (R) -- Retired Army Colonel, PhD, House Elections Chair"
      },
      {
        "text": "Axis of Ballot Harvesting",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
        "topic": "PAT PROCTOR (R) -- Retired Army Colonel, PhD, House Elections Chair"
      },
      {
        "text": "Rep. Pat Proctor's ambiguous 'axis of ballot harvesting' serves as a catchall for anyone who challenges his false claims about the hazards of early voting.",
        "source": "Pat Proctor research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
        "topic": "PAT PROCTOR (R) -- Retired Army Colonel, PhD, House Elections Chair"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$312,000 (as of January 2026 filing)",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW04PP_202601.pdf.",
      "donors": [
        {
          "name": "Commanding fundraising lead over primary opponent Rahjes (~ gap)",
          "amount": "$290,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "patproctor4ks.com",
        "url": "https://patproctor4ks.com/",
        "publication": "Patproctor4ks.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW04PP_202601.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW04PP_202601.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/pat-proctor",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1069c202-2991-4f2f-9961-773bec76a5a4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansascatholic.Org",
        "url": "https://www.kansascatholic.org/current-news/election-2026",
        "publication": "Kansascatholic.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - First Republican to declare",
        "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - \"Axis of ballot harvesting\"",
        "url": "https://kansasreflector.com/2025/06/13/kansas-republican-exploits-fear-of-imaginary-axis-of-ballot-harvesting-to-gain-political-advantage/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Private video leaked",
        "url": "https://kansasreflector.com/2025/02/14/in-private-video-house-elections-chair-says-he-wants-to-end-early-voting-grace-period-in-kansas/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Legislature passes election bills",
        "url": "https://kansasreflector.com/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal - Fundraising lead",
        "url": "https://sunflowerstatejournal.com/proctor-takes-commanding-fundraising-lead-in-primary-for-secretary-of-state/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wichita State University - Faculty Profile",
        "url": "https://www.wichita.edu/profiles/academics/fairmount_college_of_liberal_arts_and_sciences/school_of_criminal_justice/Proctor-Pat.php",
        "publication": "Wichita.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Pat_Proctor",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ken-rahjes",
    "name": "Ken Rahjes",
    "party": "R",
    "position": "Secretary of State candidate",
    "electionSlug": "kansas-sos-2026",
    "incumbent": false,
    "occupation": "Kansas House of Representatives, District 110 -- assumed January 11, 2016",
    "hometown": "Agra, Kansas (family farm/ranch)",
    "education": "Colby Community College (attended)",
    "family": "Lori (Hoopingarner) Rahjes, originally from Manter, Kansas; Four grown children, one granddaughter",
    "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/ken-rahjes",
    "whoTheyAre": "Party: Republican.\n\nCurrent Office: Kansas House of Representatives, District 110 -- assumed January 11, 2016.\n\nResidence: Agra, Kansas (family farm/ranch).\n\nSpouse: Lori (Hoopingarner) Rahjes, originally from Manter, Kansas.",
    "theirRecord": "Committee Assignments (Current):.\n\nChair, Agriculture and Natural Resources Committee.\n\nMember, Agriculture and Natural Resources Budget Committee.\n\nMember, Appropriations Committee.",
    "whatYouShouldKnow": [
      "Rahjes represents a more moderate, rural, practical Republican approach compared to Proctor's aggressive election-restriction posture. His focus is on business services and rural accessibility rather than voter restriction. However, his fundraising deficit of ~$290,000 is a significant structural disadvantage in the primary",
      "Ken For Kansas - Official Website",
      "Rahjes is a more rural Republican option in the field, with a message aimed at confidence in the voting system",
      "Campaign finance filings reviewed for this profile show ~$24,000 (as of january 2026 filing)",
      "I did not verify a public church affiliation in the sources reviewed"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "fair and honest elections",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "their vote matters is counted",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "confidence in all elections",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "a strong knowledge of the state's economy and an empowering attitude for current and future business owners",
        "source": "Ken Rahjes research file",
        "date": "2026-03-31",
        "url": "https://kenforkansas.com/",
        "topic": "KEN RAHJES (R) -- Western Kansas Rancher, Agriculture Broadcaster, 10-Year Legislator"
      }
    ],
    "campaignFinance": {
      "totalRaised": "~$24,000 (as of January 2026 filing)",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: state filing PDF referenced in SWLinks2026EC.",
      "donors": [
        {
          "name": "Significantly out-raised by Proctor (~ gap)",
          "amount": "$290,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "kenforkansas.com",
        "url": "https://kenforkansas.com/",
        "publication": "Kenforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kenforkansas.Com",
        "url": "https://kenforkansas.com/news/rahjes-files-for-secretary-of-state/",
        "publication": "Kenforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/ken-rahjes",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d7c59a6a-6884-4ac9-aad1-7c9d728f5f5f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KVOE - Rahjes in Emporia",
        "url": "https://kvoe.com/2026/03/16/rahjes-in-emporia-touting-secretary-of-state-bid/",
        "publication": "Kvoe.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Files for Secretary of State",
        "url": "https://hayspost.com/posts/7178f5e9-d6e8-4fe0-af51-8ebe54531561",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Legislature - Member Page",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_rahjes_ken_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Ken_Rahjes",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "VoteSmart - Biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/167130/ken-rahjes",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "jennifer-day",
    "name": "Jennifer Day",
    "party": "D",
    "position": "Secretary of State candidate",
    "electionSlug": "kansas-sos-2026",
    "incumbent": false,
    "occupation": "Former State Representative / Real Estate Investor",
    "hometown": "Overland Park, Kansas (6801 Reeds Road per campaign filing)",
    "education": "B.A. -- Pepperdine University (1996)",
    "family": "Jesse Day; Not specifically enumerated in available sources",
    "campaignWebsite": "https://www.electjenday.com/",
    "whoTheyAre": "Party: Democrat.\n\nPrevious Office: Kansas House of Representatives, District 48 (June 3, 2020 - June 21, 2021).\n\nResidence: Overland Park, Kansas (6801 Reeds Road per campaign filing).\n\nSpouse: Jesse Day.",
    "theirRecord": "Election integrity \"increasingly under threat across the country.\n\nKansans \"deserve a safe, secure and accessible voting experience for all who are eligible.\n\nFocus on voter education, voter accessibility, and ensuring businesses' needs are met through the SOS office.\n\nPositions herself as \"businesswoman, community leader, and public servant.",
    "whatYouShouldKnow": [
      "Day's campaign is part of the Democratic effort to offer a voting-rights counterweight to Republican election-security messaging",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "I did not verify a public church affiliation in the sources reviewed"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "OUR RIGHT TO VOTE IS FUNDAMENTAL.",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "election integrity is increasingly under threat",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "protect the right to vote",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "increasingly under threat across the country",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "JENNIFER DAY (D) -- Former State Representative, Pepperdine Grad, Election Worker"
      },
      {
        "text": "deserve a safe, secure and accessible voting experience for all who are eligible",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "JENNIFER DAY (D) -- Former State Representative, Pepperdine Grad, Election Worker"
      },
      {
        "text": "businesswoman, community leader, and public servant",
        "source": "Jennifer Day research file",
        "date": "2026-03-31",
        "url": "https://www.electjenday.com/",
        "topic": "JENNIFER DAY (D) -- Former State Representative, Pepperdine Grad, Election Worker"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: state filing PDF referenced in SWLinks2026EC.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "electjenday.com",
        "url": "https://www.electjenday.com/",
        "publication": "Electjenday.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasdems.Org",
        "url": "https://kansasdems.org/candidates",
        "publication": "Kansasdems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/candidates",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/committees/ctte_h_electns_1/documents/testimony/20260120_21.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Jennifer_Day_(Kansas",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Former House Democrat enters race",
        "url": "https://www.yahoo.com/news/articles/former-house-democrat-enters-kansas-100625382.html",
        "publication": "Yahoo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Jennifer_Day_(Kansas_politician",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "sam-lane",
    "name": "Sam Lane",
    "party": "D",
    "position": "Secretary of State candidate",
    "electionSlug": "kansas-sos-2026",
    "incumbent": false,
    "occupation": "Secretary of State candidate",
    "hometown": "Kansas (born in Leavenworth, graduated Leavenworth High School)",
    "education": "Leavenworth High School",
    "family": "Not publicly identified; Not publicly identified",
    "campaignWebsite": "https://www.samuellane.org/about-me",
    "whoTheyAre": "Party: Democrat (recently switched from Independent).\n\nResidence: Kansas (born in Leavenworth, graduated Leavenworth High School).\n\nSpouse: Not publicly identified.\n\nChildren: Not publicly identified.",
    "theirRecord": "Election Integrity: \"In Kansas, the Secretary of State oversees elections, and if you don't have a Secretary of State that plays fair and takes the job seriously, you don't have fair elections, and without fair elections, you don't have a democratic republic.\n\nInclude every eligible Kansas voter.\n\nEnsure rural and urban voters alike have a local place to vote.\n\nThorough and unbroken paper trail at every election site, for every vote.",
    "whatYouShouldKnow": [
      "Lane is a long-shot candidate running as an independent-turned-Democrat with minimal fundraising and no political experience. His working-class background and plainspoken approach may resonate in a primary, but he faces a significant disadvantage against Jennifer Day's name recognition and organizational support",
      "Samuel Lane for Kansas - Campaign Website",
      "Lane is a rare independent-leaning working-class voice in a race dominated by politicians and party operators",
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "I did not verify a public church affiliation in the sources reviewed"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.",
    "quotes": [
      {
        "text": "I’m here to Hold the Line.",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "We need honest people more than ever now.",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "what does the secretary of state do",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Knows what it's like to live paycheck to paycheck and work multiple jobs just to get by",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "SAM LANE (D) -- KU Psychology Graduate, Working-Class Independent-Turned-Democrat"
      },
      {
        "text": "throwing his hat in with the Democrats",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "SAM LANE (D) -- KU Psychology Graduate, Working-Class Independent-Turned-Democrat"
      },
      {
        "text": "sided with the Abolitionists when he figured out which way the wind was blowing in Kansas.",
        "source": "Sam Lane research file",
        "date": "2026-03-31",
        "url": "https://www.samuellane.org/",
        "topic": "SAM LANE (D) -- KU Psychology Graduate, Working-Class Independent-Turned-Democrat"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: state filing PDF referenced in SWLinks2026EC.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "samuellane.org",
        "url": "https://www.samuellane.org/",
        "publication": "Samuellane.Org",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Samuellane.Org",
        "url": "https://www.samuellane.org/what-does-the-secretary-of-state-do",
        "publication": "Samuellane.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Samuellane.Org",
        "url": "https://www.samuellane.org/about-me",
        "publication": "Samuellane.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/candidates",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Samuel Lane - Issues Page",
        "url": "https://www.samuellane.org/issues",
        "publication": "Samuellane.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Sam_Lane_(Kansas",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "DASS - Kansas 2026",
        "url": "https://demsofstate.org/kansas-2026/",
        "publication": "Demsofstate.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "daniel-hawkins",
    "name": "Daniel Hawkins",
    "party": "R",
    "position": "Insurance Commissioner candidate",
    "electionSlug": "kansas-insurance-2026",
    "incumbent": false,
    "occupation": "Kansas House Speaker, District 100 (Wichita) -- assumed January 14, 2013",
    "hometown": "9406 Harvest Ln., Wichita, KS 67212",
    "education": "Emporia State University (graduate)",
    "family": "Diane Hawkins (married 1985, \"college sweetheart\"); Not detailed in available sources",
    "campaignWebsite": "https://hawkinsforinsurance.com",
    "whoTheyAre": "Party: Republican.\n\nCurrent Office: Kansas House Speaker, District 100 (Wichita) -- assumed January 14, 2013.\n\nResidence: Wichita, Kansas.\n\nSpouse: Diane Hawkins (married 1985, \"college sweetheart\").",
    "theirRecord": "Website headline: \"PRO-LIFE. PRO-GUN. PRO-TRUMP.\n\nDan has been a strong supporter of President Trump and will serve as a vocal ally for his agenda.\n\nSupports \"President Trump's America first agenda\" and will \"prioritize policies that drain the swamp and put Kansans first.\n\nFocus on: increasing competition, easing marketplace navigation, ensuring people are not wrongly denied coverage.",
    "whatYouShouldKnow": [
      "Strengths: 30 years of insurance industry expertise is directly relevant to the job. $384K cash on hand. Strong Republican base in Kansas. House Speaker title provides name recognition and party infrastructure. Weaknesses: The SB 360 debacle is a gift to his opponent. Being overruled 104-17 by your own caucus is humiliating. The \"Pro-Trump\" branding may help in a primary but could limit crossover appeal in a general election -- especially after the 2022 abortion referendum showed Kansas voters will cross party lines. The term-limit motivation for running (he's being forced out as Speaker) makes this look like a fallback rather than a calling",
      "Hawkins is a leading conservative legislative figure, so his insurance bid is automatically a major statewide storyline",
      "His public record on Medicaid expansion and pro-life politics is likely to be scrutinized in the race",
      "This is the defining issue of Hawkins' candidacy and potentially his greatest vulnerability:",
      "What happened: The Kansas Senate passed Senate Bill 360 with overwhelming bipartisan support. The bill would bring greater state regulation to pharmacy benefit managers (PBMs) -- the middlemen (CVS Caremark, Express Scripts, OptumRx, Blue Cross Blue Shield of Kansas) accused of anti-competitive practices, monopolizing the pharmaceutical market, and raising drug costs for consumers"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.\n\nServed on the board of Higher Ground for five years (a faith-based organization).",
    "quotes": [
      {
        "text": "We have nothing to do with Medicaid",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://danhawkinskansas.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Pro-Life. Pro-Gun. Pro-Trump.",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
        "topic": "DANIEL HAWKINS"
      },
      {
        "text": "Dan has been a strong supporter of President Trump and will serve as a vocal ally for his agenda.",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
        "topic": "DANIEL HAWKINS"
      },
      {
        "text": "President Trump's America first agenda",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
        "topic": "DANIEL HAWKINS"
      },
      {
        "text": "prioritize policies that drain the swamp and put Kansans first",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
        "topic": "DANIEL HAWKINS"
      },
      {
        "text": "Just like President Trump has made it his mission to make life miserable for foreign cartels, it will be my job as Insurance Commissioner to do the same for any insurance company that does not follow the law.",
        "source": "Daniel Hawkins research file",
        "date": "2026-03-31",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
        "topic": "DANIEL HAWKINS"
      }
    ],
    "campaignFinance": {
      "totalRaised": "Raised $417,305 during 2025, including a $10,000 personal loan",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW03DH_AT.pdf.",
      "donors": [
        {
          "name": "First campaign cycle with higher individual contribution limit of (up from $2,000)",
          "amount": "$4,000"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "danhawkinskansas.com",
        "url": "https://danhawkinskansas.com/",
        "publication": "Danhawkinskansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW03DH_AT.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DH_AT.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/2024/04/18/kansas-house-speaker-meets-opposition-as-he-makes-case-against-medicaid-expansion-in-plainville/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jocoelection.Org",
        "url": "https://www.jocoelection.org/candidates-elected-officials/daniel-hawkins",
        "publication": "Jocoelection.Org",
        "date": "2026-03-31"
      },
      {
        "title": "kslegislature.gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "hawkinsforinsurance.com",
        "url": "https://www.hawkinsforinsurance.com/",
        "publication": "Hawkinsforinsurance.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@DanHawkinsKS",
        "url": "https://x.com/danhawkinsks",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - SB 360 blocked",
        "url": "https://kansasreflector.com/2026/03/22/kansas-house-speaker-desperately-maneuvers-to-sabotage-vote-on-senate-bill-capping-drug-costs/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Heartland Signal - Republicans defy Hawkins on PBM bill",
        "url": "https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bill/",
        "publication": "Heartlandsignal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sunflower State Journal - Fundraising",
        "url": "https://sunflowerstatejournal.com/hawkins-reveals-campaign-fundraising-for-insurance-commissioner/",
        "publication": "Sunflowerstatejournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hawkins for Kansas - About",
        "url": "https://danhawkinskansas.com/about/",
        "publication": "Danhawkinskansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Daniel_Hawkins_(Kansas",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Insurance Business Mag",
        "url": "https://www.insurancebusinessmag.com/us/news/breaking-news/house-speaker-dan-hawkins-eyes-state-insurance-office-535815.aspx",
        "publication": "Insurancebusinessmag.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "dinah-sykes",
    "name": "Dinah Sykes",
    "party": "D",
    "position": "Insurance Commissioner candidate",
    "electionSlug": "kansas-insurance-2026",
    "incumbent": false,
    "occupation": "Kansas Senate, District 21 -- Senate Minority Leader (since 2021)",
    "born": "April 10, 1977",
    "hometown": "Lenexa, KS (Johnson County)",
    "education": "B.A. Business Administration (minors in Finance and Economics) -- Trevecca Nazarene University, Nashville, Tennessee (1999)",
    "family": "Jeffrey Sykes; Two sons: William and Tyler",
    "campaignWebsite": "https://www.dinahsykes.com/",
    "whoTheyAre": "Party: Democrat (switched from Republican, December 19, 2018).\n\nCurrent Office: Kansas Senate, District 21 -- Senate Minority Leader (since 2021).\n\nResidence: Lenexa, Kansas.\n\nSpouse: Jeffrey Sykes.",
    "theirRecord": "Has served in the Kansas Senate since 2017 (9 years).\n\nChampion for public school funding, early childhood education.\n\nAdvocate for Medicaid expansion.\n\nProtections for survivors of domestic violence, sexual assault, human trafficking, stalking.",
    "whatYouShouldKnow": [
      "Strengths: 9 years in the Kansas Senate. Senate Minority Leader. Former Republican -- speaks directly to moderate/crossover voters. Bipartisan endorsements from two former Insurance Commissioners. The no-insurance-industry-money pledge is a powerful contrast with Hawkins. Hawkins' SB 360 debacle is a gift to her campaign. Johnson County base is the most Democratic-leaning area in Kansas. Weaknesses: Running as a Democrat in a Republican state. The party switch will be attacked as betrayal by Republican voters. Her platform (Medicaid expansion, abortion access) is standard Democratic fare that may limit crossover appeal with conservative voters who might otherwise be open to an insurance reformer. \"Personal chef and PTA president\" before politics is a thinner pre-political resume than Hawkins' 30 years of insurance expertise",
      "Sykes is running as the anti-insurance-industry candidate in a race with a House Speaker opponent",
      "Her pledge to reject industry money is one of the clearest differentiators in the field",
      "CNN: 3 Kansas legislators switch from Republican to Democrat (Dec 19, 2018)",
      "KCUR: More Kansas Legislative Republicans Jump Ship (Dec 19, 2018)"
    ],
    "whereTheyWorship": "I did not verify a public church affiliation in the sources reviewed.\n\nAttended Trevecca Nazarene University, which is affiliated with the Church of the Nazarene.",
    "quotes": [
      {
        "text": "The cost of health insurance in Kansas is simply out of control",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "big insurance companies accountable",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "refuse insurance-industry money",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I am a moderate person who represents a moderate and pragmatic district that expects me to focus on issues and solutions that impact their day-to-day lives. Increasingly, I see the Republican party focusing on issues and approaches that divide our country... being a moderate inside the Republican Party is an increasingly difficult path to take with the trajectory of the party nationally.",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "DINAH SYKES"
      },
      {
        "text": "As long as I've known Dinah, she's stood up for what's right and fought for Kansas families.",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "DINAH SYKES"
      },
      {
        "text": "Kansans want leaders who will listen to them and fight against unfair and discriminatory practices by the industry.",
        "source": "Dinah Sykes research file",
        "date": "2026-03-31",
        "url": "https://www.dinahsykes.com/",
        "topic": "DINAH SYKES"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Kansas Ethics filing index: SWLinks2026EC.\n\n2026 filing PDF: SW03DS_AT.pdf.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "SWLinks2026EC",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "SW03DS_AT.pdf",
        "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DS_AT.pdf",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasreflector.Com",
        "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansasdems.Org",
        "url": "https://kansasdems.org/candidates",
        "publication": "Kansasdems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "dinahsykes.com",
        "url": "https://www.dinahsykes.com/",
        "publication": "Dinahsykes.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Senator Dinah Sykes (@Sykes4KS)",
        "url": "https://www.facebook.com/Sykes4KS/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "kssenatedems.org/dinah-sykes",
        "url": "https://www.kssenatedems.org/dinah-sykes",
        "publication": "Kssenatedems.Org",
        "date": "2026-03-31"
      },
      {
        "title": "kslegislature.gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "CNN: 3 Kansas legislators switch from Republican to Democrat",
        "url": "https://www.cnn.com/2018/12/19/politics/kansas-legislature-republican-democrat/index.html",
        "publication": "Cnn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR: More Kansas Legislative Republicans Jump Ship",
        "url": "https://www.kcur.org/politics-elections-and-government/2018-12-19/more-kansas-legislative-republicans-jump-ship-become-democrats",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Salon: Three Kansas Republicans switch parties in one week",
        "url": "https://www.salon.com/2018/12/21/three-kansas-republicans-switch-parties-in-one-week-more-defections-expected/",
        "publication": "Salon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "InsuranceNewsNet - Sykes campaigning",
        "url": "https://insurancenewsnet.com/oarticle/sen-sykes-campaigning-for-insurance-commissioner",
        "publication": "Insurancenewsnet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Dinah_Sykes",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dinah_Sykes",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KSHB - PTA to Senate",
        "url": "https://www.kshb.com/news/state/kansas/from-pta-president-to-kansas-senate-a-local-mom-readies-for-her-new-job",
        "publication": "Kshb.Com",
        "date": "2026-03-31"
      },
      {
        "title": "CSG Midwest - Profile",
        "url": "https://csgmidwest.org/wp-content/uploads/2025/04/leader-sykes.pdf",
        "publication": "Csgmidwest.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Lenexa Rotary - New Member Spotlight",
        "url": "https://lenexarotary.org/stories/new-member-spotlight-dinah-sykes",
        "publication": "Lenexarotary.Org",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "barb-wasinger",
    "name": "Barb Wasinger",
    "party": "R",
    "position": "KS House District 111",
    "electionSlug": "ks-house-111",
    "incumbent": true,
    "occupation": "Business owner",
    "hometown": "Hays, KS (P.O. Box 522, Hays, KS 67601)",
    "religion": "Roman Catholic -- active member, St. Joseph Catholic Church, Hays",
    "education": "Education is \"fully funded\" in her view",
    "family": "Tom Wasinger; Spouse: Tom",
    "district": "Kansas House District 111",
    "campaignWebsite": "https://barbforkansas.com/",
    "whoTheyAre": "April 2005 - December 2012 — Hays City Commissioner — 8 years on the Hays City Commission.\n\nApril 2008 - April 2009 — Mayor of Hays — First mayoral term.\n\nOctober 2010 - April 2012 — Mayor of Hays — Second mayoral term.\n\n2012 - 2018 — Ellis County Commissioner, 2nd District — First woman ever elected to the Ellis County Commission.",
    "theirRecord": "Position: Strongly pro-life. \"Human life begins at conception and deserves legal protection at every stage until natural death.\n\nVoted YES on the Value Them Both Amendment (to allow the legislature to regulate abortion).\n\nSupports the Born Alive Abortion Survivors Protection Act.\n\nOnly exception: life of the mother.",
    "whatYouShouldKnow": [
      "Wasinger appears to be quite accessible for a state legislator. She maintains regular community presence through legislative coffees, meets with local government bodies, appears on local media, and writes constituent update blogs. Her campaign contact info (personal email and cell phone) is publicly available",
      "Hays Post - Legislative Coffee",
      "Wasinger is deeply embedded in the Hays community. Her Catholic faith is integral to her identity -- she attended a Catholic university with a theology concentration, is an active parish minister at St. Joseph, and her pro-life positions align with Catholic social teaching. For the \"Elect Righteous\" project, her faith profile is strong and well-documented",
      "Primary challenge from the right: LOW probability. She is vice-chair of the Kansas Truth Caucus, strongly pro-life, endorsed by KSRA, and voted for the bathroom bill. Hard to outflank her on conservative credentials",
      "General election loss: VERY LOW probability. District 111 is deeply Republican"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED.\n\nDenomination: Roman Catholic (Diocese of Salina).",
    "church": {
      "name": "St. Joseph Catholic Church, Hays, KS",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "details": "Confidence: CONFIRMED. Denomination: Roman Catholic (Diocese of Salina)."
    },
    "quotes": [
      {
        "text": "My approach in Topeka is simple: talk less, listen more, and work together to actually get things done.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://barbwasinger.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "It’s an honor to serve the good people of Ellis County.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://barbwasinger.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I’m committed to building on that momentum for you.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://barbwasinger.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Judeo-Christian values established a framework of morality which is necessary for our system of limited government.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://barbwasinger.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "What we have to do is figure out a more equitable way to impose property taxes that aren't so high.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
        "topic": "DEEP INVESTIGATION: Kansas State Representative Barb Wasinger"
      },
      {
        "text": "We need to keep the older generation in Kansas and not make them want to leave and tax them out of their homes.",
        "source": "Barb Wasinger research file",
        "date": "2026-03-31",
        "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
        "topic": "DEEP INVESTIGATION: Kansas State Representative Barb Wasinger"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Not publicly extracted here: N/A.\n\nThe best public finance note I could verify from the existing materials is that the campaign finance viewer is available through Kansas state systems, but a clean donor table was not extracted in this sweep.",
      "donors": [
        {
          "name": "in contributions documented during a previous election cycle (specific cycle unclear).",
          "amount": "$4,800"
        }
      ],
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Barbwasinger.Com",
        "url": "https://barbwasinger.com/",
        "publication": "Barbwasinger.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Barbforkansas.Com",
        "url": "https://barbforkansas.com/",
        "publication": "Barbforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Justfacts.Votesmart.Org",
        "url": "https://justfacts.votesmart.org/candidate/145676/barb-wasinger",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ivoterguide.Com",
        "url": "https://ivoterguide.com/candidate/48696/race/11694/election/797",
        "publication": "Ivoterguide.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas.Gov",
        "url": "https://www.kansas.gov/campaign-finance/",
        "publication": "Kansas.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Barb for Kansas Facebook",
        "url": "https://www.facebook.com/electbarbwasinger/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSN Election Guide",
        "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
        "publication": "Ksn.Com",
        "date": "2026-03-31"
      },
      {
        "title": "barbforkansas.com/about",
        "url": "https://barbforkansas.com/about/",
        "publication": "Barbforkansas.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Barb_Wasinger",
        "publication": "En.Wikipedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart Biography",
        "url": "https://justfacts.votesmart.org/candidate/biography/145676/barb-wasinger",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia",
        "url": "https://ballotpedia.org/Barbara_Wasinger",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Cybersecurity",
        "url": "https://kansasreflector.com/2024/03/18/exposure-of-it-security-weaknesses-in-kansas-state-government-inspiring-house-reform-bill/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - IT Security",
        "url": "https://hayspost.com/posts/81556ec8-078b-4239-8e6f-d43dd953ddf7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Truth Caucus",
        "url": "https://www.kansastruthcaucus.org/about",
        "publication": "Kansastruthcaucus.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Water Dispute (Feb 2026)",
        "url": "https://kansasreflector.com/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ranson Financial - HB2433 Signed",
        "url": "https://ransonfinancial.com/2026/03/26/governor-signs-hb2433-for-r9-project/",
        "publication": "Ransonfinancial.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Water Bill Signed",
        "url": "https://hayspost.com/posts/ec8a0c28-4cb0-4994-90ba-3919fcadd4a0",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Nursing Bill",
        "url": "https://kansasreflector.com/2026/03/19/kansas-legislature-resets-academic-expectation-for-hiring-faculty-in-college-nursing-programs/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Bathroom Bill Veto Override",
        "url": "https://kansasreflector.com/2026/02/18/house-overrides-veto-bathroom-bill-limiting-access-to-kansas-facilities-will-become-law/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "GovTech - Cybersecurity Bill",
        "url": "https://www.govtech.com/security/after-attack-kansas-bill-seeks-to-strengthen-cybersecurity",
        "publication": "Govtech.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Fourth Term",
        "url": "https://hayspost.com/posts/0467451d-0b49-4f89-830e-7107584885fc",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Legislative Coffee 2025",
        "url": "https://hayspost.com/posts/89bc4255-a1ac-4f10-b315-5def98cd9798",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - 2026 Priorities",
        "url": "https://hayspost.com/posts/2b738882-c918-4672-aacb-cccdbceb383a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KLC Journal - 2020 Debate",
        "url": "https://klcjournal.com/kansas-house111/",
        "publication": "Klcjournal.Com",
        "date": "2026-03-31"
      },
      {
        "title": "kssos.org/elections/cfr_viewer",
        "url": "https://kssos.org/elections/cfr_viewer/cfr_examiner_entry.aspx",
        "publication": "Kssos.Org",
        "date": "2026-03-31"
      },
      {
        "title": "followthemoney.org",
        "url": "https://www.followthemoney.org/",
        "publication": "Followthemoney.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas State Rifle Association Endorsements 2024",
        "url": "https://kansasrifle.org/endorsements2024generalelection/",
        "publication": "Kansasrifle.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas SOS 2024 General Election Official Results",
        "url": "https://sos.ks.gov/elections/24elec/2024-General-Election-Official-Vote-Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - 2022 Results",
        "url": "https://hayspost.com/posts/2f423389-debd-4434-adb6-f64db082b94e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector - Hammond Filing",
        "url": "https://kansasreflector.com/2022/06/03/former-fort-hays-state-university-president-running-for-kansas-house-seat/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Legislative Coffee",
        "url": "https://hayspost.com/posts/0299ad65-325b-41df-9515-db9d14054474",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - Tax Discussion",
        "url": "https://hayspost.com/posts/9fda8c5c-7597-4aa4-91d9-346da9bec17c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post - PBS Appearance",
        "url": "https://hayspost.com/posts/2f0387ad-c4f6-4bc0-845c-53b05f9866b4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "BBB Profile",
        "url": "https://www.bbb.org/us/ks/hays/profile/title-agent/ellis-county-abstract-title-0714-42432",
        "publication": "Bbb.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Insurance Dept Filing",
        "url": "https://insurance.ks.gov/documents/company/prop-cas/titlerates/EllisCountyAbstractTitleRateFiling.pdf",
        "publication": "Insurance.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "source",
        "url": "https://hayspost.com/posts/2d905a93-7cdc-47e5-8ab8-c0c78446bb2b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ballotpedia - District 111",
        "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Fastdemocracy.Com",
        "url": "https://fastdemocracy.com/bill-search/ks/legislators/KSL000447/",
        "publication": "Fastdemocracy.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Billtrack50.Com",
        "url": "https://www.billtrack50.com/legislatordetail/24285",
        "publication": "Billtrack50.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Legiscan.Com",
        "url": "https://legiscan.com/KS/people/barbara-wasinger/id/21086",
        "publication": "Legiscan.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kslegislature.Gov",
        "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/hb2433_00_0000.pdf",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Tom Wasinger - Wasinger Enterprise",
        "url": "https://www.linkedin.com/in/tom-wasinger-77068241",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KS Legislature HB2433",
        "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2433/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KCUR",
        "url": "https://www.kcur.org/politics-elections-and-government/2026-02-18/kansas-republicans-transgender-bathroom-bill-veto-override",
        "publication": "Kcur.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KS Legislature vote record",
        "url": "https://www.kslegislature.gov/li_2024/b2023_24/measures/vote_view/je_20240429095526_260190/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KS Legislature: Rep. Barb Wasinger (2023-24)",
        "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
        "publication": "Kslegislature.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Vote Smart: Key Votes",
        "url": "https://justfacts.votesmart.org/candidate/key-votes/145676/barb-wasinger",
        "publication": "Justfacts.Votesmart.Org",
        "date": "2026-03-31"
      },
      {
        "title": "LegiStorm: Barbara King Wasinger",
        "url": "https://www.legistorm.com/person/bio/313424/Barbara_King_Wasinger.html",
        "publication": "Legistorm.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Wasinger vs. Hammond race",
        "url": "https://hayspost.com/posts/a0d2b56a-c6d8-4084-92bf-9e40ac0b82bd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: KS House District 111 profile",
        "url": "https://hayspost.com/posts/2e2efa2c-4a4a-4590-b7a5-0aeabf7be52b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NRA-PVF: Kansas Grades",
        "url": "https://www.nrapvf.org/grades/kansas/",
        "publication": "Nrapvf.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KFL PAC: Voter Guide",
        "url": "https://kflpac.org/vote/",
        "publication": "Kflpac.Org",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Water bill awaits signature",
        "url": "https://hayspost.com/posts/c6a0184d-7e96-4157-ba49-d5e49a49e54c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KS SOS: 2018 General Election Results",
        "url": "https://www.kssos.org/elections/18elec/2018_General_Election_Official_Votes_Cast.pdf",
        "publication": "Kssos.Org",
        "date": "2026-03-31"
      },
      {
        "title": "KS SOS: 2020 General Election Results",
        "url": "https://sos.ks.gov/elections/20elec/2020_General_Official_Vote_Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "KS SOS: 2022 General Election Results",
        "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
        "publication": "Sos.Ks.Gov",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "mason-ruder",
    "name": "Mason Ruder",
    "party": "NP",
    "position": "Hays Mayor",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Certified Public Manager (CPM designation)",
    "hometown": "Hays, Kansas",
    "religion": "Catholic — attended TMP-Marian, works for Hays Catholic Schools",
    "education": "Fort Hays State University -- Political Leadership and Public Service degree (completing/completed)",
    "family": "Tori Ruder (childcare provider in Hays); Not yet known",
    "campaignWebsite": "https://www.haysusa.com/269/City-Commission",
    "whoTheyAre": "Ellis County Environmental Services (~2017-2022, 5 years) -- Rose to Environmental Services Director. Oversaw adoption of county's new Comprehensive Plan and Zoning Regulations. Presented 2021 Solid Waste/Transfer Station Annual Report. Led unified effort to revitalize the Extra Territorial Jurisdiction of the City of Hays for smart growth for the next 50+ years.\n\nHays Catholic Schools (Dec 2022-present) -- Director of Institutional Advancement. TMP-Marian alumnus (Class of 2010) returned to lead fundraising/advancement for the school system (Holy Family Elementary + Thomas More Prep-Marian). NOTE: Travis Grizzell now listed as Advancement Director on their website, suggesting Ruder may have moved on.\n\nJoint Planning Commission of Zoning, Ellis County -- Current member.\n\nFirst elected: 2019 to Hays City Commission (was an FHSU student at the time).",
    "theirRecord": "2019: First elected to Hays City Commission (top vote-getter as FHSU student).\n\n2020: Cast the SOLE DISSENTING VOTE against the mask mandate (3-1 vote). This is the only recorded split vote found on this commission during COVID.\n\n2021: Served as Vice Mayor.\n\n2023: Re-elected (four-year term).",
    "whatYouShouldKnow": [
      "Ruder is the youngest and most politically ambitious commissioner. CPM credential, political leadership degree, and advancement director role all suggest a person building toward higher office. His sole \"no\" vote on the mask mandate is notable -- it positions him as the most conservative-leaning commissioner on that issue. The 9/11 editorial through the Kansas Press Association shows he is cultivating a public voice beyond Hays. The Youth Leadership Advisory Board is a genuine legacy initiative",
      "Hays Post: City Commission Candidate Mason Ruder",
      "Tiger Media Network: Ruder elected Mayor",
      "Most politically ambitious commissioner — building toward higher office",
      "Catholic faith appears genuine (Catholic school education + Catholic school employer + institutional advancement role)"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED.\n\nDenomination: Roman Catholic (Diocese of Salina).",
    "church": {
      "name": "Immaculate Heart of Mary Parish, Hays",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.ihm-church.com/",
      "details": "Confidence: CONFIRMED. Denomination: Roman Catholic (Diocese of Salina)."
    },
    "quotes": [
      {
        "text": "Faith and family have always provided a solid foundation.",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Mason Ruder"
      },
      {
        "text": "Let's keep growing Hays. We have a lot of work to do.",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Mason Ruder"
      },
      {
        "text": "Every day is now an R9 Ranch Day.",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Mason Ruder"
      },
      {
        "text": "a member of Immaculate Heart of Mary Parish in Hays",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "MASON RUDER"
      },
      {
        "text": "grew up in Hays with faith and family as a foundation",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "topic": "MASON RUDER"
      },
      {
        "text": "getting youth involved in our community a little more",
        "source": "Mason Ruder research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/mason-ruder-cpm-1aa36455",
        "topic": "MASON RUDER -- Mayor, City Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "no detailed total was published in the report materials reviewed",
      "narrative": "The report materials reviewed for Mason Ruder did not include a full donor-by-donor breakdown. We still linked every finance source we found below so readers can inspect the filings directly.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not disclosed in the report materials reviewed"
        }
      ],
      "undisclosed": "This profile uses the campaign-finance sources available in the dossier set. Some filings may require direct review at FEC, OpenSecrets, or Kansas ethics records for line-item detail.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked finance sources"
    },
    "sources": [
      {
        "title": "Hfehays.Org",
        "url": "https://www.hfehays.org/o/hfe/article/923439",
        "publication": "Hfehays.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ihm-church.Com",
        "url": "https://www.ihm-church.com/",
        "publication": "Ihm-church.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/39d62580-9e3b-4536-85da-783f3cfe22bd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/69f1b5b1-a69e-4dab-80b1-ee8c00201441",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Mason Ruder, CPM",
        "url": "https://www.linkedin.com/in/mason-ruder-cpm-1aa36455",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "@agentruder",
        "url": "https://x.com/agentruder",
        "publication": "X.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: City Commission Candidate Mason Ruder",
        "url": "https://hayspost.com/posts/0187e996-15de-4377-95c2-cc428ed058e5",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network: Ruder elected Mayor",
        "url": "http://tigermedianet.com/?p=93385",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HDN: Commissioners sworn in",
        "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "KS Press: 9/11 Editorial",
        "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
        "publication": "Kspress.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HDN: TMP-Marian alumnus named advancement director",
        "url": "https://www.hdnews.net/2022/12/01/tmp-marian-alumnus-named-advancement-director-for-hays-catholic-schools/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Youth Leadership Advisory Board",
        "url": "https://hayspost.com/posts/e141bbcd-d4c5-4a9d-83bc-996979742cb2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Mask ordinance extension",
        "url": "https://hayspost.com/posts/095697ac-eb4b-4005-867a-bb049ec8c10f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ClustrMaps: Mason Ruder public records",
        "url": "https://clustrmaps.com/person/Ruder-cofgeu",
        "publication": "Clustrmaps.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Press Association — 9/11 editorial",
        "url": "https://kpa.org/",
        "publication": "Kpa.Org",
        "date": "2026-03-31"
      },
      {
        "title": "NWKEICI Staff page",
        "url": "https://nwkeici.org/about/innovation-center-staff/",
        "publication": "Nwkeici.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Daily News",
        "url": "https://www.hdnews.net/forgetting-the-lesson-of-9-11-is-the-danger-we-face-now-says-ruder/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network",
        "url": "https://tigermedianet.com/?p=68058",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "City of Hays YLAB page",
        "url": "https://www.haysusa.com/871/Youth-Leadership-Advisory-Board",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Mask mandate approved",
        "url": "https://hayspost.com/posts/78a708f5-4f1e-401f-9bd3-85c618edb4de",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Mask ordinance extended",
        "url": "https://hayspost.com/posts/71b2e036-1db2-45b6-86a9-c9d86520f000",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Housing/business developments",
        "url": "https://hayspost.com/posts/dc0fb523-b96d-42bb-b65a-55221db96969",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: R9 Water dispute",
        "url": "https://hayspost.com/posts/0b77976f-deca-4758-819a-f01bbc3f4745",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Vernon Ruder Jr. candidate profile",
        "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Ruth Ruder school board candidate",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Chick-fil-A coming to Hays",
        "url": "https://hayspost.com/posts/f2157294-04d0-44db-8888-bb5c34b03530",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Press Association: R9 Water dispute",
        "url": "https://kspress.com/news/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute",
        "publication": "Kspress.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: R9 Water dispute",
        "url": "https://kansasreflector.com/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Gov. Kelly signs HB2433",
        "url": "https://hayspost.com/posts/ec8a0c28-4cb0-4994-90ba-3919fcadd4a0",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "alaina-cunningham",
    "name": "Alaina Cunningham",
    "party": "NP",
    "position": "Hays Vice Mayor / City Commissioner",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Nurse / Fitness Instructor",
    "education": "RN (Registered Nurse) credential -- school not confirmed",
    "campaignWebsite": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
    "whoTheyAre": "Age: ~45 (estimated from public records showing previous address in Dodge City area).\n\nTitle: Vice Mayor, City of Hays (elected by commission January 2026).\n\nDay Job: Registered Nurse (RN) and ACE Certified Group Fitness Instructor, HaysMed Center for Health Improvement.\n\nHometown: Dodge City, Kansas.",
    "theirRecord": "The report files for Alaina Cunningham do not include a long voting-record narrative, but they do include office history, platform material, and source links for further review.",
    "whatYouShouldKnow": [
      "Cunningham is the least publicly visible commissioner. She was appointed (not initially elected), has limited news quotes, and her community profile is primarily through HaysMed Foundation and PTA work rather than political activity. Her LinkedIn describes her as a \"Health and Well-being professional.\" Her appointment filled a vacancy, and she won her first election in 2023. As Vice Mayor, she's positioned as Ruder's second-in-command",
      "Tiger Media Network: Get to know candidates",
      "Cunningham remains the least publicly visible commissioner. Her primary public identity is through healthcare (HaysMed nurse) and community boards rather than political activity. The potential spousal connection to the County Attorney is the most interesting unanswered question in Hays local government",
      "Initial search results conflated Cunningham with Kelly Ancar, who is the actual owner/RN Director of Amazing Grace Homecare. The Hays Post candidate profile for Kelly Ancar (a separate candidate) describes the homecare business. Cunningham is the HaysMed nurse/fitness instructor, not the homecare owner",
      "Campaign finance filings reviewed for this profile show no detailed total was published in the report materials reviewed"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "I feel it is my duty to serve the public and 'Do Good.'",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Alaina Cunningham"
      },
      {
        "text": "We are all aware how valuable water is to our area.",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Alaina Cunningham"
      },
      {
        "text": "Fireworks is always a hot topic.",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Alaina Cunningham"
      },
      {
        "text": "You (staff) brought us a constrained budget which is what we asked for.",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "topic": "ALAINA CUNNINGHAM -- Vice Mayor, City Commissioner"
      },
      {
        "text": "retaining youth in the community instead of them moving away",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "topic": "ALAINA CUNNINGHAM -- Vice Mayor, City Commissioner"
      },
      {
        "text": "fiscal responsibility and sustainable growth",
        "source": "Alaina Cunningham research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "topic": "ALAINA CUNNINGHAM -- Vice Mayor, City Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "no detailed total was published in the report materials reviewed",
      "narrative": "The report materials reviewed for Alaina Cunningham did not include a full donor-by-donor breakdown. We still linked every finance source we found below so readers can inspect the filings directly.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not disclosed in the report materials reviewed"
        }
      ],
      "undisclosed": "This profile uses the campaign-finance sources available in the dossier set. Some filings may require direct review at FEC, OpenSecrets, or Kansas ethics records for line-item detail.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked finance sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/26608269-25e1-4f29-b80f-d2edbb3bba3d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/c8cd14ed-94b7-4507-8a9c-ad71038ac5b6",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysmed.Com",
        "url": "https://www.haysmed.com/services/chi-what-we-offer/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Lkm.Org",
        "url": "https://www.lkm.org/members/?id=50545549",
        "publication": "Lkm.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Minutes/_01042024-1458",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Hays city commission incumbents re-elected",
        "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network: Get to know the Hays City Commission candidates",
        "url": "https://tigermedianet.com/?p=75270",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Alaina Cunningham",
        "url": "https://www.facebook.com/alaina.cunningham.9/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Alaina Cunningham",
        "url": "https://www.linkedin.com/in/alaina-cunningham-4436ba1/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed: Alaina Cunningham",
        "url": "https://www.haysmed.com/the-center/alaina-cunningham/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed Foundation: New officers",
        "url": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
        "publication": "Haysmedfoundation.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: 2026 budget",
        "url": "https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed: Alaina Cunningham",
        "url": "https://www.haysmed.com/provider/alaina-cunningham/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Avvo: Aaron Cunningham",
        "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
        "publication": "Avvo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "About.me: Aaron Cunningham",
        "url": "https://about.me/aaron.cunningham",
        "publication": "About.Me",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "shaun-musil",
    "name": "Shaun Musil",
    "party": "NP",
    "position": "Hays City Commissioner",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Nex-Tech Employee / Business Owner",
    "campaignWebsite": "https://www.haysusa.com/273/Shaun-Musil",
    "whoTheyAre": "Age: 53.\n\nLived in Hays: 30 years.\n\nSpouse: Heather Musil -- instructor in FHSU Department of Teacher Education (previously Hays Middle School teacher).\n\nDay Job: Account Representative, Nex-Tech (managed IT, cybersecurity, physical security, communications).",
    "theirRecord": "The report files for Shaun Musil do not include a long voting-record narrative, but they do include office history, platform material, and source links for further review.",
    "whatYouShouldKnow": [
      "Musil is the most experienced commissioner and the institutional backbone of the commission. 12+ years of service spanning COVID, the R9 water fight, housing crisis, and downtown revitalization. His COVID leadership -- standing by the mask mandate despite vandalism and threats to his family -- is the most dramatic personal story on the commission. The Paisley Pear ownership creates an interesting lens on his downtown development votes, though nothing improper has been alleged. He ran on GoodParty.org, suggesting nonpartisan/independent orientation",
      "Hays Post: Commission reorganized, Musil thankful",
      "Musil is entering his final years on the commission with deep institutional memory. The COVID vandalism story is the most dramatic personal narrative of any local official in Hays. Having sold the Paisley Pear, he's now free of the business interest that created potential conflict-of-interest questions on downtown development votes. His re-election in 2025 to a four-year term (through 2029) was emphatic community endorsement",
      "During 2020, as Mayor Musil led the city through COVID mask mandate debates:",
      "Voted FOR the mask ordinance (3-1 vote; Ruder sole dissenter)"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "I think we have some unfinished business. For me, mainly, it's our water project.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Shaun Musil"
      },
      {
        "text": "I love representing Hays.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Shaun Musil"
      },
      {
        "text": "This shows that we're serious about development. ... We need retail. It's a priority.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Shaun Musil"
      },
      {
        "text": "the people came out of the woodwork thanking us.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/musilcomish/",
        "topic": "SHAUN MUSIL -- Commissioner"
      },
      {
        "text": "most impactful pieces of legislation",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/musilcomish/",
        "topic": "SHAUN MUSIL -- Commissioner"
      },
      {
        "text": "I believe it's going to happen.",
        "source": "Shaun Musil research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/musilcomish/",
        "topic": "SHAUN MUSIL -- Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "no detailed total was published in the report materials reviewed",
      "narrative": "The report materials reviewed for Shaun Musil did not include a full donor-by-donor breakdown. We still linked every finance source we found below so readers can inspect the filings directly.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not disclosed in the report materials reviewed"
        }
      ],
      "undisclosed": "This profile uses the campaign-finance sources available in the dossier set. Some filings may require direct review at FEC, OpenSecrets, or Kansas ethics records for line-item detail.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked finance sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/273/Shaun-Musil",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1afb725b-f6c4-4d09-93de-94b9008ba5ae",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/39d62580-9e3b-4536-85da-783f3cfe22bd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Shaun Musil - City of Hays Profile",
        "url": "https://haysusa.com/273/Shaun-Musil",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Shaun Musil - Hays City Commissioner",
        "url": "https://www.facebook.com/musilcomish/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Shaun Musil - Nex-Tech",
        "url": "https://www.linkedin.com/in/shaun-musil-26539490/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Commission reorganized, Musil thankful",
        "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Mask ordinance extension",
        "url": "https://hayspost.com/posts/095697ac-eb4b-4005-867a-bb049ec8c10f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Chick-fil-A incentives approved",
        "url": "https://hayspost.com/posts/433c0ff0-f645-4a6a-a4be-6f8549de14f9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Paisley Pear for sale",
        "url": "https://hutchpost.com/posts/f240fb89-d1f0-4373-ac4b-605d5e5f9c32",
        "publication": "Hutchpost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Paisley Pear grand reopening",
        "url": "https://hayspost.com/posts/efb80be7-69e2-4461-8e69-d7f86b59e482",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FHSU: Tiger Nation Partner of the Year",
        "url": "https://www.fhsu.edu/news/2024/08/fhsu-announces-2024-tiger-nation-partner-of-the-year",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Nex-Tech: Shaun profile",
        "url": "https://www.nex-tech.com/business/shaun/",
        "publication": "Nex-tech.Com",
        "date": "2026-03-31"
      },
      {
        "title": "GoodParty.org: Shaun Musil",
        "url": "https://goodparty.org/candidate/shaun-musil/hays-city-commission",
        "publication": "Goodparty.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Special mask meeting",
        "url": "https://hayspost.com/posts/1a241ad5-d176-4494-9e9a-aa4a286f3bf4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KSL: Hays mask mandate story",
        "url": "https://www.ksl.com/article/50001567/city-in-kansas-requiring-masks-to-guard-safe-reputation",
        "publication": "Ksl.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "sandy-jacobs",
    "name": "Sandy Jacobs",
    "party": "NP",
    "position": "Hays City Commissioner",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Former Mayor / Foundation Executive",
    "campaignWebsite": "https://www.haysusa.com/270/Sandy-Jacobs",
    "whoTheyAre": "Age: 75.\n\nHusband: Danny Jacobs (both over 65).\n\nLifetime Hays resident.\n\nRetired from: Sunflower Bank (Executive Vice President) and Heartland Community Foundation (Executive Director, 5 years, retired ~Dec 31, 2020).",
    "theirRecord": "Sunflower Bank -- Banking career (details/years not specified in public records). Retired banker.\n\nHeartland Community Foundation -- Executive Director for 5 years. Led \"substantial growth\" across Ellis, Rooks, and Trego counties. Retired from this role ~Dec 31, 2020.",
    "whatYouShouldKnow": [
      "Jacobs is the elder statesperson of the commission. At 75, she's a retired banker and nonprofit executive who has served three stints as mayor. Her Vine Street roundabout campaign is her most tangible infrastructure legacy -- and she's not shy about citing the economic impact data. Her retail development focus aligns with a business-oriented worldview shaped by decades in banking and economic development. She voted with the mask mandate majority. Her re-election in November 2025 to another four-year term (through 2029, when she'd be 79) shows she isn't slowing down",
      "Hays Post: Jacobs filing announcement",
      "At 75, Jacobs is the commission's elder stateswoman with the deepest roots in Hays finance and philanthropy. Her Sunflower Bank career (EVP) and Heartland Foundation leadership give her the strongest economic development credentials on the commission. The Vine Street roundabout project -- backed by hard data on restaurant sales increases -- is a tangible legacy. She and Danny are emblematic of the \"establishment Hays\" power structure: banking, nonprofit, civic service",
      "Sunflower Bank -- Banking career (details/years not specified in public records). Retired banker",
      "Heartland Community Foundation -- Executive Director for 5 years. Led \"substantial growth\" across Ellis, Rooks, and Trego counties. Retired from this role ~Dec 31, 2020"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "I've served for eight years, and my passion continues to be for this city as a native.",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Sandy Jacobs"
      },
      {
        "text": "We've asked for less water than is allowed by the state.",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Sandy Jacobs"
      },
      {
        "text": "we're rock stars compared to other communities",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Sandy Jacobs"
      },
      {
        "text": "I'm very focused on retail development in this community. I think we need to be looking at everything possible we can do to make ourselves attractive to people out there.",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
        "topic": "SANDY JACOBS -- Commissioner"
      },
      {
        "text": "Sustainable, responsible, planned economic growth",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
        "topic": "SANDY JACOBS -- Commissioner"
      },
      {
        "text": "This is the best design -- in my opinion -- that has been brought forward.",
        "source": "Sandy Jacobs research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
        "topic": "SANDY JACOBS -- Commissioner (~8 years), Former Mayor"
      }
    ],
    "campaignFinance": {
      "totalRaised": "no detailed total was published in the report materials reviewed",
      "narrative": "The report materials reviewed for Sandy Jacobs did not include a full donor-by-donor breakdown. We still linked every finance source we found below so readers can inspect the filings directly.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not disclosed in the report materials reviewed"
        }
      ],
      "undisclosed": "This profile uses the campaign-finance sources available in the dossier set. Some filings may require direct review at FEC, OpenSecrets, or Kansas ethics records for line-item detail.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked finance sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ab9f126e-6b0d-4482-9212-ba76a853c772",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/270/Sandy-Jacobs",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/021a5674-353e-46c4-b816-42284ec8514b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/26583ec1-c757-4e20-9de0-62af6beffcd2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Sandy Jacobs - City of Hays Profile",
        "url": "https://haysusa.com/270/Sandy-Jacobs",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Heartland Community Foundation",
        "url": "https://heartlandcommunityfoundation.org/",
        "publication": "Heartlandcommunityfoundation.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Sandy Jacobs - Hays City Commission",
        "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Jacobs filing announcement",
        "url": "https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: 5 candidates vying",
        "url": "https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HDN: Jacobs elected Mayor, Ruder Vice Mayor",
        "url": "https://www.hdnews.net/reorganization-of-commission-names-jacobs-as-mayor-ruder-as-vice-mayor/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: South Vine reconstruction",
        "url": "https://hayspost.com/posts/9a118e53-0b32-4cc1-b6c5-44a476f7f7b9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: North Vine over estimate",
        "url": "https://hayspost.com/posts/5e98f695eb7f17053602be3c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Roundabout working efficiently",
        "url": "https://hayspost.com/posts/7dd5d9eb-456f-47d7-bde0-70d6a92d504a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "david-vilaysing",
    "name": "David Vilaysing",
    "party": "NP",
    "position": "Hays City Commissioner",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "Retired Police Officer / Trainer",
    "campaignWebsite": "https://www.haysusa.com/269/City-Commission",
    "whoTheyAre": "Age: 43.\n\nEmail: Vilaysing-HaysCity@outlook.com.\n\nDay Job: Owner, DXI Training Solutions LLC.\n\nRetired from: Hays Police Department (19 years, retired as Sergeant).",
    "theirRecord": "The report files for David Vilaysing do not include a long voting-record narrative, but they do include office history, platform material, and source links for further review.",
    "whatYouShouldKnow": [
      "Vilaysing is the wild card on the commission. A 19-year police veteran with military police background, he's the only commissioner with law enforcement experience. His DXI Training business shows he's focused on de-escalation and communication -- not the stereotypical \"tough cop\" persona. The Alzheimer's fundraiser and BYOB self-defense classes show community engagement. His Laotian surname suggests an interesting personal story (likely refugee family background given the Laotian community in Kansas), though no details were found in public records. His pet licensing initiative is a small but telling first move -- he's looking to cut bureaucratic friction. He replaced the most progressive commissioner (Barrick, the No Kings protester), which shifts the commission's ideological center",
      "Hays Post: David Vilaysing Q&A",
      "Hays Post: 2 incumbents, 1 newcomer elected",
      "Vilaysing brings a unique perspective to the commission as a Laotian-American retired police sergeant with military police background. His de-escalation focus (both professionally and philosophically) is notable -- he's not a \"tough on crime\" stereotype. The BYOB self-defense classes and Alzheimer's fundraiser show genuine community investment. His pet licensing reform initiative (reducing bureaucratic fees that collect only $14K/year) signals a practical, libertarian-leaning approach to government. He replaced the progressive Reese Barrick, shifting the commission's center of gravity",
      "Campaign finance filings reviewed for this profile show no detailed total was published in the report materials reviewed"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "I knew at my core I missed giving back to my community.",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - David Vilaysing"
      },
      {
        "text": "I have a good set of core values.",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - David Vilaysing"
      },
      {
        "text": "David began his employment with the Hays Police Department in 2005 as a Police Officer.",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - David Vilaysing"
      },
      {
        "text": "missing in how the current city commission handles matters",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "topic": "DAVID VILAYSING"
      },
      {
        "text": "The most important factor in de-escalation is an officer's self-control.",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
        "topic": "DAVID VILAYSING -- Commissioner"
      },
      {
        "text": "Responsible conflict management skills for all aspects of life",
        "source": "David Vilaysing research file",
        "date": "2026-03-31",
        "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
        "topic": "DAVID VILAYSING -- Commissioner"
      }
    ],
    "campaignFinance": {
      "totalRaised": "no detailed total was published in the report materials reviewed",
      "narrative": "The report materials reviewed for David Vilaysing did not include a full donor-by-donor breakdown. We still linked every finance source we found below so readers can inspect the filings directly.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not disclosed in the report materials reviewed"
        }
      ],
      "undisclosed": "This profile uses the campaign-finance sources available in the dossier set. Some filings may require direct review at FEC, OpenSecrets, or Kansas ethics records for line-item detail.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked finance sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/40e17885-6833-42a5-9562-0abd9f173b21",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/269/City-Commission",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "DXI Training Solutions LLC",
        "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
        "publication": "Ileeta.Org",
        "date": "2026-03-31"
      },
      {
        "title": "DXI Training Solutions LLC",
        "url": "https://www.facebook.com/people/DXI-Training-Solutions-LLC/61553945955697/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: 2 incumbents, 1 newcomer elected",
        "url": "https://hayspost.com/posts/1f1932b8-516a-420d-841e-df378c20a8f2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Self-defense for Alzheimer's",
        "url": "https://hayspost.com/posts/a6608a1f-7d44-4212-85de-f8b22f600687",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: No Kings protest (Barrick, not Vilaysing)",
        "url": "https://hayspost.com/posts/39c5ed3b-dd7b-4248-a71f-a7ca06694a9e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "toby-dougherty",
    "name": "Toby Dougherty",
    "party": "NP",
    "position": "Hays City Manager",
    "electionSlug": "hays-city-current",
    "incumbent": true,
    "occupation": "City Manager",
    "family": "Not identified in public records. No spouse, children, church, or personal details found despite extensive search. Dougherty maintains an exceptionally private personal life for someone who has been a public figure for 21 years. His public persona is entirely professional",
    "campaignWebsite": "https://www.haysusa.com/149/City-Managers-Office",
    "whoTheyAre": "Title: City Manager, City of Hays (appointed August 1, 2007).\n\nHometown: Lucas, Kansas (small town ~1 hour from Hays).\n\nIn Hays since: 2005 (started as Assistant City Manager March 2005).\n\nTotal Hays government service: 21 years.",
    "theirRecord": "The report files for Toby Dougherty do not include a long voting-record narrative, but they do include office history, platform material, and source links for further review.",
    "whatYouShouldKnow": [
      "Toby Dougherty is the most powerful person in Hays city government. Commissioners serve 2-4 year terms and rotate through the mayor position; Dougherty has been the constant for 19 years. He runs the daily operations, prepares the budgets, hires the staff, and manages every major project. The R9 water project is his legacy bet -- a $145M infrastructure project that will define whether Hays survives as a viable western Kansas city in the 21st century. His Strong Towns philosophy is intellectually interesting and somewhat at odds with the aggressive growth incentives the commission has been approving (RHIDs, IRBs, Chick-fil-A incentives). His 12-year prior career in transportation before city management gives him infrastructure chops. His KU political science background and CPM credential match Mason Ruder's -- suggesting he may have been a mentor/model for Ruder's career path. 19 years with no significant personal controversies is remarkable for any public official",
      "City of Hays: City Manager's Office",
      "Dougherty is the most consequential unelected official in western Kansas. His 21-year tenure managing a city whose water supply is existentially threatened has made him effectively irreplaceable. The R9 Ranch pipeline is a generational infrastructure project -- $144.9M for a city of 21,000 is extraordinary. His Strong Towns methodology makes him unusually sophisticated for a small-city manager. The cost doubling of the R9 project is his biggest vulnerability, but no one has seriously challenged it because everyone knows the alternative (no water) is unthinkable. His personal privacy is remarkable -- in 21 years, there's essentially nothing public about his personal life",
      "R9 cost escalation: Project cost doubled from $75-80M to $144.9M during his tenure. No one has formally challenged this, but it's a massive cost increase",
      "North Vine over budget: $3.5M over original estimate -- acknowledged publicly"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "The budget is based overall on a slightly cautionary approach.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Toby Dougherty"
      },
      {
        "text": "We have a bond rolling off.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Toby Dougherty"
      },
      {
        "text": "I felt like the dumbest kid in the classroom out there.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "topic": "CODEX DEEP RESEARCH 2026-04-01 - Toby Dougherty"
      },
      {
        "text": "The opponents in this have succeeded in weaponizing the legal and judicial system against Hays and Russell.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://www.haysusa.com/directory.aspx?eid=6",
        "topic": "TOBY DOUGHERTY -- City Manager"
      },
      {
        "text": "Securing this Build Kansas grant marks a significant step forward.",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://www.haysusa.com/directory.aspx?eid=6",
        "topic": "TOBY DOUGHERTY -- City Manager"
      },
      {
        "text": "We have had to look to places like Las Vegas and Tucson and Phoenix",
        "source": "Toby Dougherty research file",
        "date": "2026-03-31",
        "url": "https://www.haysusa.com/directory.aspx?eid=6",
        "topic": "TOBY DOUGHERTY -- City Manager"
      }
    ],
    "campaignFinance": {
      "totalRaised": "no detailed total was published in the report materials reviewed",
      "narrative": "The report materials reviewed for Toby Dougherty did not include a full donor-by-donor breakdown. We still linked every finance source we found below so readers can inspect the filings directly.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not disclosed in the report materials reviewed"
        }
      ],
      "undisclosed": "This profile uses the campaign-finance sources available in the dossier set. Some filings may require direct review at FEC, OpenSecrets, or Kansas ethics records for line-item detail.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked finance sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/292e6398-09de-4575-8f00-59772bbb0c0c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/149/City-Managers-Office",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysusa.Com",
        "url": "https://www.haysusa.com/Directory.aspx?DID=6",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/92c6bbf2-25be-47de-ad1c-a2e44e17e420",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/84fcc453-7b77-49a8-a26e-b9011a8d1597",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/227c6d39-b8a1-4133-9b9a-8843072fe5a2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Forward Ever - Toby Dougherty",
        "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "haysusa.com/directory.aspx?eid=6",
        "url": "https://www.haysusa.com/directory.aspx?eid=6",
        "publication": "Haysusa.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Strong Towns: Toby Dougherty 2015",
        "url": "https://www.strongtowns.org/journal/2015/10/7/toby-dougherty-city-manager-of-haysks",
        "publication": "Strongtowns.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Strong Towns: Presenting the Hays Document",
        "url": "https://www.strongtowns.org/journal/2016/5/4/the-hays-document",
        "publication": "Strongtowns.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Municipal Water Leader Magazine",
        "url": "https://municipalwaterleader.com/guaranteeing-the-water-supply-of-hays-kansas-through-conservation-reuse-and-new-supplies/",
        "publication": "Municipalwaterleader.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Issuu: Municipal Water Leader interview",
        "url": "https://issuu.com/waterstrategies/docs/mwl_october_2020/s/11017849",
        "publication": "Issuu.Com",
        "date": "2026-03-31"
      },
      {
        "title": "E&E News/POLITICO: Farm vs. City water fight",
        "url": "https://www.eenews.net/articles/farm-vs-city-kansas-water-law-gets-a-major-stress-test/",
        "publication": "Eenews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Hays, Russell sue Edwards County",
        "url": "https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Reflector: Supreme Court arguments",
        "url": "https://kansasreflector.com/2025/12/15/kansas-supreme-court-examines-roiling-water-dispute-between-crop-irrigators-and-hays-russell/",
        "publication": "Kansasreflector.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: R9 delays costing millions",
        "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: $15.8M Build Kansas grant",
        "url": "https://hayspost.com/posts/70979342-77f8-4cc8-8370-86ef215b4085",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "KWCH: $15M grant",
        "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: R9 hearing went well",
        "url": "https://hayspost.com/posts/8b4554cd-79b4-4076-8a9c-287892f8e9dd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: New assistant city manager",
        "url": "https://hayspost.com/posts/5d942a2c-9baf-4ca9-aa82-92bbd76d37c7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Mayor/CM discuss 2025 projects",
        "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Water bill awaits governor signature",
        "url": "https://hayspost.com/posts/c6a0184d-7e96-4157-ba49-d5e49a49e54c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "ZoomInfo: Toby Dougherty",
        "url": "https://www.zoominfo.com/p/Toby-Dougherty/381299961",
        "publication": "Zoominfo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Strong Towns Podcast",
        "url": "https://podcast.strongtowns.org/e/toby-dougherty-1535377231/",
        "publication": "Podcast.Strongtowns.Org",
        "date": "2026-03-31"
      },
      {
        "title": "OpenPayrolls: Hays highest paid",
        "url": "https://openpayrolls.com/rank/highest-paid-employees/hays-ks",
        "publication": "Openpayrolls.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "scott-braun",
    "name": "Scott Braun",
    "party": "R",
    "position": "Ellis County Sheriff",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "Ellis County Sheriff",
    "religion": "Roman Catholic (Diocese of Salina)",
    "education": "Victoria High School graduate (Victoria, KS -- small town in Ellis County)",
    "campaignWebsite": "https://www.kansassheriffs.org/county_map/county/914",
    "whoTheyAre": "Braun's career is unusually easy to track because the sheriff's office and Hays Post both documented his promotions, awards, and department structure. He rose from reserve deputy work in 1995 to deputy, narcotics detective, undersheriff, and then sheriff, while earning a Certified Public Manager designation and the Kansas Law Enforcement Training Center credential. The current official sheriff page also identifies him as president of the Kansas Sheriffs' Association, which makes him one of the more publicly visible county officials in western Kansas.\n\nHis public reputation is built around two things: law enforcement credibility and a very strong Catholic identity. Braun is tied to St. Nicholas of Myra Catholic Church through parish council leadership and Knights of Columbus involvement, and the public record shows that faith is not a side note for him. In Hays, that combination matters because it places him inside the same Catholic civic network that connects several other Ellis County leaders.\n\n1995: Reserve Deputy Sheriff, Ellis County Sheriff's Office.\n\n1995: Hired by Ellis Police Department.",
    "theirRecord": "Current Ellis County Jail capacity: 72 beds.\n\nDaily average population: upper 60s for 2.5+ years (consistently near capacity).\n\nJustice Planners consulting firm recommended a new facility; county needs 95 beds.\n\nAs Hays PD prepares to move out of Law Enforcement Center in 2026, Sheriff's Office plans to expand into that space.",
    "whatYouShouldKnow": [
      "1995: Reserve Deputy Sheriff, Ellis County Sheriff's Office",
      "1995: Hired by Ellis Police Department",
      "1997: Hired as Deputy, Ellis County Sheriff's Office",
      "ICE agreement liability gap -- signed agreement before fully understanding insurance coverage implications; had to go back to commission to address",
      "Drug forfeiture advocacy -- positioned against reform that had bipartisan support; Kansas Legislature passed reform anyway"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED.\n\nDenomination: Roman Catholic (Diocese of Salina).",
    "church": {
      "name": "St. Nicholas of Myra Catholic Church, Hays",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "details": "Confidence: CONFIRMED. Denomination: Roman Catholic (Diocese of Salina)."
    },
    "quotes": [
      {
        "text": "It has to be within that 48-hour window. We will not hold them one minute longer than that.",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "If forfeiture is taken away from law enforcement, it will have an effect on taxpayers",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "potentially losing millions of dollars in funding",
        "source": "Scott Braun research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/scott-braun-cpm-62833366/",
        "topic": "SCOTT BRAUN, CPM"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No itemized county-campaign donor table surfaced in the source set reviewed for this pass. The public record here is much stronger on office record, parish involvement, and policy positions than on donor-by-donor finance detail.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Salinadiocese.Org",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "publication": "Salinadiocese.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/eb108042-f876-49f9-b426-8047d18940ef",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jcpost.Com",
        "url": "https://jcpost.com/posts/0b4a5662-3939-49d6-808a-c3857ad67db9",
        "publication": "Jcpost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Kansassheriffs.Org",
        "url": "https://www.kansassheriffs.org/county_map/county/914",
        "publication": "Kansassheriffs.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Elliscountysheriff.Com",
        "url": "https://elliscountysheriff.com/ecso/",
        "publication": "Elliscountysheriff.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/4564af70-9835-4a1d-897a-9940279e3348",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/69131eb8-04ac-4b1d-9561-e24c9309ad07",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/scott-braun-cpm-62833366",
        "url": "https://www.linkedin.com/in/scott-braun-cpm-62833366/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Undersheriff Braun Announces Run -- Hays Post",
        "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
        "publication": "Archive.Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellis County Sheriff's Office",
        "url": "https://www.ellisco.net",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "aaron-cunningham",
    "name": "Aaron Cunningham",
    "party": "R",
    "position": "Ellis County Attorney",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "County Attorney / Attorney",
    "hometown": "Hays, Kansas",
    "education": "2012 Hays High School graduate (born/raised in Hays)",
    "family": "Is he related to Alaina Cunningham (Hays City Vice Mayor)? — NEEDS VERIFICATION",
    "campaignWebsite": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
    "whoTheyAre": "Cunningham's story is rooted in Hays. He is visible in school coverage, county office materials, and Hays Post reporting, which together show a local who left for college and law school and then came back. The county attorney office page now lists him as the officeholder from 2025 onward, and the Hays High Guidon profile captures the career-speaker version of the same story: a student who was active in music and clubs and who later found his lane in advocacy and law.\n\nThe more personal public line comes from his about.me page, which uses explicitly Christian language. That does not identify a church building, but it does show that faith is part of how he presents himself publicly. In the Hays civic ecosystem, that matters because it helps explain why his prosecutorial style is stricter than the officeholder he replaced.\n\nIntern for former Ellis County Attorney Tom Drees.\n\nHired by Drees after passing the bar exam (2019).",
    "theirRecord": "His biggest policy move so far is the reversal of the county's marijuana-prosecution pause. Cunningham says the Legislature, not the county attorney, decides what is criminal, and he has made clear that he intends to enforce Kansas law as written. He has also signaled a hard line on hemp-derived Delta-8 and Delta-10 cases while still recognizing the office's resource limits and prioritization needs.\n\nThe office page itself confirms the practical side of his agenda: the county attorney's office handles misdemeanors, felonies, juvenile matters, alcohol/drug care cases, child-in-need-of-care cases, and mental-illness related work. That makes Cunningham less of a one-issue prosecutor than the media buzz might suggest. He is managing a backlogged rural office, a staffed victim/witness process, and a public expectation that the office do more than just file charges.",
    "whatYouShouldKnow": [
      "Marijuana prosecution reversal is the most politically significant action of his tenure so far. Whether this is a \"controversy\" depends on perspective -- law-and-order voters approve, reform advocates criticize",
      "Delta-8 stance is aggressive compared to many Kansas counties",
      "Ran unopposed, so his positions were never tested in a competitive election",
      "He was locally educated and came back to serve in Ellis County",
      "He is publicly Christian, but no specific church membership was found in this pass"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED (faith identity); CHURCH UNKNOWN.\n\nDenomination: Christian (specific denomination unknown).",
    "quotes": [
      {
        "text": "I tend to be of the philosophy",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I have an obligation to enforce the law as it's written.",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I always had a strong sense of justice",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "a fallen individual in need of Christ's salvation",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "In a misdemeanor marijuana case, the victim is the state of Kansas at large with no individual attached to the case.",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "AARON CUNNINGHAM"
      },
      {
        "text": "My personal opinion is that marijuana and hemp should be legal, or at a very minimum decriminalized.",
        "source": "Aaron Cunningham research file",
        "date": "2026-03-31",
        "url": "https://about.me/aaron.cunningham",
        "topic": "AARON CUNNINGHAM"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No itemized donor table surfaced in the public materials reviewed for this pass. This is a county officeholder profile, so the public evidence is concentrated in office actions rather than donor disclosures.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "About.Me",
        "url": "https://about.me/aaron.cunningham",
        "publication": "About.Me",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayshighguidon.Com",
        "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
        "publication": "Hayshighguidon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/92/Attorney",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/9397fb25-5dc6-4443-a340-6aae96abc594",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a5f579fa-6c33-44fd-921e-5a8435208d58",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Salinapost.Com",
        "url": "https://salinapost.com/posts/4397834a-4587-449e-ac2b-6effc74eb6c3",
        "publication": "Salinapost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Avvo.Com",
        "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
        "publication": "Avvo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Elliscountyksbar.Org",
        "url": "https://www.elliscountyksbar.org/members",
        "publication": "Elliscountyksbar.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Haysmed.Com",
        "url": "https://haysmed.com/provider/alaina-cunningham/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Anderson Law Office, LLC",
        "url": "https://www.andersonlawoffice.net/",
        "publication": "Andersonlawoffice.Net",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed",
        "url": "https://www.haysmed.com/provider/alaina-cunningham/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/in/aaron-cunningham-653b3094/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "bobbi-dreiling",
    "name": "Bobbi Dreiling",
    "party": "R",
    "position": "Ellis County Clerk",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "County Clerk / Election Officer",
    "religion": "Roman Catholic (devout)",
    "campaignWebsite": "https://www.ellisco.net/93/Clerk",
    "whoTheyAre": "Title: Ellis County Clerk and Election Officer (first elected 2020, re-elected 2024).\n\nParty: Republican.\n\nAge: 61.\n\nLocation: Hays, Kansas.",
    "theirRecord": "The defining issue of Dreiling's tenure is the Fort Hays State polling-location fight. She closed the 601 Main site for low turnout and ADA issues, combined precincts, and defended the decision by pointing to the 69 registered on-campus voters figure. Opponents framed the move as access reduction, but Dreiling's own rationale was cost and turnout.\n\nShe also took a practical, systems-oriented approach to election administration. Her office received security grants, installed drop-box and room cameras, and added a notification system. The misprinted-ballots incident from her deputy-clerk years remains a blemish, but her later actions show a clerk who tries to tighten procedures rather than improvise around them.\n\nBallot drop box camera system: Used $6,000 election security grant to install camera at ballot drop box at county admin center. Camera captures: license plate, driver, and ballots being dropped in. Added two additional cameras to capture vehicles entering/leaving the alley.\n\nBallot counting room cameras and election equipment storage room cameras.",
    "whatYouShouldKnow": [
      "Dreiling is an election administrator in an era when election administration is intensely politicized. Her refusal to place a polling location at FHSU -- despite formal petitions from students, the ACLU, university administration, and campus police -- is her most controversial decision. The \"69 registered voters on campus\" defense ignores the broader population of students who live off-campus but near FHSU. Her election security camera installation and township consolidation show competent administration. The 3,800 misprinted ballots occurred on her watch as deputy clerk -- not directly her fault, but she was in the office when it happened. Her 77-23% re-election margin in 2024 shows the controversy hasn't cost her Republican voter support",
      "This was the defining controversy of Dreiling's tenure and the central issue of her 2024 re-election race:",
      "Dreiling closed the polling location at 601 Main (closest to FHSU campus) citing low voter turnout",
      "Combined that ward/precinct with another closed for ADA compliance issues",
      "FHSU polling location controversy -- drew ACLU attention and statewide news coverage. Whether her position is seen as fiscal responsibility or voter suppression depends on political perspective. The numbers (69 registered on-campus voters out of 1,650 residents) do support her cost argument, though critics note this is a chicken-and-egg problem"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED (but note: deceased October 16, 2024).\n\nDenomination: Roman Catholic (devout).",
    "church": {
      "name": "Specific parish not named in obituary",
      "denomination": "Roman Catholic (devout)",
      "details": "Confidence: CONFIRMED (but note: deceased October 16, 2024). Denomination: Roman Catholic (devout)."
    },
    "quotes": [
      {
        "text": "The County Clerk's Office is located in the Administrative Center, 718 Main in Hays, Kansas.",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/93/Clerk",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The County Clerk serves as secretary to the Board of Commissioners.",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/93/Clerk",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "the numbers don't show for me to allow to spend taxpayer dollars",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/93/Clerk",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The County Clerk's Office ... voter registration",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/93/Clerk",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Students, community members plead for polling location at Fort Hays State",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://www.facebook.com/p/Bobbi-Dreiling-for-Ellis-County-Clerk-100067810926476/",
        "topic": "BOBBI DREILING"
      },
      {
        "text": "devout Catholic faith was passed on and instilled into her children",
        "source": "Bobbi Dreiling research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
        "topic": "BOBBI DREILING"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No itemized donor table surfaced in the public source set I reviewed for this pass. The public record is much stronger on election administration than on donor-by-donor finance detail.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/93/Clerk",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/90ec3907-2122-4b32-9bc1-b4199532ec34",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/3a3f06a1-6b07-45c6-bf3c-8b76f4d564d7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Aclukansas.Org",
        "url": "https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/",
        "publication": "Aclukansas.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Wibw.Com",
        "url": "https://www.wibw.com/2023/11/02/students-community-members-plead-polling-location-fort-hays-state/",
        "publication": "Wibw.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1ff3108c-562d-421d-9200-395f040c2103",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/729/Revenue-Neutral-Rate",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Bobbi Dreiling for Ellis County Clerk",
        "url": "https://www.facebook.com/p/Bobbi-Dreiling-for-Ellis-County-Clerk-100067810926476/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Letter -- Hays Post",
        "url": "https://hayspost.com/posts/6308b19f-5890-4688-85fe-3b1ef376a09f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Revenue Neutral Rate -- Hays Post",
        "url": "https://hayspost.com/posts/1003f2e5-b320-47b2-8fb1-4bbc626ef191",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post",
        "url": "https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post coverage",
        "url": "https://hayspost.com/posts/eaf298bb-0a33-4f7f-ac25-8869ca6d9ad3",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Dreiling Answers Polling Questions (Letter) -- Hays Post",
        "url": "https://hayspost.com/posts/1fa3b93b-40fb-493c-ab10-6969085c9236",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "BobJane 'Bobbi' Dreiling Obituary",
        "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Bobbi Dreiling for Ellis County Clerk",
        "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/",
        "publication": "Facebook.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Dreiling candidate profile",
        "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: Students urge polling site",
        "url": "https://hayspost.com/posts/17997478-c7b3-4601-a433-c8f9623b09da",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "nathan-leiker",
    "name": "Nathan Leiker",
    "party": "R",
    "position": "Ellis County Commissioner, District 3",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "Farmer / County Commissioner",
    "religion": "Likely Roman Catholic",
    "family": "Parents: David and Claudia Leiker of Hays",
    "campaignWebsite": "https://www.ellisco.net/120/County-Commission",
    "whoTheyAre": "Title: Ellis County Commissioner, 3rd District; Vice Chairman (2026); Chairman in 2024.\n\nParty: Republican.\n\nContact: nleiker@ellisco.net | 785-621-1739.\n\n2026 Salary: $20,746.",
    "theirRecord": "Leiker has been one of the more fiscally conservative county commissioners, but not in a reflexively anti-government way. He supported the 2026 budget increase while arguing the county must justify each department line item, and he framed mental-health spending as cheaper than building a bigger jail. That is a practical county-government posture, not a culture-war one.\n\nHe also backed the Big Creek Estates housing approvals and openly said the county should work with the city of Hays on water and job growth. That combination - a farmer who is cautious about taxes but not hostile to county investment - is the best summary of his public record so far.\n\n2022 Primary: Won a competitive four-way Republican primary for District 3. Leiker received 764 votes, defeating Chris McGowne (639), Randy Marintzer (324), and incumbent Joe LeRoux (286). LeRoux finished dead last.\n\nDistrict 3 is the largest by land area, made up of six townships covering the entire eastern edge of Ellis County and an area north of Hays.",
    "whatYouShouldKnow": [
      "Leiker is the agricultural voice on the commission -- a working farmer managing 2,000+ acres across two counties. His TMP-Marian background places him squarely in the Catholic Volga German community that is the cultural bedrock of Ellis County. His 2022 primary win over the incumbent (who finished last in a four-way race) suggests the rural agricultural community wanted fresh representation. His budget discipline (\"2 paychecks a year\") translates directly to his government approach -- during the 2026 budget, he noted the commission spent \"almost 13 hours going through each department, item by item, justifying costs and adjustments",
      "None found. Very limited public profile outside of commission duties and farming",
      "He is a working farmer first and a county commissioner second",
      "He likes county spending scrutinized line by line",
      "He sees water, housing, and jobs as connected local issues"
    ],
    "whereTheyWorship": "Confidence: STRONG INDICATOR (Catholic family heritage).\n\nDenomination: Likely Roman Catholic.",
    "church": {
      "name": "Likely St. Nicholas of Myra Catholic Church, Hays (family connection)",
      "denomination": "Likely Roman Catholic",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "details": "Confidence: STRONG INDICATOR (Catholic family heritage). Denomination: Likely Roman Catholic."
    },
    "quotes": [
      {
        "text": "work with the city of Hays to get more water to Hays and higher-paying jobs.",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Ellis County spending too much money",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "We spent almost 13 hours going through each department",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "is less expensive than building a new jail.",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "basically only 2 paychecks a year",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276",
        "topic": "NATHAN LEIKER"
      },
      {
        "text": "We spent almost 13 hours going through each department, item by item, justifying costs and adjustments",
        "source": "Nathan Leiker research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276",
        "topic": "NATHAN LEIKER"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No public itemized donor table surfaced in the source set reviewed for this pass. If county-level filings exist, they were not present in the materials I could verify here.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Salinadiocese.Org",
        "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
        "publication": "Salinadiocese.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/120/County-Commission",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Manta.Com",
        "url": "https://www.manta.com/c/mhxwpdc/l5-farms-inc",
        "publication": "Manta.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Linkedin.Com",
        "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Haysmemorial.Com",
        "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
        "publication": "Haysmemorial.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fhsuguides.Fhsu.Edu",
        "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
        "publication": "Fhsuguides.Fhsu.Edu",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "neal-younger",
    "name": "Neal Younger",
    "party": "R",
    "position": "Ellis County Commissioner, District 2",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "Electrician / Plumber",
    "family": "Not identified in any public record. No spouse, children, or family details found",
    "campaignWebsite": "https://www.ellisco.net/120/County-Commission",
    "whoTheyAre": "Title: Ellis County Commissioner, 2nd District; Chairman of the Commission (2026).\n\nParty: Republican.\n\nContact: nyounger@ellisco.net | 785-656-0814.\n\n2026 Salary: $21,584.",
    "theirRecord": "Economic Development: Favors proactive county role in economic development. Stated he would \"work with the city of Hays to get more water to Hays and higher-paying jobs.\n\nFiscal Conservatism: Identified \"Ellis County spending too much money\" as a top concern during 2020 campaign.\n\nGovernment Efficiency: Pledged to spend 1-2 hours minimum in every county department to assess staffing needs.\n\nHousing: During Big Creek Estates discussions, suggested residents explore forming a rural water district or seeking city water. Asked about contingency plans if wells fail.",
    "whatYouShouldKnow": [
      "Younger is the blue-collar voice on the commission -- an electrician/plumber who brought trade-level fiscal discipline to county government. His mental health funding argument (\"cheaper than jail\") shows he's a pragmatist, not an ideologue. His complete absence from social media is notable in 2026 -- he governs through meeting rooms, not posts. No controversies, no red flags, no personal information publicly available. He is, in many ways, the most anonymous elected official in Ellis County",
      "None found. Clean public record",
      "He is a trade professional, not a career politician",
      "He favors tight review of county spending",
      "He is willing to spend money where he thinks it prevents larger costs later"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "Ellis County spending too much money",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "is less expensive than building a new jail.",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "work with the city of Hays to get more water to Hays and higher-paying jobs.",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "NEAL YOUNGER"
      },
      {
        "text": "Mental Health Cheaper Than Jail",
        "source": "Neal Younger research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "topic": "NEAL YOUNGER -- Ellis County Commissioner, District 2"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No public itemized donor table surfaced in the materials reviewed. The available record is almost entirely office activity and budget coverage.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/120/County-Commission",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Voterly.Com",
        "url": "https://voterly.com/politicians/DmRJRnnSKN/neal-younger",
        "publication": "Voterly.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Post: 2026 budget/mill levy",
        "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "rebecca-herzog",
    "name": "Rebecca Herzog",
    "party": "R",
    "position": "Ellis County Register of Deeds",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "Register of Deeds",
    "campaignWebsite": "https://www.ellisco.net/100/Register-of-Deeds",
    "whoTheyAre": "Title: Ellis County Register of Deeds.\n\nParty: Republican.\n\nLocation: Hays, Kansas.\n\nOffice: 718 Main St, Hays, KS 67601.",
    "theirRecord": "The strongest verified point in Herzog's record is simply that she is running a professional, low-profile office with public access requirements. The county page says the office records land documents and keeps records open to the public, which is the core responsibility of the post. The 2024 election result page confirms she was reelected with 7,074 votes, which suggests that the local electorate is comfortable with her in the job even without heavy media coverage.\n\nThe rest of her public record is thin. That is not a criticism so much as a description of the office type: register of deeds is one of those county roles where competence is the headline.\n\n8 years of service with Ellis County (recognized February 2024).\n\nThis means she started working in the Register of Deeds office approximately 2016.",
    "whatYouShouldKnow": [
      "Rebecca Herzog is genuinely invisible in the public sphere. In an era of social media, candidate profiles, and local news coverage of every election, she managed to win an elected office without leaving a single searchable trace of her personal life, campaign, or views. This is either extraordinary privacy discipline or a reflection of how uncontested Register of Deeds races work in rural Kansas -- the office is so non-political that no one asks questions, and no one campaigns. She is, indeed, the Ghost of Ellis County",
      "None found. This is the quietest office in Ellis County government",
      "Her office is document-heavy and land-record centered",
      "She is not a high-profile public speaker or campaign personality",
      "The county record suggests she likely has experience inside the office before election"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "files and records documents",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Record all documents submitted by the public",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The Ghost of Ellis County",
        "source": "Rebecca Herzog research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "topic": "REBECCA HERZOG -- Register of Deeds"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No public donor table surfaced in the source set reviewed. The available public evidence is election results and office description, not finance detail.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/100/Register-of-Deeds",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Ksrods.Com",
        "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
        "publication": "Ksrods.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "vernon-ruder-jr",
    "name": "Vernon Ruder Jr.",
    "party": "R",
    "position": "Ellis County Treasurer",
    "electionSlug": "ellis-county-current",
    "incumbent": true,
    "occupation": "County Treasurer",
    "religion": "Roman Catholic (strong indicators)",
    "family": "Position",
    "campaignWebsite": "https://www.ellisco.net/566/Treasury",
    "whoTheyAre": "Ruder's public biography is the classic Hays family-government story: Catholic-school background, local work history, and a county office that fits a practical, administrative personality. He is not a loud political figure, but he is responsible for a lot of the county's revenue workflow and motor-vehicle processing.\n\nHis family connections matter because they connect him to Hays city leadership, USD 489, and the broader Ruder civic network. The public record shows the treasurer, his wife Ruth, and his son Mason all occupying public roles, which is unusual even by small-town Kansas standards.\n\nCareer before county government:.\n\nFinancial advisor (details/firm unknown).",
    "theirRecord": "Ruder's signature accomplishment is the $2.50 facility fee for walk-in motor-vehicle transactions. He says the fee is allowed by state law, helps fund the office, and reduces the burden on property taxpayers. The office has also benefited from queue-management improvements and a more modern customer flow, which fits a county office trying to be both efficient and less annoying to the public.\n\nThe budget numbers are the real story. Ruder says the fee generated more than $50,000 annually and helped cut the treasury budget from $452,000 to $367,000. That is the kind of county-office win that does not get a lot of attention outside Ellis County but is exactly the sort of thing local taxpayers care about.\n\n2020: Won initial election for County Treasurer.\n\n2024 Primary: Defeated incumbent Treasurer Lisa Schlegel -- Ruder received 1,856 votes (38.26%) to Schlegel's 1,547 (31.89%). (Note: This means Schlegel was the incumbent and Ruder challenged her successfully, OR there's a discrepancy in the records. Given Ruder took office in 2021, this may have been a different primary dynamic.).",
    "whatYouShouldKnow": [
      "$2.50 fee implementation drew some attention but was legal and resulted in taxpayer savings overall",
      "Father-son dynamic with Mason Ruder holding city mayor position -- no evidence of impropriety, but notable concentration of family political power",
      "He manages a revenue office more than a campaign office",
      "His fee policy is framed as tax burden relief, not simple fee generation",
      "He has modernized service flow through queue tools and office procedures"
    ],
    "whereTheyWorship": "Confidence: STRONG INDICATOR (Catholic -- TMP graduate, Catholic school employee).\n\nDenomination: Roman Catholic (strong indicators).",
    "church": {
      "name": "Specific parish not confirmed",
      "denomination": "Roman Catholic (strong indicators)",
      "details": "Confidence: STRONG INDICATOR (Catholic -- TMP graduate, Catholic school employee). Denomination: Roman Catholic (strong indicators)."
    },
    "quotes": [
      {
        "text": "The Ellis County Treasurer's Office ... is responsible for the tax billing, collection, and distribution",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The Treasurer's Office also acts as an agent for the Kansas Department of Revenue",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I feel like we should be funding our motor vehicle department with motor vehicle money",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The state no longer purchases our computers or printers",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.ellisco.net/566/Treasury",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Forgetting the lesson of 9/11 is the danger we face now",
        "source": "Vernon Ruder Jr. research file",
        "date": "2026-03-31",
        "url": "https://www.zoominfo.com/p/Vernon-Ruder/2569532965",
        "topic": "VERNON RUDER JR."
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "No public itemized donor table surfaced in the source set reviewed for this pass. The current source set is office-focused rather than finance-focused.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Ellisco.Net",
        "url": "https://www.ellisco.net/566/Treasury",
        "publication": "Ellisco.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hdnews.Net",
        "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kspress.Com",
        "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
        "publication": "Kspress.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Zoominfo.Com",
        "url": "https://www.zoominfo.com/p/Vernon-Ruder/2569532965",
        "publication": "Zoominfo.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: NWester - Support for Catholic education alive, well in Ellis County",
        "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ken-brooks",
    "name": "Ken Brooks",
    "party": "NP",
    "position": "USD 489 Board President",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "hometown": "Hays, Kansas",
    "religion": "Non-denominational / Evangelical",
    "education": "2021 - Present — Board Member — First elected November 2021",
    "family": "Three daughters, all graduated from Hays High School (last one graduated 2023)",
    "campaignWebsite": "https://www.insurance-planning.com/contact/a_ken_brooks",
    "whoTheyAre": "Employed for 18+ years (as of 2025 election cycle).\n\nInsurance Planning, Inc. is a locally owned Trusted Choice Insurance Agency.\n\nOffices in Hays, Great Bend, and Russell.\n\nIn business since 1968, providing full coverage personal, commercial, and financial services.",
    "theirRecord": "Pro-Administration: Brooks generally aligns with the administration majority on votes.\n\nMascot Vote -- Voted Against Indians: In the 5-2 vote to change the Hays Middle School mascot to \"Indians,\" Brooks was one of two members voting against (with Zampieri-Lillpopp). This is notable -- he took the more progressive position on this cultural issue.\n\nNaming Rights: Supported accepting the Golden Belt Bank donation, saying the bank had no \"ill intentions\" and was \"trying to help our community and help our school district.\n\nChallenged Park on No Votes: During a heated exchange over an asbestos removal change order, Brooks asked Park \"what he would have changed had he had the change orders in advance,\" suggesting Park's dissenting votes were performative rather than substantive.",
    "whatYouShouldKnow": [
      "Deep faith commitment: 14+ years leading children's ministry at Celebration Community Church -- this is not casual involvement, it is a defining part of his life",
      "Community service: 18 years coordinating Thanksgiving food drives -- genuine servant leadership",
      "Single parent perspective: Raised three daughters through Hays schools as a single parent; brings real understanding of family challenges",
      "Ken Brooks's faith appears deeply genuine and active:",
      "14+ years in children's ministry is not performative -- it requires showing up week after week for years"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED.\n\nDenomination: Non-denominational / Evangelical.",
    "church": {
      "name": "Celebration Community Church, Hays, KS",
      "denomination": "Non-denominational / Evangelical",
      "details": "Confidence: CONFIRMED. Denomination: Non-denominational / Evangelical."
    },
    "quotes": [
      {
        "text": "a love for our community, and a love for kids.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I have a love for our community, and I have a love for kids.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Since I've been on the board, we've lowered the school fees.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "There hasn't been anything where our school district has proven they're not responsible with their budget.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I have helped lead the Children's Ministry at Celebration Community Church for almost 14 years.",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://www.celebratejesus.org/hays-campus",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "helped lead the Children's Ministry at Celebration Community Church for almost 14 years",
        "source": "Ken Brooks research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
        "topic": "KEN BROOKS"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "In his 2021 Hays Post profile, Brooks answered \"No\" when asked if he had received funds or in-kind donations from outside the school district or a PAC. I did not surface a fuller itemized donor table in the public records reviewed for this pass.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "https://www.celebratejesus.org/hays-campus",
        "url": "https://www.celebratejesus.org/hays-campus",
        "publication": "Celebratejesus.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Celebratejesus.Org",
        "url": "https://www.celebratejesus.org/",
        "publication": "Celebratejesus.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "USD 489 Candidate Profile: Ken Brooks",
        "url": "https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 BOE votes to change Hays Middle School mascot to Indians",
        "url": "https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Insurance Planning - A. Ken Brooks",
        "url": "https://www.insurance-planning.com/contact/a_ken_brooks",
        "publication": "Insurance-planning.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network",
        "url": "http://tigermedianet.com/?p=78688",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Tiger Media Network",
        "url": "https://tigermedianet.com/?p=78383",
        "publication": "Tigermedianet.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost",
        "url": "https://hayspost.com/posts/677ac412-2adb-48bd-85f8-bbd5f05bb92f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Nepotism debate",
        "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Ground broken on new HHS",
        "url": "https://hayspost.com/posts/1dbbae4c-f879-499e-bea0-88777d5eeb41",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Bond budget scrutiny",
        "url": "https://hayspost.com/posts/87f9b442-e928-4c9d-bb85-03acad9d2a3f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Naming rights paused",
        "url": "https://hayspost.com/posts/a90fb672-f7e5-4826-b5f3-1decd214e83c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: HHS, Roosevelt contract",
        "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: Naming rights postponed despite deadline",
        "url": "https://hayspost.com/posts/aefb9f40-2e86-4bb2-976e-2f731e7ce14f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: New HHS ribbon cut",
        "url": "https://hayspost.com/posts/b20dc400-848a-4e10-bda4-36f5dad6d626",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "NewsBreak: Ken Brooks profile",
        "url": "https://www.newsbreak.com/news/2408525975485/hays-post-hays-usd-489-candidate-profile-ken-brooks",
        "publication": "Newsbreak.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "curt-vajnar",
    "name": "Curt Vajnar",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "religion": "Roman Catholic (Diocese of Salina)",
    "campaignWebsite": "https://www.emporia.edu/teachers-college/about-college/honors-awards/kansas-master-teacher-award-home/previous-winners/",
    "whoTheyAre": "Vajnar taught agriculture education at Hays High School for 31 years. He was named Kansas Teacher of the Year by KNEA -- the youngest teacher to win that honor at the time. He was also the only nationally board-certified agriculture teacher in the state. He had teaching endorsements in Agriculture Education, Biology, Drivers Education, and Administration. He chose never to pursue an administrator role despite holding the certificate. Retired around 2020.",
    "theirRecord": "Transparency Advocate: Vajnar has consistently pushed for more transparency. He has advocated that all board meetings, work sessions, and special meetings should be scheduled in evenings so the community can attend, and all should be videoed and made publicly available.\n\nBond Oversight: Vajnar was concerned that a construction contract was signed before the board officially approved it, saying he \"did not believe he had an opportunity to educate himself on the contract.\" He voted against the Hays High/Roosevelt construction contract (5-2 vote, Park and Vajnar against).\n\nNepotism Opponent: Vajnar opposed the hiring of Superintendent Ron Wilson's wife Andrea as a teacher, asking that the personnel transaction be removed from the consent agenda for separate discussion. Voted against 5-2 (Park and Vajnar dissenting).\n\nNaming Rights: Vajnar blocked the Golden Belt Bank $200,000 football field naming rights deal, removing it from the agenda. He said the bank was not offering enough for a 10-year contract and believed all businesses should have an equal opportunity to bid.",
    "whatYouShouldKnow": [
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed"
    ],
    "whereTheyWorship": "Confidence: CONFIRMED.\n\nDenomination: Roman Catholic (Diocese of Salina).",
    "church": {
      "name": "Our Lady, Help of Christians Catholic Church, Antonino, KS",
      "denomination": "Roman Catholic (Diocese of Salina)",
      "url": "https://www.ihm-church.com/",
      "details": "Confidence: CONFIRMED. Denomination: Roman Catholic (Diocese of Salina)."
    },
    "quotes": [
      {
        "text": "I taught for 31 years in USD 489.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I want to see them finished.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I would like to see a 10-year plan.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I think 10 years is better, business-wise.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://www.ihm-church.com/",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "a Parish Council member for Our Lady, Help of Christians Catholic Church",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
        "topic": "CURT VAJNAR"
      },
      {
        "text": "Some fights are worth fighting.",
        "source": "Curt Vajnar research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
        "topic": "CURT VAJNAR"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not find a clean public itemized donor table for Vajnar in the sources reviewed for this pass. The public record I checked is enough to verify his school-board role and policy positions, but not enough to reconstruct a reliable donor ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "https://www.ihm-church.com/",
        "url": "https://www.ihm-church.com/",
        "publication": "Ihm-church.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Doczz.Net",
        "url": "https://doczz.net/doc/6776409/3rd-degree-monthly-newsletter---immaculate-heart-of-mary-church",
        "publication": "Doczz.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Emporia.Edu",
        "url": "https://www.emporia.edu/teachers-college/about-college/honors-awards/kansas-master-teacher-award-home/previous-winners/",
        "publication": "Emporia.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost USD 489 Candidate Profile: Curt Vajnar",
        "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Our Lady Help of Christians Parish - Diocese of Salina",
        "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
        "publication": "Salinadiocese.Org",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: USD 489 to revisit dress code after satanism ban complaint",
        "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "USD 489 Candidate Profile: Curt Vajnar",
        "url": "https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Teacher of the Month: Vajnar says goodbye to HHS",
        "url": "https://hayspost.com/posts/5e878e4beb7f170536019f51",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays school board approves HHS, Roosevelt contract; discussion heated",
        "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board votes not to add another manager for bond work",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ruth-ruder",
    "name": "Ruth Ruder",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "family": "YES, Ruth Ruder is the mother of Mason Ruder (Hays Mayor) and wife of Vernon Ruder Jr. (Ellis County Treasurer)",
    "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
    "whoTheyAre": "YES, Ruth Ruder is the mother of Mason Ruder (Hays Mayor) and wife of Vernon Ruder Jr. (Ellis County Treasurer).\n\nVernon Ruder Jr. -- Ellis County Treasurer (took office 2021). Won in a Republican primary against Sherry Dryden and incumbent Lisa Schlegel. Previously served as Ellis County solid waste supervisor/landfill manager for 3 years. Reduced treasury budget from $452K to $367K.\n\nMason Ruder -- Hays Mayor/City Commissioner. Was the youngest Hays city commissioner ever elected (age 28). Has testified before the Kansas House Local Government Committee. Has a wife Tori and daughters Ryleigh and Isabelle.\n\nThis means one family holds:.",
    "theirRecord": "Pro-Administration: Ruder generally votes with the majority in support of administration recommendations.\n\nCalled Out Allen Park: In a notable confrontation, Ruder publicly challenged Park after his lone \"no\" vote on an asbestos removal contract, saying: \"Every week we come here and we get these no votes on things that should not be voted no on just to [satisfy] the taxpayer to say, 'I didn't vote on it.' You have a right to vote the way you want, but I am sick and tired of coming here every week and there's a no vote on something. That isn't right for the public.\n\nParental Rights: During the emergency policy revision discussion, Ruder asked if a parent has the right to remove a child from school during a lockdown -- showing awareness of parental rights concerns.\n\nNaming Rights: Supported accepting the Golden Belt Bank deal (voted with Brooks and Zampieri-Lillpopp in favor), but later said \"It belongs to the town and the school, not to some business\" and \"You can only sell your soul so many times\" -- somewhat contradictory statements suggesting evolving position.",
    "whatYouShouldKnow": [
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "Confidence: NO PUBLIC RECORD (but Ruder surname is suggestive)"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD (but Ruder surname is suggestive).\n\nDenomination: Unknown (likely Catholic based on family name pattern).",
    "quotes": [
      {
        "text": "the highlight of our community",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "My first obligation, if elected, will be to the children in our district.",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "All employees of USD 489 are equally important.",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I will do my best at representing the taxpayer in being fiscally responsible.",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Board member Ruth Ruder expressed concern that someone might purchase the land for a tax deduction, only to leave it vacant.",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "in a school board discussion but in context of",
        "source": "Ruth Ruder research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
        "topic": "RUTH RUDER"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not find a clean public itemized donor table for Ruder in the sources reviewed for this pass. The public record I found was enough to confirm her local profile and board actions, but not enough to reconstruct a reliable donor ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/fc95a5ee-b8b3-4d06-b876-7cba2008d1cb",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: USD 489 BOE candidate Ruth Ruder",
        "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Candidate Profile Ellis County Treasurer: Vernon Ruder Jr.",
        "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays City Commission Candidate: Mason Ruder",
        "url": "https://hayspost.com/posts/0187e996-15de-4377-95c2-cc428ed058e5",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "derek-yarmer",
    "name": "Derek Yarmer",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "campaignWebsite": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
    "whoTheyAre": "Research files for Derek Yarmer were reviewed in full for this profile, but the biography sections were thin. The linked sources below carry the original reporting and document trail.",
    "theirRecord": "MOST VOCAL FISCAL HAWK ON THE BOARD. Yarmer has positioned himself as the board's strongest critic of spending and bond management.\n\nBond Budget Critic (Major): Yarmer authored or is associated with a public opinion piece critical of bond and capital outlay fund usage. Key findings he raised:.\n\nCapital outlay spending jumped from $3.5M/year (pre-bond average) to $6.4M projected for 2024-25.\n\nHe objected to spending $753,700 on a concession stand, $777,680 on a digital scoreboard, $687,937 on tennis courts, and $66,364 on a marquee sign while roofing projects and classroom remodeling were deferred.",
    "whatYouShouldKnow": [
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "Confidence: NO PUBLIC RECORD"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "I am originally from Albert, Kan.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I want to be an advocate for the students' interests, as well as be fiscally responsible.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I believe extra-curricular activities are important ... but the main responsibility of the school is to teach the core subjects.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "If everything is an emergency, then nothing is an emergency.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "to blame for reckless spending by failing to provide proper oversight of the school administration",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "DEREK YARMER -- Member"
      },
      {
        "text": "I don't think you give up your parental rights between 8 and 3.",
        "source": "Derek Yarmer research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "topic": "DEREK YARMER -- Member"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a reliable itemized donor table for Yarmer in the sources reviewed for this pass. The public record I found supports his biography and board positions, but not a clean contribution ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "HaysMed Provider: Derek Yarmer, MD",
        "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
        "publication": "Haysmed.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Opinion: Hays USD 489 board member critical of use of bond, capital funds",
        "url": "https://hayspost.com/posts/52e53c90-5182-42f0-919e-2c7dc145305b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Board member questions Hays USD 489 bond budget",
        "url": "https://hayspost.com/posts/ed7e23f5-7116-4798-87ff-ff11bf8563d4",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board scrutinizes bond budget",
        "url": "https://hayspost.com/posts/87f9b442-e928-4c9d-bb85-03acad9d2a3f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board members question parental rights in emergency policy revision",
        "url": "https://hayspost.com/posts/d89d076f-4f16-4002-a12d-d27ea8cd6471",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "allen-park",
    "name": "Allen Park",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
    "whoTheyAre": "Allen Park served USD 489 for 31 years in multiple roles:.\n\nParaprofessional.\n\nK-12 Teacher.\n\nCoach.",
    "theirRecord": "THE BOARD'S PRIMARY DISSENTER AND OVERSIGHT ADVOCATE.\n\nNepotism Opponent: Voted against hiring Superintendent Wilson's wife Andrea (5-2, with Vajnar). Later pushed for the board to review and potentially tighten the nepotism policy. Said he was \"unsure if the district was following the policy.\n\nAdministrator Contract Scrutiny: Made a motion to evaluate and vote on each administrator's contract individually rather than as a blanket extension. Lost 5-2. Raised concerns that contracts referenced an administrative handbook the board had not formally reviewed since 2024. Wanted specific salary, vacation days, and holidays spelled out.\n\nExecutive Session Advocate: Made a motion to move into executive session to discuss superintendent contract -- lost when three members voted against, with one calling it potentially a \"gossip session and micromanagement.",
    "whatYouShouldKnow": [
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "Confidence: NO PUBLIC RECORD"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "I have worked in education for over 35 years.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "With the recently passed bond, the facilities are being replaced and repaired.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Communication is so important and can always be improved.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I have not received any money outside of the school district.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "unsure if the district was following the policy.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://archive.hayspost.com/2015/05/19/park-announces-retirement-after-30-years-with-usd-489/",
        "topic": "ALLEN PARK -- Member"
      },
      {
        "text": "gossip session and micromanagement.",
        "source": "Allen Park research file",
        "date": "2026-03-31",
        "url": "https://archive.hayspost.com/2015/05/19/park-announces-retirement-after-30-years-with-usd-489/",
        "topic": "ALLEN PARK -- Member"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Park gave one of the clearest public answers in the field: he said he had not received money outside the school district, that his donations came from family, friends, and community members who care about kids and education, and that any additional expenses were paid personally. That means I did not find a PAC-driven donor table here, just a statement that his support was local and modest.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fhsu.Edu",
        "url": "https://www.fhsu.edu/news/2020/05/pizza-kits-and-book-giveaways-set-for-monday-in-downtown-hays",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Park announces retirement after 30 years with USD 489 (Archive)",
        "url": "https://archive.hayspost.com/2015/05/19/park-announces-retirement-after-30-years-with-usd-489/",
        "publication": "Archive.Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Takeaways from Hays USD 489 Education Board Meeting",
        "url": "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/",
        "publication": "Citizenjournal.Us",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 BOE debates nepotism again",
        "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board votes not to add another manager for bond work",
        "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "jayme-goetz",
    "name": "Jayme Goetz",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
    "whoTheyAre": "Research files for Jayme Goetz were reviewed in full for this profile, but the biography sections were thin. The linked sources below carry the original reporting and document trail.",
    "theirRecord": "TRANSPARENCY ADVOCATE BUT GENERALLY PRO-ADMINISTRATION.\n\nTransparency: Identified transparency as the #1 thing she would change about USD 489. Said she has \"seen the strides the current board has been taking to have transparency with the community but would like to see more of it.\n\nMascot -- Led the Charge to Change HMS to Indians: Goetz asked the board to reconsider the Hays Middle School mascot decision, adding it to the agenda. She reviewed surveys and said she was \"disgusted and had to stop reading after about 300 because of the level of not only ignorance, but immaturity in these responses\" -- referring to the December 2022 community survey. She supported the ultimate 5-2 vote to change HMS mascot to Indians.\n\nDiscipline Policy Hawk: Goetz pushed back on the Hays High handbook, arguing it needed specific consequences for violations to maintain consistency. Had \"at least six complaints\" about discipline inconsistency at the high school. This led to a \"squabble\" with the principal and other board members about the board's role in discipline policy.",
    "whatYouShouldKnow": [
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "Confidence: NO PUBLIC RECORD"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "Being a lifelong Hays resident",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I have greatly enjoyed getting involved in all different levels of education.",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I believe in the importance of transparency and clear communication.",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Each decision that comes through the board impacts someone in our community.",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "seen the strides the current board has been taking to have transparency with the community but would like to see more of it.",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "JAYME GOETZ -- Member"
      },
      {
        "text": "disgusted and had to stop reading after about 300 because of the level of not only ignorance, but immaturity in these responses",
        "source": "Jayme Goetz research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "topic": "JAYME GOETZ -- Member"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a reliable itemized donor table for Goetz in the sources reviewed for this pass. The public record I found supports her biography and board actions, but not a clean contribution ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/fc95a5ee-b8b3-4d06-b876-7cba2008d1cb",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Jayme Goetz -- Ballotpedia",
        "url": "https://ballotpedia.org/Jayme_Goetz_(Hays_Unified_School_District_489,_At-large,_Kansas,_candidate_2023",
        "publication": "Ballotpedia.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Final Hays USD 489 seat decided by 3 votes during canvass",
        "url": "https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board squabbles over discipline policy",
        "url": "https://hayspost.com/posts/bc933c79-2f23-4279-8171-bc6dcf391cf0",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "FHSU Mathematics Faculty & Staff",
        "url": "https://www.fhsu.edu/macs/faculty-and-staff/",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 BOE votes to change Hays Middle School mascot to Indians",
        "url": "https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "craig-pallister",
    "name": "Craig Pallister",
    "party": "NP",
    "position": "USD 489 Board Member",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "School Board Member",
    "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
    "whoTheyAre": "Teacher and assistant principal in USD 443 (early career).\n\nAssistant Principal, Hays Middle School (4 years).\n\nPrincipal, Hays Middle School (21 years).\n\nTotal: 25+ years at HMS before retirement.",
    "theirRecord": "Pallister's record is about retention, recruitment, and keeping the system functional as the district completes the bond buildout. In his 2023 profile he said the board needs to keep teacher, administrator, and staff retention a priority. In later coverage he came back to the board with the same eye toward continuity and student experience.\n\nHe also tends to favor steady, operational problem-solving. He supports bond completion, district technology, and budget questions that ask whether spending actually helps student achievement. As a former principal, he sounds like someone who has spent decades living with the consequences of board decisions rather than just reacting to them.",
    "whatYouShouldKnow": [
      "Campaign finance filings reviewed for this profile show finance totals were discussed in the report materials reviewed",
      "Confidence: NO PUBLIC RECORD"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "I worked for the school district as a middle school principal for 21 years, an assistant principal for three years prior to that.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "I have just been involved with education all my life.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Everybody in the school district could be on the school board.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "The USD 489 Board of Education needs to continue to make teacher, administrator and staff retention and recruitment a priority.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "a leader in Kansas K-12 education.",
        "source": "Craig Pallister research file",
        "date": "2026-03-31",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "topic": "CRAIG PALLISTER -- Member"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "I did not surface a reliable itemized donor table for Pallister in the public records reviewed for this pass. The sources I checked support his biography and board record, but not a clean contribution ledger.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Fhsu.Edu",
        "url": "https://www.fhsu.edu/news/2020/05/pizza-kits-and-book-giveaways-set-for-monday-in-downtown-hays",
        "publication": "Fhsu.Edu",
        "date": "2026-03-31"
      },
      {
        "title": "SPONSORED: Craig Pallister running for USD 489 school board",
        "url": "https://hayspost.com/posts/94f59897-4370-450a-b4ed-f5ebbf54a523",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      }
    ]
  },
  {
    "slug": "ron-wilson",
    "name": "Ron Wilson",
    "party": "NP",
    "position": "USD 489 Superintendent",
    "electionSlug": "usd-489-current",
    "incumbent": true,
    "occupation": "Superintendent",
    "education": "Wilson has publicly advocated for:",
    "campaignWebsite": "https://sentinelksmo.org/choosing-which-crimes-to-prosecute-comes-to-kansas-on-election-bribery/",
    "whoTheyAre": "Wilson served as superintendent in Herington before being hired by USD 489. The Hays school board voted unanimously to offer him a two-year contract in February 2019. While in Herington, his district was one of nine Kansas districts invited to pilot the Mental Health Intervention Team (MHIT) program in 2018 -- a program he has continued to advocate for in Hays.\n\nWilson has publicly advocated for:.\n\nMental health services in schools (MHIT program).\n\nOpposing private school tax credit legislation (HB 2468) as diverting public funds.",
    "theirRecord": "Wilson's record is the bond era itself. He has been the public face of Roosevelt and Hays High construction, the district's capital outlay plan, and the ongoing maintenance work that still has to happen after the ribbon cuttings. He has also spoken out when state or federal decisions threaten district funding, including title grant delays and other budget pressures.\n\nBecause he is the superintendent, the board mostly evaluates him through implementation: facility delivery, staffing, budget management, and communications. The public record shows him as a steady advocate for the district's large capital projects and as the person who keeps those projects moving once the board votes.",
    "whatYouShouldKnow": [
      "On April 22, 2022, Wilson emailed district staff regarding the May 10 bond issue election: \"If 100% of the eligible voters in your building vote before May 10th we will bring lunch for you one day before the end of school...The first building in our district to get 100% also gets dessert with their lunch!",
      "This was reported as potential election bribery under Kansas law. Ellis County Attorney Robert Anderson declined to prosecute, saying he could not \"justify prosecuting\" because it would divert resources from \"sexual assaults, homicides, child abuse and neglect\" and other serious cases. The county attorney did NOT say it wasn't a violation -- he said prosecution wasn't worth the resources. The bond passed (~$143.5M)",
      "Source: County attorney declines action on Hays superintendent email to staff (KWCH) Source: Superintendent's email sparks controversy (Hays Daily News) Source: Kansas Sentinel analysis",
      "The new $115M Hays High School features private bathroom stalls usable by both genders -- floor-to-ceiling locking stalls with common-use sinks. Principal Shawn Henderson said the design would reduce bullying and protect students from being recorded on mobile devices. Parents complained about the potential for opposite-sex students being \"intimate\" in stalls, and about vaping. Wilson as superintendent oversees the facility design decisions",
      "Source: Hays High School construction project, restrooms stirs controversy (Kansas Sentinel) Source: Hays USD 489 board hears concerns about private bathrooms at new high school"
    ],
    "whereTheyWorship": "Confidence: NO PUBLIC RECORD.\n\nDenomination: Unknown.",
    "quotes": [
      {
        "text": "We have to stop settling for the schools and facilities that we have, and we need to start building for schools that we deserve.",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Our baseball stadium is probably the best facility we have now. However, in three years, it will go from being our best facility to our worst facility.",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "Hays USD 489 Superintendent Ron Wilson",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "topic": "CODEX DEEP RESEARCH 2026-04-01"
      },
      {
        "text": "If 100% of the eligible voters in your building vote before May 10th we will bring lunch for you one day before the end of school...The first building in our district to get 100% also gets dessert with their lunch!",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
        "topic": "RON WILSON -- Superintendent"
      },
      {
        "text": "because it would divert resources from",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
        "topic": "RON WILSON -- Superintendent"
      },
      {
        "text": "difficult and conflict-heavy",
        "source": "Ron Wilson research file",
        "date": "2026-03-31",
        "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
        "topic": "RON WILSON -- Superintendent"
      }
    ],
    "campaignFinance": {
      "totalRaised": "finance totals were discussed in the report materials reviewed",
      "narrative": "Not applicable. Wilson is an appointed superintendent, not a candidate running for office in the sources I reviewed.",
      "donors": [
        {
          "name": "Detailed donor list",
          "amount": "Not broken out in the report materials"
        }
      ],
      "undisclosed": "The dossier set flags gaps in line-item donor detail for this candidate. Use the linked filing sources for the complete record.",
      "reportingPeriod": "2026 cycle",
      "source": "Report dossiers and linked filing sources"
    },
    "sources": [
      {
        "title": "Usd489.Community.Highbond.Com",
        "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
        "publication": "Usd489.Community.Highbond.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Ksde.Gov",
        "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
        "publication": "Ksde.Gov",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/53134bbf-3c90-47ed-ae9b-c3d0232bf211",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/4ecf935d-41cb-472c-9754-49c567a9dddc",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hayspost.Com",
        "url": "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Core-docs.S3.Us-east-1.Amazonaws.Com",
        "url": "https://core-docs.s3.us-east-1.amazonaws.com/documents/asset/uploaded_file/1196/USD_489/4733695/HMS_2024-2025_Handbook.pdf",
        "publication": "Core-docs.S3.Us-east-1.Amazonaws.Com",
        "date": "2026-03-31"
      },
      {
        "title": "HaysPost: USD 489 to revisit dress code",
        "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Guidon Online: School board approves Ron Wilson as superintendent",
        "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
        "publication": "Hayshighguidon.Com",
        "date": "2026-03-31"
      },
      {
        "title": "linkedin.com/in/ron-wilson-96762118a",
        "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
        "publication": "Linkedin.Com",
        "date": "2026-03-31"
      },
      {
        "title": "County attorney declines action on Hays superintendent email to staff (KWCH)",
        "url": "https://www.kwch.com/2022/05/26/county-attorney-declines-action-hays-superintendent-email-staff/",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Superintendent's email sparks controversy (Hays Daily News)",
        "url": "https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/",
        "publication": "Hdnews.Net",
        "date": "2026-03-31"
      },
      {
        "title": "Kansas Sentinel analysis",
        "url": "https://sentinelksmo.org/choosing-which-crimes-to-prosecute-comes-to-kansas-on-election-bribery/",
        "publication": "Sentinelksmo.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 BOE debates nepotism again",
        "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "USD 489 Hays: no apparent written plan to improve low proficiency levels (Kansas Sentinel)",
        "url": "https://sentinelksmo.org/usd-489-hays-no-apparent-written-plan-to-improve-low-proficiency-levels/",
        "publication": "Sentinelksmo.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 trending higher on math, English tests",
        "url": "https://hayspost.com/posts/a1ad62ca-72ac-46d4-a3c1-e2248ae736b3",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Trump administration withholds funds from Hays school district",
        "url": "https://hayspost.com/posts/09e13f5d-3612-4ec5-9106-d99396d14ac3",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays High School construction project, restrooms stirs controversy (Kansas Sentinel)",
        "url": "https://sentinelksmo.org/hays-high-school-contstruction-project-restrooms-stirs-controversy/",
        "publication": "Sentinelksmo.Org",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 board hears concerns about private bathrooms at new high school",
        "url": "https://hayspost.com/posts/677ac412-2adb-48bd-85f8-bbd5f05bb92f",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays School District hires new superintendent (KWCH)",
        "url": "https://www.kwch.com/content/news/Hays-School-District-hires-new-superintendent-505712821.html",
        "publication": "Kwch.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Superintendent contract renewed; Hays board at odds over transparency",
        "url": "https://hayspost.com/posts/ae1e5e6f-c630-4c15-b42e-fa787284525d",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 district administrators' contracts extended another year",
        "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays USD 489 employees receive raises; board members balk at admin pay",
        "url": "https://hayspost.com/posts/1cd56ea1-18ea-4126-aa69-97b826446d03",
        "publication": "Hayspost.Com",
        "date": "2026-03-31"
      },
      {
        "title": "Hays Highest Paid Employees (OpenPayrolls)",
        "url": "https://openpayrolls.com/rank/highest-paid-employees/kansas-hays",
        "publication": "Openpayrolls.Com",
        "date": "2026-03-31"
      }
    ]
  }
] as CandidateFull[]),
];

export const CANDIDATE_CARDS: CandidateCard[] = FULL_CANDIDATES.map(
  ({ slug, name, party, position, electionSlug, incumbent, occupation }) => ({
    slug,
    name,
    party,
    position,
    electionSlug,
    incumbent,
    occupation,
  })
);

export function getCandidateCardBySlug(
  slug: string
): CandidateCard | undefined {
  return CANDIDATE_CARDS.find((candidate) => candidate.slug === slug);
}

export function getAllCandidateSlugs(): string[] {
  return FULL_CANDIDATES.map((candidate) => candidate.slug);
}

export function getFullCandidateBySlug(
  slug: string
): CandidateFull | undefined {
  return FULL_CANDIDATES.find((candidate) => candidate.slug === slug);
}
