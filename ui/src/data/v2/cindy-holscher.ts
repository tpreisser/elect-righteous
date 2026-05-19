/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CINDY_HOLSCHER_V2: CandidateFullV2 = {
  "slug": "cindy-holscher",
  "name": "Cindy Holscher",
  "party": "D",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "State Senator",
  "campaignWebsite": "https://cindyforkansas.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Supports reproductive freedom. Has been a visible Democratic voice on reproductive rights in the Kansas Legislature.",
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
          "platform": "Kansas Reflector",
          "observation": "KMUW / Kansas Reflector coverage of an April 26, 2026 forum reported that Holscher cast herself as the anti-establishment Democrat, criticized Republican \"culture war\" bills, attacked CoreCivic-linked donations to her opponent, said she had never taken CoreCivic money and never would, supported making voting easier and reproductive health care access, and described a coalition of nurses, teachers, neighbors,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "The captured Bluesky feed strongly features education, affordability, healthcare, redistricting, tariffs/agriculture, and campaign outreach. It contains less sustained original discussion of gun policy, water policy/Ogallala depletion, abortion policy after launch, or detailed state-budget mechanics than the website priorities and news coverage do.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Abortion and reproductive-health access appear in indexed forum coverage -- KMUW reported both Democratic candidates supported access to reproductive healthcare -- but abortion was not a high-frequency original Bluesky topic in the captured period (source). Faith references appear occasionally, including Jewish holiday greetings and criticism of the Kansas Catholic Conference's immigration stance, but the social...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
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
          "observation": "Civil rights, LGBTQ policy, immigration/migrant care, religious-community references, political violence, and innocence/public-safety topics not already captured above: 6 posts (1%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
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
          "observation": "Faith references are occasional and issue-linked rather than biographical; examples include Rosh Hashanah greetings and criticism of the Kansas Catholic Conference's position on Trump immigration policy. No current church affiliation was confirmed in this social pass.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
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
          "observation": "The captured record has notable gaps. The Bluesky feed and campaign pages give much more attention to schools, affordability, healthcare, labor, redistricting, and federal cuts than to gun policy, water policy, the Ogallala Aquifer, or detailed state-budget mechanics (harvest).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        }
      ]
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Runs as a Democrat. The Kansas Democratic Party platform supports immigration reform with a pathway to citi",
        "sourceIds": [
          "s-35",
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
          "platform": "cindyforkansas.com",
          "observation": "Campaign news page: cindyforkansas.com/news -- active; visible releases through April 29, 2026, including voting-rights, CoreCivic, legislative-session, cell-phone-ban, ICE detention, Chiefs stadium, lower-costs agenda, polling, health-care, and redistricting items.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-4"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "cindyforkansas.com",
          "observation": "The news page shows campaign press activity through April 29, 2026. The latest visible items focused on voting rights, CoreCivic, the legislative session, cell-phone policy, ICE detention, the Chiefs stadium deal, lower costs, polling, working-family affordability, redistricting, and ACA costs.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-4"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Federal/national politics, Trump/Musk administration, immigration/ICE, war, and national Republican figures: 24 posts (6%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Cindy Holscher is a Democratic state senator from Overland Park running for governor. She was born April 26, 1969, in Slater, Missouri, and her campaign biography places her in a working-class family headed by a union construction worker and an elementary school custodian. She says she was raised on a farm, became the first college graduate in her family, and has lived in Kansas for more than 25 years with her husband, Greg, and their three children.\n\nBefore running for office, Holscher worked in communications and business operations, including jobs at R.H. Donnelley, The Add Sheet, and Sprint, where her campaign says she managed multimillion-dollar budgets and operations. She later entered politics through Johnson County, carrying a biography built around public schools, family economics, and practical statehouse work rather than celebrity or movement politics.",
  "recordSummary": "Holscher served in the Kansas House from 2017 through 2020 and has served in the Kansas Senate since 2021. She was part of the coalition that reversed key pieces of the Brownback tax experiment in 2017, pushed for Medicaid expansion, and became a frequent Democratic voice on school funding, reproductive rights, and consumer concerns.\n\nOne of her clearest institutional projects was co-founding the Women's Bipartisan Caucus in the Legislature, an effort meant to create cross-party working relationships in a polari",
  "ownWordsNarrative": "*A summary of what Cindy Holscher has publicly said, posted, and amplified across campaign-controlled channels and credible indexed coverage. Drawn from her campaign website, campaign news page, Linktree, Bluesky, and public news coverage between February 24, 2025 and May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the captured public feed, Holscher's most consistent message is that Kansas government should focus on practical household pressure: schools, healthcare, housing, groceries, wages, taxes, food assistance, and basic affordability. In the Bluesky harvest, cost of living, agriculture, tariffs, food assistance, housing, taxes, and household economics accounted for 76 of 431 original posts, or 18 percent; public education accounted for another 77 posts, also 18 percent ([harvest](social-harvest.md#topic-share-analysis)). Her campaign priorities page says she will focus on keeping down essential costs such as healthcare, childcare, groceries, and gas, and her campaign news page includes a February 3, 2026 rollout of a \"Common Sense and Lower Costs\" agenda ([source](https://cindyforkansas.com/priorities/), [source](https://cindyforkansas.com/news/)).\n\nHolscher's public biography is anchored in public schools, a working-class family story, and the Brownback-era fight over Kansas finances. Her campaign about page describes her as the daughter of a union construction worker and an elementary school custodian, raised on a farm, a first-generation college graduate, and the mother of three Kansas public-school graduates ([source](https://cindyforkansas.com/about/)). On Bluesky, she wrote on November 19, 2025 that she first ran for office \"to end the Brownback experiment and get our schools back on track\" and was now running for governor to make life more affordable ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3m5zddxnft225)). She also posted on October 29, 2025 that she would fight to fund schools, stop vouchers, and put children first ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3m4e2gws2hc2m)).\n\nPublic education is not just background in the captured record; it is a recurring policy fight. The campaign says Holscher walked from Shawnee to Topeka with education advocates in 2016 to bring attention to Brownback-era underfunding, later helped reverse school budget cuts, and founded the Women's Bipartisan Caucus ([source](https://cindyforkansas.com/about/)). On April 6, 2025, before her formal governor launch, she posted that vouchers are a scam and a transfer of wealth from working-class taxpayers to richer families ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3lm5ms3vwyk2e)). A December 16, 2025 Bluesky post promoted her interview with Josh Cowen about public education, winning in red districts, values, and the Brownback tax experiment; that post had the highest repost count among her captured original Bluesky posts ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3ma4bxdovkc2v)).\n\nHolscher also uses her social feed to argue that federal decisions are raising Kansas costs. Healthcare posts include ACA subsidies, Medicaid expansion, rural hospitals, disability services, mental health, vaccine policy, and health-agency decisions. On September 25, 2025, she posted that if Congress did not restore affordable-care tax credits, more than 100,000 Kansans would lose healthcare ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3lzoibislgg2v)). On January 8, 2026, she wrote that thousands of Kansans faced skyrocketing healthcare costs and that Congress should extend ACA subsidies ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3mbx4kgkl6227)). Her campaign priorities page calls for Medicaid expansion and says expansion would help shore up rural hospitals ([source](https://cindyforkansas.com/priorities/)).\n\nOn agriculture and rural economics, Holscher's feed links her farm background to tariffs, crop markets, sorghum, soybeans, beef imports, rural hospitals, and rural cost pressure. On September 10, 2025, she posted that tariff wars were devastating Kansas farmers and that wheat, corn, soybeans, and other crops were not showing positive cash flows ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3lyig37yee22v)). On September 25, 2025, she wrote that Kansas farmers are among the world's top sorghum producers, but tariffs had hurt foreign markets and prices ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3lzmu5xcw4r2s)). In November 2025, Kansas Reflector reported that Holscher and Ethan Corson were shaping their Democratic campaigns to appeal to rural voters ([source](https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/)).\n\nHolscher's campaign identity includes a clear anti-establishment lane inside the Democratic primary. KMUW / Kansas Reflector coverage of the April 26, 2026 Democratic forum reported that she positioned herself as an anti-establishment candidate with a record of winning Republican-held legislative districts ([source](https://www.kmuw.org/politics/2026-04-29/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum)). In that same coverage, she responded to Ethan Corson's endorsements by saying she was running on her record, not establishment coattails, and said her coalition was nurses, teachers, neighbors, farmers, veterans, and union members. On March 20, 2026, she posted, \"I will never take Core Civic money and I call on all politicians who have taken their money to return it\" ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3mhhbtc2uqs2g)).\n\nDemocracy, courts, redistricting, and election administration are also visible themes. The campaign priorities page calls for an independent redistricting panel, a ban on mid-decade redistricting, term limits, and limits on corporate PAC money ([source](https://cindyforkansas.com/priorities/)). On September 24, 2025, she posted that Kansas extremists wanted to follow Texas by rewriting maps for partisan gain ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3lzm64iouhl2o)). On November 6, 2025, she wrote that Ty Masterson and GOP leadership had tried to rig maps, but Kansans had stopped them \"for now\" ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3m4wbxrzktc2x)). On December 19, 2025, she called Scott Schwab unfit to be governor and said voters could not trust Schwab, Masterson, or Colyer ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3maekkksc622g)).\n\nAudience response on measurable social media was modest and concentrated on labor, education, and anti-redistricting posts. Her highest-like original Bluesky post in the capture was a December 2, 2025 post about union workers, fair wages, and safe working conditions: 16 likes, 4 reposts, 0 replies, and 0 quotes as of May 11, 2026 ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3m6z6c6yjhk23)). Her June 12, 2025 campaign-announcement post had 8 likes, 4 reposts, 1 reply, and 1 quote ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3lrfy55fzgk2a)). Her December 16, 2025 Josh Cowen education interview post had 8 likes, 6 reposts, 0 replies, and 1 quote, the highest repost count in the captured original feed ([source](https://bsky.app/profile/cindyforkansas.bsky.social/post/3ma4bxdovkc2v)).\n\nThe captured record has notable gaps. The Bluesky feed and campaign pages give much more attention to schools, affordability, healthcare, labor, redistricting, and federal cuts than to gun policy, water policy, the Ogallala Aquifer, or detailed state-budget mechanics ([harvest](social-harvest.md#visible-absences)). Abortion and reproductive-health access appear in indexed forum coverage -- KMUW reported both Democratic candidates supported access to reproductive healthcare -- but abortion was not a high-frequency original Bluesky topic in the captured period ([source](https://www.kmuw.org/politics/2026-04-29/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum)). Faith references appear occasionally, including Jewish holiday greetings and criticism of the Kansas Catholic Conference's immigration stance, but the social harvest did not confirm a current church affiliation.\n\nHolscher's confirmed platform footprint is broad but unevenly measurable. The official website links Facebook, X, and Instagram; Linktree confirms Instagram, TikTok, Facebook, X, Threads, website, donation and volunteer links, launch video, and Bluesky ([source](https://cindyforkansas.com/about/), [source](https://linktr.ee/cindyforkansas)). Bluesky is the strongest measurable channel in this pass, with 204 followers, 9 follows, and 596 total posts at capture ([harvest](social-harvest.md#bluesky-profile)). Linktree's Threads preview showed 1.7K followers and 0 threads. Facebook, Instagram, TikTok, X, and Threads were linked or confirmed but did not expose reliable logged-out post-level data; no candidate-controlled Truth Social, Gab, Gettr, Reddit, Substack, LinkedIn campaign account, or YouTube channel was confirmed.\n\n**Methodology:** Date range covered: February 24, 2025 to May 11, 2026. Platforms surveyed: campaign website, campaign news page, Linktree, Bluesky, Facebook, Instagram, TikTok, X / Twitter, Threads, YouTube, LinkedIn, Truth Social, Gab, Gettr, Substack, and Reddit. Posts examined: 596 Bluesky feed items, including 431 original posts and 165 replies; campaign website/about/priorities/news pages; Linktree social preview; and credible indexed coverage from Kansas Reflector, KMUW, and Johnson County Post.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "church": {
    "name": "Not confirmed; attended events at Shawnee Mission UU Church and St. Andrew's Episcopal",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Unknown. Attended a meeting at Shawnee Mission Unitarian Universalist Church in Lenexa (October 2025 -- likely a campaign event, not worship)."
  },
  "campaignFinance": {
    "totalRaised": "$397,952.07 (2025 year-end)",
    "narrative": "Holscher entered the race with a respectable but clearly second-tier fundraising position in the Democratic primary for governor. Her 2025 year-end filing reported $397,952.07 raised, $218,060.34 spent, and $179,891.73 cash on hand, with no personal loans listed in the source material. The filing points to a conventional donor-backed campaign rather than a self-financed one. Named contributors visible in the raw material included Thomas Adrian, Quinta Avance, Elizabeth Bishop, Archie Blumhorst, Rick Blumhorst, and Ross Boelling.",
    "donors": [
      {
        "name": "Thomas Adrian",
        "amount": "$500"
      },
      {
        "name": "Quinta Avance",
        "amount": "$50"
      },
      {
        "name": "Elizabeth Bishop",
        "amount": "$100"
      },
      {
        "name": "Archie Blumhorst",
        "amount": "$250"
      },
      {
        "name": "Rick Blumhorst",
        "amount": "$100"
      },
      {
        "name": "Rick Blumhorst",
        "amount": "$1,000"
      }
    ],
    "undisclosed": "The extracted donor sample is only a partial view of the full filing.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and campaign-finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Campaign news page, Linktree, Bluesky, Facebook, Instagram, TikTok, X / Twitter, Threads, YouTube, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, Kansas Reflector, KMUW, Johnson County Post. Harvest range: 2025-02-24 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/",
      "title": "cindyforkansas.com",
      "publisher": "Cindyforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Cindy Holscher."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "about",
      "publisher": "Cindyforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Cindy Holscher."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/priorities/",
      "title": "priorities",
      "publisher": "Cindyforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Cindy Holscher."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/news/",
      "title": "cindyforkansas.com/news",
      "publisher": "Cindyforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Cindy Holscher.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://linktr.ee/cindyforkansas",
      "title": "linktr.ee/cindyforkansas",
      "publisher": "Linktr",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Cindy Holscher."
      ]
    },
    {
      "id": "s-6",
      "tier": "social",
      "url": "https://bsky.app/profile/cindyforkansas.bsky.social",
      "title": "@cindyforkansas.bsky.social",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Cindy Holscher."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
      "title": "Kansas Reflector: Holscher enters race (June 12, 2025)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Cindy Holscher."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.kmuw.org/politics/2026-04-29/kansas-democrats-running-for-governor-clash-on-corecivic-party-establishment-in-forum",
      "title": "Kansas Reflector / Kmuw",
      "publisher": "Kmuw",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "KMUW / Kansas Reflector coverage of an April 26, 2026 forum reported that Holscher cast herself as the anti-establishment Democrat, criticized Republican \"culture war\" bills, attac"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CINDY_HOLSCHER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[cindy-holscher.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
