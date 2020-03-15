<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html> 
<body> 

<xsl:for-each select= "//generals/person">   
<xsl:sort select="votes" order="descending"/>
        <tr>
            <!-- <td><xsl:value-of select="id"/></td> -->
            <td><a href="{url}"><xsl:value-of select="name"/></a></td>
            <td><xsl:value-of select="votes"/></td>
            <!-- <td><xsl:value-of select="votes"/></td> -->
            <td><xsl:value-of select="description"/></td>
            
        </tr>    
</xsl:for-each>

</body> 
</html> 
</xsl:template> 
</xsl:stylesheet>