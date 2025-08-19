import { opacity as Opacities } from '#public/assets/tokens/js/static.js';
import type { KeyValuePairType } from '#storybook/common/components/KeyValuePair/KeyValuePair';
import TileCard from '#storybook/common/components/TileCard/TileCard';
import React from 'react';

const colorMix = (color: string, opacity: string = '100%') =>
  `color-mix(in srgb, var(${color}) ${opacity}, transparent calc(100% - ${opacity}))`;

export default function ColorCard({ color }) {
  const [selectedOpacity, setSelectedOpacity] = React.useState('1');
  const [backgroundColor, setBackgroundColor] = React.useState(`var(${color.cssVar})`);

  const details: KeyValuePairType[] = React.useMemo(() => {
    const baseDetails: KeyValuePairType[] = [
      {
        label: 'Tailwind CSS',
        values: [color.tailwind.bg, color.tailwind.text, color.tailwind.any].filter(Boolean)
      },
      {
        label: 'CSS Variable',
        values: [color.cssVar]
      },
      {
        label: 'OKHSL Value',
        values: [color.okhsl]
      },
      {
        label: 'Hex Value',
        values: [color.hex]
      },
      {
        label: 'Opacity Value',
        values: [parseFloat(selectedOpacity) < 1 ? backgroundColor : '-']
      }
    ];

    return baseDetails;
  }, [color, selectedOpacity]);

  const handleOpacityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSelectedOpacity(value);

    const opacityValue = parseFloat(value);
    const opacityProperty = `calc(var(--mev-opacity-${opacityValue * 100}) * 100%)`;
    const bgColor =
      opacityValue === 1 ? `var(${color.cssVar})` : colorMix(color.cssVar, opacityProperty);

    setBackgroundColor(bgColor);
  };

  return (
    <>
      <TileCard
        className="color-card"
        header={
          <div
            style={{
              flex: 'auto',
              height: '100%',
              overflow: 'hidden',
              backgroundImage: `var(--tile-card-transparency)`
            }}
          >
            <div
              style={{
                backgroundColor,
                height: '10rem',
                margin: '0.75em',
                borderRadius: 0,
                boxShadow: '0px 0px 20px -10px var(--mev-color-primitive-gray60)',
                border: `1px solid color-mix(in srgb, transparent 0%, var(${color.cssVar}))`
              }}
            />
          </div>
        }
        title={color.title}
        controllers={
          <div>
            <label className="mb-075x100 mt-150x200 block text-script">Opacity:</label>
            <select
              className="w-full rounded-four border-base border-solid border-gray-weak bg-primary-base py-075x100 text-script text-primary-base"
              onChange={handleOpacityChange}
              value={selectedOpacity}
            >
              <option value="1">Full</option>
              {Object.values(Opacities)
                .reverse()
                .map((value: string) => (
                  <option value={value} key={value}>
                    {parseFloat(value).toFixed(2)}
                  </option>
                ))}
            </select>
          </div>
        }
        details={details}
      />
    </>
  );
}
