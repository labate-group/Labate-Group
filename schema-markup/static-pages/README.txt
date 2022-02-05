Should all STATIC pages have the following template?
~ Yes, If possible along with other content specific type (like AboutPage).

{
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "ProfessionalService",
		},
		{
			"@type": "WebSite",
		},
		{
			"@type": "ImageObject",
		},
		{
			"@type": "WebPage",
		},
		{
			"@type": "WPHeader",
		},
		{
			"@type": "WPFooter",
		}
	]
}
