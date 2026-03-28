interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
