interface StatCardProps {
  label: string;
  value: number;
  accent?: "green" | "purple" | "pink";
}

const StatCard = ({ label, value, accent }: StatCardProps) => {
  const accentColors = {
    green: "border-green-500/20",
    purple: "border-purple-500/20",
    pink: "border-pink-500/20",
  };

  return (
    <div
      className={`bg-white/5 border ${
        accent ? accentColors[accent] : "border-white/10"
      } rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]`}
    >
      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className="text-3xl font-light text-white">{value}</p>
    </div>
  );
};

export default StatCard;
