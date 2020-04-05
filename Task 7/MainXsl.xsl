<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html> 

<body> 

<xsl:for-each select= "//TVGrid/Event"> 
  <xsl:sort select="Date"/>  <xsl:sort select="Start"/>       
        <table>            
            <td ><xsl:value-of select="Date"/></td>
            &#160;
            <td><xsl:value-of select="Start"/></td>
            <td><xsl:value-of select="Title"/></td>            
        </table>    
</xsl:for-each>
<!-- <style>
  table {
    width: 400px; 
    border-collapse: separate; 
    border-spacing: 10px;  -->
    <!-- border: 1px solid red; 
  }
  td {
    border: 1px solid red; 
    text-align: center; 
  }
</style> -->
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet>