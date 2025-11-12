import { ChangeEvent } from 'react';
import { Input } from '../ui/input';

interface CsvUploaderProps {
  onUpload: (file:File) => void;
}

function CsvUploader({ onUpload }: CsvUploaderProps) {
  const handleUpload = (e:ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(file);
  }

  return (
    <div className="flex gap-3 items-center">
      <Input
        type="file"
        accept=".csv"
        onChange={handleUpload}
        data-testid="csv-input"
      />
    </div>
  )
}

export default CsvUploader