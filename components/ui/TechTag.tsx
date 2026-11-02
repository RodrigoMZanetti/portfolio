export function TechTag({ name }: { name: string }) {
  return (
    <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-sm text-foreground">
      {name}
    </span>
  );
}
