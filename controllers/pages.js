const posts = [];

// home page
const homePage = (req, res) => {
    res.render('index', { title: 'Home' })
}

// add post page
const addPostPage = (req, res) => {
    res.render('add', { title: 'Add Post' })
}

// posts page
const postsPage = (req, res) => {
    res.render('posts', { title: 'Posts', posts })
}

// post page
const getPost = (req, res) => {
    const { id } = req.params;
    const post = posts.filter(val => val.id === id)
    res.render(`post`, { title: `${post.length > 0 ? post[0].title : 'Post'}`, post })
}

// delete post
const deletePost = (req, res) => {
    const { id } = req.params;
    const index = posts.findIndex(val => val.id === id);
    posts.splice(index, 1);

    res.render(`posts`, { title: 'Post', posts })
}

// add post logic
const addPost = (req, res) => {
    const { author, title, post } = req.body;

    const postSlug = post.split(' ');
    let slug;
    if (postSlug.length > 10) {
        slug = postSlug.slice(0, 10).join(' ') + "...";
    } else {
        slug = post;
    }

    const id = Math.random().toString()
    const obj = { author, title, post, id, slug }

    posts.push(obj)

    res.redirect('/posts')
}


// not found page
const notFound = (req, res) => {
    res.render('notfound', { title: 'page not found' })
}

module.exports = { homePage, addPostPage, addPost, notFound, postsPage, getPost, deletePost }