export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-center min-h-screen w-ful bg-dotted-pattern bg-cover bg-fuchsia-100 bg-fixed bg-center">
      {children}
    </div>
  );
}
