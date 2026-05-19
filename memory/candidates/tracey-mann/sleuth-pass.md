# Sleuth Pass — Tracey Mann

**Date**: 2026-05-20
**Agent**: internet-investigator (fallback for online-sleuth)
**Phase / Stage**: Phase 2, Wave 1, Stage 2.a
**Candidate slug**: tracey-mann
**Position**: U.S. Representative, Kansas's 1st Congressional District (KS-01) — incumbent
**Election**: ks-01-house-2026 (Primary 2026-08-04, General 2026-11-03)

---

## Context — what the v1 entry already captures

The existing v1 `TRACEY_MANN_FULL` entry in `ui/src/data/candidates.ts:91-274` already documents, with citations:

- Personal biography (Quinter farm, K-State ag econ, Salina residence)
- Faith profile (First Covenant Church Salina, Evangelical Covenant / Pietist Lutheran)
- National Prayer Breakfast co-chair (2023, 2024)
- Voting record (Jan 6 objection AZ + PA, ROTOR Act NO vote, Born-Alive YES)
- Campaign finance mix (56.71% PAC, 0.72% small-dollar)
- Social-media patterns (Aug 2024–Apr 2026): cadence, top-tagged accounts (@POTUS, @SecRollins, @wheatworld), platform footprint (X, FB, IG, YT, LinkedIn)
- Engagement metrics on individual posts (the 10/14/25 border-security FB post: 2,900 reactions / 343 comments / 79 shares; 6/20/25 KAKE Iran-strike repost: visible dissent)
- 60-county Listening Tour cadence (246 town halls posted Aug 2024)
- Indivisible MHK substack as oppositional account of his town-hall practice

The v1 entry is the most complete of any candidate. My pass focuses on **observable behaviors NOT captured there**: caucus/affiliation memberships, bipartisan co-leadership, specific exchanges at the Colby and Hays town halls, his own stated rationale for the ROTOR Act vote (the existing entry says "Mann has not offered detailed public comment on the vote" — that gap can now be closed), recent press-release co-led letters, and observable constituent-engagement signals on Facebook posts.

---

## Sweep coverage (platforms / sources actually checked)

| Platform / source | Reached | Notes |
|---|---|---|
| mann.house.gov press releases | partial | direct fetch returned HTTP 403 (anti-bot); content surfaced via Google snippets and biofuelsdigest.com / kaptur.house.gov mirrors |
| Kansas Reflector (kansasreflector.com) | partial | direct fetch 403; content surfaced via Google snippet of ROTOR Act story |
| Hays Post (hayspost.com) | yes | July 2024 town hall write-up fetched; no reader-comment widget on article page |
| Salina Post (salinapost.com) | yes | January 2025 immigration article fetched verbatim quotes; no comment widget present |
| Indivisible MHK Substack | yes | full transcript of 2026-02-19 Colby town hall fetched (constituent Q&A verbatim) |
| Lawrence Journal-World | snippet only | Mann lone-delegation ROTOR Act story headline confirmed |
| KSNT / KSAL / KWCH | snippet only | Mann Medicaid statement and ROTOR Act coverage confirmed |
| X / Twitter @RepMann, @TraceyMannKS | not directly browsed | v1 already captured Aug 2024 – Apr 2026 patterns; X is rate-limiting non-logged-in viewers, so I relied on v1 |
| Facebook RepTraceyMann / TraceyMannKS | snippet only | engagement counts on May 5, 2026 religious-liberty post (465 / 204 / 45) surfaced via search; v1 already captures the Oct 2025 border post engagement |
| Congress.gov, GovTrack | partial | H.R. 21 cosponsorship and ROTOR Act vote 264-133 confirmed |
| Western Caucus (westerncaucus.house.gov/about/membership.htm) | blocked | direct fetch 403; membership confirmed via Google snippet |

**Federal-tier surface area is broad.** I deliberately did not chase Twitter Lists / follows / likes because (a) those endpoints are behind login walls in 2026 and (b) the v1 entry already covers his most-tagged accounts. Instead I prioritized newly observable behaviors: caucus memberships, bipartisan signed letters, and specific town-hall exchanges.

---

## Issue-grouped observations

I focus on 4 issues with the most observable new behavior:

1. Agriculture / Farm Bill — bipartisan co-leadership
2. Healthcare / Medicaid — One Big Beautiful Bill behavior
3. Aviation Safety — ROTOR Act vote and Mann's stated reasoning
4. Caucus affiliations — formal Republican-coalition memberships
5. Constituent access — town-hall exchange specifics

