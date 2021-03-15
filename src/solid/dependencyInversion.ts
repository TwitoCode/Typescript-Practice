interface Formatter {
	parse<T>(content: T): string;
}

export class JSONFormatter implements Formatter {
	parse<T>(content: T) {
		return `JSON: ${content}`;
	}
}

export class XMLFormatter implements Formatter {
	parse<T>(content: T) {
		return `XML: ${content}`;
	}
}

export class HttpRequester {
	constructor(private formatter: Formatter) {}

	request(url: string) {
		return this.formatter.parse(url);
	}
}
