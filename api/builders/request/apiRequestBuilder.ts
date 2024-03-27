import { APIRequestContext } from "@playwright/test";

interface APIRequestBuilderInterface<T> {
  setUrl(url: string): APIRequestBuilderInterface<T>,
  setMethod(method: "GET" | "POST" | "PUT" | "DELETE"): APIRequestBuilderInterface<T>,
  setHeaders(headers: Record<string, string>): APIRequestBuilderInterface<T>,
  setParams(params: Record<string, string>): APIRequestBuilderInterface<T>,
  setData(data: object): APIRequestBuilderInterface<T>,
  send(): Promise<T>,
}

export class BasicAPIRequestBuilder<T> implements APIRequestBuilderInterface<T> {
  private url = "";
  private method = "";
  private headers?: Record<string, string>;
  private params: Record<string, string> = {};
  private data?: object;
  
  constructor(protected apiRequestContext: APIRequestContext) {}

  setUrl(url: string): APIRequestBuilderInterface<T> {
    this.url = url;
    return this;
  }

  setMethod(method: "GET" | "POST" | "PUT" | "DELETE"): APIRequestBuilderInterface<T> {
    this.method = method;
    return this;
  }
  
  setHeaders(headers: Record<string, string>): APIRequestBuilderInterface<T> {
    this.headers = headers;
    return this;
  }
  
  setParams(params: Record<string, string>): APIRequestBuilderInterface<T> {
    this.params = this.params ?? {};
    this.params = {
      ...this.params,
      ...params
    };
    return this;
  }
  
  setData(data: object): APIRequestBuilderInterface<T> {
    this.data = data;
    return this;
  }

  async send(): Promise<T> {
    if (!this.url) throw new Error("URL is missing");
  
    const response = await this.apiRequestContext.fetch(this.url, {
      method: this.method,
      headers: this.headers,
      params: this.params,
      data: this.data,
    });

    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    const parsedResponse = await response.json();
    return parsedResponse;
  }
}
