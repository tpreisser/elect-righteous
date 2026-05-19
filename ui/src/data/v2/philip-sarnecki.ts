/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const PHILIP_SARNECKI_V2: CandidateFullV2 = {
  "slug": "philip-sarnecki",
  "name": "Philip Sarnecki",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Businessman",
  "campaignWebsite": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Opposes abortion. He participated in the January 2026 GOP gubernatorial debate where all six Republican candidates found unity on abortion opposition.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "Visible mirror metrics for the reposted item: 1, 8, 7, 347 views, 0. (source) 25. X sample: SNAP cover-up / Trump. Sarnecki alleged an active cover-up, demanded release of SNAP data, and said Kansas needed a governor supporting President Trump. Visible mirror metrics: 61, about 1K, about 4K, about 143K views, 108. (source) 26. X sample: pro-life Christmas message. Sarnecki said he is pro-life because life is...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Faith and family are part of Sarnecki's public identity. The campaign biography says he is guided by faith in God and committed to conservative values including faith, family, hard work, and accountability. (source) Real Media KC's interview page says he is guided by Christian faith and conservative values and presents his business story alongside family, 513 Films, Athletes in Action, and blue-collar roots....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Several issue areas were not visible in the accessible material reviewed. The public set did not include captured items centered on Medicaid expansion, rural hospital closures, hospital finance, child care, foster care, veterans services, broadband deployment, water policy, the Ogallala aquifer, affordable rental housing details, state employee pay, disability services, transportation infrastructure, or...",
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
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-6",
          "s-7"
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
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "philipsarnecki.org",
          "observation": "The official campaign site is Sarnecki's central candidate-controlled channel. It frames him as a \"Kansas Dad,\" husband, businessman, job creator, Christian, and political outsider. The site says Kansas is suffering from high taxes, out-of-control property taxes, \"radical hiring policies instead of merit,\" education elites replacing parents, young Kansans leaving for opportunity, and Republican losses under a...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "Credible public coverage and interviews reinforce the same candidate-controlled message. Kansas Reflector/Kansas Press Association described Sarnecki as weary of Republicans losing governor races and joining a field dominated by career politicians. (source) WIBW/KWCH reported the campaign priorities from his announcement release. (source) Real Media KC published a long candidate interview and transcript centered...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "1. Campaign homepage, captured 2026-05-11. The homepage says \"Let's turn Kansas around together,\" \"It's our time to win,\" and \"Kansas Dad - Husband - Businessman,\" then contrasts a \"radical Democrat governor\" with \"Philip's Plan.\" (source) 2. Campaign homepage issue list, captured 2026-05-11. The site lists highest regional taxes, second-highest corporate tax rate among border states, property taxes, DEI-style...",
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
        "text": "Has not taken a detailed public position, but his campaign is built around conservative values and alignment with President Trump.",
        "sourceIds": [
          "s-16",
          "s-17",
          "s-1",
          "s-2",
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Has not taken a specific public position on immigration in available sources.",
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
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "The visible X sample is sharply message-disciplined. The dominant posts attack \"career politicians,\" high taxes, property taxes, government spending, Kansas's economy, red tape, Republican leadership, Democratic Gov. Laura Kelly, SNAP data, immigration enforcement, education \"indoctrination,\" Charlie Kirk / Trump role-model controversy, and congressional redistricting. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Visible mirror metrics: 20, 7, 66, about 2K views, 0. (source) 22. X sample: ICE assault / deportation. Sarnecki cited an illegal immigrant's 20-year sentence for attacking an ICE officer in Wichita and said Kansas needed a governor who would work with the administration to deport violent illegal immigrants.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Visible mirror metrics: 4, 8, 24, 866 views, 0. (source) 28. Indexed X sample: property taxes, 2026-03-11. WLT Report / 100PercentFedUp embedded Sarnecki's X post saying property taxes are out of control in Kansas, seniors are being forced out of homes, and working families are squeezed. (source) 29. Indexed X sample: Virginia redistricting / Kansas opportunity, 2026-03-13. WLT Report embedded Sarnecki's post...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "Supports restoring parental rights in education.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "X",
          "observation": "The public X mirror identifies @Philip_Sarnecki as \"CEO; Business Owner; Board Member; Movie Producer; 2026 Republican Candidate for Governor of Kansas,\" linked to the campaign site, located in Kansas, and joined in June 2025. It displayed about 85 tweets and 3K followers. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Visible mirror metrics: 5, 24, 86, about 3K views, 0. (source) 12. X sample: Charlie Kirk / Trump school role-model controversy. Sarnecki wrote that students being barred from naming Charlie Kirk or President Trump as role models was \"indoctrination.\" Visible mirror metrics: 293, about 4K, about 10K, about 302K views, 626. (source) 13. X sample: Kingman County event. Sarnecki thanked Kingman County GOP and said...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Date range covered: June 2025 to May 11, 2026 for public social presence, with the active governor-campaign message captured from the September 2, 2025 launch through May 11, 2026. Older career and board-service claims are noted only when used by current campaign materials. Platforms surveyed: campaign website, campaign news/about/contact/volunteer pages, X, Facebook, Instagram, YouTube, LinkedIn, IMDb, TikTok,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Opposes marijuana legali",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Philip Sarnecki is a Republican candidate for governor from Bucyrus who is trying to turn private-sector success into a statewide political brand. His public identity is built around business ownership, Christian language, and an outsider message aimed at voters who are frustrated with the existing Republican field. He is married to Heidi, and his campaign materials present him as a husband, father, and businessman rather than a career officeholder.\n\nSarnecki's biography is rooted in ventures such as RPS Financial and 513 Films. Public materials say his companies have employed nearly 1,000 Kansans across multiple industries. He has not held statewide office, so his case for governor depends almost entirely on how persuasive voters find his business history, values language, and self-presentation.",
  "recordSummary": "Sarnecki does not bring a legislative or executive government record into this race. His public record is mainly business, campaign activity, and media appearances, including promotion of 513 Films as a faith-based enterprise and a broader argument that Kansas needs a governor from outside the political establishment.\n\nThat outsider posture is paired with unusually large self-funding. His 2025 year-end filing shows a campaign with real financial heft, but much of that money came from Sarnecki himself rather than from a broad donor network. So the record here is less about what he has done in public office and more about whether voters see him as a credible businessman or as a wealthy newcomer trying to buy his way into the top tier.",
  "ownWordsNarrative": "_A summary of what Philip Sarnecki has publicly said, posted, and amplified across campaign channels, indexed social media, interviews, and credible public-news captures. Drawn from public captures of the campaign site, campaign-linked social accounts, indexed X mirrors/search snippets, public interviews, and public reporting from June 2025 through May 11, 2026, with the active governor-campaign message beginning at his September 2, 2025 launch. We report patterns; we do not interpret intent._\n\nAcross the [34-item captured sample](social-harvest.md), Sarnecki's largest visible category is taxes, property taxes, the economy, jobs, cost of living, government spending, red tape, and housing/opportunity, with 11 items, or 32 percent of the harvest. The campaign homepage says Kansas has the highest taxes in the region, out-of-control property taxes, a high corporate tax rate compared with border states, and young Kansans priced out of homes and leaving for opportunity. ([source](https://philipsarnecki.org/)) In one indexed X post, Sarnecki said property taxes are \"out of control,\" seniors are being forced out of homes, and working families are being squeezed. ([source](https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/))\n\nHis economic message is inseparable from his outsider pitch. On the campaign site, Sarnecki presents himself as \"Kansas Dad - Husband - Businessman\" and says his plan is to stand with President Trump, create jobs, lower taxes, restore parental rights, end woke policies, bring business-style accountability, and cut red tape. ([source](https://philipsarnecki.org/)) The campaign launch release says, \"Like President Trump, I've never run for office before,\" and argues that Kansas needs a business approach rather than the \"career politician mindset.\" ([source](https://philipsarnecki.org/business-executive-philip-sarnecki-announces-run-for-kansas-governor/))\n\nThe same contrast dominates his X presence. In the public mirror sample, Sarnecki repeatedly blames \"career politicians\" for high taxes, state budget growth, population stagnation, weak job creation, red tape, regulation, and Republican losses. He wrote that the state budget had risen more than 60 percent in seven years while population had not grown, and said Kansans should keep more money while government keeps less. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki)) In another post, he said Kansas had the third-most government employees per capita and needed a governor who would cut red tape and regulation. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki))\n\nTrump alignment is a central visible signal, not a side note. The campaign homepage says Sarnecki would \"Stand with President Trump to fight for Kansas.\" ([source](https://philipsarnecki.org/)) His launch language says Trump won Kansas three times but Republicans keep losing governor races, then promises, \"we're going to win big.\" ([source](https://philipsarnecki.org/business-executive-philip-sarnecki-announces-run-for-kansas-governor/)) On X, Sarnecki accused Kansas GOP leaders of standing down on congressional redistricting, said Kansas could send another Trump-aligned Republican to Congress, and tied SNAP data disputes to the Trump administration. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki))\n\nThe highest visible-engagement items in the harvest came from hard-edged primary-culture and Trump-aligned posts. A post accusing schools of indoctrination after students were reportedly barred from naming Charlie Kirk or President Trump as role models showed about 302K views in the public X mirror. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki)) A post linking Minnesota fraud allegations to Kansas SNAP data and promising to release data to Trump showed about 312K views. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki)) A redistricting post criticizing Kansas Republican leadership showed about 248K views. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki))\n\nEducation content is less frequent than taxes and outsider messaging, but it is explicit. The campaign site says education elites are trying to replace parents and that Sarnecki would restore parental rights and end woke policies. ([source](https://philipsarnecki.org/)) In the X sample, he wrote that classrooms are pushing agendas instead of reading, writing, and math, and that as governor he would restore focus to children's futures. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki)) The Charlie Kirk / Trump role-model post gives that education frame its most viral visible expression in the reviewed set. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki))\n\nFaith and family are part of Sarnecki's public identity. The campaign biography says he is guided by faith in God and committed to conservative values including faith, family, hard work, and accountability. ([source](https://philipsarnecki.org/about/)) Real Media KC's interview page says he is guided by Christian faith and conservative values and presents his business story alongside family, 513 Films, Athletes in Action, and blue-collar roots. ([source](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/)) In a visible X post, he wrote that he is pro-life because life is precious and God created every person in His image. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki))\n\nHis public-safety and immigration language is direct and enforcement-oriented. Kansas Reflector/Kansas Press Association reported his launch comments criticizing Democratic leaders for, in his words, failing to distinguish illegal immigration from legal immigration and criminals from crime victims. ([source](https://kspress.com/news/2025/09/02/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor)) In the X mirror sample, Sarnecki cited a sentence for attacking an ICE officer in Wichita and said Kansas needed a governor who would work with the administration to deport violent illegal immigrants. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki))\n\nSarnecki's business biography is used as proof-of-competence. The campaign and interview materials say he founded and led RPS Financial Group, expanded to 18 offices including 12 in Kansas, served clients in all 50 states, and employed nearly 1,000 people across multiple industries. ([campaign source](https://philipsarnecki.org/about/), [interview source](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/)) In the Real Media KC transcript, Sarnecki argues that a governor runs a multi-billion-dollar budget, builds leadership teams, appoints people, and needs skills that he says career politicians lack. ([source](https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/))\n\nThe reviewed public set also shows a campaign trying to look financially and organizationally serious. The campaign site asks for donations, volunteers, email signups, SMS opt-ins, and specific volunteer roles including door knocking, phone banking, sign waving, events, election integrity, and digital outreach. ([source](https://philipsarnecki.org/volunteer/)) In the X sample, Sarnecki claimed contributions supporting him reached $3 million and said he held a massive fundraising lead. ([source](https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki)) Public campaign-finance coverage has also emphasized that his early strength was heavily self-funded. ([source](https://www.hppr.org/hppr-news/2026-01-20/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans))\n\nSeveral issue areas were not visible in the accessible material reviewed. The public set did not include captured items centered on Medicaid expansion, rural hospital closures, hospital finance, child care, foster care, veterans services, broadband deployment, water policy, the Ogallala aquifer, affordable rental housing details, state employee pay, disability services, transportation infrastructure, or mental-health-system funding. The available record is therefore strongest on taxes, cost of living, economic decline, outsider/business identity, Trump alignment, Republican winning, redistricting, parental rights, anti-\"woke\" education politics, faith/family/pro-life identity, and immigration/public-safety enforcement, and thinner on health care, water, infrastructure, and social-service detail.\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: June 2025 to May 11, 2026 for public social presence, with the active governor-campaign message from September 2, 2025 to May 11, 2026. Platforms surveyed: campaign website, campaign news/about/contact/volunteer pages, X, Facebook, Instagram, YouTube, LinkedIn, IMDb, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, public search results, indexed X mirrors, and credible public-news/interview captures. Items examined: [34 accessible original/profile/public-record/interview/news-captured items and 2 visible repost/amplification examples](social-harvest.md). Login-walled or script-blocked material was not counted as reviewed. Engagement was reported only when visible in public snippets or indexed mirrors on capture date. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public materials identify Sarnecki as Christian, but public sources do not name a current church affiliation or church website. His campaign is faith-forward, but the available record stops short of tying him to a specific congregation.",
  "campaignFinance": {
    "totalRaised": "$2,528,715.73 (direct committee receipts at 2025 year-end)",
    "narrative": "Sarnecki's 2025 year-end report shows $2,528,715.73 raised, $222,715.73 spent, and $2,306,000 cash on hand. That is one of the largest early totals in the governor's race, but it is not a conventional donor-driven buildout. The filing reflects a campaign powered primarily by Sarnecki's own money, including a $2 million self-loan. The named outside donors visible in the filing are much smaller than the self-funding component, which makes this less a broad-based grassroots finance story than a heavily self-financed campaign with some outside support layered on top.",
    "donors": [
      {
        "name": "Philip Sarnecki (self-loan)",
        "amount": "$2,000,000.00"
      },
      {
        "name": "John Goodwin",
        "amount": "$2,500.00"
      },
      {
        "name": "Ronda Anderson",
        "amount": "$260.25"
      },
      {
        "name": "Jim Burt",
        "amount": "$250.00"
      },
      {
        "name": "Eben Fowler",
        "amount": "$100.00"
      },
      {
        "name": "Lenin Guerra",
        "amount": "$100.00"
      }
    ],
    "undisclosed": "Separate supportive organizations were repeatedly referenced in reporting, but not fully identified donor by donor.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and statewide campaign-finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, X, Facebook, Instagram, YouTube, LinkedIn, IMDb, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Indexed X mirrors, Public news/interviews. Harvest range: 2025-06-01 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://philipsarnecki.org/",
      "title": "source",
      "publisher": "Philipsarnecki",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://philipsarnecki.org/about/",
      "title": "source",
      "publisher": "Philipsarnecki",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.instagram.com/philip_sarnecki/",
      "title": "philip_sarnecki",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.youtube.com/@PhilipSarneckiforGovernor",
      "title": "@PhilipSarneckiforGovernor",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://x.com/Philip_Sarnecki",
      "title": "@Philip_Sarnecki",
      "publisher": "X",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki",
      "title": "source",
      "publisher": "Ngntipkolamrenang.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki.",
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Observed public online activity mapped to Immigration / Border.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
      "title": "source",
      "publisher": "Realmediakc",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
      "title": "Kansas Reflector: Sarnecki launches campaign (Sept 2025)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
      "title": "WIBW: Sarnecki announces (Sept 2, 2025)",
      "publisher": "Wibw",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Philip Sarnecki."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://kspress.com/news/2025/09/02/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor",
      "title": "Kansas Reflector / Kspress",
      "publisher": "Kspress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Religious Liberty.",
        "Credible public coverage and interviews reinforce the same candidate-controlled message. Kansas Reflector/Kansas Press Association described Sarnecki as weary of Republicans losing"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(PHILIP_SARNECKI_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[philip-sarnecki.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
