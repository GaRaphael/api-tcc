import { AddTopicRepositoryParams, TopicDetails, TopicRepositoryById } from '../../../data/domain/topic';
export declare class TopicRepository {
    add(params: AddTopicRepositoryParams): Promise<{
        id: number;
        active: boolean;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        user_id: number | null;
    }>;
    getById(id: number): Promise<TopicRepositoryById | null>;
    edit(params: {
        id: number;
        title?: string;
        description?: string;
    }): Promise<{
        id: number;
        active: boolean;
        title: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        user_id: number | null;
    }>;
    deactivate(id: number): Promise<{
        id: number;
        active: boolean;
        updated_at: Date;
    }>;
    addReaction(params: {
        topic_id: number;
        user_id: number;
        type: string;
    }): Promise<{
        type: string;
        id: number;
        active: boolean;
        created_at: Date;
        updated_at: Date;
        user_id: number;
        topic_id: number;
    }>;
    addComment(params: {
        topic_id: number;
        user_id: number;
        description: string;
    }): Promise<{
        id: number;
        active: boolean;
        description: string;
        created_at: Date;
        updated_at: Date;
        user_id: number;
        topic_id: number;
    }>;
    upsertVote(params: {
        topic_id: number;
        user_id: number;
        type: string;
    }): Promise<{
        type: string;
        id: number;
        active: boolean;
        created_at: Date;
        updated_at: Date;
        user_id: number;
        topic_id: number;
    }>;
    getAllActive(): Promise<TopicDetails[]>;
    getDetailsById(id: number): Promise<TopicDetails | null>;
}
