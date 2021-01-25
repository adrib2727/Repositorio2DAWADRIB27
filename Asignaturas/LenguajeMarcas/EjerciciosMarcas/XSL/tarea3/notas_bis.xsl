<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html lang="es">
            <head>
                <title></title>
            </head>
            <body>
                <xsl:for-each select="Centro/Personal/Profesor">
                    <h1>Profesor: <xsl:value-of select="Nombre"/></h1>
                    <h3>Tutor de: <xsl:value-of select="@tutor"/></h3>
                    <xsl:for-each select="Centro/Personal/Alumnos">
                        <h2>Nombre: <xsl:value-of select="Apellidos"/>, <xsl:value-of select="Nombre"/>
                        - Curso: <xsl:value-of select="Curso"/> - DNI: <xsl:value-of select="@DNI"/></h2>
                    </xsl:for-each>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>