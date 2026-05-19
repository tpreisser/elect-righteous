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
          "s-2",
          "s-4",
          "s-8",
          "s-11",
          "s-13",
          "s-20"
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
            "s-5"
          ],
          "mappedToIssueId": "i-county-spending-taxes-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Budget stabilization: said Ellis County should maintain what it has until more normal conditions returned.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-county-spending-taxes-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Voter concern: identified \"Ellis County spending too much money\" as a top concern and said people should be kept involved.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
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
          "s-88",
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
          "platform": "Public web",
          "observation": "Public health decision-making: said commissioners should consult the head of EMS and communicate with the medical center before making community health decisions.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-mental-health-funding-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post, Sept. 9, 2025: during 2026 budget approval coverage, Younger defended high county spending as tied to services including ambulance, roads, noxious weeds, and mental health.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-229"
          ],
          "mappedToIssueId": "i-mental-health-funding-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post, July 16, 2025: in budget discussion, Younger said the High Plains Mental Health increase was less expensive than building a new jail.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
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
          "s-4",
          "s-8",
          "s-11",
          "s-13",
          "s-20",
          "s-21"
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
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-water-and-economic-development-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post, Jan. 6, 2026: reported Younger suggested Big Creek Estates residents explore forming a rural water district or seeking Hays water.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-water-and-economic-development-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post, Feb. 11, 2026: reported Younger asked what would happen if a Big Creek housing well had to be moved because water was not found at the planned location.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
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
          "s-4",
          "s-8",
          "s-11",
          "s-13",
          "s-20",
          "s-21"
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
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile.",
        "Observed public online activity mapped to Government Efficiency."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://voterly.com/politicians/DmRJRnnSKN/neal-younger",
      "title": "Voterly.Com",
      "publisher": "voterly.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.manta.com/c/mhxwpdc/l5-farms-inc",
      "title": "Manta.Com",
      "publisher": "manta.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "social",
      "url": "https://www.facebook.com/EllisCountyDistrict1/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc38c04a-09f2-41be-8708-04cc33013376",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "social",
      "url": "https://www.facebook.com/HaysDailyNews/posts/ellis-county-commission-chair-michael-berges-asserted-that-commissioners-are-not/1509240304362171/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "social",
      "url": "https://www.linkedin.com/in/scott-braun-cpm-62833366/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/69131eb8-04ac-4b1d-9561-e24c9309ad07",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://jcpost.com/posts/0b4a5662-3939-49d6-808a-c3857ad67db9",
      "title": "Jcpost.Com",
      "publisher": "jcpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb108042-f876-49f9-b426-8047d18940ef",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4564af70-9835-4a1d-897a-9940279e3348",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
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
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://elliscountysheriff.com/ecso/",
      "title": "Elliscountysheriff.Com",
      "publisher": "elliscountysheriff.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
      "title": "Avvo.Com",
      "publisher": "avvo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.andersonlawoffice.net/",
      "title": "Andersonlawoffice.Net",
      "publisher": "andersonlawoffice.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/alaina-cunningham/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "social",
      "url": "https://www.linkedin.com/in/aaron-cunningham-653b3094/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://www.elliscountyksbar.org/members",
      "title": "Elliscountyksbar.Org",
      "publisher": "elliscountyksbar.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9397fb25-5dc6-4443-a340-6aae96abc594",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a5f579fa-6c33-44fd-921e-5a8435208d58",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/4397834a-4587-449e-ac2b-6effc74eb6c3",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "primary",
      "url": "https://www.ellisco.net/92/Attorney",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "social",
      "url": "https://www.facebook.com/p/Bobbi-Dreiling-for-Ellis-County-Clerk-100067810926476/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6308b19f-5890-4688-85fe-3b1ef376a09f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1003f2e5-b320-47b2-8fb1-4bbc626ef191",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "primary",
      "url": "https://www.ellisco.net/729/Revenue-Neutral-Rate",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eaf298bb-0a33-4f7f-ac25-8869ca6d9ad3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3a3f06a1-6b07-45c6-bf3c-8b76f4d564d7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://www.wibw.com/2023/11/02/students-community-members-plead-polling-location-fort-hays-state/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1ff3108c-562d-421d-9200-395f040c2103",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/90ec3907-2122-4b32-9bc1-b4199532ec34",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1fa3b93b-40fb-493c-ab10-6969085c9236",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "primary",
      "url": "https://www.ellisco.net/93/Clerk",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://www.zoominfo.com/p/Vernon-Ruder/2569532965",
      "title": "Zoominfo.Com",
      "publisher": "zoominfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "primary",
      "url": "https://www.ellisco.net/566/Treasury",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://www.hfehays.org/o/hfe/article/923439",
      "title": "Hfehays.Org",
      "publisher": "hfehays.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://www.ihm-church.com/",
      "title": "Ihm-church.Com",
      "publisher": "ihm-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
      "title": "Haysmemorial.Com",
      "publisher": "haysmemorial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
      "title": "Fhsuguides.Fhsu.Edu",
      "publisher": "fhsuguides.fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Tracey_Mann",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://ksopen.org/mann-2",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "primary",
      "url": "https://mann.house.gov/about",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://www.au.org/the-latest/church-and-state/articles/unhealthy-breakfast-how-the-national-prayer-breakfast-a-relic-from-the-1950s-era-of-civil-religion-evolved-into-a-florid-display-of-christian-nationalism/",
      "title": "Au.Org",
      "publisher": "au.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/meet-doc/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://ksopen.org/marshall",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
      "title": "Kansasdisciples.Org",
      "publisher": "kansasdisciples.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "Barbwasinger.Com",
      "publisher": "barbwasinger.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://whatreligionisinfo.com/kobach-religion/",
      "title": "Whatreligionisinfo.Com",
      "publisher": "whatreligionisinfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://msclawrence.com/",
      "title": "Msclawrence.Com",
      "publisher": "msclawrence.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
      "title": "Csgmidwest.Org",
      "publisher": "csgmidwest.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://hartforsenate.com/",
      "title": "Hartforsenate.Com",
      "publisher": "hartforsenate.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67202-ks-jason-hart-1922169.html",
      "title": "Avvo.Com",
      "publisher": "avvo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "primary",
      "url": "https://www.justice.gov/usao-ks/pr/kansas-man-sentenced-480-months-production-child-porn",
      "title": "Justice.Gov",
      "publisher": "justice.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "social",
      "url": "https://www.facebook.com/patrickforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/about/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Patrick_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Patrick_Schmidt_(politician",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/patrick-schmidt",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/05/kansas-state-senator-files-us-senate/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/people/patrick-schmidt/id/26167",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "secondary",
      "url": "https://www.christydavisforkansas.com/",
      "title": "Christydavisforkansas.Com",
      "publisher": "christydavisforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "social",
      "url": "https://www.facebook.com/christy.davis.710/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "social",
      "url": "https://www.linkedin.com/in/christy-davis-19286b224/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Christy_Davis",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
      "title": "Emporiagazette.Com",
      "publisher": "emporiagazette.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "primary",
      "url": "https://www.rd.usda.gov/newsroom/news-release/usda-announces-rural-development-state-director-kansas",
      "title": "Rd.Usda.Gov",
      "publisher": "rd.usda.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192415/christy-cauble-davis",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://americancoinop.com/articles/clean-history-laundromat-anchors-kansas-town",
      "title": "Americancoinop.Com",
      "publisher": "americancoinop.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://sandyforkansas.com/",
      "title": "Sandyforkansas.Com",
      "publisher": "sandyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "social",
      "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "social",
      "url": "https://x.com/speumann",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://www.threads.com/@speumann",
      "title": "Threads.Com",
      "publisher": "threads.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Sandy_Spidel_Neumann",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00262/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2026/01/07/2026-u-s-senate-candidates-kansas-277190/sandy-spidel-neumann/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "secondary",
      "url": "https://erikforkansas.com/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "social",
      "url": "https://www.facebook.com/erik.murray.820582/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "social",
      "url": "https://www.instagram.com/erik4ks/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "social",
      "url": "https://www.linkedin.com/in/erikmurraysior",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "secondary",
      "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
      "title": "Freebeacon.Com",
      "publisher": "freebeacon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "secondary",
      "url": "https://afrotech.com/erik-murray-oakland-impact-group",
      "title": "Afrotech.Com",
      "publisher": "afrotech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "secondary",
      "url": "https://erikforkansas.com/meet-erik/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Erik_Murray",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "secondary",
      "url": "https://www.genglobal.org/user/erik",
      "title": "Genglobal.Org",
      "publisher": "genglobal.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "secondary",
      "url": "https://lenspoliticalnotes.com/lens-political-note-792-erik-murray-kansas-us-senate/",
      "title": "Lenspoliticalnotes.Com",
      "publisher": "lenspoliticalnotes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/",
      "title": "Anneforkansas.Com",
      "publisher": "anneforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "social",
      "url": "https://www.linkedin.com/in/anne-lea-parelkar-83095659/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/about",
      "title": "Anneforkansas.Com",
      "publisher": "anneforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "secondary",
      "url": "https://immirail.com/profile-anne-lea-parelkar",
      "title": "Immirail.Com",
      "publisher": "immirail.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "secondary",
      "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/",
      "title": "1350kman.Com",
      "publisher": "1350kman.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://replacejerrymoran.org/",
      "title": "Replacejerrymoran.Org",
      "publisher": "replacejerrymoran.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://mike4kansas.org/",
      "title": "Mike4kansas.Org",
      "publisher": "mike4kansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://mikeforkansas.net/",
      "title": "Mikeforkansas.Net",
      "publisher": "mikeforkansas.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://mikeforkansas.my.canva.site/",
      "title": "Mikeforkansas.My.Canva.Site",
      "publisher": "mikeforkansas.my.canva.site",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "social",
      "url": "https://www.facebook.com/michael.soetaert1/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/michael-soetaert",
      "title": "Secure.Actblue.Com",
      "publisher": "secure.actblue.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Michael_Soetaert",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192430/michael-soetaert",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://www.cityofwellington.net/newsview.aspx?nid=6940",
      "title": "Cityofwellington.Net",
      "publisher": "cityofwellington.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "secondary",
      "url": "https://www.sumnernewscow.com/wellington-city-council-accepts-michael-mike-soetaerts-resignation-at-tuesdays-meeting/",
      "title": "Sumnernewscow.Com",
      "publisher": "sumnernewscow.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "secondary",
      "url": "https://www.kake.com/kansas-senate-candidate-shows-support-for-respect-for-marriage-act/article_7d6721ed-79ed-52f2-8765-2e521ef88df5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://www.laporte4ksgov.com/",
      "title": "Laporte4ksgov.Com",
      "publisher": "laporte4ksgov.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS03258/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Chase_LaPorte",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "secondary",
      "url": "https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions",
      "title": "Opencampaign.Com",
      "publisher": "opencampaign.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "social",
      "url": "https://www.facebook.com/alaina.cunningham.9/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "social",
      "url": "https://www.linkedin.com/in/alaina-cunningham-4436ba1/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "social",
      "url": "https://www.facebook.com/musilcomish/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "social",
      "url": "https://www.linkedin.com/in/shaun-musil-26539490/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "secondary",
      "url": "https://www.nex-tech.com/business/shaun/",
      "title": "Nex-tech.Com",
      "publisher": "nex-tech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "secondary",
      "url": "https://hutchpost.com/posts/f240fb89-d1f0-4373-ac4b-605d5e5f9c32",
      "title": "Hutchpost.Com",
      "publisher": "hutchpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "secondary",
      "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
      "title": "Ileeta.Org",
      "publisher": "ileeta.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "social",
      "url": "https://www.facebook.com/people/DXI-Training-Solutions-LLC/61553945955697/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-222",
      "tier": "primary",
      "url": "https://www.haysusa.com/directory.aspx?eid=6",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-223",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2015/10/7/toby-dougherty-city-manager-of-haysks",
      "title": "Strongtowns.Org",
      "publisher": "strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-224",
      "tier": "secondary",
      "url": "https://podcast.strongtowns.org/e/toby-dougherty-1535377231/",
      "title": "Podcast.Strongtowns.Org",
      "publisher": "podcast.strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-225",
      "tier": "secondary",
      "url": "https://issuu.com/waterstrategies/docs/mwl_october_2020/s/11017849",
      "title": "Issuu.Com",
      "publisher": "issuu.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-226",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-227",
      "tier": "secondary",
      "url": "https://www.eenews.net/articles/farm-vs-city-kansas-water-law-gets-a-major-stress-test/",
      "title": "Eenews.Net",
      "publisher": "eenews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-228",
      "tier": "secondary",
      "url": "https://openpayrolls.com/rank/highest-paid-employees/hays-ks",
      "title": "Openpayrolls.Com",
      "publisher": "openpayrolls.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-229",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile.",
        "Observed public online activity mapped to Mental Health Funding."
      ]
    },
    {
      "id": "s-230",
      "tier": "social",
      "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-231",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-232",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/17997478-c7b3-4601-a433-c8f9623b09da",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-233",
      "tier": "secondary",
      "url": "https://www.lkm.org/members/?id=41501857",
      "title": "Lkm.Org",
      "publisher": "lkm.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Neal Younger's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
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
      "id": "s-social-crossref-2",
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
      "id": "s-social-crossref-3",
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
      "id": "s-social-crossref-4",
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
