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
          "s-64",
          "s-78",
          "s-92",
          "s-98",
          "s-110",
          "s-132"
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
          "s-15",
          "s-51",
          "s-60",
          "s-63",
          "s-84",
          "s-90"
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
            "s-social-crossref-1"
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
          "s-15",
          "s-51",
          "s-59",
          "s-64",
          "s-84",
          "s-90"
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
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Faith is not background-only in the visible record.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "mastersonforgovernor.com",
          "observation": "The campaign biography says Masterson and his family attend NewSpring Church. (source) In the October 2025 Combat Antisemitism Movement interview, he said, \"My faith teaches that every life is precious,\" and described Christianity's roots in Judaism as a reason he feels kinship with Jews and Israel. (source) In the same interview, he said moral courage means taking a stand \"no matter the price\" and added, \"I...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-66"
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
          "s-15",
          "s-51",
          "s-64",
          "s-84",
          "s-90",
          "s-91"
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
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "kslegislature.gov",
          "observation": "Masterson's official legislative record reinforces the campaign themes. The Kansas Legislature profile lists him as Senate president and shows sponsored or co-sponsored measures on property-tax valuation limits, school-device and social-media rules, citizen voting, gun rights, housing permitting, and Charlie Kirk Free Speech Day. (source) The campaign biography condenses that record into the claim that he...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
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
          "s-64",
          "s-84",
          "s-109",
          "s-110",
          "s-119",
          "s-141"
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
            "s-3"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "The reviewed campaign and social material also shows a deliberate Trump-alignment strategy. Washington Examiner reported on November 11, 2025, that Trump 2024 orbit consultants and outside groups were organizing behind Masterson through Take Back Kansas and Take Back Kansas Action. (source) In the X sample, Masterson wrote, \"I stand with ICE and with President Trump!\" (source) and said President Trump's...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-377"
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
          "s-44",
          "s-64",
          "s-84",
          "s-109",
          "s-110",
          "s-118"
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
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Visible mirror metrics: about 2K views, 40 likes, and 10 replies in the mirror display. (source) 15. 2026-01 indexed X sample: Joseph Claeys endorsement. Masterson highlighted Claeys' background as a school psychologist and \"student-focused education.\" (source) 16. 2026-01 indexed X sample: Wichita Pachyderm Club / property tax. Masterson said the top legislative priority would be a constitutional amendment...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
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
          "s-380",
          "s-381",
          "s-382",
          "s-1",
          "s-2",
          "s-5"
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
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile.",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://senatortymasterson.com/meet-ty/",
      "title": "Senatortymasterson.Com",
      "publisher": "senatortymasterson.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.facebook.com/TyMastersonKansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://twitter.com/TyMastersonKS",
      "title": "Twitter.Com",
      "publisher": "twitter.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01TM_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://www.hfehays.org/o/hfe/article/923439",
      "title": "Hfehays.Org",
      "publisher": "hfehays.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://www.ihm-church.com/",
      "title": "Ihm-church.Com",
      "publisher": "ihm-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://www.kansassheriffs.org/county_map/county/914",
      "title": "Kansassheriffs.Org",
      "publisher": "kansassheriffs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
      "title": "Haysmemorial.Com",
      "publisher": "haysmemorial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
      "title": "Fhsuguides.Fhsu.Edu",
      "publisher": "fhsuguides.fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Tracey_Mann",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://ksopen.org/mann-2",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "primary",
      "url": "https://mann.house.gov/about",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://www.au.org/the-latest/church-and-state/articles/unhealthy-breakfast-how-the-national-prayer-breakfast-a-relic-from-the-1950s-era-of-civil-religion-evolved-into-a-florid-display-of-christian-nationalism/",
      "title": "Au.Org",
      "publisher": "au.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/meet-doc/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://ksopen.org/marshall",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
      "title": "Kansasdisciples.Org",
      "publisher": "kansasdisciples.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "Barbwasinger.Com",
      "publisher": "barbwasinger.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://whatreligionisinfo.com/kobach-religion/",
      "title": "Whatreligionisinfo.Com",
      "publisher": "whatreligionisinfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://msclawrence.com/",
      "title": "Msclawrence.Com",
      "publisher": "msclawrence.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile.",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
      "title": "Csgmidwest.Org",
      "publisher": "csgmidwest.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://ethanforkansas.com",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "social",
      "url": "https://www.facebook.com/ethanforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "social",
      "url": "https://www.instagram.com/ethanforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ethancorson/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://cindyforkansas.com",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "social",
      "url": "https://www.facebook.com/cindyforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://www.cindyforsenateks.com/",
      "title": "Cindyforsenateks.Com",
      "publisher": "cindyforsenateks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://oharaforkansas.com",
      "title": "Oharaforkansas.Com",
      "publisher": "oharaforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "social",
      "url": "https://www.facebook.com/oharaforjoco/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com",
      "title": "Stacyrogersforks.Com",
      "publisher": "stacyrogersforks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "social",
      "url": "https://www.facebook.com/StacyHepnerRogers/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "social",
      "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com",
      "title": "Kansascomeback.Com",
      "publisher": "kansascomeback.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "social",
      "url": "https://www.facebook.com/JoyforKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "social",
      "url": "https://x.com/JoyforKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "social",
      "url": "https://www.linkedin.com/in/joyeakins/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://philipsarnecki.org",
      "title": "Philipsarnecki.Org",
      "publisher": "philipsarnecki.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "social",
      "url": "https://www.facebook.com/p/Philip-Sarnecki-For-Governor-61579950041528/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "social",
      "url": "https://www.linkedin.com/in/philipsarnecki/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://www.imdb.com/name/nm3671154/",
      "title": "Imdb.Com",
      "publisher": "imdb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7",
      "title": "Kcjc.Com",
      "publisher": "kcjc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Ethan_Corson",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Ethan_Corson",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://doleinstitute.org/about/fellows/ethan-corson/",
      "title": "Doleinstitute.Org",
      "publisher": "doleinstitute.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/06/kansas-senator-leans-into-bipartisan-allure-in-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Cindy_Holscher",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/endorsements/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "secondary",
      "url": "https://www.amazon.com/Get-Off-Your-Ass-Definitive/dp/1591201292",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://www.amazon.com/Busting-Your-Butt-Gut-Minimizing/dp/1591202086",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://www.readhowyouwant.com/authors/details/Marty-Tuley/6407",
      "title": "Readhowyouwant.Com",
      "publisher": "readhowyouwant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://openpowerlifting.org/u/martytuley",
      "title": "Openpowerlifting.Org",
      "publisher": "openpowerlifting.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2024/11/05/county-commission-races-2024-general-246243/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Charlotte_O'Hara",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Charlotte_O'Hara",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Stacy_Rogers",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "secondary",
      "url": "https://www.schooleymitchell.com/news/rholter/feature-story-eberly-farm-and-kids-closet-connection/",
      "title": "Schooleymitchell.Com",
      "publisher": "schooleymitchell.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/",
      "title": "Rileyks.Gop",
      "publisher": "rileyks.gop",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "secondary",
      "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
      "title": "Wichitachamber.Org",
      "publisher": "wichitachamber.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://cornerstonedata.com/about-us/",
      "title": "Cornerstonedata.Com",
      "publisher": "cornerstonedata.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Joy_Eakins",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/",
      "title": "Wltreport.Com",
      "publisher": "wltreport.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "secondary",
      "url": "https://trendingpoliticsnews.com/new-frontrunner-emerges-in-key-race-as-gop-candidate-shatters-fundraising-records-mace/",
      "title": "Trendingpoliticsnews.Com",
      "publisher": "trendingpoliticsnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://www.noln.net/site-placement/latest-news/news/55314781/strickland-brothers-10-minute-oil-change-franchise-owner-running-for-kansas-governor",
      "title": "Noln.Net",
      "publisher": "noln.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "secondary",
      "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
      "title": "Bottradionetwork.Com",
      "publisher": "bottradionetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "secondary",
      "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
      "title": "Realmediakc.Com",
      "publisher": "realmediakc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://www.kansascatholic.org/current-news/election-2026",
      "title": "Kansascatholic.Org",
      "publisher": "kansascatholic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "secondary",
      "url": "https://www.colyerforgovernor.com/",
      "title": "Colyerforgovernor.Com",
      "publisher": "colyerforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "social",
      "url": "https://x.com/DrJeffColyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "social",
      "url": "https://x.com/govjeffcolyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "social",
      "url": "https://www.facebook.com/JeffColyerMD/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "social",
      "url": "https://www.linkedin.com/in/jeff-colyer-6894363/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jeff_Colyer",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://www.nga.org/governor/jeff-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "secondary",
      "url": "https://politics.georgetown.edu/profile/jeff-colyer/",
      "title": "Politics.Georgetown.Edu",
      "publisher": "politics.georgetown.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about-gov/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/announcements.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/23/republican-candidate-for-kansas-governor-offering-voters-a-prescription-for-change/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/07/12/colyers-narrow-miss-in-2018-fueling-resurgent-gop-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2021-08-30/the-kansas-a-g-s-path-to-governor-gets-easier-after-his-opponent-endorses-him",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://www.kcur.org/post/colyers-first-executive-order-kansas-governor-fight-sexual-harassment",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-18/faith-based-adoption-law-signed-quickly-becoming-kansas-campaign-fodder",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/af650bef-0c19-4f73-b418-bded940b0b7a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/9f9b260b-5c26-4cd6-a81c-212904371850",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
      "title": "Nbcnews.Com",
      "publisher": "nbcnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/new-kansas-governor-to-require-annual-sexual-harassment-training",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "secondary",
      "url": "https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/",
      "title": "Thehill.Com",
      "publisher": "thehill.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/05/14/jeff-colyer-and-a-review-of-kansas-gubernatorial-comeback-bids/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "secondary",
      "url": "https://www.cgscfoundation.org/person-of-the-month-may-2020/",
      "title": "Cgscfoundation.Org",
      "publisher": "cgscfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "secondary",
      "url": "https://jag.org/dipl-team-member/jeff-colyer/",
      "title": "Jag.Org",
      "publisher": "jag.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "primary",
      "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
      "title": "Docs.House.Gov",
      "publisher": "docs.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "secondary",
      "url": "https://www.kscbnews.net/jeff-colyer-m-d-sworn-in-as-47th-governor-of-the-state-of-kansas/",
      "title": "Kscbnews.Net",
      "publisher": "kscbnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "secondary",
      "url": "https://www.nga.org/governor-spouse/ruth-gutierrez-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Jeff_Colyer.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://sanokc.com/provider/dr-colyer/",
      "title": "Sanokc.Com",
      "publisher": "sanokc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "secondary",
      "url": "https://www.renaissanceplasticsurgicalarts.com/",
      "title": "Renaissanceplasticsurgicalarts.Com",
      "publisher": "renaissanceplasticsurgicalarts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "secondary",
      "url": "https://www.healthgrades.com/physician/dr-jeffrey-colyer-xpdcb",
      "title": "Healthgrades.Com",
      "publisher": "healthgrades.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-222",
      "tier": "secondary",
      "url": "https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery",
      "title": "Nkchealth.Org",
      "publisher": "nkchealth.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-223",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-224",
      "tier": "secondary",
      "url": "https://internationalmedicalcorps.org/press-release/lt-governor-to-climb-mt-kilimanjaro-in-support-of-international-medical-corps-humanitarian-relief-efforts/",
      "title": "Internationalmedicalcorps.Org",
      "publisher": "internationalmedicalcorps.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-225",
      "tier": "secondary",
      "url": "https://www.findagrave.com/memorial/142168654/james-daniel-colyer",
      "title": "Findagrave.Com",
      "publisher": "findagrave.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-226",
      "tier": "secondary",
      "url": "https://www.legacy.com/obituaries/kansascity/obituary.aspx?pid=174049747",
      "title": "Legacy.Com",
      "publisher": "legacy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-227",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-228",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-229",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2018_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-230",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-231",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-232",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-233",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-234",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-235",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-236",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-237",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-238",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-239",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-240",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-241",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-242",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-243",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-244",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-245",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-246",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-247",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-248",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-249",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-250",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-251",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-252",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-253",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-254",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-255",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-256",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-257",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-258",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-259",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-260",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-261",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-262",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-263",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-264",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-265",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-266",
      "tier": "social",
      "url": "https://x.com/ScottSchwabKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-267",
      "tier": "social",
      "url": "https://x.com/KansasSOS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-268",
      "tier": "social",
      "url": "https://www.facebook.com/SchwabforSOS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-269",
      "tier": "social",
      "url": "https://www.instagram.com/kansassos/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-270",
      "tier": "social",
      "url": "https://www.linkedin.com/in/scott-schwab-8306713/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-271",
      "tier": "secondary",
      "url": "https://scottschwab.com/",
      "title": "Scottschwab.Com",
      "publisher": "scottschwab.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-272",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-273",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/34505/scott-schwab",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-274",
      "tier": "secondary",
      "url": "https://www.billtrack50.com/legislatordetail/2823",
      "title": "Billtrack50.Com",
      "publisher": "billtrack50.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-275",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-276",
      "tier": "primary",
      "url": "https://sos.ks.gov/about/schwab-biography.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-277",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-278",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Scott_Schwab",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-279",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Scott_Schwab",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-280",
      "tier": "secondary",
      "url": "https://www.kshs.org/kansapedia/scott-schwab/20461",
      "title": "Kshs.Org",
      "publisher": "kshs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-281",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34505/scott-schwab",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-282",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-283",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-284",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-285",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/scott-schwab-aims-gop-gubernatorial-campaign-at-property-tax-reform/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-286",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/i-will-make-a-full-recovery-scott-schwab-announces-cancer-diagnosis/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-287",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/03/21/ks-secretary-state-announces-cancer-diagnosis/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-288",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-289",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/22/kansas-appeals-court-says-secretary-of-state-violated-open-records-law-by-altering-computer-system/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-290",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/08/01/kansas-secretary-of-state-refuses-to-provide-provisional-ballot-records-despite-court-ruling/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-291",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/cases/loud-light-hammet-v-schwab-2020/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-292",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2020/11/09/as-other-republicans-lied-about-voter-fraud-kansas-secretary-of-state-was-a-voice-of-sanity/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-293",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/kansas-secretary-of-state-defeats-election-conspiracy-promoter",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-294",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/26/schwabs-campaign-rebuffs-late-campaign-criticism-from-kansas-gop-rival-brown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-295",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/09/15/kansas-secretary-of-state-scott-schwab-works-to-build-trust-in-elections-in-the-face-of-skepticism/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-296",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/this-is-unacceptable-top-kansas-election-official-demands-answers-from-usps-after-mail-errors-in-primary-election/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-297",
      "tier": "secondary",
      "url": "https://www.kwch.com/2024/09/10/kansas-secretary-state-sends-letter-usps-over-mail-in-ballot-problems/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-298",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-10-26/president-trump-kansas-secretary-of-state-scott-schwab",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-299",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/31/secretary-of-state-scott-schwab-welcomes-federal-assist-with-cleansing-voter-list/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-300",
      "tier": "secondary",
      "url": "https://abcnews.go.com/US/family-boy-killed-waterslide-speaks-hurting/story?id=45445546",
      "title": "Abcnews.Go.Com",
      "publisher": "abcnews.go.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-301",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/scott-schwab-speaks-as-criminal-cases-loom-dad-talks-of-journey-forward-after-tragedy-on-verruckt/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-302",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/family-friends-and-community-honor-10-year-old-caleb-schwab",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-303",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/caleb-schwabs-family-to-recieve-20-million-in-settlement",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-304",
      "tier": "secondary",
      "url": "https://bflawfirm.com/schlitterbahn-wrongful-death-claims-settle-for-19732125-00/",
      "title": "Bflawfirm.Com",
      "publisher": "bflawfirm.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-305",
      "tier": "secondary",
      "url": "https://www.npr.org/2019/02/25/697647804/judge-dismisses-murder-charges-over-boys-death-on-kansas-waterslide",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-306",
      "tier": "secondary",
      "url": "https://time.com/4444447/caleb-schwab-verruckt-water-slide-death/",
      "title": "Time.Com",
      "publisher": "time.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-307",
      "tier": "secondary",
      "url": "https://www.penwellgabelkc.com/obituaries/caleb-thomas-schwab",
      "title": "Penwellgabelkc.Com",
      "publisher": "penwellgabelkc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-308",
      "tier": "secondary",
      "url": "https://www.lwv.org/legal-center/league-women-voters-kansas-v-schwab",
      "title": "Lwv.Org",
      "publisher": "lwv.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-309",
      "tier": "secondary",
      "url": "https://www.democracydocket.com/cases/kansas-voter-suppression-laws/",
      "title": "Democracydocket.Com",
      "publisher": "democracydocket.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-310",
      "tier": "secondary",
      "url": "https://law.justia.com/cases/kansas/supreme-court/2023/124378.html",
      "title": "Law.Justia.Com",
      "publisher": "law.justia.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-311",
      "tier": "secondary",
      "url": "https://vickischmidt.org/",
      "title": "Vickischmidt.Org",
      "publisher": "vickischmidt.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-312",
      "tier": "social",
      "url": "https://www.facebook.com/VickiSchmidtKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-313",
      "tier": "social",
      "url": "https://x.com/VickiSchmidtKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-314",
      "tier": "social",
      "url": "https://www.linkedin.com/in/vicki-schmidt-50b11810/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-315",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Vicki_Schmidt",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-316",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Vicki_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-317",
      "tier": "primary",
      "url": "https://insurance.kansas.gov/about-us/",
      "title": "Insurance.Kansas.Gov",
      "publisher": "insurance.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-318",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34584/vicki-schmidt",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-319",
      "tier": "secondary",
      "url": "https://content.naic.org/node/8831",
      "title": "Content.Naic.Org",
      "publisher": "content.naic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-320",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-321",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-322",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-03-17/kansas-bill-to-expand-free-breast-cancer-screening-likely-killed-by-republican-lawmakers",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-323",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2026/03/16/breast-cancer-screening-bill-killed-by-kansas-gop/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-324",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/02/kansas-insurance-commissioner-backs-bill-eliminate-breast-cancer-screening-costs/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-325",
      "tier": "secondary",
      "url": "https://www.kwch.com/2023/10/17/its-humbling-ks-insurance-commissioner-discusses-breast-cancer-journey/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-326",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-insurance-commissioner-has-breast-cancer-expects-full-recovery/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-327",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/state-government/2023/jun/14/kansas-insurance-commissioner-says-shes-been-diagnosed-with-breast-cancer/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-328",
      "tier": "secondary",
      "url": "https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/",
      "title": "Kflpac.Org",
      "publisher": "kflpac.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-329",
      "tier": "secondary",
      "url": "https://www.insurancejournal.com/news/midwest/2025/12/03/849821.htm",
      "title": "Insurancejournal.Com",
      "publisher": "insurancejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-330",
      "tier": "secondary",
      "url": "https://www.wibw.com/2024/06/21/ks-insurance-commissioner-touts-new-law-protect-seniors-scams/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-331",
      "tier": "secondary",
      "url": "https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt",
      "title": "Tkmagazine.Com",
      "publisher": "tkmagazine.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-332",
      "tier": "secondary",
      "url": "https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor",
      "title": "News.Ku.Edu",
      "publisher": "news.ku.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-333",
      "tier": "secondary",
      "url": "https://mittelpolitan.substack.com/p/insight-kansas-column-for-july-vicki",
      "title": "Mittelpolitan.Substack.Com",
      "publisher": "mittelpolitan.substack.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-334",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/14/kansas-young-republicans-shut-down-after-politico-report-on-racist-violent-encrypted-chat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-335",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-336",
      "tier": "secondary",
      "url": "https://www.md.com/doctor/michael-j-schmidt-md",
      "title": "Md.Com",
      "publisher": "md.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-337",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-338",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2022_Kansas_Insurance_Commissioner_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-339",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/rollcall/SB95/id/475027",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-340",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2016/b2015_16/measures/documents/sb95_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-341",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/sb409_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-342",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2014/b2013_14/measures/documents/summary_hb_2744_2014.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-343",
      "tier": "secondary",
      "url": "https://apnews.com/article/c465aadcc7c53c6c274f790928fc6208",
      "title": "Apnews.Com",
      "publisher": "apnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-344",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-345",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-346",
      "tier": "social",
      "url": "https://twitter.com/sentymasterson",
      "title": "@SenTyMasterson",
      "publisher": "Twitter.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-347",
      "tier": "social",
      "url": "https://www.facebook.com/presidenttymasterson/",
      "title": "Kansas Senate President Ty Masterson",
      "publisher": "Facebook.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-348",
      "tier": "social",
      "url": "https://www.facebook.com/TyMastersonKansas/",
      "title": "TyMastersonKansas",
      "publisher": "Facebook.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-349",
      "tier": "social",
      "url": "https://www.instagram.com/senator.tymasterson/",
      "title": "@senator.tymasterson",
      "publisher": "Instagram.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-350",
      "tier": "social",
      "url": "https://www.linkedin.com/in/tymastersonkansas/",
      "title": "tymastersonkansas",
      "publisher": "Linkedin.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-351",
      "tier": "secondary",
      "url": "https://senatortymasterson.com/",
      "title": "senatortymasterson.com",
      "publisher": "Senatortymasterson.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-352",
      "tier": "secondary",
      "url": "https://kansasreflector.com/tag/senate-president-ty-masterson/",
      "title": "kansasreflector.com/tag/senate-president-ty-masterson/",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-353",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/20/kansas-senate-president-ty-masterson-launches-republican-campaign-for-governor/",
      "title": "Kansas Reflector: Masterson Launches Campaign",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-354",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Ty_Masterson",
      "title": "Ty Masterson - Wikipedia",
      "publisher": "En.Wikipedia.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-355",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Ty_Masterson",
      "title": "Ty Masterson - Ballotpedia",
      "publisher": "Ballotpedia.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-356",
      "tier": "secondary",
      "url": "https://www.kmuw.org/2025-07-20/state-sen-ty-masterson-of-andover-announces-2026-gubernatorial-bid",
      "title": "KMUW: Masterson Announces Bid",
      "publisher": "Kmuw.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-357",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/07/20/ty-masterson-announces-run-kansas-governor-lets-take-back-kansas/",
      "title": "KWCH: Masterson Announces Run",
      "publisher": "Kwch.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-358",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/57517/ty-masterson",
      "title": "Vote Smart: Biography",
      "publisher": "Justfacts.Votesmart.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-359",
      "tier": "secondary",
      "url": "https://alec.org/person/senator-ty-masterson-2/",
      "title": "ALEC Profile",
      "publisher": "Alec.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-360",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_masterson_ty_1/",
      "title": "Kansas Legislature Profile",
      "publisher": "Kslegislature.Gov",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-361",
      "tier": "secondary",
      "url": "https://www.followthemoney.org/entity-details?eid=6671671&default=candidate",
      "title": "FollowTheMoney",
      "publisher": "Followthemoney.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-362",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/27/kansas-senate-president-celebrates-veto-override-by-ringing-bell-outside-house-angering-democrats/",
      "title": "Kansas Reflector: Bell-Ringing Incident",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-363",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/04/05/between-laughter-and-cursing-kansas-house-overrides-veto-of-transgender-sports-ban/",
      "title": "Kansas Reflector: Transgender Sports Ban Override",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-364",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/13/kansas-governor-vetoes-anti-trans-bathroom-bill-citing-numerous-and-significant-consequences/",
      "title": "Kansas Reflector: SB 244 Bathroom Bill Veto",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-365",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/18/senate-president-ty-masterson-and-kansas-republicans-just-voted-to-send-men-into-ladies-bathrooms/",
      "title": "Kansas Reflector: SB 244 Criticism",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-366",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/04/19/kansas-governor-allows-anti-dei-bill-to-become-law-vetoes-anti-abortion-and-election-bills/",
      "title": "Kansas Reflector: DEI Law",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-367",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/03/15/kansas-senate-clear-flat-tax-plan-after-heated-discussion/",
      "title": "Kansas Reflector: Flat Tax",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-368",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/17/kansas-house-senate-trade-blows-on-property-tax-relief/",
      "title": "Kansas Reflector: Property Tax Feud",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-369",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/01/29/senate-republican-promotes-education-freedom-with-125m-voucher-program-for-private-schools/",
      "title": "Kansas Reflector: School Vouchers $125M",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-370",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/hours-after-kansas-governor-rejects-pregnancy-center-protections-legislature-overrides-her-veto/",
      "title": "Kansas Reflector: Pregnancy Center Override",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-371",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/27/kansas-governor-vetoes-bill-offering-tax-breaks-to-people-using-nontraditional-health-plans/",
      "title": "Kansas Reflector: SB 368 Override",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-372",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/02/18/medicaid-expansion-fails-in-kansas-senate-in-takeover-attempt-by-democrats/",
      "title": "Kansas Reflector: Medicaid Expansion Fails",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-373",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/30/legislature-screeches-to-a-stop-flinging-lousy-bills-everywhere-now-the-governor-has-to-clean-up/",
      "title": "Kansas Reflector: Session Recap",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-374",
      "tier": "secondary",
      "url": "https://www.microbilt.com/news/article/debt-does-in-kansas-lawmaker",
      "title": "MicroBilt: Debt Does In Kansas Lawmaker",
      "publisher": "Microbilt.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-375",
      "tier": "secondary",
      "url": "https://1350kman.com/2012/12/senate-leader-filed-for-bankruptcy-in-2010/",
      "title": "News Radio KMAN: Senate Leader Filed for Bankruptcy",
      "publisher": "1350kman.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-376",
      "tier": "secondary",
      "url": "https://ginnykrumme.substack.com/p/ty-masterson-chapter-1",
      "title": "Ginny Krumme Substack: Ty Masterson, Chapter 1",
      "publisher": "Ginnykrumme.Substack.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-377",
      "tier": "secondary",
      "url": "https://www.washingtonexaminer.com/news/campaigns/state/3883028/trumpworld-gets-behind-ty-masterson-kansas-governor-race/",
      "title": "Washington Examiner: Trumpworld Gets Behind Masterson",
      "publisher": "Washingtonexaminer.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-378",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/masterson-assembles-national-campaign-team-with-trump-ties/",
      "title": "Sunflower State Journal: Masterson Assembles National Team",
      "publisher": "Sunflowerstatejournal.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-379",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/06/04/where-did-kansas-state-senators-campaign-funds-come-from-the-answers-might-surprise-you/",
      "title": "Kansas Reflector: Senate Campaign Finance Sources",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-380",
      "tier": "secondary",
      "url": "https://www.marijuanamoment.net/kansas-gop-senate-president-fears-legalizing-medical-marijuana-would-fuel-gang-activity/",
      "title": "Marijuana Moment: Gang Activity Fears",
      "publisher": "Marijuanamoment.Net",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-381",
      "tier": "secondary",
      "url": "https://www.marijuanamoment.net/kansas-senators-kill-bill-to-create-medical-marijuana-pilot-program/",
      "title": "Marijuana Moment: Kill Medical Marijuana Pilot",
      "publisher": "Marijuanamoment.Net",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-382",
      "tier": "secondary",
      "url": "https://www.marijuanamoment.net/three-in-five-kansans-back-legalizing-recreational-marijuana-and-70-want-medical-cannabis-new-poll-finds/",
      "title": "Marijuana Moment: 60% Support Legalization",
      "publisher": "Marijuanamoment.Net",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-383",
      "tier": "secondary",
      "url": "https://alec.org/article/2024-agendas-ty-masterson-hugh-hewitt/",
      "title": "ALEC: Hugh Hewitt Show Appearance",
      "publisher": "Alec.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-384",
      "tier": "secondary",
      "url": "https://pro.stateaffairs.com/ks/flash/ty-masterson-alec-chair",
      "title": "StateAffairs Pro: Masterson Assumes ALEC Chair",
      "publisher": "Pro.Stateaffairs.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-385",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/masterson-become-new-national-chair-of-alec/",
      "title": "Sunflower State Journal: ALEC Chair",
      "publisher": "Sunflowerstatejournal.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-386",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/28/kansas-senate-president-denounces-democrats-for-out-of-context-bs-comments-on-charlie-kirk/",
      "title": "Kansas Reflector: Charlie Kirk Denouncement",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-387",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/12/11/spot-the-difference-candidate-befuddled-by-kansas-reflector-or-tipsy-raccoon-you-make-the-call/",
      "title": "Kansas Reflector: Raccoon/Soros Editorial",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-388",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/04/kansas-senate-budget-seeks-to-pry-state-funding-from-wine-and-cheese-crowd/",
      "title": "Kansas Reflector: Wine and Cheese / GoCreate",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-389",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/23/kansas-legislatures-supermajority-makes-mockery-of-open-records-law-over-efficiency-portal-messages/",
      "title": "Kansas Reflector: COGE Open Records",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-390",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/22/why-kansas-reflector-filed-a-complaint-about-stonewalling-by-the-senate-efficiency-panel/",
      "title": "Kansas Reflector: COGE Formal Complaint",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-391",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/12/16/kansas-governor-doubtful-gop-legislators-can-pull-off-congressional-redistricting/",
      "title": "Kansas Reflector: Governor Doubtful on Redistricting",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-392",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-10-27/kansas-senate-redistricting-special-session-gerrymandering-trump",
      "title": "KCUR: Senate Gets Enough Signatures",
      "publisher": "Kcur.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-393",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/09/24/gubernatorial-candidate-ty-masterson-confirms-plan-fall-redistricting-session/",
      "title": "KWCH: Masterson Confirms Redistricting Plan",
      "publisher": "Kwch.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-394",
      "tier": "secondary",
      "url": "https://www.wichita.edu/profiles/research/Masterson-Ty.php",
      "title": "WSU Profile: Ty Masterson",
      "publisher": "Wichita.Edu",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-395",
      "tier": "secondary",
      "url": "https://www.gocreate.com/newsroom",
      "title": "GoCreate Newsroom",
      "publisher": "Gocreate.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Ty Masterson's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/about",
      "title": "X / Mastersonforgovernor",
      "publisher": "Mastersonforgovernor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "Education and culture-war content is the second major signal, with 7 of 31 items, or 23 percent of the sample. The campaign site labels one plank \"Teach reading. Teach math. Not wo"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://w.twstalker.com/TyMastersonKS",
      "title": "X / W.Twstalker",
      "publisher": "W.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Religious Liberty.",
        "Ron Bryce as a physician, conservative, author of *Fingerprint of God*, and someone whose \"Christian worldview\" guides work in Topeka. Visible mirror metrics: 155 views and small v",
        "Observed public online activity mapped to Guns / Second Amendment.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/legislators/sen_masterson_ty_1/",
      "title": "kslegislature.gov / Kslegislature",
      "publisher": "Kslegislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Guns / Second Amendment.",
        "Masterson's official legislative record reinforces the campaign themes. The Kansas Legislature profile lists him as Senate president and shows sponsored or co-sponsored measures on"
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
