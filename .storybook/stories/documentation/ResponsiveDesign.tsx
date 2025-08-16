import ArticleWrapper from '#storybook/common/components/ArticleWrapper/ArticleWrapper';
import React from 'react';

export default function ResponsiveDesign() {
  return (
    <React.Fragment>
      <div className="sb-unstyled">
        <ArticleWrapper title="Responsive Design">
          <p>
            This page describes the comprehensive strategy for <strong>responsive behavior</strong>{' '}
            of the user interface in the playground.mev.bg project. The approach combines{' '}
            <strong>fixed and fluid values</strong>, uses an <strong>adaptive column grid</strong>,
            as well as <strong>optimal scaling of typography and spacing</strong> according to
            screen width.
          </p>

          <img src="/responsiveness.png" alt="Playground Responsive Design" />

          <h2 className="sbdocs-title">1. Screen Logic and Design Spaces</h2>
          <p>
            A Design Space refers to a clearly defined area of the user interface that has been the
            subject of deliberate analysis, thoughtful consideration, structured planning, and
            detailed visual composition.
          </p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Design Space</th>
                  <th>Range Name</th>
                  <th>Range Dimensions</th>
                  <th>Devices Area</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>❌</td>
                  <td>XS</td>
                  <td>&lt; 300px</td>
                  <td>Watches</td>
                  <td>Downscaled version of the S Design Space’s lowest width</td>
                </tr>
                <tr>
                  <td>✅</td>
                  <td>S</td>
                  <td>300–600px</td>
                  <td>Phones</td>
                  <td>
                    Typography and spacing fixed to minimum values; <br />
                    Grid columns increased
                  </td>
                </tr>
                <tr>
                  <td>✅</td>
                  <td>M</td>
                  <td>600–1200px</td>
                  <td>Tablets</td>
                  <td>
                    Typography and spacing values scale fluidly between a predefined min and max
                    width; <br />
                    Grid columns increased
                  </td>
                </tr>
                <tr>
                  <td>✅</td>
                  <td>L</td>
                  <td>1200–1800px</td>
                  <td>Laptops</td>
                  <td>
                    Typography and spacing fixed to maximum values; <br />
                    Grid columns increased
                  </td>
                </tr>
                <tr>
                  <td>✅</td>
                  <td>XL</td>
                  <td>1800–2100px</td>
                  <td>Desktops</td>
                  <td>
                    Typography and spacing fixed to maximum values; <br />
                    Grid columns increased
                  </td>
                </tr>
                <tr>
                  <td>❌</td>
                  <td>XXL</td>
                  <td>&gt; 2100px</td>
                  <td>Big Monitors</td>
                  <td>Upscaled version of the XL Design Space’s widest width (optional)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="sbdocs-title">2. Typography Logic</h2>
          <p>
            Typography follows a structured responsive scheme designed to balance readability and
            design intent across all screen widths:
          </p>
          <ul>
            <li>
              <strong>Up to 600px</strong>:<br />
              Typography values are fixed to predefined <strong>minimums</strong> — individual font
              sizes <strong>do not</strong> scale down below this baseline. However,{' '}
              <strong>below 300px</strong>, instead of scaling each text element separately, the
              entire layout (including typography) undergoes a global downscaling. This is achieved
              by dynamically reducing the root font-size, based on the viewport width. All{' '}
              <code>rem</code>-based values adjust proportionally, preserving visual relationships.
              This behavior ensures better layout preservation on ultra-small screens.
            </li>
            <li>
              <strong>From 600px to 1200px</strong>:<br />
              Typography scales fluidly between defined min and max values. For example, a body text
              might scale from 14px to 18px, depending on the viewport width. This scaling is
              applied on a per-token basis (e.g., individual heading levels, paragraphs), using{' '}
              <code>rem</code> units. The root font-size remains unchanged in this range — only the
              values of the
              <code>rem</code>-based tokens scale.
            </li>
            <li>
              <strong>Above 1200px</strong>:<br />
              Typography becomes fixed to the <strong>maximum</strong> values for each text element.
              No further fluid scaling is applied individually to text tokens beyond this point,
              maintaining readability and visual consistency on large displays. Optionally, for
              viewports <strong>above 2100px</strong>, a global upscaling mode can be enabled. This
              increases the root font-size in proportion to the viewport width, resulting in a
              holistic enlargement of the entire layout, including all typography and spacing
              defined in <code>rem</code>. This is an optional feature, intended for special use
              cases such as presentation mode, smart TVs, or exhibition displays.
            </li>
          </ul>

          <h2 className="sbdocs-title">3. Spacing Logic</h2>
          <p>
            Spacing follows the same responsive scaling philosophy as typography, ensuring
            proportionality, clarity, and layout consistency across all screen widths:
          </p>
          <ul>
            <li>
              <strong>Up to 600px</strong>:<br />
              Spacing values are fixed to predefined minimums — individual paddings, margins, and
              layout gaps <strong>do not</strong> scale down further. However,{' '}
              <strong>below 300px</strong>, instead of scaling spacing tokens individually, the
              entire layout undergoes global downscaling, driven by a reduction of the root
              font-size based on viewport width. Since all spacing values are defined in{' '}
              <code>rem</code> units, this results in a proportional reduction of spacing across the
              UI, maintaining spatial relationships without breaking the layout.
            </li>
            <li>
              <strong>From 600px to 1200px</strong>:<br />
              Spacing scales fluidly across the viewport width. This includes internal spacing
              (e.g., padding), external spacing (e.g., margins), and structural spacing (e.g., grid
              gutters). Scaling is applied on a per-token basis, using <code>rem</code> units, while
              the root font-size remains unchanged. The result is a smooth and intentional expansion
              of white space, aligned with typographic scaling in the same range.
            </li>
            <li>
              <strong>Above 1200px</strong>:<br />
              Spacing values are fixed to their defined maximums — avoiding excessive white space or
              "bloating" on wide screens. Optionally, for viewports <strong>above 2100px</strong>, a
              global upscaling mode can be activated. This increases the root font-size
              proportionally to the viewport width, causing all <code>rem-based</code> spacing
              tokens to scale up together with typography. This optional mode ensures consistent
              visual proportions on ultra-wide displays such as large monitors, smart TVs, or
              presentation screens.
            </li>
          </ul>

          <h2 className="sbdocs-title">4. Grid Logic</h2>
          <p>
            The playground.mev.bg layout is built upon a responsive{' '}
            <strong>column-based grid system</strong> that adapts to screen width. Here's how it
            behaves across different breakpoints:
          </p>
          <ul>
            <li>
              <strong>From 300px to 1500px</strong>:<br />A <strong>12-column</strong> grid is used.
              This is the primary layout structure for most viewports, including tablets and
              desktops.
            </li>
            <li>
              <strong>From 1500px to 1800px</strong>:<br />
              The grid transitions to a <strong>10-column</strong> layout.
            </li>
            <li>
              <strong>Above 1200px</strong>:<br />
              The system returns to a <strong>12-column</strong> grid.
            </li>
          </ul>
          <p>
            Starting from 600px and up, the outer margin (left and right) transitions from a 1:1 to
            a 2:1 ratio, meaning it effectively doubles.
          </p>

          <h2 className="sbdocs-title">5. Column Count Logic</h2>
          <p>
            The number of columns used to display card components adjusts fluidly based on screen
            width, ensuring optimal use of space:
          </p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Width Range</th>
                  <th>Columns</th>
                  <th>Grid Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>300px → 600px</td>
                  <td>1</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>600px → 900px</td>
                  <td>2</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>900px → 1200px</td>
                  <td>3</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>1200px → 1500px</td>
                  <td>4</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>1500px → 1800px</td>
                  <td>5</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>1800px → 2100px</td>
                  <td>6</td>
                  <td>Flexible</td>
                </tr>
                <tr>
                  <td>2100px → ∞</td>
                  <td>6</td>
                  <td>Fixed grid + flexible margins</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            At <strong>2100px and beyond</strong>, the layout maintains <strong>6 columns</strong>{' '}
            using a fixed grid, but with <strong>flexible outer margins</strong> for balanced visual
            distribution.
          </p>
          <p>
            Additionally, <strong>card image height is fixed to 180px</strong>, preserving a
            consistent vertical rhythm across all breakpoints.
          </p>

          <h2 className="sbdocs-title">6. Scaling Below 300px and Above 2100px</h2>
          <h3 className="sbdocs-title">Below 300px (e.g., smartwatches):</h3>
          <ul>
            <li>
              A <strong>scaled version</strong> of the mobile view is used.
            </li>
            <li>Grid and typography are fixed to absolute minimum.</li>
          </ul>
          <h3 className="sbdocs-title">Above 2100px (e.g., 2K / 4K monitors):</h3>
          <ul>
            <li>
              Components <strong>continue to scale</strong> (e.g., additional spacing, enlarged
              visual elements).
            </li>
            <li>
              Grid columns remain 6, but <strong>flexible margins</strong> are added to ensure
              balanced distribution in a huge viewport.
            </li>
          </ul>
        </ArticleWrapper>
      </div>
    </React.Fragment>
  );
}
