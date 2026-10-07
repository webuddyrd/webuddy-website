import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';
import { LocalizedLink } from '../LocalizedLink';
import { buttonClass, type ButtonVariant } from './buttonStyles';

interface ButtonLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

export function ButtonLink({ to, variant, className, children, ...props }: ButtonLinkProps) {
  return (
    <LocalizedLink to={to} className={buttonClass(variant, className)} {...props}>
      {children}
    </LocalizedLink>
  );
}

interface ExternalButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

export function ExternalButton({ variant, className, children, ...props }: ExternalButtonProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" className={buttonClass(variant, className)} {...props}>
      {children}
    </a>
  );
}
