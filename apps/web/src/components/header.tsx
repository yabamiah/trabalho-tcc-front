"use client";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { ArrowRight, Box } from "lucide-react";

export default function Header() {
	const links = [
		{ to: "/", label: "Produto" },
		{ to: "/1", label: "Documentação" },
		{ to: "/2", label: "Sobre" },
	];

	return (
		<div>
			<div className="flex flex-row items-center justify-between px-2 py-5">
				<div className="flex items-center">
					<Link
						href="/"
						className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
					>
						<Box className="h-8 w-8 rotate-0 scale-100 transition-all" />
						Gerenciador
					</Link>
				</div>

				<nav className="flex gap-12 text-lg">
					{links.map(({ to, label }) => {
						return (
							<Link
								className="hover:text-primary/80 transition-colors"
								key={to}
								href={to}
							>
								{label}
							</Link>
						);
					})}
				</nav>
				<div className="flex items-center gap-2">
					<Button
						size="lg"
						variant="outline"
						onClick={() => {
							console.log("Criando conta");
						}}
					>
						<span className="text-lg">Criar Conta</span>
					</Button>
					<Button
						size="lg"
						onClick={() => {
							console.log("Entrando na conta");
						}}
					>
						<span className="text-lg">Entrar </span>
						<ArrowRight className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
					</Button>
					<ModeToggle />
				</div>
			</div>
			<hr />
		</div>
	);
}
