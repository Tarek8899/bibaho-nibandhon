import { redirect } from "next/navigation";
import prisma from "@/prisma/prisma";
import { auth } from "@/auth";
import SuccessClient from "./SuccessClient";

export default async function MarriageApplicationSuccessPage({ searchParams }) {
    const session = await auth();
    if (!session || session.user.role !== "USER") {
        redirect("/login");
    }

    const { applicationId } = searchParams;

    if (!applicationId) {
        redirect("/user/dashboard");
    }

    const application = await prisma.marriageApplication.findUnique({
        where: { id: applicationId },
        include: {
            kaji: true
        }
    });

    if (!application || application.userId !== session.user.id) {
        redirect("/user/dashboard");
    }

    // Convert date to readable format
    const formattedApplication = {
        ...application,
        marriageDate: application.marriageDate.toISOString(),
        createdAt: application.createdAt.toISOString(),
        updatedAt: application.updatedAt.toISOString(),
        kaji: application.kaji ? {
            ...application.kaji,
            createdAt: application.kaji.createdAt?.toISOString(),
            updatedAt: application.kaji.updatedAt?.toISOString()
        } : null
    };

    return <SuccessClient application={formattedApplication} />;
}
