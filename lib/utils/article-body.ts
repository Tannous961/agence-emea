export function parseArticleBody(content: string): string[] {
  return content.trim().split('\n\n').filter(Boolean);
}

export function renderArticleParagraph(para: string, index: number) {
  if (para.startsWith('**') && para.endsWith('**')) {
    const text = para.slice(2, -2);
    return {
      type: 'heading' as const,
      key: index,
      text,
    };
  }

  return {
    type: 'paragraph' as const,
    key: index,
    text: para.replace(/\*\*(.*?)\*\*/g, '$1'),
  };
}
