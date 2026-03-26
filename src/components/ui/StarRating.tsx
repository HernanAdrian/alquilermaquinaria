import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${star <= Math.round(rating) ? 'text-primary fill-primary' : 'text-neutral-200'}`}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
