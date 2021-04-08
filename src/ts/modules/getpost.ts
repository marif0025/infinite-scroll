async function getPosts(limit: number, page: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

    const data = res.json()
    return data
}

export default getPosts