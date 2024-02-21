import type { CalculationsLibraryType } from '../../types/calculations.types'
import { ten_meter_walk_test } from './10_meter_walk_test/10_meter_walk_test'
import { age_calc } from './age_calc/age_calc'
import { asrs } from './asrs/asrs'
import { audit } from './audit/audit'
import { beck } from './beck/beck'
import { bmi_imperial, bmi_metric } from './bmi'
import { breast_q as breast_q_conserving_therapy_pre_and_postoperative } from './breast_q/breast_conserving/breast_q'
import { cade_q_sv } from './cade_q'
import { caregiver_strain_index } from './caregiver_strain_index/caregiver_strain_index'
import { cat } from './cat/cat'
import { ccq } from './ccq/ccq'
import { cdlqi } from './cdlqi/cdlqi'
import { CHA2DS2_VASc_Score } from './CHA2DS2_VASc_Score/CHA2DS2_VASc_Score'
import { chc_preop_brochure_triage } from './chc'
import { femmes_enceintes_triage } from './chc/femmes_enceintes/triage/triage'
import { comi_back, comi_neck } from './comi'
import { compass_31 } from './compass_31/compass_31'
import { constant_murley_score_orthotoolkit } from './constant_murley_score'
import { core_om } from './core_om/core_om'
import { cpdi } from './cpdi/cpdi'
import { csi } from './csi/csi'
import { dast_10 } from './dast_10/dast_10'
import { demo_calculation } from './demo_calculation/demo_calculation'
import { difference_calc } from './difference_calc/difference_calc'
import { dlqi } from './dlqi/dlqi'
import { dn4 } from './dn4/dn4'
import { dri } from './dri/dri'
import {
  eortc_qlq_br23,
  eortc_qlq_br45,
  eortc_qlq_c30,
  eortc_qlq_cr29,
  eortc_qlq_lc13,
  eortc_qlq_lc29,
  eortc_qlq_pr25,
} from './eortc'
import { epic_26 } from './epic_26/epic_26'
import { eq5d_3l, eq5d_5l } from './eq5d'
import { ess } from './ess/ess'
import { faam } from './faam/faam'
import { short_fes_i } from './fes_i'
import { fnd } from './fnd/fnd'
import { foot_function_index_5pt } from './foot_function_index'
import {
  forgotten_joint_score_hip,
  forgotten_joint_score_knee,
} from './forgotten_joint_score_12'
import { gad_7 } from './GAD_7/gad_7'
import { ghq_12 } from './ghq_12/ghq_12'
import { hads } from './hads/HADS_score'
import { harris_hip_score } from './harris_hip_score/harris_hip_score'
import { hoos_extended } from './hoos_extended/hoos_extended'
import { hoos_ps } from './hoos_ps/hoos_ps'
import { hos } from './hos/hos'
import { hrqol_4 } from './hrqol'
import { ias } from './ias/ias'
import { IBD_control } from './IBD_control/IBD_control'
import { ibd_disk_total_score } from './ibd_disk_total_score/ibd_disk_total_score'
import { ikdc } from './ikdc/ikdc'
import { ipss } from './ipss/ipss'
import { isi } from './isi/isi'
import { k_bild } from './k_bild/k_bild'
import { KCCQ_12 } from './KCCQ_12/KCCQ_12'
import { koos_ps } from './koos_ps/koos_ps'
import { mds_updrs } from './mds_updrs/mds_updrs'
import { mini_best_test } from './mini_best_test/mini_best_test'
import { mmse } from './mmse/mmse'
import { moca } from './moca/moca'
import { modified_caregiver_strain_index } from './modified_caregiver_strain_index/modified_caregiver_strain_index'
import { mpi } from './mpi/mpi'
import { msq } from './msq/msq'
import { ndi } from './ndi/ndi'
import { oas } from './oas/oas'
import { ompq, ompq_10 } from './orebro'
import { oswestry } from './oswestry/oswestry'
import { oxford_hip_score } from './oxford_hip_score/oxford_hip_score'
import { oxford_knee_score } from './oxford_knee_score/oxford_knee_score'
import { packyears } from './packyears/packyears'
import { panss_6 } from './panss_6/panss_6'
import { paq_c } from './paq_c/paq_c'
import { pci } from './pci/pci'
import { pcl_5 } from './pcl_5/pcl_5'
import { pcs } from './pcs/pcs'
import { pdq_8 } from './pdq_8/pdq_8'
import { phq_2 } from './phq_2/phq_2'
import { phq_4 } from './phq_4/phq_4'
import { phq_9 } from './phq_9/phq_9'
import { physical_activity_measurement } from './physical_activity_measurements/physical_activity_measurements'
import { posas_observer } from './posas_observer/posas_observer'
import { posas_patient } from './posas_patient/posas_patient'
import { pro_ctcae } from './pro_ctcae/pro_ctcae'
import { PRO2 } from './pro2/pro2'
import { promis_10 } from './promis_10/promis_10'
import { prtee } from './prtee/prtee'
import { psk } from './psk/psk'
import { qol_stoma } from './qol_stoma/qol_stoma'
import { quickdash } from './quickdash/quickdash'
import { sccai } from './sccai/sccai'
import { scl90 } from './scl90/scl90'
import { scl90r } from './scl90r/scl90r'
import { sdq } from './sdq/sdq'
import { sf12, sf36 } from './short form surveys'
import { spadi } from './spadi/spadi'
import { simple_shoulder_test } from './sst/simple_shoulder_test'
import { start_back_screening_tool } from './start_back_screening_tool/start_back_screening_tool'
import { tampa } from './tampa/tampa'
import { visa_a, visa_g, visa_p } from './visa'
import { yp_core } from './yp_core/yp_core'
import { zarit_12 } from './zarit_12/zarit_12'

