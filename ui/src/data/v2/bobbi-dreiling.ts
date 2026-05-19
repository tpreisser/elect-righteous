/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const BOBBI_DREILING_V2: CandidateFullV2 = {
  "slug": "bobbi-dreiling",
  "name": "Bobbi Dreiling",
  "party": "R",
  "position": "Ellis County Clerk",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "County Clerk / Election Officer",
  "religion": "Roman Catholic (devout)",
  "campaignWebsite": "https://www.ellisco.net/93/Clerk",
  "issues": [
    {
      "id": "i-election-security-1",
      "title": "Election Security",
      "stated": {
        "text": "Dreiling has pushed election-security improvements including security cameras at the ballot drop box and in ballot-counting rooms, and she enrolled in the federal Election Infrastructure Information Sharing network through the Department of Homeland Security.",
        "sourceIds": [
          "s-34",
          "s-95",
          "s-122",
          "s-125",
          "s-130",
          "s-131"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "ellisco.net",
          "observation": "Dreiling's strongest public presence is official and administrative, not campaign-style social media. The county clerk page says the clerk serves as secretary to the Board of Commissioners and conducts all Ellis County elections, while the election page directs voters to registration, advance voting, mail ballot, and VoterView resources. Both official pages list Dreiling as the current public contact. (clerk...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-48"
          ],
          "mappedToIssueId": "i-election-security-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Her campaign and public remarks center on experience, office accuracy, election security, cost control, and service. In her 2020 Hays Post candidate profile, she said she was running because she knew the office, enjoyed serving the public, and believed the clerk role required experience. In 2024, she framed reelection around \"eight elections with perfect counts, audits and recounts,\" Saturday early voting,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-231"
          ],
          "mappedToIssueId": "i-election-security-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Tiger Media Network",
          "observation": "Her election-security message is specific and procedural. She has described paper ballots, post-election audits, poll-pad and USB/result matching, ballot counts matching before ballots leave the clerk's office, cameras at the drop box and ballot-counting/equipment rooms, worker training, and membership in federal election-security information sharing through the Department of Homeland Security. (2020 profile,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-231"
          ],
          "mappedToIssueId": "i-election-security-1"
        }
      ]
    },
    {
      "id": "i-campus-voting-access-2",
      "title": "Campus Voting Access",
      "stated": {
        "text": "She closed the polling location nearest to Fort Hays State University, citing low turnout (69 registered on-campus voters) and ADA compliance issues. She defended the move on cost and usage grounds, saying \"the numbers don't show for me to allow to spend taxpayer dollars.\" The decision drew opposition from the ACLU and voting-rights advocates who saw it as reducing student access.",
        "sourceIds": [
          "s-42",
          "s-43",
          "s-88",
          "s-98",
          "s-109",
          "s-129"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Key signal: professional listing, Ellis County county clerk, last updated 2026-01-05. (source) 5. Kansas County Clerks and Election Officials Association northwest district listing. Key signal: Bobbi Dreiling, Ellis County clerk, in office since 2021. (source) 6. Hays Post 2020 candidate profile. Key signal: experience, service, election security, voter outreach, audit/accuracy, and corrected-ballot-error...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-campus-voting-access-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Tiger Media Network",
          "observation": "Key signal: eight elections, perfect counts/audits/recounts claim, township consolidation, budget savings, Saturday early voting, FHSU polling rationale, ballot drop-box security, cameras, and no-proven-fraud posture. (source) 8. Tiger Media Network October 2024 forum coverage. Key signal: public debate remarks on free/fair/secure elections, taxes/levies, paper ballots, and election fraud. (source) 9. Hays Post...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-40"
          ],
          "mappedToIssueId": "i-campus-voting-access-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Key signal: Dreiling's contest-results cover sheet: 60 entries and three selected student designs. (source) 17. IKE Lab 2024 general county results. Key signal: independent public results page listing Dreiling's 2024 reelection vote total as 10,211; Hays Post reported unofficial night-of 9,971. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-campus-voting-access-2"
        }
      ]
    },
    {
      "id": "i-early-voting-3",
      "title": "Early Voting",
      "stated": {
        "text": "Her office expanded Saturday early voting as part of its election logistics improvements.",
        "sourceIds": [
          "s-24",
          "s-68",
          "s-95",
          "s-99",
          "s-122",
          "s-125"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "This topic read is based on 17 accessible public items: official county pages, professional directories, public agenda packets, candidate/forum coverage, election-result pages, and public third-party coverage that quoted or referenced Dreiling. Login-walled Facebook content was not counted as a reviewed post inventory.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-early-voting-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Topic buckets overlap. For example, the 2024 Hays Post reelection profile counts under election security, voting-access logistics, budget/cost control, and office experience.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-early-voting-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "\"It's a cost saving to the taxpayers in ballot preparations and just running a better township.\" - Hays Post 2024 profile, on township consolidation. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-40"
          ],
          "mappedToIssueId": "i-early-voting-3"
        }
      ]
    },
    {
      "id": "i-property-tax-transparency-4",
      "title": "Property Tax Transparency",
      "stated": {
        "text": "She was the first Ellis County clerk to implement the revenue-neutral-rate mailings required by 2021 state law, notifying taxpayers how proposed tax rates compare to the revenue-neutral rate for each taxing district. Dreiling has not taken clear public positions on issues like abortion, guns, or immigration. Her public record is focused entirely on county administration and election management.",
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
          "platform": "Kansas Reflector",
          "observation": "The most contested public topic is FHSU polling access. Dreiling's stated rationale is turnout, cost, ADA logistics, and whole-precinct service rather than student-only service. She told Kansas Reflector she was not dealing only with students and had a whole community to consider. In Hays Post, she said the numbers did not support spending taxpayer dollars for an on-campus polling location and that she would...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-property-tax-transparency-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "ellisco.net",
          "observation": "Dreiling's public voice is administrative rather than ideological. The official Ellis County clerk and election pages present her as the county clerk and election official responsible for elections, voter registration, tax-roll work, commission minutes, licenses, passports, accounts payable, levies, and other county paperwork. That official footprint is the clearest current public presence; no verified campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-48"
          ],
          "mappedToIssueId": "i-property-tax-transparency-4"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "The most repeated claim in her reelection messaging is that the office is accurate and secure. Dreiling told Hays Post she had run eight elections with \"perfect counts, audits and recounts.\" At an October 2024 forum covered by Tiger Media Network, she said Ellis County elections had been free, fair, and secure, and that her tax and value-setting work had been done with 100 percent accuracy. (Hays Post, Tiger...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-40"
          ],
          "mappedToIssueId": "i-property-tax-transparency-4"
        }
      ]
    }
  ],
  "whoTheyAre": "Bobbi L. Dreiling is the Ellis County clerk and election officer, the official who runs county elections and manages a large share of the county's daily paperwork. Public records say she earned an associate degree from Hutchinson Community College, spent eight years as deputy clerk under Donna Maskus, then won the clerk's office in 2020. She was re-elected in 2024 by a wide margin, beating Democrat Laura Allen 9,971 votes to 2,975.\n\nCounty clerk is one of those offices voters mostly notice only when something goes wrong. In Ellis County, that means Dreiling's biography is tightly bound to administration rather than ideology: election calendars, tax rolls, commission minutes, and the mechanics of getting ballots printed, counted, and secured. Her public profile is stronger on that work than on personal biography.",
  "recordSummary": "Dreiling's most visible public controversy was the fight over closing the polling place at Fort Hays State University. She defended the move by pointing to low turnout and ADA concerns, and the dispute turned into a larger argument over campus voting access, cost, and whether the county was discouraging student participation. The issue drew intervention from voting-rights advocates and made a county clerk's administrative decision part of a wider public debate.\n\nHer office has also pushed a series of practical election changes, including security cameras at the ballot drop box and ballot-counting rooms, Saturday early voting, and voter-notification efforts. The source material also points back to a 2020 episode, before she became elected clerk, when 3,800 misprinted ballots were sent out while she was deputy clerk. Even in that record, the through line is administrative: a clerk's office under pressure to get details right in public.",
  "ownWordsNarrative": "_A summary of what Bobbi Dreiling has publicly said, published, linked, or been directly quoted saying across official Ellis County pages, public candidate/forum coverage, professional directories, county commission packets, and accessible references to her candidate Facebook page. Drawn from public captures and indexed sources from September 29, 2020 through May 11, 2026. We report patterns; we do not interpret intent._\n\nDreiling's public voice is administrative rather than ideological. The official Ellis County clerk and election pages present her as the county clerk and election official responsible for elections, voter registration, tax-roll work, commission minutes, licenses, passports, accounts payable, levies, and other county paperwork. That official footprint is the clearest current public presence; no verified campaign website or active public social feed surfaced in the logged-out capture. ([clerk page](https://www.ellisco.net/93/Clerk), [election page](https://www.ellisco.net/425/Election))\n\nHer recurring self-description is experience. In her 2020 Hays Post candidate profile, Dreiling said she was running because she knew the office, believed the clerk job required experience, enjoyed serving the public, and had worked underneath the prior clerk since 2013. In 2024, she again emphasized the same institutional argument, saying she had learned the July and November abstracts, mill levies, and revenue-neutral-rate work before becoming clerk. ([2020 profile](https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531), [2024 profile](https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3))\n\nThe most repeated claim in her reelection messaging is that the office is accurate and secure. Dreiling told Hays Post she had run eight elections with \"perfect counts, audits and recounts.\" At an October 2024 forum covered by Tiger Media Network, she said Ellis County elections had been free, fair, and secure, and that her tax and value-setting work had been done with 100 percent accuracy. ([Hays Post](https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3), [Tiger Media Network](https://tigermedianet.com/?p=82423))\n\nHer election-security argument is procedural and concrete. She points to paper ballots, post-election audits, matching poll-pad data with ballots and result media, training poll workers, checking election equipment before and after elections, counting ballots before they leave the clerk's office, and using cameras at the ballot drop box, ballot-counting room, and equipment room. In 2020, she also said she was a member of Election Infrastructure Information Sharing through the Department of Homeland Security. ([2020 profile](https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531), [2024 profile](https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3))\n\nDreiling's public remarks on election fraud are direct. At the 2024 forum, she said she had no reason to believe there was election fraud because she had no proof. She then invited people to come talk with her so she could show them Ellis County's election process, and said there was no voter fraud in Ellis County. ([source](https://tigermedianet.com/?p=82423))\n\nThe FHSU polling-location dispute is the most visible conflict around her office. Dreiling's own rationale focuses on turnout numbers, cost, ADA compliance, parking/navigation, and service to the full precinct rather than students alone. She told Kansas Reflector, \"I also have a whole community that I have to look at,\" and told Hays Post that the numbers did not support spending taxpayer dollars on a polling place exactly on campus. She also said she would always relook at things after reviewing polling numbers. ([Kansas Reflector](https://kansasreflector.com/2023/11/06/students-county-clerk-embroiled-in-monthslong-clash-over-fort-hays-polling-location/), [Hays Post](https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3))\n\nHer voting-access message is narrower than her critics' framing. Dreiling says her office provides advance voting, mail ballots, Saturday early voting, student voter information, and voter notifications. In Hays Post, she said she would work with students to let them know how easy it is to vote in Ellis County, but she also said she did not think there was anything she could do to increase turnout. ([source](https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3))\n\nCost control is another repeated signal. Dreiling credits her office with consolidating nine townships to four, using smaller envelopes for mail-in ballots, reducing postage and supply costs, using a lease program for election poll pads, and making budget-based decisions about ballot drop boxes. She framed township consolidation as a taxpayer savings and described the offsite drop boxes in Ellis and Victoria as too costly to keep open under the required security procedures when they were not being used. ([source](https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3))\n\nAfter her 2024 reelection, Dreiling interpreted the result as voter trust in her first four years as clerk and said she would continue the approach that had worked. She thanked voters, staff, and poll workers, calling the election flawless and saying she had no issue at any polling location. Hays Post reported unofficial election-night results of 9,971 votes for Dreiling to 2,975 for Laura Allen; a later IKE Lab results page lists the final county clerk result as 10,211 to 3,060. ([Hays Post](https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78), [IKE Lab](https://www.ike-lab.com/complete_elex_2024_gen_cotwp_Ellis.html))\n\nThe latest Dreiling-authored public outreach item found was the 2026 Ellis County \"I Voted\" sticker contest. In a commission packet letter to school superintendents, she wrote that a student-designed sticker contest could encourage grades 6-12 students to participate, inspire future voters, and help teachers build civics lessons around elections and government. In the April 2026 results packet, she reported 60 entries and said she chose three designs rather than one because there were many good designs. ([February packet](https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_02032026-726), [April packet](https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_04072026-741))\n\nHer social footprint is notably limited. Public sources reference an official \"Bobbi Dreiling for Ellis County Clerk\" Facebook page, including a 2020 correction about felony voting eligibility and 2024 criticism from her opponent, but native Facebook was not accessible enough to inventory posts or metrics. No verified campaign website, X, Instagram, TikTok, YouTube, Bluesky, Threads, Substack, Reddit, or candidate LinkedIn account surfaced in this capture. ([ACLU report](https://www.aclukansas.org/sites/default/files/field_documents/all_democracy_is_still_local_2023_final_.pdf), [Hays Post letter](https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1))\n\nSeveral issue areas are absent from the accessible candidate-controlled or attributed material. The reviewed set did not include detailed positions on abortion, guns, immigration, health care, housing, water, LGBTQ+ policy, state education policy, criminal justice, or national partisan issues. Dreiling's public message stays close to county administration, elections, voter logistics, tax/levy mechanics, budgets, and office competence.\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: September 29, 2020 to May 11, 2026. Platforms and sources surveyed included official Ellis County clerk/election/staff pages, League of Kansas Municipalities, Kansas County Clerks and Election Officials Association, campaign website search, Facebook, X, Instagram, LinkedIn, YouTube, TikTok, Threads, Bluesky, Substack, Reddit, Hays Post, Tiger Media Network, Kansas Reflector, ACLU of Kansas, public commission agenda packets, and public election-result pages. Login-walled, script-blocked, deleted, or otherwise inaccessible social content was not counted as reviewed post-level content.\n\nDisclaimer: This summary is based on public, logged-out, candidate-controlled or clearly attributed material available through May 11, 2026. It does not infer private views, deleted posts, inaccessible social content, or engagement metrics that were not visible in the public capture.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.\n\nFamily and obituary material in the source record points to a Catholic background, but the file does not support naming a current parish.",
  "church": {
    "name": "Specific parish not named in obituary",
    "denomination": "Roman Catholic (devout)",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Roman Catholic (devout). Note: Passed away October 16, 2024."
  },
  "campaignFinance": {
    "totalRaised": "No clean candidate total verified from reviewed county materials",
    "narrative": "No campaign finance data was available online. The source material did identify a county Republican committee expenditure tied to her 2024 race, including a text broadcast and a room rental, but not a full candidate finance record.",
    "donors": [
      {
        "name": "County Republican committee text broadcast for Clerk Bobbi Dreiling",
        "amount": "$999"
      },
      {
        "name": "Meeting-room rental tied to race activity",
        "amount": "$50"
      }
    ],
    "undisclosed": "The reviewed county-level material showed support spending tied to the race, but not a full candidate donor ledger.",
    "reportingPeriod": "most recent public county materials reviewed",
    "source": "Local reporting, county records, and reviewed public filings"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Ellis County clerk/election/staff pages, League of Kansas Municipalities, Kansas County Clerks and Election Officials Association, Facebook, X / Twitter, Instagram, LinkedIn, YouTube, TikTok, Threads, Bluesky, Substack, Reddit, Hays Post, Tiger Media Network, Kansas Reflector, ACLU of Kansas, Commission agenda packets, Election-result pages. Harvest range: 2020-09-29 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile.",
        "Observed public online activity mapped to Property Tax Transparency.",
        "Observed public online activity mapped to Campus Voting Access.",
        "Observed public online activity mapped to Early Voting."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile.",
        "Observed public online activity mapped to Election Security.",
        "Observed public online activity mapped to Campus Voting Access.",
        "Observed public online activity mapped to Early Voting.",
        "Observed public online activity mapped to Property Tax Transparency."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile.",
        "Observed public online activity mapped to Campus Voting Access.",
        "Observed public online activity mapped to Early Voting.",
        "Observed public online activity mapped to Election Security."
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
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
      ]
    },
    {
      "id": "s-233",
      "tier": "secondary",
      "url": "https://downingandlahey.com/obits/bobjane-bobbi-dreiling/",
      "title": "Downingandlahey.Com",
      "publisher": "downingandlahey.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
      ]
    },
    {
      "id": "s-234",
      "tier": "primary",
      "url": "https://www.ellisco.net/directory.aspx?EID=19",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Bobbi Dreiling's generated v2 profile.",
        "Observed public online activity mapped to Election Security."
      ]
    },
    {
      "id": "s-235",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1ca1d07e-cccf-4688-8fc2-5482906b6b6d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
      ]
    },
    {
      "id": "s-236",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0c4a7379-b39d-4948-a0f3-91abbf78b149",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
      ]
    },
    {
      "id": "s-237",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/give-hays-voters-their-poll/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
      ]
    },
    {
      "id": "s-238",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/CentralComm/2024ElecCycle/202501/CC_EL_R_202501.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Bobbi Dreiling's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.lkm.org/members/?id=72664620",
      "title": "Hays Post / Lkm",
      "publisher": "Lkm",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Campus Voting Access.",
        "Key signal: professional listing, Ellis County county clerk, last updated 2026-01-05. (source) 5. Kansas County Clerks and Election Officials Association northwest district listing"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "primary",
      "url": "https://www.ellisco.net/AgendaCenter/ViewFile/Agenda/_04072026-741",
      "title": "Hays Post / Ellisco",
      "publisher": "Ellisco",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Campus Voting Access.",
        "Key signal: Dreiling's contest-results cover sheet: 60 entries and three selected student designs. (source) 17. IKE Lab 2024 general county results. Key signal: independent public "
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/06/students-county-clerk-embroiled-in-monthslong-clash-over-fort-hays-polling-location/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Property Tax Transparency.",
        "The most contested public topic is FHSU polling access. Dreiling's stated rationale is turnout, cost, ADA logistics, and whole-precinct service rather than student-only service. Sh"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(BOBBI_DREILING_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[bobbi-dreiling.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
