<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!-- Plantilla principal -->
    <xsl:template match="/">
        <html lang="es">
            <head>
                <title>Formula 1</title>
                <style>
                    table{
                        text-align: center;
                    }
                    th{
                        padding: 10px;
                    }
                </style>
            </head>
            <body>
                <table border="1">
                    <thead>
                        <th>
                            <xsl:apply-templates select="F1/datosGranPremio/clasificacion"></xsl:apply-templates>
                        </th>
                        <th>F1 QUALIFYING CLASSIFICATION</th>
                        <th><xsl:value-of select="F1/datosGranPremio/clasificacion"/></th>
                        <th>
                            <xsl:apply-templates select="F1/datosGranPremio/bandera"></xsl:apply-templates>
                        </th>
                        <th><xsl:value-of select="F1/datosGranPremio/twitter/@hashtag"/></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Puesto</td>
                            <td>Piloto</td>
                            <td>Equipo</td>
                            <td>Q1 Lap Time</td>
                            <td>Q2 Lap Time</td>
                            <td>Q3 Lap Time</td>
                            <td>Diferencia</td>
                            <td>Vueltas</td>
                        </tr>
                        <xsl:for-each select="F1/parrilla/posicion">
                            <xsl:sort select="puesto" data-type="number" order="ascending"/>
                            <tr>
                                <td><xsl:value-of select="puesto"/></td>
                                <td>
                                    <!-- Este apply coge el dato del id_piloto de posición -->
                                    <xsl:apply-templates select="F1/parrilla/posicion">
                                        <xsl:with-param name="piloto" select="@id_piloto"/>
                                    </xsl:apply-templates>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
                
            </body>
        </html>
    </xsl:template>
    <!-- Plantilla de datos gran premio-->
    <xsl:template match="/F1/datosGranPremio/clasificacion">
        <xsl:element name="img">
            <xsl:attribute name="src">
                <xsl:value-of select="@logo"/>
            </xsl:attribute>
            <xsl:attribute name="height">120</xsl:attribute>
        </xsl:element>
    </xsl:template>
    <!-- Plantilla para el logo de España -->
    <xsl:template match="/F1/datosGranPremio/bandera">
        <xsl:element name="img">
            <xsl:attribute name="src">
                <xsl:value-of select="@img"/>
            </xsl:attribute>
            <xsl:attribute name="height">120</xsl:attribute>
        </xsl:element>
    </xsl:template>
    <!-- Plantilla para seleccionar a los pilotos -->
    <xsl:template match="/F1/parrilla/posicion">
        <xsl:param name="piloto"/>
        <xsl:if test=" = $piloto">
            <xsl:value-of select="$piloto"/>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>