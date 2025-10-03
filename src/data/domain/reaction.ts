//-------------------- add ----------------

export interface AddReactionUseCaseParams {
    notice_id: number
    user_id: number
    type: string
}

export interface AddReactionRepositoryParams {
    notice_id: number
    user_id: number
    type: string
}

export interface AddReactionUseCaseResponse {
    data?: {
        id: number
        notice_id: number
        user_id: number
        type: string
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}
export interface AddReactionRepositoryResponse {
    id: number
    notice_id: number
    user_id: number
    type: string
    active: boolean
    created_at: Date
    updated_at: Date
}

//-------------------- get all ----------------

export interface GetAllReactionUseCaseResponse {
    data?: {
        totalLikes: number
        totalDislikes: number
        data: {
            id: number
            notice_id: number
            user: string
            type: string
            active: boolean
            created_at: Date
            updated_at: Date
        }[]
    }
    error?: string
}

export interface GetAllReactionRepositoryResponse {
    totalLikes: number
    totalDislikes: number
    data: {
        id: number
        notice_id: number
        user: string
        type: string
        active: boolean
        created_at: Date
        updated_at: Date
    }[]
}


