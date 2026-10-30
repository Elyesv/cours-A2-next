import { notFound } from 'next/navigation'
import { getProjet } from '@/app/lib/projets'  

export default async function ProjetPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const projet = await getProjet(slug)
 
  if (!projet) notFound()
 
  return <h1>{projet.titre}</h1>
}
