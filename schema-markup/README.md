# Schema Markup

## References
* **[Schema.org](https://schema.org)**
* **[Google Search Central](https://search.google.com/search-console?lfhs=2)**

## Generators
* **[Labate Group SEO Application](https://labate.io/applications/schema)**
* **[SchemaApp Web Tool](https://www.schemaapp.com/tools/jsonld-schema-generator/)**
* **[Schema Tool](https://schema.pythonanywhere.com)** ([About this tool](http://polak.es/en/generator.html))

## Validators
* **[Schema.org Validator](https://validator.schema.org)**

## Articles
* **[Content mismatch? Missing Schema on AMP pages](https://www.searchenginejournal.com/structured-data-amp/323523)**
* **[Schema Markup Structured Data 2018 Guide](https://presencemedia.io/schema-markup-structured-data-2018-guide)**
* **[Good instructions](https://builtvisible.com/micro-data-schema-org-guide-generating-rich-snippets)**
* **[5 Common schema problems and what to do about them](https://www.distilled.net/resources/5-common-schema-problems-and-what-to-do-about-them/)**
* **[Structured Data Actions in email](https://developers.google.com/gmail/markup/reference/go-to-action)**

## Quality Control
### Content
- Provide only UP-TO-DATE content.
- Provide only ACCURATE content.
- Provide only VISIBLE (on the page) content.
- Provide only RELEVANT content.

### Specificity
Always use the most specific item type for each schema.

Examples:
- Never use @LocalBusiness when @ProfessionalService can be used, as @ProfessionalService is a recognized sub-type of @LocalBusiness.
- Never use @Event when @BusinessEvent can be used, as @BusinessEvent is a recognized sub-type of @Event.

### Multiple Items
Google Search understands multiple items on a page, whether you nest the items or specify each item individually. If there are items that are more helpful when they are linked together (for example, a recipe and a video), use @id in both the recipe and the video items to specify that the video is about the recipe on the page. If you didn't link the items together, Google Search may not know that it can show the video as a Recipe rich result.

#### Nesting Items
When there is one main item, and additional items are grouped under the main item. This is particularly helpful when grouping related items (for example, a recipe with a video and reviews).

#### Individual Items
When each item is a separate block on the same page, using "@graph": [ ] to encapsulate each item. This feature may be used as a top-level feature (as a 2nd line under "@context": "https://schema.org/", or within nested items deeper inside the schema.

### Validation
All schemas must pass both of these validators in order to be used by the Labate Group.<br>
https://jsonlint.com/<br>
https://validator.schema.org/<br>
https://search.google.com/test/rich-results<br>

### Beautification
To keep everything clean and easily editable, be sure all schemas are put through this beautifier with a "tab" spacer.<br>
<br>
JSON Beautifier<br>
https://www.freeformatter.com/json-formatter.html<br>

### What is Schema Markup?<br>
https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data<br>com/search/docs/advanced/structured-data/search-gallery<br>
### Schema Guidelines<br>
https://developers.google.com/search/docs/advanced/structured-data/sd-policies<br>
* **[Schema.org Chrome Extension](https://chrome.google.com/webstore/detail/schema-builder-tester-for/
* **[Full Schema Higherarchy](https://schema.org/docs/full.html)*
