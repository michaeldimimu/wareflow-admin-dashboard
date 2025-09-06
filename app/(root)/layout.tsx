import Navbar from "../ui/navbar";
import Sidebar from "../ui/sidebar/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-2 min-h-[calc(100vh-1rem)] m-2">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
