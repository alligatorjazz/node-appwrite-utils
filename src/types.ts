export interface CloudFunctionContext {
	req: { body: string; bodyRaw: string; method: string };
	res: {
		send: (data: string) => void;
		json: (data: object, status?: number) => void;
	};
	log: typeof console.log;
	error: typeof console.error;
}