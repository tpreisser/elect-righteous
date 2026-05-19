/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const DANIEL_HAWKINS_V2: CandidateFullV2 = {
  "slug": "daniel-hawkins",
  "name": "Daniel Hawkins",
  "party": "R",
  "position": "Insurance Commissioner candidate",
  "electionSlug": "kansas-insurance-2026",
  "incumbent": false,
  "occupation": "Kansas House Speaker, District 100 (Wichita) -- assumed January 14, 2013",
  "family": "Diane Hawkins (married 1985, \"college sweetheart\")",
  "campaignWebsite": "https://hawkinsforinsurance.com",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Describes himself as \"pro-life\" and lists defending life as a core belief. His campaign website leads with \"PRO-LIFE. PRO-GUN. PRO-TRUMP.\"",
        "sourceIds": [
          "s-29",
          "s-31",
          "s-36",
          "s-37",
          "s-50",
          "s-1"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "Latest visible candidate-controlled material: the older campaign site's embedded Facebook feed showed relative timestamps within days of access on May 11, 2026, including posts on legislative wrap-up, United WE, Moody's, law enforcement valor awards, White House recognition, Butler County GOP, SNAP audit, property tax relief, senior crypto scams, and pro-life/religious-freedom wins.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Facebook",
          "observation": "His older Hawkins for Kansas site supplies the ideological baseline: unchecked government expansion limits freedom and hurts business growth; he says he is dedicated to defending life, strengthening the family, and protecting rights. That site's public Facebook feed shows the day-to-day version of the same message: legislative wrap-ups with chambers of commerce and GOP groups, property-tax pressure on Kelly,...",
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
          "s-11",
          "s-17",
          "s-28",
          "s-30",
          "s-33",
          "s-41"
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
          "s-28",
          "s-30",
          "s-33",
          "s-38"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Describes himself as \"pro-gun.\" Has made Second Amendment support part of his campaign branding.",
        "sourceIds": [
          "s-29",
          "s-31",
          "s-36",
          "s-37",
          "s-50",
          "s-1"
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
          "s-11",
          "s-17",
          "s-28",
          "s-30",
          "s-32",
          "s-33"
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
          "s-11",
          "s-17",
          "s-28",
          "s-30",
          "s-33",
          "s-41"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Runs as a Republican. The Kansas Republican Party has not endorsed marijuana legali",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-5",
          "s-7",
          "s-12"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Daniel Hawkins is the Kansas House speaker and the 2026 Republican candidate for insurance commissioner. He is a Wichita-area legislator who first won his House seat in 2012 and climbed through committee and leadership posts before becoming speaker in 2023. Public biographies say he graduated from Hutchinson Community College and Emporia State University, served in the Kansas Army National Guard, married his wife Diane in 1985, and has spent roughly three decades in the insurance business.\n\nHawkins is not running as an outsider. He is one of the central Republican power brokers in Topeka, and his campaign for insurance commissioner leans heavily on that fact. The pitch is that he knows business, regulation, and the Legislature well enough to step into one of the state's most technical statewide offices without a long learning curve.",
  "recordSummary": "His record in this race is tied directly to his legislative leadership. As speaker, Hawkins has been part of the Republican governing core on taxes, abortion, and Medicaid expansion, and his insurance commissioner candidacy turns that broader conservative record into a case for regulatory authority. In public campaign language, he frames government expansion as a threat to liberty and presents himself as a defender of business growth and traditional family politics.\n\nThe most politically important issue in the source file is his handling of Senate Bill 360, the pharmacy benefit manager bill. Kansas Reflector reported that Hawkins repeatedly maneuvered to keep the measure from advancing, even as it had broad bipartisan support and would have tightened state oversight of middlemen in the prescription-drug market. The bill ultimately moved forward anyway, leaving Hawkins open to criticism that he used the speaker's office to block a consumer-protection measure while seeking a job as the state's top insurance regulator.",
  "ownWordsNarrative": "Daniel Hawkins' public campaign voice is bluntly Republican and explicitly pro-Trump. His insurance commissioner site opens with the identity stack [\"Pro-Life. Pro-Gun. Pro-Trump. Conservative Republican.\"](https://www.hawkinsforinsurance.com/) and frames his speakership as a record of stopping Gov. Laura Kelly's agenda, overriding vetoes, cutting taxes, resisting Medicaid expansion, banning sanctuary cities, defending gun rights, and passing anti-abortion and gender-policy bills.\n\nFor the insurance commissioner race, Hawkins presents himself less as a consumer advocate against the insurance industry and more as a conservative regulator who knows the business from the inside. The central promise is to make insurance \"more accessible and affordable\" by increasing options, removing red tape, and making the Kansas Department of Insurance \"the most taxpayer friendly state agency.\" He also emphasizes fraud and securities enforcement, saying insurance fraud drives up rates for everyone.\n\nHis older [Hawkins for Kansas](https://danhawkinskansas.com/) site supplies the ideological baseline: unchecked government expansion limits freedom and hurts business growth; he says he is dedicated to defending life, strengthening the family, and protecting rights. That site's public Facebook feed shows the day-to-day version of the same message: legislative wrap-ups with chambers of commerce and GOP groups, property-tax pressure on Kelly, senior financial-scam protections, pro-life and religious-freedom advocacy, police valor awards, Moody's rating news, and White House recognition for conservative reforms.\n\nThe highest visible engagement signal is not a single viral post but the durability of his public platforms. Indexed profile previews put [@DanHawkinsKS](https://x.com/DanHawkinsKS) at about 2,000 followers, while the older campaign site embeds his Facebook feed and the YouTube political channel appears small at roughly 57-58 subscribers. The campaign's earned-media amplification is stronger than its visible video footprint: Kansas Reflector covered his [May 13, 2025 campaign launch](https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/), and outlets quoted his later statements on property taxes, SNAP audits, budget cuts, Medicaid, child welfare, antisemitism, and religious-freedom legislation.\n\nRecurring topics are taxes, budget restraint, anti-Kelly contrast, Trump alignment, abortion, gun rights, family/gender policy, election integrity, immigration enforcement, and insurance affordability through deregulation. In April 2026, his public messaging leaned heavily into property taxes. After Kelly vetoed HB 2043, [WIBW quoted him](https://www.wibw.com/2026/04/27/gov-kelly-vetoes-property-tax-protest-bill-kansas-house-speaker-responds/) saying the bill gave taxpayers a voice and that property taxes had reached a crisis level. Around the same period, [HPPR/Kansas Reflector quoted](https://www.hppr.org/hppr-news/2026-04-20/food-assistance-audit-finds-potential-1-2-million-paid-to-people-living-outside-kansas?_amp=true) his release calling a SNAP audit a \"Kelly Cover-Up\" issue and arguing Kansans deserve better stewardship of tax dollars.\n\nHawkins also uses public statements to mark law-and-order and cultural lines. A 2023 [WIBW story](https://www.wibw.com/2023/10/18/ks-republicans-call-creation-independent-child-welfare-agency-following-dcf-report-zoey-felix/) quoted a joint Hawkins/Masterson statement calling for an independent Office of Child Advocate after Zoey Felix's death. A 2024 [JNS article](https://www.jns.org/generally-we-feel-very-safe-in-kansas-says-rabbi-of-vandalized-topeka-temple/) embedded his X post condemning antisemitic vandalism at a Topeka synagogue. In 2025, coverage of HB 2311 quoted a joint statement arguing foster families should not face discrimination over religious or moral beliefs.\n\nThere are notable absences. Direct X, Facebook, and Instagram pages were partly login-walled or script-blocked in this environment, so this harvest does not claim full timelines or platform-native engagement counts. Instagram presence is confirmed by campaign links and indexed previews, but no readable post archive surfaced. No obvious candidate-controlled TikTok, Threads, Bluesky, or LinkedIn account was verified. Public messaging also contains little personal storytelling beyond biography: wife Diane, daughters, grandchildren, small-business background, National Guard service, insurance work, and some family details on the campaign sites.\n\nMethodology: I reviewed Hawkins' current insurance campaign site, older campaign site and embedded Facebook feed, official Kansas Legislature profile, linked social accounts, indexed social previews, public X mirrors/snippets, public video/interview pages, and news articles quoting or embedding candidate-attributed statements. The date range is public material visible through May 11, 2026, with current-race messaging beginning at the May 13, 2025 launch and older candidate-attributed social items used only where they show durable account voice. Platform-blocked material is described as blocked; inaccessible content was not fabricated.\n\nDisclaimer: This summary reflects public, candidate-controlled or candidate-attributed messaging available in open web sources at the time of harvest. It is not a complete archive of every post, deleted item, private account interaction, or platform-native engagement metric.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "$417,305.07 (2025 year-end)",
    "narrative": "Hawkins entered 2026 with one of the stronger financial positions in the race. The 2025 filing in the source record showed $417,305.07 raised, $33,295.22 spent, and $384,009.85 cash on hand. The accessible filing also listed donors including Kenny Doonan, Pat Do, Kyle Hoffman, Chad Stafford, Gary Obomy, C. Douglas Blex, and Bill Pickert, along with a $10,000 personal loan.",
    "donors": [
      {
        "name": "Kenny Doonan",
        "amount": "$2,000.00"
      },
      {
        "name": "Chad Stafford",
        "amount": "$1,000.00"
      },
      {
        "name": "Visa",
        "amount": "$1,000.00"
      },
      {
        "name": "Gary Obomy",
        "amount": "$1,041.02"
      },
      {
        "name": "Pat Do",
        "amount": "$350.00"
      },
      {
        "name": "Bill Pickert",
        "amount": "$104.10"
      },
      {
        "name": "Kyle Hoffman",
        "amount": "$100.00"
      },
      {
        "name": "C. Douglas Blex",
        "amount": "$52.05"
      }
    ],
    "undisclosed": "The larger filing should be read alongside Hawkins' statements of substantial interest because of the insurance-industry conflict question.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing SW03DH_202601 and public finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Current campaign website, Older campaign website, Embedded Facebook feed, Kansas Legislature profile, X / Twitter, Facebook, Instagram, YouTube, Indexed social previews, Public X mirrors, Public news coverage. Harvest range: 2025-05-13 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://danhawkinskansas.com/",
      "title": "Danhawkinskansas.Com",
      "publisher": "danhawkinskansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
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
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DH_AT.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://hartforsenate.com/",
      "title": "Hartforsenate.Com",
      "publisher": "hartforsenate.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://www.christydavisforkansas.com/",
      "title": "Christydavisforkansas.Com",
      "publisher": "christydavisforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "social",
      "url": "https://www.facebook.com/christy.davis.710/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://sandyforkansas.com/",
      "title": "Sandyforkansas.Com",
      "publisher": "sandyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "social",
      "url": "https://x.com/speumann",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "social",
      "url": "https://www.instagram.com/speumann/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "social",
      "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00262/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://erikforkansas.com/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "social",
      "url": "https://www.facebook.com/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://mikeforkansas.my.canva.site/",
      "title": "Mikeforkansas.My.Canva.Site",
      "publisher": "mikeforkansas.my.canva.site",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/michael-soetaert",
      "title": "Secure.Actblue.Com",
      "publisher": "secure.actblue.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "social",
      "url": "https://www.facebook.com/michael.soetaert1/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S2KS00097/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "social",
      "url": "https://www.facebook.com/patrickforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/patrick-schmidt",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://www.hawkinsforinsurance.com/",
      "title": "Hawkinsforinsurance.Com",
      "publisher": "hawkinsforinsurance.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "social",
      "url": "https://x.com/danhawkinsks",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.dinahsykes.com/",
      "title": "Dinahsykes.Com",
      "publisher": "dinahsykes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "social",
      "url": "https://www.facebook.com/Sykes4KS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/dinah-sykes",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-focus-on-defeating-gop-incumbent/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/22/kansas-house-speaker-desperately-maneuvers-to-sabotage-vote-on-senate-bill-capping-drug-costs/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bill/",
      "title": "Heartlandsignal.Com",
      "publisher": "heartlandsignal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-26/kansas-house-passes-bill-providing-stricter-regulation-of-prescription-drug-middlemen",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "primary",
      "url": "https://www.fec.gov/data/elections/senate/KS/2026/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S0KS00315/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Daniel_Hawkins_(Kansas",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Dinah_Sykes",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Patrick_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://www.cookpolitical.com/senate/race/488581",
      "title": "Cookpolitical.Com",
      "publisher": "cookpolitical.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/hawkins-reveals-campaign-fundraising-for-insurance-commissioner/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://www.nrsc.org/press-releases/nrsc-calls-for-investigation-into-four-kansas-democrat-senate-candidates-for-violating-the-law-2026-03-11/",
      "title": "Nrsc.Org",
      "publisher": "nrsc.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
      "title": "Freebeacon.Com",
      "publisher": "freebeacon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/12/19/politics/kansas-legislature-republican-democrat/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-12-19/more-kansas-legislative-republicans-jump-ship-become-democrats",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://www.salon.com/2018/12/21/three-kansas-republicans-switch-parties-in-one-week-more-defections-expected/",
      "title": "Salon.Com",
      "publisher": "salon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/04/18/kansas-house-speaker-meets-opposition-as-he-makes-case-against-medicaid-expansion-in-plainville/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://www.jocoelection.org/candidates-elected-officials/daniel-hawkins",
      "title": "Jocoelection.Org",
      "publisher": "jocoelection.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://danhawkinskansas.com/about/",
      "title": "Danhawkinskansas.Com",
      "publisher": "danhawkinskansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW03DH_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://www.insurancebusinessmag.com/us/news/breaking-news/house-speaker-dan-hawkins-eyes-state-insurance-office-535815.aspx",
      "title": "Insurance Business Mag",
      "publisher": "Insurancebusinessmag.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Daniel Hawkins's generated v2 profile."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(DANIEL_HAWKINS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[daniel-hawkins.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