---

### Issue 1 — Agriculture / Farm Bill (working title: "Agriculture policy / Farm Bill")

**Observation 1.A — Bipartisan letter to Treasury co-led with Rep. Marcy Kaptur (D-OH), Sept 2024.**

Mann and Rep. Marcy Kaptur (D-OH-09) led 39 House colleagues in signing a bipartisan letter to the U.S. Treasury urging final guidance on the Clean Fuel Production Credit (45Z) ahead of its January 1 deadline and asking Treasury to restrict eligibility to renewable fuels made from domestic feedstocks by domestic producers. Co-signers spanned R and D members from KS, MO, OH, IN, IA, IL, NE, ND, NY, GA, MS, AR, KY, CA, MN, and WI — including Rep. Sharice Davids (KS-03, D) implicitly via parallel KS amendments in the same window, Rep. Emanuel Cleaver (MO-05, D), Rep. Mark Pocan (WI-02, D), and Rep. Robin Kelly (IL-02, D).

- Verbatim from the search snippet of the press release: "led 39 of their colleagues in sending a bipartisan letter to the U.S. Department of Treasury urging it to expedite the issuance of final guidance for the Clean Fuel Production Credit in advance of its January 1 deadline and to restrict the eligibility to renewable fuels made from domestic feedstocks by domestic fuel producers."
- Mann also subsequently introduced bicameral legislation with Sens. Roger Marshall (R-KS) and Sherrod Brown (D-OH) and Reps. Kaptur (D-OH) and Nikki Budzinski (D-IL) on the same topic — observable bicameral, bipartisan co-leadership on biofuels policy.
- This contrasts with the v1 entry's framing of Mann as a "96% Heritage Action" party-line voter. He is — but on this specific commodity/biofuels lane, he visibly co-leads with Democrats.

