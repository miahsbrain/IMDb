'use client';
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class' >
        <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-color duration-300 min-h-screen'> 
            {children}
        </div>
    </ThemeProvider>
  )
}
