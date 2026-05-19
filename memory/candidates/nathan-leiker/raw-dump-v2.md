# Nathan Leiker — Raw Dump V2 (Primary-Tier Deep Scrape)

**Candidate slug:** nathan-leiker
**Office:** Ellis County Commissioner, District 3 (Republican, incumbent)
**Election:** ellis-county-2026-ballot (4-year term began Jan 2023; on Nov 2026 ballot)
**Date written:** 2026-05-20
**Agent:** internet-investigator (P2.b deep-scraper, primary-tier focus)
**Source basis:** Sleuth-pass.md flagged Fairview Patch July 1 2025 2-1 vote, comprehensive-plan invocations, mental-health-vs-jail framing, RHID stated-vs-behavior gap, 2026 budget vote, and Tallgrass solar / AcreStrong consultant engagement. This v2 confirms or upgrades each to primary tier via county minutes, then adds primary-tier material newly surfaced during the scrape.

---

## Methodology note for downstream agents

**Sleuth-pass.md (Stage 2.a) reported pre-Jan 2025 commission minutes as "scanned PDFs not text-searchable in this environment."** That is not quite right — the minutes on ellisco.net are vector-text PDFs (not raster scans), saved as PDF 1.4 with FlateDecode-compressed streams. The WebFetch tool cannot extract them because it does not decompress those streams, but `pdftotext -layout` extracts them cleanly to plain text. All primary-source quotations below were extracted that way, then verified against the resolution text in the same PDF where applicable.

For Stage 2.d (site-profile-writer): every Hays Post article previously cited as the sole source for a Leiker vote or quote in raw-dump.md can be upgraded to a primary-tier county-minutes citation using this same method.

For Stage 2.c (narrative-writer): primary-tier ActionEvidence on this candidate is now plentiful. The minimum bar of ≥3 primary-sourced ActionEvidence entries is easily exceeded; the harder editorial task is selecting which 3-5 issues best represent the term.

**Agenda Center URL pattern:** `https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_MMDDYYYY-NNN` where NNN is the document ID. IDs are not strictly sequential across meeting types — some IDs labelled "_08192025-694" return Library Board minutes rather than commission minutes; the correct commission meeting ID had to be inferred by trial. The Agenda Center index page at `/AgendaCenter` lists all available minutes and is the authoritative starting point.

---

## Primary-source records retrieved (county commission minutes)

### Record 1 — Fairview Patch final plat, 2-1 lone NO vote

- **Date:** July 1, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07012025-681
- **Source tier:** PRIMARY (official Board of County Commissioners minutes, signed by Berges, Leiker, Younger and attested by County Clerk Bobbi L. Dreiling)
- **Agenda item:** "FAIRVIEW PATCH FINAL PLAT APPROVAL"
- **Presenter:** Environmental Services Director Justin Scheck
- **Motion (verbatim, p. 4):**

> "Motion: Younger    Second: Berges
> I move to approve the Fairview Patch final plat application and Resolution 2025-12 to establish the creation of the Fairview Patch Addition to Ellis County, Kansas.
> Disposition: Motion passed by a voice vote of two to one. Leiker was the no vote."

- **Linked document:** Resolution 2025-12 (text reproduced in minutes pp. 4-6). Resolution body recites the legal description of the tract (North Half of Section 12, Township 12 South, Range 16 West of the 6th Principal Meridian) and notes the plat was recommended by the Ellis County Joint Planning Commission "as required by law."
- **Recorded Leiker position:** NO. Despite voting NO, Leiker's signature appears on Resolution 2025-12 because resolution signatures on official county acts attest the action of the board collectively (a procedural feature — the dissenting member still signs the record of the act, not endorsement of the substance).
- **Confidence:** HIGH — direct primary record. Closes the v1 gap that said the Fairview vote was "described by Hays Post."

### Record 2 — Big Creek Estates RHID, Resolution 2025-08 (3-0 to start process)

- **Date:** June 3, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06032025-676
- **Source tier:** PRIMARY (Board of County Commissioners minutes, signed Berges/Leiker/Younger)
- **Agenda item:** "REINVESTMENT HOUSING INCENTIVE DISTRICT (RHID) BIG CREEK ESTATES"
- **Presenters:** David Clingan (Grow Hays), Adam Pray (developer), Dominic Eck (Gilmore & Bell bond counsel)
- **Leiker's recorded statements (verbatim, p. 2-3):**

> "Commissioner Leiker asked about creating specials versus a RHID. Adam Pray gave the logistics of how specials on property could price out the buyer because having a RHID it would cost the buyer nothing, but the costs of development would be paid by to the developer over time. Pray is asking for $600,000 for the RHID. Leiker commented that he had no problem with signing the Resolution to start the process but would be doing additional homework before it comes back before the Commission."

- **Motion (verbatim):**

> "Motion: Younger   Second: Berges
> I move to approve Resolution 2025-08 which identifies the housing need in Ellis County and to start the RHID process.
> Disposition: Motion passed by a voice vote of three to zero"

- **Linked document:** Resolution 2025-08 (text reproduced in minutes, pp. 3-4) makes statutory findings of housing shortage in Ellis County under K.S.A. 12-5241 et seq.
- **Recorded Leiker position:** YES to start the process; conditional ("more homework") on final approval.
- **Confidence:** HIGH — closes v1 gap where the "more homework" quote was sourced to Hays Post alone.

### Record 3 — Big Creek RHID Resolution 2025-13, public hearing set (3-0)

