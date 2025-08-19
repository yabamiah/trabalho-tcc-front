"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-2">
			<div className="gap-12 flex flex-col items-center justify-center text-center">
				<h1 className="mt-5 font-heading text-5xl font-bold max-w-xl">
					Desbloqueie o potencial do seu estoque
				</h1>
				<h4 className="mt-2 text-xl max-w-full font-regular">
					Crie uma operação logística impecável, gerencie cada item com precisão
					preditiva e acelere a expansão do seu negócio sem rupturas ou
					excessos.
				</h4>
				<Button
					className="px-15 py-6 text-lg"
					onClick={() => {
						console.log("Entrando na conta");
					}}
				>
					<span className="text-lg">Teste agora</span>
					<ArrowRight className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
				</Button>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Card className="text-left text-lg hover:text-primary/80 transition-colors">
						<CardHeader className="text-xl">
							<CardTitle>Previsão de Estoque em Tempo Real</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Monitore seu inventário e receba previsões de demanda
								atualizadas em tempo real.
							</p>
						</CardContent>
					</Card>

					<Card className="text-left text-lg hover:text-primary/80 transition-colors">
						<CardHeader className="text-xl">
							<CardTitle>Insights que Geram Lucro</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Vá além do 'o que vende mais'. Entenda por que vende.
							</p>
							<img
								src="/images/undraw_stock-prices_8nuz.svg"
								alt="Análise Preditiva"
								width={70}
								height={70}
							/>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
