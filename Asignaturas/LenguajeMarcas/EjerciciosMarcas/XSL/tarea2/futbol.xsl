<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html lang="es">
            <head>
                <title>Futbol</title>
                <style>
                    table{
                        border-collapse: collapse;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <table border="1">
                    <!--Fila que muestra los nombres de las columnas-->
                    <tr>
                        <td>Nombre</td>
                        <td>Goles a favor</td>
                        <td>Goles en contra</td>
                        <td>Puntos</td>
                    </tr>
                    <!--Bucle que muestra todos los equipos-->
                    <xsl:for-each select="equipos/equipo">
                        <xsl:sort select="puntos" data-type="number" order="descending"/>
                        <xsl:sort select="golesafavor" data-type="number" order="descending"/>
                        <xsl:sort select="golescontra" data-type="number" order="descending"/>
                        <!--IF pero con choose-->
                        <xsl:choose>
                        <!--Cuando la posición sea -->
                            <xsl:when test="position() &lt;= 4">
                                <tr bgcolor="green">
                                    <td><xsl:value-of select="nombre"/></td>
                                    <td><xsl:value-of select="golesafavor"/></td>
                                    <td><xsl:value-of select="golescontra"/></td>
                                    <td><xsl:value-of select="puntos"/></td>
                                </tr>
                            </xsl:when>
                            <xsl:when test="position() &gt; last() - 3">
                                <tr bgcolor="red">
                                    <td><xsl:value-of select="nombre"/></td>
                                    <td><xsl:value-of select="golesafavor"/></td>
                                    <td><xsl:value-of select="golescontra"/></td>
                                    <td><xsl:value-of select="puntos"/></td>
                                </tr>
                            </xsl:when>
                            <xsl:otherwise>
                                <tr>
                                    <td><xsl:value-of select="nombre"/></td>
                                    <td><xsl:value-of select="golesafavor"/></td>
                                    <td><xsl:value-of select="golescontra"/></td>
                                    <td><xsl:value-of select="puntos"/></td>
                                </tr>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
