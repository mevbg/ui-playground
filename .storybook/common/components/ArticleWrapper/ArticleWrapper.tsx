/** @jsxImportSource react */
import React from 'react';
import './ArticleWrapper.css';

interface ArticleWrapperProps {
  title: string;
  children?: React.ReactNode;
}

export default function ArticleWrapper({ title, children }: ArticleWrapperProps) {
  return (
    <>
      <article className="article-wrapper">
        <h1 className="sbdocs-title">{title}</h1>

        {children}
      </article>
    </>
  );
}
