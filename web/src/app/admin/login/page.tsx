import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    async function login(formData: FormData) {
        "use server";

        const email = formData.get("email");
        const password = formData.get("password");

        const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@inovam.online";
        const ADMIN_PASS = process.env.ADMIN_PASS || "admin123";

        if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
            // Set session cookie
            (await cookies()).set("session", "authenticated", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24, // 1 day
                path: "/",
            });
            redirect("/admin/dashboard");
        } else {
            // Handle error (simple redirect back for now)
            redirect("/admin/login?error=InvalidCredentials");
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
                <div className="flex flex-col items-center mb-6">
                    <img src="/images/logo.png" alt="Inovam" className="h-10 mb-2" />
                    <h1 className="text-2xl font-bold">Admin Login</h1>
                </div>

                <form action={login} className="space-y-4">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" id="email" required placeholder="admin@inovam.online" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password" id="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Entrar
                    </Button>
                </form>
            </div>
        </div>
    );
}
