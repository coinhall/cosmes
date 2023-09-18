// @ts-check

import { toKeplrChainInfo, getChainInfo } from "../dist/client";

/**
 * This script generates the src/protobufs directory from the proto files in the
 * repos specified in `REPOS`. It uses `buf` to generate TS files from the proto
 * files, and then generates an `index.ts` file to re-export  generated code.
 */

const chain = await getChainInfo("archway", { assetlist: true });
const info = toKeplrChainInfo(chain);
console.log(JSON.stringify(info, null, 2));
console.log(JSON.stringify(chain, null, 2));

console.log("ChainInfo generation completed successfully!");
