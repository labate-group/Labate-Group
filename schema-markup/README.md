# Schema Markup

## References
* **[Schema.org](https://schema.org)**
* **[Full Schema Higherarchy](https://schema.org/docs/full.html)**
* **[Google Search Central](https://search.google.com/search-console?lfhs=2)**

## Generators
* **[Labate Group SEO Application](https://labate.io/applications/schema)**
* **[SchemaApp Web Tool](https://www.schemaapp.com/tools/jsonld-schema-generator/)**
* **[Schema Tool](https://schema.pythonanywhere.com)** ([About this tool](http://polak.es/en/generator.html))**
* **[Schema.org Chrome Extension](https://chrome.google.com/webstore/detail/schema-builder-tester-for)**

## Validators
* **[Schema.org Validator](https://validator.schema.org)**
* **[Google Rich Results Tester](https://search.google.com/test/rich-results)**
* **[Schema.org Chrome Extension](https://chrome.google.com/webstore/detail/schema-builder-tester-for)**

## Articles
* **[Content mismatch? Missing Schema on AMP pages](https://www.searchenginejournal.com/structured-data-amp/323523)**
* **[Schema Markup Structured Data 2018 Guide](https://presencemedia.io/schema-markup-structured-data-2018-guide)**
* **[Good instructions](https://builtvisible.com/micro-data-schema-org-guide-generating-rich-snippets)**
* **[5 Common schema problems and what to do about them](https://www.distilled.net/resources/5-common-schema-problems-and-what-to-do-about-them/)**
* **[Structured Data Actions in email](https://developers.google.com/gmail/markup/reference/go-to-action)**

## Quality Control
### Content
- ACCURATE
- VISIBLE (on the page)
- RELEVANT (representitive of page)

### Specificity
Always use the most specific item type for each schema.
- Never use @LocalBusiness when @ProfessionalService can be used, as @ProfessionalService is a recognized sub-type of @LocalBusiness.
- Never use @Event when @BusinessEvent can be used, as @BusinessEvent is a recognized sub-type of @Event.

### Multiple Items
Google Search understands multiple items on a page, whether you nest the items or specify each item individually. If there are items that are more helpful when they are linked together (for example, a recipe and a video), use @id in both the recipe and the video items to specify that the video is about the recipe on the page. If you didn't link the items together, Google Search may not know that it can show the video as a Recipe rich result.

#### Nesting Items
When there is one main item, and additional items are grouped under the main item. This is particularly helpful when grouping related items (for example, a recipe with a video and reviews).

#### Individual Items
When each item is a separate block on the same page, using "@graph": [ ] to encapsulate each item. This feature may be used as a top-level feature (as a 2nd line under "@context": "https://schema.org/", or within nested items deeper inside the schema.



### What is Schema Markup?<br>
https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data<br>com/search/docs/advanced/structured-data/search-gallery<br>
### Schema Guidelines<br>
https://developers.google.com/search/docs/advanced/structured-data/sd-policies<br>