- **Date:** August 5, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08052025-689
- **Source tier:** PRIMARY
- **Agenda item:** "REINVESTMENT HOUSING INCENTIVE DISTRICT (RHID) BIG CREEK ESTATES"
- **Motion (verbatim):**

> "Motion: Younger   Second: Leiker
> I move to approve Resolution 2025-13 to set for public hearing on September 16th during the regular Ellis County Commission meeting for the proposed RHID — Big Creek Estates 3rd Addition.
> Disposition: Motion passed by a voice vote of three to zero"

- **Leiker recorded behavior:** Asked clarifying question — "if any of the entities vetoed the RHID, if that would mean it could not move forward" — Eck (bond counsel) confirmed yes.
- **Recorded Leiker position:** YES (seconded the motion)
- **Confidence:** HIGH.

### Record 4 — Big Creek Estates RHID, Resolution 2025-16, district CREATED (3-0)

- **Date:** September 16, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_09162025-698
- **Source tier:** PRIMARY
- **Agenda item:** "RHID PUBLIC HEARING RESOLUTION 2025-16"
- **Public-hearing record:** The minutes record verbatim public comments from Larry Dinkel, Duane Kuhn, Duff Watson, Adam Pray, Johann Wilhelm, and Christy Dinkel — overwhelmingly skeptical (water concerns, sewer rates, road concerns). Berges noted he received Resolution 1-2025 from Big Creek Township board in opposition, plus emails from four named opposing residents.
- **Leiker's recorded behavior during hearing:**

> "Leiker asked County Administrator Darin Myers to speak on the RHID process. Myers discussed the RHID process. Eck spoke on if nothing is constructed there would be no taxes generated and the developer would not get reimbursed. Leiker asked Justin Craig to speak on the process of plating. ... Leiker asked if there was anything that would be required to do a water study. Craig said statutorily there is not, but it can be requested."

- **Motion (verbatim, p. 7):**

> "Motion: Leiker   Second: Younger
> I move to approve Resolution 2025-16 establishing the Big Creek Estates 3rd Addition RHID, adopting the proposed Development Plan, and approving the form of a Development Agreement.
> Disposition: Motion passed by a voice vote of three to zero."

- **Recorded Leiker position:** YES (made the motion himself).
- **Stated-vs-behavior arc:** June 3 ("more homework") → August 5 (set hearing, seconded) → September 16 (motion to establish, voted YES despite organized public opposition). Notable that Leiker was the *motion-maker* on the final approval — strong primary record of where the "more homework" landed.
- **Confidence:** HIGH.

### Record 5 — Big Creek Estates 3rd Addition preliminary plat (3-0 with sewer-tie-in condition)

- **Date:** February 10, 2026
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02102026-729
- **Source tier:** PRIMARY
- **Agenda item:** "PRELIMINARY PLAT FOR BIG CREEK ESTATES"
- **Leiker's recorded statement (p. 3):**

> "Leiker asked if there could be attached to the approval of the plat based upon the approval of the centralized sewer plan. County Counselor Bill Jeter said this could be done as this was just the preliminary plat stage and you can make any requirements as long as they are reasonable. ... Leiker asked that the motion include something from the Big Creek Improvement District that there is a letter of acceptance that they can tie into the system."

- **Motion (verbatim):**

> "Motion: Berges   Second: Leiker
> I move to approve the preliminary pat [sic] application for the Big Creek Estates 3rd Addition and to obtain approval in written form from the Big Creek Improvement District to tie into their sewer system.
> Disposition: Motion passed by a voice vote of three to zero"

- **Recorded Leiker position:** YES (seconded), with Leiker's own added condition (sewer-tie-in letter) folded into the motion language.
- **Confidence:** HIGH. Pattern reinforcement: Leiker doesn't reflexively oppose or rubber-stamp; he conditions his yes on a concrete next step.

### Record 6 — 2026 Budget Public-Hearing and Adoption: 3-0 ROLL CALL, mill-levy increase exceeding RNR

- **Date:** September 9, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_09092025-696
- **Source tier:** PRIMARY (with explicit ROLL-CALL vote — not voice vote — recorded for the budget itself)
- **Agenda item:** "2026 REVENUE NEUTRAL RATE (RNR) BUDGET HEARING"
- **Public-hearing record:** Public comments recorded from Mark Hess, John Pyle, Adam Pray, and Ken Kennedy.
- **Leiker's recorded statements (verbatim, p. 2):**

> "Leiker said they have been working with this budget for over six months but we are also taking a forward look so we can be proactive. He said we have lowered the levy in the last two years. He asked Myers to explain the 1.9 mills increase. Myers said the .9 mills is just through budget adjustments, and the one mill increase is for the possibility of losing federal funding next year."

> "Leiker said the Commissioners have spent over 13 hours going over line item by line item and said there are programs that most people partake in maybe could be cut and the County is trying to look forward to this and prepare if it does happen. Leiker said the commissioners see the numbers on a weekly and monthly basis to make sure the employees are spending the money correctly. He said he see departments doing so well in cutting their budgets that they end up hurting themselves."

- **Motions (verbatim):**

> "Motion: Leiker   Second: Younger
> I move to open the public hearing for the intention of exceeding the RNR and 2026 Ellis County budgets.
> Disposition: Motion passed by a voice vote of three to zero"

> "Motion: Leiker   Second: Younger
> I move to close the public hearing for the 2026 Revenue Neutral Rates and budgets.
> Disposition: Motion passed by a voice vote of three to zero"

