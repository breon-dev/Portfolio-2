
//Components
import { Header } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-default-gray text-white min-h-screen h-full"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
