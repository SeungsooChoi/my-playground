import { CsvViewer } from "@/components/csv-viewer/CsvViewer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <section className="max-w-5xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">
            CSV 렌더링 성능 뷰어
          </h1>
          <p className="text-gray-600 mt-2">
            CSV 파일을 업로드하여 렌더링 성능 데이터를 분석합니다.
          </p>
        </header>

        <CsvViewer />
      </section>
    </main>
  );
}
