import MarkdownIt from 'markdown-it';
function markdownToHtml(content) {
  if (typeof content !== 'string') {
    return '';
  }
  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  });
  md.renderer.rules.underline = function (tokens, idx) {
    const text = tokens[idx].content;
    return `<span class="underline">${text}</span>`;
  };
  return md.render(content);
}

export default markdownToHtml;