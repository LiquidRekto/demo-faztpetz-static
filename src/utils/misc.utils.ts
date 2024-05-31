import type { ComputedRef } from "vue";

export class MiscUtils {
  static getRowDisplayPair(displayObj: any) {
    if (displayObj.lgAndUp.value) {
      return {
        count: 4,
        colLength: 3,
      };
    }
    if (displayObj.md.value) {
      return {
        count: 3,
        colLength: 4,
      };
    }
    if (displayObj.sm.value) {
      return {
        count: 2,
        colLength: 6,
      };
    }
    if (displayObj.xs.value) {
      return {
        count: 1,
        colLength: 12,
      };
    }
  }
}
