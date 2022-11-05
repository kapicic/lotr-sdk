export class Client {

    private baseUrl = 'https://the-one-api.dev';

    private apiVersion = 'v2';

    constructor(private apiKey: string) {
    }

    public async get(url: string): Promise<unknown> {
        const response = await fetch(this.formatUrl(url), this.getConfig());

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }

    private getConfig(): RequestInit {
        if (!this.apiKey) {
            throw new Error("Missing API key in lotr-sdk client!")
        }

        return { headers: { Authorization: `Bearer ${this.apiKey}` } }
    }

    private formatUrl(url: string): string {
        return `${this.baseUrl}/${this.apiVersion}/${url}`;
    }
}
