import { foods } from "@/data";
import { NextResponse } from "next/server";

export const GET = async () => {
    return NextResponse.json({foods}, {status: 200})
}