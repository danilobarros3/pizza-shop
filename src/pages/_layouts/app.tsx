import { Outlet } from "react-router-dom";
import Header from "../../components/header";

export function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />
      <main className="flex-1 flex flex-col gap-4 p-8 pt-6">
        <Outlet />
      </main>
    </div>
  );
}
