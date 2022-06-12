import * as React from 'react';

export default function Layout({
  children,
}: {
  children: JSX.Element | React.ReactNode;
}) {
  // Put Header or Footer Here
  return <>{children}</>;
}
