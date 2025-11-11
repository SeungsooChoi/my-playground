import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-10">
      <Card className="p-6 max-w-sm">
        <CardContent>
          <p className="mb-4 text-lg font-medium">shadcn/ui Test</p>
          <Button>Click Me</Button>
        </CardContent>
      </Card>
    </main>
  );
}
