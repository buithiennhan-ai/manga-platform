export default function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-primary uppercase tracking-wide">{subtitle}</p>
      <h2 className="text-3xl font-bold text-dark">{title}</h2>
    </div>
  );
}
