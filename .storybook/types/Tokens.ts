export type FixedToken = string | { $value: string };
export type FluidToken = { $value: { min: string; max: string } };
export type TokenValue = FixedToken | FluidToken;
