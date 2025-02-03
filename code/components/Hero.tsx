"use client"
import Image from "next/image"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Section } from "./misc/Section"
import { Badge } from "./ui/badge"

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Biomedical Engineer", "Researcher", "Innovator", "Programmer"],
    loop: 0,
  })

  return (
    <Section className="flex flex-col items-start gap-4">
      <div>
        <Badge variant="outline" className="" id="publications">
          Profile
        </Badge>
      </div>
      <div className="flex items-center gap-8">
        <div className="overflow-hidden rounded-lg">
          <Image 
            src="/headshot.jpg" 
            alt="Pranay Vure" 
            width={200} 
            height={200}
            className="object-cover"
          />
        </div>
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-2">Pranay Vure</h1>
          <h2 className="text-2xl mb-4">
            <span>{text}</span>
            <Cursor cursorStyle="_" />
          </h2>
          <p className="max-w-2xl">
            Biomedical Engineering graduate from Duke University with a focus on molecular and cellular engineering.
            Experienced in integrating deep learning and generative AI with protein design for programmable platforms in
            proteome engineering. Passionate about advancing healthcare through innovative research and technology.
          </p>
        </div>
      </div>
    </Section>
  )
}