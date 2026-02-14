import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    href: string
    status: "Tecnova III" | "PPI 4.0" | "Em breve"
}

export function ProjectCard({ title, description, tags, href, status }: ProjectCardProps) {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 group">
            <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/20">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {status}
                </span>
            </div>
            <h3 className="text-xl font-bold leading-6 text-foreground group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-6 mt-auto pt-4">
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Link href={href}>
                        Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}
