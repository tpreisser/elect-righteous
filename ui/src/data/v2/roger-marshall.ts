/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ROGER_MARSHALL_V2: CandidateFullV2 = {
  "slug": "roger-marshall",
  "name": "Roger Marshall",
  "party": "R",
  "position": "U.S. Senator",
  "electionSlug": "us-senate-2026",
  "incumbent": true,
  "occupation": "Obstetrician / U.S. Senator",
  "born": "August 9, 1960, El Dorado, Kansas",
  "hometown": "Great Bend, Kansas",
  "religion": "Christian Church (Disciples of Christ) / Non-denominational",
  "family": "Laina Marshall — married 40+ years",
  "campaignWebsite": "https://kansansformarshall.com",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Strongly pro-life with a 100% score from SBA Pro-Life America. His first bill as a U.S. Senator was pro-life legislation. He co-sponsored the Born-Alive Abortion Survivors Protection Act, opposes taxpayer funding of abortion, and has said he opposes abortion including in cases of rape and incest. He called for overturning Roe v. Wade and supported Kansas's \"Value Them Both\" amendment in 2022.",
        "sourceIds": [
          "s-16",
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
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Strong supporter. He has called red flag laws a \"gun-grabbing scheme\" that \"violate the Second Amendment.\" He has sponsored bills including the Fire Arms Safety Act (tax credits for firearms safety courses), the Modern Firearms Safety Act (prohibit states from enforcing handgun rosters), and the Firearms Interstate Commerce Reform Act.",
        "sourceIds": [
          "s-17",
          "s-4",
          "s-12",
          "s-13",
          "s-31",
          "s-32"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Hardline border hawk. Supports finishing the border wall, ending catch-and-release, and adding more border patrol agents. Supported the Secure the Border Act (H.R. 2). Has called Biden's border policy an \"open borders agenda\" and argued border security should be prioriti",
        "sourceIds": [
          "s-14",
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
          "observation": "2026-04-02 — Fox News video, \"Sen Roger Marshall: We can’t even get the bipartisan Farm Bill passed, much less immigration reform.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-19"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Topic distribution in the captured sample: healthcare and mental health — 7 of 28 (25%); agriculture, food, and rural producers — 6 of 28 (21%); budget, tax, and economic messages naming Trump — 6 of 28 (21%); border, immigration, and DHS — 4 of 28 (14%); foreign policy and national security — 3 of 28 (11%); public safety and technology-platform oversight — 2 of 28 (7%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-19"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "kshb.com",
          "observation": "On national and foreign-policy questions, Marshall’s captured posts name Trump or administration officials on Ukraine, Iran, border enforcement, federal spending, and Senate procedure. After the February 2025 Oval Office meeting with Ukrainian President Volodymyr Zelenskyy, he posted, \"Thank you, @POTUS and @VP, for standing up for America\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Roger Marshall is Kansas's Republican U.S. senator, a physician from Great Bend, and one of the best-known statewide political figures in Kansas. He was born in El Dorado in 1960, grew up in a fifth-generation Kansas farm family, and moved to Great Bend in 1991 after medical training. Over the course of his OB-GYN career, he delivered more than 5,000 babies before entering politics.\n\nMarshall's public biography combines medicine, agriculture, and church life. He and his wife Laina have been married more than 40 years, and their family life has long been tied to Great Bend. Before the Senate, he represented Kansas's 1st Congressional District in the U.S. House, and he remains one of the few Kansas politicians whose public profile is simultaneously local, statewide, and national.",
  "recordSummary": "Marshall's Senate record is built around conservative positions on health care, abortion, immigration, spending, and COVID policy. He sits on major committees including Agriculture, Finance, HELP, and Budget, and he has used that platform to stay visible in both farm-state policy fights and national conservative media disputes.\n\nTwo parts of that record are especially significant. First, he voted to object to the 2020 presidential election certification on January 6, 2021, putting him among the Republicans who continued to challenge electoral votes after the Capitol attack. Second, he has repeatedly drawn attention for a combative public style, including his clashes with Dr. Anthony Fauci and his March 2025 Oakley town hall, where he left early and later said the crowd included \"paid agitators.\"",
  "ownWordsNarrative": "*A summary of what Roger Marshall has publicly said, posted, and amplified across social media. Drawn from public posts on X, Facebook, YouTube, Instagram, official Senate pages, and public-news embeds between July 2024 and May 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the [28-item captured sample](social-harvest.md), Marshall’s largest category is healthcare and mental health, with 7 items, or 25 percent of the harvest; agriculture, food, and rural producers follow with 6 items, or 21 percent. The healthcare posts combine his physician title with criticism of federal health programs and proposals for replacement policy. On November 10, 2025, he posted, \"Up to 40% of Obamacare enrollees never file a claim\" ([source](https://x.com/RogerMarshallMD/status/1987679877470810388)). In the same sample, rural mental health appears through official remarks and local Kansas stops. On May 8, 2026, his office quoted him saying, \"Kansans take pride in serving others first\" ([source](https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-recognizes-national-mental-health-awareness-month/)). Agriculture is close behind: on January 14, 2026, he posted, \"Whole milk is back!\" ([source](https://www.wibw.com/2026/01/14/president-trump-signs-senator-marshalls-bill-allowing-schools-serve-whole-milk/)).\n\nMarshall’s public alignment network is concentrated around President Trump, Senate Republicans, Kansas agriculture groups, and selected bipartisan health or food-policy partners. In the [captured sample](social-harvest.md), @POTUS or @realDonaldTrump appears in 6 items, more than any other named account or public figure. On January 13, 2026, after Trump posted support for the Credit Card Competition Act, Marshall wrote, \"Thank you, President Trump, for your support!\" ([source](https://www.bizpacreview.com/2026/01/13/elizabeth-warren-brags-about-how-president-trump-called-her-1615749/)). His feed also names Democratic partners on issue-specific bills: the Whole Milk for Healthy Kids Act is tied to Sen. Peter Welch, and the Medicare Advantage Improvement Act is tied to Sen. Sheldon Whitehouse. On animal-research policy, Marshall tagged White Coat Waste and wrote, \"Testing on any dog, of any breed, for any reason, must be outlawed\" ([source](https://x.com/RogerMarshallMD/status/1919112952877047828)).\n\nAudience-response data was only partly visible in this capture. Direct X, Facebook, and Instagram engagement totals were blocked or not returned as of May 11, 2026; the harvest therefore records exact platform totals as unavailable rather than estimating them. The clearest visible response signals came from the November 10, 2025 ACA post and the March 3, 2025 Oakley town-hall post. The ACA post drew a long indexed reply thread centered on how insurance pools work. The town-hall post, in which Marshall wrote, \"Can confirm\" ([source](https://x.com/RogerMarshallMD/status/1896583775557243254)), became part of Kansas News Service coverage of the Oakley event. The Lawrence Times later quoted Marshall saying, \"I don’t have firsthand evidence\" ([source](https://lawrencekstimes.com/2025/03/07/marshall-paid-ops-concerned-kansans/)).\n\nOn national and foreign-policy questions, Marshall’s captured posts name Trump or administration officials on Ukraine, Iran, border enforcement, federal spending, and Senate procedure. After the February 2025 Oval Office meeting with Ukrainian President Volodymyr Zelenskyy, he posted, \"Thank you, @POTUS and @VP, for standing up for America\" ([source](https://www.kshb.com/news/local-news/kansas-missouri-political-leaders-offer-reaction-to-trump-zelenskyy-oval-office-meeting)). After U.S. strikes on Iran in June 2025, he wrote, \"We stand tall with President Trump\" ([source](https://www.kcur.org/politics-elections-and-government/2025-06-22/kansas-city-congresspeople-react-u-s-strike-iran-we-strongly-support-president-trump)). During reconciliation debate, he posted, \"we need to again fire the Senate Parliamentarian\" ([source](https://www.thegatewaypundit.com/2025/06/gop-lawmakers-erupt-after-unelected-senate-parliamentarian-guts/)). Border and DHS items account for [4 of the 28 captured items](social-harvest.md), or 14 percent of the sample.\n\nFor Kansas-specific engagement, Marshall’s official feed and Senate site include rural healthcare, small business tax policy, agriculture, cattle, school milk, fertilizer, and in-person stops across the state. On April 28, 2026, his office quoted him saying, \"Kansas farmers are getting hit by a fertilizer market that’s working against them\" ([source](https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-drops-bill-to-cut-fertilizer-costs-for-american-farmers/)). On May 5, 2026, his office wrote that Kansas has \"5.95 million cattle\" and \"over 38,000 Kansans\" employed by the cattle industry ([source](https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-celebrates-kansas-cattle-producers/)). His May 2026 tour posts list stops in Fort Scott, Pittsburg, Parsons, Chanute, Neodesha, Kinsley, Jetmore, Dighton, Dodge City, and other Kansas communities. In the captured sample, local or Kansas-sector content accounts for at least [10 of 28 items](social-harvest.md).\n\nAcross the captured period the feed contains no visible original posts about the Ogallala Aquifer, water rights, foster care, adoption, Medicaid expansion, local county election administration, or prescription opioid response. The captured record does include posts or official items about rural hospitals, mental health, farmers, ranchers, small businesses, western Kansas, southeast Kansas, Fort Riley military families, fertilizer costs, school milk, border enforcement, and federal healthcare spending. The absence list is based only on the captured sample and walled-platform search results, not on a complete export of his X, Facebook, or Instagram accounts.\n\nMarshall’s platform footprint is broad but unevenly accessible. He maintains an active X account, a public Facebook page, an Instagram account, official Senate video and newsletter channels, and a Senate site that links to YouTube and Rumble. Facebook, Instagram, LinkedIn, and the direct X timeline were walled or blocked during the May 11, 2026 capture. The public search pass found no confirmed candidate-controlled Truth Social, Gab, Reddit, TikTok, or Substack account. A 2022 public record shows Marshall announced a Gettr account at @RogerMarshallMD, but current Gettr activity was not accessible in this harvest.\n\n**Methodology:** Date range covered: July 28, 2024 to May 8, 2026. Platforms surveyed: X, Facebook, YouTube, Instagram, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok, official Senate site, and public-news embeds; approximately [28 original posts, official-news items, and video items plus approximately 5 reposts or shared-post signals](social-harvest.md) examined.\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Marshall's church is First Christian Church in Great Bend, a Disciples of Christ congregation. Public records tie him to the church as an elder, deacon, board chair, and Sunday school teacher, making his involvement long-running and public rather than incidental.",
  "church": {
    "name": "First Christian Church, Great Bend, KS",
    "denomination": "Christian Church (Disciples of Christ) / Non-denominational",
    "url": "https://www.firstchristianchurchgb.com/",
    "details": "Denomination: Christian Church (Disciples of Christ) / Non-denominational. Church Roles: Elder, Deacon, Board Chairman, Sunday School Teacher (25+ years)."
  },
  "campaignFinance": {
    "totalRaised": "Marshall's public FEC record shows a large incumbent operation. Public summaries and prior filings point to roughly $4.76 million in lifetime receipts and more than $4.07 million cash on hand by the end of 2025, with roughly $621,400 raised in the fourth quarter of 2025 alone.",
    "narrative": "Marshall's public FEC record shows a large incumbent operation. Public summaries and prior filings point to roughly $4.76 million in lifetime receipts and more than $4.07 million cash on hand by the end of 2025, with roughly $621,400 raised in the fourth quarter of 2025 alone. That financial position matches his status in the race: no serious Republican primary threat, national Republican fundraising support, and a donor network built at the incumbent-senator level rather than at the challenger level.",
    "donors": [
      {
        "name": "2025 receipts alone were with $195,870.35 in disbursements.",
        "amount": "$2,563,147.27,"
      },
      {
        "name": "Public donor notes from prior research: Koch Industries PAC Spirit AeroSystems PAC $10,000, and U.S. Chamber of Commerce IE support of roughly $1.9M.",
        "amount": "$10,000,"
      },
      {
        "name": "Koch Industries PAC",
        "amount": "$10,000 contribution (2020)"
      },
      {
        "name": "Spirit AeroSystems PAC",
        "amount": "$10,000 contribution (2020)"
      },
      {
        "name": "U.S. Chamber of Commerce",
        "amount": "$1.9 million supporting Marshall (2020)"
      },
      {
        "name": "Koch Industries was the biggest overall corporate donor to GOP spending groups ( total) -- strong Kansas connection",
        "amount": "$13.75M"
      }
    ],
    "reportingPeriod": "2026 cycle",
    "source": "FEC records and reviewed public reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: X, Facebook, YouTube, Instagram, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok, Official Senate site, Public-news embeds. Harvest range: 2024-07-28 through 2026-05-08.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://marshall.senate.gov",
      "title": "marshall.senate.gov",
      "publisher": "Marshall.Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Roger_Marshall",
      "title": "Wikipedia - Roger Marshall",
      "publisher": "En.Wikipedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-3",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/about/",
      "title": "marshall.senate.gov/about",
      "publisher": "Marshall.Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Vote Smart Biography",
      "publisher": "Justfacts.Votesmart",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/172080/roger-marshall",
      "title": "Vote Smart Key Votes",
      "publisher": "Justfacts.Votesmart",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/house/Roger_Marshall_Gun_Control.htm",
      "title": "On the Issues - Gun Control",
      "publisher": "Ontheissues",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/house/Roger_Marshall_Immigration.htm",
      "title": "On the Issues - Immigration",
      "publisher": "Ontheissues",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://sbaprolife.org/senator/roger-marshall",
      "title": "SBA Pro-Life - Roger Marshall",
      "publisher": "Sbaprolife",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-17",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-votes-against-gun-grabbing-scheme/",
      "title": "marshall.senate.gov - Gun Grabbing Scheme vote",
      "publisher": "Marshall.Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-19",
      "tier": "social",
      "url": "https://x.com/RogerMarshallMD",
      "title": "Twitter/X - @RogerMarshallMD",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/senator-elect-roger-marshall-joins-hawley-in-plans-to-object-electoral-college-vote",
      "title": "KSHB - Kansas politicians join Hawley",
      "publisher": "Kshb",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/senator-roger-marshall-acknowledges-biden-victory-after-objecting-to-electoral-votes/",
      "title": "Fox4KC - Acknowledges Biden",
      "publisher": "Fox4kc",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Roger Marshall."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/kansas-missouri-political-leaders-offer-reaction-to-trump-zelenskyy-oval-office-meeting",
      "title": "kshb.com / Kshb",
      "publisher": "Kshb",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Border.",
        "On national and foreign-policy questions, Marshall’s captured posts name Trump or administration officials on Ukraine, Iran, border enforcement, federal spending, and Senate proced"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ROGER_MARSHALL_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[roger-marshall.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
