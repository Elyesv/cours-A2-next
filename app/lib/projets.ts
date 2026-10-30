export type Projet = {
  slug: string
  titre: string
  resume: string
  annee: number
  tags: string[]
}

const PROJETS: Projet[] = [
  {
    slug: "atelier-horloger",
    titre: "L'atelier de l'horloger",
    resume: "Scène 3D d'un atelier, modélisée et éclairée sous Blender.",
    annee: 2026,
    tags: ["Blender", "Cycles"],
  },
  {
    slug: "signal-perdu",
    titre: "Signal perdu",
    resume: "Jeu d'exploration 2D dans une station abandonnée.",
    annee: 2026,
    tags: ["Unity", "Level design"],
  },
  {
    slug: "identite-brasserie",
    titre: "Identité de la brasserie Noue",
    resume: "Identité visuelle complète d'une micro-brasserie.",
    annee: 2025,
    tags: ["Illustrator", "Packaging"],
  },
]

export async function getProjets(): Promise<Projet[]> {
  return PROJETS
}

export async function getProjet(slug: string): Promise<Projet | undefined> {
  return PROJETS.find((projet) => projet.slug === slug)
}