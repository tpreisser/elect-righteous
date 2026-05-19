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
          "s-1",
          "s-2",
          "s-3",
          "s-4",
          "s-5",
          "s-6"
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
            "s-1"
          ],
          "mappedToIssueId": "i-water-supply-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2020 water conservation: In Kansas News Service/Hays Post coverage, Dougherty said Hays borrowed conservation ideas from western cities and Utah, including landscaping regulations, cash-for-grass, demonstration gardens, wastewater reuse, and customer conservation tools. Source: Hays Post/Kansas News Service.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-supply-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2023 R9 delay/costs: Dougherty told commissioners the R9 process had been slowed by appeals, said Hays and Russell were moving forward, and explained that converted irrigation rights are reduced to protect neighboring water rights and the aquifer. Source: Hays Post, Jan. 16, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
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
          "platform": "KWCH",
          "observation": "2025 Build Kansas grant: Dougherty told KWCH the R9 project mattered because Hays and Russell lacked adequate local water supplies and said grant money would buy down the total project cost and help pay it off faster. Source: KWCH, Apr. 3, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-water-conservation-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "hppr.org",
          "observation": "2026 R9 survival framing: HPPR/KLC Journal quoted Dougherty saying the project is hugely important, that Hays and Russell are frustrated by opposition, that the project is existential to the cities' survival, and that they are following rules and going beyond them. Source: HPPR/KLC Journal, May 4, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-water-conservation-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "I searched Toby Dougherty with Hays, Hays City Manager, City Manager's Office, haysusa, Hays Post, KAYS, Post Podcast, Forward Ever, Strong Towns, R9 Ranch, water transfer, WaterPACK, Edwards County, Build Kansas grant, budget, revenue neutral, housing, travel plaza, city commission, agenda packets, minutes, YouTube, Facebook, LinkedIn, X/Twitter, Instagram, and 2026. I prioritized official/city sources and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
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
            "s-social-crossref-5"
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
            "s-3"
          ],
          "mappedToIssueId": "i-infrastructure-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The visible attention around Dougherty is issue-driven, not social. No reliable social engagement metrics were found for a Dougherty-controlled account. The strongest public-attention signal is the repeated coverage of R9 Ranch and Hays' water future across local and regional outlets, including Hays Post, KWCH, Kansas Reflector/Kansas News Service, HPPR/KLC Journal, Strong Towns, and public meeting/video...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-infrastructure-4"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "I reviewed public sources visible through May 11, 2026, including official City of Hays pages, the City Commission agenda/video infrastructure, Hays Post reporting and podcast listings, regional water reporting, KWCH coverage, Strong Towns materials, and targeted searches for major social platforms and campaign-style pages. Login-walled, 403-blocked, script-dependent, generic people-search, or otherwise...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
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
      "tier": "primary",
      "url": "https://www.haysusa.com/directory.aspx?EID=6",
      "title": "Toby Dougherty",
      "publisher": "Haysusa",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Toby Dougherty."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2016/5/26/toby-dougherty",
      "title": "Strong Towns, May 26, 2016",
      "publisher": "Strongtowns",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Toby Dougherty."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://archive.strongtowns.org/journal/2016/3/11/sandusky-hays",
      "title": "Strong Towns archive - Hays entry submitted by Dougherty and city staff/commissioners",
      "publisher": "Archive.Strongtowns",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Toby Dougherty.",
        "Observed public online activity mapped to Infrastructure."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://postpodcast.podbean.com/category/forward-ever/",
      "title": "The Post Podcast - Forward Ever category, Toby Dougherty episode listing",
      "publisher": "Postpodcast.Podbean",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Toby Dougherty."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "HaysPost: Forward Ever - Toby Dougherty",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Toby Dougherty."
      ]
    },
    {
      "id": "s-6",
      "tier": "primary",
      "url": "https://www.haysusa.com/directory.aspx?eid=6",
      "title": "City of Hays: Toby Dougherty",
      "publisher": "Haysusa",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Toby Dougherty."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water Supply.",
        "2020 water conservation: In Kansas News Service/Hays Post coverage, Dougherty said Hays borrowed conservation ideas from western cities and Utah, including landscaping regulations,"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water Supply.",
        "2023 R9 delay/costs: Dougherty told commissioners the R9 process had been slowed by appeals, said Hays and Russell were moving forward, and explained that converted irrigation righ"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
      "title": "KWCH / Kwch",
      "publisher": "Kwch",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water Conservation.",
        "2025 Build Kansas grant: Dougherty told KWCH the R9 project mattered because Hays and Russell lacked adequate local water supplies and said grant money would buy down the total pro",
        "Observed public online activity mapped to Infrastructure."
      ]
    },
    {
      "id": "s-social-crossref-4",
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
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ab25d617-c481-467e-92ce-1a3ba104f7ac",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Budgeting.",
        "On budgeting, Dougherty's public style is cautious and maintenance-first. He defended exceeding the revenue-neutral rate in 2024 by saying city costs rise over time and that static"
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
