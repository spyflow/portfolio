"use client";

import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Para manipular <meta> tags
import { Heading, Text, Flex, Button, Grid } from '@/once-ui/components';
import { getPreview } from 'src/once-ui/resources/config.js'; // Importa la función getPreview
import Link from 'next/link';

export default function Home() {
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        // Llama a getPreview para obtener la imagen de previsualización
        const fetchPreview = async () => {
            const preview = await getPreview();
            if (preview) {
                setPreviewImage(preview);
            }
        };

        fetchPreview();
    }, []);

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
    ];

    return (
        <>
            {/* Meta tags dinámicos */}
            <Head>
                {previewImage && (
                    <meta property="twitter:image" content={previewImage} />
                )}
            </Head>

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
        </>
    );
}
