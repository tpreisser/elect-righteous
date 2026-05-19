/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ALAINA_CUNNINGHAM_V2: CandidateFullV2 = {
  "slug": "alaina-cunningham",
  "name": "Alaina Cunningham",
  "party": "NP",
  "position": "Hays Vice Mayor / City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Nurse / Fitness Instructor",
  "education": "RN (Registered Nurse) credential -- school not confirmed",
  "campaignWebsite": "https://www.haysusa.com/269/City-Commission",
  "issues": [
    {
      "id": "i-water-1",
      "title": "Water",
      "stated": {
        "text": "Cunningham has consistently treated water supply as a long-term survival issue for Hays. She has spoken publicly about the value of water to the region and has supported the city's efforts to secure a durable supply.",
        "sourceIds": [
          "s-1",
          "s-5",
          "s-2",
          "s-3",
          "s-4",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Her 2023 candidate Q&A is the densest first-person source. She framed her run around public service, saying she wanted to make positive change and that she tries to apply the motto \"Do Good\" in all areas of life. Her stated priorities were sustainable water, economic growth, housing supply, youth retention, retirees and aging residents, budget discipline, infrastructure, and quality of life. (Hays Post, Oct. 25,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On water, Cunningham's own statements put R9 and long-term water supply in survival terms. In her 2023 Q&A, she said securing a sustainable water source was one of the top issues facing Hays and praised conservation and the R9 framework. (Hays Post, Oct. 25, 2023) At a 2025 Hays-Russell R9 update, she said, \"This is about sustainability and survival,\" and \"without it, we don't survive.\" (Hays Post, Aug. 29, 2025)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "1. City of Hays commission page: current role/status, vice mayor listing, commission structure, agenda/minutes and video links. (source) 2. Hays Post appointment coverage: unanimous appointment, swearing-in, nursing/civic background, first public thank-you quote. (source) 3. Hays Post candidate Q&A: first-person platform on water, housing, economic growth, retirees, budget, infrastructure, and \"Do Good.\" (source) 4.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-water-1"
        }
      ]
    },
    {
      "id": "i-housing-and-growth-2",
      "title": "Housing and Growth",
      "stated": {
        "text": "She has linked housing availability and quality of life to whether Hays can keep families and retirees in town. Her public comments focus on sustainable growth rather than rapid expansion.",
        "sourceIds": [
          "s-4",
          "s-8",
          "s-1",
          "s-2",
          "s-3",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "On development incentives, she repeatedly frames incentives as a practical tool for growth rather than an ideological talking point. In late 2023, after commissioners approved development-related agreements, she said, \"We've all agreed that growth is what we want,\" and argued that the first developer paying infrastructure costs should have a chance to recoup costs. (Hays Post) In November 2025, she said of...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-housing-and-growth-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Tiger Media candidate profile: biography, Hays residency, family, RN/group fitness role, civic involvement, and run rationale. (source) 5. Hays Post candidate forum: housing and business development dominated the forum; Cunningham identified youth retention as a top priority. (source) 6. Hays Post election-night article: Cunningham elected to a four-year term with 27 percent of the vote and post-election quote....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-housing-and-growth-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post community center podcast listing: Cunningham discussed The Grove/community center funding request with city staff. (source) 8. Hays Post development agreements story: quote supporting growth and developer cost-recoupment logic. (source) 9. Hays Post R9 water project story: quote framing water as sustainability and survival. (source) 10.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "i-housing-and-growth-2"
        }
      ]
    },
    {
      "id": "i-city-services-and-budget-3",
      "title": "City Services and Budget",
      "stated": {
        "text": "Her record on the commission is more administrative than ideological. She has focused on service delivery, livability, and the unglamorous tradeoffs that dominate city government in western Kansas. Cunningham has not taken clear public positions on issues like abortion, guns, or immigration. As a city commissioner, her public focus has been on local infrastructure and quality-of-life issues rather than state or federal policy debates.",
        "sourceIds": [
          "s-6",
          "s-1",
          "s-2",
          "s-3",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "On budget and tax tradeoffs, she is visible as a constrained-budget voice. During 2026 budget approval, she told staff, \"You brought us a constrained budget which is what we asked for.\" (Hays Post, Sep. 12, 2025) When Rep. Barb Wasinger asked local officials for property-tax-relief ideas, Cunningham warned, \"When we eliminate sources of funding, we're just shifting the burden.\" (Hays Post, Dec. 20, 2025) In April...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-6"
          ],
          "mappedToIssueId": "i-city-services-and-budget-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post fireworks survey story and Post Podcast listing: quote asking residents to provide feedback on fireworks. (story, podcast listing) 11. Hays Post 2026 budget story: constrained-budget quote and 2026 revenue-neutral budget context. (source) 12. City of Hays September 2025 minutes packet: budget hearing/vote, Cunningham vote, and public safety reminder. (source) 13.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-7"
          ],
          "mappedToIssueId": "i-city-services-and-budget-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post November 2025 development story: quote supporting Agiliti incentive value. (source) 14. Hays Post incentives story: quote that conversations with developers indicate incentives are needed to bring projects to Hays. (source) 15. Hays Post December 2025 property-tax-relief discussion: quote about shifting burden when funding sources are eliminated. (source) 16.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-8"
          ],
          "mappedToIssueId": "i-city-services-and-budget-3"
        }
      ]
    }
  ],
  "whoTheyAre": "Alaina Cunningham is a Hays city commissioner and, since January 2026, the city's vice mayor. Public profiles describe her as a registered nurse and ACE-certified group fitness instructor at HaysMed's Center for Health Improvement. She moved to Hays from Dodge City in 2010 and built her local profile through healthcare work, parent involvement, and civic boards before stepping into city government.\n\nShe first joined the commission by appointment after Michael Berges left for the Ellis County Commission, then won a full term in 2023. Public records also place her on the HaysMed Foundation board and the Downtown Hays Development Corporation board. That background has made her one of the commission's more community-facing members rather than one of its louder political personalities.",
  "recordSummary": "Cunningham's record on the commission has been tied to the unglamorous issues that dominate city government in western Kansas: water, housing supply, growth, and budget tradeoffs. In candidate forums and local coverage, she has treated water as a long-term survival issue for Hays and linked housing and quality of life to whether the city can keep families and retirees in town.\n\nHer rise to vice mayor in the 2026 commission reorgani",
  "ownWordsNarrative": "_A summary of what Alaina Cunningham has publicly said, posted, and had attributed to her across city pages, public meeting records, local candidate Q&As, local news, podcast listings, and public profile traces. Drawn from public captures from December 27, 2022 through May 11, 2026. We report patterns; we do not interpret intent._\n\nCunningham's accessible public message is more civic-administrative than campaign-social. The City of Hays currently lists her as vice mayor, and local coverage says the commission elected Mason Ruder mayor and Cunningham vice mayor when the governing body reorganized on January 8, 2026. ([City of Hays](https://www.haysusa.com/269/City-Commission), [Hays Post](https://hayspost.com/posts/21208822-3905-4a26-a33d-5003cf6f8f08)) Tiger Media Network reported that she and Ruder were not on the 2025 city ballot, confirming she remained midterm while the new 2026 body formed. ([Tiger Media Network](https://tigermedianet.com/?p=93385))\n\nHer self-description starts with service. When she was sworn in after being appointed to Michael Berges' vacated commission seat, she thanked commissioners and said she was excited to serve the community. ([Hays Post](https://hayspost.com/posts/c8cd14ed-94b7-4507-8a9c-ad71038ac5b6)) In her 2023 candidate Q&A, she said her interest in the office came from wanting to make positive change and from a duty to serve the public and \"Do Good.\" She tied that service frame to her work as a registered nurse, her time as a group fitness instructor, and local boards including Downtown Hays Development Corporation, HaysMed Foundation, Hays High Academic Booster Club, and O'Loughlin PTA. ([Hays Post](https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055), [Tiger Media Network](https://tigermedianet.com/?p=75270))\n\nWater is one of her most direct issue signals. In the 2023 Q&A, she named a sustainable water source as a top challenge, praised local conservation, and said the R9 Ranch framework could give Hays a long-term supply. ([Hays Post](https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055)) In 2025 R9 coverage, her language sharpened: \"This is about sustainability and survival,\" she said, adding that without it, Hays does not survive. ([Hays Post](https://hayspost.com/posts/72cef8d3-79bf-4085-b070-bccbdc589f9d))\n\nHousing, growth, and incentives recur more often than any other accessible theme. Cunningham talks about retaining young adults, supporting all ages, meeting retiree housing needs, and using incentives to make development feasible. In her candidate Q&A, she argued Hays needed diversified housing and more ways to attract developers and builders. ([Hays Post](https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055)) In later meeting coverage, she defended development incentives as a practical growth tool, saying \"We've all agreed that growth is what we want\" and that developers who put in initial infrastructure costs should have a way to recoup them. ([Hays Post](https://hayspost.com/posts/eeb37c70-d05e-427e-bdb6-b673010bd8af))\n\nHer development message is not simply pro-business in the abstract; it is tied to workforce, housing, and community scale. In November 2025, she said the economic benefit from Agiliti's expansion made the incentives valuable to the community. ([Hays Post](https://hayspost.com/posts/4d49c8ec-b445-4b28-a49c-d154c709104f)) In another incentives discussion, she agreed Hays is a desirable place but said conversations with developers showed that \"without incentives, we just can't get anyone here.\" ([Hays Post](https://hayspost.com/posts/a308442f-a0fc-49ea-b6a1-b905513a368b))\n\nBudget and tax comments show a tradeoff-oriented style. She supported the city's 2026 revenue-neutral budget and told staff, \"You brought us a constrained budget which is what we asked for.\" ([Hays Post](https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69)) When state property-tax-relief ideas came before local officials, she warned that eliminating funding sources can just shift the burden. ([Hays Post](https://hayspost.com/posts/31a9d9f8-0883-480f-aada-22ac084f09b9)) In April 2026 budget-prep coverage, she said residents should understand early that property-tax caps could affect city services and amenities. ([Hays Post](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb))\n\nQuality of life is usually framed through practical amenities rather than broad ideology. She has discussed parks, community center needs, retiree housing, youth retention, and resident-facing services. Hays Post quoted her on The Grove/community center issue saying, \"You need every generation to make a community work.\" ([Hays Post](https://hayspost.com/posts/7da8e265-e8c0-45c8-9f5d-0fb799fb1d3f)) During a budget retreat discussion on parks, she suggested the city think beyond identical park equipment and redesign parks for specific groups. ([Hays Post](https://hayspost.com/posts/909306ea-6223-4960-bd5f-99c19bb83817))\n\nOn contentious local ordinances, her visible posture is consultative. During the fireworks survey discussion, she called fireworks a \"hot topic\" and asked residents to provide opinions so commissioners could understand what the broader community wanted. ([Hays Post](https://hayspost.com/posts/26608269-25e1-4f29-b80f-d2edbb3bba3d)) In backyard-chickens coverage, she did not make a large ideological argument; she relayed that Cottonwood Extension could prepare educational materials on proper urban chicken care if the ordinance changed. ([Hays Post](https://hayspost.com/posts/c8f8c9de-3d46-470d-8ae1-7efbe793a460))\n\nThe highest visible public attention metric is electoral, not social. Hays Post reported that Cunningham received 27 percent of the vote in November 2023 and won a four-year term. After the result, she said she was honored to be chosen and wanted to keep bettering Hays and \"doing good for Hays as a whole.\" ([Hays Post](https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31)) No verified post-level social engagement was visible in the public capture.\n\nThe absences matter. No candidate-controlled campaign website or clear campaign social page surfaced. A personal Facebook profile was found but was not publicly reviewable in logged-out capture. No verified public campaign account was found on X/Twitter, Instagram, TikTok, YouTube, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, or Reddit. An indexed LinkedIn trail was ambiguous because a direct URL in existing project notes pointed in search results to a different Alaina Cunningham outside Kansas, so no LinkedIn activity was treated as hers. ([harvest](social-harvest.md#visible-absences))\n\nAcross the accessible set, Cunningham does not publicly center national partisan issues. I found no candidate-controlled or candidate-attributed messaging focused on abortion, guns, immigration, Donald Trump, Joe Biden, national parties, LGBTQ issues, school curriculum, or religion. Her visible words stay close to city-government work: water, housing, growth, incentives, budgets, property-tax tradeoffs, parks, community amenities, and listening to residents. ([harvest](social-harvest.md#topic-share-analysis))\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: December 27, 2022 through May 11, 2026, beginning with the public appointment period for Cunningham's Hays City Commission service. Sources surveyed included the City of Hays commission page and agenda/minutes packets, public meeting/video entry points, Hays Post, Tiger Media Network, HaysMed, Downtown Hays Development Corporation, Facebook, LinkedIn, X/Twitter, Instagram, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, podcast indexes, and broad public web search. Login-walled, script-blocked, or otherwise inaccessible social feeds were not counted as reviewed content. We report visible patterns and documented absences; we do not infer private views or inaccessible account activity.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No clean total verified in reviewed public sources",
    "narrative": "No campaign finance data was available online.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online"
      }
    ],
    "reportingPeriod": "most recent public materials reviewed",
    "source": "Local reporting, county records, and reviewed public filings"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: City of Hays pages, City agenda/minutes packets, Public meeting/video entry points, Hays Post, Tiger Media Network, HaysMed, Downtown Hays Development Corporation, Facebook, LinkedIn, X / Twitter, Instagram, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, Podcast indexes, Public search. Harvest range: 2022-12-27 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "about.me profile",
      "publisher": "About",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Alaina Cunningham."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
      "title": "Avvo attorney profile",
      "publisher": "Avvo",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Alaina Cunningham."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/alaina-cunningham/",
      "title": "HaysMed",
      "publisher": "Haysmed",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Alaina Cunningham."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.linkedin.com/in/aaron-cunningham-653b3094/",
      "title": "LinkedIn",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Alaina Cunningham."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Guidon (Hays High) -- Cunningham Speaks to Students",
      "publisher": "Hayshighguidon",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Alaina Cunningham."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://www.hdnews.net/city-commissioners-sworn-in-ruder-elected-mayor-cunningham-vice-mayor/",
      "title": "Mason Ruder Elected Mayor -- Hays Daily News",
      "publisher": "Hdnews",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Alaina Cunningham."
      ]
    },
    {
      "id": "s-8",
      "tier": "social",
      "url": "https://www.linkedin.com/in/alaina-cunningham-4436ba1/",
      "title": "Alaina Cunningham",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Alaina Cunningham."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5552ce0e-bfbc-418e-addf-a4318ee25055",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water.",
        "Her 2023 candidate Q&A is the densest first-person source. She framed her run around public service, saying she wanted to make positive change and that she tries to apply the motto"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Hays Post / Haysusa",
      "publisher": "Haysusa",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water.",
        "1. City of Hays commission page: current role/status, vice mayor listing, commission structure, agenda/minutes and video links. (source) 2. Hays Post appointment coverage: unanimou"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eeb37c70-d05e-427e-bdb6-b673010bd8af",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Housing and Growth.",
        "On development incentives, she repeatedly frames incentives as a practical tool for growth rather than an ideological talking point. In late 2023, after commissioners approved deve"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Hays Post / Tigermedianet",
      "publisher": "Tigermedianet",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Housing and Growth.",
        "Tiger Media candidate profile: biography, Hays residency, family, RN/group fitness role, civic involvement, and run rationale. (source) 5. Hays Post candidate forum: housing and bu"
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5b605d19-50a6-448c-90b0-627df8c9bdec/",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Housing and Growth.",
        "Hays Post community center podcast listing: Cunningham discussed The Grove/community center funding request with city staff. (source) 8. Hays Post development agreements story: quo"
      ]
    },
    {
      "id": "s-social-crossref-6",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7d615ae1-9b48-4ebd-9200-7c593c85db69",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to City Services and Budget.",
        "On budget and tax tradeoffs, she is visible as a constrained-budget voice. During 2026 budget approval, she told staff, \"You brought us a constrained budget which is what we asked "
      ]
    },
    {
      "id": "s-social-crossref-7",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/26608269-25e1-4f29-b80f-d2edbb3bba3d",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to City Services and Budget.",
        "Hays Post fireworks survey story and Post Podcast listing: quote asking residents to provide feedback on fireworks. (story, podcast listing) 11. Hays Post 2026 budget story: constr"
      ]
    },
    {
      "id": "s-social-crossref-8",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4d49c8ec-b445-4b28-a49c-d154c709104f",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to City Services and Budget.",
        "Hays Post November 2025 development story: quote supporting Agiliti incentive value. (source) 14. Hays Post incentives story: quote that conversations with developers indicate ince"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ALAINA_CUNNINGHAM_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[alaina-cunningham.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
