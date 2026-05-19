/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SANDY_SPIDEL_NEUMANN_V2: CandidateFullV2 = {
  "slug": "sandy-spidel-neumann",
  "name": "Sandy Spidel Neumann",
  "party": "D",
  "position": "U.S. Senate candidate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "U.S. Senate candidate",
  "born": "Near Topeka",
  "hometown": "Mission, KS (Johnson County -- suburban Kansas City)",
  "campaignWebsite": "https://sandyforkansas.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Supports protecting reproductive freedom. Her campaign website lists it as a core issue, and she has said she wants to keep \"government out of women's healthcare.\"",
        "sourceIds": [
          "s-4",
          "s-1",
          "s-2",
          "s-3"
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
        "text": "Runs as a Democrat. No specific personal statement found in public sources.",
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
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
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
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Has not taken a specific public position on immigration in available sources.",
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
          "platform": "Bluesky",
          "observation": "On national and foreign-policy issues, her feed includes ICE, Ukraine, the Equal Rights Amendment, vaccines, cabinet nominations, and healthcare subsidies. On Jan. 24, 2026, she posted, \"Another senseless killing by ICE in Mpls this morning. The Senate must vote against funding for ICE until the Admin removes ICE from MN and implements operating procedures that adhere to the Constitution, federal and state laws,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
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
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Audience response on Bluesky was in single digits on the campaign-period posts captured. The highest-engagement visible campaign-period original post was her Oct. 16, 2025 launch post, with 5 likes, 3 reposts, 4 replies, and 1 quote as of May 11, 2026: \"I’m Sandy Spidel Neumann. I was born and raised in Kansas by working-class parents who taught me grit, fairness, and hard work. When Senator Marshall walked out...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Runs as a Democrat. No specific personal statement found in public sources.",
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
          "platform": "Bluesky",
          "observation": "Her Kansas-specific campaign posts use statewide household and healthcare language more than county-by-county policy detail. On Dec. 18, 2025, she posted, \"Quick reality check, per AAA, the average gas price Kansans are paying is $2.526/gal. Finney County has the lowest average price at $2.174 and Lincoln County has the highest averaging almost $3.10/gal. Kansans deserve better.\" (source). On Oct. 18, 2025, she...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        }
      ]
    },
    {
      "id": "i-healthcare-medicaid-8",
      "title": "Healthcare / Medicaid",
      "stated": {
        "text": "This is one of her strongest issues. She called Medicaid cuts \"the big abomination of a bill\" and said reversing them \"would be a good first step because health care is a significant concern in rural Kansas.\" She supports extending ACA subsidies and fighting pharmaceutical companies on drug prices.",
        "sourceIds": [
          "s-1",
          "s-4",
          "s-6",
          "s-9",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Manual campaign-period topic coding for those 14 original or quote posts: Kansas costs, healthcare, farms/hospitals/families, campaign biography, or Roger Marshall contrast appeared in 10; campaign events or Democratic organizing appeared in 3; personal Army/Navy content appeared in 1.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-8"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Across the 14 campaign-period original or quote Bluesky posts captured after her Oct. 16, 2025 launch, Sandy Spidel Neumann's repeated campaign subjects are Kansas costs, healthcare, farms, hospitals, families, and contrast with Sen. Roger Marshall. On launch day she posted, \"Every Kansan deserves a fair shot: to afford groceries, gas, housing, and a future for their kids. That’s what I’m fighting for: lower...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-8"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Become a founding member of my campaign today! 🌻 #KansasStrong #SandyForKansas #FairShotForAll\" (source). In another launch-day post she wrote, \"Kansas deserves a Senator who shows up, answers tough questions, and works for us, not the other way around. Let’s fight for our farms, hospitals, and families together. 🌻\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-healthcare-medicaid-8"
        }
      ]
    },
    {
      "id": "i-social-security-and-medicare-9",
      "title": "Social Security and Medicare",
      "stated": {
        "text": "Supports defending Social Security, Medicare, and the VA. These are central to her campaign message.",
        "sourceIds": [
          "s-4",
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Public Bluesky feed harvested through the AT Protocol public API for speumann.bsky.social.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-social-security-and-medicare-9"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Bluesky API data was public and produced the only complete post-level social harvest.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-social-security-and-medicare-9"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "*A summary of what Sandy Spidel Neumann has publicly said, posted, and amplified across social media. Drawn from public Bluesky posts, public profile metadata on Facebook, Instagram, YouTube, X, Threads, LinkedIn, and campaign-controlled pages between November 2024 and January 2026, with platform checks captured May 11, 2026. We report patterns; we do not interpret intent.*",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-social-security-and-medicare-9"
        }
      ]
    },
    {
      "id": "i-tariffs-agriculture-10",
      "title": "Tariffs / Agriculture",
      "stated": {
        "text": "Opposes tariffs she says are harmful to Kansas farmers. This is one of the reasons she says she entered the race.",
        "sourceIds": [
          "s-1",
          "s-4",
          "s-6",
          "s-9",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across the captured period the feed contains no posts about the Ogallala Aquifer, water rights, the Farm Bill by name, Fort Riley, Fort Hays State University, county-by-county agriculture, adoption or foster care, capital punishment, or religious-liberty litigation. The feed includes posts about hospitals and healthcare affordability, but the harvested posts do not name a rural hospital facility or a specific...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-tariffs-agriculture-10"
        }
      ]
    },
    {
      "id": "i-school-safety-11",
      "title": "School Safety",
      "stated": {
        "text": "Her campaign mentions \"working to make kids safer at school\" as a priority.",
        "sourceIds": [
          "s-4",
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Sandy Spidel Neumann is a Democratic U.S. Senate candidate from Mission with a long business career and no previous elected office. She was born in Topeka, adopted as a newborn, grew up in Johnson County, earned an economics degree from the University of Chicago, and later completed an MBA at Northwestern while working full time. Her professional life spans about 40 years, including 22 years as an executive at Ameriprise Financial Services.\n\nSpidel Neumann's campaign is built around experience in business and finance rather than a public-office resume. She returned to Kansas after years away, retired from Ameriprise in 2025, and entered the Senate race arguing that her management background and economic experience would be useful in a state where Democrats have struggled for decades to win federal office.",
  "recordSummary": "Because she has not held office, Spidel Neumann's public record is mostly professional. Her campaign says Roger Marshall's conduct in office, including the atmosphere around a western Kansas town hall, helped push her into the race. Her message has focused on health care costs, reproductive rights, Social Security, Medicare, the VA, and support for farmers.\n\nHer early financial filing is also part of the public record. It showed a serious launch by Democratic-primary standards, including a six-figure candidate loan. That does not substitute for governing experience, but it does tell voters that she entered the race with the means to build a campaign rather than test the waters quietly.",
  "ownWordsNarrative": "*A summary of what Sandy Spidel Neumann has publicly said, posted, and amplified across social media. Drawn from public Bluesky posts, public profile metadata on Facebook, Instagram, YouTube, X, Threads, LinkedIn, and campaign-controlled pages between November 2024 and January 2026, with platform checks captured May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the [14 campaign-period original or quote Bluesky posts](./social-harvest.md#summary-counts) captured after her Oct. 16, 2025 launch, Sandy Spidel Neumann's repeated campaign subjects are Kansas costs, healthcare, farms, hospitals, families, and contrast with Sen. Roger Marshall. On launch day she posted, \"Every Kansan deserves a fair shot: to afford groceries, gas, housing, and a future for their kids.  That’s what I’m fighting for: lower costs, good jobs, and opportunity you can count on. Become a founding member of my campaign today! 🌻  #KansasStrong #SandyForKansas #FairShotForAll\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3m3dxmfk3z22f)). In another launch-day post she wrote, \"Kansas deserves a Senator who shows up, answers tough questions, and works for us, not the other way around.   Let’s fight for our farms, hospitals, and families together. 🌻\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3m3dgdmmzms2f)).\n\nHer public alignment signals in the harvested feed run through Democratic accounts and VoteVets events. She wrote, \"I'm attending the VoteVets Economic Town Hall with Senator Elissa Slotkin and featuring Representative Sharice Davids - sign up now to join me.  #sandyforkansas #votevets www.mobilize.us/votevets/eve...\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3m4b4gysu5c27)). She also tagged @danpfeiffer.bsky.social in a shutdown and healthcare-premium post and tagged @senrogermarshall in an expense-reimbursement post. The [harvested Bluesky feed](./social-harvest.md#bluesky-representative-posts) did not show posts naming or reposting other Democratic primary candidates.\n\nAudience response on Bluesky was in single digits on the campaign-period posts captured. The highest-engagement visible campaign-period original post was her Oct. 16, 2025 launch post, with [5 likes, 3 reposts, 4 replies, and 1 quote as of May 11, 2026](./social-harvest.md#bluesky-audience-response): \"I’m Sandy Spidel Neumann. I was born and raised in Kansas by working-class parents who taught me grit, fairness, and hard work. When Senator Marshall walked out on Kansans, I knew I had to step up.  I’m running for U.S. Senate to fight for Kansas families, and I won’t walk away. 🌻\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3m3cpfacsi22a)). The highest-engagement visible original post across the full harvested feed was a Jan. 18, 2025 personal travel-refund post, with [41 likes and 1 reply as of May 11, 2026](./social-harvest.md#bluesky-audience-response); it began, \"Began our 20th year of annual girls’ wknds\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3lfze6lvv6k26)).\n\nOn national and foreign-policy issues, her feed includes ICE, Ukraine, the Equal Rights Amendment, vaccines, cabinet nominations, and healthcare subsidies. On Jan. 24, 2026, she posted, \"Another senseless killing by ICE in Mpls this morning. The Senate must vote against funding for ICE until the Admin removes ICE from MN and implements operating procedures that adhere to the Constitution, federal and state laws, and trains leaders/agents on them.  SandyforKansas.com\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3md77khbaks2q)). On Feb. 28, 2025, before her campaign launch, she wrote, \"I #StandwithUkraine Pass it on.\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3ljbdu5vwbc2l)). On Nov. 14, 2024, she posted, \"I sent mine. Let’s generate some momentum for the #ERAnow. Equality under the Constitution matters. Send yours to comments@whitehouse.org. Here’s what I sent if you need some inspo\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3lawjtoy4js2o)).\n\nHer Kansas-specific campaign posts use statewide household and healthcare language more than county-by-county policy detail. On Dec. 18, 2025, she posted, \"Quick reality check, per AAA, the average gas price Kansans are paying is $2.526/gal. Finney County has the lowest average price at $2.174 and Lincoln County has the highest averaging almost $3.10/gal. Kansans deserve better.\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3mabdqda6fc2e)). On Oct. 18, 2025, she wrote, \"Great to see so many folks out in Hays today for the No Kings Protest!\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3m3iv6zf6522f)). On Dec. 12, 2025, she wrote, \"Roger Marshall’s talking out of both sides of his mouth again. We need to extend the ACA premium tax credits while healthcare affordability is addressed. #Kansasdeservesbetter  SandyforKansas.com\" ([source](https://bsky.app/profile/speumann.bsky.social/post/3m7t2hxexnk2d)).\n\nAcross the captured period the feed contains no posts about the Ogallala Aquifer, water rights, the Farm Bill by name, Fort Riley, Fort Hays State University, county-by-county agriculture, adoption or foster care, capital punishment, or religious-liberty litigation. The feed includes posts about hospitals and healthcare affordability, but the harvested posts do not name a rural hospital facility or a specific Kansas hospital closure.\n\nHer platform footprint includes several accounts, with post-level access concentrated on [Bluesky](./social-harvest.md#bluesky-profile), where the account showed 1,261 followers, 2,810 following, and 228 posts at capture. Her official Facebook page showed [2,974 likes and 1,505 talking about this](./social-harvest.md#presence-detector), and Instagram showed [949 followers, 3,751 following, and 233 posts](./social-harvest.md#presence-detector), but logged-out post-level capture was not reliable on either platform. The campaign's embedded YouTube launch video, `Sandy Spidel Neumann for Kansas - \"Step Up\"`, showed [1,282 views and a channel with 4 subscribers](./social-harvest.md#youtube). X and LinkedIn were presence-only in this harvest, Threads had public metadata but no reliable post-level capture, and no candidate-controlled Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was found in the public search pass.\n\n**Methodology:** Date range covered: 2024-11-10 to 2026-01-24. Platforms surveyed: Bluesky, Facebook, Instagram, YouTube, X, Threads, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok. Total visible Bluesky feed entries examined: 230, including 83 original or quote posts, 145 replies, and 2 repost entries.\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "$167,587.11 (FEC coverage: 10/14/2025 to 12/31/2025)",
    "narrative": "Spidel Neumann's public FEC summary showed $167,587.11 in receipts, $40,660.59 spent, and $126,926.52 cash on hand through December 31, 2025. The most important line in the filing was a $100,000 loan from the candidate to her campaign. That gave her an early financial base, but it also means the first phase of the campaign leaned significantly on her own money. The public record showed a real campaign structure, but not yet a deep statewide donor story.",
    "donors": [
      {
        "name": "Loans made by candidate",
        "amount": "$100,000.00"
      },
      {
        "name": "Itemized individual contributions",
        "amount": "$37,150.00"
      },
      {
        "name": "Unitemized individual contributions",
        "amount": "$26,937.11"
      },
      {
        "name": "Candidate contributions",
        "amount": "$3,500.00"
      }
    ],
    "undisclosed": "The official FEC summary shows a substantial self-loan-backed campaign, even though the full donor-by-donor transactions page is not summarized here.",
    "reportingPeriod": "through 2025-12-31",
    "source": "FEC candidate overview S6KS00262 / committee C00923474"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Bluesky, Facebook, Instagram, YouTube, X, Threads, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok, Campaign website. Harvest range: 2024-11-10 through 2026-01-24.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://sandyforkansas.com/",
      "title": "sandyforkansas.com",
      "publisher": "Sandyforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Spidel Neumann."
      ]
    },
    {
      "id": "s-2",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00262/",
      "title": "FEC - Sandy Spidel Neumann (S6KS00262)",
      "publisher": "Fec",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Spidel Neumann."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Sandy_Spidel_Neumann",
      "title": "Sandy Spidel Neumann - Ballotpedia",
      "publisher": "Ballotpedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Spidel Neumann."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
      "title": "Sandy Spidel Neumann Launch",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Spidel Neumann."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
      "title": "Sandy Spidel Neumann",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Spidel Neumann."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2026/01/07/2026-u-s-senate-candidates-kansas-277190/sandy-spidel-neumann/",
      "title": "Johnson County Post photo",
      "publisher": "Johnsoncountypost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Spidel Neumann."
      ]
    },
    {
      "id": "s-9",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-for-Kansas/61582078721885/",
      "title": "Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Spidel Neumann."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://bsky.app/profile/speumann.bsky.social/post/3md77khbaks2q",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Border.",
        "On national and foreign-policy issues, her feed includes ICE, Ukraine, the Equal Rights Amendment, vaccines, cabinet nominations, and healthcare subsidies. On Jan. 24, 2026, she po"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://bsky.app/profile/speumann.bsky.social/post/3mabdqda6fc2e",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marijuana / Drug Policy.",
        "Her Kansas-specific campaign posts use statewide household and healthcare language more than county-by-county policy detail. On Dec. 18, 2025, she posted, \"Quick reality check, per"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "social",
      "url": "https://bsky.app/profile/speumann.bsky.social/post/3m3dxmfk3z22f",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Healthcare / Medicaid.",
        "Become a founding member of my campaign today! 🌻 #KansasStrong #SandyForKansas #FairShotForAll\" (source). In another launch-day post she wrote, \"Kansas deserves a Senator who show"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SANDY_SPIDEL_NEUMANN_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[sandy-spidel-neumann.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
