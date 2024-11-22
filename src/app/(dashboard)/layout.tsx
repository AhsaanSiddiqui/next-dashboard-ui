import Menu from "@/components/Menu";
import Navbar from "@/components/Nabar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        {/* LEFT  */}
        <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[16%]  p-4">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/logo-colored.png" alt="logo" width={200} height={44} />
          </Link>
          <Menu />
        </div>
        {/* RIGHT */}
        <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll">
          <Navbar/>
          {children}
        </div>
      </div>
  );
}
