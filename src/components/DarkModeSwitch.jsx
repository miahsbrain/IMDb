'use client'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=> setMounted(true), [mounted])

    const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button>{mounted && currentTheme === 'dark' ? <MdLightMode className='cursor-pointer hover:text-amber-500' size={'1.5rem'} onClick={() => setTheme('light')} /> : <MdDarkMode className='cursor-pointer hover:text-amber-500' size={'1.5rem'} onClick={() => setTheme('dark')} />}</button>
  )
}