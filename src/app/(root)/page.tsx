import LandingModules from '@/app/_components/LandingModules';

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <LandingModules />
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://adventlabs.ng"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Adventlabs
          </a>
        </p>
      </footer>
    </div>
  );
}
