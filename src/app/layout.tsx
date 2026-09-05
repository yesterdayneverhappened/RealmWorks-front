import Providers from './providers';
import { bricolage } from './fonst';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}