import React from 'react';
import ArticleCTA from './ArticleCTA';

interface ArticleContentProps {
  content: string;
  equipmentSlugs: string[];
}

export default function ArticleContent({ content, equipmentSlugs }: ArticleContentProps) {
  // A simple way to inject formatting or components into raw HTML in React.
  // In a real production CMS scenario, you might use MDX or react-html-parser.
  // Here, we split by <h3> to inject the CTA roughly in the middle.

  const parts = content.split('<h3>');
  const hasMultipleParts = parts.length > 1;

  // Use the first related equipment for the inline CTA
  const mainEquipmentSlug = equipmentSlugs[0] || 'miniexcavadora';

  return (
    <article className="w-full max-w-2xl text-neutral-600 text-base leading-relaxed prose-components">
      {/* Custom styles for the article body to match the blueprint */}
      <style dangerouslySetInnerHTML={{ __html: `
        .prose-components h2 { font-size: 1.5rem; font-weight: 700; color: #171717; margin-top: 2.5rem; margin-bottom: 1rem; }
        .prose-components h3 { font-size: 1.125rem; font-weight: 600; color: #171717; margin-top: 2rem; margin-bottom: 0.75rem; }
        .prose-components p { margin-bottom: 1rem; }
        .prose-components ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .prose-components blockquote { border-left: 4px solid #F97316; padding-left: 1.25rem; font-style: italic; color: #737373; margin: 1.5rem 0; }
        .prose-components strong { font-weight: 600; color: #171717; }
        .prose-components a { color: #F97316; text-decoration: none; }
        .prose-components a:hover { text-decoration: underline; }
      `}} />

      {hasMultipleParts ? (
        <>
          {/* Render the first part */}
          <div dangerouslySetInnerHTML={{ __html: parts[0] }} />

          {/* Inject CTA before the first H3 encountered */}
          <ArticleCTA equipmentSlug={mainEquipmentSlug} />

          {/* Render the rest */}
          <div dangerouslySetInnerHTML={{ __html: '<h3>' + parts.slice(1).join('<h3>') }} />
        </>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <ArticleCTA equipmentSlug={mainEquipmentSlug} />
        </>
      )}
    </article>
  );
}
