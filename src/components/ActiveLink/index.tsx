import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface Link extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({ children, activeClassName, ...rest }: Link) => {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};
