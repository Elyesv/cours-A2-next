export default function Etiquette({ texte }: { texte: string }) {
  return (
    <span className="rounded-full border border-trait px-3 py-1 text-xs text-doux">
      {texte}
    </span>
  )
}
