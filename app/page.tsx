"use client"

import MagneticText from "../components/MagneticText"

import { useState } from "react"

import {
  Inter,
  Open_Sans,
  Phudu,
  Lora,
  Dosis,
  Source_Code_Pro,
  Gluten,
  Exo_2,
  Signika_Negative,
} from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })
const openSans = Open_Sans({ subsets: ["latin"] })
const phudu = Phudu({ subsets: ["latin"] })
const lora = Lora({ subsets: ["latin"] })
const dosis = Dosis({ subsets: ["latin"] })
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] })
const gluten = Gluten({ subsets: ["latin"] })
const exo2 = Exo_2({ subsets: ["latin"] })
const signikaNegative = Signika_Negative({ subsets: ["latin"] })

export default function Home() {
  const [selectedFont, setSelectedFont] = useState("Roboto")

  const [selectedFontClassName, setSelectedFontClassName] = useState(inter.className)

  const fonts = [
    { name: "Inter", className: inter.className, style: inter.style },
    { name: "Open Sans", className: openSans.className, style: openSans.style },
    { name: "Phudu", className: phudu.className, style: phudu.style },
    { name: "Lora", className: lora.className, style: lora.style },
    { name: "Dosis", className: dosis.className, style: dosis.style },
    { name: "Source Code Pro", className: sourceCodePro.className, style: sourceCodePro.style },
    { name: "Gluten", className: gluten.className, style: gluten.style },
    { name: "Exo 2", className: exo2.className, style: exo2.style },
    { name: "Signika Negative", className: signikaNegative.className, style: signikaNegative.style },
  ]

  const handleFontChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFont(event.target.value)
    const fontFound = fonts.find((font) => font.name === event.target.value)
    if (fontFound) {
      setSelectedFontClassName(fontFound.className)
    }
  }

  return (
    <main className={`flex min-h-screen items-center flex-col justify-center ${selectedFontClassName}`}>
      <div className="text-5xl text-white">
        <MagneticText>The React Framework for the Web</MagneticText>
      </div>
      <div className="p-6 mt-6 bg-slate-950/50 text-white rounded-lg">
        {fonts.map((font) => (
          <label
            key={font.name}
            className="text-xl flex items-center space-x-2 cursor-pointer text-white/60 hover:text-white transition-all"
          >
            <input
              type="radio"
              name="font"
              value={font.name}
              checked={selectedFont === font.name}
              onChange={handleFontChange}
              className={`form-radio h-4 w-4 ${
                selectedFont === font.name ? "text-blue-600 opacity-100" : "opacity-40"
              }  transition-opacity`}
            />
            <span className="font-thin" style={{ fontFamily: font.style.fontFamily }}>
              <MagneticText>{font.name}</MagneticText>
            </span>
          </label>
        ))}
      </div>
      <Link
        href="https://github.com/JaviEzpeleta/magnetic-text"
        target="_blank"
        className="mt-8 opacity-70 hover:opacity-100 transition-all active:scale-95 hover:scale-105"
      >
        <div className="bg-white/0 transition-all hover:bg-white/10 p-2 rounded-lg">
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            fill="white"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </div>
      </Link>
    </main>
  )
}
