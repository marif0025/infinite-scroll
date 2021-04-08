import createPost from './modules/createpost';
import getPosts from './modules/getpost'
import filterPosts from './modules/filterposts'

const postsContainer = document.querySelector('.post-container');
const loader = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit: number = 5;
let page: number = 1;

// fetch posts from API
getPosts(limit, page)

// Show post in DOm
async function showPosts() {
    const posts: [] = await getPosts(limit, page)

    interface post {
        body: string,
        id: number,
        title: string,
        userid: number,
    }

    posts.forEach((p: post) => {
        let number = p.id
        let desc = p.body
        let title = p.title

        const post = createPost({
            num: number,
            title: title,
            desc: desc
        })

        if (!postsContainer) { return }
        postsContainer.appendChild(post)
    })
}

// Show loader
function showLoading() {
    if (!loader) { return }
    loader.classList.add('show')

    setTimeout(() => {
        loader.classList.remove('show')

        setTimeout(() => {
            page++
            showPosts()
        }, 200)
    }, 1000)
}

// initial Posts
showPosts()

window.addEventListener('scroll', (e) => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight) {
        showLoading()
    }
})

filter?.addEventListener('input', filterPosts)