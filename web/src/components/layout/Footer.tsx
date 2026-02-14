import Link from "next/link"

const navigation = {
    main: [
        { name: 'Sobre', href: '/sobre' },
        { name: 'Projetos', href: '/projetos' },
        { name: 'Investidores', href: '/investidores' },
        { name: 'Imprensa', href: '/imprensa' },
        { name: 'Contato', href: '/contato' },
    ],
    social: [
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export function Footer() {
    return (
        <footer className="bg-background border-t border-border mt-20" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-bold tracking-tighter text-foreground">INOVAM</span>
                        <p className="text-sm leading-6 text-muted-foreground">
                            Tecnologia, Inovação e Resultados Reais.
                            <br />
                            Manaus - Amazonas - Brasil.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Soluções</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/projetos/247-locacao" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                            247 Locação
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projetos/tindkey" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                            TindKey
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Institucional</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.main.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="text-sm leading-6 text-muted-foreground">
                                        CNPJ: 42.049.482/0001-14
                                    </li>
                                    <li className="text-sm leading-6 text-muted-foreground">
                                        Inovam LTDA
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-border/40 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-muted-foreground">
                        &copy; {new Date().getFullYear()} Inovam LTDA. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
