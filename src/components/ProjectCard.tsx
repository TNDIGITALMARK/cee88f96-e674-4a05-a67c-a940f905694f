"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  href?: string;
}

export default function ProjectCard({ title, location, image, href = "/portfolio" }: ProjectCardProps) {
  return (
    <Link href={href} className="group block relative overflow-hidden aspect-square bg-gray-100">
      {/* Project Image */}
      <Image
        src={image}
        alt={`${title} - ${location}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Overlay with Text - appears on hover */}
      <div className="absolute inset-0 bg-[hsl(var(--charcoal))]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
        <h3 className="text-white text-lg font-semibold tracking-wider uppercase mb-2 text-center">
          {title}
        </h3>
        <p className="text-sm opacity-90 text-center">{location}</p>
      </div>
    </Link>
  );
}
