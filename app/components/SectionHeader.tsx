interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-display leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto font-body text-lg leading-relaxed">{subtitle}</p>
      )}
      <div className={`h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}