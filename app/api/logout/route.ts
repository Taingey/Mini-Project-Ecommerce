import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Create a POST request handler
export async function POST() {
    // Get the refresh token from the client-side cookies
    const cookieName = process.env.COOKIE_REFRESH_TOKEN_NAME || "refresh";
    const cookieStore = cookies();
    const credential = cookieStore.get(cookieName);

    if (!credential) {
        return NextResponse.json(
            {
                message: "Token not found",
            },
            {
                status: 400,
            }
        );
    }

    const refreshToken = credential.value;
    if (refreshToken) {
        cookieStore.delete(cookieName)

        return NextResponse.json(
            {
                message: "Logout successful",
            },
            {
                status: 200,
 
            }
        )
    }
}