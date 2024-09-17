type Headers = Record<string, string>;
/**
 * The interface for the context object passed into each Appwrite Cloud Function.
 */
export interface CloudFunctionContext {
	req: {
		bodyRaw: string;
		body: string;
		headers: Headers;
		scheme: string;
		method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
		url: string,
		host: string,
		port: number,
		path: string,
		queryString: string
	};
	res: {
		empty: () => void;
		json: (data: object, status?: number, headers?: Headers) => void;
		binary: (data: ArrayBuffer, status?: number, headers?: Headers) => void;
		redirect: (data: ArrayBuffer, status?: 301 | 302 | 307 | 308, headers?: Headers) => void;
		text: (data: string, status?: number, headers?: Headers) => void;
	};
	log: typeof console.log;
	error: typeof console.error;
}
