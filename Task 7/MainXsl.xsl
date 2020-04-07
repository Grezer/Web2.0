<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">		
<xsl:template match="/TVGrid">		
<html>	
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
  <body>     
    <nav>
      <ul>
        <xsl:for-each select="/TVGrid/Event/Date[not(.=preceding::*)]	" >
          <xsl:attribute name="name"><xsl:value-of select="Date" /></xsl:attribute>
            <li>
              <xsl:element name="a">
                  <xsl:attribute name="href">
                      <xsl:value-of select="."/>
                  </xsl:attribute>
                  <xsl:value-of select="."/>
              </xsl:element>              
            </li>
        </xsl:for-each>
      </ul>
    </nav>

    <main>
      <ul>
        <xsl:for-each select="/TVGrid/Event">
        <li>
          <xsl:attribute name="name"><xsl:value-of select="Date" /></xsl:attribute>
            <p>
              <xsl:value-of select="Start"/>
            </p>
            <p>
              <xsl:value-of select="Title"/>
            </p>
            </li>
        </xsl:for-each>
      </ul>
    </main>

  </body>
</html>	
</xsl:template>
</xsl:stylesheet>