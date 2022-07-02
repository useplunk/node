interface IRequest {
  url: string;
}

interface Json {
  [key: string]: string | number | boolean | Date | object | undefined;
}

interface IwithoutBody extends IRequest {
  method: "GET";
}

interface IwithBody extends IRequest {
  method: "POST" | "PUT" | "DELETE";
  body?: Json;
}

export type RequestType = IwithBody | IwithoutBody;
