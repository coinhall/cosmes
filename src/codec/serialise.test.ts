import { utf8 } from "@scure/base";
import { hashMessage } from "ethers";
import { describe, expect, it } from "vitest";

import { ethhex } from "./ethhex";
import { hashEthArbitraryMessage, sortObjectByKey } from "./serialise";

describe("sortObjectByKey", () => {
  it("should sort keys correctly", () => {
    const obj = {
      zzz: 1,
      aaa: 1,
      xxx: null,
      bbb: {
        ttt: {
          ppp: true,
          iii: undefined,
          lll: "1",
        },
        ddd: [4, 8, 3, undefined, 4, 5, 7, 8],
      },
    };
    const expected = {
      aaa: 1,
      bbb: {
        ddd: [4, 8, 3, undefined, 4, 5, 7, 8], // arrays are not sorted
        ttt: {
          iii: undefined,
          lll: "1",
          ppp: true,
        },
      },
      xxx: null,
      zzz: 1,
    };
    // Before sorting, the stringified versions of the objects should NOT be equal
    expect(JSON.stringify(obj)).not.toBe(JSON.stringify(expected));
    // After sorting, the stringified versions of the objects should be equal
    expect(JSON.stringify(sortObjectByKey(obj))).toBe(JSON.stringify(expected));
  });
});

describe("hashEthArbitraryMessage", () => {
  it("should hash correctly", () => {
    const msg = utf8.decode("Hello World!");
    const expected = hashEthArbitraryMessage(msg);
    const actual = ethhex.decode(hashMessage(msg));
    expect(actual).toStrictEqual(expected);
  });
});
