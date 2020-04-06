<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">		
	<xsl:template match="/TVGrid">		
<html>	
		<xsl:for-each select="/TVGrid/Event" >		
		<div>
			<xsl:attribute name="name"><xsl:value-of select="Date" /></xsl:attribute>			
			<h1>
				<xsl:value-of select="Date" />
			</h1>
		</div>						
		</xsl:for-each>
</html>	
	</xsl:template>
</xsl:stylesheet>