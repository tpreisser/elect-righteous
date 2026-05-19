/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JEFF_COLYER_V2: CandidateFullV2 = {
  "slug": "jeff-colyer",
  "name": "Jeff Colyer",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Physician / Former Governor",
  "religion": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
  "campaignWebsite": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Strongly pro-life. Calls abortion \"one of the civil rights issues of our time\" and says Kansas should stop being a \"Midwest magnet for abortion.\" Signed abortion restriction legislation as governor.",
        "sourceIds": [
          "s-32",
          "s-7",
          "s-8",
          "s-14",
          "s-26",
          "s-27"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "Colyer's active campaign footprint is split between an older campaign domain, jeffcolyer.com, and a 2026-specific domain, colyerforgovernor.com. The older site links his public X, Instagram, Facebook, and YouTube accounts and foregrounds action items on critical race theory, private property rights, abortion, KU stem-cell funding, and oil/gas policy. The homepage identifies him as a fifth-generation Kansan from...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "jeffcolyer.com",
          "observation": "1. jeffcolyer.com homepage, captured 2026-05-11. Key visible signals: critical race theory pledge, private property rights letter, abortion announcement, KU stem-cell research criticism, oil/gas criticism, bio, and social links. 2. jeffcolyer.com/about, captured 2026-05-11. Key visible signals: Hays biography, family, surgeon identity, humanitarian war-zone work, pro-life record, KanCare, budget/stability claims,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Key visible signals: volunteer/job/fundraiser/intern/event request form and linked X, Instagram, and Facebook accounts. 4. jeffcolyer.com/announcements.html, captured 2026-05-11. The announcements page is largely a 2021 archive, but it remains live and visible from the campaign site; recurring themes include abortion, KU adult stem-cell research, oil/gas, COVID-era closures, conservative identity, and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        }
      ]
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
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "As governor, signed Senate Bill 284 granting legal protections to faith-based adoption agencies that cite religious beliefs for not placing children in LGBTQ+ homes.",
        "sourceIds": [
          "s-2",
          "s-7",
          "s-8",
          "s-15",
          "s-21",
          "s-27"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "colyerforgovernor.com",
          "observation": "The 2026 campaign site is more polished and explicitly primary-oriented. It leads with Trump validation, \"Faith & Family First,\" Colyer's status as Kansas's 47th governor, his appointment by Trump to a rural-health advisory role, and his service as Trump's 2024 Kansas chair. It lists five campaign pillars: lower costs/higher pay, safer communities, freedom to thrive, healthy rural Kansas, and honest accountable...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "mobile.twstalker.com",
          "observation": "Engagement: 24 replies, 2 reposts, 69 likes, 2K views, 0 quotes. Topic: military / patriotism. (source) 8. 2 weeks ago -- Short faith-coded reply, \"Big amen.\" Engagement: 4 replies, 2 reposts, 29 likes, 585 views, 0 quotes. Topic: faith / affirmation. (source) 9. 2 weeks ago -- \"God bless and protect our troops.\" Engagement: 4 replies, 4 reposts, 43 likes, 1K views, 1 quote. Topic: military / patriotism. (source)...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "KCUR",
          "observation": "Key visible signals: Trump quote, \"Faith & Family First,\" lower costs, public safety, school choice, abortion, Second Amendment, religious liberty, rural health, and accountable government. 6. KCUR/KMUW campaign launch coverage, published 2025-05-16. Key visible signals: Trump comparison, 47/49 governor framing, cancer recovery, taxes/property taxes, school litigation, border/deportation, gender-affirming care...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        }
      ]
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Has not made gun policy a centerpiece of his 2026 campaign, though his overall conservative platform and Trump alignment suggest support for gun rights.",
        "sourceIds": [
          "s-41",
          "s-1",
          "s-2",
          "s-3",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "Education and culture-war issues are the second-largest visible cluster, with 7 of 29 items, or 24 percent (harvest). The older campaign homepage still invites supporters to sign a pledge to keep critical race theory out of Kansas schools (source). Recent indexed X posts emphasize phonics-based reading, math, writing, technology skills, and career preparation, while also using sharper language against \"political...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        }
      ]
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Supports deportation of undocumented immigrants and wants to \"keep criminal illegal aliens out of Kansas.\"",
        "sourceIds": [
          "s-7",
          "s-8",
          "s-14",
          "s-26",
          "s-27",
          "s-28"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "TikTok",
          "observation": "Topic: agriculture / property rights / regulation. (source) 13. 2 weeks ago -- Wyandotte County State of the Union watch party; SNAP and unemployment-insurance fraud, household affordability, and regulation. Engagement: 4 replies, 7 reposts, 25 likes, 2K views, 2 quotes. Topic: campaign event / fraud / affordability. (source) 14. 2 weeks ago -- Quote-post of Libs of TikTok item about Olathe students, anti-ICE...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "mobile.twstalker.com",
          "observation": "Topic: schools / immigration protest / public safety / partisan conflict. (source) 15. 3 weeks ago -- Miracle on Ice anniversary / USA post. Engagement: 2 replies, 0 reposts, 24 likes, 778 views, 0 quotes. Topic: patriotism / sports. (source) 16. 3 weeks ago -- Retweet of USA Hockey Winter Olympics gold post. Topic: sports / patriotism. (source) 17. 3 weeks ago -- Sedgwick County property valuations, mill levies,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "The accessible X mirror exposed a limited amplification sample. The most visible amplification was a quote-post of Libs of TikTok about an Olathe anti-ICE student walkout and students holding Trump flags; Colyer used it to call on Democratic governor candidates to condemn violence and extremism (source). The same capture showed USA Hockey retweets/quote-posts around Olympic hockey. The capture did not expose a...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "Wants to remove DEI directives and what he calls \"political indoctrination\" from Kansas schools. Pledges to \"get the woke out of our schools\" and refocus classrooms on math, reading, and STEM skills including coding and AI.",
        "sourceIds": [
          "s-7",
          "s-8",
          "s-14",
          "s-26",
          "s-27",
          "s-28"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "mobile.twstalker.com",
          "observation": "1. 2 days ago -- Greensburg classroom visit. Message: Kansas's future starts in classrooms; emphasis on phonics-based reading, math, writing, tech skills, and career preparation. Engagement: 3 replies, 1 repost, 12 likes, 553 views, 0 quotes. Topic: education. (source) 2. 3 days ago -- Kansas City Chiefs / Kenneth Walker III post. Engagement: 0 replies, 0 reposts, 10 likes, 463 views, 0 quotes.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "mobile.twstalker.com",
          "observation": "Topic: sports / Kansas identity. (source) 3. 5 days ago -- Anti-woke education post: \"EDUCATION NOT INDOCTRINATION,\" with reading, writing, math, technology skills, and \"real-world preparation.\" Engagement: 16 replies, 6 reposts, 38 likes, 1K views, 1 quote. Topic: education / anti-woke schools. (source) 4. 6 days ago -- Governor campaign post tying higher wages, lower taxes, small business, and President Trump....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Runs as a Republican. The Kansas Republican Party has not endorsed marijuana legali",
        "sourceIds": [
          "s-26",
          "s-49",
          "s-7",
          "s-8",
          "s-14",
          "s-27"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Jeff Colyer is a physician, plastic surgeon, former lieutenant governor, and former governor of Kansas who is running for governor again in 2026 as a Republican. He grew up in Hays, graduated from Thomas More Prep, studied economics at Georgetown, earned a master's degree at Cambridge, and received his medical degree from the University of Kansas.\n\nColyer's public identity has long combined medicine and politics. Before becoming governor, he served in the Kansas House, then as Sam Brownback's lieutenant governor. He became governor in 2018 when Brownback resigned for a federal post, making Colyer the only Kansas governor from Hays.\n\nHis biography also includes an unusually extensive humanitarian medical record. The raw material describes decades of volunteer surgical work through International Medical Corps in conflict",
  "recordSummary": "Colyer's Kansas political record is anchored in his short tenure as governor and his longer stretch as lieutenant governor. His campaign and later public speeches have pointed to budget management, tax policy, and the end of long-running school-finance litigation as central accomplishments of that period.\n\nHe also carries unresolved political history from the Republican side. In 2018 he lost the GOP primary to Kris Kobach by about 345 votes after serving as governor, and in 2021 he suspended a later campaign after a prostate-cancer diagnosis. Those two events remain central to how Kansas Republicans remember him.\n\nIn the 2026 race, Colyer has run as an experienced conservative with a heavy emphasis on abortion, school policy, property taxes, immigration, and alignment with Donald Trump. The raw material also notes that he served as Trump's 2024 Kansas chair, making his current campaign more directly tied to Trump politics than his earlier gubernatorial run.",
  "ownWordsNarrative": "_A summary of what Jeff Colyer has publicly said, posted, and amplified across campaign channels, indexed social media, and credible public coverage. Drawn from public captures of campaign websites, X-indexed posts, Facebook, Instagram, YouTube, LinkedIn, and public news/search records from May 12, 2025 through May 11, 2026, with older still-live campaign archive pages noted where relevant. We report patterns; we do not interpret intent._\n\nAcross the accessible public set reviewed, Colyer presents the 2026 governor race as a comeback campaign built around experience, Trump alignment, conservative cultural issues, lower costs, and state-government efficiency. His 2026 campaign site leads with a Donald Trump quote, identifies him as Kansas's 47th governor and Trump's 2024 Kansas chair, and frames the campaign as \"Faith & Family First\" ([source](https://www.colyerforgovernor.com/)). In KCUR/KMUW launch coverage, Colyer tied Trump's return to his own 47/49 governor frame and said, \"I've done the job\" ([source](https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race)).\n\nThe dominant policy signal in the harvest is economic: taxes, affordability, fraud, spending, regulation, and property rights account for 8 of 29 accessible reviewed items, or 28 percent ([harvest](social-harvest.md#topic-share-analysis)). The 2026 campaign site promises a high-wage, low-tax Kansas with \"a real lid on property taxes\" ([source](https://www.colyerforgovernor.com/)). In the indexed X sample, Colyer posted about higher wages and lower taxes, SNAP fraud, unemployment-insurance fraud, Sedgwick County property valuations, lesser prairie chicken delisting, and regulations affecting farmers, ranchers, homeowners, and small businesses ([harvest](social-harvest.md#indexed-x-items-reviewed)).\n\nEducation and culture-war issues are the second-largest visible cluster, with 7 of 29 items, or 24 percent ([harvest](social-harvest.md#topic-share-analysis)). The older campaign homepage still invites supporters to sign a pledge to keep critical race theory out of Kansas schools ([source](https://jeffcolyer.com/)). Recent indexed X posts emphasize phonics-based reading, math, writing, technology skills, and career preparation, while also using sharper language against \"political agendas\" in classrooms ([source](https://mobile.twstalker.com/DrJeffColyer)). The 2026 campaign site groups school choice, parental authority, abortion, the Second Amendment, and religious liberty under \"Freedom to Thrive\" ([source](https://www.colyerforgovernor.com/)).\n\nColyer's medical identity remains central rather than incidental. His campaign biography says he is a craniofacial/plastic surgeon who has treated more than 20,000 patients and volunteered in more than 25 war zones, including Rwanda during the genocide ([source](https://www.colyerforgovernor.com/)). The older campaign about page says he created Kansas's privatized integrated Medicaid system, KanCare, and presents it as a taxpayer-savings and care-management achievement ([source](https://www.jeffcolyer.com/about)). The 2026 site extends that biography into rural health, saying he would deliver care and hospitals for small towns ([source](https://www.colyerforgovernor.com/)).\n\nAbortion appears as a recurring moral and campaign issue. The 2026 campaign site says Colyer will \"defend the unborn\" ([source](https://www.colyerforgovernor.com/)). The older, still-live announcements archive includes a 2021 statement attacking abortion increases in Kansas and the Biden administration's budget position on the Hyde Amendment ([source](https://www.jeffcolyer.com/announcements.html)). That archive is older than the active 2026 campaign period, but it remains linked from the public campaign website and is consistent with the current site's abortion framing.\n\nOn immigration and public safety, Colyer's visible campaign language links law enforcement, sentencing, fentanyl, and illegal immigration. The 2026 site says safer communities require supporting law enforcement, strengthening sentencing for violent criminals, and securing communities from fentanyl and illegal immigration ([source](https://www.colyerforgovernor.com/)). KCUR/KMUW reported that, at launch, Colyer said he wanted to secure the border, deport undocumented immigrants who are criminals, prevent gender-affirming care for minors, and bring tech and manufacturing jobs to Kansas ([source](https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race)).\n\nThe highest visible engagement in the accessible social sample came from a quote-post about an Olathe anti-ICE student walkout and students holding Trump flags. The indexed X mirror showed 42 replies, 32 reposts, 223 likes, 18K views, and 6 quotes as of the May 11, 2026 capture ([harvest](social-harvest.md#engagement-review)). In that post, Colyer described the incident as not representative of Kansas and called on Democratic governor candidates to condemn violence and extremism ([source](https://mobile.twstalker.com/DrJeffColyer)).\n\nColyer's visible X feed is not exclusively campaign policy. The recent indexed sample also included Kansas City Chiefs, USA Hockey, Miracle on Ice, troop-prayer, military-condolence, faith-coded, and Rep. John Resman condolence posts ([source](https://mobile.twstalker.com/DrJeffColyer)). Those items account for 4 of 29 coded items in the cross-platform harvest, but they take up a larger share of the immediately visible recent X mirror because several were clustered around late-April and early-May sports and military moments ([harvest](social-harvest.md#topic-share-analysis)).\n\nSeveral areas were absent or thin in the accessible reviewed set. The public material did not show sustained discussion of child care, foster care, housing costs, water policy, the Ogallala Aquifer, broadband, transportation infrastructure, higher education affordability, or detailed rural hospital finance. Medicaid appears mainly through Colyer's KanCare record rather than a current Medicaid-expansion debate. Veterans and service members appear through troop-support posts, but not through a detailed veterans-services platform ([harvest](social-harvest.md#visible-absences)).\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: May 12, 2025 to May 11, 2026 for current campaign and social presence, with still-live 2021 campaign archive material noted separately. Platforms surveyed: campaign websites, X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, Reddit, public search, and credible indexed public coverage. Items examined: 29 accessible original/profile/public-record items and one clearly visible retweet/quote-amplification cluster. Login-walled or script-blocked material was not counted as reviewed. Engagement was reported only when visible in public metadata on capture date.\n\n_Disclaimer: This summary reports public, candidate-controlled or candidate-attributed signals visible to a logged-out researcher. It is not a complete archive of deleted posts, paid ads, stories, livestreams, email, private groups, or login-only platform activity. We report patterns; we do not interpret intent._",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.\n\nHis public background points to a Catholic upbringing in Hays, including attendance at Thomas More Prep and family ties to St. Joseph's Catholic Church, but the available record does not identify a present-day parish.",
  "church": {
    "name": "Specific current church not confirmed",
    "denomination": "Catholic background (TMP-Marian, Hays); current affiliation uncertain",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Catholic background (TMP-Marian, Hays); current affiliation uncertain. Graduated from Thomas More Prep-Marian Catholic High School in Hays (Class of 1978)."
  },
  "campaignFinance": {
    "totalRaised": "$2,070,322.09 (2025 year-end)",
    "narrative": "Colyer's 2025 year-end filing showed $2,070,322.09 raised, $185,812.31 spent, and $1,884,509.78 cash on hand. The same filing listed $17,493.28 in-kind and $63,346.68 in other transactions. The raw material also described the campaign as partly self-funded, including a $1.05 million personal loan alongside donor support.",
    "donors": [
      {
        "name": "Stephen Reintjes",
        "amount": "$516.53"
      },
      {
        "name": "Alan Cobb",
        "amount": "$104.10"
      },
      {
        "name": "Janie Welsh",
        "amount": "$1,033.06"
      },
      {
        "name": "Dylan Avatar Arnold",
        "amount": "$520.51"
      },
      {
        "name": "Sarah Demovish",
        "amount": "$516.53"
      }
    ],
    "undisclosed": "The reviewed sample donors are only a slice of a very large statewide filing.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing SW01JC_202601 and campaign-finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign websites, X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, Reddit, Public news coverage. Harvest range: 2025-05-12 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/",
      "title": "jeffcolyer.com",
      "publisher": "Jeffcolyer",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer.",
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Observed public online activity mapped to Guns / Second Amendment."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://www.colyerforgovernor.com/",
      "title": "colyerforgovernor.com",
      "publisher": "Colyerforgovernor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://mobile.twstalker.com/DrJeffColyer",
      "title": "@DrJeffColyer",
      "publisher": "Mobile.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer.",
        "Observed public online activity mapped to Religious Liberty.",
        "Observed public online activity mapped to Immigration / Border.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about",
      "title": "jeffcolyer.com/about",
      "publisher": "Jeffcolyer",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/announcements.html",
      "title": "jeffcolyer.com/announcements.html",
      "publisher": "Jeffcolyer",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
      "title": "KCUR/KMUW campaign launch coverage",
      "publisher": "Kcur",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
      "title": "Kansas Reflector item on Colyer moving toward 2026 run",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-14",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Jeff Colyer - Kansas Historical Society",
      "publisher": "Kansashistory",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeff Colyer for Governor",
      "publisher": "Jeffcolyer",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://www.nga.org/governor/jeff-colyer/",
      "title": "Jeff Colyer - National Governors Association",
      "publisher": "Nga",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
      "title": "Kansas Reflector - Colyer endorses Trump (Nov 2023)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
      "title": "Kansas Reflector - Colyer cancer diagnosis (Aug 2021)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
      "title": "Kansas Reflector - Wokeism/Oxpecker (Nov 2025)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
      "title": "KAKE - Colyer launches bid inspired by Trump",
      "publisher": "Kake",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
      "title": "Vote Smart - Jeff Colyer",
      "publisher": "Justfacts.Votesmart",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
      "title": "Sunflower State Journal - Colyer, Schwab most recognized",
      "publisher": "Sunflowerstatejournal",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jeff Colyer."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JEFF_COLYER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jeff-colyer.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
