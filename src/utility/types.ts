export interface Config {
    name: string,
    type: string
}

export interface Data {
    [key: string]: string | boolean;
    air_suspension: boolean,
    color: string, 
    engine:string, 
    id:string, 
    material:string, 
    name:string, 
    signature:string, 
    wheel:string, 
    wheel_type:string, 
}