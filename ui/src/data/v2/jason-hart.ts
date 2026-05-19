/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JASON_HART_V2: CandidateFullV2 = {
  "slug": "jason-hart",
  "name": "Jason Hart",
  "party": "D",
  "position": "U.S. Senate candidate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "U.S. Senate candidate",
  "hometown": "Wichita, KS",
  "family": "Married with family. Describes himself as a husband and father.",
  "campaignWebsite": "https://hartforsenate.com",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Has not taken a specific public position on abortion in the available record.",
        "sourceIds": [
          "s-23",
          "s-24",
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
          "platform": "hartforsenate.com",
          "observation": "Issues page: hartforsenate.com/issues lists ten issue areas: Assert Congressional Authority; Provide for Our Veterans; Provide for Kansans' Health; Promote Rational Immigration Solutions; Help Rural Kansas; Recognize Our Shared Dignity; Protect Public Education; Protecting Reproductive Rights; Hold Big Tech Accountable; Promote Democratic Values.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-9"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Across the captured Bluesky period the feed contains no post-length discussion of abortion; the official issues page lists \"Protecting Reproductive Rights\" and \"Support Kansans' 2022 Vote.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Across 35 captured Bluesky posts, Hart's largest single category is policy and issue statements, with 14 posts, or 40 percent of the captured original feed. The March 16 opening post wrote, \"Jason Hart has filed to run for U.S. Senate\" (source), then listed family bills, health, veterans, immigration, and children online as the opening frame. On April 23, he wrote, \"Rural Kansas needs real access to healthcare...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-10"
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
          "s-9",
          "s-23",
          "s-24"
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
          "s-8",
          "s-9",
          "s-23",
          "s-24"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Describes himself as \"2A-friendly\" and has made his support for gun rights a central part of his electability pitch as a Democrat in Kansas.",
        "sourceIds": [
          "s-23",
          "s-24",
          "s-2",
          "s-3",
          "s-6",
          "s-12"
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
          "s-12",
          "s-14",
          "s-23",
          "s-24",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Most-used tags: #HartForKansas, #KansansHaveHart, #Democrats, #Senate. Issue tags appeared on immigration enforcement, Pride, Iran, and ICT SOS posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "On immigration enforcement, he wrote, \"Renée Good and Alex Pretti were killed, and five‑year‑old Liam Ramos was taken into ICE custody during a federal enforcement operation\" (source). In the KMUW/Kansas Reflector interview, he said, \"That service has been as an advocate for your interests\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-19"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Jason Hart is a Wichita lawyer and former federal prosecutor running for the Democratic nomination for U.S. Senate in 2026. His public biography is built around more than two decades in prosecution, including work in Dodge City, the Shawnee County District Attorney's office, the Kansas Attorney General's office, and 16 years as an assistant U.S. attorney in Kansas.\n\nHart entered the race in March 2026 after leaving his federal post. That made him one of the latest entrants in the field, but also one of the most unusual. He launched with a law-and-order résumé, a deliberate pitch to disaffected Republicans, and a party-history story that drew immediate attention.\n\nThat party-history story is central to his profile. Hart had been registered as an independent, changed to Republican in February 2026 while considering a run against Rep. Ron Estes, and then changed to Democrat in March 2026 when he entered the Senate race. He has described the decision to run as the product of prayerful and tearful discussions with his wife and family.",
  "recordSummary": "Hart does not have a legislative record, so his public record is mostly his work as a prosecutor and the circumstances of his campaign launch. The strongest credential in the raw material is his 16-year tenure as an assistant U.S. attorney handling child exploitation and cybercrime cases under both Republican and Democratic administrations.\n\nHis candidacy has been shaped as much by rhetoric as by résumé. Kansas Reflector reported that Hart has openly courted Republicans who feel estranged from the current GOP, and he has argued that Kansas Democrats need a candidate who can draw those voters rather than just consolidate the party base.\n\nThat argument has also created controversy inside the Democratic field. Hart publicly described himself as a \"white, male, Christian, hetero, 2A-friendly, LEO-friendly\" candidate, presenting those traits as part of his electability case in Kansas. Supporters can read that as blunt realism; critics can read it as a narrow theory of representation.",
  "ownWordsNarrative": "*A summary of what Jason Hart has publicly said, posted, and amplified across social media. Drawn from public posts on Bluesky, X, Facebook, YouTube, Instagram, TikTok, LinkedIn, and official campaign pages between March 16, 2026 and May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross [35 captured Bluesky posts](social-harvest.md), Hart's largest single category is policy and issue statements, with 14 posts, or 40 percent of the captured original feed. The March 16 opening post wrote, \"Jason Hart has filed to run for U.S. Senate\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mh7eajrwos2f)), then listed family bills, health, veterans, immigration, and children online as the opening frame. On April 23, he wrote, \"Rural Kansas needs real access to healthcare providers\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk6fxkfosc2x)). His [official issues page](https://hartforsenate.com/issues) lists ten policy areas, including veterans, healthcare, immigration, rural Kansas, public education, reproductive rights, technology, and campaign-finance rules.\n\nHart's public alignment signal is built more through events and organizations than through reposts. The captured Bluesky feed contains no reposts from other accounts and no shared posts from Democratic primary opponents. He posted appearances with the [Harvey County Democratic Party](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mklfhsqnvc22), [Kingman County Democrats](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mjwqagwvp222), and [Riley County Democratic Party](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mhyeggmxh22l), and wrote that he attended [Little Apple Pride](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mklf7g4loc22) and [ICT SOS's 15th Anniversary Celebration](https://bsky.app/profile/kansanshavehart.bsky.social/post/3miegj7xaa22s). In a March 25 KMUW republication of a Kansas Reflector interview, he said, \"There are many Republicans who are in the wilderness right now\" ([source](https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness)).\n\nVisible audience response is small on Bluesky and larger on YouTube Shorts. The most-engaged Bluesky item was the March 16 filing post, with 7 likes, 1 repost, 0 replies, and 0 quotes as of the May 11, 2026 capture ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mh7eajrwos2f)). Two issue-and-record posts each had 2 likes and 2 reposts: the April 23 rural-healthcare post ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk6fxkfosc2x)) and the March 26 prosecutor-record post ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mhxxymz6k22j)). On YouTube, the highest-viewed captured short was the April 23 Iran video, titled \"To clarify… this has happened five times now,\" ([source](https://www.youtube.com/shorts/PCjrC2kT-QA)) with 1,245 views and a star-rating count of 19 as of May 11, 2026.\n\nHart's national and foreign-policy posts are present but less frequent than healthcare, agriculture, campaign events, and biography. On April 23, he posted, \"When troops are in active operations, accountability matters at every level\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk6wzvbujk25)). His YouTube channel also includes an April 7 Iran short titled \"This isn’t right\" ([source](https://www.youtube.com/shorts/-OCEAu9lf84)), with 881 views and a star-rating count of 38 as of May 11, 2026. On immigration enforcement, he wrote, \"Renée Good and Alex Pretti were killed, and five‑year‑old Liam Ramos was taken into ICE custody during a federal enforcement operation\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mj3eahdcyc2p)). In the KMUW/Kansas Reflector interview, he said, \"That service has been as an advocate for your interests\" ([source](https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness)).\n\nFor Kansas-specific issues, Hart's feed names rural healthcare, agriculture, severe-weather forecasting, and county-level campaign stops. On April 22, he wrote that he heard from farmers \"across the political spectrum\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk4bhpgo4c2p)) at a Harvey County Farm Bureau Association event. On April 8, he wrote, \"Kansas farmers are getting hit from every direction with higher fuel and fertilizer costs\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3miyghyp6jc2b)). His events feed includes Dodge City, Pittsburg, Harvey County, Kingman County, Riley County, Manhattan, Hesston, and Wichita. His official issues page separately lists water conservation, foreign markets for farmers and ranchers, Medicaid and Medicare expansion, VA staffing, and public education as policy priorities ([source](https://hartforsenate.com/issues)).\n\nAcross the captured social period the feed contains no posts about the Farm Bill by name, Fort Riley by name, higher-education affordability, housing costs, child care costs, or the Ogallala Aquifer by name. Across the captured social period the feed contains no post-length discussion of abortion, though the official campaign issues page lists Protecting Reproductive Rights and Support Kansans' 2022 Vote ([source](https://hartforsenate.com/issues)). Across the captured social period the feed contains no reposts or quote-posts from primary opponents.\n\nHart's platform footprint spans several accounts, with low visible engagement in the captured metrics. His campaign website links to [Facebook](https://www.facebook.com/KansansHaveHart), [Instagram](https://www.instagram.com/kansanshavehart), [Bluesky](https://bsky.app/profile/kansanshavehart.bsky.social), [X](https://x.com/kansanshavehart), [TikTok](https://www.tiktok.com/@hartforkansas), and [YouTube](https://www.youtube.com/@kansanshavehart). As of May 11, 2026, Bluesky showed 6 followers, 2 follows, and 35 posts; X showed 7 followers, 2 following, and 36 statuses; Facebook showed 281 likes; TikTok showed 131 followers, 4 following, 788 likes, and 7 videos; YouTube RSS showed 7 public Shorts. No candidate-controlled Truth Social, Gab, Gettr, Substack, or Reddit account was found in the captured search pass.\n\n**Methodology:** Date range covered: March 16, 2026 to May 11, 2026. Platforms surveyed: official campaign site, Bluesky, X, Facebook, YouTube, Instagram, TikTok, LinkedIn, Truth Social, Gab, Gettr, Substack, and Reddit. Posts examined: 35 original Bluesky posts, 0 visible Bluesky reposts, 7 YouTube Shorts, and account-level TikTok, Facebook, X, Instagram, and LinkedIn metadata.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources identify Hart as Christian, but they do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No public FEC finance summary available online as of 2026-04-01",
    "narrative": "No campaign finance data available online. The raw material cited his campaign site, ActBlue page, and FEC registration, but it did not provide a usable public totals summary.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online yet"
      }
    ],
    "undisclosed": "Hart's first meaningful federal finance report may still be pending the next FEC disclosure window.",
    "reportingPeriod": "through 2026-04-01",
    "source": "FEC search, campaign records, and reviewed public reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Bluesky, X, Facebook, YouTube, Instagram, TikTok, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit. Harvest range: 2026-03-16 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "social",
      "url": "https://x.com/kansanshavehart",
      "title": "@KansansHaveHart",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/KansansHaveHart",
      "title": "Hart for Kansas / KansansHaveHart",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.youtube.com/@kansanshavehart",
      "title": "Hart for Kansas / @kansanshavehart",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.instagram.com/kansanshavehart/",
      "title": "@kansanshavehart",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-6",
      "tier": "social",
      "url": "https://www.tiktok.com/@hartforkansas",
      "title": "@hartforkansas",
      "publisher": "Tiktok",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://hartforsenate.com/",
      "title": "hartforsenate.com",
      "publisher": "Hartforsenate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://hartforsenate.com/issues",
      "title": "hartforsenate.com/issues",
      "publisher": "Hartforsenate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-10",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mh7eajrwos2f",
      "title": "2026-03-16 campaign filing post",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-12",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mklfhsqnvc22",
      "title": "Harvey County Democratic Party",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-14",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mhyeggmxh22l",
      "title": "Riley County Democratic Party",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-19",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mj3eahdcyc2p",
      "title": "source",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
      "title": "Kansas Reflector - Hart Profile (Mar 2026)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "KMUW - Hart Profile (Mar 2026)",
      "publisher": "Kmuw",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jason Hart."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JASON_HART_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jason-hart.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
