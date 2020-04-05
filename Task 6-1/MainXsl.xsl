<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 

<html> 
<body> 
<h1><xsl:value-of select="//channel/title"/></h1>
<xsl:for-each select= "//channel/item">   
    <tr>
      <td><p><xsl:value-of select="title"/></p>
      <p><xsl:value-of select="pubDate"/></p></td>      
    </tr>    
</xsl:for-each>
</body> 
</html> 

</xsl:template> 
</xsl:stylesheet>