import { base16, utf8 } from "@scure/base";
import { describe, expect, it } from "vitest";

import { ethhex } from "./ethhex";
import { hashEthArbitraryMessage, recoverPubKeyFromEthSignature } from "./sign";

describe("hashEthArbitraryMessage", () => {
  it("should hash correctly", () => {
    const msg = utf8.decode("Hello World!");
    const expected = hashEthArbitraryMessage(msg);
    const actual = ethhex.decode(
      "0xec3608877ecbf8084c29896b7eab2a368b2b3c8d003288584d145613dfa4706c"
    );
    expect(actual).toStrictEqual(expected);
  });
});

describe("recoverPubKeyFromEthSignature", () => {
  it("should recover public key correctly from a personal_sign signature", () => {
    const message = utf8.decode("Hello World");
    const signature = ethhex.decode(
      "0x63da4222cbcc36f43b22cbe417aa78963c29d088f7db3c9c6d06417dc34cf2df2dc6ffe9a5c9072a12a16a71c93bebf42bf388357aff81190d7dce166e4fa7ad1c"
    );
    const expected = base16.decode(
      "03f73842e6959e5b79f7979f81016e1e4f4d9481a7351a492ddb0807d98bb31f19".toUpperCase()
    );
    const actual = recoverPubKeyFromEthSignature(message, signature);
    expect(expected).toStrictEqual(actual);
  });
});
