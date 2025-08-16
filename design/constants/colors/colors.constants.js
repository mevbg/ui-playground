import Color from 'colorjs.io';

const Core = {
  BLACK: new Color('okhsl', [0, 0, 0]),                // #000000
  WHITE: new Color('okhsl', [0, 0, 1]),                // #FFFFFF
  RED  : new Color('okhsl', [37, 0.86, 0.61]),         // #E8633C
  GREEN: new Color('okhsl', [140, 1, 0.5])             // #2A8F00
};

export const Monochrome = {
    BLACK: Core.BLACK.clone(),                         // #000000
  GRAY_20: Core.BLACK.clone().set('okhsl.l', 0.2),     // #333333
  GRAY_40: Core.BLACK.clone().set('okhsl.l', 0.4),     // #666666
  GRAY_60: Core.BLACK.clone().set('okhsl.l', 0.6),     // #999999
  GRAY_80: Core.BLACK.clone().set('okhsl.l', 0.8),     // #CCCCCC
  GRAY_90: Core.BLACK.clone().set('okhsl.l', 0.9),     // #E6E6E6
    WHITE: Core.WHITE.clone()                          // #FFFFFF
};

export const Red = {
  RED_50: Core.RED.clone(),                            // #E8633C
  RED_70: Core.RED.clone().set('okhsl.l', 0.7),        // #FF816E
  RED_90: Core.RED.clone().set('okhsl.l', 0.9)         // #FFD8D1
};

export const Green = {
  GREEN_50: Core.GREEN.clone(),                        // #2A8F00
  GREEN_70: Core.GREEN.clone().set('okhsl.l', 0.7),    // #40CD00
  GREEN_90: Core.GREEN.clone().set('okhsl.l', 0.9)     // #9FFF8A
};
