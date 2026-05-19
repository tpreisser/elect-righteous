/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const NEAL_YOUNGER_V2: CandidateFullV2 = {
  "slug": "neal-younger",
  "name": "Neal Younger",
  "party": "R",
  "position": "Ellis County Commissioner, District 2",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "Electrician / Plumber",
  "campaignWebsite": "https://www.ellisco.net/120/County-Commission",
  "issues": [
    {
      "id": "i-county-spending-taxes-1",
      "title": "County Spending / Taxes",
      "stated": {
        "text": "Younger ran on the argument that Ellis County was spending too much money. Once in office, he supported the 2026 budget increase but only after detailed department-by-department review. He believes the county sales tax should be left alone rather than raised.",
        "sourceIds": [
          "s-1",
          "s-2"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Economic development: said the county should be more proactive, work with Hays, improve water supply, and pursue \"higher-paying jobs.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-county-spending-taxes-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Budget stabilization: said Ellis County should maintain what it has until more normal conditions returned.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-county-spending-taxes-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Voter concern: identified \"Ellis County spending too much money\" as a top concern and said people should be kept involved.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-county-spending-taxes-1"
        }
      ]
    },
    {
      "id": "i-mental-health-funding-2",
      "title": "Mental Health Funding",
      "stated": {
        "text": "He supported increased mental-health spending, saying the increase \"is less expensive than building a new jail.\" This reflects a practical, cost-prevention approach to county budgeting.",
        "sourceIds": [
          "s-1",
          "s-2"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Public health decision-making: said commissioners should consult the head of EMS and communicate with the medical center before making community health decisions.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-mental-health-funding-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post, Sept. 9, 2025: during 2026 budget approval coverage, Younger defended high county spending as tied to services including ambulance, roads, noxious weeds, and mental health.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-mental-health-funding-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post, July 16, 2025: in budget discussion, Younger said the High Plains Mental Health increase was less expensive than building a new jail.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-mental-health-funding-2"
        }
      ]
    },
    {
      "id": "i-water-and-economic-development-3",
      "title": "Water and Economic Development",
      "stated": {
        "text": "He has said the county should work with the city of Hays to bring in more water and higher-paying jobs. During housing discussions, he raised practical questions about whether new developments would have enough water service if wells failed.",
        "sourceIds": [
          "s-1",
          "s-2"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Hays Post, Oct. 13, 2025: reported Younger asked for clarification on how long AMP Rentals would have access to a county-owned water well while awaiting a rural water meter.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-water-and-economic-development-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post, Jan. 6, 2026: reported Younger suggested Big Creek Estates residents explore forming a rural water district or seeking Hays water.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-water-and-economic-development-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post, Feb. 11, 2026: reported Younger asked what would happen if a Big Creek housing well had to be moved because water was not found at the planned location.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "i-water-and-economic-development-3"
        }
      ]
    },
    {
      "id": "i-government-efficiency-4",
      "title": "Government Efficiency",
      "stated": {
        "text": "He pledged to spend one to two hours in every county department to understand staffing and needs directly, rather than governing from a distance.",
        "sourceIds": [
          "s-1",
          "s-2"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Neal Younger's public messaging footprint is unusually small for an incumbent elected official. No verified campaign website or candidate-controlled social account was found, and the strongest first-person source remains his July 30, 2020 Hays Post candidate questionnaire. In that questionnaire, he presented himself as a tradesman and practical county-government candidate: an electrician and plumber with...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-government-efficiency-4"
        }
      ]
    }
  ],
  "whoTheyAre": "Neal Younger is the Ellis County Commissioner for District 2 and the commission chairman in 2026. He came into office from the trades, not from a political résumé, and public sources consistently describe him as an electrician and plumber with a blue-collar background.\n\nYounger first won the seat in 2020, defeating incumbent Dustin Roths and Kerry McCue in a three-way Republican primary with 639 votes, or 40.16 percent. He then ran unopposed in the general election. His public style has stayed close to that origin story: low-profile, direct, and focused on county budgets, roads, water, and departmental operations rather than personality or branding.\n\nHe has almost no social-media presence and very little public biographical material beyond office-related coverage. What the public record does show is a commissioner who talks in practical terms about staffing, infrastructure, communication, and whether county spending is actually worth it.",
  "recordSummary": "Younger's clearest governing trait is fiscal skepticism paired with case-by-case pragmatism. He ran in 2020 on the argument that Ellis County was spending too much money, but in 2026 he supported a budget increase after deciding that added mental-health funding was \"less expensive than building a new jail.\" That is one of the most concrete statements of his governing philosophy in the record.\n\nHe has also taken visible positions on development and infrastructure. Public coverage shows him calling for closer county-city cooperation, especially around water and economic development, and saying the county should work with the city of Hays to bring in more water and higher-paying jobs. In housing discussions, he pressed for practical answers on rural water access during the Big Creek Estates conversation.\n\nYounger has also talked about government in a hands-on way. In campaign coverage, he said he wanted to spend time in every county department to understand staffing and needs directly rather than govern from a distance. That fits with the broader picture of a commissioner who approaches county government like a working manager rather than a public personality.",
  "ownWordsNarrative": "*A summary of what Neal Younger has publicly said or been attributed as saying in candidate questionnaires, official county records, public meeting coverage, and local news. Drawn from public sources through May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nNeal Younger's public messaging footprint is unusually small for an incumbent elected official. No verified campaign website or candidate-controlled social account was found, and the strongest first-person source remains his July 30, 2020 Hays Post candidate questionnaire. In that questionnaire, he presented himself as a tradesman and practical county-government candidate: an electrician and plumber with construction experience who works by listening, talking, and reaching \"common sense.\" ([source](https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd), [harvest](social-harvest.md#2020-candidate-questionnaire))\n\nThe most consistent theme is county spending, but his record reads as fiscal pragmatism rather than simple budget cutting. In 2020, he identified \"Ellis County spending too much money\" as a top voter concern and said the county should keep people involved in meetings. By 2025, during debate over the 2026 budget, he defended high spending as tied to core county services including ambulance, road and bridge, noxious weeds, and mental health. In the coded harvest, county finances, taxes, and budget process are the largest topic area, with 8 counted items. ([source](https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd), [source](https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec), [harvest](social-harvest.md#topic-counts))\n\nHis clearest later budget message came in the mental-health funding debate. Hays Post reported in July 2025 that Younger supported the requested High Plains Mental Health increase because it was less expensive than building a new jail. That framing tied county spending to cost avoidance and public safety rather than to a standalone service expansion. The county's March 17, 2026 minutes also recorded that, as commission chair, Younger had attended a High Plains Mental Health fundraiser. ([source](https://hayspost.com/posts/fbac2993-56a7-4ebb-b494-5a194944d2c2), [source](https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_03172026-738))\n\nRoads, water, housing, and development form the second major pattern. In 2020, Younger said the county should work with Hays on water and \"higher-paying jobs.\" In 2024 joint city-county coverage, he supported Commerce Parkway access as a useful route to the new school, I-70, north Hays, and future development. In 2025 and 2026 housing and water discussions, he asked practical questions about traffic signals, rural water, county well access, and what would happen if planned private wells did not produce water. These infrastructure and development items account for 7 counted items in the harvest. ([source](https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd), [source](https://hayspost.com/posts/2584b551-eb90-4e5b-abbf-fd3ef6cab0bc), [source](https://hayspost.com/posts/ee851b27-fd93-4943-b1ba-e924696a0982), [source](https://hayspost.com/posts/6ba197c2-04b6-4e73-8650-431120cea10f))\n\nYounger's governing style, as described in public sources, is hands-on and department-focused. In 2020, he said he would spend one to two hours in county offices and field operations to see whether staffing levels were right. He favored more meetings with department heads and communication with employees. In 2025, when the county approved a cost-of-living adjustment, he said the county did not want to be a training center. That cluster of statements makes employees, staffing, departments, and service delivery the third-largest topic area in the harvest, with 6 counted items. ([source](https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd), [source](https://hayspost.com/posts/f411c2a9-c20a-4cf3-963d-d834ddb0f613), [harvest](social-harvest.md#topic-counts))\n\nCommunication and public involvement are also recurring. Younger said in 2020 that city commissioners should attend county meetings and county commissioners should attend city meetings. He said he would talk with taxpayers and attend surrounding city, town, and fire meetings. At a 2024 Hays Middle School voter-education event, Hays Post reported that he told students listening to constituents and fellow leaders is important for staying connected, and he rooted that lesson in listening at home. ([source](https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd), [source](https://hayspost.com/posts/fd6be90b-bcb4-49d7-bf9a-20194a876c3c))\n\nThe official county record confirms his current role but provides mostly procedural rather than ideological material. Ellis County's commission page lists him as Second District commissioner and links the public agenda, minutes, and YouTube meeting records. Official minutes from January 13, 2026 show the commission appointed him chair for the year and appointed him to the Northwest Kansas Juvenile Board and Community Corrections. Later 2026 minutes show him calling meetings to order, participating in a road tour, and leading a county retreat with department and budget discussions. ([source](https://www.ellisco.net/120/County-Commission), [source](https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01132026-721), [source](https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_03312026-739), [source](https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_04082026-743))\n\nVisible absences matter for this profile. The harvest found no verified candidate-controlled Facebook, Instagram, X/Twitter, Bluesky, TikTok, Threads, LinkedIn, YouTube, Truth Social, Gab, Gettr, Substack, or Reddit account. It also found no verified current campaign website, no long-form post-2020 platform page, no public church-affiliation statement by Younger, and no reliable campaign finance table. The official county election-results page and 2024 official-results PDF verify the office and reelection result, but they do not add campaign messaging. ([harvest](social-harvest.md#visible-absences), [source](https://www.ellisco.net/435/Election-Results), [source](https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results))\n\n---\n\n**Methodology:** Date range covered: 2020 public campaign questionnaire through May 11, 2026. Source types checked: official Ellis County commission pages, agendas, minutes, county meeting video links, official election results, Hays Post/local news coverage, League of Kansas Municipalities profile, and public searches for campaign/candidate social accounts. Included candidate-authored, candidate-attributed, official county, or public-meeting-derived material only.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Younger.",
  "campaignFinance": {
    "totalRaised": "No campaign finance data available online",
    "narrative": "No campaign finance data was available online for Younger's county race.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online"
      }
    ],
    "undisclosed": "No searchable online donor ledger or filed campaign-finance report was located.",
    "reportingPeriod": "most recent public materials reviewed",
    "source": "Local reporting, county records, and reviewed public filings"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Ellis County commission pages, County agendas and minutes, County meeting video links, Official election results, Hays Post, League of Kansas Municipalities profile, Facebook, Instagram, X / Twitter, Bluesky, TikTok, Threads, LinkedIn, YouTube, Truth Social, Gab, Gettr, Substack, Reddit, Public search. Harvest range: 2020-07-30 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hays Post, \"CANDIDATE PROFILE Ellis County Commission: Neal Younger,\" July 30, 2020",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Neal Younger.",
        "Observed public online activity mapped to Government Efficiency."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://voterly.com/politicians/DmRJRnnSKN/neal-younger",
      "title": "Voterly Profile",
      "publisher": "Voterly",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Neal Younger."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Mental Health Funding.",
        "Hays Post, Sept. 9, 2025: during 2026 budget approval coverage, Younger defended high county spending as tied to services including ambulance, roads, noxious weeds, and mental heal"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fbac2993-56a7-4ebb-b494-5a194944d2c2",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Mental Health Funding.",
        "Hays Post, July 16, 2025: in budget discussion, Younger said the High Plains Mental Health increase was less expensive than building a new jail."
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/769b9cc3-43f2-4772-9389-e5a962d9a36a",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water and Economic Development.",
        "Hays Post, Oct. 13, 2025: reported Younger asked for clarification on how long AMP Rentals would have access to a county-owned water well while awaiting a rural water meter."
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ee851b27-fd93-4943-b1ba-e924696a0982",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water and Economic Development.",
        "Hays Post, Jan. 6, 2026: reported Younger suggested Big Creek Estates residents explore forming a rural water district or seeking Hays water."
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6ba197c2-04b6-4e73-8650-431120cea10f",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water and Economic Development.",
        "Hays Post, Feb. 11, 2026: reported Younger asked what would happen if a Big Creek housing well had to be moved because water was not found at the planned location."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(NEAL_YOUNGER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[neal-younger.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
