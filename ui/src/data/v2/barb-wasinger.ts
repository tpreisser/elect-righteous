/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const BARB_WASINGER_V2: CandidateFullV2 = {
  "slug": "barb-wasinger",
  "name": "Barb Wasinger",
  "party": "R",
  "position": "KS House District 111",
  "electionSlug": "ks-house-111",
  "incumbent": true,
  "occupation": "Business owner",
  "religion": "Roman Catholic -- active member, St. Joseph Catholic Church, Hays",
  "family": "Tom Wasinger; Spouse: Tom",
  "district": "Kansas House District 111",
  "campaignWebsite": "https://barbforkansas.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Strongly pro-life. She has stated that \"human life begins at conception and deserves legal protection at every stage until natural death.\" She voted yes on the Value Them Both Amendment and supports the Born Alive Abortion Survivors Protection Act. Her only stated exception is the life of the mother.",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "Her social-conservative messaging is present but not the only thing she foregrounds on campaign pages. The older site says she worked to \"protect human life\" (barbforkansas.com). Kansas Reflector reported that she led the House push on transgender sports restrictions and argued that \"Biological men should not be competing against women\" (Kansas Reflector, Feb. 23, 2023). She is also listed as vice-chair of the...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        }
      ]
    },
    {
      "id": "i-marriage-family-lgbtq-policy-2",
      "title": "Marriage & Family / LGBTQ+ Policy",
      "stated": {
        "text": "Voted to override Gov. Kelly's veto on Senate Bill 244, the biological-sex bill that requires birth-sex markers on state documents and restricts access to sex-separated facilities. She made the procedural motion to cut off debate and force the vote, making her a central figure in that fight. Notably, on an iVoterGuide survey she reportedly indicated support for adding sexual orientation and gender identity as protected classes in non-discrimination laws, which is an unusual position for a conservative Republican and may warrant further verification.",
        "sourceIds": [
          "s-6",
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "Kansas Reflector coverage shows high-salience statewide attention around her role in transgender sports/facilities legislation and the 2026 debate-limiting procedural motion.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "2023 transgender sports bill: Kansas Reflector reported she led the House push and said \"Biological men should not be competing against women.\" Source: Kansas Reflector, Feb. 23, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "Kansas Reflector transgender youth legislation, Feb. 23, 2023",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        }
      ]
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Endorsed by the Kansas State Rifle Association in 2024. No anti-gun votes identified. Kansas has been a constitutional carry state since 2015.",
        "sourceIds": [
          "s-7",
          "s-9",
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "barbwasinger.com",
          "observation": "Newer campaign site result list: \"Lowered Property, Sales, and Income Taxes,\" eliminated state taxes on Social Security benefits and groceries, acted on fentanyl and online pornography, funded K-12/special education, championed FHSU, improved Medicaid/foster care, fought overregulation, and defended \"Common-Sense Kansas Values.\" Source: barbwasinger.com.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-4"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2024 Hays Post questionnaire: property tax reduction and school funding were top issues; she named cybersecurity and administrative rules/regulations as priorities; she opposed Medicaid expansion as likely to remove \"well bodied Kansans\" from the job market and lengthen IDD waiting lists. Source: Hays Post, Oct. 30, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2024 Hays Post election-night story: she emphasized property tax relief, cybersecurity, water, private water ownership through LEMAs, seniors, and education funding. Source: Hays Post, Nov. 7, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Runs as a Republican. The Kansas Republican Party has not endorsed marijuana legali",
        "sourceIds": [
          "s-2",
          "s-3",
          "s-5",
          "s-7",
          "s-1",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Hays Post coverage of HB 2433 and the R9 water dispute marks her most district-specific policy win by 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        }
      ]
    }
  ],
  "whoTheyAre": "Barbara K. Wasinger is the Republican state representative for Kansas House District 111, a Hays-based seat she has held since 2019. Her political career began locally and moved up step by step: Hays city commissioner in 2005, mayor in 2008 and again in 2010, Ellis County commissioner in 2012, then the Kansas House. Public biographical material describes her as a small-business owner in the title and abstract business, a St. Catherine University graduate with concentrations in journalism and theology, and a longtime Hays resident married to Tom Wasinger with four adult children.\n\nWasinger is one of those western Kansas politicians whose identity is inseparable from the local civic world. She has spent more than two decades in elected office, writes regular legislative updates, and keeps up a steady public presence at coffees, town halls, and local media appearances. Her political style is less firebrand than operator: a lawmaker who knows the committees, the local governments, and the bureaucracies she is trying to move.",
  "recordSummary": "Her biggest recent legislative achievement is House Bill 2433, the 2026 measure that cleared the way for water to move through county rights-of-way without local permitting barriers. The bill was aimed directly at the long-running R9 Ranch dispute that has shaped Hays' search for a durable water supply, and Wasinger was the primary sponsor and chief public advocate. In a district where water security is a practical issue, not an abstraction, that was a signature win.\n\nWasinger also carried Senate Bill 334 on nursing faculty requirements, arguing that Kansas needed a wider pool of instructors as hospitals and community colleges struggled with workforce shortages. She played a central role in the state's 2024 cybersecurity push after the judicial branch hack, and in 2026 she used a parliamentary motion to cut off debate and force an immediate House vote to override Gov. Laura Kelly's veto of Senate Bill 244, the biological-sex bill affecting state documents and access to sex-separated spaces. That move made her a focal point in one of the Legislature's most divisive fights.",
  "ownWordsNarrative": "Barb Wasinger's public messaging is built around a practical incumbent identity: a Hays small-business owner and former local official who says she is focused on results for Ellis County. Her newer campaign site opens with a quote about \"talk less, listen more\" and working together to \"actually get things done,\" then frames the work as lower taxes, stronger schools, FHSU advocacy, Medicaid and foster care improvements, job creation, and \"Common-Sense Kansas Values\" ([barbwasinger.com](https://barbwasinger.com/)).\n\nThe older campaign site is more issue-list driven. Wasinger promised work on school reopening and safety, health care, foster care rules, senior tax relief, lower food taxes, FHSU funding, business deregulation, and child placement. In a personal note, she described her first term as \"getting things done for Ellis County,\" especially the Northwest Corridor funding, and said she had stood up for Kansans on tax, life, farmers, small businesses, and reduced regulation ([barbforkansas.com](https://barbforkansas.com/)).\n\nTaxes and spending are the dominant recurring signal. In Hays Post coverage before the 2026 session, she said her priorities were controlling spending, balancing the state budget, and finding a more equitable property tax structure ([Hays Post, Jan. 9, 2026](https://hayspost.com/posts/2b738882-c918-4672-aacb-cccdbceb383a)). At a 2025 legislative coffee, she said Kansas had been overspending and needed to stop, while also arguing for incentives that reward local governments staying under inflation and valuation growth ([Hays Post, Mar. 10, 2025](https://hayspost.com/posts/f53b3db9-b85b-42ff-accd-ae5f0c823f59)).\n\nWater is her strongest district-specific achievement signal. She sponsored and championed HB 2433, signed in March 2026, to clarify state authority over water transfers and block county-level barriers aimed at the Hays/Russell R9 Ranch project ([Hays Post, Mar. 20, 2026](https://hayspost.com/posts/ec8a0c28-4cb0-4994-90ba-3919fcadd4a0)). In Kansas Reflector coverage, she summarized the dispute as \"Eleven years. Almost $11 million,\" tying the bill to years of local cost and uncertainty ([Kansas Reflector, Feb. 4, 2026](https://kansasreflector.com/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute/)).\n\nShe also posts and speaks like a regulatory conservative. Her campaign site says she fought \"Government Overreach and Overregulation\" ([barbwasinger.com](https://barbwasinger.com/)); her official legislative profile lists her as chair of General Government Budget and vice-chair of Joint Administrative Rules and Regulations ([Kansas Legislature](https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/)). In public coverage, that theme appears in cybersecurity modernization after the judiciary hack, sugaring deregulation for a Hays constituent, child care/foster care regulation, rental-payment logistics, and opposition to broad executive emergency power.\n\nHer social-conservative messaging is present but not the only thing she foregrounds on campaign pages. The older site says she worked to \"protect human life\" ([barbforkansas.com](https://barbforkansas.com/)). Kansas Reflector reported that she led the House push on transgender sports restrictions and argued that \"Biological men should not be competing against women\" ([Kansas Reflector, Feb. 23, 2023](https://kansasreflector.com/2023/02/23/kansas-house-and-senate-both-pass-legislation-targeting-transgender-youth/)). She is also listed as vice-chair of the Kansas Truth Caucus, whose self-description emphasizes limited government, individual liberty, free enterprise, traditional values, tax reform, education, and defending the unborn ([Kansas Truth Caucus](https://www.kansastruthcaucus.org/about)).\n\nThe highest visible engagement signals are local and earned-media rather than native social metrics. Her 2024 Hays Post questionnaire, 2024 election-night story, 2025 legislative coffees, and 2026 R9 water bill coverage show the clearest public attention. No reliable Facebook, Instagram, X, or LinkedIn engagement counts were publicly visible without login/script access, so engagement should not be inferred from social platforms.\n\nVisible absences matter. The campaign web presence links to Facebook, Instagram, and older Twitter/X and LinkedIn icons, but the accessible public web did not expose a readable stream of social posts. The older site advertises a newsletter as \"coming soon,\" while the accessible news page was empty. No obvious YouTube, TikTok, Threads, or Bluesky campaign account surfaced in open search.\n\nMethodology: I reviewed campaign sites, social links from those sites, the official Kansas Legislature profile, indexed civic/social previews, Hays Post questionnaires and legislative coffee stories, Kansas Reflector and HPPR/KCUR coverage quoting or attributing statements to Wasinger, and obvious platform absences through May 11, 2026. I used only candidate-controlled, official, or directly attributed public material. Login-walled, script-only, blocked, or non-rendering social content was not treated as harvested content.\n\nDisclaimer: This summary reflects public, accessible messaging through May 11, 2026. It is not a complete archive of private posts, deleted posts, paid ads, email newsletters, or platform content hidden behind login walls or scripts.",
  "whereTheyWorship": "Wasinger publicly identifies as a member of St. Joseph Catholic Church in Hays, and her campaign biography says she serves there as a lector and an Extraordinary Minister of Holy Communion. Church website: https://www.stj-church.com/",
  "church": {
    "name": "St. Joseph Catholic Church, Hays, KS",
    "denomination": "Roman Catholic (Diocese of Salina)",
    "url": "https://www.stj-church.com/",
    "details": "Denomination: Roman Catholic (Diocese of Salina). Church Roles: Lector; notable Minister of Holy Communion."
  },
  "campaignFinance": {
    "totalRaised": "$11,134.20 (House filing coverage: 01/01/2025 to 12/31/2025)",
    "narrative": "State campaign finance records exist for Wasinger, but the source material provided for this assignment did not include a usable donor breakdown or a current summary total comparable to a federal FEC page.",
    "donors": [
      {
        "name": "DoorDash, Inc.",
        "amount": "$500.00"
      },
      {
        "name": "International Union of Elevator Constructors Political Account",
        "amount": "$250.00"
      },
      {
        "name": "Amarok Ultimate Perimeter Security",
        "amount": "$250.00"
      },
      {
        "name": "Operating Engineers Local 101",
        "amount": "$500.00"
      },
      {
        "name": "POM of Kansas LLC",
        "amount": "$500.00"
      },
      {
        "name": "Kansas Livestock",
        "amount": "$500.00"
      },
      {
        "name": "Kansas Bankers Association PAC",
        "amount": "$500.00"
      },
      {
        "name": "Barbara Wasinger",
        "amount": "$2,792.50"
      }
    ],
    "undisclosed": "The posted House PDF contains additional donors beyond the sample listed here.",
    "reportingPeriod": "2025 year-end (2026 House cycle)",
    "source": "Kansas House ethics filing H111BW_202601"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign websites, Facebook, Instagram, X / Twitter, LinkedIn, Kansas Legislature, Hays Post, Kansas Reflector, HPPR, KCUR, Kansas Truth Caucus, Public civic/social previews, Public search. Harvest range: 2019-01-01 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "KS Legislature Profile",
      "publisher": "Kslegislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Barb Wasinger."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/electbarbwasinger/",
      "title": "Barb for Kansas Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Barb Wasinger."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "barbforkansas.com",
      "publisher": "Barbforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Barb Wasinger.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "barbwasinger.com",
      "publisher": "Barbwasinger",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Barb Wasinger.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "barbforkansas.com/about",
      "publisher": "Barbforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Barb Wasinger."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://www.citizensuccess.com/politicians/Barbara_K._Wasinger_KS_State_Representative_ocd-division%2Fcountry%3Aus%2Fstate%3Aks%2Fsldl%3A111",
      "title": "Citizensuccess indexed channels",
      "publisher": "Citizensuccess",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Barb Wasinger."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "KSN Election Guide",
      "publisher": "Ksn",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Barb Wasinger."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/145676/barb-wasinger",
      "title": "Vote Smart Biography",
      "publisher": "Justfacts.Votesmart",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Barb Wasinger."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/02/23/kansas-house-and-senate-both-pass-legislation-targeting-transgender-youth/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "2023 transgender sports bill: Kansas Reflector reported she led the House push and said \"Biological men should not be competing against women.\" Source: Kansas Reflector, Feb. 23, 2"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2e2efa2c-4a4a-4590-b7a5-0aeabf7be52b",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "2024 Hays Post questionnaire: property tax reduction and school funding were top issues; she named cybersecurity and administrative rules/regulations as priorities; she opposed Med"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0467451d-0b49-4f89-830e-7107584885fc",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "2024 Hays Post election-night story: she emphasized property tax relief, cybersecurity, water, private water ownership through LEMAs, seniors, and education funding. Source: Hays P"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(BARB_WASINGER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[barb-wasinger.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
