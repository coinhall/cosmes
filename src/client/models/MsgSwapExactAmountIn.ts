import { PlainMessage } from "@bufbuild/protobuf";
import { OsmosisGammV1beta1MsgSwapExactAmountIn as ProtoMsgSwapExactAmountIn } from "cosmes/protobufs";

import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";

type Data = DeepPrettify<Required<PlainMessage<ProtoMsgSwapExactAmountIn>>>;

export class MsgSwapExactAmountIn implements Adapter {
  private readonly data: Data;

  constructor(data: Data) {
    this.data = data;
  }

  public toProto() {
    return new ProtoMsgSwapExactAmountIn(this.data);
  }

  public toAmino() {
    return {
      type: "osmosis/gamm/swap-exact-amount-in",
      value: {
        routes: this.data.routes.map(({ poolId, tokenOutDenom }) => ({
          pool_id: poolId.toString(),
          token_out_denom: tokenOutDenom,
        })),
        sender: this.data.sender,
        token_in: this.data.tokenIn,
        token_out_min_amount: this.data.tokenOutMinAmount,
      },
    };
  }
}
