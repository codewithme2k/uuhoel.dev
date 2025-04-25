import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Link } from "@/components/ui/link";
import { Twemoji } from "@/components/ui/twemoji";

import Image from "next/image";

export default function NotFound() {
  return (
    <Container className="pt-4 lg:pt-12">
      <div className="flex flex-col items-center justify-center py-6">
        <Image
          src={"/icons/404.svg"}
          width={50}
          height={50}
          className={
            "mx-auto aspect-square w-[300px] max-w-[80vw] md:w-[500px]"
          }
          alt="Page not found"
        />
        <div className="space-x-2 pt-8 md:space-y-5 md:pt-12 xl:pt-16">
          <div className="max-w-md text-center">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              Hmm... it looks like you&apos;re lost.
              <Twemoji emoji={"face-with-monocle"} />
            </p>
            <p className="mb-8">
              But don&apos;t worry, you can find plenty of other things on my
              homepage.
            </p>
            <Link href="/">
              <Button>Back to homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
