export type Post = {
    image: string
    category: string
    title: string
    author: User
    createdAt: string
}

export type User = {
    image: string
    name: string
}