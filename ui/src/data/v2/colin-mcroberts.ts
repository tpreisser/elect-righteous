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
          "s-26",
          "s-1",
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
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Across the captured period the feed contains no original Bluesky posts about abortion policy, marriage policy, religious-liberty policy, water rights, the Ogallala Aquifer, Fort Riley, rural hospital closures, or Medicaid expansion (harvest). Healthcare appears mainly through immigration enforcement, scientific research, and agency-accountability posts rather than a sustained district-healthcare thread. The...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
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
          "s-2",
          "s-18",
          "s-19",
          "s-20"
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
          "s-2",
          "s-18",
          "s-19",
          "s-20"
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
          "s-2",
          "s-18",
          "s-19",
          "s-20"
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
          "s-2",
          "s-18",
          "s-19",
          "s-20"
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
            "s-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Healthcare appears mostly through ICE, research funding, disease / science reposts, and the campaign issue page; detailed healthcare delivery policy was not a frequent social-feed topic in the captured posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
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
      "tier": "social",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social",
      "title": "@colinmcroberts.bsky.social",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://colinforkansas.com/",
      "title": "colinforkansas.com",
      "publisher": "Colinforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.facebook.com/colinforkansas",
      "title": "facebook.com/colinforkansas",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.youtube.com/@ColinforKansas",
      "title": "Colin McRoberts for Congress",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://www.instagram.com/colinforkansas/",
      "title": "@colinforkansas",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://www.colin-mcroberts.com/",
      "title": "colin-mcroberts.com",
      "publisher": "Colin-Mcroberts",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://business.ku.edu/people/colin-mcroberts",
      "title": "business.ku.edu/people/colin-mcroberts",
      "publisher": "Business.Ku",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://www.take-bac-congress.us/team/colin-mcroberts",
      "title": "take-bac-congress.us/team/colin-mcroberts",
      "publisher": "Take-Bac-Congress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://kansaspublicradio.org/show/genres-when-experts-attack/2020-03-04/live-performance-when-experts-attack-1-colin-mcroberts",
      "title": "Kansas Public Radio - \"When Experts Attack: ConspiraSea Cruise\"",
      "publisher": "Kansaspublicradio",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Colin McRoberts."
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
