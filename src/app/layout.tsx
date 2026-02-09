import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "@/theme/theme";
import { Nunito, Roboto } from 'next/font/google';

type MainProps = {
  children: React.ReactNode;
};

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['900'],
  variable: '--font-logo',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

const RootLayout = ({ children }: MainProps) => {
  return (
    <html className={`${nunito.variable} ${roboto.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
