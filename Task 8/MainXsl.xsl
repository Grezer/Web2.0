<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
    <link rel="stylesheet" href="main.css" />
</head>
<body>
	<ul id="categoryList">  	
		<xsl:for-each select="/ALAWAR_EXPORT/Languages/Language[@Code='ru']/Catalogs/Catalog[@Code='casualpcgames']/Dictionaries/Dictionary[@Code='Genre']/DictionaryItem">
        <li>
        <xsl:element name="label">
            <xsl:attribute name="for">
                <xsl:value-of select="@Code"/>
            </xsl:attribute>
            <xsl:value-of select="Name"/>
        </xsl:element>
        <xsl:element name="input">
            <xsl:attribute name="id">
                <xsl:value-of select="@Code"/>
            </xsl:attribute>
            <xsl:attribute name="type">checkbox</xsl:attribute>
            <xsl:value-of select="Name"/>
        </xsl:element>
        <ul>
            <xsl:for-each select="Elements/Element">
            <li>
                <xsl:variable name="gameID"><xsl:value-of select="@ID"/></xsl:variable>
                <h3>                    
                    <xsl:element name="a">
                        <xsl:attribute name="href">
                            <xsl:value-of select="/ALAWAR_EXPORT/Languages/Language[@Code='ru']/Catalogs/Catalog[@Code='casualpcgames']/Items/Item[@ID=$gameID]/Properties/Property[@Code='OrderUrl']"/>
                        </xsl:attribute>
                        <xsl:value-of select="/ALAWAR_EXPORT/Languages/Language[@Code='ru']/Catalogs/Catalog[@Code='casualpcgames']/Items/Item[@ID=$gameID]/Name"/>
                    </xsl:element>
                </h3>                
                <xsl:element name="a">
                    <xsl:attribute name="href">
                        <xsl:value-of select="/ALAWAR_EXPORT/Languages/Language[@Code='ru']/Catalogs/Catalog[@Code='casualpcgames']/Items/Item[@ID=$gameID]/Properties/Property[@Code='OrderUrl']"/>
                    </xsl:attribute>
                    <xsl:element name="img">
                        <xsl:attribute name="src">
                            <xsl:value-of select="/ALAWAR_EXPORT/Languages/Language[@Code='ru']/Catalogs/Catalog[@Code='casualpcgames']/Items/Item[@ID=$gameID]/Images/Image[@Type='logo190x140']"/>
                        </xsl:attribute>
                    </xsl:element>
                </xsl:element>
                <p><xsl:element name="a">
                <xsl:attribute name="href">
                            <xsl:value-of select="/ALAWAR_EXPORT/Languages/Language[@Code='ru']/Catalogs/Catalog[@Code='casualpcgames']/Items/Item[@ID=$gameID]/Properties/Property[@Code='OrderUrl']"/>
                        </xsl:attribute>
                    <xsl:value-of select="/ALAWAR_EXPORT/Languages/Language[@Code='ru']/Catalogs/Catalog[@Code='casualpcgames']/Items/Item[@ID=$gameID]/Properties/Property[@Code='Description450']"/>
                </xsl:element></p>
            </li>
            </xsl:for-each>
        </ul>
        </li>
		</xsl:for-each>
	</ul>
</body>
</html>
</xsl:template>

</xsl:stylesheet>