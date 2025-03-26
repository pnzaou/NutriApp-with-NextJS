import { foods } from "@/data";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const GET = async (_req: NextRequest, context: { params: { name: string } }) => {
    const { name } = context.params;
    const index = foods.findIndex((food) => food.name.toLowerCase().replace(/ /g, '-') === name);

    if (index === -1) {
        return NextResponse.json(
            { message: "Aliment introuvable!" },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { data: foods[index] },
        { status: 200 }
    );
};
