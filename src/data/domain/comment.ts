//-------------------- add ----------------

export interface AddCommentUseCaseParams {
    description: string,
    user_id: number,
    meeting_id: number,
}

export interface AddCommentRepositoryParams {
    description: string,
    user_id: number,
    meeting_id: number,
}

export interface AddCommentUseCaseResponse {
    status?: string
    error?: string
}

//-------------------- get all ----------------

export interface GetAllCommentUseCaseParams {
    meeting_id: number,
}

export interface GetAllCommentRepositoryParams {
    meeting_id: number,
}

export interface GetAllCommentUseCaseResponse {
    data?: {
        id: number
        description: string,
        name: string,
        active: boolean
        created_at: Date
        updated_at: Date
    }[]
    error?: string
}

export interface GetAllCommentRepositoryResponse {
    id: number
    description: string,
    name: string,
    active: boolean
    created_at: Date
    updated_at: Date
}[]

//-------------------- get by id ----------------

export interface GetByIdCommentUseCaseResponse {
    data?: {
        id: number
        date: Date,
        description: string,
        subject: string,
        title: string,
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}

export interface GetByIdCommentRepositoryResponse {
    id: number
    date: Date,
    description: string,
    subject: string,
    title: string,
    active: boolean
    created_at: Date
    updated_at: Date
}


export interface GetByIdCommentUseCaseParams {
    id: number
}

export interface GetByIdCommentRepositoryParams {
    id: number
}


