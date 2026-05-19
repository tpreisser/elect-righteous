/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const TOBY_DOUGHERTY_V2: CandidateFullV2 = {
  "slug": "toby-dougherty",
  "name": "Toby Dougherty",
  "party": "NP",
  "position": "Hays City Manager",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "City Manager",
  "campaignWebsite": "https://www.haysusa.com/directory.aspx?EID=6",
  "issues": [
    {
      "id": "i-water-supply-1",
      "title": "Water Supply",
      "stated": {
        "text": "The R9 Ranch water pipeline is the defining project of Dougherty's tenure. He has repeatedly argued that Hays must think in generational terms about water, comparing the city's challenge to Las Vegas, Tucson, and Phoenix.",
        "sourceIds": [
          "s-53",
          "s-56",
          "s-114",
          "s-116",
          "s-117",
          "s-118"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "The highest visible public-attention signal is issue-based rather than social: the R9 Ranch water dispute generated repeated local, regional, and state coverage, including Hays Post, KWCH, Kansas Reflector/Kansas News Service, HPPR/KLC Journal, and public meeting/video references.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-71"
          ],
          "mappedToIssueId": "i-water-supply-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2020 water conservation: In Kansas News Service/Hays Post coverage, Dougherty said Hays borrowed conservation ideas from western cities and Utah, including landscaping regulations, cash-for-grass, demonstration gardens, wastewater reuse, and customer conservation tools. Source: Hays Post/Kansas News Service.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-125"
          ],
          "mappedToIssueId": "i-water-supply-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2023 R9 delay/costs: Dougherty told commissioners the R9 process had been slowed by appeals, said Hays and Russell were moving forward, and explained that converted irrigation rights are reduced to protect neighboring water rights and the aquifer. Source: Hays Post, Jan. 16, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-121"
          ],
          "mappedToIssueId": "i-water-supply-1"
        }
      ]
    },
    {
      "id": "i-water-conservation-2",
      "title": "Water Conservation",
      "stated": {
        "text": "Has publicly defended aggressive conservation measures and looked to western cities for management ideas.",
        "sourceIds": [
          "s-53",
          "s-56",
          "s-116",
          "s-117",
          "s-118",
          "s-119"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "KWCH",
          "observation": "2025 Build Kansas grant: Dougherty told KWCH the R9 project mattered because Hays and Russell lacked adequate local water supplies and said grant money would buy down the total project cost and help pay it off faster. Source: KWCH, Apr. 3, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-123"
          ],
          "mappedToIssueId": "i-water-conservation-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "hppr.org",
          "observation": "2026 R9 survival framing: HPPR/KLC Journal quoted Dougherty saying the project is hugely important, that Hays and Russell are frustrated by opposition, that the project is existential to the cities' survival, and that they are following rules and going beyond them. Source: HPPR/KLC Journal, May 4, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-conservation-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "I searched Toby Dougherty with Hays, Hays City Manager, City Manager's Office, haysusa, Hays Post, KAYS, Post Podcast, Forward Ever, Strong Towns, R9 Ranch, water transfer, WaterPACK, Edwards County, Build Kansas grant, budget, revenue neutral, housing, travel plaza, city commission, agenda packets, minutes, YouTube, Facebook, LinkedIn, X/Twitter, Instagram, and 2026. I prioritized official/city sources and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-71"
          ],
          "mappedToIssueId": "i-water-conservation-2"
        }
      ]
    },
    {
      "id": "i-budgeting-3",
      "title": "Budgeting",
      "stated": {
        "text": "Advocates a \"maintenance-first\" approach to city spending. He described the 2025 budget as based on \"a slightly cautionary approach\" and has focused on keeping infrastructure funded before expanding services.",
        "sourceIds": [
          "s-45",
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
          "platform": "Hays Post",
          "observation": "On budgeting, Dougherty's public style is cautious and maintenance-first. He defended exceeding the revenue-neutral rate in 2024 by saying city costs rise over time and that static tax collections are not sustainable. In 2025, he described the 2026 budget as a cautious maintenance budget shaped by inflation, federal grant programs drying up, vehicle costs, tariff uncertainty, and recession risk. His line is not...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-budgeting-3"
        }
      ]
    },
    {
      "id": "i-infrastructure-4",
      "title": "Infrastructure",
      "stated": {
        "text": "Has been the main city official explaining grant strategy and large projects, including securing a $1.5 million Build Kansas grant for water planning and overseeing airport and utility upgrades. As an appointed city manager rather than an elected candidate, Dougherty does not take positions on partisan or social policy issues. His public record is entirely focused on city administration, infrastructure, and long-range planning.",
        "sourceIds": [
          "s-123",
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
          "platform": "Hays Post",
          "observation": "That same operating philosophy shows up in infrastructure comments. In Strong Towns material, Hays is presented as a city using data to prioritize sewer maintenance, street improvements, transportation changes, civic boards, and downtown reinvestment. At a 2025 retreat, Dougherty tied future growth to concrete costs: an eastside fire station would mean more capital, equipment, and staffing, while refuse...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-infrastructure-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The visible attention around Dougherty is issue-driven, not social. No reliable social engagement metrics were found for a Dougherty-controlled account. The strongest public-attention signal is the repeated coverage of R9 Ranch and Hays' water future across local and regional outlets, including Hays Post, KWCH, Kansas Reflector/Kansas News Service, HPPR/KLC Journal, Strong Towns, and public meeting/video...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-123"
          ],
          "mappedToIssueId": "i-infrastructure-4"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "I reviewed public sources visible through May 11, 2026, including official City of Hays pages, the City Commission agenda/video infrastructure, Hays Post reporting and podcast listings, regional water reporting, KWCH coverage, Strong Towns materials, and targeted searches for major social platforms and campaign-style pages. Login-walled, 403-blocked, script-dependent, generic people-search, or otherwise...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-71"
          ],
          "mappedToIssueId": "i-infrastructure-4"
        }
      ]
    }
  ],
  "whoTheyAre": "Toby Dougherty is the city manager of Hays, an appointed administrator who has been the city's top staff official since 2007. He previously served as assistant city manager after arriving in Hays in 2005, which means he has been the constant figure in city government while mayors and commissioners changed around him. His public identity is administrative, not electoral, but his influence over long-range planning, budgeting, and infrastructure is substantial.\n\nDougherty grew up in Lucas, Kansas, graduated from the University of Kansas in political science, and spent time in the transportation industry before moving into municipal government. Before Hays, he served as city administrator in Gallatin, Missouri. In local coverage, he is the staff official most closely associated with Hays' long-term water strategy, capital planning, and the practical mechanics of city government.",
  "recordSummary": "Dougherty's record is defined above all by water policy. He has been one of the main public defenders of the R9 Ranch Water Pipeline, the city's long-running attempt to secure a larger and more dependable water supply. That work has put him at the center of litigation, state-level hearings, conservation rules, and repeated public explanations about why Hays sees water as a generational problem rather than a short-term inconvenience.\n\nHe has also become the public face of Hays' conservation strategy. In interviews over several years, he has pointed to western cities such as Las Vegas, Tucson, and Phoenix as examples of how dry communities survive by treating water use as a long-term management problem. More recently, he has been the official explaining the Build Kansas grant for water planning, budget caution, maintenance schedules, and infrastructure projects ranging from meters to airport upgrades.",
  "ownWordsNarrative": "Toby Dougherty's public voice is administrative, not electoral. He is the appointed Hays city manager, and the official city profile says he has held that role since Aug. 1, 2007, after serving as assistant city manager since March 2005. The richest public record is not a campaign feed; it is city pages, commission agendas and meeting recaps, Hays Post reporting and podcasts, regional water coverage, Strong Towns interviews/submissions, and official city announcements. Source: [City of Hays staff profile](https://www.haysusa.com/directory.aspx?EID=6).\n\nThe dominant theme is water. Dougherty consistently frames the R9 Ranch project as a long-term survival issue for Hays and Russell, not a discretionary expansion. In 2025, he and Mayor Sandy Jacobs described R9 as the city's top focus, and Dougherty walked through the legal and panel steps still blocking the transfer. In 2026, after pipeline and wellfield designs were complete, he said the city was waiting for a Supreme Court ruling and hoped a favorable decision would end that challenge. Sources: [Hays Post, Jan. 19, 2025](https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c), [Hays Post, Jan. 24, 2026](https://hayspost.com/posts/453a68e6-0628-44ef-bb99-a9d4831ab6fa).\n\nHis R9 language is also defensive and procedural. He argues that Hays and Russell have followed the state process, that irrigation-to-municipal water-right conversions include reductions to protect nearby users and the aquifer, and that the cities voluntarily reduced their requested rights further. In the May 2026 HPPR/KLC Journal account, he described the project as existential for Hays and Russell and said the cities were following the rules and going beyond them. Sources: [Hays Post, Jan. 16, 2023](https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e), [HPPR/KLC Journal, May 4, 2026](https://www.hppr.org/hppr-news/2026-05-04/long-battle-over-west-kansas-water-nears-end-the-stakes-survival).\n\nThe conservation message is just as consistent. In Kansas News Service/Hays Post coverage, Dougherty said Hays had looked to Las Vegas, Tucson, Phoenix, and Utah for water-management ideas. The city points to cash-for-grass, drought-tolerant demonstration gardens, effluent reuse, conservation rebates, inclining water rates, customer outreach, and watering restrictions as part of that public identity. Source: [Hays Post/Kansas News Service](https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c).\n\nOn budgeting, Dougherty's public style is cautious and maintenance-first. He defended exceeding the revenue-neutral rate in 2024 by saying city costs rise over time and that static tax collections are not sustainable. In 2025, he described the 2026 budget as a cautious maintenance budget shaped by inflation, federal grant programs drying up, vehicle costs, tariff uncertainty, and recession risk. His line is not anti-spending so much as anti-overextension: take care of what exists before adding services that might later have to be cut. Sources: [Hays Post, Sept. 14, 2024](https://hayspost.com/posts/ab25d617-c481-467e-92ce-1a3ba104f7ac), [Hays Post, Jun. 22, 2025](https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc).\n\nThat same operating philosophy shows up in infrastructure comments. In Strong Towns material, Hays is presented as a city using data to prioritize sewer maintenance, street improvements, transportation changes, civic boards, and downtown reinvestment. At a 2025 retreat, Dougherty tied future growth to concrete costs: an eastside fire station would mean more capital, equipment, and staffing, while refuse collection changes might reduce truck wear and help avoid a rate increase. Sources: [Strong Towns archive](https://archive.strongtowns.org/journal/2016/3/11/sandusky-hays), [Hays Post, Mar. 6, 2025](https://hayspost.com/posts/909306ea-6223-4960-bd5f-99c19bb83817).\n\nDougherty also publicly emphasizes communication and professional administration. In 2025, he announced a new city public relations manager role as part of an effort to give residents clearer information about city initiatives, activities, and services. Other official city releases attribute staff promotions and appointments to him, reinforcing a management-centered public profile rather than a partisan or campaign-centered one. Source: [Hays Post, Jan. 23, 2025](https://hayspost.com/posts/f848b341-7c85-4e1f-ad84-3819123827c7).\n\nThe visible attention around Dougherty is issue-driven, not social. No reliable social engagement metrics were found for a Dougherty-controlled account. The strongest public-attention signal is the repeated coverage of R9 Ranch and Hays' water future across local and regional outlets, including Hays Post, KWCH, Kansas Reflector/Kansas News Service, HPPR/KLC Journal, Strong Towns, and public meeting/video infrastructure. Source examples: [KWCH, Apr. 3, 2025](https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/), [HPPR/KLC Journal, May 4, 2026](https://www.hppr.org/hppr-news/2026-05-04/long-battle-over-west-kansas-water-nears-end-the-stakes-survival).\n\nVisible absences matter here. I found no verified campaign website, no campaign platform, no campaign finance/donation page, and no clearly attributable public Facebook, X/Twitter, Instagram, Threads, Bluesky, TikTok, Substack, or personal YouTube account. That absence fits his role: he is appointed by the City Commission and speaks primarily through city administration, public meetings, interviews, and official announcements, not voter-facing campaign channels.\n\nMethodology: I reviewed public sources visible through May 11, 2026, including official City of Hays pages, the City Commission agenda/video infrastructure, Hays Post reporting and podcast listings, regional water reporting, KWCH coverage, Strong Towns materials, and targeted searches for major social platforms and campaign-style pages. Login-walled, 403-blocked, script-dependent, generic people-search, or otherwise inaccessible social content was not treated as verified.\n\nDisclaimer: This summary reflects accessible public, administrator-attributed or city-controlled messaging. It is not a complete transcript of every city meeting, podcast, private account, deleted post, or login-only social-media item.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. The public record around Dougherty is overwhelmingly professional and administrative, with very little reporting on his personal or religious life.",
  "campaignFinance": {
    "totalRaised": "Not applicable",
    "narrative": "No campaign finance data was available online. Dougherty is an appointed city manager rather than an elected candidate, and no public political finance filing is associated with him.",
    "donors": [
      {
        "name": "Campaign finance",
        "amount": "Not applicable"
      }
    ],
    "reportingPeriod": "not applicable",
    "source": "Reviewed public records"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: City of Hays staff profile, City Commission agenda/video infrastructure, Hays Post reporting and podcasts, Regional water reporting, KWCH, Strong Towns, Facebook, X / Twitter, Instagram, Threads, Bluesky, TikTok, Substack, YouTube, Public search. Harvest range: 2007-08-01 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://www.hfehays.org/o/hfe/article/923439",
      "title": "Hfehays.Org",
      "publisher": "hfehays.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://www.ihm-church.com/",
      "title": "Ihm-church.Com",
      "publisher": "ihm-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile.",
        "Observed public online activity mapped to Infrastructure."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.kansassheriffs.org/county_map/county/914",
      "title": "Kansassheriffs.Org",
      "publisher": "kansassheriffs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
      "title": "Haysmemorial.Com",
      "publisher": "haysmemorial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
      "title": "Fhsuguides.Fhsu.Edu",
      "publisher": "fhsuguides.fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Tracey_Mann",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://ksopen.org/mann-2",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "primary",
      "url": "https://mann.house.gov/about",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://www.au.org/the-latest/church-and-state/articles/unhealthy-breakfast-how-the-national-prayer-breakfast-a-relic-from-the-1950s-era-of-civil-religion-evolved-into-a-florid-display-of-christian-nationalism/",
      "title": "Au.Org",
      "publisher": "au.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/meet-doc/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://ksopen.org/marshall",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
      "title": "Kansasdisciples.Org",
      "publisher": "kansasdisciples.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "Barbwasinger.Com",
      "publisher": "barbwasinger.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://whatreligionisinfo.com/kobach-religion/",
      "title": "Whatreligionisinfo.Com",
      "publisher": "whatreligionisinfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://msclawrence.com/",
      "title": "Msclawrence.Com",
      "publisher": "msclawrence.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
      "title": "Csgmidwest.Org",
      "publisher": "csgmidwest.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "social",
      "url": "https://www.linkedin.com/in/mason-ruder-cpm-1aa36455",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "social",
      "url": "https://x.com/agentruder",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0187e996-15de-4377-95c2-cc428ed058e5",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "http://tigermedianet.com/?p=93385",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://www.hdnews.net/2022/12/01/tmp-marian-alumnus-named-advancement-director-for-hays-catholic-schools/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e141bbcd-d4c5-4a9d-83bc-996979742cb2",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/095697ac-eb4b-4005-867a-bb049ec8c10f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://clustrmaps.com/person/Ruder-cofgeu",
      "title": "Clustrmaps.Com",
      "publisher": "clustrmaps.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "social",
      "url": "https://www.facebook.com/alaina.cunningham.9/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "social",
      "url": "https://www.linkedin.com/in/alaina-cunningham-4436ba1/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://www.haysmed.com/the-center/alaina-cunningham/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "social",
      "url": "https://www.facebook.com/musilcomish/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "social",
      "url": "https://www.linkedin.com/in/shaun-musil-26539490/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/433c0ff0-f645-4a6a-a4be-6f8549de14f9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://hutchpost.com/posts/f240fb89-d1f0-4373-ac4b-605d5e5f9c32",
      "title": "Hutchpost.Com",
      "publisher": "hutchpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/efb80be7-69e2-4461-8e69-d7f86b59e482",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://www.fhsu.edu/news/2024/08/fhsu-announces-2024-tiger-nation-partner-of-the-year",
      "title": "Fhsu.Edu",
      "publisher": "fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://www.nex-tech.com/business/shaun/",
      "title": "Nex-tech.Com",
      "publisher": "nex-tech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://goodparty.org/candidate/shaun-musil/hays-city-commission",
      "title": "Goodparty.Org",
      "publisher": "goodparty.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1a241ad5-d176-4494-9e9a-aa4a286f3bf4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://www.ksl.com/article/50001567/city-in-kansas-requiring-masks-to-guard-safe-reputation",
      "title": "Ksl.Com",
      "publisher": "ksl.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://www.hdnews.net/reorganization-of-commission-names-jacobs-as-mayor-ruder-as-vice-mayor/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9a118e53-0b32-4cc1-b6c5-44a476f7f7b9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e98f695eb7f17053602be3c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7dd5d9eb-456f-47d7-bde0-70d6a92d504a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
      "title": "Ileeta.Org",
      "publisher": "ileeta.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "social",
      "url": "https://www.facebook.com/people/DXI-Training-Solutions-LLC/61553945955697/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1f1932b8-516a-420d-841e-df378c20a8f2",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a6608a1f-7d44-4212-85de-f8b22f600687",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/39c5ed3b-dd7b-4248-a71f-a7ca06694a9e",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "primary",
      "url": "https://www.haysusa.com/directory.aspx?eid=6",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2015/10/7/toby-dougherty-city-manager-of-haysks",
      "title": "Strongtowns.Org",
      "publisher": "strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2016/5/4/the-hays-document",
      "title": "Strongtowns.Org",
      "publisher": "strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://municipalwaterleader.com/guaranteeing-the-water-supply-of-hays-kansas-through-conservation-reuse-and-new-supplies/",
      "title": "Municipalwaterleader.Com",
      "publisher": "municipalwaterleader.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://issuu.com/waterstrategies/docs/mwl_october_2020/s/11017849",
      "title": "Issuu.Com",
      "publisher": "issuu.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://www.eenews.net/articles/farm-vs-city-kansas-water-law-gets-a-major-stress-test/",
      "title": "Eenews.Net",
      "publisher": "eenews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/12/15/kansas-supreme-court-examines-roiling-water-dispute-between-crop-irrigators-and-hays-russell/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile.",
        "Observed public online activity mapped to Water Conservation.",
        "Observed public online activity mapped to Water Supply."
      ]
    },
    {
      "id": "s-122",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70979342-77f8-4cc8-8370-86ef215b4085",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile.",
        "Observed public online activity mapped to Water Conservation.",
        "Observed public online activity mapped to Infrastructure."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8b4554cd-79b4-4076-8a9c-287892f8e9dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile.",
        "Observed public online activity mapped to Water Supply."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5d942a2c-9baf-4ca9-aa82-92bbd76d37c7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c6a0184d-7e96-4157-ba49-d5e49a49e54c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://www.zoominfo.com/p/Toby-Dougherty/381299961",
      "title": "Zoominfo.Com",
      "publisher": "zoominfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "secondary",
      "url": "https://hartforsenate.com/",
      "title": "Hartforsenate.Com",
      "publisher": "hartforsenate.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67202-ks-jason-hart-1922169.html",
      "title": "Avvo.Com",
      "publisher": "avvo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "primary",
      "url": "https://www.justice.gov/usao-ks/pr/kansas-man-sentenced-480-months-production-child-porn",
      "title": "Justice.Gov",
      "publisher": "justice.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "social",
      "url": "https://www.facebook.com/patrickforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/about/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Patrick_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Patrick_Schmidt_(politician",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/patrick-schmidt",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/05/kansas-state-senator-files-us-senate/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/people/patrick-schmidt/id/26167",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "secondary",
      "url": "https://www.christydavisforkansas.com/",
      "title": "Christydavisforkansas.Com",
      "publisher": "christydavisforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "social",
      "url": "https://www.facebook.com/christy.davis.710/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "social",
      "url": "https://www.linkedin.com/in/christy-davis-19286b224/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Christy_Davis",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "secondary",
      "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
      "title": "Emporiagazette.Com",
      "publisher": "emporiagazette.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "primary",
      "url": "https://www.rd.usda.gov/newsroom/news-release/usda-announces-rural-development-state-director-kansas",
      "title": "Rd.Usda.Gov",
      "publisher": "rd.usda.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192415/christy-cauble-davis",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "secondary",
      "url": "https://americancoinop.com/articles/clean-history-laundromat-anchors-kansas-town",
      "title": "Americancoinop.Com",
      "publisher": "americancoinop.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "secondary",
      "url": "https://sandyforkansas.com/",
      "title": "Sandyforkansas.Com",
      "publisher": "sandyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "social",
      "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "social",
      "url": "https://x.com/speumann",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://www.threads.com/@speumann",
      "title": "Threads.Com",
      "publisher": "threads.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Sandy_Spidel_Neumann",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00262/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2026/01/07/2026-u-s-senate-candidates-kansas-277190/sandy-spidel-neumann/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://erikforkansas.com/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "social",
      "url": "https://www.facebook.com/erik.murray.820582/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "social",
      "url": "https://www.instagram.com/erik4ks/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "social",
      "url": "https://www.linkedin.com/in/erikmurraysior",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
      "title": "Freebeacon.Com",
      "publisher": "freebeacon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://afrotech.com/erik-murray-oakland-impact-group",
      "title": "Afrotech.Com",
      "publisher": "afrotech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://erikforkansas.com/meet-erik/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Erik_Murray",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://www.genglobal.org/user/erik",
      "title": "Genglobal.Org",
      "publisher": "genglobal.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://lenspoliticalnotes.com/lens-political-note-792-erik-murray-kansas-us-senate/",
      "title": "Lenspoliticalnotes.Com",
      "publisher": "lenspoliticalnotes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/",
      "title": "Anneforkansas.Com",
      "publisher": "anneforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "social",
      "url": "https://www.linkedin.com/in/anne-lea-parelkar-83095659/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/about",
      "title": "Anneforkansas.Com",
      "publisher": "anneforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "secondary",
      "url": "https://immirail.com/profile-anne-lea-parelkar",
      "title": "Immirail.Com",
      "publisher": "immirail.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "secondary",
      "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/",
      "title": "1350kman.Com",
      "publisher": "1350kman.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "secondary",
      "url": "https://replacejerrymoran.org/",
      "title": "Replacejerrymoran.Org",
      "publisher": "replacejerrymoran.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "secondary",
      "url": "https://mike4kansas.org/",
      "title": "Mike4kansas.Org",
      "publisher": "mike4kansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "secondary",
      "url": "https://mikeforkansas.net/",
      "title": "Mikeforkansas.Net",
      "publisher": "mikeforkansas.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://mikeforkansas.my.canva.site/",
      "title": "Mikeforkansas.My.Canva.Site",
      "publisher": "mikeforkansas.my.canva.site",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "social",
      "url": "https://www.facebook.com/michael.soetaert1/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/michael-soetaert",
      "title": "Secure.Actblue.Com",
      "publisher": "secure.actblue.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Michael_Soetaert",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192430/michael-soetaert",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "secondary",
      "url": "https://www.cityofwellington.net/newsview.aspx?nid=6940",
      "title": "Cityofwellington.Net",
      "publisher": "cityofwellington.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "secondary",
      "url": "https://www.sumnernewscow.com/wellington-city-council-accepts-michael-mike-soetaerts-resignation-at-tuesdays-meeting/",
      "title": "Sumnernewscow.Com",
      "publisher": "sumnernewscow.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "secondary",
      "url": "https://www.kake.com/kansas-senate-candidate-shows-support-for-respect-for-marriage-act/article_7d6721ed-79ed-52f2-8765-2e521ef88df5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://www.laporte4ksgov.com/",
      "title": "Laporte4ksgov.Com",
      "publisher": "laporte4ksgov.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS03258/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Chase_LaPorte",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-222",
      "tier": "secondary",
      "url": "https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions",
      "title": "Opencampaign.Com",
      "publisher": "opencampaign.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-223",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/alaina-cunningham/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-224",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
      "title": "Avvo.Com",
      "publisher": "avvo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-225",
      "tier": "secondary",
      "url": "https://podcast.strongtowns.org/e/toby-dougherty-1535377231/",
      "title": "Podcast.Strongtowns.Org",
      "publisher": "podcast.strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-226",
      "tier": "secondary",
      "url": "https://openpayrolls.com/rank/highest-paid-employees/hays-ks",
      "title": "Openpayrolls.Com",
      "publisher": "openpayrolls.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-227",
      "tier": "secondary",
      "url": "https://voterly.com/politicians/DmRJRnnSKN/neal-younger",
      "title": "Voterly.Com",
      "publisher": "voterly.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-228",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-229",
      "tier": "social",
      "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-230",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-231",
      "tier": "secondary",
      "url": "https://www.manta.com/c/mhxwpdc/l5-farms-inc",
      "title": "Manta.Com",
      "publisher": "manta.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-232",
      "tier": "social",
      "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-233",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-234",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-235",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-236",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3a3f06a1-6b07-45c6-bf3c-8b76f4d564d7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-237",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/17997478-c7b3-4601-a433-c8f9623b09da",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-238",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-239",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1ff3108c-562d-421d-9200-395f040c2103",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-240",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5258642a-dc46-4a52-9423-0fc5b6468bcc",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-241",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/292e6398-09de-4575-8f00-59772bbb0c0c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-242",
      "tier": "primary",
      "url": "https://www.haysusa.com/Directory.aspx?DID=6",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-243",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/92c6bbf2-25be-47de-ad1c-a2e44e17e420",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-244",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/84fcc453-7b77-49a8-a26e-b9011a8d1597",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-245",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/227c6d39-b8a1-4133-9b9a-8843072fe5a2",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Toby Dougherty's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.hppr.org/hppr-news/2026-05-04/long-battle-over-west-kansas-water-nears-end-the-stakes-survival",
      "title": "hppr.org / Hppr",
      "publisher": "Hppr",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water Conservation.",
        "2026 R9 survival framing: HPPR/KLC Journal quoted Dougherty saying the project is hugely important, that Hays and Russell are frustrated by opposition, that the project is existent"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ab25d617-c481-467e-92ce-1a3ba104f7ac",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Budgeting.",
        "On budgeting, Dougherty's public style is cautious and maintenance-first. He defended exceeding the revenue-neutral rate in 2024 by saying city costs rise over time and that static"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://archive.strongtowns.org/journal/2016/3/11/sandusky-hays",
      "title": "Hays Post / Archive.Strongtowns",
      "publisher": "Archive.Strongtowns",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Infrastructure.",
        "That same operating philosophy shows up in infrastructure comments. In Strong Towns material, Hays is presented as a city using data to prioritize sewer maintenance, street improve"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(TOBY_DOUGHERTY_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[toby-dougherty.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
