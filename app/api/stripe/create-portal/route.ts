import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/lib/auth";
import connectMongo from "@/lib/mongoose";
import { createCustomerPortal } from "@/lib/stripe";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  const session = await auth();

  if (session) {
    try {
      await connectMongo();

      const body = await req.json();

      const { id } = session.user!;

      const user = await User.findById(id);

      if (!user?.customerId) {
        return NextResponse.json(
          {
            error:
              "You don't have a billing account yet. Make a purchase first.",
          },
          { status: 400 }
        );
      } else if (!body.returnUrl) {
        return NextResponse.json(
          { error: "Return URL is required" },
          { status: 400 }
        );
      }

      const stripePortalUrl = await createCustomerPortal({
        customerId: user.customerId,
        returnUrl: body.returnUrl,
      });

      return NextResponse.json({
        url: stripePortalUrl,
      });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: e?.message }, { status: 500 });
    }
  } else {
    // Not Signed in
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}