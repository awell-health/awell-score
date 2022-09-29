export const min_response = {
  ibd_control_1a: 0,
  ibd_control_1b: 0,
  ibd_control_3a: 0,
  ibd_control_3b: 0,
  ibd_control_3c: 0,
  ibd_control_3d: 0,
  ibd_control_3e: 0,
  ibd_control_3f: 0,
  ibd_control_5: 0, // VAS
}

export const median_response = {
  ibd_control_1a: 1,
  ibd_control_1b: 1,
  ibd_control_3a: 1,
  ibd_control_3b: 1,
  ibd_control_3c: 1,
  ibd_control_3d: 1,
  ibd_control_3e: 1,
  ibd_control_3f: 1,
  ibd_control_5: 50, // VAS
}

export const max_response = {
  ibd_control_1a: 2,
  ibd_control_1b: 2,
  ibd_control_3a: 2,
  ibd_control_3b: 2,
  ibd_control_3c: 2,
  ibd_control_3d: 2,
  ibd_control_3e: 2,
  ibd_control_3f: 2,
  ibd_control_5: 100, // VAS
}

/**
 * Expected score = 7
 */
export const random_response = {
  ibd_control_1a: 1,
  ibd_control_1b: 999, // is recoded to 1
  ibd_control_3a: 2,
  ibd_control_3b: 0,
  ibd_control_3c: 0,
  ibd_control_3d: 1,
  ibd_control_3e: 2,
  ibd_control_3f: 0,
  ibd_control_5: 54, // VAS
}
