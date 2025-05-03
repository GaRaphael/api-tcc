//-------------------- add ----------------

export interface AddMeetingUseCaseParams {
    date: Date,
    description: string,
    subject: string,
    title: string,
    comment: string | null
}
export interface AddMeetingRepositoryParams {
    date: Date,
    description: string,
    subject: string,
    title: string,
}

export interface AddMeetingUseCaseResponse {
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
export interface AddMeetingRepositoryResponse {
    id: number
    date: Date,
    description: string,
    subject: string,
    title: string,
    active: boolean
    created_at: Date
    updated_at: Date
}

//-------------------- get all ----------------

export interface GetAllMeetingUseCaseResponse {
    data?: {
        id: number
        date: Date,
        description: string,
        subject: string,
        title: string,
        active: boolean
        created_at: Date
        updated_at: Date
    }[]
    error?: string
}

export interface GetAllMeetingRepositoryResponse {
    id: number
    date: Date,
    description: string,
    subject: string,
    title: string,
    active: boolean
    created_at: Date
    updated_at: Date
}[]

//-------------------- get by id ----------------

export interface GetByIdMeetingUseCaseResponse {
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

export interface GetByIdMeetingRepositoryResponse {
    id: number
    date: Date,
    description: string,
    subject: string,
    title: string,
    active: boolean
    created_at: Date
    updated_at: Date
}


export interface GetByIdMeetingUseCaseParams {
    id: number
}

export interface GetByIdMeetingRepositoryParams {
    id: number
}


