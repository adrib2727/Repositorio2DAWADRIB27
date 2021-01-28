<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html lang="es">
            <head>
                <title>Notas alumnos</title>
                <style>
                    table{
                        text-align: center;
                    }
                </style>
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
    <!-- Plantilla de alumnos -->
    <xsl:template match="Centro/Personal/Alumnos">
        <xsl:param name="parametro"/>
        <xsl:if test="Curso = $parametro">
            <h2>Nombre: <xsl:value-of select="Apellidos"/>, <xsl:value-of select="Nombre"/>
            - Curso: <xsl:value-of select="Curso"/> - DNI: <xsl:value-of select="@DNI"/></h2>
            <xsl:choose>
                <!-- Si exísten asignaturas, se muestra la tabla -->
                <xsl:when test="Asignaturas">
                    <table border="1">
                        <tr>
                            <td>Nombre</td>
                            <td>Nota</td>
                        </tr>
                        <!-- Bucle que saca todas las asignaturas de los alumnos -->
                        <xsl:for-each select="Asignaturas">
                            <!-- Condiciones para los fondos -->
                            <xsl:choose>
                                <!-- Si es menor o igual que 2 -->
                                <xsl:when test=". &lt;=2">
                                    <tr bgcolor="red">
                                        <td><xsl:value-of select="@Asignatura"/></td>
                                        <td><xsl:value-of select="."/></td>
                                    </tr>
                                </xsl:when>
                                <!-- Menos de 5 y más que 2 -->
                                <xsl:when test=". &lt;5">
                                    <tr bgcolor="yellow">
                                        <td><xsl:value-of select="@Asignatura"/></td>
                                        <td><xsl:value-of select="."/></td>
                                    </tr>
                                </xsl:when>
                                <!-- Entre 5 y menos de 9 -->
                                <xsl:when test=". &lt;9">
                                    <tr>
                                        <td><xsl:value-of select="@Asignatura"/></td>
                                        <td><xsl:value-of select="."/></td>
                                    </tr>
                                </xsl:when>
                                <!-- Mayor o igual que 9 -->
                                <xsl:when test=". &gt;=9">
                                    <tr bgcolor="green">
                                        <td><xsl:value-of select="@Asignatura"/></td>
                                        <td><xsl:value-of select="."/></td>
                                    </tr>
                                </xsl:when>
                            </xsl:choose>
                        </xsl:for-each>
                        <tr bgcolor="gray">
                            <td>MEDIA</td>
                            <td><xsl:value-of select="sum(Asignaturas) div count(Asignaturas)"/></td>
                        </tr>
                    </table>
                </xsl:when>
                <!-- Si no hay asignaturas, se muestra el siguiente H1 -->
                <xsl:otherwise>
                    <h1>NO SE HA PRESENTADO NADA</h1>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>