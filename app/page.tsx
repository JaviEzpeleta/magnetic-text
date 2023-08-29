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
    </main>
  )
}
