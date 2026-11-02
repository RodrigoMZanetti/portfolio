import { ArrowLeftIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-8xl font-bold text-accent sm:text-9xl">404</p>
      <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md leading-7 text-foreground/80">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/" className="mt-10">
        <ArrowLeftIcon className="size-5" />
        Back to home
      </Button>
    </main>
  );
}
