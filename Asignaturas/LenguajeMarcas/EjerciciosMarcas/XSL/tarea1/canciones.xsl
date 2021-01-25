<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!--Output, tipo de documento al que va a ser transformado el XML-->
    <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>
    <!--Template, son plantillas para transformar el XML, aplicándose tanto al nodo como al atributo, sustituyendolo
    por su atributo en la plantilla-->
    <!--En este caso, lo primero que se va a realizar es la plantilla raíz. Selecciona todo el
    documento.-->
    <!--ApplyTemplates, se utiliza para mostrar en una plantilla la transformación de otra. 
    En TEMPLATE se utiliza el atributo MATCH y en ApplyTemplates, el atributo SELECT.-->
    <xsl:template match="/">
        <html>
            <head>
                <title>CDTECA</title>
                <style>
                    .contenedor{
                        float: left;
                        width: 10%;
                        margin-left: 20px;
                    }
                    #enlace1{
                        float:left;
                        margin-top: 10%;
                        margin-left: 10px;
                    }
                    #listado1{
                        margin-top: 17%;
                    }
                </style>
            </head>
            <body>
                <h1>MI CDTECA VERSIÓN 1. (Se muestran los títulos de segundos)</h1>
                <xsl:for-each select="cdteca/cd">
                    <h2>Album: <xsl:value-of select="titulo"/></h2>
                    <a id="enlace1">
                        <xsl:attribute name="href">
                            <xsl:value-of select="artista/@wiki"/>
                        </xsl:attribute>
                        De <xsl:value-of select="artista"/>
                    </a>
                    <div class="contenedor">
                        <xsl:element name="img">
                            <xsl:attribute name="src">
                                <xsl:value-of select="artista/@foto"/>
                            </xsl:attribute>
                            <xsl:attribute name="height">
                                120
                            </xsl:attribute>
                        </xsl:element>  
                    </div>
                    <div id="listado1">
                        <ul>
                            <xsl:for-each select="cancion">
                                <li>
                                    <xsl:value-of select="."/> - 
                                    <xsl:element name="span">
                                        <xsl:value-of select="@tiempo"/>
                                    </xsl:element>
                                </li>
                            </xsl:for-each>
                        </ul>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>