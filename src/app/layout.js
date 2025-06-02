import '../styles/global.css'
import checker from '@/lib/backgroundChecker'
import { ComicsProvider } from "@/context/ComicsProvider";
import { AuthProvider } from "@/context/AuthProvider";
import {Suspense} from "react";

checker.start()

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <title>Best App Ever</title>
      </head>
      <body>
      <AuthProvider>
        <ComicsProvider>
          <Suspense fallback={<div>Loading...</div>}>
              {children}
          </Suspense>
        </ComicsProvider>
      </AuthProvider>
      </body>
      </html>
  )
}
