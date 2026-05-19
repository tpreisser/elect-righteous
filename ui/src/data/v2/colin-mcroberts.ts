/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const COLIN_MCROBERTS_V2: CandidateFullV2 = {
  "slug": "colin-mcroberts",
  "name": "Colin McRoberts",
  "party": "D",
  "position": "U.S. House candidate, KS-01",
  "electionSlug": "ks-01-house-2026",
  "incumbent": false,
  "occupation": "Associate Teaching Professor of Law, University of Kansas School of Business",
  "hometown": "Lawrence, Kansas (Douglas County)",
  "family": "A professor at the University of Kansas (scientist and bestselling author -- name not confirmed in sources); Yes, raised family in Lawrence (number not specified)",
  "campaignWebsite": "https://colinforkansas.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Has not taken a detailed public position in the available source material.",
        "sourceIds": [
          "s-25",
          "s-54",
          "s-59",
          "s-60",
          "s-75",
          "s-100"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Reposted ACOG, 2025-09-22: \"ACOG reaffirms that acetaminophen is safe for managing pain and fever during pregnancy...\" Engagement: Likes 2,011, Reposts 1,137, Replies 22, Quotes 64.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Across the captured Bluesky period, the feed contains no original posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medicaid expansion.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-32"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Across the captured period the feed contains no original Bluesky posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medicaid expansion (harvest). Healthcare appears mainly through immigration enforcement, scientific research, and agency-accountability posts rather than a sustained district-healthcare thread. The...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-31"
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
          "s-8",
          "s-19",
          "s-26",
          "s-40",
          "s-49",
          "s-78"
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
          "s-25",
          "s-26",
          "s-54",
          "s-55",
          "s-59",
          "s-74"
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
          "s-8",
          "s-19",
          "s-23",
          "s-25",
          "s-26",
          "s-40"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Has critici",
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
          "platform": "Facebook",
          "observation": "Facebook: campaign-linked Facebook profile/page -- linked from colinforkansas.com -- present, but logged-out harvest returned a browser/login wall on 2026-05-11. Earlier project notes also list facebook.com/colinforkansas.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "LinkedIn",
          "observation": "LinkedIn post preview, indexed 2 months before capture: \"I borrowed my son Ox's favorite LEGO creation, Mr. Technopants, to help illustrate why exactly so many Kansans are concerned about ICE hitting their community. The short answer is, it's not about law enforcement. In fact, ICE is breaking the law left and right. We have to care about that, or who are we as Americans?\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-32"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Healthcare appears mostly through ICE, research funding, disease / science reposts, and the campaign issue page; detailed healthcare delivery policy was not a frequent social-feed topic in the captured posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-32"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Colin McRoberts is a Democratic candidate for Kansas's 1st Congressional District, a seat that covers most of western and central Kansas and has been safely Republican for decades. Public records identify him as Kenneth Colin McRoberts, a Lawrence resident, an associate teaching professor of law at the University of Kansas School of Business, and a lawyer with degrees from Trinity University and Harvard Law School.\n\nBefore entering politics, McRoberts worked as a commercial litigator at Steptoe & Johnson and later founded Vasher McRoberts LLC, a consulting firm focused on negotiation and communication analysis. His university and writing work also gave him a more academic public profile than most congressional candidates in Kansas. He teaches business law and related courses at KU and has published writing on conspiracy theories, persuasion, and public culture.",
  "recordSummary": "McRoberts does not come to the race from elected office. His public record is instead a mix of legal practice, teaching, consulting, and writing. That professional background shapes the way he talks about politics: less as a partisan contest than as a problem of negotiation, accountability, and communication across a district split between Lawrence and the western half of the state.\n\nHis immediate trigger for running was political. McRoberts says he drove from Lawrence to Oakley for Roger Marshall's March 2025 town hall, recorded one of the videos that spread after the event turned hostile, and came away convinced that the district needed a more serious challenge to the Republican establishment. He filed for Congress in September 2025 and began campaigning as a first-time candidate against Rep. Tracey Mann.",
  "ownWordsNarrative": "*A summary of what Colin McRoberts has publicly said, posted, and amplified across social media. Drawn from public posts on Bluesky, Instagram, LinkedIn, YouTube, Facebook, and TikTok between September 17, 2025 and May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the captured public feed, McRoberts posts most often about federal accountability, executive power, and the role of Congress. In the coded Bluesky harvest, those subjects account for 24 of 62 original posts, or 39 percent of his original posts ([harvest](social-harvest.md#topic-share-analysis)). On May 8, 2026, he posted, \"Two signatures of the Trump administration: doing a bad job and lying about it.\" ([source](https://bsky.app/profile/colinmcroberts.bsky.social/post/3mledcmm2ik24)). On October 23, 2025, he wrote, \"The theme of the midterm simply has to be putting Congress back in order. Everything follows from that.\" ([source](https://bsky.app/profile/colinmcroberts.bsky.social/post/3m3upvxkaxs2a)). Agriculture, tariffs, rural economy, and food aid account for 10 original posts, or 16 percent of the captured original Bluesky feed ([harvest](social-harvest.md#topic-share-analysis)).\n\nMcRoberts' public amplification network is concentrated on Kansas Democrats, campaign supporters, reform advocates, and national legal or political-commentary accounts. He reposted Mr. Beat after the educator wrote, \"Day 104 of #projectnocap It was great to see Colin McRoberts again tonight. In case y'all forgot, he has added Uncapping the House to his platform, and so I have endorsed him.\" ([source](https://bsky.app/profile/iammrbeat.bsky.social/post/3mjiqnbcwhc2t)). He also reposted Jennifer Raff's March 29, 2026 post that said, \"Between the last #Nokings rally and this one, @colinmcroberts.bsky.social became a candidate for the U.S. House of Representatives. Today he was a featured speaker at the rally in Manhattan. Ad astra per aspera! #stepup\" ([source](https://bsky.app/profile/jenniferraff.bsky.social/post/3mi5xk4e4rc2r)). Other repeated signals in the captured feed include Kansas Democratic Party, Legal Reuters, Indivisible, ACOG, Kevin M. Kruse, Aaron Rupar, Matthew Gertz, and Christy Davis ([harvest](social-harvest.md#bluesky-reposts-and-tags)).\n\nAudience response on McRoberts' own Bluesky posts is highest when he links district travel to a wider political frame. His October 18, 2025 Hays post drew 550 likes, 75 reposts, 6 replies, and 1 quote as of May 11, 2026, the largest engagement count among his original Bluesky posts in the capture ([harvest](social-harvest.md#topic-share-analysis)). The post read, \"I'm in Hays, Kansas on a tour of the towns in the district where I'm running for Congress. After our speeches and hearing from the people here we're heading out to our local NK. Red states are full of people who want better for their neighbors and their country.\" ([source](https://bsky.app/profile/colinmcroberts.bsky.social/post/3m3i7nw6at22t)). His September 17, 2025 campaign-announcement post was second among original Bluesky posts, with 68 likes, 26 reposts, 2 replies, and 5 quotes as of May 11, 2026 ([source](https://bsky.app/profile/colinmcroberts.bsky.social/post/3lz274dwcds2v)).\n\nOn national and foreign-policy issues, McRoberts' feed centers on presidential power, federal law enforcement, courts, research funding, tariffs, food aid, and war powers. On January 13, 2026, he posted, \"There's no reason to hold ICE to a lower standard than local cops--and nothing stopping the GOP majority from solving a problem for a change. But they won't. So let's elect some politicians with practical solutions.\" ([source](https://bsky.app/profile/colinmcroberts.bsky.social/post/3mcdfu5g7kc2q)). On March 18, 2026, he linked war in Iran to household and farm costs: \"Here's how you know the war in Iran is going super well--gas prices are barely higher than they were twenty minutes ago. And fertilizer shipments will resume any day now. Just in time for farmers to pour it over the crop as they're harvesting it.\" ([source](https://bsky.app/profile/colinmcroberts.bsky.social/post/3mheecvfxbk22)). He also reposted Kevin M. Kruse on congressional war powers and Iran, and reposted Legal Reuters on the U.S. Department of Agriculture's rejection of women farmers selected for the United Soybean Board ([harvest](social-harvest.md#bluesky-reposts-and-tags)).\n\nFor KS-01 district engagement, McRoberts posts about campaign travel, Hays, Dodge City, Abilene, Manhattan, Chambers of Commerce, farm groups, tariffs, USAID, the Kansas Rural Center, and a Hutchinson wild-horse program. On February 14, 2026, he wrote, \"At the Kansas Rural Center's Food and Farm Conference, learning how Congress can support rural life -- renewing underfunded Rural Cooperative Development Grants, supporting the WORK Act and Main Street Employee Ownership Act, and local action.\" ([source](https://bsky.app/profile/colinmcroberts.bsky.social/post/3metjptksrc2s)). On February 1, 2026, he posted, \"Over 1,200 miles in the car this weekend, to and from the far corners of Kansas. Up by 5 and home after midnight, making every hour count: tabling with the party, meeting supporters, lecturing on negotiation strategy, and seeing a bald eagle strike. God, I love Kansas.\" ([source](https://bsky.app/profile/colinmcroberts.bsky.social/post/3mdtbgyqrks2l)). In Hays Post coverage of Democracy Fest, McRoberts said, \"The first district is red in a red state. This is not going to be an easy race, it's not going to be a cheap race, it's not going to be a short race, but it's possible to win in a way it hasn't been before\" ([source](https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9)).\n\nAcross the captured period the feed contains no original Bluesky posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medicaid expansion ([harvest](social-harvest.md#visible-absences)). Healthcare appears mainly through immigration enforcement, scientific research, and agency-accountability posts rather than a sustained district-healthcare thread. The campaign website lists Medicare, Medicaid, and Social Security; personal freedom; labor; education; and equality as issue headings, but those subjects are less frequent in the captured original social feed than Congress, executive power, agriculture, tariffs, food aid, and campaign travel ([source](https://colinforkansas.com/)).\n\nMcRoberts' active public footprint is strongest on Bluesky, where the campaign account had 201 followers, 65 following, and 97 posts at capture ([harvest](social-harvest.md#presence-summary)). His Instagram account listed 349 followers, 97 following, and 98 posts, with the bio, \"Running to flip the 1st, bringing real leadership to the Kansas 1st Congressional District. Official campaign account. www.colinforkansas.com\" ([source](https://www.instagram.com/colinforkansas/)). His LinkedIn profile preview listed 1K followers and 500+ connections, and public previews show campaign posts about John Carlin's endorsement, his campaign launch, and an ICE explainer ([harvest](social-harvest.md#linkedin)). The campaign website links Facebook and TikTok accounts, but Facebook returned a logged-out access wall and TikTok did not expose reliable post metadata during capture; no candidate-controlled Truth Social, Gab, Gettr, Substack, or Reddit account was found ([harvest](social-harvest.md#presence-summary)).\n\n---\n\n**Methodology:** Date range covered: September 17, 2025 to May 11, 2026. Platforms surveyed: Bluesky, Facebook, YouTube, Instagram, TikTok, LinkedIn, X / Twitter, Truth Social, Gab, Gettr, Substack, and Reddit. Posts examined: 62 original Bluesky posts, 35 Bluesky replies, 72 Bluesky reposts, 4 YouTube videos, LinkedIn public previews, Instagram logged-out metadata, and campaign-linked platform presence checks.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "$24,699.29 (Jul.-Dec. 2025)",
    "narrative": "McRoberts is running a real but still small federal campaign. The public FEC summary cited in the source material showed $24,699.29 in receipts, $17,243.10 spent, and $7,456.19 cash on hand through December 31, 2025. The money appears to be heavily individual-donor driven rather than fueled by major institutional backing. The same summary showed $19,130 in itemized individual donations and $338 in candidate contributions, which is modest even by House standards and tiny compared with the incumbent's operation.",
    "donors": [
      {
        "name": "Itemized individual contributions",
        "amount": "$19,130.00"
      },
      {
        "name": "Unitemized individual contributions",
        "amount": "$4,912.00"
      },
      {
        "name": "Candidate contributions",
        "amount": "$338.00"
      }
    ],
    "undisclosed": "The committee is clearly active, but a full donor-by-donor FEC transactions table is not summarized here.",
    "reportingPeriod": "Jul.-Dec. 2025",
    "source": "FEC candidate overview H6KS01195 / committee C00919860"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Bluesky, Facebook, YouTube, Instagram, TikTok, LinkedIn, X / Twitter, Truth Social, Gab, Gettr, Substack, Reddit. Harvest range: 2025-09-17 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
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
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://colinforkansas.com/",
      "title": "Colinforkansas.Com",
      "publisher": "colinforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-32",
      "tier": "social",
      "url": "https://www.instagram.com/colinforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "social",
      "url": "https://www.facebook.com/colinforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social",
      "title": "Bsky.App",
      "publisher": "bsky.app",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "social",
      "url": "https://www.linkedin.com/in/colin-mcroberts-5781291/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://www.colin-mcroberts.com/",
      "title": "Colin-mcroberts.Com",
      "publisher": "colin-mcroberts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://business.ku.edu/people/colin-mcroberts",
      "title": "Business.Ku.Edu",
      "publisher": "business.ku.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://www.ratemyprofessors.com/professor/2506562",
      "title": "Ratemyprofessors.Com",
      "publisher": "ratemyprofessors.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://www.take-bac-congress.us/team/colin-mcroberts",
      "title": "Take-bac-congress.Us",
      "publisher": "take-bac-congress.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS01195/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "primary",
      "url": "https://www.fec.gov/data/committee/C00919860/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "primary",
      "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://www.laurenforkansas.com",
      "title": "Laurenforkansas.Com",
      "publisher": "laurenforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "social",
      "url": "https://www.linkedin.com/in/laurenreinhold/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "social",
      "url": "https://www.facebook.com/dgcodems/videos/2299093513898616/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://unitedkansas.com/",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "social",
      "url": "https://www.facebook.com/unitedksparty/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "social",
      "url": "https://www.linkedin.com/in/craig-musser-82880838/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://unitedkansas.com/candidates",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "primary",
      "url": "https://www.fec.gov/data/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/members-of-congress/tracey-mann/summary?cid=N00030743",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Colin_McRoberts",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/state-government/2026/jan/07/lawrence-democrats-take-aim-at-manns-congressional-seat/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://aeon.co/users/colin-mcroberts",
      "title": "Aeon.Co",
      "publisher": "aeon.co",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://skepticalinquirer.org/exclusive/a-skeptic-on-the-conspirasea-cruiseinterview-with-colin-mcroberts/",
      "title": "Skepticalinquirer.Org",
      "publisher": "skepticalinquirer.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://kansaspublicradio.org/show/genres-when-experts-attack/2020-03-04/live-performance-when-experts-attack-1-colin-mcroberts",
      "title": "Kansaspublicradio.Org",
      "publisher": "kansaspublicradio.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=281096",
      "title": "Texasbar.Com",
      "publisher": "texasbar.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/25bbb2eb-ae15-4419-8096-972bb919a48a",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://www.kcnonline.com/wp/2026/01/05/two-lawrence-dems-seek-1st-district-seat/",
      "title": "Kcnonline.Com",
      "publisher": "kcnonline.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://kansasreflector.com/tag/lauren-reinhold/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Craig_Musser",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://greatbendpost.com/posts/d2d97c94-1d35-4fc6-a09d-3453408c580e",
      "title": "Greatbendpost.Com",
      "publisher": "greatbendpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/966/202602149834322966/202602149834322966.pdf",
      "title": "Docquery.Fec.Gov",
      "publisher": "docquery.fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://www.zoominfo.com/p/Craig-Musser/9122088966",
      "title": "Zoominfo.Com",
      "publisher": "zoominfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://unitedkansas.com/about",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/United_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/07/12/united-kansas-party-files-lawsuits-to-challenge-state-law-forbidding-multi-party-nominations/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/united-kansas-officially-earns-spot-on-kansas-ballots-as-states-fifth-political-party/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2024/05-24-24-united-kansas-recognized-as-a-political-party.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026_(August_4_Democratic_primary",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026_(August_4_Republican_primary",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://www.cookpolitical.com/house/race/483106",
      "title": "Cookpolitical.Com",
      "publisher": "cookpolitical.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_United_States_House_of_Representatives_elections_in_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H0KS01123/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "secondary",
      "url": "https://www.hayspost.com/",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://colinforkansas.com/meet-colin/",
      "title": "Colin for Kansas - Meet Colin",
      "publisher": "Colinforkansas.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Colin McRoberts's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://bsky.app/profile/acog.org/post/3lzhdskbh432y",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Reposted ACOG, 2025-09-22: \"ACOG reaffirms that acetaminophen is safe for managing pain and fever during pregnancy...\" Engagement: Likes 2,011, Reposts 1,137, Replies 22, Quotes 64"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://www.facebook.com/profile.php?id=61579491833979",
      "title": "Facebook / Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Border.",
        "Facebook: campaign-linked Facebook profile/page -- linked from colinforkansas.com -- present, but logged-out harvest returned a browser/login wall on 2026-05-11. Earlier project no"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(COLIN_MCROBERTS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[colin-mcroberts.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
