<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="TVGrid">
<html>
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
	<ul id="tempList">
    <xsl:apply-templates select="Event">
			<xsl:sort select="Date" data-type="text" order="descending" />
			<xsl:sort select="Start" data-type="text" order="ascending" />
		</xsl:apply-templates>
	</ul>
  <ul id="categoryList">
    
  </ul>
	<script src="script.js"></script>
</body>
</html>
</xsl:template>
<xsl:template match="Event">
	<li>
		<span class="hidden-date"><xsl:value-of select="Date"/></span>
		<xsl:value-of select="Start"/>
		<xsl:value-of select="Title"/>
	</li>
</xsl:template>
</xsl:stylesheet>