import GoogleMap from './GoogleMap';

export default function LocationSectionMap() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <p className="text-red-500">A chave da API do Google Maps não foi encontrada.</p>
      </div>
    );
  }
  return <GoogleMap apiKey={apiKey} />;
}
