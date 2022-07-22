
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

    console.log(index)
    // return res.redirect(`/posts`)
    res.render(`posts`, { title: 'Post', posts })
}

// add post logic
const addPost = (req, res) => {
    const { title, post } = req.body;

    const id = Math.random().toString()
    const obj = { title, post, id }

    posts.push(obj)

    console.log(posts)
    res.redirect('/posts')
}


// not found page
const notFound = (req, res) => {
    res.render('notfound', { title: 'page not found' })
}

module.exports = { homePage, addPostPage, addPost, notFound, postsPage, getPost, deletePost }