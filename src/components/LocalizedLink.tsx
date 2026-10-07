import { Link, type LinkProps } from 'react-router-dom';
import { useLocalizedPath } from '../i18n/lang';

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
}

// Internal links are written without the language prefix; this adds it for the current page language.
export function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const localize = useLocalizedPath();
  return <Link to={localize(to)} {...props} />;
}
