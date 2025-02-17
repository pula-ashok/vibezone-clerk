import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"

export const metadata = {
  title: 'Vibezone Auth App',
  description: 'Vibezone Auth App with Clerk',
}
const inter=Inter({subsets:["latin"]})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
