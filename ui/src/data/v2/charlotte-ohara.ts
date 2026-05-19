/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CHARLOTTE_OHARA_V2: CandidateFullV2 = {
  "slug": "charlotte-ohara",
  "name": "Charlotte O'Hara",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Activist / Former Local Official",
  "campaignWebsite": "https://www.jocoelection.org/candidates-elected-officials/charlotte-o-hara",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Her campaign platform includes \"supporting families and protecting life,\" though specific policy details beyond that broad framing have not been elaborated in the source material.",
        "sourceIds": [
          "s-15",
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
          "platform": "oharaforkansas.com",
          "observation": "The campaign archive contained 71 public posts in the WordPress API on capture. The earliest listed post was \"A Sobering Look at Abortion Statistics in Kansas\" on 2025-01-14; the latest listed post was \"The Great Property Tax Shift\" on 2026-05-05. (archive source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "oharaforkansas.com",
          "observation": "The Feb. 17, 2026 post \"When Did You Begin\" is a pro-life poem that asks when human dignity begins, reinforcing abortion as a recurring campaign theme. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "O'Hara attacked what she called a \"vast sea of RINOs\" in the Republican Party; the piece also reports broad GOP debate agreement on abortion opposition, marijuana opposition, and elected Supreme Court justices. (source) 17. Kansas Reflector, Feb.",
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
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "oharaforkansas.com",
          "observation": "Key signals: former contractor/developer, small-business owner, COVID-shutdown experience, Kansas House, Johnson County Commission, mother/grandmother, faith and family language. (source) 3. Campaign-site archive/API, captured 2026-05-11: 71 posts from 2025-01-14 to 2026-05-05. (source) 4.",
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
        "text": "Has not taken a detailed public position on gun policy in the source material reviewed, though her broader \"constitutional freedoms\" messaging implies support for gun rights.",
        "sourceIds": [
          "s-5",
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
        "text": "Has not taken a specific public position.",
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
      "socialSignals": []
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "She homeschooled her two youngest children and her campaign emphasi",
        "sourceIds": [
          "s-6",
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
          "platform": "oharaforkansas.com",
          "observation": "The campaign website is the dominant candidate-controlled platform. It combines a governor campaign landing page, a donation page, and an unusually large first-person opinion archive. The homepage says she is running to make Kansas a place \"to come home to,\" bring DOGE-style spending restraint to Kansas, stop tax incentives that she says increase property taxes, demand transparency, elect judges in direct...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "oharaforkansas.com",
          "observation": "The March 24, 2026 post \"Election Integrity: the Ghost of 2020\" tied election-integrity messaging to opposition to the sports authority/STAR bond package and asked readers to contact state senators. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "oharaforkansas.com",
          "observation": "The April 28, 2026 post \"Dismantling the Kansas Department of Education\" argues education should be local and criticizes what she describes as tax-incentive funded candidates and the state education bureaucracy. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    }
  ],
  "whoTheyAre": "Charlotte O'Hara is a Republican candidate for governor and a longtime conservative figure in Johnson County politics. Her campaign biography says she was raised on a farm in Bourbon County, graduated from the University of Kansas, spent more than 20 years as a general contractor, homeschooled her two youngest children, and later co-owned a small manufacturing company in Olathe with two of her sons.\n\nO'Hara is not a new face in Kansas politics. She served in the Kansas House and later on the Johnson County Commission, where she built a public identity around taxes, spending, property rights, and confrontational local politics. By the time she entered the 2026 governor's race, she was already well known to Republican activists looking for a harder-edged candidate in a crowded field.",
  "recordSummary": "O'Hara's record is rooted more in local government and movement politics than in statewide office. In Johnson County she became closely identified with fights over tax policy, public spending, and the direction of county government. Her earlier service in the Kansas House and her work as a Republican district chairwoman and precinct committeewoman gave her a long runway inside party politics before this statewide bid.\n\nDuring the COVID-19 years, O'Hara made opposition to masks, vaccines, school closures, and business shutdowns a central part of her public message. Her 2026 campaign carries that same approach into statewide politics, pairing anti-shutdown rhetoric with broader attacks on what she describes as government overreach, election problems, and cultural drift. The result is a candidacy aimed squarely at the party's hard-right lane.",
  "ownWordsNarrative": "_A summary of what Charlotte O'Hara has publicly said, posted, and amplified across campaign channels, public Facebook metadata, indexed public records, and credible news coverage. Drawn from public captures of her campaign site, campaign archive, Facebook page metadata, Kansas Reflector, and Johnson County Post from January 14, 2025 through May 11, 2026. We report patterns; we do not interpret intent._\n\nAcross the accessible set reviewed, O'Hara's campaign voice is direct, first-person, and much more column-driven than most candidate sites. Her website slogan is \"WOKE and BROKE Out...Common Sense IN for Kansas,\" and the homepage lists her core priorities as making Kansas a place to come home to, bringing DOGE-style spending cuts to state government, stopping tax incentives, demanding transparency, directly electing judges in partisan elections, removing DEI/WOKE/CRT from public schools, and protecting land from industrial energy projects and eminent domain. ([source](https://oharaforkansas.com/))\n\nThe strongest candidate-controlled signal is property taxes and opposition to development incentives. In her May 5, 2026 post \"The Great Property Tax Shift,\" O'Hara argues homeowners are being crushed by a shift in property-tax burden and says economic-development tools were sold on what she calls a false promise of broadening the tax base. She attacks STAR bonds, TIFs, IRBs, HPIP and PEAK, names the Chiefs stadium package and Johnson County projects as examples, and says that as governor she would pursue legislation to sunset incentive programs, stop tax exemptions and credits, and eliminate property taxes through budget cuts and audits. ([source](https://oharaforkansas.com/the-great-property-tax-shift/))\n\nThat anti-incentive theme is also central to her launch coverage. Johnson County Post reported on March 10, 2025 that O'Hara made property taxes a focus of the campaign and was already known locally for skepticism toward development tax incentives, diversity programs, and COVID mitigation measures. In the launch statement excerpted there, she said she could not stay silent while small businesses and homeowners were hurt by high property taxes or while children were harmed by what she called \"WOKEism\" in schools. ([source](https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/))\n\nThe second major signal is election integrity, partisan election rules, and suspicion of establishment Republicans. Her campaign archive includes titles such as \"Election Integrity: the Ghost of 2020,\" \"Kansas Voter Rolls - A Dirty Business,\" \"STOP the Cheat!,\" \"NBC Warned Us in 2012: Mail In Ballots, the Real Vote-Fraud Opportunity,\" \"Incumbency Insanity,\" and \"RINO Leadership Scuttles Redistricting.\" ([archive source](https://oharaforkansas.com/wp-json/wp/v2/posts?per_page=100&_fields=date,slug,link,title.rendered,categories))\n\nIn the January 2026 GOP debate, Kansas Reflector reported that O'Hara opened by attacking a \"vast sea of RINOs\" in the Republican Party and directly criticized Vicki Schmidt and Ty Masterson as too close to Democrats. The same coverage reported that all six participating Republican candidates aligned on reducing abortions, opposing marijuana legalization, praising President Trump, and backing elected Kansas Supreme Court justices. ([source](https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/))\n\nO'Hara's judicial message is unusually specific. Her homepage calls for \"direct partisan election of judges\" and says the Kansas Bar Association's control over judicial selection must end. Kansas Reflector's debate coverage quoted her saying Kansas needs direct elections of justices and that they should be partisan elections. ([homepage source](https://oharaforkansas.com/), [debate source](https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/))\n\nAbortion and religious/moral language recur throughout the campaign archive. Her Feb. 17, 2026 post \"When Did You Begin\" is a pro-life poem asking when a person's value and dignity begin. A Jan. 14, 2025 post on Kansas abortion statistics says her pro-life stance is shaped by political, philosophical, and religious beliefs and focuses heavily on abortions involving girls younger than 16. ([poem source](https://oharaforkansas.com/when-did-you-begin/), [abortion-statistics source](https://oharaforkansas.com/a-sobering-look-at-abortion-statistics-in-kansas-a-call-for-reflection/))\n\nHer biography folds faith into governing identity. The homepage says her faith is the cornerstone of her life, ties \"one nation under God\" to strong families and faith communities, and says she would bring a common-sense voice to Kansas. It also says she and her son own a small manufacturing company and survived the COVID shutdown only \"by the Grace of God.\" ([source](https://oharaforkansas.com/))\n\nEducation is framed through local control, parental values, anti-DEI/CRT language, and distrust of the state education bureaucracy. The homepage says public schools should have \"freedom to learn\" with DEI, WOKE, and CRT replaced by reading, writing, history, and science. The April 28, 2026 post \"Dismantling the Kansas Department of Education\" argues for education as \"Local, Local, Local\" and connects education politics to what she describes as a cabal of tax-incentive funded candidates. ([homepage source](https://oharaforkansas.com/), [post source](https://oharaforkansas.com/dismantling-the-kansas-department-of-education/))\n\nO'Hara also posts in the COVID and health-freedom lane. Her site biography says she has first-hand experience with the damage of COVID shutdowns to small business. In \"The Great Property Tax Shift,\" she says that as a Johnson County commissioner during COVID she refused to wear a mask, refused the shot, and voted no on closing schools and businesses. Her July 22, 2025 post on ivermectin says she is not a doctor, but supports the \"health freedom movement\" in the fight over ivermectin, FDA, and Big Pharma. ([homepage source](https://oharaforkansas.com/), [property-tax source](https://oharaforkansas.com/the-great-property-tax-shift/), [ivermectin source](https://oharaforkansas.com/the-wonder-drug-war-ivermectin-covid-and-politics/))\n\nThe campaign's anti-establishment Republican posture is tied to Trump. In \"A New Era for Kansas and American Politics,\" O'Hara praises President Trump's rapid executive-order pace as refreshing and says it is unseating Democrats while also disrupting the old Republican guard. Her debate and column language repeatedly returns to \"RINOs,\" party leadership, and candidates she says are too close to the political establishment. ([source](https://oharaforkansas.com/trump-vs-the-old-guard-a-new-era-for-kansas-and-american-politics/))\n\nSocial-conservative gender messaging appears in the May 2, 2025 post \"Men in Women's YMCA Locker Rooms?\" The piece opens from a religious creation frame and argues the locker-room policy issue should be simple. This fits the broader homepage promise to remove what she calls Diversity, Equity and Inclusion \"madness\" from the public square. ([post source](https://oharaforkansas.com/men-in-womens-ymca-locker-rooms/), [homepage source](https://oharaforkansas.com/))\n\nThe archive also gives her campaign a strong Johnson County-local frame despite the statewide race. Titles and categories repeatedly reference JoCo spending, the Board of County Commissioners, property-tax shifts, county sales taxes, county budget growth, Johnson County voter rolls, Lenexa, New Century AirCenter, Hallbrook North, and Chiefs/Royals stadium financing. The site categories attached to the 71 public posts include 23 JoCo Spending posts, 12 JoCo Budget posts, 19 Property Taxes posts, and 31 Taxes posts. ([archive source](https://oharaforkansas.com/wp-json/wp/v2/posts?per_page=100&_fields=date,slug,link,title.rendered,categories), [category source](https://oharaforkansas.com/wp-json/wp/v2/categories?per_page=100))\n\nKansas Reflector's Nov. 28, 2025 column about her website explains why the archive matters. O'Hara told the outlet she loves writing columns, said many candidates speak in platitudes instead of specifics, and said she wants voters to know where she is coming from. The piece noted that her commentary tradition goes back to around 2008, when she was a Republican district chairwoman. ([source](https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/))\n\nKansas Reflector's Feb. 16, 2026 profile placed the same voice in campaign context. O'Hara argued that the issue is not whether someone has served in office but whether they have become a career politician focused on \"the big boys.\" She emphasized being raised on a Bourbon County farm, learning to milk cows by hand, homeschooling two daughters, working as a contractor, and running a manufacturing business with her sons. ([source](https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/))\n\nThe accessible campaign footprint is heavily website-centered. The active Facebook page at the old JoCo URL is publicly branded \"O'Hara for Kansas\" and showed 1,513 likes and 389 talking about this on May 11, 2026, with the description \"O'Hara for Kansas Governor.\" No reliable post-level Facebook inventory was visible logged out. No clear candidate-controlled current X, Instagram, YouTube, TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, or Reddit account surfaced in the public search and campaign-site capture. ([Facebook source](https://www.facebook.com/oharaforjoco/))\n\nSeveral issue areas were not prominent in the accessible material reviewed. The public set did not include dominant candidate-controlled messaging on Medicaid expansion, hospital finance, child care, foster care, housing affordability, broadband, higher-education affordability, water policy, the Ogallala aquifer, or detailed criminal-justice sentencing policy. The available record is strongest on taxes, spending, incentives, Johnson County government, elections, judges, abortion, education/culture issues, COVID/health freedom, and anti-establishment Republican politics.\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: Jan. 14, 2025 to May 11, 2026. Platforms surveyed: campaign website, campaign WordPress archive/API, Facebook, JoCo election profile, X/Twitter, Instagram, YouTube, Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Kansas Reflector, Johnson County Post, and public search. Items examined: 18 accessible public/campaign/profile/news items, including 71 campaign-site post records and candidate-controlled category metadata. Login-walled or script-blocked social material was not counted as reviewed. Engagement was reported only where visible in public metadata on capture date.\n\nDisclaimer: This summary reports visible public patterns from the capture set; it does not infer intent, private strategy, or unobserved activity.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. O'Hara's campaign biography says she grew up in a family tradition of faith, but the source material does not name a current congregation or church website.",
  "campaignFinance": {
    "totalRaised": "$589,550.97 (2025 year-end)",
    "narrative": "O'Hara opened the race with one of the stronger balances among the non-establishment candidates for governor. Her 2025 year-end filing reported $589,550.97 raised, $78,652.57 spent, and $510,898.40 cash on hand. That total was not built entirely on outside donors. The filing showed a $193,000 contribution from O'Hara herself, alongside smaller listed donations from contributors including Victor Wirtz, Ralph Yaple, Sandra Nider, Nancy Czinege, and Pam and Robb Ferguson.",
    "donors": [
      {
        "name": "Charlotte O'Hara (self-funding entry)",
        "amount": "$193,000"
      },
      {
        "name": "Victor Wirtz",
        "amount": "$104.10"
      },
      {
        "name": "Ralph Yaple",
        "amount": "$100"
      },
      {
        "name": "Sandra Nider",
        "amount": "$35"
      },
      {
        "name": "Nancy Czinege",
        "amount": "$104.10"
      },
      {
        "name": "Pam and Robb Ferguson",
        "amount": "$260.25"
      }
    ],
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and public finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Campaign WordPress archive/API, Facebook, JoCo election profile, X / Twitter, Instagram, YouTube, Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Kansas Reflector, Johnson County Post, Public search. Harvest range: 2025-01-14 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://oharaforkansas.com/",
      "title": "source",
      "publisher": "Oharaforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Charlotte O'Hara.",
        "Observed public online activity mapped to Religious Liberty.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://oharaforkansas.com/wp-json/wp/v2/posts?per_page=100&_fields=date,slug,link,title.rendered,categories",
      "title": "archive source",
      "publisher": "Oharaforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Charlotte O'Hara.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://oharaforkansas.com/wp-json/wp/v2/categories?per_page=100",
      "title": "category source",
      "publisher": "Oharaforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Charlotte O'Hara."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://oharaforkansas.com/the-great-property-tax-shift/",
      "title": "source",
      "publisher": "Oharaforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Charlotte O'Hara."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://oharaforkansas.com/election-integrity-the-ghost-of-2020/",
      "title": "source",
      "publisher": "Oharaforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Charlotte O'Hara.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://oharaforkansas.com/dismantling-the-kansas-department-of-education/",
      "title": "source",
      "publisher": "Oharaforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Charlotte O'Hara.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://oharaforkansas.com/when-did-you-begin/",
      "title": "source",
      "publisher": "Oharaforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Charlotte O'Hara.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://oharaforkansas.com/a-sobering-look-at-abortion-statistics-in-kansas-a-call-for-reflection/",
      "title": "abortion-statistics source",
      "publisher": "Oharaforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Charlotte O'Hara."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "O'Hara attacked what she called a \"vast sea of RINOs\" in the Republican Party; the piece also reports broad GOP debate agreement on abortion opposition, marijuana opposition, and e"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CHARLOTTE_OHARA_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[charlotte-ohara.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
