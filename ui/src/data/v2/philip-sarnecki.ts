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
          "s-5",
          "s-19",
          "s-65",
          "s-77",
          "s-78",
          "s-116"
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
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Faith and family are part of Sarnecki's public identity. The campaign biography says he is guided by faith in God and committed to conservative values including faith, family, hard work, and accountability. (source) Real Media KC's interview page says he is guided by Christian faith and conservative values and presents his business story alongside family, 513 Films, Athletes in Action, and blue-collar roots....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "Several issue areas were not visible in the accessible material reviewed. The public set did not include captured items centered on Medicaid expansion, rural hospital closures, hospital finance, child care, foster care, veterans services, broadband deployment, water policy, the Ogallala aquifer, affordable rental housing details, state employee pay, disability services, transportation infrastructure, or...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
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
          "s-11",
          "s-17",
          "s-18",
          "s-19",
          "s-25",
          "s-38"
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
          "s-11",
          "s-17",
          "s-18",
          "s-19",
          "s-25",
          "s-38"
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
            "s-social-crossref-3"
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
          "s-11",
          "s-37",
          "s-38",
          "s-47",
          "s-61",
          "s-70"
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
          "s-61",
          "s-71",
          "s-94",
          "s-96",
          "s-111",
          "s-133"
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
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Visible mirror metrics: 20, 7, 66, about 2K views, 0. (source) 22. X sample: ICE assault / deportation. Sarnecki cited an illegal immigrant's 20-year sentence for attacking an ICE officer in Wichita and said Kansas needed a governor who would work with the administration to deport violent illegal immigrants.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Visible mirror metrics: 4, 8, 24, 866 views, 0. (source) 28. Indexed X sample: property taxes, 2026-03-11. WLT Report / 100PercentFedUp embedded Sarnecki's X post saying property taxes are out of control in Kansas, seniors are being forced out of homes, and working families are squeezed. (source) 29. Indexed X sample: Virginia redistricting / Kansas opportunity, 2026-03-13. WLT Report embedded Sarnecki's post...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
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
          "s-46",
          "s-64",
          "s-206",
          "s-1",
          "s-2",
          "s-3"
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
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Visible mirror metrics: 5, 24, 86, about 3K views, 0. (source) 12. X sample: Charlie Kirk / Trump school role-model controversy. Sarnecki wrote that students being barred from naming Charlie Kirk or President Trump as role models was \"indoctrination.\" Visible mirror metrics: 293, about 4K, about 10K, about 302K views, 626. (source) 13. X sample: Kingman County event. Sarnecki thanked Kingman County GOP and said...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "X",
          "observation": "Date range covered: June 2025 to May 11, 2026 for public social presence, with the active governor-campaign message captured from the September 2, 2025 launch through May 11, 2026. Older career and board-service claims are noted only when used by current campaign materials. Platforms surveyed: campaign website, campaign news/about/contact/volunteer pages, X, Facebook, Instagram, YouTube, LinkedIn, IMDb, TikTok,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
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
          "s-3",
          "s-4"
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
      "title": "Philipsarnecki.Org",
      "publisher": "philipsarnecki.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-2",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01PS_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://ethanforkansas.com",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "social",
      "url": "https://www.facebook.com/ethanforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "social",
      "url": "https://www.instagram.com/ethanforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ethancorson/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://cindyforkansas.com",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "social",
      "url": "https://www.facebook.com/cindyforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.cindyforsenateks.com/",
      "title": "Cindyforsenateks.Com",
      "publisher": "cindyforsenateks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://oharaforkansas.com",
      "title": "Oharaforkansas.Com",
      "publisher": "oharaforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "social",
      "url": "https://www.facebook.com/oharaforjoco/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com",
      "title": "Stacyrogersforks.Com",
      "publisher": "stacyrogersforks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "social",
      "url": "https://www.facebook.com/StacyHepnerRogers/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "social",
      "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com",
      "title": "Kansascomeback.Com",
      "publisher": "kansascomeback.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "social",
      "url": "https://www.facebook.com/JoyforKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "social",
      "url": "https://x.com/JoyforKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "social",
      "url": "https://www.linkedin.com/in/joyeakins/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://philipsarnecki.org",
      "title": "Philipsarnecki.Org",
      "publisher": "philipsarnecki.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "social",
      "url": "https://www.facebook.com/p/Philip-Sarnecki-For-Governor-61579950041528/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "social",
      "url": "https://www.linkedin.com/in/philipsarnecki/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://www.imdb.com/name/nm3671154/",
      "title": "Imdb.Com",
      "publisher": "imdb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7",
      "title": "Kcjc.Com",
      "publisher": "kcjc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Ethan_Corson",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Ethan_Corson",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://doleinstitute.org/about/fellows/ethan-corson/",
      "title": "Doleinstitute.Org",
      "publisher": "doleinstitute.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/06/kansas-senator-leans-into-bipartisan-allure-in-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Cindy_Holscher",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/endorsements/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://www.amazon.com/Get-Off-Your-Ass-Definitive/dp/1591201292",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://www.amazon.com/Busting-Your-Butt-Gut-Minimizing/dp/1591202086",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://www.readhowyouwant.com/authors/details/Marty-Tuley/6407",
      "title": "Readhowyouwant.Com",
      "publisher": "readhowyouwant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://openpowerlifting.org/u/martytuley",
      "title": "Openpowerlifting.Org",
      "publisher": "openpowerlifting.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2024/11/05/county-commission-races-2024-general-246243/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Charlotte_O'Hara",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Charlotte_O'Hara",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Stacy_Rogers",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://www.schooleymitchell.com/news/rholter/feature-story-eberly-farm-and-kids-closet-connection/",
      "title": "Schooleymitchell.Com",
      "publisher": "schooleymitchell.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/",
      "title": "Rileyks.Gop",
      "publisher": "rileyks.gop",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
      "title": "Wichitachamber.Org",
      "publisher": "wichitachamber.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://cornerstonedata.com/about-us/",
      "title": "Cornerstonedata.Com",
      "publisher": "cornerstonedata.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Joy_Eakins",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/",
      "title": "Wltreport.Com",
      "publisher": "wltreport.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://trendingpoliticsnews.com/new-frontrunner-emerges-in-key-race-as-gop-candidate-shatters-fundraising-records-mace/",
      "title": "Trendingpoliticsnews.Com",
      "publisher": "trendingpoliticsnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://www.noln.net/site-placement/latest-news/news/55314781/strickland-brothers-10-minute-oil-change-franchise-owner-running-for-kansas-governor",
      "title": "Noln.Net",
      "publisher": "noln.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
      "title": "Bottradionetwork.Com",
      "publisher": "bottradionetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
      "title": "Realmediakc.Com",
      "publisher": "realmediakc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://www.kansascatholic.org/current-news/election-2026",
      "title": "Kansascatholic.Org",
      "publisher": "kansascatholic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://www.colyerforgovernor.com/",
      "title": "Colyerforgovernor.Com",
      "publisher": "colyerforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "social",
      "url": "https://x.com/DrJeffColyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "social",
      "url": "https://x.com/govjeffcolyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "social",
      "url": "https://www.facebook.com/JeffColyerMD/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "social",
      "url": "https://www.linkedin.com/in/jeff-colyer-6894363/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jeff_Colyer",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://www.nga.org/governor/jeff-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://politics.georgetown.edu/profile/jeff-colyer/",
      "title": "Politics.Georgetown.Edu",
      "publisher": "politics.georgetown.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about-gov/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/announcements.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/23/republican-candidate-for-kansas-governor-offering-voters-a-prescription-for-change/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/07/12/colyers-narrow-miss-in-2018-fueling-resurgent-gop-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2021-08-30/the-kansas-a-g-s-path-to-governor-gets-easier-after-his-opponent-endorses-him",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://www.kcur.org/post/colyers-first-executive-order-kansas-governor-fight-sexual-harassment",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-18/faith-based-adoption-law-signed-quickly-becoming-kansas-campaign-fodder",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/af650bef-0c19-4f73-b418-bded940b0b7a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/9f9b260b-5c26-4cd6-a81c-212904371850",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
      "title": "Nbcnews.Com",
      "publisher": "nbcnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/new-kansas-governor-to-require-annual-sexual-harassment-training",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/",
      "title": "Thehill.Com",
      "publisher": "thehill.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/05/14/jeff-colyer-and-a-review-of-kansas-gubernatorial-comeback-bids/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://www.cgscfoundation.org/person-of-the-month-may-2020/",
      "title": "Cgscfoundation.Org",
      "publisher": "cgscfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://jag.org/dipl-team-member/jeff-colyer/",
      "title": "Jag.Org",
      "publisher": "jag.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "primary",
      "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
      "title": "Docs.House.Gov",
      "publisher": "docs.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://www.kscbnews.net/jeff-colyer-m-d-sworn-in-as-47th-governor-of-the-state-of-kansas/",
      "title": "Kscbnews.Net",
      "publisher": "kscbnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://www.nga.org/governor-spouse/ruth-gutierrez-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Jeff_Colyer.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://sanokc.com/provider/dr-colyer/",
      "title": "Sanokc.Com",
      "publisher": "sanokc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://www.renaissanceplasticsurgicalarts.com/",
      "title": "Renaissanceplasticsurgicalarts.Com",
      "publisher": "renaissanceplasticsurgicalarts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://www.healthgrades.com/physician/dr-jeffrey-colyer-xpdcb",
      "title": "Healthgrades.Com",
      "publisher": "healthgrades.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery",
      "title": "Nkchealth.Org",
      "publisher": "nkchealth.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://internationalmedicalcorps.org/press-release/lt-governor-to-climb-mt-kilimanjaro-in-support-of-international-medical-corps-humanitarian-relief-efforts/",
      "title": "Internationalmedicalcorps.Org",
      "publisher": "internationalmedicalcorps.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://www.findagrave.com/memorial/142168654/james-daniel-colyer",
      "title": "Findagrave.Com",
      "publisher": "findagrave.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://www.legacy.com/obituaries/kansascity/obituary.aspx?pid=174049747",
      "title": "Legacy.Com",
      "publisher": "legacy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2018_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "social",
      "url": "https://x.com/ScottSchwabKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "social",
      "url": "https://x.com/KansasSOS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "social",
      "url": "https://www.facebook.com/SchwabforSOS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "social",
      "url": "https://www.instagram.com/kansassos/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "social",
      "url": "https://www.linkedin.com/in/scott-schwab-8306713/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://scottschwab.com/",
      "title": "Scottschwab.Com",
      "publisher": "scottschwab.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/34505/scott-schwab",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "secondary",
      "url": "https://www.billtrack50.com/legislatordetail/2823",
      "title": "Billtrack50.Com",
      "publisher": "billtrack50.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "primary",
      "url": "https://sos.ks.gov/about/schwab-biography.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Scott_Schwab",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Scott_Schwab",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "secondary",
      "url": "https://www.kshs.org/kansapedia/scott-schwab/20461",
      "title": "Kshs.Org",
      "publisher": "kshs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34505/scott-schwab",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/scott-schwab-aims-gop-gubernatorial-campaign-at-property-tax-reform/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/i-will-make-a-full-recovery-scott-schwab-announces-cancer-diagnosis/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/03/21/ks-secretary-state-announces-cancer-diagnosis/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/22/kansas-appeals-court-says-secretary-of-state-violated-open-records-law-by-altering-computer-system/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/08/01/kansas-secretary-of-state-refuses-to-provide-provisional-ballot-records-despite-court-ruling/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/cases/loud-light-hammet-v-schwab-2020/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2020/11/09/as-other-republicans-lied-about-voter-fraud-kansas-secretary-of-state-was-a-voice-of-sanity/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/kansas-secretary-of-state-defeats-election-conspiracy-promoter",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/26/schwabs-campaign-rebuffs-late-campaign-criticism-from-kansas-gop-rival-brown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/09/15/kansas-secretary-of-state-scott-schwab-works-to-build-trust-in-elections-in-the-face-of-skepticism/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/this-is-unacceptable-top-kansas-election-official-demands-answers-from-usps-after-mail-errors-in-primary-election/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://www.kwch.com/2024/09/10/kansas-secretary-state-sends-letter-usps-over-mail-in-ballot-problems/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-10-26/president-trump-kansas-secretary-of-state-scott-schwab",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/31/secretary-of-state-scott-schwab-welcomes-federal-assist-with-cleansing-voter-list/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://abcnews.go.com/US/family-boy-killed-waterslide-speaks-hurting/story?id=45445546",
      "title": "Abcnews.Go.Com",
      "publisher": "abcnews.go.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/scott-schwab-speaks-as-criminal-cases-loom-dad-talks-of-journey-forward-after-tragedy-on-verruckt/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/family-friends-and-community-honor-10-year-old-caleb-schwab",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/caleb-schwabs-family-to-recieve-20-million-in-settlement",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "secondary",
      "url": "https://bflawfirm.com/schlitterbahn-wrongful-death-claims-settle-for-19732125-00/",
      "title": "Bflawfirm.Com",
      "publisher": "bflawfirm.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "secondary",
      "url": "https://www.npr.org/2019/02/25/697647804/judge-dismisses-murder-charges-over-boys-death-on-kansas-waterslide",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "secondary",
      "url": "https://time.com/4444447/caleb-schwab-verruckt-water-slide-death/",
      "title": "Time.Com",
      "publisher": "time.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "secondary",
      "url": "https://www.penwellgabelkc.com/obituaries/caleb-thomas-schwab",
      "title": "Penwellgabelkc.Com",
      "publisher": "penwellgabelkc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "secondary",
      "url": "https://www.lwv.org/legal-center/league-women-voters-kansas-v-schwab",
      "title": "Lwv.Org",
      "publisher": "lwv.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "secondary",
      "url": "https://www.democracydocket.com/cases/kansas-voter-suppression-laws/",
      "title": "Democracydocket.Com",
      "publisher": "democracydocket.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "secondary",
      "url": "https://law.justia.com/cases/kansas/supreme-court/2023/124378.html",
      "title": "Law.Justia.Com",
      "publisher": "law.justia.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "secondary",
      "url": "https://vickischmidt.org/",
      "title": "Vickischmidt.Org",
      "publisher": "vickischmidt.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "social",
      "url": "https://www.facebook.com/VickiSchmidtKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "social",
      "url": "https://x.com/VickiSchmidtKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "social",
      "url": "https://www.linkedin.com/in/vicki-schmidt-50b11810/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Vicki_Schmidt",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Vicki_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "primary",
      "url": "https://insurance.kansas.gov/about-us/",
      "title": "Insurance.Kansas.Gov",
      "publisher": "insurance.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34584/vicki-schmidt",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "secondary",
      "url": "https://content.naic.org/node/8831",
      "title": "Content.Naic.Org",
      "publisher": "content.naic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-03-17/kansas-bill-to-expand-free-breast-cancer-screening-likely-killed-by-republican-lawmakers",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2026/03/16/breast-cancer-screening-bill-killed-by-kansas-gop/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/02/kansas-insurance-commissioner-backs-bill-eliminate-breast-cancer-screening-costs/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://www.kwch.com/2023/10/17/its-humbling-ks-insurance-commissioner-discusses-breast-cancer-journey/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-insurance-commissioner-has-breast-cancer-expects-full-recovery/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/state-government/2023/jun/14/kansas-insurance-commissioner-says-shes-been-diagnosed-with-breast-cancer/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/",
      "title": "Kflpac.Org",
      "publisher": "kflpac.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "secondary",
      "url": "https://www.insurancejournal.com/news/midwest/2025/12/03/849821.htm",
      "title": "Insurancejournal.Com",
      "publisher": "insurancejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "secondary",
      "url": "https://www.wibw.com/2024/06/21/ks-insurance-commissioner-touts-new-law-protect-seniors-scams/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt",
      "title": "Tkmagazine.Com",
      "publisher": "tkmagazine.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "secondary",
      "url": "https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor",
      "title": "News.Ku.Edu",
      "publisher": "news.ku.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "secondary",
      "url": "https://mittelpolitan.substack.com/p/insight-kansas-column-for-july-vicki",
      "title": "Mittelpolitan.Substack.Com",
      "publisher": "mittelpolitan.substack.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/14/kansas-young-republicans-shut-down-after-politico-report-on-racist-violent-encrypted-chat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "secondary",
      "url": "https://www.md.com/doctor/michael-j-schmidt-md",
      "title": "Md.Com",
      "publisher": "md.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2022_Kansas_Insurance_Commissioner_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/rollcall/SB95/id/475027",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2016/b2015_16/measures/documents/sb95_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/sb409_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2014/b2013_14/measures/documents/summary_hb_2744_2014.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "secondary",
      "url": "https://philipsarnecki.org/contact/",
      "title": "Philipsarnecki.Org",
      "publisher": "philipsarnecki.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "secondary",
      "url": "https://www.followthemoney.org/",
      "title": "Followthemoney.Org",
      "publisher": "followthemoney.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://www.athletesinaction.org/",
      "title": "Athletesinaction.Org",
      "publisher": "athletesinaction.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "social",
      "url": "https://x.com/Philip_Sarnecki",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "social",
      "url": "https://www.instagram.com/philip_sarnecki/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Philip Sarnecki's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://ngntipkolamrenang.twstalker.com/Philip_Sarnecki",
      "title": "X / Ngntipkolamrenang.Twstalker",
      "publisher": "Ngntipkolamrenang.Twstalker",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Visible mirror metrics for the reposted item: 1, 8, 7, 347 views, 0. (source) 25. X sample: SNAP cover-up / Trump. Sarnecki alleged an active cover-up, demanded release of SNAP dat",
        "Observed public online activity mapped to Immigration / Border.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://philipsarnecki.org/about/",
      "title": "X / Philipsarnecki",
      "publisher": "Philipsarnecki",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Faith and family are part of Sarnecki's public identity. The campaign biography says he is guided by faith in God and committed to conservative values including faith, family, hard"
      ]
    },
    {
      "id": "s-social-crossref-3",
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
