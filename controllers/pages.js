
const posts = [];

// home page
const homePage = (req, res) => {
    res.render('index', { title: 'Home' })
}

// add post
const addPostPage = (req, res) => {
    res.render('add', { title: 'Add Post' })
}

const addPost = (req, res) => {
    const { title, post } = req.body;

    const id = Math.random().toString()
    const obj = { title, post, id }

    posts.push(obj)

    console.log(posts)
    res.redirect('/')
}

const notFound = (req, res) => {
    res.render('notfound', { title: 'page not found' })
}

module.exports = { homePage, addPostPage, addPost, notFound }