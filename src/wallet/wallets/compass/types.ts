import { Leap } from "../leap/types";

// Type is similar to Leap
export type Compass = Leap;

export type Window = {
  compass?: Compass | undefined;
};
