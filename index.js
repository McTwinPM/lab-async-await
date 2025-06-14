// Write your code here!
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.map(post => ({
            id: post.id,
            title: post.title,
            body: post.body
        }));
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
document.addEventListener('DOMContentLoaded', async () => {
    const posts = await fetchPosts();
    displayPosts(posts);
    });
async function displayPosts(posts) {
        const postsContainer = document.getElementById('post-list');
        posts.forEach(post => {
            const postElement = document.createElement('li');
            postElement.className = 'post';
            const h1 = document.createElement('h1');
            h1.textContent = post.title;
            const p = document.createElement('p');
            p.textContent = post.body;

            postElement.appendChild(h1);
            postElement.appendChild(p);
            postsContainer.appendChild(postElement);
        });
    }