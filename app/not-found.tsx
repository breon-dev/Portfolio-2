import { headers } from "next/headers";

//Components
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  // Get the host from the headers
  const host: string = headers().get("host") || "";

  //Gets the path of the not found resource
  const notFoundPath: string = new URL(
    headers().get("referer") || "/",
    `http://${host}`
  ).pathname;

  return (
    <main className="flex h-screen bg-white justify-center">
      <section className="flex justify-center items-center h-[500px]">
        <section className="text-black w-[390px] h-[180px] mr-[30px] flex flex-col gap-6 text-sm">
          <Link href="/" aria-label="Link that contains the Google Logo Image">
            <Image
              src="/assets/coloured-logo.png"
              width={160}
              height={58}
              alt="Coloured version of the Google Logo"
            />
          </Link>
          <p className=" text-gray-500">
            <code className="font-semibold text-black">404.</code> That's an
            error
          </p>
          <p>
            The requested URL {notFoundPath} was not found on this server.{" "}
            <span className="text-gray-500">That's all we know.</span>
          </p>
        </section>
        <section>
          <Image
            src="/assets/robot.png"
            height={180}
            width={180}
            className="object-contain"
            alt="Robot that has been broken apart"
          />
        </section>
      </section>
    </main>
  );
}