export const CALCULATIONS: CalculationsLibraryType = {
  age_calc,
  asrs,
  audit,
  beck,
  bmi: bmi_metric,
  bmi_imperial,
  breast_q_conserving_therapy_pre_and_postoperative,
  cade_q_sv,
  caregiver_strain_index,
  cat,
  ccq,
  cdlqi,
  CHA2DS2_VASc_Score,
  chc_preop_brochure_triage,
  femmes_enceintes_triage,
  comi_back,
  comi_neck,
  compass_31,
  constant_murley_score_orthotoolkit,
  core_om,
  cpdi,
  csi,
  dast_10,
  demo_calculation,
  difference_calc,
  dlqi,
  dn4,
  dri,
  eortc_qlq_br23,
  eortc_qlq_br45,
  eortc_qlq_c30,
  eortc_qlq_cr29,
  eortc_qlq_lc13,
  eortc_qlq_lc29,
  eortc_qlq_pr25,
  epic_26,
  eq5d_3l,
  eq5d_5l,
  ess,
  faam,
  fnd,
  foot_function_index_5pt,
  forgotten_joint_score_hip,
  forgotten_joint_score_knee,
  gad_7,
  ghq_12,
  hads,
  harris_hip_score,
  hoos_extended,
  hoos_ps,
  hos,
  hrqol_4,
  ias,
  IBD_control,
  ibd_disk_total_score,
  ikdc,
  isi,
  ipss,
  k_bild,
  KCCQ_12,
  koos_ps,
  mds_updrs,
  mini_best_test,
  mmse,
  moca,
  modified_caregiver_strain_index,
  mpi,
  msq,
  ndi,
  oas,
  ompq,
  ompq_10,
  oswestry,
  oxford_hip_score,
  oxford_knee_score,
  packyears,
  panss_6,
  paq_c,
  pci,
  pcl_5,
  pcs,
  pdq_8,
  phq_2,
  phq_4,
  phq_9,
  physical_activity_measurement,
  posas_observer,
  posas_patient,
  pro_ctcae,
  PRO2,
  promis_10,
  prtee,
  psk,
  qol_stoma,
  quickdash,
  sccai,
  scl90,
  scl90r,
  sdq,
  sf12,
  sf36,
  short_fes_i,
  spadi,
  simple_shoulder_test,
  start_back_screening_tool,
  tampa,
  ten_meter_walk_test,
  visa_a,
  visa_g,
  visa_p,
  yp_core,
  zarit_12,
}
