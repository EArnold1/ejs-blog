

// home page
const homePage = (req, res) => {
    res.render('index', { title: 'Home' })
}

// add post
const addPostPage = (req, res) => {
    res.render('add', { title: 'Add Post' })
}

const addPost = (req, res) => {
    console.log(req.body.title, req.body.post)
    res.redirect('/')
}

const notFound = (req, res) => {
    res.render('notfound', { title: 'page not found' })
}

module.exports = { homePage, addPostPage, addPost, notFound }