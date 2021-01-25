<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html lang="es">
            <body>
                <h2>CIUDADES DE ESPAÑA</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Ciudades</th>
                        <th>Habitantes</th>
                    </tr>
                    <xsl:for-each select = "ciudades/ciudad">
                        <tr>
                            <td><xsl:value-of select = "nombre"/></td>
                            <td><xsl:value-of select = "habitantes"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>