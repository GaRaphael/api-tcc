//-------------------- add ----------------


export interface AddUserUseCaseParams {
    email: string
    cpf: string
    name: string
    password: string
    confirm_password: string
}
export interface AddUserRepositoryParams {
    email: string
    cpf: string
    name: string
    password: string
}
export interface AddUserUseCaseResponse {
    data?: {
        id: number
        email: string
        cpf: string
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
    cpf: string
    name: string
    password: string
    active: boolean
    created_at: Date
    updated_at: Date
}

//------------------- verify exists ------------------

export interface FindUserExistsParams {
    cpf: string
}

//------------------- reset ------------------
export interface ResetPasswordUseCaseParams {
    cpf: string
    new_password: string
}

export interface ResetPasswordRepositoryParams {
    cpf: string
    new_password: string
}

export interface ResetPasswordUseCaseResponse {
    data?: {
        id: number
        email: string
        cpf: string
        name: string
        password: string
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}