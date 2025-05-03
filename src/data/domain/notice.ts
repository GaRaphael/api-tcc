//-------------------- add ----------------

export interface AddNoticeUseCaseParams {
    title: string
    description: string
    image: string | null
}
export interface AddNoticeRepositoryParams {
    title: string
    description: string
    image: string | null
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

