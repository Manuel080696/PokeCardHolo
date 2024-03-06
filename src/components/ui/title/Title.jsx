import { titleFont } from "@/config/fonts";

export const Title = ({ title, subtitle, className }) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-6xl font-semibold my-7 text-white`}
      >
        {title}
      </h1>
      {subtitle && (
        <h3 className="text-xl mb-5 text-white text-center">{subtitle}</h3>
      )}
    </div>
  );
};
