interface createpost {
    num: number,
    title: string,
    desc: string,
}

const createPost = (options: createpost) => {
    let num = options.num;
    let title = options.title;
    let desc = options.desc

    // Create Post Element and add Class
    const post = document.createElement('div')
    post.classList.add('post')

    // Create Post Info Element and add Class
    const postInfo = document.createElement('div')
    postInfo.classList.add('post-info')

    // Create Number Element, add Class and assign Value
    const number = document.createElement('div')
    number.classList.add('number')
    number.innerText = num.toString()

    // Create post-title Element, add Class and assign Value
    const postTitle = document.createElement('div')
    postTitle.classList.add('post-title')
    postTitle.innerText = title

    // Create post-body Element, add Class and assign Value
    const postDesc = document.createElement('div')
    postDesc.classList.add('post-body')
    postDesc.innerText = desc

    // Append post-title and post-body in post-info Elements
    postInfo.appendChild(postTitle)
    postInfo.appendChild(postDesc)

    // Append post-inf0 and number in post Elements
    post.appendChild(number)
    post.appendChild(postInfo)

    // Return Post Element
    return post
}

export default createPost