import { describe, expect, it } from "vitest";

import { sortObjectByKey, serialiseSignDoc } from "./serialise";
import { StdSignDoc } from "cosmes/registry";


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

describe("serialiseSignDoc", () => {
  it('should serialize and return a Uint8Array', () => {
    const doc: StdSignDoc = {
      account_number: '12345',
      chain_id: 'cosmoshub-4',
      fee: {
        amount: [{ denom: 'uatom', amount: '5000' }],
        gas: '200000',
      },
      memo: 'test memo',
      msgs: [],
      sequence: '1',
    };

    const result = serialiseSignDoc(doc);

    expect(result).toBeInstanceOf(Uint8Array);
    const decodedResult = new TextDecoder().decode(result);
    expect(decodedResult).toContain('cosmoshub-4');
    expect(decodedResult).toContain('uatom');
  });
});
