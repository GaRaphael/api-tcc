//-------------------- add ----------------


export interface AddUserUseCaseParams {
    email: string
    name: string
    password: string
    confirm_password: string
}
export interface AddUserRepositoryParams {
    email: string
    name: string
    password: string
}
export interface AddUserUseCaseResponse {
    data?: {
        id: number
        email: string
        name: string
        password: string
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}
export interface AddUserRepositoryResponse {
    id: number
    email: string
    name: string
    password: string
    active: boolean
    created_at: Date
    updated_at: Date
}

//------------------- verify exists ------------------

export interface FindUserExistsParams {
    email: string
}

//------------------- reset ------------------
export interface ResetPasswordUseCaseParams {
    email: string
    new_password: string
}

export interface ResetPasswordRepositoryParams {
    email: string
    new_password: string
}

export interface ResetPasswordUseCaseResponse {
    data?: {
        id: number
        email: string
        name: string
        password: string
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}