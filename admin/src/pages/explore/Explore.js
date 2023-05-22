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

        const reactions = document.createElement('div');
        reactions.classList.add('reactions');

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.classList.add('commentButton');
        reactions.appendChild(commentButton);

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.classList.add('likeButton');
        reactions.appendChild(likeButton);

        listItem.appendChild(post);
        listItem.appendChild(reactions);

        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Add a comment';
        commentInput.classList.add('comment-input');
        listItem.appendChild(commentInput);

        const commentsContainer = document.createElement('div');
        commentsContainer.classList.add('comments-container');
        listItem.appendChild(commentsContainer);

        postList.prepend(listItem);

        postInput.value = '';
        imageInput.value = '';
        topicInput.value = '';

        localStorage.setItem('posts', postList.innerHTML);
    }
}

function createComment(commentInput, commentsContainer) {
    const commentContent = commentInput.value.trim();

    if (commentContent !== '') {
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');

        const commentContentElem = document.createElement('p');
        commentContentElem.classList.add('comment-content');
        commentContentElem.textContent = commentContent;
        commentItem.appendChild(commentContentElem);

        commentsContainer.appendChild(commentItem);

        commentInput.value = '';
    }
}

function likePost() {
    // Like post logic...
}

postList.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('commentButton')) {
        const listItem = target.closest('.post-item');
        const commentInput = listItem.querySelector('.comment-input');
        const commentsContainer = listItem.querySelector('.comments-container');
        createComment(commentInput, commentsContainer);
    } else if (target.classList.contains('likeButton')) {
        likePost();
    }
});

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