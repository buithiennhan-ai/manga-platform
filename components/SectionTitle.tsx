export default function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-orange-300">{subtitle}</p>
        <h2 className="mt-2 text-3xl font-black text-white">{title}</h2>
      </div>
    </div>
  );
}
