import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:max-w-[114opx]:">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
