/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const KRIS_KOBACH_V2: CandidateFullV2 = {
  "slug": "kris-kobach",
  "name": "Kris Kobach",
  "party": "R",
  "position": "Kansas Attorney General",
  "electionSlug": "kansas-ag-2026",
  "incumbent": true,
  "occupation": "Attorney General / Former Secretary of State",
  "religion": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
  "campaignWebsite": "https://mann.house.gov/about",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Kobach has described abortion as \"one of the civil rights issues of our time.\" He has said Kansas should shed its status as a \"Midwest magnet for abortion\" and cited the record 19,811 abortions performed in Kansas in 2024. He supports restricting abortion access.",
        "sourceIds": [
          "s-32",
          "s-35",
          "s-5",
          "s-10",
          "s-13",
          "s-14"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "The accessible X mirror exposed a limited amplification sample. Kobach amplified RAGA on the Lyon County K-9 grant and an Eric W. post praising his AG office's connection to Trump administration legal staffing. The issue network visible in search results also placed Kobach near The FGA on SNAP/public-benefits enforcement and Kansans for Life/right-to-life accounts in recommendations, but the captured Kobach...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-53"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Abortion is prominent in the broader candidate profile and older campaign record, but it was not a meaningful topic in the accessible current social sample captured for this harvest. Guns/Second Amendment appeared through the official special litigation page and ATF litigation, not as a frequent current-posting theme. Religious liberty appeared in the campaign biography through Air Force vaccine-mandate...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-53"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Several areas were absent or thin in the accessible reviewed set. The current public material did not show sustained discussion of Medicaid expansion, rural hospital finance, prescription drug affordability, child care costs, housing affordability, transportation, broadband, water policy, the Ogallala Aquifer, foster care, adoption, or veterans services. Abortion is prominent in the broader candidate profile and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-53"
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
          "platform": "ag.ks.gov",
          "observation": "Key visible signals: naloxone access, Census lawsuit, AG facts, consumer protection, open government, AG opinions, and official social links. 6. AG official biography, captured 2026-05-11. Key visible signals: Trump election-integrity commission, Title IX litigation, Obamacare eligibility litigation, RAGA chairmanship, family, and office service. 7. AG special litigation page, captured 2026-05-11.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Facebook",
          "observation": "Key visible signals: suing federal government over regulations, defending Kansas laws, Title IX, DACA/Obamacare, and ATF/Second Amendment litigation. 8. BallotReady profile, captured 2026-05-11. Key visible signals: verified campaign website, Facebook, Twitter/X, Instagram; official AG website, contact page, Facebook, and Twitter/X. 9. The Federalist coverage of Pfizer lawsuit, published 2024-06-18.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        }
      ]
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Has not taken a prominent public position on gun policy in his governor's campaign materials, though he has a long record as a conservative and no history of supporting gun restrictions.",
        "sourceIds": [
          "s-34",
          "s-56",
          "s-24",
          "s-27",
          "s-29",
          "s-30"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Kobach has made immigration enforcement a defining issue of his entire career. As attorney general, he has pursued federal immigration-related litigation, and his governor's campaign promises to \"keep criminal illegal aliens out of Kansas\" and support deportation. He has been one of the loudest conservative voices on border enforcement in Kansas for over a decade.",
        "sourceIds": [
          "s-46",
          "s-59",
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
          "platform": "X",
          "observation": "The strongest public social signal is X. The indexed profile for @KrisKobach1787 listed 26K followers and a bio separating campaign updates from official state business. Recent indexed posts concentrate on immigration, noncitizen voting, in-state tuition, SNAP data, judicial selection, fentanyl/naloxone, federal overreach, private property, tariffs, and staff/judicial appointments. The official @KSAGOffice feed...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Facebook",
          "observation": "Facebook, Instagram, and YouTube are confirmed as platform presence but did not expose reliable current post inventories. The campaign videos page embeds six videos, including \"Kris Kobach Testifies Before Congress,\" \"TV Ad: Can't Trust Chris Mann,\" \"TV Ad: Our Family's Safety,\" \"TV Ad: Law Enforcement Agrees,\" \"TV Ad: Kris Kobach is Ready,\" and a Fox clip about Anthony Fauci and border COVID testing (source)....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-4"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "twstalker.com",
          "observation": "Topic: judicial selection / campaign event. (source) 5. 3 weeks ago -- Naloxone distribution box at Fort Hays Tech Northwest in Goodland. Engagement: 6 replies, 3 reposts, 12 likes, 624 views, 0 quotes. Topic: fentanyl / overdose prevention. (source) 6. 3 weeks ago -- Statement attacking Gov. Laura Kelly over turning SNAP data over to federal authorities and tying the dispute to noncitizens and deportation....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "He wants to remove what he calls DEI directives and political indoctrination from Kansas schools and focus classrooms on math, reading, STEM, coding, and AI.",
        "sourceIds": [
          "s-40",
          "s-10",
          "s-13",
          "s-14",
          "s-15",
          "s-16"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "LinkedIn",
          "observation": "LinkedIn exposes a different office-administration signal. The Kansas Attorney General LinkedIn page listed 894 followers in logged-out capture and showed recent updates on a Nexstar/Tegna lawsuit, naloxone access, law enforcement memorial events, senior-resource outreach, alcohol prevention for parents, roofing-contractor registration, crime-victim awards, medication disposal, and VINE notifications. Engagement...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "twstalker.com",
          "observation": "Topic: election law / immigration / Trump validation. (source) 9. 4 weeks ago -- State of the Union post opposing in-state tuition rates for undocumented immigrants. Engagement: 24 replies, 42 reposts, 252 likes, 6K views, 2 quotes. Topic: immigration / higher education. (source) 10. 4 weeks ago -- State of the Union post linking violent crime deaths to immigration enforcement. Engagement: 17 replies, 29 reposts,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Topic: prosecution training / gangs. (source) 4. Official X mirror item: AG opinion on in-state tuition for undocumented immigrants. Engagement: 23 replies, 57 reposts, 282 likes, 10K views, 2 quotes. Topic: immigration / higher education / AG opinion. (source) 5. Official X mirror item: fake U.S. District Court email scam warning. Engagement: 8 replies, 41 reposts, 82 likes, 3K views, 0 quotes. Topic: consumer...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
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
          "s-15",
          "s-10",
          "s-13",
          "s-14",
          "s-16",
          "s-17"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Kris Kobach is Kansas attorney general and a Republican candidate for governor in 2026. He grew up in Topeka, graduated from Washburn Rural High School, and built a national reputation as a lawyer and conservative activist before returning to Kansas elective politics. His resume includes degrees from Harvard, Oxford, and Yale, a law-teaching career, federal service, and years in Kansas statewide office. He lives near Lecompton with his wife, Heather, and their five children.\n\nKobach has been one of the best-known and most polari",
  "recordSummary": "As attorney general, Kobach has used the office for high-profile conservative litigation, including lawsuits involving federal vaccine policy, immigration enforcement, and COVID-era claims against Pfi",
  "ownWordsNarrative": "_A summary of what Kris Kobach has publicly said, posted, and amplified across campaign channels, official attorney general channels, indexed social media, LinkedIn, and credible public coverage. Drawn from public captures of campaign websites, official AG websites, X-indexed posts, Facebook, Instagram, YouTube, LinkedIn, and public news/search records from December 1, 2025 through May 11, 2026, with older still-live campaign archive pages noted where relevant. We report patterns; we do not interpret intent._\n\nAcross the accessible public set reviewed, Kobach presents the 2026 attorney general race less as a new persuasion campaign than as a continuation of the same governing brand he has used in office: litigation, immigration enforcement, public safety, and resistance to federal power. His campaign homepage says he filed for re-election on January 8, 2026 and reported $502,626 cash on hand, while still using the \"Kris Kobach for Attorney General\" brand and linking supporters to donation, volunteer, store, email, X, Facebook, and YouTube actions ([source](https://www.kriskobach.com/)). His campaign biography foregrounds his Harvard/Oxford/Yale credentials, DACA litigation, Biden vaccine-mandate litigation, DHS/ICE litigation, and Air Force religious-exemption litigation ([source](https://www.kriskobach.com/meet-kris/)).\n\nThe dominant current signal is immigration and noncitizen enforcement. That bucket accounted for 10 of 36 coded items, or 28 percent of the accessible reviewed set ([harvest](social-harvest.md#topic-share-analysis)). In the indexed X sample, Kobach posted about noncitizen voting, in-state tuition for undocumented immigrants, SNAP data sharing, Census apportionment, Obamacare eligibility for undocumented immigrants, and immigration enforcement as a public-safety issue ([source](https://twstalker.com/KrisKobach1787)). The highest-viewed visible post in the sample was his in-state-tuition/federal-law warning, with 35K views, 308 likes, 83 reposts, 29 replies, and 7 quotes as displayed by the public mirror ([harvest](social-harvest.md#engagement-review)).\n\nKobach's second large theme is law enforcement and drug enforcement, but the current social language is not only punitive. The reviewed posts repeatedly highlight fentanyl, naloxone distribution boxes, and K-9 grants. He used the personal/campaign account to amplify @KSAGOffice posts about naloxone boxes at Washburn, Fort Hays Tech Northwest, and Pratt Community College, and he framed the office's work as a multi-part fentanyl response involving penalties, drug-detection K-9s, and overdose-reversal access ([source](https://twstalker.com/KrisKobach1787)). The AG homepage similarly leads with naloxone access, saying the office wants the overdose-reversal drug to be easy for Kansans to find ([source](https://www.ag.ks.gov/)).\n\nThe most ideologically consistent governing frame is federal overreach. The official AG biography says Kobach led and personally argued challenges to Biden administration actions, including Title IX and Obamacare eligibility rules ([source](https://www.ag.ks.gov/about-us/attorney-general-kris-w-kobach)). The AG special litigation page describes the unit he created as handling lawsuits against unlawful regulations, defending Kansas laws, and forcing governments to comply with the law; its high-profile case tiles are Title IX, DACA/Obamacare, and ATF/Second Amendment ([source](https://www.ag.ks.gov/divisions/special-litigation-unit)). Campaign and office messaging use those cases to make a single argument: the attorney general's office should be a conservative litigation shop as well as a state law-enforcement agency.\n\nJudicial power is another clear through-line. In the current X sample, Kobach posted from Colby after talking about judicial selection reform and urged voters to support changing how Kansas Supreme Court justices are selected ([source](https://twstalker.com/KrisKobach1787)). He also posted support for Tony Mattivi and Anthony Powell federal bench nominations, and amplified praise for his AG office's legal staff as a pipeline into President Trump's second-term legal apparatus ([source](https://twstalker.com/KrisKobach1787)). The public pattern is a lawyerly identity tied to personnel, courts, judges, and constitutional authority, not just ordinary campaign biography.\n\nConsumer and child-safety communications are more visible on official channels than on the campaign site. The @KSAGOffice indexed sample included public warnings about fake court-summons emails, a Menards multistate settlement, AI chatbot legislation, an open letter to AI developers, and routine prevention items ([source](https://mobile.twstalker.com/KSAGOffice)). The LinkedIn page for Kansas Attorney General showed the same administrative layer: Nexstar/Tegna, naloxone, law-enforcement memorials, senior-resource outreach, alcohol-prevention messaging for parents, roofing registration, crime-victim services, medication disposal, and VINE notifications ([source](https://www.linkedin.com/company/kansasag)).\n\nEngagement is concentrated around immigration and federal-state conflict. The highest visible engagement in the accessible social sample was the State of the Union post on noncitizen voting: 655 likes, 93 reposts, 130 replies, 14K views, and 12 quotes. The in-state-tuition post had fewer likes but far more views, at 35K. The SNAP data statement also stood out, with 380 likes, 87 reposts, 28 replies, 9K views, and 10 quotes ([harvest](social-harvest.md#engagement-review)). By contrast, routine office updates on LinkedIn had single-digit reactions, and no current Facebook, Instagram, or YouTube engagement could be verified in logged-out capture.\n\nThe still-live campaign video archive reinforces Kobach's older AG campaign frame. The campaign site embeds videos about Congress testimony, attacks on Chris Mann, family safety, sheriff/law-enforcement support, qualifications, and a Fox clip about Anthony Fauci and border COVID testing ([source](https://www.kriskobach.com/videos/)). These videos are older than the current capture window, but they remain part of the campaign site's public presentation and align with the current social themes: law enforcement, credentials, federal conflict, and the argument that Kobach will fight rather than merely administer.\n\nSeveral areas were absent or thin in the accessible reviewed set. The current public material did not show sustained discussion of Medicaid expansion, rural hospital finance, prescription drug affordability, child care costs, housing affordability, transportation, broadband, water policy, the Ogallala Aquifer, foster care, adoption, or veterans services. Abortion is prominent in the broader candidate profile and older record, but it was not a meaningful topic in the accessible current social sample. Guns appeared mainly through ATF/Second Amendment litigation, and religious liberty appeared mainly through the campaign biography's Air Force vaccine-mandate case ([harvest](social-harvest.md#visible-absences)).\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: December 1, 2025 to May 11, 2026 for current social, official, and campaign presence, with older still-live campaign pages and videos noted where they remained linked from current public channels. Platforms surveyed: campaign website, official AG website, X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, Reddit, public search, and credible indexed public coverage. Items examined: 36 accessible original/profile/public-record items. Login-walled or script-blocked material was not counted as reviewed. Engagement was reported only when visible in public metadata on capture date.\n\n_Disclaimer: This summary reports public, candidate-controlled, office-controlled, or candidate-attributed signals visible to a logged-out researcher. It is not a complete archive of deleted posts, paid ads, stories, livestreams, email, private groups, or login-only platform activity. We report patterns; we do not interpret intent._",
  "whereTheyWorship": "Public reporting ties Kobach to Morning Star Church in Lawrence. The church website is https://msclawrence.com/, and local reporting has referred to it as his church.",
  "church": {
    "name": "Morning Star Church, Lawrence, KS",
    "denomination": "Evangelical / Non-denominational (affiliated with Morning Star International, Nashville)",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Evangelical / Non-denominational (affiliated with Morning Star International, Nashville). Church Address: 998 N 1771 Rd, Lawrence, KS 66049."
  },
  "campaignFinance": {
    "totalRaised": "$337,330.24 (2025 year-end)",
    "narrative": "Kobach's January 2026 state filing showed $337,330.24 raised, $52,558.52 spent, and $502,626 cash on hand. That left him with a substantial balance entering a crowded Republican primary. The filing shows a broad list of individual contributors rather than one overwhelming self-loan. But the larger money story around Kobach is not only the current balance. It is the long public trail of legal and ethical fights attached to earlier campaigns, including the FEC penalty over We Build the Wall.",
    "donors": [
      {
        "name": "Kevin Arburn",
        "amount": "$10.41"
      },
      {
        "name": "Gary Grimes",
        "amount": "$25.00"
      },
      {
        "name": "Julia Kirk",
        "amount": "$26.03"
      },
      {
        "name": "Karen Piper",
        "amount": "$26.03"
      },
      {
        "name": "Barbara Anderson",
        "amount": "$26.03"
      },
      {
        "name": "John Rysavy",
        "amount": "$29.80"
      },
      {
        "name": "Timothy Voth",
        "amount": "$50.00"
      },
      {
        "name": "David Powell",
        "amount": "$50.00"
      },
      {
        "name": "Ann Peterson",
        "amount": "$100.00"
      }
    ],
    "undisclosed": "The extracted sample covers only the first visible slice of a much longer Schedule A.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and public finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Official AG website, X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, Reddit, Public search, Indexed public coverage. Harvest range: 2025-12-01 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://www.kriskobach.com/",
      "title": "source",
      "publisher": "Kriskobach",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-2",
      "tier": "primary",
      "url": "https://www.ag.ks.gov/about-us/attorney-general-kris-w-kobach",
      "title": "source",
      "publisher": "Ag.Ks",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://twstalker.com/KrisKobach1787",
      "title": "@KrisKobach1787",
      "publisher": "Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach.",
        "Observed public online activity mapped to Immigration / Border.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://www.kriskobach.com/videos/",
      "title": "source",
      "publisher": "Kriskobach",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://twstalker.com/KrisKobach1787/status/2021354205844296128",
      "title": "source",
      "publisher": "Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.ballotready.org/people/kris-kobach",
      "title": "BallotReady profile",
      "publisher": "Ballotready",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://www.propublica.org/article/kris-kobach-voter-fraud-kansas-trial",
      "title": "ProPublica: How the Case for Voter Fraud Was Tested -- and Utterly Failed",
      "publisher": "Propublica",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "KCUR: Kansas Trial Investigates Religious Discrimination in Kobach's Office",
      "publisher": "Kcur",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
      "title": "NBC News - Colyer concedes 2018 primary",
      "publisher": "Nbcnews",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
      "title": "CNN - Kobach wins Kansas GOP primary",
      "publisher": "Cnn",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
      "title": "NPR - Kobach wins primary",
      "publisher": "Npr",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://heavy.com/news/2018/08/heather-kobach-kris-kobach-wife-kansas/",
      "title": "Heather Kobach: 5 Fast Facts",
      "publisher": "Heavy",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.aclu.org/news/voting-rights/courts-ruling-holding-kobach-contempt-well-deserved",
      "title": "ACLU: Court's Ruling Holding Kobach in Contempt",
      "publisher": "Aclu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://www.rollingstone.com/politics/politics-features/kris-kobach-donald-trump-voter-fraud-myths-vote-suppression-990300/",
      "title": "Rolling Stone: Kobach and Trump's Spectacular Voter Fraud Failure",
      "publisher": "Rollingstone",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/03/24/kobach-kansas-ag-and-legislature-to-blame-for-voting-law-legal-costs-representatives-say/",
      "title": "Kansas Reflector: Kobach, Kansas AG and Legislature to Blame for Voting Law Legal Costs",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-08/aclu-says-kobach-owes-52k-in-legal-costs-for-contempt-in-kansas-voting-case",
      "title": "KCUR: ACLU Says Kobach Owes $52K",
      "publisher": "Kcur",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://kansasreflector.com/tag/kris-kobach/",
      "title": "Kansas Reflector: Kobach AG Record Coverage",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/27/kansas-governor-attorney-general-both-declare-victory-in-supreme-court-decision-on-executive-power/",
      "title": "Kansas Reflector: Kelly v. Kobach",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/20/kansas-judge-rebukes-ag-kris-kobach-in-gender-marker-case-issues-symbolic-1-fine/",
      "title": "Kansas Reflector: Gender Marker $1 Fine",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-11-09/kansas-attorney-general-election-results-2022-kris-kobach-chris-mann",
      "title": "KCUR: Kobach Squeaks to Political Comeback",
      "publisher": "Kcur",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
      "title": "Kansas Reflector: Kobach FEC Fine",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-53",
      "tier": "social",
      "url": "https://x.com/KrisKobach1787",
      "title": "X",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/uncovering-kris-kobachs-anti-voting-history",
      "title": "Brennancenter",
      "publisher": "Brennancenter",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://www.kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
      "title": "Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Kris Kobach."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "social",
      "url": "https://www.linkedin.com/company/kansasag",
      "title": "LinkedIn / Linkedin",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "LinkedIn exposes a different office-administration signal. The Kansas Attorney General LinkedIn page listed 894 followers in logged-out capture and showed recent updates on a Nexst"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://mobile.twstalker.com/KSAGOffice",
      "title": "X / Mobile.Twstalker",
      "publisher": "Mobile.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "Topic: prosecution training / gangs. (source) 4. Official X mirror item: AG opinion on in-state tuition for undocumented immigrants. Engagement: 23 replies, 57 reposts, 282 likes, "
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(KRIS_KOBACH_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[kris-kobach.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
