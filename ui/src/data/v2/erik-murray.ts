/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ERIK_MURRAY_V2: CandidateFullV2 = {
  "slug": "erik-murray",
  "name": "Erik Murray",
  "party": "D",
  "position": "U.S. Senate candidate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "Attorney / Public Servant",
  "born": "Kansas City, Kansas",
  "hometown": "Kansas City, Kansas (Wyandotte County)",
  "family": "Married to Nicole. Lives in Wyandotte County.",
  "campaignWebsite": "https://erikforkansas.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-7",
          "s-8",
          "s-9"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "YouTube",
          "observation": "Across the captured YouTube and campaign-update period, the feed contains no posts about abortion, immigration, guns, religious liberty, Fort Riley, Fort Hays State University, the Ogallala Aquifer, or water policy. The captured feed includes two items that mention farms or rural hospitals and does not include a farm-policy plan.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Across the captured period the feed contains no posts about abortion, immigration, guns, religious liberty, Fort Riley, Fort Hays State University, the Ogallala Aquifer, or water policy (harvest). The captured feed includes two items that mention farms or rural hospitals, but it does not include a farm-policy plan (harvest).",
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
          "s-1",
          "s-7",
          "s-8",
          "s-9"
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
          "s-7",
          "s-8",
          "s-9"
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
          "s-7",
          "s-8",
          "s-9"
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
          "s-14",
          "s-1",
          "s-2",
          "s-3",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "erikforkansas.com",
          "observation": "\"For decades, Wyandotte County has been treated as a corridor to drive through, not a community to invest in, with highways like 635 carving through neighborhoods such as Quindaro while Wall Street and Topeka looked the other way.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-8"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Erik Murray is a Kansas City, Kansas, developer and entrepreneur running for the Democratic nomination for U.S. Senate in 2026. He was born at KU Med, grew up in Kansas City, Kansas, and has described himself as a local candidate returning home after years in California business and investment work.\n\nMurray's public identity is tied most strongly to development. The centerpiece is the proposed redevelopment of the former Indian Springs Mall site in Wyandotte County, a large mixed-use plan that has been described in public reporting as a billion-dollar effort built around housing, retail, childcare, job training, transit access, and other community uses.\n\nHe has never held elected office. His case for office is that a developer who has worked with lenders, investors, and local governments can better connect federal policy to neighborhood outcomes, especially for small businesses and distressed communities.",
  "recordSummary": "Murray's record is not a legislative one. It is a business and redevelopment record, and the largest public project attached to his name is the Indian Springs plan in Kansas City, Kansas. The project has been promoted as a major reinvestment proposal for the east side of the city, but it has also been slowed by disputes with the Unified Government over land price, financing, and project terms.\n\nThose negotiations became part of Murray's political profile in 2026. KSHB reported that the developer and the Unified Government remained far apart on key terms, and Murray publicly argued that taxpayers deserved more transparency about the stalled talks. That turned a local development fight into one of the clearest public tests of his management style.\n\nMurray has also drawn attention for how he talks about politics and capital. Kansas Reflector reported that he became attuned to the disconnect between what capital wants and what communities want, and later national conservative coverage highlighted his comments about the influence of former Black Panther leader Elaine Brown. That made him one of the more unusual biographies in the Democratic field: part developer, part civic-reinvestment candidate, and part culture-war target.",
  "ownWordsNarrative": "*A summary of what Erik Murray has publicly said, posted, and amplified across social media. Drawn from public posts on YouTube, Facebook, Instagram, X, and campaign-published updates between February 22, 2026 and May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross 17 captured substantive candidate-controlled items, Murray's feed most often returns to local investment, housing, small business, affordability, and economic development: 6 items, or 35 percent of the set ([harvest](social-harvest.md#topic-share-analysis)). In an April 20 YouTube Short, he posted, \"An extractive economy is one that takes more from a place than it puts back. You see it when wealth is generated locally but quickly transferred elsewhere through corporate structures, outside ownership, or policy decisions that prioritize short-term gain over long-term stability.\" ([source](https://www.youtube.com/shorts/7otJxN9_jS8)) In a February 22 housing video description, he wrote, \"If there are not enough houses, build more houses.\" ([source](https://www.youtube.com/shorts/tDVoGEdKde0))\n\nMurray's candidate-controlled accounts point readers back to the same campaign network: the campaign website links to Facebook, Instagram, YouTube, and X, while YouTube descriptions repeatedly list ErikForKansas.com and campaign social handles ([harvest](social-harvest.md#platform-profiles)). His local references include Trox, Sumner Academy, Lorie Wood, Wyandotte County, Quindaro, Gov. Laura Kelly, and Unified Government Mayor and CEO Christal Watson. In a May 10 post about Trox, he wrote, \"That’s what makes places like this matter. It’s not just coffee. It’s art, mentorship, memory, small business, and community all in one space.\" ([source](https://www.youtube.com/shorts/H7J_Nnc7uyo))\n\nThe highest-engagement YouTube item in the captured set was *There SHOULD be TERM LIMITS*, with 1,558 views and a rating count of 45 as of May 11, 2026 ([harvest](social-harvest.md#topic-share-analysis)). The next highest by rating count was *HEALTHCARE is a RIGHT*, with 1,409 views and a rating count of 32 as of May 11, 2026 ([harvest](social-harvest.md#topic-share-analysis)). Other high-view items included affordability at 1,340 views, *America's Broken Promises* at 1,261 views, and housing at 1,156 views, all captured May 11, 2026 ([harvest](social-harvest.md#topic-share-analysis)).\n\nNational and foreign-policy posts appear in a smaller part of the feed. A March 8 YouTube description said, \"We have a President who promised to end foreign wars on day one, and now he’s launching another one. At the same time we’re told there’s no money for feeding poor children, no money for education, and no money for healthcare.\" ([source](https://www.youtube.com/shorts/YLa4pXvG3rY)) The same post continued, \"Meanwhile our farmers are struggling. Farm closures are rising. Rural hospitals are shutting down. Small businesses are getting squeezed by tariffs. Rural economies are feeling it every single day.\" ([source](https://www.youtube.com/shorts/YLa4pXvG3rY))\n\nLocal-district engagement centers on Kansas City, Kansas, Wyandotte County, Sumner Academy, and the Indian Springs Mall redevelopment record. In a March 12 campaign press release on the Chiefs stadium negotiations, Murray said, \"What we are opposed to is leaving the community of Wyandotte behind.\" ([source](https://erikforkansas.com/news/chiefs)) In an April 19 education post, he wrote, \"Thank you Sumner Academy for giving me, my parents and my kids a world class education.\" ([source](https://www.youtube.com/shorts/by-pc3VzOIE))\n\nAcross the captured period the feed contains no posts about abortion, immigration, guns, religious liberty, Fort Riley, Fort Hays State University, the Ogallala Aquifer, or water policy ([harvest](social-harvest.md#visible-absences-in-captured-feed)). The captured feed includes two items that mention farms or rural hospitals, but it does not include a farm-policy plan ([harvest](social-harvest.md#visible-absences-in-captured-feed)).\n\nMurray maintains public campaign presences on Facebook, Instagram, YouTube, and X; his LinkedIn profile was visible as an identity check ([harvest](social-harvest.md#presence-detector)). Facebook showed 2,168 likes and 2,142 talking about this, Instagram showed 436 followers and 58 posts, and X showed 16 followers and 5 statuses as of May 11, 2026, but logged-out post text was not available from Facebook, Instagram, or X in this harvest ([harvest](social-harvest.md#platform-profiles)). No candidate-controlled Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was found ([harvest](social-harvest.md#presence-detector)).\n\n---\n\n**Methodology:** Date range covered: February 22, 2026 to May 11, 2026. Platforms surveyed: campaign website, YouTube, Facebook, Instagram, X, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, and TikTok. Post count: 17 substantive candidate-controlled original items captured, consisting of 15 YouTube videos and 2 dated campaign website updates, plus 1 undated launch placeholder and profile-level checks on Facebook, Instagram, X, and LinkedIn.\n\nWe report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.\n\nHis public background includes childhood ties to Fellowship Christian Church and schooling at St. Patrick's Catholic School, but the available record does not identify a present-day congregation.",
  "campaignFinance": {
    "totalRaised": "$124,598.62 (FEC coverage: 11/23/2025 to 12/31/2025)",
    "narrative": "Public FEC summary data cited in the raw material showed Murray with $124,598.62 in receipts, $15,625.69 in disbursements, and $108,972.93 cash on hand through December 31, 2025. The same summary described the campaign as donor-funded rather than self-funded, but the raw material did not provide a fuller donor-by-donor breakdown.",
    "donors": [
      {
        "name": "Itemized individual contributions",
        "amount": "$119,800.00"
      },
      {
        "name": "Unitemized individual contributions",
        "amount": "$4,798.62"
      },
      {
        "name": "Loans made by candidate",
        "amount": "$0.00"
      }
    ],
    "undisclosed": "The official FEC summary totals are clear, but a full donor-by-donor transaction list is not summarized here.",
    "reportingPeriod": "through 2025-12-31",
    "source": "FEC candidate overview S6KS00270 / committee C00929240"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, YouTube, Facebook, Instagram, X, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok. Harvest range: 2026-02-22 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://erikforkansas.com/",
      "title": "erikforkansas.com",
      "publisher": "Erikforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Erik Murray."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/profile.php?id=61584336359633",
      "title": "Erik Murray for Kansas",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Erik Murray."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.instagram.com/erikforkansas/",
      "title": "@erikforkansas",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Erik Murray."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://erikforkansas.com/news/tornado-relief",
      "title": "source",
      "publisher": "Erikforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Erik Murray."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://erikforkansas.com/news/chiefs",
      "title": "source",
      "publisher": "Erikforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Erik Murray.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://erikforkansas.com/news/launch",
      "title": "source",
      "publisher": "Erikforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Erik Murray."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kck-developer-announces-for-u-s-senate-as-democratic-primary-grows-to-five/",
      "title": "Sunflower State Journal - Erik Murray Filing",
      "publisher": "Sunflowerstatejournal",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Erik Murray."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ERIK_MURRAY_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[erik-murray.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
