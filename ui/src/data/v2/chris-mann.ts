/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CHRIS_MANN_V2: CandidateFullV2 = {
  "slug": "chris-mann",
  "name": "Chris Mann",
  "party": "D",
  "position": "Attorney General candidate",
  "electionSlug": "kansas-ag-2026",
  "incumbent": false,
  "occupation": "Attorney, Owner of Mann Law Firm, P.A. (est. 2016/2017)",
  "family": "Ashley Mann -- Cardiothoracic surgeon practicing in Topeka (some reports say Olathe). Supported Chris in opening his law firm in 2016.; Details",
  "campaignWebsite": "https://chrismannforkansas.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
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
          "observation": "No sustained candidate-controlled social thread was found in this capture on abortion, LGBTQ policy, guns, immigration, school choice, marijuana, Medicaid expansion, taxes, or judicial selection. These may exist behind platform login walls, but they were not visible in public/logged-out capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Across the visible capture, there was no candidate-controlled Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, or Reddit account found. The campaign site did not expose a detailed issues page, and the public/logged-out harvest did not find sustained candidate-controlled posting on abortion, LGBTQ policy, guns, immigration, school choice, marijuana, Medicaid expansion, taxes, or judicial selection (harvest)....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
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
        "text": "Runs as a Democrat. The Kansas Democratic Party platform supports immigration reform with a pathway to citi",
        "sourceIds": [
          "s-20",
          "s-1",
          "s-2",
          "s-3",
          "s-4",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Chris Mann is a Lawrence attorney and Democratic candidate for Kansas attorney general. His campaign and race profiles describe a career that moved from policing into prosecution and private law practice. He became a police officer at 21, was struck by a drunk driver during a traffic stop in 2002, then left law enforcement, went to law school, and later worked as a prosecutor in Wyandotte County and at the Kansas Securities Commission before opening a Lawrence law firm in 2016.\n\nMann first ran statewide in 2022 and nearly beat Kris Kobach in one of the closest Kansas races of that cycle. He returned for a rematch in 2026 with a biography that is still built around public safety, courtroom work, and the argument that the attorney general's office should focus more on basic law enforcement than on partisan headline fights. Public sources also identify his wife, Ashley, as a surgeon practicing in Olathe.",
  "recordSummary": "Mann's record is professional rather than legislative. His campaign points to his time as a police officer, his work as a prosecutor, and his service at the Kansas Securities Commission as the clearest evidence of what kind of attorney general he would be. He has also served as national chairman of Mothers Against Drunk Driving, a role that ties his public life to anti-DUI advocacy and to Kansas's ignition-interlock law for offenders.\n\nHis electoral record is already unusual for a Kansas Democrat. In 2022 he lost to Kobach by 17,363 votes, 50.8% to 49.1%, the closest statewide race in Kansas that year. He announced a second run on July 30, 2025, framing the race as a choice between a law-enforcement-focused attorney general and Kobach's highly ideological approach to the office.",
  "ownWordsNarrative": "*A summary of what Chris Mann has publicly said, posted, and amplified across his campaign website, campaign-linked social accounts, public social previews, campaign video, and credible public coverage. Drawn from visible public material between September 22, 2021 and May 11, 2026, with the main 2026-cycle capture running from July 30, 2025 to May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the captured public record, Mann's dominant message is that the attorney general's office should be led by someone with law-enforcement and courtroom experience. His campaign homepage says he \"dedicated his life to serving and protecting Kansas communities - first as a police officer and then as a prosecutor\" and that he will \"defend the Constitution, protect the rule of law and ensure Kansas families are safe\" ([source](https://chrismannforkansas.com/)). His Facebook page describes him as a \"Former police officer and prosecutor running for Kansas Attorney General to protect Kansans and keep our communities safe\" ([harvest](social-harvest.md#facebook-and-instagram)). His Instagram bio uses the same frame, saying he is running \"to serve our state, reduce violent crime, and protect our families\" ([source](https://www.instagram.com/chrismannks/)).\n\nMann's biography is not incidental to the campaign; it is the campaign's core credential. The \"Meet Chris\" page says he became a police officer at 21, was struck by a drunk driver during a 2002 traffic stop, later went to law school, became a Wyandotte County prosecutor, served on MADD's national board, worked at the Kansas Securities Commission, and opened Mann Law Firm in 2016 ([source](https://chrismannforkansas.com/meet-chris/)). The same page says he prosecuted cases \"from DUI to murder\" and later represented victims of drunk driving and their families ([source](https://chrismannforkansas.com/meet-chris/)). In a DAGA endorsement statement from 2022, Mann said, \"I have spent my career serving Kansans and working to keep our families safe\" ([source](https://dems.ag/daga-endorses-chris-mann-in-kansas-attorney-general-race/)).\n\nThe second major signal is contrast with Kris Kobach. In his 2026 launch coverage, Mann said Kansas families need \"a law enforcement officer defending our communities and our rights, not a politician focused on their own personal ambition\" ([source](https://www.kwch.com/2025/07/30/former-prosecutor-chris-mann-announces-candidacy-attorney-general/)). A campaign press release reposted by Sedgwick County Grassroots Democrats said he would \"refocus the office on the basics of law enforcement, defend the rule of law, protect our rights, protect our families and make Kansas a safer place to live\" ([source](https://scgrassrootsdems.com/2025/08/01/2260/)). In an indexed X post from the 2026 cycle, he wrote, \"Kansans deserve an Attorney General who fights for their families, not for political headlines\" ([harvest](social-harvest.md#x--twitter-indexed-posts)).\n\nRule of law, constitutional rights, and family safety recur across platforms, but usually as part of the law-enforcement frame rather than as a long list of policy positions. His website says he will \"defend the Constitution\" and \"protect the rule of law\" ([source](https://chrismannforkansas.com/)). His indexed X campaign announcement said, \"It's time for a law enforcement leader who puts people before politics. I'll protect your rights, keep families safe, and hold the powerful accountable\" ([harvest](social-harvest.md#x--twitter-indexed-posts)). KCUR summarized his 2022 race as focused on state issues and his former police/prosecutor background, and reported Mann's argument that he would \"bring some important stability\" to the attorney general's office ([source](https://www.kcur.org/podcast/up-to-date/2022-10-21/kansas-attorney-general-candidate-chris-mann)).\n\nThe captured issue mix is narrow and disciplined. In the coded harvest, public safety, law enforcement, and violent crime appear in 12 of 17 usable candidate-controlled or candidate-attributed items, or 71 percent ([harvest](social-harvest.md#topic-share-analysis)). Rule of law, constitutional rights, and rights language appear in 7 items, and Kobach contrast appears in 6 items. DUI, MADD, and victims' advocacy appear in 3 items, mostly in biography material rather than short social posts. Fundraising and campaign viability appear in 3 items, including the January 9, 2026 website post saying Mann raised about $537,000 during 2025 compared with about $205,000 at the same point in the 2022 race ([source](https://chrismannforkansas.com/mann-more-than-doubles-fundraising-from-22-attorney-generals-race/)).\n\nMann's public social footprint is present but less open than some candidates' feeds. The campaign website links Facebook, X, and Instagram directly ([source](https://chrismannforkansas.com/)). Facebook metadata showed 2,730 likes and 1,083 talking about this; Instagram metadata showed 739 followers, 21 following, and 99 posts; and X previews showed about 2K followers ([harvest](social-harvest.md#presence-detector)). The highest visible post-level engagement in this sweep was an allied Douglas County Democrats Facebook video featuring Mann, with 1.8K views and 59 reactions ([source](https://www.facebook.com/dgcodems/videos/chris-mann-is-running-for-the-attorney-general-for-kansas-in-2026-currently-mann/824337733833850/)). The highest indexed X engagement found was a filing/fundraising post with 11 replies, 4 reposts, 20 likes, and 1K views ([harvest](social-harvest.md#highest-visible-engagement)).\n\nThe clearest 2022 election-integrity statement in the capture came after Election Day, when Mann posted that the attorney general race was still too close to call and that mailed ballots deserved to be counted \"as the law allows.\" He added, \"That is essential to democracy\" ([source](https://www.kwch.com/2022/11/09/kansas-attorney-generals-race-still-too-close-call-2/)). His later concession statement, published by KWCH, asked Kobach \"to put aside divisive politics and focus on the safety and security of all Kansans\" and said the campaign was \"never about politics\" but \"about service\" ([source](https://www.kwch.com/2022/11/09/kansas-attorney-generals-race-still-too-close-call-2/)).\n\nAcross the visible capture, there was no candidate-controlled Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, or Reddit account found. The campaign site did not expose a detailed issues page, and the public/logged-out harvest did not find sustained candidate-controlled posting on abortion, LGBTQ policy, guns, immigration, school choice, marijuana, Medicaid expansion, taxes, or judicial selection ([harvest](social-harvest.md#visible-absences)). Those absences should be read as public-capture limits, not proof that Mann has no position.\n\n---\n\n**Methodology:** Date range covered: September 22, 2021 to May 11, 2026, with the main 2026-cycle capture from July 30, 2025 to May 11, 2026. Platforms surveyed: campaign website, website RSS, Facebook, X/Twitter, Instagram, YouTube, LinkedIn, Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, search-indexed social previews, and credible Kansas coverage quoting candidate statements. Items examined: 3 website news/RSS posts, 2 core campaign website pages, 5 indexed X posts, Facebook/Instagram/X account metadata, 1 YouTube campaign video, 1 allied Facebook video, and 4 credible public items quoting Mann or campaign statements.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Mann's campaign uses faith language in places, but the source material does not name a congregation or church website.",
  "campaignFinance": {
    "totalRaised": "$536,639.57 (2025 year-end)",
    "narrative": "Mann started the rematch with Kobach as a serious statewide fundraiser. His 2025 year-end filing reported $536,639.57 raised, $280,041.49 spent, and $257,257.08 cash on hand, along with $7,655.77 in in-kind support and no personal loans in the summary reviewed in the source set. The donor list in the raw material pointed to a broad base rather than one dominant patron. Named contributors included James Bartimus, Andrea Himoff, Karen Mann, Scott Teeter, Thomas Adrian, Paige Ballard, Linda Salem, and many smaller donors spread across the state.",
    "donors": [
      {
        "name": "James Bartimus",
        "amount": "$1,000.00"
      },
      {
        "name": "Andrea Himoff",
        "amount": "$1,000.00"
      },
      {
        "name": "Scott Teeter",
        "amount": "$1,000.00"
      },
      {
        "name": "Thomas Adrian",
        "amount": "$500.00"
      },
      {
        "name": "Karen Mann",
        "amount": "$500.00"
      },
      {
        "name": "Linda Salem",
        "amount": "$500.00"
      },
      {
        "name": "Paige Ballard",
        "amount": "$200.00"
      },
      {
        "name": "Louis Bornman",
        "amount": "$50.00"
      }
    ],
    "undisclosed": "The filing includes many more contributors than the small extracted sample listed here.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and public finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Website RSS, Facebook, X / Twitter, Instagram, YouTube, LinkedIn, Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Search-indexed social previews, Public Kansas coverage. Harvest range: 2021-09-22 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://chrismannforkansas.com/",
      "title": "chrismannforkansas.com",
      "publisher": "Chrismannforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Chris Mann."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://chrismannforkansas.com/meet-chris/",
      "title": "Meet Chris",
      "publisher": "Chrismannforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Chris Mann."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://chrismannforkansas.com/news/",
      "title": "News",
      "publisher": "Chrismannforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Chris Mann."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://chrismannforkansas.com/feed/",
      "title": "feed",
      "publisher": "Chrismannforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Chris Mann."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://www.facebook.com/ChrisMannKS/",
      "title": "Chris Mann",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Chris Mann."
      ]
    },
    {
      "id": "s-8",
      "tier": "social",
      "url": "https://www.youtube.com/@ChrisMann-Kansas",
      "title": "Chris Mann for AG / @ChrisMann-Kansas",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Chris Mann."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/30/democrat-chris-mann-announces-second-bid-kansas-ag/",
      "title": "WIBW: Mann Announces Second Bid",
      "publisher": "Wibw",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Chris Mann."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CHRIS_MANN_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[chris-mann.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
