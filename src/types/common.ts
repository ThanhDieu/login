type ResponseAPI<T = unknown> = {
    data: T;
    page_info?: {
        count_items: number;
        total_items: number;
        current_page: number;
    };
};

export type BaseResponseAPI<T = unknown> = {
    code: number;
    data: ResponseAPI<T>[];
    errors: string;
    message: string;
    success: boolean;
};

export interface MetaType {
    count: number; // Number of records of current page
    total: number;

}
export interface MetaTypeV3 {
    count_items: number; // Number of records of current page
    total_items: number;

}


export type ResponseType<T = unknown> = {
    code: number; // HTTP status code
    data: T; // data response
    errors?: string;
    message: string; // Success/Error message
    success: boolean; // Status response
    meta: MetaType;
    metadata: MetaTypeV3
};
