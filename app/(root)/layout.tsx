import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">{children}</main>


      <Footer />
    </div>
  );
}
