import { Window as KeplrWindow } from "@keplr-wallet/types";

import { Window as CosmostationWindow } from "./cosmostation/types";
import { Window as LeapWindow } from "./leap/types";
import { Window as StationWindow } from "./station/types";

declare global {
  interface Window
    extends KeplrWindow,
      CosmostationWindow,
      StationWindow,
      LeapWindow {}
}
