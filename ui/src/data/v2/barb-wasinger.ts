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
          "s-2",
          "s-3",
          "s-4"
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
            "s-33"
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
          "s-14",
          "s-86",
          "s-89",
          "s-95",
          "s-175",
          "s-176"
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
            "s-104"
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
          "s-4",
          "s-17",
          "s-43",
          "s-79",
          "s-85",
          "s-90"
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
          "s-1",
          "s-2",
          "s-4",
          "s-7",
          "s-9",
          "s-10"
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
          "s-4",
          "s-17",
          "s-43",
          "s-79",
          "s-90",
          "s-117"
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
          "s-4",
          "s-17",
          "s-72",
          "s-79",
          "s-110",
          "s-127"
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
            "s-81"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2024 Hays Post questionnaire: property tax reduction and school funding were top issues; she named cybersecurity and administrative rules/regulations as priorities; she opposed Medicaid expansion as likely to remove \"well bodied Kansans\" from the job market and lengthen IDD waiting lists. Source: Hays Post, Oct. 30, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-244"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2024 Hays Post election-night story: she emphasized property tax relief, cybersecurity, water, private water ownership through LEMAs, seniors, and education funding. Source: Hays Post, Nov. 7, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-16"
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
          "s-1",
          "s-2",
          "s-7",
          "s-9",
          "s-10",
          "s-13"
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
            "s-104"
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
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Barb_Wasinger",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/145676/barb-wasinger",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Barbara_Wasinger",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/03/18/exposure-of-it-security-weaknesses-in-kansas-state-government-inspiring-house-reform-bill/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/81556ec8-078b-4239-8e6f-d43dd953ddf7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://www.kansastruthcaucus.org/about",
      "title": "Kansastruthcaucus.Org",
      "publisher": "kansastruthcaucus.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/04/kansas-lawmakers-weigh-where-authority-lies-in-11-year-water-dispute/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://ransonfinancial.com/2026/03/26/governor-signs-hb2433-for-r9-project/",
      "title": "Ransonfinancial.Com",
      "publisher": "ransonfinancial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ec8a0c28-4cb0-4994-90ba-3919fcadd4a0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/19/kansas-legislature-resets-academic-expectation-for-hiring-faculty-in-college-nursing-programs/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/18/house-overrides-veto-bathroom-bill-limiting-access-to-kansas-facilities-will-become-law/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "primary",
      "url": "https://www.govtech.com/security/after-attack-kansas-bill-seeks-to-strengthen-cybersecurity",
      "title": "Govtech.Com",
      "publisher": "govtech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0467451d-0b49-4f89-830e-7107584885fc",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://ivoterguide.com/candidate/48696/race/11694/election/797",
      "title": "Ivoterguide.Com",
      "publisher": "ivoterguide.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/89bc4255-a1ac-4f10-b315-5def98cd9798",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2b738882-c918-4672-aacb-cccdbceb383a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://klcjournal.com/kansas-house111/",
      "title": "Klcjournal.Com",
      "publisher": "klcjournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://kssos.org/elections/cfr_viewer/cfr_examiner_entry.aspx",
      "title": "Kssos.Org",
      "publisher": "kssos.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "primary",
      "url": "https://www.kansas.gov/campaign-finance/",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://www.followthemoney.org/",
      "title": "Followthemoney.Org",
      "publisher": "followthemoney.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://kansasrifle.org/endorsements2024generalelection/",
      "title": "Kansasrifle.Org",
      "publisher": "kansasrifle.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/24elec/2024-General-Election-Official-Vote-Totals.pdf",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2f423389-debd-4434-adb6-f64db082b94e",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/06/03/former-fort-hays-state-university-president-running-for-kansas-house-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0299ad65-325b-41df-9515-db9d14054474",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9fda8c5c-7597-4aa4-91d9-346da9bec17c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2f0387ad-c4f6-4bc0-845c-53b05f9866b4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://www.bbb.org/us/ks/hays/profile/title-agent/ellis-county-abstract-title-0714-42432",
      "title": "Bbb.Org",
      "publisher": "bbb.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "primary",
      "url": "https://insurance.ks.gov/documents/company/prop-cas/titlerates/EllisCountyAbstractTitleRateFiling.pdf",
      "title": "Insurance.Ks.Gov",
      "publisher": "insurance.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile.",
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2d905a93-7cdc-47e5-8ab8-c0c78446bb2b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://www.hfehays.org/o/hfe/article/923439",
      "title": "Hfehays.Org",
      "publisher": "hfehays.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://www.ihm-church.com/",
      "title": "Ihm-church.Com",
      "publisher": "ihm-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://www.kansassheriffs.org/county_map/county/914",
      "title": "Kansassheriffs.Org",
      "publisher": "kansassheriffs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
      "title": "Haysmemorial.Com",
      "publisher": "haysmemorial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
      "title": "Fhsuguides.Fhsu.Edu",
      "publisher": "fhsuguides.fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Tracey_Mann",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://ksopen.org/mann-2",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "primary",
      "url": "https://mann.house.gov/about",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://www.au.org/the-latest/church-and-state/articles/unhealthy-breakfast-how-the-national-prayer-breakfast-a-relic-from-the-1950s-era-of-civil-religion-evolved-into-a-florid-display-of-christian-nationalism/",
      "title": "Au.Org",
      "publisher": "au.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/meet-doc/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://ksopen.org/marshall",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
      "title": "Kansasdisciples.Org",
      "publisher": "kansasdisciples.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "Barbwasinger.Com",
      "publisher": "barbwasinger.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://whatreligionisinfo.com/kobach-religion/",
      "title": "Whatreligionisinfo.Com",
      "publisher": "whatreligionisinfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://msclawrence.com/",
      "title": "Msclawrence.Com",
      "publisher": "msclawrence.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
      "title": "Csgmidwest.Org",
      "publisher": "csgmidwest.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "social",
      "url": "https://www.linkedin.com/in/mason-ruder-cpm-1aa36455",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "social",
      "url": "https://x.com/agentruder",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0187e996-15de-4377-95c2-cc428ed058e5",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "http://tigermedianet.com/?p=93385",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://www.hdnews.net/2022/12/01/tmp-marian-alumnus-named-advancement-director-for-hays-catholic-schools/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e141bbcd-d4c5-4a9d-83bc-996979742cb2",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/095697ac-eb4b-4005-867a-bb049ec8c10f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://clustrmaps.com/person/Ruder-cofgeu",
      "title": "Clustrmaps.Com",
      "publisher": "clustrmaps.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "social",
      "url": "https://www.facebook.com/alaina.cunningham.9/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "social",
      "url": "https://www.linkedin.com/in/alaina-cunningham-4436ba1/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://www.haysmed.com/the-center/alaina-cunningham/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "social",
      "url": "https://www.facebook.com/musilcomish/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "social",
      "url": "https://www.linkedin.com/in/shaun-musil-26539490/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/433c0ff0-f645-4a6a-a4be-6f8549de14f9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://hutchpost.com/posts/f240fb89-d1f0-4373-ac4b-605d5e5f9c32",
      "title": "Hutchpost.Com",
      "publisher": "hutchpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/efb80be7-69e2-4461-8e69-d7f86b59e482",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://www.fhsu.edu/news/2024/08/fhsu-announces-2024-tiger-nation-partner-of-the-year",
      "title": "Fhsu.Edu",
      "publisher": "fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://www.nex-tech.com/business/shaun/",
      "title": "Nex-tech.Com",
      "publisher": "nex-tech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://goodparty.org/candidate/shaun-musil/hays-city-commission",
      "title": "Goodparty.Org",
      "publisher": "goodparty.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1a241ad5-d176-4494-9e9a-aa4a286f3bf4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://www.ksl.com/article/50001567/city-in-kansas-requiring-masks-to-guard-safe-reputation",
      "title": "Ksl.Com",
      "publisher": "ksl.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://www.hdnews.net/reorganization-of-commission-names-jacobs-as-mayor-ruder-as-vice-mayor/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9a118e53-0b32-4cc1-b6c5-44a476f7f7b9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e98f695eb7f17053602be3c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7dd5d9eb-456f-47d7-bde0-70d6a92d504a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
      "title": "Ileeta.Org",
      "publisher": "ileeta.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "social",
      "url": "https://www.facebook.com/people/DXI-Training-Solutions-LLC/61553945955697/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1f1932b8-516a-420d-841e-df378c20a8f2",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a6608a1f-7d44-4212-85de-f8b22f600687",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/39c5ed3b-dd7b-4248-a71f-a7ca06694a9e",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "primary",
      "url": "https://www.haysusa.com/directory.aspx?eid=6",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2015/10/7/toby-dougherty-city-manager-of-haysks",
      "title": "Strongtowns.Org",
      "publisher": "strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2016/5/4/the-hays-document",
      "title": "Strongtowns.Org",
      "publisher": "strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://municipalwaterleader.com/guaranteeing-the-water-supply-of-hays-kansas-through-conservation-reuse-and-new-supplies/",
      "title": "Municipalwaterleader.Com",
      "publisher": "municipalwaterleader.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://issuu.com/waterstrategies/docs/mwl_october_2020/s/11017849",
      "title": "Issuu.Com",
      "publisher": "issuu.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "secondary",
      "url": "https://www.eenews.net/articles/farm-vs-city-kansas-water-law-gets-a-major-stress-test/",
      "title": "Eenews.Net",
      "publisher": "eenews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/18/hays-russell-sue-edwards-county-over-efforts-to-block-water-transfer-project/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/12/15/kansas-supreme-court-examines-roiling-water-dispute-between-crop-irrigators-and-hays-russell/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a356c3c3-47d3-49eb-98d5-fe030ffd2b8e",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70979342-77f8-4cc8-8370-86ef215b4085",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8b4554cd-79b4-4076-8a9c-287892f8e9dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6003cad5-e6bf-4ab2-87a9-fd03d8a5750c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5d942a2c-9baf-4ca9-aa82-92bbd76d37c7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c6a0184d-7e96-4157-ba49-d5e49a49e54c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "secondary",
      "url": "https://www.zoominfo.com/p/Toby-Dougherty/381299961",
      "title": "Zoominfo.Com",
      "publisher": "zoominfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-222",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-223",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-224",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-225",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-226",
      "tier": "social",
      "url": "https://www.facebook.com/electbarbwasinger/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-227",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/145676/barb-wasinger",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-228",
      "tier": "secondary",
      "url": "https://fastdemocracy.com/bill-search/ks/legislators/KSL000447/",
      "title": "Fastdemocracy.Com",
      "publisher": "fastdemocracy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-229",
      "tier": "secondary",
      "url": "https://www.billtrack50.com/legislatordetail/24285",
      "title": "Billtrack50.Com",
      "publisher": "billtrack50.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-230",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/people/barbara-wasinger/id/21086",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-231",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/hb2433_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-232",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-233",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-234",
      "tier": "secondary",
      "url": "https://www.stj-church.com/",
      "title": "Stj-church.Com",
      "publisher": "stj-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-235",
      "tier": "secondary",
      "url": "https://kansasreflector.com/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-236",
      "tier": "secondary",
      "url": "https://hayspost.com/",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-237",
      "tier": "social",
      "url": "https://www.linkedin.com/in/tom-wasinger-77068241",
      "title": "Tom Wasinger - Wasinger Enterprise",
      "publisher": "Linkedin.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-238",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/hb2433/",
      "title": "KS Legislature HB2433",
      "publisher": "Kslegislature.Gov",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-239",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-02-18/kansas-republicans-transgender-bathroom-bill-veto-override",
      "title": "KCUR",
      "publisher": "Kcur.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-240",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/measures/vote_view/je_20240429095526_260190/",
      "title": "KS Legislature vote record",
      "publisher": "Kslegislature.Gov",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-241",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/145676/barb-wasinger",
      "title": "Vote Smart: Key Votes",
      "publisher": "Justfacts.Votesmart.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-242",
      "tier": "secondary",
      "url": "https://www.legistorm.com/person/bio/313424/Barbara_King_Wasinger.html",
      "title": "LegiStorm: Barbara King Wasinger",
      "publisher": "Legistorm.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-243",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0d2b56a-c6d8-4084-92bf-9e40ac0b82bd",
      "title": "HaysPost: Wasinger vs. Hammond race",
      "publisher": "Hayspost.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-244",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2e2efa2c-4a4a-4590-b7a5-0aeabf7be52b",
      "title": "HaysPost: KS House District 111 profile",
      "publisher": "Hayspost.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-245",
      "tier": "secondary",
      "url": "https://www.nrapvf.org/grades/kansas/",
      "title": "NRA-PVF: Kansas Grades",
      "publisher": "Nrapvf.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-246",
      "tier": "secondary",
      "url": "https://kflpac.org/vote/",
      "title": "KFL PAC: Voter Guide",
      "publisher": "Kflpac.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-247",
      "tier": "secondary",
      "url": "https://www.kssos.org/elections/18elec/2018_General_Election_Official_Votes_Cast.pdf",
      "title": "KS SOS: 2018 General Election Results",
      "publisher": "Kssos.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-248",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/20elec/2020_General_Official_Vote_Totals.pdf",
      "title": "KS SOS: 2020 General Election Results",
      "publisher": "Sos.Ks.Gov",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
      ]
    },
    {
      "id": "s-249",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
      "title": "KS SOS: 2022 General Election Results",
      "publisher": "Sos.Ks.Gov",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Barb Wasinger's generated v2 profile."
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
