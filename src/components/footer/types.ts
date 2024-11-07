export interface listTitle {
    list: string
    link: string
}

export interface listFooter {
    id: number | string
    title: string
    listLink: listTitle[]
}