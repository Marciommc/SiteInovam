"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        // Simulação de login
        setTimeout(() => {
            setIsLoading(false)
            router.push("/admin/dashboard")
        }, 1000)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-sm space-y-8">
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <Lock className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                        Acesso Restrito
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Área administrativa para gestão do site Inovam.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className="space-y-2">
                            <Label htmlFor="email-address">Email address</Label>
                            <Input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="admin@inovam.com.br"
                            />
                        </div>
                        <div className="space-y-2 pt-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="********"
                            />
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" disabled={isLoading}>
                            {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Sign in"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
