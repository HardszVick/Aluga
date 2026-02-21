import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { aluTheme } from "@/shared/theme/theme";
import { Nunito, Roboto } from 'next/font/google';
import { AluQueryClientProvider } from "@/components/providers/QueryClientProvider";
import { AluSnackbarProvider } from "@/components/ui/snackbar/providers/SnackbarProvider";

type MainProps = {
  children: React.ReactNode;
};

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-logo',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

const AluRootLayout = ({ children }: MainProps) => {
  return (
    <html suppressHydrationWarning className={`${nunito.variable} ${roboto.variable}`}>
      <body>
        <AluQueryClientProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={aluTheme}>
              <CssBaseline />

              <AluSnackbarProvider>
                {children}
              </AluSnackbarProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AluQueryClientProvider>
      </body>
    </html>
  );
};

export default AluRootLayout;
