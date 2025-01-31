"use client"

import Image from "next/image"
import { Section } from "./misc/Section";
import { Badge } from "./ui/badge";

const aspectRatioClasses = {
  square: "col-span-1 row-span-1",
  vertical: "col-span-1 row-span-2",
}

export default function BentoGallery() {
  type AspectRatio = "square" | "vertical";

  const photos: { id: number; src: string; alt: string; description: string; aspectRatio: AspectRatio }[] = [

    {
      id: 1,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Sunset at the beach",
      description: "Watching the sun dip below the horizon on a peaceful evening.",
      aspectRatio: "square",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=400",
      alt: "Mountain hiking",
      description: "Conquering new heights and enjoying breathtaking views.",
      aspectRatio: "vertical",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=400",
      alt: "City skyline",
      description: "The urban jungle comes alive as night falls.",
      aspectRatio: "square",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=400",
      alt: "Family picnic",
      description: "Creating lasting memories with loved ones in nature.",
      aspectRatio: "vertical",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Concert crowd",
      description: "Feeling the energy of thousands of fans at a live show.",
      aspectRatio: "vertical",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Artistic sculpture",
      description: "Admiring the creativity of modern art installations.",
      aspectRatio: "square",
    },
  ]
  return (
    <Section className='flex flex-col items-start gap-4'>
      <Badge variant={"outline"} className="" id="publications">
        Gallery
      </Badge>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative rounded-lg overflow-hidden group ${aspectRatioClasses[photo.aspectRatio]}`}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 rounded-[0.5rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[0.5rem]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-[0.5rem]">
                <p className="text-sm">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
