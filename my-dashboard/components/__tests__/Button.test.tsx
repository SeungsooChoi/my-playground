import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@/components/ui/button";

// 테스트 그룹
describe("Button Component", () => {
  it("텍스트와 함께 렌더링되었는지", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("클릭 이벤트 동작", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disabled 작동여부", () => {
    render(
      <Button disabled>Disabled</Button>
    );

    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
  });

  it("추가 css가 작동하는지", () => {
    render(<Button className="bg-red-500">Styled</Button>);
    const button = screen.getByText("Styled");
    expect(button).toHaveClass("bg-red-500");
  });
});
