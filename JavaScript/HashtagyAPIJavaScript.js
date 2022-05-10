<script>

// Set API Headers
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'hashtagy-generate-hashtags.p.rapidapi.com',
		'X-RapidAPI-Key': '{{Your Own Personal API Key}}'
	}
};

// Fetch Hashtag API
fetch('https://hashtagy-generate-hashtags.p.rapidapi.com/v1/comprehensive/tags?keyword=travel&filter=top', options)
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    renderTags(result.data.best_30_hashtags.hashtags, "#tags-container");
  });

// Set Render Container
function renderTags(tags, containerSelector) {
  let container = document.querySelector(containerSelector);

// Set Render Item
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag-item");
    tagEl.textContent = "#" + tag;
    container.appendChild(tagEl);
  });
}
</script>
<style>
  .tags-container {
    display: flex;
    flex-wrap: wrap;
  }
  .tag-item {
    margin: 5px;
    border-radius: 3px;
    color: #3c5eab;
  }
</style>
<div id="tags-container" class="tags-container"></div>
