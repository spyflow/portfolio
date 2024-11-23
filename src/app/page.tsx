"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const skills = [
		{ name: "Python", description: "Desarrollo de scripts y automatizaciones." },
		{ name: "C", description: "Desarrollo de sistemas y aplicaciones eficientes." },
		{ name: "JavaScript", description: "Creación de aplicaciones dinámicas para la web." },
		{ name: "HTML", description: "Estructuración de páginas web." },
		{ name: "PHP", description: "Desarrollo backend y sistemas dinámicos." },
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Logo size="xl" icon={false} style={{ zIndex: '1' }} href="#" />
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										¡Hola! Soy Spyflow, tengo 20 años y estas son mis habilidades.
									</LetterFx>
								</span>
							</Heading>
							<Heading
   								variant="body-strong-m" // Cambiado por una variante válida
    								wrap="balance"
    								marginBottom="m">
    								Sobre mí
							</Heading>

							<Text variant="body-default-m" onBackground="neutral-strong">
								Me apasiona la tecnología y disfruto programando en lenguajes como Python, C, JavaScript, PHP y estructurando páginas web con HTML. Siempre estoy aprendiendo y buscando nuevos retos en el mundo del desarrollo.
							</Text>
							<Button
								id="contact"
								href="#"
								variant="secondary">
								<Flex alignItems="center">
									Contáctame
									<Arrow trigger="#contact" />
								</Flex>
							</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(2, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{skills.map((skill) => (
							<Flex
								key={skill.name}
								fillWidth paddingY="8" gap="8"
								direction="column" border="neutral-weak" borderStyle="solid-1" radius="l">
								<Flex
									fillWidth gap="12"
									alignItems="center">
									<Text
										variant="body-strong-m" onBackground="neutral-strong">
										{skill.name}
									</Text>
								</Flex>
								<Text
									variant="body-default-s" onBackground="neutral-weak">
									{skill.description}
								</Text>
							</Flex>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Spyflow, todos los derechos reservados.
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/spyflow/"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://cl.linkedin.com/in/javier-ferrada-riquelme"
						prefixIcon="linkedin" size="s" variant="tertiary">
						LinkedIn
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
