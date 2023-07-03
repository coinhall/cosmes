import { DeepPrettify } from "../../typeutils/prettify";
import { SimulateOsmosisSinglePoolSwapParams } from "../apis/simulateOsmosisSinglePoolSwap";
import { Adapter } from "./Adapter";
import { MsgSwapExactAmountIn } from "./MsgSwapExactAmountIn";

type Data = DeepPrettify<
  SimulateOsmosisSinglePoolSwapParams & {
    sender: string;
    minReceived: bigint;
  }
>;

/**
 * Wrapper for {@link MsgSwapExactAmountIn} for a better API around single pool swaps.
 */
export class MsgOsmosisSinglePoolSwap implements Adapter {
  private readonly msgSwapExactAmountIn: MsgSwapExactAmountIn;

  constructor(data: Data) {
    this.msgSwapExactAmountIn = new MsgSwapExactAmountIn({
      sender: data.sender,
      routes: [
        {
          poolId: data.poolId,
          tokenOutDenom: data.toAsset,
        },
      ],
      tokenIn: {
        amount: data.fromAmount.toString(),
        denom: data.fromAsset,
      },
      tokenOutMinAmount: data.minReceived.toString(),
    });
  }

  public toProto() {
    return this.msgSwapExactAmountIn.toProto();
  }

  public toAmino() {
    return this.msgSwapExactAmountIn.toAmino();
  }
}
