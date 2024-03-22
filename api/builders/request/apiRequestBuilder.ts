import { APIRequestContext, APIResponse } from "@playwright/test";

interface APIRequestBuilderInterface {
  setUrl(url: string): APIRequestBuilderInterface,
  setMethod(method: string): APIRequestBuilderInterface,
  setHeaders(headers: Record<string, string>): APIRequestBuilderInterface,
  setParams(params: Record<string, string>): APIRequestBuilderInterface,
  setData(data: object): APIRequestBuilderInterface,
  send(): Promise<APIResponse>,
}

export class BasicAPIRequestBuilder implements APIRequestBuilderInterface {
  private url = "";
  private method = "";
  private headers?: Record<string, string>;
  private params: Record<string, string> = {};
  private data?: object;
  
  constructor(protected apiRequestContext: APIRequestContext) {}

  setUrl(url: string): APIRequestBuilderInterface {
    this.url = url;
    return this;
  }

  setMethod(method: string): APIRequestBuilderInterface {
    this.method = method;
    return this;
  }
  
  setHeaders(headers: Record<string, string>): APIRequestBuilderInterface {
    this.headers = headers;
    return this;
  }
  
  setParams(params: Record<string, string>): APIRequestBuilderInterface {
    this.params = params;
    return this;
  }
  
  setData(data: object): APIRequestBuilderInterface {
    this.data = data;
    return this;
  }

  async send(): Promise<APIResponse> {
    if (!this.url) throw new Error("URL is missing");
  
    const response = await this.apiRequestContext.fetch(this.url, {
      method: this.method,
      headers: this.headers,
      params: this.params,
      data: this.data,
    });

    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    return await response.json();
  }
}
