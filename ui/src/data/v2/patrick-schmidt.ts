/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const PATRICK_SCHMIDT_V2: CandidateFullV2 = {
  "slug": "patrick-schmidt",
  "name": "Patrick Schmidt",
  "party": "D",
  "position": "U.S. Senate candidate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "State Senator / Navy Veteran",
  "born": "Overland Park, Kansas",
  "campaignWebsite": "https://patrickforkansas.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-5",
          "s-7",
          "s-8",
          "s-9"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across the captured campaign-controlled public items, no posts or pages were found addressing Kansas water policy, the Ogallala Aquifer, wheat prices, Farm Bill details, Fort Riley, rural hospital closures by facility name, abortion policy in Schmidt's own campaign website copy, gun policy, immigration enforcement details, capital punishment, foster care, adoption, or religious liberty.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "patrickforkansas.com",
          "observation": "The campaign health-care page addresses Medicaid expansion, prescription drugs, insulin, and federally qualified health centers, but the captured campaign-controlled pages did not include named rural hospital examples (source). The captured campaign-controlled pages also did not include a first-person abortion-policy statement, while a Kansas City Star interview said Schmidt described himself as an...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-9"
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
          "s-5",
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
          "s-5",
          "s-7",
          "s-8",
          "s-9"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across the captured period the feed contains no accessible campaign-controlled posts about Kansas water policy, the Ogallala Aquifer, wheat prices, Farm Bill details, Fort Riley, rural hospital closures by facility name, gun policy, immigration enforcement details, capital punishment, foster care, adoption, or religious liberty (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
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
          "s-5",
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
        "text": "Has not taken a specific public position on immigration, though his campaign platform includes a general reference to immigration reform.",
        "sourceIds": [
          "s-5",
          "s-7",
          "s-14",
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "Supports public education funding.",
        "sourceIds": [
          "s-5",
          "s-7",
          "s-8",
          "s-9"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "Kansas Senate Democrats profile: Lists campaign website, fundraising page, Facebook page, and Instagram for Patrick Schmidt. The profile text emphasizes Navy service, public-school-teacher parents, family roots, and service in the Kansas Senate. URL: Kansas Senate Democrats profile",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-11"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Across the captured public record, Schmidt's dominant theme is service and working-family economics, with biography, family roots, military service, and household costs appearing in five of the eight campaign-controlled public items captured. His campaign home page says, \"Patrick Schmidt is a former Naval Intelligence Officer, husband, and sixth generation Kansan. He comes from a long line of farmers, veterans,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Runs as a Democrat. No specific personal statement found in public sources.",
        "sourceIds": [
          "s-5",
          "s-7",
          "s-8",
          "s-9"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "patrickforkansas.com",
          "observation": "On national and foreign-policy questions, Schmidt's public record centers on military service, January 6, the Middle East, tariffs, and institutional accountability. His 2021 launch release said, \"During my service on the USS RONALD REAGAN, I saw firsthand the impact the United States makes in the world when we are strong and united.\" (source). In a May 8, 2026, Kansas City Star interview, he said, \"Some of the...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-14"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "For Kansas-specific issues, the most concrete local policy thread in the captured record is property tax relief, followed by healthcare costs, labor, and trade. In a Kansas Reflector interview, Schmidt said, \"I would love to see real property tax relief for Kansans.\" (source). His campaign health-care page says, \"I believe wholeheartedly that every American deserves access to affordable health care.\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        }
      ]
    },
    {
      "id": "i-property-taxes-8",
      "title": "Property Taxes",
      "stated": {
        "text": "This is his signature issue. He broke with his own party to support a constitutional amendment that would cap annual property-value increases for tax purposes. He has called property tax relief his top legislative priority.",
        "sourceIds": [
          "s-9",
          "s-10",
          "s-5",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Instagram",
          "observation": "Instagram: @patrickforks — 93 followers / 5 following / 4 posts; bio text: \"Kansan, Navy Veteran, and candidate for KS-02. Running to invest in Kansas families and rebuild our economy.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-4"
          ],
          "mappedToIssueId": "i-property-taxes-8"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "Source: Kansas Reflector, \"Freshman Kansas senator ‘trying to stop bad stuff’ while pressing for property tax relief\" — URL",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-property-taxes-8"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "Context: Kansas Reflector podcast interview on Schmidt's first legislative session and property tax relief.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-property-taxes-8"
        }
      ]
    },
    {
      "id": "i-corporate-taxes-9",
      "title": "Corporate Taxes",
      "stated": {
        "text": "Wants corporations to \"pay their fair share\" and close tax loopholes.",
        "sourceIds": [
          "s-5",
          "s-7",
          "s-8",
          "s-9"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "The captured public alignment signal is campaign-institutional rather than repost-driven. The official site links to Facebook, X, and Instagram, and its footer lists \"Paid for by Patrick Schmidt for Kansas, Gov. John Carlin, Treasurer.\" (source). The Kansas Senate Democrats profile links Schmidt's campaign website, fundraising page, Facebook page, and Instagram, and says, \"As Senator, Patrick will be guided by...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-corporate-taxes-9"
        }
      ]
    },
    {
      "id": "i-healthcare-10",
      "title": "Healthcare",
      "stated": {
        "text": "Supports rural healthcare access and opposes Medicaid cuts that affect rural hospitals.",
        "sourceIds": [
          "s-9",
          "s-5",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-january-6-democracy-11",
      "title": "January 6 / Democracy",
      "stated": {
        "text": "Sponsored a Kansas Senate resolution condemning the pardons and commutations of January 6 participants. His witnessing of the Capitol attack while stationed at the Office of Naval Intelligence was a motivating factor in his entry into politics.",
        "sourceIds": [
          "s-3",
          "s-11",
          "s-19",
          "s-2",
          "s-5",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Patrick Schmidt is a Democratic state senator from the Lawrence-Topeka area and a former U.S. Navy intelligence officer running for U.S. Senate. He was born in Overland Park, graduated from Tufts University in 2013, and served on the USS Ronald Reagan, with the Joint Special Operations Task Force in the Arabian Peninsula, and at the Office of Naval Intelligence in Washington, D.C.\n\nSchmidt entered the Kansas Senate in January 2025 after winning District 19 in 2024. That makes him the only current elected officeholder in the Democratic Senate field. His public biography leans heavily on military service, family roots, and a Kansas identity tied to teachers, farmers, and small-town work rather than celebrity or outsider branding.",
  "recordSummary": "Schmidt's legislative record is still short, but it is already more concrete than most of the Democratic Senate field. In Topeka he has made property tax relief one of his signature issues and broke with many Democrats to support a constitutional amendment that would cap annual property-value increases for tax purposes. He also sponsored Senate Resolution 1706 condemning the pardons and commutations for people involved in the January 6 Capitol attack.\n\nHis military background is not just biographical decoration in this race. Schmidt has said witnessing the aftermath of January 6 while stationed in Washington helped push him toward politics, and he presents himself as someone trying to connect national-security experience with Kansas governance. That gives him a public record built on service, an identifiable issue portfolio, and a clearer governing profile than candidates whose Senate runs are their first real test in office.",
  "ownWordsNarrative": "*A summary of what Patrick Schmidt has publicly said, posted, and amplified across social media and campaign-controlled public pages. Drawn from public posts, profile surfaces, campaign pages, and public-record interviews between July 2021 and May 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the captured public record, Schmidt's dominant theme is service and working-family economics, with biography, family roots, military service, and household costs appearing in [five of the eight campaign-controlled public items captured](social-harvest.md#topic-share-analysis). His campaign home page says, \"Patrick Schmidt is a former Naval Intelligence Officer, husband, and sixth generation Kansan. He comes from a long line of farmers, veterans, teachers, and coal miners.\" ([source](https://patrickforkansas.com/)). His 2021 launch post on X used the same frame in shorter form: \"My name is Patrick Schmidt. I'm a Democrat, veteran, and Kansan. And I'm running for Congress. Kansans deserve a voice that will represent hard-working families like mine, not big corporations. There is a long road ahead and I hope you'll join me.\" ([source](https://www.kshb.com/news/local-news/kansas-navy-veteran-announces-bid-for-congress)).\n\nThe captured public alignment signal is campaign-institutional rather than repost-driven. The official site links to Facebook, X, and Instagram, and its footer lists \"Paid for by Patrick Schmidt for Kansas, Gov. John Carlin, Treasurer.\" ([source](https://patrickforkansas.com/)). The Kansas Senate Democrats profile links Schmidt's campaign website, fundraising page, Facebook page, and Instagram, and says, \"As Senator, Patrick will be guided by the family values he learned from his mother, his father, and the generations of Kansans who came before him as he works to restore common sense to Topeka.\" ([source](https://www.kssenatedems.org/patrick-schmidt)). The public capture did not expose a reliable list of X reposts, tags, or Facebook shares by Schmidt, so the harvested record does not support a ranked network of amplified accounts.\n\nPost-level audience response could not be ranked from the public logged-out capture. X, Facebook, Instagram, and YouTube did not expose exact reactions, reposts, replies, comments, shares, views, or likes for individual Schmidt posts as of May 11, 2026. The only exact audience metric captured was page-level Facebook metadata: 2,158 likes and 2,173 talking about this on the Senator Patrick Schmidt page as of May 11, 2026 ([source](https://www.facebook.com/patrickforkansas)). Instagram showed 93 followers, 5 following, and 4 posts on @patrickforks as of the same capture date ([source](https://www.instagram.com/patrickforks/)). With exact post-level engagement unavailable, no topic can be identified as Schmidt's highest-engagement social-media topic from this harvest.\n\nOn national and foreign-policy questions, Schmidt's public record centers on military service, January 6, the Middle East, tariffs, and institutional accountability. His 2021 launch release said, \"During my service on the USS RONALD REAGAN, I saw firsthand the impact the United States makes in the world when we are strong and united.\" ([source](https://patrickforkansas.com/news/press-releases/2021/07/06/patrick-schmidt-launches-congressional-campaign/)). In a May 8, 2026, Kansas City Star interview, he said, \"Some of the threats that we’re seeing right now — not just the conflict we’ve got in the Middle East. But, you know, we’re welcoming new conflicts and new threats every day because of the irresponsibility we’re seeing from this White House and from this Congress.\" ([source](https://www.kansascity.com/news/politics-government/article315684022.html)). In the same interview he added, \"It’s what we’re seeing in Kansas right now — the impact we’re getting from the war, from the tariffs, from the unpredictability and lack of accountability.\" ([source](https://www.kansascity.com/news/politics-government/article315684022.html)).\n\nFor Kansas-specific issues, the most concrete local policy thread in the captured record is property tax relief, followed by healthcare costs, labor, and trade. In a Kansas Reflector interview, Schmidt said, \"I would love to see real property tax relief for Kansans.\" ([source](https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/)). His campaign health-care page says, \"I believe wholeheartedly that every American deserves access to affordable health care.\" ([source](https://patrickforkansas.com/issue/affordable-health-care/)). His labor page says, \"I promise that the only non-negotiable requirement necessary for me to sign on to any trade deal or tax policy will be whether it puts workers first in Kansas.\" ([source](https://patrickforkansas.com/issue/unions-and-the-middle-class/)). The Kansas Legislature profile lists him on Government Efficiency, Judiciary, Transportation, Veterans Affairs, Kansas Security, Information Technology, and State Building Construction committees ([source](https://www.kslegislature.gov/legislators/sen_schmidt_patrick_1/)).\n\nAcross the captured period the feed contains no accessible campaign-controlled posts about Kansas water policy, the Ogallala Aquifer, wheat prices, Farm Bill details, Fort Riley, rural hospital closures by facility name, gun policy, immigration enforcement details, capital punishment, foster care, adoption, or religious liberty ([source](social-harvest.md#visible-absences)). The campaign health-care page addresses Medicaid expansion, prescription drugs, insulin, and federally qualified health centers, but the captured campaign-controlled pages did not include named rural hospital examples ([source](https://patrickforkansas.com/issue/affordable-health-care/)). The captured campaign-controlled pages also did not include a first-person abortion-policy statement, while a Kansas City Star interview said Schmidt described himself as an abortion-rights supporter and quoted him on a child-support bill: \"I did not write that bill. I did not vote for that bill. I did not support that bill.\" ([source](https://www.kansascity.com/news/politics-government/article315684022.html)).\n\nSchmidt's platform footprint is concentrated on an official campaign website, Facebook, X, Instagram, and a YouTube channel. The Facebook page lists him as \"Kansan, Navy Veteran, Kansas State Senator, and Candidate for US Senate\" and showed 2,158 likes as of May 11, 2026 ([source](https://www.facebook.com/patrickforkansas)). X is linked by the campaign as @PatrickforKS, with an indexed profile snippet showing [1,445 followers and 100 following](social-harvest.md#presence-summary); the logged-out timeline was not accessible in this harvest ([source](https://twitter.com/PatrickforKS)). Instagram @patrickforks showed 93 followers, 5 following, and 4 posts, with a KS-02-era bio still visible at capture ([source](https://www.instagram.com/patrickforks/)). No candidate-controlled Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was located in this harvest ([source](social-harvest.md#presence-summary)).\n\n---\n\n**Methodology:** Date range covered: July 6, 2021, to May 11, 2026. Platforms surveyed: X/Twitter, Facebook, YouTube, Instagram, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok, plus official campaign and public-record sources; approximately [1 indexed X post, 0 accessible individual Facebook posts, 0 accessible Instagram captions, 1 YouTube video listing/oEmbed, 4 campaign-controlled web pages, and 5 supplemental public-record sources](social-harvest.md#methodology-note) examined.\n\nWe report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Schmidt's public profile emphasi",
  "campaignFinance": {
    "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
    "narrative": "Schmidt's public money trail is clearer in his recent Kansas Senate campaign than in his federal Senate committee so far. His 2024 Kansas Senate filing reported $51,967.24 in total contributions and $1,296.50 in in-kind support in the July reporting period, and his January 10, 2025 filing reported $9,450.58 in contributions for the late-2024 reporting window, plus $206.34 in unitemized contributions. For the 2026 U.S. Senate race, the FEC shows a committee on file, but this source set did not surface a processed federal summary with receipts, spending, or cash on hand. That means the public campaign-finance picture is real but still incomplete online.",
    "donors": [
      {
        "name": "PATRICK SCHMIDT FOR SENATE (C00937599)",
        "amount": "Committee on file"
      },
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online yet"
      }
    ],
    "undisclosed": "The FEC confirms the committee exists, but not yet a processed 2025-2026 donor ledger or summary table.",
    "reportingPeriod": "through 2026-04-01",
    "source": "FEC candidate overview S6KS00288 / committee C00937599"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: X, Facebook, YouTube, Instagram, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok, Campaign website, Local news. Harvest range: 2021-07-06 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "social",
      "url": "https://twitter.com/PatrickforKS",
      "title": "@PatrickforKS",
      "publisher": "Twitter",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/patrickforkansas",
      "title": "Senator Patrick Schmidt / patrickforkansas",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.youtube.com/@patrickforkansas",
      "title": "Patrick Schmidt for U.S. Senate",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.instagram.com/patrickforks/",
      "title": "@patrickforks",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt.",
        "Observed public online activity mapped to Property Taxes."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/news/2021/07/07/suspendisse-turpis-magna/",
      "title": "campaign-site reprint linking the X post",
      "publisher": "Patrickforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/",
      "title": "Campaign home page",
      "publisher": "Patrickforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "Observed public online activity mapped to Corporate Taxes."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/about/",
      "title": "Meet Patrick",
      "publisher": "Patrickforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/issue/affordable-health-care/",
      "title": "Affordable Health Care",
      "publisher": "Patrickforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/issue/unions-and-the-middle-class/",
      "title": "Unions & The Middle Class",
      "publisher": "Patrickforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/patrick-schmidt",
      "title": "Kansas Senate Democrats profile",
      "publisher": "Kssenatedems",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/news/press-releases/2021/07/06/patrick-schmidt-launches-congressional-campaign/",
      "title": "source",
      "publisher": "Patrickforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt.",
        "Observed public online activity mapped to Marijuana / Drug Policy."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://www.wibw.com/2026/02/05/kansas-state-senator-files-us-senate/",
      "title": "WIBW - Patrick Schmidt Files (Feb 5, 2026)",
      "publisher": "Wibw",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Patrick Schmidt."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marijuana / Drug Policy.",
        "For Kansas-specific issues, the most concrete local policy thread in the captured record is property tax relief, followed by healthcare costs, labor, and trade. In a Kansas Reflect",
        "Observed public online activity mapped to Property Taxes."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(PATRICK_SCHMIDT_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[patrick-schmidt.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
