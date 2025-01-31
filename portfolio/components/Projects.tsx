"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Section } from "./misc/Section"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const projects = [
  {
    title: "DPAC: Prediction and Design of Protein-DNA Interactions",
    description: "Developed a sequence-based contrastive learning approach for protein-DNA interactions.",
    presentation: "Poster Presentation at MOML @ MIT, 2024",
  },
  {
    title: "FusOn-pLM: Fusion Oncoprotein-Specific Language Model",
    description: "Created a language model for fusion oncoproteins using focused probabilistic masking.",
    status: "Paper in review, Nature Methods",
  },
  // Add more projects here
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="" id="publications">
        Projects
      </Badge>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((project, index) => (
          <Card key={index} className="bg-card p-5 rounded-[0.5rem]">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-primary mb-2">{project.description}</p>
            {project.presentation && <p className="text-muted-foreground italic">{project.presentation}</p>}
            {project.status && <p className="text-muted-foreground italic">{project.status}</p>}
          </Card>
        ))}
      </div>
      {!showAll && projects.length > 3 && (
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(true)}>Show More Projects</Button>
        </div>
      )}
    </Section>
  )
}