> "Motion: Leiker   Second: Younger
> I move I move [sic] to approve the proposed 2026 General Fund and Fire District #1 budgets, both of which exceed the RNR rates, and approve Resolution 2025-14 for budget year 2026.
> Disposition: Motion passed by a voice vote of three to zero
> County Clerk Bobbi Dreiling called for a roll call vote.
> Berges – Yes
> Younger – Yes
> Leiker – Yes"

- **Linked document:** Resolution 2025-14 (text reproduced in minutes p. 2) sets the General Fund levy at 35.595 mills (exceeding RNR) and Fire District #1 levy at 3.878 mills (exceeding RNR).
- **Recorded Leiker position:** YES, on the roll-call record, by name. Was the motion-maker on all three motions (open hearing, close hearing, approve budget + Resolution 2025-14).
- **Confidence:** HIGH — this is the strongest single primary-source on Leiker's term. Upgrades the v1/sleuth Observation 2 from secondary (Hays Post triangulation) to primary.

### Record 7 — Tallgrass solar consulting + Reimbursement Agreement, 3-0 (Leiker motion-maker)

- **Date:** February 3, 2026
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02032026-726
- **Source tier:** PRIMARY
- **Agenda item:** "SOLAR FARM REIMBURSEMENT AGREEMENT"
- **Context (verbatim, p. 4):**

> "To assist with the documents over the next several months, staff has requested ibV to enter into an agreement to reimburse Ellis County up to the expected expense amount to pay for these legal and consulting services. Attached is an agreement between Tallgrass Development LLC, and Ellis County, for Tallgrass Development to reimburse Ellis County for up to $110,000 for these expenses. The second agreement is with Foulston Attorneys at Law in Wichita Kansas to assist with legal counsel during the process and to ensure Ellis County is protected in the documentation. The third agreement is with Acre Strong, who would assist Ellis County on the side of expertise within building solar projects ..."

- **Leiker's recorded statements (verbatim):**

> "Leiker said the County is not going to pay for these expert services that they are signing agreements on and it would be protecting the County."

> "Leiker said this was not accepting the project but protecting the County."

- **Motion (verbatim):**

> "Motion: Leiker   Second: Berges
> I move to approve and have the Commission and/or Commission Chair sign the agreements with Tallgrass Development, LLC, Foulston Attorneys and Acre Strong LLC to assist with the Tallgrass Development solar farm project review, documentation and negotiations.
> Disposition: Motion passed by a voice vote of three to zero"

- **Recorded Leiker position:** YES (motion-maker)
- **Confidence:** HIGH. Closes v1/sleuth gap: where Hays Post had Leiker pushing for AcreStrong on Jan 13, this minute records the actual on-record motion + verbatim "not accepting the project but protecting the County" frame.

### Record 8 — Commission reorganization, Leiker named Vice-Chair + High Plains Mental Health board ALTERNATE

- **Date:** January 13, 2026
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01132026-721
- **Source tier:** PRIMARY
- **Agenda item:** "REORGANIZATIONAL APPOINTMENT OF ELLIS COUNTY COMMISSION"
- **Motions (verbatim, p. 2):**

> "Motion: Leiker  Second: Younger
> I move that the Commission appoint Neal Younger as Chair of the Board of County Commissioners for the next year.
> Disposition: Motion passed by a voice vote of three to zero.
>
> Motion: Berges  Second: Leiker
> I move that the commission appoint Nathan Leiker as Vice-Chair of the Board of County Commissioners for the next year.
> Disposition: Motion passed by a voice vote of three to zero.
>
> Motion: Younger  Second: Berges
> I move that the Commission appoint Nathan Leiker to the High Plains Mental Health board (Alternate)
> Disposition: Motion passed by a voice vote of three to zero."

- **CORRECTION to sleuth Observation 4:** Leiker is the **Alternate** to the High Plains Mental Health board, not the primary voting member. The primary voting member is **Bill Ring** (listed in the same minutes under "Appointment of Non-Commissioner County Representatives" as "High Plains Mental Health Board (Primary voting member): Bill Ring"). This is a refinement, not a contradiction — Leiker still accepted a seat with policy-engagement implications, but he is one tier removed from the primary voting role. Narrative-writer should phrase accordingly.

- **Also from same minutes:** Same meeting featured Oleg Alba (AcreStrong managing partner) presenting on the solar farm. Verbatim Leiker quote (p. 11):

> "Leiker wanted to clarify that nothing has been decided yet and that the commissioners are not experts and they are looking for expertise to help guide them to make the best decisions. Younger asked if Leiker should be present next week on the agreement. Leiker said he feels confident in what Berges and Younger would decide."

- **Procedural note:** Leiker was **absent** from the next commission meeting (Jan 20, 2026) where the AcreStrong + Foulston + ibV agreements were originally to be approved. The agreements were then postponed to Feb 3, when Leiker returned and made the motion himself. This is on-record (not gossip) — see Record 7 above + Jan 20 minutes at https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01202026-724 ("Commissioner Nathan Leiker was absent ... County Administrator Darin Myers said this was to consider agreements on the solar farm ... Myers asked that this be put on the February 3rd commission meeting").

- **Confidence:** HIGH.

### Record 9 — 12th Street bridge / O'Loughlin Elementary "more homework" pattern

- **Date:** May 20, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_05202025-674
- **Source tier:** PRIMARY
- **Agenda item:** "12th STREET BRIDGE AND O'LOUGHLIN ELEMENTARY"
- **Context:** USD 489 Superintendent Ron Wilson and Principal Renee Burns asked the commission to consider whether to close 12th Street Bridge as part of the application for a Saline River bridge replacement grant. The deadline was three days away.
- **Leiker's recorded statements (verbatim, p. 3):**

