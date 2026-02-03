import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
type MainProps = {
  children: React.ReactNode;
};

const RootLayout = (props: MainProps) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider> {props.children} </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
