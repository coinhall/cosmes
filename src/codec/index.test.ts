import { Buffer } from "node:buffer";
import { describe, expect, it } from "vitest";

import {
  fromBase64ToString,
  fromBase64ToUint8Array,
  fromHexToUint8Array,
  fromStringToBase64,
  fromStringToUint8Array,
  fromUint8ArrayToBase64,
  fromUint8ArrayToHex,
  fromUint8ArrayToString,
} from "./index";

describe("fromHexToUint8Array", () => {
  it("should convert correctly", () => {
    // All possible hex chars
    const input1 = "0123456789abcdef";
    expect(fromHexToUint8Array(input1)).toStrictEqual(
      new Uint8Array(Buffer.from(input1, "hex"))
    );
    expect(fromUint8ArrayToHex(fromHexToUint8Array(input1))).toBe(input1);

    const input2 = "\n\t\r\fhello, world!\n\t\r\f";
    const buffer2 = Buffer.from(input2, "utf-8");
    expect(fromHexToUint8Array(buffer2.toString("hex"))).toStrictEqual(
      new Uint8Array(buffer2)
    );

    const input3 = " 🥰 👪 🇸🇬 ";
    const buffer3 = Buffer.from(input3, "utf-8");
    expect(fromHexToUint8Array(buffer3.toString("hex"))).toStrictEqual(
      new Uint8Array(buffer3)
    );
  });
});

describe("fromUint8ArrayToHex", () => {
  it("should convert correctly", () => {
    const input1 = new Uint8Array([1, 2, 3, 4, 5]);
    expect(fromUint8ArrayToHex(input1)).toStrictEqual(
      Buffer.from(input1).toString("hex")
    );

    const input2 = new Uint8Array(Buffer.from(" 🥰 👪 🇸🇬 "));
    expect(fromUint8ArrayToHex(input2)).toStrictEqual(
      Buffer.from(input2).toString("hex")
    );
  });
});

describe("fromUint8ArrayToBase64", () => {
  it("should convert correctly", () => {
    const input1 = new Uint8Array([1, 2, 3, 4, 5]);
    expect(fromUint8ArrayToBase64(input1)).toStrictEqual(
      Buffer.from(input1).toString("base64")
    );

    const input2 = new Uint8Array(Buffer.from(" 🥰 👪 🇸🇬 "));
    expect(fromUint8ArrayToBase64(input2)).toStrictEqual(
      Buffer.from(input2).toString("base64")
    );
  });
});

describe("fromBase64ToUint8Array", () => {
  it("should convert correctly", () => {
    // All possible base64 chars
    const input1 =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    expect(fromBase64ToUint8Array(input1)).toStrictEqual(
      new Uint8Array(Buffer.from(input1, "base64"))
    );
    expect(Buffer.from(fromBase64ToUint8Array(input1)).toString("base64")).toBe(
      input1
    );

    const input2 = Buffer.from("Hello, World!").toString("base64");
    expect(fromBase64ToUint8Array(input2)).toStrictEqual(
      new Uint8Array(Buffer.from(input2, "base64"))
    );
    expect(Buffer.from(fromBase64ToUint8Array(input2)).toString("base64")).toBe(
      input2
    );
  });
});

describe("fromStringToUint8Array", () => {
  it("should convert correctly", () => {
    // Typical ascii chars
    const input1 = "\n\t\r\fhello, world!\n\t\r\f";
    expect(fromStringToUint8Array(input1)).toStrictEqual(
      new Uint8Array(Buffer.from(input1))
    );
    expect(Buffer.from(fromStringToUint8Array(input1)).toString()).toBe(input1);

    // UTF-8 chars
    const input2 = " 🥰 👪 🇸🇬 ";
    expect(fromStringToUint8Array(input2)).toStrictEqual(
      new Uint8Array(Buffer.from(input2))
    );
    expect(Buffer.from(fromStringToUint8Array(input2)).toString()).toBe(input2);
  });
});

describe("fromUint8ArrayToString", () => {
  it("should convert correctly", () => {
    const array1 = new Uint8Array([1, 2, 3, 4, 5]);
    expect(fromUint8ArrayToString(array1)).toStrictEqual(
      Buffer.from(array1).toString("utf-8")
    );

    // Typical ascii chars
    const input1 = "\n\t\r\fhello, world!\n\t\r\f";
    expect(fromUint8ArrayToString(Buffer.from(input1, "utf-8"))).toStrictEqual(
      input1
    );

    // UTF-8 chars
    const input2 = " 🥰 👪 🇸🇬 ";
    expect(fromUint8ArrayToString(Buffer.from(input2, "utf-8"))).toStrictEqual(
      input2
    );
  });
});

describe("fromStringToBase64", () => {
  it("should convert correctly", () => {
    // Typical ascii chars
    const input1 = "\n\t\r\fhello, world!\n\t\r\f";
    expect(fromStringToBase64(input1)).toStrictEqual(
      Buffer.from(input1, "utf-8").toString("base64")
    );

    // UTF-8 chars
    const input2 = " 🥰 👪 🇸🇬 ";
    expect(fromStringToBase64(input2)).toStrictEqual(
      Buffer.from(input2, "utf-8").toString("base64")
    );
  });
});

describe("fromBase64ToString", () => {
  it("should convert correctly", () => {
    // Typical ascii chars
    const input1 = "\n\t\r\fhello, world!\n\t\r\f";
    expect(
      fromBase64ToString(Buffer.from(input1, "utf-8").toString("base64"))
    ).toStrictEqual(input1);

    // UTF-8 chars
    const input2 = " 🥰 👪 🇸🇬 ";
    expect(
      fromBase64ToString(Buffer.from(input2, "utf-8").toString("base64"))
    ).toStrictEqual(input2);
  });
});
