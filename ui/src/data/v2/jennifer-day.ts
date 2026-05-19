/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JENNIFER_DAY_V2: CandidateFullV2 = {
  "slug": "jennifer-day",
  "name": "Jennifer Day",
  "party": "D",
  "position": "Secretary of State candidate",
  "electionSlug": "kansas-sos-2026",
  "incumbent": false,
  "occupation": "Former State Representative / Real Estate Investor",
  "family": "Jesse Day; Not specifically enumerated in available sources",
  "campaignWebsite": "https://www.electjenday.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across the accessible public set reviewed, Day's current campaign channels did not show sustained issue coverage on abortion, LGBTQ policy, religious liberty, immigration, school choice, marijuana policy, Medicaid expansion, rural hospital closures, water policy, the Ogallala Aquifer, K-12 school finance, higher education affordability, child care, housing costs, opioids, broadband, road funding, or veterans...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Several issue areas were not prominent in the accessible campaign-controlled material. The reviewed set did not show sustained discussion of abortion, LGBTQ policy, religious liberty, immigration, school choice, marijuana policy, Medicaid expansion, rural hospitals, water, the Ogallala Aquifer, K-12 school finance, higher education affordability, child care, housing, opioids, broadband, or road funding. The...",
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
          "s-1"
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
          "s-1"
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
          "s-1"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Bluesky post, 2026-04-06, saying her current LLC report and fee were easier than finding lighting for a residential rehab project. (source) 21. Bluesky post, 2026-04-22, announcing a 2026 Gun Sense Candidate distinction from Moms Demand Action. (source) 22. Bluesky post, 2026-05-05, announcing Gov.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
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
          "s-1"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Jennifer Day is a former Kansas House member from Johnson County and a 2026 Democratic candidate for secretary of state. Her public biography is built around business work in technology, real estate, and finance, followed by a turn into election work and state politics. She says she spent 16 years in business, built a small real-estate investment firm, founded an interior design company, volunteered with the League of Women Voters, and worked for seven years as an election worker before serving in the Legislature.\n\nDay represented House District 48 from 2020 to 2021. That is a short legislative run, but it gives her a public record beyond campaign language. Her current bid for secretary of state is framed less as an ideological crusade than as an argument that the office should run elections accurately, communicate clearly with the public, and handle business filings without unnecessary friction.",
  "recordSummary": "Day's legislative archive ties her to bills and votes on concealed carry in the Capitol, the death penalty, World War II funeral honors, and international relations. It is not a long record, but it is a real one, and it distinguishes her from candidates whose public history begins with the current campaign.\n\nIn the secretary of state race, Day has made election administration and business services the center of her case. She argues that voting should be accessible and secure at the same time, and she pairs that with a promise to streamline business registration and reduce bureaucratic hurdles for Kansas employers. The through line in her campaign is administrative competence rather than culture-war rhetoric.",
  "ownWordsNarrative": "_A summary of what Jennifer Day has publicly said, posted, and amplified across campaign channels and public social media. Drawn from public captures of her campaign website, Bluesky, X/Twitter, Instagram, Facebook, YouTube, DASS, and indexed Democratic event pages from September 2025 through May 2026. We report patterns; we do not interpret intent._\n\nAcross the accessible public record, Day's campaign is built around a compact election-administration message: elections should be safe, secure, accessible, and insulated from disinformation. Her campaign site says, \"OUR RIGHT TO VOTE IS FUNDAMENTAL,\" and says she is \"running to safeguard our elections.\" ([source](https://www.electjenday.com/)) The same site says, \"The Secretary of State is charged with overseeing and protecting the electoral process across Kansas,\" and that Kansans deserve \"a safe, secure and accessible voting experience for all who are eligible.\" ([source](https://www.electjenday.com/))\n\nThe social feed most available for post-level review is Bluesky, where the campaign account had 32 followers, 37 following, and 70 posts on May 11, 2026. The accessible feed returned 55 recent entries from Nov. 18, 2025 through May 8, 2026. Of those, 16 centered voting access, election administration, mail ballots, early voting, federal/state control, voter data, or Jan. 6. On Jan. 22, 2026, Day posted, \"Voting should be simple, secure and accessible.\" ([source](https://bsky.app/profile/electjenday.bsky.social/post/3md24hfrm6u2m)) On Jan. 26, she tied that position to experience, saying she had been \"volunteering at polling places and serving as an election worker for the past seven years.\" ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mde3smr6pm2i))\n\nDay's campaign contrasts its voting-access frame with proposed restrictions on mail and early voting. On Feb. 9, 2026, she wrote that a Kansas Senate bill \"could end mail-in ballots\" and called it \"a clear attack on Kansas voters.\" ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mehahjlh252d)) On Feb. 14, she named military families overseas, seniors, rural voters, and working parents as Kansans who use mail-in ballots. ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mes2wul5yr2e)) That Feb. 14 post had the highest visible Bluesky post-level engagement in the captured set: 4 likes and 2 reposts.\n\nA second recurring theme is state and local control of election administration. On Feb. 7, 2026, Day wrote that the authority for administering elections \"belongs to the states, not the federal government.\" ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mea5ad5nrd2o)) On Feb. 16, she responded to federal efforts to obtain unredacted voter rolls by saying, \"Kansas deserves a Secretary of State who will protect your data and your vote.\" ([source](https://bsky.app/profile/electjenday.bsky.social/post/3meyy2k67iu2z)) She also said she had been meeting with county clerks \"who are in charge of overseeing voting and elections in their communities.\" ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mh76kh4iwc2h))\n\nThe campaign's everyday posting is more travel-and-field heavy than policy-heavy. In the 55 accessible Bluesky entries, 24 were chiefly about county visits, Democratic events, volunteer or house-party asks, supporter conversations, or campaign travel. The feed places Day in Leavenworth, Colby, Dodge City, Hays, Johnson County, Marion County, Wichita, Topeka, Pittsburg, Mound City, Ottawa, Lawrence, Riley County, Kingman County, Oberlin, Norton County, Salina, Wabaunsee County, Marshall County, Pratt County, and Lyon County. A May 8, 2026 post said it had been \"great getting out and talking directly with Kansans.\" ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mlerd3q3a22p))\n\nHer public alignment network is Democratic and election-administration oriented. The campaign site lists Gov. Laura Kelly, House Democratic Leader Brandon Woodard, Reps. Nikki McDonald, Dan Osman, Jerry Stogsdill, Johnson County Commission Chair Mike Kelly, and JCCC Trustee Dawn Rattan among endorsers. ([source](https://www.electjenday.com/)) On May 5, 2026, Day announced Kelly's endorsement and wrote that she shares Kelly's commitment to \"protecting our democracy and making government work better for everyone.\" ([source](https://bsky.app/profile/electjenday.bsky.social/post/3ml4yzwe4js2x)) DASS describes her as committed to safe, secure, accessible elections, fighting disinformation, protecting voting rights, increasing participation, and making it easier to start and grow a business. ([source](https://demsofstate.org/kansas-2026/))\n\nThe business-services message is present but secondary in the social feed. The campaign site says government should improve \"the ease of running a business\" and that Day would modernize and streamline business registration. ([source](https://www.electjenday.com/)) On Apr. 6, 2026, she personalized that issue by posting that her current LLC was formed in 2024 and that filing her report and paying the fee was easier than finding lighting for a residential rehab project. ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mithgio4yc2p)) In topic coding, business services accounted for one of the 55 accessible Bluesky entries, while the campaign site gives it a full platform plank.\n\nThe campaign footprint is broad but still small in public metrics. On May 11, 2026, Facebook showed 948 likes and 269 talking about this; Instagram showed 122 followers, 81 following, and 64 posts; X showed 41 followers, 97 following, 70 statuses, and 62 media items; Bluesky showed 32 followers, 37 following, and 70 posts. ([Facebook](https://www.facebook.com/ElectJenDayKS), [Instagram](https://www.instagram.com/electjenday/), [X](https://twitter.com/electjenday), [Bluesky](https://bsky.app/profile/electjenday.bsky.social)) YouTube presence was limited to a visible campaign channel and the launch video, \"Jennifer Day - Launch Video.\" ([source](https://www.youtube.com/watch?v=QsWfGPmD574))\n\nSeveral issue areas were not prominent in the accessible campaign-controlled material. The reviewed set did not show sustained discussion of abortion, LGBTQ policy, religious liberty, immigration, school choice, marijuana policy, Medicaid expansion, rural hospitals, water, the Ogallala Aquifer, K-12 school finance, higher education affordability, child care, housing, opioids, broadband, or road funding. The clearest non-election issue validator was an Apr. 22, 2026 post announcing a Moms Demand Action \"Gun Sense Candidate\" distinction. ([source](https://bsky.app/profile/electjenday.bsky.social/post/3mk3pnx2lz224))\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: Sept. 25, 2025 to May 11, 2026 for presence detection, and Nov. 18, 2025 to May 8, 2026 for accessible Bluesky post-level review. Platforms surveyed: campaign website, Bluesky, X/Twitter, Instagram, Facebook, YouTube, LinkedIn, TikTok, Threads, Truth Social, Gab, Gettr, Substack, Reddit, DASS, Kansas Democratic Party pages, and indexed election guides. Items examined: 26 accessible site/profile/public-record items, including 55 accessible Bluesky feed entries and 0 verified repost-network items. Login-walled or script-blocked material was not counted as reviewed. Engagement was reported only when visible in public metadata on capture date. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Her public message is framed in civic and administrative terms, and the accessible campaign and legislative material does not tie her to a named congregation.",
  "campaignFinance": {
    "totalRaised": "$84,304.87 (2025 year-end)",
    "narrative": "Day's 2025 filing reported $84,304.87 raised, $69,564.35 spent, and $14,740.52 cash on hand. The publicly visible donor list includes small and mid-sized contributions from individuals such as James D. Childers, Louis Bornman, Michael Tourtellot, David Lambertson, and Dan Osman. The filing reads like a conventional donor-supported statewide campaign rather than a self-funded operation. The available names and amounts point to a smaller network of individual supporters, not one dominant donor or a large personal loan.",
    "donors": [
      {
        "name": "James D Childers",
        "amount": "$25"
      },
      {
        "name": "Louis Bornman",
        "amount": "$100"
      },
      {
        "name": "Michael Tourtellot",
        "amount": "$100"
      },
      {
        "name": "Dan Wancura",
        "amount": "$50"
      },
      {
        "name": "David Lambertson",
        "amount": "$250"
      },
      {
        "name": "Leslie Mark",
        "amount": "$25"
      },
      {
        "name": "Diana Stewart",
        "amount": "$10"
      },
      {
        "name": "Dan Osman",
        "amount": "$250"
      }
    ],
    "undisclosed": "The filing contained more itemized contributors than the short extracted sample shown here.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing SW04JD_202601"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Bluesky, X / Twitter, Instagram, Facebook, YouTube, LinkedIn, TikTok, Threads, Truth Social, Gab, Gettr, Substack, Reddit, DASS, Kansas Democratic Party pages, Indexed election guides. Harvest range: 2025-09-25 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2022/b2021_22/members/rep_day_jennifer_1/",
      "title": "Kslegislature",
      "publisher": "Kslegislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jennifer Day."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social/post/3mk3pnx2lz224",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Several issue areas were not prominent in the accessible campaign-controlled material. The reviewed set did not show sustained discussion of abortion, LGBTQ policy, religious liber"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://bsky.app/profile/electjenday.bsky.social/post/3mithgio4yc2p",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Guns / Second Amendment.",
        "Bluesky post, 2026-04-06, saying her current LLC report and fee were easier than finding lighting for a residential rehab project. (source) 21. Bluesky post, 2026-04-22, announcing"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JENNIFER_DAY_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jennifer-day.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
