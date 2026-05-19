/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const LAUREN_REINHOLD_V2: CandidateFullV2 = {
  "slug": "lauren-reinhold",
  "name": "Lauren Reinhold",
  "party": "D",
  "position": "U.S. House candidate, KS-01",
  "electionSlug": "ks-01-house-2026",
  "incumbent": false,
  "occupation": "Attorney (28 years experience), former federal employee (Social Security Administration)",
  "hometown": "Lawrence, Kansas (Douglas County)",
  "religion": "Christian (per public records)",
  "family": "Has children (raised family in Lawrence)",
  "campaignWebsite": "https://www.laurenforkansas.com",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-7",
          "s-13",
          "s-15",
          "s-16"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Across the captured Bluesky and campaign-news period, the feed contains no candidate-owned public posts about abortion, foster care, adoption, capital punishment, or religious liberty.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Across the captured period the feed contains no posts about the Ogallala Aquifer or water rights. Across the captured period the feed contains no posts about Fort Riley or Fort Hays State University. Across the captured period the feed contains no post specifically about wheat prices, though it contains broader agriculture and farm-bill references. Across the captured period the candidate-controlled posts...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
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
          "s-7",
          "s-13",
          "s-15",
          "s-16"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "2026-02-28 — reposted Kansas Reflector post: \"Opinion editor @claywires.bsky.social writes: Transgender Kansans belong here. Legislative fanatics have dishonored our state. #ksleg\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "The feed also reposted Kansas Reflector's account, which wrote, \"Opinion editor @claywires.bsky.social writes: Transgender Kansans belong here. Legislative fanatics have dishonored our state. #ksleg\" (source), and WatchYourRepsSC&TN's link to a Steady Substack post (source). Her campaign news page links to PBS NewsHour, KMAN's Within Reason, Government Executive, The New York Times, The Topeka Capital-Journal,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        }
      ]
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "Runs as a Democrat. No specific personal statement found in public sources.",
        "sourceIds": [
          "s-7",
          "s-13",
          "s-15",
          "s-16"
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
          "s-7",
          "s-13",
          "s-15",
          "s-16"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Runs as a Democrat. The Kansas Democratic Party platform supports immigration reform with a pathway to citi",
        "sourceIds": [
          "s-15",
          "s-33",
          "s-1",
          "s-2",
          "s-3",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "Facebook: Lauren for Kansas — linked from official campaign site — logged-out page request redirected to Facebook login/browser wall at capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Quote captured: \"I think Congress is kicking this down the road, just like immigration, because they don't want solutions,\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Priorities page topics: Rebuilding Rural Healthcare; Supporting Agriculture and Rural Economies; Strengthening Worker's Rights; Government Integrity and Reform; Worker-First Immigration Reform; Strengthening Social Security.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Lauren Reinhold is a Democratic candidate in Kansas' 1st Congressional District. She is a lawyer with 28 years of legal experience and a former Social Security Administration employee whose campaign grew directly out of the federal workforce upheaval tied to DOGE. Her public biography is thinner than those of the statewide candidates, but the main outlines are clear: law, federal service, and a run for Congress launched in response to layoffs and buyout pressure inside government.\n\nReinhold's professional record includes legal work, disability-related cases, administrative law, and federal union service. Unlike many congressional candidates, she did not come up through local office or party leadership. She entered the race from the federal workforce and made that disruption the emotional core of her campaign.",
  "recordSummary": "Reinhold has no legislative record, so her public record is mainly professional. She worked as an attorney-adviser at the Social Security Administration, handling disability and administrative-law matters, and she presents that work as proof that she understands how federal decisions land in ordinary people's lives.\n\nHer campaign was triggered by the DOGE push for federal employees to leave their jobs. Reinhold has said she initially resisted the pressure, then decided to run when it became clear she could either leave government quietly or fight publicly. That has made her campaign a direct rebuke to the federal-cutback politics now championed by some Kansas Republicans.",
  "ownWordsNarrative": "Across the public set captured for Lauren Reinhold, the largest share of candidate-controlled posts is campaign activity: launch events, media appearances, fundraising, merchandise, and campaign-news amplification account for [13 of 27 captured items](social-harvest.md). The issue frame most often attached to that campaign activity is federal service and work. On January 6, 2026, she posted, \"It’s about time Kansas had a friend in Washington. \n\nI’ve spent my life standing up for working people, helping families navigate broken systems, and watching Washington turn its back on rural communities.\n\nThat’s why I’m running for Congress.\n\nlaurenforkansas.com\" ([source](https://bsky.app/profile/laurenforkansas.bsky.social/post/3mbpxvgmgok22)). On May 6, after a PBS NewsHour appearance, she wrote, \"PBS NewsHour featured my campaign!  Please watch me and two other former Feds explain why we are pushing back against the mess made by DOGE.\" ([source](https://bsky.app/profile/laurenforkansas.bsky.social/post/3ml5n7qmjhk2s)).\n\nReinhold's public alignment signals come mostly through media links, reposts, and event promotion rather than through a large endorsement network. Her Bluesky feed reposted George Conway on February 28, 2026, then she wrote, \"If you told me 10 years ago that I would be reposting something from George Conway in total agreement I would’ve told you were crazy.   Pigs fly.  Moral principles can prevail.  And our president is starting a dangerous and immoral war.\" ([source](https://bsky.app/profile/laurenforkansas.bsky.social/post/3mfx2heclcc2q)). The feed also reposted Kansas Reflector's account, which wrote, \"Opinion editor @claywires.bsky.social writes: Transgender Kansans belong here. Legislative fanatics have dishonored our state. #ksleg\" ([source](https://bsky.app/profile/kansasreflector.com/post/3mfwvwu4gh223)), and WatchYourRepsSC&TN's link to a Steady Substack post ([source](https://bsky.app/profile/watchyourrepssc.bsky.social/post/3mik5audkds2e)). Her campaign news page links to PBS NewsHour, KMAN's Within Reason, Government Executive, The New York Times, The Topeka Capital-Journal, The Oberlin Herald, Lawrence Journal-World, and Kansas Reflector.\n\nThe highest-response candidate-controlled Bluesky items were small in absolute scale, reflecting a profile with 244 followers as of the May 11, 2026 capture. The May 6 PBS NewsHour share drew 7 likes, 2 reposts, and 1 reply as of May 11, 2026 ([source](https://bsky.app/profile/laurenforkansas.bsky.social/post/3ml5n7qmjhk2s)). A February 25 image post about Tracey Mann's donor base also drew 7 likes, 3 reposts, and 0 replies as of May 11, 2026; the image text said, \"TRACEY MANN ANSWERS TO DONORS, NOT KANSAS. TRACEY MANN’S LARGEST DONORS AREN’T KANSAS FARMERS, TEACHERS, OR LOCAL SMALL BUSINESSES—THEY’RE CORPORATE PACS AND FOREIGN LOBBYISTS.\" ([source](https://bsky.app/profile/laurenforkansas.bsky.social/post/3mfp3jxxkis23)). The January 6 launch post drew 5 likes and 3 reposts as of May 11, 2026 ([source](https://bsky.app/profile/laurenforkansas.bsky.social/post/3mbpxvgmgok22)).\n\nOn national issues, Reinhold's captured feed addresses voting rules, presidential power, tariffs, federal service, and foreign policy. On April 2, she posted, \"Donald Trump signed an EO restricting mail-in voting, an ESSENTIAL option for voters who are parents/working/disabled/overseas. I support the DNC’s lawsuit to stop this. In Congress, I’ll fight to protect voting rights and defend states from federal overreach. PAID FOR BY LAUREN REINHOLD FOR KANSAS.\" ([source](https://bsky.app/profile/laurenforkansas.bsky.social/post/3mik6e53p322h)). Her campaign's March 15 post quoting The Topeka Capital-Journal included her statement, \"Congress needs to take back its power and say ... tariffs are up to us, Trump.\" ([source](https://www.laurenforkansas.com/post/our-campaign-was-featured-in-the-topeka-capitol-journal-march-12-2026)). On February 28, she wrote, \"I remember this!  Why did it take him so long?\" ([source](https://bsky.app/profile/laurenforkansas.bsky.social/post/3mfwx5p2muc25)).\n\nFor KS-01 district issues, Reinhold's public material is more developed on the campaign website and campaign-news page than on Bluesky. In a January 23 campaign post reproducing an Oberlin Herald interview, she said, \"There's been a complicated series of cuts, mainly to Medicaid, that will affect rural hospitals,\" ([source](https://www.laurenforkansas.com/post/the-big-first-district-has-new-democrat-candidate)). The same post quoted her saying, \"For rural farmers, I plan to fight for a modernized, stable market farm bill,\" ([source](https://www.laurenforkansas.com/post/the-big-first-district-has-new-democrat-candidate)) and \"The federal government is not covering as much of special education for example as schools have depended on.\" ([source](https://www.laurenforkansas.com/post/the-big-first-district-has-new-democrat-candidate)). Her campaign home page also says she traveled to Hays, Dodge City, Salina, Hutchinson, and rural towns before announcing, and her priorities page lists rural healthcare, agriculture, worker rights, government reform, immigration, and Social Security ([source](https://www.laurenforkansas.com/priorities)).\n\nAcross the captured period the feed contains no posts about the Ogallala Aquifer or water rights. Across the captured period the feed contains no posts about Fort Riley or Fort Hays State University. Across the captured period the feed contains no post specifically about wheat prices, though it contains broader agriculture and farm-bill references. Across the captured period the candidate-controlled posts reviewed contain no public post about abortion, foster care, adoption, capital punishment, or religious liberty.\n\nReinhold's platform footprint is broad but uneven in logged-out accessibility. Her campaign website links to X, LinkedIn, TikTok, Facebook, Instagram, and Bluesky. The measurable public posting base is Bluesky, where the account listed 244 followers, 153 follows, and 16 posts as of May 11, 2026 ([source](https://bsky.app/profile/laurenforkansas.bsky.social)). Instagram showed 273 followers, 325 following, and 67 posts in logged-out metadata as of May 11, 2026 ([source](https://www.instagram.com/laurenforkansas/)). TikTok showed 82 followers, 67 following, 317 likes, and 3 videos as of May 11, 2026 ([source](https://www.tiktok.com/@laurenforkansas)). Facebook and X were linked from the official campaign site but did not provide logged-out post bodies at capture; LinkedIn redirected to an authwall. No candidate-owned Truth Social, Gab, Gettr, Substack, Reddit, or YouTube channel was located.\n\nDate range covered: December 18, 2025 to May 6, 2026; platforms surveyed: campaign website/news, Bluesky, X, Facebook, YouTube, Instagram, TikTok, LinkedIn, Truth Social, Gab, Gettr, Substack, and Reddit; approximately 27 candidate-controlled posts/pages and 3 reposts examined.\nWe report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Some records describe Reinhold as Christian, but no congregation or church website was documented in the accessible material.",
  "campaignFinance": {
    "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
    "narrative": "Campaign finance data exists at the federal level through the FEC, but the accessible summary material for this profile was too thin to establish a reliable narrative about totals, donors, or cash on hand. No campaign finance data available online.",
    "donors": [
      {
        "name": "LAUREN REINHOLD FOR KANSAS (C00932855)",
        "amount": "Committee on file"
      },
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online yet"
      }
    ],
    "undisclosed": "The FEC confirms a committee exists, but not yet a processed donor ledger or topline receipts summary for 2025-2026.",
    "reportingPeriod": "through 2026-04-01",
    "source": "FEC candidate overview H6KS01203 / committee C00932855"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website/news, Bluesky, X, Facebook, YouTube, Instagram, TikTok, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit. Harvest range: 2025-12-18 through 2026-05-06.",
  "sources": [
    {
      "id": "s-1",
      "tier": "social",
      "url": "https://x.com/laurenforkansas",
      "title": "@laurenforkansas",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/laurenforkansas",
      "title": "Lauren for Kansas",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.instagram.com/laurenforkansas/",
      "title": "@laurenforkansas",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://www.tiktok.com/@laurenforkansas",
      "title": "@laurenforkansas",
      "publisher": "Tiktok",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.laurenforkansas.com/",
      "title": "laurenforkansas.com",
      "publisher": "Laurenforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.laurenforkansas.com/post/our-campaign-was-featured-in-the-topeka-capitol-journal-march-12-2026",
      "title": "source",
      "publisher": "Laurenforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://www.laurenforkansas.com/post/the-big-first-district-has-new-democrat-candidate",
      "title": "source",
      "publisher": "Laurenforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://www.laurenforkansas.com/priorities",
      "title": "source",
      "publisher": "Laurenforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://www.laurenforkansas.com/post/lawrence-democrats-take-aim-at-1st-district-seat",
      "title": "Laurenforkansas",
      "publisher": "Laurenforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Lauren Reinhold."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://bsky.app/profile/kansasreflector.com/post/3mfwvwu4gh223",
      "title": "Kansas Reflector / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "The feed also reposted Kansas Reflector's account, which wrote, \"Opinion editor @claywires.bsky.social writes: Transgender Kansans belong here. Legislative fanatics have dishonored"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(LAUREN_REINHOLD_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[lauren-reinhold.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
