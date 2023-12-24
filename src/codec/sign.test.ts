import { base16 } from "@scure/base";
import { getBytes, hashMessage } from "ethers";
import { describe, expect, it } from "vitest";

import { ethhex } from "./ethhex";
import { recoverPubKeyFromEthSignature } from "./sign";

describe("recoverPubKeyFromEthSignature", () => {
  it("should recover public key correctly from a personal_sign signature", () => {
    const digest = getBytes(hashMessage("Hello World"));
    const signature = ethhex.decode(
      "0x63da4222cbcc36f43b22cbe417aa78963c29d088f7db3c9c6d06417dc34cf2df2dc6ffe9a5c9072a12a16a71c93bebf42bf388357aff81190d7dce166e4fa7ad1c"
    );
    const pubKey = recoverPubKeyFromEthSignature(digest, signature);
    expect(pubKey).toStrictEqual(
      base16.decode(
        "03f73842e6959e5b79f7979f81016e1e4f4d9481a7351a492ddb0807d98bb31f19".toUpperCase()
      )
    );
  });
});
