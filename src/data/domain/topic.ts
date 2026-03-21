//-------------------- topic ----------------

export interface AddTopicUseCaseParams {
    title: string
    description: string
    user_id: number
}

export interface AddTopicRepositoryParams {
    title: string
    description: string
    user_id: number
}

export interface AddTopicUseCaseResponse {
    data?: {
        id: number
        title: string
        description: string
        user_id: number | null
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}

export interface EditTopicUseCaseParams {
    id: number
    title?: string
    description?: string
    user_id: number
}

export interface EditTopicUseCaseResponse {
    data?: {
        id: number
        title: string
        description: string
        user_id: number | null
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}

export interface DeactivateTopicUseCaseParams {
    id: number
    user_id: number
}

export interface DeactivateTopicUseCaseResponse {
    data?: {
        id: number
        active: boolean
        updated_at: Date
    }
    error?: string
}

export interface AddReactionTopicUseCaseParams {
    topic_id: number
    user_id: number
    type: string
}

export interface AddReactionTopicUseCaseResponse {
    data?: {
        id: number
        topic_id: number
        user_id: number
        type: string
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}

export interface AddCommentTopicUseCaseParams {
    topic_id: number
    user_id: number
    description: string
}

export interface AddCommentTopicUseCaseResponse {
    data?: {
        id: number
        topic_id: number
        user_id: number
        description: string
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}

export interface UpsertVoteTopicUseCaseParams {
    topic_id: number
    user_id: number
    type: string
}

export interface UpsertVoteTopicUseCaseResponse {
    data?: {
        id: number
        topic_id: number
        user_id: number
        type: string
        active: boolean
        created_at: Date
        updated_at: Date
    }
    error?: string
}

export interface TopicReactionItem {
    id: number
    user_id: number
    user_name: string
    type: string
    active: boolean
    created_at: Date
    updated_at: Date
}

export interface TopicCommentItem {
    id: number
    user_id: number
    user_name: string
    description: string
    active: boolean
    created_at: Date
    updated_at: Date
}

export interface TopicVoteItem {
    id: number
    user_id: number
    user_name: string
    type: string
    active: boolean
    created_at: Date
    updated_at: Date
}

export interface TopicDetails {
    id: number
    title: string
    description: string
    user_id: number | null
    created_by: string
    active: boolean
    created_at: Date
    updated_at: Date
    votes: {
        totalLikes: number
        totalDislikes: number
        data: TopicVoteItem[]
    }
    comments: {
        total: number
        data: TopicCommentItem[]
    }
    reactions: {
        totalLikes: number
        totalDislikes: number
        data: TopicReactionItem[]
    }
}

export interface GetAllTopicUseCaseResponse {
    data?: TopicDetails[]
    error?: string
}

export interface GetByIdTopicUseCaseResponse {
    data?: TopicDetails
    error?: string
}

export interface TopicRepositoryById {
    id: number
    user_id: number | null
    active: boolean
}
