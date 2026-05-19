/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ETHAN_CORSON_V2: CandidateFullV2 = {
  "slug": "ethan-corson",
  "name": "Ethan Corson",
  "party": "D",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "State Senator / Attorney",
  "campaignWebsite": "https://ethanforkansas.com",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Has not taken a clear, specific public position in the governor's race, though his Democratic platform and party alignment suggest support for abortion access.",
        "sourceIds": [
          "s-9",
          "s-14",
          "s-15",
          "s-22",
          "s-1",
          "s-2"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "The captured candidate-controlled social material did not show sustained original posts on abortion, LGBTQ+ policy, gun policy, immigration, marijuana, water rights, energy policy, or religious-liberty policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Across the captured period, the candidate-controlled public footprint does not show sustained social posting on abortion, LGBTQ+ policy, gun policy, immigration, marijuana, water rights, energy policy, or religious-liberty policy. Those may exist in questionnaires, legislative votes, interviews, private/platform-limited content, or future campaign material, but they were not prominent in the visible...",
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
          "s-6",
          "s-7",
          "s-8"
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
          "s-6",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Faith/religion appeared in external biographical coverage identifying Corson as Jewish, but not as a campaign-message theme in the captured 2025-2026 campaign social material.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        }
      ]
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-6",
          "s-7",
          "s-8"
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
          "s-9",
          "s-14",
          "s-15",
          "s-20",
          "s-1",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Ethan Corson is a Democratic state senator from Fairway who is running for governor in 2026. He is a lifelong Kansan whose public biography runs from Garden City Community College baseball to degrees from Washington University in St. Louis and Washington University School of Law, followed by work in Washington and Kansas politics.\n\nCorson's resume combines law, party leadership, and government service. Public accounts describe him as a lawyer, a former executive director of the Kansas Democratic Party, and a former official at the U.S. Department of Commerce. He later won a seat in the Kansas Senate, giving him both state and federal policy experience before launching a statewide campaign.\n\nHe has emerged as one of the most institutionally backed Democrats in the governor's race. The raw material ties him to endorsements from Gov. Laura Kelly, former Gov. Kathleen Sebelius, and Rep. Sharice Davids, which has helped establish him as a leading candidate in the field.",
  "recordSummary": "Corson's record is centered on the Kansas Senate and on policy work outside elected office. Public materials connect him to Senate committee work on judiciary, transportation, taxation, utilities, and oversight, while his campaign has highlighted schools, lower taxes, cost of living, health care access, and agriculture.\n\nHis candidacy has also been shaped by establishment support and by fundraising. Kansas Reflector's campaign-finance roundup cited his 2025 year-end total at $902,641.13 raised, with $526,975.81 cash on hand after $375,665.32 in spending. The same reporting described him as drawing support from thousands of contributors, with roughly 70% giving less than $100.\n\nCorson's public record also stands out because his Jewish identity is part of the public file. Coverage by the Kansas City Jewish Chronicle and other sources makes that religious background clear, even though the available sources did not identify a current synagogue membership.",
  "ownWordsNarrative": "*A summary of what Ethan Corson has publicly said, posted, and amplified across candidate-controlled public channels and credible indexed public coverage. Drawn from his campaign website, embedded X feed, Facebook, Instagram, LinkedIn previews, official legislative/caucus profile, and public reporting between July 22, 2025 and May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the captured public record, Corson's campaign message is built around kitchen-table governance: schools, taxes, affordability, business growth, and the next generation staying in Kansas. His campaign site says, \"It's about kitchen table issues. Better Schools. Lower Taxes.\" and frames the race around \"Opportunities for the next generation of Kansans, so they can build a life right here\" ([harvest](social-harvest.md#campaign-website-issue-language)). The same site says he was raised on values to \"work hard, give back whenever you can and always keep your word\" ([source](https://ethanforkansas.com/about)). In the topic-coded harvest, affordability, taxes, and cost of living appear in 5 of 21 visible artifacts, while education and public schools appear in 4 of 21 ([harvest](social-harvest.md#topic-share-analysis)).\n\nCorson presents himself as a bipartisan, moderate, results-focused Democrat rather than an ideological fighter. In his launch statement, he said, \"I'm not interested in the partisan battles you see on cable news. Kansans want leaders who work together, regardless of political party, to get things done\" ([source](https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/)). On the Kansas Reflector podcast, he said Kansas does not need a governor who will move the state \"to the right\" or \"to the left,\" but one who will \"move this state forward\" ([source](https://kansasreflector.com/2025/09/02/kansas-senator-makes-common-sense-common-ground-pitch-for-democratic-nomination-for-governor/)). That same interview captured his preferred governing formula as \"common sense, common ground moderate leadership\" across party lines ([source](https://kansasreflector.com/2025/09/02/kansas-senator-makes-common-sense-common-ground-pitch-for-democratic-nomination-for-governor/)).\n\nThe captured X feed embedded on Corson's campaign site shows a candidate physically campaigning across Democratic organizations, counties, and local events in late April and early May 2026. On May 9, 2026, the embedded feed showed posts thanking the Harvey County Democrats and Johnson County Democrats. On May 4, he posted about being in Lyon County at a chili and cinnamon roll event. On April 30, he wrote that April had the campaign \"crisscrossing Kansas\" with \"miles on the road\" and \"conversations in every corner\" ([harvest](social-harvest.md#campaign-site--x-feed-posts)). The campaign-site embed also surfaced a May 7 post tying his Garden City Telegram interview to his college-town biography ([source](https://twitter.com/ethancorson/status/2052514742099439889)).\n\nCorson's economic message combines affordability with business recruitment and local-chamber outreach. The campaign-site X embed included April 27 and April 29 posts on rising costs, including: \"Affordability isn't an abstract issue in Kansas, it's the difference between building a stable life and co...\" and \"From rural communities to our biggest cities, Kansans are feeling the pressure of rising costs and stretched b...\" ([harvest](social-harvest.md#campaign-site--x-feed-posts)). LinkedIn's public preview showed posts about meeting Pittsburg city and chamber leadership and the Lawrence Chamber of Commerce, including a line about how as governor he would \"support businesses of all sizes and keep growing...\" ([harvest](social-harvest.md#linkedin-public-preview)).\n\nPublic schools are both a policy message and a personal biography signal. His campaign site leads with \"Better Schools,\" and indexed campaign snippets refer to mental health services in schools and special education funding ([harvest](social-harvest.md#campaign-website-issue-language)). In a 2019 campaign quote that remains part of his public record, Corson said, \"Every opportunity I've had in my life is due to the education I received from attending Shawnee Mission public schools\" ([source](https://kcjc.com/section-blog/1819-news/archived-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7)). LinkedIn's public preview also showed him posting about returning to Shawnee Mission South, his old high school, and talking with students ([harvest](social-harvest.md#linkedin-public-preview)).\n\nOn health care, the visible 2026 gubernatorial material emphasizes access and rural distance rather than a detailed program. At a March 8, 2026 Democratic debate, Corson said, \"Kansans should be able to get the care that they need without going broke and without driving for hours to see a doctor\" ([source](https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/)). The campaign site also surfaced mental-health language, including snippets about school mental-health services and mental health as a concern for \"parents to first responders and farmers\" ([source](https://ethanforkansas.com/about)). In the captured harvest, health care and mental health appear in 2 of 21 coded artifacts ([harvest](social-harvest.md#topic-share-analysis)).\n\nThe strongest visible audience signals are platform-level, not post-level. As of the May 11, 2026 logged-out capture, Facebook metadata showed [Ethan for Kansas](https://www.facebook.com/ethanforkansas) with 2,027 likes and 220 talking about this; Instagram metadata showed [@ethanforkansas](https://www.instagram.com/ethanforkansas/) with 757 followers, 13 following, and 256 posts; LinkedIn's public preview showed 2K followers and 500+ connections ([harvest](social-harvest.md#presence-summary)). Post-level engagement was not visible in the logged-out X embed, Instagram page, Facebook page, or LinkedIn preview ([harvest](social-harvest.md#highest-visible-engagement)).\n\nAcross the captured period, the candidate-controlled public footprint does not show sustained social posting on abortion, LGBTQ+ policy, gun policy, immigration, marijuana, water rights, energy policy, or religious-liberty policy. Those may exist in questionnaires, legislative votes, interviews, private/platform-limited content, or future campaign material, but they were not prominent in the visible candidate-controlled social capture through May 11, 2026 ([harvest](social-harvest.md#visible-absences)). The public biographical record identifies Corson as Jewish, but the captured campaign social material does not make faith a major campaign theme ([harvest](social-harvest.md#visible-absences)).\n\n---\n\n**Methodology:** Date range covered: July 22, 2025 to May 11, 2026 for gubernatorial-campaign material. Platforms surveyed: campaign website, X/Twitter, Facebook, Instagram, LinkedIn, Kansas Senate Democrats official profile, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, and Reddit. Posts examined: 9 campaign-site embedded X posts, campaign-site issue/value snippets, public Facebook/Instagram metadata, LinkedIn indexed preview items, official caucus-profile links, and credible indexed public reporting.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources identify Corson as Jewish, but they do not identify a current synagogue affiliation.",
  "church": {
    "name": "Attends a church in the Fairway/KC area (name unknown)",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Unknown. Lives in Fairway with wife Jenna and sons Isaac and Aiden."
  },
  "campaignFinance": {
    "totalRaised": "$902,641.13 (2025 year-end)",
    "narrative": "Corson's 2025 year-end report showed $902,641.13 raised, $375,665.32 spent, and $526,975.81 cash on hand, with $43,019 in other transactions also listed in the filing. The available reporting described the campaign as broad-based rather than self-funded, with thousands of contributors and a large share of small-dollar donations.",
    "donors": [
      {
        "name": "Tony Atterbury",
        "amount": "$4,000"
      },
      {
        "name": "Amy Bartak",
        "amount": "$250"
      },
      {
        "name": "Mary Becker",
        "amount": "$200"
      },
      {
        "name": "Matt Birch",
        "amount": "$500"
      },
      {
        "name": "Louis Bornman",
        "amount": "$100"
      },
      {
        "name": "William Bradley",
        "amount": "$500"
      },
      {
        "name": "Jim Breneman",
        "amount": "$25"
      }
    ],
    "undisclosed": "The filing contains many more donors than the small extracted sample listed here.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and campaign-finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, X / Twitter, Facebook, Instagram, LinkedIn, Kansas Senate Democrats profile, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Reddit. Harvest range: 2025-07-22 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "ethanforkansas.com",
      "publisher": "Ethanforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://x.com/ethancorson",
      "title": "@ethancorson",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.facebook.com/ethanforkansas",
      "title": "Ethan for Kansas",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson-1",
      "title": "Senator Ethan Corson",
      "publisher": "Kssenatedems",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.ethanforkansas.com/",
      "title": "ethanforkansas.com",
      "publisher": "Ethanforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/about",
      "title": "campaign site",
      "publisher": "Ethanforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansas Reflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
      "title": "Kansas Reflector: Kelly endorses Corson (Nov 17, 2025)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
      "title": "Kansas Reflector: Sebelius endorses Corson (Jan 2026)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson",
      "title": "Kansas Senate Democrats: Corson bio",
      "publisher": "Kssenatedems",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
      "title": "Johnson County Post: Corson enters race (July 22, 2025)",
      "publisher": "Johnsoncountypost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ethan Corson."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ETHAN_CORSON_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ethan-corson.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
