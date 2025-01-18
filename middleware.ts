// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//     const token = request.cookies.get("token");

//     if (!token) {
//         // Wenn kein Token vorhanden ist, leite auf die Login-Seite um
//         return NextResponse.redirect(new URL("/", request.url));
//     }

//     // Wenn ein Token vorhanden ist, die Anfrage zulassen
//     return NextResponse.next();
// }

// // Definiere die Routen, für die die Middleware gilt
// export const config = {
//     matcher: ["/dashboard/:path*"],
// };
