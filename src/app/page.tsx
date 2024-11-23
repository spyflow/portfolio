"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
    const skills = ["Python", "C", "JavaScript", "HTML", "PHP"];

    return (
        <Flex
            fillWidth
            paddingTop="l"
            paddingX="l"
            direction="column"
            alignItems="center"
            flex={1}>
            {/* Sección principal */}
            <Flex
                position="relative"
                as="section"
                fillWidth
                maxWidth={68}
                direction="column"
                alignItems="center"
                flex={1}>
                <Flex
                    as="main"
                    direction="column"
                    justifyContent="center"
                    fillWidth
                    fillHeight
                    padding="l"
                    gap="l">
                    <Heading variant="display-strong-s" marginBottom="m">
                        ¡Hola! Soy <span className="brand-primary">Spyflow</span>
                    </Heading>
                    <Text variant="body-default-m" marginBottom="m">
                        Tengo 20 años y me apasiona el desarrollo de software. Aquí están algunas de mis habilidades:
                    </Text>
                    
                    {/* Sección de habilidades */}
                    <Flex
                        padding="m"
                        border="neutral-medium"
                        borderStyle="solid-1"
                        radius="m"
                        direction="column"
                        gap="s"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            textAlign: 'left',
                            backgroundColor: 'var(--neutral-background-weak)',
                        }}>
                        {skills.map((skill, index) => (
                            <Text key={index} variant="body-strong-m" padding="s">
                                • {skill}
                            </Text>
                        ))}
                    </Flex>

                    {/* Botones de redes sociales */}
                    <Flex gap="12" marginTop="l">
                        <Button
                            href="https://github.com/spyflow/"
                            prefixIcon="github"
                            size="m"
                            variant="tertiary">
                            GitHub
                        </Button>
                        <Button
                            href="https://cl.linkedin.com/in/javier-ferrada-riquelme"
                            prefixIcon="linkedin"
                            size="m"
                            variant="tertiary">
                            LinkedIn
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
