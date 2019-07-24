export interface JwtResponse {
    user: {
        id: number,
        name: string,
        username: string;
        email: string,
        access_token: string,
        expires_in: number
    }
}