export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Flex
            as="html" lang="en"
            fillHeight background="page"
            data-neutral="sand" // Aquí cambias a "sand"
            data-brand="violet" // Cambias a "violet"
            data-accent="blue" // Cambias a "blue"
            data-border="playful" // Añades "playful"
            data-theme="dark" // Añades "dark"
            data-solid="contrast" // Añades "contrast"
            data-solid-style="plastic" // Añades "plastic"
            data-surface="filled" // Añades "filled"
            data-transition="macro" // Añades "macro"
            className={classNames(
                primary.variable, code.variable,
                secondary ? secondary.variable : '',
                tertiary ? tertiary.variable : ''
            )}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </head>
            <Flex
                as="body"
                fillWidth fillHeight margin="0" padding="0">
                <Background
                    style={{ zIndex: '-1' }}
                    position="fixed"
                    mask="cursor"
                    dots={{
                        display: true,
                        opacity: 0.4,
                        size: '20'
                    }}
                    gradient={{
                        display: true,
                        opacity: 0.4,
                    }} />
                <Flex
                    flex={1} direction="column">
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
}
