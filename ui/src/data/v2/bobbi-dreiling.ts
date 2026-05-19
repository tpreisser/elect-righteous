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
          "s-2",
          "s-3",
          "s-4",
          "s-5"
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
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-election-security-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Her campaign and public remarks center on experience, office accuracy, election security, cost control, and service. In her 2020 Hays Post candidate profile, she said she was running because she knew the office, enjoyed serving the public, and believed the clerk role required experience. In 2024, she framed reelection around \"eight elections with perfect counts, audits and recounts,\" Saturday early voting,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-election-security-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Tiger Media Network",
          "observation": "Her election-security message is specific and procedural. She has described paper ballots, post-election audits, poll-pad and USB/result matching, ballot counts matching before ballots leave the clerk's office, cameras at the drop box and ballot-counting/equipment rooms, worker training, and membership in federal election-security information sharing through the Department of Homeland Security. (2020 profile,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
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
          "s-2",
          "s-3",
          "s-4",
          "s-5"
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
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-campus-voting-access-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Tiger Media Network",
          "observation": "Key signal: eight elections, perfect counts/audits/recounts claim, township consolidation, budget savings, Saturday early voting, FHSU polling rationale, ballot drop-box security, cameras, and no-proven-fraud posture. (source) 8. Tiger Media Network October 2024 forum coverage. Key signal: public debate remarks on free/fair/secure elections, taxes/levies, paper ballots, and election fraud. (source) 9. Hays Post...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-campus-voting-access-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Key signal: Dreiling's contest-results cover sheet: 60 entries and three selected student designs. (source) 17. IKE Lab 2024 general county results. Key signal: independent public results page listing Dreiling's 2024 reelection vote total as 10,211; Hays Post reported unofficial night-of 9,971. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
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
          "s-2",
          "s-3",
          "s-4",
          "s-5"
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
            "s-1"
          ],
          "mappedToIssueId": "i-early-voting-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Topic buckets overlap. For example, the 2024 Hays Post reelection profile counts under election security, voting-access logistics, budget/cost control, and office experience.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-early-voting-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "\"It's a cost saving to the taxpayers in ballot preparations and just running a better township.\" - Hays Post 2024 profile, on township consolidation. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
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
          "s-1",
          "s-6",
          "s-2",
          "s-3",
          "s-4",
          "s-5"
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
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-property-tax-transparency-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "ellisco.net",
          "observation": "Dreiling's public voice is administrative rather than ideological. The official Ellis County clerk and election pages present her as the county clerk and election official responsible for elections, voter registration, tax-roll work, commission minutes, licenses, passports, accounts payable, levies, and other county paperwork. That official footprint is the clearest current public presence; no verified campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-property-tax-transparency-4"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "The most repeated claim in her reelection messaging is that the office is accurate and secure. Dreiling told Hays Post she had run eight elections with \"perfect counts, audits and recounts.\" At an October 2024 forum covered by Tiger Media Network, she said Ellis County elections had been free, fair, and secure, and that her tax and value-setting work had been done with 100 percent accuracy. (Hays Post, Tiger...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
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
      "tier": "social",
      "url": "https://www.facebook.com/p/Bobbi-Dreiling-for-Ellis-County-Clerk-100067810926476/",
      "title": "Bobbi Dreiling for Ellis County Clerk",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Bobbi Dreiling."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3",
      "title": "Dreiling Touts Election Security -- Hays Post",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Bobbi Dreiling.",
        "Observed public online activity mapped to Campus Voting Access.",
        "Observed public online activity mapped to Early Voting.",
        "Observed public online activity mapped to Property Tax Transparency."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d677444a-0c16-457b-a0e9-54004981ff78",
      "title": "Dreiling Responds After Win -- Hays Post",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Bobbi Dreiling."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1fa3b93b-40fb-493c-ab10-6969085c9236",
      "title": "Dreiling Answers Polling Questions (Letter) -- Hays Post",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Bobbi Dreiling."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "BobJane 'Bobbi' Dreiling Obituary",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Bobbi Dreiling."
      ]
    },
    {
      "id": "s-6",
      "tier": "social",
      "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/",
      "title": "Bobbi Dreiling for Ellis County Clerk",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Bobbi Dreiling."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
      "title": "Hays Post: Dreiling candidate profile",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Bobbi Dreiling.",
        "Observed public online activity mapped to Election Security."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "primary",
      "url": "https://www.ellisco.net/93/Clerk",
      "title": "ellisco.net / Ellisco",
      "publisher": "Ellisco",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Election Security.",
        "Dreiling's strongest public presence is official and administrative, not campaign-style social media. The county clerk page says the clerk serves as secretary to the Board of Commi",
        "Observed public online activity mapped to Property Tax Transparency."
      ]
    },
    {
      "id": "s-social-crossref-2",
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
      "id": "s-social-crossref-3",
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
      "id": "s-social-crossref-4",
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
