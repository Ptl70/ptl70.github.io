const blogPosts = [
    { title: "My First Blog Post", content: "This is the content of my first blog post.", link: "post1.html" },
    { title: "Learning JavaScript", content: "Some quick tips on learning JavaScript.", link: "post2.html" },
];

document.addEventListener("DOMContentLoaded", function() {
    let blogContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        let postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="${post.link}">Read more</a>
        `;
        blogContainer.appendChild(postElement);
    });
});
