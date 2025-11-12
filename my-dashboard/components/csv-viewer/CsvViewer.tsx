"use client";

import { useState } from "react";
import Papa from "papaparse";
import CsvUploader from "./CsvUploader";
import CsvTable from "./CsvTable";

export interface CsvData {
  headers: string[];
  rows: string[][];
}

export function CsvViewer() {
  const [data, setData] = useState<CsvData | null>(null);

  const handleFileUpload = (file: File) => {
    Papa.parse(file, {
      complete: (result) => {
        const rows = result.data as string[][];
        const headers = rows[0];
        setData({ headers, rows: rows.slice(1) });
      },
      error: (err) => console.error("CSV Parse Error:", err),
    });
  };

  return (
    <div className="space-y-6 p-6">
      <CsvUploader onUpload={handleFileUpload} />
      {data && <CsvTable headers={data.headers} rows={data.rows} />}
    </div>
  );
}
