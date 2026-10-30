import Link from "next/link"

const LIENS = [
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/projets", label: "Projets" },
]

export default function Menu() {
    return (
        <header className="border-b border-neutral-200">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
                <Link href="/" className="font-semibold">
                    Mon portfolio
                </Link>
                <nav>
                    <ul className="flex gap-6 text-sm text-neutral-500">
                        {LIENS.map((lien) => (
                            <li key={lien.href}>
                                <Link href={lien.href} className="hover:text-neutral-900">
                                    {lien.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}