import type { FixedToken, FluidToken, TokenValue } from './Tokens.ts';

export type FixedTokenCardProps = {
  name: string;
  item: FixedToken;
};

export type FluidTokenCardProps = {
  name: string;
  item: FluidToken;
};

export type CardComponentProps = {
  name: string;
  item: TokenValue;
};
