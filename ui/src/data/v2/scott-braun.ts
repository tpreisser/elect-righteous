/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SCOTT_BRAUN_V2: CandidateFullV2 = {
  "slug": "scott-braun",
  "name": "Scott Braun",
  "party": "R",
  "position": "Ellis County Sheriff",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "Ellis County Sheriff",
  "religion": "Roman Catholic (Diocese of Salina)",
  "education": "Victoria High School graduate (Victoria, KS -- small town in Ellis County)",
  "campaignWebsite": "https://ellisco.net/102/Sheriff",
  "issues": [
    {
      "id": "i-jail-capacity-public-safety-1",
      "title": "Jail Capacity / Public Safety",
      "stated": {
        "text": "Braun has made building a new county jail his top priority, calling it \"a need, not a want\" and tying it to mental-health placement problems and inmate transport burdens.",
        "sourceIds": [
          "s-2",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "In his 2019 candidacy announcement, Braun framed his sheriff campaign around \"Dedication, Experience and Integrity\" after describing his long law-enforcement career, Rotary service, St. Nicholas of Myra Church Council role, Knights of Columbus membership, and professional boards. Source: Hays Post archive, Oct. 31, 2019.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-jail-capacity-public-safety-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On mental health, he said every Kansas sheriff is struggling with mental-health issues and questioned whether people with serious mental illness should be in county facilities. Source: Hays Post, Jan. 11, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-jail-capacity-public-safety-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "On jail capacity, he said the proposed jail is not something he wants personally: \"We need a jail. I don't want it. We need it...\" Source: Hays Post, July 11, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-jail-capacity-public-safety-1"
        }
      ]
    },
    {
      "id": "i-immigration-ice-cooperation-2",
      "title": "Immigration / ICE Cooperation",
      "stated": {
        "text": "Signed an ICE memorandum in 2025 to honor federal detainers, but publicly emphasi",
        "sourceIds": [
          "s-2",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "marshall.senate.gov",
          "observation": "After visiting the Arizona-Mexico border, Braun said a secure border is critical to stopping trafficking of narcotics and human beings and tied fentanyl and trafficking threats back to Kansas communities. Source: Sen. Roger Marshall release, May 31, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-immigration-ice-cooperation-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On the ICE memorandum, Braun emphasized that Ellis County cannot hold someone beyond the legal detainer window and that deputies are not stopping people on the street for immigration investigations. Source: Hays Post, Nov. 20, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-immigration-ice-cooperation-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "In HB 2771 testimony coverage, Braun framed the bill as liability clarity, fiscal responsibility, and taxpayer protection, while also saying community safety remained the main reason for staying in the ICE program. Source: Hays Post, Mar. 6, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "i-immigration-ice-cooperation-2"
        }
      ]
    }
  ],
  "whoTheyAre": "Scott Braun is the elected Ellis County sheriff and a career law-enforcement officer whose public record runs almost entirely through local service. He is a Victoria High School graduate who attended Barton County Community College and Fort Hays State University, then moved up through reserve work, deputy service, narcotics investigation, undersheriff duties, and finally the sheriff's office itself. The current official record also identifies him as president of the Kansas Sheriffs' Association.\n\nBraun's public identity in Ellis County rests on two pillars: law enforcement and Catholic parish life. He is tied to St. Nicholas of Myra Catholic Church in Hays through church council leadership and the Knights of Columbus, which gives him a visible place inside one of the county's most durable civic networks.",
  "recordSummary": "Braun has made jail capacity one of the defining issues of his term. In public meetings and local coverage, he has argued that the county's need for a larger facility is not speculative and not political. He has tied the issue to mental-health placement problems, inmate transport burdens, and the practical cost of housing prisoners elsewhere.\n\nHe has also taken a public role in explaining Ellis County's cooperation with federal immigration enforcement. After signing an ICE memorandum in 2025, Braun said the county could honor detainers only within the legal 48-hour window and made clear that local deputies are not roaming the county doing federal immigration work. That combination of hard-line enforcement language and legal caution has become one of the clearest features of his public record.",
  "ownWordsNarrative": "Scott Braun's public messaging is almost entirely the voice of an incumbent sheriff and law-enforcement administrator, not a conventional campaign brand. The clearest official source is the [Ellis County, Kansas sheriff page](https://ellisco.net/102/Sheriff), which describes patrol, jail, investigation, courthouse, and K-9 duties and links to office Facebook and X accounts. A separate apparent sheriff website, `elliscountysheriff.com`, is for Ellis County, Texas, and was excluded.\n\nBraun's earliest profile-controlled campaign statement in the reviewed set came when he announced for sheriff in 2019. The [Hays Post archive](https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/) described his law-enforcement timeline from reserve deputy and Ellis police officer to deputy, drug-enforcement officer, K-9 handler, narcotics detective, and undersheriff. It also emphasized civic and faith ties: Hays Rotary, St. Nicholas of Myra Church Council, Knights of Columbus, First Call for Help, the Kansas Narcotics Officer Association, and the Ellis County Crisis Intervention Team Council. The campaign line was simple: \"Dedication, Experience and Integrity.\"\n\nThe dominant theme since then is jail capacity. In [December 2023 coverage](https://hayspost.com/posts/bc5f6d5c-cc32-4e29-8666-c9d7f0edd70e), Braun argued that the 72-bed jail could not always function as a true 72-bed facility because of isolation needs, witness separation, inmate behavior, gender, offense levels, and COVID-era effects. In [July 2024](https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d), he said there was no quick fix and framed a new jail as a public-safety need rather than a personal wish: \"We need a jail. I don't want it. We need it.\" His jail argument repeatedly links capacity, taxpayer cost, officer transport time, liability, and mental-health placement.\n\nMental health is the second recurring operational issue. As Kansas Sheriffs' Association president, Braun told [Hays Post](https://hayspost.com/posts/5e9ec24b-53c4-40ff-9c9d-36bfbdf8808a) in January 2024 that sheriffs across Kansas were struggling with mental-health cases and questioned whether some people with serious mental illness should be in county jails at all. In [July 2025 budget coverage](https://hayspost.com/posts/fbac2993-56a7-4ebb-b494-5a194944d2c2), he supported High Plains Mental Health Center's crisis-intervention work as useful not just for the sheriff's office, but also Hays, Ellis, Victoria, and surrounding counties.\n\nOn drugs and forfeiture, Braun speaks as both sheriff and statewide sheriffs' association figure. In [January 2024](https://hayspost.com/posts/5e9ec24b-53c4-40ff-9c9d-36bfbdf8808a), he defended local retention of drug-forfeiture funds, saying seized money supports equipment and controlled buys and warning that losing it would shift costs to taxpayers. He also tied forfeiture to cutting off drug operations' funding. In [April 2025](https://hayspost.com/posts/f373c9f4-8c84-4f33-8102-f67d7ce2927a), he sought opioid settlement money for local law-enforcement training on fentanyl and opioid-overdose death investigations.\n\nImmigration and border enforcement became a major public signal in 2025 and 2026. After joining a Kansas law-enforcement visit to the Arizona-Mexico border, Braun said in a [Sen. Roger Marshall release](https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-visits-southern-border-alongside-kansas-law-enforcement-officials/) that border security is tied to stopping narcotics and human trafficking that affect Kansas. Later, in [Hays Post coverage of Ellis County's ICE memorandum](https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6), he emphasized limits: Ellis County could honor a detainer only within the legal 48-hour window and deputies were not stopping people in the street for immigration investigations.\n\nBraun carried that issue into the Legislature. In [March 2026 coverage](https://hayspost.com/posts/69131eb8-04ac-4b1d-9561-e24c9309ad07) of his HB 2771 testimony, he framed ICE-detainer legislation as liability clarity, fiscal responsibility, county protection, and taxpayer protection. He said Ellis County signed the ICE agreement partly because of grant-funding risk, but also said community protection was the main reason for remaining in the program. The [public bill tracker](https://fastdemocracy.com/bill-search/ks/2025-2026/bills/KSB00012057/) lists Braun's February 25, 2026 testimony as an oral proponent item.\n\nHis office-communication message is practical and service-oriented. In [January 2025](https://hayspost.com/posts/4de7954a-f04e-4832-9c84-46b4aaf24657), Braun promoted a sheriff's office app as a way to push road, weather, offender, jail, tip, and safety information directly to residents instead of relying only on third-party platforms. In [March 2025](https://hayspost.com/posts/df831461-e829-4c10-8fc1-2e905e69de88), he warned residents that the sheriff's office does not demand money or personal information by call, text, or email.\n\nThe largest visible social-audience marker found was his [LinkedIn profile](https://www.linkedin.com/in/scott-braun-cpm-62833366), which publicly showed 455 followers and 452 connections during review. That profile reinforces the same pattern: sheriff, Certified Public Manager, KSA leadership, law-enforcement credentials, Rotary, Knights of Columbus, mental-health/crisis-intervention, Big Brothers Big Sisters, and other civic roles. Its visible activity was mostly likes, not a separate stream of campaign-policy messaging.\n\nThere are also clear absences. I found no verified active campaign website, no reliable personal campaign Facebook page, and no verified Instagram, Threads, TikTok, or YouTube account for Braun. The official county page links to [Facebook](https://www.facebook.com/EllisCoSheriff.KS/) and [X](https://twitter.com/ELCoSheriffKS), but Facebook was login/script blocked and X produced no accessible indexed post archive in this environment. Because of that, this summary does not claim post counts, likes, shares, or comments from those platforms.\n\nMethodology: I reviewed public search results and accessible pages for Scott Braun, Scott J. Braun, Ellis County Sheriff, Ellis County KS Sheriff, county-linked Facebook/X handles, Kansas Sheriffs' Association pages, Hays Post coverage, Kansas Legislature/HB 2771 references, county meeting records, LinkedIn, and civic listings through May 11, 2026. I prioritized official/county pages, profile-controlled public previews, attributed quotes, and public meeting/news records. Disclaimer: this is a public-source messaging summary, not a complete biography or legal assessment; inaccessible, deleted, private, or login-walled social content was not reconstructed or invented.",
  "whereTheyWorship": "Braun is publicly tied to St. Nicholas of Myra Catholic Church in Hays. The parish website is https://stn-church.com/, and the diocesan listing is https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/.",
  "church": {
    "name": "St. Nicholas of Myra Catholic Church, Hays",
    "denomination": "Roman Catholic (Diocese of Salina)",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Roman Catholic (Diocese of Salina). Church Role: Vice Chair, St. Nicholas of Myra Church Council."
  },
  "campaignFinance": {
    "totalRaised": "No clean total verified in reviewed public sources",
    "narrative": "No campaign finance data available online.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online"
      }
    ],
    "reportingPeriod": "2026 cycle",
    "source": "Local reporting, county records, and reviewed public filings"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Ellis County, Kansas sheriff page, County-linked Facebook, County-linked X / Twitter, Kansas Sheriffs Association, Hays Post, Kansas Legislature / HB 2771 references, County meeting records, LinkedIn, Civic listings, Instagram, Threads, TikTok, YouTube, Public search. Harvest range: 2019-10-31 through 2026-05-11.",
  "sources": [
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "2019 campaign announcement",
      "publisher": "Archive.Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Braun.",
        "Observed public online activity mapped to Jail Capacity / Public Safety."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.com: Scott & Michele Schwab, Caleb's Parents",
      "publisher": "Heavy",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Braun."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e9ec24b-53c4-40ff-9c9d-36bfbdf8808a",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Jail Capacity / Public Safety.",
        "On mental health, he said every Kansas sheriff is struggling with mental-health issues and questioned whether people with serious mental illness should be in county facilities. Sou"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3f35aea3-a505-43de-a463-78d6976e129d",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Jail Capacity / Public Safety.",
        "On jail capacity, he said the proposed jail is not something he wants personally: \"We need a jail. I don't want it. We need it...\" Source: Hays Post, July 11, 2024."
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/newsroom/press-releases/senator-marshall-visits-southern-border-alongside-kansas-law-enforcement-officials/",
      "title": "marshall.senate.gov / Marshall.Senate",
      "publisher": "Marshall.Senate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / ICE Cooperation.",
        "After visiting the Arizona-Mexico border, Braun said a secure border is critical to stopping trafficking of narcotics and human beings and tied fentanyl and trafficking threats bac"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3bc2ad3c-f94d-4a73-a42b-77f18e6317d6",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / ICE Cooperation.",
        "On the ICE memorandum, Braun emphasized that Ellis County cannot hold someone beyond the legal detainer window and that deputies are not stopping people on the street for immigrati"
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/69131eb8-04ac-4b1d-9561-e24c9309ad07",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / ICE Cooperation.",
        "In HB 2771 testimony coverage, Braun framed the bill as liability clarity, fiscal responsibility, and taxpayer protection, while also saying community safety remained the main reas"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SCOTT_BRAUN_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[scott-braun.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
