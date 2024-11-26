"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid} from '@/once-ui/components';
import ResponsiveContainer from '@/once-ui/components/ResponsiveContainer';
import Link from 'next/link';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
    skillLogo: {
        width: '50px',
        height: '50px',
        transition: 'transform 0.2s',
    },
    skillLogoHover: {
        transform: 'scale(1.1)',
    },
    projectSkillLogo: {
        width: '30px',
        height: '30px',
        transition: 'transform 0.2s',
    },
    projectSkillLogoHover: {
        transform: 'scale(1.1)',
    },
    projectSkills: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
    },
    projectPreviewImage: {
        width: '80%',
        height: 'auto',
        borderRadius: '15px',
    },
    projectContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        textAlign: 'center',
    },
    projectContainerResponsive: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    projectLinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '10px',
    }
};

export default function Home() {
    const skills = [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "TYPESCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "CSS", logo: "https://raw.githubusercontent.com/CSS-Next/logo.css/refs/heads/main/css.svg" },
    ];

    const projects = [
        {
            name: "Web Scrapping",
            url: "https://peliculas.spyflow.link/",
            repo: "https://github.com/spyflow/firstry",
            description: "Es una página de películas que hace scraping para obtener la información de las películas y los links de visualización.",
            disclaimer: "No me hago responsable por el uso indebido de la página.",
            dmca: "https://peliculas.spyflow.link/dmca",
            skills: ["HTML", "PHP", "JavaScript", "CSS", "Python"],
            previewImage: "https://i.imgur.com/uKM7fyY.png"
        },
        {
            name: "Discord Music Bot",
            repo: "https://github.com/spyflow/musicbot",
            description: "Este es un simple bot de Discord para reproducir música de YouTube en un canal de voz, El bot esta escito en python",
            disclaimer: "Este proyecto se ha interrumpido y ya no recibirá actualizaciones.",
            skills: ["Python"],
            previewImage: "https://i.imgur.com/06lRYoF.png"
        }
    ];

    const getSkillLogo = (skillName: string): string => {
        const skill = skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
        return skill ? skill.logo : '';
    };

    return (
        <Flex fillWidth paddingTop="l" paddingX="l" direction="column" alignItems="center" flex={1}>
            <Flex as="main" direction="column" justifyContent="center" fillWidth fillHeight padding="l" gap="l">
                <Heading variant="body-strong-xl" marginBottom="m">¡Hola! Soy Spyflow</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
                    Tengo 20 años y me especializo en desarrollo con tecnologías como Python, C, JavaScript, HTML y PHP.
                </Text>
                <Heading variant="body-strong-m" marginBottom="m">Mis Habilidades</Heading>
                <Grid columns="repeat(auto-fit, minmax(120px, 1fr))" gap="l" padding="l" className="skills-grid">
                    {skills.map((skill) => (
                        <Flex key={skill.name} direction="column" alignItems="center" gap="m" className="skill-item">
                            <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                style={styles.skillLogo}
                                onMouseEnter={(e) => e.currentTarget.style.transform = styles.skillLogoHover.transform || ''}
                                onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                            />
                            <Text variant="body-strong-s" className="skill-text">{skill.name}</Text>
                        </Flex>
                    ))}
                </Grid>
                <Heading variant="body-strong-m" marginBottom="m">Proyectos</Heading>
                {/* Aquí usamos el ResponsiveContainer */}
                <ResponsiveContainer>
                    {projects.map((project) => (
                        <Flex
                            key={project.name}
                            style={styles.projectContainer}
                            className="project-container"
                        >
                            <Text variant="body-strong-s">{project.name}</Text>
                            <Text variant="body-default-m">{project.description}</Text>
                            <img
                                src={project.previewImage}
                                alt={`${project.name} preview`}
                                className="project-preview-image"
                                style={styles.projectPreviewImage}
                            />
                            {project.disclaimer && <Text variant="body-default-s" style={{ color: 'red' }}>{project.disclaimer}</Text>}
                            <div style={styles.projectSkills} className="project-skills">
                                {project.skills.map((skill) => (
                                    <div key={skill} className="project-skill-item">
                                        <img
                                            src={getSkillLogo(skill)}
                                            alt={`${skill} logo`}
                                            style={styles.projectSkillLogo}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = styles.projectSkillLogoHover.transform || ''}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                                            title={skill}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div style={styles.projectLinks} className="project-links">
                                {project.url && <Link href={project.url}>Visita el proyecto</Link>}
                                {project.repo && <Link href={project.repo}>Repositorio</Link>}
                                {project.dmca && <Link href={project.dmca}>DMCA</Link>}
                            </div>
                        </Flex>
                    ))}
                </ResponsiveContainer>
                <Flex gap="m" marginTop="l">
                    <Button href="https://github.com/spyflow" prefixIcon="github" size="m" variant="secondary">GitHub</Button>
                    <Button href="https://cl.linkedin.com/in/spyflow" prefixIcon="linkedin" size="m" variant="secondary">LinkedIn</Button>
                </Flex>
            </Flex>
        </Flex>
    );
}
