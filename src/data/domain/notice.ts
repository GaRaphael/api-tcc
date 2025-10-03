//-------------------- add ----------------

export interface AddNoticeUseCaseParams {
    title: string
    description: string
    image: string | null
}
export interface AddNoticeRepositoryParams {
    title: string
    description: string
    image?: string | null
}

export interface AddNoticeUseCaseResponse {
    data?: {
        id: number
        title: string
        description: string
        image: string | null
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}
export interface AddNoticeRepositoryResponse {
    id: number
    title: string
    description: string
    image: string | null
    active: boolean
    created_at: Date
    updated_at: Date
}

//-------------------- get all ----------------

export interface GetAllNoticeUseCaseResponse {
    data?: {
        id: number
        title: string
        description: string
        image: string | null
        active: boolean
        created_at: Date
        updated_at: Date
    }[]
    error?: string
}

//-------------------- get by id ----------------

export interface GetByIdNoticeUseCaseResponse {
    data?: {
        id: string,
        title: string,
        description: string,
        created_at: Date,
        photos: string,
        likes: number,
        dislikes: number
    }
    error?: string
}
export interface GetByIdNoticeRepositoryResponse {
    id: string,
    title: string,
    description: string,
    created_at: Date,
    photos: string,
    likes: number,
    dislikes: number
}
