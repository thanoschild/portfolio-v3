import Link from "next/link";

export const formatText = (
  text: string,
  bold: string[] = [],
  links: { match: string; href: string }[] = []
) => {
  const tokens = [...(bold || []), ...(links?.map((l) => l.match) || [])];
  if (!tokens.length) return [text];

  const regex = new RegExp(`(${tokens.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, idx) => {
    const link = links?.find((l) => l.match === part);
    if (link) {
      return (
        <Link
          key={idx}
          href={link.href}
          target="_blank" 
          className="font-semibold text-theme-text hover:text-theme-main transition-colors"
        >
          {part}
        </Link>
      );
    }

    if (bold?.includes(part)) {
      return (
        <span key={idx} className="font-semibold text-theme-text hover:text-theme-main">
          {part}
        </span>
      );
    }

    return <span key={idx}>{part}</span>;
  });
};
