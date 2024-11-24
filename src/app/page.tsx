"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
    const skills = [
        {
            name: "Python",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "C",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "HTML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "PHP",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
            name: "TYPESCRIPT",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "CSS",
            logo: "https://raw.githubusercontent.com/CSS-Next/logo.css/refs/heads/main/css.svg",
        },
    ];

    const projects = [
        {
            name: "Web Scrapping",
            url: "https://video.makatunga.uy/peliculas/",
            description: "Es una página de películas que hace scraping para obtener la información de las películas y los links de visualización.",
            disclaimer: "No me hago responsable por el uso indebido de la página.",
            dmca: "https://video.makatunga.uy/dmca",
            skills: ["HTML", "PHP", "JavaScript", "CSS", "Python"],
            previewImage: "https://i.imgur.com/uKM7fyY.png"
        }
    ];

    return (
        <Flex
            fillWidth paddingTop="l" paddingX="l"
            direction="column" alignItems="center" flex={1}>
            <Flex
                as="main"
                direction="column" justifyContent="center"
                fillWidth fillHeight padding="l" gap="l">
                <Heading
                    variant="body-strong-xl"
                    marginBottom="m">
                    ¡Hola! Soy Spyflow
                </Heading>
                <Text
                    variant="body-default-m"
                    onBackground="neutral-weak"
                    marginBottom="m">
                    Tengo 20 años y me especializo en desarrollo con tecnologías como Python, C, JavaScript, HTML y PHP.
                </Text>
                <Heading
                    variant="body-strong-m"
                    marginBottom="m">
                    Mis Habilidades
                </Heading>
                <Grid
                    columns="repeat(auto-fit, minmax(120px, 1fr))"
                    gap="l"
                    padding="l">
                    {skills.map((skill) => (
                        <Flex
                            key={skill.name}
                            direction="column"
                            alignItems="center"
                            gap="m">
                            <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                style={{ width: '60px', height: '60px' }}
                            />
                            <Text variant="body-strong-s">{skill.name}</Text>
                        </Flex>
                    ))}
                </Grid>
                <Heading
                    variant="body-strong-m"
                    marginBottom="m">
                    Proyectos
                </Heading>
                <Grid
                    columns="repeat(auto-fit, minmax(120px, 1fr))"
                    gap="l"
                    padding="l">
                    {projects.map((project) => (
                        <Flex
                            key={project.name}
                            direction="column"
                            alignItems="center"
                            gap="m">
                            <Text variant="body-strong-s">{project.name}</Text>
                            <Text variant="body-default-m">{project.description}</Text>
                            <img
                                src={project.previewImage}
                                alt={`${project.name} preview`}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <Text variant="body-default-s" style={{ color: 'red' }}>{project.disclaimer}</Text>
                            <Text variant="body-default-s">Habilidades usadas: {project.skills.join(', ')}</Text>
                            <Link href={project.url}>Visita el proyecto</Link>
                            <Link href={project.dmca}>DMCA</Link>
                        </Flex>
                    ))}
                </Grid>
                <Flex gap="m" marginTop="l">
                    <Button
                        href="https://github.com/spyflow"
                        prefixIcon="github"
                        size="m"
                        variant="secondary">
                        GitHub
                    </Button>
                    <Button
                        href="https://cl.linkedin.com/in/javier-ferrada-riquelme"
                        prefixIcon="linkedin"
                        size="m"
                        variant="secondary">
                        LinkedIn
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}
