import * as Colors from '#design/constants/colors/contextual-colors.constants.js';
import ArticleWrapper from '#storybook/common/components/ArticleWrapper/ArticleWrapper';
import { getStorybookColorData, orderColorGroupsByTitle } from '#storybook/utils';
import { toTitleCase } from '#utils/strings.utils';
import React, { useState } from 'react';
import ColorTokens from '../ColorTokens';

const tabs = Object.keys(Colors).map((tab) => toTitleCase(tab));

const data = Object.fromEntries(
  Object.entries({
    lightContent: getStorybookColorData(Colors.content('light'), 'content'),
    lightBackground: getStorybookColorData(Colors.background('light'), 'background'),
    darkContent: getStorybookColorData(Colors.content('dark'), 'content'),
    darkBackground: getStorybookColorData(Colors.background('dark'), 'background')
  }).map(([key, value]) => [
    key,
    orderColorGroupsByTitle(value, ['Primary', 'Gray', 'Red', 'Green'])
  ])
);

const ContentColorTab = () => {
  return (
    <div>
      <div className="sbdocs sbdocs-content light-colors">
        <ColorTokens data={data.lightContent} />
      </div>
      <div className="sbdocs sbdocs-content dark-colors">
        <ColorTokens data={data.darkContent} />
      </div>
    </div>
  );
};

const BackgroundColorTab = () => {
  return (
    <div>
      <div className="sbdocs sbdocs-content light-colors">
        <ColorTokens data={data.lightBackground} />
      </div>
      <div className="sbdocs sbdocs-content dark-colors">
        <ColorTokens data={data.darkBackground} />
      </div>
    </div>
  );
};

export default function ContextualColorTokens() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderTabContent = (tabName: string) => {
    switch (tabName) {
      case 'Content':
        return <ContentColorTab />;

      case 'Background':
        return <BackgroundColorTab />;

      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <div className="sb-unstyled">
        <ArticleWrapper title="Contextual Color Tokens">
          <p>
            This page outlines the contextual color tokens defined in the Playground Design System.
            These tokens apply the primitive palette to specific UI roles, such as{' '}
            <code>content</code> (e.g. text, borders, icons) and <code>background</code> (e.g.
            surfaces, layers, states). Organized into tabs, they ensure visual consistency and
            semantic clarity across all interface components.
          </p>
        </ArticleWrapper>

        <div className="tabs-container">
          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tabs-content">
            <div className="tab-content">{renderTabContent(activeTab)}</div>
          </div>
        </div>

        <style>{`
          .tabs-container {
            margin-block-start: var(--mev-size-500x600);
          }

          .tabs-nav {
            display: flex;
            border-bottom: 1px solid var(--mev-color-primitive-red50);
            margin-bottom: 3rem;
          }

          .tab-button {
            padding: 0.75rem var(--mev-size-150x200);
            border: none;
            border-radius: 4px 4px 0 0;
            background: none;
            cursor: pointer;
            font-family: var(--mev-font-family-sans);
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--mev-color-content-primary-base);
            border-bottom: 1px solid transparent;
          }

          .tab-button:hover {
            background-color: var(--mev-color-primitive-red90);
            color: var(--mev-color-primitive-black);
          }

          .tab-button.active {
            color: var(--mev-color-primitive-white);
            background-color: var(--mev-color-primitive-red50);
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}
