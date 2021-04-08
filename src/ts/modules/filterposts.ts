const filterPosts = (e: Event) => {
    const target = <HTMLInputElement>e.target
    const term = target.value.toUpperCase()
    const posts = document.querySelectorAll('.post')

    posts.forEach(post => {
        const title = <HTMLElement>post.querySelector('.post-title')
        const body = <HTMLElement>post.querySelector('.post-body')
        if (!title) { return }
        if (!body) { return }
        const titleText = title.innerText.toUpperCase()
        const bodyText = body.innerText.toUpperCase()

        if (titleText.indexOf(term) > -1 || bodyText.indexOf(term) > -1) {
            post.classList.remove('hide')
        } else {
            post.classList.add('hide')
        }
    })
}

export default filterPosts