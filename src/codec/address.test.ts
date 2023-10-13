import { describe, expect, it } from "vitest";

import { resolveBech32Address } from "./address";

const PUB_KEY_1 = "A6Y9fcWSn5Av/HLHBwthTaVE/vdyRKvsTzi5U7j9bFj5"; // random pub pub key
const PUB_KEY_2 = "Ag/a1BOl3cdwh67Z8iCbGmAu4WWmBwtuQlQMbDaN385V"; // coinhall.org val pubkey

describe("resolveBech32Address", () => {
  it("should resolve stars address correctly", () => {
    const translated = resolveBech32Address(PUB_KEY_1, "stars");
    expect(translated).toBe("stars14y420auq56p6xgt78sl8vwz3jxy77r9cuw900r");
  });

  it("should resolve cosmos address correctly", () => {
    const translated = resolveBech32Address(PUB_KEY_1, "cosmos");
    expect(translated).toBe("cosmos14y420auq56p6xgt78sl8vwz3jxy77r9cgjjjyj");
  });

  it("should resolve terra address correctly", () => {
    const translated = resolveBech32Address(PUB_KEY_2, "terra");
    expect(translated).toBe("terra1ge3vqn6cjkk2xkfwpg5ussjwxvahs2f6aytr5j");
  });

  it("should resolve terravaloper address correctly", () => {
    const translated = resolveBech32Address(PUB_KEY_2, "terravaloper");
    expect(translated).toBe(
      "terravaloper1ge3vqn6cjkk2xkfwpg5ussjwxvahs2f6at87yp"
    );
  });
});
