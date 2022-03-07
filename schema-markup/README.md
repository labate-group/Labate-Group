# Schema Markup

## Foundation
* **[Google's Intro to Structued Data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)**
* **[Labate Group: Schema Markup for Web Developer](https://labate.io/blog/schema-markup-for-website-developers)**
* **[Labate Group: Schema Markup Basics](https://labate.io/blog/what-is-schema-markup-the-basics)**

## References
* **[Schema.org](https://schema.org)**
* **[Schema.org Full Higherarchy](https://schema.org/docs/full.html)**
* **[Google Search Central](https://search.google.com/search-console?lfhs=2)**
* **[Labate Group: Global + Page-Specific Schema Belend](https://labate.io/blog/global-and-page-specific-schema-markup-in-1-script-how)**

## Generators
* **[Labate Group SEO Application](https://labate.io/applications/schema)**
* **[SchemaApp Web Tool](https://www.schemaapp.com/tools/jsonld-schema-generator/)**
* **[Schema Tool](https://schema.pythonanywhere.com)** ([About this tool](http://polak.es/en/generator.html))**
* **[Schema.org Chrome Extension](https://chrome.google.com/webstore/detail/schema-builder-tester-for)**

## Validators
* **[Schema.org Validator](https://validator.schema.org)**
* **[Google Rich Results Tester](https://search.google.com/test/rich-results)**
* **[Schema.org Chrome Extension](https://chrome.google.com/webstore/detail/schema-builder-tester-for)**

## Quality Control
### Content
- ACCURATE
- VISIBLE (on the page)
- RELEVANT (representitive of page)

### Specificity
Always use the most specific item type for each schema
* Never use **[@LocalBusiness](https://schema.org/LocalBusiness)** when **[@ProfessionalService](https://schema.org/ProfessionalSerivce)** can be used
* Never use **[@Event](https://schema.org/Event)** when **[@BusinessEvent](https://schema.org/BusinessEvent)** can be used

### Structure
* Google Search understands multiple items on a page, whether you nest the items or specify each item individually. If there are items that are more helpful when they are linked together (for example, a recipe and a video), use @id in both the recipe and the video items to specify that the video is about the recipe on the page. If you didn't link the items together, Google Search may not know that it can show the video as a Recipe rich result.

#### Nesting Items
* When there is one main item, and additional items are grouped under the main item. This is particularly helpful when grouping related items (for example, a recipe with a video and reviews).

#### Individual Items
* When each item is a separate block on the same page, using "@graph": [ ] to encapsulate each item. This feature may be used as a top-level feature (as a 2nd line under "@context": "https://schema.org/", or within nested items deeper inside the schema.






