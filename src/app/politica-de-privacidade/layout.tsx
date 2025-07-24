import SimpleHeader from '@/components/SimpleHeader';

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SimpleHeader />
      {children}
    </>
  );
}
