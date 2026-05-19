/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const MICHAEL_SOETAERT_V2: CandidateFullV2 = {
  "slug": "michael-soetaert",
  "name": "Michael Soetaert",
  "party": "D",
  "position": "U.S. Senate candidate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "City Council Member",
  "hometown": "Wellington, KS (Sumner County -- south-central Kansas)",
  "campaignWebsite": "https://mikeforkansas.my.canva.site",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Soetaert publicly changed his position on abortion after the 2022 Kansas referendum. He previously held an anti-abortion position but now supports abortion rights, saying \"Kansans voted for bodily autonomy.\"",
        "sourceIds": [
          "s-9",
          "s-10",
          "s-11",
          "s-12",
          "s-13",
          "s-14"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "mikeforkansas.my.canva.site",
          "observation": "The campaign site metadata describes Soetaert this way: \"Michael Soetaert PROGRESSIVE DEMOCRAT for U.S. Senate respecting reproductive rights. He's also a GAY LGBTQIAP2S+ activist advocate & ally for the Equality Act.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-21"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "YouTube",
          "observation": "The campaign site issue tiles link to YouTube videos or clips labeled reproductive rights, affordability, voting rights, Department of Peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Bluesky profile metadata as captured on 2026-05-11 listed the display name \"Michael Soetaert for United States Senate 2026 KS\" and the handle michaelsoetaert.bsky.social. The public JSON-LD showed 22,749 followers, 2,380 following, and 235 writes/posts. The profile description listed tags for U.S. Senate, LGBTQIAP2S+, Equality Act, Kansas, peace, SOGI, DEIA, women's rights, ERA, reproductive freedom, vote.gov,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-4"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        }
      ]
    },
    {
      "id": "i-marriage-family-lgbtq-policy-2",
      "title": "Marriage & Family / LGBTQ+ Policy",
      "stated": {
        "text": "He has publicly supported the federal Respect for Marriage Act, which protects same-sex marriages. As the first openly gay person to run for the Kansas Senate seat, this is a core part of his identity and campaign.",
        "sourceIds": [
          "s-12",
          "s-9",
          "s-10",
          "s-11",
          "s-13",
          "s-14"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Instagram",
          "observation": "The same Instagram metadata included this profile text: \"#PROGRESSIVE #DEMOCRAT for United States Senate #KANSAS #GAY #LGBTQIAP2S+ #ReproductiveFreedom #WomensRights #ERA\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Threads",
          "observation": "Threads profile metadata as captured on 2026-05-11 said: \"3 Followers - 225 Threads - #PROGRESSIVE #DEMOCRAT for United States Senate #KANSAS #GAY #LGBTQIAP2S+ #ReproductiveFreedom. See the latest conversations with @michael.soetaert1.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Instagram",
          "observation": "Michael Soetaert's current public campaign record presents a small-dollar, platform-heavy Senate campaign whose clearest repeated themes are reproductive rights, LGBTQIAP2S+ equality, voting, affordability, campaign finance, and peace. His campaign site describes him as \"Michael Soetaert PROGRESSIVE DEMOCRAT for U.S. Senate respecting reproductive rights. He's also a GAY LGBTQIAP2S+ activist advocate & ally for...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-21"
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
          "s-3",
          "s-8",
          "s-20"
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
          "s-3",
          "s-8",
          "s-20"
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
          "s-10",
          "s-11",
          "s-12",
          "s-13",
          "s-14"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "YouTube",
          "observation": "The issue labels repeated across the campaign site and YouTube were reproductive rights, affordability, voting rights, peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS. The Kansas-local YouTube labels were Wellington, Johnson and Sumner, affordability/safety, World Wheat Capital, and America's Breadbasket.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "YouTube",
          "observation": "The campaign site labels included reproductive rights, affordability, voting rights, Department of Peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS, while YouTube titles included \"Michael Soetaert for United States Senate representing Kansas CITIZENS UNITED michael-soetaert\", \"Michael Soetaert for United States Senate representing Kansas AFFORDABILITY SAFETY michael-soetaert\", and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-13"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Michael Soetaert is a Wellington-based Democratic candidate for the U.S. Senate. He grew up in Spring Hill, lives in south-central Kansas, and has built an unusual political biography that includes work in local government, repeated runs for office, and a very public ideological shift from Republican politics to the Democratic field.\n\nHis candidacy is historically notable because he is the first openly gay person to run for the Kansas Senate seat. At the same time, he is running a visibly lean campaign. His public web presence centers on a free Canva campaign site and an ActBlue page rather than a polished statewide operation.\n\nSoetaert's personal story is unusually public in some places and thin in others. Public sources say he was adopted into a Roman Catholic family and now identifies as Christian, but they do not identify a current church. His background matters because much of his campaign message is framed as a story of political and personal change rather than a long record of officeholding.",
  "recordSummary": "Soetaert's public record is less a story of long service in one office than of repeated candidacies and visible movement across the political spectrum. He previously ran in the 2020 Republican primary for Kansas's 1st Congressional District, served briefly on the Wellington City Council, and later entered the Democratic Senate race.\n\nHis issue positions have also changed in public. Campaign materials and reporting show that he moved from an earlier anti-abortion position to a rights-based position after the 2022 Kansas abortion referendum, summari",
  "ownWordsNarrative": "*A summary of what Michael Soetaert has publicly said, posted, and amplified across social media and campaign-controlled pages. Drawn from public posts and profile metadata on YouTube, Instagram, Threads, Bluesky, Facebook, X, TikTok, the campaign website, and ActBlue between approximately November 2025 and May 2026. We report patterns; we do not interpret intent.*\n\n---\n\nMichael Soetaert's current public campaign record presents a small-dollar, platform-heavy Senate campaign whose clearest repeated themes are reproductive rights, LGBTQIAP2S+ equality, voting, affordability, campaign finance, and peace. His campaign site describes him as [\"Michael Soetaert PROGRESSIVE DEMOCRAT for U.S. Senate respecting reproductive rights. He's also a GAY LGBTQIAP2S+ activist advocate & ally for the Equality Act.\"](https://mikeforkansas.my.canva.site/) His Instagram profile repeats the same self-definition in tag form: [\"#PROGRESSIVE #DEMOCRAT for United States Senate #KANSAS #GAY #LGBTQIAP2S+ #ReproductiveFreedom #WomensRights #ERA\"](https://www.instagram.com/michael.soetaert1/)\n\nThe public alignment signal is more self-contained campaign infrastructure than cross-candidate amplification. The campaign site links voters to ActBlue, FEC, Kansas Secretary of State, vote.gov, Facebook, Instagram, X, YouTube, Bluesky, TikTok, and Threads, while the ActBlue page says, [\"Michael Soetaert is the ONLY PROGRESSIVE DEMOCRATIC candidate for United States Senate representing Kansas who is declared and filed with the KSSOS. Mike is challenging the Republican incumbent Senator, Doctor Roger Marshall.\"](https://secure.actblue.com/donate/michael-soetaert) The same page says he is filed with [\"BOTH the Federal Election Commission and the Kansas Secretary of State.\"](https://secure.actblue.com/donate/michael-soetaert) No public endorsements, surrogate networks, or recurring allied accounts were captured in the accessible post-level record.\n\nAudience response is easiest to measure on YouTube, because that platform exposed post titles, view counts, and date labels. The visible channel page showed [30 videos](social-harvest.md#youtube-videos) from roughly November 2025 through February 2026. The highest-viewed captured item was [\"Michael Soetaert for United States Senate representing Kansas: about the BALLOT BOX michael-soetaert\"](https://www.youtube.com/watch?v=UNBOrjk9ZHY) with 1.5K views as of 2026-05-11. Other visible higher-view items included [\"Michael Soetaert for United States Senate representing Kansas WHAT COULD I DO? michael-soetaert\"](https://www.youtube.com/watch?v=EkCIOQ0M_T4) with 324 views, [\"Michael Soetaert for United States Senate representing Kansas CAMPAIGN COMPILATION michael-soetaert\"](https://www.youtube.com/watch?v=jYmGa1liz8E) with 233 views, and [\"Michael Soetaert for United States Senate representing Kansas LGBTQIAP2S+ SALT michael-soetaert\"](https://www.youtube.com/watch?v=Z2xGeJ0OMv8) with 228 views, all captured on 2026-05-11.\n\nNational-policy content appeared mostly through issue labels and video titles. The campaign site labels included reproductive rights, affordability, voting rights, Department of Peace, LGBTQIAP2S+ equality, campaign finance reform, and impeachment/ICE/BP/DHS, while YouTube titles included [\"Michael Soetaert for United States Senate representing Kansas CITIZENS UNITED michael-soetaert\"](https://www.youtube.com/watch?v=FvgZQTEDBac), [\"Michael Soetaert for United States Senate representing Kansas AFFORDABILITY SAFETY michael-soetaert\"](https://www.youtube.com/watch?v=KWhuSNqLD2M), and [\"Michael Soetaert for United States Senate representing Kansas LET THERE BE PEACE! michael-soetaert\"](https://www.youtube.com/watch?v=0wKwUd_QZ3c). The accessible record did not show a developed foreign-policy series beyond the peace framing and Department of Peace label.\n\nKansas and local-place signals were present, but lighter than the national issue and self-definition signals. Visible YouTube titles named Wellington, Johnson and Sumner, affordability and safety, World Wheat Capital, and America's Breadbasket. Examples included [\"Michael Soetaert for United States Senate in Wellington, Kansas michael-soetaert\"](https://www.youtube.com/watch?v=iB74LF3KHAc), [\"Michael Soetaert for United States Senate representing Kansas JOHNSON & SUMNER michael-soetaert\"](https://www.youtube.com/watch?v=QfWP2-MzWds), and [\"Michael Soetaert for United States Senate representing Kansas WORLD WHEAT CAPITAL michael-soetaert\"](https://www.youtube.com/watch?v=9U_-fZa0AhE). In the captured record, Kansas appeared most often as place, food, wheat, and safety language rather than as detailed county-level policy.\n\nThe visible absences are notable because the accessible campaign record was broad across platforms but thin in long-form issue detail. The public harvest did not capture detailed candidate-authored posts on water, the Ogallala Aquifer, Farm Bill policy, crop prices, ethanol, rural hospital closures, Fort Riley, veterans' facilities, Medicare, Social Security, tribal issues, higher education, or county-by-county service delivery. This describes only the captured public record; it does not address private posts, deleted posts, event remarks, or material behind platform access controls.\n\nThe platform pattern was broad presence with uneven visibility. YouTube was the strongest post-level source, with [30 visible videos](social-harvest.md#youtube-videos). Instagram showed [\"52 Followers, 0 Following, 205 Posts\"](https://www.instagram.com/michael.soetaert1/), Threads showed [\"3 Followers - 225 Threads\"](https://www.threads.com/@michael.soetaert1), and Bluesky showed [22,749 followers, 2,380 following, and 235 writes/posts](social-harvest.md#instagram-threads-and-bluesky) in public metadata captured on 2026-05-11. Facebook and X were campaign-linked but not post-readable in the public capture; TikTok was campaign-linked but did not expose public metadata in the capture; no clear current LinkedIn, Truth Social, Gab, Gettr, Substack, or Reddit candidate account was found.\n\n**Methodology:** Date range covered: approximately November 2025 through 2026-05-11 for visible social posts, with public account metadata captured on 2026-05-11. Platforms surveyed: campaign site, ActBlue, YouTube, Instagram, Threads, Bluesky, Facebook, X, TikTok, GoodParty, BallotReady, and web searches for LinkedIn, Truth Social, Gab, Gettr, Substack, and Reddit. Posts examined: 30 visible YouTube videos with titles, view counts, and relative date labels; 205 Instagram posts by public profile count; 225 Threads by public profile count; 235 Bluesky writes/posts by public profile count; campaign-site and ActBlue text. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Soetaert. The available record describes him as Christian and references a Roman Catholic adoptive-family background, but no congregation or denomination is named in his current public materials.",
  "campaignFinance": {
    "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
    "narrative": "Soetaert has an FEC candidate page and an ActBlue donation page, but no clear 2025-2026 campaign finance totals were available online in the source set reviewed for this profile. The visible public record points to a small campaign operation rather than a well-financed statewide effort.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online yet"
      }
    ],
    "undisclosed": "Older federal runs exist in the record, but the current Senate-cycle summary page does not yet show 2025-2026 finance data.",
    "reportingPeriod": "through 2026-04-01",
    "source": "FEC candidate overview S2KS00097"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, ActBlue, YouTube, Instagram, Threads, Bluesky, Facebook, X, TikTok, GoodParty, BallotReady, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit. Harvest range: 2025-11-01 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/michael-soetaert",
      "title": "Michael Soetaert donation page",
      "publisher": "Secure.Actblue",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.instagram.com/michael.soetaert1/",
      "title": "@michael.soetaert1",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert.",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://www.threads.com/@michael.soetaert1",
      "title": "@michael.soetaert1",
      "publisher": "Threads",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert.",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://bsky.app/profile/michaelsoetaert.bsky.social",
      "title": "@michaelsoetaert.bsky.social",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/michael-soetaert?refcode=directory",
      "title": "ActBlue donation page",
      "publisher": "Secure.Actblue",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert."
      ]
    },
    {
      "id": "s-9",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=UNBOrjk9ZHY",
      "title": "\"Michael Soetaert for United States Senate representing Kansas: about the BALLOT BOX michael-soetaert\"",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert."
      ]
    },
    {
      "id": "s-10",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=EkCIOQ0M_T4",
      "title": "\"Michael Soetaert for United States Senate representing Kansas WHAT COULD I DO? michael-soetaert\"",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert."
      ]
    },
    {
      "id": "s-11",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=jYmGa1liz8E",
      "title": "\"Michael Soetaert for United States Senate representing Kansas CAMPAIGN COMPILATION michael-soetaert\"",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert."
      ]
    },
    {
      "id": "s-12",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=Z2xGeJ0OMv8",
      "title": "\"Michael Soetaert for United States Senate representing Kansas LGBTQIAP2S+ SALT michael-soetaert\"",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert."
      ]
    },
    {
      "id": "s-13",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=FvgZQTEDBac",
      "title": "\"Michael Soetaert for United States Senate representing Kansas CITIZENS UNITED michael-soetaert\"",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-14",
      "tier": "social",
      "url": "https://www.youtube.com/watch?v=KWhuSNqLD2M",
      "title": "\"Michael Soetaert for United States Senate representing Kansas AFFORDABILITY SAFETY michael-soetaert\"",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Michael_Soetaert",
      "title": "Michael Soetaert - Ballotpedia",
      "publisher": "Ballotpedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://mikeforkansas.my.canva.site/",
      "title": "Michael Soetaert for Senate",
      "publisher": "Mikeforkansas.My.Canva",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Michael Soetaert.",
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(MICHAEL_SOETAERT_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[michael-soetaert.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
