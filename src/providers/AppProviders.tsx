import MuiProviders from "./MuiProviders";

const AppProviders = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <MuiProviders>
      {/* other provider */}
      {children}
    </MuiProviders>
  );
};

export default AppProviders;
