# Changelog

## Unreleased

- Added the WHO-5 (World Health Organization-Five Well-Being Index) as `who_5`.
  Five items scored 0-5, returning `WHO5_RAW_SCORE` (0-25) and
  `WHO5_PERCENTAGE_SCORE` (raw score × 4, 0-100), per the WHO 2024 open access
  publication (WHO/UCN/MSD/MHE/2024.1). All items are required: the publication
  specifies no missing-answer handling, so an incomplete payload fails
  validation rather than scoring omissions as `0`.
- WHO-5 is the first score to set `licensing_status`, as `license_required` with
  `license_contact` pointing at WHO. The instrument is © WHO 2024 under
  CC BY-NC-SA 3.0 IGO, which permits non-commercial use with attribution only;
  commercial use requires permission from WHO.

## 1.1.9

- Added optional `licensing_status` and `license_contact` fields to instrument
  definitions and the API schema output (`apiSchema`). Both are additive and
  default to `unknown` / `null` respectively when omitted; existing definitions
  and consumers are unaffected. Note: consumers using a strict/closed JSON
  Schema validator (`additionalProperties: false`) against the API response
  will need to account for these two new keys.
- Removed PANSS-family instruments. Instrument content is subject to third-party
  copyright and licensing; scoring for these instruments is not available in this
  library. Users requiring these instruments should obtain them from the rights holder.
