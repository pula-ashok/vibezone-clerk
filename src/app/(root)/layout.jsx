import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSidebar from "@components/layout/LeftSidebar";
import MainContainer from "@components/layout/MainContainer";
import RightSidebar from "@components/layout/RightSidebar";
import Topbar from "@components/layout/Topbar";

const inter=Inter({subsets:["latin"]})
export const metadata = {
  title: "Vibezone Next App",
  description: "Vibezon clerk next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="flex flex-row">
          <LeftSidebar/>
          <MainContainer>
            <Topbar/>
            {children}
          </MainContainer>
          <RightSidebar/>
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