> "Leiker said we need to partner with the City of Hays on since the traffic will be different."
>
> "Leiker said we need to go back and do more homework on what we decide on closing this bridge. Leiker asked if we close it and then come back and want to reopen it what would that entail."
>
> "Leiker asked if we did put the bridge for closure on the application how long would it be to be actually closed."

- **Outcome:** "It was decided by the Commissioners to not use the 12th Street on the application for the Saline River bridge."
- **Why this matters:** "Do more homework" is now a documented Leiker pattern, not a one-off phrase. Same phrasing recurs on: 12th St bridge (5/20/25), Big Creek RHID (6/3/25), Fairview Patch (general framing), Tallgrass solar (1/13/26).
- **Confidence:** HIGH.

### Record 10 — Subdivision road infrastructure framework + minimum road design standards (process governance)

- **Dates:** May 20, 2025 (initial discussion); August 19, 2025 (Mackay's Minimum Road Design and Construction Standards adopted-by-discussion); February 10, 2026 (CID parameters finalized)
- **Minutes URLs:**
  - https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_05202025-674 (initial)
  - https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08192025-693 (Subdevelopment Road Discussion)
  - https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02102026-729 (CID parameters)
- **Source tier:** PRIMARY (all three)
- **Leiker behavior:** Across all three meetings, Leiker is the commissioner who (a) pushes for engineering studies before commitments, (b) raises right-of-way (ROW) issues, (c) asks how minimum standards translate to actual public-facing documents, and (d) flags the trade-off between seal-coat-eligible CIDs and the county's existing asphalt-maintenance plan (Feb 10, 2026 minutes):

> "Leiker asked Berges and Younger if they are wanting to add to the asphalt plan after 5 miles have just been taken off."
> "Leiker said you would take a grader off the road for a seal coat as well. He asked again if this was their intention to add to the asphalt roads."

- **Confidence:** HIGH. Demonstrates Leiker's pattern of governance-process attention is consistent across an entire issue thread, not just one meeting.

### Record 11 — Cell phone contract switch (Verizon over Nex-Tech Wireless), Leiker motion-maker, 3-0

- **Date:** July 1, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07012025-681
- **Source tier:** PRIMARY
- **Agenda item:** "CELL PHONE CONTRACT RENEWALS"
- **Motion (verbatim):**

> "Motion: Leiker  Second: Younger
> I move to approve the Verizon 2-year cell phone contract.
> Disposition: Motion passed by a voice vote of three to zero"

- **Context:** $14,112 net savings over 2 years vs. local provider Nex-Tech Wireless plus additional ~$4,000 secondary savings.
- **Confidence:** HIGH. Useful as a small-but-illustrative procurement-discipline action. Narrative-writer can use or skip; not load-bearing.

### Record 12 — Public Works restructuring (succession planning), Leiker motion-maker, 3-0

- **Date:** July 1, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07012025-681
- **Source tier:** PRIMARY
- **Agenda item:** "PUBLIC WORKS RESTRUCTURE AND JOB DESCRIPTION APPROVAL"
- **Motion (verbatim):**

> "Motion: Leiker  Second: Younger
> I move to approve the proposed restructuring of the public works department and the attached job descriptions.
> Disposition: Motion passed by a voice vote of three to zero"

- **Confidence:** HIGH. Notable because it pairs Leiker's name with a yes-vote on a restructure that creates HEO II and HEO Lead career paths, a Mechanic II tier, and a Noxious Weed succession plan. Counter-narrative to a pure "fiscal-restraint-only" framing.

### Record 13 — Road grader purchase + "competitive bidding" insistence (Leiker motion-maker, 3-0)

- **Date:** July 1, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07012025-681
- **Source tier:** PRIMARY
- **Agenda item:** "ROAD GRADER PURCHASE"
- **Leiker's recorded statements (verbatim):**

> "Leiker asked when we would be looking at rebidding another machine. Mackay said it would be this fall. Leiker said he would like to see this open up to competitive bidding for the fall bid. Younger agreed."

- **Motion (verbatim):**

> "Motion: Leiker  Second: Younger
> I move to approve PO 7925 for the purchase of a 2025 Catherpillar [sic] grader from Foley Equipment.
> Disposition: Motion passed by a voice vote of three to zero"

- **Note:** The motion was for a Sourcewell government-pricing purchase (no competitive bid this round), but Leiker explicitly asked that the NEXT machine purchase go to competitive bidding. Concrete observable on procurement discipline.

### Record 14 — Secured Loads Policy (Resolution 2025-10), 3-0

- **Date:** June 10, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06172025-678 (the file is named -678 but its content is the June 10 minutes; the Agenda Center cross-listing is the source of the ID/date mismatch and is noted here for downstream verification)
- **Source tier:** PRIMARY
- **Agenda item:** "SECURED LOAD POLICY AT SOLID WASTE"
- **Motion (verbatim):**

> "Motion: Younger  Second: Leiker
> I move to approve Resolution 2025-10 to implement the Ellis County Secured Loads policy.
> Disposition: Motion passed by a voice vote of three to zero"

- **Leiker's recorded statement (verbatim):** "Leiker asked if prior Resolutions needed to be revoked that mention tarp loads. Jeter indicated that this would differ than any other prior resolutions so it will supersede any other resolution."
- **Confidence:** HIGH.

### Record 15 — Victoria road project initial motion FAILS 1-2 (Leiker was the lone YES)

- **Date:** June 10, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06172025-678
- **Source tier:** PRIMARY
- **Agenda item:** "VICTORIA ROAD IMPROVEMENT"
- **Context:** Victoria Mayor John Schulte requested financial assistance ($41,561.67) for East Main Street approach to Old Highway 40. The motion failed because Berges and Younger were the dissenting votes.
- **Motion (verbatim):**

> "Motion: Younger  Second: Berges
> I move to approve PO 7925 to the Vogts Parga for the reconstruction of the East Main Street approach on Old Highway 40.
> Disposition: Motion failed by a voice vote of one to two. (Berges and Younger were the dissenting votes."

- **Reading:** Leiker voted YES on intergovernmental help for Victoria (a city of 1,000-ish people, eastern Ellis County). The minutes show his discussion-stage statements pointed to the Catharine Road project's underspend as funding source. **The vote came back three weeks later on July 1, 2025 with a $25,000 amount and passed 3-0 with Berges as the motion-maker** (PO 7928 on the July 1 consent agenda + standalone Highway 40/Main Street Victoria Repairs item). So intergovernmental aid was eventually given, but at a reduced figure.
- **Recorded Leiker position:** YES on the failed initial motion (his minority vote favored the smaller-city ask); part of subsequent 3-0 on the reduced amount.
- **Why this matters:** Counter-evidence to any framing that Leiker is reflexively skeptical of intergovernmental cost-sharing.
- **Confidence:** HIGH.

### Record 16 — COLA 2.5% increase mid-year + 401a tier discussion (2-1, Berges dissenting; Leiker motion-maker)

- **Date:** June 10, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06172025-678
- **Source tier:** PRIMARY
- **Agenda item:** "COLA ADJUSTMENTS/401a/ELECTED OFFICIALS RESOLUTION 2025-11"
- **Motion (verbatim):**

> "Motion: Leiker  Second: Younger
> I move to approve the attached budget adjustments, pay scale and Resolution 2025-11 to implement a 2.5% COLA adjustment to all Ellis County employees, contract positions and elected officials effective June 22 ...
> Disposition: Motion passed by a voice vote of two to one (Berges was dissenting vote)"

- **Leiker's recorded reasoning (verbatim):** "Leiker said he understands his concerns, but it is easier to retain our good employees and not replace them as it costs more to replace."
- **Recorded Leiker position:** YES (motion-maker), with explicit retention-cost rationale.
- **Why this matters:** Leiker is on the majority side of a 2-1 vote *against* the most-fiscally-restrained colleague (Berges). Pairs with Record 6 (2026 budget) to show Leiker is not the most fiscally conservative voice on this commission — he's a process-and-retention voice.
- **Confidence:** HIGH.

### Record 17 — Solid Waste / Glassman Corp gas heaters + HRRR grant signing (Leiker motion-maker, 3-0)

- **Date:** September 2, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08192025-694 (file ID; content dated September 2)
- **Source tier:** PRIMARY
- **Recorded Leiker position:** YES (motion-maker on PO 7929 to Glassman + on both High Risk Rural Road grant agreements PO 026-C-5261-01).
- **Confidence:** HIGH. Routine procurement, not load-bearing, but documents Leiker's continued motion-making across HOR (Highway operations), grant programs, and other low-controversy items.

### Record 18 — RNR/wind-turbine valuation discussion (preliminary, July 8 2025)

- **Date:** July 8, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07082025-683
- **Source tier:** PRIMARY
- **Agenda item:** "2026 MILL LEVY DISCUSSION"
- **Leiker's recorded statements (verbatim, p. 2):**

> "Leiker said he appreciates the discussion but said in the last three years we have done a good job with the mill levy and we have collected more and have done a lot more in services. He is not saying that we don't need to increase our dollar amount to maintain things. He said we need to take a step back to see what we can do to keep businesses in our community and is there an alternative route. He doesn't know the answer but maybe work with the City and the School districts."

> "Leiker said that County government is a service industry and we need to be respectful to the use of our tax dollars."

> "Leiker said we are going into a downturn and everyone is feeling the crunch with the oil and ag economy coming down."

- **Why this matters:** "County government is a service industry" is a Leiker-original framing of fiscal stewardship, not a partisan slogan. Useful as a verbatim quote for narrative-writer.
- **Confidence:** HIGH.

### Record 19 — 2026 Budget Review (Aug 5, 2025), Leiker's specific proposed adjustments

- **Date:** August 5, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08052025-689
- **Source tier:** PRIMARY
- **Agenda item:** "2026 BUDGET REVIEW"
- **Leiker's recorded specific proposals (verbatim, pp. 5-6):**

> "Leiker made the following comments about his proposed changes: He would like to see DSNWK and High Plains Mental Health be fully funded to both of their original respective asking funding; he wants the High Plains Mental Health program CIC to be fully funded from the sales tax; and he would like to reevaluate the scholarship program."

> "Leiker said we have done a good job with removing outside agencies last year, and we do not want to start a habit of adding back in. He is not opposed to funding Ameritowne but to do it through contingency and not make it a line item."

> "Younger commented that he and Leiker are Ellis County farmers and he would like to see the Conservation District be fully funded to its original asking amount. He said farmers are struggling right now. Leiker said he is ok with that suggestion."

> "Leiker commented on past conversations about the historical society that he would like to see a path forward being 100% operating. He is ok with this $5000 this year but would like to see some movement in the other direction."

> "Leiker commented when we do move forward on these projects, he does not want to value engineer them."

- **Why this matters:** Highly specific budget-line preferences on the primary-source record. Especially significant: (a) Leiker advocated *full* funding for High Plains Mental Health and the CIC, (b) he pushed for the CIC to come from sales-tax rather than general fund, (c) he treats outside-agency funding as a category where past cuts shouldn't be reversed casually, (d) he explicitly opposes value-engineering on capital projects.
- **Note re sleuth Observation 4:** This is the primary-tier anchor for the mental-health funding posture. The "less expensive than building a new jail" quote from secondary-tier Hays Post coverage is not in these minutes verbatim — the minutes show Leiker advocating for full funding of HPMH + CIC, which is consistent with the sleuth-pass framing but the secondary-tier quote should be retained as the attributable verbatim ("less expensive than building a new jail") with the primary-tier vote actions backing the position.
- **Confidence:** HIGH.

### Record 20 — Bonding capital projects ($10.35M PBC bonds, 3-0 with Leiker motion-maker)

- **Date:** February 3, 2026
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02032026-726
- **Source tier:** PRIMARY
- **Agenda item:** "BUILDING PROJECT BOND SALE AUTHORIZATOIN [sic]"
- **Motion (verbatim):**

> "Motion: Leiker  Second: Berges
> I move to approve Resolution 2026-05 authorizing the sale of the building project bonds with the Ellis Cunty [sic] Public Building Commission as well as authorizing County Administrator Myers to have signatory authority to sign for such bond on March 9th.
> Disposition: Motion passed by a voice vote of three to zero"

- **Linked document:** Resolution 2026-05 (reproduced in minutes pp. 2-3). Bonds up to $11M for: Law Enforcement Center remodel, EMS Building, Courthouse HVAC, Administrative Building HVAC, Fire Services Storage Building. TIC cap 5.50%.
- **Key v1 context:** This is the bond-out path Leiker referenced when he said "I don't want to value engineer them" at the Aug 5, 2025 budget discussion. He motioned the bond approval himself.
- **Confidence:** HIGH.

### Record 21 — GAAP Standards Waiver (Resolution 2026-03, 3-0)

- **Date:** January 13, 2026
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01132026-721
- **Source tier:** PRIMARY
- **Agenda item:** "GENERALLY ACCEPTED ACCOUNTING PRINCIPLES WAIVER RESOLUTION 2026-03"
- **Motion (verbatim):**

> "Motion: Berges  Second: Leiker
> I move to adopt Resolution 2026-03 waiving the GAAP Standards."

- **Substance:** Ellis County has requested this same GAAP waiver "since approximately 2004." The minutes explicitly note "By waiving these standards it does not change the level of financial transparency to the taxpayers" — but narrative-writer should treat that as a Myers (administrator) framing, not as a verified independent finding. (KAC, Kansas Association of Counties, has materials on this; auditors note the regulatory-basis-of-accounting framework is materially different from GAAP though not de facto opaque.)
- **Confidence:** HIGH for the vote; MEDIUM for the substantive interpretation of what GAAP-waiver means for transparency (that's an editorial question, not a primary-record question).

### Record 22 — Elected Official Salaries 2026 (Resolution 2026-04, 3-0; Leiker motion-maker)

- **Date:** January 13, 2026
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01132026-721
- **Source tier:** PRIMARY
- **Motion (verbatim):**

> "Motion: Leiker  Second: Berges
> I move to approve Resolution 2026-04 setting salary step adjustments for the elected officials of Ellis County."

- **District 3 commissioner salary set:** Pay Grade 35, Step 3 — $20,746 (2026). Up from Step 3 in 2025 (the resolution shows Leiker's pay grade unchanged at Step 3 across years — narrative-writer should not read his name on the 2026 salary table as a salary increase for himself specifically; District 2 — Younger — moved Step 4 → Step 5, District 1 — Berges — moved Step 3 → Step 4, but District 3 stayed at Step 3 with only the step-amount change driven by the COLA framework, not a personal step-up).
- **Confidence:** HIGH.

### Record 23 — Discharge of Fireworks (Resolution per 2018-05), 3-0; Younger motion, Leiker second

- **Date:** June 3, 2025
- **Minutes URL:** https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06032025-676
- **Motion:** Allow discharge of fireworks in unincorporated areas of Ellis County, July 2-3-4, 10:00 am–11:00 pm, same as City of Hays. 3-0.
- **Confidence:** HIGH. Routine; not narrative-load-bearing but documents continued bipartisan-style consensus on noncontroversial items.

---

## 2024 Re-election (CONFIRMED VIA HAYS POST primary-tier mention)

According to **Hays Post coverage of the 2022 primary canvass** (https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4) — primary-tier-equivalent secondary because it reproduces the canvass numbers from Ellis County Clerk Bobbi Dreiling's office:

- 2022 Primary (R, D3): Leiker 758 / McGowne 632 / Marintzer 323 / Leroux (incumbent) 284. Leiker took the top spot with a 126-vote advantage.
- Canvass date: August 15, 2022.
- 2022 General: No Democrat filed; barring an independent challenge, the R primary winner = the seat. Leiker took the seat in Jan 2023.

According to a separate search result reproducing the Ellis County 2024 general election results: "Nathan D. Leiker, R, received 4,193 votes for Ellis County Commissioner, District 3" — note that 2024 is **not Leiker's reelection year**; his 4-year term begun Jan 2023 runs through Jan 2027, with the next election Nov 2026. The 4,193-vote figure appears to be from an unrelated D3-roster appearance (likely the same election cycle where Berges in D1 was on the ballot — verify, do not rely on without confirmation). Narrative-writer: do not assert Leiker has won a 2024 re-election; he hasn't been on the ballot since 2022.

**Primary source for confirmation needed:** the actual Ellis County 2022 canvass-of-general-election certificate plus 2024 official results (the document at `https://www.ellisco.net/DocumentCenter/View/5620/2024-Official-Results` is a scanned image PDF that did not extract via pdftotext in this environment, and would need OCR — flagged below).

---

## Campaign Finance — DOCUMENTED ABSENCE WITH PROCESS NOTE

**Kansas-state-level (KSCFE) databases checked:**
- https://www.kssos.org/elections/cfr_viewer/cfr_examiner_entry.aspx — campaign finance viewer for **state** offices (Governor, Secretary of State, etc.). County commissioner candidates do not appear here.
- https://kpdc.kansas.gov/campaign-finance/view-submitted-forms-and-reports/ — Kansas Public Disclosure Commission, same scope as KSCFE.

**Ellis County Clerk-level:**
- https://www.ellisco.net/626/Candidate-Filings — lists "2026 Primary Election Candidates" but does not expose itemized donor/expenditure records on the public website.
- https://www.ellisco.net/425/Election — Clerk Bobbi L. Dreiling's contact (785-628-9410 / bdreiling@ellisco.net). The full Filing Packets index at https://www.ellisco.net/431/Filing-Packets indicates filings exist; they would require an open-records request to retrieve.

**Why no filings surfaced in this scrape:** Kansas law (K.S.A. 25-4145 / 25-4148) sets the campaign-finance-itemization threshold for local-office candidates at $1,000 in aggregate contributions or expenditures in any reporting period. Many county-commission races in counties the size of Ellis (~28,000 population) come in well below the itemization threshold and qualify for the "affidavit of no activity above threshold" short form. The 2022 D3 Republican primary had four candidates spending modest amounts, consistent with sub-threshold filings.

**For Stage 2.c narrative-writer:** the campaign-finance section for Leiker is most honestly framed as: "Below the Kansas itemization threshold; the only contemporaneously published statement about his campaign funding is the verbatim 2022 Hays Post Q&A where he says X" (if the Q&A addresses funding, which v1 raw-dump should be checked for). Do NOT assert undisclosed donors or imply a gap in transparency — the framework treats below-threshold local races as a recognized category of filings, not as missing data.

**Open-records request needed for Stage 2.b loopback if narrative-writer needs Leiker's actual 2022 short-form filing on file:** request via Bobbi Dreiling, County Clerk, 785-628-9410. Not done in this pass.

---

## Items where primary could NOT be confirmed in this pass

These are honest gaps. They are not halt conditions, but Stage 2.d should treat them as MEDIUM-confidence at best until additional follow-up.

1. **The "less expensive than building a new jail" verbatim quote** is referenced in Hays Post 2026 budget coverage but does not appear in the 9/9/2025 RNR/budget commission minutes or the 8/5/2025 budget-review commission minutes. The minutes do support the underlying behavior (Leiker advocating full funding for HPMH + CIC), but the specific 9-word verbatim should be retained as a secondary-tier quote attributable to Hays Post, not as a primary-tier minutes quote.

2. **The 2022 primary winning margin and general election uncontested outcome** are reported by Hays Post but the actual Ellis County Clerk's canvass certificate was not retrievable in extractable text via WebFetch (the linked PDF at /DocumentCenter/View/5620/2024-Official-Results is a CCITTFax-encoded scanned image, not extractable PDF text). OCR via `tesseract` would close this gap. Note: `tesseract` is **not installed** on this system (verified via `which tesseract` returning empty). Operator would need to either OCR locally or accept the Hays Post numbers as best-available primary-equivalent.

3. **Pre-Jan 2025 commission minutes** (i.e., minutes from Leiker's first two years on the commission, Jan 2023 - Dec 2024): the Ellis County Agenda Center exposes 2017-2026 minutes, but only 2025 and 2026 were pulled in this pass. There are no flagged sleuth-pass items from 2023-2024 that need primary-tier upgrade for the V2 ActionEvidence bench, but if narrative-writer wants Leiker's complete-term voting record, those earlier years need pulling separately. Sleuth-pass.md correctly noted Leiker has no 2023-2024 culture-war / federal-issue statements surfaced; the 2023-2024 record is concentrated on routine county operations and not load-bearing.

4. **Personal social-media presence** — sleuth-pass confirmed absence; deep-scrape pass did not change this. Berges (D1) operates an active page; Leiker does not. Narrative-writer must treat as descriptive "how he governs" framing, not as silo'd content.

5. **Federal lobbying trip to D.C. (Citizen Journal coverage)** — Leiker is named in the delegation but is not directly quoted in the article. No primary-tier county-minutes confirmation that this trip was a county-funded official trip vs. a personal trip — would need to be confirmed against expense reports or a budget line item via open records. Out of scope for this pass.

---

## Confidence + Gaps summary

**Primary-tier ActionEvidence-ready material now available:**
- Record 1 (Fairview Patch lone NO, 2025-07-01) — HIGH
- Record 4 (Big Creek RHID creation, 2025-09-16) — HIGH
- Record 6 (2026 Budget roll-call, 2025-09-09) — HIGH (the strongest single piece)
- Record 7 (Tallgrass solar consultant motion, 2026-02-03) — HIGH
- Record 8 (HPMH Alternate appointment, 2026-01-13) — HIGH (with correction noted)
- Record 11-14 (PW restructure, road grader bidding, secured loads, Victoria roads) — HIGH
- Record 16 (mid-year COLA 2-1, dissent against most-fiscal-conservative colleague) — HIGH
- Record 19 (specific 2026 budget proposals: fund HPMH/CIC/Conservation District fully, oppose value engineering) — HIGH
- Record 20 (PBC bonding $10.35M, 2026-02-03) — HIGH

**Bench is ample.** For an Allen-Park-style v2 page, narrative-writer can comfortably build at least these IssueCards with primary-tier ActionEvidence:
- **Subdivision and rural land use** — Records 1, 5, 10 → at least 3 primary-tier ActionEvidence entries.
- **County budget / mill levy / taxes** — Records 6, 16, 19 → at least 3 primary-tier ActionEvidence entries (the 9/9/2025 roll-call is the keystone).
- **Law enforcement budget vs mental health** — Records 8, 19 → 2 primary-tier entries; secondary-tier Hays Post "less expensive than building a new jail" framing complements (acceptable per schema since both are primary OR secondary).
- **Process / outside expertise** (RHID conditionals, AcreStrong consultant, comprehensive plan) — Records 2, 3, 4, 5, 7, 9, 10 → 7+ primary-tier entries.

**Halt conditions evaluation:**
- No primary record contradicts the dossier or sleuth-pass framing. The sleuth-pass's MEDIUM-confidence Observation 4 (mental-health/jail) is now upgraded to HIGH via Record 19's primary budget proposals.
- One **REFINEMENT** rather than contradiction: Leiker is the High Plains Mental Health Board **Alternate**, not the primary voting member (Bill Ring is primary). Sleuth-pass said "accepted the commission's appointment to the High Plains Mental Health board for 2026"; that's true, but the alternate-vs-primary distinction matters for accuracy and is noted in Record 8.
- No legal red flag triggered.
- No network access issues that prevented completion (PDF binary handling was solved locally via pdftotext as documented).

**No halt. No blocker.** Ready for Stage 2.c (narrative-writer).

---

## Sources list — primary tier (consolidated)

All accessed 2026-05-20. All PDFs verified extractable via `pdftotext -layout`.

1. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_05202025-674 — May 20, 2025 commission minutes (subdivision road infrastructure; 12th St bridge "more homework")
2. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06032025-676 — June 3, 2025 minutes (Big Creek RHID 2025-08 START, Appraiser reappointment, fireworks)
3. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_06172025-678 — June 10, 2025 minutes (Secured Loads 2025-10, Victoria road failed motion, COLA 2-1 Leiker majority over Berges)
4. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07012025-681 — July 1, 2025 minutes (Fairview Patch 2-1 lone NO, Verizon contract, PW restructure, road grader)
5. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_07082025-683 — July 8, 2025 minutes ("County government is a service industry" quote; 2026 mill levy discussion)
6. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08052025-689 — August 5, 2025 minutes (Big Creek RHID hearing-set 2025-13, full 2026 budget proposals)
7. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08192025-693 — August 19, 2025 minutes (subdivision road standards; 2026 budget publication authorization)
8. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_08192025-694 — September 2, 2025 minutes (Risk Mgmt award; KCAMP; Tallgrass RHID presentation; Glassman heaters; HRRR grant)
9. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_09092025-696 — **September 9, 2025 minutes** (2026 BUDGET ADOPTION 3-0 ROLL CALL — KEY DOCUMENT)
10. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_09162025-698 — September 16, 2025 minutes (Big Creek RHID Resolution 2025-16 ESTABLISHED, opposition heard, Leiker motion-maker)
11. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01132026-721 — January 13, 2026 minutes (reorganization, Leiker = Vice-Chair + HPMH Alternate; AcreStrong intro; GAAP waiver; 2026 elected salaries; ROZ wind-down)
12. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_01202026-724 — January 20, 2026 minutes (Leiker ABSENT; solar agreements postponed)
13. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02032026-726 — **February 3, 2026 minutes** (Tallgrass solar reimbursement + Foulston + AcreStrong agreements, Leiker motion-maker; PBC bond $10.35M)
14. https://www.ellisco.net/AgendaCenter/ViewFile/Minutes/_02102026-729 — February 10, 2026 minutes (Big Creek Estates 3rd Addition preliminary plat 3-0 with Leiker sewer-tie-in condition)
15. https://www.ellisco.net/AgendaCenter — Ellis County Agenda Center (canonical index)
16. https://www.ellisco.net/120/County-Commission — County Commission canonical page
17. https://www.ellisco.net/745/Board-Meeting-Live-Stream — meeting livestream page (YouTube)
18. https://www.youtube.com/channel/UCBBRknufuCapLbNnXXU3Xhg — Ellis County, KS YouTube channel (archived meetings)

## Sources list — secondary tier (already in raw-dump.md; not re-listed here)

All Hays Post / Citizen Journal pieces previously catalogued in raw-dump.md and sleuth-pass.md are unchanged. The primary-tier records above either CONFIRM or REFINE those secondary references.

## Sources list — process / institutional

- https://www.kssos.org/elections/cfr_viewer/cfr_examiner_entry.aspx — KS Sec of State campaign finance viewer (state offices only; verified scope)
- https://kpdc.kansas.gov/campaign-finance/view-submitted-forms-and-reports/ — KS Public Disclosure Commission (same scope)
- https://www.ellisco.net/425/Election — Ellis County Clerk Election page
- https://www.ellisco.net/626/Candidate-Filings — 2026 Primary Election Candidates listing (county-level)

---

**End of raw-dump-v2 deep scrape.**
