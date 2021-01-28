<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html lang="es">
            <head>
                <title></title>
            </head>
            <body>
                <!-- Llamada a profesores -->
                <xsl:apply-templates select="Centro/Personal/Profesor"></xsl:apply-templates>
            </body>
        </html>
    </xsl:template>
    <!-- Plantilla profesores -->
    <xsl:template match="/Centro/Personal/Profesor">
        <h1>Profesor: <xsl:value-of select="Nombre"/></h1>
        <h3>Tutor de: <xsl:value-of select="@tutor"/></h3>
        <!-- Llamada a alumnos -->
        <xsl:apply-templates select="/Centro/Personal/Alumnos">
            <xsl:with-param name="parametro" select="@tutor"/> <!-- @tutor es de profesor -->
        </xsl:apply-templates> 
    </xsl:template>
    <xsl:template match="Centro/Personal/Alumnos">
        <xsl:param name="parametro"/>
        <xsl:if test="Curso = $parametro">
            <h2>Nombre: <xsl:value-of select="Apellidos"/>, <xsl:value-of select="Nombre"/>
            - Curso: <xsl:value-of select="Curso"/> - DNI: <xsl:value-of select="@DNI"/></h2>
            <table border="1">
                <tr>
                    <td>Nombre</td>
                    <td>Nota</td>
                </tr>
                <xsl:for-each select="Asignaturas">
                    <xsl:choose>
                        <xsl:when test="position() &lt;=2">
                            <tr bgcolor="red">
                                <td><xsl:value-of select="@Asignatura"/></td>
                                <td><xsl:value-of select="."/></td>
                            </tr>
                        </xsl:when>
                    </xsl:choose>
                    <tr>
                        <td><xsl:value-of select="@Asignatura"/></td>
                        <td><xsl:value-of select="."/></td>
                    </tr>
                </xsl:for-each>
                <tr>
                    <td bgcolor="gray">MEDIA</td>
                    <td bgcolor="gray"></td>
                </tr>
            </table>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>