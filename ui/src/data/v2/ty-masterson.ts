/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const TY_MASTERSON_V2: CandidateFullV2 = {
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
  "district": "16th District (since 2009)",
  "campaignWebsite": "https://mann.house.gov/about",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Opposes abortion. At the January 2026 GOP debate, all six Republican candidates found unity on abortion opposition. Masterson has led the Kansas Senate through fights over abortion policy, and his campaign language ties the sanctity of life to his faith: \"every life is precious -- it doesn't matter your background, your ethnicity, or your color.. we're all one people, created by God.\"",
        "sourceIds": [
          "s-9",
          "s-12",
          "s-4",
          "s-10",
          "s-13",
          "s-1"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-marriage-family-lgbtq-policy-2",
      "title": "Marriage & Family / LGBTQ+ Policy",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "1. Campaign homepage, captured 2026-05-11. Masterson says Kansas is home, accuses Democratic governors and Laura Kelly/Joe Biden alignment of breaking Kansas's promise, cites violent crime, school proficiency, tax burden, and out-migration, and asks voters to \"Take Back Kansas.\" (source) 2. Campaign issue page, captured 2026-05-11. The campaign lists taxes, jobs, law enforcement/public safety, reading/math...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Education and culture-war content is the second major signal, with 7 of 31 items, or 23 percent of the sample. The campaign site labels one plank \"Teach reading. Teach math. Not woke nonsense,\" citing low fourth-grade proficiency and promising higher pay for \"good teachers,\" parental say, and accountability. (source) The biography page says he fought DEI in higher education, transgender participation in women's...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        }
      ]
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "Ron Bryce as a physician, conservative, author of *Fingerprint of God*, and someone whose \"Christian worldview\" guides work in Topeka. Visible mirror metrics: 155 views and small visible engagement counts. (source) 13. 2026-01 indexed X sample: Martin Luther King Jr. Day. Masterson wrote that people should be judged by \"content of his character\" rather than immutable quality, ethnicity, or faith.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Faith is not background-only in the visible record.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-4"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "mastersonforgovernor.com",
          "observation": "The campaign biography says Masterson and his family attend NewSpring Church. (source) In the October 2025 Combat Antisemitism Movement interview, he said, \"My faith teaches that every life is precious,\" and described Christianity's roots in Judaism as a reason he feels kinship with Jews and Israel. (source) In the same interview, he said moral courage means taking a stand \"no matter the price\" and added, \"I...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        }
      ]
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "Visible mirror metrics: about 1K views. (source) 17. 2026-01 indexed X sample: property tax after State of the State. Masterson wrote that Kansans are \"being taxed out of their homes\" and that Kelly and Democrats ignored the state's \"number one crisis.\" Visible mirror metrics: about 64K views, 476 likes, 87 replies, 44 reposts, and 34 bookmarks/reactions as displayed by the mirror. (source) 18. 2026-01 indexed X...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "kslegislature.gov",
          "observation": "Masterson's official legislative record reinforces the campaign themes. The Kansas Legislature profile lists him as Senate president and shows sponsored or co-sponsored measures on property-tax valuation limits, school-device and social-media rules, citizen voting, gun rights, housing permitting, and Charlie Kirk Free Speech Day. (source) The campaign biography condenses that record into the claim that he...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-8"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        }
      ]
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Has not released detailed immigration policy, but his campaign rhetoric aligns with Republican enforcement-first positioning. His general message is about \"safe communities.\"",
        "sourceIds": [
          "s-9",
          "s-2",
          "s-13",
          "s-1",
          "s-3",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "The accessible amplification pattern is message and alliance based: the campaign site links to Facebook, Instagram, and X; the X sample repeatedly uses #TakeBackKansas; the indexed sample includes endorsements from Republican legislators; public reporting shows Trump-aligned consultants and outside groups forming around Masterson; and Masterson's own posts explicitly align with President Trump and ICE.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-4"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "The reviewed campaign and social material also shows a deliberate Trump-alignment strategy. Washington Examiner reported on November 11, 2025, that Trump 2024 orbit consultants and outside groups were organizing behind Masterson through Take Back Kansas and Take Back Kansas Action. (source) In the X sample, Masterson wrote, \"I stand with ICE and with President Trump!\" (source) and said President Trump's...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-13"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "His campaign attacks what he calls the \"woke agenda\" in schools and government. He frames education reform as part of a broader conservative governing vision.",
        "sourceIds": [
          "s-9",
          "s-13",
          "s-1",
          "s-2",
          "s-3",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "mastersonforgovernor.com",
          "observation": "The official campaign site is the campaign's strongest candidate-controlled channel. It frames the race around taking back Kansas, lower taxes, jobs, public safety, education outcomes, anti-\"woke\" policy, and conservative social policy. The homepage says Kansas is not living up to its \"potential\" or \"promises\" and that Masterson is running \"To Take Back Kansas.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Visible mirror metrics: 373 views and small visible engagement counts. (source) 14. 2026-01 indexed X sample: Charlie Kirk and classroom speech. Masterson wrote that Charlie Kirk was \"martyred for freedom of speech,\" connected the issue to K-12 education reform, and said legislation was being drafted to protect classroom speech.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Visible mirror metrics: about 2K views, 40 likes, and 10 replies in the mirror display. (source) 15. 2026-01 indexed X sample: Joseph Claeys endorsement. Masterson highlighted Claeys' background as a school psychologist and \"student-focused education.\" (source) 16. 2026-01 indexed X sample: Wichita Pachyderm Club / property tax. Masterson said the top legislative priority would be a constitutional amendment...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Opposes legali",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Ty Masterson is the president of the Kansas Senate and a Republican candidate for governor. He has represented Senate District 16 since 2009, previously served on the Andover City Council, and has spent years at the center of Republican power in Topeka. That makes him very different from the outsider candidates in the race: he is not asking voters to imagine how he would govern, because he has already helped shape the state's agenda.\n\nMasterson's public biography combines legislative leadership, Wichita-area civic and business connections, and explicit Christian identity. Public sources tie him to NewSpring Church in Wichita, and his campaign biography says he and his family attend there. His campaign presents him as a conservative who wants to take the priorities he has advanced in the Senate and bring them to the governor's office.",
  "recordSummary": "Masterson's record is mostly a record of power inside the Legislature. As Senate president, he has guided Republican priorities on taxes, regulation, education, and social issues, and he has played a central role in how the chamber has confronted Democratic Governor Laura Kelly. His public record is less about one signature local issue than about institutional control of the Senate and the broader direction of state government.\n\nHe has also used that leadership role to advance an openly ideological campaign for governor. His public message ties tax cuts, anti-\"woke\" rhetoric, conservative social policy, and structural reforms such as changes to judicial selection into one package. That makes him one of the clearest cases in the race where legislative record and campaign platform are tightly aligned.",
  "ownWordsNarrative": "_A summary of what Ty Masterson has publicly said, posted, and amplified across campaign channels, indexed social media, official public records, and credible public-news captures. Drawn from public captures of the campaign site, X, Facebook/Instagram presence links, Kansas Legislature records, and public reporting from July 2025 through May 11, 2026. We report patterns; we do not interpret intent._\n\nAcross the [31-item captured sample](social-harvest.md), Masterson's largest visible category is taxes, property-tax relief, affordability, housing, jobs, and business regulation, with 8 items, or 26 percent of the harvest. The campaign site says Kansas has the \"16th highest tax burden\" and that, as governor, he would keep cutting taxes until Kansas is one of the most affordable states to work and raise a family. ([source](https://www.mastersonforgovernor.com/about)) In a January 2026 indexed X post, he wrote that Kansans are \"being taxed out of their homes\" and called property taxes the state's \"number one crisis\" ([source](https://w.twstalker.com/TyMastersonKS)). That was the highest visible-engagement item in the harvest, with about 64K views in the public mirror.\n\nHis campaign message pairs that tax frame with a broader \"Take Back Kansas\" argument. On the campaign homepage, Masterson says Kansas promised safe communities, low cost of living, and a shot at the American Dream, but that \"liberal Democrats\" and Laura Kelly's alignment with Joe Biden broke that promise. ([source](https://www.mastersonforgovernor.com/)) The site says, \"Kansas is not living up to its potential -- or its promises,\" and presents his Senate record as proof he can make \"big change\" from the governor's office. ([source](https://www.mastersonforgovernor.com/))\n\nEducation and culture-war content is the second major signal, with 7 of 31 items, or 23 percent of the sample. The campaign site labels one plank \"Teach reading. Teach math. Not woke nonsense,\" citing low fourth-grade proficiency and promising higher pay for \"good teachers,\" parental say, and accountability. ([source](https://www.mastersonforgovernor.com/about)) The biography page says he fought DEI in higher education, transgender participation in women's sports, and transgender surgeries for minors. ([source](https://www.mastersonforgovernor.com/services)) In a January 2026 indexed X post, Masterson wrote that Charlie Kirk was \"martyred for freedom of speech\" and said he was drafting legislation to protect free speech in K-12 classrooms. ([source](https://w.twstalker.com/TyMastersonKS))\n\nThe reviewed campaign and social material also shows a deliberate Trump-alignment strategy. Washington Examiner reported on November 11, 2025, that Trump 2024 orbit consultants and outside groups were organizing behind Masterson through Take Back Kansas and Take Back Kansas Action. ([source](https://www.washingtonexaminer.com/news/campaigns/state/3883028/trumpworld-gets-behind-ty-masterson-kansas-governor-race/)) In the X sample, Masterson wrote, \"I stand with ICE and with President Trump!\" ([source](https://w.twstalker.com/TyMastersonKS)) and said President Trump's affordability agenda was making home ownership attainable, adding that as governor he would \"Make Kansas Affordable Again.\" ([source](https://w.twstalker.com/TyMastersonKS))\n\nFaith is not background-only in the visible record. The campaign biography says Masterson and his family attend NewSpring Church. ([source](https://www.mastersonforgovernor.com/services)) In the October 2025 Combat Antisemitism Movement interview, he said, \"My faith teaches that every life is precious,\" and described Christianity's roots in Judaism as a reason he feels kinship with Jews and Israel. ([source](https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/)) In the same interview, he said moral courage means taking a stand \"no matter the price\" and added, \"I don't need to fear man -- I fear God.\" ([source](https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/))\n\nHis public safety message is direct and enforcement-oriented. The campaign site says Kansas ranks behind \"liberal crime havens\" for violent crime and that he would stand with law enforcement, back tough-on-crime policies, and fund police. ([source](https://www.mastersonforgovernor.com/about)) On X, he thanked Kansas law enforcement officers and used `#BackTheBlue` ([source](https://w.twstalker.com/TyMastersonKS)). In endorsement posts, he praised senators for law-enforcement training, drug-trafficking policy, blocking foreign adversaries such as Communist China from buying land near Fort Riley, and being tough on crime. ([source](https://w.twstalker.com/TyMastersonKS))\n\nThe strongest structural-power signal is redistricting. KWCH reported in September 2025 that Masterson confirmed plans for a fall special session to consider redrawing Kansas's congressional map. ([source](https://www.kwch.com/2025/09/24/gubernatorial-candidate-ty-masterson-confirms-plan-fall-redistricting-session/)) In October, KWCH quoted him saying redistricting is a \"standard political tool\" and that the aim was to strengthen Kansas Republican representation in Congress to back President Trump's agenda. ([source](https://www.kwch.com/2025/10/14/redistricting-fight-heats-up-between-kansas-governor-candidates/))\n\nMasterson's official legislative record reinforces the campaign themes. The Kansas Legislature profile lists him as Senate president and shows sponsored or co-sponsored measures on property-tax valuation limits, school-device and social-media rules, citizen voting, gun rights, housing permitting, and Charlie Kirk Free Speech Day. ([source](https://www.kslegislature.gov/legislators/sen_masterson_ty_1/)) The campaign biography condenses that record into the claim that he delivered conservative priorities: lower taxes, efficient spending, safer communities, stronger elections, and opposition to the \"woke agenda.\" ([source](https://www.mastersonforgovernor.com/services))\n\nSeveral issue areas were not visible in the accessible material reviewed. The public set did not include captured items centered on Medicaid expansion, rural hospital closures, child care, foster care, veterans services, detailed broadband deployment, water policy, the Ogallala aquifer, affordable rental housing, or state employee pay. The available record is therefore strongest on taxes, property values, affordability, anti-\"woke\" education politics, Trump alignment, public safety, faith/Israel, and campaign endorsements, and thinner on health care, social services, water, and infrastructure detail.\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: July 20, 2025 to May 11, 2026. Platforms surveyed: campaign site, legacy redirect site, X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Kansas Legislature records, and credible public-news captures. Items examined: [31 accessible original/profile/public-record/news-captured items and 0 verified reposts](social-harvest.md). Login-walled or script-blocked material was not counted as reviewed. Engagement was reported only when visible in public snippets or indexed mirrors on capture date. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources identify Masterson with NewSpring Church in Wichita, and the church website is https://www.newspring.org/. His campaign biography and faith language make religion a visible part of his public identity rather than a private background detail.",
  "church": {
    "name": "NewSpring Church, Wichita, KS",
    "denomination": "Non-denominational / Independent",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Non-denominational / Independent. Church Address: 12200 East 21st Street North, Wichita, KS."
  },
  "campaignFinance": {
    "totalRaised": "$695,998.16 (2025 year-end)",
    "narrative": "Masterson's 2025 year-end report showed $695,998.16 raised, $8,476.06 spent, and $687,522.10 cash on hand. That is a strong early position for a statewide race because it shows he entered 2026 with a large reserve and very little burn rate. The public filing also suggests a top-heavy donor pattern. Several large contributions are visible in the report, including donors and entities such as David Murfin, Janet Murfin, SHAMAN BOTANICALS LLC, Rick Kloos, Pennie Kloos, and Brad Starnes.",
    "donors": [
      {
        "name": "David Murfm",
        "amount": "$4,000"
      },
      {
        "name": "Janet Murfm",
        "amount": "$4,000"
      },
      {
        "name": "SHAMAN BOTANICALS LLC",
        "amount": "$4,000"
      },
      {
        "name": "Rick Kloos",
        "amount": "$1,000"
      },
      {
        "name": "Pennie Kloos",
        "amount": "$1,000"
      },
      {
        "name": "Brad Starnes",
        "amount": "$104.10"
      }
    ],
    "undisclosed": "Take Back Kansas, the aligned 501(c)(4), remains the major undisclosed-money story around Masterson.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and statewide campaign-finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign site, X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Kansas Legislature records, Public news coverage. Harvest range: 2025-07-20 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/",
      "title": "source",
      "publisher": "Mastersonforgovernor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson.",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/about",
      "title": "source",
      "publisher": "Mastersonforgovernor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson.",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "source",
      "publisher": "Mastersonforgovernor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.facebook.com/TyMastersonKansas",
      "title": "TyMastersonKansas",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://w.twstalker.com/TyMastersonKS",
      "title": "source",
      "publisher": "W.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson.",
        "Observed public online activity mapped to Religious Liberty.",
        "Observed public online activity mapped to Guns / Second Amendment.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-8",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/legislators/sen_masterson_ty_1/",
      "title": "source",
      "publisher": "Kslegislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson.",
        "Observed public online activity mapped to Guns / Second Amendment."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/20/kansas-senate-president-ty-masterson-launches-republican-campaign-for-governor/",
      "title": "source",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://www.kctv5.com/2025/07/20/ty-masterson-announces-run-kansas-governor-lets-take-back-kansas/",
      "title": "source",
      "publisher": "Kctv5",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "source",
      "publisher": "Combatantisemitism",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.washingtonexaminer.com/news/campaigns/state/3883028/trumpworld-gets-behind-ty-masterson-kansas-governor-race/",
      "title": "source",
      "publisher": "Washingtonexaminer",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ty Masterson.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(TY_MASTERSON_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ty-masterson.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
