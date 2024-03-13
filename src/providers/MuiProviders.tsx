import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "@/assets/styles/theme";

const AppProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AppRouterCacheProvider options={{ key: "css", prepend: true }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledEngineProvider>
    </AppRouterCacheProvider>
  );
};

export default AppProviders;
