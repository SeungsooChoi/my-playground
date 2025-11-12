import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

interface CsvTableProps {
  headers: string[];
  rows: string[][];
}

function CsvTable({ headers, rows }: CsvTableProps) {
  return (
    <Table className="border rounded-lg overflow-hidden">
      <TableHeader>
        <TableRow>
          {headers.map((header, i) => (
            <TableHead key={i}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={i}>
            {row.map((cell, j) => (
              <TableCell key={j}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CsvTable;
