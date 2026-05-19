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
          "s-14",
          "s-96",
          "s-161",
          "s-171",
          "s-228",
          "s-290"
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
          "s-6",
          "s-7",
          "s-16",
          "s-31",
          "s-32",
          "s-46"
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
          "s-6",
          "s-7",
          "s-16",
          "s-31",
          "s-32",
          "s-46"
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
          "s-141",
          "s-293",
          "s-343",
          "s-344",
          "s-348",
          "s-353"
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
          "s-21",
          "s-23",
          "s-350",
          "s-351",
          "s-462",
          "s-1"
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
            "s-9"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Topic distribution in the captured sample: healthcare and mental health — 7 of 28 (25%); agriculture, food, and rural producers — 6 of 28 (21%); budget, tax, and economic messages naming Trump — 6 of 28 (21%); border, immigration, and DHS — 4 of 28 (14%); foreign policy and national security — 3 of 28 (11%); public safety and technology-platform oversight — 2 of 28 (7%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-9"
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
      "url": "https://www.fec.gov/data/elections/senate/KS/2026/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Chase_LaPorte",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://www.christydavisforkansas.com/",
      "title": "Christydavisforkansas.Com",
      "publisher": "christydavisforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Christy_Davis",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
      "title": "Emporiagazette.Com",
      "publisher": "emporiagazette.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "social",
      "url": "https://www.facebook.com/patrickforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/about/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Patrick_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Patrick_Schmidt_(politician",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://www.wibw.com/2026/02/05/kansas-state-senator-files-us-senate/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://sandyforkansas.com/",
      "title": "Sandyforkansas.Com",
      "publisher": "sandyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00262/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Sandy_Spidel_Neumann",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/",
      "title": "Anneforkansas.Com",
      "publisher": "anneforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "social",
      "url": "https://www.linkedin.com/in/anne-lea-parelkar-83095659/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/",
      "title": "1350kman.Com",
      "publisher": "1350kman.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://kansasreflector.com/podcasts/anne-parelkar-latest-democrat-running-for-kansas-u-s-senate-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Anne_Parelkar",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://erikforkansas.com/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kck-developer-announces-for-u-s-senate-as-democratic-primary-grows-to-five/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Erik_Murray",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://erikforkansas.com/meet-erik/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://hartforsenate.com/",
      "title": "Hartforsenate.Com",
      "publisher": "hartforsenate.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://mikeforkansas.my.canva.site/",
      "title": "Mikeforkansas.My.Canva.Site",
      "publisher": "mikeforkansas.my.canva.site",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/michael-soetaert",
      "title": "Secure.Actblue.Com",
      "publisher": "secure.actblue.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "social",
      "url": "https://www.facebook.com/michael.soetaert1/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Michael_Soetaert",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://www.noahforkansas.com/",
      "title": "Noahforkansas.Com",
      "publisher": "noahforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/03/17/kansas-veteran-noah-taylor-announces-campaign-us-senate/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/29/will-sharice-davids-run-for-u-s-senate-from-kansas-shes-not-saying-no-and-signs-point-to-yes/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://www.kcur.org/podcast/up-to-date/2026-02-24/will-sharice-davids-run-to-represent-kansas-in-the-u-s-senate-shes-not-ruling-it-out",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://www.cookpolitical.com/senate/race/488581",
      "title": "Cookpolitical.Com",
      "publisher": "cookpolitical.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://centerforpolitics.org/crystalball/2026-senate/",
      "title": "Centerforpolitics.Org",
      "publisher": "centerforpolitics.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://www.270towin.com/polls/latest-2026-senate-election-polls/",
      "title": "270towin.Com",
      "publisher": "270towin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://www.realclearpolling.com/latest-polls/senate",
      "title": "Realclearpolling.Com",
      "publisher": "realclearpolling.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://www.racetothewh.com/senate/26polls",
      "title": "Racetothewh.Com",
      "publisher": "racetothewh.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections_upcoming_candidate.aspx",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "primary",
      "url": "https://kpdc.kansas.gov/campaign-finance/view-submitted-forms-and-reports/",
      "title": "Kpdc.Kansas.Gov",
      "publisher": "kpdc.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-focus-on-defeating-gop-incumbent/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://www.hfehays.org/o/hfe/article/923439",
      "title": "Hfehays.Org",
      "publisher": "hfehays.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://www.ihm-church.com/",
      "title": "Ihm-church.Com",
      "publisher": "ihm-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://www.kansassheriffs.org/county_map/county/914",
      "title": "Kansassheriffs.Org",
      "publisher": "kansassheriffs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
      "title": "Haysmemorial.Com",
      "publisher": "haysmemorial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
      "title": "Fhsuguides.Fhsu.Edu",
      "publisher": "fhsuguides.fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Tracey_Mann",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://ksopen.org/mann-2",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "primary",
      "url": "https://mann.house.gov/about",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://www.au.org/the-latest/church-and-state/articles/unhealthy-breakfast-how-the-national-prayer-breakfast-a-relic-from-the-1950s-era-of-civil-religion-evolved-into-a-florid-display-of-christian-nationalism/",
      "title": "Au.Org",
      "publisher": "au.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/meet-doc/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://ksopen.org/marshall",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
      "title": "Kansasdisciples.Org",
      "publisher": "kansasdisciples.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "Barbwasinger.Com",
      "publisher": "barbwasinger.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://whatreligionisinfo.com/kobach-religion/",
      "title": "Whatreligionisinfo.Com",
      "publisher": "whatreligionisinfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://msclawrence.com/",
      "title": "Msclawrence.Com",
      "publisher": "msclawrence.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
      "title": "Csgmidwest.Org",
      "publisher": "csgmidwest.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://www.colyerforgovernor.com/",
      "title": "Colyerforgovernor.Com",
      "publisher": "colyerforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "social",
      "url": "https://x.com/DrJeffColyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "social",
      "url": "https://x.com/govjeffcolyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "social",
      "url": "https://www.facebook.com/JeffColyerMD/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "social",
      "url": "https://www.linkedin.com/in/jeff-colyer-6894363/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jeff_Colyer",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "secondary",
      "url": "https://www.nga.org/governor/jeff-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "secondary",
      "url": "https://politics.georgetown.edu/profile/jeff-colyer/",
      "title": "Politics.Georgetown.Edu",
      "publisher": "politics.georgetown.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about-gov/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/announcements.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/23/republican-candidate-for-kansas-governor-offering-voters-a-prescription-for-change/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/07/12/colyers-narrow-miss-in-2018-fueling-resurgent-gop-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2021-08-30/the-kansas-a-g-s-path-to-governor-gets-easier-after-his-opponent-endorses-him",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://www.kcur.org/post/colyers-first-executive-order-kansas-governor-fight-sexual-harassment",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-18/faith-based-adoption-law-signed-quickly-becoming-kansas-campaign-fodder",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "secondary",
      "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/af650bef-0c19-4f73-b418-bded940b0b7a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/9f9b260b-5c26-4cd6-a81c-212904371850",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
      "title": "Nbcnews.Com",
      "publisher": "nbcnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/new-kansas-governor-to-require-annual-sexual-harassment-training",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "secondary",
      "url": "https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/",
      "title": "Thehill.Com",
      "publisher": "thehill.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/05/14/jeff-colyer-and-a-review-of-kansas-gubernatorial-comeback-bids/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://www.cgscfoundation.org/person-of-the-month-may-2020/",
      "title": "Cgscfoundation.Org",
      "publisher": "cgscfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "secondary",
      "url": "https://jag.org/dipl-team-member/jeff-colyer/",
      "title": "Jag.Org",
      "publisher": "jag.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "primary",
      "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
      "title": "Docs.House.Gov",
      "publisher": "docs.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "secondary",
      "url": "https://www.kscbnews.net/jeff-colyer-m-d-sworn-in-as-47th-governor-of-the-state-of-kansas/",
      "title": "Kscbnews.Net",
      "publisher": "kscbnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "secondary",
      "url": "https://www.nga.org/governor-spouse/ruth-gutierrez-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Jeff_Colyer.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "secondary",
      "url": "https://sanokc.com/provider/dr-colyer/",
      "title": "Sanokc.Com",
      "publisher": "sanokc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "secondary",
      "url": "https://www.renaissanceplasticsurgicalarts.com/",
      "title": "Renaissanceplasticsurgicalarts.Com",
      "publisher": "renaissanceplasticsurgicalarts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://www.healthgrades.com/physician/dr-jeffrey-colyer-xpdcb",
      "title": "Healthgrades.Com",
      "publisher": "healthgrades.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery",
      "title": "Nkchealth.Org",
      "publisher": "nkchealth.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://internationalmedicalcorps.org/press-release/lt-governor-to-climb-mt-kilimanjaro-in-support-of-international-medical-corps-humanitarian-relief-efforts/",
      "title": "Internationalmedicalcorps.Org",
      "publisher": "internationalmedicalcorps.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://www.findagrave.com/memorial/142168654/james-daniel-colyer",
      "title": "Findagrave.Com",
      "publisher": "findagrave.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://www.legacy.com/obituaries/kansascity/obituary.aspx?pid=174049747",
      "title": "Legacy.Com",
      "publisher": "legacy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2018_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "social",
      "url": "https://www.facebook.com/christy.davis.710/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "social",
      "url": "https://x.com/speumann",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "social",
      "url": "https://www.instagram.com/speumann/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "social",
      "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "social",
      "url": "https://www.facebook.com/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S2KS00097/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/patrick-schmidt",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://www.hawkinsforinsurance.com/",
      "title": "Hawkinsforinsurance.Com",
      "publisher": "hawkinsforinsurance.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "social",
      "url": "https://x.com/danhawkinsks",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "secondary",
      "url": "https://www.dinahsykes.com/",
      "title": "Dinahsykes.Com",
      "publisher": "dinahsykes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "social",
      "url": "https://www.facebook.com/Sykes4KS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/dinah-sykes",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/22/kansas-house-speaker-desperately-maneuvers-to-sabotage-vote-on-senate-bill-capping-drug-costs/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "secondary",
      "url": "https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bill/",
      "title": "Heartlandsignal.Com",
      "publisher": "heartlandsignal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-26/kansas-house-passes-bill-providing-stricter-regulation-of-prescription-drug-middlemen",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-222",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S0KS00315/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-223",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-224",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Daniel_Hawkins_(Kansas",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-225",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Dinah_Sykes",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-226",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/hawkins-reveals-campaign-fundraising-for-insurance-commissioner/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-227",
      "tier": "secondary",
      "url": "https://www.nrsc.org/press-releases/nrsc-calls-for-investigation-into-four-kansas-democrat-senate-candidates-for-violating-the-law-2026-03-11/",
      "title": "Nrsc.Org",
      "publisher": "nrsc.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-228",
      "tier": "secondary",
      "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
      "title": "Freebeacon.Com",
      "publisher": "freebeacon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-229",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-230",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/12/19/politics/kansas-legislature-republican-democrat/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-231",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-12-19/more-kansas-legislative-republicans-jump-ship-become-democrats",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-232",
      "tier": "secondary",
      "url": "https://www.salon.com/2018/12/21/three-kansas-republicans-switch-parties-in-one-week-more-defections-expected/",
      "title": "Salon.Com",
      "publisher": "salon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-233",
      "tier": "secondary",
      "url": "https://heavy.com/news/2018/08/heather-kobach-kris-kobach-wife-kansas/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-234",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Kris_Kobach",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-235",
      "tier": "secondary",
      "url": "https://kriskobach.com/meet-kris/",
      "title": "Kriskobach.Com",
      "publisher": "kriskobach.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-236",
      "tier": "secondary",
      "url": "https://fedsoc.org/bio/kris-kobach-1",
      "title": "Fedsoc.Org",
      "publisher": "fedsoc.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-237",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/about-us/attorney-general-kris-w-kobach",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-238",
      "tier": "secondary",
      "url": "https://republicanags.com/ags/kansas/",
      "title": "Republicanags.Com",
      "publisher": "republicanags.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-239",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kris_Kobach",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-240",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Fish_v._Kobach",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-241",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-242",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/news/federal-judge-rules-favor-aclu-strikes-down-kobachs-illegal-voter-restrictions/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-243",
      "tier": "secondary",
      "url": "https://www.aclu.org/news/voting-rights/courts-ruling-holding-kobach-contempt-well-deserved",
      "title": "Aclu.Org",
      "publisher": "aclu.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-244",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/state/kansas/judge-orders-kobach-to-pay-more-than-26000-for-contempt",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-245",
      "tier": "secondary",
      "url": "https://aclukansas.org/news/kansas-drops-kris-kobachs-appeal-contempt-ruling-aclu-accepts-20000-legal-fees/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-246",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Presidential_Advisory_Commission_on_Election_Integrity",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-247",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/research-reports/disbanded-trumps-voter-fraud-commission",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-248",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/01/03/575524512/trump-dissolves-controversial-election-commission",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-249",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/report-trump-commission-did-not-find-widespread-voter-fraud",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-250",
      "tier": "secondary",
      "url": "https://www.rollingstone.com/politics/politics-features/kris-kobach-donald-trump-voter-fraud-myths-vote-suppression-990300/",
      "title": "Rollingstone.Com",
      "publisher": "rollingstone.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-251",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Interstate_Voter_Registration_Crosscheck_Program",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-252",
      "tier": "secondary",
      "url": "https://www.commoncause.org/democracy-wire/crosscheck-system-shuttered-after-wrongly-tagging-legal-voters/",
      "title": "Commoncause.Org",
      "publisher": "commoncause.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-253",
      "tier": "secondary",
      "url": "https://thefulcrum.us/interstate-crosscheck-program",
      "title": "Thefulcrum.Us",
      "publisher": "thefulcrum.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-254",
      "tier": "secondary",
      "url": "https://www.gregpalast.com/interstate-crosscheck-on-the-verge-of-collapse/",
      "title": "Gregpalast.Com",
      "publisher": "gregpalast.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-255",
      "tier": "secondary",
      "url": "https://truthout.org/articles/kansas-kills-kris-kobachs-national-voter-purge-system/",
      "title": "Truthout.Org",
      "publisher": "truthout.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-256",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/03/24/kobach-kansas-ag-and-legislature-to-blame-for-voting-law-legal-costs-representatives-say/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-257",
      "tier": "secondary",
      "url": "https://lawrencekstimes.com/2022/10/17/weiss-letter-6m-man/",
      "title": "Lawrencekstimes.Com",
      "publisher": "lawrencekstimes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-258",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-08/aclu-says-kobach-owes-52k-in-legal-costs-for-contempt-in-kansas-voting-case",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-259",
      "tier": "secondary",
      "url": "https://democraticgovernors.org/updates/icymi-derek-schmidt-continues-kris-kobachs-legacy-of-costing-taxpayers-millions/",
      "title": "Democraticgovernors.Org",
      "publisher": "democraticgovernors.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-260",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/media-center/news-releases",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-261",
      "tier": "secondary",
      "url": "https://kansasreflector.com/tag/kris-kobach/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-262",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/280/1292",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-263",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/06/17/kansas-ag-kobach-accuses-pfizer-of-misleading-vaccine-marketing-in-lawsuit/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-264",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/27/kansas-governor-attorney-general-both-declare-victory-in-supreme-court-decision-on-executive-power/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-265",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/06/kansas-ag-offers-to-delay-enforcement-of-anti-trans-law-until-march-26-while-judge-weighs-challenge/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-266",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/26/kansas-smoke-shops-sue-state-alleging-illegal-search-and-seizure-during-thc-raids/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-267",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/20/kansas-judge-rebukes-ag-kris-kobach-in-gender-marker-case-issues-symbolic-1-fine/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-268",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/07/20/ag-kobach-to-announce-ongoing-initiative-combating-fentanyl-in-kansas-here-are-the-basics/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-269",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/Home/Components/News/News/139/1292",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-270",
      "tier": "primary",
      "url": "https://klrd.gov/2024/12/18/kansas-law-enforcement-fentanyl-response/",
      "title": "Klrd.Gov",
      "publisher": "klrd.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-271",
      "tier": "secondary",
      "url": "https://abovethelaw.com/2023/05/kris-kobach-fires-law-firm-that-donated-to-democrats-clumsily-backpedals-after-realizing-legal-ramifications-of-retaliation/",
      "title": "Abovethelaw.Com",
      "publisher": "abovethelaw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-272",
      "tier": "secondary",
      "url": "https://kriskobach.com/",
      "title": "Kriskobach.Com",
      "publisher": "kriskobach.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-273",
      "tier": "secondary",
      "url": "https://www.tonyskansascity.com/2025/07/did-kansas-ag-kobach-cut-crime.html",
      "title": "Tonyskansascity.Com",
      "publisher": "tonyskansascity.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-274",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/2022-elections/kansas-attorney-general-results/",
      "title": "Nbcnews.Com",
      "publisher": "nbcnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-275",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-11-09/kansas-attorney-general-election-results-2022-kris-kobach-chris-mann",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-276",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/11/11/mann-surrenders-quest-to-overtake-kobach-in-kansas-race-for-attorney-general/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-277",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/11/06/politics/kansas-governor-laura-kelly-democrat/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-278",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-11-07/kelly-beats-kobach-promises-shell-ditch-partisan-ways-as-governor",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-279",
      "tier": "secondary",
      "url": "https://www.propublica.org/article/kris-kobachs-lucrative-trail-of-courtroom-defeats",
      "title": "Propublica.Org",
      "publisher": "propublica.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-280",
      "tier": "secondary",
      "url": "https://www.splcenter.org/resources/reports/when-mr-kobach-comes-town-nativist-laws-and-communities-they-damage/",
      "title": "Splcenter.Org",
      "publisher": "splcenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-281",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Arizona_SB_1070",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-282",
      "tier": "secondary",
      "url": "https://www.cnn.com/2022/12/30/politics/kansas-attorney-general-campaign-finance-violations/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-283",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-284",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/articles/jeffrey-epstein-files-kris-kobach-100825234.html",
      "title": "Yahoo.Com",
      "publisher": "yahoo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-285",
      "tier": "secondary",
      "url": "https://www.propublica.org/article/kris-kobach-voter-fraud-kansas-trial",
      "title": "Propublica.Org",
      "publisher": "propublica.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-286",
      "tier": "secondary",
      "url": "https://www.aclu.org/news/voting-rights/kobach-exposed-trial",
      "title": "Aclu.Org",
      "publisher": "aclu.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-287",
      "tier": "secondary",
      "url": "https://www.lgbtqnation.com/2012/08/top-romney-surrogate-compares-lgbt-people-to-drug-users-polygamists/",
      "title": "Lgbtqnation.Com",
      "publisher": "lgbtqnation.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-288",
      "tier": "secondary",
      "url": "https://glaad.org/gap/kris-kobach/",
      "title": "Glaad.Org",
      "publisher": "glaad.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-289",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/aclu-of-kansas-responds-to-ag-kobachs-power-grab-and-effort-to-change-law-after-losses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-290",
      "tier": "secondary",
      "url": "https://americasvoice.org/blog/kris-kobach/",
      "title": "Americasvoice.Org",
      "publisher": "americasvoice.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-291",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-292",
      "tier": "secondary",
      "url": "https://chrismannforkansas.com/",
      "title": "Chrismannforkansas.Com",
      "publisher": "chrismannforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-293",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-294",
      "tier": "secondary",
      "url": "https://emporianews.com/2026-kansas-attorney-general-race-could-mirror-2022-as-chris-mann-announces-candidacy-against-kris-kobach/",
      "title": "Emporianews.Com",
      "publisher": "emporianews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-295",
      "tier": "secondary",
      "url": "https://colinforkansas.com/",
      "title": "Colinforkansas.Com",
      "publisher": "colinforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-296",
      "tier": "social",
      "url": "https://www.instagram.com/colinforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-297",
      "tier": "social",
      "url": "https://www.facebook.com/colinforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-298",
      "tier": "secondary",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social",
      "title": "Bsky.App",
      "publisher": "bsky.app",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-299",
      "tier": "social",
      "url": "https://www.linkedin.com/in/colin-mcroberts-5781291/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-300",
      "tier": "secondary",
      "url": "https://www.colin-mcroberts.com/",
      "title": "Colin-mcroberts.Com",
      "publisher": "colin-mcroberts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-301",
      "tier": "secondary",
      "url": "https://business.ku.edu/people/colin-mcroberts",
      "title": "Business.Ku.Edu",
      "publisher": "business.ku.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-302",
      "tier": "secondary",
      "url": "https://www.ratemyprofessors.com/professor/2506562",
      "title": "Ratemyprofessors.Com",
      "publisher": "ratemyprofessors.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-303",
      "tier": "secondary",
      "url": "https://www.take-bac-congress.us/team/colin-mcroberts",
      "title": "Take-bac-congress.Us",
      "publisher": "take-bac-congress.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-304",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS01195/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-305",
      "tier": "primary",
      "url": "https://www.fec.gov/data/committee/C00919860/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-306",
      "tier": "primary",
      "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-307",
      "tier": "secondary",
      "url": "https://www.laurenforkansas.com",
      "title": "Laurenforkansas.Com",
      "publisher": "laurenforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-308",
      "tier": "social",
      "url": "https://www.linkedin.com/in/laurenreinhold/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-309",
      "tier": "social",
      "url": "https://www.facebook.com/dgcodems/videos/2299093513898616/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-310",
      "tier": "secondary",
      "url": "https://unitedkansas.com/",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-311",
      "tier": "social",
      "url": "https://www.facebook.com/unitedksparty/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-312",
      "tier": "social",
      "url": "https://www.linkedin.com/in/craig-musser-82880838/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-313",
      "tier": "secondary",
      "url": "https://unitedkansas.com/candidates",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-314",
      "tier": "primary",
      "url": "https://www.fec.gov/data/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-315",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/members-of-congress/tracey-mann/summary?cid=N00030743",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-316",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Colin_McRoberts",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-317",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-318",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-319",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/state-government/2026/jan/07/lawrence-democrats-take-aim-at-manns-congressional-seat/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-320",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-321",
      "tier": "secondary",
      "url": "https://aeon.co/users/colin-mcroberts",
      "title": "Aeon.Co",
      "publisher": "aeon.co",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-322",
      "tier": "secondary",
      "url": "https://skepticalinquirer.org/exclusive/a-skeptic-on-the-conspirasea-cruiseinterview-with-colin-mcroberts/",
      "title": "Skepticalinquirer.Org",
      "publisher": "skepticalinquirer.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-323",
      "tier": "secondary",
      "url": "https://kansaspublicradio.org/show/genres-when-experts-attack/2020-03-04/live-performance-when-experts-attack-1-colin-mcroberts",
      "title": "Kansaspublicradio.Org",
      "publisher": "kansaspublicradio.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-324",
      "tier": "secondary",
      "url": "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=281096",
      "title": "Texasbar.Com",
      "publisher": "texasbar.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-325",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/25bbb2eb-ae15-4419-8096-972bb919a48a",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-326",
      "tier": "secondary",
      "url": "https://www.kcnonline.com/wp/2026/01/05/two-lawrence-dems-seek-1st-district-seat/",
      "title": "Kcnonline.Com",
      "publisher": "kcnonline.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-327",
      "tier": "secondary",
      "url": "https://kansasreflector.com/tag/lauren-reinhold/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-328",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Craig_Musser",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-329",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-330",
      "tier": "secondary",
      "url": "https://greatbendpost.com/posts/d2d97c94-1d35-4fc6-a09d-3453408c580e",
      "title": "Greatbendpost.Com",
      "publisher": "greatbendpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-331",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/966/202602149834322966/202602149834322966.pdf",
      "title": "Docquery.Fec.Gov",
      "publisher": "docquery.fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-332",
      "tier": "secondary",
      "url": "https://www.zoominfo.com/p/Craig-Musser/9122088966",
      "title": "Zoominfo.Com",
      "publisher": "zoominfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-333",
      "tier": "secondary",
      "url": "https://unitedkansas.com/about",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-334",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/United_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-335",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/07/12/united-kansas-party-files-lawsuits-to-challenge-state-law-forbidding-multi-party-nominations/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-336",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/united-kansas-officially-earns-spot-on-kansas-ballots-as-states-fifth-political-party/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-337",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2024/05-24-24-united-kansas-recognized-as-a-political-party.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-338",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026_(August_4_Democratic_primary",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-339",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026_(August_4_Republican_primary",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-340",
      "tier": "secondary",
      "url": "https://www.cookpolitical.com/house/race/483106",
      "title": "Cookpolitical.Com",
      "publisher": "cookpolitical.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-341",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_United_States_House_of_Representatives_elections_in_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-342",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H0KS01123/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-343",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-344",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-345",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-346",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-347",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-348",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-349",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-350",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-351",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-352",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-353",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-354",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-355",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-356",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-357",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-358",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-359",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-360",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-361",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-362",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-363",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-364",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-365",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-366",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-367",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-368",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-369",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-370",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-371",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-372",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/about/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-373",
      "tier": "primary",
      "url": "https://www.congress.gov/member/roger-marshall/M001198",
      "title": "Congress.Gov",
      "publisher": "congress.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-374",
      "tier": "primary",
      "url": "https://www.fec.gov/data/committee/C00576173/?cycle=2026",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-375",
      "tier": "primary",
      "url": "https://www.govtrack.us/congress/members/roger_marshall/412704",
      "title": "Govtrack.Us",
      "publisher": "govtrack.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-376",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Roger_Marshall",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-377",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Roger_Marshall",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-378",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/roger-w-marshall/19968",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-379",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/members-of-congress/roger-marshall/summary?cid=N00037034",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-380",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/members-of-congress/roger-marshall/industries?cid=N00037034",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-381",
      "tier": "secondary",
      "url": "https://www.quiverquant.com/congresstrading/politician/Roger%20Marshall-M001198/net-worth",
      "title": "Quiverquant.Com",
      "publisher": "quiverquant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-382",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-383",
      "tier": "secondary",
      "url": "https://heritageaction.com/scorecard/members/m001198",
      "title": "Heritageaction.Com",
      "publisher": "heritageaction.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-384",
      "tier": "secondary",
      "url": "https://sbaprolife.org/senator/roger-marshall",
      "title": "Sbaprolife.Org",
      "publisher": "sbaprolife.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-385",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/house/Roger_Marshall_Principles_+_Values.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-386",
      "tier": "secondary",
      "url": "https://www.cnn.com/2021/05/03/politics/roger-marshall-january-6-cnn-big-lie",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-387",
      "tier": "secondary",
      "url": "https://www.cbsnews.com/news/anthony-fauci-roger-marshall-hot-mic-moron/",
      "title": "Cbsnews.Com",
      "publisher": "cbsnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-388",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2021-08-26/kansas-senator-roger-marshall-is-a-doctor-but-his-covid-19-advice-doesnt-always-sound-like-it",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-389",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/05/marshall-says-paid-agitators-swamped-kansas-forum-if-he-proves-it-ill-eat-a-copy-of-project-2025/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-390",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/roger-marshall-calls-kansas-cabin-160558825.html",
      "title": "Yahoo.Com",
      "publisher": "yahoo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-391",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/moran-marshall-diverge-on-95-billion-ukraine-israel-aid-passed-by-congress/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-392",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-393",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67202-ks-jason-hart-1922169.html",
      "title": "Avvo.Com",
      "publisher": "avvo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-394",
      "tier": "primary",
      "url": "https://www.justice.gov/usao-ks/pr/kansas-man-sentenced-480-months-production-child-porn",
      "title": "Justice.Gov",
      "publisher": "justice.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-395",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-396",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/05/kansas-state-senator-files-us-senate/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-397",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/people/patrick-schmidt/id/26167",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-398",
      "tier": "social",
      "url": "https://www.linkedin.com/in/christy-davis-19286b224/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-399",
      "tier": "primary",
      "url": "https://www.rd.usda.gov/newsroom/news-release/usda-announces-rural-development-state-director-kansas",
      "title": "Rd.Usda.Gov",
      "publisher": "rd.usda.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-400",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192415/christy-cauble-davis",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-401",
      "tier": "secondary",
      "url": "https://americancoinop.com/articles/clean-history-laundromat-anchors-kansas-town",
      "title": "Americancoinop.Com",
      "publisher": "americancoinop.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-402",
      "tier": "secondary",
      "url": "https://www.threads.com/@speumann",
      "title": "Threads.Com",
      "publisher": "threads.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-403",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2026/01/07/2026-u-s-senate-candidates-kansas-277190/sandy-spidel-neumann/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-404",
      "tier": "social",
      "url": "https://www.facebook.com/erik.murray.820582/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-405",
      "tier": "social",
      "url": "https://www.instagram.com/erik4ks/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-406",
      "tier": "social",
      "url": "https://www.linkedin.com/in/erikmurraysior",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-407",
      "tier": "secondary",
      "url": "https://afrotech.com/erik-murray-oakland-impact-group",
      "title": "Afrotech.Com",
      "publisher": "afrotech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-408",
      "tier": "secondary",
      "url": "https://www.genglobal.org/user/erik",
      "title": "Genglobal.Org",
      "publisher": "genglobal.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-409",
      "tier": "secondary",
      "url": "https://lenspoliticalnotes.com/lens-political-note-792-erik-murray-kansas-us-senate/",
      "title": "Lenspoliticalnotes.Com",
      "publisher": "lenspoliticalnotes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-410",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/about",
      "title": "Anneforkansas.Com",
      "publisher": "anneforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-411",
      "tier": "secondary",
      "url": "https://immirail.com/profile-anne-lea-parelkar",
      "title": "Immirail.Com",
      "publisher": "immirail.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-412",
      "tier": "secondary",
      "url": "https://replacejerrymoran.org/",
      "title": "Replacejerrymoran.Org",
      "publisher": "replacejerrymoran.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-413",
      "tier": "secondary",
      "url": "https://mike4kansas.org/",
      "title": "Mike4kansas.Org",
      "publisher": "mike4kansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-414",
      "tier": "secondary",
      "url": "https://mikeforkansas.net/",
      "title": "Mikeforkansas.Net",
      "publisher": "mikeforkansas.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-415",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192430/michael-soetaert",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-416",
      "tier": "secondary",
      "url": "https://www.cityofwellington.net/newsview.aspx?nid=6940",
      "title": "Cityofwellington.Net",
      "publisher": "cityofwellington.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-417",
      "tier": "secondary",
      "url": "https://www.sumnernewscow.com/wellington-city-council-accepts-michael-mike-soetaerts-resignation-at-tuesdays-meeting/",
      "title": "Sumnernewscow.Com",
      "publisher": "sumnernewscow.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-418",
      "tier": "secondary",
      "url": "https://www.kake.com/kansas-senate-candidate-shows-support-for-respect-for-marriage-act/article_7d6721ed-79ed-52f2-8765-2e521ef88df5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-419",
      "tier": "secondary",
      "url": "https://www.laporte4ksgov.com/",
      "title": "Laporte4ksgov.Com",
      "publisher": "laporte4ksgov.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-420",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS03258/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-421",
      "tier": "secondary",
      "url": "https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions",
      "title": "Opencampaign.Com",
      "publisher": "opencampaign.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-422",
      "tier": "social",
      "url": "https://www.facebook.com/alaina.cunningham.9/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-423",
      "tier": "social",
      "url": "https://www.linkedin.com/in/alaina-cunningham-4436ba1/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-424",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/alaina-cunningham/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-425",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-426",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
      "title": "Avvo.Com",
      "publisher": "avvo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-427",
      "tier": "social",
      "url": "https://www.facebook.com/musilcomish/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-428",
      "tier": "social",
      "url": "https://www.linkedin.com/in/shaun-musil-26539490/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-429",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-430",
      "tier": "secondary",
      "url": "https://www.nex-tech.com/business/shaun/",
      "title": "Nex-tech.Com",
      "publisher": "nex-tech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-431",
      "tier": "secondary",
      "url": "https://hutchpost.com/posts/f240fb89-d1f0-4373-ac4b-605d5e5f9c32",
      "title": "Hutchpost.Com",
      "publisher": "hutchpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-432",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-433",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-434",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-435",
      "tier": "secondary",
      "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
      "title": "Ileeta.Org",
      "publisher": "ileeta.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-436",
      "tier": "social",
      "url": "https://www.facebook.com/people/DXI-Training-Solutions-LLC/61553945955697/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-437",
      "tier": "primary",
      "url": "https://www.haysusa.com/directory.aspx?eid=6",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-438",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2015/10/7/toby-dougherty-city-manager-of-haysks",
      "title": "Strongtowns.Org",
      "publisher": "strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-439",
      "tier": "secondary",
      "url": "https://podcast.strongtowns.org/e/toby-dougherty-1535377231/",
      "title": "Podcast.Strongtowns.Org",
      "publisher": "podcast.strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-440",
      "tier": "secondary",
      "url": "https://issuu.com/waterstrategies/docs/mwl_october_2020/s/11017849",
      "title": "Issuu.Com",
      "publisher": "issuu.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-441",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-442",
      "tier": "secondary",
      "url": "https://www.eenews.net/articles/farm-vs-city-kansas-water-law-gets-a-major-stress-test/",
      "title": "Eenews.Net",
      "publisher": "eenews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-443",
      "tier": "secondary",
      "url": "https://openpayrolls.com/rank/highest-paid-employees/hays-ks",
      "title": "Openpayrolls.Com",
      "publisher": "openpayrolls.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-444",
      "tier": "secondary",
      "url": "https://voterly.com/politicians/DmRJRnnSKN/neal-younger",
      "title": "Voterly.Com",
      "publisher": "voterly.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-445",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-446",
      "tier": "social",
      "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-447",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-448",
      "tier": "secondary",
      "url": "https://www.manta.com/c/mhxwpdc/l5-farms-inc",
      "title": "Manta.Com",
      "publisher": "manta.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-449",
      "tier": "social",
      "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-450",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-451",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-452",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-453",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3a3f06a1-6b07-45c6-bf3c-8b76f4d564d7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-454",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/17997478-c7b3-4601-a433-c8f9623b09da",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-455",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-456",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1ff3108c-562d-421d-9200-395f040c2103",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-457",
      "tier": "primary",
      "url": "https://marshall.senate.gov",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-458",
      "tier": "secondary",
      "url": "https://www.quiverquant.com/news/Senator+Roger+Marshall+has+filed+a+new+financial+disclosure+-+here%E2%80%99s+what+we+see",
      "title": "Quiverquant.Com",
      "publisher": "quiverquant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-459",
      "tier": "primary",
      "url": "https://www.govtrack.us/congress/members/roger_marshall/412704/report-card/2024",
      "title": "Govtrack.Us",
      "publisher": "govtrack.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-460",
      "tier": "secondary",
      "url": "https://heritageaction.com/scorecard/members/M001198/118",
      "title": "Heritageaction.Com",
      "publisher": "heritageaction.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-461",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/house/Roger_Marshall_Gun_Control.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-462",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/house/Roger_Marshall_Immigration.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-463",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-votes-against-gun-grabbing-scheme/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-464",
      "tier": "secondary",
      "url": "https://projects.propublica.org/politwoops/user/RogerMarshallMD",
      "title": "Projects.Propublica.Org",
      "publisher": "projects.propublica.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-465",
      "tier": "social",
      "url": "https://x.com/RogerMarshallMD",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-466",
      "tier": "secondary",
      "url": "https://www.standwithcrypto.org/politicians/person/roger---marshall",
      "title": "Standwithcrypto.Org",
      "publisher": "standwithcrypto.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-467",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/03/cowardly-roger-marshall-claims-real-kansans-love-trump-and-doge-we-know-otherwise/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-468",
      "tier": "secondary",
      "url": "https://www.kcur.org/2025-03-07/roger-marshall-called-them-paid-democratic-operatives-they-say-theyre-just-concerned-kansans",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-469",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/03/02/constituents-direct-questions-senator-roger-marshall-town-hall-which-he-ends-early/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-470",
      "tier": "secondary",
      "url": "https://www.thedailybeast.com/maga-senator-embarrassingly-backtracks-on-strike-comments/",
      "title": "Thedailybeast.Com",
      "publisher": "thedailybeast.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-471",
      "tier": "secondary",
      "url": "https://www.healthgrades.com/physician/dr-roger-marshall-ydm6m",
      "title": "Healthgrades.Com",
      "publisher": "healthgrades.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-472",
      "tier": "secondary",
      "url": "https://health.usnews.com/doctors/roger-marshall-279058",
      "title": "Health.Usnews.Com",
      "publisher": "health.usnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-473",
      "tier": "secondary",
      "url": "https://www.doximity.com/pub/roger-marshall-md",
      "title": "Doximity.Com",
      "publisher": "doximity.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-474",
      "tier": "secondary",
      "url": "https://accountability.gop/profile/sen-roger-marshall/",
      "title": "Accountability.Gop",
      "publisher": "accountability.gop",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-475",
      "tier": "secondary",
      "url": "https://insurrectionexposed.org/marshall-roger/",
      "title": "Insurrectionexposed.Org",
      "publisher": "insurrectionexposed.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-476",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/senator-elect-roger-marshall-joins-hawley-in-plans-to-object-electoral-college-vote",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-477",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/senator-roger-marshall-acknowledges-biden-victory-after-objecting-to-electoral-votes/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-478",
      "tier": "secondary",
      "url": "https://amp.cnn.com/cnn/2021/05/03/politics/roger-marshall-january-6-cnn-big-lie/",
      "title": "Amp.Cnn.Com",
      "publisher": "amp.cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-479",
      "tier": "secondary",
      "url": "https://www.newsweek.com/gop-senator-roger-marshall-objecting-2020-election-results-so-ready-move-1588113",
      "title": "Newsweek.Com",
      "publisher": "newsweek.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-480",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Counting_of_electoral_votes_(January_6-7,_2021",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-481",
      "tier": "secondary",
      "url": "https://www.newsweek.com/roger-marshall-responds-fauci-calling-him-moron-1668391",
      "title": "Newsweek.Com",
      "publisher": "newsweek.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-482",
      "tier": "secondary",
      "url": "https://thehill.com/homenews/senate/589249-hot-mic-catches-fauci-calling-gop-senator-a-moron/",
      "title": "Thehill.Com",
      "publisher": "thehill.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-483",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/sen-marshall-responds-to-dr-fauci-hot-mic-situation/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-484",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/breaking-sen-marshall-proves-fauci-lied-by-obtaining-previously-unpublished-financial-records/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-485",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-we-are-fighting-for-vaccine-transparency/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-486",
      "tier": "secondary",
      "url": "https://www.rollingstone.com/politics/politics-news/fauci-act-roger-marshall-anthony-fauci-moron-argument-1284867/",
      "title": "Rollingstone.Com",
      "publisher": "rollingstone.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-487",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Endorsements_by_Roger_Marshall",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-488",
      "tier": "secondary",
      "url": "https://www.washingtonexaminer.com/news/campaigns/4460164/trump-endorsement-tracker-gop-2026-election-primaries/",
      "title": "Washingtonexaminer.Com",
      "publisher": "washingtonexaminer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-489",
      "tier": "secondary",
      "url": "https://www.kake.com/home/senator-roger-marshall-files-for-re-election/article_5845f418-b2ea-42e0-804e-a035d83f76b5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-490",
      "tier": "secondary",
      "url": "https://www.cutoday.info/Fresh-Today/With-Trump-s-Endorsement-Marshall-s-Credit-Card-Bill-May-Suddenly-Have-New-Life-On-Capitol-Hill",
      "title": "Cutoday.Info",
      "publisher": "cutoday.info",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-491",
      "tier": "primary",
      "url": "https://www.durbin.senate.gov/newsroom/press-releases/durbin-marshall-reintroduce-the-credit-card-competition-act",
      "title": "Durbin.Senate.Gov",
      "publisher": "durbin.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-492",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/marshall-durbin-reintroduce-credit-card-competition-act-backed-by-president-trump/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-493",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-introduces-comprehensive-bill-to-reform-americas-dysfunctional-budget-process/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-494",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-releases-statement-after-president-trumps-joint-address-to-congress/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-495",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-praises-trump-admins-historic-renewable-fuel-standard-rule/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-496",
      "tier": "secondary",
      "url": "https://thehill.com/homenews/senate/5778492-roger-marshall-iran-nuclear-program-comments/",
      "title": "Thehill.Com",
      "publisher": "thehill.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-497",
      "tier": "secondary",
      "url": "https://www.mediaite.com/media/news/republican-senator-says-i-was-wrong-when-confronted-with-past-claim-about-iran/",
      "title": "Mediaite.Com",
      "publisher": "mediaite.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-498",
      "tier": "secondary",
      "url": "https://www.breitbart.com/clips/2026/03/11/gop-sen-marshall-i-was-wrong-irans-program-wasnt-set-back-years-by-midnight-hammer/",
      "title": "Breitbart.Com",
      "publisher": "breitbart.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-499",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-releases-statement-on-foreign-aid-bill/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-500",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/03/04/sen-marshall-doubles-down-decision-leave-town-hall-early-claim-that-it-was-sabotaged/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-501",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/life",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-502",
      "tier": "secondary",
      "url": "https://www.cnn.com/videos/politics/2022/01/12/fauci-calls-marshall-moron-financial-disclosures-mh-orig.cnn",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-503",
      "tier": "secondary",
      "url": "https://www.legistorm.com/memberdisclosure/3141/Sen_Roger_Marshall.html",
      "title": "Legistorm.Com",
      "publisher": "legistorm.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-504",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/personal-finances/roger-marshall/reports?cid=N00037034",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-505",
      "tier": "secondary",
      "url": "https://finbold.com/guide/roger-marshall-net-worth/",
      "title": "Finbold.Com",
      "publisher": "finbold.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-506",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/personal-finances/roger-marshall/assets?cid=N00037034",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-507",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/",
      "title": "Ag.Ks.Gov",
      "publisher": "ag.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-508",
      "tier": "primary",
      "url": "https://kpdc.kansas.gov/campaign-finance/",
      "title": "Kpdc.Kansas.Gov",
      "publisher": "kpdc.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-509",
      "tier": "secondary",
      "url": "https://kssos.org/elections/cfr_viewer/cfr_examiner_entry.aspx",
      "title": "Kssos.Org",
      "publisher": "kssos.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-510",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/publications/kansas-attorney-general-kris-kobach/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-511",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/uncovering-kris-kobachs-anti-voting-history",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-512",
      "tier": "secondary",
      "url": "https://www.kcur.org/tags/kris-kobach",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-513",
      "tier": "secondary",
      "url": "https://lawrencekstimes.com/",
      "title": "Lawrencekstimes.Com",
      "publisher": "lawrencekstimes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-514",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/officeholders/kris-kobach/summary",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-515",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-516",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
      ]
    },
    {
      "id": "s-517",
      "tier": "secondary",
      "url": "https://www.firstchristianchurchgb.com/",
      "title": "Firstchristianchurchgb.Com",
      "publisher": "firstchristianchurchgb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Roger Marshall's generated v2 profile."
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
