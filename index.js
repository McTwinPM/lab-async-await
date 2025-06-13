// Write your code here!
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const posts = data.map(post => ({
                id: post.id,
                title: post.title,
                body: post.body
            }));
            console.log(posts);
        })
        .catch(error => console.error('Error fetching posts:', error));


    function displayPosts(posts) {
        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
            const postElement = document.createElement('li');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});