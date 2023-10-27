import sanitizeHtml from 'sanitize-html';

export const useSanitizing = (text: string | undefined): { __html: string } => {
  if (!text) return { __html: '' };
  const sanitize = (dirty:string) => ({
    __html: sanitizeHtml(dirty)
  });

  return sanitize(text);
};
