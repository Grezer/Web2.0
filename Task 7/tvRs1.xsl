<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">			
	<xsl:template match="/TVGrid">		
		<xsl:for-each select="/TVGrid/Event" >		
		<div>
			<xsl:attribute name="name"><xsl:value-of select="Date" /></xsl:attribute>
			
			<p>
				<xsl:value-of select="Date" />
				 &#160;
				<xsl:value-of select="Start" />
			</p>
			<h4>
				<xsl:value-of select="Title" />
			</h4>
			<p>
				<xsl:value-of select="Info" />
			</p>					
		</div>						
		</xsl:for-each>
	</xsl:template>

</xsl:stylesheet>