import {describe, expect, test} from 'vitest';
import { render, screen } from "@testing-library/svelte";
import ResultItem from '../../tutorial/ResultItem.svelte';

describe("ResultItem", () => {
  const resultItemMiddle = { index: 1, text: 'some text', cos: 0.5 };

  test("shows the ResultItem text,index,cos when rendered", () => {
    render(ResultItem, { props: { ...resultItemMiddle } });

    const element = screen.getByText(/some text/i)

    expect(element).toBeTruthy();
  });
});