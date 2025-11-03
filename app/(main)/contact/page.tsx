//Components
import { GoogleWebResult } from "@/components/google-components/google-webresult";

//Constants
import { contactLinks } from "@/constants/contact-links";

export default function Contact() {
  return (
    <main className="mx-[170px] pl-4 text-white flex pt-4">
      <section className="max-w-[750px]">
        {contactLinks.map((values, index: number) => (
          <GoogleWebResult {...values} key={index} />
        ))}
      </section>
    </main>
  );
}
