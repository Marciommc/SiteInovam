"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Projetos", href: "/projetos" },
    { name: "Ecossistema", href: "/ecossistema" },
    { name: "Investidores", href: "/investidores" },
]

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Inovam</span>
                        <img
                            className="h-11 w-auto" // Aumentado ~35% (32px -> 44px)
                            src="/images/logo.png"
                            alt="Inovam"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button asChild>
                        <Link href="/contato">Seja parceiro</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50 bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border" : "hidden")}>
                <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
                        INOVAM
                    </Link>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-border/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="py-6">
                            <Button asChild className="w-full">
                                <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>Seja parceiro</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
