/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SAM_LANE_V2: CandidateFullV2 = {
  "slug": "sam-lane",
  "name": "Sam Lane",
  "party": "D",
  "position": "Secretary of State candidate",
  "electionSlug": "kansas-sos-2026",
  "incumbent": false,
  "occupation": "Secretary of State candidate",
  "campaignWebsite": "https://www.samuellane.org/about-me",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Has not taken a public position on abortion.",
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
          "observation": "No candidate-controlled post taking a detailed position on abortion policy was found in the captured set; related content appears mainly through broader civil-liberties/authoritarianism frames and a DASS-style democracy frame.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "No sustained platform plank was found on taxes, Medicaid, school finance, agriculture, guns, or abortion, beyond scattered social commentary.",
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
          "observation": "Bluesky Posts - Civil Liberties, Immigration, and Anti-Authoritarian Signals",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "2026-01-27 - Encouraged observers to keep recording after deaths of ICE observers and said documentation remains dangerous but necessary.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Highest engagement item in the feed overall was a reposted official congressional account post from @ocasio-cortez.house.gov about immigration rights, with 51,900 likes and 28,631 reposts at capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Sam Lane is a Democratic candidate for Kansas secretary of state who presents himself as a lifelong Kansan, a former independent, and a working-class outsider. The public biography available online is spare. He describes himself as a University of Kansas psychology graduate with work experience in construction testing, retail, shipping, and food service, and he says he entered the race because he did not want to stand by while trust in elections kept deteriorating.\n\nLane's operation is plainly small. He is not running as a party insider, a former officeholder, or a candidate with a large donor network. His appeal is built on simplicity: protect elections, take the office seriously, and stop turning it into a political weapon.",
  "recordSummary": "Lane has no previous elected office, so his public record is essentially the campaign itself. He uses his website to explain the secretary of state's duties and to argue that the office should be a safeguard for Kansas elections and business filings rather than a stage for ideological fights.\n\nThat makes him different from better-known candidates in the field, but it also leaves a thinner paper trail. There are no committee assignments, legislative votes, or statewide controversies to review. Voters are being asked to judge him mostly on message, biography, and a very small early filing.",
  "ownWordsNarrative": "Across the public material captured for Sam Lane, the center of gravity is election administration rather than a broad ideological platform. His campaign site says he is a \"lifelong Kansan and lifelong independent\" running as a Democrat because Kansas needs a secretary of state who \"plays fair\" and takes election oversight seriously ([source](https://www.samuellane.org/)). The same site frames the office as a safeguard: if elections are not fair, \"you don't have a democratic republic anymore\" ([source](https://www.samuellane.org/)). On the secretary-of-state explainer page, he reduces the office to a practical administrative job with one high-stakes duty: elections. The page says Kansas cannot allow voter suppression or voter fraud and closes with the campaign's core phrase, \"We hold the line\" ([source](https://www.samuellane.org/what-does-the-secretary-of-state-do)).\n\nLane's Bluesky feed reinforces that narrow campaign theory. He talks about voting mechanics, county election offices, mail ballots, paper ballots, voter registration bills, multilingual ballots, and judicial-retention information far more often than he talks about culture-war policy in the abstract. On October 19, 2025, he wrote that Kansas is a paper-ballot state and told voters to check the machine-printed ballot before submitting it ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3m3lgre7oik23)). On November 4, 2025, he urged people to vote in local elections, linked Kansas VoterView, and noted that some counties close polls at 5 p.m., \"something I want to change\" ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3m4remghm3c2s)). On January 22, 2026, he asked why Kansas does not have multilingual ballot options and said voters already know where he stands on \"overly harsh voter ID laws\" ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3md2bll4yc22i)).\n\nThe clearest issue signal is opposition to rules he sees as voter suppression. In January 2026, he repeatedly discussed KS HB2438, first warning that voter-suppression schemes can look harmless ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mclbirfacs2w)), then saying the bill showed \"EXACTLY why I want this job\" because neglect could be enough to disrupt voter registration ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mcl3nb4i222q)). On March 25, 2026, he wrote that his opposition to the SAVE Act / SAVE America Act should be clear and linked coverage explaining the bill ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mhw77rifik2s)). His critique is procedural and civil-libertarian: he does not present himself as trying to maximize one party's advantage so much as trying to block chokepoints in registration and voting.\n\nLane also speaks in a strongly anti-authoritarian register. His Bluesky profile says due process and checks and balances are in the Constitution, but the people's voice only matters if elections are fair and accurate ([source](https://bsky.app/profile/voiceinavacuum.bsky.social)). The feed repeatedly attacks Trump-era executive power, ICE tactics, immigration enforcement, surveillance, and government overreach. On October 1, 2025, he wrote that he has \"always had a problem with the #SurveillanceState\" and tied that concern to civil liberties ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3m23z3wevms2s)). On January 30, 2026, he said digital privacy is a value he intends to bring into the secretary-of-state office ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mdm7fwsvqc2c)). That privacy point matters because it is one of the few places where he explicitly connects a broader personal value to the office he is seeking.\n\nHis public persona is unusually personal for a statewide candidate. He leans into being a working person and an outsider, not a polished party recruit. On April 12, 2026, he said he had a full-time job outside politics but still drove six hours each way to Oberlin, then added that if elected he would drive anywhere in Kansas to help keep polling places open ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mjbey3c4as2m)). On May 8, 2026, he wrote that he filed on his own for the job he was passionate about rather than waiting for party insiders to notice him ([source](https://bsky.app/profile/voiceinavacuum.bsky.social/post/3mlcm37yrkk2u)). His campaign biography says he has worked in construction testing, retail, shipping, food service, and other working-class jobs ([source](https://www.samuellane.org/about-me)).\n\nThe feed is not a conventional consultant-managed campaign channel. It includes jokes, holiday greetings, language asides, foreign-policy reactions, posts about India, Kansas weather, school lunch debt, road markings, books, and personal discomfort with \"posh\" political settings. That informality is part of the signal. It makes Lane look more like a politically engaged ordinary Kansan trying to bootstrap a campaign than like a candidate running through a professional communications calendar. It also means the public record is uneven: some posts are serious election-administration commentary, while others are personal or comic asides with little direct bearing on the secretary-of-state office.\n\nEngagement is very small. The Bluesky profile had 35 followers at the May 11, 2026 capture, and the highest candidate-authored post found in the captured pages had only a few likes or reposts. The campaign does not appear to have a broad public social network beyond Bluesky. No candidate-owned X, Facebook, Instagram, TikTok, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, or YouTube account was located in this pass. The public footprint is therefore narrow but unusually revealing: one campaign site, one active Bluesky account, and a consistent set of concerns around fair elections, due process, voter access, privacy, and resistance to partisan or authoritarian manipulation.\n\nDate range covered: campaign website current as of May 11, 2026; Bluesky capture from at least January 4, 2025 through May 8, 2026, with campaign-specific posts beginning by April 2025. Platforms surveyed: campaign website, Bluesky, X, Facebook, Instagram, TikTok, YouTube, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, Johnson County Election Office, DASS, and Ballotpedia. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "$590.91 (early public filing)",
    "narrative": "Lane's 2025 filing showed $590.91 raised, and $580.27 of that came from Lane himself. The report reads like a seed-stage campaign financed almost entirely out of the candidate's own pocket.",
    "donors": [
      {
        "name": "Samuel Lane",
        "amount": "$580.27"
      }
    ],
    "undisclosed": "cited sources did not show a broader institutional donor base beyond Lane's own contribution and a very small handful of minor activity.",
    "reportingPeriod": "most recent public filing reviewed",
    "source": "Reviewed public finance summary"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Bluesky, X / Twitter, Facebook, Instagram, TikTok, YouTube, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, Johnson County Election Office, DASS, Ballotpedia. Harvest range: 2025-01-04 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://www.samuellane.org/",
      "title": "samuellane.org",
      "publisher": "Samuellane",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sam Lane."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://www.jocoelection.org/candidates-elected-officials/samuel-lane",
      "title": "Johnson County Election Office",
      "publisher": "Jocoelection",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sam Lane."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Samuel_Lane",
      "title": "Ballotpedia",
      "publisher": "Ballotpedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sam Lane."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://www.samuellane.org/what-does-the-secretary-of-state-do",
      "title": "secretary-of-state explainer",
      "publisher": "Samuellane",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sam Lane."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "primary",
      "url": "https://bsky.app/profile/ocasio-cortez.house.gov/post/3lgcck2yf7c2r",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Border.",
        "Highest engagement item in the feed overall was a reposted official congressional account post from @ocasio-cortez.house.gov about immigration rights, with 51,900 likes and 28,631 "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SAM_LANE_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[sam-lane.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
