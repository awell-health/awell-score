# Changelog

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
