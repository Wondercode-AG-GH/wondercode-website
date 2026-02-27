import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const cookieStore = await cookies();
  const preferredLanguage = cookieStore.get("preferredLanguage")?.value;
  console.log("Preferred language from cookie:", preferredLanguage);

  if (preferredLanguage === "en" || preferredLanguage === "de") {
    redirect(`/${preferredLanguage}`);
  }

  redirect("/de");
}
