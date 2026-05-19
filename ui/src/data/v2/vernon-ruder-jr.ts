/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const VERNON_RUDER_JR_V2: CandidateFullV2 = {
  "slug": "vernon-ruder-jr",
  "name": "Vernon Ruder Jr.",
  "party": "R",
  "position": "Ellis County Treasurer",
  "electionSlug": "ellis-county-incumbents-off-cycle",
  "incumbent": true,
  "occupation": "County Treasurer",
  "religion": "Roman Catholic (strong indicators)",
  "family": "Vernon Ruder Sr. -- Patriarch (deceased). Obituary confirms the family lineage",
  "campaignWebsite": "https://www.ellisco.net/566/Treasury",
  "issues": [
    {
      "id": "i-property-taxes-1",
      "title": "Property Taxes",
      "stated": {
        "text": "Ruder frames his office decisions around reducing the burden on property taxpayers. His $2.50 motor-vehicle walk-in fee was specifically designed so the motor-vehicle side of the office pays its own costs instead of shifting expenses onto property tax revenue.",
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
          "platform": "Hays Post",
          "observation": "2020 candidate profile: Ruder said he ran after noticing turnover and spending issues in the treasurer's office and said he could decrease spending and increase efficiencies. Source: Hays Post, July 31, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-property-taxes-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2020 landfill/management pitch: Ruder said he ran the landfill like his own money and said he knew he could decrease spending by thousands in the treasurer department. Source: Hays Post, July 31, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-property-taxes-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2020 efficiency ideas: Ruder proposed a kiosk for after-hours tag and tax payments and an app to tell visitors office wait times. Source: Hays Post, July 31, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-property-taxes-1"
        }
      ]
    },
    {
      "id": "i-government-efficiency-2",
      "title": "Government Efficiency",
      "stated": {
        "text": "Has pointed to cutting the treasury budget from roughly $452,000 to about $367,000 as evidence that county offices can do more with less. The motor-vehicle fee alone generated more than $50,000 a year.",
        "sourceIds": [
          "s-2",
          "s-1",
          "s-3",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2020 signed letter: Ruder said he was running to ensure sound investments of taxpayer money, decrease spending, restore trust and professionalism, increase efficiency, work full time, and improve accuracy/ease of transactions without increased taxpayer cost. Source: Hays Post, Oct. 13, 2020.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-government-efficiency-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "His central message is efficiency. In his 2020 candidate profile, Ruder said he entered the treasurer race after seeing turnover and spending issues in the office, and said he could decrease spending and increase efficiencies. He tied that pitch to his landfill-management experience, saying he ran that operation like his own money and knew he could reduce spending by thousands in the treasurer department. Source:...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-government-efficiency-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Ruder's own 2020 letter adds the biography behind that message. He described growing up in Hays, raising his family there, graduating from Thomas More Prep and NCK-Tech, working as a financial advisor, spending 25 years with Pepsi, and managing a multi-state E.A. Sween territory before joining Ellis County in 2017. He framed himself as a lifelong conservative bringing \"30+ years of Private Sector knowledge\" to...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-government-efficiency-2"
        }
      ]
    },
    {
      "id": "i-sales-tax-3",
      "title": "Sales Tax",
      "stated": {
        "text": "Supports the two quarter-cent sales taxes as \"a viable alternative to raising property taxes.\" As a county treasurer, Ruder's public record is administrative rather than ideological. He has not taken clear public positions on abortion, guns, immigration, or other statewide policy debates. His work centers on tax collection, motor-vehicle services, and office management.",
        "sourceIds": [
          "s-2",
          "s-1",
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
          "platform": "Hays Post",
          "observation": "2023 tax-burden framing: Ruder said motor-vehicle operations should be funded with motor-vehicle money and estimated the added fee would generate more than $50,000 while helping reduce the treasury budget from $452,000 in 2022 to $367,000 in 2023. Source: Hays Post, Nov. 20, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-sales-tax-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "I searched Vernon Ruder Jr., Vern Ruder, Vote Ruder for Treasurer, voteruderfortreasurer@gmail.com, Ellis County Treasurer, Ellis County Treasury, Ellis County election results, Hays Post, Facebook, LinkedIn, X/Twitter, Instagram, YouTube, campaign website, candidate filings, county budget book, county commission, motor vehicle fee, QLess, TMP-Marian, and Hays Middle School. I prioritized official county pages,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-sales-tax-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post - Motor vehicle fees and treasurer budget, Nov. 20, 2023",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-sales-tax-3"
        }
      ]
    }
  ],
  "whoTheyAre": "Vernon Ruder Jr. is the Ellis County treasurer, a county official whose public work centers on taxes, motor-vehicle transactions, and the day-to-day administrative functions that most voters notice only when something changes. Before serving as treasurer, public records tie him to finance, operations, and work connected to local government and business administration in Hays.\n\nHe is also part of a well-known Hays family network. He is married to school board member Ruth Ruder, and his family name is also tied to Hays Mayor Mason Ruder. Public records point strongly to a Catholic family and school background in Hays, but they do not clearly identify a current parish membership for Vernon Ruder Jr. himself.",
  "recordSummary": "Ruder's most visible office action has been the decision to add a $2.50 walk-in fee for motor-vehicle transactions. He defended the fee as a state-authori",
  "ownWordsNarrative": "Vernon Ruder Jr.'s public messaging is administrative, local, and practical rather than ideological. The strongest candidate-controlled source is his signed 2020 Hays Post letter, and the strongest attributed sources are Hays Post candidate and office-policy coverage. Through May 11, 2026, I found no verified current campaign website or high-volume social feed. The visible record comes from official Ellis County treasury pages, the Kansas County Treasurers Association, election results, Hays Post reporting, and public civic-event coverage.\n\nHis central message is efficiency. In his 2020 candidate profile, Ruder said he entered the treasurer race after seeing turnover and spending issues in the office, and said he could decrease spending and increase efficiencies. He tied that pitch to his landfill-management experience, saying he ran that operation like his own money and knew he could reduce spending by thousands in the treasurer department. Source: [Hays Post, July 31, 2020](https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4).\n\nRuder's own 2020 letter adds the biography behind that message. He described growing up in Hays, raising his family there, graduating from Thomas More Prep and NCK-Tech, working as a financial advisor, spending 25 years with Pepsi, and managing a multi-state E.A. Sween territory before joining Ellis County in 2017. He framed himself as a lifelong conservative bringing \"30+ years of Private Sector knowledge\" to county government. Source: [Hays Post, Oct. 13, 2020](https://hayspost.com/posts/3a069c69-9317-434a-8454-26da7a61d342).\n\nThe most concrete office-policy example is the motor-vehicle facility fee. In 2023, Ruder defended a $2.50 walk-in motor-vehicle transaction fee as a state-authorized way to fund motor-vehicle operations locally after the state stopped buying office computers and printers. His argument was that the motor-vehicle side of the office should be funded with motor-vehicle money, reducing reliance on property taxpayers. Source: [Hays Post, Nov. 20, 2023](https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494).\n\nThat fee message is paired with budget claims. Ruder estimated the added fee would generate more than $50,000 in a year and said the additional funds helped him reduce the treasury budget from $452,000 in 2022 to $367,000 in 2023. The theme is not anti-fee in the abstract; it is user-fee funding for the office function he says creates the cost. Source: [Hays Post, Nov. 20, 2023](https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494).\n\nHe also talks about customer flow and office access in concrete terms. During the 2020 race he proposed kiosks for tag and tax payments outside normal hours and an app showing wait times. The current Ellis County Treasury page now describes QLess options by text message, app, home kiosk link, and office kiosk for joining the treasurer office queue. Sources: [Hays Post, July 31, 2020](https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4), [Ellis County Treasury](https://www.ellisco.net/566/Treasury).\n\nTransparency and professionalism are another repeated lane. Ruder said in 2020 that he would present monthly financial reports showing where county money was and how it was invested. He also promised to be a working elected official, learn every job in the office, communicate with other department heads, and avoid conflict. In his words, he solves problems and does not create them. Source: [Hays Post, July 31, 2020](https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4).\n\nThe current official office messaging is statutory and service-oriented. Ellis County says the treasurer office handles tax billing, collection, and distribution for taxing entities, county monies directed by law to the treasurer, and Kansas Department of Revenue motor-vehicle work for Ellis County residents. KCTA lists Ruder as having taken office in 2021 and lists services such as online tax payments, escrow options, ACH or wire property-tax payment, notary services, and a 24-hour drop box. Sources: [Ellis County Treasury](https://www.ellisco.net/566/Treasury), [Kansas County Treasurers Association](https://kansastreasurers.org/index.php/directory/ellis-county/).\n\nHis public-service message also appears in school civic events. At a 2024 TMP-Marian voter-education event, Ruder told students voting can make a difference in county and city government by putting people in office who can do a good job for them. At a Hays Middle School event later that year, he recommended getting involved in community and local politics early. Sources: [Hays Post, Feb. 22, 2024](https://hayspost.com/posts/2cb7cdcf-1199-4696-8356-6849a960b247), [Hays Post, Sept. 30, 2024](https://hayspost.com/posts/fd6be90b-bcb4-49d7-bf9a-20194a876c3c).\n\nElectorally, the public record shows him winning the office in 2020 and continuing as incumbent. Hays Post preliminary 2020 results showed Ruder defeating Democrat Julie Mercer and write-ins in the general election. Hays Post preliminary 2024 results showed incumbent Ruder with all precincts reporting, and Ellis County's official election-results page links the official 2024 results. In 2025, Hays Post reported that County Clerk Bobbi Dreiling administered the oath of office to re-elected County Treasurer Vern Ruder. Sources: [Hays Post, Nov. 4, 2020](https://hayspost.com/posts/fd0105da-9c9e-469c-a595-d2221ee9b2fb), [Hays Post, Nov. 6, 2024](https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496), [Ellis County Election Results](https://www.ellisco.net/435/Election-Results), [Hays Post, Oct. 13, 2025](https://hayspost.com/posts/769b9cc3-43f2-4772-9389-e5a962d9a36a).\n\nVisible absences are important. Ruder's 2020 letter gave voteruderfortreasurer@gmail.com and said readers could message him on his Facebook page, but I did not verify accessible public Facebook content during this capture. I found no current campaign website, no usable campaign Facebook archive, no clearly attributable LinkedIn activity, and no public X/Twitter, Instagram, Threads, Bluesky, TikTok, Substack, or candidate-controlled YouTube account. The public message is therefore best understood through the 2020 campaign letter/profile, county office pages, office-policy reporting, election results, and civic-event comments, not through a live campaign-social operation.\n\nMethodology: I reviewed public sources visible through May 11, 2026, including official Ellis County treasury and election pages, the Kansas County Treasurers Association profile, Hays Post candidate coverage, Ruder's signed Hays Post letter, motor-vehicle fee coverage, election results, civic-event articles, and targeted searches for campaign websites and major social platforms. I did not use the reported bad campaignWebsite value and did not fabricate inaccessible social content.\n\nDisclaimer: This summary reflects accessible public, candidate-controlled, official-office, or candidate-attributed messaging. It is not a complete archive of private accounts, deleted posts, login-only social-media activity, every public meeting statement, or every local-news mention.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Vernon Ruder Jr. The public record does point to a Catholic family and school background in Hays, but no current parish participation is clearly documented under his own name.",
  "church": {
    "name": "Specific parish not confirmed",
    "denomination": "Roman Catholic (strong indicators)",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Roman Catholic (strong indicators). 2010 TMP-Marian graduate (Catholic high school)."
  },
  "campaignFinance": {
    "totalRaised": "No clean total verified in reviewed public sources",
    "narrative": "No campaign finance data was available online.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online"
      }
    ],
    "reportingPeriod": "2026 cycle",
    "source": "Local reporting, county records, and reviewed public filings"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Ellis County treasury page, Ellis County election pages, Kansas County Treasurers Association, Hays Post, Facebook, LinkedIn, X / Twitter, Instagram, Threads, Bluesky, TikTok, Substack, YouTube, Public search. Harvest range: 2020-07-31 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3a069c69-9317-434a-8454-26da7a61d342",
      "title": "letter by Vern Ruder",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vernon Ruder Jr..",
        "Observed public online activity mapped to Government Efficiency."
      ]
    },
    {
      "id": "s-2",
      "tier": "primary",
      "url": "https://www.ellisco.net/directory.aspx?EID=129",
      "title": "Ellis County staff directory - Vernon Ruder, Jr.",
      "publisher": "Ellisco",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vernon Ruder Jr.."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://www.zoominfo.com/p/Vernon-Ruder/2569532965",
      "title": "ZoomInfo profile",
      "publisher": "Zoominfo",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vernon Ruder Jr.."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
      "title": "Mason Ruder Elected Mayor -- Hays Daily News",
      "publisher": "Hdnews",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vernon Ruder Jr.."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://kspress.com/news/2025/09/20/forgetting-the-lesson-of-911-is-the-danger-we-face-now-says-ruder",
      "title": "Mason Ruder 9/11 Speech -- Kansas Press Association",
      "publisher": "Kspress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vernon Ruder Jr.."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "HaysPost Candidate Profile: Vernon Ruder Jr.",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Vernon Ruder Jr..",
        "Observed public online activity mapped to Property Taxes.",
        "Observed public online activity mapped to Government Efficiency."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/637d35a7-f280-4818-bef9-6bd7f8d30494",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Sales Tax.",
        "2023 tax-burden framing: Ruder said motor-vehicle operations should be funded with motor-vehicle money and estimated the added fee would generate more than $50,000 while helping re"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(VERNON_RUDER_JR_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[vernon-ruder-jr.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
