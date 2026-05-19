/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const VICKI_SCHMIDT_V2: CandidateFullV2 = {
  "slug": "vicki-schmidt",
  "name": "Vicki Schmidt",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Insurance Commissioner / Pharmacist",
  "born": "September 15, 1955",
  "hometown": "Topeka, Kansas (40+ years)",
  "religion": "Christian (denomination unconfirmed; references \"faith\" in campaign materials)",
  "family": "Two sons (names not publicly identified)",
  "district": "20 (Shawnee and Wabaunsee counties)",
  "campaignWebsite": "https://vickiforgovernor.com",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Has not made abortion a prominent part of her campaign messaging. At the January 2026 GOP debate (which she did not attend), other Republican candidates found unity on opposing abortion and marijuana legali",
        "sourceIds": [
          "s-5",
          "s-7",
          "s-9",
          "s-6",
          "s-22",
          "s-25"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "Campaign-site July 21, 2025 repost of Kansas Reflector article on taxes and abortion. The page includes Schmidt's quote on the 2012 Brownback tax vote: \"It is a vote I regret.\" (source) 4. Campaign-site July 25, 2025 repost of Kansas Reflector governor-race commentary describing Schmidt as \"moderate and overwhelmingly popular among voters.\" (source) 5.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "Kansas Reflector July 21, 2025 candidate interview/article. Accessible quotes include her abortion position, the need for governors to tell the truth, and her plan to run on her record. (source) 6. Campaign Facebook profile metadata, captured 2026-05-11: 3,403 likes; 1,496 talking about this; campaign identity and disclaimer. (source) 7.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-7"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "The campaign site amplifies three Kansas Reflector pieces in its News section: a July 21 interview item, a July 21 article on her record/taxes/abortion, and a July 25 early race analysis. The office LinkedIn page amplifies NASAA content, NAIC participation, K-State financial-education work, Department news releases, and consumer-protection resources. Logged-out X and Facebook capture did not expose a reliable...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        }
      ]
    }
  ],
  "whoTheyAre": "Vicki Schmidt is the Kansas insurance commissioner and a Republican candidate for governor. She was born and raised in Wichita, graduated from the University of Kansas School of Pharmacy, and spent decades working as a pharmacist before moving into electoral politics. Her campaign repeatedly describes her as the first pharmacist to hold statewide elected office in Kansas.\n\nSchmidt and her husband Mike have been married for more than 50 years and have two sons and four grandchildren. Her public image is built less around ideological confrontation than around health-care credentials, consumer protection, and the argument that she already knows how to run a statewide office.",
  "recordSummary": "Schmidt's record stretches across both the Legislature and statewide regulation. As a state senator, she built much of her public identity around health-policy issues such as autism coverage and access to cancer care. As insurance commissioner, she has promoted her office as a practical consumer-protection agency and has made recovered money for Kansans a centerpiece of her pitch for higher office.\n\nThat administrative record is central to her gubernatorial case. Her campaign argues that she has already managed a statewide department, returned money to consumers, and lowered the cost of doing business in Kansas. In a Republican field that includes more overtly ideological rivals, Schmidt is running as the candidate of executive competence and health-policy experience.",
  "ownWordsNarrative": "_A summary of what Vicki Schmidt has publicly said, posted, and amplified across campaign channels, official social pages, public profile metadata, and indexed public records. Drawn from public captures of her campaign site, Facebook, X, Kansas.gov, Kansas Department of Insurance Facebook/X/Instagram/LinkedIn, official releases, and public news coverage from February 2019 through May 11, 2026. We report patterns; we do not interpret intent._\n\nAcross the accessible set reviewed, Schmidt's public profile is built around administrative competence, insurance consumer assistance, and a pharmacist's health-care biography. Her campaign homepage opens with, \"It's time Kansans have a governor that works as hard as they do,\" and ties that pitch to Medicaid drug-rebate recoveries, autism coverage, cancer-care access, insurance recoveries, and lower business costs. The campaign says that as insurance commissioner she has returned more than $206 million to Kansas families and lowered the cost of doing business by more than $96 million. ([source](https://vickiforgovernor.com/))\n\nThe dominant official-channel signal is consumer protection through the Kansas Department of Insurance. On Jan. 15, 2026, the Department announced $56.7 million recovered for Kansans in 2025 and $202.7 million recovered since Schmidt took office in 2019. Schmidt said, \"The work we do consistently puts more money back in the pockets of Kansans,\" and added that when Kansans call the department, \"we're not just going to answer the phone; we're going to help.\" ([source](https://www.insurance.kansas.gov/Home/Components/News/News/226/16))\n\nCost reduction and government efficiency are the second major theme. On Nov. 20, 2025, Schmidt announced a 2026 fee schedule reducing Department fees by an estimated $1.1 million. She said Kansans know she is a \"fiscal hawk,\" delivering more efficient, accessible, and less expensive services. The same release said the Department had lowered fees and reduced the cost of doing business by more than $76 million under her leadership. ([source](https://www.insurance.kansas.gov/Home/Components/News/News/70/16))\n\nHer campaign biography uses the same governing frame. It says she found errors in the Kansas Medical Assistance Program that were costing the state millions and implemented a plan that produced more than $391 million in recouped dollars for the state. It also says she fought in the Senate for insurance coverage for children diagnosed with autism and helped bring cancer care to Kansas. ([source](https://vickiforgovernor.com/))\n\nSchmidt's most substantive campaign interview found in the harvest was the July 21, 2025 Kansas Reflector piece. On the 2012 Brownback-era tax cuts, she said, \"It is a vote I regret.\" On abortion, she said the U.S. Supreme Court did the right thing by returning the issue to states, said she does not believe in \"abortion on demand,\" and said she does believe in reasonable exceptions. On leadership, she said it is important for a governor to tell the truth, and that sometimes leaders have to deliver hard news. ([source](https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/))\n\nThe accessible campaign footprint is compact. The campaign website links Facebook and X, but not Instagram, YouTube, TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, or Reddit. Public Facebook metadata listed 3,403 likes and 1,496 talking about this on May 11, 2026, with profile text presenting Schmidt as a lifelong Kansan and Republican, mother and grandmother, local pharmacist, and governor candidate. ([source](https://www.facebook.com/VickiSchmidtKS)) Indexed public X metadata for [@VickiSchmidtKS](https://x.com/VickiSchmidtKS) reported roughly 2K followers and 1K following, with the same campaign identity line. ([source](https://w.twstalker.com/MaysAaron))\n\nThe office footprint is broader than the campaign footprint. Kansas.gov lists official Insurance Commissioner Facebook and X accounts, while the Department website footer links Instagram, Facebook, X, and LinkedIn. The office Facebook page showed 1,960 likes and 33 talking about this; the office Instagram profile [@kansasdoi](https://www.instagram.com/kansasdoi/) showed 21 followers, 62 following, and 67 posts; and the office LinkedIn page showed 623 followers. ([Kansas.gov source](https://portal.kansas.gov/social-media/), [Department source](https://www.insurance.kansas.gov/Home/Components/News/News/226/16), [Instagram source](https://www.instagram.com/kansasdoi/), [LinkedIn source](https://www.linkedin.com/company/kansas-department-of-insurance))\n\nThe Department LinkedIn page gives the clearest view of ongoing social-content priorities. Visible posts centered hiring, real-life scam education, PBM reform, National Agriculture Day, NAIC participation, financial education, storm-damage claim assistance, and National Consumer Protection Week. A visible PBM reform post quoted Schmidt saying, \"This week, the Kansas Legislature chose to put patients over politics and profits,\" and argued PBMs should not threaten patients, local businesses, or rural communities. The highest visible post-level engagement in the accessible LinkedIn module was 45 likes and 1 comment on a post about Schmidt joining regulators at the 2026 NAIC Spring National Meeting. ([source](https://www.linkedin.com/company/kansas-department-of-insurance))\n\nCancer and mammography are recurring personal and policy-adjacent themes. Kansas Reflector reported Schmidt's June 2023 social-media statement announcing her breast-cancer diagnosis. She asked Kansans to schedule yearly mammograms or encourage women in their lives to do so, saying she was proof the procedure can save lives. She also said cancer patients' stories, determination, and strength were the foundation on which she faced the fight, and added, \"I'm not a very good patient.\" ([source](https://kansasreflector.com/briefs/kansas-insurance-commissioner-has-breast-cancer-expects-full-recovery/))\n\nIn an Oct. 17, 2023 WIBW interview after treatment, Schmidt said, \"I'm very thankful to be on this side of the journey and I'm really doing well.\" She said going public was difficult but the right decision because she knew people who got mammograms afterward and were diagnosed. She also connected the experience to insurance administration, saying medical billing and coverage processes can be hard for consumers to understand and that patients should not be overly burdened while trying to recover. ([source](https://www.wibw.com/2023/10/17/its-humbling-ks-insurance-commissioner-discusses-breast-cancer-journey/))\n\nAn older indexed X post from 2019 shows a more personal legislative-community tone. After Rep. Greg Lewis resigned because of brain cancer, KWCH embedded Schmidt's post saying the Kansas House was losing \"a good man\" and asking people to pray for him in his battle with cancer. ([source](https://www.kwch.com/content/news/Kan-lawmaker-resigns-due-to-battle-with-brain-cancer-506004771.html))\n\nSeveral issue areas were not visible in the accessible material reviewed. The public set did not include reviewed items centered on guns, immigration or border policy, LGBTQ+ policy, religious liberty, school choice, K-12 finance, higher-education affordability, child care, foster care, housing, road and bridge funding, broadband, water policy, or the Ogallala aquifer. The available record is therefore strongest on insurance regulation, consumer assistance, health biography, cost reduction, and record-of-service campaigning, and weaker on those absent policy areas.\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: Feb. 18, 2019 to May 11, 2026. Platforms surveyed: campaign website, Facebook, X, Instagram, LinkedIn, YouTube, Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Kansas.gov, Kansas Department of Insurance pages, and public news coverage. Items examined: 17 accessible campaign/profile/public-record/news items and 0 verified reposts from platform-native feeds. Login-walled or script-blocked material was not counted as reviewed. Engagement was reported only when visible in public metadata or logged-out page modules on capture date. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Her campaign uses faith language, but the available record does not name a parish, congregation, or church website.",
  "campaignFinance": {
    "totalRaised": "$980,372.71 (2025 year-end)",
    "narrative": "Schmidt's 2025 year-end filing showed $980,372.71 raised, $52,211.35 spent, and $928,161.36 cash on hand. That gives her a substantial early war chest without the kind of dominant self-funding pattern seen in some other gubernatorial campaigns. Named contributors visible in the filing include Jeanette Elder, David Pope, James Daniel, Steven Steele, David Kerr, Lisa Stubbs, Robert Regnier, Thomas Blackburn, and Strategic Partners International LLC. The public donor sample suggests a real statewide fundraising operation rather than a symbolic campaign committee.",
    "donors": [
      {
        "name": "Jeanette Elder",
        "amount": "$25"
      },
      {
        "name": "David Pope",
        "amount": "$50"
      },
      {
        "name": "James Daniel",
        "amount": "$75"
      },
      {
        "name": "Steven Steele",
        "amount": "$100"
      },
      {
        "name": "David Kerr",
        "amount": "$250"
      },
      {
        "name": "Lisa Stubbs",
        "amount": "$250"
      },
      {
        "name": "Robert Regnier",
        "amount": "$500"
      },
      {
        "name": "Thomas Blackburn",
        "amount": "$500"
      },
      {
        "name": "Strategic Partners International LLC",
        "amount": "$1,000"
      }
    ],
    "undisclosed": "The filing shows a much larger donor universe than the small sample extracted here, including major out-of-state participation.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and statewide campaign-finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Facebook, X, Instagram, LinkedIn, YouTube, Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Kansas.gov, Kansas Department of Insurance, Public news coverage. Harvest range: 2019-02-18 through 2026-05-11.",
  "sources": [
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/VickiSchmidtKS",
      "title": "source",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vicki Schmidt."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "source",
      "publisher": "Vickiforgovernor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vicki Schmidt.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/2025/07/25/an-early-report-on-the-kansas-governors-race-heavyweight-republicans-and-low-key-democrats/",
      "title": "source",
      "publisher": "Vickiforgovernor",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vicki Schmidt."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "source",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vicki Schmidt.",
        "Observed public online activity mapped to Abortion / Sanctity of Life."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansas Reflector: Vicki Schmidt initiates campaign for governor",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vicki Schmidt."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/",
      "title": "KFL PAC Statement on Schmidt (Oct 27, 2025)",
      "publisher": "Kflpac",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vicki Schmidt."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://mittelpolitan.substack.com/p/insight-kansas-column-for-july-vicki",
      "title": "Mittelpolitan: Schmidt, Schodorf, and the Fate of the Moderate Republican Kansas Woman",
      "publisher": "Mittelpolitan.Substack",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vicki Schmidt."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(VICKI_SCHMIDT_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[vicki-schmidt.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