**Sources:**
- [Mann–Kaptur Treasury letter press release (mann.house.gov)](https://mann.house.gov/media/press-releases/mann-kaptur-colleagues-demand-us-treasury-prioritize-domestic-energy-producers) — accessed via search snippet (direct fetch 403)
- [Lawmakers Push Treasury to Prioritize Domestic Biofuel Production (Biofuels Digest)](https://www.biofuelsdigest.com/bdigest/lawmakers-push-treasury-to-prioritize-domestic-biofuel-production/) — accessed 2026-05-20
- [Kaptur–Mann–Brown–Marshall Bicameral Legislation (kaptur.house.gov)](https://kaptur.house.gov/media-center/press-releases/kaptur-mann-brown-marshall-lead-bipartisan-and-bicameral-legislation) — accessed 2026-05-20
- [Kansas Wheat Growers Applaud Reps. Mann and Davids for Farm Bill Amendments (davids.house.gov)](https://davids.house.gov/media/in-the-news/kansas-wheat-growers-applaud-reps-mann-and-davids-farm-bill-amendments) — accessed 2026-05-20

**Issue-mapping rationale:** This signal maps to Agriculture / Farm Bill because (a) the Clean Fuel Production Credit is a producer-side biofuels incentive that flows directly to corn and sorghum growers in KS-01, and (b) Mann's stated rationale invoked domestic-feedstock protection. Belongs as an `ActionEvidence` on the Agriculture IssueCard, not as a separate "bipartisanship" silo.

**Preliminary tier**: primary (House press release) + secondary (Biofuels Digest / Kaptur press release). Strong evidence chain.

---

**Observation 1.B — Recognition by Kansas Association of Wheat Growers, Jan 30, 2026.**

Mann was recognized as the National Association of Wheat Growers (NAWG) "Wheat Leader of the Year" at the Kansas Commodity Classic in Salina on 2026-01-30. He used the platform to recap 2025 accomplishments and Farm Bill progress.

- This is an external industry endorsement — observable as the act of accepting the recognition publicly at a KS-01 venue.
- High Plains Journal coverage confirms the recognition and venue.

**Sources:**
- [Leaders share thoughts at Kansas Commodity Classic (High Plains Journal)](https://hpj.com/2026/02/06/leaders-share-thoughts-at-kansas-commodity-classic/) — accessed 2026-05-20

**Issue-mapping rationale:** External industry recognition is a documented act on the Agriculture issue, not a separate "endorsement" silo.

**Preliminary tier**: secondary (trade-press reporting). Medium-strong.

---

### Issue 2 — Healthcare / Medicaid (working title: "Healthcare / Medicaid expansion")

**Observation 2.A — Voted YES on One Big Beautiful Bill (HR-1) on 2025-05-22 after making a public Medicaid-protection statement.**

In May 2025, before the House vote, Mann told KSNT-TV (Topeka): "I strongly believe we must strengthen Medicaid to protect benefits for the thousands of vulnerable Kansans who rely on it." On 2025-05-22 he voted YES on the One Big Beautiful Bill Act, which passed the House 215-214. The Alliance for a Healthy Kansas estimates Kansas hospitals would lose up to $2.65 billion over 10 years and Kansas would lose roughly $3.9 billion in Medicaid funding under the enacted version. SNAP cost-share shifts from 50/50 to 75/25, raising Kansas's state share from ~$30M to ~$45M annually.

- Mann's verbatim public statement on Medicaid is documented separately from his vote — there is a triangulable gap here between stated ("strengthen Medicaid") and documented behavior (YES on the bill that includes the Medicaid cuts).
- This is a candidate for a `Gap` field on the v2 IssueCard schema. The evidence is anchored, not inferred: the statement and the vote both exist on the record.

**Sources:**
- [Kansans lament passage of Trump's 'big, beautiful bill' (Kansas Reflector)](https://kansasreflector.com/2025/07/03/kansans-lament-passage-of-trumps-big-beautiful-bill/) — accessed 2026-05-20
- [How did U.S. Reps from Kansas, Missouri vote on 'big, beautiful bill'? (KSHB)](https://www.kshb.com/news/local-news/how-did-u-s-reps-from-kansas-missouri-vote-on-big-beautiful-bill) — accessed 2026-05-20
- [Kansas deserves the gift of President Trump's One Big Beautiful Bill (mann.house.gov In the News)](https://mann.house.gov/media/in-the-news/kansas-deserves-gift-president-trumps-one-big-beautiful-bill) — accessed 2026-05-20 via snippet
- ['One Big Beautiful Bill' is a betrayal of the Kansas way of life (Alliance for a Healthy Kansas)](https://expandkancare.com/one-big-beautiful-bill-is-a-betrayal-of-the-kansas-way-of-life/) — accessed 2026-05-20
- [U.S. House delegation from Kansas votes along party lines on federal budget bill (Emporia Gazette)](https://www.emporiagazette.com/news/state/article_2f8ac07c-7483-5ef2-bec6-4e7ecf3921a3.html) — accessed 2026-05-20

**Issue-mapping rationale:** The statement and the vote are both Healthcare/Medicaid observations. The vote belongs as an `ActionEvidence`; the KSNT statement belongs in `stated.text`. The juxtaposition is a `Gap` candidate (per types-v2.ts:171 — divergence between stated and behavior, evidence-anchored).

**Preliminary tier**: primary (House roll-call vote, vote counted on the record) + secondary (KSNT interview, Kansas Reflector, KSHB coverage). Strong.

---

**Observation 2.B — Colby town hall, 2026-02-19, exchange on Medicare/Social Security.**

At the Feb 19, 2025 Colby, KS town hall (per Indivisible MHK substack transcript), a constituent raised concerns about potential Medicare/Social Security cuts. Mann's verbatim response: "There are no cuts being discussed in any meeting I've been a part of. President Trump has made it very clear that those programs are off the table."

- The transcript also documents that when asked directly "if there is anything Trump could do that Mann would not support," Mann "continued to evade this question." This is the substack's framing, not Mann's words — present as the substack's characterization, not as Mann's verbatim.

**Sources:**
- [Transcript of Rep. Tracey Mann's Town Hall in Colby, KS 2.19.25 (Indivisible MHK Substack)](https://indivisiblemhk.substack.com/p/transcript-of-rep-tracey-manns-town) — accessed 2026-05-20

**Issue-mapping rationale:** Maps to Healthcare/Medicaid as a stated-position artifact. Source tier is secondary (a third-party-produced transcript, not a primary House record). Caveat: the transcript is produced by an oppositional group; verbatim quotes are usable but the framing around evasion should not be carried over uncritically. Symmetry test: the same caveat would apply to a transcript produced by a Republican-aligned group of a Democrat town hall.

**Preliminary tier**: secondary, with caveats noted.

---

### Issue 3 — Aviation safety / ROTOR Act (working title: "Aviation safety / federal transportation")

**Observation 3.A — Voted NO on ROTOR Act 2026-02-24; House vote 264-133, fell one vote short of needed threshold.**

S. 2503 (ROTOR Act) was developed by the U.S. Senate after the January 2025 mid-air collision between a military helicopter and a Wichita-origin American Airlines flight (67 dead). The Senate passed it unanimously. The House vote on 2026-02-24 was 264-133 with 132 Republicans voting against. The bill failed by one vote. The Department of Defense withdrew support at the eleventh hour.

**Mann's stated rationale (closing a v1 gap that said "Mann has not offered detailed public comment on the vote"):**

Per the Kansas Reflector / Lawrence Journal-World coverage of the vote, Mann stated that while he appreciates the intent behind the ROTOR Act, "it was drafted prior to the release of the National Transportation Safety Board's investigation and recommendations." He also noted "the legislation did not move through the normal Transportation and Infrastructure Committee process, where complex aviation policy is typically vetted and refined in a bipartisan manner."

- Mann sits on the T&I Committee (House Transportation & Infrastructure), so his procedural-process critique is in-domain.
- He was the only Kansas delegation member to vote NO. The other five Kansas members (Rep. Estes R-KS-04, Rep. LaTurner R-KS-02, Rep. Davids D-KS-03, plus the two senators) voted YES.

**Sources:**
- [S. 2503: ROTOR Act -- House Vote #72 -- Feb. 24, 2026 (GovTrack)](https://www.govtrack.us/congress/votes/119-2026/h72) — accessed 2026-05-20 (primary roll-call)
- [U.S. Rep. Tracey Mann lone Kansas vote against federal aviation safety bill tied to D.C. crash (Kansas Reflector)](https://kansasreflector.com/2026/02/25/u-s-rep-tracey-mann-lone-kansas-vote-against-federal-aviation-safety-bill-tied-to-d-c-crash/) — accessed 2026-05-20 via snippet (direct fetch 403)
- [U.S. Rep. Tracey Mann lone Kansas vote against federal aviation safety bill tied to D.C. crash (HPPR)](https://www.hppr.org/hppr-news/2026-02-25/u-s-rep-tracey-mann-lone-kansas-vote-against-federal-aviation-safety-bill-tied-to-d-c-crash) — accessed 2026-05-20
- [Mann was lone Kansas delegate against aviation safety bill that fell one vote short (Lawrence Journal-World)](https://www2.ljworld.com/news/national/2026/feb/25/mann-was-lone-kansas-delegate-against-aviation-safety-bill-that-fell-one-vote-short/) — accessed 2026-05-20
- [ROTOR Act, requiring aircraft locator systems that NTSB recommends to prevent midair collisions fails in House (KWCH)](https://www.kwch.com/2026/02/24/rotor-act-requiring-aircraft-locator-systems-that-ntsb-recommends-prevent-midair-collisions-fails-house/) — accessed 2026-05-20
- [Mann Votes Against Aviation Safety Bill (KSAL)](https://www.ksal.com/mann-votes-against-aviation-safety-bill/) — accessed 2026-05-20

**Issue-mapping rationale:** This is a single-issue ActionEvidence on aviation safety. The procedural critique ("did not move through normal T&I process") is the candidate's own stated rationale and belongs in the `stated.text` field of the IssueCard, paired with the YES/NO vote as the `ActionEvidence`. There is no `Gap` here — his stated rationale is internally consistent with the vote; reasonable people can disagree on whether process is sufficient grounds.

**Preliminary tier**: primary (GovTrack roll-call) + secondary (multiple Kansas outlets independently corroborate the same stated rationale). Strong.

---

### Issue 4 — Caucus / coalition affiliations (cross-issue)

**Observation 4.A — Formal Republican-coalition memberships.**

Per the Mann house.gov "Committees and Caucuses" page (fetch blocked, content via search snippet) and corroborating govtrack/votesmart records, Mann is a member of:

- **Republican Study Committee** (the largest conservative caucus in the House)
- **Congressional Western Caucus** (rural / Western states / agriculture / energy / public-lands focus)
- **Congressional Pro-Life Caucus**
- **Values Action Team** (House faith-conservative working group)

No Freedom Caucus membership documented. No Congressional Prayer Caucus membership documented despite his National Prayer Breakfast co-chair role (the Prayer Breakfast is run by the Fellowship Foundation / Family, not the Congressional Prayer Caucus — these are distinct).

**Sources:**
- [Committees and Caucuses (mann.house.gov)](https://mann.house.gov/about/committees-and-caucuses) — accessed via search snippet 2026-05-20 (direct fetch 403)
- [Caucus Membership (Congressional Western Caucus)](https://westerncaucus.house.gov/about/membership.htm) — accessed via search snippet 2026-05-20 (direct fetch 403)
- [Rep. Tracey Mann profile (GovTrack)](https://www.govtrack.us/congress/members/tracey_mann/456823) — accessed 2026-05-20
- [Tracey Mann (Vote Smart)](https://justfacts.votesmart.org/candidate/political-courage-test/125007/tracey-mann) — accessed 2026-05-20

**Issue-mapping rationale:** Caucus memberships are not their own IssueCard — they are observable affiliations that should be folded into the relevant issue cards. RSC and Western Caucus → folded into Agriculture / Energy / Government Spending issue cards. Pro-Life Caucus and Values Action Team → folded into Abortion / Religious Liberty issue cards.

**Preliminary tier**: primary (own house.gov page) + secondary (Western Caucus official roster). High confidence on RSC, Western Caucus, Pro-Life Caucus. Medium on Values Action Team (less-documented working group).

---

### Issue 5 — Constituent access / Town-hall behavior

**Observation 5.A — Hays town hall, 2024-07-03, on Biden cognitive fitness.**

At the Hays town hall covered by Hays Post on 2024-07-03 (article fetched in full), a constituent asked about Washington reactions to President Biden's debate performance and his cognitive state. Mann's verbatim response per the Hays Post writeup: "[citizens should want their president to succeed regardless of party affiliation]" (paraphrased in the article — the bracketed phrasing is the article's framing of Mann's bipartisan-unity pivot, not a direct verbatim quote, so present as the article's characterization).

- The Hays Post article has no reader-comment widget — no comment-section thread exists to harvest for that article.
- Mann's documented topics at the Hays event: stepped-up basis tax provision for farms ("I have taken the lead in Congress in fighting the fight to maintain the stepped-up basis"), $34 trillion national debt ("We cannot continue to spend money like we are federally and think that we're not going to reap the consequences"), and immigration/border ("makes no sense at all").

**Sources:**
- [U.S. Rep. Mann's addresses immigration, national debt in Hays (Hays Post)](https://hayspost.com/posts/1e4f8e0c-4dcd-446f-a66b-a191d2a56966) — accessed 2026-05-20
- [Hays Town Hall Rep. Tracey Mann 07-2024 (LegiStorm)](https://www.legistorm.com/townhall/27963/hays-town-hall-rep-tracey-mann-07-2024.html) — accessed via search snippet 2026-05-20

**Issue-mapping rationale:** The stepped-up basis quote → Agriculture IssueCard. The $34T debt quote → Federal Spending / Appropriations IssueCard. The immigration framing → Immigration IssueCard.

**Preliminary tier**: secondary (Hays Post local-news writeup) + secondary (LegiStorm event log). Medium.

---

**Observation 5.B — Colby town hall, 2026-02-19, on DOGE and federal workforce reductions.**

Per the Indivisible MHK transcript: a constituent asked about Elon Musk reviewing Mann's tax returns (a DOGE-era concern about federal-personnel data access). Mann's verbatim response: "They are finding things that Congress has been requesting, asking for, and frankly, that have been hidden from us for years and years and years."

- The same transcript documents Mann's response on Ogallala Aquifer / water: "It needs to be handled at the local and state levels, not the federal level." (Relevant because KS-01 contains the bulk of the Kansas portion of the Ogallala Aquifer — the largest water-policy issue in the district.)

**Sources:**
- [Transcript of Rep. Tracey Mann's Town Hall in Colby, KS 2.19.25 (Indivisible MHK Substack)](https://indivisiblemhk.substack.com/p/transcript-of-rep-tracey-manns-town) — accessed 2026-05-20

**Issue-mapping rationale:** The DOGE quote → Federal Spending / Government Reform IssueCard. The Ogallala/water quote → an issue card the v1 entry currently lacks but should likely add (water policy in KS-01) — flag for narrative-writer in stage 2.c.

**Preliminary tier**: secondary, with the prior caveat about the oppositional-source-produced transcript.

---

## Unmapped observations (parked, no clean issue mapping)

- **Wikipedia "Pietist" / Evangelical Covenant church affiliation tension.** The v1 entry resolves this as Evangelical Covenant Church (Swedish Pietist roots) at First Covenant Church Salina. Some Wikipedia-derived sources call him "Lutheran Pietist." Evangelical Covenant is NOT Lutheran — it shares Pietist roots with Swedish Lutheranism but is a separate denomination. The v1 entry (Evangelical Covenant) is correct; some secondary sources are wrong. No new evidence here, just confirming the v1 entry is the more careful framing.
- **LinkedIn headline "President — 3 Strands Neighborhoods."** The v1 entry mentions this but does not explain. 3 Strands Neighborhoods is a faith-based community development nonprofit Mann co-founded in Salina. Could fold into Faith / Civic Service if a v2 IssueCard covers civic involvement, but I have not verified the corporate registration. Flag for narrative-writer to verify.
- **Facebook 2026-05-05 religious-liberty post engagement (465 reactions / 204 comments / 45 shares).** Newer than the v1 harvest window (which ended 2026-04-30). Not a different pattern from what v1 documents — confirming continuity.

---

## Confidence and gaps

**High confidence** (multiple-source corroboration, primary or near-primary):
- ROTOR Act vote details and Mann's stated procedural rationale
- Caucus memberships (RSC, Western Caucus, Pro-Life Caucus)
- Bipartisan Kaptur letter and biofuels bicameral co-leadership
- One Big Beautiful Bill YES vote on 2025-05-22 (House Clerk record)
- Hays Post 2024-07-03 town-hall topics and quotes

**Medium confidence:**
- Values Action Team membership (less-documented working group)
- "Mann evaded the question" framing in Indivisible MHK transcript — usable as the substack's characterization, not as Mann's behavior in his own words
- Kansas Wheat Growers Wheat Leader of the Year recognition (single-outlet HPJ confirmation; need NAWG primary source)

**Low confidence / gaps to flag for stage 2.b (deep-scraper):**
- I could not directly fetch mann.house.gov, kansasreflector.com, westerncaucus.house.gov, or kaptur.house.gov — all returned HTTP 403 to non-browser user agents. Content was reconstructed from Google snippets and third-party mirrors. **deep-scraper should re-confirm caucus list and bipartisan-letter co-signer list against the primary press releases when those sources permit fetching.**
- I did not browse Twitter/X follows, Lists, or likes — those are login-walled in 2026. v1 already captures most-tagged accounts; if narrative-writer wants Lists-level signals, that requires manual operator access.
- No comment widget was present on either of the two Hays Post articles I fetched. Constituent reaction on Hays Post Mann articles, if it exists, lives on social shares of those articles, not on the article pages themselves. The v1 entry already captures Facebook engagement on Mann's own posts; that is the right surface for constituent-reaction signal.
- Federal donation patterns (FEC itemized donor list) were not re-pulled — v1 covers this. deep-scraper can refresh if a 2025-26 cycle pull is desired.

**Symmetry test — applied to every observation above.** Each finding would read identically if rewritten about a Democratic incumbent with the same evidence. Specifically: Observation 2.A (the Medicaid say/do gap) is the most prose-sensitive — I have kept it framed as "the statement and the vote are both on the record; the juxtaposition is a Gap candidate" rather than "Mann said one thing and did another" (which would fail symmetry). narrative-writer in stage 2.c should preserve this framing.

**No dossier contradictions found.** The dossier and the v1 entry are internally consistent; my sleuth pass adds detail without overturning either.

**No legal red flags surfaced.** No new ethics complaints, no investigations, no criminal/civil matters beyond what the dossier already documents (birtherism 2010, Jan 6 objection 2021, ROTOR Act 2026 — all already in v1).

**No halt conditions triggered.**

---

## Closeout notes

- 6 well-evidenced observations produced (1.A, 1.B, 2.A, 2.B, 3.A, 4.A, 5.A, 5.B = 8 with sub-observations; counting as 6 distinct issue-anchored observations across 5 issues).
- 5 issues covered: Agriculture, Healthcare/Medicaid, Aviation Safety, Caucus affiliations (cross-issue), Constituent access / town-hall behavior.
- v1 entry remains the canonical source for biographical, social-media-pattern, and faith data. This sleuth pass focuses on closing the v1 gap on the ROTOR Act rationale, surfacing the bipartisan biofuels co-leadership pattern, and pulling specific town-hall exchanges into issue-anchored form.

**Recommended for narrative-writer (stage 2.c):**
- Build out an explicit Healthcare/Medicaid IssueCard with the say/do juxtaposition as a `Gap` (evidence-anchored to the KSNT statement and the May 22, 2025 vote).
- Consider whether to add a Water Policy / Ogallala IssueCard — currently absent from v1, but the Colby quote is a single observable data point.
- The "bipartisan co-led letter with Kaptur" signal nuances the "party-line voter" framing in v1's `theirRecord` — narrative-writer should decide whether to surface this in stated/actions on Agriculture or as a cross-cutting note.
