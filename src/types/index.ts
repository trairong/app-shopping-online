export interface IFromResponses<T> {
    result: boolean;
    status: number;
    statusMessage: string;
    data?: T;
    error?: Array<any>;
    [key: string]: any;
  }