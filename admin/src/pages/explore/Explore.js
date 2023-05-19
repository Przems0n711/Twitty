import './Explore.scss';

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const header = document.createElement('h1');
header.textContent = 'Explore';
container.appendChild(header);

const trendingTopics = document.createElement('div');
trendingTopics.classList.add('trending-topics');
trendingTopics.innerHTML = `
  <h2>Trending Topics</h2>
  <ul>
    <li>#JavaScript</li>
    <li>#WebDevelopment</li>
    <li>#ArtificialIntelligence</li>
  </ul>
`;
container.appendChild(trendingTopics);

const tweetSuggestions = document.createElement('div');
tweetSuggestions.classList.add('tweet-suggestions');
tweetSuggestions.innerHTML = `
  <h2>Who to Follow</h2>
  <ul>
    <li>@OpenAI</li>
    <li>@TechCrunch</li>
    <li>@elonmusk</li>
  </ul>
`;
container.appendChild(tweetSuggestions);

const postInput = document.createElement('textarea');
postInput.placeholder = "What's happening?";
postInput.classList.add('postInput');
container.appendChild(postInput);

const imageInput = document.createElement('input');
imageInput.type = 'file';
imageInput.accept = 'image/*';
imageInput.classList.add('imageInput');
container.appendChild(imageInput);

const topicInput = document.createElement('input');
topicInput.type = 'text';
topicInput.placeholder = 'Add a topic';
topicInput.classList.add('topicInput');
container.appendChild(topicInput);

const postButton = document.createElement('button');
postButton.textContent = 'Post';
postButton.classList.add('postButton');
container.appendChild(postButton);

const postList = document.createElement('ul');
container.appendChild(postList);

const storedPosts = localStorage.getItem('posts');
if (storedPosts) {
    postList.innerHTML = storedPosts;
}

// Event listeners
postButton.addEventListener('click', createPost);

function createPost() {
    const postContent = postInput.value.trim();
    const selectedImage = imageInput.files[0];
    const postTopic = topicInput.value.trim();

    if (postContent !== '' || selectedImage || postTopic !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('post-item');

        const post = document.createElement('div');
        post.classList.add('post');

        if (postContent !== '') {
            const content = document.createElement('p');
            content.classList.add('content');
            content.textContent = postContent;
            post.appendChild(content);
        }

        if (selectedImage) {
            const image = document.createElement('img');
            image.classList.add('image');
            image.src = URL.createObjectURL(selectedImage);
            post.appendChild(image);
        }

        if (postTopic !== '') {
            const topic = document.createElement('span');
            topic.classList.add('topic');
            topic.textContent = `#${postTopic}`;
            post.appendChild(topic);
        }

        listItem.appendChild(post);
        postList.prepend(listItem);

        postInput.value = '';
        imageInput.value = '';
        topicInput.value = '';

        // Store updated posts in local storage
        localStorage.setItem('posts', postList.innerHTML);
    }
}

function toggleDarkMode() {
    container.classList.toggle('dark-mode');
}

function clearPosts() {
    postList.innerHTML = '';
    localStorage.removeItem('posts');
}

const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Toggle Dark Mode';
darkModeButton.addEventListener('click', toggleDarkMode);
container.appendChild(darkModeButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Posts';
clearButton.addEventListener('click', clearPosts);
container.appendChild(clearButton);

export default container;