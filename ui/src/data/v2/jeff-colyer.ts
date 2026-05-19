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
          "s-48",
          "s-93",
          "s-119",
          "s-219",
          "s-240",
          "s-264"
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
            "s-179"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "jeffcolyer.com",
          "observation": "1. jeffcolyer.com homepage, captured 2026-05-11. Key visible signals: critical race theory pledge, private property rights letter, abortion announcement, KU stem-cell research criticism, oil/gas criticism, bio, and social links. 2. jeffcolyer.com/about, captured 2026-05-11. Key visible signals: Hays biography, family, surgeon identity, humanitarian war-zone work, pro-life record, KanCare, budget/stability claims,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-179"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Key visible signals: volunteer/job/fundraiser/intern/event request form and linked X, Instagram, and Facebook accounts. 4. jeffcolyer.com/announcements.html, captured 2026-05-11. The announcements page is largely a 2021 archive, but it remains live and visible from the campaign site; recurring themes include abortion, KU adult stem-cell research, oil/gas, COVID-era closures, conservative identity, and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
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
          "s-15",
          "s-51",
          "s-60",
          "s-63",
          "s-85",
          "s-91"
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
          "s-59",
          "s-64",
          "s-65",
          "s-66",
          "s-69",
          "s-72"
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
            "s-180"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "mobile.twstalker.com",
          "observation": "Engagement: 24 replies, 2 reposts, 69 likes, 2K views, 0 quotes. Topic: military / patriotism. (source) 8. 2 weeks ago -- Short faith-coded reply, \"Big amen.\" Engagement: 4 replies, 2 reposts, 29 likes, 585 views, 0 quotes. Topic: faith / affirmation. (source) 9. 2 weeks ago -- \"God bless and protect our troops.\" Engagement: 4 replies, 4 reposts, 43 likes, 1K views, 1 quote. Topic: military / patriotism. (source)...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "KCUR",
          "observation": "Key visible signals: Trump quote, \"Faith & Family First,\" lower costs, public safety, school choice, abortion, Second Amendment, religious liberty, rural health, and accountable government. 6. KCUR/KMUW campaign launch coverage, published 2025-05-16. Key visible signals: Trump comparison, 47/49 governor framing, cancer recovery, taxes/property taxes, school litigation, border/deportation, gender-affirming care...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-197"
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
          "s-64",
          "s-85",
          "s-92",
          "s-110",
          "s-111",
          "s-120"
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
            "s-179"
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
          "s-133",
          "s-361",
          "s-1",
          "s-6",
          "s-7",
          "s-8"
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
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "mobile.twstalker.com",
          "observation": "Topic: schools / immigration protest / public safety / partisan conflict. (source) 15. 3 weeks ago -- Miracle on Ice anniversary / USA post. Engagement: 2 replies, 0 reposts, 24 likes, 778 views, 0 quotes. Topic: patriotism / sports. (source) 16. 3 weeks ago -- Retweet of USA Hockey Winter Olympics gold post. Topic: sports / patriotism. (source) 17. 3 weeks ago -- Sedgwick County property valuations, mill levies,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "The accessible X mirror exposed a limited amplification sample. The most visible amplification was a quote-post of Libs of TikTok about an Olathe anti-ICE student walkout and students holding Trump flags; Colyer used it to call on Democratic governor candidates to condemn violence and extremism (source). The same capture showed USA Hockey retweets/quote-posts around Olympic hockey. The capture did not expose a...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
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
          "s-44",
          "s-119",
          "s-133",
          "s-136",
          "s-161",
          "s-162"
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
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "mobile.twstalker.com",
          "observation": "Topic: sports / Kansas identity. (source) 3. 5 days ago -- Anti-woke education post: \"EDUCATION NOT INDOCTRINATION,\" with reading, writing, math, technology skills, and \"real-world preparation.\" Engagement: 16 replies, 6 reposts, 38 likes, 1K views, 1 quote. Topic: education / anti-woke schools. (source) 4. 6 days ago -- Governor campaign post tying higher wages, lower taxes, small business, and President Trump....",
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
        "text": "Runs as a Republican. The Kansas Republican Party has not endorsed marijuana legali",
        "sourceIds": [
          "s-6",
          "s-7",
          "s-20",
          "s-30",
          "s-52",
          "s-53"
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
      "url": "https://www.jeffcolyer.com/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://twitter.com/DrJeffColyer",
      "title": "Twitter.Com",
      "publisher": "twitter.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.facebook.com/JeffColyerMD",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.instagram.com/jeffcolyermd/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://www.youtube.com/channel/UCQfQe9VJ3OhUhAV1QUwFdgg",
      "title": "Youtube.Com",
      "publisher": "youtube.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://ethanforkansas.com",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "social",
      "url": "https://www.facebook.com/ethanforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "social",
      "url": "https://www.instagram.com/ethanforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ethancorson/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://cindyforkansas.com",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "social",
      "url": "https://www.facebook.com/cindyforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://www.cindyforsenateks.com/",
      "title": "Cindyforsenateks.Com",
      "publisher": "cindyforsenateks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://oharaforkansas.com",
      "title": "Oharaforkansas.Com",
      "publisher": "oharaforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "social",
      "url": "https://www.facebook.com/oharaforjoco/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com",
      "title": "Stacyrogersforks.Com",
      "publisher": "stacyrogersforks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "social",
      "url": "https://www.facebook.com/StacyHepnerRogers/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "social",
      "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com",
      "title": "Kansascomeback.Com",
      "publisher": "kansascomeback.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "social",
      "url": "https://www.facebook.com/JoyforKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "social",
      "url": "https://x.com/JoyforKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "social",
      "url": "https://www.linkedin.com/in/joyeakins/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://philipsarnecki.org",
      "title": "Philipsarnecki.Org",
      "publisher": "philipsarnecki.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "social",
      "url": "https://www.facebook.com/p/Philip-Sarnecki-For-Governor-61579950041528/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "social",
      "url": "https://www.linkedin.com/in/philipsarnecki/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://www.imdb.com/name/nm3671154/",
      "title": "Imdb.Com",
      "publisher": "imdb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7",
      "title": "Kcjc.Com",
      "publisher": "kcjc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Ethan_Corson",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Ethan_Corson",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://doleinstitute.org/about/fellows/ethan-corson/",
      "title": "Doleinstitute.Org",
      "publisher": "doleinstitute.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/06/kansas-senator-leans-into-bipartisan-allure-in-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Cindy_Holscher",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/endorsements/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://www.amazon.com/Get-Off-Your-Ass-Definitive/dp/1591201292",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://www.amazon.com/Busting-Your-Butt-Gut-Minimizing/dp/1591202086",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://www.readhowyouwant.com/authors/details/Marty-Tuley/6407",
      "title": "Readhowyouwant.Com",
      "publisher": "readhowyouwant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://openpowerlifting.org/u/martytuley",
      "title": "Openpowerlifting.Org",
      "publisher": "openpowerlifting.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2024/11/05/county-commission-races-2024-general-246243/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Charlotte_O'Hara",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Charlotte_O'Hara",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "secondary",
      "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Stacy_Rogers",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://www.schooleymitchell.com/news/rholter/feature-story-eberly-farm-and-kids-closet-connection/",
      "title": "Schooleymitchell.Com",
      "publisher": "schooleymitchell.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/",
      "title": "Rileyks.Gop",
      "publisher": "rileyks.gop",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "secondary",
      "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
      "title": "Wichitachamber.Org",
      "publisher": "wichitachamber.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://cornerstonedata.com/about-us/",
      "title": "Cornerstonedata.Com",
      "publisher": "cornerstonedata.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Joy_Eakins",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "secondary",
      "url": "https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/",
      "title": "Wltreport.Com",
      "publisher": "wltreport.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://trendingpoliticsnews.com/new-frontrunner-emerges-in-key-race-as-gop-candidate-shatters-fundraising-records-mace/",
      "title": "Trendingpoliticsnews.Com",
      "publisher": "trendingpoliticsnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "secondary",
      "url": "https://www.noln.net/site-placement/latest-news/news/55314781/strickland-brothers-10-minute-oil-change-franchise-owner-running-for-kansas-governor",
      "title": "Noln.Net",
      "publisher": "noln.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "secondary",
      "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
      "title": "Bottradionetwork.Com",
      "publisher": "bottradionetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "secondary",
      "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
      "title": "Realmediakc.Com",
      "publisher": "realmediakc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "secondary",
      "url": "https://www.kansascatholic.org/current-news/election-2026",
      "title": "Kansascatholic.Org",
      "publisher": "kansascatholic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile.",
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Observed public online activity mapped to Guns / Second Amendment."
      ]
    },
    {
      "id": "s-180",
      "tier": "secondary",
      "url": "https://www.colyerforgovernor.com/",
      "title": "Colyerforgovernor.Com",
      "publisher": "colyerforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-181",
      "tier": "social",
      "url": "https://x.com/DrJeffColyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "social",
      "url": "https://x.com/govjeffcolyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "social",
      "url": "https://www.facebook.com/JeffColyerMD/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "social",
      "url": "https://www.linkedin.com/in/jeff-colyer-6894363/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jeff_Colyer",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "secondary",
      "url": "https://www.nga.org/governor/jeff-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "secondary",
      "url": "https://politics.georgetown.edu/profile/jeff-colyer/",
      "title": "Politics.Georgetown.Edu",
      "publisher": "politics.georgetown.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about-gov/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/announcements.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/23/republican-candidate-for-kansas-governor-offering-voters-a-prescription-for-change/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/07/12/colyers-narrow-miss-in-2018-fueling-resurgent-gop-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2021-08-30/the-kansas-a-g-s-path-to-governor-gets-easier-after-his-opponent-endorses-him",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://www.kcur.org/post/colyers-first-executive-order-kansas-governor-fight-sexual-harassment",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-18/faith-based-adoption-law-signed-quickly-becoming-kansas-campaign-fodder",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/af650bef-0c19-4f73-b418-bded940b0b7a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/9f9b260b-5c26-4cd6-a81c-212904371850",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
      "title": "Nbcnews.Com",
      "publisher": "nbcnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/new-kansas-governor-to-require-annual-sexual-harassment-training",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/",
      "title": "Thehill.Com",
      "publisher": "thehill.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/05/14/jeff-colyer-and-a-review-of-kansas-gubernatorial-comeback-bids/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "secondary",
      "url": "https://www.cgscfoundation.org/person-of-the-month-may-2020/",
      "title": "Cgscfoundation.Org",
      "publisher": "cgscfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "secondary",
      "url": "https://jag.org/dipl-team-member/jeff-colyer/",
      "title": "Jag.Org",
      "publisher": "jag.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "primary",
      "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
      "title": "Docs.House.Gov",
      "publisher": "docs.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "secondary",
      "url": "https://www.kscbnews.net/jeff-colyer-m-d-sworn-in-as-47th-governor-of-the-state-of-kansas/",
      "title": "Kscbnews.Net",
      "publisher": "kscbnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "secondary",
      "url": "https://www.nga.org/governor-spouse/ruth-gutierrez-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Jeff_Colyer.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "secondary",
      "url": "https://sanokc.com/provider/dr-colyer/",
      "title": "Sanokc.Com",
      "publisher": "sanokc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "secondary",
      "url": "https://www.renaissanceplasticsurgicalarts.com/",
      "title": "Renaissanceplasticsurgicalarts.Com",
      "publisher": "renaissanceplasticsurgicalarts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-222",
      "tier": "secondary",
      "url": "https://www.healthgrades.com/physician/dr-jeffrey-colyer-xpdcb",
      "title": "Healthgrades.Com",
      "publisher": "healthgrades.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-223",
      "tier": "secondary",
      "url": "https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery",
      "title": "Nkchealth.Org",
      "publisher": "nkchealth.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-224",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-225",
      "tier": "secondary",
      "url": "https://internationalmedicalcorps.org/press-release/lt-governor-to-climb-mt-kilimanjaro-in-support-of-international-medical-corps-humanitarian-relief-efforts/",
      "title": "Internationalmedicalcorps.Org",
      "publisher": "internationalmedicalcorps.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-226",
      "tier": "secondary",
      "url": "https://www.findagrave.com/memorial/142168654/james-daniel-colyer",
      "title": "Findagrave.Com",
      "publisher": "findagrave.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-227",
      "tier": "secondary",
      "url": "https://www.legacy.com/obituaries/kansascity/obituary.aspx?pid=174049747",
      "title": "Legacy.Com",
      "publisher": "legacy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
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
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-230",
      "tier": "secondary",
      "url": "https://heavy.com/news/2018/08/heather-kobach-kris-kobach-wife-kansas/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-231",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Kris_Kobach",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-232",
      "tier": "secondary",
      "url": "https://kriskobach.com/meet-kris/",
      "title": "Kriskobach.Com",
      "publisher": "kriskobach.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-233",
      "tier": "secondary",
      "url": "https://fedsoc.org/bio/kris-kobach-1",
      "title": "Fedsoc.Org",
      "publisher": "fedsoc.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-234",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/about-us/attorney-general-kris-w-kobach",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-235",
      "tier": "secondary",
      "url": "https://republicanags.com/ags/kansas/",
      "title": "Republicanags.Com",
      "publisher": "republicanags.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-236",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kris_Kobach",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-237",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Fish_v._Kobach",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-238",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-239",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/news/federal-judge-rules-favor-aclu-strikes-down-kobachs-illegal-voter-restrictions/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-240",
      "tier": "secondary",
      "url": "https://www.aclu.org/news/voting-rights/courts-ruling-holding-kobach-contempt-well-deserved",
      "title": "Aclu.Org",
      "publisher": "aclu.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-241",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/state/kansas/judge-orders-kobach-to-pay-more-than-26000-for-contempt",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-242",
      "tier": "secondary",
      "url": "https://aclukansas.org/news/kansas-drops-kris-kobachs-appeal-contempt-ruling-aclu-accepts-20000-legal-fees/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-243",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Presidential_Advisory_Commission_on_Election_Integrity",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-244",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/research-reports/disbanded-trumps-voter-fraud-commission",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-245",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/01/03/575524512/trump-dissolves-controversial-election-commission",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-246",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/report-trump-commission-did-not-find-widespread-voter-fraud",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-247",
      "tier": "secondary",
      "url": "https://www.rollingstone.com/politics/politics-features/kris-kobach-donald-trump-voter-fraud-myths-vote-suppression-990300/",
      "title": "Rollingstone.Com",
      "publisher": "rollingstone.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-248",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Interstate_Voter_Registration_Crosscheck_Program",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-249",
      "tier": "secondary",
      "url": "https://www.commoncause.org/democracy-wire/crosscheck-system-shuttered-after-wrongly-tagging-legal-voters/",
      "title": "Commoncause.Org",
      "publisher": "commoncause.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-250",
      "tier": "secondary",
      "url": "https://thefulcrum.us/interstate-crosscheck-program",
      "title": "Thefulcrum.Us",
      "publisher": "thefulcrum.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-251",
      "tier": "secondary",
      "url": "https://www.gregpalast.com/interstate-crosscheck-on-the-verge-of-collapse/",
      "title": "Gregpalast.Com",
      "publisher": "gregpalast.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-252",
      "tier": "secondary",
      "url": "https://truthout.org/articles/kansas-kills-kris-kobachs-national-voter-purge-system/",
      "title": "Truthout.Org",
      "publisher": "truthout.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-253",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/03/24/kobach-kansas-ag-and-legislature-to-blame-for-voting-law-legal-costs-representatives-say/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-254",
      "tier": "secondary",
      "url": "https://lawrencekstimes.com/2022/10/17/weiss-letter-6m-man/",
      "title": "Lawrencekstimes.Com",
      "publisher": "lawrencekstimes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-255",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-08/aclu-says-kobach-owes-52k-in-legal-costs-for-contempt-in-kansas-voting-case",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-256",
      "tier": "secondary",
      "url": "https://democraticgovernors.org/updates/icymi-derek-schmidt-continues-kris-kobachs-legacy-of-costing-taxpayers-millions/",
      "title": "Democraticgovernors.Org",
      "publisher": "democraticgovernors.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-257",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/media-center/news-releases",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-258",
      "tier": "secondary",
      "url": "https://kansasreflector.com/tag/kris-kobach/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-259",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/280/1292",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-260",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/06/17/kansas-ag-kobach-accuses-pfizer-of-misleading-vaccine-marketing-in-lawsuit/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-261",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/27/kansas-governor-attorney-general-both-declare-victory-in-supreme-court-decision-on-executive-power/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-262",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/06/kansas-ag-offers-to-delay-enforcement-of-anti-trans-law-until-march-26-while-judge-weighs-challenge/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-263",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/26/kansas-smoke-shops-sue-state-alleging-illegal-search-and-seizure-during-thc-raids/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-264",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/20/kansas-judge-rebukes-ag-kris-kobach-in-gender-marker-case-issues-symbolic-1-fine/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-265",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/07/20/ag-kobach-to-announce-ongoing-initiative-combating-fentanyl-in-kansas-here-are-the-basics/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-266",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/139/1292",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-267",
      "tier": "primary",
      "url": "https://klrd.gov/2024/12/18/kansas-law-enforcement-fentanyl-response/",
      "title": "Klrd.Gov",
      "publisher": "klrd.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-268",
      "tier": "secondary",
      "url": "https://abovethelaw.com/2023/05/kris-kobach-fires-law-firm-that-donated-to-democrats-clumsily-backpedals-after-realizing-legal-ramifications-of-retaliation/",
      "title": "Abovethelaw.Com",
      "publisher": "abovethelaw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-269",
      "tier": "secondary",
      "url": "https://kriskobach.com/",
      "title": "Kriskobach.Com",
      "publisher": "kriskobach.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-270",
      "tier": "secondary",
      "url": "https://www.tonyskansascity.com/2025/07/did-kansas-ag-kobach-cut-crime.html",
      "title": "Tonyskansascity.Com",
      "publisher": "tonyskansascity.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-271",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/2022-elections/kansas-attorney-general-results/",
      "title": "Nbcnews.Com",
      "publisher": "nbcnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-272",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-11-09/kansas-attorney-general-election-results-2022-kris-kobach-chris-mann",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-273",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/11/11/mann-surrenders-quest-to-overtake-kobach-in-kansas-race-for-attorney-general/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-274",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/11/06/politics/kansas-governor-laura-kelly-democrat/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-275",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-11-07/kelly-beats-kobach-promises-shell-ditch-partisan-ways-as-governor",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-276",
      "tier": "secondary",
      "url": "https://www.propublica.org/article/kris-kobachs-lucrative-trail-of-courtroom-defeats",
      "title": "Propublica.Org",
      "publisher": "propublica.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-277",
      "tier": "secondary",
      "url": "https://www.splcenter.org/resources/reports/when-mr-kobach-comes-town-nativist-laws-and-communities-they-damage/",
      "title": "Splcenter.Org",
      "publisher": "splcenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-278",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Arizona_SB_1070",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-279",
      "tier": "secondary",
      "url": "https://www.cnn.com/2022/12/30/politics/kansas-attorney-general-campaign-finance-violations/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-280",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-281",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/articles/jeffrey-epstein-files-kris-kobach-100825234.html",
      "title": "Yahoo.Com",
      "publisher": "yahoo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-282",
      "tier": "secondary",
      "url": "https://www.propublica.org/article/kris-kobach-voter-fraud-kansas-trial",
      "title": "Propublica.Org",
      "publisher": "propublica.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-283",
      "tier": "secondary",
      "url": "https://www.aclu.org/news/voting-rights/kobach-exposed-trial",
      "title": "Aclu.Org",
      "publisher": "aclu.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-284",
      "tier": "secondary",
      "url": "https://www.lgbtqnation.com/2012/08/top-romney-surrogate-compares-lgbt-people-to-drug-users-polygamists/",
      "title": "Lgbtqnation.Com",
      "publisher": "lgbtqnation.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-285",
      "tier": "secondary",
      "url": "https://glaad.org/gap/kris-kobach/",
      "title": "Glaad.Org",
      "publisher": "glaad.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-286",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/aclu-of-kansas-responds-to-ag-kobachs-power-grab-and-effort-to-change-law-after-losses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-287",
      "tier": "secondary",
      "url": "https://americasvoice.org/blog/kris-kobach/",
      "title": "Americasvoice.Org",
      "publisher": "americasvoice.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-288",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-289",
      "tier": "secondary",
      "url": "https://chrismannforkansas.com/",
      "title": "Chrismannforkansas.Com",
      "publisher": "chrismannforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-290",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-291",
      "tier": "secondary",
      "url": "https://emporianews.com/2026-kansas-attorney-general-race-could-mirror-2022-as-chris-mann-announces-candidacy-against-kris-kobach/",
      "title": "Emporianews.Com",
      "publisher": "emporianews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-292",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-293",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-294",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-295",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-296",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-297",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-298",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-299",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-300",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-301",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-302",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-303",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-304",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-305",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-306",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-307",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-308",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-309",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-310",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-311",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-312",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-313",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-314",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-315",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-316",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-317",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-318",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-319",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-320",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-321",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-322",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-323",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-324",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-325",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-326",
      "tier": "social",
      "url": "https://x.com/ScottSchwabKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-327",
      "tier": "social",
      "url": "https://x.com/KansasSOS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-328",
      "tier": "social",
      "url": "https://www.facebook.com/SchwabforSOS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-329",
      "tier": "social",
      "url": "https://www.instagram.com/kansassos/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-330",
      "tier": "social",
      "url": "https://www.linkedin.com/in/scott-schwab-8306713/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-331",
      "tier": "secondary",
      "url": "https://scottschwab.com/",
      "title": "Scottschwab.Com",
      "publisher": "scottschwab.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-332",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-333",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/34505/scott-schwab",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-334",
      "tier": "secondary",
      "url": "https://www.billtrack50.com/legislatordetail/2823",
      "title": "Billtrack50.Com",
      "publisher": "billtrack50.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-335",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-336",
      "tier": "primary",
      "url": "https://sos.ks.gov/about/schwab-biography.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-337",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-338",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Scott_Schwab",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-339",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Scott_Schwab",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-340",
      "tier": "secondary",
      "url": "https://www.kshs.org/kansapedia/scott-schwab/20461",
      "title": "Kshs.Org",
      "publisher": "kshs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-341",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34505/scott-schwab",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-342",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-343",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-344",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-345",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/scott-schwab-aims-gop-gubernatorial-campaign-at-property-tax-reform/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-346",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/i-will-make-a-full-recovery-scott-schwab-announces-cancer-diagnosis/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-347",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/03/21/ks-secretary-state-announces-cancer-diagnosis/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-348",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-349",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/22/kansas-appeals-court-says-secretary-of-state-violated-open-records-law-by-altering-computer-system/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-350",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/08/01/kansas-secretary-of-state-refuses-to-provide-provisional-ballot-records-despite-court-ruling/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-351",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/cases/loud-light-hammet-v-schwab-2020/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-352",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2020/11/09/as-other-republicans-lied-about-voter-fraud-kansas-secretary-of-state-was-a-voice-of-sanity/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-353",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/kansas-secretary-of-state-defeats-election-conspiracy-promoter",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-354",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/26/schwabs-campaign-rebuffs-late-campaign-criticism-from-kansas-gop-rival-brown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-355",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/09/15/kansas-secretary-of-state-scott-schwab-works-to-build-trust-in-elections-in-the-face-of-skepticism/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-356",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/this-is-unacceptable-top-kansas-election-official-demands-answers-from-usps-after-mail-errors-in-primary-election/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-357",
      "tier": "secondary",
      "url": "https://www.kwch.com/2024/09/10/kansas-secretary-state-sends-letter-usps-over-mail-in-ballot-problems/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-358",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-10-26/president-trump-kansas-secretary-of-state-scott-schwab",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-359",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/31/secretary-of-state-scott-schwab-welcomes-federal-assist-with-cleansing-voter-list/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-360",
      "tier": "secondary",
      "url": "https://abcnews.go.com/US/family-boy-killed-waterslide-speaks-hurting/story?id=45445546",
      "title": "Abcnews.Go.Com",
      "publisher": "abcnews.go.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-361",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/scott-schwab-speaks-as-criminal-cases-loom-dad-talks-of-journey-forward-after-tragedy-on-verruckt/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-362",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/family-friends-and-community-honor-10-year-old-caleb-schwab",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-363",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/caleb-schwabs-family-to-recieve-20-million-in-settlement",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-364",
      "tier": "secondary",
      "url": "https://bflawfirm.com/schlitterbahn-wrongful-death-claims-settle-for-19732125-00/",
      "title": "Bflawfirm.Com",
      "publisher": "bflawfirm.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-365",
      "tier": "secondary",
      "url": "https://www.npr.org/2019/02/25/697647804/judge-dismisses-murder-charges-over-boys-death-on-kansas-waterslide",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-366",
      "tier": "secondary",
      "url": "https://time.com/4444447/caleb-schwab-verruckt-water-slide-death/",
      "title": "Time.Com",
      "publisher": "time.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-367",
      "tier": "secondary",
      "url": "https://www.penwellgabelkc.com/obituaries/caleb-thomas-schwab",
      "title": "Penwellgabelkc.Com",
      "publisher": "penwellgabelkc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-368",
      "tier": "secondary",
      "url": "https://www.lwv.org/legal-center/league-women-voters-kansas-v-schwab",
      "title": "Lwv.Org",
      "publisher": "lwv.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-369",
      "tier": "secondary",
      "url": "https://www.democracydocket.com/cases/kansas-voter-suppression-laws/",
      "title": "Democracydocket.Com",
      "publisher": "democracydocket.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-370",
      "tier": "secondary",
      "url": "https://law.justia.com/cases/kansas/supreme-court/2023/124378.html",
      "title": "Law.Justia.Com",
      "publisher": "law.justia.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-371",
      "tier": "secondary",
      "url": "https://vickischmidt.org/",
      "title": "Vickischmidt.Org",
      "publisher": "vickischmidt.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-372",
      "tier": "social",
      "url": "https://www.facebook.com/VickiSchmidtKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-373",
      "tier": "social",
      "url": "https://x.com/VickiSchmidtKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-374",
      "tier": "social",
      "url": "https://www.linkedin.com/in/vicki-schmidt-50b11810/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-375",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Vicki_Schmidt",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-376",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Vicki_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-377",
      "tier": "primary",
      "url": "https://insurance.kansas.gov/about-us/",
      "title": "Insurance.Kansas.Gov",
      "publisher": "insurance.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-378",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34584/vicki-schmidt",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-379",
      "tier": "secondary",
      "url": "https://content.naic.org/node/8831",
      "title": "Content.Naic.Org",
      "publisher": "content.naic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-380",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-381",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-382",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-03-17/kansas-bill-to-expand-free-breast-cancer-screening-likely-killed-by-republican-lawmakers",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-383",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2026/03/16/breast-cancer-screening-bill-killed-by-kansas-gop/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-384",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/02/kansas-insurance-commissioner-backs-bill-eliminate-breast-cancer-screening-costs/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-385",
      "tier": "secondary",
      "url": "https://www.kwch.com/2023/10/17/its-humbling-ks-insurance-commissioner-discusses-breast-cancer-journey/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-386",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-insurance-commissioner-has-breast-cancer-expects-full-recovery/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-387",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/state-government/2023/jun/14/kansas-insurance-commissioner-says-shes-been-diagnosed-with-breast-cancer/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-388",
      "tier": "secondary",
      "url": "https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/",
      "title": "Kflpac.Org",
      "publisher": "kflpac.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-389",
      "tier": "secondary",
      "url": "https://www.insurancejournal.com/news/midwest/2025/12/03/849821.htm",
      "title": "Insurancejournal.Com",
      "publisher": "insurancejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-390",
      "tier": "secondary",
      "url": "https://www.wibw.com/2024/06/21/ks-insurance-commissioner-touts-new-law-protect-seniors-scams/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-391",
      "tier": "secondary",
      "url": "https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt",
      "title": "Tkmagazine.Com",
      "publisher": "tkmagazine.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-392",
      "tier": "secondary",
      "url": "https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor",
      "title": "News.Ku.Edu",
      "publisher": "news.ku.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-393",
      "tier": "secondary",
      "url": "https://mittelpolitan.substack.com/p/insight-kansas-column-for-july-vicki",
      "title": "Mittelpolitan.Substack.Com",
      "publisher": "mittelpolitan.substack.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-394",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/14/kansas-young-republicans-shut-down-after-politico-report-on-racist-violent-encrypted-chat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-395",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-396",
      "tier": "secondary",
      "url": "https://www.md.com/doctor/michael-j-schmidt-md",
      "title": "Md.Com",
      "publisher": "md.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-397",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-398",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2022_Kansas_Insurance_Commissioner_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-399",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/rollcall/SB95/id/475027",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-400",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2016/b2015_16/measures/documents/sb95_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-401",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/sb409_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-402",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2014/b2013_14/measures/documents/summary_hb_2744_2014.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-403",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/get-involved/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-404",
      "tier": "secondary",
      "url": "https://www.kctv5.com/2025/05/14/former-kansas-governor-jeff-colyer-announces-he-will-run-again-2026/",
      "title": "Kctv5.Com",
      "publisher": "kctv5.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-405",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-406",
      "tier": "primary",
      "url": "https://kpdc.kansas.gov/campaign-finance/",
      "title": "Kpdc.Kansas.Gov",
      "publisher": "kpdc.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-407",
      "tier": "secondary",
      "url": "https://kssos.org/elections/cfr_viewer/cfr_examiner_entry.aspx",
      "title": "Kssos.Org",
      "publisher": "kssos.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-408",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/publications/kansas-attorney-general-kris-kobach/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-409",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/uncovering-kris-kobachs-anti-voting-history",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-410",
      "tier": "secondary",
      "url": "https://www.kcur.org/tags/kris-kobach",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-411",
      "tier": "secondary",
      "url": "https://lawrencekstimes.com/",
      "title": "Lawrencekstimes.Com",
      "publisher": "lawrencekstimes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-412",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/officeholders/kris-kobach/summary",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-413",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-414",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jeff Colyer's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/announcements.html",
      "title": "X / Jeffcolyer",
      "publisher": "Jeffcolyer",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Key visible signals: volunteer/job/fundraiser/intern/event request form and linked X, Instagram, and Facebook accounts. 4. jeffcolyer.com/announcements.html, captured 2026-05-11. T"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://mobile.twstalker.com/DrJeffColyer",
      "title": "mobile.twstalker.com / Mobile.Twstalker",
      "publisher": "Mobile.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Religious Liberty.",
        "Engagement: 24 replies, 2 reposts, 69 likes, 2K views, 0 quotes. Topic: military / patriotism. (source) 8. 2 weeks ago -- Short faith-coded reply, \"Big amen.\" Engagement: 4 replies",
        "Observed public online activity mapped to Immigration / Border.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
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
