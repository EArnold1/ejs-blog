
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

// add post logic
const addPost = (req, res) => {
    const { title, post } = req.body;

    const id = Math.random().toString()
    const obj = { title, post, id }

    posts.push(obj)

    res.redirect('/posts')
}


// not found page
const notFound = (req, res) => {
    res.render('notfound', { title: 'page not found' })
}

module.exports = { homePage, addPostPage, addPost, notFound, postsPage }