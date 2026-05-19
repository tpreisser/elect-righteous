import type { CandidateFullV2 } from "@/data/types-v2";
import { AARON_CUNNINGHAM_V2 } from "./aaron-cunningham";
import { ALAINA_CUNNINGHAM_V2 } from "./alaina-cunningham";
import { ALLEN_PARK_V2 } from "./allen-park";
import { ANNE_PARELKAR_V2 } from "./anne-parelkar";
import { BARB_WASINGER_V2 } from "./barb-wasinger";
import { BOBBI_DREILING_V2 } from "./bobbi-dreiling";
import { CHARLOTTE_OHARA_V2 } from "./charlotte-ohara";
import { CHASE_LAPORTE_V2 } from "./chase-laporte";
import { CHRIS_MANN_V2 } from "./chris-mann";
import { CHRISTY_CAUBLE_DAVIS_V2 } from "./christy-cauble-davis";
import { CINDY_HOLSCHER_V2 } from "./cindy-holscher";
import { COLIN_MCROBERTS_V2 } from "./colin-mcroberts";
import { CRAIG_MUSSER_V2 } from "./craig-musser";
import { CRAIG_PALLISTER_V2 } from "./craig-pallister";
import { CURT_VAJNAR_V2 } from "./curt-vajnar";
import { DANIEL_HAWKINS_V2 } from "./daniel-hawkins";
import { DAVID_VILAYSING_V2 } from "./david-vilaysing";
import { DEREK_YARMER_V2 } from "./derek-yarmer";
import { DINAH_SYKES_V2 } from "./dinah-sykes";
import { ERIK_MURRAY_V2 } from "./erik-murray";
import { ETHAN_CORSON_V2 } from "./ethan-corson";
import { JASON_HART_V2 } from "./jason-hart";
import { JAYME_GOETZ_V2 } from "./jayme-goetz";
import { JEFF_COLYER_V2 } from "./jeff-colyer";
import { JENNIFER_DAY_V2 } from "./jennifer-day";
import { JOY_EAKINS_V2 } from "./joy-eakins";
import { KEN_BROOKS_V2 } from "./ken-brooks";
import { KEN_RAHJES_V2 } from "./ken-rahjes";
import { KRIS_KOBACH_V2 } from "./kris-kobach";
import { LAUREN_REINHOLD_V2 } from "./lauren-reinhold";
import { MARTY_TULEY_V2 } from "./marty-tuley";
import { MASON_RUDER_V2 } from "./mason-ruder";
import { MICHAEL_BERGES_V2 } from "./michael-berges";
import { MICHAEL_SOETAERT_V2 } from "./michael-soetaert";
import { NATHAN_LEIKER_V2 } from "./nathan-leiker";
import { NEAL_YOUNGER_V2 } from "./neal-younger";
import { PAT_PROCTOR_V2 } from "./pat-proctor";
import { PATRICK_SCHMIDT_V2 } from "./patrick-schmidt";
import { PHILIP_SARNECKI_V2 } from "./philip-sarnecki";
import { REBECCA_HERZOG_V2 } from "./rebecca-herzog";
import { ROGER_MARSHALL_V2 } from "./roger-marshall";
import { RON_WILSON_V2 } from "./ron-wilson";
import { RUTH_RUDER_V2 } from "./ruth-ruder";
import { SAM_LANE_V2 } from "./sam-lane";
import { SANDY_JACOBS_V2 } from "./sandy-jacobs";
import { SANDY_SPIDEL_NEUMANN_V2 } from "./sandy-spidel-neumann";
import { SCOTT_BRAUN_V2 } from "./scott-braun";
import { SCOTT_SCHWAB_V2 } from "./scott-schwab";
import { SHAUN_MUSIL_V2 } from "./shaun-musil";
import { STACY_ROGERS_V2 } from "./stacy-rogers";
import { TOBY_DOUGHERTY_V2 } from "./toby-dougherty";
import { TRACEY_MANN_V2 } from "./tracey-mann";
import { TY_MASTERSON_V2 } from "./ty-masterson";
import { VERNON_RUDER_JR_V2 } from "./vernon-ruder-jr";
import { VICKI_SCHMIDT_V2 } from "./vicki-schmidt";

export const V2_CANDIDATES: CandidateFullV2[] = [
  AARON_CUNNINGHAM_V2,
  ALAINA_CUNNINGHAM_V2,
  ALLEN_PARK_V2,
  ANNE_PARELKAR_V2,
  BARB_WASINGER_V2,
  BOBBI_DREILING_V2,
  CHARLOTTE_OHARA_V2,
  CHASE_LAPORTE_V2,
  CHRIS_MANN_V2,
  CHRISTY_CAUBLE_DAVIS_V2,
  CINDY_HOLSCHER_V2,
  COLIN_MCROBERTS_V2,
  CRAIG_MUSSER_V2,
  CRAIG_PALLISTER_V2,
  CURT_VAJNAR_V2,
  DANIEL_HAWKINS_V2,
  DAVID_VILAYSING_V2,
  DEREK_YARMER_V2,
  DINAH_SYKES_V2,
  ERIK_MURRAY_V2,
  ETHAN_CORSON_V2,
  JASON_HART_V2,
  JAYME_GOETZ_V2,
  JEFF_COLYER_V2,
  JENNIFER_DAY_V2,
  JOY_EAKINS_V2,
  KEN_BROOKS_V2,
  KEN_RAHJES_V2,
  KRIS_KOBACH_V2,
  LAUREN_REINHOLD_V2,
  MARTY_TULEY_V2,
  MASON_RUDER_V2,
  MICHAEL_BERGES_V2,
  MICHAEL_SOETAERT_V2,
  NATHAN_LEIKER_V2,
  NEAL_YOUNGER_V2,
  PAT_PROCTOR_V2,
  PATRICK_SCHMIDT_V2,
  PHILIP_SARNECKI_V2,
  REBECCA_HERZOG_V2,
  ROGER_MARSHALL_V2,
  RON_WILSON_V2,
  RUTH_RUDER_V2,
  SAM_LANE_V2,
  SANDY_JACOBS_V2,
  SANDY_SPIDEL_NEUMANN_V2,
  SCOTT_BRAUN_V2,
  SCOTT_SCHWAB_V2,
  SHAUN_MUSIL_V2,
  STACY_ROGERS_V2,
  TOBY_DOUGHERTY_V2,
  TRACEY_MANN_V2,
  TY_MASTERSON_V2,
  VERNON_RUDER_JR_V2,
  VICKI_SCHMIDT_V2,
];

export function getAllCandidateV2Slugs(): string[] {
  return V2_CANDIDATES.map((candidate) => candidate.slug);
}

export function getFullCandidateV2BySlug(slug: string): CandidateFullV2 | undefined {
  return V2_CANDIDATES.find((candidate) => candidate.slug === slug);
}
